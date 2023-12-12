import { openBlock as ft, createElementBlock as bt, createElementVNode as ve, defineComponent as Wi, watch as Yi, computed as k0, ref as Tt, Fragment as A0, createVNode as Re, unref as Ne, normalizeClass as n0, createSlots as Vi, withCtx as We, renderSlot as Ki, toDisplayString as i0, withDirectives as R0, createTextVNode as Gi, vShow as N0, createCommentVNode as T0, renderList as Zi, normalizeStyle as Xi, createBlock as ji, pushScopeId as Qi, popScopeId as Ji } from "vue";
import { ElUpload as eo, ElIcon as xt, ElImage as to, ElImageViewer as ro } from "element-plus";
import { Plus as no, ZoomIn as io, Download as oo, Delete as so, Close as ao, Refresh as co } from "@element-plus/icons-vue";
import * as fo from "lodash-es";
const uo = (e, r) => {
  if (e.install = (t) => {
    for (const n of [e, ...Object.values(r ?? {})])
      t.component(n.name, n);
  }, r)
    for (const [t, n] of Object.entries(r))
      e[t] = n;
  return e;
};
var re = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function lo(e) {
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
var D0 = {}, ho = {
  get exports() {
    return D0;
  },
  set exports(e) {
    D0 = e;
  }
};
function Ot(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Jt = {}, vo = {
  get exports() {
    return Jt;
  },
  set exports(e) {
    Jt = e;
  }
};
const po = {}, xo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: po
}, Symbol.toStringTag, { value: "Module" })), bo = /* @__PURE__ */ lo(xo);
var O0;
function ce() {
  return O0 || (O0 = 1, function(e, r) {
    (function(t, n) {
      e.exports = n();
    })(re, function() {
      var t = t || function(n, i) {
        var o;
        if (typeof window < "u" && window.crypto && (o = window.crypto), typeof self < "u" && self.crypto && (o = self.crypto), typeof globalThis < "u" && globalThis.crypto && (o = globalThis.crypto), !o && typeof window < "u" && window.msCrypto && (o = window.msCrypto), !o && typeof re < "u" && re.crypto && (o = re.crypto), !o && typeof Ot == "function")
          try {
            o = bo;
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
        }(), h = s.WordArray = f.extend({
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
            var d = this.words, x = _.words, m = this.sigBytes, y = _.sigBytes;
            if (this.clamp(), m % 4)
              for (var S = 0; S < y; S++) {
                var B = x[S >>> 2] >>> 24 - S % 4 * 8 & 255;
                d[m + S >>> 2] |= B << 24 - (m + S) % 4 * 8;
              }
            else
              for (var O = 0; O < y; O += 4)
                d[m + O >>> 2] = x[O >>> 2];
            return this.sigBytes += y, this;
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
            for (var d = [], x = 0; x < _; x += 4)
              d.push(a());
            return new h.init(d, _);
          }
        }), u = l.enc = {}, p = u.Hex = {
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
            for (var d = _.words, x = _.sigBytes, m = [], y = 0; y < x; y++) {
              var S = d[y >>> 2] >>> 24 - y % 4 * 8 & 255;
              m.push((S >>> 4).toString(16)), m.push((S & 15).toString(16));
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
          parse: function(_) {
            for (var d = _.length, x = [], m = 0; m < d; m += 2)
              x[m >>> 3] |= parseInt(_.substr(m, 2), 16) << 24 - m % 8 * 4;
            return new h.init(x, d / 2);
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
          stringify: function(_) {
            for (var d = _.words, x = _.sigBytes, m = [], y = 0; y < x; y++) {
              var S = d[y >>> 2] >>> 24 - y % 4 * 8 & 255;
              m.push(String.fromCharCode(S));
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
          parse: function(_) {
            for (var d = _.length, x = [], m = 0; m < d; m++)
              x[m >>> 2] |= (_.charCodeAt(m) & 255) << 24 - m % 4 * 8;
            return new h.init(x, d);
          }
        }, w = u.Utf8 = {
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
              return decodeURIComponent(escape(g.stringify(_)));
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
            return g.parse(unescape(encodeURIComponent(_)));
          }
        }, C = s.BufferedBlockAlgorithm = f.extend({
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
            typeof _ == "string" && (_ = w.parse(_)), this._data.concat(_), this._nDataBytes += _.sigBytes;
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
            var d, x = this._data, m = x.words, y = x.sigBytes, S = this.blockSize, B = S * 4, O = y / B;
            _ ? O = n.ceil(O) : O = n.max((O | 0) - this._minBufferSize, 0);
            var E = O * S, A = n.min(E * 4, y);
            if (E) {
              for (var I = 0; I < E; I += S)
                this._doProcessBlock(m, I);
              d = m.splice(0, E), x.sigBytes -= A;
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
            var _ = f.clone.call(this);
            return _._data = this._data.clone(), _;
          },
          _minBufferSize: 0
        });
        s.Hasher = C.extend({
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
            C.reset.call(this), this._doReset();
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
        var T = l.algo = {};
        return l;
      }(Math);
      return t;
    });
  }(vo)), Jt;
}
var er = {}, go = {
  get exports() {
    return er;
  },
  set exports(e) {
    er = e;
  }
}, L0;
function Hr() {
  return L0 || (L0 = 1, function(e, r) {
    (function(t, n) {
      e.exports = n(ce());
    })(re, function(t) {
      return function(n) {
        var i = t, o = i.lib, a = o.Base, c = o.WordArray, l = i.x64 = {};
        l.Word = a.extend({
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
        }), l.WordArray = a.extend({
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
            for (var s = this.words, f = s.length, h = [], u = 0; u < f; u++) {
              var p = s[u];
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
            for (var s = a.clone.call(this), f = s.words = this.words.slice(0), h = f.length, u = 0; u < h; u++)
              f[u] = f[u].clone();
            return s;
          }
        });
      }(), t;
    });
  }(go)), er;
}
var tr = {}, mo = {
  get exports() {
    return tr;
  },
  set exports(e) {
    tr = e;
  }
}, I0;
function yo() {
  return I0 || (I0 = 1, function(e, r) {
    (function(t, n) {
      e.exports = n(ce());
    })(re, function(t) {
      return function() {
        if (typeof ArrayBuffer == "function") {
          var n = t, i = n.lib, o = i.WordArray, a = o.init, c = o.init = function(l) {
            if (l instanceof ArrayBuffer && (l = new Uint8Array(l)), (l instanceof Int8Array || typeof Uint8ClampedArray < "u" && l instanceof Uint8ClampedArray || l instanceof Int16Array || l instanceof Uint16Array || l instanceof Int32Array || l instanceof Uint32Array || l instanceof Float32Array || l instanceof Float64Array) && (l = new Uint8Array(l.buffer, l.byteOffset, l.byteLength)), l instanceof Uint8Array) {
              for (var s = l.byteLength, f = [], h = 0; h < s; h++)
                f[h >>> 2] |= l[h] << 24 - h % 4 * 8;
              a.call(this, f, s);
            } else
              a.apply(this, arguments);
          };
          c.prototype = o;
        }
      }(), t.lib.WordArray;
    });
  }(mo)), tr;
}
var rr = {}, _o = {
  get exports() {
    return rr;
  },
  set exports(e) {
    rr = e;
  }
}, P0;
function wo() {
  return P0 || (P0 = 1, function(e, r) {
    (function(t, n) {
      e.exports = n(ce());
    })(re, function(t) {
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
          stringify: function(l) {
            for (var s = l.words, f = l.sigBytes, h = [], u = 0; u < f; u += 2) {
              var p = s[u >>> 2] >>> 16 - u % 4 * 8 & 65535;
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
          parse: function(l) {
            for (var s = l.length, f = [], h = 0; h < s; h++)
              f[h >>> 1] |= l.charCodeAt(h) << 16 - h % 2 * 16;
            return o.create(f, s * 2);
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
          stringify: function(l) {
            for (var s = l.words, f = l.sigBytes, h = [], u = 0; u < f; u += 2) {
              var p = c(s[u >>> 2] >>> 16 - u % 4 * 8 & 65535);
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
          parse: function(l) {
            for (var s = l.length, f = [], h = 0; h < s; h++)
              f[h >>> 1] |= c(l.charCodeAt(h) << 16 - h % 2 * 16);
            return o.create(f, s * 2);
          }
        };
        function c(l) {
          return l << 8 & 4278255360 | l >>> 8 & 16711935;
        }
      }(), t.enc.Utf16;
    });
  }(_o)), rr;
}
var nr = {}, Eo = {
  get exports() {
    return nr;
  },
  set exports(e) {
    nr = e;
  }
}, M0;
function lt() {
  return M0 || (M0 = 1, function(e, r) {
    (function(t, n) {
      e.exports = n(ce());
    })(re, function(t) {
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
          stringify: function(l) {
            var s = l.words, f = l.sigBytes, h = this._map;
            l.clamp();
            for (var u = [], p = 0; p < f; p += 3)
              for (var g = s[p >>> 2] >>> 24 - p % 4 * 8 & 255, w = s[p + 1 >>> 2] >>> 24 - (p + 1) % 4 * 8 & 255, C = s[p + 2 >>> 2] >>> 24 - (p + 2) % 4 * 8 & 255, T = g << 16 | w << 8 | C, _ = 0; _ < 4 && p + _ * 0.75 < f; _++)
                u.push(h.charAt(T >>> 6 * (3 - _) & 63));
            var d = h.charAt(64);
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
          parse: function(l) {
            var s = l.length, f = this._map, h = this._reverseMap;
            if (!h) {
              h = this._reverseMap = [];
              for (var u = 0; u < f.length; u++)
                h[f.charCodeAt(u)] = u;
            }
            var p = f.charAt(64);
            if (p) {
              var g = l.indexOf(p);
              g !== -1 && (s = g);
            }
            return c(l, s, h);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        };
        function c(l, s, f) {
          for (var h = [], u = 0, p = 0; p < s; p++)
            if (p % 4) {
              var g = f[l.charCodeAt(p - 1)] << p % 4 * 2, w = f[l.charCodeAt(p)] >>> 6 - p % 4 * 2, C = g | w;
              h[u >>> 2] |= C << 24 - u % 4 * 8, u++;
            }
          return o.create(h, u);
        }
      }(), t.enc.Base64;
    });
  }(Eo)), nr;
}
var ir = {}, So = {
  get exports() {
    return ir;
  },
  set exports(e) {
    ir = e;
  }
}, H0;
function Co() {
  return H0 || (H0 = 1, function(e, r) {
    (function(t, n) {
      e.exports = n(ce());
    })(re, function(t) {
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
          stringify: function(l, s = !0) {
            var f = l.words, h = l.sigBytes, u = s ? this._safe_map : this._map;
            l.clamp();
            for (var p = [], g = 0; g < h; g += 3)
              for (var w = f[g >>> 2] >>> 24 - g % 4 * 8 & 255, C = f[g + 1 >>> 2] >>> 24 - (g + 1) % 4 * 8 & 255, T = f[g + 2 >>> 2] >>> 24 - (g + 2) % 4 * 8 & 255, _ = w << 16 | C << 8 | T, d = 0; d < 4 && g + d * 0.75 < h; d++)
                p.push(u.charAt(_ >>> 6 * (3 - d) & 63));
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
          parse: function(l, s = !0) {
            var f = l.length, h = s ? this._safe_map : this._map, u = this._reverseMap;
            if (!u) {
              u = this._reverseMap = [];
              for (var p = 0; p < h.length; p++)
                u[h.charCodeAt(p)] = p;
            }
            var g = h.charAt(64);
            if (g) {
              var w = l.indexOf(g);
              w !== -1 && (f = w);
            }
            return c(l, f, u);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
        };
        function c(l, s, f) {
          for (var h = [], u = 0, p = 0; p < s; p++)
            if (p % 4) {
              var g = f[l.charCodeAt(p - 1)] << p % 4 * 2, w = f[l.charCodeAt(p)] >>> 6 - p % 4 * 2, C = g | w;
              h[u >>> 2] |= C << 24 - u % 4 * 8, u++;
            }
          return o.create(h, u);
        }
      }(), t.enc.Base64url;
    });
  }(So)), ir;
}
var or = {}, Bo = {
  get exports() {
    return or;
  },
  set exports(e) {
    or = e;
  }
}, F0;
function ht() {
  return F0 || (F0 = 1, function(e, r) {
    (function(t, n) {
      e.exports = n(ce());
    })(re, function(t) {
      return function(n) {
        var i = t, o = i.lib, a = o.WordArray, c = o.Hasher, l = i.algo, s = [];
        (function() {
          for (var w = 0; w < 64; w++)
            s[w] = n.abs(n.sin(w + 1)) * 4294967296 | 0;
        })();
        var f = l.MD5 = c.extend({
          _doReset: function() {
            this._hash = new a.init([
              1732584193,
              4023233417,
              2562383102,
              271733878
            ]);
          },
          _doProcessBlock: function(w, C) {
            for (var T = 0; T < 16; T++) {
              var _ = C + T, d = w[_];
              w[_] = (d << 8 | d >>> 24) & 16711935 | (d << 24 | d >>> 8) & 4278255360;
            }
            var x = this._hash.words, m = w[C + 0], y = w[C + 1], S = w[C + 2], B = w[C + 3], O = w[C + 4], E = w[C + 5], A = w[C + 6], I = w[C + 7], L = w[C + 8], H = w[C + 9], P = w[C + 10], q = w[C + 11], Y = w[C + 12], X = w[C + 13], j = w[C + 14], J = w[C + 15], M = x[0], F = x[1], $ = x[2], U = x[3];
            M = h(M, F, $, U, m, 7, s[0]), U = h(U, M, F, $, y, 12, s[1]), $ = h($, U, M, F, S, 17, s[2]), F = h(F, $, U, M, B, 22, s[3]), M = h(M, F, $, U, O, 7, s[4]), U = h(U, M, F, $, E, 12, s[5]), $ = h($, U, M, F, A, 17, s[6]), F = h(F, $, U, M, I, 22, s[7]), M = h(M, F, $, U, L, 7, s[8]), U = h(U, M, F, $, H, 12, s[9]), $ = h($, U, M, F, P, 17, s[10]), F = h(F, $, U, M, q, 22, s[11]), M = h(M, F, $, U, Y, 7, s[12]), U = h(U, M, F, $, X, 12, s[13]), $ = h($, U, M, F, j, 17, s[14]), F = h(F, $, U, M, J, 22, s[15]), M = u(M, F, $, U, y, 5, s[16]), U = u(U, M, F, $, A, 9, s[17]), $ = u($, U, M, F, q, 14, s[18]), F = u(F, $, U, M, m, 20, s[19]), M = u(M, F, $, U, E, 5, s[20]), U = u(U, M, F, $, P, 9, s[21]), $ = u($, U, M, F, J, 14, s[22]), F = u(F, $, U, M, O, 20, s[23]), M = u(M, F, $, U, H, 5, s[24]), U = u(U, M, F, $, j, 9, s[25]), $ = u($, U, M, F, B, 14, s[26]), F = u(F, $, U, M, L, 20, s[27]), M = u(M, F, $, U, X, 5, s[28]), U = u(U, M, F, $, S, 9, s[29]), $ = u($, U, M, F, I, 14, s[30]), F = u(F, $, U, M, Y, 20, s[31]), M = p(M, F, $, U, E, 4, s[32]), U = p(U, M, F, $, L, 11, s[33]), $ = p($, U, M, F, q, 16, s[34]), F = p(F, $, U, M, j, 23, s[35]), M = p(M, F, $, U, y, 4, s[36]), U = p(U, M, F, $, O, 11, s[37]), $ = p($, U, M, F, I, 16, s[38]), F = p(F, $, U, M, P, 23, s[39]), M = p(M, F, $, U, X, 4, s[40]), U = p(U, M, F, $, m, 11, s[41]), $ = p($, U, M, F, B, 16, s[42]), F = p(F, $, U, M, A, 23, s[43]), M = p(M, F, $, U, H, 4, s[44]), U = p(U, M, F, $, Y, 11, s[45]), $ = p($, U, M, F, J, 16, s[46]), F = p(F, $, U, M, S, 23, s[47]), M = g(M, F, $, U, m, 6, s[48]), U = g(U, M, F, $, I, 10, s[49]), $ = g($, U, M, F, j, 15, s[50]), F = g(F, $, U, M, E, 21, s[51]), M = g(M, F, $, U, Y, 6, s[52]), U = g(U, M, F, $, B, 10, s[53]), $ = g($, U, M, F, P, 15, s[54]), F = g(F, $, U, M, y, 21, s[55]), M = g(M, F, $, U, L, 6, s[56]), U = g(U, M, F, $, J, 10, s[57]), $ = g($, U, M, F, A, 15, s[58]), F = g(F, $, U, M, X, 21, s[59]), M = g(M, F, $, U, O, 6, s[60]), U = g(U, M, F, $, q, 10, s[61]), $ = g($, U, M, F, S, 15, s[62]), F = g(F, $, U, M, H, 21, s[63]), x[0] = x[0] + M | 0, x[1] = x[1] + F | 0, x[2] = x[2] + $ | 0, x[3] = x[3] + U | 0;
          },
          _doFinalize: function() {
            var w = this._data, C = w.words, T = this._nDataBytes * 8, _ = w.sigBytes * 8;
            C[_ >>> 5] |= 128 << 24 - _ % 32;
            var d = n.floor(T / 4294967296), x = T;
            C[(_ + 64 >>> 9 << 4) + 15] = (d << 8 | d >>> 24) & 16711935 | (d << 24 | d >>> 8) & 4278255360, C[(_ + 64 >>> 9 << 4) + 14] = (x << 8 | x >>> 24) & 16711935 | (x << 24 | x >>> 8) & 4278255360, w.sigBytes = (C.length + 1) * 4, this._process();
            for (var m = this._hash, y = m.words, S = 0; S < 4; S++) {
              var B = y[S];
              y[S] = (B << 8 | B >>> 24) & 16711935 | (B << 24 | B >>> 8) & 4278255360;
            }
            return m;
          },
          clone: function() {
            var w = c.clone.call(this);
            return w._hash = this._hash.clone(), w;
          }
        });
        function h(w, C, T, _, d, x, m) {
          var y = w + (C & T | ~C & _) + d + m;
          return (y << x | y >>> 32 - x) + C;
        }
        function u(w, C, T, _, d, x, m) {
          var y = w + (C & _ | T & ~_) + d + m;
          return (y << x | y >>> 32 - x) + C;
        }
        function p(w, C, T, _, d, x, m) {
          var y = w + (C ^ T ^ _) + d + m;
          return (y << x | y >>> 32 - x) + C;
        }
        function g(w, C, T, _, d, x, m) {
          var y = w + (T ^ (C | ~_)) + d + m;
          return (y << x | y >>> 32 - x) + C;
        }
        i.MD5 = c._createHelper(f), i.HmacMD5 = c._createHmacHelper(f);
      }(Math), t.MD5;
    });
  }(Bo)), or;
}
var sr = {}, ko = {
  get exports() {
    return sr;
  },
  set exports(e) {
    sr = e;
  }
}, z0;
function m0() {
  return z0 || (z0 = 1, function(e, r) {
    (function(t, n) {
      e.exports = n(ce());
    })(re, function(t) {
      return function() {
        var n = t, i = n.lib, o = i.WordArray, a = i.Hasher, c = n.algo, l = [], s = c.SHA1 = a.extend({
          _doReset: function() {
            this._hash = new o.init([
              1732584193,
              4023233417,
              2562383102,
              271733878,
              3285377520
            ]);
          },
          _doProcessBlock: function(f, h) {
            for (var u = this._hash.words, p = u[0], g = u[1], w = u[2], C = u[3], T = u[4], _ = 0; _ < 80; _++) {
              if (_ < 16)
                l[_] = f[h + _] | 0;
              else {
                var d = l[_ - 3] ^ l[_ - 8] ^ l[_ - 14] ^ l[_ - 16];
                l[_] = d << 1 | d >>> 31;
              }
              var x = (p << 5 | p >>> 27) + T + l[_];
              _ < 20 ? x += (g & w | ~g & C) + 1518500249 : _ < 40 ? x += (g ^ w ^ C) + 1859775393 : _ < 60 ? x += (g & w | g & C | w & C) - 1894007588 : x += (g ^ w ^ C) - 899497514, T = C, C = w, w = g << 30 | g >>> 2, g = p, p = x;
            }
            u[0] = u[0] + p | 0, u[1] = u[1] + g | 0, u[2] = u[2] + w | 0, u[3] = u[3] + C | 0, u[4] = u[4] + T | 0;
          },
          _doFinalize: function() {
            var f = this._data, h = f.words, u = this._nDataBytes * 8, p = f.sigBytes * 8;
            return h[p >>> 5] |= 128 << 24 - p % 32, h[(p + 64 >>> 9 << 4) + 14] = Math.floor(u / 4294967296), h[(p + 64 >>> 9 << 4) + 15] = u, f.sigBytes = h.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var f = a.clone.call(this);
            return f._hash = this._hash.clone(), f;
          }
        });
        n.SHA1 = a._createHelper(s), n.HmacSHA1 = a._createHmacHelper(s);
      }(), t.SHA1;
    });
  }(ko)), sr;
}
var ar = {}, Ao = {
  get exports() {
    return ar;
  },
  set exports(e) {
    ar = e;
  }
}, q0;
function In() {
  return q0 || (q0 = 1, function(e, r) {
    (function(t, n) {
      e.exports = n(ce());
    })(re, function(t) {
      return function(n) {
        var i = t, o = i.lib, a = o.WordArray, c = o.Hasher, l = i.algo, s = [], f = [];
        (function() {
          function p(T) {
            for (var _ = n.sqrt(T), d = 2; d <= _; d++)
              if (!(T % d))
                return !1;
            return !0;
          }
          function g(T) {
            return (T - (T | 0)) * 4294967296 | 0;
          }
          for (var w = 2, C = 0; C < 64; )
            p(w) && (C < 8 && (s[C] = g(n.pow(w, 1 / 2))), f[C] = g(n.pow(w, 1 / 3)), C++), w++;
        })();
        var h = [], u = l.SHA256 = c.extend({
          _doReset: function() {
            this._hash = new a.init(s.slice(0));
          },
          _doProcessBlock: function(p, g) {
            for (var w = this._hash.words, C = w[0], T = w[1], _ = w[2], d = w[3], x = w[4], m = w[5], y = w[6], S = w[7], B = 0; B < 64; B++) {
              if (B < 16)
                h[B] = p[g + B] | 0;
              else {
                var O = h[B - 15], E = (O << 25 | O >>> 7) ^ (O << 14 | O >>> 18) ^ O >>> 3, A = h[B - 2], I = (A << 15 | A >>> 17) ^ (A << 13 | A >>> 19) ^ A >>> 10;
                h[B] = E + h[B - 7] + I + h[B - 16];
              }
              var L = x & m ^ ~x & y, H = C & T ^ C & _ ^ T & _, P = (C << 30 | C >>> 2) ^ (C << 19 | C >>> 13) ^ (C << 10 | C >>> 22), q = (x << 26 | x >>> 6) ^ (x << 21 | x >>> 11) ^ (x << 7 | x >>> 25), Y = S + q + L + f[B] + h[B], X = P + H;
              S = y, y = m, m = x, x = d + Y | 0, d = _, _ = T, T = C, C = Y + X | 0;
            }
            w[0] = w[0] + C | 0, w[1] = w[1] + T | 0, w[2] = w[2] + _ | 0, w[3] = w[3] + d | 0, w[4] = w[4] + x | 0, w[5] = w[5] + m | 0, w[6] = w[6] + y | 0, w[7] = w[7] + S | 0;
          },
          _doFinalize: function() {
            var p = this._data, g = p.words, w = this._nDataBytes * 8, C = p.sigBytes * 8;
            return g[C >>> 5] |= 128 << 24 - C % 32, g[(C + 64 >>> 9 << 4) + 14] = n.floor(w / 4294967296), g[(C + 64 >>> 9 << 4) + 15] = w, p.sigBytes = g.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var p = c.clone.call(this);
            return p._hash = this._hash.clone(), p;
          }
        });
        i.SHA256 = c._createHelper(u), i.HmacSHA256 = c._createHmacHelper(u);
      }(Math), t.SHA256;
    });
  }(Ao)), ar;
}
var cr = {}, Ro = {
  get exports() {
    return cr;
  },
  set exports(e) {
    cr = e;
  }
}, $0;
function No() {
  return $0 || ($0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ce(), In());
    })(re, function(t) {
      return function() {
        var n = t, i = n.lib, o = i.WordArray, a = n.algo, c = a.SHA256, l = a.SHA224 = c.extend({
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
        n.SHA224 = c._createHelper(l), n.HmacSHA224 = c._createHmacHelper(l);
      }(), t.SHA224;
    });
  }(Ro)), cr;
}
var fr = {}, To = {
  get exports() {
    return fr;
  },
  set exports(e) {
    fr = e;
  }
}, U0;
function Pn() {
  return U0 || (U0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ce(), Hr());
    })(re, function(t) {
      return function() {
        var n = t, i = n.lib, o = i.Hasher, a = n.x64, c = a.Word, l = a.WordArray, s = n.algo;
        function f() {
          return c.create.apply(c, arguments);
        }
        var h = [
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
        ], u = [];
        (function() {
          for (var g = 0; g < 80; g++)
            u[g] = f();
        })();
        var p = s.SHA512 = o.extend({
          _doReset: function() {
            this._hash = new l.init([
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
          _doProcessBlock: function(g, w) {
            for (var C = this._hash.words, T = C[0], _ = C[1], d = C[2], x = C[3], m = C[4], y = C[5], S = C[6], B = C[7], O = T.high, E = T.low, A = _.high, I = _.low, L = d.high, H = d.low, P = x.high, q = x.low, Y = m.high, X = m.low, j = y.high, J = y.low, M = S.high, F = S.low, $ = B.high, U = B.low, ae = O, ue = E, pe = A, ne = I, xe = L, we = H, Ge = P, Le = q, De = Y, Ce = X, Oe = j, ot = J, st = M, $e = F, at = $, Ze = U, Be = 0; Be < 80; Be++) {
              var ke, Me, ct = u[Be];
              if (Be < 16)
                Me = ct.high = g[w + Be * 2] | 0, ke = ct.low = g[w + Be * 2 + 1] | 0;
              else {
                var Et = u[Be - 15], Xe = Et.high, Je = Et.low, Ht = (Xe >>> 1 | Je << 31) ^ (Xe >>> 8 | Je << 24) ^ Xe >>> 7, St = (Je >>> 1 | Xe << 31) ^ (Je >>> 8 | Xe << 24) ^ (Je >>> 7 | Xe << 25), Ct = u[Be - 2], je = Ct.high, et = Ct.low, Ft = (je >>> 19 | et << 13) ^ (je << 3 | et >>> 29) ^ je >>> 6, vt = (et >>> 19 | je << 13) ^ (et << 3 | je >>> 29) ^ (et >>> 6 | je << 26), zt = u[Be - 7], Wr = zt.high, Bt = zt.low, kt = u[Be - 16], Yr = kt.high, He = kt.low;
                ke = St + Bt, Me = Ht + Wr + (ke >>> 0 < St >>> 0 ? 1 : 0), ke = ke + vt, Me = Me + Ft + (ke >>> 0 < vt >>> 0 ? 1 : 0), ke = ke + He, Me = Me + Yr + (ke >>> 0 < He >>> 0 ? 1 : 0), ct.high = Me, ct.low = ke;
              }
              var Vr = De & Oe ^ ~De & st, qt = Ce & ot ^ ~Ce & $e, $t = ae & pe ^ ae & xe ^ pe & xe, Kr = ue & ne ^ ue & we ^ ne & we, Gr = (ae >>> 28 | ue << 4) ^ (ae << 30 | ue >>> 2) ^ (ae << 25 | ue >>> 7), Ut = (ue >>> 28 | ae << 4) ^ (ue << 30 | ae >>> 2) ^ (ue << 25 | ae >>> 7), Zr = (De >>> 14 | Ce << 18) ^ (De >>> 18 | Ce << 14) ^ (De << 23 | Ce >>> 9), Xr = (Ce >>> 14 | De << 18) ^ (Ce >>> 18 | De << 14) ^ (Ce << 23 | De >>> 9), Wt = h[Be], jr = Wt.high, Yt = Wt.low, Ae = Ze + Xr, Ue = at + Zr + (Ae >>> 0 < Ze >>> 0 ? 1 : 0), Ae = Ae + qt, Ue = Ue + Vr + (Ae >>> 0 < qt >>> 0 ? 1 : 0), Ae = Ae + Yt, Ue = Ue + jr + (Ae >>> 0 < Yt >>> 0 ? 1 : 0), Ae = Ae + ke, Ue = Ue + Me + (Ae >>> 0 < ke >>> 0 ? 1 : 0), At = Ut + Kr, Qr = Gr + $t + (At >>> 0 < Ut >>> 0 ? 1 : 0);
              at = st, Ze = $e, st = Oe, $e = ot, Oe = De, ot = Ce, Ce = Le + Ae | 0, De = Ge + Ue + (Ce >>> 0 < Le >>> 0 ? 1 : 0) | 0, Ge = xe, Le = we, xe = pe, we = ne, pe = ae, ne = ue, ue = Ae + At | 0, ae = Ue + Qr + (ue >>> 0 < Ae >>> 0 ? 1 : 0) | 0;
            }
            E = T.low = E + ue, T.high = O + ae + (E >>> 0 < ue >>> 0 ? 1 : 0), I = _.low = I + ne, _.high = A + pe + (I >>> 0 < ne >>> 0 ? 1 : 0), H = d.low = H + we, d.high = L + xe + (H >>> 0 < we >>> 0 ? 1 : 0), q = x.low = q + Le, x.high = P + Ge + (q >>> 0 < Le >>> 0 ? 1 : 0), X = m.low = X + Ce, m.high = Y + De + (X >>> 0 < Ce >>> 0 ? 1 : 0), J = y.low = J + ot, y.high = j + Oe + (J >>> 0 < ot >>> 0 ? 1 : 0), F = S.low = F + $e, S.high = M + st + (F >>> 0 < $e >>> 0 ? 1 : 0), U = B.low = U + Ze, B.high = $ + at + (U >>> 0 < Ze >>> 0 ? 1 : 0);
          },
          _doFinalize: function() {
            var g = this._data, w = g.words, C = this._nDataBytes * 8, T = g.sigBytes * 8;
            w[T >>> 5] |= 128 << 24 - T % 32, w[(T + 128 >>> 10 << 5) + 30] = Math.floor(C / 4294967296), w[(T + 128 >>> 10 << 5) + 31] = C, g.sigBytes = w.length * 4, this._process();
            var _ = this._hash.toX32();
            return _;
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
  }(To)), fr;
}
var ur = {}, Do = {
  get exports() {
    return ur;
  },
  set exports(e) {
    ur = e;
  }
}, W0;
function Oo() {
  return W0 || (W0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ce(), Hr(), Pn());
    })(re, function(t) {
      return function() {
        var n = t, i = n.x64, o = i.Word, a = i.WordArray, c = n.algo, l = c.SHA512, s = c.SHA384 = l.extend({
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
            var f = l._doFinalize.call(this);
            return f.sigBytes -= 16, f;
          }
        });
        n.SHA384 = l._createHelper(s), n.HmacSHA384 = l._createHmacHelper(s);
      }(), t.SHA384;
    });
  }(Do)), ur;
}
var lr = {}, Lo = {
  get exports() {
    return lr;
  },
  set exports(e) {
    lr = e;
  }
}, Y0;
function Io() {
  return Y0 || (Y0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ce(), Hr());
    })(re, function(t) {
      return function(n) {
        var i = t, o = i.lib, a = o.WordArray, c = o.Hasher, l = i.x64, s = l.Word, f = i.algo, h = [], u = [], p = [];
        (function() {
          for (var C = 1, T = 0, _ = 0; _ < 24; _++) {
            h[C + 5 * T] = (_ + 1) * (_ + 2) / 2 % 64;
            var d = T % 5, x = (2 * C + 3 * T) % 5;
            C = d, T = x;
          }
          for (var C = 0; C < 5; C++)
            for (var T = 0; T < 5; T++)
              u[C + 5 * T] = T + (2 * C + 3 * T) % 5 * 5;
          for (var m = 1, y = 0; y < 24; y++) {
            for (var S = 0, B = 0, O = 0; O < 7; O++) {
              if (m & 1) {
                var E = (1 << O) - 1;
                E < 32 ? B ^= 1 << E : S ^= 1 << E - 32;
              }
              m & 128 ? m = m << 1 ^ 113 : m <<= 1;
            }
            p[y] = s.create(S, B);
          }
        })();
        var g = [];
        (function() {
          for (var C = 0; C < 25; C++)
            g[C] = s.create();
        })();
        var w = f.SHA3 = c.extend({
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
            for (var C = this._state = [], T = 0; T < 25; T++)
              C[T] = new s.init();
            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
          },
          _doProcessBlock: function(C, T) {
            for (var _ = this._state, d = this.blockSize / 2, x = 0; x < d; x++) {
              var m = C[T + 2 * x], y = C[T + 2 * x + 1];
              m = (m << 8 | m >>> 24) & 16711935 | (m << 24 | m >>> 8) & 4278255360, y = (y << 8 | y >>> 24) & 16711935 | (y << 24 | y >>> 8) & 4278255360;
              var S = _[x];
              S.high ^= y, S.low ^= m;
            }
            for (var B = 0; B < 24; B++) {
              for (var O = 0; O < 5; O++) {
                for (var E = 0, A = 0, I = 0; I < 5; I++) {
                  var S = _[O + 5 * I];
                  E ^= S.high, A ^= S.low;
                }
                var L = g[O];
                L.high = E, L.low = A;
              }
              for (var O = 0; O < 5; O++)
                for (var H = g[(O + 4) % 5], P = g[(O + 1) % 5], q = P.high, Y = P.low, E = H.high ^ (q << 1 | Y >>> 31), A = H.low ^ (Y << 1 | q >>> 31), I = 0; I < 5; I++) {
                  var S = _[O + 5 * I];
                  S.high ^= E, S.low ^= A;
                }
              for (var X = 1; X < 25; X++) {
                var E, A, S = _[X], j = S.high, J = S.low, M = h[X];
                M < 32 ? (E = j << M | J >>> 32 - M, A = J << M | j >>> 32 - M) : (E = J << M - 32 | j >>> 64 - M, A = j << M - 32 | J >>> 64 - M);
                var F = g[u[X]];
                F.high = E, F.low = A;
              }
              var $ = g[0], U = _[0];
              $.high = U.high, $.low = U.low;
              for (var O = 0; O < 5; O++)
                for (var I = 0; I < 5; I++) {
                  var X = O + 5 * I, S = _[X], ae = g[X], ue = g[(O + 1) % 5 + 5 * I], pe = g[(O + 2) % 5 + 5 * I];
                  S.high = ae.high ^ ~ue.high & pe.high, S.low = ae.low ^ ~ue.low & pe.low;
                }
              var S = _[0], ne = p[B];
              S.high ^= ne.high, S.low ^= ne.low;
            }
          },
          _doFinalize: function() {
            var C = this._data, T = C.words;
            this._nDataBytes * 8;
            var _ = C.sigBytes * 8, d = this.blockSize * 32;
            T[_ >>> 5] |= 1 << 24 - _ % 32, T[(n.ceil((_ + 1) / d) * d >>> 5) - 1] |= 128, C.sigBytes = T.length * 4, this._process();
            for (var x = this._state, m = this.cfg.outputLength / 8, y = m / 8, S = [], B = 0; B < y; B++) {
              var O = x[B], E = O.high, A = O.low;
              E = (E << 8 | E >>> 24) & 16711935 | (E << 24 | E >>> 8) & 4278255360, A = (A << 8 | A >>> 24) & 16711935 | (A << 24 | A >>> 8) & 4278255360, S.push(A), S.push(E);
            }
            return new a.init(S, m);
          },
          clone: function() {
            for (var C = c.clone.call(this), T = C._state = this._state.slice(0), _ = 0; _ < 25; _++)
              T[_] = T[_].clone();
            return C;
          }
        });
        i.SHA3 = c._createHelper(w), i.HmacSHA3 = c._createHmacHelper(w);
      }(Math), t.SHA3;
    });
  }(Lo)), lr;
}
var hr = {}, Po = {
  get exports() {
    return hr;
  },
  set exports(e) {
    hr = e;
  }
}, V0;
function Mo() {
  return V0 || (V0 = 1, function(e, r) {
    (function(t, n) {
      e.exports = n(ce());
    })(re, function(t) {
      /** @preserve
      			(c) 2012 by Cédric Mesnil. All rights reserved.
      
      			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
      
      			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      
      			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      			*/
      return function(n) {
        var i = t, o = i.lib, a = o.WordArray, c = o.Hasher, l = i.algo, s = a.create([
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
        ]), u = a.create([
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
        ]), p = a.create([0, 1518500249, 1859775393, 2400959708, 2840853838]), g = a.create([1352829926, 1548603684, 1836072691, 2053994217, 0]), w = l.RIPEMD160 = c.extend({
          _doReset: function() {
            this._hash = a.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
          },
          _doProcessBlock: function(y, S) {
            for (var B = 0; B < 16; B++) {
              var O = S + B, E = y[O];
              y[O] = (E << 8 | E >>> 24) & 16711935 | (E << 24 | E >>> 8) & 4278255360;
            }
            var A = this._hash.words, I = p.words, L = g.words, H = s.words, P = f.words, q = h.words, Y = u.words, X, j, J, M, F, $, U, ae, ue, pe;
            $ = X = A[0], U = j = A[1], ae = J = A[2], ue = M = A[3], pe = F = A[4];
            for (var ne, B = 0; B < 80; B += 1)
              ne = X + y[S + H[B]] | 0, B < 16 ? ne += C(j, J, M) + I[0] : B < 32 ? ne += T(j, J, M) + I[1] : B < 48 ? ne += _(j, J, M) + I[2] : B < 64 ? ne += d(j, J, M) + I[3] : ne += x(j, J, M) + I[4], ne = ne | 0, ne = m(ne, q[B]), ne = ne + F | 0, X = F, F = M, M = m(J, 10), J = j, j = ne, ne = $ + y[S + P[B]] | 0, B < 16 ? ne += x(U, ae, ue) + L[0] : B < 32 ? ne += d(U, ae, ue) + L[1] : B < 48 ? ne += _(U, ae, ue) + L[2] : B < 64 ? ne += T(U, ae, ue) + L[3] : ne += C(U, ae, ue) + L[4], ne = ne | 0, ne = m(ne, Y[B]), ne = ne + pe | 0, $ = pe, pe = ue, ue = m(ae, 10), ae = U, U = ne;
            ne = A[1] + J + ue | 0, A[1] = A[2] + M + pe | 0, A[2] = A[3] + F + $ | 0, A[3] = A[4] + X + U | 0, A[4] = A[0] + j + ae | 0, A[0] = ne;
          },
          _doFinalize: function() {
            var y = this._data, S = y.words, B = this._nDataBytes * 8, O = y.sigBytes * 8;
            S[O >>> 5] |= 128 << 24 - O % 32, S[(O + 64 >>> 9 << 4) + 14] = (B << 8 | B >>> 24) & 16711935 | (B << 24 | B >>> 8) & 4278255360, y.sigBytes = (S.length + 1) * 4, this._process();
            for (var E = this._hash, A = E.words, I = 0; I < 5; I++) {
              var L = A[I];
              A[I] = (L << 8 | L >>> 24) & 16711935 | (L << 24 | L >>> 8) & 4278255360;
            }
            return E;
          },
          clone: function() {
            var y = c.clone.call(this);
            return y._hash = this._hash.clone(), y;
          }
        });
        function C(y, S, B) {
          return y ^ S ^ B;
        }
        function T(y, S, B) {
          return y & S | ~y & B;
        }
        function _(y, S, B) {
          return (y | ~S) ^ B;
        }
        function d(y, S, B) {
          return y & B | S & ~B;
        }
        function x(y, S, B) {
          return y ^ (S | ~B);
        }
        function m(y, S) {
          return y << S | y >>> 32 - S;
        }
        i.RIPEMD160 = c._createHelper(w), i.HmacRIPEMD160 = c._createHmacHelper(w);
      }(), t.RIPEMD160;
    });
  }(Po)), hr;
}
var dr = {}, Ho = {
  get exports() {
    return dr;
  },
  set exports(e) {
    dr = e;
  }
}, K0;
function y0() {
  return K0 || (K0 = 1, function(e, r) {
    (function(t, n) {
      e.exports = n(ce());
    })(re, function(t) {
      (function() {
        var n = t, i = n.lib, o = i.Base, a = n.enc, c = a.Utf8, l = n.algo;
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
            s = this._hasher = new s.init(), typeof f == "string" && (f = c.parse(f));
            var h = s.blockSize, u = h * 4;
            f.sigBytes > u && (f = s.finalize(f)), f.clamp();
            for (var p = this._oKey = f.clone(), g = this._iKey = f.clone(), w = p.words, C = g.words, T = 0; T < h; T++)
              w[T] ^= 1549556828, C[T] ^= 909522486;
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
            var f = this._hasher, h = f.finalize(s);
            f.reset();
            var u = f.finalize(this._oKey.clone().concat(h));
            return u;
          }
        });
      })();
    });
  }(Ho)), dr;
}
var vr = {}, Fo = {
  get exports() {
    return vr;
  },
  set exports(e) {
    vr = e;
  }
}, G0;
function zo() {
  return G0 || (G0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ce(), m0(), y0());
    })(re, function(t) {
      return function() {
        var n = t, i = n.lib, o = i.Base, a = i.WordArray, c = n.algo, l = c.SHA1, s = c.HMAC, f = c.PBKDF2 = o.extend({
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
          compute: function(h, u) {
            for (var p = this.cfg, g = s.create(p.hasher, h), w = a.create(), C = a.create([1]), T = w.words, _ = C.words, d = p.keySize, x = p.iterations; T.length < d; ) {
              var m = g.update(u).finalize(C);
              g.reset();
              for (var y = m.words, S = y.length, B = m, O = 1; O < x; O++) {
                B = g.finalize(B), g.reset();
                for (var E = B.words, A = 0; A < S; A++)
                  y[A] ^= E[A];
              }
              w.concat(m), _[0]++;
            }
            return w.sigBytes = d * 4, w;
          }
        });
        n.PBKDF2 = function(h, u, p) {
          return f.create(p).compute(h, u);
        };
      }(), t.PBKDF2;
    });
  }(Fo)), vr;
}
var pr = {}, qo = {
  get exports() {
    return pr;
  },
  set exports(e) {
    pr = e;
  }
}, Z0;
function dt() {
  return Z0 || (Z0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ce(), m0(), y0());
    })(re, function(t) {
      return function() {
        var n = t, i = n.lib, o = i.Base, a = i.WordArray, c = n.algo, l = c.MD5, s = c.EvpKDF = o.extend({
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
          compute: function(f, h) {
            for (var u, p = this.cfg, g = p.hasher.create(), w = a.create(), C = w.words, T = p.keySize, _ = p.iterations; C.length < T; ) {
              u && g.update(u), u = g.update(f).finalize(h), g.reset();
              for (var d = 1; d < _; d++)
                u = g.finalize(u), g.reset();
              w.concat(u);
            }
            return w.sigBytes = T * 4, w;
          }
        });
        n.EvpKDF = function(f, h, u) {
          return s.create(u).compute(f, h);
        };
      }(), t.EvpKDF;
    });
  }(qo)), pr;
}
var xr = {}, $o = {
  get exports() {
    return xr;
  },
  set exports(e) {
    xr = e;
  }
}, X0;
function _e() {
  return X0 || (X0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ce(), dt());
    })(re, function(t) {
      t.lib.Cipher || function(n) {
        var i = t, o = i.lib, a = o.Base, c = o.WordArray, l = o.BufferedBlockAlgorithm, s = i.enc;
        s.Utf8;
        var f = s.Base64, h = i.algo, u = h.EvpKDF, p = o.Cipher = l.extend({
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
          init: function(E, A, I) {
            this.cfg = this.cfg.extend(I), this._xformMode = E, this._key = A, this.reset();
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
              return typeof A == "string" ? O : y;
            }
            return function(A) {
              return {
                encrypt: function(I, L, H) {
                  return E(L).encrypt(A, I, L, H);
                },
                decrypt: function(I, L, H) {
                  return E(L).decrypt(A, I, L, H);
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
        var g = i.mode = {}, w = o.BlockCipherMode = a.extend({
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
        }), C = g.CBC = function() {
          var E = w.extend();
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
            processBlock: function(I, L) {
              var H = this._cipher, P = H.blockSize;
              A.call(this, I, L, P), H.encryptBlock(I, L), this._prevBlock = I.slice(L, L + P);
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
            processBlock: function(I, L) {
              var H = this._cipher, P = H.blockSize, q = I.slice(L, L + P);
              H.decryptBlock(I, L), A.call(this, I, L, P), this._prevBlock = q;
            }
          });
          function A(I, L, H) {
            var P, q = this._iv;
            q ? (P = q, this._iv = n) : P = this._prevBlock;
            for (var Y = 0; Y < H; Y++)
              I[L + Y] ^= P[Y];
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
            for (var I = A * 4, L = I - E.sigBytes % I, H = L << 24 | L << 16 | L << 8 | L, P = [], q = 0; q < L; q += 4)
              P.push(H);
            var Y = c.create(P, L);
            E.concat(Y);
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
            mode: C,
            padding: _
          }),
          reset: function() {
            var E;
            p.reset.call(this);
            var A = this.cfg, I = A.iv, L = A.mode;
            this._xformMode == this._ENC_XFORM_MODE ? E = L.createEncryptor : (E = L.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == E ? this._mode.init(this, I && I.words) : (this._mode = E.call(L, this, I && I.words), this._mode.__creator = E);
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
          stringify: function(E) {
            var A, I = E.ciphertext, L = E.salt;
            return L ? A = c.create([1398893684, 1701076831]).concat(L).concat(I) : A = I, A.toString(f);
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
            var A, I = f.parse(E), L = I.words;
            return L[0] == 1398893684 && L[1] == 1701076831 && (A = c.create(L.slice(2, 4)), L.splice(0, 4), I.sigBytes -= 16), d.create({ ciphertext: I, salt: A });
          }
        }, y = o.SerializableCipher = a.extend({
          /**
           * Configuration options.
           *
           * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
           */
          cfg: a.extend({
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
          encrypt: function(E, A, I, L) {
            L = this.cfg.extend(L);
            var H = E.createEncryptor(I, L), P = H.finalize(A), q = H.cfg;
            return d.create({
              ciphertext: P,
              key: I,
              iv: q.iv,
              algorithm: E,
              mode: q.mode,
              padding: q.padding,
              blockSize: E.blockSize,
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
          decrypt: function(E, A, I, L) {
            L = this.cfg.extend(L), A = this._parse(A, L.format);
            var H = E.createDecryptor(I, L).finalize(A.ciphertext);
            return H;
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
        }), S = i.kdf = {}, B = S.OpenSSL = {
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
          execute: function(E, A, I, L) {
            L || (L = c.random(64 / 8));
            var H = u.create({ keySize: A + I }).compute(E, L), P = c.create(H.words.slice(A), I * 4);
            return H.sigBytes = A * 4, d.create({ key: H, iv: P, salt: L });
          }
        }, O = o.PasswordBasedCipher = y.extend({
          /**
           * Configuration options.
           *
           * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
           */
          cfg: y.cfg.extend({
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
          encrypt: function(E, A, I, L) {
            L = this.cfg.extend(L);
            var H = L.kdf.execute(I, E.keySize, E.ivSize);
            L.iv = H.iv;
            var P = y.encrypt.call(this, E, A, H.key, L);
            return P.mixIn(H), P;
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
          decrypt: function(E, A, I, L) {
            L = this.cfg.extend(L), A = this._parse(A, L.format);
            var H = L.kdf.execute(I, E.keySize, E.ivSize, A.salt);
            L.iv = H.iv;
            var P = y.decrypt.call(this, E, A, H.key, L);
            return P;
          }
        });
      }();
    });
  }($o)), xr;
}
var br = {}, Uo = {
  get exports() {
    return br;
  },
  set exports(e) {
    br = e;
  }
}, j0;
function Wo() {
  return j0 || (j0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ce(), _e());
    })(re, function(t) {
      return t.mode.CFB = function() {
        var n = t.lib.BlockCipherMode.extend();
        n.Encryptor = n.extend({
          processBlock: function(o, a) {
            var c = this._cipher, l = c.blockSize;
            i.call(this, o, a, l, c), this._prevBlock = o.slice(a, a + l);
          }
        }), n.Decryptor = n.extend({
          processBlock: function(o, a) {
            var c = this._cipher, l = c.blockSize, s = o.slice(a, a + l);
            i.call(this, o, a, l, c), this._prevBlock = s;
          }
        });
        function i(o, a, c, l) {
          var s, f = this._iv;
          f ? (s = f.slice(0), this._iv = void 0) : s = this._prevBlock, l.encryptBlock(s, 0);
          for (var h = 0; h < c; h++)
            o[a + h] ^= s[h];
        }
        return n;
      }(), t.mode.CFB;
    });
  }(Uo)), br;
}
var gr = {}, Yo = {
  get exports() {
    return gr;
  },
  set exports(e) {
    gr = e;
  }
}, Q0;
function Vo() {
  return Q0 || (Q0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ce(), _e());
    })(re, function(t) {
      return t.mode.CTR = function() {
        var n = t.lib.BlockCipherMode.extend(), i = n.Encryptor = n.extend({
          processBlock: function(o, a) {
            var c = this._cipher, l = c.blockSize, s = this._iv, f = this._counter;
            s && (f = this._counter = s.slice(0), this._iv = void 0);
            var h = f.slice(0);
            c.encryptBlock(h, 0), f[l - 1] = f[l - 1] + 1 | 0;
            for (var u = 0; u < l; u++)
              o[a + u] ^= h[u];
          }
        });
        return n.Decryptor = i, n;
      }(), t.mode.CTR;
    });
  }(Yo)), gr;
}
var mr = {}, Ko = {
  get exports() {
    return mr;
  },
  set exports(e) {
    mr = e;
  }
}, J0;
function Go() {
  return J0 || (J0 = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ce(), _e());
    })(re, function(t) {
      /** @preserve
       * Counter block mode compatible with  Dr Brian Gladman fileenc.c
       * derived from CryptoJS.mode.CTR
       * Jan Hruby jhruby.web@gmail.com
       */
      return t.mode.CTRGladman = function() {
        var n = t.lib.BlockCipherMode.extend();
        function i(c) {
          if ((c >> 24 & 255) === 255) {
            var l = c >> 16 & 255, s = c >> 8 & 255, f = c & 255;
            l === 255 ? (l = 0, s === 255 ? (s = 0, f === 255 ? f = 0 : ++f) : ++s) : ++l, c = 0, c += l << 16, c += s << 8, c += f;
          } else
            c += 1 << 24;
          return c;
        }
        function o(c) {
          return (c[0] = i(c[0])) === 0 && (c[1] = i(c[1])), c;
        }
        var a = n.Encryptor = n.extend({
          processBlock: function(c, l) {
            var s = this._cipher, f = s.blockSize, h = this._iv, u = this._counter;
            h && (u = this._counter = h.slice(0), this._iv = void 0), o(u);
            var p = u.slice(0);
            s.encryptBlock(p, 0);
            for (var g = 0; g < f; g++)
              c[l + g] ^= p[g];
          }
        });
        return n.Decryptor = a, n;
      }(), t.mode.CTRGladman;
    });
  }(Ko)), mr;
}
var yr = {}, Zo = {
  get exports() {
    return yr;
  },
  set exports(e) {
    yr = e;
  }
}, en;
function Xo() {
  return en || (en = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ce(), _e());
    })(re, function(t) {
      return t.mode.OFB = function() {
        var n = t.lib.BlockCipherMode.extend(), i = n.Encryptor = n.extend({
          processBlock: function(o, a) {
            var c = this._cipher, l = c.blockSize, s = this._iv, f = this._keystream;
            s && (f = this._keystream = s.slice(0), this._iv = void 0), c.encryptBlock(f, 0);
            for (var h = 0; h < l; h++)
              o[a + h] ^= f[h];
          }
        });
        return n.Decryptor = i, n;
      }(), t.mode.OFB;
    });
  }(Zo)), yr;
}
var _r = {}, jo = {
  get exports() {
    return _r;
  },
  set exports(e) {
    _r = e;
  }
}, tn;
function Mn() {
  return tn || (tn = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ce(), _e());
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
  }(jo)), _r;
}
var wr = {}, Qo = {
  get exports() {
    return wr;
  },
  set exports(e) {
    wr = e;
  }
}, rn;
function Jo() {
  return rn || (rn = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ce(), _e());
    })(re, function(t) {
      return t.pad.AnsiX923 = {
        pad: function(n, i) {
          var o = n.sigBytes, a = i * 4, c = a - o % a, l = o + c - 1;
          n.clamp(), n.words[l >>> 2] |= c << 24 - l % 4 * 8, n.sigBytes += c;
        },
        unpad: function(n) {
          var i = n.words[n.sigBytes - 1 >>> 2] & 255;
          n.sigBytes -= i;
        }
      }, t.pad.Ansix923;
    });
  }(Qo)), wr;
}
var Er = {}, es = {
  get exports() {
    return Er;
  },
  set exports(e) {
    Er = e;
  }
}, nn;
function ts() {
  return nn || (nn = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ce(), _e());
    })(re, function(t) {
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
  }(es)), Er;
}
var Sr = {}, rs = {
  get exports() {
    return Sr;
  },
  set exports(e) {
    Sr = e;
  }
}, on;
function ns() {
  return on || (on = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ce(), _e());
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
  }(rs)), Sr;
}
var Cr = {}, is = {
  get exports() {
    return Cr;
  },
  set exports(e) {
    Cr = e;
  }
}, sn;
function os() {
  return sn || (sn = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ce(), _e());
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
  }(is)), Cr;
}
var Br = {}, ss = {
  get exports() {
    return Br;
  },
  set exports(e) {
    Br = e;
  }
}, an;
function as() {
  return an || (an = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ce(), _e());
    })(re, function(t) {
      return t.pad.NoPadding = {
        pad: function() {
        },
        unpad: function() {
        }
      }, t.pad.NoPadding;
    });
  }(ss)), Br;
}
var kr = {}, cs = {
  get exports() {
    return kr;
  },
  set exports(e) {
    kr = e;
  }
}, cn;
function fs() {
  return cn || (cn = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ce(), _e());
    })(re, function(t) {
      return function(n) {
        var i = t, o = i.lib, a = o.CipherParams, c = i.enc, l = c.Hex, s = i.format;
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
            var h = l.parse(f);
            return a.create({ ciphertext: h });
          }
        };
      }(), t.format.Hex;
    });
  }(cs)), kr;
}
var Ar = {}, us = {
  get exports() {
    return Ar;
  },
  set exports(e) {
    Ar = e;
  }
}, fn;
function Hn() {
  return fn || (fn = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ce(), lt(), ht(), dt(), _e());
    })(re, function(t) {
      return function() {
        var n = t, i = n.lib, o = i.BlockCipher, a = n.algo, c = [], l = [], s = [], f = [], h = [], u = [], p = [], g = [], w = [], C = [];
        (function() {
          for (var d = [], x = 0; x < 256; x++)
            x < 128 ? d[x] = x << 1 : d[x] = x << 1 ^ 283;
          for (var m = 0, y = 0, x = 0; x < 256; x++) {
            var S = y ^ y << 1 ^ y << 2 ^ y << 3 ^ y << 4;
            S = S >>> 8 ^ S & 255 ^ 99, c[m] = S, l[S] = m;
            var B = d[m], O = d[B], E = d[O], A = d[S] * 257 ^ S * 16843008;
            s[m] = A << 24 | A >>> 8, f[m] = A << 16 | A >>> 16, h[m] = A << 8 | A >>> 24, u[m] = A;
            var A = E * 16843009 ^ O * 65537 ^ B * 257 ^ m * 16843008;
            p[S] = A << 24 | A >>> 8, g[S] = A << 16 | A >>> 16, w[S] = A << 8 | A >>> 24, C[S] = A, m ? (m = B ^ d[d[d[E ^ B]]], y ^= d[d[y]]) : m = y = 1;
          }
        })();
        var T = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], _ = a.AES = o.extend({
          _doReset: function() {
            var d;
            if (!(this._nRounds && this._keyPriorReset === this._key)) {
              for (var x = this._keyPriorReset = this._key, m = x.words, y = x.sigBytes / 4, S = this._nRounds = y + 6, B = (S + 1) * 4, O = this._keySchedule = [], E = 0; E < B; E++)
                E < y ? O[E] = m[E] : (d = O[E - 1], E % y ? y > 6 && E % y == 4 && (d = c[d >>> 24] << 24 | c[d >>> 16 & 255] << 16 | c[d >>> 8 & 255] << 8 | c[d & 255]) : (d = d << 8 | d >>> 24, d = c[d >>> 24] << 24 | c[d >>> 16 & 255] << 16 | c[d >>> 8 & 255] << 8 | c[d & 255], d ^= T[E / y | 0] << 24), O[E] = O[E - y] ^ d);
              for (var A = this._invKeySchedule = [], I = 0; I < B; I++) {
                var E = B - I;
                if (I % 4)
                  var d = O[E];
                else
                  var d = O[E - 4];
                I < 4 || E <= 4 ? A[I] = d : A[I] = p[c[d >>> 24]] ^ g[c[d >>> 16 & 255]] ^ w[c[d >>> 8 & 255]] ^ C[c[d & 255]];
              }
            }
          },
          encryptBlock: function(d, x) {
            this._doCryptBlock(d, x, this._keySchedule, s, f, h, u, c);
          },
          decryptBlock: function(d, x) {
            var m = d[x + 1];
            d[x + 1] = d[x + 3], d[x + 3] = m, this._doCryptBlock(d, x, this._invKeySchedule, p, g, w, C, l);
            var m = d[x + 1];
            d[x + 1] = d[x + 3], d[x + 3] = m;
          },
          _doCryptBlock: function(d, x, m, y, S, B, O, E) {
            for (var A = this._nRounds, I = d[x] ^ m[0], L = d[x + 1] ^ m[1], H = d[x + 2] ^ m[2], P = d[x + 3] ^ m[3], q = 4, Y = 1; Y < A; Y++) {
              var X = y[I >>> 24] ^ S[L >>> 16 & 255] ^ B[H >>> 8 & 255] ^ O[P & 255] ^ m[q++], j = y[L >>> 24] ^ S[H >>> 16 & 255] ^ B[P >>> 8 & 255] ^ O[I & 255] ^ m[q++], J = y[H >>> 24] ^ S[P >>> 16 & 255] ^ B[I >>> 8 & 255] ^ O[L & 255] ^ m[q++], M = y[P >>> 24] ^ S[I >>> 16 & 255] ^ B[L >>> 8 & 255] ^ O[H & 255] ^ m[q++];
              I = X, L = j, H = J, P = M;
            }
            var X = (E[I >>> 24] << 24 | E[L >>> 16 & 255] << 16 | E[H >>> 8 & 255] << 8 | E[P & 255]) ^ m[q++], j = (E[L >>> 24] << 24 | E[H >>> 16 & 255] << 16 | E[P >>> 8 & 255] << 8 | E[I & 255]) ^ m[q++], J = (E[H >>> 24] << 24 | E[P >>> 16 & 255] << 16 | E[I >>> 8 & 255] << 8 | E[L & 255]) ^ m[q++], M = (E[P >>> 24] << 24 | E[I >>> 16 & 255] << 16 | E[L >>> 8 & 255] << 8 | E[H & 255]) ^ m[q++];
            d[x] = X, d[x + 1] = j, d[x + 2] = J, d[x + 3] = M;
          },
          keySize: 256 / 32
        });
        n.AES = o._createHelper(_);
      }(), t.AES;
    });
  }(us)), Ar;
}
var Rr = {}, ls = {
  get exports() {
    return Rr;
  },
  set exports(e) {
    Rr = e;
  }
}, un;
function hs() {
  return un || (un = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ce(), lt(), ht(), dt(), _e());
    })(re, function(t) {
      return function() {
        var n = t, i = n.lib, o = i.WordArray, a = i.BlockCipher, c = n.algo, l = [
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
        ], f = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28], h = [
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
        ], p = c.DES = a.extend({
          _doReset: function() {
            for (var T = this._key, _ = T.words, d = [], x = 0; x < 56; x++) {
              var m = l[x] - 1;
              d[x] = _[m >>> 5] >>> 31 - m % 32 & 1;
            }
            for (var y = this._subKeys = [], S = 0; S < 16; S++) {
              for (var B = y[S] = [], O = f[S], x = 0; x < 24; x++)
                B[x / 6 | 0] |= d[(s[x] - 1 + O) % 28] << 31 - x % 6, B[4 + (x / 6 | 0)] |= d[28 + (s[x + 24] - 1 + O) % 28] << 31 - x % 6;
              B[0] = B[0] << 1 | B[0] >>> 31;
              for (var x = 1; x < 7; x++)
                B[x] = B[x] >>> (x - 1) * 4 + 3;
              B[7] = B[7] << 5 | B[7] >>> 27;
            }
            for (var E = this._invSubKeys = [], x = 0; x < 16; x++)
              E[x] = y[15 - x];
          },
          encryptBlock: function(T, _) {
            this._doCryptBlock(T, _, this._subKeys);
          },
          decryptBlock: function(T, _) {
            this._doCryptBlock(T, _, this._invSubKeys);
          },
          _doCryptBlock: function(T, _, d) {
            this._lBlock = T[_], this._rBlock = T[_ + 1], g.call(this, 4, 252645135), g.call(this, 16, 65535), w.call(this, 2, 858993459), w.call(this, 8, 16711935), g.call(this, 1, 1431655765);
            for (var x = 0; x < 16; x++) {
              for (var m = d[x], y = this._lBlock, S = this._rBlock, B = 0, O = 0; O < 8; O++)
                B |= h[O][((S ^ m[O]) & u[O]) >>> 0];
              this._lBlock = S, this._rBlock = y ^ B;
            }
            var E = this._lBlock;
            this._lBlock = this._rBlock, this._rBlock = E, g.call(this, 1, 1431655765), w.call(this, 8, 16711935), w.call(this, 2, 858993459), g.call(this, 16, 65535), g.call(this, 4, 252645135), T[_] = this._lBlock, T[_ + 1] = this._rBlock;
          },
          keySize: 64 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        function g(T, _) {
          var d = (this._lBlock >>> T ^ this._rBlock) & _;
          this._rBlock ^= d, this._lBlock ^= d << T;
        }
        function w(T, _) {
          var d = (this._rBlock >>> T ^ this._lBlock) & _;
          this._lBlock ^= d, this._rBlock ^= d << T;
        }
        n.DES = a._createHelper(p);
        var C = c.TripleDES = a.extend({
          _doReset: function() {
            var T = this._key, _ = T.words;
            if (_.length !== 2 && _.length !== 4 && _.length < 6)
              throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
            var d = _.slice(0, 2), x = _.length < 4 ? _.slice(0, 2) : _.slice(2, 4), m = _.length < 6 ? _.slice(0, 2) : _.slice(4, 6);
            this._des1 = p.createEncryptor(o.create(d)), this._des2 = p.createEncryptor(o.create(x)), this._des3 = p.createEncryptor(o.create(m));
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
        n.TripleDES = a._createHelper(C);
      }(), t.TripleDES;
    });
  }(ls)), Rr;
}
var Nr = {}, ds = {
  get exports() {
    return Nr;
  },
  set exports(e) {
    Nr = e;
  }
}, ln;
function vs() {
  return ln || (ln = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ce(), lt(), ht(), dt(), _e());
    })(re, function(t) {
      return function() {
        var n = t, i = n.lib, o = i.StreamCipher, a = n.algo, c = a.RC4 = o.extend({
          _doReset: function() {
            for (var f = this._key, h = f.words, u = f.sigBytes, p = this._S = [], g = 0; g < 256; g++)
              p[g] = g;
            for (var g = 0, w = 0; g < 256; g++) {
              var C = g % u, T = h[C >>> 2] >>> 24 - C % 4 * 8 & 255;
              w = (w + p[g] + T) % 256;
              var _ = p[g];
              p[g] = p[w], p[w] = _;
            }
            this._i = this._j = 0;
          },
          _doProcessBlock: function(f, h) {
            f[h] ^= l.call(this);
          },
          keySize: 256 / 32,
          ivSize: 0
        });
        function l() {
          for (var f = this._S, h = this._i, u = this._j, p = 0, g = 0; g < 4; g++) {
            h = (h + 1) % 256, u = (u + f[h]) % 256;
            var w = f[h];
            f[h] = f[u], f[u] = w, p |= f[(f[h] + f[u]) % 256] << 24 - g * 8;
          }
          return this._i = h, this._j = u, p;
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
            for (var f = this.cfg.drop; f > 0; f--)
              l.call(this);
          }
        });
        n.RC4Drop = o._createHelper(s);
      }(), t.RC4;
    });
  }(ds)), Nr;
}
var Tr = {}, ps = {
  get exports() {
    return Tr;
  },
  set exports(e) {
    Tr = e;
  }
}, hn;
function xs() {
  return hn || (hn = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ce(), lt(), ht(), dt(), _e());
    })(re, function(t) {
      return function() {
        var n = t, i = n.lib, o = i.StreamCipher, a = n.algo, c = [], l = [], s = [], f = a.Rabbit = o.extend({
          _doReset: function() {
            for (var u = this._key.words, p = this.cfg.iv, g = 0; g < 4; g++)
              u[g] = (u[g] << 8 | u[g] >>> 24) & 16711935 | (u[g] << 24 | u[g] >>> 8) & 4278255360;
            var w = this._X = [
              u[0],
              u[3] << 16 | u[2] >>> 16,
              u[1],
              u[0] << 16 | u[3] >>> 16,
              u[2],
              u[1] << 16 | u[0] >>> 16,
              u[3],
              u[2] << 16 | u[1] >>> 16
            ], C = this._C = [
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
              h.call(this);
            for (var g = 0; g < 8; g++)
              C[g] ^= w[g + 4 & 7];
            if (p) {
              var T = p.words, _ = T[0], d = T[1], x = (_ << 8 | _ >>> 24) & 16711935 | (_ << 24 | _ >>> 8) & 4278255360, m = (d << 8 | d >>> 24) & 16711935 | (d << 24 | d >>> 8) & 4278255360, y = x >>> 16 | m & 4294901760, S = m << 16 | x & 65535;
              C[0] ^= x, C[1] ^= y, C[2] ^= m, C[3] ^= S, C[4] ^= x, C[5] ^= y, C[6] ^= m, C[7] ^= S;
              for (var g = 0; g < 4; g++)
                h.call(this);
            }
          },
          _doProcessBlock: function(u, p) {
            var g = this._X;
            h.call(this), c[0] = g[0] ^ g[5] >>> 16 ^ g[3] << 16, c[1] = g[2] ^ g[7] >>> 16 ^ g[5] << 16, c[2] = g[4] ^ g[1] >>> 16 ^ g[7] << 16, c[3] = g[6] ^ g[3] >>> 16 ^ g[1] << 16;
            for (var w = 0; w < 4; w++)
              c[w] = (c[w] << 8 | c[w] >>> 24) & 16711935 | (c[w] << 24 | c[w] >>> 8) & 4278255360, u[p + w] ^= c[w];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function h() {
          for (var u = this._X, p = this._C, g = 0; g < 8; g++)
            l[g] = p[g];
          p[0] = p[0] + 1295307597 + this._b | 0, p[1] = p[1] + 3545052371 + (p[0] >>> 0 < l[0] >>> 0 ? 1 : 0) | 0, p[2] = p[2] + 886263092 + (p[1] >>> 0 < l[1] >>> 0 ? 1 : 0) | 0, p[3] = p[3] + 1295307597 + (p[2] >>> 0 < l[2] >>> 0 ? 1 : 0) | 0, p[4] = p[4] + 3545052371 + (p[3] >>> 0 < l[3] >>> 0 ? 1 : 0) | 0, p[5] = p[5] + 886263092 + (p[4] >>> 0 < l[4] >>> 0 ? 1 : 0) | 0, p[6] = p[6] + 1295307597 + (p[5] >>> 0 < l[5] >>> 0 ? 1 : 0) | 0, p[7] = p[7] + 3545052371 + (p[6] >>> 0 < l[6] >>> 0 ? 1 : 0) | 0, this._b = p[7] >>> 0 < l[7] >>> 0 ? 1 : 0;
          for (var g = 0; g < 8; g++) {
            var w = u[g] + p[g], C = w & 65535, T = w >>> 16, _ = ((C * C >>> 17) + C * T >>> 15) + T * T, d = ((w & 4294901760) * w | 0) + ((w & 65535) * w | 0);
            s[g] = _ ^ d;
          }
          u[0] = s[0] + (s[7] << 16 | s[7] >>> 16) + (s[6] << 16 | s[6] >>> 16) | 0, u[1] = s[1] + (s[0] << 8 | s[0] >>> 24) + s[7] | 0, u[2] = s[2] + (s[1] << 16 | s[1] >>> 16) + (s[0] << 16 | s[0] >>> 16) | 0, u[3] = s[3] + (s[2] << 8 | s[2] >>> 24) + s[1] | 0, u[4] = s[4] + (s[3] << 16 | s[3] >>> 16) + (s[2] << 16 | s[2] >>> 16) | 0, u[5] = s[5] + (s[4] << 8 | s[4] >>> 24) + s[3] | 0, u[6] = s[6] + (s[5] << 16 | s[5] >>> 16) + (s[4] << 16 | s[4] >>> 16) | 0, u[7] = s[7] + (s[6] << 8 | s[6] >>> 24) + s[5] | 0;
        }
        n.Rabbit = o._createHelper(f);
      }(), t.Rabbit;
    });
  }(ps)), Tr;
}
var Dr = {}, bs = {
  get exports() {
    return Dr;
  },
  set exports(e) {
    Dr = e;
  }
}, dn;
function gs() {
  return dn || (dn = 1, function(e, r) {
    (function(t, n, i) {
      e.exports = n(ce(), lt(), ht(), dt(), _e());
    })(re, function(t) {
      return function() {
        var n = t, i = n.lib, o = i.StreamCipher, a = n.algo, c = [], l = [], s = [], f = a.RabbitLegacy = o.extend({
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
            ], w = this._C = [
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
            for (var C = 0; C < 4; C++)
              h.call(this);
            for (var C = 0; C < 8; C++)
              w[C] ^= g[C + 4 & 7];
            if (p) {
              var T = p.words, _ = T[0], d = T[1], x = (_ << 8 | _ >>> 24) & 16711935 | (_ << 24 | _ >>> 8) & 4278255360, m = (d << 8 | d >>> 24) & 16711935 | (d << 24 | d >>> 8) & 4278255360, y = x >>> 16 | m & 4294901760, S = m << 16 | x & 65535;
              w[0] ^= x, w[1] ^= y, w[2] ^= m, w[3] ^= S, w[4] ^= x, w[5] ^= y, w[6] ^= m, w[7] ^= S;
              for (var C = 0; C < 4; C++)
                h.call(this);
            }
          },
          _doProcessBlock: function(u, p) {
            var g = this._X;
            h.call(this), c[0] = g[0] ^ g[5] >>> 16 ^ g[3] << 16, c[1] = g[2] ^ g[7] >>> 16 ^ g[5] << 16, c[2] = g[4] ^ g[1] >>> 16 ^ g[7] << 16, c[3] = g[6] ^ g[3] >>> 16 ^ g[1] << 16;
            for (var w = 0; w < 4; w++)
              c[w] = (c[w] << 8 | c[w] >>> 24) & 16711935 | (c[w] << 24 | c[w] >>> 8) & 4278255360, u[p + w] ^= c[w];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function h() {
          for (var u = this._X, p = this._C, g = 0; g < 8; g++)
            l[g] = p[g];
          p[0] = p[0] + 1295307597 + this._b | 0, p[1] = p[1] + 3545052371 + (p[0] >>> 0 < l[0] >>> 0 ? 1 : 0) | 0, p[2] = p[2] + 886263092 + (p[1] >>> 0 < l[1] >>> 0 ? 1 : 0) | 0, p[3] = p[3] + 1295307597 + (p[2] >>> 0 < l[2] >>> 0 ? 1 : 0) | 0, p[4] = p[4] + 3545052371 + (p[3] >>> 0 < l[3] >>> 0 ? 1 : 0) | 0, p[5] = p[5] + 886263092 + (p[4] >>> 0 < l[4] >>> 0 ? 1 : 0) | 0, p[6] = p[6] + 1295307597 + (p[5] >>> 0 < l[5] >>> 0 ? 1 : 0) | 0, p[7] = p[7] + 3545052371 + (p[6] >>> 0 < l[6] >>> 0 ? 1 : 0) | 0, this._b = p[7] >>> 0 < l[7] >>> 0 ? 1 : 0;
          for (var g = 0; g < 8; g++) {
            var w = u[g] + p[g], C = w & 65535, T = w >>> 16, _ = ((C * C >>> 17) + C * T >>> 15) + T * T, d = ((w & 4294901760) * w | 0) + ((w & 65535) * w | 0);
            s[g] = _ ^ d;
          }
          u[0] = s[0] + (s[7] << 16 | s[7] >>> 16) + (s[6] << 16 | s[6] >>> 16) | 0, u[1] = s[1] + (s[0] << 8 | s[0] >>> 24) + s[7] | 0, u[2] = s[2] + (s[1] << 16 | s[1] >>> 16) + (s[0] << 16 | s[0] >>> 16) | 0, u[3] = s[3] + (s[2] << 8 | s[2] >>> 24) + s[1] | 0, u[4] = s[4] + (s[3] << 16 | s[3] >>> 16) + (s[2] << 16 | s[2] >>> 16) | 0, u[5] = s[5] + (s[4] << 8 | s[4] >>> 24) + s[3] | 0, u[6] = s[6] + (s[5] << 16 | s[5] >>> 16) + (s[4] << 16 | s[4] >>> 16) | 0, u[7] = s[7] + (s[6] << 8 | s[6] >>> 24) + s[5] | 0;
        }
        n.RabbitLegacy = o._createHelper(f);
      }(), t.RabbitLegacy;
    });
  }(bs)), Dr;
}
(function(e, r) {
  (function(t, n, i) {
    e.exports = n(ce(), Hr(), yo(), wo(), lt(), Co(), ht(), m0(), In(), No(), Pn(), Oo(), Io(), Mo(), y0(), zo(), dt(), _e(), Wo(), Vo(), Go(), Xo(), Mn(), Jo(), ts(), ns(), os(), as(), fs(), Hn(), hs(), vs(), xs(), gs());
  })(re, function(t) {
    return t;
  });
})(ho);
var vn = {}, ms = {
  get exports() {
    return vn;
  },
  set exports(e) {
    vn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(re, function() {
    var t = 1e3, n = 6e4, i = 36e5, o = "millisecond", a = "second", c = "minute", l = "hour", s = "day", f = "week", h = "month", u = "quarter", p = "year", g = "date", w = "Invalid Date", C = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, T = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, _ = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(L) {
      var H = ["th", "st", "nd", "rd"], P = L % 100;
      return "[" + L + (H[(P - 20) % 10] || H[P] || H[0]) + "]";
    } }, d = function(L, H, P) {
      var q = String(L);
      return !q || q.length >= H ? L : "" + Array(H + 1 - q.length).join(P) + L;
    }, x = { s: d, z: function(L) {
      var H = -L.utcOffset(), P = Math.abs(H), q = Math.floor(P / 60), Y = P % 60;
      return (H <= 0 ? "+" : "-") + d(q, 2, "0") + ":" + d(Y, 2, "0");
    }, m: function L(H, P) {
      if (H.date() < P.date())
        return -L(P, H);
      var q = 12 * (P.year() - H.year()) + (P.month() - H.month()), Y = H.clone().add(q, h), X = P - Y < 0, j = H.clone().add(q + (X ? -1 : 1), h);
      return +(-(q + (P - Y) / (X ? Y - j : j - Y)) || 0);
    }, a: function(L) {
      return L < 0 ? Math.ceil(L) || 0 : Math.floor(L);
    }, p: function(L) {
      return { M: h, y: p, w: f, d: s, D: g, h: l, m: c, s: a, ms: o, Q: u }[L] || String(L || "").toLowerCase().replace(/s$/, "");
    }, u: function(L) {
      return L === void 0;
    } }, m = "en", y = {};
    y[m] = _;
    var S = function(L) {
      return L instanceof A;
    }, B = function L(H, P, q) {
      var Y;
      if (!H)
        return m;
      if (typeof H == "string") {
        var X = H.toLowerCase();
        y[X] && (Y = X), P && (y[X] = P, Y = X);
        var j = H.split("-");
        if (!Y && j.length > 1)
          return L(j[0]);
      } else {
        var J = H.name;
        y[J] = H, Y = J;
      }
      return !q && Y && (m = Y), Y || !q && m;
    }, O = function(L, H) {
      if (S(L))
        return L.clone();
      var P = typeof H == "object" ? H : {};
      return P.date = L, P.args = arguments, new A(P);
    }, E = x;
    E.l = B, E.i = S, E.w = function(L, H) {
      return O(L, { locale: H.$L, utc: H.$u, x: H.$x, $offset: H.$offset });
    };
    var A = function() {
      function L(P) {
        this.$L = B(P.locale, null, !0), this.parse(P);
      }
      var H = L.prototype;
      return H.parse = function(P) {
        this.$d = function(q) {
          var Y = q.date, X = q.utc;
          if (Y === null)
            return /* @__PURE__ */ new Date(NaN);
          if (E.u(Y))
            return /* @__PURE__ */ new Date();
          if (Y instanceof Date)
            return new Date(Y);
          if (typeof Y == "string" && !/Z$/i.test(Y)) {
            var j = Y.match(C);
            if (j) {
              var J = j[2] - 1 || 0, M = (j[7] || "0").substring(0, 3);
              return X ? new Date(Date.UTC(j[1], J, j[3] || 1, j[4] || 0, j[5] || 0, j[6] || 0, M)) : new Date(j[1], J, j[3] || 1, j[4] || 0, j[5] || 0, j[6] || 0, M);
            }
          }
          return new Date(Y);
        }(P), this.$x = P.x || {}, this.init();
      }, H.init = function() {
        var P = this.$d;
        this.$y = P.getFullYear(), this.$M = P.getMonth(), this.$D = P.getDate(), this.$W = P.getDay(), this.$H = P.getHours(), this.$m = P.getMinutes(), this.$s = P.getSeconds(), this.$ms = P.getMilliseconds();
      }, H.$utils = function() {
        return E;
      }, H.isValid = function() {
        return this.$d.toString() !== w;
      }, H.isSame = function(P, q) {
        var Y = O(P);
        return this.startOf(q) <= Y && Y <= this.endOf(q);
      }, H.isAfter = function(P, q) {
        return O(P) < this.startOf(q);
      }, H.isBefore = function(P, q) {
        return this.endOf(q) < O(P);
      }, H.$g = function(P, q, Y) {
        return E.u(P) ? this[q] : this.set(Y, P);
      }, H.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, H.valueOf = function() {
        return this.$d.getTime();
      }, H.startOf = function(P, q) {
        var Y = this, X = !!E.u(q) || q, j = E.p(P), J = function(ne, xe) {
          var we = E.w(Y.$u ? Date.UTC(Y.$y, xe, ne) : new Date(Y.$y, xe, ne), Y);
          return X ? we : we.endOf(s);
        }, M = function(ne, xe) {
          return E.w(Y.toDate()[ne].apply(Y.toDate("s"), (X ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(xe)), Y);
        }, F = this.$W, $ = this.$M, U = this.$D, ae = "set" + (this.$u ? "UTC" : "");
        switch (j) {
          case p:
            return X ? J(1, 0) : J(31, 11);
          case h:
            return X ? J(1, $) : J(0, $ + 1);
          case f:
            var ue = this.$locale().weekStart || 0, pe = (F < ue ? F + 7 : F) - ue;
            return J(X ? U - pe : U + (6 - pe), $);
          case s:
          case g:
            return M(ae + "Hours", 0);
          case l:
            return M(ae + "Minutes", 1);
          case c:
            return M(ae + "Seconds", 2);
          case a:
            return M(ae + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, H.endOf = function(P) {
        return this.startOf(P, !1);
      }, H.$set = function(P, q) {
        var Y, X = E.p(P), j = "set" + (this.$u ? "UTC" : ""), J = (Y = {}, Y[s] = j + "Date", Y[g] = j + "Date", Y[h] = j + "Month", Y[p] = j + "FullYear", Y[l] = j + "Hours", Y[c] = j + "Minutes", Y[a] = j + "Seconds", Y[o] = j + "Milliseconds", Y)[X], M = X === s ? this.$D + (q - this.$W) : q;
        if (X === h || X === p) {
          var F = this.clone().set(g, 1);
          F.$d[J](M), F.init(), this.$d = F.set(g, Math.min(this.$D, F.daysInMonth())).$d;
        } else
          J && this.$d[J](M);
        return this.init(), this;
      }, H.set = function(P, q) {
        return this.clone().$set(P, q);
      }, H.get = function(P) {
        return this[E.p(P)]();
      }, H.add = function(P, q) {
        var Y, X = this;
        P = Number(P);
        var j = E.p(q), J = function($) {
          var U = O(X);
          return E.w(U.date(U.date() + Math.round($ * P)), X);
        };
        if (j === h)
          return this.set(h, this.$M + P);
        if (j === p)
          return this.set(p, this.$y + P);
        if (j === s)
          return J(1);
        if (j === f)
          return J(7);
        var M = (Y = {}, Y[c] = n, Y[l] = i, Y[a] = t, Y)[j] || 1, F = this.$d.getTime() + P * M;
        return E.w(F, this);
      }, H.subtract = function(P, q) {
        return this.add(-1 * P, q);
      }, H.format = function(P) {
        var q = this, Y = this.$locale();
        if (!this.isValid())
          return Y.invalidDate || w;
        var X = P || "YYYY-MM-DDTHH:mm:ssZ", j = E.z(this), J = this.$H, M = this.$m, F = this.$M, $ = Y.weekdays, U = Y.months, ae = function(xe, we, Ge, Le) {
          return xe && (xe[we] || xe(q, X)) || Ge[we].slice(0, Le);
        }, ue = function(xe) {
          return E.s(J % 12 || 12, xe, "0");
        }, pe = Y.meridiem || function(xe, we, Ge) {
          var Le = xe < 12 ? "AM" : "PM";
          return Ge ? Le.toLowerCase() : Le;
        }, ne = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: F + 1, MM: E.s(F + 1, 2, "0"), MMM: ae(Y.monthsShort, F, U, 3), MMMM: ae(U, F), D: this.$D, DD: E.s(this.$D, 2, "0"), d: String(this.$W), dd: ae(Y.weekdaysMin, this.$W, $, 2), ddd: ae(Y.weekdaysShort, this.$W, $, 3), dddd: $[this.$W], H: String(J), HH: E.s(J, 2, "0"), h: ue(1), hh: ue(2), a: pe(J, M, !0), A: pe(J, M, !1), m: String(M), mm: E.s(M, 2, "0"), s: String(this.$s), ss: E.s(this.$s, 2, "0"), SSS: E.s(this.$ms, 3, "0"), Z: j };
        return X.replace(T, function(xe, we) {
          return we || ne[xe] || j.replace(":", "");
        });
      }, H.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, H.diff = function(P, q, Y) {
        var X, j = E.p(q), J = O(P), M = (J.utcOffset() - this.utcOffset()) * n, F = this - J, $ = E.m(this, J);
        return $ = (X = {}, X[p] = $ / 12, X[h] = $, X[u] = $ / 3, X[f] = (F - M) / 6048e5, X[s] = (F - M) / 864e5, X[l] = F / i, X[c] = F / n, X[a] = F / t, X)[j] || F, Y ? $ : E.a($);
      }, H.daysInMonth = function() {
        return this.endOf(h).$D;
      }, H.$locale = function() {
        return y[this.$L];
      }, H.locale = function(P, q) {
        if (!P)
          return this.$L;
        var Y = this.clone(), X = B(P, q, !0);
        return X && (Y.$L = X), Y;
      }, H.clone = function() {
        return E.w(this.$d, this);
      }, H.toDate = function() {
        return new Date(this.valueOf());
      }, H.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, H.toISOString = function() {
        return this.$d.toISOString();
      }, H.toString = function() {
        return this.$d.toUTCString();
      }, L;
    }(), I = A.prototype;
    return O.prototype = I, [["$ms", o], ["$s", a], ["$m", c], ["$H", l], ["$W", s], ["$M", h], ["$y", p], ["$D", g]].forEach(function(L) {
      I[L[1]] = function(H) {
        return this.$g(H, L[0], L[1]);
      };
    }), O.extend = function(L, H) {
      return L.$i || (L(H, A, O), L.$i = !0), O;
    }, O.locale = B, O.isDayjs = S, O.unix = function(L) {
      return O(1e3 * L);
    }, O.en = y[m], O.Ls = y, O.p = {}, O;
  });
})(ms);
var Fn = function() {
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
}(), a0 = typeof window < "u" && typeof document < "u" && window.document === document, Or = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), ys = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Or) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), _s = 2;
function ws(e, r) {
  var t = !1, n = !1, i = 0;
  function o() {
    t && (t = !1, e()), n && c();
  }
  function a() {
    ys(o);
  }
  function c() {
    var l = Date.now();
    if (t) {
      if (l - i < _s)
        return;
      n = !0;
    } else
      t = !0, n = !1, setTimeout(a, r);
    i = l;
  }
  return c;
}
var Es = 20, Ss = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Cs = typeof MutationObserver < "u", Bs = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = ws(this.refresh.bind(this), Es);
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
      !a0 || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Cs ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !a0 || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(r) {
      var t = r.propertyName, n = t === void 0 ? "" : t, i = Ss.some(function(o) {
        return !!~n.indexOf(o);
      });
      i && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), zn = function(e, r) {
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
}, yt = function(e) {
  var r = e && e.ownerDocument && e.ownerDocument.defaultView;
  return r || Or;
}, qn = Fr(0, 0, 0, 0);
function Lr(e) {
  return parseFloat(e) || 0;
}
function pn(e) {
  for (var r = [], t = 1; t < arguments.length; t++)
    r[t - 1] = arguments[t];
  return r.reduce(function(n, i) {
    var o = e["border-" + i + "-width"];
    return n + Lr(o);
  }, 0);
}
function ks(e) {
  for (var r = ["top", "right", "bottom", "left"], t = {}, n = 0, i = r; n < i.length; n++) {
    var o = i[n], a = e["padding-" + o];
    t[o] = Lr(a);
  }
  return t;
}
function As(e) {
  var r = e.getBBox();
  return Fr(0, 0, r.width, r.height);
}
function Rs(e) {
  var r = e.clientWidth, t = e.clientHeight;
  if (!r && !t)
    return qn;
  var n = yt(e).getComputedStyle(e), i = ks(n), o = i.left + i.right, a = i.top + i.bottom, c = Lr(n.width), l = Lr(n.height);
  if (n.boxSizing === "border-box" && (Math.round(c + o) !== r && (c -= pn(n, "left", "right") + o), Math.round(l + a) !== t && (l -= pn(n, "top", "bottom") + a)), !Ts(e)) {
    var s = Math.round(c + o) - r, f = Math.round(l + a) - t;
    Math.abs(s) !== 1 && (c -= s), Math.abs(f) !== 1 && (l -= f);
  }
  return Fr(i.left, i.top, c, l);
}
var Ns = function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof yt(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof yt(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function Ts(e) {
  return e === yt(e).document.documentElement;
}
function Ds(e) {
  return a0 ? Ns(e) ? As(e) : Rs(e) : qn;
}
function Os(e) {
  var r = e.x, t = e.y, n = e.width, i = e.height, o = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, a = Object.create(o.prototype);
  return zn(a, {
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
function Fr(e, r, t, n) {
  return { x: e, y: r, width: t, height: n };
}
var Ls = (
  /** @class */
  function() {
    function e(r) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Fr(0, 0, 0, 0), this.target = r;
    }
    return e.prototype.isActive = function() {
      var r = Ds(this.target);
      return this.contentRect_ = r, r.width !== this.broadcastWidth || r.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var r = this.contentRect_;
      return this.broadcastWidth = r.width, this.broadcastHeight = r.height, r;
    }, e;
  }()
), Is = (
  /** @class */
  function() {
    function e(r, t) {
      var n = Os(t);
      zn(this, { target: r, contentRect: n });
    }
    return e;
  }()
), Ps = (
  /** @class */
  function() {
    function e(r, t, n) {
      if (this.activeObservations_ = [], this.observations_ = new Fn(), typeof r != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = r, this.controller_ = t, this.callbackCtx_ = n;
    }
    return e.prototype.observe = function(r) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(r instanceof yt(r).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var t = this.observations_;
        t.has(r) || (t.set(r, new Ls(r)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(r) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(r instanceof yt(r).Element))
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
          return new Is(n.target, n.broadcastRect());
        });
        this.callback_.call(r, t, r), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), $n = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Fn(), Un = (
  /** @class */
  function() {
    function e(r) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var t = Bs.getInstance(), n = new Ps(r, t, this);
      $n.set(this, n);
    }
    return e;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  Un.prototype[e] = function() {
    var r;
    return (r = $n.get(this))[e].apply(r, arguments);
  };
});
(function() {
  return typeof Or.ResizeObserver < "u" ? Or.ResizeObserver : Un;
})();
Hn();
lt();
var xn = {}, Ms = {
  get exports() {
    return xn;
  },
  set exports(e) {
    xn = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n(ce());
  })(re, function(t) {
    return t.enc.Utf8;
  });
})(Ms);
ht();
Mn();
var bn = {}, Hs = {
  get exports() {
    return bn;
  },
  set exports(e) {
    bn = e;
  }
};
(function(e, r) {
  (function(t, n, i) {
    e.exports = n(ce(), _e());
  })(re, function(t) {
    return t.pad.Pkcs7;
  });
})(Hs);
function Fs(e) {
  var r = [], t = "";
  for (t in e)
    r.push(t);
  return r;
}
function gn(e) {
  return e = JSON.stringify(e), !(typeof e != "string" || !/^\{[\s\S]*\}$/.test(e));
}
function zs(e) {
  return e instanceof Array;
}
function qs(e) {
  return Array.prototype.slice.call(e);
}
function It() {
  if (!(this instanceof It))
    return new It();
}
It.prototype = {
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
    if (gn(e))
      for (const n in e)
        this.set(n, e[n], r, t);
    else if (typeof e == "string") {
      const n = gn(t) ? t : { expires: t }, i = n.path !== void 0 ? `;path=${n.path};path=/` : ";path=/", o = n.domain ? `;domain=${n.domain}` : "", a = n.secure ? ";secure" : "";
      let c = n.expires !== void 0 ? n.expires : "";
      typeof c == "string" && c !== "" ? c = new Date(c) : typeof c == "number" && (c = new Date(+/* @__PURE__ */ new Date() + 1e3 * 60 * 60 * 24 * c)), c !== "" && "toGMTString" in c && (c = `;expires=${c.toGMTString()}`);
      const l = n.sameSite ? `;SameSite=${n.sameSite}` : "";
      document.cookie = `${e}=${encodeURI(r) + c + i + o + a + l}`;
    }
  },
  remove: function(e) {
    e = zs(e) ? e : qs(arguments);
    for (var r = 0, t = e.length; r < t; r++)
      this.set(e[r], "", -1);
    return e;
  },
  clear: function(e) {
    return e ? this.remove(e) : this.remove(Fs(this.all()));
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
for (const e in It.prototype)
  It.prototype[e];
var mn = {}, $s = {
  get exports() {
    return mn;
  },
  set exports(e) {
    mn = e;
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
      function a(s, f) {
        if (!i[s]) {
          if (!n[s]) {
            var h = typeof Ot == "function" && Ot;
            if (!f && h)
              return h(s, !0);
            if (c)
              return c(s, !0);
            var u = new Error("Cannot find module '" + s + "'");
            throw u.code = "MODULE_NOT_FOUND", u;
          }
          var p = i[s] = { exports: {} };
          n[s][0].call(p.exports, function(g) {
            var w = n[s][1][g];
            return a(w || g);
          }, p, p.exports, t, n, i, o);
        }
        return i[s].exports;
      }
      for (var c = typeof Ot == "function" && Ot, l = 0; l < o.length; l++)
        a(o[l]);
      return a;
    }({ 1: [function(t, n, i) {
      (function(o) {
        var a = o.MutationObserver || o.WebKitMutationObserver, c;
        if (a) {
          var l = 0, s = new a(g), f = o.document.createTextNode("");
          s.observe(f, {
            characterData: !0
          }), c = function() {
            f.data = l = ++l % 2;
          };
        } else if (!o.setImmediate && typeof o.MessageChannel < "u") {
          var h = new o.MessageChannel();
          h.port1.onmessage = g, c = function() {
            h.port2.postMessage(0);
          };
        } else
          "document" in o && "onreadystatechange" in o.document.createElement("script") ? c = function() {
            var C = o.document.createElement("script");
            C.onreadystatechange = function() {
              g(), C.onreadystatechange = null, C.parentNode.removeChild(C), C = null;
            }, o.document.documentElement.appendChild(C);
          } : c = function() {
            setTimeout(g, 0);
          };
        var u, p = [];
        function g() {
          u = !0;
          for (var C, T, _ = p.length; _; ) {
            for (T = p, p = [], C = -1; ++C < _; )
              T[C]();
            _ = p.length;
          }
          u = !1;
        }
        n.exports = w;
        function w(C) {
          p.push(C) === 1 && !u && c();
        }
      }).call(this, typeof re < "u" ? re : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 2: [function(t, n, i) {
      var o = t(1);
      function a() {
      }
      var c = {}, l = ["REJECTED"], s = ["FULFILLED"], f = ["PENDING"];
      n.exports = h;
      function h(m) {
        if (typeof m != "function")
          throw new TypeError("resolver must be a function");
        this.state = f, this.queue = [], this.outcome = void 0, m !== a && w(this, m);
      }
      h.prototype.catch = function(m) {
        return this.then(null, m);
      }, h.prototype.then = function(m, y) {
        if (typeof m != "function" && this.state === s || typeof y != "function" && this.state === l)
          return this;
        var S = new this.constructor(a);
        if (this.state !== f) {
          var B = this.state === s ? m : y;
          p(S, B, this.outcome);
        } else
          this.queue.push(new u(S, m, y));
        return S;
      };
      function u(m, y, S) {
        this.promise = m, typeof y == "function" && (this.onFulfilled = y, this.callFulfilled = this.otherCallFulfilled), typeof S == "function" && (this.onRejected = S, this.callRejected = this.otherCallRejected);
      }
      u.prototype.callFulfilled = function(m) {
        c.resolve(this.promise, m);
      }, u.prototype.otherCallFulfilled = function(m) {
        p(this.promise, this.onFulfilled, m);
      }, u.prototype.callRejected = function(m) {
        c.reject(this.promise, m);
      }, u.prototype.otherCallRejected = function(m) {
        p(this.promise, this.onRejected, m);
      };
      function p(m, y, S) {
        o(function() {
          var B;
          try {
            B = y(S);
          } catch (O) {
            return c.reject(m, O);
          }
          B === m ? c.reject(m, new TypeError("Cannot resolve promise with itself")) : c.resolve(m, B);
        });
      }
      c.resolve = function(m, y) {
        var S = C(g, y);
        if (S.status === "error")
          return c.reject(m, S.value);
        var B = S.value;
        if (B)
          w(m, B);
        else {
          m.state = s, m.outcome = y;
          for (var O = -1, E = m.queue.length; ++O < E; )
            m.queue[O].callFulfilled(y);
        }
        return m;
      }, c.reject = function(m, y) {
        m.state = l, m.outcome = y;
        for (var S = -1, B = m.queue.length; ++S < B; )
          m.queue[S].callRejected(y);
        return m;
      };
      function g(m) {
        var y = m && m.then;
        if (m && (typeof m == "object" || typeof m == "function") && typeof y == "function")
          return function() {
            y.apply(m, arguments);
          };
      }
      function w(m, y) {
        var S = !1;
        function B(I) {
          S || (S = !0, c.reject(m, I));
        }
        function O(I) {
          S || (S = !0, c.resolve(m, I));
        }
        function E() {
          y(O, B);
        }
        var A = C(E);
        A.status === "error" && B(A.value);
      }
      function C(m, y) {
        var S = {};
        try {
          S.value = m(y), S.status = "success";
        } catch (B) {
          S.status = "error", S.value = B;
        }
        return S;
      }
      h.resolve = T;
      function T(m) {
        return m instanceof this ? m : c.resolve(new this(a), m);
      }
      h.reject = _;
      function _(m) {
        var y = new this(a);
        return c.reject(y, m);
      }
      h.all = d;
      function d(m) {
        var y = this;
        if (Object.prototype.toString.call(m) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var S = m.length, B = !1;
        if (!S)
          return this.resolve([]);
        for (var O = new Array(S), E = 0, A = -1, I = new this(a); ++A < S; )
          L(m[A], A);
        return I;
        function L(H, P) {
          y.resolve(H).then(q, function(Y) {
            B || (B = !0, c.reject(I, Y));
          });
          function q(Y) {
            O[P] = Y, ++E === S && !B && (B = !0, c.resolve(I, O));
          }
        }
      }
      h.race = x;
      function x(m) {
        var y = this;
        if (Object.prototype.toString.call(m) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var S = m.length, B = !1;
        if (!S)
          return this.resolve([]);
        for (var O = -1, E = new this(a); ++O < S; )
          A(m[O]);
        return E;
        function A(I) {
          y.resolve(I).then(function(L) {
            B || (B = !0, c.resolve(E, L));
          }, function(L) {
            B || (B = !0, c.reject(E, L));
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
      function a(v, k) {
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
      var l = c();
      function s() {
        try {
          if (!l || !l.open)
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
      function f(v, k) {
        v = v || [], k = k || {};
        try {
          return new Blob(v, k);
        } catch (R) {
          if (R.name !== "TypeError")
            throw R;
          for (var b = typeof BlobBuilder < "u" ? BlobBuilder : typeof MSBlobBuilder < "u" ? MSBlobBuilder : typeof MozBlobBuilder < "u" ? MozBlobBuilder : WebKitBlobBuilder, N = new b(), D = 0; D < v.length; D += 1)
            N.append(v[D]);
          return N.getBlob(k.type);
        }
      }
      typeof Promise > "u" && t(3);
      var h = Promise;
      function u(v, k) {
        k && v.then(function(b) {
          k(null, b);
        }, function(b) {
          k(b);
        });
      }
      function p(v, k, b) {
        typeof k == "function" && v.then(k), typeof b == "function" && v.catch(b);
      }
      function g(v) {
        return typeof v != "string" && (console.warn(v + " used as a key, but it is not a string."), v = String(v)), v;
      }
      function w() {
        if (arguments.length && typeof arguments[arguments.length - 1] == "function")
          return arguments[arguments.length - 1];
      }
      var C = "local-forage-detect-blob-support", T = void 0, _ = {}, d = Object.prototype.toString, x = "readonly", m = "readwrite";
      function y(v) {
        for (var k = v.length, b = new ArrayBuffer(k), N = new Uint8Array(b), D = 0; D < k; D++)
          N[D] = v.charCodeAt(D);
        return b;
      }
      function S(v) {
        return new h(function(k) {
          var b = v.transaction(C, m), N = f([""]);
          b.objectStore(C).put(N, "key"), b.onabort = function(D) {
            D.preventDefault(), D.stopPropagation(), k(!1);
          }, b.oncomplete = function() {
            var D = navigator.userAgent.match(/Chrome\/(\d+)/), R = navigator.userAgent.match(/Edge\//);
            k(R || !D || parseInt(D[1], 10) >= 43);
          };
        }).catch(function() {
          return !1;
        });
      }
      function B(v) {
        return typeof T == "boolean" ? h.resolve(T) : S(v).then(function(k) {
          return T = k, T;
        });
      }
      function O(v) {
        var k = _[v.name], b = {};
        b.promise = new h(function(N, D) {
          b.resolve = N, b.reject = D;
        }), k.deferredOperations.push(b), k.dbReady ? k.dbReady = k.dbReady.then(function() {
          return b.promise;
        }) : k.dbReady = b.promise;
      }
      function E(v) {
        var k = _[v.name], b = k.deferredOperations.pop();
        if (b)
          return b.resolve(), b.promise;
      }
      function A(v, k) {
        var b = _[v.name], N = b.deferredOperations.pop();
        if (N)
          return N.reject(k), N.promise;
      }
      function I(v, k) {
        return new h(function(b, N) {
          if (_[v.name] = _[v.name] || F(), v.db)
            if (k)
              O(v), v.db.close();
            else
              return b(v.db);
          var D = [v.name];
          k && D.push(v.version);
          var R = l.open.apply(l, D);
          k && (R.onupgradeneeded = function(z) {
            var V = R.result;
            try {
              V.createObjectStore(v.storeName), z.oldVersion <= 1 && V.createObjectStore(C);
            } catch (K) {
              if (K.name === "ConstraintError")
                console.warn('The database "' + v.name + '" has been upgraded from version ' + z.oldVersion + " to version " + z.newVersion + ', but the storage "' + v.storeName + '" already exists.');
              else
                throw K;
            }
          }), R.onerror = function(z) {
            z.preventDefault(), N(R.error);
          }, R.onsuccess = function() {
            var z = R.result;
            z.onversionchange = function(V) {
              V.target.close();
            }, b(z), E(v);
          };
        });
      }
      function L(v) {
        return I(v, !1);
      }
      function H(v) {
        return I(v, !0);
      }
      function P(v, k) {
        if (!v.db)
          return !0;
        var b = !v.db.objectStoreNames.contains(v.storeName), N = v.version < v.db.version, D = v.version > v.db.version;
        if (N && (v.version !== k && console.warn('The database "' + v.name + `" can't be downgraded from version ` + v.db.version + " to version " + v.version + "."), v.version = v.db.version), D || b) {
          if (b) {
            var R = v.db.version + 1;
            R > v.version && (v.version = R);
          }
          return !0;
        }
        return !1;
      }
      function q(v) {
        return new h(function(k, b) {
          var N = new FileReader();
          N.onerror = b, N.onloadend = function(D) {
            var R = btoa(D.target.result || "");
            k({
              __local_forage_encoded_blob: !0,
              data: R,
              type: v.type
            });
          }, N.readAsBinaryString(v);
        });
      }
      function Y(v) {
        var k = y(atob(v.data));
        return f([k], { type: v.type });
      }
      function X(v) {
        return v && v.__local_forage_encoded_blob;
      }
      function j(v) {
        var k = this, b = k._initReady().then(function() {
          var N = _[k._dbInfo.name];
          if (N && N.dbReady)
            return N.dbReady;
        });
        return p(b, v, v), b;
      }
      function J(v) {
        O(v);
        for (var k = _[v.name], b = k.forages, N = 0; N < b.length; N++) {
          var D = b[N];
          D._dbInfo.db && (D._dbInfo.db.close(), D._dbInfo.db = null);
        }
        return v.db = null, L(v).then(function(R) {
          return v.db = R, P(v) ? H(v) : R;
        }).then(function(R) {
          v.db = k.db = R;
          for (var z = 0; z < b.length; z++)
            b[z]._dbInfo.db = R;
        }).catch(function(R) {
          throw A(v, R), R;
        });
      }
      function M(v, k, b, N) {
        N === void 0 && (N = 1);
        try {
          var D = v.db.transaction(v.storeName, k);
          b(null, D);
        } catch (R) {
          if (N > 0 && (!v.db || R.name === "InvalidStateError" || R.name === "NotFoundError"))
            return h.resolve().then(function() {
              if (!v.db || R.name === "NotFoundError" && !v.db.objectStoreNames.contains(v.storeName) && v.version <= v.db.version)
                return v.db && (v.version = v.db.version + 1), H(v);
            }).then(function() {
              return J(v).then(function() {
                M(v, k, b, N - 1);
              });
            }).catch(b);
          b(R);
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
        var k = this, b = {
          db: null
        };
        if (v)
          for (var N in v)
            b[N] = v[N];
        var D = _[b.name];
        D || (D = F(), _[b.name] = D), D.forages.push(k), k._initReady || (k._initReady = k.ready, k.ready = j);
        var R = [];
        function z() {
          return h.resolve();
        }
        for (var V = 0; V < D.forages.length; V++) {
          var K = D.forages[V];
          K !== k && R.push(K._initReady().catch(z));
        }
        var G = D.forages.slice(0);
        return h.all(R).then(function() {
          return b.db = D.db, L(b);
        }).then(function(Z) {
          return b.db = Z, P(b, k._defaultConfig.version) ? H(b) : Z;
        }).then(function(Z) {
          b.db = D.db = Z, k._dbInfo = b;
          for (var Q = 0; Q < G.length; Q++) {
            var se = G[Q];
            se !== k && (se._dbInfo.db = b.db, se._dbInfo.version = b.version);
          }
        });
      }
      function U(v, k) {
        var b = this;
        v = g(v);
        var N = new h(function(D, R) {
          b.ready().then(function() {
            M(b._dbInfo, x, function(z, V) {
              if (z)
                return R(z);
              try {
                var K = V.objectStore(b._dbInfo.storeName), G = K.get(v);
                G.onsuccess = function() {
                  var Z = G.result;
                  Z === void 0 && (Z = null), X(Z) && (Z = Y(Z)), D(Z);
                }, G.onerror = function() {
                  R(G.error);
                };
              } catch (Z) {
                R(Z);
              }
            });
          }).catch(R);
        });
        return u(N, k), N;
      }
      function ae(v, k) {
        var b = this, N = new h(function(D, R) {
          b.ready().then(function() {
            M(b._dbInfo, x, function(z, V) {
              if (z)
                return R(z);
              try {
                var K = V.objectStore(b._dbInfo.storeName), G = K.openCursor(), Z = 1;
                G.onsuccess = function() {
                  var Q = G.result;
                  if (Q) {
                    var se = Q.value;
                    X(se) && (se = Y(se));
                    var le = v(se, Q.key, Z++);
                    le !== void 0 ? D(le) : Q.continue();
                  } else
                    D();
                }, G.onerror = function() {
                  R(G.error);
                };
              } catch (Q) {
                R(Q);
              }
            });
          }).catch(R);
        });
        return u(N, k), N;
      }
      function ue(v, k, b) {
        var N = this;
        v = g(v);
        var D = new h(function(R, z) {
          var V;
          N.ready().then(function() {
            return V = N._dbInfo, d.call(k) === "[object Blob]" ? B(V.db).then(function(K) {
              return K ? k : q(k);
            }) : k;
          }).then(function(K) {
            M(N._dbInfo, m, function(G, Z) {
              if (G)
                return z(G);
              try {
                var Q = Z.objectStore(N._dbInfo.storeName);
                K === null && (K = void 0);
                var se = Q.put(K, v);
                Z.oncomplete = function() {
                  K === void 0 && (K = null), R(K);
                }, Z.onabort = Z.onerror = function() {
                  var le = se.error ? se.error : se.transaction.error;
                  z(le);
                };
              } catch (le) {
                z(le);
              }
            });
          }).catch(z);
        });
        return u(D, b), D;
      }
      function pe(v, k) {
        var b = this;
        v = g(v);
        var N = new h(function(D, R) {
          b.ready().then(function() {
            M(b._dbInfo, m, function(z, V) {
              if (z)
                return R(z);
              try {
                var K = V.objectStore(b._dbInfo.storeName), G = K.delete(v);
                V.oncomplete = function() {
                  D();
                }, V.onerror = function() {
                  R(G.error);
                }, V.onabort = function() {
                  var Z = G.error ? G.error : G.transaction.error;
                  R(Z);
                };
              } catch (Z) {
                R(Z);
              }
            });
          }).catch(R);
        });
        return u(N, k), N;
      }
      function ne(v) {
        var k = this, b = new h(function(N, D) {
          k.ready().then(function() {
            M(k._dbInfo, m, function(R, z) {
              if (R)
                return D(R);
              try {
                var V = z.objectStore(k._dbInfo.storeName), K = V.clear();
                z.oncomplete = function() {
                  N();
                }, z.onabort = z.onerror = function() {
                  var G = K.error ? K.error : K.transaction.error;
                  D(G);
                };
              } catch (G) {
                D(G);
              }
            });
          }).catch(D);
        });
        return u(b, v), b;
      }
      function xe(v) {
        var k = this, b = new h(function(N, D) {
          k.ready().then(function() {
            M(k._dbInfo, x, function(R, z) {
              if (R)
                return D(R);
              try {
                var V = z.objectStore(k._dbInfo.storeName), K = V.count();
                K.onsuccess = function() {
                  N(K.result);
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
      function we(v, k) {
        var b = this, N = new h(function(D, R) {
          if (v < 0) {
            D(null);
            return;
          }
          b.ready().then(function() {
            M(b._dbInfo, x, function(z, V) {
              if (z)
                return R(z);
              try {
                var K = V.objectStore(b._dbInfo.storeName), G = !1, Z = K.openKeyCursor();
                Z.onsuccess = function() {
                  var Q = Z.result;
                  if (!Q) {
                    D(null);
                    return;
                  }
                  v === 0 || G ? D(Q.key) : (G = !0, Q.advance(v));
                }, Z.onerror = function() {
                  R(Z.error);
                };
              } catch (Q) {
                R(Q);
              }
            });
          }).catch(R);
        });
        return u(N, k), N;
      }
      function Ge(v) {
        var k = this, b = new h(function(N, D) {
          k.ready().then(function() {
            M(k._dbInfo, x, function(R, z) {
              if (R)
                return D(R);
              try {
                var V = z.objectStore(k._dbInfo.storeName), K = V.openKeyCursor(), G = [];
                K.onsuccess = function() {
                  var Z = K.result;
                  if (!Z) {
                    N(G);
                    return;
                  }
                  G.push(Z.key), Z.continue();
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
      function Le(v, k) {
        k = w.apply(this, arguments);
        var b = this.config();
        v = typeof v != "function" && v || {}, v.name || (v.name = v.name || b.name, v.storeName = v.storeName || b.storeName);
        var N = this, D;
        if (!v.name)
          D = h.reject("Invalid arguments");
        else {
          var R = v.name === b.name && N._dbInfo.db, z = R ? h.resolve(N._dbInfo.db) : L(v).then(function(V) {
            var K = _[v.name], G = K.forages;
            K.db = V;
            for (var Z = 0; Z < G.length; Z++)
              G[Z]._dbInfo.db = V;
            return V;
          });
          v.storeName ? D = z.then(function(V) {
            if (V.objectStoreNames.contains(v.storeName)) {
              var K = V.version + 1;
              O(v);
              var G = _[v.name], Z = G.forages;
              V.close();
              for (var Q = 0; Q < Z.length; Q++) {
                var se = Z[Q];
                se._dbInfo.db = null, se._dbInfo.version = K;
              }
              var le = new h(function(he, ge) {
                var be = l.open(v.name, K);
                be.onerror = function(Ie) {
                  var Nt = be.result;
                  Nt.close(), ge(Ie);
                }, be.onupgradeneeded = function() {
                  var Ie = be.result;
                  Ie.deleteObjectStore(v.storeName);
                }, be.onsuccess = function() {
                  var Ie = be.result;
                  Ie.close(), he(Ie);
                };
              });
              return le.then(function(he) {
                G.db = he;
                for (var ge = 0; ge < Z.length; ge++) {
                  var be = Z[ge];
                  be._dbInfo.db = he, E(be._dbInfo);
                }
              }).catch(function(he) {
                throw (A(v, he) || h.resolve()).catch(function() {
                }), he;
              });
            }
          }) : D = z.then(function(V) {
            O(v);
            var K = _[v.name], G = K.forages;
            V.close();
            for (var Z = 0; Z < G.length; Z++) {
              var Q = G[Z];
              Q._dbInfo.db = null;
            }
            var se = new h(function(le, he) {
              var ge = l.deleteDatabase(v.name);
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
              K.db = le;
              for (var he = 0; he < G.length; he++) {
                var ge = G[he];
                E(ge._dbInfo);
              }
            }).catch(function(le) {
              throw (A(v, le) || h.resolve()).catch(function() {
              }), le;
            });
          });
        }
        return u(D, k), D;
      }
      var De = {
        _driver: "asyncStorage",
        _initStorage: $,
        _support: s(),
        iterate: ae,
        getItem: U,
        setItem: ue,
        removeItem: pe,
        clear: ne,
        length: xe,
        key: we,
        keys: Ge,
        dropInstance: Le
      };
      function Ce() {
        return typeof openDatabase == "function";
      }
      var Oe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ot = "~~local_forage_type~", st = /^~~local_forage_type~([^~]+)~/, $e = "__lfsc__:", at = $e.length, Ze = "arbf", Be = "blob", ke = "si08", Me = "ui08", ct = "uic8", Et = "si16", Xe = "si32", Je = "ur16", Ht = "ui32", St = "fl32", Ct = "fl64", je = at + Ze.length, et = Object.prototype.toString;
      function Ft(v) {
        var k = v.length * 0.75, b = v.length, N, D = 0, R, z, V, K;
        v[v.length - 1] === "=" && (k--, v[v.length - 2] === "=" && k--);
        var G = new ArrayBuffer(k), Z = new Uint8Array(G);
        for (N = 0; N < b; N += 4)
          R = Oe.indexOf(v[N]), z = Oe.indexOf(v[N + 1]), V = Oe.indexOf(v[N + 2]), K = Oe.indexOf(v[N + 3]), Z[D++] = R << 2 | z >> 4, Z[D++] = (z & 15) << 4 | V >> 2, Z[D++] = (V & 3) << 6 | K & 63;
        return G;
      }
      function vt(v) {
        var k = new Uint8Array(v), b = "", N;
        for (N = 0; N < k.length; N += 3)
          b += Oe[k[N] >> 2], b += Oe[(k[N] & 3) << 4 | k[N + 1] >> 4], b += Oe[(k[N + 1] & 15) << 2 | k[N + 2] >> 6], b += Oe[k[N + 2] & 63];
        return k.length % 3 === 2 ? b = b.substring(0, b.length - 1) + "=" : k.length % 3 === 1 && (b = b.substring(0, b.length - 2) + "=="), b;
      }
      function zt(v, k) {
        var b = "";
        if (v && (b = et.call(v)), v && (b === "[object ArrayBuffer]" || v.buffer && et.call(v.buffer) === "[object ArrayBuffer]")) {
          var N, D = $e;
          v instanceof ArrayBuffer ? (N = v, D += Ze) : (N = v.buffer, b === "[object Int8Array]" ? D += ke : b === "[object Uint8Array]" ? D += Me : b === "[object Uint8ClampedArray]" ? D += ct : b === "[object Int16Array]" ? D += Et : b === "[object Uint16Array]" ? D += Je : b === "[object Int32Array]" ? D += Xe : b === "[object Uint32Array]" ? D += Ht : b === "[object Float32Array]" ? D += St : b === "[object Float64Array]" ? D += Ct : k(new Error("Failed to get type for BinaryArray"))), k(D + vt(N));
        } else if (b === "[object Blob]") {
          var R = new FileReader();
          R.onload = function() {
            var z = ot + v.type + "~" + vt(this.result);
            k($e + Be + z);
          }, R.readAsArrayBuffer(v);
        } else
          try {
            k(JSON.stringify(v));
          } catch (z) {
            console.error("Couldn't convert value into a JSON string: ", v), k(null, z);
          }
      }
      function Wr(v) {
        if (v.substring(0, at) !== $e)
          return JSON.parse(v);
        var k = v.substring(je), b = v.substring(at, je), N;
        if (b === Be && st.test(k)) {
          var D = k.match(st);
          N = D[1], k = k.substring(D[0].length);
        }
        var R = Ft(k);
        switch (b) {
          case Ze:
            return R;
          case Be:
            return f([R], { type: N });
          case ke:
            return new Int8Array(R);
          case Me:
            return new Uint8Array(R);
          case ct:
            return new Uint8ClampedArray(R);
          case Et:
            return new Int16Array(R);
          case Je:
            return new Uint16Array(R);
          case Xe:
            return new Int32Array(R);
          case Ht:
            return new Uint32Array(R);
          case St:
            return new Float32Array(R);
          case Ct:
            return new Float64Array(R);
          default:
            throw new Error("Unkown type: " + b);
        }
      }
      var Bt = {
        serialize: zt,
        deserialize: Wr,
        stringToBuffer: Ft,
        bufferToString: vt
      };
      function kt(v, k, b, N) {
        v.executeSql("CREATE TABLE IF NOT EXISTS " + k.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], b, N);
      }
      function Yr(v) {
        var k = this, b = {
          db: null
        };
        if (v)
          for (var N in v)
            b[N] = typeof v[N] != "string" ? v[N].toString() : v[N];
        var D = new h(function(R, z) {
          try {
            b.db = openDatabase(b.name, String(b.version), b.description, b.size);
          } catch (V) {
            return z(V);
          }
          b.db.transaction(function(V) {
            kt(V, b, function() {
              k._dbInfo = b, R();
            }, function(K, G) {
              z(G);
            });
          }, z);
        });
        return b.serializer = Bt, D;
      }
      function He(v, k, b, N, D, R) {
        v.executeSql(b, N, D, function(z, V) {
          V.code === V.SYNTAX_ERR ? z.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [k.storeName], function(K, G) {
            G.rows.length ? R(K, V) : kt(K, k, function() {
              K.executeSql(b, N, D, R);
            }, R);
          }, R) : R(z, V);
        }, R);
      }
      function Vr(v, k) {
        var b = this;
        v = g(v);
        var N = new h(function(D, R) {
          b.ready().then(function() {
            var z = b._dbInfo;
            z.db.transaction(function(V) {
              He(V, z, "SELECT * FROM " + z.storeName + " WHERE key = ? LIMIT 1", [v], function(K, G) {
                var Z = G.rows.length ? G.rows.item(0).value : null;
                Z && (Z = z.serializer.deserialize(Z)), D(Z);
              }, function(K, G) {
                R(G);
              });
            });
          }).catch(R);
        });
        return u(N, k), N;
      }
      function qt(v, k) {
        var b = this, N = new h(function(D, R) {
          b.ready().then(function() {
            var z = b._dbInfo;
            z.db.transaction(function(V) {
              He(V, z, "SELECT * FROM " + z.storeName, [], function(K, G) {
                for (var Z = G.rows, Q = Z.length, se = 0; se < Q; se++) {
                  var le = Z.item(se), he = le.value;
                  if (he && (he = z.serializer.deserialize(he)), he = v(he, le.key, se + 1), he !== void 0) {
                    D(he);
                    return;
                  }
                }
                D();
              }, function(K, G) {
                R(G);
              });
            });
          }).catch(R);
        });
        return u(N, k), N;
      }
      function $t(v, k, b, N) {
        var D = this;
        v = g(v);
        var R = new h(function(z, V) {
          D.ready().then(function() {
            k === void 0 && (k = null);
            var K = k, G = D._dbInfo;
            G.serializer.serialize(k, function(Z, Q) {
              Q ? V(Q) : G.db.transaction(function(se) {
                He(se, G, "INSERT OR REPLACE INTO " + G.storeName + " (key, value) VALUES (?, ?)", [v, Z], function() {
                  z(K);
                }, function(le, he) {
                  V(he);
                });
              }, function(se) {
                if (se.code === se.QUOTA_ERR) {
                  if (N > 0) {
                    z($t.apply(D, [v, K, b, N - 1]));
                    return;
                  }
                  V(se);
                }
              });
            });
          }).catch(V);
        });
        return u(R, b), R;
      }
      function Kr(v, k, b) {
        return $t.apply(this, [v, k, b, 1]);
      }
      function Gr(v, k) {
        var b = this;
        v = g(v);
        var N = new h(function(D, R) {
          b.ready().then(function() {
            var z = b._dbInfo;
            z.db.transaction(function(V) {
              He(V, z, "DELETE FROM " + z.storeName + " WHERE key = ?", [v], function() {
                D();
              }, function(K, G) {
                R(G);
              });
            });
          }).catch(R);
        });
        return u(N, k), N;
      }
      function Ut(v) {
        var k = this, b = new h(function(N, D) {
          k.ready().then(function() {
            var R = k._dbInfo;
            R.db.transaction(function(z) {
              He(z, R, "DELETE FROM " + R.storeName, [], function() {
                N();
              }, function(V, K) {
                D(K);
              });
            });
          }).catch(D);
        });
        return u(b, v), b;
      }
      function Zr(v) {
        var k = this, b = new h(function(N, D) {
          k.ready().then(function() {
            var R = k._dbInfo;
            R.db.transaction(function(z) {
              He(z, R, "SELECT COUNT(key) as c FROM " + R.storeName, [], function(V, K) {
                var G = K.rows.item(0).c;
                N(G);
              }, function(V, K) {
                D(K);
              });
            });
          }).catch(D);
        });
        return u(b, v), b;
      }
      function Xr(v, k) {
        var b = this, N = new h(function(D, R) {
          b.ready().then(function() {
            var z = b._dbInfo;
            z.db.transaction(function(V) {
              He(V, z, "SELECT key FROM " + z.storeName + " WHERE id = ? LIMIT 1", [v + 1], function(K, G) {
                var Z = G.rows.length ? G.rows.item(0).key : null;
                D(Z);
              }, function(K, G) {
                R(G);
              });
            });
          }).catch(R);
        });
        return u(N, k), N;
      }
      function Wt(v) {
        var k = this, b = new h(function(N, D) {
          k.ready().then(function() {
            var R = k._dbInfo;
            R.db.transaction(function(z) {
              He(z, R, "SELECT key FROM " + R.storeName, [], function(V, K) {
                for (var G = [], Z = 0; Z < K.rows.length; Z++)
                  G.push(K.rows.item(Z).key);
                N(G);
              }, function(V, K) {
                D(K);
              });
            });
          }).catch(D);
        });
        return u(b, v), b;
      }
      function jr(v) {
        return new h(function(k, b) {
          v.transaction(function(N) {
            N.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function(D, R) {
              for (var z = [], V = 0; V < R.rows.length; V++)
                z.push(R.rows.item(V).name);
              k({
                db: v,
                storeNames: z
              });
            }, function(D, R) {
              b(R);
            });
          }, function(N) {
            b(N);
          });
        });
      }
      function Yt(v, k) {
        k = w.apply(this, arguments);
        var b = this.config();
        v = typeof v != "function" && v || {}, v.name || (v.name = v.name || b.name, v.storeName = v.storeName || b.storeName);
        var N = this, D;
        return v.name ? D = new h(function(R) {
          var z;
          v.name === b.name ? z = N._dbInfo.db : z = openDatabase(v.name, "", "", 0), v.storeName ? R({
            db: z,
            storeNames: [v.storeName]
          }) : R(jr(z));
        }).then(function(R) {
          return new h(function(z, V) {
            R.db.transaction(function(K) {
              function G(le) {
                return new h(function(he, ge) {
                  K.executeSql("DROP TABLE IF EXISTS " + le, [], function() {
                    he();
                  }, function(be, Ie) {
                    ge(Ie);
                  });
                });
              }
              for (var Z = [], Q = 0, se = R.storeNames.length; Q < se; Q++)
                Z.push(G(R.storeNames[Q]));
              h.all(Z).then(function() {
                z();
              }).catch(function(le) {
                V(le);
              });
            }, function(K) {
              V(K);
            });
          });
        }) : D = h.reject("Invalid arguments"), u(D, k), D;
      }
      var Ae = {
        _driver: "webSQLStorage",
        _initStorage: Yr,
        _support: Ce(),
        iterate: qt,
        getItem: Vr,
        setItem: Kr,
        removeItem: Gr,
        clear: Ut,
        length: Zr,
        key: Xr,
        keys: Wt,
        dropInstance: Yt
      };
      function Ue() {
        try {
          return typeof localStorage < "u" && "setItem" in localStorage && // in IE8 typeof localStorage.setItem === 'object'
          !!localStorage.setItem;
        } catch {
          return !1;
        }
      }
      function At(v, k) {
        var b = v.name + "/";
        return v.storeName !== k.storeName && (b += v.storeName + "/"), b;
      }
      function Qr() {
        var v = "_localforage_support_test";
        try {
          return localStorage.setItem(v, !0), localStorage.removeItem(v), !1;
        } catch {
          return !0;
        }
      }
      function wi() {
        return !Qr() || localStorage.length > 0;
      }
      function Ei(v) {
        var k = this, b = {};
        if (v)
          for (var N in v)
            b[N] = v[N];
        return b.keyPrefix = At(v, k._defaultConfig), wi() ? (k._dbInfo = b, b.serializer = Bt, h.resolve()) : h.reject();
      }
      function Si(v) {
        var k = this, b = k.ready().then(function() {
          for (var N = k._dbInfo.keyPrefix, D = localStorage.length - 1; D >= 0; D--) {
            var R = localStorage.key(D);
            R.indexOf(N) === 0 && localStorage.removeItem(R);
          }
        });
        return u(b, v), b;
      }
      function Ci(v, k) {
        var b = this;
        v = g(v);
        var N = b.ready().then(function() {
          var D = b._dbInfo, R = localStorage.getItem(D.keyPrefix + v);
          return R && (R = D.serializer.deserialize(R)), R;
        });
        return u(N, k), N;
      }
      function Bi(v, k) {
        var b = this, N = b.ready().then(function() {
          for (var D = b._dbInfo, R = D.keyPrefix, z = R.length, V = localStorage.length, K = 1, G = 0; G < V; G++) {
            var Z = localStorage.key(G);
            if (Z.indexOf(R) === 0) {
              var Q = localStorage.getItem(Z);
              if (Q && (Q = D.serializer.deserialize(Q)), Q = v(Q, Z.substring(z), K++), Q !== void 0)
                return Q;
            }
          }
        });
        return u(N, k), N;
      }
      function ki(v, k) {
        var b = this, N = b.ready().then(function() {
          var D = b._dbInfo, R;
          try {
            R = localStorage.key(v);
          } catch {
            R = null;
          }
          return R && (R = R.substring(D.keyPrefix.length)), R;
        });
        return u(N, k), N;
      }
      function Ai(v) {
        var k = this, b = k.ready().then(function() {
          for (var N = k._dbInfo, D = localStorage.length, R = [], z = 0; z < D; z++) {
            var V = localStorage.key(z);
            V.indexOf(N.keyPrefix) === 0 && R.push(V.substring(N.keyPrefix.length));
          }
          return R;
        });
        return u(b, v), b;
      }
      function Ri(v) {
        var k = this, b = k.keys().then(function(N) {
          return N.length;
        });
        return u(b, v), b;
      }
      function Ni(v, k) {
        var b = this;
        v = g(v);
        var N = b.ready().then(function() {
          var D = b._dbInfo;
          localStorage.removeItem(D.keyPrefix + v);
        });
        return u(N, k), N;
      }
      function Ti(v, k, b) {
        var N = this;
        v = g(v);
        var D = N.ready().then(function() {
          k === void 0 && (k = null);
          var R = k;
          return new h(function(z, V) {
            var K = N._dbInfo;
            K.serializer.serialize(k, function(G, Z) {
              if (Z)
                V(Z);
              else
                try {
                  localStorage.setItem(K.keyPrefix + v, G), z(R);
                } catch (Q) {
                  (Q.name === "QuotaExceededError" || Q.name === "NS_ERROR_DOM_QUOTA_REACHED") && V(Q), V(Q);
                }
            });
          });
        });
        return u(D, b), D;
      }
      function Di(v, k) {
        if (k = w.apply(this, arguments), v = typeof v != "function" && v || {}, !v.name) {
          var b = this.config();
          v.name = v.name || b.name, v.storeName = v.storeName || b.storeName;
        }
        var N = this, D;
        return v.name ? D = new h(function(R) {
          v.storeName ? R(At(v, N._defaultConfig)) : R(v.name + "/");
        }).then(function(R) {
          for (var z = localStorage.length - 1; z >= 0; z--) {
            var V = localStorage.key(z);
            V.indexOf(R) === 0 && localStorage.removeItem(V);
          }
        }) : D = h.reject("Invalid arguments"), u(D, k), D;
      }
      var Oi = {
        _driver: "localStorageWrapper",
        _initStorage: Ei,
        _support: Ue(),
        iterate: Bi,
        getItem: Ci,
        setItem: Ti,
        removeItem: Ni,
        clear: Si,
        length: Ri,
        key: ki,
        keys: Ai,
        dropInstance: Di
      }, Li = function(k, b) {
        return k === b || typeof k == "number" && typeof b == "number" && isNaN(k) && isNaN(b);
      }, Ii = function(k, b) {
        for (var N = k.length, D = 0; D < N; ) {
          if (Li(k[D], b))
            return !0;
          D++;
        }
        return !1;
      }, S0 = Array.isArray || function(v) {
        return Object.prototype.toString.call(v) === "[object Array]";
      }, Rt = {}, C0 = {}, pt = {
        INDEXEDDB: De,
        WEBSQL: Ae,
        LOCALSTORAGE: Oi
      }, Pi = [pt.INDEXEDDB._driver, pt.WEBSQL._driver, pt.LOCALSTORAGE._driver], Vt = ["dropInstance"], Jr = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(Vt), Mi = {
        description: "",
        driver: Pi.slice(),
        name: "localforage",
        // Default DB size is _JUST UNDER_ 5MB, as it's the highest size
        // we can use without a prompt.
        size: 4980736,
        storeName: "keyvaluepairs",
        version: 1
      };
      function Hi(v, k) {
        v[k] = function() {
          var b = arguments;
          return v.ready().then(function() {
            return v[k].apply(v, b);
          });
        };
      }
      function e0() {
        for (var v = 1; v < arguments.length; v++) {
          var k = arguments[v];
          if (k)
            for (var b in k)
              k.hasOwnProperty(b) && (S0(k[b]) ? arguments[0][b] = k[b].slice() : arguments[0][b] = k[b]);
        }
        return arguments[0];
      }
      var Fi = function() {
        function v(k) {
          a(this, v);
          for (var b in pt)
            if (pt.hasOwnProperty(b)) {
              var N = pt[b], D = N._driver;
              this[b] = D, Rt[D] || this.defineDriver(N);
            }
          this._defaultConfig = e0({}, Mi), this._config = e0({}, this._defaultConfig, k), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch(function() {
          });
        }
        return v.prototype.config = function(b) {
          if ((typeof b > "u" ? "undefined" : o(b)) === "object") {
            if (this._ready)
              return new Error("Can't call config() after localforage has been used.");
            for (var N in b) {
              if (N === "storeName" && (b[N] = b[N].replace(/\W/g, "_")), N === "version" && typeof b[N] != "number")
                return new Error("Database version must be a number.");
              this._config[N] = b[N];
            }
            return "driver" in b && b.driver ? this.setDriver(this._config.driver) : !0;
          } else
            return typeof b == "string" ? this._config[b] : this._config;
        }, v.prototype.defineDriver = function(b, N, D) {
          var R = new h(function(z, V) {
            try {
              var K = b._driver, G = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
              if (!b._driver) {
                V(G);
                return;
              }
              for (var Z = Jr.concat("_initStorage"), Q = 0, se = Z.length; Q < se; Q++) {
                var le = Z[Q], he = !Ii(Vt, le);
                if ((he || b[le]) && typeof b[le] != "function") {
                  V(G);
                  return;
                }
              }
              var ge = function() {
                for (var Nt = function($i) {
                  return function() {
                    var Ui = new Error("Method " + $i + " is not implemented by the current driver"), B0 = h.reject(Ui);
                    return u(B0, arguments[arguments.length - 1]), B0;
                  };
                }, t0 = 0, qi = Vt.length; t0 < qi; t0++) {
                  var r0 = Vt[t0];
                  b[r0] || (b[r0] = Nt(r0));
                }
              };
              ge();
              var be = function(Nt) {
                Rt[K] && console.info("Redefining LocalForage driver: " + K), Rt[K] = b, C0[K] = Nt, z();
              };
              "_support" in b ? b._support && typeof b._support == "function" ? b._support().then(be, V) : be(!!b._support) : be(!0);
            } catch (Ie) {
              V(Ie);
            }
          });
          return p(R, N, D), R;
        }, v.prototype.driver = function() {
          return this._driver || null;
        }, v.prototype.getDriver = function(b, N, D) {
          var R = Rt[b] ? h.resolve(Rt[b]) : h.reject(new Error("Driver not found."));
          return p(R, N, D), R;
        }, v.prototype.getSerializer = function(b) {
          var N = h.resolve(Bt);
          return p(N, b), N;
        }, v.prototype.ready = function(b) {
          var N = this, D = N._driverSet.then(function() {
            return N._ready === null && (N._ready = N._initDriver()), N._ready;
          });
          return p(D, b, b), D;
        }, v.prototype.setDriver = function(b, N, D) {
          var R = this;
          S0(b) || (b = [b]);
          var z = this._getSupportedDrivers(b);
          function V() {
            R._config.driver = R.driver();
          }
          function K(Q) {
            return R._extend(Q), V(), R._ready = R._initStorage(R._config), R._ready;
          }
          function G(Q) {
            return function() {
              var se = 0;
              function le() {
                for (; se < Q.length; ) {
                  var he = Q[se];
                  return se++, R._dbInfo = null, R._ready = null, R.getDriver(he).then(K).catch(le);
                }
                V();
                var ge = new Error("No available storage method found.");
                return R._driverSet = h.reject(ge), R._driverSet;
              }
              return le();
            };
          }
          var Z = this._driverSet !== null ? this._driverSet.catch(function() {
            return h.resolve();
          }) : h.resolve();
          return this._driverSet = Z.then(function() {
            var Q = z[0];
            return R._dbInfo = null, R._ready = null, R.getDriver(Q).then(function(se) {
              R._driver = se._driver, V(), R._wrapLibraryMethodsWithReady(), R._initDriver = G(z);
            });
          }).catch(function() {
            V();
            var Q = new Error("No available storage method found.");
            return R._driverSet = h.reject(Q), R._driverSet;
          }), p(this._driverSet, N, D), this._driverSet;
        }, v.prototype.supports = function(b) {
          return !!C0[b];
        }, v.prototype._extend = function(b) {
          e0(this, b);
        }, v.prototype._getSupportedDrivers = function(b) {
          for (var N = [], D = 0, R = b.length; D < R; D++) {
            var z = b[D];
            this.supports(z) && N.push(z);
          }
          return N;
        }, v.prototype._wrapLibraryMethodsWithReady = function() {
          for (var b = 0, N = Jr.length; b < N; b++)
            Hi(this, Jr[b]);
        }, v.prototype.createInstance = function(b) {
          return new v(b);
        }, v;
      }(), zi = new Fi();
      n.exports = zi;
    }, { 3: 3 }] }, {}, [4])(4);
  });
})($s);
const Ve = /* @__PURE__ */ Object.create(null);
Ve.open = "0";
Ve.close = "1";
Ve.ping = "2";
Ve.pong = "3";
Ve.message = "4";
Ve.upgrade = "5";
Ve.noop = "6";
const Xt = /* @__PURE__ */ Object.create(null);
Object.keys(Ve).forEach((e) => {
  Xt[Ve[e]] = e;
});
const Us = { type: "error", data: "parser error" }, Ws = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", Ys = typeof ArrayBuffer == "function", Vs = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer, Wn = ({ type: e, data: r }, t, n) => Ws && r instanceof Blob ? t ? n(r) : yn(r, n) : Ys && (r instanceof ArrayBuffer || Vs(r)) ? t ? n(r) : yn(new Blob([r]), n) : n(Ve[e] + (r || "")), yn = (e, r) => {
  const t = new FileReader();
  return t.onload = function() {
    const n = t.result.split(",")[1];
    r("b" + (n || ""));
  }, t.readAsDataURL(e);
}, _n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Lt = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < _n.length; e++)
  Lt[_n.charCodeAt(e)] = e;
const Ks = (e) => {
  let r = e.length * 0.75, t = e.length, n, i = 0, o, a, c, l;
  e[e.length - 1] === "=" && (r--, e[e.length - 2] === "=" && r--);
  const s = new ArrayBuffer(r), f = new Uint8Array(s);
  for (n = 0; n < t; n += 4)
    o = Lt[e.charCodeAt(n)], a = Lt[e.charCodeAt(n + 1)], c = Lt[e.charCodeAt(n + 2)], l = Lt[e.charCodeAt(n + 3)], f[i++] = o << 2 | a >> 4, f[i++] = (a & 15) << 4 | c >> 2, f[i++] = (c & 3) << 6 | l & 63;
  return s;
}, Gs = typeof ArrayBuffer == "function", Yn = (e, r) => {
  if (typeof e != "string")
    return {
      type: "message",
      data: Vn(e, r)
    };
  const t = e.charAt(0);
  return t === "b" ? {
    type: "message",
    data: Zs(e.substring(1), r)
  } : Xt[t] ? e.length > 1 ? {
    type: Xt[t],
    data: e.substring(1)
  } : {
    type: Xt[t]
  } : Us;
}, Zs = (e, r) => {
  if (Gs) {
    const t = Ks(e);
    return Vn(t, r);
  } else
    return { base64: !0, data: e };
}, Vn = (e, r) => {
  switch (r) {
    case "blob":
      return e instanceof ArrayBuffer ? new Blob([e]) : e;
    case "arraybuffer":
    default:
      return e;
  }
}, Kn = String.fromCharCode(30), Xs = (e, r) => {
  const t = e.length, n = new Array(t);
  let i = 0;
  e.forEach((o, a) => {
    Wn(o, !1, (c) => {
      n[a] = c, ++i === t && r(n.join(Kn));
    });
  });
}, js = (e, r) => {
  const t = e.split(Kn), n = [];
  for (let i = 0; i < t.length; i++) {
    const o = Yn(t[i], r);
    if (n.push(o), o.type === "error")
      break;
  }
  return n;
}, Gn = 4;
function me(e) {
  if (e)
    return Qs(e);
}
function Qs(e) {
  for (var r in me.prototype)
    e[r] = me.prototype[r];
  return e;
}
me.prototype.on = me.prototype.addEventListener = function(e, r) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(r), this;
};
me.prototype.once = function(e, r) {
  function t() {
    this.off(e, t), r.apply(this, arguments);
  }
  return t.fn = r, this.on(e, t), this;
};
me.prototype.off = me.prototype.removeListener = me.prototype.removeAllListeners = me.prototype.removeEventListener = function(e, r) {
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
me.prototype.emit = function(e) {
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
me.prototype.emitReserved = me.prototype.emit;
me.prototype.listeners = function(e) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || [];
};
me.prototype.hasListeners = function(e) {
  return !!this.listeners(e).length;
};
const Pe = (() => typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")())();
function Zn(e, ...r) {
  return r.reduce((t, n) => (e.hasOwnProperty(n) && (t[n] = e[n]), t), {});
}
const Js = Pe.setTimeout, ea = Pe.clearTimeout;
function zr(e, r) {
  r.useNativeTimers ? (e.setTimeoutFn = Js.bind(Pe), e.clearTimeoutFn = ea.bind(Pe)) : (e.setTimeoutFn = Pe.setTimeout.bind(Pe), e.clearTimeoutFn = Pe.clearTimeout.bind(Pe));
}
const ta = 1.33;
function ra(e) {
  return typeof e == "string" ? na(e) : Math.ceil((e.byteLength || e.size) * ta);
}
function na(e) {
  let r = 0, t = 0;
  for (let n = 0, i = e.length; n < i; n++)
    r = e.charCodeAt(n), r < 128 ? t += 1 : r < 2048 ? t += 2 : r < 55296 || r >= 57344 ? t += 3 : (n++, t += 4);
  return t;
}
class ia extends Error {
  constructor(r, t, n) {
    super(r), this.description = t, this.context = n, this.type = "TransportError";
  }
}
class Xn extends me {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(r) {
    super(), this.writable = !1, zr(this, r), this.opts = r, this.query = r.query, this.socket = r.socket;
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
    return super.emitReserved("error", new ia(r, t, n)), this;
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
    const t = Yn(r, this.socket.binaryType);
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
const jn = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), c0 = 64, oa = {};
let wn = 0, Kt = 0, En;
function Sn(e) {
  let r = "";
  do
    r = jn[e % c0] + r, e = Math.floor(e / c0);
  while (e > 0);
  return r;
}
function Qn() {
  const e = Sn(+/* @__PURE__ */ new Date());
  return e !== En ? (wn = 0, En = e) : e + "." + Sn(wn++);
}
for (; Kt < c0; Kt++)
  oa[jn[Kt]] = Kt;
function Jn(e) {
  let r = "";
  for (let t in e)
    e.hasOwnProperty(t) && (r.length && (r += "&"), r += encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));
  return r;
}
function sa(e) {
  let r = {}, t = e.split("&");
  for (let n = 0, i = t.length; n < i; n++) {
    let o = t[n].split("=");
    r[decodeURIComponent(o[0])] = decodeURIComponent(o[1]);
  }
  return r;
}
let ei = !1;
try {
  ei = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const aa = ei;
function ti(e) {
  const r = e.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!r || aa))
      return new XMLHttpRequest();
  } catch {
  }
  if (!r)
    try {
      return new Pe[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
function ca() {
}
const fa = function() {
  return new ti({
    xdomain: !1
  }).responseType != null;
}();
class ua extends Xn {
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
    this.supportsBinary = fa && !t;
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
    js(r, this.socket.binaryType).forEach(t), this.readyState !== "closed" && (this.polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this.poll());
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
    this.writable = !1, Xs(r, (t) => {
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
    this.opts.timestampRequests !== !1 && (r[this.opts.timestampParam] = Qn()), !this.supportsBinary && !r.sid && (r.b64 = 1), this.opts.port && (t === "https" && Number(this.opts.port) !== 443 || t === "http" && Number(this.opts.port) !== 80) && (n = ":" + this.opts.port);
    const i = Jn(r), o = this.opts.hostname.indexOf(":") !== -1;
    return t + "://" + (o ? "[" + this.opts.hostname + "]" : this.opts.hostname) + n + this.opts.path + (i.length ? "?" + i : "");
  }
  /**
   * Creates a request.
   *
   * @param {String} method
   * @private
   */
  request(r = {}) {
    return Object.assign(r, { xd: this.xd, xs: this.xs }, this.opts), new Ye(this.uri(), r);
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
class Ye extends me {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(r, t) {
    super(), zr(this, t), this.opts = t, this.method = t.method || "GET", this.uri = r, this.async = t.async !== !1, this.data = t.data !== void 0 ? t.data : null, this.create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  create() {
    const r = Zn(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    r.xdomain = !!this.opts.xd, r.xscheme = !!this.opts.xs;
    const t = this.xhr = new ti(r);
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
    typeof document < "u" && (this.index = Ye.requestsCount++, Ye.requests[this.index] = this);
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
      if (this.xhr.onreadystatechange = ca, r)
        try {
          this.xhr.abort();
        } catch {
        }
      typeof document < "u" && delete Ye.requests[this.index], this.xhr = null;
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
Ye.requestsCount = 0;
Ye.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", Cn);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in Pe ? "pagehide" : "unload";
    addEventListener(e, Cn, !1);
  }
}
function Cn() {
  for (let e in Ye.requests)
    Ye.requests.hasOwnProperty(e) && Ye.requests[e].abort();
}
const ri = (() => typeof Promise == "function" && typeof Promise.resolve == "function" ? (r) => Promise.resolve().then(r) : (r, t) => t(r, 0))(), Gt = Pe.WebSocket || Pe.MozWebSocket, Bn = !0, la = "arraybuffer", kn = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class ha extends Xn {
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
    const r = this.uri(), t = this.opts.protocols, n = kn ? {} : Zn(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (n.headers = this.opts.extraHeaders);
    try {
      this.ws = Bn && !kn ? t ? new Gt(r, t) : new Gt(r) : new Gt(r, t, n);
    } catch (i) {
      return this.emitReserved("error", i);
    }
    this.ws.binaryType = this.socket.binaryType || la, this.addEventListeners();
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
      Wn(n, this.supportsBinary, (o) => {
        const a = {};
        try {
          Bn && this.ws.send(o);
        } catch {
        }
        i && ri(() => {
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
    this.opts.port && (t === "wss" && Number(this.opts.port) !== 443 || t === "ws" && Number(this.opts.port) !== 80) && (n = ":" + this.opts.port), this.opts.timestampRequests && (r[this.opts.timestampParam] = Qn()), this.supportsBinary || (r.b64 = 1);
    const i = Jn(r), o = this.opts.hostname.indexOf(":") !== -1;
    return t + "://" + (o ? "[" + this.opts.hostname + "]" : this.opts.hostname) + n + this.opts.path + (i.length ? "?" + i : "");
  }
  /**
   * Feature detection for WebSocket.
   *
   * @return {Boolean} whether this transport is available.
   * @private
   */
  check() {
    return !!Gt;
  }
}
const da = {
  websocket: ha,
  polling: ua
}, va = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, pa = [
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
function f0(e) {
  const r = e, t = e.indexOf("["), n = e.indexOf("]");
  t != -1 && n != -1 && (e = e.substring(0, t) + e.substring(t, n).replace(/:/g, ";") + e.substring(n, e.length));
  let i = va.exec(e || ""), o = {}, a = 14;
  for (; a--; )
    o[pa[a]] = i[a] || "";
  return t != -1 && n != -1 && (o.source = r, o.host = o.host.substring(1, o.host.length - 1).replace(/;/g, ":"), o.authority = o.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), o.ipv6uri = !0), o.pathNames = xa(o, o.path), o.queryKey = ba(o, o.query), o;
}
function xa(e, r) {
  const t = /\/{2,9}/g, n = r.replace(t, "/").split("/");
  return (r.slice(0, 1) == "/" || r.length === 0) && n.splice(0, 1), r.slice(-1) == "/" && n.splice(n.length - 1, 1), n;
}
function ba(e, r) {
  const t = {};
  return r.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(n, i, o) {
    i && (t[i] = o);
  }), t;
}
let ni = class gt extends me {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(r, t = {}) {
    super(), this.writeBuffer = [], r && typeof r == "object" && (t = r, r = null), r ? (r = f0(r), t.hostname = r.host, t.secure = r.protocol === "https" || r.protocol === "wss", t.port = r.port, r.query && (t.query = r.query)) : t.host && (t.hostname = f0(t.host).host), zr(this, t), this.secure = t.secure != null ? t.secure : typeof location < "u" && location.protocol === "https:", t.hostname && !t.port && (t.port = this.secure ? "443" : "80"), this.hostname = t.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = t.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = t.transports || ["polling", "websocket"], this.writeBuffer = [], this.prevBufferLen = 0, this.opts = Object.assign({
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
    }, t), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = sa(this.opts.query)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingTimeoutTimer = null, typeof addEventListener == "function" && (this.opts.closeOnBeforeunload && (this.beforeunloadEventListener = () => {
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
    t.EIO = Gn, t.transport = r, this.id && (t.sid = this.id);
    const n = Object.assign({}, this.opts.transportOptions[r], this.opts, {
      query: t,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    });
    return new da[r](n);
  }
  /**
   * Initializes transport to use and starts probe.
   *
   * @private
   */
  open() {
    let r;
    if (this.opts.rememberUpgrade && gt.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1)
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
    gt.priorWebsocketSuccess = !1;
    const i = () => {
      n || (t.send([{ type: "ping", data: "probe" }]), t.once("packet", (h) => {
        if (!n)
          if (h.type === "pong" && h.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", t), !t)
              return;
            gt.priorWebsocketSuccess = t.name === "websocket", this.transport.pause(() => {
              n || this.readyState !== "closed" && (f(), this.setTransport(t), t.send([{ type: "upgrade" }]), this.emitReserved("upgrade", t), t = null, this.upgrading = !1, this.flush());
            });
          } else {
            const u = new Error("probe error");
            u.transport = t.name, this.emitReserved("upgradeError", u);
          }
      }));
    };
    function o() {
      n || (n = !0, f(), t.close(), t = null);
    }
    const a = (h) => {
      const u = new Error("probe error: " + h);
      u.transport = t.name, o(), this.emitReserved("upgradeError", u);
    };
    function c() {
      a("transport closed");
    }
    function l() {
      a("socket closed");
    }
    function s(h) {
      t && h.name !== t.name && o();
    }
    const f = () => {
      t.removeListener("open", i), t.removeListener("error", a), t.removeListener("close", c), this.off("close", l), this.off("upgrading", s);
    };
    t.once("open", i), t.once("error", a), t.once("close", c), this.once("close", l), this.once("upgrading", s), t.open();
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    if (this.readyState = "open", gt.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush(), this.readyState === "open" && this.opts.upgrade) {
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
      if (i && (t += ra(i)), n > 0 && t > this.maxPayload)
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
    gt.priorWebsocketSuccess = !1, this.emitReserved("error", r), this.onClose("transport error", r);
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
ni.protocol = Gn;
function ga(e, r = "", t) {
  let n = e;
  t = t || typeof location < "u" && location, e == null && (e = t.protocol + "//" + t.host), typeof e == "string" && (e.charAt(0) === "/" && (e.charAt(1) === "/" ? e = t.protocol + e : e = t.host + e), /^(https?|wss?):\/\//.test(e) || (typeof t < "u" ? e = t.protocol + "//" + e : e = "https://" + e), n = f0(e)), n.port || (/^(http|ws)$/.test(n.protocol) ? n.port = "80" : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")), n.path = n.path || "/";
  const o = n.host.indexOf(":") !== -1 ? "[" + n.host + "]" : n.host;
  return n.id = n.protocol + "://" + o + ":" + n.port + r, n.href = n.protocol + "://" + o + (t && t.port === n.port ? "" : ":" + n.port), n;
}
const ma = typeof ArrayBuffer == "function", ya = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer, ii = Object.prototype.toString, _a = typeof Blob == "function" || typeof Blob < "u" && ii.call(Blob) === "[object BlobConstructor]", wa = typeof File == "function" || typeof File < "u" && ii.call(File) === "[object FileConstructor]";
function _0(e) {
  return ma && (e instanceof ArrayBuffer || ya(e)) || _a && e instanceof Blob || wa && e instanceof File;
}
function jt(e, r) {
  if (!e || typeof e != "object")
    return !1;
  if (Array.isArray(e)) {
    for (let t = 0, n = e.length; t < n; t++)
      if (jt(e[t]))
        return !0;
    return !1;
  }
  if (_0(e))
    return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return jt(e.toJSON(), !0);
  for (const t in e)
    if (Object.prototype.hasOwnProperty.call(e, t) && jt(e[t]))
      return !0;
  return !1;
}
function Ea(e) {
  const r = [], t = e.data, n = e;
  return n.data = u0(t, r), n.attachments = r.length, { packet: n, buffers: r };
}
function u0(e, r) {
  if (!e)
    return e;
  if (_0(e)) {
    const t = { _placeholder: !0, num: r.length };
    return r.push(e), t;
  } else if (Array.isArray(e)) {
    const t = new Array(e.length);
    for (let n = 0; n < e.length; n++)
      t[n] = u0(e[n], r);
    return t;
  } else if (typeof e == "object" && !(e instanceof Date)) {
    const t = {};
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (t[n] = u0(e[n], r));
    return t;
  }
  return e;
}
function Sa(e, r) {
  return e.data = l0(e.data, r), delete e.attachments, e;
}
function l0(e, r) {
  if (!e)
    return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == "number" && e.num >= 0 && e.num < r.length)
      return r[e.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(e))
    for (let t = 0; t < e.length; t++)
      e[t] = l0(e[t], r);
  else if (typeof e == "object")
    for (const t in e)
      Object.prototype.hasOwnProperty.call(e, t) && (e[t] = l0(e[t], r));
  return e;
}
const Ca = 5;
var fe;
(function(e) {
  e[e.CONNECT = 0] = "CONNECT", e[e.DISCONNECT = 1] = "DISCONNECT", e[e.EVENT = 2] = "EVENT", e[e.ACK = 3] = "ACK", e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR", e[e.BINARY_EVENT = 5] = "BINARY_EVENT", e[e.BINARY_ACK = 6] = "BINARY_ACK";
})(fe || (fe = {}));
class Ba {
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
    return (r.type === fe.EVENT || r.type === fe.ACK) && jt(r) ? this.encodeAsBinary({
      type: r.type === fe.EVENT ? fe.BINARY_EVENT : fe.BINARY_ACK,
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
    return (r.type === fe.BINARY_EVENT || r.type === fe.BINARY_ACK) && (t += r.attachments + "-"), r.nsp && r.nsp !== "/" && (t += r.nsp + ","), r.id != null && (t += r.id), r.data != null && (t += JSON.stringify(r.data, this.replacer)), t;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(r) {
    const t = Ea(r), n = this.encodeAsString(t.packet), i = t.buffers;
    return i.unshift(n), i;
  }
}
class w0 extends me {
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
      const n = t.type === fe.BINARY_EVENT;
      n || t.type === fe.BINARY_ACK ? (t.type = n ? fe.EVENT : fe.ACK, this.reconstructor = new ka(t), t.attachments === 0 && super.emitReserved("decoded", t)) : super.emitReserved("decoded", t);
    } else if (_0(r) || r.base64)
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
    if (fe[n.type] === void 0)
      throw new Error("unknown packet type " + n.type);
    if (n.type === fe.BINARY_EVENT || n.type === fe.BINARY_ACK) {
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
      if (w0.isPayloadValid(n.type, o))
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
      case fe.CONNECT:
        return typeof t == "object";
      case fe.DISCONNECT:
        return t === void 0;
      case fe.CONNECT_ERROR:
        return typeof t == "string" || typeof t == "object";
      case fe.EVENT:
      case fe.BINARY_EVENT:
        return Array.isArray(t) && t.length > 0;
      case fe.ACK:
      case fe.BINARY_ACK:
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
class ka {
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
      const t = Sa(this.reconPack, this.buffers);
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
const Aa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: w0,
  Encoder: Ba,
  get PacketType() {
    return fe;
  },
  protocol: Ca
}, Symbol.toStringTag, { value: "Module" }));
function Fe(e, r, t) {
  return e.on(r, t), function() {
    e.off(r, t);
  };
}
const Ra = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class oi extends me {
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
      Fe(r, "open", this.onopen.bind(this)),
      Fe(r, "packet", this.onpacket.bind(this)),
      Fe(r, "error", this.onerror.bind(this)),
      Fe(r, "close", this.onclose.bind(this))
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
    if (Ra.hasOwnProperty(r))
      throw new Error('"' + r.toString() + '" is a reserved event name');
    if (t.unshift(r), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(t), this;
    const n = {
      type: fe.EVENT,
      data: t
    };
    if (n.options = {}, n.options.compress = this.flags.compress !== !1, typeof t[t.length - 1] == "function") {
      const a = this.ids++, c = t.pop();
      this._registerAckCallback(a, c), n.id = a;
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
      t.push((a, c) => n ? a ? o(a) : i(c) : i(a)), this.emit(r, ...t);
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
      type: fe.CONNECT,
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
        case fe.CONNECT:
          r.data && r.data.sid ? this.onconnect(r.data.sid, r.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case fe.EVENT:
        case fe.BINARY_EVENT:
          this.onevent(r);
          break;
        case fe.ACK:
        case fe.BINARY_ACK:
          this.onack(r);
          break;
        case fe.DISCONNECT:
          this.ondisconnect();
          break;
        case fe.CONNECT_ERROR:
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
        type: fe.ACK,
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
function wt(e) {
  e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0;
}
wt.prototype.duration = function() {
  var e = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var r = Math.random(), t = Math.floor(r * this.jitter * e);
    e = Math.floor(r * 10) & 1 ? e + t : e - t;
  }
  return Math.min(e, this.max) | 0;
};
wt.prototype.reset = function() {
  this.attempts = 0;
};
wt.prototype.setMin = function(e) {
  this.ms = e;
};
wt.prototype.setMax = function(e) {
  this.max = e;
};
wt.prototype.setJitter = function(e) {
  this.jitter = e;
};
class h0 extends me {
  constructor(r, t) {
    var n;
    super(), this.nsps = {}, this.subs = [], r && typeof r == "object" && (t = r, r = void 0), t = t || {}, t.path = t.path || "/socket.io", this.opts = t, zr(this, t), this.reconnection(t.reconnection !== !1), this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0), this.reconnectionDelay(t.reconnectionDelay || 1e3), this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3), this.randomizationFactor((n = t.randomizationFactor) !== null && n !== void 0 ? n : 0.5), this.backoff = new wt({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(t.timeout == null ? 2e4 : t.timeout), this._readyState = "closed", this.uri = r;
    const i = t.parser || Aa;
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
    this.engine = new ni(this.uri, this.opts);
    const t = this.engine, n = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const i = Fe(t, "open", function() {
      n.onopen(), r && r();
    }), o = Fe(t, "error", (a) => {
      n.cleanup(), n._readyState = "closed", this.emitReserved("error", a), r ? r(a) : n.maybeReconnectOnOpen();
    });
    if (this._timeout !== !1) {
      const a = this._timeout;
      a === 0 && i();
      const c = this.setTimeoutFn(() => {
        i(), t.close(), t.emit("error", new Error("timeout"));
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
    this.subs.push(Fe(r, "ping", this.onping.bind(this)), Fe(r, "data", this.ondata.bind(this)), Fe(r, "error", this.onerror.bind(this)), Fe(r, "close", this.onclose.bind(this)), Fe(this.decoder, "decoded", this.ondecoded.bind(this)));
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
    ri(() => {
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
    return n ? this._autoConnect && !n.active && n.connect() : (n = new oi(this, r, t), this.nsps[r] = n), n;
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
const Dt = {};
function o0(e, r) {
  typeof e == "object" && (r = e, e = void 0), r = r || {};
  const t = ga(e, r.path || "/socket.io"), n = t.source, i = t.id, o = t.path, a = Dt[i] && o in Dt[i].nsps, c = r.forceNew || r["force new connection"] || r.multiplex === !1 || a;
  let l;
  return c ? l = new h0(n, r) : (Dt[i] || (Dt[i] = new h0(n, r)), l = Dt[i]), t.query && !r.query && (r.query = t.queryKey), l.socket(t.path, r);
}
Object.assign(o0, {
  Manager: h0,
  Socket: oi,
  io: o0,
  connect: o0
});
/*!
 *  decimal.js v10.4.3
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var mt = 9e15, it = 1e9, d0 = "0123456789abcdef", Ir = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", Pr = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", v0 = {
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
  minE: -mt,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: mt,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, si, Qe, oe = !0, qr = "[DecimalError] ", nt = qr + "Invalid argument: ", ai = qr + "Precision limit exceeded", ci = qr + "crypto unavailable", fi = "[object Decimal]", Se = Math.floor, ye = Math.pow, Na = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, Ta = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, Da = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, ui = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, qe = 1e7, te = 7, Oa = 9007199254740991, La = Ir.length - 1, p0 = Pr.length - 1, W = { toStringTag: fi };
W.absoluteValue = W.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), ee(e);
};
W.ceil = function() {
  return ee(new this.constructor(this), this.e + 1, 2);
};
W.clampedTo = W.clamp = function(e, r) {
  var t, n = this, i = n.constructor;
  if (e = new i(e), r = new i(r), !e.s || !r.s)
    return new i(NaN);
  if (e.gt(r))
    throw Error(nt + r);
  return t = n.cmp(e), t < 0 ? e : n.cmp(r) > 0 ? r : new i(n);
};
W.comparedTo = W.cmp = function(e) {
  var r, t, n, i, o = this, a = o.d, c = (e = new o.constructor(e)).d, l = o.s, s = e.s;
  if (!a || !c)
    return !l || !s ? NaN : l !== s ? l : a === c ? 0 : !a ^ l < 0 ? 1 : -1;
  if (!a[0] || !c[0])
    return a[0] ? l : c[0] ? -s : 0;
  if (l !== s)
    return l;
  if (o.e !== e.e)
    return o.e > e.e ^ l < 0 ? 1 : -1;
  for (n = a.length, i = c.length, r = 0, t = n < i ? n : i; r < t; ++r)
    if (a[r] !== c[r])
      return a[r] > c[r] ^ l < 0 ? 1 : -1;
  return n === i ? 0 : n > i ^ l < 0 ? 1 : -1;
};
W.cosine = W.cos = function() {
  var e, r, t = this, n = t.constructor;
  return t.d ? t.d[0] ? (e = n.precision, r = n.rounding, n.precision = e + Math.max(t.e, t.sd()) + te, n.rounding = 1, t = Ia(n, pi(n, t)), n.precision = e, n.rounding = r, ee(Qe == 2 || Qe == 3 ? t.neg() : t, e, r, !0)) : new n(1) : new n(NaN);
};
W.cubeRoot = W.cbrt = function() {
  var e, r, t, n, i, o, a, c, l, s, f = this, h = f.constructor;
  if (!f.isFinite() || f.isZero())
    return new h(f);
  for (oe = !1, o = f.s * ye(f.s * f, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (t = Ee(f.d), e = f.e, (o = (e - t.length + 1) % 3) && (t += o == 1 || o == -2 ? "0" : "00"), o = ye(t, 1 / 3), e = Se((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? t = "5e" + e : (t = o.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new h(t), n.s = f.s) : n = new h(o.toString()), a = (e = h.precision) + 3; ; )
    if (c = n, l = c.times(c).times(c), s = l.plus(f), n = de(s.plus(f).times(c), s.plus(l), a + 2, 1), Ee(c.d).slice(0, a) === (t = Ee(n.d)).slice(0, a))
      if (t = t.slice(a - 3, a + 1), t == "9999" || !i && t == "4999") {
        if (!i && (ee(c, e + 1, 0), c.times(c).times(c).eq(f))) {
          n = c;
          break;
        }
        a += 4, i = 1;
      } else {
        (!+t || !+t.slice(1) && t.charAt(0) == "5") && (ee(n, e + 1, 1), r = !n.times(n).times(n).eq(f));
        break;
      }
  return oe = !0, ee(n, e, h.rounding, r);
};
W.decimalPlaces = W.dp = function() {
  var e, r = this.d, t = NaN;
  if (r) {
    if (e = r.length - 1, t = (e - Se(this.e / te)) * te, e = r[e], e)
      for (; e % 10 == 0; e /= 10)
        t--;
    t < 0 && (t = 0);
  }
  return t;
};
W.dividedBy = W.div = function(e) {
  return de(this, new this.constructor(e));
};
W.dividedToIntegerBy = W.divToInt = function(e) {
  var r = this, t = r.constructor;
  return ee(de(r, new t(e), 0, 1, 1), t.precision, t.rounding);
};
W.equals = W.eq = function(e) {
  return this.cmp(e) === 0;
};
W.floor = function() {
  return ee(new this.constructor(this), this.e + 1, 3);
};
W.greaterThan = W.gt = function(e) {
  return this.cmp(e) > 0;
};
W.greaterThanOrEqualTo = W.gte = function(e) {
  var r = this.cmp(e);
  return r == 1 || r === 0;
};
W.hyperbolicCosine = W.cosh = function() {
  var e, r, t, n, i, o = this, a = o.constructor, c = new a(1);
  if (!o.isFinite())
    return new a(o.s ? 1 / 0 : NaN);
  if (o.isZero())
    return c;
  t = a.precision, n = a.rounding, a.precision = t + Math.max(o.e, o.sd()) + 4, a.rounding = 1, i = o.d.length, i < 32 ? (e = Math.ceil(i / 3), r = (1 / Ur(4, e)).toString()) : (e = 16, r = "2.3283064365386962890625e-10"), o = _t(a, 1, o.times(r), new a(1), !0);
  for (var l, s = e, f = new a(8); s--; )
    l = o.times(o), o = c.minus(l.times(f.minus(l.times(f))));
  return ee(o, a.precision = t, a.rounding = n, !0);
};
W.hyperbolicSine = W.sinh = function() {
  var e, r, t, n, i = this, o = i.constructor;
  if (!i.isFinite() || i.isZero())
    return new o(i);
  if (r = o.precision, t = o.rounding, o.precision = r + Math.max(i.e, i.sd()) + 4, o.rounding = 1, n = i.d.length, n < 3)
    i = _t(o, 2, i, i, !0);
  else {
    e = 1.4 * Math.sqrt(n), e = e > 16 ? 16 : e | 0, i = i.times(1 / Ur(5, e)), i = _t(o, 2, i, i, !0);
    for (var a, c = new o(5), l = new o(16), s = new o(20); e--; )
      a = i.times(i), i = i.times(c.plus(a.times(l.times(a).plus(s))));
  }
  return o.precision = r, o.rounding = t, ee(i, r, t, !0);
};
W.hyperbolicTangent = W.tanh = function() {
  var e, r, t = this, n = t.constructor;
  return t.isFinite() ? t.isZero() ? new n(t) : (e = n.precision, r = n.rounding, n.precision = e + 7, n.rounding = 1, de(t.sinh(), t.cosh(), n.precision = e, n.rounding = r)) : new n(t.s);
};
W.inverseCosine = W.acos = function() {
  var e, r = this, t = r.constructor, n = r.abs().cmp(1), i = t.precision, o = t.rounding;
  return n !== -1 ? n === 0 ? r.isNeg() ? ze(t, i, o) : new t(0) : new t(NaN) : r.isZero() ? ze(t, i + 4, o).times(0.5) : (t.precision = i + 6, t.rounding = 1, r = r.asin(), e = ze(t, i + 4, o).times(0.5), t.precision = i, t.rounding = o, e.minus(r));
};
W.inverseHyperbolicCosine = W.acosh = function() {
  var e, r, t = this, n = t.constructor;
  return t.lte(1) ? new n(t.eq(1) ? 0 : NaN) : t.isFinite() ? (e = n.precision, r = n.rounding, n.precision = e + Math.max(Math.abs(t.e), t.sd()) + 4, n.rounding = 1, oe = !1, t = t.times(t).minus(1).sqrt().plus(t), oe = !0, n.precision = e, n.rounding = r, t.ln()) : new n(t);
};
W.inverseHyperbolicSine = W.asinh = function() {
  var e, r, t = this, n = t.constructor;
  return !t.isFinite() || t.isZero() ? new n(t) : (e = n.precision, r = n.rounding, n.precision = e + 2 * Math.max(Math.abs(t.e), t.sd()) + 6, n.rounding = 1, oe = !1, t = t.times(t).plus(1).sqrt().plus(t), oe = !0, n.precision = e, n.rounding = r, t.ln());
};
W.inverseHyperbolicTangent = W.atanh = function() {
  var e, r, t, n, i = this, o = i.constructor;
  return i.isFinite() ? i.e >= 0 ? new o(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = o.precision, r = o.rounding, n = i.sd(), Math.max(n, e) < 2 * -i.e - 1 ? ee(new o(i), e, r, !0) : (o.precision = t = n - i.e, i = de(i.plus(1), new o(1).minus(i), t + e, 1), o.precision = e + 4, o.rounding = 1, i = i.ln(), o.precision = e, o.rounding = r, i.times(0.5))) : new o(NaN);
};
W.inverseSine = W.asin = function() {
  var e, r, t, n, i = this, o = i.constructor;
  return i.isZero() ? new o(i) : (r = i.abs().cmp(1), t = o.precision, n = o.rounding, r !== -1 ? r === 0 ? (e = ze(o, t + 4, n).times(0.5), e.s = i.s, e) : new o(NaN) : (o.precision = t + 6, o.rounding = 1, i = i.div(new o(1).minus(i.times(i)).sqrt().plus(1)).atan(), o.precision = t, o.rounding = n, i.times(2)));
};
W.inverseTangent = W.atan = function() {
  var e, r, t, n, i, o, a, c, l, s = this, f = s.constructor, h = f.precision, u = f.rounding;
  if (s.isFinite()) {
    if (s.isZero())
      return new f(s);
    if (s.abs().eq(1) && h + 4 <= p0)
      return a = ze(f, h + 4, u).times(0.25), a.s = s.s, a;
  } else {
    if (!s.s)
      return new f(NaN);
    if (h + 4 <= p0)
      return a = ze(f, h + 4, u).times(0.5), a.s = s.s, a;
  }
  for (f.precision = c = h + 10, f.rounding = 1, t = Math.min(28, c / te + 2 | 0), e = t; e; --e)
    s = s.div(s.times(s).plus(1).sqrt().plus(1));
  for (oe = !1, r = Math.ceil(c / te), n = 1, l = s.times(s), a = new f(s), i = s; e !== -1; )
    if (i = i.times(l), o = a.minus(i.div(n += 2)), i = i.times(l), a = o.plus(i.div(n += 2)), a.d[r] !== void 0)
      for (e = r; a.d[e] === o.d[e] && e--; )
        ;
  return t && (a = a.times(2 << t - 1)), oe = !0, ee(a, f.precision = h, f.rounding = u, !0);
};
W.isFinite = function() {
  return !!this.d;
};
W.isInteger = W.isInt = function() {
  return !!this.d && Se(this.e / te) > this.d.length - 2;
};
W.isNaN = function() {
  return !this.s;
};
W.isNegative = W.isNeg = function() {
  return this.s < 0;
};
W.isPositive = W.isPos = function() {
  return this.s > 0;
};
W.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
W.lessThan = W.lt = function(e) {
  return this.cmp(e) < 0;
};
W.lessThanOrEqualTo = W.lte = function(e) {
  return this.cmp(e) < 1;
};
W.logarithm = W.log = function(e) {
  var r, t, n, i, o, a, c, l, s = this, f = s.constructor, h = f.precision, u = f.rounding, p = 5;
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
  if (oe = !1, c = h + p, a = rt(s, c), n = r ? Mr(f, c + 10) : rt(e, c), l = de(a, n, c, 1), Pt(l.d, i = h, u))
    do
      if (c += 10, a = rt(s, c), n = r ? Mr(f, c + 10) : rt(e, c), l = de(a, n, c, 1), !o) {
        +Ee(l.d).slice(i + 1, i + 15) + 1 == 1e14 && (l = ee(l, h + 1, 0));
        break;
      }
    while (Pt(l.d, i += 10, u));
  return oe = !0, ee(l, h, u);
};
W.minus = W.sub = function(e) {
  var r, t, n, i, o, a, c, l, s, f, h, u, p = this, g = p.constructor;
  if (e = new g(e), !p.d || !e.d)
    return !p.s || !e.s ? e = new g(NaN) : p.d ? e.s = -e.s : e = new g(e.d || p.s !== e.s ? p : NaN), e;
  if (p.s != e.s)
    return e.s = -e.s, p.plus(e);
  if (s = p.d, u = e.d, c = g.precision, l = g.rounding, !s[0] || !u[0]) {
    if (u[0])
      e.s = -e.s;
    else if (s[0])
      e = new g(p);
    else
      return new g(l === 3 ? -0 : 0);
    return oe ? ee(e, c, l) : e;
  }
  if (t = Se(e.e / te), f = Se(p.e / te), s = s.slice(), o = f - t, o) {
    for (h = o < 0, h ? (r = s, o = -o, a = u.length) : (r = u, t = f, a = s.length), n = Math.max(Math.ceil(c / te), a) + 2, o > n && (o = n, r.length = 1), r.reverse(), n = o; n--; )
      r.push(0);
    r.reverse();
  } else {
    for (n = s.length, a = u.length, h = n < a, h && (a = n), n = 0; n < a; n++)
      if (s[n] != u[n]) {
        h = s[n] < u[n];
        break;
      }
    o = 0;
  }
  for (h && (r = s, s = u, u = r, e.s = -e.s), a = s.length, n = u.length - a; n > 0; --n)
    s[a++] = 0;
  for (n = u.length; n > o; ) {
    if (s[--n] < u[n]) {
      for (i = n; i && s[--i] === 0; )
        s[i] = qe - 1;
      --s[i], s[n] += qe;
    }
    s[n] -= u[n];
  }
  for (; s[--a] === 0; )
    s.pop();
  for (; s[0] === 0; s.shift())
    --t;
  return s[0] ? (e.d = s, e.e = $r(s, t), oe ? ee(e, c, l) : e) : new g(l === 3 ? -0 : 0);
};
W.modulo = W.mod = function(e) {
  var r, t = this, n = t.constructor;
  return e = new n(e), !t.d || !e.s || e.d && !e.d[0] ? new n(NaN) : !e.d || t.d && !t.d[0] ? ee(new n(t), n.precision, n.rounding) : (oe = !1, n.modulo == 9 ? (r = de(t, e.abs(), 0, 3, 1), r.s *= e.s) : r = de(t, e, 0, n.modulo, 1), r = r.times(e), oe = !0, t.minus(r));
};
W.naturalExponential = W.exp = function() {
  return x0(this);
};
W.naturalLogarithm = W.ln = function() {
  return rt(this);
};
W.negated = W.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, ee(e);
};
W.plus = W.add = function(e) {
  var r, t, n, i, o, a, c, l, s, f, h = this, u = h.constructor;
  if (e = new u(e), !h.d || !e.d)
    return !h.s || !e.s ? e = new u(NaN) : h.d || (e = new u(e.d || h.s === e.s ? h : NaN)), e;
  if (h.s != e.s)
    return e.s = -e.s, h.minus(e);
  if (s = h.d, f = e.d, c = u.precision, l = u.rounding, !s[0] || !f[0])
    return f[0] || (e = new u(h)), oe ? ee(e, c, l) : e;
  if (o = Se(h.e / te), n = Se(e.e / te), s = s.slice(), i = o - n, i) {
    for (i < 0 ? (t = s, i = -i, a = f.length) : (t = f, n = o, a = s.length), o = Math.ceil(c / te), a = o > a ? o + 1 : a + 1, i > a && (i = a, t.length = 1), t.reverse(); i--; )
      t.push(0);
    t.reverse();
  }
  for (a = s.length, i = f.length, a - i < 0 && (i = a, t = f, f = s, s = t), r = 0; i; )
    r = (s[--i] = s[i] + f[i] + r) / qe | 0, s[i] %= qe;
  for (r && (s.unshift(r), ++n), a = s.length; s[--a] == 0; )
    s.pop();
  return e.d = s, e.e = $r(s, n), oe ? ee(e, c, l) : e;
};
W.precision = W.sd = function(e) {
  var r, t = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(nt + e);
  return t.d ? (r = li(t.d), e && t.e + 1 > r && (r = t.e + 1)) : r = NaN, r;
};
W.round = function() {
  var e = this, r = e.constructor;
  return ee(new r(e), e.e + 1, r.rounding);
};
W.sine = W.sin = function() {
  var e, r, t = this, n = t.constructor;
  return t.isFinite() ? t.isZero() ? new n(t) : (e = n.precision, r = n.rounding, n.precision = e + Math.max(t.e, t.sd()) + te, n.rounding = 1, t = Ma(n, pi(n, t)), n.precision = e, n.rounding = r, ee(Qe > 2 ? t.neg() : t, e, r, !0)) : new n(NaN);
};
W.squareRoot = W.sqrt = function() {
  var e, r, t, n, i, o, a = this, c = a.d, l = a.e, s = a.s, f = a.constructor;
  if (s !== 1 || !c || !c[0])
    return new f(!s || s < 0 && (!c || c[0]) ? NaN : c ? a : 1 / 0);
  for (oe = !1, s = Math.sqrt(+a), s == 0 || s == 1 / 0 ? (r = Ee(c), (r.length + l) % 2 == 0 && (r += "0"), s = Math.sqrt(r), l = Se((l + 1) / 2) - (l < 0 || l % 2), s == 1 / 0 ? r = "5e" + l : (r = s.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + l), n = new f(r)) : n = new f(s.toString()), t = (l = f.precision) + 3; ; )
    if (o = n, n = o.plus(de(a, o, t + 2, 1)).times(0.5), Ee(o.d).slice(0, t) === (r = Ee(n.d)).slice(0, t))
      if (r = r.slice(t - 3, t + 1), r == "9999" || !i && r == "4999") {
        if (!i && (ee(o, l + 1, 0), o.times(o).eq(a))) {
          n = o;
          break;
        }
        t += 4, i = 1;
      } else {
        (!+r || !+r.slice(1) && r.charAt(0) == "5") && (ee(n, l + 1, 1), e = !n.times(n).eq(a));
        break;
      }
  return oe = !0, ee(n, l, f.rounding, e);
};
W.tangent = W.tan = function() {
  var e, r, t = this, n = t.constructor;
  return t.isFinite() ? t.isZero() ? new n(t) : (e = n.precision, r = n.rounding, n.precision = e + 10, n.rounding = 1, t = t.sin(), t.s = 1, t = de(t, new n(1).minus(t.times(t)).sqrt(), e + 10, 0), n.precision = e, n.rounding = r, ee(Qe == 2 || Qe == 4 ? t.neg() : t, e, r, !0)) : new n(NaN);
};
W.times = W.mul = function(e) {
  var r, t, n, i, o, a, c, l, s, f = this, h = f.constructor, u = f.d, p = (e = new h(e)).d;
  if (e.s *= f.s, !u || !u[0] || !p || !p[0])
    return new h(!e.s || u && !u[0] && !p || p && !p[0] && !u ? NaN : !u || !p ? e.s / 0 : e.s * 0);
  for (t = Se(f.e / te) + Se(e.e / te), l = u.length, s = p.length, l < s && (o = u, u = p, p = o, a = l, l = s, s = a), o = [], a = l + s, n = a; n--; )
    o.push(0);
  for (n = s; --n >= 0; ) {
    for (r = 0, i = l + n; i > n; )
      c = o[i] + p[n] * u[i - n - 1] + r, o[i--] = c % qe | 0, r = c / qe | 0;
    o[i] = (o[i] + r) % qe | 0;
  }
  for (; !o[--a]; )
    o.pop();
  return r ? ++t : o.shift(), e.d = o, e.e = $r(o, t), oe ? ee(e, h.precision, h.rounding) : e;
};
W.toBinary = function(e, r) {
  return E0(this, 2, e, r);
};
W.toDecimalPlaces = W.toDP = function(e, r) {
  var t = this, n = t.constructor;
  return t = new n(t), e === void 0 ? t : (Te(e, 0, it), r === void 0 ? r = n.rounding : Te(r, 0, 8), ee(t, e + t.e + 1, r));
};
W.toExponential = function(e, r) {
  var t, n = this, i = n.constructor;
  return e === void 0 ? t = Ke(n, !0) : (Te(e, 0, it), r === void 0 ? r = i.rounding : Te(r, 0, 8), n = ee(new i(n), e + 1, r), t = Ke(n, !0, e + 1)), n.isNeg() && !n.isZero() ? "-" + t : t;
};
W.toFixed = function(e, r) {
  var t, n, i = this, o = i.constructor;
  return e === void 0 ? t = Ke(i) : (Te(e, 0, it), r === void 0 ? r = o.rounding : Te(r, 0, 8), n = ee(new o(i), e + i.e + 1, r), t = Ke(n, !1, e + n.e + 1)), i.isNeg() && !i.isZero() ? "-" + t : t;
};
W.toFraction = function(e) {
  var r, t, n, i, o, a, c, l, s, f, h, u, p = this, g = p.d, w = p.constructor;
  if (!g)
    return new w(p);
  if (s = t = new w(1), n = l = new w(0), r = new w(n), o = r.e = li(g) - p.e - 1, a = o % te, r.d[0] = ye(10, a < 0 ? te + a : a), e == null)
    e = o > 0 ? r : s;
  else {
    if (c = new w(e), !c.isInt() || c.lt(s))
      throw Error(nt + c);
    e = c.gt(r) ? o > 0 ? r : s : c;
  }
  for (oe = !1, c = new w(Ee(g)), f = w.precision, w.precision = o = g.length * te * 2; h = de(c, r, 0, 1, 1), i = t.plus(h.times(n)), i.cmp(e) != 1; )
    t = n, n = i, i = s, s = l.plus(h.times(i)), l = i, i = r, r = c.minus(h.times(i)), c = i;
  return i = de(e.minus(t), n, 0, 1, 1), l = l.plus(i.times(s)), t = t.plus(i.times(n)), l.s = s.s = p.s, u = de(s, n, o, 1).minus(p).abs().cmp(de(l, t, o, 1).minus(p).abs()) < 1 ? [s, n] : [l, t], w.precision = f, oe = !0, u;
};
W.toHexadecimal = W.toHex = function(e, r) {
  return E0(this, 16, e, r);
};
W.toNearest = function(e, r) {
  var t = this, n = t.constructor;
  if (t = new n(t), e == null) {
    if (!t.d)
      return t;
    e = new n(1), r = n.rounding;
  } else {
    if (e = new n(e), r === void 0 ? r = n.rounding : Te(r, 0, 8), !t.d)
      return e.s ? t : e;
    if (!e.d)
      return e.s && (e.s = t.s), e;
  }
  return e.d[0] ? (oe = !1, t = de(t, e, 0, r, 1).times(e), oe = !0, ee(t)) : (e.s = t.s, t = e), t;
};
W.toNumber = function() {
  return +this;
};
W.toOctal = function(e, r) {
  return E0(this, 8, e, r);
};
W.toPower = W.pow = function(e) {
  var r, t, n, i, o, a, c = this, l = c.constructor, s = +(e = new l(e));
  if (!c.d || !e.d || !c.d[0] || !e.d[0])
    return new l(ye(+c, s));
  if (c = new l(c), c.eq(1))
    return c;
  if (n = l.precision, o = l.rounding, e.eq(1))
    return ee(c, n, o);
  if (r = Se(e.e / te), r >= e.d.length - 1 && (t = s < 0 ? -s : s) <= Oa)
    return i = hi(l, c, t, n), e.s < 0 ? new l(1).div(i) : ee(i, n, o);
  if (a = c.s, a < 0) {
    if (r < e.d.length - 1)
      return new l(NaN);
    if (e.d[r] & 1 || (a = 1), c.e == 0 && c.d[0] == 1 && c.d.length == 1)
      return c.s = a, c;
  }
  return t = ye(+c, s), r = t == 0 || !isFinite(t) ? Se(s * (Math.log("0." + Ee(c.d)) / Math.LN10 + c.e + 1)) : new l(t + "").e, r > l.maxE + 1 || r < l.minE - 1 ? new l(r > 0 ? a / 0 : 0) : (oe = !1, l.rounding = c.s = 1, t = Math.min(12, (r + "").length), i = x0(e.times(rt(c, n + t)), n), i.d && (i = ee(i, n + 5, 1), Pt(i.d, n, o) && (r = n + 10, i = ee(x0(e.times(rt(c, r + t)), r), r + 5, 1), +Ee(i.d).slice(n + 1, n + 15) + 1 == 1e14 && (i = ee(i, n + 1, 0)))), i.s = a, oe = !0, l.rounding = o, ee(i, n, o));
};
W.toPrecision = function(e, r) {
  var t, n = this, i = n.constructor;
  return e === void 0 ? t = Ke(n, n.e <= i.toExpNeg || n.e >= i.toExpPos) : (Te(e, 1, it), r === void 0 ? r = i.rounding : Te(r, 0, 8), n = ee(new i(n), e, r), t = Ke(n, e <= n.e || n.e <= i.toExpNeg, e)), n.isNeg() && !n.isZero() ? "-" + t : t;
};
W.toSignificantDigits = W.toSD = function(e, r) {
  var t = this, n = t.constructor;
  return e === void 0 ? (e = n.precision, r = n.rounding) : (Te(e, 1, it), r === void 0 ? r = n.rounding : Te(r, 0, 8)), ee(new n(t), e, r);
};
W.toString = function() {
  var e = this, r = e.constructor, t = Ke(e, e.e <= r.toExpNeg || e.e >= r.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + t : t;
};
W.truncated = W.trunc = function() {
  return ee(new this.constructor(this), this.e + 1, 1);
};
W.valueOf = W.toJSON = function() {
  var e = this, r = e.constructor, t = Ke(e, e.e <= r.toExpNeg || e.e >= r.toExpPos);
  return e.isNeg() ? "-" + t : t;
};
function Ee(e) {
  var r, t, n, i = e.length - 1, o = "", a = e[0];
  if (i > 0) {
    for (o += a, r = 1; r < i; r++)
      n = e[r] + "", t = te - n.length, t && (o += tt(t)), o += n;
    a = e[r], n = a + "", t = te - n.length, t && (o += tt(t));
  } else if (a === 0)
    return "0";
  for (; a % 10 === 0; )
    a /= 10;
  return o + a;
}
function Te(e, r, t) {
  if (e !== ~~e || e < r || e > t)
    throw Error(nt + e);
}
function Pt(e, r, t, n) {
  var i, o, a, c;
  for (o = e[0]; o >= 10; o /= 10)
    --r;
  return --r < 0 ? (r += te, i = 0) : (i = Math.ceil((r + 1) / te), r %= te), o = ye(10, te - r), c = e[i] % o | 0, n == null ? r < 3 ? (r == 0 ? c = c / 100 | 0 : r == 1 && (c = c / 10 | 0), a = t < 4 && c == 99999 || t > 3 && c == 49999 || c == 5e4 || c == 0) : a = (t < 4 && c + 1 == o || t > 3 && c + 1 == o / 2) && (e[i + 1] / o / 100 | 0) == ye(10, r - 2) - 1 || (c == o / 2 || c == 0) && (e[i + 1] / o / 100 | 0) == 0 : r < 4 ? (r == 0 ? c = c / 1e3 | 0 : r == 1 ? c = c / 100 | 0 : r == 2 && (c = c / 10 | 0), a = (n || t < 4) && c == 9999 || !n && t > 3 && c == 4999) : a = ((n || t < 4) && c + 1 == o || !n && t > 3 && c + 1 == o / 2) && (e[i + 1] / o / 1e3 | 0) == ye(10, r - 3) - 1, a;
}
function Qt(e, r, t) {
  for (var n, i = [0], o, a = 0, c = e.length; a < c; ) {
    for (o = i.length; o--; )
      i[o] *= r;
    for (i[0] += d0.indexOf(e.charAt(a++)), n = 0; n < i.length; n++)
      i[n] > t - 1 && (i[n + 1] === void 0 && (i[n + 1] = 0), i[n + 1] += i[n] / t | 0, i[n] %= t);
  }
  return i.reverse();
}
function Ia(e, r) {
  var t, n, i;
  if (r.isZero())
    return r;
  n = r.d.length, n < 32 ? (t = Math.ceil(n / 3), i = (1 / Ur(4, t)).toString()) : (t = 16, i = "2.3283064365386962890625e-10"), e.precision += t, r = _t(e, 1, r.times(i), new e(1));
  for (var o = t; o--; ) {
    var a = r.times(r);
    r = a.times(a).minus(a).times(8).plus(1);
  }
  return e.precision -= t, r;
}
var de = function() {
  function e(n, i, o) {
    var a, c = 0, l = n.length;
    for (n = n.slice(); l--; )
      a = n[l] * i + c, n[l] = a % o | 0, c = a / o | 0;
    return c && n.unshift(c), n;
  }
  function r(n, i, o, a) {
    var c, l;
    if (o != a)
      l = o > a ? 1 : -1;
    else
      for (c = l = 0; c < o; c++)
        if (n[c] != i[c]) {
          l = n[c] > i[c] ? 1 : -1;
          break;
        }
    return l;
  }
  function t(n, i, o, a) {
    for (var c = 0; o--; )
      n[o] -= c, c = n[o] < i[o] ? 1 : 0, n[o] = c * a + n[o] - i[o];
    for (; !n[0] && n.length > 1; )
      n.shift();
  }
  return function(n, i, o, a, c, l) {
    var s, f, h, u, p, g, w, C, T, _, d, x, m, y, S, B, O, E, A, I, L = n.constructor, H = n.s == i.s ? 1 : -1, P = n.d, q = i.d;
    if (!P || !P[0] || !q || !q[0])
      return new L(
        // Return NaN if either NaN, or both Infinity or 0.
        !n.s || !i.s || (P ? q && P[0] == q[0] : !q) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          P && P[0] == 0 || !q ? H * 0 : H / 0
        )
      );
    for (l ? (p = 1, f = n.e - i.e) : (l = qe, p = te, f = Se(n.e / p) - Se(i.e / p)), A = q.length, O = P.length, T = new L(H), _ = T.d = [], h = 0; q[h] == (P[h] || 0); h++)
      ;
    if (q[h] > (P[h] || 0) && f--, o == null ? (y = o = L.precision, a = L.rounding) : c ? y = o + (n.e - i.e) + 1 : y = o, y < 0)
      _.push(1), g = !0;
    else {
      if (y = y / p + 2 | 0, h = 0, A == 1) {
        for (u = 0, q = q[0], y++; (h < O || u) && y--; h++)
          S = u * l + (P[h] || 0), _[h] = S / q | 0, u = S % q | 0;
        g = u || h < O;
      } else {
        for (u = l / (q[0] + 1) | 0, u > 1 && (q = e(q, u, l), P = e(P, u, l), A = q.length, O = P.length), B = A, d = P.slice(0, A), x = d.length; x < A; )
          d[x++] = 0;
        I = q.slice(), I.unshift(0), E = q[0], q[1] >= l / 2 && ++E;
        do
          u = 0, s = r(q, d, A, x), s < 0 ? (m = d[0], A != x && (m = m * l + (d[1] || 0)), u = m / E | 0, u > 1 ? (u >= l && (u = l - 1), w = e(q, u, l), C = w.length, x = d.length, s = r(w, d, C, x), s == 1 && (u--, t(w, A < C ? I : q, C, l))) : (u == 0 && (s = u = 1), w = q.slice()), C = w.length, C < x && w.unshift(0), t(d, w, x, l), s == -1 && (x = d.length, s = r(q, d, A, x), s < 1 && (u++, t(d, A < x ? I : q, x, l))), x = d.length) : s === 0 && (u++, d = [0]), _[h++] = u, s && d[0] ? d[x++] = P[B] || 0 : (d = [P[B]], x = 1);
        while ((B++ < O || d[0] !== void 0) && y--);
        g = d[0] !== void 0;
      }
      _[0] || _.shift();
    }
    if (p == 1)
      T.e = f, si = g;
    else {
      for (h = 1, u = _[0]; u >= 10; u /= 10)
        h++;
      T.e = h + f * p - 1, ee(T, c ? o + T.e + 1 : o, a, g);
    }
    return T;
  };
}();
function ee(e, r, t, n) {
  var i, o, a, c, l, s, f, h, u, p = e.constructor;
  e:
    if (r != null) {
      if (h = e.d, !h)
        return e;
      for (i = 1, c = h[0]; c >= 10; c /= 10)
        i++;
      if (o = r - i, o < 0)
        o += te, a = r, f = h[u = 0], l = f / ye(10, i - a - 1) % 10 | 0;
      else if (u = Math.ceil((o + 1) / te), c = h.length, u >= c)
        if (n) {
          for (; c++ <= u; )
            h.push(0);
          f = l = 0, i = 1, o %= te, a = o - te + 1;
        } else
          break e;
      else {
        for (f = c = h[u], i = 1; c >= 10; c /= 10)
          i++;
        o %= te, a = o - te + i, l = a < 0 ? 0 : f / ye(10, i - a - 1) % 10 | 0;
      }
      if (n = n || r < 0 || h[u + 1] !== void 0 || (a < 0 ? f : f % ye(10, i - a - 1)), s = t < 4 ? (l || n) && (t == 0 || t == (e.s < 0 ? 3 : 2)) : l > 5 || l == 5 && (t == 4 || n || t == 6 && // Check whether the digit to the left of the rounding digit is odd.
      (o > 0 ? a > 0 ? f / ye(10, i - a) : 0 : h[u - 1]) % 10 & 1 || t == (e.s < 0 ? 8 : 7)), r < 1 || !h[0])
        return h.length = 0, s ? (r -= e.e + 1, h[0] = ye(10, (te - r % te) % te), e.e = -r || 0) : h[0] = e.e = 0, e;
      if (o == 0 ? (h.length = u, c = 1, u--) : (h.length = u + 1, c = ye(10, te - o), h[u] = a > 0 ? (f / ye(10, i - a) % ye(10, a) | 0) * c : 0), s)
        for (; ; )
          if (u == 0) {
            for (o = 1, a = h[0]; a >= 10; a /= 10)
              o++;
            for (a = h[0] += c, c = 1; a >= 10; a /= 10)
              c++;
            o != c && (e.e++, h[0] == qe && (h[0] = 1));
            break;
          } else {
            if (h[u] += c, h[u] != qe)
              break;
            h[u--] = 0, c = 1;
          }
      for (o = h.length; h[--o] === 0; )
        h.pop();
    }
  return oe && (e.e > p.maxE ? (e.d = null, e.e = NaN) : e.e < p.minE && (e.e = 0, e.d = [0])), e;
}
function Ke(e, r, t) {
  if (!e.isFinite())
    return vi(e);
  var n, i = e.e, o = Ee(e.d), a = o.length;
  return r ? (t && (n = t - a) > 0 ? o = o.charAt(0) + "." + o.slice(1) + tt(n) : a > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (o = "0." + tt(-i - 1) + o, t && (n = t - a) > 0 && (o += tt(n))) : i >= a ? (o += tt(i + 1 - a), t && (n = t - i - 1) > 0 && (o = o + "." + tt(n))) : ((n = i + 1) < a && (o = o.slice(0, n) + "." + o.slice(n)), t && (n = t - a) > 0 && (i + 1 === a && (o += "."), o += tt(n))), o;
}
function $r(e, r) {
  var t = e[0];
  for (r *= te; t >= 10; t /= 10)
    r++;
  return r;
}
function Mr(e, r, t) {
  if (r > La)
    throw oe = !0, t && (e.precision = t), Error(ai);
  return ee(new e(Ir), r, 1, !0);
}
function ze(e, r, t) {
  if (r > p0)
    throw Error(ai);
  return ee(new e(Pr), r, t, !0);
}
function li(e) {
  var r = e.length - 1, t = r * te + 1;
  if (r = e[r], r) {
    for (; r % 10 == 0; r /= 10)
      t--;
    for (r = e[0]; r >= 10; r /= 10)
      t++;
  }
  return t;
}
function tt(e) {
  for (var r = ""; e--; )
    r += "0";
  return r;
}
function hi(e, r, t, n) {
  var i, o = new e(1), a = Math.ceil(n / te + 4);
  for (oe = !1; ; ) {
    if (t % 2 && (o = o.times(r), Rn(o.d, a) && (i = !0)), t = Se(t / 2), t === 0) {
      t = o.d.length - 1, i && o.d[t] === 0 && ++o.d[t];
      break;
    }
    r = r.times(r), Rn(r.d, a);
  }
  return oe = !0, o;
}
function An(e) {
  return e.d[e.d.length - 1] & 1;
}
function di(e, r, t) {
  for (var n, i = new e(r[0]), o = 0; ++o < r.length; )
    if (n = new e(r[o]), n.s)
      i[t](n) && (i = n);
    else {
      i = n;
      break;
    }
  return i;
}
function x0(e, r) {
  var t, n, i, o, a, c, l, s = 0, f = 0, h = 0, u = e.constructor, p = u.rounding, g = u.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new u(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (r == null ? (oe = !1, l = g) : l = r, c = new u(0.03125); e.e > -2; )
    e = e.times(c), h += 5;
  for (n = Math.log(ye(2, h)) / Math.LN10 * 2 + 5 | 0, l += n, t = o = a = new u(1), u.precision = l; ; ) {
    if (o = ee(o.times(e), l, 1), t = t.times(++f), c = a.plus(de(o, t, l, 1)), Ee(c.d).slice(0, l) === Ee(a.d).slice(0, l)) {
      for (i = h; i--; )
        a = ee(a.times(a), l, 1);
      if (r == null)
        if (s < 3 && Pt(a.d, l - n, p, s))
          u.precision = l += 10, t = o = c = new u(1), f = 0, s++;
        else
          return ee(a, u.precision = g, p, oe = !0);
      else
        return u.precision = g, a;
    }
    a = c;
  }
}
function rt(e, r) {
  var t, n, i, o, a, c, l, s, f, h, u, p = 1, g = 10, w = e, C = w.d, T = w.constructor, _ = T.rounding, d = T.precision;
  if (w.s < 0 || !C || !C[0] || !w.e && C[0] == 1 && C.length == 1)
    return new T(C && !C[0] ? -1 / 0 : w.s != 1 ? NaN : C ? 0 : w);
  if (r == null ? (oe = !1, f = d) : f = r, T.precision = f += g, t = Ee(C), n = t.charAt(0), Math.abs(o = w.e) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && t.charAt(1) > 3; )
      w = w.times(e), t = Ee(w.d), n = t.charAt(0), p++;
    o = w.e, n > 1 ? (w = new T("0." + t), o++) : w = new T(n + "." + t.slice(1));
  } else
    return s = Mr(T, f + 2, d).times(o + ""), w = rt(new T(n + "." + t.slice(1)), f - g).plus(s), T.precision = d, r == null ? ee(w, d, _, oe = !0) : w;
  for (h = w, l = a = w = de(w.minus(1), w.plus(1), f, 1), u = ee(w.times(w), f, 1), i = 3; ; ) {
    if (a = ee(a.times(u), f, 1), s = l.plus(de(a, new T(i), f, 1)), Ee(s.d).slice(0, f) === Ee(l.d).slice(0, f))
      if (l = l.times(2), o !== 0 && (l = l.plus(Mr(T, f + 2, d).times(o + ""))), l = de(l, new T(p), f, 1), r == null)
        if (Pt(l.d, f - g, _, c))
          T.precision = f += g, s = a = w = de(h.minus(1), h.plus(1), f, 1), u = ee(w.times(w), f, 1), i = c = 1;
        else
          return ee(l, T.precision = d, _, oe = !0);
      else
        return T.precision = d, l;
    l = s, i += 2;
  }
}
function vi(e) {
  return String(e.s * e.s / 0);
}
function b0(e, r) {
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
function Pa(e, r) {
  var t, n, i, o, a, c, l, s, f;
  if (r.indexOf("_") > -1) {
    if (r = r.replace(/(\d)_(?=\d)/g, "$1"), ui.test(r))
      return b0(e, r);
  } else if (r === "Infinity" || r === "NaN")
    return +r || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (Ta.test(r))
    t = 16, r = r.toLowerCase();
  else if (Na.test(r))
    t = 2;
  else if (Da.test(r))
    t = 8;
  else
    throw Error(nt + r);
  for (o = r.search(/p/i), o > 0 ? (l = +r.slice(o + 1), r = r.substring(2, o)) : r = r.slice(2), o = r.indexOf("."), a = o >= 0, n = e.constructor, a && (r = r.replace(".", ""), c = r.length, o = c - o, i = hi(n, new n(t), o, o * 2)), s = Qt(r, t, qe), f = s.length - 1, o = f; s[o] === 0; --o)
    s.pop();
  return o < 0 ? new n(e.s * 0) : (e.e = $r(s, f), e.d = s, oe = !1, a && (e = de(e, i, c * 4)), l && (e = e.times(Math.abs(l) < 54 ? ye(2, l) : Mt.pow(2, l))), oe = !0, e);
}
function Ma(e, r) {
  var t, n = r.d.length;
  if (n < 3)
    return r.isZero() ? r : _t(e, 2, r, r);
  t = 1.4 * Math.sqrt(n), t = t > 16 ? 16 : t | 0, r = r.times(1 / Ur(5, t)), r = _t(e, 2, r, r);
  for (var i, o = new e(5), a = new e(16), c = new e(20); t--; )
    i = r.times(r), r = r.times(o.plus(i.times(a.times(i).minus(c))));
  return r;
}
function _t(e, r, t, n, i) {
  var o, a, c, l, s = e.precision, f = Math.ceil(s / te);
  for (oe = !1, l = t.times(t), c = new e(n); ; ) {
    if (a = de(c.times(l), new e(r++ * r++), s, 1), c = i ? n.plus(a) : n.minus(a), n = de(a.times(l), new e(r++ * r++), s, 1), a = c.plus(n), a.d[f] !== void 0) {
      for (o = f; a.d[o] === c.d[o] && o--; )
        ;
      if (o == -1)
        break;
    }
    o = c, c = n, n = a, a = o;
  }
  return oe = !0, a.d.length = f + 1, a;
}
function Ur(e, r) {
  for (var t = e; --r; )
    t *= e;
  return t;
}
function pi(e, r) {
  var t, n = r.s < 0, i = ze(e, e.precision, 1), o = i.times(0.5);
  if (r = r.abs(), r.lte(o))
    return Qe = n ? 4 : 1, r;
  if (t = r.divToInt(i), t.isZero())
    Qe = n ? 3 : 2;
  else {
    if (r = r.minus(t.times(i)), r.lte(o))
      return Qe = An(t) ? n ? 2 : 3 : n ? 4 : 1, r;
    Qe = An(t) ? n ? 1 : 4 : n ? 3 : 2;
  }
  return r.minus(i).abs();
}
function E0(e, r, t, n) {
  var i, o, a, c, l, s, f, h, u, p = e.constructor, g = t !== void 0;
  if (g ? (Te(t, 1, it), n === void 0 ? n = p.rounding : Te(n, 0, 8)) : (t = p.precision, n = p.rounding), !e.isFinite())
    f = vi(e);
  else {
    for (f = Ke(e), a = f.indexOf("."), g ? (i = 2, r == 16 ? t = t * 4 - 3 : r == 8 && (t = t * 3 - 2)) : i = r, a >= 0 && (f = f.replace(".", ""), u = new p(1), u.e = f.length - a, u.d = Qt(Ke(u), 10, i), u.e = u.d.length), h = Qt(f, 10, i), o = l = h.length; h[--l] == 0; )
      h.pop();
    if (!h[0])
      f = g ? "0p+0" : "0";
    else {
      if (a < 0 ? o-- : (e = new p(e), e.d = h, e.e = o, e = de(e, u, t, n, 0, i), h = e.d, o = e.e, s = si), a = h[t], c = i / 2, s = s || h[t + 1] !== void 0, s = n < 4 ? (a !== void 0 || s) && (n === 0 || n === (e.s < 0 ? 3 : 2)) : a > c || a === c && (n === 4 || s || n === 6 && h[t - 1] & 1 || n === (e.s < 0 ? 8 : 7)), h.length = t, s)
        for (; ++h[--t] > i - 1; )
          h[t] = 0, t || (++o, h.unshift(1));
      for (l = h.length; !h[l - 1]; --l)
        ;
      for (a = 0, f = ""; a < l; a++)
        f += d0.charAt(h[a]);
      if (g) {
        if (l > 1)
          if (r == 16 || r == 8) {
            for (a = r == 16 ? 4 : 3, --l; l % a; l++)
              f += "0";
            for (h = Qt(f, i, r), l = h.length; !h[l - 1]; --l)
              ;
            for (a = 1, f = "1."; a < l; a++)
              f += d0.charAt(h[a]);
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
function Rn(e, r) {
  if (e.length > r)
    return e.length = r, !0;
}
function Ha(e) {
  return new this(e).abs();
}
function Fa(e) {
  return new this(e).acos();
}
function za(e) {
  return new this(e).acosh();
}
function qa(e, r) {
  return new this(e).plus(r);
}
function $a(e) {
  return new this(e).asin();
}
function Ua(e) {
  return new this(e).asinh();
}
function Wa(e) {
  return new this(e).atan();
}
function Ya(e) {
  return new this(e).atanh();
}
function Va(e, r) {
  e = new this(e), r = new this(r);
  var t, n = this.precision, i = this.rounding, o = n + 4;
  return !e.s || !r.s ? t = new this(NaN) : !e.d && !r.d ? (t = ze(this, o, 1).times(r.s > 0 ? 0.25 : 0.75), t.s = e.s) : !r.d || e.isZero() ? (t = r.s < 0 ? ze(this, n, i) : new this(0), t.s = e.s) : !e.d || r.isZero() ? (t = ze(this, o, 1).times(0.5), t.s = e.s) : r.s < 0 ? (this.precision = o, this.rounding = 1, t = this.atan(de(e, r, o, 1)), r = ze(this, o, 1), this.precision = n, this.rounding = i, t = e.s < 0 ? t.minus(r) : t.plus(r)) : t = this.atan(de(e, r, o, 1)), t;
}
function Ka(e) {
  return new this(e).cbrt();
}
function Ga(e) {
  return ee(e = new this(e), e.e + 1, 2);
}
function Za(e, r, t) {
  return new this(e).clamp(r, t);
}
function Xa(e) {
  if (!e || typeof e != "object")
    throw Error(qr + "Object expected");
  var r, t, n, i = e.defaults === !0, o = [
    "precision",
    1,
    it,
    "rounding",
    0,
    8,
    "toExpNeg",
    -mt,
    0,
    "toExpPos",
    0,
    mt,
    "maxE",
    0,
    mt,
    "minE",
    -mt,
    0,
    "modulo",
    0,
    9
  ];
  for (r = 0; r < o.length; r += 3)
    if (t = o[r], i && (this[t] = v0[t]), (n = e[t]) !== void 0)
      if (Se(n) === n && n >= o[r + 1] && n <= o[r + 2])
        this[t] = n;
      else
        throw Error(nt + t + ": " + n);
  if (t = "crypto", i && (this[t] = v0[t]), (n = e[t]) !== void 0)
    if (n === !0 || n === !1 || n === 0 || n === 1)
      if (n)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[t] = !0;
        else
          throw Error(ci);
      else
        this[t] = !1;
    else
      throw Error(nt + t + ": " + n);
  return this;
}
function ja(e) {
  return new this(e).cos();
}
function Qa(e) {
  return new this(e).cosh();
}
function xi(e) {
  var r, t, n;
  function i(o) {
    var a, c, l, s = this;
    if (!(s instanceof i))
      return new i(o);
    if (s.constructor = i, Nn(o)) {
      s.s = o.s, oe ? !o.d || o.e > i.maxE ? (s.e = NaN, s.d = null) : o.e < i.minE ? (s.e = 0, s.d = [0]) : (s.e = o.e, s.d = o.d.slice()) : (s.e = o.e, s.d = o.d ? o.d.slice() : o.d);
      return;
    }
    if (l = typeof o, l === "number") {
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
      return b0(s, o.toString());
    } else if (l !== "string")
      throw Error(nt + o);
    return (c = o.charCodeAt(0)) === 45 ? (o = o.slice(1), s.s = -1) : (c === 43 && (o = o.slice(1)), s.s = 1), ui.test(o) ? b0(s, o) : Pa(s, o);
  }
  if (i.prototype = W, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = Xa, i.clone = xi, i.isDecimal = Nn, i.abs = Ha, i.acos = Fa, i.acosh = za, i.add = qa, i.asin = $a, i.asinh = Ua, i.atan = Wa, i.atanh = Ya, i.atan2 = Va, i.cbrt = Ka, i.ceil = Ga, i.clamp = Za, i.cos = ja, i.cosh = Qa, i.div = Ja, i.exp = ec, i.floor = tc, i.hypot = rc, i.ln = nc, i.log = ic, i.log10 = sc, i.log2 = oc, i.max = ac, i.min = cc, i.mod = fc, i.mul = uc, i.pow = lc, i.random = hc, i.round = dc, i.sign = vc, i.sin = pc, i.sinh = xc, i.sqrt = bc, i.sub = gc, i.sum = mc, i.tan = yc, i.tanh = _c, i.trunc = wc, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], r = 0; r < n.length; )
      e.hasOwnProperty(t = n[r++]) || (e[t] = this[t]);
  return i.config(e), i;
}
function Ja(e, r) {
  return new this(e).div(r);
}
function ec(e) {
  return new this(e).exp();
}
function tc(e) {
  return ee(e = new this(e), e.e + 1, 3);
}
function rc() {
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
function Nn(e) {
  return e instanceof Mt || e && e.toStringTag === fi || !1;
}
function nc(e) {
  return new this(e).ln();
}
function ic(e, r) {
  return new this(e).log(r);
}
function oc(e) {
  return new this(e).log(2);
}
function sc(e) {
  return new this(e).log(10);
}
function ac() {
  return di(this, arguments, "lt");
}
function cc() {
  return di(this, arguments, "gt");
}
function fc(e, r) {
  return new this(e).mod(r);
}
function uc(e, r) {
  return new this(e).mul(r);
}
function lc(e, r) {
  return new this(e).pow(r);
}
function hc(e) {
  var r, t, n, i, o = 0, a = new this(1), c = [];
  if (e === void 0 ? e = this.precision : Te(e, 1, it), n = Math.ceil(e / te), this.crypto)
    if (crypto.getRandomValues)
      for (r = crypto.getRandomValues(new Uint32Array(n)); o < n; )
        i = r[o], i >= 429e7 ? r[o] = crypto.getRandomValues(new Uint32Array(1))[0] : c[o++] = i % 1e7;
    else if (crypto.randomBytes) {
      for (r = crypto.randomBytes(n *= 4); o < n; )
        i = r[o] + (r[o + 1] << 8) + (r[o + 2] << 16) + ((r[o + 3] & 127) << 24), i >= 214e7 ? crypto.randomBytes(4).copy(r, o) : (c.push(i % 1e7), o += 4);
      o = n / 4;
    } else
      throw Error(ci);
  else
    for (; o < n; )
      c[o++] = Math.random() * 1e7 | 0;
  for (n = c[--o], e %= te, n && e && (i = ye(10, te - e), c[o] = (n / i | 0) * i); c[o] === 0; o--)
    c.pop();
  if (o < 0)
    t = 0, c = [0];
  else {
    for (t = -1; c[0] === 0; t -= te)
      c.shift();
    for (n = 1, i = c[0]; i >= 10; i /= 10)
      n++;
    n < te && (t -= te - n);
  }
  return a.e = t, a.d = c, a;
}
function dc(e) {
  return ee(e = new this(e), e.e + 1, this.rounding);
}
function vc(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function pc(e) {
  return new this(e).sin();
}
function xc(e) {
  return new this(e).sinh();
}
function bc(e) {
  return new this(e).sqrt();
}
function gc(e, r) {
  return new this(e).sub(r);
}
function mc() {
  var e = 0, r = arguments, t = new this(r[e]);
  for (oe = !1; t.s && ++e < r.length; )
    t = t.plus(r[e]);
  return oe = !0, ee(t, this.precision, this.rounding);
}
function yc(e) {
  return new this(e).tan();
}
function _c(e) {
  return new this(e).tanh();
}
function wc(e) {
  return ee(e = new this(e), e.e + 1, 1);
}
W[Symbol.for("nodejs.util.inspect.custom")] = W.toString;
W[Symbol.toStringTag] = "Decimal";
var Mt = W.constructor = xi(v0);
Ir = new Mt(Ir);
Pr = new Mt(Pr);
var Tn = {}, Ec = {
  get exports() {
    return Tn;
  },
  set exports(e) {
    Tn = e;
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
    function a(d) {
      return d !== null && d === d.window;
    }
    function c(d) {
      return a(d) ? d : d.nodeType === 9 && d.defaultView;
    }
    function l(d) {
      var x = typeof d;
      return x === "function" || x === "object" && !!d;
    }
    function s(d) {
      return l(d) && d.nodeType > 0;
    }
    function f(d) {
      var x = i.call(d);
      return x === "[object String]" ? n(d) : l(d) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(x) && d.hasOwnProperty("length") ? d : s(d) ? [d] : [];
    }
    function h(d) {
      var x, m, y = { top: 0, left: 0 }, S = d && d.ownerDocument;
      return x = S.documentElement, typeof d.getBoundingClientRect < "u" && (y = d.getBoundingClientRect()), m = c(S), {
        top: y.top + m.pageYOffset - x.clientTop,
        left: y.left + m.pageXOffset - x.clientLeft
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
        var y = document.createElement("div");
        y.className = "waves-ripple waves-rippling", x.appendChild(y);
        var S = h(x), B = 0, O = 0;
        "touches" in d && d.touches.length ? (B = d.touches[0].pageY - S.top, O = d.touches[0].pageX - S.left) : (B = d.pageY - S.top, O = d.pageX - S.left), O = O >= 0 ? O : 0, B = B >= 0 ? B : 0;
        var E = "scale(" + x.clientWidth / 100 * 3 + ")", A = "translate(0,0)";
        m && (A = "translate(" + m.x + "px, " + m.y + "px)"), y.setAttribute("data-hold", Date.now()), y.setAttribute("data-x", O), y.setAttribute("data-y", B), y.setAttribute("data-scale", E), y.setAttribute("data-translate", A);
        var I = {
          top: B + "px",
          left: O + "px"
        };
        y.classList.add("waves-notransition"), y.setAttribute("style", u(I)), y.classList.remove("waves-notransition"), I["-webkit-transform"] = E + " " + A, I["-moz-transform"] = E + " " + A, I["-ms-transform"] = E + " " + A, I["-o-transform"] = E + " " + A, I.transform = E + " " + A, I.opacity = "1";
        var L = d.type === "mousemove" ? 2500 : p.duration;
        I["-webkit-transition-duration"] = L + "ms", I["-moz-transition-duration"] = L + "ms", I["-o-transition-duration"] = L + "ms", I["transition-duration"] = L + "ms", y.setAttribute("style", u(I));
      },
      hide: function(d, x) {
        x = x || this;
        for (var m = x.getElementsByClassName("waves-rippling"), y = 0, S = m.length; y < S; y++)
          w(d, x, m[y]);
        o && (x.removeEventListener("touchend", p.hide), x.removeEventListener("touchcancel", p.hide)), x.removeEventListener("mouseup", p.hide), x.removeEventListener("mouseleave", p.hide);
      }
    }, g = {
      // Wrap <input> tag so it can perform the effect
      input: function(d) {
        var x = d.parentNode;
        if (!(x.tagName.toLowerCase() === "i" && x.classList.contains("waves-effect"))) {
          var m = document.createElement("i");
          m.className = d.className + " waves-input-wrapper", d.className = "waves-button-input", x.replaceChild(m, d), m.appendChild(d);
          var y = window.getComputedStyle(d, null), S = y.color, B = y.backgroundColor;
          m.setAttribute("style", "color:" + S + ";background:" + B), d.setAttribute("style", "background-color:rgba(0,0,0,0);");
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
    function w(d, x, m) {
      if (m) {
        m.classList.remove("waves-rippling");
        var y = m.getAttribute("data-x"), S = m.getAttribute("data-y"), B = m.getAttribute("data-scale"), O = m.getAttribute("data-translate"), E = Date.now() - Number(m.getAttribute("data-hold")), A = 350 - E;
        A < 0 && (A = 0), d.type === "mousemove" && (A = 150);
        var I = d.type === "mousemove" ? 2500 : p.duration;
        setTimeout(function() {
          var L = {
            top: S + "px",
            left: y + "px",
            opacity: "0",
            // Duration
            "-webkit-transition-duration": I + "ms",
            "-moz-transition-duration": I + "ms",
            "-o-transition-duration": I + "ms",
            "transition-duration": I + "ms",
            "-webkit-transform": B + " " + O,
            "-moz-transform": B + " " + O,
            "-ms-transform": B + " " + O,
            "-o-transform": B + " " + O,
            transform: B + " " + O
          };
          m.setAttribute("style", u(L)), setTimeout(function() {
            try {
              x.removeChild(m);
            } catch {
              return !1;
            }
          }, I);
        }, A);
      }
    }
    var C = {
      /* uses an integer rather than bool so there's no issues with
       * needing to clear timeouts if another touch event occurred
       * within the 500ms. Cannot mouseup between touchstart and
       * touchend, nor in the 500ms after touchend. */
      touches: 0,
      allowEvent: function(d) {
        var x = !0;
        return /^(mousedown|mousemove)$/.test(d.type) && C.touches && (x = !1), x;
      },
      registerEvent: function(d) {
        var x = d.type;
        x === "touchstart" ? C.touches += 1 : /^(touchend|touchcancel)$/.test(x) && setTimeout(function() {
          C.touches && (C.touches -= 1);
        }, 500);
      }
    };
    function T(d) {
      if (C.allowEvent(d) === !1)
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
    function _(d) {
      var x = T(d);
      if (x !== null) {
        if (x.disabled || x.getAttribute("disabled") || x.classList.contains("disabled"))
          return;
        if (C.registerEvent(d), d.type === "touchstart" && p.delay) {
          var m = !1, y = setTimeout(function() {
            y = null, p.show(d, x);
          }, p.delay), S = function(E) {
            y && (clearTimeout(y), y = null, p.show(d, x)), m || (m = !0, p.hide(E, x)), O();
          }, B = function(E) {
            y && (clearTimeout(y), y = null), S(E), O();
          };
          x.addEventListener("touchmove", B, !1), x.addEventListener("touchend", S, !1), x.addEventListener("touchcancel", S, !1);
          var O = function() {
            x.removeEventListener("touchmove", B), x.removeEventListener("touchend", S), x.removeEventListener("touchcancel", S);
          };
        } else
          p.show(d, x), o && (x.addEventListener("touchend", p.hide, !1), x.addEventListener("touchcancel", p.hide, !1)), x.addEventListener("mouseup", p.hide, !1), x.addEventListener("mouseleave", p.hide, !1);
      }
    }
    return t.init = function(d) {
      var x = document.body;
      d = d || {}, "duration" in d && (p.duration = d.duration), "delay" in d && (p.delay = d.delay), o && (x.addEventListener("touchstart", _, !1), x.addEventListener("touchcancel", C.registerEvent, !1), x.addEventListener("touchend", C.registerEvent, !1)), x.addEventListener("mousedown", _, !1);
    }, t.attach = function(d, x) {
      d = f(d), i.call(x) === "[object Array]" && (x = x.join(" ")), x = x ? " " + x : "";
      for (var m, y, S = 0, B = d.length; S < B; S++)
        m = d[S], y = m.tagName.toLowerCase(), ["input", "img"].indexOf(y) !== -1 && (g[y](m), m = m.parentElement), m.className.indexOf("waves-effect") === -1 && (m.className += " waves-effect" + x);
    }, t.ripple = function(d, x) {
      d = f(d);
      var m = d.length;
      if (x = x || {}, x.wait = x.wait || 0, x.position = x.position || null, m) {
        for (var y, S, B, O = {}, E = 0, A = {
          type: "mousedown",
          button: 1
        }, I = function(H, P) {
          return function() {
            p.hide(H, P);
          };
        }; E < m; E++)
          if (y = d[E], S = x.position || {
            x: y.clientWidth / 2,
            y: y.clientHeight / 2
          }, B = h(y), O.x = B.left + S.x, O.y = B.top + S.y, A.pageX = O.x, A.pageY = O.y, p.show(A, y), x.wait >= 0 && x.wait !== null) {
            var L = {
              type: "mouseup",
              button: 1
            };
            setTimeout(I(L, y), x.wait);
          }
      }
    }, t.calm = function(d) {
      d = f(d);
      for (var x = {
        type: "mouseup",
        button: 1
      }, m = 0, y = d.length; m < y; m++)
        p.hide(x, d[m]);
    }, t.displayEffect = function(d) {
      console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"), t.init(d);
    }, t;
  });
})(Ec);
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
  return i = o ? ie.solarFestival.find((a) => a.month === o && a.day == r) : ie.lunarFestival.find((a) => `${a.month}月` === e && a.day === r), i;
}, solar2lunar: function(e, r, t) {
  if (e < 1900 || e > 2100 || e == 1900 && r == 1 && t < 31)
    return -1;
  if (e)
    n = new Date(e, parseInt(r + "") - 1, t);
  else
    var n = /* @__PURE__ */ new Date();
  var i, o = 0, a = (e = n.getFullYear(), r = n.getMonth() + 1, t = n.getDate(), (Date.UTC(n.getFullYear(), n.getMonth(), n.getDate()) - Date.UTC(1900, 0, 31)) / 864e5);
  for (i = 1900; i < 2101 && a > 0; i++)
    a -= o = ie.lYearDays(i);
  a < 0 && (a += o, i--);
  var c = /* @__PURE__ */ new Date(), l = !1;
  c.getFullYear() == e && c.getMonth() + 1 == r && c.getDate() == t && (l = !0);
  var s = n.getDay(), f = ie.nStr1[s];
  s == 0 && (s = 7);
  var h = i, u = ie.leapMonth(i), p = !1;
  for (i = 1; i < 13 && a > 0; i++)
    u > 0 && i == u + 1 && p == 0 ? (--i, p = !0, o = ie.leapDays(h)) : o = ie.monthDays(h, i), p == 1 && i == u + 1 && (p = !1), a -= o;
  a == 0 && u > 0 && i == u + 1 && (p ? p = !1 : (p = !0, --i)), a < 0 && (a += o, --i);
  var g = i, w = a + 1, C = r - 1, T = ie.toGanZhiYear(h), _ = ie.getTerm(h, 2 * r - 1), d = ie.getTerm(h, 2 * r), x = ie.toGanZhi(12 * (e - 1900) + r + 11);
  t >= _ && (x = ie.toGanZhi(12 * (e - 1900) + r + 12));
  var m = !1, y = null;
  _ == t && (m = !0, y = ie.solarTerm[2 * r - 2]), d == t && (m = !0, y = ie.solarTerm[2 * r - 1]);
  var S = Date.UTC(e, C, 1, 0, 0, 0, 0) / 864e5 + 25567 + 10, B = ie.toGanZhi(S + t - 1), O = ie.toAstro(r, t);
  const E = ie.toChinaMonth(g), A = ie.toChinaDay(w);
  return { lYear: h, lMonth: g, lDay: w, Animal: ie.getAnimal(h), IMonthCn: (p ? "闰" : "") + E, IDayCn: A, cYear: e, cMonth: r, cDay: t, gzYear: T, gzMonth: x, gzDay: B, isToday: l, isLeap: p, nWeek: s, ncWeek: "星期" + f, isTerm: m, Term: y, astro: O, festcn: ie.getFestival(E, A, e, r), fest: ie.getFestival(r, t, e) };
}, lunar2solar: function(e, r, t, n = !0) {
  n = !!n;
  var i = ie.leapMonth(e);
  if (ie.leapDays(e), n && i != r || e == 2100 && r == 12 && t > 1 || e == 1900 && r == 1 && t < 31)
    return -1;
  var o = ie.monthDays(e, r), a = o;
  if (n && (a = ie.leapDays(e)), e < 1900 || e > 2100 || t > a)
    return -1;
  for (var c = 0, l = 1900; l < e; l++)
    c += ie.lYearDays(l);
  var s = 0, f = !1;
  for (l = 1; l < r; l++)
    s = ie.leapMonth(e), f || s <= l && s > 0 && (c += ie.leapDays(e), f = !0), c += ie.monthDays(e, l);
  n && (c += o);
  var h = Date.UTC(1900, 1, 30, 0, 0, 0), u = new Date(864e5 * (c + t - 31) + h), p = u.getUTCFullYear(), g = u.getUTCMonth() + 1, w = u.getUTCDate();
  return ie.solar2lunar(p, g, w);
} };
ie.lunar2solar;
function Sc(e, r) {
  const { target: t = "__blank", noopener: n = !0, noreferrer: i = !0 } = r || {}, o = [];
  n && o.push("noopener=yes"), i && o.push("noreferrer=yes"), window.open(e, t, o.join(","));
}
for (let e = 0; e <= 15; e++)
  e.toString(16);
function bi(e) {
  const r = e.split(","), t = r[0].match(/:(.*?);/)[1], n = atob(r[1]);
  let i = n.length;
  const o = new Uint8Array(i);
  for (; i--; )
    o[i] = n.charCodeAt(i);
  return new Blob([o], { type: t });
}
function Dn(e, r) {
  return new Promise((t, n) => {
    let i = document.createElement("CANVAS");
    const o = i.getContext("2d"), a = new Image();
    a.crossOrigin = "", a.onload = function() {
      if (!i || !o)
        return n();
      i.height = a.height, i.width = a.width, o.drawImage(a, 0, 0);
      const c = i.toDataURL(r || "image/png");
      i = null, t(c);
    }, a.src = e;
  });
}
function On(e, r, t, n) {
  gi(bi(e), r, t, n);
}
function gi(e, r, t, n) {
  const i = new Blob(n !== void 0 ? [n, e] : [e], { type: t || "application/octet-stream" }), o = window.URL.createObjectURL(i), a = document.createElement("a");
  a.style.display = "none", a.href = o, a.setAttribute("download", r), a.download === void 0 && a.setAttribute("target", "_blank"), document.body.appendChild(a), a.click(), document.body.removeChild(a), window.URL.revokeObjectURL(o);
}
let ut = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof globalThis == "object" && globalThis.globalThis === globalThis ? globalThis : void 0;
function s0(e, r, t) {
  const n = new XMLHttpRequest();
  n.open("GET", e), n.responseType = "blob", n.onload = function() {
    mi(n.response, r, t);
  }, n.onerror = function() {
    console.error("could not download file");
  }, n.send();
}
function Ln(e) {
  const r = new XMLHttpRequest();
  r.open("HEAD", e, !1);
  try {
    r.send();
  } catch {
  }
  return r.status >= 200 && r.status <= 299;
}
function Zt(e) {
  try {
    e.dispatchEvent(new MouseEvent("click"));
  } catch {
    const t = document.createEvent("MouseEvents");
    t.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), e.dispatchEvent(t);
  }
}
const g0 = ut.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), mi = (e, r, t, n) => {
  if ("download" in HTMLAnchorElement.prototype && !g0) {
    const o = ut.URL || ut.webkitURL, a = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
    r = r || (e == null ? void 0 : e.name) || "download", a.download = r, a.rel = "noopener", typeof e == "string" ? (a.href = e, a.origin !== location.origin ? Ln(a.href) ? s0(e, r, t) : (a.target = "_blank") && Zt(a) : Zt(a)) : (a.href = o.createObjectURL(e), setTimeout(function() {
      o.revokeObjectURL(a.href);
    }, 4e4), setTimeout(function() {
      Zt(a);
    }, 0));
  } else if (navigator != null && navigator.msSaveOrOpenBlob)
    if (r = r || e.name || "download", typeof e == "string")
      if (Ln(e))
        s0(e, r, t);
      else {
        var i = document.createElement("a");
        i.href = e, i.target = "_blank", setTimeout(function() {
          Zt(i);
        });
      }
    else
      navigator == null || navigator.msSaveOrOpenBlob(function(o, a) {
        return a === void 0 ? a = { autoBom: !1 } : typeof a != "object" && (console.warn("第二个参数类型必须是object"), a = { autoBom: !a }), a.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(o == null ? void 0 : o.type) ? new Blob([String.fromCharCode(65279), o], { type: o == null ? void 0 : o.type }) : o;
      }(e, t), r);
  else {
    if ((n = n || open("", "_blank")) && (n.document.title = n.document.body.innerText = "downloading..."), typeof e == "string")
      return s0(e, r, t);
    const o = e.type === "application/octet-stream", a = /constructor/i.test(ut.HTMLElement) || ut.safari, c = /CriOS\/[\d]+/.test(navigator.userAgent);
    if ((c || o && a || g0) && typeof FileReader < "u") {
      const l = new FileReader();
      l.onloadend = function() {
        let s = l.result;
        s = c ? s : s == null ? void 0 : s.replace(/^data:[^;]*;/, "data:attachment/file;"), n ? n.location.href = s : location.href = s, n = null;
      }, l.readAsDataURL(e);
    } else {
      const l = ut.URL || ut.webkitURL, s = l.createObjectURL(e);
      n ? n.location = s : location.href = s, n = null, setTimeout(function() {
        l.revokeObjectURL(s);
      }, 4e4);
    }
  }
};
var Cc = Object.freeze({ __proto__: null, base64ToBlob: bi, urlToBase64: Dn, downloadByOnlineUrl: function(e, r, t, n) {
  Dn(e).then((i) => {
    On(i, r, t, n);
  });
}, downloadByBase64: On, downloadByData: gi, downloadByUrl: function({ url: e, target: r = "_blank", fileName: t }) {
  const n = window.navigator.userAgent.toLowerCase().indexOf("chrome") > -1, i = window.navigator.userAgent.toLowerCase().indexOf("safari") > -1;
  if (/(iP)/g.test(window.navigator.userAgent))
    return console.error("Your browser does not support download!"), !1;
  if (n || i) {
    const o = document.createElement("a");
    if (o.href = e, o.target = r, o.download !== void 0 && (o.download = t || e.substring(e.lastIndexOf("/") + 1, e.length)), document.createEvent) {
      const a = document.createEvent("MouseEvents");
      return a.initEvent("click", !0, !0), o.dispatchEvent(a), !0;
    }
  }
  return e.indexOf("?") === -1 && (e += "?download"), Sc(e, { target: r }), !0;
}, isMacOSWebView: g0, saveAs: mi });
window.socketMap = /* @__PURE__ */ new Map();
Mt.set({ precision: 14 });
const Bc = fo, yi = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [n, i] of r)
    t[n] = i;
  return t;
}, kc = {}, Ac = {
  t: "1686214149488",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "8490",
  width: "200",
  height: "200"
}, Rc = /* @__PURE__ */ ve("path", {
  d: "M369.569592 512.011256c0-14.328333-11.010775-25.945929-24.591071-25.945929L86.980515 486.065328c-13.580297 0-24.591071 11.618619-24.591071 25.945929 0 14.33038 11.010775 25.947975 24.591071 25.947975l257.998005 0C358.55984 537.959232 369.569592 526.341636 369.569592 512.011256z",
  "p-id": "8491"
}, null, -1), Nc = /* @__PURE__ */ ve("path", {
  d: "M937.019485 486.064304 679.020456 486.064304c-13.580297 0-24.591071 11.618619-24.591071 25.945929 0 14.33038 11.010775 25.947975 24.591071 25.947975l257.999029 0c13.580297 0 24.590048-11.618619 24.590048-25.947975C961.609533 497.682923 950.598758 486.064304 937.019485 486.064304z",
  "p-id": "8492"
}, null, -1), Tc = /* @__PURE__ */ ve("path", {
  d: "M512.011768 62.389956c-13.580297 0-24.590048 11.618619-24.590048 25.945929l0 257.170151c0 14.329357 11.010775 25.946952 24.590048 25.946952s24.591071-11.618619 24.591071-25.946952L536.602839 88.335884C536.602839 74.008574 525.591041 62.389956 512.011768 62.389956z",
  "p-id": "8493"
}, null, -1), Dc = /* @__PURE__ */ ve("path", {
  d: "M512.011768 652.544967c-13.580297 0-24.590048 11.618619-24.590048 25.946952l0 257.169127c0 14.33038 11.010775 25.947975 24.590048 25.947975s24.591071-11.618619 24.591071-25.947975L536.602839 678.491918C536.602839 664.162562 525.591041 652.544967 512.011768 652.544967z",
  "p-id": "8494"
}, null, -1), Oc = /* @__PURE__ */ ve("path", {
  d: "M377.001865 413.125085c4.744048 4.737908 10.818393 7.082302 16.882506 7.082302 6.519484 0 13.039991-2.724041 17.879206-8.134261 9.317203-10.414187 8.885368-26.834158-0.9967-36.678364L228.341057 193.559391c-9.832949-9.830903-25.406646-9.388834-34.760688 1.050935-9.317203 10.414187-8.885368 26.834158 0.9967 36.678364L377.001865 413.125085z",
  "p-id": "8495"
}, null, -1), Lc = /* @__PURE__ */ ve("path", {
  d: "M646.997112 610.873892c-9.846252-9.831926-25.419949-9.388834-34.761712 1.051959-9.317203 10.414187-8.885368 26.834158 0.997724 36.678364l182.41354 181.834348c4.743024 4.738931 10.818393 7.083326 16.881482 7.083326 6.520507 0 13.039991-2.723018 17.879206-8.134261 9.317203-10.41521 8.886391-26.834158-0.9967-36.678364L646.997112 610.873892z",
  "p-id": "8496"
}, null, -1), Ic = /* @__PURE__ */ ve("path", {
  d: "M630.114606 420.207387c6.064113 0 12.139481-2.344395 16.882506-7.082302l182.425819-181.836395c9.882068-9.844206 10.313903-26.264177 0.9967-36.678364-9.341762-10.43977-24.915459-10.882861-34.760688-1.050935L613.233124 375.394762c-9.882068 9.844206-10.314926 26.264177-0.997724 36.678364C617.074615 417.483346 623.595123 420.207387 630.114606 420.207387z",
  "p-id": "8497"
}, null, -1), Pc = /* @__PURE__ */ ve("path", {
  d: "M377.025401 610.873892 194.600605 792.710286c-9.881045 9.844206-10.313903 26.263154-0.9967 36.678364 4.839215 5.411243 11.358699 8.134261 17.879206 8.134261 6.064113 0 12.138458-2.344395 16.881482-7.083326l182.425819-181.834348c9.881045-9.844206 10.313903-26.264177 0.9967-36.678364C402.469909 601.485057 386.872676 601.041966 377.025401 610.873892z",
  "p-id": "8498"
}, null, -1), Mc = [
  Rc,
  Nc,
  Tc,
  Dc,
  Oc,
  Lc,
  Ic,
  Pc
];
function Hc(e, r) {
  return ft(), bt("svg", Ac, Mc);
}
const Fc = /* @__PURE__ */ yi(kc, [["render", Hc]]), _i = (e) => (Qi("data-v-080679d7"), e = e(), Ji(), e), zc = {
  key: 1,
  class: "upload-btn"
}, qc = { class: "tip" }, $c = { class: "loading-statu" }, Uc = { class: "operate-btn" }, Wc = { key: 0 }, Yc = {
  class: "el-upload-list el-upload-list--picture-card",
  style: { float: "left" }
}, Vc = ["onClick"], Kc = /* @__PURE__ */ _i(() => /* @__PURE__ */ ve("span", { class: "error" }, "上传错误", -1)), Gc = /* @__PURE__ */ _i(() => /* @__PURE__ */ ve("p", null, "点击重新上传", -1)), Zc = ["src"], Xc = { class: "demo-image__preview" }, jc = /* @__PURE__ */ Wi({
  __name: "index",
  props: {
    // 显示的文字
    title: {
      type: String,
      default: "上传图片"
    },
    // 预览地址
    loadUrl: {
      type: String,
      default: ""
    },
    // 上传地址
    action: {
      type: String,
      default: ""
    },
    // 最多上传图片数量
    limit: {
      type: Number,
      default: 5
    },
    // 单张图片大小 MB
    size: {
      type: Number,
      default: 50
    },
    // 允许的图片格式
    // image/* 或者 image/png, image/jpeg 或者.png, .jpg, .jpeg格式都可以
    accept: {
      type: String,
      default: "image/*"
    },
    // 图片填充方式
    fit: {
      type: String,
      default: "contain"
    },
    // 预览模式 - 为true时不显示上传元素
    preview: {
      type: Boolean,
      default: !1
    },
    // 支持多选
    multiple: {
      type: Boolean,
      default: !0
    },
    // 显示提示
    tip: {
      type: Boolean,
      default: !1
    },
    // 提示文字
    tipText: {
      type: String,
      default: ""
    },
    // 回显列表数据格式： [{url: ''}, {url: ''}]
    modelValue: {
      type: Array,
      default: () => []
    }
  },
  emits: ["delete", "success"],
  setup(e, { emit: r }) {
    const t = e;
    Yi(
      () => t.modelValue,
      (y) => {
        o.value = y.map((S) => {
          var B;
          return {
            ...S,
            __url: (B = S.url) != null && B.startsWith("http") ? S.url : `${t.loadUrl}${S.url}`
          };
        });
      },
      { deep: !0 }
    );
    const n = k0(() => t.size), i = Tt(null), o = Tt(t.modelValue.map((y) => {
      var S;
      return {
        ...y,
        __url: (S = y.url) != null && S.startsWith("http") ? y.url : `${t.loadUrl}${y.url}`
      };
    })), a = Tt([]), c = Tt(!1), l = Tt(0), s = k0(
      () => t.tipText || `最多可上传${t.limit}张图片, 每张图片不能超过${t.size}MB`
    ), f = (y, S) => {
      o.value = Bc.cloneDeep(S.map((B) => {
        var O;
        return {
          ...B,
          __url: (O = B.url) != null && O.startsWith("http") ? B.url : `${t.loadUrl}${B.url}`
        };
      }));
    }, h = (y) => !(!(y.type === "image/jpeg" || y.type === "image/png") || !(y.size / 1024 / 1024 < n.value)), u = () => !1, p = (y, S) => {
      var B, O;
      y.status = "ready", S !== void 0 && a.value.splice(S, 1), (B = i.value) == null || B.handleStart(y.raw), (O = i.value) == null || O.submit();
    }, g = (y, S) => {
      var A, I;
      const B = o.value.length, O = t.limit - B;
      let E = 0;
      for (; E < O && E < y.length; )
        (A = i.value) == null || A.handleStart(y[E]), (I = i.value) == null || I.submit(), E++;
    }, w = (y, S, B) => {
      r("success", y, S, B);
    }, C = (y, S, B) => {
      a.value.push(S);
    }, T = (y) => {
      c.value = !0, l.value = o.value.findIndex((S) => S.url === y.url);
    }, _ = (y) => {
      Cc.downloadByOnlineUrl(y.__url, y.name);
    }, d = (y) => {
      var S;
      (S = i.value) == null || S.abort(y);
    }, x = (y) => {
      var S;
      y.status !== "success" && d(y), (S = i.value) == null || S.handleRemove(y), o.value = o.value.filter((B) => B.uid !== y.uid), r("delete", y);
    }, m = (y, S) => {
      a.value.splice(S, 1);
    };
    return (y, S) => (ft(), bt(A0, null, [
      Re(Ne(eo), {
        class: n0(["ik-image-upload", { preview: e.preview }]),
        ref_key: "refUpload",
        ref: i,
        "list-type": "picture-card",
        accept: e.accept,
        action: e.action,
        "file-list": o.value,
        "onUpdate:fileList": S[0] || (S[0] = (B) => o.value = B),
        multiple: e.multiple,
        limit: e.limit,
        "on-change": f,
        "before-upload": h,
        "before-remove": u,
        "on-exceed": g,
        "on-success": w,
        "on-error": C,
        drag: ""
      }, Vi({
        trigger: We(() => [
          y.$slots.trigger ? Ki(y.$slots, "trigger", { key: 0 }, void 0, !0) : (ft(), bt("div", zc, [
            Re(Ne(xt), null, {
              default: We(() => [
                Re(Ne(no))
              ]),
              _: 1
            }),
            ve("span", null, i0(e.title), 1)
          ]))
        ]),
        file: We(({ file: B }) => [
          ve("div", {
            class: n0(["load-list", { loading: B.status === "uploading" }]),
            "element-loading-background": "var(--ik-upload-bg)"
          }, [
            R0(ve("div", $c, [
              Re(Fc),
              Gi(" 上传" + i0(B.percentage) + "% ", 1)
            ], 512), [
              [N0, B.status === "uploading"]
            ]),
            Re(Ne(to), {
              style: { width: "100%", height: "100%" },
              src: B.__url,
              "zoom-rate": 1.2,
              "initial-index": 0,
              fit: "contain"
            }, null, 8, ["src"]),
            ve("span", Uc, [
              ve("span", null, [
                Re(Ne(xt), {
                  onClick: (O) => T(B)
                }, {
                  default: We(() => [
                    Re(Ne(io))
                  ]),
                  _: 2
                }, 1032, ["onClick"])
              ]),
              ve("span", null, [
                Re(Ne(xt), {
                  onClick: (O) => _(B)
                }, {
                  default: We(() => [
                    Re(Ne(oo))
                  ]),
                  _: 2
                }, 1032, ["onClick"])
              ]),
              e.preview ? T0("", !0) : (ft(), bt("span", Wc, [
                Re(Ne(xt), {
                  onClick: (O) => x(B)
                }, {
                  default: We(() => [
                    Re(Ne(so))
                  ]),
                  _: 2
                }, 1032, ["onClick"])
              ]))
            ])
          ], 2)
        ]),
        default: We(() => [
          ve("ul", Yc, [
            (ft(!0), bt(A0, null, Zi(a.value, (B, O) => (ft(), bt("li", {
              class: "el-upload-list__item",
              key: B.uid
            }, [
              ve("span", null, [
                Re(Ne(xt), {
                  onClick: (E) => m(B, O)
                }, {
                  default: We(() => [
                    Re(Ne(ao))
                  ]),
                  _: 2
                }, 1032, ["onClick"])
              ]),
              ve("div", {
                class: n0(["load-list", {
                  loading: B.status === "uploading",
                  fail: B.status === "fail"
                }]),
                "element-loading-background": "var(--ik-upload-bg)"
              }, [
                R0(ve("div", {
                  class: "loading-statu",
                  onClick: (E) => p(B, O)
                }, [
                  Re(Ne(xt), { size: 24 }, {
                    default: We(() => [
                      Re(Ne(co))
                    ]),
                    _: 1
                  }),
                  Kc,
                  Gc
                ], 8, Vc), [
                  [N0, B.status === "fail"]
                ]),
                ve("img", {
                  src: B.__url,
                  alt: "",
                  style: Xi({ "object-fit": e.fit })
                }, null, 12, Zc)
              ], 2)
            ]))), 128))
          ])
        ]),
        _: 2
      }, [
        e.tip ? {
          name: "tip",
          fn: We(() => [
            ve("span", qc, i0(s.value), 1)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["class", "accept", "action", "file-list", "multiple", "limit"]),
      ve("div", Xc, [
        c.value ? (ft(), ji(Ne(ro), {
          key: 0,
          "hide-on-click-modal": "",
          onClose: S[1] || (S[1] = () => {
            c.value = !1;
          }),
          "url-list": o.value.map((B) => B.__url),
          "initial-index": l.value
        }, null, 8, ["url-list", "initial-index"])) : T0("", !0)
      ])
    ], 64));
  }
});
const Qc = /* @__PURE__ */ yi(jc, [["__scopeId", "data-v-080679d7"]]), nf = uo(Qc);
export {
  nf as IkUploadImage,
  nf as default
};
