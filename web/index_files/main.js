!function (e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var a = n[r] = {i: r, l: !1, exports: {}};
        return e[r].call(a.exports, a, a.exports, t), a.l = !0, a.exports
    }

    var n = {};
    t.m = e, t.c = n, t.d = function (e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, {configurable: !1, enumerable: !0, get: r})
    }, t.n = function (e) {
        var n = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "", t(t.s = 20)
}([function (e, t, n) {
    "use strict";

    function r(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
    }

    function a(e) {
        return e && e.__esModule ? e : {default: e}
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.uid = t.transitionEnd = t.totalOffsetTop = t.testCKE5Support = t.polyfils = t.qs = t.getGravatarUrl = t.GotoHashLink = t.formatDate = t.ObservableSubject = t.stretchToVH = t.smoothScroll = t.mobile = t.detectIE = t.classToggler = t.buildUserTokenUrl = void 0;
    var o = n(23), i = a(o), s = n(24), l = a(s), c = n(9), d = r(c), u = n(25), p = a(u), f = n(26), m = a(f),
        h = n(27), g = a(h), v = n(28), y = a(v), b = n(29), w = a(b), S = n(4), C = a(S), x = n(32), E = a(x),
        k = n(2), T = r(k), _ = n(33), L = a(_), A = n(34), M = a(A), z = n(39), P = a(z), O = n(10), I = a(O),
        q = n(40), D = a(q);
    t.buildUserTokenUrl = i.default, t.classToggler = l.default, t.detectIE = d, t.mobile = T, t.smoothScroll = C.default, t.stretchToVH = E.default, t.ObservableSubject = m.default, t.formatDate = g.default, t.GotoHashLink = y.default, t.getGravatarUrl = w.default, t.qs = M.default, t.polyfils = L.default, t.testCKE5Support = P.default, t.totalOffsetTop = I.default, t.transitionEnd = p.default, t.uid = D.default
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return "[object Array]" === k.call(e)
    }

    function a(e) {
        return "[object ArrayBuffer]" === k.call(e)
    }

    function o(e) {
        return "undefined" != typeof FormData && e instanceof FormData
    }

    function i(e) {
        return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
    }

    function s(e) {
        return "string" == typeof e
    }

    function l(e) {
        return "number" == typeof e
    }

    function c(e) {
        return void 0 === e
    }

    function d(e) {
        return null !== e && "object" === (void 0 === e ? "undefined" : C(e))
    }

    function u(e) {
        return "[object Date]" === k.call(e)
    }

    function p(e) {
        return "[object File]" === k.call(e)
    }

    function f(e) {
        return "[object Blob]" === k.call(e)
    }

    function m(e) {
        return "[object Function]" === k.call(e)
    }

    function h(e) {
        return d(e) && m(e.pipe)
    }

    function g(e) {
        return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
    }

    function v(e) {
        return e.replace(/^\s*/, "").replace(/\s*$/, "")
    }

    function y() {
        return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
    }

    function b(e, t) {
        if (null !== e && void 0 !== e) if ("object" === (void 0 === e ? "undefined" : C(e)) || r(e) || (e = [e]), r(e)) for (var n = 0, a = e.length; n < a; n++) t.call(null, e[n], n, e); else for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e)
    }

    function w() {
        function e(e, n) {
            "object" === C(t[n]) && "object" === (void 0 === e ? "undefined" : C(e)) ? t[n] = w(t[n], e) : t[n] = e
        }

        for (var t = {}, n = 0, r = arguments.length; n < r; n++) b(arguments[n], e);
        return t
    }

    function S(e, t, n) {
        return b(t, function (t, r) {
            e[r] = n && "function" == typeof t ? x(t, n) : t
        }), e
    }

    var C = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, x = n(12), E = n(46), k = Object.prototype.toString;
    e.exports = {
        isArray:              r,
        isArrayBuffer:        a,
        isBuffer:             E,
        isFormData:           o,
        isArrayBufferView:    i,
        isString:             s,
        isNumber:             l,
        isObject:             d,
        isUndefined:          c,
        isDate:               u,
        isFile:               p,
        isBlob:               f,
        isFunction:           m,
        isStream:             h,
        isURLSearchParams:    g,
        isStandardBrowserEnv: y,
        forEach:              b,
        merge:                w,
        extend:               S,
        trim:                 v
    }
}, function (e, t, n) {
    "use strict";

    function r() {
        return window.innerWidth <= s.mobile
    }

    function a() {
        return window.innerWidth > s.mobile && window.innerWidth <= s.tablet
    }

    function o() {
        return window.innerWidth > s.tablet
    }

    function i() {
        return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.isPhoneSize = r, t.isTabletSize = a, t.isDesktop = o, t.isMobile = i;
    var s = {mobile: 767, tablet: 1279}
}, function (e, t, n) {
    "use strict";
    (function (r, a) {
        var o, i, s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        /*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.4+314e4831
 */
        !function (r, a) {
            "object" === s(t) && void 0 !== e ? e.exports = a() : (o = a, void 0 !== (i = "function" == typeof o ? o.call(t, n, t, e) : o) && (e.exports = i))
        }(0, function () {
            function e(e) {
                var t = void 0 === e ? "undefined" : s(e);
                return null !== e && ("object" === t || "function" === t)
            }

            function t(e) {
                return "function" == typeof e
            }

            function n(e) {
                F = e
            }

            function o(e) {
                W = e
            }

            function i() {
                return void 0 !== j ? function () {
                    j(c)
                } : l()
            }

            function l() {
                var e = setTimeout;
                return function () {
                    return e(c, 1)
                }
            }

            function c() {
                for (var e = 0; e < R; e += 2) {
                    (0, U[e])(U[e + 1]), U[e] = void 0, U[e + 1] = void 0
                }
                R = 0
            }

            function d(e, t) {
                var n = this, r = new this.constructor(p);
                void 0 === r[Q] && M(r);
                var a = n._state;
                if (a) {
                    var o = arguments[a - 1];
                    W(function () {
                        return _(a, r, o, n._result)
                    })
                } else E(n, r, e, t);
                return r
            }

            function u(e) {
                var t = this;
                if (e && "object" === (void 0 === e ? "undefined" : s(e)) && e.constructor === t) return e;
                var n = new t(p);
                return w(n, e), n
            }

            function p() {
            }

            function f() {
                return new TypeError("You cannot resolve a promise with itself")
            }

            function m() {
                return new TypeError("A promises callback cannot return that same promise.")
            }

            function h(e) {
                try {
                    return e.then
                } catch (e) {
                    return te.error = e, te
                }
            }

            function g(e, t, n, r) {
                try {
                    e.call(t, n, r)
                } catch (e) {
                    return e
                }
            }

            function v(e, t, n) {
                W(function (e) {
                    var r = !1, a = g(n, t, function (n) {
                        r || (r = !0, t !== n ? w(e, n) : C(e, n))
                    }, function (t) {
                        r || (r = !0, x(e, t))
                    }, "Settle: " + (e._label || " unknown promise"));
                    !r && a && (r = !0, x(e, a))
                }, e)
            }

            function y(e, t) {
                t._state === Z ? C(e, t._result) : t._state === ee ? x(e, t._result) : E(t, void 0, function (t) {
                    return w(e, t)
                }, function (t) {
                    return x(e, t)
                })
            }

            function b(e, n, r) {
                n.constructor === e.constructor && r === d && n.constructor.resolve === u ? y(e, n) : r === te ? (x(e, te.error), te.error = null) : void 0 === r ? C(e, n) : t(r) ? v(e, n, r) : C(e, n)
            }

            function w(t, n) {
                t === n ? x(t, f()) : e(n) ? b(t, n, h(n)) : C(t, n)
            }

            function S(e) {
                e._onerror && e._onerror(e._result), k(e)
            }

            function C(e, t) {
                e._state === $ && (e._result = t, e._state = Z, 0 !== e._subscribers.length && W(k, e))
            }

            function x(e, t) {
                e._state === $ && (e._state = ee, e._result = t, W(S, e))
            }

            function E(e, t, n, r) {
                var a = e._subscribers, o = a.length;
                e._onerror = null, a[o] = t, a[o + Z] = n, a[o + ee] = r, 0 === o && e._state && W(k, e)
            }

            function k(e) {
                var t = e._subscribers, n = e._state;
                if (0 !== t.length) {
                    for (var r = void 0, a = void 0, o = e._result, i = 0; i < t.length; i += 3) r = t[i], a = t[i + n], r ? _(n, r, a, o) : a(o);
                    e._subscribers.length = 0
                }
            }

            function T(e, t) {
                try {
                    return e(t)
                } catch (e) {
                    return te.error = e, te
                }
            }

            function _(e, n, r, a) {
                var o = t(r), i = void 0, s = void 0, l = void 0, c = void 0;
                if (o) {
                    if (i = T(r, a), i === te ? (c = !0, s = i.error, i.error = null) : l = !0, n === i) return void x(n, m())
                } else i = a, l = !0;
                n._state !== $ || (o && l ? w(n, i) : c ? x(n, s) : e === Z ? C(n, i) : e === ee && x(n, i))
            }

            function L(e, t) {
                try {
                    t(function (t) {
                        w(e, t)
                    }, function (t) {
                        x(e, t)
                    })
                } catch (t) {
                    x(e, t)
                }
            }

            function A() {
                return ne++
            }

            function M(e) {
                e[Q] = ne++, e._state = void 0, e._result = void 0, e._subscribers = []
            }

            function z() {
                return new Error("Array Methods must be provided an Array")
            }

            function P(e) {
                return new re(this, e).promise
            }

            function O(e) {
                var t = this;
                return new t(N(e) ? function (n, r) {
                    for (var a = e.length, o = 0; o < a; o++) t.resolve(e[o]).then(n, r)
                } : function (e, t) {
                    return t(new TypeError("You must pass an array to race."))
                })
            }

            function I(e) {
                var t = this, n = new t(p);
                return x(n, e), n
            }

            function q() {
                throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
            }

            function D() {
                throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
            }

            function B() {
                var e = void 0;
                if (void 0 !== a) e = a; else if ("undefined" != typeof self) e = self; else try {
                    e = Function("return this")()
                } catch (e) {
                    throw new Error("polyfill failed because global object is unavailable in this environment")
                }
                var t = e.Promise;
                if (t) {
                    var n = null;
                    try {
                        n = Object.prototype.toString.call(t.resolve())
                    } catch (e) {
                    }
                    if ("[object Promise]" === n && !t.cast) return
                }
                e.Promise = ae
            }

            var H = void 0;
            H = Array.isArray ? Array.isArray : function (e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            };
            var N = H, R = 0, j = void 0, F = void 0, W = function (e, t) {
                    U[R] = e, U[R + 1] = t, 2 === (R += 2) && (F ? F(c) : J())
                }, K = "undefined" != typeof window ? window : void 0, G = K || {},
                Y = G.MutationObserver || G.WebKitMutationObserver,
                X = "undefined" == typeof self && void 0 !== r && "[object process]" === {}.toString.call(r),
                V = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
                U = new Array(1e3), J = void 0;
            J = X ? function () {
                return function () {
                    return r.nextTick(c)
                }
            }() : Y ? function () {
                var e = 0, t = new Y(c), n = document.createTextNode("");
                return t.observe(n, {characterData: !0}), function () {
                    n.data = e = ++e % 2
                }
            }() : V ? function () {
                var e = new MessageChannel;
                return e.port1.onmessage = c, function () {
                    return e.port2.postMessage(0)
                }
            }() : void 0 === K ? function () {
                try {
                    var e = Function("return this")().require("vertx");
                    return j = e.runOnLoop || e.runOnContext, i()
                } catch (e) {
                    return l()
                }
            }() : l();
            var Q = Math.random().toString(36).substring(2), $ = void 0, Z = 1, ee = 2, te = {error: null}, ne = 0,
                re = function () {
                    function e(e, t) {
                        this._instanceConstructor = e, this.promise = new e(p), this.promise[Q] || M(this.promise), N(t) ? (this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? C(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(t), 0 === this._remaining && C(this.promise, this._result))) : x(this.promise, z())
                    }

                    return e.prototype._enumerate = function (e) {
                        for (var t = 0; this._state === $ && t < e.length; t++) this._eachEntry(e[t], t)
                    }, e.prototype._eachEntry = function (e, t) {
                        var n = this._instanceConstructor, r = n.resolve;
                        if (r === u) {
                            var a = h(e);
                            if (a === d && e._state !== $) this._settledAt(e._state, t, e._result); else if ("function" != typeof a) this._remaining--, this._result[t] = e; else if (n === ae) {
                                var o = new n(p);
                                b(o, e, a), this._willSettleAt(o, t)
                            } else this._willSettleAt(new n(function (t) {
                                return t(e)
                            }), t)
                        } else this._willSettleAt(r(e), t)
                    }, e.prototype._settledAt = function (e, t, n) {
                        var r = this.promise;
                        r._state === $ && (this._remaining--, e === ee ? x(r, n) : this._result[t] = n), 0 === this._remaining && C(r, this._result)
                    }, e.prototype._willSettleAt = function (e, t) {
                        var n = this;
                        E(e, void 0, function (e) {
                            return n._settledAt(Z, t, e)
                        }, function (e) {
                            return n._settledAt(ee, t, e)
                        })
                    }, e
                }(), ae = function () {
                    function e(t) {
                        this[Q] = A(), this._result = this._state = void 0, this._subscribers = [], p !== t && ("function" != typeof t && q(), this instanceof e ? L(this, t) : D())
                    }

                    return e.prototype.catch = function (e) {
                        return this.then(null, e)
                    }, e.prototype.finally = function (e) {
                        var t = this, n = t.constructor;
                        return t.then(function (t) {
                            return n.resolve(e()).then(function () {
                                return t
                            })
                        }, function (t) {
                            return n.resolve(e()).then(function () {
                                throw t
                            })
                        })
                    }, e
                }();
            return ae.prototype.then = d, ae.all = P, ae.race = O, ae.resolve = u, ae.reject = I, ae._setScheduler = n, ae._setAsap = o, ae._asap = W, ae.polyfill = B, ae.Promise = ae, ae
        })
    }).call(t, n(5), n(11))
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        (new o.default).animateScroll(e, null, {
            ignore: "[data-scroll-ignore]",
            header: ".menu",
            speed:  600,
            offset: void 0 !== t ? t : (0, i.isPhoneSize)() ? -25 : -35,
            easing: "easeInOutQuad"
        })
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.default = r;
    var a = n(31), o = function (e) {
        return e && e.__esModule ? e : {default: e}
    }(a), i = n(2)
}, function (e, t, n) {
    "use strict";

    function r() {
        throw new Error("setTimeout has not been defined")
    }

    function a() {
        throw new Error("clearTimeout has not been defined")
    }

    function o(e) {
        if (u === setTimeout) return setTimeout(e, 0);
        if ((u === r || !u) && setTimeout) return u = setTimeout, setTimeout(e, 0);
        try {
            return u(e, 0)
        } catch (t) {
            try {
                return u.call(null, e, 0)
            } catch (t) {
                return u.call(this, e, 0)
            }
        }
    }

    function i(e) {
        if (p === clearTimeout) return clearTimeout(e);
        if ((p === a || !p) && clearTimeout) return p = clearTimeout, clearTimeout(e);
        try {
            return p(e)
        } catch (t) {
            try {
                return p.call(null, e)
            } catch (t) {
                return p.call(this, e)
            }
        }
    }

    function s() {
        g && m && (g = !1, m.length ? h = m.concat(h) : v = -1, h.length && l())
    }

    function l() {
        if (!g) {
            var e = o(s);
            g = !0;
            for (var t = h.length; t;) {
                for (m = h, h = []; ++v < t;) m && m[v].run();
                v = -1, t = h.length
            }
            m = null, g = !1, i(e)
        }
    }

    function c(e, t) {
        this.fun = e, this.array = t
    }

    function d() {
    }

    var u, p, f = e.exports = {};
    !function () {
        try {
            u = "function" == typeof setTimeout ? setTimeout : r
        } catch (e) {
            u = r
        }
        try {
            p = "function" == typeof clearTimeout ? clearTimeout : a
        } catch (e) {
            p = a
        }
    }();
    var m, h = [], g = !1, v = -1;
    f.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        h.push(new c(e, t)), 1 !== h.length || g || o(l)
    }, c.prototype.run = function () {
        this.fun.apply(null, this.array)
    }, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", f.versions = {}, f.on = d, f.addListener = d, f.once = d, f.off = d, f.removeListener = d, f.removeAllListeners = d, f.emit = d, f.prependListener = d, f.prependOnceListener = d, f.listeners = function (e) {
        return []
    }, f.binding = function (e) {
        throw new Error("process.binding is not supported")
    }, f.cwd = function () {
        return "/"
    }, f.chdir = function (e) {
        throw new Error("process.chdir is not supported")
    }, f.umask = function () {
        return 0
    }
}, function (e, t, n) {
    "use strict";
    e.exports = n(45)
}, function (e, t, n) {
    "use strict";
    (function (t) {
        function r(e, t) {
            !a.isUndefined(e) && a.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
        }

        var a = n(1), o = n(48), i = {"Content-Type": "application/x-www-form-urlencoded"}, s = {
            adapter:           function () {
                var e;
                return "undefined" != typeof XMLHttpRequest ? e = n(13) : void 0 !== t && (e = n(13)), e
            }(),
            transformRequest:  [function (e, t) {
                return o(t, "Content-Type"), a.isFormData(e) || a.isArrayBuffer(e) || a.isBuffer(e) || a.isStream(e) || a.isFile(e) || a.isBlob(e) ? e : a.isArrayBufferView(e) ? e.buffer : a.isURLSearchParams(e) ? (r(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : a.isObject(e) ? (r(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
            }],
            transformResponse: [function (e) {
                if ("string" == typeof e) try {
                    e = JSON.parse(e)
                } catch (e) {
                }
                return e
            }],
            timeout:           0,
            xsrfCookieName:    "XSRF-TOKEN",
            xsrfHeaderName:    "X-XSRF-TOKEN",
            maxContentLength:  -1,
            validateStatus:    function (e) {
                return e >= 200 && e < 300
            }
        };
        s.headers = {common: {Accept: "application/json, text/plain, */*"}}, a.forEach(["delete", "get", "head"], function (e) {
            s.headers[e] = {}
        }), a.forEach(["post", "put", "patch"], function (e) {
            s.headers[e] = a.merge(i)
        }), e.exports = s
    }).call(t, n(5))
}, function (e, t, n) {
    "use strict";
    var r, a;
    "function" == typeof Symbol && Symbol.iterator;
    !function (o, i) {
        r = i, void 0 !== (a = "function" == typeof r ? r.call(t, n, t, e) : r) && (e.exports = a)
    }(0, function () {
        function e(e) {
            var t = {
                onClose:      null,
                onOpen:       null,
                beforeClose:  null,
                stickyFooter: !1,
                footer:       !1,
                cssClass:     [],
                closeLabel:   "Close",
                closeMethods: ["overlay", "button", "escape"]
            };
            this.opts = c({}, t, e), this.init()
        }

        function t() {
            this.modalBoxFooter && (this.modalBoxFooter.style.width = this.modalBox.clientWidth + "px", this.modalBoxFooter.style.left = this.modalBox.offsetLeft + "px")
        }

        function n() {
            this.modal = document.createElement("div"), this.modal.classList.add("tingle-modal"), 0 !== this.opts.closeMethods.length && -1 !== this.opts.closeMethods.indexOf("overlay") || this.modal.classList.add("tingle-modal--noOverlayClose"), this.modal.style.display = "none", this.opts.cssClass.forEach(function (e) {
                "string" == typeof e && this.modal.classList.add(e)
            }, this), -1 !== this.opts.closeMethods.indexOf("button") && (this.modalCloseBtn = document.createElement("button"), this.modalCloseBtn.classList.add("tingle-modal__close"), this.modalCloseBtnIcon = document.createElement("span"), this.modalCloseBtnIcon.classList.add("tingle-modal__closeIcon"), this.modalCloseBtnIcon.innerHTML = "×", this.modalCloseBtnLabel = document.createElement("span"), this.modalCloseBtnLabel.classList.add("tingle-modal__closeLabel"), this.modalCloseBtnLabel.innerHTML = this.opts.closeLabel, this.modalCloseBtn.appendChild(this.modalCloseBtnIcon), this.modalCloseBtn.appendChild(this.modalCloseBtnLabel)), this.modalBox = document.createElement("div"), this.modalBox.classList.add("tingle-modal-box"), this.modalBoxContent = document.createElement("div"), this.modalBoxContent.classList.add("tingle-modal-box__content"), this.modalBox.appendChild(this.modalBoxContent), -1 !== this.opts.closeMethods.indexOf("button") && this.modal.appendChild(this.modalCloseBtn), this.modal.appendChild(this.modalBox)
        }

        function r() {
            this.modalBoxFooter = document.createElement("div"), this.modalBoxFooter.classList.add("tingle-modal-box__footer"), this.modalBox.appendChild(this.modalBoxFooter)
        }

        function a() {
            this._events = {
                clickCloseBtn: this.close.bind(this),
                clickOverlay:  i.bind(this),
                resize:        this.checkOverflow.bind(this),
                keyboardNav:   o.bind(this)
            }, -1 !== this.opts.closeMethods.indexOf("button") && this.modalCloseBtn.addEventListener("click", this._events.clickCloseBtn), this.modal.addEventListener("mousedown", this._events.clickOverlay), window.addEventListener("resize", this._events.resize), document.addEventListener("keydown", this._events.keyboardNav)
        }

        function o(e) {
            -1 !== this.opts.closeMethods.indexOf("escape") && 27 === e.which && this.isOpen() && this.close()
        }

        function i(e) {
            -1 !== this.opts.closeMethods.indexOf("overlay") && !s(e.target, "tingle-modal") && e.clientX < this.modal.clientWidth && this.close()
        }

        function s(e, t) {
            for (; (e = e.parentElement) && !e.classList.contains(t);) ;
            return e
        }

        function l() {
            -1 !== this.opts.closeMethods.indexOf("button") && this.modalCloseBtn.removeEventListener("click", this._events.clickCloseBtn), this.modal.removeEventListener("mousedown", this._events.clickOverlay), window.removeEventListener("resize", this._events.resize), document.removeEventListener("keydown", this._events.keyboardNav)
        }

        function c() {
            for (var e = 1; e < arguments.length; e++) for (var t in arguments[e]) arguments[e].hasOwnProperty(t) && (arguments[0][t] = arguments[e][t]);
            return arguments[0]
        }

        var d = function () {
            var e, t = document.createElement("tingle-test-transition"), n = {
                transition:       "transitionend",
                OTransition:      "oTransitionEnd",
                MozTransition:    "transitionend",
                WebkitTransition: "webkitTransitionEnd"
            };
            for (e in n) if (void 0 !== t.style[e]) return n[e]
        }();
        return e.prototype.init = function () {
            this.modal || (n.call(this), a.call(this), document.body.insertBefore(this.modal, document.body.firstChild), this.opts.footer && this.addFooter())
        }, e.prototype.destroy = function () {
            null !== this.modal && (l.call(this), this.modal.parentNode.removeChild(this.modal), this.modal = null)
        }, e.prototype.open = function () {
            this.modal.style.removeProperty ? this.modal.style.removeProperty("display") : this.modal.style.removeAttribute("display"), document.body.classList.add("tingle-enabled"), this.setStickyFooter(this.opts.stickyFooter), this.modal.classList.add("tingle-modal--visible");
            var e = this;
            d ? this.modal.addEventListener(d, function t() {
                "function" == typeof e.opts.onOpen && e.opts.onOpen.call(e), e.modal.removeEventListener(d, t, !1)
            }, !1) : "function" == typeof e.opts.onOpen && e.opts.onOpen.call(e), this.checkOverflow()
        }, e.prototype.isOpen = function () {
            return !!this.modal.classList.contains("tingle-modal--visible")
        }, e.prototype.close = function () {
            if ("function" == typeof this.opts.beforeClose) {
                if (!this.opts.beforeClose.call(this)) return
            }
            document.body.classList.remove("tingle-enabled"), this.modal.classList.remove("tingle-modal--visible");
            var e = this;
            d ? this.modal.addEventListener(d, function t() {
                e.modal.removeEventListener(d, t, !1), e.modal.style.display = "none", "function" == typeof e.opts.onClose && e.opts.onClose.call(this)
            }, !1) : (e.modal.style.display = "none", "function" == typeof e.opts.onClose && e.opts.onClose.call(this))
        }, e.prototype.setContent = function (e) {
            "string" == typeof e ? this.modalBoxContent.innerHTML = e : (this.modalBoxContent.innerHTML = "", this.modalBoxContent.appendChild(e))
        }, e.prototype.getContent = function () {
            return this.modalBoxContent
        }, e.prototype.addFooter = function () {
            r.call(this)
        }, e.prototype.setFooterContent = function (e) {
            this.modalBoxFooter.innerHTML = e
        }, e.prototype.getFooterContent = function () {
            return this.modalBoxFooter
        }, e.prototype.setStickyFooter = function (e) {
            this.isOverflow() || (e = !1), e ? this.modalBox.contains(this.modalBoxFooter) && (this.modalBox.removeChild(this.modalBoxFooter), this.modal.appendChild(this.modalBoxFooter), this.modalBoxFooter.classList.add("tingle-modal-box__footer--sticky"), t.call(this), this.modalBoxContent.style["padding-bottom"] = this.modalBoxFooter.clientHeight + 20 + "px") : this.modalBoxFooter && (this.modalBox.contains(this.modalBoxFooter) || (this.modal.removeChild(this.modalBoxFooter), this.modalBox.appendChild(this.modalBoxFooter), this.modalBoxFooter.style.width = "auto", this.modalBoxFooter.style.left = "", this.modalBoxContent.style["padding-bottom"] = "", this.modalBoxFooter.classList.remove("tingle-modal-box__footer--sticky")))
        }, e.prototype.addFooterBtn = function (e, t, n) {
            var r = document.createElement("button");
            return r.innerHTML = e, r.addEventListener("click", n), "string" == typeof t && t.length && t.split(" ").forEach(function (e) {
                r.classList.add(e)
            }), this.modalBoxFooter.appendChild(r), r
        }, e.prototype.resize = function () {
            console.warn("Resize is deprecated and will be removed in version 1.0")
        }, e.prototype.isOverflow = function () {
            var e = window.innerHeight;
            return this.modalBox.clientHeight >= e
        }, e.prototype.checkOverflow = function () {
            this.modal.classList.contains("tingle-modal--visible") && (this.isOverflow() ? this.modal.classList.add("tingle-modal--overflow") : this.modal.classList.remove("tingle-modal--overflow"), !this.isOverflow() && this.opts.stickyFooter ? this.setStickyFooter(!1) : this.isOverflow() && this.opts.stickyFooter && (t.call(this), this.setStickyFooter(!0)))
        }, {modal: e}
    })
}, function (e, t, n) {
    "use strict";

    function r() {
        return /rv:11.0/i.test(navigator.userAgent)
    }

    function a() {
        return /Edge/i.test(navigator.userAgent)
    }

    function o() {
        return !/MSIE/i.test(navigator.userAgent)
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.ie11 = r, t.edge = a, t.isSupported = o
}, function (e, t, n) {
    "use strict";

    function r(e) {
        var t = e.getBoundingClientRect(), n = document.body, r = document.documentElement,
            a = window.pageYOffset || r.scrollTop || n.scrollTop;
        return t.top + a
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.default = r
}, function (e, t, n) {
    "use strict";
    var r, a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    r = function () {
        return this
    }();
    try {
        r = r || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" === ("undefined" == typeof window ? "undefined" : a(window)) && (r = window)
    }
    e.exports = r
}, function (e, t, n) {
    "use strict";
    e.exports = function (e, t) {
        return function () {
            for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
            return e.apply(t, n)
        }
    }
}, function (e, t, n) {
    "use strict";
    (function (t) {
        var r = n(1), a = n(49), o = n(51), i = n(52), s = n(53), l = n(14),
            c = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || n(54);
        e.exports = function (e) {
            return new Promise(function (d, u) {
                var p = e.data, f = e.headers;
                r.isFormData(p) && delete f["Content-Type"];
                var m = new XMLHttpRequest, h = "onreadystatechange", g = !1;
                if ("test" === t.env.NODE_ENV || "undefined" == typeof window || !window.XDomainRequest || "withCredentials" in m || s(e.url) || (m = new window.XDomainRequest, h = "onload", g = !0, m.onprogress = function () {
                }, m.ontimeout = function () {
                }), e.auth) {
                    var v = e.auth.username || "", y = e.auth.password || "";
                    f.Authorization = "Basic " + c(v + ":" + y)
                }
                if (m.open(e.method.toUpperCase(), o(e.url, e.params, e.paramsSerializer), !0), m.timeout = e.timeout, m[h] = function () {
                    if (m && (4 === m.readyState || g) && (0 !== m.status || m.responseURL && 0 === m.responseURL.indexOf("file:"))) {
                        var t = "getAllResponseHeaders" in m ? i(m.getAllResponseHeaders()) : null,
                            n = e.responseType && "text" !== e.responseType ? m.response : m.responseText, r = {
                                data:       n,
                                status:     1223 === m.status ? 204 : m.status,
                                statusText: 1223 === m.status ? "No Content" : m.statusText,
                                headers:    t,
                                config:     e,
                                request:    m
                            };
                        a(d, u, r), m = null
                    }
                }, m.onerror = function () {
                    u(l("Network Error", e, null, m)), m = null
                }, m.ontimeout = function () {
                    u(l("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", m)), m = null
                }, r.isStandardBrowserEnv()) {
                    var b = n(55),
                        w = (e.withCredentials || s(e.url)) && e.xsrfCookieName ? b.read(e.xsrfCookieName) : void 0;
                    w && (f[e.xsrfHeaderName] = w)
                }
                if ("setRequestHeader" in m && r.forEach(f, function (e, t) {
                    void 0 === p && "content-type" === t.toLowerCase() ? delete f[t] : m.setRequestHeader(t, e)
                }), e.withCredentials && (m.withCredentials = !0), e.responseType) try {
                    m.responseType = e.responseType
                } catch (t) {
                    if ("json" !== e.responseType) throw t
                }
                "function" == typeof e.onDownloadProgress && m.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && m.upload && m.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function (e) {
                    m && (m.abort(), u(e), m = null)
                }), void 0 === p && (p = null), m.send(p)
            })
        }
    }).call(t, n(5))
}, function (e, t, n) {
    "use strict";
    var r = n(50);
    e.exports = function (e, t, n, a, o) {
        var i = new Error(e);
        return r(i, t, n, a, o)
    }
}, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        return !(!e || !e.__CANCEL__)
    }
}, function (e, t, n) {
    "use strict";

    function r(e) {
        this.message = e
    }

    r.prototype.toString = function () {
        return "Cancel" + (this.message ? ": " + this.message : "")
    }, r.prototype.__CANCEL__ = !0, e.exports = r
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = function (e) {
        function t(e) {
            s = e
        }

        function n(t) {
            32 !== t.keyCode && 13 !== t.keyCode || (t.preventDefault(), a(t));
            var n = e.querySelector(".tab.tab--active");
            37 === t.keyCode && a(null, n.previousElementSibling || o[o.length - 1]), 39 === t.keyCode && a(null, n.nextElementSibling || o[0])
        }

        function r(e) {
            if (e || (e = Array.prototype.filter.call(o, function (e) {
                return e.classList.contains("tab--active")
            })[0])) {
                var t = Math.round(.8 * e.offsetWidth), n = e.offsetLeft + (e.offsetWidth - t) / 2;
                i.style.width = t + "px", i.style.left = n + "px"
            }
        }

        function a(e, t, n) {
            if (t = t || e.target || e.srcElement, !t.classList.contains("tab--active")) {
                Array.prototype.forEach.call(o, function (e) {
                    e.classList.remove("tab--active"), e.setAttribute("aria-pressed", !1)
                }), t.classList.add("tab--active"), t.setAttribute("aria-pressed", !0);
                if (document.getElementById(t.getAttribute("aria-controls")).setAttribute("aria-labelledby", t.id), r(t), !n) {
                    n || t.focus();
                    var a = t.getAttribute("data-target-state"), i = s[a];
                    i && i(t)
                }
            }
        }

        var o = e.querySelectorAll(".tab"), i = e.querySelector(".active__tab-marker"), s = null, l = null;
        return {
            init:                    function (e, r) {
                t(r), Array.prototype.forEach.call(o, function (e) {
                    e.addEventListener("click", a), e.addEventListener("keyup", n), e.addEventListener("keydown", function (e) {
                        32 === e.keyCode && e.preventDefault()
                    })
                }), l = Array.prototype.filter.call(o, function (t) {
                    return t.getAttribute("data-target-state") === e
                })[0], a(null, l, !0)
            }, getTargetStates:      function () {
                return Array.prototype.map.call(o, function (e) {
                    return e.getAttribute("data-target-state")
                })
            }, updateMarkerPosition: r
        }
    };
    t.default = r
}, function (e, t) {
    e.exports = {
        ckeditor4: {version: "4.9.1", date: "26-03-2018"},
        ckeditor5: {
            classic:              "1.0.0-beta.1",
            inline:               "1.0.0-beta.1",
            balloon:              "1.0.0-beta.1",
            "decoupled-document": "1.0.0-beta.1"
        },
        ckfinder:  {version: "3.4.2"}
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(4), a = function (e) {
        return e && e.__esModule ? e : {default: e}
    }(r), o = function () {
        function e(e) {
            for (var t = "", n = 0; n < e.elements.length; n++) {
                var r = e.elements[n];
                r.name && !r.disabled && "submit" !== r.type && "button" !== r.type && (t += "&" + encodeURIComponent(r.name) + "=" + encodeURIComponent(r.value))
            }
            return t
        }

        function t(t) {
            return t.getAttribute("action").replace("/post?u=", "/post-json?u=") + e(t) + "&c=submitCallback"
        }

        function n() {
            var e = document.createElement("script");
            e.innerHTML = "\n\t\t\tfunction submitCallback( data ) {\n\t\t\t\tvar pendingForm = document.querySelector( '[data-pending]' );\n\t\t\t\tvar responseWrapper = pendingForm.querySelector( '.mc-response' );\n\t\t\t\t// Clenup classes (error, success).\n\t\t\t\tresponseWrapper.className = 'mc-response';\n\n\t\t\t\t// Cleanup old messages.\n\t\t\t\twhile ( responseWrapper.firstChild ) {\n\t\t\t\t\tresponseWrapper.removeChild( responseWrapper.firstChild );\n\t\t\t\t}\n\n\t\t\t\tvar response = document.createElement( 'p' );\n\n\t\t\t\tfunction _checkIfAlreadyExistsMsg( msg ) {\n\t\t\t\t\treturn /is already subscribed to list/.test( msg );\n\t\t\t\t}\n\n\t\t\t\tfunction _replaceAlreadyOnListMsg( msg ) {\n\t\t\t\t\tif ( !_checkIfAlreadyExistsMsg( msg ) ) {\n\t\t\t\t\t\treturn msg;\n\t\t\t\t\t}\n\n\t\t\t\t\tlet updateDataLink = msg.substring( msg.indexOf( 'href=\"' ), '\">' );\n\t\t\t\t\tlet msgEmailPart = msg.substring( 0, msg.indexOf( ' <a' ) );\n\n\t\t\t\t\treturn msgEmailPart + ' To manage your preferences please go to ' + '<a href=\"' + updateDataLink + '\">link</a>.';\n\t\t\t\t}\n\n\t\t\t\tresponse.innerHTML = _replaceAlreadyOnListMsg( data.msg );\n\n\t\t\t\tif ( data.result === 'success' ) {\n\t\t\t\t\tvar formInputsWrapper = pendingForm.querySelector( '.form-group-inline__wrapper' );\n\t\t\t\t\tformInputsWrapper.parentElement.removeChild( formInputsWrapper );\n\n\t\t\t\t\tresponseWrapper.classList.add( 'mc-response--success' );\n\n\t\t\t\t\t// Close newsletter dialog after 5 sek.\n\t\t\t\t\tsetTimeout( function() {\n\t\t\t\t\t\tvar tingleModal = document.querySelector( '.tingle-modal--visible' );\n\n\t\t\t\t\t\tif ( tingleModal ) {\n\t\t\t\t\t\t\tvar clickEvt = new MouseEvent( 'click' );\n\t\t\t\t\t\t\ttingleModal.querySelector( '.tingle-modal__close' ).dispatchEvent( clickEvt );\n\t\t\t\t\t\t}\n\t\t\t\t\t}, 5000 );\n\t\t\t\t} else {\n\t\t\t\t\tresponseWrapper.classList.add( _checkIfAlreadyExistsMsg( data.msg ) ? 'mc-response--success' : 'mc-response--error' );\n\t\t\t\t}\n\n\t\t\t\tresponseWrapper.appendChild( response );\n\t\t\t\tpendingForm.removeAttribute( 'data-pending' );\n\t\t\t}\n\t\t", document.body.appendChild(e)
        }

        function r(e, n) {
            n.preventDefault(), e.setAttribute("data-pending", "true");
            var r = document.createElement("script");
            r.src = t(e), document.head.appendChild(r), r.addEventListener("load", function () {
                return document.head.removeChild(r)
            })
        }

        function o(e) {
            e.preventDefault();
            var t = document.getElementById(e.target.href.split("#")[1]);
            (0, a.default)(t, 0), t.querySelector('input[type="email"]').focus()
        }

        var i = document.querySelectorAll(".mc-subscribe-form"), s = document.querySelectorAll("[data-goto-subscribe]");
        return {
            init:          function () {
                Array.prototype.forEach.call(i, function (e) {
                    e.addEventListener("submit", r.bind(null, e))
                }), Array.prototype.forEach.call(s, function (e) {
                    e.addEventListener("click", o)
                }), n()
            }, assignForm: function (e) {
                e.addEventListener("submit", r.bind(null, e))
            }
        }
    };
    t.default = o
}, function (e, t, n) {
    "use strict";
    var r = n(21), a = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
    }(r), o = n(104), i = function (e) {
        return e && e.__esModule ? e : {default: e}
    }(o), s = n(105), l = function () {
        function e(e, t) {
            (0, s.getEventsCallbacks)(e, t).then(function (t) {
                for (var n in e) t[n] && e[n](t[n])
            })
        }

        return {
            init: function () {
                var t = (0, s.getAPICollection)(a);
                (0, s.initComponents)(t), e(i.default, t)
            }
        }
    }();
    document.addEventListener("DOMContentLoaded", l.init)
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.Testimonials = t.TableRowHighlighter = t.SmoothScrollTo = t.SiteNav = t.SimpleTabs = t.ReadingProgressBar = t.Releases = t.MenuCollapsing = t.Menu = t.MailChimp = t.Legal = t.ImageDialog = t.Hexagon = t.Header = t.FloatingPanel = t.FixedSticky = t.Dropdown = t.Download = t.Dialog = t.DemoLetters = t.DemoCKE5 = t.DemoCKE4 = t.CKFinderPricing = t.Contact = t.Blog = t.Accessibility = t.Anchor = void 0;
    var a = n(22), o = r(a), i = n(41), s = r(i), l = n(42), c = r(l), d = n(44), u = r(d), p = n(63), f = r(p),
        m = n(64), h = r(m), g = n(67), v = r(g), y = n(69), b = r(y), w = n(72), S = r(w), C = n(73), x = r(C),
        E = n(86), k = r(E), T = n(87), _ = r(T), L = n(88), A = r(L), M = n(89), z = r(M), P = n(90), O = r(P),
        I = n(92), q = r(I), D = n(93), B = r(D), H = n(19), N = r(H), R = n(94), j = r(R), F = n(95), W = r(F),
        K = n(96), G = r(K), Y = n(97), X = r(Y), V = n(98), U = r(V), J = n(99), Q = r(J), $ = n(100), Z = r($),
        ee = n(101), te = r(ee), ne = n(102), re = r(ne);
    t.Anchor = o.default, t.Accessibility = s.default, t.Blog = c.default, t.Contact = u.default, t.CKFinderPricing = f.default, t.DemoCKE4 = h.default, t.DemoCKE5 = v.default, t.DemoLetters = b.default, t.Dialog = S.default, t.Download = x.default, t.Dropdown = k.default, t.FixedSticky = _.default, t.FloatingPanel = A.default, t.Header = z.default, t.Hexagon = O.default, t.ImageDialog = q.default, t.Legal = B.default, t.MailChimp = N.default, t.Menu = j.default, t.MenuCollapsing = W.default, t.Releases = X.default, t.ReadingProgressBar = G.default, t.SimpleTabs = U.default, t.SiteNav = Q.default, t.SmoothScrollTo = Z.default, t.TableRowHighlighter = te.default, t.Testimonials = re.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), a = function () {
        var e = document.querySelectorAll(".blog-post__header-anchor");
        return e.length ? {
            init: function () {
                (0, r.GotoHashLink)(75), Array.prototype.forEach.call(e, function (e) {
                    return e.addEventListener("click", function (t) {
                        t.preventDefault(), window.history.replaceState({}, "", e.href), window.scrollTo(0, (0, r.totalOffsetTop)(e) - 75)
                    })
                })
            }
        } : {}
    };
    t.default = a
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        return e + "?" + Object.keys(t).filter(function (e) {
            return t[e]
        }).map(function (e) {
            return "user." + e + "=" + t[e]
        }).join("&")
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.default = r
}, function (e, t, n) {
    "use strict";

    function r(e, t, n) {
        e && void 0 !== t && n && (t ? e.classList.contains(n) || e.classList.add(n) : e.classList.contains(n) && e.classList.remove(n))
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.default = r
}, function (e, t, n) {
    "use strict";

    function r() {
        var e = document.createElement("fakeelement"), t = {
            transition:       "transitionend",
            OTransition:      "oTransitionEnd",
            MozTransition:    "transitionend",
            WebkitTransition: "webkitTransitionEnd"
        };
        for (var n in t) if (void 0 !== e.style[n]) return t[n]
    }

    function a(e, t) {
        var n = r(), a = function r() {
            t(), e.removeEventListener(n, r)
        };
        e.addEventListener(n, a)
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.default = a
}, function (e, t, n) {
    "use strict";

    function r() {
        var e = [];
        return {
            subscribe: function (t) {
                e.push(t)
            }, update: function (e) {
                this.fire(e)
            }, fire:   function (t) {
                e.forEach(function (e) {
                    return e(t)
                })
            }
        }
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.default = r
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e) {
        var t = e.getMonth() + 1, n = e.getDate();
        return [e.getFullYear(), (t > 9 ? "" : "0") + t, (n > 9 ? "" : "0") + n].join("-")
    }
}, function (e, t, n) {
    "use strict";

    function r(e) {
        var t = window.location.hash;
        if (t.length) {
            var n = document.querySelector(t);
            if (n) {
                var r = e || (0, a.isPhoneSize)() ? 75 : 90;
                setTimeout(function () {
                    return window.scrollTo(0, (0, i.default)(n) - r)
                }, 0)
            }
        }
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.default = r;
    var a = n(2), o = n(10), i = function (e) {
        return e && e.__esModule ? e : {default: e}
    }(o)
}, function (e, t, n) {
    "use strict";

    function r(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = "http://www.gravatar.com/avatar/";
        (t.secure || "https:" === location.protocol) && (n = "https://secure.gravatar.com/avatar/");
        return "" + n + (0, o.default)(e.trim()) + "?s=50"
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.default = r;
    var a = n(30), o = function (e) {
        return e && e.__esModule ? e : {default: e}
    }(a)
}, function (e, t, n) {
    "use strict";
    var r;
    "function" == typeof Symbol && Symbol.iterator;
    !function (a) {
        function o(e, t) {
            var n = (65535 & e) + (65535 & t);
            return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
        }

        function i(e, t) {
            return e << t | e >>> 32 - t
        }

        function s(e, t, n, r, a, s) {
            return o(i(o(o(t, e), o(r, s)), a), n)
        }

        function l(e, t, n, r, a, o, i) {
            return s(t & n | ~t & r, e, t, a, o, i)
        }

        function c(e, t, n, r, a, o, i) {
            return s(t & r | n & ~r, e, t, a, o, i)
        }

        function d(e, t, n, r, a, o, i) {
            return s(t ^ n ^ r, e, t, a, o, i)
        }

        function u(e, t, n, r, a, o, i) {
            return s(n ^ (t | ~r), e, t, a, o, i)
        }

        function p(e, t) {
            e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
            var n, r, a, i, s, p = 1732584193, f = -271733879, m = -1732584194, h = 271733878;
            for (n = 0; n < e.length; n += 16) r = p, a = f, i = m, s = h, p = l(p, f, m, h, e[n], 7, -680876936), h = l(h, p, f, m, e[n + 1], 12, -389564586), m = l(m, h, p, f, e[n + 2], 17, 606105819), f = l(f, m, h, p, e[n + 3], 22, -1044525330), p = l(p, f, m, h, e[n + 4], 7, -176418897), h = l(h, p, f, m, e[n + 5], 12, 1200080426), m = l(m, h, p, f, e[n + 6], 17, -1473231341), f = l(f, m, h, p, e[n + 7], 22, -45705983), p = l(p, f, m, h, e[n + 8], 7, 1770035416), h = l(h, p, f, m, e[n + 9], 12, -1958414417), m = l(m, h, p, f, e[n + 10], 17, -42063), f = l(f, m, h, p, e[n + 11], 22, -1990404162), p = l(p, f, m, h, e[n + 12], 7, 1804603682), h = l(h, p, f, m, e[n + 13], 12, -40341101), m = l(m, h, p, f, e[n + 14], 17, -1502002290), f = l(f, m, h, p, e[n + 15], 22, 1236535329), p = c(p, f, m, h, e[n + 1], 5, -165796510), h = c(h, p, f, m, e[n + 6], 9, -1069501632), m = c(m, h, p, f, e[n + 11], 14, 643717713), f = c(f, m, h, p, e[n], 20, -373897302), p = c(p, f, m, h, e[n + 5], 5, -701558691), h = c(h, p, f, m, e[n + 10], 9, 38016083), m = c(m, h, p, f, e[n + 15], 14, -660478335), f = c(f, m, h, p, e[n + 4], 20, -405537848), p = c(p, f, m, h, e[n + 9], 5, 568446438), h = c(h, p, f, m, e[n + 14], 9, -1019803690), m = c(m, h, p, f, e[n + 3], 14, -187363961), f = c(f, m, h, p, e[n + 8], 20, 1163531501), p = c(p, f, m, h, e[n + 13], 5, -1444681467), h = c(h, p, f, m, e[n + 2], 9, -51403784), m = c(m, h, p, f, e[n + 7], 14, 1735328473), f = c(f, m, h, p, e[n + 12], 20, -1926607734), p = d(p, f, m, h, e[n + 5], 4, -378558), h = d(h, p, f, m, e[n + 8], 11, -2022574463), m = d(m, h, p, f, e[n + 11], 16, 1839030562), f = d(f, m, h, p, e[n + 14], 23, -35309556), p = d(p, f, m, h, e[n + 1], 4, -1530992060), h = d(h, p, f, m, e[n + 4], 11, 1272893353), m = d(m, h, p, f, e[n + 7], 16, -155497632), f = d(f, m, h, p, e[n + 10], 23, -1094730640), p = d(p, f, m, h, e[n + 13], 4, 681279174), h = d(h, p, f, m, e[n], 11, -358537222), m = d(m, h, p, f, e[n + 3], 16, -722521979), f = d(f, m, h, p, e[n + 6], 23, 76029189), p = d(p, f, m, h, e[n + 9], 4, -640364487), h = d(h, p, f, m, e[n + 12], 11, -421815835), m = d(m, h, p, f, e[n + 15], 16, 530742520), f = d(f, m, h, p, e[n + 2], 23, -995338651), p = u(p, f, m, h, e[n], 6, -198630844), h = u(h, p, f, m, e[n + 7], 10, 1126891415), m = u(m, h, p, f, e[n + 14], 15, -1416354905), f = u(f, m, h, p, e[n + 5], 21, -57434055), p = u(p, f, m, h, e[n + 12], 6, 1700485571), h = u(h, p, f, m, e[n + 3], 10, -1894986606), m = u(m, h, p, f, e[n + 10], 15, -1051523), f = u(f, m, h, p, e[n + 1], 21, -2054922799), p = u(p, f, m, h, e[n + 8], 6, 1873313359), h = u(h, p, f, m, e[n + 15], 10, -30611744), m = u(m, h, p, f, e[n + 6], 15, -1560198380), f = u(f, m, h, p, e[n + 13], 21, 1309151649), p = u(p, f, m, h, e[n + 4], 6, -145523070), h = u(h, p, f, m, e[n + 11], 10, -1120210379), m = u(m, h, p, f, e[n + 2], 15, 718787259), f = u(f, m, h, p, e[n + 9], 21, -343485551), p = o(p, r), f = o(f, a), m = o(m, i), h = o(h, s);
            return [p, f, m, h]
        }

        function f(e) {
            var t, n = "", r = 32 * e.length;
            for (t = 0; t < r; t += 8) n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
            return n
        }

        function m(e) {
            var t, n = [];
            for (n[(e.length >> 2) - 1] = void 0, t = 0; t < n.length; t += 1) n[t] = 0;
            var r = 8 * e.length;
            for (t = 0; t < r; t += 8) n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
            return n
        }

        function h(e) {
            return f(p(m(e), 8 * e.length))
        }

        function g(e, t) {
            var n, r, a = m(e), o = [], i = [];
            for (o[15] = i[15] = void 0, a.length > 16 && (a = p(a, 8 * e.length)), n = 0; n < 16; n += 1) o[n] = 909522486 ^ a[n], i[n] = 1549556828 ^ a[n];
            return r = p(o.concat(m(t)), 512 + 8 * t.length), f(p(i.concat(r), 640))
        }

        function v(e) {
            var t, n, r = "0123456789abcdef", a = "";
            for (n = 0; n < e.length; n += 1) t = e.charCodeAt(n), a += r.charAt(t >>> 4 & 15) + r.charAt(15 & t);
            return a
        }

        function y(e) {
            return unescape(encodeURIComponent(e))
        }

        function b(e) {
            return h(y(e))
        }

        function w(e) {
            return v(b(e))
        }

        function S(e, t) {
            return g(y(e), y(t))
        }

        function C(e, t) {
            return v(S(e, t))
        }

        function x(e, t, n) {
            return t ? n ? S(t, e) : C(t, e) : n ? b(e) : w(e)
        }

        void 0 !== (r = function () {
            return x
        }.call(t, n, t, e)) && (e.exports = r)
    }()
}, function (e, t, n) {
    "use strict";
    (function (n) {
        var r, a;
        "function" == typeof Symbol && Symbol.iterator;
        /*! smooth-scroll v12.1.5 | (c) 2017 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
        !function (n, o) {
            r = [], void 0 !== (a = function () {
                return o(n)
            }.apply(t, r)) && (e.exports = a)
        }(void 0 !== n ? n : "undefined" != typeof window ? window : void 0, function (e) {
            var t = "querySelector" in document && "addEventListener" in e && "requestAnimationFrame" in e && "closest" in e.Element.prototype,
                n = {
                    ignore:       "[data-scroll-ignore]",
                    header:       null,
                    speed:        500,
                    offset:       0,
                    easing:       "easeInOutCubic",
                    customEasing: null,
                    before:       function () {
                    },
                    after:        function () {
                    }
                }, r = function () {
                    for (var e = {}, t = 0, n = arguments.length; t < n; t++) {
                        var r = arguments[t];
                        !function (t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        }(r)
                    }
                    return e
                }, a = function (t) {
                    return parseInt(e.getComputedStyle(t).height, 10)
                }, o = function (e) {
                    "#" === e.charAt(0) && (e = e.substr(1));
                    for (var t, n = String(e), r = n.length, a = -1, o = "", i = n.charCodeAt(0); ++a < r;) {
                        if (0 === (t = n.charCodeAt(a))) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
                        o += t >= 1 && t <= 31 || 127 == t || 0 === a && t >= 48 && t <= 57 || 1 === a && t >= 48 && t <= 57 && 45 === i ? "\\" + t.toString(16) + " " : t >= 128 || 45 === t || 95 === t || t >= 48 && t <= 57 || t >= 65 && t <= 90 || t >= 97 && t <= 122 ? n.charAt(a) : "\\" + n.charAt(a)
                    }
                    return "#" + o
                }, i = function (e, t) {
                    var n;
                    return "easeInQuad" === e.easing && (n = t * t), "easeOutQuad" === e.easing && (n = t * (2 - t)), "easeInOutQuad" === e.easing && (n = t < .5 ? 2 * t * t : (4 - 2 * t) * t - 1), "easeInCubic" === e.easing && (n = t * t * t), "easeOutCubic" === e.easing && (n = --t * t * t + 1), "easeInOutCubic" === e.easing && (n = t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1), "easeInQuart" === e.easing && (n = t * t * t * t), "easeOutQuart" === e.easing && (n = 1 - --t * t * t * t), "easeInOutQuart" === e.easing && (n = t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t), "easeInQuint" === e.easing && (n = t * t * t * t * t), "easeOutQuint" === e.easing && (n = 1 + --t * t * t * t * t), "easeInOutQuint" === e.easing && (n = t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t), e.customEasing && (n = e.customEasing(t)), n || t
                }, s = function () {
                    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight)
                }, l = function (e, t, n) {
                    var r = 0;
                    if (e.offsetParent) do {
                        r += e.offsetTop, e = e.offsetParent
                    } while (e);
                    return r = Math.max(r - t - n, 0)
                }, c = function (e) {
                    return e ? a(e) + e.offsetTop : 0
                }, d = function (t, n, r) {
                    r || (t.focus(), document.activeElement.id !== t.id && (t.setAttribute("tabindex", "-1"), t.focus(), t.style.outline = "none"), e.scrollTo(0, n))
                }, u = function (t) {
                    return !!("matchMedia" in e && e.matchMedia("(prefers-reduced-motion)").matches)
                };
            return function (a, p) {
                var f, m, h, g, v, y, b, w = {};
                w.cancelScroll = function () {
                    cancelAnimationFrame(b)
                }, w.animateScroll = function (t, a, o) {
                    var u = r(f || n, o || {}), p = "[object Number]" === Object.prototype.toString.call(t),
                        m = p || !t.tagName ? null : t;
                    if (p || m) {
                        var h = e.pageYOffset;
                        u.header && !g && (g = document.querySelector(u.header)), v || (v = c(g));
                        var y, b, S,
                            C = p ? t : l(m, v, parseInt("function" == typeof u.offset ? u.offset() : u.offset, 10)),
                            x = C - h, E = s(), k = 0, T = function (n, r) {
                                var o = e.pageYOffset;
                                if (n == r || o == r || (h < r && e.innerHeight + o) >= E) return w.cancelScroll(), d(t, r, p), u.after(t, a), y = null, !0
                            }, _ = function t(n) {
                                y || (y = n), k += n - y, b = k / parseInt(u.speed, 10), b = b > 1 ? 1 : b, S = h + x * i(u, b), e.scrollTo(0, Math.floor(S)), T(S, C) || (e.requestAnimationFrame(t), y = n)
                            };
                        0 === e.pageYOffset && e.scrollTo(0, 0), u.before(t, a), w.cancelScroll(), e.requestAnimationFrame(_)
                    }
                };
                var S = function (e) {
                    m && (m.id = m.getAttribute("data-scroll-id"), w.animateScroll(m, h), m = null, h = null)
                }, C = function (t) {
                    if (!u() && 0 === t.button && !t.metaKey && !t.ctrlKey && (h = t.target.closest(a)) && "a" === h.tagName.toLowerCase() && !t.target.closest(f.ignore) && h.hostname === e.location.hostname && h.pathname === e.location.pathname && /#/.test(h.href)) {
                        var n;
                        try {
                            n = o(decodeURIComponent(h.hash))
                        } catch (e) {
                            n = o(h.hash)
                        }
                        if ("#" === n) {
                            t.preventDefault(), m = document.body;
                            var r = m.id ? m.id : "smooth-scroll-top";
                            return m.setAttribute("data-scroll-id", r), m.id = "", void(e.location.hash.substring(1) === r ? S() : e.location.hash = r)
                        }
                        (m = document.querySelector(n)) && (m.setAttribute("data-scroll-id", m.id), m.id = "", h.hash === e.location.hash && (t.preventDefault(), S()))
                    }
                }, x = function (e) {
                    y || (y = setTimeout(function () {
                        y = null, v = c(g)
                    }, 66))
                };
                return w.destroy = function () {
                    f && (document.removeEventListener("click", C, !1), e.removeEventListener("resize", x, !1), w.cancelScroll(), f = null, m = null, h = null, g = null, v = null, y = null, b = null)
                }, w.init = function (a) {
                    t && (w.destroy(), f = r(n, a || {}), g = f.header ? document.querySelector(f.header) : null, v = c(g), document.addEventListener("click", C, !1), e.addEventListener("hashchange", S, !1), g && e.addEventListener("resize", x, !1))
                }, w.init(p), w
            }
        })
    }).call(t, n(11))
}, function (e, t, n) {
    "use strict";

    function r(e) {
        ((0, a.isTabletSize)() || (0, a.isPhoneSize)()) && setTimeout(function () {
            var t = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
            e.style.height = t + "px"
        }, 0)
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.default = r;
    var a = n(2)
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = {
        array: {
            includes: function () {
                Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
                    value: function (e, t) {
                        if (null == this) throw new TypeError('"this" is null or not defined');
                        var n = Object(this), r = n.length >>> 0;
                        if (0 === r) return !1;
                        for (var a = 0 | t, o = Math.max(a >= 0 ? a : r - Math.abs(a), 0); o < r;) {
                            if (function (e, t) {
                                return e === t || "number" == typeof e && "number" == typeof t && isNaN(e) && isNaN(t)
                            }(n[o], e)) return !0;
                            o++
                        }
                        return !1
                    }
                })
            }
        }
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(35), a = function (e) {
        return e && e.__esModule ? e : {default: e}
    }(r);
    t.default = {
        parse:        function (e) {
            var t = a.default.parse(e || window.location.search), n = Object.keys(t), r = {};
            return n.forEach(function (e) {
                var n = t[e];
                n && (-1 !== n.indexOf(",") ? r[e] = n.split(",") : r[e] = n)
            }), r
        }, stringify: function (e) {
            var t = Object.keys(e), n = {};
            return t ? (t.forEach(function (t) {
                var r = e[t];
                Array.isArray(r) ? n[t] = r.join(",") : n[t] = r
            }), a.default.stringify(n, {encode: !1})) : ""
        }
    }
}, function (e, t, n) {
    "use strict";

    function r(e) {
        switch (e.arrayFormat) {
            case"index":
                return function (t, n, r) {
                    return null === n ? [o(t, e), "[", r, "]"].join("") : [o(t, e), "[", o(r, e), "]=", o(n, e)].join("")
                };
            case"bracket":
                return function (t, n) {
                    return null === n ? o(t, e) : [o(t, e), "[]=", o(n, e)].join("")
                };
            default:
                return function (t, n) {
                    return null === n ? o(t, e) : [o(t, e), "=", o(n, e)].join("")
                }
        }
    }

    function a(e) {
        var t;
        switch (e.arrayFormat) {
            case"index":
                return function (e, n, r) {
                    if (t = /\[(\d*)\]$/.exec(e), e = e.replace(/\[\d*\]$/, ""), !t) return void(r[e] = n);
                    void 0 === r[e] && (r[e] = {}), r[e][t[1]] = n
                };
            case"bracket":
                return function (e, n, r) {
                    return t = /(\[\])$/.exec(e), e = e.replace(/\[\]$/, ""), t ? void 0 === r[e] ? void(r[e] = [n]) : void(r[e] = [].concat(r[e], n)) : void(r[e] = n)
                };
            default:
                return function (e, t, n) {
                    if (void 0 === n[e]) return void(n[e] = t);
                    n[e] = [].concat(n[e], t)
                }
        }
    }

    function o(e, t) {
        return t.encode ? t.strict ? d(e) : encodeURIComponent(e) : e
    }

    function i(e) {
        return Array.isArray(e) ? e.sort() : "object" === (void 0 === e ? "undefined" : c(e)) ? i(Object.keys(e)).sort(function (e, t) {
            return Number(e) - Number(t)
        }).map(function (t) {
            return e[t]
        }) : e
    }

    function s(e) {
        var t = e.indexOf("?");
        return -1 === t ? "" : e.slice(t + 1)
    }

    function l(e, t) {
        t = u({arrayFormat: "none"}, t);
        var n = a(t), r = Object.create(null);
        return "string" != typeof e ? r : (e = e.trim().replace(/^[?#&]/, "")) ? (e.split("&").forEach(function (e) {
            var t = e.replace(/\+/g, " ").split("="), a = t.shift(), o = t.length > 0 ? t.join("=") : void 0;
            o = void 0 === o ? null : p(o), n(p(a), o, r)
        }), Object.keys(r).sort().reduce(function (e, t) {
            var n = r[t];
            return Boolean(n) && "object" === (void 0 === n ? "undefined" : c(n)) && !Array.isArray(n) ? e[t] = i(n) : e[t] = n, e
        }, Object.create(null))) : r
    }

    var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, d = n(36), u = n(37), p = n(38);
    t.extract = s, t.parse = l, t.stringify = function (e, t) {
        t = u({encode: !0, strict: !0, arrayFormat: "none"}, t), !1 === t.sort && (t.sort = function () {
        });
        var n = r(t);
        return e ? Object.keys(e).sort(t.sort).map(function (r) {
            var a = e[r];
            if (void 0 === a) return "";
            if (null === a) return o(r, t);
            if (Array.isArray(a)) {
                var i = [];
                return a.slice().forEach(function (e) {
                    void 0 !== e && i.push(n(r, e, i.length))
                }), i.join("&")
            }
            return o(r, t) + "=" + o(a, t)
        }).filter(function (e) {
            return e.length > 0
        }).join("&") : ""
    }, t.parseUrl = function (e, t) {
        return {url: e.split("?")[0] || "", query: l(s(e), t)}
    }
}, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        return encodeURIComponent(e).replace(/[!'()*]/g, function (e) {
            return "%" + e.charCodeAt(0).toString(16).toUpperCase()
        })
    }
}, function (e, t, n) {
    "use strict";

    function r(e) {
        if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(e)
    }

    /*
object-assign
(c) Sindre Sorhus
@license MIT
*/
    var a = Object.getOwnPropertySymbols, o = Object.prototype.hasOwnProperty,
        i = Object.prototype.propertyIsEnumerable;
    e.exports = function () {
        try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
            for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
            if ("0123456789" !== Object.getOwnPropertyNames(t).map(function (e) {
                return t[e]
            }).join("")) return !1;
            var r = {};
            return "abcdefghijklmnopqrst".split("").forEach(function (e) {
                r[e] = e
            }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
        } catch (e) {
            return !1
        }
    }() ? Object.assign : function (e, t) {
        for (var n, s, l = r(e), c = 1; c < arguments.length; c++) {
            n = Object(arguments[c]);
            for (var d in n) o.call(n, d) && (l[d] = n[d]);
            if (a) {
                s = a(n);
                for (var u = 0; u < s.length; u++) i.call(n, s[u]) && (l[s[u]] = n[s[u]])
            }
        }
        return l
    }
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        try {
            return decodeURIComponent(e.join(""))
        } catch (e) {
        }
        if (1 === e.length) return e;
        t = t || 1;
        var n = e.slice(0, t), a = e.slice(t);
        return Array.prototype.concat.call([], r(n), r(a))
    }

    function a(e) {
        try {
            return decodeURIComponent(e)
        } catch (a) {
            for (var t = e.match(s), n = 1; n < t.length; n++) e = r(t, n).join(""), t = e.match(s);
            return e
        }
    }

    function o(e) {
        for (var t = {"%FE%FF": "��", "%FF%FE": "��"}, n = l.exec(e); n;) {
            try {
                t[n[0]] = decodeURIComponent(n[0])
            } catch (e) {
                var r = a(n[0]);
                r !== n[0] && (t[n[0]] = r)
            }
            n = l.exec(e)
        }
        t["%C2"] = "�";
        for (var o = Object.keys(t), i = 0; i < o.length; i++) {
            var s = o[i];
            e = e.replace(new RegExp(s, "g"), t[s])
        }
        return e
    }

    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, s = new RegExp("%[a-f0-9]{2}", "gi"), l = new RegExp("(%[a-f0-9]{2})+", "gi");
    e.exports = function (e) {
        if ("string" != typeof e) throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + (void 0 === e ? "undefined" : i(e)) + "`");
        try {
            return e = e.replace(/\+/g, " "), decodeURIComponent(e)
        } catch (t) {
            return o(e)
        }
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = function () {
        return !!(0, a.isMobile)() || !(0, r.ie11)() && (!!/chrome/gi.test(navigator.userAgent) || (!/safari/gi.test(navigator.userAgent) || parseInt(/Version\/\d*\.\d(\.\d)?/gi.exec(navigator.userAgent)[0].split("/")[1]) >= 11))
    };
    var r = n(9), a = n(2)
}, function (e, t, n) {
    "use strict";

    function r() {
        for (var e = "e", t = 0; t < 8; t++) e += Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
        return e
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.default = r
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(2), a = function () {
        function e() {
            var e = document.querySelector(".skip-link__list");
            if (e) {
                var t = document.getElementById("product-menu"), n = document.getElementById("main-content"),
                    r = document.querySelector("#site-nav__toggler"), a = e.querySelector(".goto-product-menu"),
                    o = e.querySelector(".goto-main-navigation"), i = e.querySelector(".goto-main-content");
                t ? a.addEventListener("keydown", function (e) {
                    13 !== e.keyCode && 32 !== e.keyCode || (e.preventDefault(), t.querySelector("a").focus())
                }) : a.parentNode.removeChild(a), o.addEventListener("keydown", function (e) {
                    if (13 === e.keyCode || 32 === e.keyCode) {
                        e.preventDefault();
                        var t = new Event("click");
                        r.dispatchEvent(t)
                    }
                }), i.addEventListener("keydown", function (e) {
                    13 !== e.keyCode && 32 !== e.keyCode || n.offsetTop && window.scrollTo(0, n.offsetTop - 65)
                })
            }
        }

        function t() {
            var e = document.querySelectorAll('[data-mobile="true"]');
            Array.prototype.forEach.call(e, function (e) {
                return e.setAttribute("aria-hidden", "true")
            })
        }

        return (0, r.isMobile)() ? {} : {
            init: function () {
                e(), t()
            }
        }
    };
    t.default = a
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(43), a = function (e) {
        return e && e.__esModule ? e : {default: e}
    }(r), o = n(0), i = o.mobile.isPhoneSize, s = "/blog/", l = ["ckeditor-3", "fckeditor"];
    o.polyfils.array.includes();
    var c = function () {
        function e(e) {
            var t = e.getAttribute("data-categories"), n = [];
            "none" !== t && (n = t.split(" "));
            var r = e.getAttribute("data-tags"), a = [];
            return "none" !== r && (a = r.split(" ")), {tags: a, categories: n}
        }

        function t() {
            var e = window.location, t = e.search, n = e.origin, r = e.pathname,
                a = _.querySelectorAll('input[type="checkbox"]'), i = Array.prototype.filter.call(a, function (e) {
                    if (e.checked) return !0
                }).map(function (e) {
                    return e.value
                }), s = o.qs.parse(t), l = m(s, {tag: i}, i.length ? "replace" : "clean"), c = o.qs.stringify(l);
            c.length ? window.location.search = c : window.location.replace(n + r)
        }

        function n() {
            var e = _.querySelectorAll('input[type="checkbox"]'), t = _.querySelector(".set-filters"),
                n = o.qs.parse(window.location.search).tags || [];
            Array.prototype.some.call(e, function (e) {
                if (e.checked !== n.indexOf(e.value) !== -1) return !0
            }) ? t.removeAttribute("disabled") : t.setAttribute("disabled", "disabled")
        }

        function r(e, t) {
            var r = document.createElement("li");
            r.className = "filter-wrapper";
            var a = document.createElement("input");
            a.className = "form-control", a.type = "checkbox", a.value = e, a.checked = -1 !== t.indexOf(e), a.id = e, a.addEventListener("change", n);
            var o = document.createElement("label");
            return o.setAttribute("for", e), o.textContent = e.replace(/-/, " "), r.appendChild(a), r.appendChild(o), r
        }

        function c() {
            var e = document.createElement("button");
            return e.setAttribute("data-filter-tag", "all"), e.setAttribute("data-filter-action", "clean"), e.className = "blog-filters__list-cleaner", e.textContent = "Remove all filters", e.addEventListener("click", f), e
        }

        function d(e) {
            var t = document.createElement("li");
            t.className = "blog-filters__list-item";
            var n = document.createElement("span");
            n.textContent = e.replace(/-/g, " ");
            var r = document.createElement("button");
            return r.textContent = "x", r.setAttribute("data-filter-tag", e), r.setAttribute("data-filter-action", "remove"), r.addEventListener("click", f), t.appendChild(n), t.appendChild(r), t
        }

        function u(e) {
            if (e && e.length) {
                var t = document.createElement("ul");
                t.className = "blog-filters__list", e.length > 1 && C.appendChild(c()), e.forEach(function (e) {
                    return t.appendChild(d(e))
                }), C.classList.add("blog-filters--active"), C.appendChild(t)
            }
        }

        function p() {
            Array.prototype.forEach.call(w, function (e) {
                return e.addEventListener("click", f)
            })
        }

        function f(e) {
            e.preventDefault();
            var t = window.location, n = t.search, r = t.origin, a = e.target, i = a.getAttribute("data-filter-tag"),
                l = a.getAttribute("data-filter-category"), c = a.getAttribute("data-filter-action"), d = o.qs.parse(n),
                u = m(d, {tag: i, category: l}, c), p = o.qs.stringify(u);
            window.location.replace(r + s + (p.length ? "?" + p : ""))
        }

        function m(e, t, n) {
            var r = t.tag, a = t.category, o = {category: "null" === a ? void 0 : a || e.category};
            return "clean" === n ? o : r ? (o.tags = "replace" === n ? Array.isArray(r) ? r : [r] : "remove" === n ? Array.isArray(e.tags) ? e.tags.filter(function (e) {
                return e !== r
            }) : void 0 : e.tags ? Array.isArray(e.tags) ? e.tags.concat(r) : [e.tags, r] : [r], o) : (o.tags = e.tags, o)
        }

        function h(e) {
            if (!e) return void S[0].classList.add("blog-categories__list-item--current");
            Array.prototype.filter.call(S, function (t) {
                return e === t.firstChild.getAttribute("data-filter-category")
            })[0].classList.add("blog-categories__list-item--current")
        }

        function g() {
            var e = o.qs.parse(window.location.search);
            if (!e.tags && !e.category) return v();
            e.tags && (Array.isArray(e.tags) || (e.tags = [e.tags]), e.tags = e.tags.filter(function (e) {
                return L.tags.includes(e)
            })), e.category && (e.category = L.categories.includes(e.category) ? e.category : void 0), h(e.category), i() || u(e.tags), v(e)
        }

        function v(t) {
            if (!t) return void Array.prototype.forEach.call(b, function (e) {
                e.classList.add("active")
            });
            var n = t.tags, r = void 0 === n ? [] : n, a = t.category;
            Array.prototype.filter.call(b, function (t) {
                var n = e(t), o = !a || n.categories && n.categories.includes(a);
                if ((!r.length || r.some(function (e) {
                    return n.tags && n.tags.includes(e)
                })) && o) return t.classList.add("active"), !0;
                t.querySelector("img") && t.querySelector("img").classList.remove("b-lazy")
            }).length || E.classList.add("blog-list__no-entries--active")
        }

        function y() {
            new a.default({
                offset:   window.innerHeight / 2, success: function (e) {
                    var t = e.getAttribute("data-activate"), n = document.querySelector(t);
                    n && n.classList.add("loaded")
                }, error: function (e) {
                    var t = e.getAttribute("data-activate"), n = document.querySelector(t);
                    e.classList.remove("b-lazy"), e.classList.add("placeholder"), e.setAttribute("src", "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="), n && n.classList.add("loaded")
                }
            })
        }

        var b = document.querySelectorAll(".blog-list__item"),
            w = Array.prototype.slice.call(document.querySelectorAll("[data-filter-tag]")).concat(Array.prototype.slice.call(document.querySelectorAll("[data-filter-category]")));
        if (!b.length && !w.length) return {};
        if (!b.length && w.length) return {init: p};
        var S = document.querySelectorAll(".blog-categories__list-item"), C = document.querySelector(".blog-filters"),
            x = document.querySelector(".blog-list__loader"), E = document.querySelector(".blog-list__no-entries"),
            k = document.querySelector(".blog-list__row"), T = document.querySelector(".filters-picker"),
            _ = T.querySelector(".dropdown__list"), L = function () {
                var t = {tags: [], categories: []};
                return Array.prototype.forEach.call(b, function (n) {
                    var r = e(n);
                    t.tags = t.tags.concat(r.tags.filter(function (e) {
                        return !t.tags.includes(e)
                    })), t.categories = t.categories.concat(r.categories.filter(function (e) {
                        return !t.categories.includes(e)
                    }))
                }), t
            }();
        return function (e) {
            var n = o.qs.parse(window.location.search).tags || [];
            e.forEach(function (e) {
                return _.appendChild(r(e, n))
            });
            var a = document.createElement("li"), i = document.createElement("button");
            i.setAttribute("disabled", "disabled"), i.className = "btn btn--tiny set-filters", i.textContent = "Apply", i.addEventListener("click", t), a.appendChild(i), _.appendChild(a)
        }(L.tags.filter(function (e) {
            return !l.includes(e.toLowerCase())
        }).sort()), {
            init: function () {
                g(), y(), p(), x.classList.add("blog-list__loader--disable"), k.classList.add("blog-list__row--ready")
            }
        }
    };
    t.default = c
}, function (e, t, n) {
    "use strict";
    var r, a;
    "function" == typeof Symbol && Symbol.iterator;
    !function (o, i) {
        r = i, void 0 !== (a = "function" == typeof r ? r.call(t, n, t, e) : r) && (e.exports = a)
    }(0, function () {
        function e(e) {
            var n = e._util;
            n.elements = m(e.options), n.count = n.elements.length, n.destroyed && (n.destroyed = !1, e.options.container && y(e.options.container, function (e) {
                g(e, "scroll", n.validateT)
            }), g(window, "resize", n.saveViewportOffsetT), g(window, "resize", n.validateT), g(window, "scroll", n.validateT)), t(e)
        }

        function t(e) {
            for (var t = e._util, r = 0; r < t.count; r++) {
                var a = t.elements[r];
                (n(a, e.options) || p(a, e.options.successClass)) && (e.load(a), t.elements.splice(r, 1), t.count--, r--)
            }
            0 === t.count && e.destroy()
        }

        function n(e, t) {
            var n = e.getBoundingClientRect();
            if (t.container && x) {
                var a = e.closest(t.containerClass);
                if (a) {
                    var o = a.getBoundingClientRect();
                    if (r(o, S)) {
                        var i = o.top - t.offset, s = o.right + t.offset, l = o.bottom + t.offset,
                            c = o.left - t.offset;
                        return r(n, {
                            top:    i > S.top ? i : S.top,
                            right:  s < S.right ? s : S.right,
                            bottom: l < S.bottom ? l : S.bottom,
                            left:   c > S.left ? c : S.left
                        })
                    }
                    return !1
                }
            }
            return r(n, S)
        }

        function r(e, t) {
            return e.right >= t.left && e.bottom >= t.top && e.left <= t.right && e.top <= t.bottom
        }

        function a(e, t, n) {
            if (!p(e, n.successClass) && (t || n.loadInvisible || e.offsetWidth > 0 && e.offsetHeight > 0)) {
                var r = c(e, w) || c(e, n.src);
                if (r) {
                    var a = r.split(n.separator), l = a[C && a.length > 1 ? 1 : 0], d = c(e, n.srcset), m = u(e, "img"),
                        h = e.parentNode, b = h && u(h, "picture");
                    if (m || void 0 === e.src) {
                        var S = new Image, x = function t() {
                            n.error && n.error(e, "invalid"), f(e, n.errorClass), v(S, "error", t), v(S, "load", T)
                        }, T = function t() {
                            m ? b || s(e, l, d) : e.style.backgroundImage = 'url("' + l + '")', o(e, n), v(S, "load", t), v(S, "error", x)
                        };
                        b && (S = e, y(h.getElementsByTagName("source"), function (e) {
                            i(e, k, n.srcset)
                        })), g(S, "error", x), g(S, "load", T), s(S, l, d)
                    } else e.src = l, o(e, n)
                } else u(e, "video") ? (y(e.getElementsByTagName("source"), function (e) {
                    i(e, E, n.src)
                }), e.load(), o(e, n)) : (n.error && n.error(e, "missing"), f(e, n.errorClass))
            }
        }

        function o(e, t) {
            f(e, t.successClass), t.success && t.success(e), d(e, t.src), d(e, t.srcset), y(t.breakpoints, function (t) {
                d(e, t.src)
            })
        }

        function i(e, t, n) {
            var r = c(e, n);
            r && (l(e, t, r), d(e, n))
        }

        function s(e, t, n) {
            n && l(e, k, n), e.src = t
        }

        function l(e, t, n) {
            e.setAttribute(t, n)
        }

        function c(e, t) {
            return e.getAttribute(t)
        }

        function d(e, t) {
            e.removeAttribute(t)
        }

        function u(e, t) {
            return e.nodeName.toLowerCase() === t
        }

        function p(e, t) {
            return -1 !== (" " + e.className + " ").indexOf(" " + t + " ")
        }

        function f(e, t) {
            p(e, t) || (e.className += " " + t)
        }

        function m(e) {
            for (var t = [], n = e.root.querySelectorAll(e.selector), r = n.length; r--; t.unshift(n[r])) ;
            return t
        }

        function h(e) {
            S.bottom = (window.innerHeight || document.documentElement.clientHeight) + e, S.right = (window.innerWidth || document.documentElement.clientWidth) + e
        }

        function g(e, t, n) {
            e.attachEvent ? e.attachEvent && e.attachEvent("on" + t, n) : e.addEventListener(t, n, {
                capture: !1,
                passive: !0
            })
        }

        function v(e, t, n) {
            e.detachEvent ? e.detachEvent && e.detachEvent("on" + t, n) : e.removeEventListener(t, n, {
                capture: !1,
                passive: !0
            })
        }

        function y(e, t) {
            if (e && t) for (var n = e.length, r = 0; r < n && !1 !== t(e[r], r); r++) ;
        }

        function b(e, t, n) {
            var r = 0;
            return function () {
                var a = +new Date;
                a - r < t || (r = a, e.apply(n, arguments))
            }
        }

        var w, S, C, x, E = "src", k = "srcset";
        return function (n) {
            if (!document.querySelectorAll) {
                var r = document.createStyleSheet();
                document.querySelectorAll = function (e, t, n, a, o) {
                    for (o = document.all, t = [], e = e.replace(/\[for\b/gi, "[htmlFor").split(","), n = e.length; n--;) {
                        for (r.addRule(e[n], "k:v"), a = o.length; a--;) o[a].currentStyle.k && t.push(o[a]);
                        r.removeRule(0)
                    }
                    return t
                }
            }
            var o = this, i = o._util = {};
            i.elements = [], i.destroyed = !0, o.options = n || {}, o.options.error = o.options.error || !1, o.options.offset = o.options.offset || 100, o.options.root = o.options.root || document, o.options.success = o.options.success || !1, o.options.selector = o.options.selector || ".b-lazy", o.options.separator = o.options.separator || "|", o.options.containerClass = o.options.container, o.options.container = !!o.options.containerClass && document.querySelectorAll(o.options.containerClass), o.options.errorClass = o.options.errorClass || "b-error", o.options.breakpoints = o.options.breakpoints || !1, o.options.loadInvisible = o.options.loadInvisible || !1, o.options.successClass = o.options.successClass || "b-loaded", o.options.validateDelay = o.options.validateDelay || 25, o.options.saveViewportOffsetDelay = o.options.saveViewportOffsetDelay || 50, o.options.srcset = o.options.srcset || "data-srcset", o.options.src = w = o.options.src || "data-src", x = Element.prototype.closest, C = window.devicePixelRatio > 1, S = {}, S.top = 0 - o.options.offset, S.left = 0 - o.options.offset, o.revalidate = function () {
                e(o)
            }, o.load = function (e, t) {
                var n = this.options;
                e && void 0 === e.length ? a(e, t, n) : y(e, function (e) {
                    a(e, t, n)
                })
            }, o.destroy = function () {
                var e = o._util;
                o.options.container && y(o.options.container, function (t) {
                    v(t, "scroll", e.validateT)
                }), v(window, "scroll", e.validateT), v(window, "resize", e.validateT), v(window, "resize", e.saveViewportOffsetT), e.count = 0, e.elements.length = 0, e.destroyed = !0
            }, i.validateT = b(function () {
                t(o)
            }, o.options.validateDelay, o), i.saveViewportOffsetT = b(function () {
                h(o.options.offset)
            }, o.options.saveViewportOffsetDelay, o), h(o.options.offset), y(o.options.breakpoints, function (e) {
                if (e.width >= window.screen.width) return w = e.src, !1
            }), setTimeout(function () {
                e(o)
            })
        }
    })
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(3), a = n(6), o = function (e) {
        return e && e.__esModule ? e : {default: e}
    }(a), i = n(0);
    (0, r.polyfill)();
    var s = function () {
        function e() {
            var e = document.querySelectorAll("[data-visible-controller]");
            if (e.length) {
                var t = (0, i.ObservableSubject)(), n = e[0].getAttribute("data-visible-controller"),
                    r = document.getElementById(n);
                Array.prototype.forEach.call(e, function (e) {
                    t.subscribe(function (t) {
                        e.getAttribute("data-visibility-value") === t ? e.classList.contains("hidden") && (e.classList.remove("hidden"), e.setAttribute("aria-hidden", "false")) : e.classList.contains("hidden") || (e.classList.add("hidden"), e.setAttribute("aria-hidden", "true"))
                    })
                }), r.addEventListener("change", function () {
                    return t.update(r.value)
                })
            }
        }

        function t() {
            var e = document.querySelectorAll("[data-disabled-controlled]"),
                t = document.querySelector("[data-form-controller]");
            if (t || e.length) {
                var n = (0, i.ObservableSubject)();
                Array.prototype.forEach.call(e, function (e) {
                    n.subscribe(function (t) {
                        t.length && e.hasAttribute("disabled") ? e.removeAttribute("disabled") : t.length || e.hasAttribute("disabled") || e.setAttribute("disabled", "disabled")
                    })
                }), t.addEventListener("change", function () {
                    return n.update(t.value)
                })
            }
        }

        function n(e) {
            var t = l.querySelectorAll("input"), n = l.querySelector("select"), r = l.querySelector("textarea");
            e ? (Array.prototype.forEach.call(t, function (e) {
                return e.setAttribute("disabled", "disabled")
            }), n.setAttribute("disabled", "disabled"), r.setAttribute("disabled", "disabled")) : (Array.prototype.forEach.call(t, function (e) {
                return e.removeAttribute("disabled")
            }), n.removeAttribute("disabled"), r.removeAttribute("disabled")), v.value = e ? "Sending..." : "Send", e && (y.className = "form-response")
        }

        function r(e, t, n) {
            v.classList.add("fade-out"), (0, i.transitionEnd)(v, function () {
                v.classList.add("hidden"), v.classList.remove("fade-out"), y.textContent = e ? "Thank you! We will get back to you as soon as possible" : t, e && b.classList.add("hidden"), ["form-response--active", e ? "form-response--success" : "form-response--error"].forEach(function (e) {
                    return y.classList.add(e)
                }), setTimeout(function () {
                    e && y.classList.add("removing"), setTimeout(function () {
                        ["hidden", "fade-out"].forEach(function (e) {
                            return v.classList.remove(e)
                        }), e ? (y.className = "form-response", b.classList.add("hidden")) : y.classList.add("form-response--idle"), n()
                    }, 200)
                }, e ? 3e3 : 600)
            })
        }

        function a() {
            d.value = null, u.value = null, p.value = null, f.value = null, m.value = null, h.value = null
        }

        function s(e) {
            if (e.preventDefault(), !g.value) {
                n(!0);
                var t = new FormData;
                t.append("inquiry", c.value), t.append("name", d.value), t.append("email-address", u.value), t.append("company", p.value), t.append("phone", f.value), t.append("token", m.value), t.append("message", h.value), (0, o.default)({
                    method:  "post",
                    url:     l.action,
                    headers: {"Content-Type": "multipart/form-data"},
                    data:    t
                }).then(function (e) {
                    var t = e.data;
                    if (t && t.error && t.msg) return r(!1, t.msg, n.bind(!1));
                    r(!0, null, function () {
                        n(!1), a()
                    })
                }).catch(function (e) {
                    r(!1, e.message, n.bind(!1))
                })
            }
        }

        var l = document.querySelector(".contact__form form");
        if (!l) return {};
        var c = l.querySelector("#inquiry"), d = l.querySelector("#name"), u = l.querySelector("#email-address"),
            p = l.querySelector("#company-name"), f = l.querySelector("#phone-number"),
            m = l.querySelector("#support-token"), h = l.querySelector("#message"), g = l.querySelector("#email"),
            v = l.querySelector("input.btn"), y = document.querySelector(".form-response"),
            b = document.querySelector(".contact__form-required");
        return {
            init: function () {
                e(), t(), l.addEventListener("submit", s)
            }
        }
    };
    t.default = s
}, function (e, t, n) {
    "use strict";

    function r(e) {
        var t = new i(e), n = o(i.prototype.request, t);
        return a.extend(n, i.prototype, t), a.extend(n, t), n
    }

    var a = n(1), o = n(12), i = n(47), s = n(7), l = r(s);
    l.Axios = i, l.create = function (e) {
        return r(a.merge(s, e))
    }, l.Cancel = n(16), l.CancelToken = n(61), l.isCancel = n(15), l.all = function (e) {
        return Promise.all(e)
    }, l.spread = n(62), e.exports = l, e.exports.default = l
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
    }

    function a(e) {
        return "function" == typeof e.readFloatLE && "function" == typeof e.slice && r(e.slice(0, 0))
    }

    /*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
    e.exports = function (e) {
        return null != e && (r(e) || a(e) || !!e._isBuffer)
    }
}, function (e, t, n) {
    "use strict";

    function r(e) {
        this.defaults = e, this.interceptors = {request: new i, response: new i}
    }

    var a = n(7), o = n(1), i = n(56), s = n(57), l = n(59), c = n(60);
    r.prototype.request = function (e) {
        "string" == typeof e && (e = o.merge({url: arguments[0]}, arguments[1])), e = o.merge(a, this.defaults, {method: "get"}, e), e.method = e.method.toLowerCase(), e.baseURL && !l(e.url) && (e.url = c(e.baseURL, e.url));
        var t = [s, void 0], n = Promise.resolve(e);
        for (this.interceptors.request.forEach(function (e) {
            t.unshift(e.fulfilled, e.rejected)
        }), this.interceptors.response.forEach(function (e) {
            t.push(e.fulfilled, e.rejected)
        }); t.length;) n = n.then(t.shift(), t.shift());
        return n
    }, o.forEach(["delete", "get", "head", "options"], function (e) {
        r.prototype[e] = function (t, n) {
            return this.request(o.merge(n || {}, {method: e, url: t}))
        }
    }), o.forEach(["post", "put", "patch"], function (e) {
        r.prototype[e] = function (t, n, r) {
            return this.request(o.merge(r || {}, {method: e, url: t, data: n}))
        }
    }), e.exports = r
}, function (e, t, n) {
    "use strict";
    var r = n(1);
    e.exports = function (e, t) {
        r.forEach(e, function (n, r) {
            r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r])
        })
    }
}, function (e, t, n) {
    "use strict";
    var r = n(14);
    e.exports = function (e, t, n) {
        var a = n.config.validateStatus;
        n.status && a && !a(n.status) ? t(r("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n)
    }
}, function (e, t, n) {
    "use strict";
    e.exports = function (e, t, n, r, a) {
        return e.config = t, n && (e.code = n), e.request = r, e.response = a, e
    }
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }

    var a = n(1);
    e.exports = function (e, t, n) {
        if (!t) return e;
        var o;
        if (n) o = n(t); else if (a.isURLSearchParams(t)) o = t.toString(); else {
            var i = [];
            a.forEach(t, function (e, t) {
                null !== e && void 0 !== e && (a.isArray(e) && (t += "[]"), a.isArray(e) || (e = [e]), a.forEach(e, function (e) {
                    a.isDate(e) ? e = e.toISOString() : a.isObject(e) && (e = JSON.stringify(e)), i.push(r(t) + "=" + r(e))
                }))
            }), o = i.join("&")
        }
        return o && (e += (-1 === e.indexOf("?") ? "?" : "&") + o), e
    }
}, function (e, t, n) {
    "use strict";
    var r = n(1);
    e.exports = function (e) {
        var t, n, a, o = {};
        return e ? (r.forEach(e.split("\n"), function (e) {
            a = e.indexOf(":"), t = r.trim(e.substr(0, a)).toLowerCase(), n = r.trim(e.substr(a + 1)), t && (o[t] = o[t] ? o[t] + ", " + n : n)
        }), o) : o
    }
}, function (e, t, n) {
    "use strict";
    var r = n(1);
    e.exports = r.isStandardBrowserEnv() ? function () {
        function e(e) {
            var t = e;
            return n && (a.setAttribute("href", t), t = a.href), a.setAttribute("href", t), {
                href:     a.href,
                protocol: a.protocol ? a.protocol.replace(/:$/, "") : "",
                host:     a.host,
                search:   a.search ? a.search.replace(/^\?/, "") : "",
                hash:     a.hash ? a.hash.replace(/^#/, "") : "",
                hostname: a.hostname,
                port:     a.port,
                pathname: "/" === a.pathname.charAt(0) ? a.pathname : "/" + a.pathname
            }
        }

        var t, n = /(msie|trident)/i.test(navigator.userAgent), a = document.createElement("a");
        return t = e(window.location.href), function (n) {
            var a = r.isString(n) ? e(n) : n;
            return a.protocol === t.protocol && a.host === t.host
        }
    }() : function () {
        return function () {
            return !0
        }
    }()
}, function (e, t, n) {
    "use strict";

    function r() {
        this.message = "String contains an invalid character"
    }

    function a(e) {
        for (var t, n, a = String(e), i = "", s = 0, l = o; a.charAt(0 | s) || (l = "=", s % 1); i += l.charAt(63 & t >> 8 - s % 1 * 8)) {
            if ((n = a.charCodeAt(s += .75)) > 255) throw new r;
            t = t << 8 | n
        }
        return i
    }

    var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    r.prototype = new Error, r.prototype.code = 5, r.prototype.name = "InvalidCharacterError", e.exports = a
}, function (e, t, n) {
    "use strict";
    var r = n(1);
    e.exports = r.isStandardBrowserEnv() ? function () {
        return {
            write:     function (e, t, n, a, o, i) {
                var s = [];
                s.push(e + "=" + encodeURIComponent(t)), r.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), r.isString(a) && s.push("path=" + a), r.isString(o) && s.push("domain=" + o), !0 === i && s.push("secure"), document.cookie = s.join("; ")
            }, read:   function (e) {
                var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                return t ? decodeURIComponent(t[3]) : null
            }, remove: function (e) {
                this.write(e, "", Date.now() - 864e5)
            }
        }
    }() : function () {
        return {
            write:     function () {
            }, read:   function () {
                return null
            }, remove: function () {
            }
        }
    }()
}, function (e, t, n) {
    "use strict";

    function r() {
        this.handlers = []
    }

    var a = n(1);
    r.prototype.use = function (e, t) {
        return this.handlers.push({fulfilled: e, rejected: t}), this.handlers.length - 1
    }, r.prototype.eject = function (e) {
        this.handlers[e] && (this.handlers[e] = null)
    }, r.prototype.forEach = function (e) {
        a.forEach(this.handlers, function (t) {
            null !== t && e(t)
        })
    }, e.exports = r
}, function (e, t, n) {
    "use strict";

    function r(e) {
        e.cancelToken && e.cancelToken.throwIfRequested()
    }

    var a = n(1), o = n(58), i = n(15), s = n(7);
    e.exports = function (e) {
        return r(e), e.headers = e.headers || {}, e.data = o(e.data, e.headers, e.transformRequest), e.headers = a.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), a.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (t) {
            delete e.headers[t]
        }), (e.adapter || s.adapter)(e).then(function (t) {
            return r(e), t.data = o(t.data, t.headers, e.transformResponse), t
        }, function (t) {
            return i(t) || (r(e), t && t.response && (t.response.data = o(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
        })
    }
}, function (e, t, n) {
    "use strict";
    var r = n(1);
    e.exports = function (e, t, n) {
        return r.forEach(n, function (n) {
            e = n(e, t)
        }), e
    }
}, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
    }
}, function (e, t, n) {
    "use strict";
    e.exports = function (e, t) {
        return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
    }
}, function (e, t, n) {
    "use strict";

    function r(e) {
        if ("function" != typeof e) throw new TypeError("executor must be a function.");
        var t;
        this.promise = new Promise(function (e) {
            t = e
        });
        var n = this;
        e(function (e) {
            n.reason || (n.reason = new a(e), t(n.reason))
        })
    }

    var a = n(16);
    r.prototype.throwIfRequested = function () {
        if (this.reason) throw this.reason
    }, r.source = function () {
        var e;
        return {
            token:      new r(function (t) {
                e = t
            }), cancel: e
        }
    }, e.exports = r
}, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        return function (t) {
            return e.apply(null, t)
        }
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(2), a = n(0), o = function () {
        function e(e, t) {
            var n = (0, a.totalOffsetTop)(e) - t;
            setTimeout(function () {
                window.scrollTo(0, 0), window.scrollTo(0, n)
            }, 1)
        }

        if (!document.querySelector(".pricing-licenses")) return {};
        var t = window.location.hash, n = t ? document.querySelector(".introduce--narrow" + t) : null,
            o = (0, r.isPhoneSize)() ? 60 : 100;
        return n ? {
            init: function () {
                return e(n, o)
            }
        } : {}
    };
    t.default = o
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var a = n(65), o = r(a), i = n(17), s = r(i), l = function () {
        function e() {
            return !!a && "none" === window.getComputedStyle(a, null).getPropertyValue("display")
        }

        function t(e) {
            if (r) {
                var t = (0, s.default)(a), n = t.getTargetStates(), o = window.location.hash;
                c = t.updateMarkerPosition;
                var i = {};
                o.length && n.includes(o.substring(1)) ? (l = o.substring(1), setTimeout(function () {
                    return window.scrollTo(0, 0)
                }, 0)) : l = n[0], n.forEach(function (t) {
                    i[t] = e.bind(null, t)
                }), t.init(l, i)
            }
        }

        function n() {
            c && c(), p(l, e())
        }

        var r = document.querySelector("#ckeditor4-tabs-content"), a = document.querySelector(".tabs__wrapper"),
            i = document.querySelector(".demo__wrapper"), l = null, c = null;
        if (!r && !i) return {};
        var d = (0, o.default)(r || i), u = d.replaceConfig, p = d.appendEditors;
        return i && (l = i.getAttribute("data-demo")), {
            init:              function () {
                t(u), d.init(l)
            }, onWindowResize: i ? void 0 : n, onWindowOrientationchange: i ? void 0 : n
        }
    };
    t.default = l
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(66), a = function (e) {
        return e && e.__esModule ? e : {default: e}
    }(r), o = function (e) {
        function t() {
            CKEDITOR.config.removeButtons = "Subscript,Superscript", CKEDITOR.config.format_tags = "p;h1;h2;h3;pre", CKEDITOR.config.removeDialogTabs = "image:advanced;link:advanced", CKEDITOR.config.customConfig = "", CKEDITOR.config.contentsLanguage = "en", CKEDITOR.config.contentsLangDirection = "ltr", CKEDITOR.config.filebrowserBrowseUrl = "/apps/ckfinder/3.4.2/ckfinder.html", CKEDITOR.config.filebrowserUploadUrl = "/apps/ckfinder/3.4.2/core/connector/php/connector.php?command=QuickUpload&type=Files&currentFolder=/Public Folder/", CKEDITOR.disableAutoInline = !0, CKEDITOR.plugins.add("hcard", {
                requires: "widget",
                init:     function (e) {
                    e.widgets.add("hcard", {
                        allowedContent:  "span(!h-card); a[href](!u-email,!p-name); span(!p-tel)",
                        requiredContent: "span(h-card)",
                        pathName:        "hcard",
                        upcast:          function (e) {
                            return "span" === e.name && e.hasClass("h-card")
                        }
                    }), e.addFeature(e.widgets.registered.hcard), e.on("paste", function (e) {
                        var t = e.data.dataTransfer.getData("contact");
                        t && (e.data.dataValue = '<span class="h-card"><a href="mailto:' + t.email + '" class="p-name u-email">' + t.name + '</a> <span class="p-tel">' + t.tel + "</span></span>")
                    })
                }
            })
        }

        function n(e, t) {
            if (t) CKEDITOR.instances.ckmobile || CKEDITOR.replace("ckmobile", a.default.mobile); else if (!CKEDITOR.instances.ckdemo && !CKEDITOR.instances.editor1) {
                var n = e && a.default[e] ? e : c;
                r(n, !0)
            }
        }

        function r(t) {
            var n = 1e3, r = e.querySelector("#ckdemo"), o = CKEDITOR.on("instanceCreated", function (e) {
                var r = Date.now() - l;
                if (n < r ? n = 0 : n -= r, l = 0, d ? d = !1 : window.history.replaceState({}, "", "#" + t), "inline" === t) {
                    var a = e.editor, i = a.element;
                    i.is("h1", "h2", "h3") || "taglist" === i.getAttribute("id") ? a.on("configLoaded", function () {
                        a.config.removePlugins = "autogrow,colorbutton,colordialog,copyformatting,find,flash,font,forms,iframe,image,newpage,removeformat,justify,liststyle,sourcedialog,tableresize,smiley,specialchar,stylescombo,templates", a.config.extraPlugins = "image2", a.config.toolbar = [{
                            name:  "basicstyles",
                            items: ["Bold", "Italic", "Strike"]
                        }, {
                            name:  "links",
                            items: ["Link", "Unlink"]
                        }], a.config.removeButtons = "Underline,Subscript,Superscript"
                    }) : (a.config.toolbar = [{name: "styles", items: ["Format"]}, {
                        name:  "basicstyles",
                        items: ["Bold", "Italic", "Strike"]
                    }, {
                        name:  "paragraph",
                        items: ["NumberedList", "BulletedList", "-", "Outdent", "Indent"]
                    }, {name: "links", items: ["Link", "Unlink"]}, {
                        name:  "insert",
                        items: ["Image", "EmbedSemantic"]
                    }], a.config.removePlugins = "autogrow,copyformatting,find,flash,forms,iframe,newpage,removeformat,smiley,specialchar,stylescombo,templates,scayt,wsc")
                } else o.removeListener()
            });
            if ("inline" === t) s.style.display = "block", s.innerHTML = e.querySelector("#inline-demo-template").innerHTML, CKEDITOR.inlineAll(); else {
                s ? s.style.display = "none" : i && (i.style.display = "none"), r.value = "";
                CKEDITOR.replace("ckdemo", a.default[t]).on("instanceReady", function (e) {
                    setTimeout(function () {
                        e.editor.setData(document.querySelector("#" + t + "-demo-template").innerHTML), e.editor.undoManager && e.editor.undoManager.reset()
                    }, 0)
                })
            }
        }

        function o(e) {
            l = Date.now(), CKEDITOR.instances.ckdemo ? (CKEDITOR.once("instanceDestroyed", r.bind(null, e)), CKEDITOR.instances.ckdemo.destroy()) : r(e)
        }

        var i = e.querySelector(".dnd-demo-container"), s = e.querySelector(".ckinline"), l = 0, c = null, d = !0;
        return {
            init:             function (e) {
                c = e, t(), n(e)
            }, replaceConfig: o, appendEditors: n
        }
    };
    t.default = o
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = {
        article:  {
            toolbar:       [{
                name:  "clipboard",
                items: ["Undo", "Redo"]
            }, {name: "styles", items: ["Styles", "Format"]}, {
                name:  "basicstyles",
                items: ["Bold", "Italic", "Strike", "-", "RemoveFormat"]
            }, {
                name:  "paragraph",
                items: ["NumberedList", "BulletedList", "-", "Outdent", "Indent", "-", "Blockquote"]
            }, {name: "links", items: ["Link", "Unlink"]}, {
                name:  "insert",
                items: ["Image", "EmbedSemantic", "Table"]
            }, {name: "tools", items: ["Maximize"]}, {name: "editing", items: ["Scayt"]}],
            removePlugins: "colorbutton,colordialog,copyformatting,font,indentblock,image,justify,liststyle,print,sourcedialog,tableresize",
            height:        600,
            bodyClass:     "article-editor"
        },
        document: {
            toolbar:             [{
                name:  "document",
                items: ["Print"]
            }, {name: "clipboard", items: ["Undo", "Redo"]}, {
                name:  "styles",
                items: ["Format", "Font", "FontSize"]
            }, {
                name:  "basicstyles",
                items: ["Bold", "Italic", "Underline", "Strike", "RemoveFormat", "CopyFormatting"]
            }, {name: "colors", items: ["TextColor", "BGColor"]}, {
                name:  "align",
                items: ["JustifyLeft", "JustifyCenter", "JustifyRight", "JustifyBlock"]
            }, {name: "links", items: ["Link", "Unlink"]}, {
                name:  "paragraph",
                items: ["NumberedList", "BulletedList", "-", "Outdent", "Indent", "-", "Blockquote"]
            }, {name: "insert", items: ["Image", "Table"]}, {name: "tools", items: ["Maximize"]}, {
                name:  "editing",
                items: ["Scayt"]
            }],
            removePlugins:       "autoembed,embedsemantic,image2,sourcedialog,showborders",
            disallowedContent:   "img{width,height,float}",
            extraAllowedContent: "img[width,height,align]",
            height:              600,
            bodyClass:           "document-editor"
        },
        mobile:   {
            toolbar:          [{
                name:  "basicstyles",
                items: ["Bold", "Italic", "Strike"]
            }, {name: "paragraph", items: ["NumberedList", "BulletedList", "-", "Outdent", "Indent"]}, {
                name:  "links",
                items: ["Link", "Unlink"]
            }, {name: "insert", items: ["Image", "EmbedSemantic"]}],
            removePlugins:    "image,elementspath,colorbutton,colordialog,copyformatting,font,justify,liststyle,print,sourcedialog,tableresize,uploadimage,uploadfile",
            resize_enabled:   !1,
            height:           261,
            removeDialogTabs: "image:advanced;link:advanced;link:target"
        },
        a11:      {
            extraPlugins:            "a11ychecker",
            language:                "en",
            height:                  461,
            a11ychecker_quailParams: {guideline: ["imgNonDecorativeHasAlt", "imgImportantNoSpacerAlt", "aTitleDescribesDestination", "aAdjacentWithSameResourceShouldBeCombined", "aImgAltNotRepetitive", "aMustNotHaveJavascriptHref", "aSuspiciousLinkText", "blockquoteNotUsedForIndentation", "documentVisualListsAreMarkedUp", "headerH1", "headerH2", "headerH3", "headerH4", "imgAltIsDifferent", "imgAltIsTooLong", "imgAltNotEmptyInAnchor", "imgAltTextNotRedundant", "imgHasAlt", "imgShouldNotHaveTitle", "linkHasAUniqueContext", "pNotUsedAsHeader", "tableDataShouldHaveTh", "imgWithEmptyAlt"]},
            toolbarGroups:           [{name: "document", groups: ["document", "mode"]}, {
                name:   "clipboard",
                groups: ["undo"]
            }, {name: "basicstyles", groups: ["basicstyles", "cleanup"]}, {
                name:   "paragraph",
                groups: ["list", "indent", "blocks"]
            }, {name: "links"}, {name: "insert"}, {name: "styles"}],
            removeButtons:           "Anchor,Strike,Subscript,Superscript,PasteText,Outdent,Indent,JustifyLeft,JustifyCenter,JustifyRight,JustifyBlock,BidiLtr,BidiRtl,Styles,Font,FontSize,TextColor,BGColor",
            removePlugins:           "scayt,wsc,autoembed,colorbutton,colordialog,copyformatting,embedsemantic,font,horizontalrule,image2,indentblock,justify,liststyle,print,sourcedialog,specialchar,tableresize",
            removeDialogTabs:        "image:advanced;link:advanced;link:target",
            bodyClass:               "a11ychecker"
        }
    }
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var a = n(17), o = r(a), i = n(18), s = r(i), l = n(68), c = r(l), d = n(0), u = d.mobile.isPhoneSize, p = {
        tokenUrl:  "https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt",
        uploadUrl: "https://33333.cke-cs.com/easyimage/upload/"
    }, f = function () {
        function e() {
            var e = document.getElementsByTagName("head")[0];
            Object.keys(s.default.ckeditor5).filter(function (e) {
                return "document" === k ? "decouple-document" !== e : e !== k
            }).forEach(function (t) {
                var n = s.default.ckeditor5[t], r = document.createElement("script");
                r.src = "/assets/libs/ckeditor5/" + n + "/editor-" + t + ".js", r.type = "text/javascript", e.appendChild(r)
            })
        }

        function t() {
            var e = document.querySelector(".demo"), t = document.querySelector(".no-browser-support"), n = "";
            n = navigator.userAgent.match(/safari/i) && !navigator.userAgent.match(/chrome/i) ? "We are sorry to inform you that CKEditor 5 does not support Safari 10 and its older versions yet." : "We are sorry to inform you that CKEditor 5 does not support Internet Explorer 11 yet.", e.style.display = "none", t.querySelector("h3").textContent = n, t.classList.add("no-browser-support--show")
        }

        function n(e) {
            return ClassicEditor.create(e ? b : y, {
                cloudServices: p,
                toolbar:       {
                    items:             u() ? ClassicEditor.build.config.toolbar.items.slice(1) : ClassicEditor.build.config.toolbar.items,
                    viewportTopOffset: 50
                }
            }).then(function (t) {
                e ? window.editorMobile = t : window.editors.push(t)
            }).catch(function (e) {
                console.error(e.stack)
            })
        }

        function r() {
            return BalloonEditor.create(w, {cloudServices: p}).then(function (e) {
                window.editors.push(e)
            }).catch(function (e) {
                console.error(e.stack)
            })
        }

        function a() {
            var e = Array.prototype.map.call(x, function (e) {
                var t = {cloudServices: p};
                return "header" == e.tagName.toLowerCase() ? t.toolbar = {
                    items:             ["heading", "bold", "italic", "link"],
                    viewportTopOffset: 50
                } : t.toolbar = {viewportTopOffset: 50}, InlineEditor.create(e, t).then(function (e) {
                    window.editors.push(e)
                }).catch(function (e) {
                    console.error(e.stack)
                })
            });
            return Promise.all(e)
        }

        function i() {
            return DecoupledDocumentEditor.create(c.default, {
                toolbarContainer:  C.querySelector(".cke5-decoupled-document-toolbar"),
                editableContainer: C.querySelector(".cke5-decoupled-document-editable"),
                cloudServices:     p,
                viewportTopOffset: 50
            }).then(function (e) {
                window.editors.push(e)
            }).catch(function (e) {
                console.error(e.stack)
            })
        }

        function l(e) {
            var t = (0, o.default)(v), n = t.getTargetStates();
            _ = t.updateMarkerPosition;
            var r = {};
            n.forEach(function (t) {
                r[t] = e.bind(null, t)
            }), t.init(k, r)
        }

        function f(e) {
            var t = v.querySelectorAll(".tab");
            Array.prototype.forEach.call(t, function (t) {
                e ? t.setAttribute("disabled", "disabled") : t.removeAttribute("disabled")
            })
        }

        function m(e) {
            function t() {
                Array.prototype.forEach.call(E, function (t) {
                    t.getAttribute("data-demo-type") === e && t.classList.add("demo-anchor--active")
                }), T = e, f(!1), L ? window.history.replaceState({}, "", "#" + e) : L = !0
            }

            window.editors = [], Array.prototype.forEach.call(E, function (t) {
                t.getAttribute("data-demo-type") !== e && t.classList.remove("demo-anchor--active")
            }), function () {
                "balloon" === e ? r().then(t) : "classic" === e ? n().then(t) : "inline" === e ? a().then(t) : "document" === e && i().then(t)
            }()
        }

        function h(e) {
            if (!T) return void m(e);
            e !== T && (f(!0), Promise.all(window.editors.map(function (e) {
                return e.destroy()
            })).then(function () {
                return m(e)
            }).catch(function (e) {
                return console.error(e)
            }))
        }

        function g() {
            _ && _(), !window.editorMobile && u() ? n(!0) : window.editorMobile && !u() && window.editorMobile.destroy().then(function () {
                window.editorMobile = null, !window.editors && window.editors.length && m(T || k)
            })
        }

        if (!document.querySelector("#ckeditor5-tabs-content")) return {};
        var v = document.querySelector(".tabs__wrapper"), y = v.querySelector("#cke5-demo"),
            b = document.querySelector("#cke5-mobile"), w = v.querySelector("#cke5-balloon-demo"),
            S = v.querySelector("#cke5-inline-demo"), C = v.querySelector("#cke5-decoupled-document-demo"),
            x = S.querySelectorAll("[data-inline-inject]"), E = v.querySelectorAll(".demo-anchor"), k = function () {
                var e = window.location.hash.substring(1), t = Object.keys(s.default.ckeditor5).map(function (e) {
                    return "decoupled-document" === e ? "document" : e
                });
                return -1 !== t.indexOf(e) && setTimeout(function () {
                    return window.scrollTo(0, 0)
                }, 0), -1 !== t.indexOf(e) ? e : t[0]
            }(), T = null, _ = null, L = !1;
        return window.editors = [], {
            init:              function () {
                if (!(0, d.testCKE5Support)()) return void t();
                e(), l(h), h(k)
            }, onWindowResize: (0, d.testCKE5Support)() ? g : null
        }
    };
    t.default = f
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = '\n\t<h2 style="text-align:center;">The Flavorful Tuscany Meetup</h2>\n\t<h3 style="text-align:center;">Welcome letter</h3>\n\n\t<p>Dear Guest,</p>\n\t<p>We are delighted to welcome you to the annual <i>Flavorful Tuscany Meetup</i> and hope you will enjoy the programme as well as your stay at the\t<a href="http://ckeditor.com">Bilancino Hotel</a>.</p>\n\t<p>Please find below the full schedule of the event.</p>\n\n\t<ul>\n\t\t<li>9:30 AM - 11:30 AM Americano vs. Brewed - “know your coffee” session with <strong>Stefano Garau</strong></li>\n\t\t<li>1:00 PM - 3:00 PM Pappardelle al pomodoro - live cooking session with <strong>Rita Fresco</strong></li>\n\t\t<li>5:00 PM - 8:00 PM Tuscan vineyards at a glance - wine-tasting session with <strong>Frederico Riscoli</strong></li>\n\t</ul>\n\n\t<blockquote>\n\t\t<p>The annual Flavorful Tuscany meetups are always a culinary discovery. You get the best of Tuscan flavors during an intense one-day stay at one of the top hotels of the region. All the sessions are lead by top chefs passionate about their profession. I would certainly recommend to save the date in your calendar for this one!</p>\n\t\t<p>Angelina Calvino, food journalist</p>\n\t</blockquote>\n\n\t<p>Please arrive at the <a href="http://ckeditor.com">Bilancino Hotel</a> reception desk at least <strong>half an hour earlier</strong> to make sure that the registration process goes as smoothly as possible.</p>\n\t<p>We look forward to welcoming you to the event.</p>\n\t<p><strong>Victoria Valc</strong></p>\n\t<p><strong>Event Manager</strong></p>\n\t<p><strong>Bilancino Hotel</strong></p>'
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function a() {
        var e = [2e4, 6e4, 12e4], t = -1;
        return function () {
            return t = Math.min(e.length - 1, ++t), e[t]
        }
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var o = n(3), i = n(70), s = r(i), l = n(0), c = n(71), d = r(c), u = n(6), p = r(u);
    (0, o.polyfill)();
    var f = {
        tokenUrl:  "https://j2sns7jmy0.execute-api.eu-central-1.amazonaws.com/prod/token-new",
        csUrl:     "ws.cke-cs.com:443",
        uploadUrl: "https://files.cke-cs.com/upload/"
    }, m = function () {
        function e() {
            var e = window.location.href.split("#")[1] || "";
            return /^doc/.test(e) ? e.replace(/doc/g, "") : null
        }

        function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, t = .9 * T.offsetHeight,
                n = t + L, r = window.innerHeight + e >= n && e - T.offsetHeight < L;
            e && r && !T.classList.contains("letters-demo__form-wrapper--on-viewport") ? (T.classList.add("letters-demo__form-wrapper--on-viewport"), _.classList.add("letters-demo-box--on-viewport")) : (!e || !r && T.classList.contains("letters-demo__form-wrapper--on-viewport")) && (T.classList.remove("letters-demo__form-wrapper--on-viewport"), _.classList.remove("letters-demo-box--on-viewport"))
        }

        function n(e) {
            return window.location.origin + window.location.pathname + "#doc" + e
        }

        function r(e) {
            history.pushState("", "Letters Demo", "#doc" + e + " ")
        }

        function i() {
            history.pushState("", "Letters | CKEditor.com", "/letters")
        }

        function c(e) {
            var t = document.querySelector(".tingle-modal__loader"),
                n = document.querySelector(".ckloader__spinner-text--error");
            t.classList.add("tingle-modal__loader--error"), n.textContent = e, console.error(e)
        }

        function u(e, t, a) {
            return Letters.createDialog({
                cloudServices: {
                    documentId: t,
                    tokenUrl:   (0, l.buildUserTokenUrl)(f.tokenUrl, e),
                    uploadUrl:  f.uploadUrl,
                    _url:       f.csUrl
                },
                title:         d.default.title,
                body:          d.default.body,
                share:         n(t),
                finishEditing: {
                    action: function () {
                        i()
                    }
                }
            }).then(function (e) {
                return E = e, e.dialogElement.classList.add("ltrs-dialog--ckeditor"), e.letters.on("finish", function () {
                    e.dialogElement.classList.add("ltrs-dialog--hidden"), document.body.classList.remove("tingle-enabled")
                }), r(t), e.show()
            }).then(function (e) {
                a && a();
                var t = e.letters.editor.plugins.get("Notification"),
                    n = document.querySelector(".ltrs-share__panel p");
                document.querySelector(".ltrs-notification-center").addEventListener("click", function (e) {
                    return e.preventDefault()
                }), n.textContent += "\r\n\r\nThis demo will be valid for one hour only. After this period, all your data will be irrevocably lost!", l.detectIE.edge() && t.showInfo("Experience with Edge can be unstable for now. To get the best out of Letters, please run this demo in Chrome, Firefox or Safari.", {title: "Running on Edge?"}), t.showInfo("Share this document with your colleague and discover the power of real-time collaborative editing.", {title: "Hello!"})
            }).catch(c)
        }

        function m() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, l.uid)(), t = arguments[1],
                n = arguments[2];
            if (E) return E.show(), void history.back();
            var r = document.querySelector(".tingle-modal--letters.tingle-modal--visible");
            return t ? u(t, e, n) : r ? void 0 : (0, s.default)().then(function (t) {
                return u(t, e)
            }).then(function () {
                return window.modal.close()
            })
        }

        function h() {
            var t = e();
            t && m(t)
        }

        function g() {
            if (E) return void m();
            var t = document.getElementById("letters-user-name"), n = document.getElementById("gravatar-email"),
                r = document.querySelector(".letters-demo-box .spinner"),
                a = document.querySelector(".letters-demo-box input.btn");
            r.classList.remove("hidden"), t.parentNode.parentNode.removeChild(t.parentNode), n.parentNode.parentNode.removeChild(n.parentNode), m(e() || void 0, {
                id:     (0, l.uid)(),
                avatar: n.value && n.value.length ? (0, l.getGravatarUrl)(n.value) : null,
                name:   t.value,
                email:  n.value
            }, function () {
                r.parentNode.removeChild(r), a.removeAttribute("disabled")
            })
        }

        function v(e) {
            if (!l.detectIE.ie11()) {
                var t = k.querySelectorAll("input"), n = k.querySelector('input[type="submit"]');
                e ? (Array.prototype.forEach.call(t, function (e) {
                    return e.removeAttribute("disabled")
                }), n.value = "Open demo") : (n.value = "Demo is under maintenance, but it will be back soon. Coffee time?", Array.prototype.forEach.call(t, function (e) {
                    return e.setAttribute("disabled", "disabled")
                }))
            }
        }

        function y() {
            x.forEach(function (e) {
                e.disabled = !0, e.textContent = "Demo is under maintenance, but it will be back soon. Coffee time?"
            }), S()
        }

        function b() {
            x.forEach(function (e) {
                e.disabled = !1, e.textContent = "Open demo"
            })
        }

        function w() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            return new o.Promise(function (t, n) {
                setTimeout(function () {
                    p.default.get("https://status-demo.cke-cs.com/").then(function (e) {
                        return t(e.data.status)
                    }).catch(function (e) {
                        return n(e)
                    })
                }, e)
            })
        }

        function S() {
            w(A()).then(function (e) {
                v(e), e ? b() : S()
            }).catch(function () {
                b()
            })
        }

        function C() {
            if (l.detectIE.ie11()) {
                var e = k.parentNode, t = e.querySelector("h2");
                return e.classList.add("no-support"), e.removeChild(k), void(t.textContent = "Letters don't support Internet Explorer 11 and its previous versions. To get the best out of Letters make sure you run this demo in Chrome, Firefox or Safari.")
            }
            k.addEventListener("submit", function (e) {
                e.preventDefault(), g()
            })
        }

        var x = document.querySelectorAll(".letters-demo"), E = void 0;
        if (!x.length) return {};
        var k = document.querySelector(".letters-demo__form"),
            T = document.querySelector(".letters-demo__form-wrapper"), _ = document.querySelector(".letters-demo-box"),
            L = (0, l.totalOffsetTop)(T);
        Array.prototype.forEach.call(x, function (e) {
            e.addEventListener("click", function () {
                return m()
            })
        });
        var A = a();
        return {
            init:              function () {
                C(), w().then(function (e) {
                    v(e), e ? h() : y()
                }).catch(function () {
                    h()
                })
            }, onWindowScroll: t
        }
    };
    t.default = m
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(8), a = function (e) {
        return e && e.__esModule ? e : {default: e}
    }(r), o = n(0), i = function () {
        function e() {
            document.querySelector(".tingle-modal__loader").classList.add("tingle-modal__loader--active")
        }

        function t() {
            var e = document.querySelector(".tingle-modal-box__content--nobrowser"),
                t = document.querySelector(".tingle-modal-box__content--mobile"),
                n = document.querySelector(".tingle-modal-box__content-inner"),
                r = document.querySelector(".tingle-modal-box__footer");
            o.detectIE.ie11() && (e.style.display = "block", n.style.display = "none", r.style.display = "none"), o.mobile.isMobile() && (t.style.display = "block", n.style.display = "none", r.style.display = "none")
        }

        return new Promise(function (n) {
            function r() {
                n({id: s.value.trim() || (0, o.uid)(), avatar: l.value, name: c.value, email: d.value}), e()
            }

            var i = new a.default.modal({
                closeMethods: ["escape", "button", "overlay"],
                cssClass:     ["tingle-modal--letters"],
                footer:       !0,
                stickyFooter: !1,
                onOpen:       function () {
                    document.querySelector("#modal-name").focus()
                },
                onClose:      function () {
                    var e = document.querySelector(".tingle-modal__loader");
                    e.classList.remove("tingle-modal__loader--active"), e.classList.remove("tingle-modal__loader--error")
                }
            });
            window.modal = i, i.setContent("\n\t\t\t<div class='tingle-modal-box__content-inner'>\n\t\t\t<h2 class='tingle-modal-box__content-inner-title'>Collaborate using Letters</h2>\n\t\t\t<div class='tingle-modal-box__inputs'>\n\t\t\t\t<div class='tingle-modal-box__inputs-row' style='display: none'>\n\t\t\t\t\t<label for='modal-id'>Id</label>\n\t\t\t\t\t<input id='modal-id' placeholder='Leave it empty for random id' type='text' />\n\t\t\t\t</div>\n\t\t\t\t<div class='tingle-modal-box__inputs-row'>\n\t\t\t\t\t<label for='modal-name'>Your display name (optional)</label>\n\t\t\t\t\t<input id='modal-name' type='text' />\n\t\t\t\t</div>\n\t\t\t\t<div class='tingle-modal-box__inputs-row'>\n\t\t\t\t\t<label for='modal-email'>Your Gravatar email (optional)</label>\n\t\t\t\t\t<input id='modal-email' type='text' />\n\t\t\t\t</div>\n\t\t\t\t<div class='tingle-modal-box__inputs-row' style='display: none'>\n\t\t\t\t\t<label for='modal-avatar'>avatar</label>\n\t\t\t\t\t<input id='modal-avatar' placeholder='' type='text' />\n\t\t\t\t</div>\n\t\t\t\t<img style='display: none' src='' id='image-preview'>\n\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div style='display: none' class='tingle-modal-box__content--nobrowser'>\n\t\t\t\t<h2>Oops!</h2>\n\t\t\t\t<p>Letters don't support Internet Explorer 11 and its previous versions. To get the best out of Letters make sure you run this demo in Chrome, Firefox or Safari.</p>\n\t\t\t</div>\n\t\t\t<div style='display: none' class='tingle-modal-box__content--mobile'>\n\t\t\t\t<h2>Oops!</h2>\n\t\t\t\t<p>Letters only work on desktop. Please DO try this at home ;)</p>\n\t\t\t</div>\n\t\t\t<div class='tingle-modal__loader'>\n\t\t\t\t<div class='ckloader ckloader--active'>\n\t\t\t\t\t<div class=\"ckloader__inner\">\n\t\t\t\t\t\t<div class='ckloader__spinner ckloader__spinner--letters'>\n\t\t\t\t\t\t\t<svg class='circular' viewbox='25 25 50 50'>\n\t\t\t\t\t\t\t\t<circle class='path' cx='50' cy='50' r='20' fill='none' stroke-width='2' stroke-miterlimit='10'/>\n\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class='ckloader__spinner-text'>Creating document...</div>\n\t\t\t\t\t\t<div class='ckloader__spinner-text--error'></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t");
            var s = document.querySelector("#modal-id"), l = document.querySelector("#modal-avatar"),
                c = document.querySelector("#modal-name"), d = document.querySelector("#modal-email"),
                u = document.querySelector("#image-preview");
            i.addFooterBtn(function () {
                return /^doc/.test(window.location.href.split("#")[1] || "") ? "Join an existing document" : "Create a new document"
            }(), "letters-demo btn", function () {
                return r()
            }), [c, d].forEach(function (e) {
                e.addEventListener("keydown", function (e) {
                    13 === e.keyCode && r()
                })
            }), d.addEventListener("input", function () {
                var e = (0, o.getGravatarUrl)(d.value, {size: 100});
                l.value = e, u.src = e
            }), i.open(), t()
        })
    };
    t.default = i
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = {
        title: "Why is HBO slaying its dragon?",
        body:  '\n\t\t<h3>A quick look into HBO’s next flagship series</h3>\n\n\t\t<p>The reign of fantasy fiction is coming to an end since the late 90s. For the last 25 years we’ve witnessed a significant technological growth and now we need narratives to help us understand the new reality.</p>\n\n\t\t<figure class="image ck-widget">\n\t\t\t<img src="../assets/images/bg/letters-demo.jpg">\n\t\t</figure>\n\n\t\t<blockquote>They say that great beasts once roamed this world, as big as mountains. Yet all that\'s left of them is bone and amber. Time undoes even the mightiest of creatures. (...) Because this world doesn\'t belong to you or the people who came before. It belongs to someone who has yet to come. Dr. Robert Ford.</blockquote>\n\n\t\t<p>Let’s face it, you’ll never going to encounter a dragon or become a wizard. An intelligent robot, on the other hand, is going to become a reality sooner or later. So it’s no surprise that HBO’s next flagship series will be Westworld, replacing Game of Thrones as your favourite drug of choice. </p>\n\n\t\t<p>You might find Westworld’s script very complicated. Sometimes you can’t tell the future from the past, the human from the machine, but aside from its complexity, it’s still predictable. Just like the robots whose hypnotizing stories we get to listen to.</p>\n\t'
    }
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var a = n(8), o = r(a), i = n(19), s = r(i), l = (0, s.default)(), c = l.assignForm,
        d = window.location.pathname.match(/letters/) ? "Letters" : "Collaboration", u = {
            ckeditor4: "https://docs.ckeditor.com/ckeditor4/latest/index.html",
            ckeditor5: "https://docs.ckeditor.com/ckeditor5/latest/index.html",
            ckfinder:  "https://docs.ckeditor.com/ckfinder/latest/index.html"
        }, p = {ckeditor4: "CKEditor 4", ckeditor5: "CKEditor 5", ckfinder: "CKFinder"}, f = {
            newsletter: {content: "\n\t\t\t<div class='tingle-modal-box__header'><h2>Sign up to our newsletter</h2></div>\n\t\t\t<div class='tingle-modal-box__content-inner'>\n\t\t\t\t<form class=\"mc-subscribe-form\" action=\"//ckeditor.us10.list-manage.com/subscribe/post?u=9c10324d9c722f3329b855dfd&amp;id=844b2127ac&amp;&amp;group[8965][1]=1&amp;SOURCE=" + d + '" method="post" name="mc-embedded-subscribe-form" target="_blank" novalidate="">\n\t\t\t\t\t<div class="module-subscribe__actions">\n\t\t\t\t\t\t<div class="form-group-inline__wrapper">\n\t\t\t\t\t\t\t<div class="form-group form-group-inline form-group-inline--long">\n\t\t\t\t\t\t\t\t<label class="sr-only" for="mc-modal-EMAIL">Company e-mail address</label>\n\t\t\t\t\t\t\t\t<input class="form-control email" type="email" placeholder="Your company email" name="EMAIL" id="mc-modal-EMAIL" required>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="form-group form-group-inline">\n\t\t\t\t\t\t\t\t<button class="btn btn--big" name="subscribe" type="submit">Subscribe</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<input type="hidden" name="b_9c10324d9c722f3329b855dfd_844b2127ac" tabindex="-1" value="" aria-hidden="true">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="mc-response"></div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t'},
            "newsletter-download": {content: '\n\t\t\t<div class=\'tingle-modal-box__header tingle-modal-box__header--small\'><h2>Thank you for downloading!</h2></div>\n\t\t\t<div class=\'tingle-modal-box__content-inner\'>\n\t\t\t\t<div class="tingle-modal-box__socials hidden">\n\t\t\t\t\t<p class="github-title">Star CKEditor 4 on GitHub</p>\n\t\t\t\t\t<a class="github-button" href="#" data-size="large" target="_blank">\n\t\t\t\t\t<svg><use xlink:href="#github" /></svg></a>\n\t\t\t\t</div>\n\t\t\t\t<div class="tingle-modal-box__subheader">\n\t\t\t\t\t<h3>Sign up to our newsletter</h3>\n\t\t\t\t</div>\n\t\t\t\t<form class="mc-subscribe-form" action="//ckeditor.us10.list-manage.com/subscribe/post?u=9c10324d9c722f3329b855dfd&amp;id=844b2127ac&amp;&amp;group[8965][1]=1&amp;SOURCE=' + d + '" method="post" name="mc-embedded-subscribe-form" target="_blank" novalidate="">\n\t\t\t\t\t<div class="module-subscribe__actions">\n\t\t\t\t\t\t<div class="form-group-inline__wrapper">\n\t\t\t\t\t\t\t<div class="form-group form-group-inline form-group-inline--long">\n\t\t\t\t\t\t\t\t<label class="sr-only" for="mc-modal-EMAIL">Company e-mail address</label>\n\t\t\t\t\t\t\t\t<input class="form-control email" type="email" placeholder="Your company email" name="EMAIL" id="mc-modal-EMAIL" required>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="form-group form-group-inline">\n\t\t\t\t\t\t\t\t<button class="btn btn--big" name="subscribe" type="submit">Subscribe</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<input type="hidden" name="b_9c10324d9c722f3329b855dfd_844b2127ac" tabindex="-1" value="" aria-hidden="true">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="mc-response"></div>\n\t\t\t\t</form>\n\n\t\t\t\t<div class="tingle-modal-box__footer documentation-info">\n\t\t\t\t\t<p class="tingle-modal-box__footer-info documentation-info--sdk">Check out the <a href="https://docs.ckeditor.com/ckeditor4/latest/index.html" rel="noopener" target="_blank">CKEditor 4 documentation</a> and see the online samples in the <a href="https://sdk.ckeditor.com/" rel="noopener" target="_blank">CKEditor 4 SDK</a>.</p>\n\t\t\t\t\t<p class="tingle-modal-box__footer-info documentation-info--default">Check out the <a class="documentation-info__link" href="https://docs.ckeditor.com/ckeditor5/latest/index.html" rel="noopener" target="_blank">Documentation</a>.</p>\n\t\t\t\t\t<p class="tingle-modal-box__footer-info documentation-info--ckeditor4-easy-image">See <a href="https://docs.ckeditor.com/ckeditor4/latest/guide/dev_easyimage_integration.html" rel="noopener" target="_blank">how to integrate Easy Image with CKEditor 4</a>.</p>\n\t\t\t\t\t<p class="tingle-modal-box__footer-info documentation-info--ckeditor5-easy-image">See <a href="https://docs.ckeditor.com/ckeditor5/latest/features/image-upload.html#easy-image" rel="noopener" target="_blank">how to integrate Easy Image with CKEditor 5</a>.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t'},
            "easy-image": {
                content: '\n\t\t\t<div class=\'tingle-modal__header\'><h2>Easy Image</h2></div>\n\t\t\t<div class=\'tingle-modal-box__content-inner\'>\n\t\t\t\t<img class="tingle-modal__image" src="/assets/images/composition/ckeditor-cloud-services/section-1/thumb.svg">\n\t\t\t\t<p>Images automatically rescaled, optimized, responsive and delivered through a CDN.</p>\n\t\t\t\t<p class="summary"><a href="/ckeditor-cloud-services" target="_blank" rel="noopener">Find out more</a></p>\n\t\t\t</div>\n\t\t',
                cssClasses: ["tingle-modal--info"]
            },
            webspellchecker: {
                content: '\n\t\t\t<div class=\'tingle-modal__header\'><h2>WebSpellChecker</h2></div>\n\t\t\t<div class=\'tingle-modal-box__content-inner\'>\n\t\t\t\t<p>Spell checking functionality is a third-party service included in CKEditor 4 and provided by our partners at WebSpellChecker.</p>\n\t\t\t\t<p>For more information please visit their website at <a href="https://www.webspellchecker.net/" target="_blank" rel="noopener noreferrer">WebSpellChecker.net</a> and see the overview of this feature in an <a href="https://docs.ckeditor.com/ckeditor4/docs/#!/guide/dev_spellcheck" target="_blank">online sample</a>.</p>\n\t\t\t</div>\n\t\t',
                cssClasses: ["tingle-modal--info"]
            },
            "webspellchecker-extended": {
                content: '\n\t\t\t<div class=\'tingle-modal__header\'><h2>WebSpellChecker</h2></div>\n\t\t\t<div class=\'tingle-modal-box__content-inner\'>\n\t\t\t\t<p>Spell checking functionality is a third-party service included in CKEditor 4 and provided by our partners at WebSpellChecker.</p>\n\t\t\t\t<p>For more information please visit their website at <a href="https://www.webspellchecker.net/" target="_blank" rel="noopener noreferrer">WebSpellChecker.net</a> and see the overview of this feature in an <a href="https://docs.ckeditor.com/ckeditor4/docs/#!/guide/dev_spellcheck" target="_blank">online sample</a>.</p>\n\t\t\t</div>\n\t\t',
                footer: '<p>Please visit the <a href="https://www.webspellchecker.net/pricing.html" target="_blank" rel="noopener noreferrer">WebSpellChecker pricing page</a> for details.</p>',
                cssClasses: ["tingle-modal--info", "tingle-modal--with-footer"]
            }
        }, m = function () {
            function e(e) {
                var t = e.linkEl, n = e.product;
                if ("ckeditor4" === n || "ckeditor5" === n) {
                    var r = t.parentNode;
                    r.classList.remove("hidden");
                    var a = "ckeditor4" === n ? "ckeditor-dev" : "ckeditor5", o = r.querySelector(".github-title");
                    t.href = "https://github.com/ckeditor/" + a, t.setAttribute("title", "Star " + a + " on GitHub."), o.textContent = "Star " + p[n] + " on GitHub"
                }
            }

            function t(e) {
                var t = e.container, n = e.product, r = e.easyImage;
                if (!n) return void t.parentNode.removeChild(t);
                if ("ckeditor4" === n) t.removeChild(t.querySelector(".documentation-info--default")), t.removeChild(t.querySelector(".documentation-info--ckeditor5-easy-image")), r || t.removeChild(t.querySelector(".documentation-info--ckeditor4-easy-image")); else {
                    "ckeditor5" === n ? t.removeChild(t.querySelector(".documentation-info--ckeditor4-easy-image")) : "ckeditor5" !== n && "ckeditor4" !== n && (t.removeChild(t.querySelector(".documentation-info--ckeditor4-easy-image")), t.removeChild(t.querySelector(".documentation-info--ckeditor5-easy-image"))), t.removeChild(t.querySelector(".documentation-info--sdk"));
                    var a = t.querySelector(".documentation-info__link");
                    a.href = u[n] || "#", a.textContent = p[n] + " documentation"
                }
            }

            function n() {
                var e = document.querySelector(".tingle-modal--visible");
                if (e && !e.querySelector(".tingle-modal-box .tingle-modal__close")) {
                    var t = e.querySelector(".tingle-modal-box"), n = e.querySelector(".tingle-modal__close"),
                        r = document.createDocumentFragment();
                    r.appendChild(n), t.appendChild(r)
                }
            }

            function r(r) {
                var a = r.type, i = r.product, s = r.easyImage;
                if (!f[a]) return console.error("Wrong template name");
                var l = f[a], d = l.content, u = l.footer, p = l.cssClasses, m = new o.default.modal({
                    closeMethods: ["escape", "button", "overlay"],
                    footer: !!u,
                    cssClass: p || [],
                    onOpen: function () {
                        n(), "newsletter" !== a && "newsletter-download" !== a || c(document.querySelector(".tingle-modal-box .mc-subscribe-form")), "newsletter-download" === a && (e({
                            linkEl:  document.querySelector(".tingle-modal--visible .github-button"),
                            product: i
                        }), t({
                            container: document.querySelector(".tingle-modal--visible .documentation-info"),
                            product:   i,
                            easyImage: s
                        }))
                    },
                    onClose: function () {
                        m.destroy()
                    }
                });
                m.setContent(d), u && m.setFooterContent(u), m.open()
            }

            function a() {
                var e = document.querySelectorAll("[data-dialog]");
                Array.prototype.forEach.call(e, function (e) {
                    return e.addEventListener("click", function (t) {
                        e.hasAttribute("data-dialog-prevent") && t.preventDefault(), r({
                            type:      e.getAttribute("data-dialog"),
                            product:   e.getAttribute("data-product"),
                            easyImage: e.getAttribute("data-easy-image")
                        })
                    })
                })
            }

            return {init: a}
        };
    t.default = m
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var a = n(74), o = r(a), i = n(0), s = n(82), l = r(s), c = n(18), d = r(c), u = function () {
        function e() {
            var e = d.default.ckeditor4, t = e.version, n = e.date,
                r = document.querySelectorAll(".download-choice__option a"),
                a = document.querySelector(".download-choice__version-info");
            a && (a.textContent = "v" + t + " • " + n), Array.prototype.forEach.call(r, function (e) {
                e.href = e.href.replace(/__VERSION__/g, t), e.hasAttribute("download") && e.setAttribute("download", e.getAttribute("download").replace(/__VERSION__/g, t))
            })
        }

        function t(e) {
            var t = e.target, n = t.parentNode.parentNode.querySelector("a.btn"), r = void 0, a = void 0;
            t.checked ? (a = n.href.replace(/(.*).zip$/, "$1_easyimage.zip"), r = n.href.replace(/(.*).zip$/, "$1_easyimage.zip"), n.setAttribute("data-easy-image", "true")) : (a = n.href.replace(/(.*)_easyimage.zip$/, "$1.zip"), r = n.href.replace(/(.*)_easyimage.zip$/, "$1.zip"), n.removeAttribute("data-easy-image")), n.href = a, n.setAttribute("download", r)
        }

        function n(e, t) {
            if (e && t && t.length) {
                t.forEach(function (t) {
                    var n = document.createElement("option");
                    n.value = t.value, t.value && t.value.length ? e.disabled = !1 : (e.required = !0, e.disabled = !0), n.appendChild(document.createTextNode(t.label)), e.appendChild(n)
                });
                var n = e.getAttribute("data-target-anchor");
                if (n) {
                    var r = document.querySelector("#" + n);
                    r.href = e.value || "#", r.setAttribute("download", e.value.split("/").slice(-1));
                    var a = e.options[e.selectedIndex];
                    a && e.value ? (r.hasAttribute("disabled") && r.removeAttribute("disabled"), r.setAttribute("title", "Download " + a.textContent.toLowerCase()), r.setAttribute("download", a.value.split("/").slice(-1))) : r.setAttribute("disabled", "true")
                }
            }
        }

        function r(e) {
            return "npm install --save " + e
        }

        function a(e) {
            return '<script src="' + e + '"><\/script>'
        }

        function s(e) {
            Array.prototype.forEach.call(e, function (e) {
                e.addEventListener("change", function () {
                    var t = document.getElementById(e.getAttribute("data-target-anchor"));
                    if (t) {
                        t.href = e.value || "#", t.setAttribute("download", e.value.split("/").slice(-1));
                        var n = e.options[e.selectedIndex];
                        n && (t.setAttribute("title", "Download " + n.textContent.toLowerCase()), t.setAttribute("download", n.value.split("/").slice(-1))), e.value ? t.hasAttribute("disabled") && t.removeAttribute("disabled") : t.setAttribute("disabled", "true")
                    }
                })
            })
        }

        var c = document.querySelectorAll("[data-download-package]");
        if (!c.length) return {};
        var u = Array.prototype.map.call(c, function (e) {
            return {
                packageName:     e.getAttribute("data-download-package").replace(/-/g, ""),
                subjectElements: e.querySelectorAll("[data-subject]"),
                container:       e
            }
        });
        return {
            init: function () {
                u.forEach(function (e) {
                    var t = e.subjectElements, o = e.packageName, s = e.container, c = {};
                    Array.prototype.forEach.call(s.querySelectorAll("[data-options]"), function (e) {
                        var t = e.getAttribute("data-options"), r = l.default[o].options[t];
                        r && n(e, r)
                    }), Array.prototype.forEach.call(t, function (e) {
                        var t = e.getAttribute("data-subject"),
                            s = document.querySelectorAll("[data-subscribe=" + t + "]");
                        if (s.length) {
                            c[t] = (0, i.ObservableSubject)();
                            for (var d = [], u = 0; u < s.length; u++) !function (e) {
                                var t = {};
                                t.targetInput = s[e];
                                var i = t.targetInput.getAttribute("data-collection"),
                                    c = t.targetInput.getAttribute("data-output"), u = l.default[o][c][i];
                                switch (c) {
                                    case"commandLine":
                                        d.push(function (e) {
                                            t.targetInput.value = r(u[e])
                                        });
                                        break;
                                    case"embed":
                                        d.push(function (e) {
                                            t.targetInput.value = a(u[e])
                                        });
                                        break;
                                    case"filtered":
                                        d.push(function (e) {
                                            for (; t.targetInput.firstChild;) t.targetInput.removeChild(t.targetInput.firstChild);
                                            n(t.targetInput, u[e])
                                        })
                                }
                            }(u);
                            c[t].subscribe(function (e) {
                                d.forEach(function (t) {
                                    return t(e)
                                })
                            }), e.addEventListener("change", function () {
                                return c[t].update(e.value)
                            }), c[t].fire(e.value)
                        }
                    })
                });
                var c = document.querySelectorAll("[data-target-anchor]");
                c.length && s(c), new o.default("[data-clipboard-target]").on("success", function (e) {
                    return e.clearSelection()
                }), e();
                var d = document.querySelectorAll(".easy-image-build");
                Array.prototype.forEach.call(d, function (e) {
                    return e.addEventListener("change", t)
                })
            }
        }
    };
    t.default = u
}, function (e, t, n) {
    "use strict";
    var r, a, o, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    !function (i, s) {
        a = [e, n(75), n(77), n(78)], r = s, void 0 !== (o = "function" == typeof r ? r.apply(t, a) : r) && (e.exports = o)
    }(0, function (e, t, n, r) {
        function a(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function s(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== (void 0 === t ? "undefined" : i(t)) && "function" != typeof t ? e : t
        }

        function l(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : i(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value:        e,
                    enumerable:   !1,
                    writable:     !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function c(e, t) {
            var n = "data-clipboard-" + e;
            if (t.hasAttribute(n)) return t.getAttribute(n)
        }

        var d = a(t), u = a(n), p = a(r),
            f = "function" == typeof Symbol && "symbol" === i(Symbol.iterator) ? function (e) {
                return void 0 === e ? "undefined" : i(e)
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : i(e)
            }, m = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }

                return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(), h = function (e) {
                function t(e, n) {
                    o(this, t);
                    var r = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    return r.resolveOptions(n), r.listenClick(e), r
                }

                return l(t, e), m(t, [{
                    key: "resolveOptions", value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        this.action = "function" == typeof e.action ? e.action : this.defaultAction, this.target = "function" == typeof e.target ? e.target : this.defaultTarget, this.text = "function" == typeof e.text ? e.text : this.defaultText, this.container = "object" === f(e.container) ? e.container : document.body
                    }
                }, {
                    key: "listenClick", value: function (e) {
                        var t = this;
                        this.listener = (0, p.default)(e, "click", function (e) {
                            return t.onClick(e)
                        })
                    }
                }, {
                    key: "onClick", value: function (e) {
                        var t = e.delegateTarget || e.currentTarget;
                        this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new d.default({
                            action:    this.action(t),
                            target:    this.target(t),
                            text:      this.text(t),
                            container: this.container,
                            trigger:   t,
                            emitter:   this
                        })
                    }
                }, {
                    key: "defaultAction", value: function (e) {
                        return c("action", e)
                    }
                }, {
                    key: "defaultTarget", value: function (e) {
                        var t = c("target", e);
                        if (t) return document.querySelector(t)
                    }
                }, {
                    key: "defaultText", value: function (e) {
                        return c("text", e)
                    }
                }, {
                    key: "destroy", value: function () {
                        this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
                    }
                }], [{
                    key: "isSupported", value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                            t = "string" == typeof e ? [e] : e, n = !!document.queryCommandSupported;
                        return t.forEach(function (e) {
                            n = n && !!document.queryCommandSupported(e)
                        }), n
                    }
                }]), t
            }(u.default);
        e.exports = h
    })
}, function (e, t, n) {
    "use strict";
    var r, a, o, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    !function (i, s) {
        a = [e, n(76)], r = s, void 0 !== (o = "function" == typeof r ? r.apply(t, a) : r) && (e.exports = o)
    }(0, function (e, t) {
        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        var r = function (e) {
            return e && e.__esModule ? e : {default: e}
        }(t), a = "function" == typeof Symbol && "symbol" === i(Symbol.iterator) ? function (e) {
            return void 0 === e ? "undefined" : i(e)
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : i(e)
        }, o = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(), s = function () {
            function e(t) {
                n(this, e), this.resolveOptions(t), this.initSelection()
            }

            return o(e, [{
                key: "resolveOptions", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.action = e.action, this.container = e.container, this.emitter = e.emitter, this.target = e.target, this.text = e.text, this.trigger = e.trigger, this.selectedText = ""
                }
            }, {
                key: "initSelection", value: function () {
                    this.text ? this.selectFake() : this.target && this.selectTarget()
                }
            }, {
                key: "selectFake", value: function () {
                    var e = this, t = "rtl" == document.documentElement.getAttribute("dir");
                    this.removeFake(), this.fakeHandlerCallback = function () {
                        return e.removeFake()
                    }, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[t ? "right" : "left"] = "-9999px";
                    var n = window.pageYOffset || document.documentElement.scrollTop;
                    this.fakeElem.style.top = n + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = (0, r.default)(this.fakeElem), this.copyText()
                }
            }, {
                key: "removeFake", value: function () {
                    this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null)
                }
            }, {
                key: "selectTarget", value: function () {
                    this.selectedText = (0, r.default)(this.target), this.copyText()
                }
            }, {
                key: "copyText", value: function () {
                    var e = void 0;
                    try {
                        e = document.execCommand(this.action)
                    } catch (t) {
                        e = !1
                    }
                    this.handleResult(e)
                }
            }, {
                key: "handleResult", value: function (e) {
                    this.emitter.emit(e ? "success" : "error", {
                        action:         this.action,
                        text:           this.selectedText,
                        trigger:        this.trigger,
                        clearSelection: this.clearSelection.bind(this)
                    })
                }
            }, {
                key: "clearSelection", value: function () {
                    this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges()
                }
            }, {
                key: "destroy", value: function () {
                    this.removeFake()
                }
            }, {
                key:    "action", set: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
                    if (this._action = e, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
                }, get: function () {
                    return this._action
                }
            }, {
                key:    "target", set: function (e) {
                    if (void 0 !== e) {
                        if (!e || "object" !== (void 0 === e ? "undefined" : a(e)) || 1 !== e.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                        if ("copy" === this.action && e.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                        if ("cut" === this.action && (e.hasAttribute("readonly") || e.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                        this._target = e
                    }
                }, get: function () {
                    return this._target
                }
            }]), e
        }();
        e.exports = s
    })
}, function (e, t, n) {
    "use strict";

    function r(e) {
        var t;
        if ("SELECT" === e.nodeName) e.focus(), t = e.value; else if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) {
            var n = e.hasAttribute("readonly");
            n || e.setAttribute("readonly", ""), e.select(), e.setSelectionRange(0, e.value.length), n || e.removeAttribute("readonly"), t = e.value
        } else {
            e.hasAttribute("contenteditable") && e.focus();
            var r = window.getSelection(), a = document.createRange();
            a.selectNodeContents(e), r.removeAllRanges(), r.addRange(a), t = r.toString()
        }
        return t
    }

    e.exports = r
}, function (e, t, n) {
    "use strict";

    function r() {
    }

    r.prototype = {
        on:      function (e, t, n) {
            var r = this.e || (this.e = {});
            return (r[e] || (r[e] = [])).push({fn: t, ctx: n}), this
        }, once: function (e, t, n) {
            function r() {
                a.off(e, r), t.apply(n, arguments)
            }

            var a = this;
            return r._ = t, this.on(e, r, n)
        }, emit: function (e) {
            var t = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[e] || []).slice(), r = 0, a = n.length;
            for (r; r < a; r++) n[r].fn.apply(n[r].ctx, t);
            return this
        }, off:  function (e, t) {
            var n = this.e || (this.e = {}), r = n[e], a = [];
            if (r && t) for (var o = 0, i = r.length; o < i; o++) r[o].fn !== t && r[o].fn._ !== t && a.push(r[o]);
            return a.length ? n[e] = a : delete n[e], this
        }
    }, e.exports = r
}, function (e, t, n) {
    "use strict";

    function r(e, t, n) {
        if (!e && !t && !n) throw new Error("Missing required arguments");
        if (!s.string(t)) throw new TypeError("Second argument must be a String");
        if (!s.fn(n)) throw new TypeError("Third argument must be a Function");
        if (s.node(e)) return a(e, t, n);
        if (s.nodeList(e)) return o(e, t, n);
        if (s.string(e)) return i(e, t, n);
        throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
    }

    function a(e, t, n) {
        return e.addEventListener(t, n), {
            destroy: function () {
                e.removeEventListener(t, n)
            }
        }
    }

    function o(e, t, n) {
        return Array.prototype.forEach.call(e, function (e) {
            e.addEventListener(t, n)
        }), {
            destroy: function () {
                Array.prototype.forEach.call(e, function (e) {
                    e.removeEventListener(t, n)
                })
            }
        }
    }

    function i(e, t, n) {
        return l(document.body, e, t, n)
    }

    var s = n(79), l = n(80);
    e.exports = r
}, function (e, t, n) {
    "use strict";
    t.node = function (e) {
        return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType
    }, t.nodeList = function (e) {
        var n = Object.prototype.toString.call(e);
        return void 0 !== e && ("[object NodeList]" === n || "[object HTMLCollection]" === n) && "length" in e && (0 === e.length || t.node(e[0]))
    }, t.string = function (e) {
        return "string" == typeof e || e instanceof String
    }, t.fn = function (e) {
        return "[object Function]" === Object.prototype.toString.call(e)
    }
}, function (e, t, n) {
    "use strict";

    function r(e, t, n, r, a) {
        var i = o.apply(this, arguments);
        return e.addEventListener(n, i, a), {
            destroy: function () {
                e.removeEventListener(n, i, a)
            }
        }
    }

    function a(e, t, n, a, o) {
        return "function" == typeof e.addEventListener ? r.apply(null, arguments) : "function" == typeof n ? r.bind(null, document).apply(null, arguments) : ("string" == typeof e && (e = document.querySelectorAll(e)), Array.prototype.map.call(e, function (e) {
            return r(e, t, n, a, o)
        }))
    }

    function o(e, t, n, r) {
        return function (n) {
            n.delegateTarget = i(n.target, t), n.delegateTarget && r.call(e, n)
        }
    }

    var i = n(81);
    e.exports = a
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        for (; e && e.nodeType !== a;) {
            if ("function" == typeof e.matches && e.matches(t)) return e;
            e = e.parentNode
        }
    }

    var a = 9;
    if ("undefined" != typeof Element && !Element.prototype.matches) {
        var o = Element.prototype;
        o.matches = o.matchesSelector || o.mozMatchesSelector || o.msMatchesSelector || o.oMatchesSelector || o.webkitMatchesSelector
    }
    e.exports = r
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var a = n(83), o = r(a), i = n(84), s = r(i), l = n(85), c = r(l);
    t.default = {ckeditor4: o.default, ckeditor5: s.default, ckfinder: c.default}
}, function (e, t) {
    e.exports = {
        options: {
            cdn:     [{label: "Standard Package", value: "standard"}, {
                label: "Basic Package",
                value: "basic"
            }, {label: "Full Package", value: "full"}],
            history: [{
                label: "CKEditor 4.8.0",
                value: "https://download.cksource.com/CKEditor/CKEditor/CKEditor%204.8.0/ckeditor_4.8.0_standard.zip"
            }, {
                label: "CKEditor 4.7.3",
                value: "https://download.cksource.com/CKEditor/CKEditor/CKEditor%204.7.3/ckeditor_4.7.3_standard.zip"
            }, {
                label: "CKEditor 4.6.2",
                value: "https://download.cksource.com/CKEditor/CKEditor/CKEditor%204.6.2/ckeditor_4.6.2_standard.zip"
            }],
            nightly: [{
                label: "Standard Package",
                value: "https://download.cksource.com/CKEditor/CKEditor/Nightly%20Build/ckeditor_standard_nightly.zip"
            }, {
                label: "Basic Package",
                value: "https://download.cksource.com/CKEditor/CKEditor/Nightly%20Build/ckeditor_basic_nightly.zip"
            }, {
                label: "Full Package",
                value: "https://download.cksource.com/CKEditor/CKEditor/Nightly%20Build/ckeditor_full_nightly.zip"
            }]
        },
        embed:   {
            cdn: {
                basic:    "//cdn.ckeditor.com/4.9.1/basic/ckeditor.js",
                standard: "//cdn.ckeditor.com/4.9.1/standard/ckeditor.js",
                full:     "//cdn.ckeditor.com/4.9.1/full/ckeditor.js"
            }
        }
    }
}, function (e, t) {
    e.exports = {
        options:     {
            build: [{label: "CKEditor 5 Classic", value: "classic"}, {
                label: "CKEditor 5 Balloon",
                value: "balloon"
            }, {label: "CKEditor 5 Inline", value: "inline"}, {
                label: "CKEditor 5 Document",
                value: "decoupled-document"
            }]
        },
        commandLine: {
            builds: {
                classic:              "@ckeditor/ckeditor5-build-classic",
                inline:               "@ckeditor/ckeditor5-build-inline",
                balloon:              "@ckeditor/ckeditor5-build-balloon",
                "decoupled-document": "@ckeditor/ckeditor5-build-decoupled-document"
            }
        },
        filtered:    {
            zip: {
                classic:              [{
                    label: "CKEditor 5 classic editor build 1.0.0-beta.1",
                    value: "https://download.cksource.com/CKEditor/CKEditor5/1.0.0-beta.1/ckeditor5-build-classic-1.0.0-beta.1.zip"
                }, {
                    label: "CKEditor 5 classic editor build 1.0.0-alpha.2",
                    value: "https://download.cksource.com/CKEditor/CKEditor5/1.0.0-alpha.2/ckeditor5-build-classic-1.0.0-alpha.2.zip"
                }, {
                    label: "CKEditor 5 classic editor build 1.0.0-alpha.1",
                    value: "https://download.cksource.com/CKEditor/CKEditor5/1.0.0-alpha.1/ckeditor5-build-classic-1.0.0-alpha.1.zip"
                }],
                balloon:              [{
                    label: "CKEditor 5 balloon editor build 1.0.0-beta.1",
                    value: "https://download.cksource.com/CKEditor/CKEditor5/1.0.0-beta.1/ckeditor5-build-balloon-1.0.0-beta.1.zip"
                }, {
                    label: "CKEditor 5 balloon editor build 1.0.0-alpha.2",
                    value: "https://download.cksource.com/CKEditor/CKEditor5/1.0.0-alpha.2/ckeditor5-build-balloon-1.0.0-alpha.2.zip"
                }, {
                    label: "CKEditor 5 balloon editor build 1.0.0-alpha.1",
                    value: "https://download.cksource.com/CKEditor/CKEditor5/1.0.0-alpha.1/ckeditor5-build-balloon-1.0.0-alpha.1.zip"
                }],
                inline:               [{
                    label: "CKEditor 5 inline editor build 1.0.0-beta.1",
                    value: "https://download.cksource.com/CKEditor/CKEditor5/1.0.0-beta.1/ckeditor5-build-inline-1.0.0-beta.1.zip"
                }, {
                    label: "CKEditor 5 inline editor build 1.0.0-alpha.2",
                    value: "https://download.cksource.com/CKEditor/CKEditor5/1.0.0-alpha.2/ckeditor5-build-inline-1.0.0-alpha.2.zip"
                }, {
                    label: "CKEditor 5 inline editor build 1.0.0-alpha.1",
                    value: "https://download.cksource.com/CKEditor/CKEditor5/1.0.0-alpha.1/ckeditor5-build-inline-1.0.0-alpha.1.zip"
                }],
                "decoupled-document": [{
                    label: "CKEditor 5 document editor build 1.0.0-beta.1",
                    value: "https://download.cksource.com/CKEditor/CKEditor5/1.0.0-beta.1/ckeditor5-build-decoupled-document-1.0.0-beta.1.zip"
                }]
            }
        },
        embed:       {
            cdn: {
                classic:              "https://cdn.ckeditor.com/ckeditor5/1.0.0-beta.1/classic/ckeditor.js",
                balloon:              "https://cdn.ckeditor.com/ckeditor5/1.0.0-beta.1/balloon/ckeditor.js",
                inline:               "https://cdn.ckeditor.com/ckeditor5/1.0.0-beta.1/inline/ckeditor.js",
                "decoupled-document": "https://cdn.ckeditor.com/ckeditor5/1.0.0-beta.1/decoupled-document/ckeditor.js"
            }
        }
    }
}, function (e, t) {
    e.exports = {
        options:  {
            history: [{label: "Select language", value: "placeholder"}, {
                label: "PHP",
                value: "php"
            }, {label: ".NET", value: "aspnet"}, {label: "Java", value: "java"}, {
                label: "ASP",
                value: "asp"
            }, {label: "ColdFusion", value: "cf"}]
        },
        filtered: {
            history: {
                placeholder: [{label: "- Package version -", value: ""}],
                php:         [{
                    label: "Version: 3.4.2 - Released on 26 Jun 2017",
                    value: "https://download.cksource.com/CKFinder/CKFinder%20for%20PHP/3.4.2/ckfinder_php_3.4.2.zip"
                }, {
                    label: "Version: 3.4.1 - Released on 28 Oct 2016",
                    value: "https://download.cksource.com/CKFinder/CKFinder%20for%20PHP/3.4.1/ckfinder_php_3.4.1.zip"
                }, {
                    label: "Version: 3.4.0 • Released on 20 Sep 2016",
                    value: "https://download.cksource.com/CKFinder/CKFinder%20for%20PHP/3.4.0/ckfinder_php_3.4.0.zip"
                }, {
                    label: "Version: 2.6.2.1 • Released on 11 Oct 2016",
                    value: "https://download.cksource.com/CKFinder/CKFinder%20for%20PHP/2.6.2.1/ckfinder_php_2.6.2.1.zip"
                }, {
                    label: "Version: 3.3.0 • Released on 14 Mar 2016",
                    value: "https://download.cksource.com/CKFinder/CKFinder%20for%20PHP/3.3.0/ckfinder_php_3.3.0.zip"
                }],
                aspnet:      [{
                    label: "Version: 3.4.2 - Released on 26 Jun 2017",
                    value: "https://download.cksource.com/CKFinder/CKFinder%20for%20ASP.NET/3.4.2/ckfinder_aspnet_3.4.2.zip"
                }, {
                    label: "Version: 3.4.1 - Released on 28 Oct 2016",
                    value: "https://download.cksource.com/CKFinder/CKFinder%20for%20ASP.NET/3.4.1/ckfinder_aspnet_3.4.1.zip"
                }, {
                    label: "Version: 3.4.0 • Released on 20 Sep 2016",
                    value: "https://download.cksource.com/CKFinder/CKFinder%20for%20ASP.NET/3.4.0/ckfinder_aspnet_3.4.0.zip"
                }, {
                    label: "Version: 2.6.2.1 • Released on 11 Oct 2016",
                    value: "https://download.cksource.com/CKFinder/CKFinder%20for%20ASP.NET/2.6.2.1/ckfinder_aspnet_2.6.2.1.zip"
                }, {
                    label: "Version: 3.3.1 • Released on 28 Jul 2016",
                    value: "https://download.cksource.com/CKFinder/CKFinder%20for%20ASP.NET/3.3.1/ckfinder_aspnet_3.3.1.zip"
                }],
                asp:         [{
                    label: "Version: 2.6.2.1 - Released on 11 Oct 2016",
                    value: "https://download.cksource.com/CKFinder/CKFinder%20for%20ASP/2.6.2.1/ckfinder_asp_2.6.2.1.zip"
                }],
                java:        [{
                    label: "Version: 2.6.2.1 - Released on 11 Oct 2016",
                    value: "https://download.cksource.com/CKFinder/CKFinder%20for%20Java/2.6.2.1/ckfinder_java_2.6.2.1.zip"
                }],
                cf:          [{
                    label: "Version: 2.6.2.1 - Released on 11 Oct 2016",
                    value: "https://download.cksource.com/CKFinder/CKFinder%20for%20ColdFusion/2.6.2.1/ckfinder_coldfusion_2.6.2.1.zip"
                }]
            }
        }
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = function () {
        function e() {
            Array.prototype.forEach.call(t, function (e) {
                e.addEventListener("click", n), e.parentNode.addEventListener("click", function (e) {
                    return e.stopPropagation()
                })
            })
        }

        var t = document.querySelectorAll('[data-toggle="dropdown"]');
        if (!t.length) return {};
        var n = function e(t) {
            var n = t.target || t.srcElement, r = t.type, a = t.keyCode, o = t.which, i = a || o, s = n.parentNode;
            if ("keyup" !== r || 27 === i) {
                if (!s.classList.contains("dropdown")) {
                    var l = document.querySelector('[data-open="true"]');
                    return l && (l.setAttribute("data-open", !1), l.querySelector('[data-toggle="dropdown"]').setAttribute("expanded", !1)), window.removeEventListener("click", e), void window.removeEventListener("keyup", e)
                }
                var c = !!s.getAttribute("data-open") && Boolean("true" === s.getAttribute("data-open"));
                s.setAttribute("data-open", !c), n.setAttribute("expanded", !c), c ? (window.removeEventListener("click", e), window.removeEventListener("keyup", e)) : (window.addEventListener("click", e), window.addEventListener("keyup", e))
            }
        };
        return {
            init: function () {
                e()
            }
        }
    };
    t.default = r
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), a = function () {
        function e(e) {
            l && (l.style.paddingTop = e ? d + "px" : c)
        }

        var t = document.querySelector(".stickme");
        if (!t) return {};
        var n = document.querySelector(t.getAttribute("data-target-element")),
            a = t.querySelector("table").offsetWidth <= window.innerWidth;
        if (!n || !a) return {};
        var o = 0, i = t.getAttribute("data-offset-top-by");
        if (i) {
            var s = document.querySelector(i);
            s && (o = s.offsetHeight)
        }
        var l = t.parentNode, c = l ? l.style.paddingTop : 0, d = t.offsetHeight,
            u = (0, r.totalOffsetTop)(t) - o + t.offsetHeight, p = n.offsetHeight - 130 - o, f = u + p;
        return {
            onWindowScroll: function (n) {
                n >= u ? n >= f ? t.classList.contains("stickme--hold") || t.classList.add("stickme--hold") : (t.classList.contains("stickme--hold") && t.classList.remove("stickme--hold"), t.classList.contains("stickme--sticked") || (t.classList.add("stickme--sticked"), e(!0))) : t.classList.contains("stickme--sticked") && (t.classList.remove("stickme--sticked"), e(!1))
            }
        }
    };
    t.default = a
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = function () {
        function e(e) {
            if (!e || r) if (r) n.style.left = window.innerWidth > 1279 ? t.offsetLeft + "px" : null; else {
                var a = setInterval(function () {
                    document.getElementById("at4-share") && (n = document.getElementById("at4-share"), n.style.left = window.innerWidth > 1279 ? t.offsetLeft + "px" : null, n.classList.add("at4-share--ready"), clearInterval(a), r = !0)
                }, 100);
                setTimeout(function () {
                    a && clearInterval(a)
                }, 1e4)
            }
        }

        var t = document.querySelector(".blog-post__content"), n = null, r = !1;
        return "undefined" == typeof addthis ? {} : {
            init:              function () {
                addthis.addEventListener("addthis.ready", e.bind(null, !1))
            }, onWindowResize: e.bind(!0)
        }
    };
    t.default = r
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(2), a = n(0), o = function () {
        function e() {
            var e = document.querySelector(".header__goto-content");
            if (e) {
                var t = document.querySelector("main");
                e.addEventListener("click", function (e) {
                    e.preventDefault(), (0, a.smoothScroll)(t), t.focus()
                })
            }
        }

        function t() {
            (0, r.isMobile)() && i !== n() ? ((0, a.stretchToVH)(o), i = n()) : o.hasAttribute("style") && o.removeAttribute("style")
        }

        function n() {
            return window.innerWidth > window.innerHeight ? "landcape" : "portrait"
        }

        var o = document.querySelector(".header"), i = null;
        return o && o.querySelector(".header-content") ? {
            init:              function () {
                e(), (0, a.stretchToVH)(o), i = n()
            }, onWindowResize: t
        } : {}
    };
    t.default = o
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0);
    n(91);
    var a = r.mobile.isDesktop, o = function () {
        function e(e) {
            e.preventDefault(), g = !0, (0, r.smoothScroll)(d), p ? setTimeout(function () {
                n(), p = !1, g = !1
            }, 600) : g = !1
        }

        function t(e, t, n) {
            function r(n) {
                n.stopPropagation(), m || (Array.prototype.forEach.call(l, function (e, n) {
                    n !== t && (e.classList.add("boost--opacity"), e.style.opacity = .8)
                }), e.style.zIndex = 2)
            }

            function a(e) {
                e.stopPropagation(), m || Array.prototype.forEach.call(l, function (e, n) {
                    n !== t && (e.style.opacity = 1, e.classList.remove("boost--opacity"))
                })
            }

            n && (e.removeEventListener("mouseover", r), e.parentNode.removeEventListener("focus", r), e.removeEventListener("mouseout", a), e.parentNode.removeEventListener("focusout", a)), e.addEventListener("mouseover", r), e.parentNode.addEventListener("focus", r), e.addEventListener("mouseout", a), e.parentNode.addEventListener("focusout", a)
        }

        function n() {
            Array.prototype.forEach.call(l, function (e) {
                return e.parentNode.classList.add("freezed")
            }), Array.prototype.forEach.call(l, function (e, n) {
                if (n || l[l.length - 1].nextElementSibling.classList.add("enter"), n === l.length - 1) return o(), d.classList.add("after-intro"), e.parentNode.classList.remove("freezed"), void e.classList.add("ecosystem__item--ready");
                e.classList.add("boost--transform"), e.classList.add("place-in"), m = !0, (0, r.transitionEnd)(e, function () {
                    e.style.opacity = 1;
                    var a = e.currentStyle || window.getComputedStyle(e),
                        o = "none" !== a.transform ? a.transform : null;
                    e.style.transform = o ? o + " scale( 1.06, 1.06 )" : "scale( 1.06, 1.06 )", (0, r.transitionEnd)(e, function () {
                        e.style.transform = o, e.nextElementSibling.classList.add("enter"), e.removeAttribute("style"), e.parentNode.classList.remove("freezed"), e.classList.add("ecosystem__item--ready"), e.classList.remove("boost--transform"), e.style.transitionDelay = "0ms", n === l.length - 2 && Array.prototype.forEach.call(l, function (e, n) {
                            return t(e, n)
                        })
                    })
                })
            }), m = !1, h = !0
        }

        function o() {
            if ((l[0].clientHeight === c ? "small" : "big") !== f) return f = l[0].clientHeight === c ? "small" : "big", !0
        }

        function i() {
            if (a() && h && !m) o() && d.classList.contains("after-intro") && (m = !0, Array.prototype.forEach.call(l, function (e, n) {
                var r = e.currentStyle || window.getComputedStyle(e),
                    a = Number(r.transitionDuration.slice(0, -1)) + Number(r.transitionDelay.slice(0, -1));
                e.parentNode.classList.add("freezed"), e.removeAttribute("style"), setTimeout(function () {
                    r = e.currentStyle || window.getComputedStyle(e), e.parentNode.classList.remove("freezed"), t(e, n, !0), n === l.length - 1 && (m = !1)
                }, 1e3 * (a + .3))
            })); else if (a() && !h && !m) {
                var e = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
                s(e)
            }
        }

        function s(e) {
            if (p && a() && !g) {
                e >= d.offsetTop + d.offsetHeight / 2 - l[0].clientHeight / 2 + l[0].clientHeight / 5 - window.innerHeight && (n(), p = !1)
            }
        }

        var l = document.querySelectorAll("svg.ecosystem__item");
        if (!l || !l.length) return {};
        var c = 310, d = document.querySelector(".ecosystem__container"), u = document.querySelector(".goto-hex"),
            p = !0, f = null, m = !1, h = !1, g = !1;
        return {init: u.addEventListener("click", e), onWindowScroll: s, onWindowResize: i}
    };
    t.default = o
}, function (e, t, n) {
    "use strict";
    /*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */
    "document" in self && ("classList" in document.createElement("_") && (!document.createElementNS || "classList" in document.createElementNS("http://www.w3.org/2000/svg", "g")) ? function () {
        var e = document.createElement("_");
        if (e.classList.add("c1", "c2"), !e.classList.contains("c2")) {
            var t = function (e) {
                var t = DOMTokenList.prototype[e];
                DOMTokenList.prototype[e] = function (e) {
                    var n, r = arguments.length;
                    for (n = 0; n < r; n++) e = arguments[n], t.call(this, e)
                }
            };
            t("add"), t("remove")
        }
        if (e.classList.toggle("c3", !1), e.classList.contains("c3")) {
            var n = DOMTokenList.prototype.toggle;
            DOMTokenList.prototype.toggle = function (e, t) {
                return 1 in arguments && !this.contains(e) == !t ? t : n.call(this, e)
            }
        }
        e = null
    }() : function (e) {
        if ("Element" in e) {
            var t = e.Element.prototype, n = Object, r = String.prototype.trim || function () {
                return this.replace(/^\s+|\s+$/g, "")
            }, a = Array.prototype.indexOf || function (e) {
                for (var t = 0, n = this.length; t < n; t++) if (t in this && this[t] === e) return t;
                return -1
            }, o = function (e, t) {
                this.name = e, this.code = DOMException[e], this.message = t
            }, i = function (e, t) {
                if ("" === t) throw new o("SYNTAX_ERR", "An invalid or illegal string was specified");
                if (/\s/.test(t)) throw new o("INVALID_CHARACTER_ERR", "String contains an invalid character");
                return a.call(e, t)
            }, s = function (e) {
                for (var t = r.call(e.getAttribute("class") || ""), n = t ? t.split(/\s+/) : [], a = 0, o = n.length; a < o; a++) this.push(n[a]);
                this._updateClassName = function () {
                    e.setAttribute("class", this.toString())
                }
            }, l = s.prototype = [], c = function () {
                return new s(this)
            };
            if (o.prototype = Error.prototype, l.item = function (e) {
                return this[e] || null
            }, l.contains = function (e) {
                return e += "", -1 !== i(this, e)
            }, l.add = function () {
                var e, t = arguments, n = 0, r = t.length, a = !1;
                do {
                    e = t[n] + "", -1 === i(this, e) && (this.push(e), a = !0)
                } while (++n < r);
                a && this._updateClassName()
            }, l.remove = function () {
                var e, t, n = arguments, r = 0, a = n.length, o = !1;
                do {
                    for (e = n[r] + "", t = i(this, e); -1 !== t;) this.splice(t, 1), o = !0, t = i(this, e)
                } while (++r < a);
                o && this._updateClassName()
            }, l.toggle = function (e, t) {
                e += "";
                var n = this.contains(e), r = n ? !0 !== t && "remove" : !1 !== t && "add";
                return r && this[r](e), !0 === t || !1 === t ? t : !n
            }, l.toString = function () {
                return this.join(" ")
            }, n.defineProperty) {
                var d = {get: c, enumerable: !0, configurable: !0};
                try {
                    n.defineProperty(t, "classList", d)
                } catch (e) {
                    -2146823252 === e.number && (d.enumerable = !1, n.defineProperty(t, "classList", d))
                }
            } else n.prototype.__defineGetter__ && t.__defineGetter__("classList", c)
        }
    }(self))
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(8), a = function (e) {
        return e && e.__esModule ? e : {default: e}
    }(r), o = function () {
        function e() {
            var e = document.querySelector(".tingle-modal--visible");
            if (e && !e.querySelector(".tingle-modal-box .tingle-modal__close")) {
                var t = e.querySelector(".tingle-modal-box"), n = e.querySelector(".tingle-modal__close"),
                    r = document.createDocumentFragment();
                r.appendChild(n), t.appendChild(r)
            }
        }

        function t(e, t) {
            t.preventDefault();
            var r = e.imageURL, a = e.link;
            o.setContent(n(r, a)), o.open()
        }

        function n(e, t) {
            return '\n\t\t<div class="image-dialog__wrapper image-dialog__wrapper--with-link">\n\t\t\t<img src="' + e + '" />\n\t\t\t<a class="image-external-link" href=' + t + ' target="_blank" rel="noopener noreferrer">Download PDF</a>\n\t\t</div>\n\t\t'
        }

        function r() {
            var e = document.querySelectorAll("[data-image-dialog]");
            Array.prototype.forEach.call(e, function (e) {
                return e.addEventListener("click", t.bind(null, {
                    imageURL: e.getAttribute("data-image-dialog"),
                    link:     e.getAttribute("data-pdf-link")
                }))
            })
        }

        var o = new a.default.modal({closeMethods: ["escape", "button", "overlay"], footer: !1, onOpen: e});
        return {
            init: function () {
                r()
            }
        }
    };
    t.default = o
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), a = r.mobile.isDesktop, o = function () {
        function e(e) {
            a() && (e >= l ? (n.style.top = l + s + "px", n.classList.add("legal-menu--freezed"), t.classList.contains("menu--no-bg-md") && t.classList.remove("menu--no-bg-md")) : (n.style.top = null, n.classList.remove("legal-menu--freezed"), t.classList.contains("menu--no-bg-md") || t.classList.add("menu--no-bg-md")))
        }

        if (!document.querySelector(".legal")) return {};
        var t = document.querySelector(".menu"), n = document.querySelector(".legal-menu"),
            o = window.getComputedStyle(n), i = document.querySelector(".footer"), s = Number(o.top.slice(0, -2)),
            l = i.offsetTop - n.offsetHeight - s - 50;
        return {init: r.GotoHashLink, onWindowScroll: e}
    };
    t.default = o
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), a = r.mobile.isDesktop, o = r.mobile.isPhoneSize, i = function () {
        function e() {
            var e = s.querySelectorAll("a"), t = s.classList.contains("menu-product--focusable");
            a() || t ? a() && t && (s.classList.remove("menu-product--focusable"), Array.prototype.forEach.call(e, function (e) {
                return e.setAttribute("tabindex", "-1")
            })) : (s.classList.add("menu-product--focusable"), Array.prototype.forEach.call(e, function (e) {
                return e.removeAttribute("tabindex")
            }))
        }

        var t = document.querySelector(".menu");
        if (!t) return {};
        var n = t.offsetTop, i = r.classToggler.bind(void 0, t), s = t.querySelector(".menu-product--legal");
        return {
            init: s ? e : null, onWindowResize: s ? e : null, onWindowScroll: o() ? null : function (e) {
                return i(e >= n, "menu--small")
            }
        }
    };
    t.default = i
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = function () {
        function e(e) {
            for (; e.firstChild;) e.removeChild(e.firstChild)
        }

        function t(e, t) {
            var n = window.innerWidth - t, r = !1;
            return e.map(function (e) {
                var t = e.el, a = e.width;
                return r || (n -= a) < 0 && (r = !0), {hidden: r, el: t, width: a}
            })
        }

        function n(e, t) {
            return e.length !== t.length || e.some(function (e, n) {
                return e.hidden !== t[n].hidden
            })
        }

        function r(t, r, a) {
            if (n(m, t)) {
                m = t;
                var o = a.querySelector("ul"), i = r.querySelector("ul"), l = a.querySelector("button");
                r.classList.remove("menu-product--ready"), e(i), e(o), t.forEach(function (e) {
                    var t = e.hidden, n = e.el;
                    t ? o.appendChild(n) : i.appendChild(n)
                }), o.hasChildNodes() && !a.classList.contains("menu-more--active") ? (a.classList.add("menu-more--active"), a.setAttribute("aria-hidden", "false"), l.setAttribute("tabindex", 0)) : !o.hasChildNodes() && a.classList.contains("menu-more--active") && (a.classList.remove("menu-more--active"), a.setAttribute("aria-hidden", "true"), l.setAttribute("tabindex", -1)), i.childNodes.length >= 3 && l.textContent === s.end ? (e(l), l.appendChild(document.createTextNode(s.start))) : i.childNodes.length < 3 && l.textContent === s.start && (e(l), l.appendChild(document.createTextNode(s.end))), r.classList.add("menu-product--ready")
            }
        }

        function a() {
            r(t(p, g), i, c)
        }

        var o = document.querySelector(".menu");
        if (!o) return {};
        var i = o.querySelector("nav.menu-product");
        if (!i) return {};
        var s = {start: "More", end: "Menu"}, l = o.querySelector(".menu__page-title"),
            c = o.querySelector(".menu-more"), d = i.querySelectorAll("li"),
            u = i.querySelector(".github-btn__wrapper"), p = Array.prototype.map.call(d, function (e) {
                return {el: e, width: e.offsetWidth}
            }), f = l.currentStyle || window.getComputedStyle(l), m = {}, h = l.offsetWidth;
        h += f.paddingLeft ? Number(f.paddingLeft.substring(0, f.paddingLeft.length - 2)) : 0, h += f.paddingRight ? Number(f.paddingRight.substring(0, f.paddingRight.length - 2)) : 0;
        var g = h + 90 + (u ? u.offsetWidth : 0);
        return {init: a, onWindowResize: a}
    };
    t.default = r
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = function () {
        function e(e, t) {
            if (e = e || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0, t = t || n.offsetHeight - window.innerHeight, !o && t < 0) return -1;
            o = !0;
            var r = Math.round(100 * e / t);
            return r > 100 ? 100 : r
        }

        function t(t) {
            var n = document.querySelector("[data-reading-progress]"), r = n.querySelector(".blog-post__footer"),
                o = n.offsetHeight + n.offsetTop - r.offsetHeight - window.innerHeight, i = e(t, o);
            a.style.maxWidth = i + "%"
        }

        var n = document.querySelector("[data-reading-progress]"), r = document.querySelector(".menu .progress-bar"),
            a = r.querySelector(".progress-bar__fill"), o = !1;
        return n ? {init: t, onWindowScroll: -1 !== e() ? t : null} : {}
    };
    t.default = r
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(3), a = n(6), o = function (e) {
        return e && e.__esModule ? e : {default: e}
    }(a), i = n(0);
    (0, r.polyfill)();
    var s = function () {
        function e(e) {
            e.map(function (e) {
                var n = e.title, r = e.url, a = e.created, o = e.zip, s = e.gzip, l = document.createElement("li"),
                    c = document.createElement("a"), d = document.createElement("a"), u = document.createElement("a"),
                    p = document.createElement("h3"), f = document.createElement("time");
                p.textContent = n, c.href = r, f.textContent = (0, i.formatDate)(new Date(1e3 * a)), d.className = "btn btn-cta", d.href = s, d.textContent = "Download .gizp", u.className = "btn btn-cta", u.href = o, u.textContent = "Download .zip", c.appendChild(p), l.appendChild(f), l.appendChild(c), l.appendChild(u), l.appendChild(d), t.appendChild(l)
            })
        }

        var t = document.querySelector(".releases-list");
        return t ? {
            init: function () {
                o.default.get("https://ckeditor.com/cke4/download/releases.json").then(function (t) {
                    return e(t.data)
                }).catch(function (e) {
                    return console.error(e)
                })
            }
        } : {}
    };
    t.default = s
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = function () {
        function e(e, t) {
            32 !== t.keyCode && 13 !== t.keyCode || (t.preventDefault(), e(t));
            var n = a.querySelector(".simple-tabs__item--active");
            37 === t.keyCode && e(null, n.previousElementSibling || o[o.length - 1]), 39 === t.keyCode && e(null, n.nextElementSibling || o[0])
        }

        function t(e) {
            if (e || (e = Array.prototype.filter.call(o, function (e) {
                return e.classList.contains("simple-tabs__item--active")
            })[0])) {
                var t = e.offsetWidth - .4 * e.offsetWidth, n = e.offsetLeft + (e.offsetWidth - t) / 2;
                s.style.width = t + "px", s.style.left = n + "px"
            }
        }

        function n(e, n, r) {
            n = n || e.target || e.srcElement, n.classList.contains("simple-tabs__item--active") || (Array.prototype.forEach.call(o, function (e) {
                e.classList.remove("simple-tabs__item--active"), e.setAttribute("aria-pressed", !1)
            }), n.classList.add("simple-tabs__item--active"), n.setAttribute("aria-pressed", !0), r || (n.focus(), window.history.replaceState({}, "", "#" + n.getAttribute("aria-controls"))), Array.prototype.forEach.call(i, function (e) {
                e.id === n.getAttribute("aria-controls") ? e.classList.contains("simple-tabs__content--active") || e.classList.add("simple-tabs__content--active") : e.classList.remove("simple-tabs__content--active")
            }), t(n))
        }

        function r() {
            var t = window.location.hash.substr(1), r = null;
            Array.prototype.forEach.call(o, function (a) {
                a.getAttribute("aria-controls") === t && (r = a), a.addEventListener("click", n), a.addEventListener("keyup", e.bind(void 0, n)), a.addEventListener("keydown", function (e) {
                    32 === e.keyCode && e.preventDefault()
                })
            }), n(null, r || o[0], !0)
        }

        var a = document.querySelector(".simple-tabs");
        if (!a) return {};
        var o = a.querySelectorAll(".simple-tabs__item"), i = a.querySelectorAll(".simple-tabs__content"),
            s = a.querySelector(".active__tab-marker");
        return {init: r}
    };
    t.default = r
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(0), a = r.mobile.isMobile, o = function () {
        function e(n) {
            n.stopPropagation();
            var a = n.type, o = n.keyCode, c = n.which, u = o || c, p = !l.classList.contains(m);
            "keyup" === a && 27 !== u || (p ? (s.classList.add(g), l.classList.add(m), window.addEventListener("keyup", e)) : (s.classList.remove(g), l.classList.add(h), l.classList.remove(m), (0, r.transitionEnd)(l, function () {
                setTimeout(function () {
                    l.classList.remove(h)
                }, 300)
            }), window.removeEventListener("keyup", e), 0 !== d.offsetTop ? s.classList.contains(i + "--fixed") && s.classList.remove(i + "--fixed") : s.classList.contains(i + "--fixed") || s.classList.add(i + "--fixed")), l.setAttribute("aria-expanded", p), l.focus(), v(p), y(p), p && !f && (t(), f = !0))
        }

        function t() {
            var e = u.querySelectorAll(".site-nav__menu");
            if (e.length) {
                var t = e[e.length - 1], r = t.querySelectorAll("a"), a = r[r.length - 1];
                a.addEventListener("keydown", o), l.addEventListener("keydown", n.bind(null, a))
            }
        }

        function n(e, t) {
            9 === t.keyCode && t.shiftKey && (t.preventDefault(), e.focus())
        }

        function o(e) {
            9 !== e.keyCode || e.shiftKey || (e.preventDefault(), l.focus())
        }

        var i = "site-nav", s = document.querySelector("." + i), l = s.querySelector("." + i + "__toggler"),
            c = document.querySelector(".site-cover"), d = document.querySelector(".menu"),
            u = document.querySelector("." + i + "__panel"), p = u.querySelectorAll("a"), f = !1,
            m = i + "__toggler--active", h = i + "__toggler--on-move", g = i + "--active", v = function () {
                return function (e) {
                    u.classList.toggle(i + "__panel--active"), u.setAttribute("aria-hidden", e ? "false" : "true"), Array.prototype.forEach.call(p, function (t) {
                        return t.setAttribute("tabindex", e ? 1 : -1)
                    })
                }
            }(), y = function () {
                return function (e) {
                    e ? c.classList.add("site-cover--active") : ((0, r.transitionEnd)(c, function () {
                        c.classList.remove("site-cover--active"), c.classList.remove("site-cover--hide")
                    }), c.classList.add("site-cover--hide"))
                }
            }(), b = s.offsetTop, w = r.classToggler.bind(void 0, s),
            S = r.stretchToVH.bind(null, document.querySelector("." + i + "__panel"));
        return {
            init:              function () {
                l.addEventListener("click", e), c.addEventListener("click", e)
            }, onWindowScroll: function (e) {
                s.classList.contains(i + "--active") || w(e >= b, i + "--fixed")
            }, nWindowResize:  a() ? function () {
                S(), (0, r.stretchToVH)(c)
            } : null
        }
    };
    t.default = o
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(4), a = function (e) {
        return e && e.__esModule ? e : {default: e}
    }(r), o = function () {
        function e(e) {
            e.preventDefault();
            var t = document.getElementById(e.target.href.split("#")[1]);
            (0, a.default)(t, 50)
        }

        var t = document.querySelectorAll("[data-goto]");
        return {
            init: function () {
                Array.prototype.forEach.call(t, function (t) {
                    t.addEventListener("click", e)
                })
            }
        }
    };
    t.default = o
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(2), a = n(0), o = function () {
        function e(e, t) {
            var n = (0, a.totalOffsetTop)(e) - t;
            e.classList.add("highlighted"), setTimeout(function () {
                return window.scrollTo(0, n)
            }, 0)
        }

        if (!document.querySelector(".pricing-licenses")) return {};
        var t = window.location.hash, n = t ? document.querySelector("tr" + t) : null,
            o = (0, r.isPhoneSize)() ? 60 : 500;
        return n ? {
            init: function () {
                return e(n, o)
            }
        } : {}
    };
    t.default = o
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(103), a = function (e) {
        return e && e.__esModule ? e : {default: e}
    }(r), o = function () {
        return document.querySelector(".module-testimonials") ? {
            init: function () {
                new a.default(".swiper-container", {
                    pagination:          ".swiper-pagination",
                    paginationClickable: !0,
                    slidesPerView:       1,
                    speed:               800,
                    autoplay:            8e3,
                    loop:                !0,
                    a11y:                !0
                })
            }
        } : {}
    };
    t.default = o
}, function (e, t, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    !function () {
        var e, t = function t(a, o) {
            function i(e) {
                return Math.floor(e)
            }

            function s() {
                var e = C.params.autoplay, t = C.slides.eq(C.activeIndex);
                t.attr("data-swiper-autoplay") && (e = t.attr("data-swiper-autoplay") || C.params.autoplay), C.autoplayTimeoutId = setTimeout(function () {
                    C.params.loop ? (C.fixLoop(), C._slideNext(), C.emit("onAutoplay", C)) : C.isEnd ? o.autoplayStopOnLast ? C.stopAutoplay() : (C._slideTo(0), C.emit("onAutoplay", C)) : (C._slideNext(), C.emit("onAutoplay", C))
                }, e)
            }

            function l(t, n) {
                var r = e(t.target);
                if (!r.is(n)) if ("string" == typeof n) r = r.parents(n); else if (n.nodeType) {
                    var a;
                    return r.parents().each(function (e, t) {
                        t === n && (a = n)
                    }), a ? n : void 0
                }
                if (0 !== r.length) return r[0]
            }

            function c(e, t) {
                t = t || {};
                var n = window.MutationObserver || window.WebkitMutationObserver, r = new n(function (e) {
                    e.forEach(function (e) {
                        C.onResize(!0), C.emit("onObserverUpdate", C, e)
                    })
                });
                r.observe(e, {
                    attributes:    void 0 === t.attributes || t.attributes,
                    childList:     void 0 === t.childList || t.childList,
                    characterData: void 0 === t.characterData || t.characterData
                }), C.observers.push(r)
            }

            function d(e) {
                e.originalEvent && (e = e.originalEvent);
                var t = e.keyCode || e.charCode;
                if (!C.params.allowSwipeToNext && (C.isHorizontal() && 39 === t || !C.isHorizontal() && 40 === t)) return !1;
                if (!C.params.allowSwipeToPrev && (C.isHorizontal() && 37 === t || !C.isHorizontal() && 38 === t)) return !1;
                if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                    if (37 === t || 39 === t || 38 === t || 40 === t) {
                        var n = !1;
                        if (C.container.parents("." + C.params.slideClass).length > 0 && 0 === C.container.parents("." + C.params.slideActiveClass).length) return;
                        var r = {left: window.pageXOffset, top: window.pageYOffset}, a = window.innerWidth,
                            o = window.innerHeight, i = C.container.offset();
                        C.rtl && (i.left = i.left - C.container[0].scrollLeft);
                        for (var s = [[i.left, i.top], [i.left + C.width, i.top], [i.left, i.top + C.height], [i.left + C.width, i.top + C.height]], l = 0; l < s.length; l++) {
                            var c = s[l];
                            c[0] >= r.left && c[0] <= r.left + a && c[1] >= r.top && c[1] <= r.top + o && (n = !0)
                        }
                        if (!n) return
                    }
                    C.isHorizontal() ? (37 !== t && 39 !== t || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), (39 === t && !C.rtl || 37 === t && C.rtl) && C.slideNext(), (37 === t && !C.rtl || 39 === t && C.rtl) && C.slidePrev()) : (38 !== t && 40 !== t || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 40 === t && C.slideNext(), 38 === t && C.slidePrev()), C.emit("onKeyPress", C, t)
                }
            }

            function u(e) {
                var t = 0, n = 0, r = 0, a = 0;
                return "detail" in e && (n = e.detail), "wheelDelta" in e && (n = -e.wheelDelta / 120), "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = n, n = 0), r = 10 * t, a = 10 * n, "deltaY" in e && (a = e.deltaY), "deltaX" in e && (r = e.deltaX), (r || a) && e.deltaMode && (1 === e.deltaMode ? (r *= 40, a *= 40) : (r *= 800, a *= 800)), r && !t && (t = r < 1 ? -1 : 1), a && !n && (n = a < 1 ? -1 : 1), {
                    spinX:  t,
                    spinY:  n,
                    pixelX: r,
                    pixelY: a
                }
            }

            function p(e) {
                e.originalEvent && (e = e.originalEvent);
                var t = 0, n = C.rtl ? -1 : 1, r = u(e);
                if (C.params.mousewheelForceToAxis) if (C.isHorizontal()) {
                    if (!(Math.abs(r.pixelX) > Math.abs(r.pixelY))) return;
                    t = r.pixelX * n
                } else {
                    if (!(Math.abs(r.pixelY) > Math.abs(r.pixelX))) return;
                    t = r.pixelY
                } else t = Math.abs(r.pixelX) > Math.abs(r.pixelY) ? -r.pixelX * n : -r.pixelY;
                if (0 !== t) {
                    if (C.params.mousewheelInvert && (t = -t), C.params.freeMode) {
                        var a = C.getWrapperTranslate() + t * C.params.mousewheelSensitivity, o = C.isBeginning,
                            i = C.isEnd;
                        if (a >= C.minTranslate() && (a = C.minTranslate()), a <= C.maxTranslate() && (a = C.maxTranslate()), C.setWrapperTransition(0), C.setWrapperTranslate(a), C.updateProgress(), C.updateActiveIndex(), (!o && C.isBeginning || !i && C.isEnd) && C.updateClasses(), C.params.freeModeSticky ? (clearTimeout(C.mousewheel.timeout), C.mousewheel.timeout = setTimeout(function () {
                            C.slideReset()
                        }, 300)) : C.params.lazyLoading && C.lazy && C.lazy.load(), C.emit("onScroll", C, e), C.params.autoplay && C.params.autoplayDisableOnInteraction && C.stopAutoplay(), 0 === a || a === C.maxTranslate()) return
                    } else {
                        if ((new window.Date).getTime() - C.mousewheel.lastScrollTime > 60) if (t < 0) if (C.isEnd && !C.params.loop || C.animating) {
                            if (C.params.mousewheelReleaseOnEdges) return !0
                        } else C.slideNext(), C.emit("onScroll", C, e); else if (C.isBeginning && !C.params.loop || C.animating) {
                            if (C.params.mousewheelReleaseOnEdges) return !0
                        } else C.slidePrev(), C.emit("onScroll", C, e);
                        C.mousewheel.lastScrollTime = (new window.Date).getTime()
                    }
                    return e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1
                }
            }

            function f(t, n) {
                t = e(t);
                var r, a, o, i = C.rtl ? -1 : 1;
                r = t.attr("data-swiper-parallax") || "0", a = t.attr("data-swiper-parallax-x"), o = t.attr("data-swiper-parallax-y"), a || o ? (a = a || "0", o = o || "0") : C.isHorizontal() ? (a = r, o = "0") : (o = r, a = "0"), a = a.indexOf("%") >= 0 ? parseInt(a, 10) * n * i + "%" : a * n * i + "px", o = o.indexOf("%") >= 0 ? parseInt(o, 10) * n + "%" : o * n + "px", t.transform("translate3d(" + a + ", " + o + ",0px)")
            }

            function m(e) {
                return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e), e
            }

            if (!(this instanceof t)) return new t(a, o);
            var h = {
                direction:                     "horizontal",
                touchEventsTarget:             "container",
                initialSlide:                  0,
                speed:                         300,
                autoplay:                      !1,
                autoplayDisableOnInteraction:  !0,
                autoplayStopOnLast:            !1,
                iOSEdgeSwipeDetection:         !1,
                iOSEdgeSwipeThreshold:         20,
                freeMode:                      !1,
                freeModeMomentum:              !0,
                freeModeMomentumRatio:         1,
                freeModeMomentumBounce:        !0,
                freeModeMomentumBounceRatio:   1,
                freeModeMomentumVelocityRatio: 1,
                freeModeSticky:                !1,
                freeModeMinimumVelocity:       .02,
                autoHeight:                    !1,
                setWrapperSize:                !1,
                virtualTranslate:              !1,
                effect:                        "slide",
                coverflow:                     {rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0},
                flip:                          {slideShadows: !0, limitRotation: !0},
                cube:                          {slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94},
                fade:                          {crossFade: !1},
                parallax:                      !1,
                zoom:                          !1,
                zoomMax:                       3,
                zoomMin:                       1,
                zoomToggle:                    !0,
                scrollbar:                     null,
                scrollbarHide:                 !0,
                scrollbarDraggable:            !1,
                scrollbarSnapOnRelease:        !1,
                keyboardControl:               !1,
                mousewheelControl:             !1,
                mousewheelReleaseOnEdges:      !1,
                mousewheelInvert:              !1,
                mousewheelForceToAxis:         !1,
                mousewheelSensitivity:         1,
                mousewheelEventsTarged:        "container",
                hashnav:                       !1,
                hashnavWatchState:             !1,
                history:                       !1,
                replaceState:                  !1,
                breakpoints:                   void 0,
                spaceBetween:                  0,
                slidesPerView:                 1,
                slidesPerColumn:               1,
                slidesPerColumnFill:           "column",
                slidesPerGroup:                1,
                centeredSlides:                !1,
                slidesOffsetBefore:            0,
                slidesOffsetAfter:             0,
                roundLengths:                  !1,
                touchRatio:                    1,
                touchAngle:                    45,
                simulateTouch:                 !0,
                shortSwipes:                   !0,
                longSwipes:                    !0,
                longSwipesRatio:               .5,
                longSwipesMs:                  300,
                followFinger:                  !0,
                onlyExternal:                  !1,
                threshold:                     0,
                touchMoveStopPropagation:      !0,
                touchReleaseOnEdges:           !1,
                uniqueNavElements:             !0,
                pagination:                    null,
                paginationElement:             "span",
                paginationClickable:           !1,
                paginationHide:                !1,
                paginationBulletRender:        null,
                paginationProgressRender:      null,
                paginationFractionRender:      null,
                paginationCustomRender:        null,
                paginationType:                "bullets",
                resistance:                    !0,
                resistanceRatio:               .85,
                nextButton:                    null,
                prevButton:                    null,
                watchSlidesProgress:           !1,
                watchSlidesVisibility:         !1,
                grabCursor:                    !1,
                preventClicks:                 !0,
                preventClicksPropagation:      !0,
                slideToClickedSlide:           !1,
                lazyLoading:                   !1,
                lazyLoadingInPrevNext:         !1,
                lazyLoadingInPrevNextAmount:   1,
                lazyLoadingOnTransitionStart:  !1,
                preloadImages:                 !0,
                updateOnImagesReady:           !0,
                loop:                          !1,
                loopAdditionalSlides:          0,
                loopedSlides:                  null,
                control:                       void 0,
                controlInverse:                !1,
                controlBy:                     "slide",
                normalizeSlideIndex:           !0,
                allowSwipeToPrev:              !0,
                allowSwipeToNext:              !0,
                swipeHandler:                  null,
                noSwiping:                     !0,
                noSwipingClass:                "swiper-no-swiping",
                passiveListeners:              !0,
                containerModifierClass:        "swiper-container-",
                slideClass:                    "swiper-slide",
                slideActiveClass:              "swiper-slide-active",
                slideDuplicateActiveClass:     "swiper-slide-duplicate-active",
                slideVisibleClass:             "swiper-slide-visible",
                slideDuplicateClass:           "swiper-slide-duplicate",
                slideNextClass:                "swiper-slide-next",
                slideDuplicateNextClass:       "swiper-slide-duplicate-next",
                slidePrevClass:                "swiper-slide-prev",
                slideDuplicatePrevClass:       "swiper-slide-duplicate-prev",
                wrapperClass:                  "swiper-wrapper",
                bulletClass:                   "swiper-pagination-bullet",
                bulletActiveClass:             "swiper-pagination-bullet-active",
                buttonDisabledClass:           "swiper-button-disabled",
                paginationCurrentClass:        "swiper-pagination-current",
                paginationTotalClass:          "swiper-pagination-total",
                paginationHiddenClass:         "swiper-pagination-hidden",
                paginationProgressbarClass:    "swiper-pagination-progressbar",
                paginationClickableClass:      "swiper-pagination-clickable",
                paginationModifierClass:       "swiper-pagination-",
                lazyLoadingClass:              "swiper-lazy",
                lazyStatusLoadingClass:        "swiper-lazy-loading",
                lazyStatusLoadedClass:         "swiper-lazy-loaded",
                lazyPreloaderClass:            "swiper-lazy-preloader",
                notificationClass:             "swiper-notification",
                preloaderClass:                "preloader",
                zoomContainerClass:            "swiper-zoom-container",
                observer:                      !1,
                observeParents:                !1,
                a11y:                          !1,
                prevSlideMessage:              "Previous slide",
                nextSlideMessage:              "Next slide",
                firstSlideMessage:             "This is the first slide",
                lastSlideMessage:              "This is the last slide",
                paginationBulletMessage:       "Go to slide {{index}}",
                runCallbacksOnInit:            !0
            }, g = o && o.virtualTranslate;
            o = o || {};
            var v = {};
            for (var y in o) if ("object" !== r(o[y]) || null === o[y] || (o[y].nodeType || o[y] === window || o[y] === document || void 0 !== n && o[y] instanceof n || "undefined" != typeof jQuery && o[y] instanceof jQuery)) v[y] = o[y]; else {
                v[y] = {};
                for (var b in o[y]) v[y][b] = o[y][b]
            }
            for (var w in h) if (void 0 === o[w]) o[w] = h[w]; else if ("object" === r(o[w])) for (var S in h[w]) void 0 === o[w][S] && (o[w][S] = h[w][S]);
            var C = this;
            if (C.params = o, C.originalParams = v, C.classNames = [], void 0 !== e && void 0 !== n && (e = n), (void 0 !== e || (e = void 0 === n ? window.Dom7 || window.Zepto || window.jQuery : n)) && (C.$ = e, C.currentBreakpoint = void 0, C.getActiveBreakpoint = function () {
                if (!C.params.breakpoints) return !1;
                var e, t = !1, n = [];
                for (e in C.params.breakpoints) C.params.breakpoints.hasOwnProperty(e) && n.push(e);
                n.sort(function (e, t) {
                    return parseInt(e, 10) > parseInt(t, 10)
                });
                for (var r = 0; r < n.length; r++) (e = n[r]) >= window.innerWidth && !t && (t = e);
                return t || "max"
            }, C.setBreakpoint = function () {
                var e = C.getActiveBreakpoint();
                if (e && C.currentBreakpoint !== e) {
                    var t = e in C.params.breakpoints ? C.params.breakpoints[e] : C.originalParams,
                        n = C.params.loop && t.slidesPerView !== C.params.slidesPerView;
                    for (var r in t) C.params[r] = t[r];
                    C.currentBreakpoint = e, n && C.destroyLoop && C.reLoop(!0)
                }
            }, C.params.breakpoints && C.setBreakpoint(), C.container = e(a), 0 !== C.container.length)) {
                if (C.container.length > 1) {
                    var x = [];
                    return C.container.each(function () {
                        x.push(new t(this, o))
                    }), x
                }
                C.container[0].swiper = C, C.container.data("swiper", C), C.classNames.push(C.params.containerModifierClass + C.params.direction), C.params.freeMode && C.classNames.push(C.params.containerModifierClass + "free-mode"), C.support.flexbox || (C.classNames.push(C.params.containerModifierClass + "no-flexbox"), C.params.slidesPerColumn = 1), C.params.autoHeight && C.classNames.push(C.params.containerModifierClass + "autoheight"), (C.params.parallax || C.params.watchSlidesVisibility) && (C.params.watchSlidesProgress = !0), C.params.touchReleaseOnEdges && (C.params.resistanceRatio = 0), ["cube", "coverflow", "flip"].indexOf(C.params.effect) >= 0 && (C.support.transforms3d ? (C.params.watchSlidesProgress = !0, C.classNames.push(C.params.containerModifierClass + "3d")) : C.params.effect = "slide"), "slide" !== C.params.effect && C.classNames.push(C.params.containerModifierClass + C.params.effect), "cube" === C.params.effect && (C.params.resistanceRatio = 0, C.params.slidesPerView = 1, C.params.slidesPerColumn = 1, C.params.slidesPerGroup = 1, C.params.centeredSlides = !1, C.params.spaceBetween = 0, C.params.virtualTranslate = !0), "fade" !== C.params.effect && "flip" !== C.params.effect || (C.params.slidesPerView = 1, C.params.slidesPerColumn = 1, C.params.slidesPerGroup = 1, C.params.watchSlidesProgress = !0, C.params.spaceBetween = 0, void 0 === g && (C.params.virtualTranslate = !0)), C.params.grabCursor && C.support.touch && (C.params.grabCursor = !1), C.wrapper = C.container.children("." + C.params.wrapperClass), C.params.pagination && (C.paginationContainer = e(C.params.pagination), C.params.uniqueNavElements && "string" == typeof C.params.pagination && C.paginationContainer.length > 1 && 1 === C.container.find(C.params.pagination).length && (C.paginationContainer = C.container.find(C.params.pagination)), "bullets" === C.params.paginationType && C.params.paginationClickable ? C.paginationContainer.addClass(C.params.paginationModifierClass + "clickable") : C.params.paginationClickable = !1, C.paginationContainer.addClass(C.params.paginationModifierClass + C.params.paginationType)), (C.params.nextButton || C.params.prevButton) && (C.params.nextButton && (C.nextButton = e(C.params.nextButton), C.params.uniqueNavElements && "string" == typeof C.params.nextButton && C.nextButton.length > 1 && 1 === C.container.find(C.params.nextButton).length && (C.nextButton = C.container.find(C.params.nextButton))), C.params.prevButton && (C.prevButton = e(C.params.prevButton), C.params.uniqueNavElements && "string" == typeof C.params.prevButton && C.prevButton.length > 1 && 1 === C.container.find(C.params.prevButton).length && (C.prevButton = C.container.find(C.params.prevButton)))), C.isHorizontal = function () {
                    return "horizontal" === C.params.direction
                }, C.rtl = C.isHorizontal() && ("rtl" === C.container[0].dir.toLowerCase() || "rtl" === C.container.css("direction")), C.rtl && C.classNames.push(C.params.containerModifierClass + "rtl"), C.rtl && (C.wrongRTL = "-webkit-box" === C.wrapper.css("display")), C.params.slidesPerColumn > 1 && C.classNames.push(C.params.containerModifierClass + "multirow"), C.device.android && C.classNames.push(C.params.containerModifierClass + "android"), C.container.addClass(C.classNames.join(" ")), C.translate = 0, C.progress = 0, C.velocity = 0, C.lockSwipeToNext = function () {
                    C.params.allowSwipeToNext = !1, !1 === C.params.allowSwipeToPrev && C.params.grabCursor && C.unsetGrabCursor()
                }, C.lockSwipeToPrev = function () {
                    C.params.allowSwipeToPrev = !1, !1 === C.params.allowSwipeToNext && C.params.grabCursor && C.unsetGrabCursor()
                }, C.lockSwipes = function () {
                    C.params.allowSwipeToNext = C.params.allowSwipeToPrev = !1, C.params.grabCursor && C.unsetGrabCursor()
                }, C.unlockSwipeToNext = function () {
                    C.params.allowSwipeToNext = !0, !0 === C.params.allowSwipeToPrev && C.params.grabCursor && C.setGrabCursor()
                }, C.unlockSwipeToPrev = function () {
                    C.params.allowSwipeToPrev = !0, !0 === C.params.allowSwipeToNext && C.params.grabCursor && C.setGrabCursor()
                }, C.unlockSwipes = function () {
                    C.params.allowSwipeToNext = C.params.allowSwipeToPrev = !0, C.params.grabCursor && C.setGrabCursor()
                }, C.setGrabCursor = function (e) {
                    C.container[0].style.cursor = "move", C.container[0].style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", C.container[0].style.cursor = e ? "-moz-grabbin" : "-moz-grab", C.container[0].style.cursor = e ? "grabbing" : "grab"
                }, C.unsetGrabCursor = function () {
                    C.container[0].style.cursor = ""
                }, C.params.grabCursor && C.setGrabCursor(), C.imagesToLoad = [], C.imagesLoaded = 0, C.loadImage = function (e, t, n, r, a, o) {
                    function i() {
                        o && o()
                    }

                    var s;
                    e.complete && a ? i() : t ? (s = new window.Image, s.onload = i, s.onerror = i, r && (s.sizes = r), n && (s.srcset = n), t && (s.src = t)) : i()
                }, C.preloadImages = function () {
                    function e() {
                        void 0 !== C && null !== C && C && (void 0 !== C.imagesLoaded && C.imagesLoaded++, C.imagesLoaded === C.imagesToLoad.length && (C.params.updateOnImagesReady && C.update(), C.emit("onImagesReady", C)))
                    }

                    C.imagesToLoad = C.container.find("img");
                    for (var t = 0; t < C.imagesToLoad.length; t++) C.loadImage(C.imagesToLoad[t], C.imagesToLoad[t].currentSrc || C.imagesToLoad[t].getAttribute("src"), C.imagesToLoad[t].srcset || C.imagesToLoad[t].getAttribute("srcset"), C.imagesToLoad[t].sizes || C.imagesToLoad[t].getAttribute("sizes"), !0, e)
                }, C.autoplayTimeoutId = void 0, C.autoplaying = !1, C.autoplayPaused = !1, C.startAutoplay = function () {
                    return void 0 === C.autoplayTimeoutId && (!!C.params.autoplay && (!C.autoplaying && (C.autoplaying = !0, C.emit("onAutoplayStart", C), void s())))
                }, C.stopAutoplay = function (e) {
                    C.autoplayTimeoutId && (C.autoplayTimeoutId && clearTimeout(C.autoplayTimeoutId), C.autoplaying = !1, C.autoplayTimeoutId = void 0, C.emit("onAutoplayStop", C))
                }, C.pauseAutoplay = function (e) {
                    C.autoplayPaused || (C.autoplayTimeoutId && clearTimeout(C.autoplayTimeoutId), C.autoplayPaused = !0, 0 === e ? (C.autoplayPaused = !1, s()) : C.wrapper.transitionEnd(function () {
                        C && (C.autoplayPaused = !1, C.autoplaying ? s() : C.stopAutoplay())
                    }))
                }, C.minTranslate = function () {
                    return -C.snapGrid[0]
                }, C.maxTranslate = function () {
                    return -C.snapGrid[C.snapGrid.length - 1]
                }, C.updateAutoHeight = function () {
                    var e, t = [], n = 0;
                    if ("auto" !== C.params.slidesPerView && C.params.slidesPerView > 1) for (e = 0; e < Math.ceil(C.params.slidesPerView); e++) {
                        var r = C.activeIndex + e;
                        if (r > C.slides.length) break;
                        t.push(C.slides.eq(r)[0])
                    } else t.push(C.slides.eq(C.activeIndex)[0]);
                    for (e = 0; e < t.length; e++) if (void 0 !== t[e]) {
                        var a = t[e].offsetHeight;
                        n = a > n ? a : n
                    }
                    n && C.wrapper.css("height", n + "px")
                }, C.updateContainerSize = function () {
                    var e, t;
                    e = void 0 !== C.params.width ? C.params.width : C.container[0].clientWidth, t = void 0 !== C.params.height ? C.params.height : C.container[0].clientHeight, 0 === e && C.isHorizontal() || 0 === t && !C.isHorizontal() || (e = e - parseInt(C.container.css("padding-left"), 10) - parseInt(C.container.css("padding-right"), 10), t = t - parseInt(C.container.css("padding-top"), 10) - parseInt(C.container.css("padding-bottom"), 10), C.width = e, C.height = t, C.size = C.isHorizontal() ? C.width : C.height)
                }, C.updateSlidesSize = function () {
                    C.slides = C.wrapper.children("." + C.params.slideClass), C.snapGrid = [], C.slidesGrid = [], C.slidesSizesGrid = [];
                    var e, t = C.params.spaceBetween, n = -C.params.slidesOffsetBefore, r = 0, a = 0;
                    if (void 0 !== C.size) {
                        "string" == typeof t && t.indexOf("%") >= 0 && (t = parseFloat(t.replace("%", "")) / 100 * C.size), C.virtualSize = -t, C.rtl ? C.slides.css({
                            marginLeft: "",
                            marginTop:  ""
                        }) : C.slides.css({marginRight: "", marginBottom: ""});
                        var o;
                        C.params.slidesPerColumn > 1 && (o = Math.floor(C.slides.length / C.params.slidesPerColumn) === C.slides.length / C.params.slidesPerColumn ? C.slides.length : Math.ceil(C.slides.length / C.params.slidesPerColumn) * C.params.slidesPerColumn, "auto" !== C.params.slidesPerView && "row" === C.params.slidesPerColumnFill && (o = Math.max(o, C.params.slidesPerView * C.params.slidesPerColumn)));
                        var s, l = C.params.slidesPerColumn, c = o / l,
                            d = c - (C.params.slidesPerColumn * c - C.slides.length);
                        for (e = 0; e < C.slides.length; e++) {
                            s = 0;
                            var u = C.slides.eq(e);
                            if (C.params.slidesPerColumn > 1) {
                                var p, f, m;
                                "column" === C.params.slidesPerColumnFill ? (f = Math.floor(e / l), m = e - f * l, (f > d || f === d && m === l - 1) && ++m >= l && (m = 0, f++), p = f + m * o / l, u.css({
                                    "-webkit-box-ordinal-group": p,
                                    "-moz-box-ordinal-group":    p,
                                    "-ms-flex-order":            p,
                                    "-webkit-order":             p,
                                    order:                       p
                                })) : (m = Math.floor(e / c), f = e - m * c), u.css("margin-" + (C.isHorizontal() ? "top" : "left"), 0 !== m && C.params.spaceBetween && C.params.spaceBetween + "px").attr("data-swiper-column", f).attr("data-swiper-row", m)
                            }
                            "none" !== u.css("display") && ("auto" === C.params.slidesPerView ? (s = C.isHorizontal() ? u.outerWidth(!0) : u.outerHeight(!0), C.params.roundLengths && (s = i(s))) : (s = (C.size - (C.params.slidesPerView - 1) * t) / C.params.slidesPerView, C.params.roundLengths && (s = i(s)), C.isHorizontal() ? C.slides[e].style.width = s + "px" : C.slides[e].style.height = s + "px"), C.slides[e].swiperSlideSize = s, C.slidesSizesGrid.push(s), C.params.centeredSlides ? (n = n + s / 2 + r / 2 + t, 0 === r && 0 !== e && (n = n - C.size / 2 - t), 0 === e && (n = n - C.size / 2 - t), Math.abs(n) < .001 && (n = 0), a % C.params.slidesPerGroup == 0 && C.snapGrid.push(n), C.slidesGrid.push(n)) : (a % C.params.slidesPerGroup == 0 && C.snapGrid.push(n), C.slidesGrid.push(n), n = n + s + t), C.virtualSize += s + t, r = s, a++)
                        }
                        C.virtualSize = Math.max(C.virtualSize, C.size) + C.params.slidesOffsetAfter;
                        var h;
                        if (C.rtl && C.wrongRTL && ("slide" === C.params.effect || "coverflow" === C.params.effect) && C.wrapper.css({width: C.virtualSize + C.params.spaceBetween + "px"}), C.support.flexbox && !C.params.setWrapperSize || (C.isHorizontal() ? C.wrapper.css({width: C.virtualSize + C.params.spaceBetween + "px"}) : C.wrapper.css({height: C.virtualSize + C.params.spaceBetween + "px"})), C.params.slidesPerColumn > 1 && (C.virtualSize = (s + C.params.spaceBetween) * o, C.virtualSize = Math.ceil(C.virtualSize / C.params.slidesPerColumn) - C.params.spaceBetween, C.isHorizontal() ? C.wrapper.css({width: C.virtualSize + C.params.spaceBetween + "px"}) : C.wrapper.css({height: C.virtualSize + C.params.spaceBetween + "px"}), C.params.centeredSlides)) {
                            for (h = [], e = 0; e < C.snapGrid.length; e++) C.snapGrid[e] < C.virtualSize + C.snapGrid[0] && h.push(C.snapGrid[e]);
                            C.snapGrid = h
                        }
                        if (!C.params.centeredSlides) {
                            for (h = [], e = 0; e < C.snapGrid.length; e++) C.snapGrid[e] <= C.virtualSize - C.size && h.push(C.snapGrid[e]);
                            C.snapGrid = h, Math.floor(C.virtualSize - C.size) - Math.floor(C.snapGrid[C.snapGrid.length - 1]) > 1 && C.snapGrid.push(C.virtualSize - C.size)
                        }
                        0 === C.snapGrid.length && (C.snapGrid = [0]), 0 !== C.params.spaceBetween && (C.isHorizontal() ? C.rtl ? C.slides.css({marginLeft: t + "px"}) : C.slides.css({marginRight: t + "px"}) : C.slides.css({marginBottom: t + "px"})), C.params.watchSlidesProgress && C.updateSlidesOffset()
                    }
                }, C.updateSlidesOffset = function () {
                    for (var e = 0; e < C.slides.length; e++) C.slides[e].swiperSlideOffset = C.isHorizontal() ? C.slides[e].offsetLeft : C.slides[e].offsetTop
                }, C.currentSlidesPerView = function () {
                    var e, t, n = 1;
                    if (C.params.centeredSlides) {
                        var r, a = C.slides[C.activeIndex].swiperSlideSize;
                        for (e = C.activeIndex + 1; e < C.slides.length; e++) C.slides[e] && !r && (a += C.slides[e].swiperSlideSize, n++, a > C.size && (r = !0));
                        for (t = C.activeIndex - 1; t >= 0; t--) C.slides[t] && !r && (a += C.slides[t].swiperSlideSize, n++, a > C.size && (r = !0))
                    } else for (e = C.activeIndex + 1; e < C.slides.length; e++) C.slidesGrid[e] - C.slidesGrid[C.activeIndex] < C.size && n++;
                    return n
                }, C.updateSlidesProgress = function (e) {
                    if (void 0 === e && (e = C.translate || 0), 0 !== C.slides.length) {
                        void 0 === C.slides[0].swiperSlideOffset && C.updateSlidesOffset();
                        var t = -e;
                        C.rtl && (t = e), C.slides.removeClass(C.params.slideVisibleClass);
                        for (var n = 0; n < C.slides.length; n++) {
                            var r = C.slides[n],
                                a = (t + (C.params.centeredSlides ? C.minTranslate() : 0) - r.swiperSlideOffset) / (r.swiperSlideSize + C.params.spaceBetween);
                            if (C.params.watchSlidesVisibility) {
                                var o = -(t - r.swiperSlideOffset), i = o + C.slidesSizesGrid[n];
                                (o >= 0 && o < C.size || i > 0 && i <= C.size || o <= 0 && i >= C.size) && C.slides.eq(n).addClass(C.params.slideVisibleClass)
                            }
                            r.progress = C.rtl ? -a : a
                        }
                    }
                }, C.updateProgress = function (e) {
                    void 0 === e && (e = C.translate || 0);
                    var t = C.maxTranslate() - C.minTranslate(), n = C.isBeginning, r = C.isEnd;
                    0 === t ? (C.progress = 0, C.isBeginning = C.isEnd = !0) : (C.progress = (e - C.minTranslate()) / t, C.isBeginning = C.progress <= 0, C.isEnd = C.progress >= 1), C.isBeginning && !n && C.emit("onReachBeginning", C), C.isEnd && !r && C.emit("onReachEnd", C), C.params.watchSlidesProgress && C.updateSlidesProgress(e), C.emit("onProgress", C, C.progress)
                }, C.updateActiveIndex = function () {
                    var e, t, n, r = C.rtl ? C.translate : -C.translate;
                    for (t = 0; t < C.slidesGrid.length; t++) void 0 !== C.slidesGrid[t + 1] ? r >= C.slidesGrid[t] && r < C.slidesGrid[t + 1] - (C.slidesGrid[t + 1] - C.slidesGrid[t]) / 2 ? e = t : r >= C.slidesGrid[t] && r < C.slidesGrid[t + 1] && (e = t + 1) : r >= C.slidesGrid[t] && (e = t);
                    C.params.normalizeSlideIndex && (e < 0 || void 0 === e) && (e = 0), n = Math.floor(e / C.params.slidesPerGroup), n >= C.snapGrid.length && (n = C.snapGrid.length - 1), e !== C.activeIndex && (C.snapIndex = n, C.previousIndex = C.activeIndex, C.activeIndex = e, C.updateClasses(), C.updateRealIndex())
                }, C.updateRealIndex = function () {
                    C.realIndex = parseInt(C.slides.eq(C.activeIndex).attr("data-swiper-slide-index") || C.activeIndex, 10)
                }, C.updateClasses = function () {
                    C.slides.removeClass(C.params.slideActiveClass + " " + C.params.slideNextClass + " " + C.params.slidePrevClass + " " + C.params.slideDuplicateActiveClass + " " + C.params.slideDuplicateNextClass + " " + C.params.slideDuplicatePrevClass);
                    var t = C.slides.eq(C.activeIndex);
                    t.addClass(C.params.slideActiveClass), o.loop && (t.hasClass(C.params.slideDuplicateClass) ? C.wrapper.children("." + C.params.slideClass + ":not(." + C.params.slideDuplicateClass + ')[data-swiper-slide-index="' + C.realIndex + '"]').addClass(C.params.slideDuplicateActiveClass) : C.wrapper.children("." + C.params.slideClass + "." + C.params.slideDuplicateClass + '[data-swiper-slide-index="' + C.realIndex + '"]').addClass(C.params.slideDuplicateActiveClass));
                    var n = t.next("." + C.params.slideClass).addClass(C.params.slideNextClass);
                    C.params.loop && 0 === n.length && (n = C.slides.eq(0), n.addClass(C.params.slideNextClass));
                    var r = t.prev("." + C.params.slideClass).addClass(C.params.slidePrevClass);
                    if (C.params.loop && 0 === r.length && (r = C.slides.eq(-1), r.addClass(C.params.slidePrevClass)), o.loop && (n.hasClass(C.params.slideDuplicateClass) ? C.wrapper.children("." + C.params.slideClass + ":not(." + C.params.slideDuplicateClass + ')[data-swiper-slide-index="' + n.attr("data-swiper-slide-index") + '"]').addClass(C.params.slideDuplicateNextClass) : C.wrapper.children("." + C.params.slideClass + "." + C.params.slideDuplicateClass + '[data-swiper-slide-index="' + n.attr("data-swiper-slide-index") + '"]').addClass(C.params.slideDuplicateNextClass), r.hasClass(C.params.slideDuplicateClass) ? C.wrapper.children("." + C.params.slideClass + ":not(." + C.params.slideDuplicateClass + ')[data-swiper-slide-index="' + r.attr("data-swiper-slide-index") + '"]').addClass(C.params.slideDuplicatePrevClass) : C.wrapper.children("." + C.params.slideClass + "." + C.params.slideDuplicateClass + '[data-swiper-slide-index="' + r.attr("data-swiper-slide-index") + '"]').addClass(C.params.slideDuplicatePrevClass)), C.paginationContainer && C.paginationContainer.length > 0) {
                        var a,
                            i = C.params.loop ? Math.ceil((C.slides.length - 2 * C.loopedSlides) / C.params.slidesPerGroup) : C.snapGrid.length;
                        if (C.params.loop ? (a = Math.ceil((C.activeIndex - C.loopedSlides) / C.params.slidesPerGroup), a > C.slides.length - 1 - 2 * C.loopedSlides && (a -= C.slides.length - 2 * C.loopedSlides), a > i - 1 && (a -= i), a < 0 && "bullets" !== C.params.paginationType && (a = i + a)) : a = void 0 !== C.snapIndex ? C.snapIndex : C.activeIndex || 0, "bullets" === C.params.paginationType && C.bullets && C.bullets.length > 0 && (C.bullets.removeClass(C.params.bulletActiveClass), C.paginationContainer.length > 1 ? C.bullets.each(function () {
                            e(this).index() === a && e(this).addClass(C.params.bulletActiveClass)
                        }) : C.bullets.eq(a).addClass(C.params.bulletActiveClass)), "fraction" === C.params.paginationType && (C.paginationContainer.find("." + C.params.paginationCurrentClass).text(a + 1), C.paginationContainer.find("." + C.params.paginationTotalClass).text(i)), "progress" === C.params.paginationType) {
                            var s = (a + 1) / i, l = s, c = 1;
                            C.isHorizontal() || (c = s, l = 1), C.paginationContainer.find("." + C.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + l + ") scaleY(" + c + ")").transition(C.params.speed)
                        }
                        "custom" === C.params.paginationType && C.params.paginationCustomRender && (C.paginationContainer.html(C.params.paginationCustomRender(C, a + 1, i)), C.emit("onPaginationRendered", C, C.paginationContainer[0]))
                    }
                    C.params.loop || (C.params.prevButton && C.prevButton && C.prevButton.length > 0 && (C.isBeginning ? (C.prevButton.addClass(C.params.buttonDisabledClass), C.params.a11y && C.a11y && C.a11y.disable(C.prevButton)) : (C.prevButton.removeClass(C.params.buttonDisabledClass), C.params.a11y && C.a11y && C.a11y.enable(C.prevButton))), C.params.nextButton && C.nextButton && C.nextButton.length > 0 && (C.isEnd ? (C.nextButton.addClass(C.params.buttonDisabledClass), C.params.a11y && C.a11y && C.a11y.disable(C.nextButton)) : (C.nextButton.removeClass(C.params.buttonDisabledClass), C.params.a11y && C.a11y && C.a11y.enable(C.nextButton))))
                }, C.updatePagination = function () {
                    if (C.params.pagination && C.paginationContainer && C.paginationContainer.length > 0) {
                        var e = "";
                        if ("bullets" === C.params.paginationType) {
                            for (var t = C.params.loop ? Math.ceil((C.slides.length - 2 * C.loopedSlides) / C.params.slidesPerGroup) : C.snapGrid.length, n = 0; n < t; n++) C.params.paginationBulletRender ? e += C.params.paginationBulletRender(C, n, C.params.bulletClass) : e += "<" + C.params.paginationElement + ' class="' + C.params.bulletClass + '"></' + C.params.paginationElement + ">";
                            C.paginationContainer.html(e), C.bullets = C.paginationContainer.find("." + C.params.bulletClass), C.params.paginationClickable && C.params.a11y && C.a11y && C.a11y.initPagination()
                        }
                        "fraction" === C.params.paginationType && (e = C.params.paginationFractionRender ? C.params.paginationFractionRender(C, C.params.paginationCurrentClass, C.params.paginationTotalClass) : '<span class="' + C.params.paginationCurrentClass + '"></span> / <span class="' + C.params.paginationTotalClass + '"></span>', C.paginationContainer.html(e)), "progress" === C.params.paginationType && (e = C.params.paginationProgressRender ? C.params.paginationProgressRender(C, C.params.paginationProgressbarClass) : '<span class="' + C.params.paginationProgressbarClass + '"></span>', C.paginationContainer.html(e)), "custom" !== C.params.paginationType && C.emit("onPaginationRendered", C, C.paginationContainer[0])
                    }
                }, C.update = function (e) {
                    function t() {
                        C.rtl, C.translate;
                        n = Math.min(Math.max(C.translate, C.maxTranslate()), C.minTranslate()), C.setWrapperTranslate(n), C.updateActiveIndex(), C.updateClasses()
                    }

                    if (C) {
                        C.updateContainerSize(), C.updateSlidesSize(), C.updateProgress(), C.updatePagination(), C.updateClasses(), C.params.scrollbar && C.scrollbar && C.scrollbar.set();
                        var n;
                        if (e) {
                            C.controller && C.controller.spline && (C.controller.spline = void 0), C.params.freeMode ? (t(), C.params.autoHeight && C.updateAutoHeight()) : (("auto" === C.params.slidesPerView || C.params.slidesPerView > 1) && C.isEnd && !C.params.centeredSlides ? C.slideTo(C.slides.length - 1, 0, !1, !0) : C.slideTo(C.activeIndex, 0, !1, !0)) || t()
                        } else C.params.autoHeight && C.updateAutoHeight()
                    }
                }, C.onResize = function (e) {
                    C.params.onBeforeResize && C.params.onBeforeResize(C), C.params.breakpoints && C.setBreakpoint();
                    var t = C.params.allowSwipeToPrev, n = C.params.allowSwipeToNext;
                    C.params.allowSwipeToPrev = C.params.allowSwipeToNext = !0, C.updateContainerSize(), C.updateSlidesSize(), ("auto" === C.params.slidesPerView || C.params.freeMode || e) && C.updatePagination(), C.params.scrollbar && C.scrollbar && C.scrollbar.set(), C.controller && C.controller.spline && (C.controller.spline = void 0);
                    var r = !1;
                    if (C.params.freeMode) {
                        var a = Math.min(Math.max(C.translate, C.maxTranslate()), C.minTranslate());
                        C.setWrapperTranslate(a), C.updateActiveIndex(), C.updateClasses(), C.params.autoHeight && C.updateAutoHeight()
                    } else C.updateClasses(), r = ("auto" === C.params.slidesPerView || C.params.slidesPerView > 1) && C.isEnd && !C.params.centeredSlides ? C.slideTo(C.slides.length - 1, 0, !1, !0) : C.slideTo(C.activeIndex, 0, !1, !0);
                    C.params.lazyLoading && !r && C.lazy && C.lazy.load(), C.params.allowSwipeToPrev = t, C.params.allowSwipeToNext = n, C.params.onAfterResize && C.params.onAfterResize(C)
                }, C.touchEventsDesktop = {
                    start: "mousedown",
                    move:  "mousemove",
                    end:   "mouseup"
                }, window.navigator.pointerEnabled ? C.touchEventsDesktop = {
                    start: "pointerdown",
                    move:  "pointermove",
                    end:   "pointerup"
                } : window.navigator.msPointerEnabled && (C.touchEventsDesktop = {
                    start: "MSPointerDown",
                    move:  "MSPointerMove",
                    end:   "MSPointerUp"
                }), C.touchEvents = {
                    start: C.support.touch || !C.params.simulateTouch ? "touchstart" : C.touchEventsDesktop.start,
                    move:  C.support.touch || !C.params.simulateTouch ? "touchmove" : C.touchEventsDesktop.move,
                    end:   C.support.touch || !C.params.simulateTouch ? "touchend" : C.touchEventsDesktop.end
                }, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === C.params.touchEventsTarget ? C.container : C.wrapper).addClass("swiper-wp8-" + C.params.direction), C.initEvents = function (e) {
                    var t = e ? "off" : "on", n = e ? "removeEventListener" : "addEventListener",
                        r = "container" === C.params.touchEventsTarget ? C.container[0] : C.wrapper[0],
                        a = C.support.touch ? r : document, i = !!C.params.nested;
                    if (C.browser.ie) r[n](C.touchEvents.start, C.onTouchStart, !1), a[n](C.touchEvents.move, C.onTouchMove, i), a[n](C.touchEvents.end, C.onTouchEnd, !1); else {
                        if (C.support.touch) {
                            var s = !("touchstart" !== C.touchEvents.start || !C.support.passiveListener || !C.params.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            r[n](C.touchEvents.start, C.onTouchStart, s), r[n](C.touchEvents.move, C.onTouchMove, i), r[n](C.touchEvents.end, C.onTouchEnd, s)
                        }
                        (o.simulateTouch && !C.device.ios && !C.device.android || o.simulateTouch && !C.support.touch && C.device.ios) && (r[n]("mousedown", C.onTouchStart, !1), document[n]("mousemove", C.onTouchMove, i), document[n]("mouseup", C.onTouchEnd, !1))
                    }
                    window[n]("resize", C.onResize), C.params.nextButton && C.nextButton && C.nextButton.length > 0 && (C.nextButton[t]("click", C.onClickNext), C.params.a11y && C.a11y && C.nextButton[t]("keydown", C.a11y.onEnterKey)), C.params.prevButton && C.prevButton && C.prevButton.length > 0 && (C.prevButton[t]("click", C.onClickPrev), C.params.a11y && C.a11y && C.prevButton[t]("keydown", C.a11y.onEnterKey)), C.params.pagination && C.params.paginationClickable && (C.paginationContainer[t]("click", "." + C.params.bulletClass, C.onClickIndex), C.params.a11y && C.a11y && C.paginationContainer[t]("keydown", "." + C.params.bulletClass, C.a11y.onEnterKey)), (C.params.preventClicks || C.params.preventClicksPropagation) && r[n]("click", C.preventClicks, !0)
                }, C.attachEvents = function () {
                    C.initEvents()
                }, C.detachEvents = function () {
                    C.initEvents(!0)
                }, C.allowClick = !0, C.preventClicks = function (e) {
                    C.allowClick || (C.params.preventClicks && e.preventDefault(), C.params.preventClicksPropagation && C.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
                }, C.onClickNext = function (e) {
                    e.preventDefault(), C.isEnd && !C.params.loop || C.slideNext()
                }, C.onClickPrev = function (e) {
                    e.preventDefault(), C.isBeginning && !C.params.loop || C.slidePrev()
                }, C.onClickIndex = function (t) {
                    t.preventDefault();
                    var n = e(this).index() * C.params.slidesPerGroup;
                    C.params.loop && (n += C.loopedSlides), C.slideTo(n)
                }, C.updateClickedSlide = function (t) {
                    var n = l(t, "." + C.params.slideClass), r = !1;
                    if (n) for (var a = 0; a < C.slides.length; a++) C.slides[a] === n && (r = !0);
                    if (!n || !r) return C.clickedSlide = void 0, void(C.clickedIndex = void 0);
                    if (C.clickedSlide = n, C.clickedIndex = e(n).index(), C.params.slideToClickedSlide && void 0 !== C.clickedIndex && C.clickedIndex !== C.activeIndex) {
                        var o, i = C.clickedIndex,
                            s = "auto" === C.params.slidesPerView ? C.currentSlidesPerView() : C.params.slidesPerView;
                        if (C.params.loop) {
                            if (C.animating) return;
                            o = parseInt(e(C.clickedSlide).attr("data-swiper-slide-index"), 10), C.params.centeredSlides ? i < C.loopedSlides - s / 2 || i > C.slides.length - C.loopedSlides + s / 2 ? (C.fixLoop(), i = C.wrapper.children("." + C.params.slideClass + '[data-swiper-slide-index="' + o + '"]:not(.' + C.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function () {
                                C.slideTo(i)
                            }, 0)) : C.slideTo(i) : i > C.slides.length - s ? (C.fixLoop(), i = C.wrapper.children("." + C.params.slideClass + '[data-swiper-slide-index="' + o + '"]:not(.' + C.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function () {
                                C.slideTo(i)
                            }, 0)) : C.slideTo(i)
                        } else C.slideTo(i)
                    }
                };
                var E, k, T, _, L, A, M, z, P, O, I = "input, select, textarea, button, video", q = Date.now(), D = [];
                C.animating = !1, C.touches = {startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0};
                var B, H;
                C.onTouchStart = function (t) {
                    if (t.originalEvent && (t = t.originalEvent), (B = "touchstart" === t.type) || !("which" in t) || 3 !== t.which) {
                        if (C.params.noSwiping && l(t, "." + C.params.noSwipingClass)) return void(C.allowClick = !0);
                        if (!C.params.swipeHandler || l(t, C.params.swipeHandler)) {
                            var n = C.touches.currentX = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX,
                                r = C.touches.currentY = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY;
                            if (!(C.device.ios && C.params.iOSEdgeSwipeDetection && n <= C.params.iOSEdgeSwipeThreshold)) {
                                if (E = !0, k = !1, T = !0, L = void 0, H = void 0, C.touches.startX = n, C.touches.startY = r, _ = Date.now(), C.allowClick = !0, C.updateContainerSize(), C.swipeDirection = void 0, C.params.threshold > 0 && (z = !1), "touchstart" !== t.type) {
                                    var a = !0;
                                    e(t.target).is(I) && (a = !1), document.activeElement && e(document.activeElement).is(I) && document.activeElement.blur(), a && t.preventDefault()
                                }
                                C.emit("onTouchStart", C, t)
                            }
                        }
                    }
                }, C.onTouchMove = function (t) {
                    if (t.originalEvent && (t = t.originalEvent), !B || "mousemove" !== t.type) {
                        if (t.preventedByNestedSwiper) return C.touches.startX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, void(C.touches.startY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY);
                        if (C.params.onlyExternal) return C.allowClick = !1, void(E && (C.touches.startX = C.touches.currentX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, C.touches.startY = C.touches.currentY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, _ = Date.now()));
                        if (B && C.params.touchReleaseOnEdges && !C.params.loop) if (C.isHorizontal()) {
                            if (C.touches.currentX < C.touches.startX && C.translate <= C.maxTranslate() || C.touches.currentX > C.touches.startX && C.translate >= C.minTranslate()) return
                        } else if (C.touches.currentY < C.touches.startY && C.translate <= C.maxTranslate() || C.touches.currentY > C.touches.startY && C.translate >= C.minTranslate()) return;
                        if (B && document.activeElement && t.target === document.activeElement && e(t.target).is(I)) return k = !0, void(C.allowClick = !1);
                        if (T && C.emit("onTouchMove", C, t), !(t.targetTouches && t.targetTouches.length > 1)) {
                            if (C.touches.currentX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, C.touches.currentY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, void 0 === L) {
                                var n;
                                C.isHorizontal() && C.touches.currentY === C.touches.startY || !C.isHorizontal() && C.touches.currentX === C.touches.startX ? L = !1 : (n = 180 * Math.atan2(Math.abs(C.touches.currentY - C.touches.startY), Math.abs(C.touches.currentX - C.touches.startX)) / Math.PI, L = C.isHorizontal() ? n > C.params.touchAngle : 90 - n > C.params.touchAngle)
                            }
                            if (L && C.emit("onTouchMoveOpposite", C, t), void 0 === H && (C.touches.currentX === C.touches.startX && C.touches.currentY === C.touches.startY || (H = !0)), E) {
                                if (L) return void(E = !1);
                                if (H) {
                                    C.allowClick = !1, C.emit("onSliderMove", C, t), t.preventDefault(), C.params.touchMoveStopPropagation && !C.params.nested && t.stopPropagation(), k || (o.loop && C.fixLoop(), M = C.getWrapperTranslate(), C.setWrapperTransition(0), C.animating && C.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), C.params.autoplay && C.autoplaying && (C.params.autoplayDisableOnInteraction ? C.stopAutoplay() : C.pauseAutoplay()), O = !1, !C.params.grabCursor || !0 !== C.params.allowSwipeToNext && !0 !== C.params.allowSwipeToPrev || C.setGrabCursor(!0)), k = !0;
                                    var r = C.touches.diff = C.isHorizontal() ? C.touches.currentX - C.touches.startX : C.touches.currentY - C.touches.startY;
                                    r *= C.params.touchRatio, C.rtl && (r = -r), C.swipeDirection = r > 0 ? "prev" : "next", A = r + M;
                                    var a = !0;
                                    if (r > 0 && A > C.minTranslate() ? (a = !1, C.params.resistance && (A = C.minTranslate() - 1 + Math.pow(-C.minTranslate() + M + r, C.params.resistanceRatio))) : r < 0 && A < C.maxTranslate() && (a = !1, C.params.resistance && (A = C.maxTranslate() + 1 - Math.pow(C.maxTranslate() - M - r, C.params.resistanceRatio))), a && (t.preventedByNestedSwiper = !0), !C.params.allowSwipeToNext && "next" === C.swipeDirection && A < M && (A = M), !C.params.allowSwipeToPrev && "prev" === C.swipeDirection && A > M && (A = M), C.params.threshold > 0) {
                                        if (!(Math.abs(r) > C.params.threshold || z)) return void(A = M);
                                        if (!z) return z = !0, C.touches.startX = C.touches.currentX, C.touches.startY = C.touches.currentY, A = M, void(C.touches.diff = C.isHorizontal() ? C.touches.currentX - C.touches.startX : C.touches.currentY - C.touches.startY)
                                    }
                                    C.params.followFinger && ((C.params.freeMode || C.params.watchSlidesProgress) && C.updateActiveIndex(), C.params.freeMode && (0 === D.length && D.push({
                                        position: C.touches[C.isHorizontal() ? "startX" : "startY"],
                                        time:     _
                                    }), D.push({
                                        position: C.touches[C.isHorizontal() ? "currentX" : "currentY"],
                                        time:     (new window.Date).getTime()
                                    })), C.updateProgress(A), C.setWrapperTranslate(A))
                                }
                            }
                        }
                    }
                }, C.onTouchEnd = function (t) {
                    if (t.originalEvent && (t = t.originalEvent), T && C.emit("onTouchEnd", C, t), T = !1, E) {
                        C.params.grabCursor && k && E && (!0 === C.params.allowSwipeToNext || !0 === C.params.allowSwipeToPrev) && C.setGrabCursor(!1);
                        var n = Date.now(), r = n - _;
                        if (C.allowClick && (C.updateClickedSlide(t), C.emit("onTap", C, t), r < 300 && n - q > 300 && (P && clearTimeout(P), P = setTimeout(function () {
                            C && (C.params.paginationHide && C.paginationContainer.length > 0 && !e(t.target).hasClass(C.params.bulletClass) && C.paginationContainer.toggleClass(C.params.paginationHiddenClass), C.emit("onClick", C, t))
                        }, 300)), r < 300 && n - q < 300 && (P && clearTimeout(P), C.emit("onDoubleTap", C, t))), q = Date.now(), setTimeout(function () {
                            C && (C.allowClick = !0)
                        }, 0), !E || !k || !C.swipeDirection || 0 === C.touches.diff || A === M) return void(E = k = !1);
                        E = k = !1;
                        var a;
                        if (a = C.params.followFinger ? C.rtl ? C.translate : -C.translate : -A, C.params.freeMode) {
                            if (a < -C.minTranslate()) return void C.slideTo(C.activeIndex);
                            if (a > -C.maxTranslate()) return void(C.slides.length < C.snapGrid.length ? C.slideTo(C.snapGrid.length - 1) : C.slideTo(C.slides.length - 1));
                            if (C.params.freeModeMomentum) {
                                if (D.length > 1) {
                                    var o = D.pop(), i = D.pop(), s = o.position - i.position, l = o.time - i.time;
                                    C.velocity = s / l, C.velocity = C.velocity / 2, Math.abs(C.velocity) < C.params.freeModeMinimumVelocity && (C.velocity = 0), (l > 150 || (new window.Date).getTime() - o.time > 300) && (C.velocity = 0)
                                } else C.velocity = 0;
                                C.velocity = C.velocity * C.params.freeModeMomentumVelocityRatio, D.length = 0;
                                var c = 1e3 * C.params.freeModeMomentumRatio, d = C.velocity * c, u = C.translate + d;
                                C.rtl && (u = -u);
                                var p, f = !1, m = 20 * Math.abs(C.velocity) * C.params.freeModeMomentumBounceRatio;
                                if (u < C.maxTranslate()) C.params.freeModeMomentumBounce ? (u + C.maxTranslate() < -m && (u = C.maxTranslate() - m), p = C.maxTranslate(), f = !0, O = !0) : u = C.maxTranslate(); else if (u > C.minTranslate()) C.params.freeModeMomentumBounce ? (u - C.minTranslate() > m && (u = C.minTranslate() + m), p = C.minTranslate(), f = !0, O = !0) : u = C.minTranslate(); else if (C.params.freeModeSticky) {
                                    var h, g = 0;
                                    for (g = 0; g < C.snapGrid.length; g += 1) if (C.snapGrid[g] > -u) {
                                        h = g;
                                        break
                                    }
                                    u = Math.abs(C.snapGrid[h] - u) < Math.abs(C.snapGrid[h - 1] - u) || "next" === C.swipeDirection ? C.snapGrid[h] : C.snapGrid[h - 1], C.rtl || (u = -u)
                                }
                                if (0 !== C.velocity) c = C.rtl ? Math.abs((-u - C.translate) / C.velocity) : Math.abs((u - C.translate) / C.velocity); else if (C.params.freeModeSticky) return void C.slideReset();
                                C.params.freeModeMomentumBounce && f ? (C.updateProgress(p), C.setWrapperTransition(c), C.setWrapperTranslate(u), C.onTransitionStart(), C.animating = !0, C.wrapper.transitionEnd(function () {
                                    C && O && (C.emit("onMomentumBounce", C), C.setWrapperTransition(C.params.speed), C.setWrapperTranslate(p), C.wrapper.transitionEnd(function () {
                                        C && C.onTransitionEnd()
                                    }))
                                })) : C.velocity ? (C.updateProgress(u), C.setWrapperTransition(c), C.setWrapperTranslate(u), C.onTransitionStart(), C.animating || (C.animating = !0, C.wrapper.transitionEnd(function () {
                                    C && C.onTransitionEnd()
                                }))) : C.updateProgress(u), C.updateActiveIndex()
                            }
                            return void((!C.params.freeModeMomentum || r >= C.params.longSwipesMs) && (C.updateProgress(), C.updateActiveIndex()))
                        }
                        var v, y = 0, b = C.slidesSizesGrid[0];
                        for (v = 0; v < C.slidesGrid.length; v += C.params.slidesPerGroup) void 0 !== C.slidesGrid[v + C.params.slidesPerGroup] ? a >= C.slidesGrid[v] && a < C.slidesGrid[v + C.params.slidesPerGroup] && (y = v, b = C.slidesGrid[v + C.params.slidesPerGroup] - C.slidesGrid[v]) : a >= C.slidesGrid[v] && (y = v, b = C.slidesGrid[C.slidesGrid.length - 1] - C.slidesGrid[C.slidesGrid.length - 2]);
                        var w = (a - C.slidesGrid[y]) / b;
                        if (r > C.params.longSwipesMs) {
                            if (!C.params.longSwipes) return void C.slideTo(C.activeIndex);
                            "next" === C.swipeDirection && (w >= C.params.longSwipesRatio ? C.slideTo(y + C.params.slidesPerGroup) : C.slideTo(y)), "prev" === C.swipeDirection && (w > 1 - C.params.longSwipesRatio ? C.slideTo(y + C.params.slidesPerGroup) : C.slideTo(y))
                        } else {
                            if (!C.params.shortSwipes) return void C.slideTo(C.activeIndex);
                            "next" === C.swipeDirection && C.slideTo(y + C.params.slidesPerGroup), "prev" === C.swipeDirection && C.slideTo(y)
                        }
                    }
                }, C._slideTo = function (e, t) {
                    return C.slideTo(e, t, !0, !0)
                }, C.slideTo = function (e, t, n, r) {
                    void 0 === n && (n = !0), void 0 === e && (e = 0), e < 0 && (e = 0), C.snapIndex = Math.floor(e / C.params.slidesPerGroup), C.snapIndex >= C.snapGrid.length && (C.snapIndex = C.snapGrid.length - 1);
                    var a = -C.snapGrid[C.snapIndex];
                    if (C.params.autoplay && C.autoplaying && (r || !C.params.autoplayDisableOnInteraction ? C.pauseAutoplay(t) : C.stopAutoplay()), C.updateProgress(a), C.params.normalizeSlideIndex) for (var o = 0; o < C.slidesGrid.length; o++) -Math.floor(100 * a) >= Math.floor(100 * C.slidesGrid[o]) && (e = o);
                    return !(!C.params.allowSwipeToNext && a < C.translate && a < C.minTranslate()) && (!(!C.params.allowSwipeToPrev && a > C.translate && a > C.maxTranslate() && (C.activeIndex || 0) !== e) && (void 0 === t && (t = C.params.speed), C.previousIndex = C.activeIndex || 0, C.activeIndex = e, C.updateRealIndex(), C.rtl && -a === C.translate || !C.rtl && a === C.translate ? (C.params.autoHeight && C.updateAutoHeight(), C.updateClasses(), "slide" !== C.params.effect && C.setWrapperTranslate(a), !1) : (C.updateClasses(), C.onTransitionStart(n), 0 === t || C.browser.lteIE9 ? (C.setWrapperTranslate(a), C.setWrapperTransition(0), C.onTransitionEnd(n)) : (C.setWrapperTranslate(a), C.setWrapperTransition(t), C.animating || (C.animating = !0, C.wrapper.transitionEnd(function () {
                        C && C.onTransitionEnd(n)
                    }))), !0)))
                }, C.onTransitionStart = function (e) {
                    void 0 === e && (e = !0), C.params.autoHeight && C.updateAutoHeight(), C.lazy && C.lazy.onTransitionStart(), e && (C.emit("onTransitionStart", C), C.activeIndex !== C.previousIndex && (C.emit("onSlideChangeStart", C), C.activeIndex > C.previousIndex ? C.emit("onSlideNextStart", C) : C.emit("onSlidePrevStart", C)))
                }, C.onTransitionEnd = function (e) {
                    C.animating = !1, C.setWrapperTransition(0), void 0 === e && (e = !0), C.lazy && C.lazy.onTransitionEnd(), e && (C.emit("onTransitionEnd", C), C.activeIndex !== C.previousIndex && (C.emit("onSlideChangeEnd", C), C.activeIndex > C.previousIndex ? C.emit("onSlideNextEnd", C) : C.emit("onSlidePrevEnd", C))), C.params.history && C.history && C.history.setHistory(C.params.history, C.activeIndex), C.params.hashnav && C.hashnav && C.hashnav.setHash()
                }, C.slideNext = function (e, t, n) {
                    if (C.params.loop) {
                        if (C.animating) return !1;
                        C.fixLoop();
                        C.container[0].clientLeft;
                        return C.slideTo(C.activeIndex + C.params.slidesPerGroup, t, e, n)
                    }
                    return C.slideTo(C.activeIndex + C.params.slidesPerGroup, t, e, n)
                }, C._slideNext = function (e) {
                    return C.slideNext(!0, e, !0)
                }, C.slidePrev = function (e, t, n) {
                    if (C.params.loop) {
                        if (C.animating) return !1;
                        C.fixLoop();
                        C.container[0].clientLeft;
                        return C.slideTo(C.activeIndex - 1, t, e, n)
                    }
                    return C.slideTo(C.activeIndex - 1, t, e, n)
                }, C._slidePrev = function (e) {
                    return C.slidePrev(!0, e, !0)
                }, C.slideReset = function (e, t, n) {
                    return C.slideTo(C.activeIndex, t, e)
                }, C.disableTouchControl = function () {
                    return C.params.onlyExternal = !0, !0
                }, C.enableTouchControl = function () {
                    return C.params.onlyExternal = !1, !0
                }, C.setWrapperTransition = function (e, t) {
                    C.wrapper.transition(e), "slide" !== C.params.effect && C.effects[C.params.effect] && C.effects[C.params.effect].setTransition(e), C.params.parallax && C.parallax && C.parallax.setTransition(e), C.params.scrollbar && C.scrollbar && C.scrollbar.setTransition(e), C.params.control && C.controller && C.controller.setTransition(e, t), C.emit("onSetTransition", C, e)
                }, C.setWrapperTranslate = function (e, t, n) {
                    var r = 0, a = 0;
                    C.isHorizontal() ? r = C.rtl ? -e : e : a = e, C.params.roundLengths && (r = i(r), a = i(a)), C.params.virtualTranslate || (C.support.transforms3d ? C.wrapper.transform("translate3d(" + r + "px, " + a + "px, 0px)") : C.wrapper.transform("translate(" + r + "px, " + a + "px)")), C.translate = C.isHorizontal() ? r : a;
                    var o, s = C.maxTranslate() - C.minTranslate();
                    o = 0 === s ? 0 : (e - C.minTranslate()) / s, o !== C.progress && C.updateProgress(e), t && C.updateActiveIndex(), "slide" !== C.params.effect && C.effects[C.params.effect] && C.effects[C.params.effect].setTranslate(C.translate), C.params.parallax && C.parallax && C.parallax.setTranslate(C.translate), C.params.scrollbar && C.scrollbar && C.scrollbar.setTranslate(C.translate), C.params.control && C.controller && C.controller.setTranslate(C.translate, n), C.emit("onSetTranslate", C, C.translate)
                }, C.getTranslate = function (e, t) {
                    var n, r, a, o;
                    return void 0 === t && (t = "x"), C.params.virtualTranslate ? C.rtl ? -C.translate : C.translate : (a = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? (r = a.transform || a.webkitTransform, r.split(",").length > 6 && (r = r.split(", ").map(function (e) {
                        return e.replace(",", ".")
                    }).join(", ")), o = new window.WebKitCSSMatrix("none" === r ? "" : r)) : (o = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), n = o.toString().split(",")), "x" === t && (r = window.WebKitCSSMatrix ? o.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])), "y" === t && (r = window.WebKitCSSMatrix ? o.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])), C.rtl && r && (r = -r), r || 0)
                }, C.getWrapperTranslate = function (e) {
                    return void 0 === e && (e = C.isHorizontal() ? "x" : "y"), C.getTranslate(C.wrapper[0], e)
                }, C.observers = [], C.initObservers = function () {
                    if (C.params.observeParents) for (var e = C.container.parents(), t = 0; t < e.length; t++) c(e[t]);
                    c(C.container[0], {childList: !1}), c(C.wrapper[0], {attributes: !1})
                }, C.disconnectObservers = function () {
                    for (var e = 0; e < C.observers.length; e++) C.observers[e].disconnect();
                    C.observers = []
                }, C.createLoop = function () {
                    C.wrapper.children("." + C.params.slideClass + "." + C.params.slideDuplicateClass).remove();
                    var t = C.wrapper.children("." + C.params.slideClass);
                    "auto" !== C.params.slidesPerView || C.params.loopedSlides || (C.params.loopedSlides = t.length), C.loopedSlides = parseInt(C.params.loopedSlides || C.params.slidesPerView, 10), C.loopedSlides = C.loopedSlides + C.params.loopAdditionalSlides, C.loopedSlides > t.length && (C.loopedSlides = t.length);
                    var n, r = [], a = [];
                    for (t.each(function (n, o) {
                        var i = e(this);
                        n < C.loopedSlides && a.push(o), n < t.length && n >= t.length - C.loopedSlides && r.push(o), i.attr("data-swiper-slide-index", n)
                    }), n = 0; n < a.length; n++) C.wrapper.append(e(a[n].cloneNode(!0)).addClass(C.params.slideDuplicateClass));
                    for (n = r.length - 1; n >= 0; n--) C.wrapper.prepend(e(r[n].cloneNode(!0)).addClass(C.params.slideDuplicateClass))
                }, C.destroyLoop = function () {
                    C.wrapper.children("." + C.params.slideClass + "." + C.params.slideDuplicateClass).remove(), C.slides.removeAttr("data-swiper-slide-index")
                }, C.reLoop = function (e) {
                    var t = C.activeIndex - C.loopedSlides;
                    C.destroyLoop(), C.createLoop(), C.updateSlidesSize(), e && C.slideTo(t + C.loopedSlides, 0, !1)
                }, C.fixLoop = function () {
                    var e;
                    C.activeIndex < C.loopedSlides ? (e = C.slides.length - 3 * C.loopedSlides + C.activeIndex, e += C.loopedSlides, C.slideTo(e, 0, !1, !0)) : ("auto" === C.params.slidesPerView && C.activeIndex >= 2 * C.loopedSlides || C.activeIndex > C.slides.length - 2 * C.params.slidesPerView) && (e = -C.slides.length + C.activeIndex + C.loopedSlides, e += C.loopedSlides, C.slideTo(e, 0, !1, !0))
                }, C.appendSlide = function (e) {
                    if (C.params.loop && C.destroyLoop(), "object" === (void 0 === e ? "undefined" : r(e)) && e.length) for (var t = 0; t < e.length; t++) e[t] && C.wrapper.append(e[t]); else C.wrapper.append(e);
                    C.params.loop && C.createLoop(), C.params.observer && C.support.observer || C.update(!0)
                }, C.prependSlide = function (e) {
                    C.params.loop && C.destroyLoop();
                    var t = C.activeIndex + 1;
                    if ("object" === (void 0 === e ? "undefined" : r(e)) && e.length) {
                        for (var n = 0; n < e.length; n++) e[n] && C.wrapper.prepend(e[n]);
                        t = C.activeIndex + e.length
                    } else C.wrapper.prepend(e);
                    C.params.loop && C.createLoop(), C.params.observer && C.support.observer || C.update(!0), C.slideTo(t, 0, !1)
                }, C.removeSlide = function (e) {
                    C.params.loop && (C.destroyLoop(), C.slides = C.wrapper.children("." + C.params.slideClass));
                    var t, n = C.activeIndex;
                    if ("object" === (void 0 === e ? "undefined" : r(e)) && e.length) {
                        for (var a = 0; a < e.length; a++) t = e[a], C.slides[t] && C.slides.eq(t).remove(), t < n && n--;
                        n = Math.max(n, 0)
                    } else t = e, C.slides[t] && C.slides.eq(t).remove(), t < n && n--, n = Math.max(n, 0);
                    C.params.loop && C.createLoop(), C.params.observer && C.support.observer || C.update(!0), C.params.loop ? C.slideTo(n + C.loopedSlides, 0, !1) : C.slideTo(n, 0, !1)
                }, C.removeAllSlides = function () {
                    for (var e = [], t = 0; t < C.slides.length; t++) e.push(t);
                    C.removeSlide(e)
                }, C.effects = {
                    fade:         {
                        setTranslate:     function () {
                            for (var e = 0; e < C.slides.length; e++) {
                                var t = C.slides.eq(e), n = t[0].swiperSlideOffset, r = -n;
                                C.params.virtualTranslate || (r -= C.translate);
                                var a = 0;
                                C.isHorizontal() || (a = r, r = 0);
                                var o = C.params.fade.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                                t.css({opacity: o}).transform("translate3d(" + r + "px, " + a + "px, 0px)")
                            }
                        }, setTransition: function (e) {
                            if (C.slides.transition(e), C.params.virtualTranslate && 0 !== e) {
                                var t = !1;
                                C.slides.transitionEnd(function () {
                                    if (!t && C) {
                                        t = !0, C.animating = !1;
                                        for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], n = 0; n < e.length; n++) C.wrapper.trigger(e[n])
                                    }
                                })
                            }
                        }
                    }, flip:      {
                        setTranslate:     function () {
                            for (var t = 0; t < C.slides.length; t++) {
                                var n = C.slides.eq(t), r = n[0].progress;
                                C.params.flip.limitRotation && (r = Math.max(Math.min(n[0].progress, 1), -1));
                                var a = n[0].swiperSlideOffset, o = -180 * r, i = o, s = 0, l = -a, c = 0;
                                if (C.isHorizontal() ? C.rtl && (i = -i) : (c = l, l = 0, s = -i, i = 0), n[0].style.zIndex = -Math.abs(Math.round(r)) + C.slides.length, C.params.flip.slideShadows) {
                                    var d = C.isHorizontal() ? n.find(".swiper-slide-shadow-left") : n.find(".swiper-slide-shadow-top"),
                                        u = C.isHorizontal() ? n.find(".swiper-slide-shadow-right") : n.find(".swiper-slide-shadow-bottom");
                                    0 === d.length && (d = e('<div class="swiper-slide-shadow-' + (C.isHorizontal() ? "left" : "top") + '"></div>'), n.append(d)), 0 === u.length && (u = e('<div class="swiper-slide-shadow-' + (C.isHorizontal() ? "right" : "bottom") + '"></div>'), n.append(u)), d.length && (d[0].style.opacity = Math.max(-r, 0)), u.length && (u[0].style.opacity = Math.max(r, 0))
                                }
                                n.transform("translate3d(" + l + "px, " + c + "px, 0px) rotateX(" + s + "deg) rotateY(" + i + "deg)")
                            }
                        }, setTransition: function (t) {
                            if (C.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), C.params.virtualTranslate && 0 !== t) {
                                var n = !1;
                                C.slides.eq(C.activeIndex).transitionEnd(function () {
                                    if (!n && C && e(this).hasClass(C.params.slideActiveClass)) {
                                        n = !0, C.animating = !1;
                                        for (var t = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], r = 0; r < t.length; r++) C.wrapper.trigger(t[r])
                                    }
                                })
                            }
                        }
                    }, cube:      {
                        setTranslate:     function () {
                            var t, n = 0;
                            C.params.cube.shadow && (C.isHorizontal() ? (t = C.wrapper.find(".swiper-cube-shadow"), 0 === t.length && (t = e('<div class="swiper-cube-shadow"></div>'), C.wrapper.append(t)), t.css({height: C.width + "px"})) : (t = C.container.find(".swiper-cube-shadow"), 0 === t.length && (t = e('<div class="swiper-cube-shadow"></div>'), C.container.append(t))));
                            for (var r = 0; r < C.slides.length; r++) {
                                var a = C.slides.eq(r), o = 90 * r, i = Math.floor(o / 360);
                                C.rtl && (o = -o, i = Math.floor(-o / 360));
                                var s = Math.max(Math.min(a[0].progress, 1), -1), l = 0, c = 0, d = 0;
                                r % 4 == 0 ? (l = 4 * -i * C.size, d = 0) : (r - 1) % 4 == 0 ? (l = 0, d = 4 * -i * C.size) : (r - 2) % 4 == 0 ? (l = C.size + 4 * i * C.size, d = C.size) : (r - 3) % 4 == 0 && (l = -C.size, d = 3 * C.size + 4 * C.size * i), C.rtl && (l = -l), C.isHorizontal() || (c = l, l = 0);
                                var u = "rotateX(" + (C.isHorizontal() ? 0 : -o) + "deg) rotateY(" + (C.isHorizontal() ? o : 0) + "deg) translate3d(" + l + "px, " + c + "px, " + d + "px)";
                                if (s <= 1 && s > -1 && (n = 90 * r + 90 * s, C.rtl && (n = 90 * -r - 90 * s)), a.transform(u), C.params.cube.slideShadows) {
                                    var p = C.isHorizontal() ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top"),
                                        f = C.isHorizontal() ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom");
                                    0 === p.length && (p = e('<div class="swiper-slide-shadow-' + (C.isHorizontal() ? "left" : "top") + '"></div>'), a.append(p)), 0 === f.length && (f = e('<div class="swiper-slide-shadow-' + (C.isHorizontal() ? "right" : "bottom") + '"></div>'), a.append(f)), p.length && (p[0].style.opacity = Math.max(-s, 0)), f.length && (f[0].style.opacity = Math.max(s, 0))
                                }
                            }
                            if (C.wrapper.css({
                                "-webkit-transform-origin": "50% 50% -" + C.size / 2 + "px",
                                "-moz-transform-origin":    "50% 50% -" + C.size / 2 + "px",
                                "-ms-transform-origin":     "50% 50% -" + C.size / 2 + "px",
                                "transform-origin":         "50% 50% -" + C.size / 2 + "px"
                            }), C.params.cube.shadow) if (C.isHorizontal()) t.transform("translate3d(0px, " + (C.width / 2 + C.params.cube.shadowOffset) + "px, " + -C.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + C.params.cube.shadowScale + ")"); else {
                                var m = Math.abs(n) - 90 * Math.floor(Math.abs(n) / 90),
                                    h = 1.5 - (Math.sin(2 * m * Math.PI / 360) / 2 + Math.cos(2 * m * Math.PI / 360) / 2),
                                    g = C.params.cube.shadowScale, v = C.params.cube.shadowScale / h,
                                    y = C.params.cube.shadowOffset;
                                t.transform("scale3d(" + g + ", 1, " + v + ") translate3d(0px, " + (C.height / 2 + y) + "px, " + -C.height / 2 / v + "px) rotateX(-90deg)")
                            }
                            var b = C.isSafari || C.isUiWebView ? -C.size / 2 : 0;
                            C.wrapper.transform("translate3d(0px,0," + b + "px) rotateX(" + (C.isHorizontal() ? 0 : n) + "deg) rotateY(" + (C.isHorizontal() ? -n : 0) + "deg)")
                        }, setTransition: function (e) {
                            C.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), C.params.cube.shadow && !C.isHorizontal() && C.container.find(".swiper-cube-shadow").transition(e)
                        }
                    }, coverflow: {
                        setTranslate:     function () {
                            for (var t = C.translate, n = C.isHorizontal() ? -t + C.width / 2 : -t + C.height / 2, r = C.isHorizontal() ? C.params.coverflow.rotate : -C.params.coverflow.rotate, a = C.params.coverflow.depth, o = 0, i = C.slides.length; o < i; o++) {
                                var s = C.slides.eq(o), l = C.slidesSizesGrid[o], c = s[0].swiperSlideOffset,
                                    d = (n - c - l / 2) / l * C.params.coverflow.modifier,
                                    u = C.isHorizontal() ? r * d : 0, p = C.isHorizontal() ? 0 : r * d,
                                    f = -a * Math.abs(d), m = C.isHorizontal() ? 0 : C.params.coverflow.stretch * d,
                                    h = C.isHorizontal() ? C.params.coverflow.stretch * d : 0;
                                Math.abs(h) < .001 && (h = 0), Math.abs(m) < .001 && (m = 0), Math.abs(f) < .001 && (f = 0), Math.abs(u) < .001 && (u = 0), Math.abs(p) < .001 && (p = 0);
                                var g = "translate3d(" + h + "px," + m + "px," + f + "px)  rotateX(" + p + "deg) rotateY(" + u + "deg)";
                                if (s.transform(g), s[0].style.zIndex = 1 - Math.abs(Math.round(d)), C.params.coverflow.slideShadows) {
                                    var v = C.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
                                        y = C.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
                                    0 === v.length && (v = e('<div class="swiper-slide-shadow-' + (C.isHorizontal() ? "left" : "top") + '"></div>'), s.append(v)), 0 === y.length && (y = e('<div class="swiper-slide-shadow-' + (C.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(y)), v.length && (v[0].style.opacity = d > 0 ? d : 0), y.length && (y[0].style.opacity = -d > 0 ? -d : 0)
                                }
                            }
                            if (C.browser.ie) {
                                C.wrapper[0].style.perspectiveOrigin = n + "px 50%"
                            }
                        }, setTransition: function (e) {
                            C.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                        }
                    }
                }, C.lazy = {
                    initialImageLoaded:   !1, loadImageInSlide: function (t, n) {
                        if (void 0 !== t && (void 0 === n && (n = !0), 0 !== C.slides.length)) {
                            var r = C.slides.eq(t),
                                a = r.find("." + C.params.lazyLoadingClass + ":not(." + C.params.lazyStatusLoadedClass + "):not(." + C.params.lazyStatusLoadingClass + ")");
                            !r.hasClass(C.params.lazyLoadingClass) || r.hasClass(C.params.lazyStatusLoadedClass) || r.hasClass(C.params.lazyStatusLoadingClass) || (a = a.add(r[0])), 0 !== a.length && a.each(function () {
                                var t = e(this);
                                t.addClass(C.params.lazyStatusLoadingClass);
                                var a = t.attr("data-background"), o = t.attr("data-src"), i = t.attr("data-srcset"),
                                    s = t.attr("data-sizes");
                                C.loadImage(t[0], o || a, i, s, !1, function () {
                                    if (void 0 !== C && null !== C && C) {
                                        if (a ? (t.css("background-image", 'url("' + a + '")'), t.removeAttr("data-background")) : (i && (t.attr("srcset", i), t.removeAttr("data-srcset")), s && (t.attr("sizes", s), t.removeAttr("data-sizes")), o && (t.attr("src", o), t.removeAttr("data-src"))), t.addClass(C.params.lazyStatusLoadedClass).removeClass(C.params.lazyStatusLoadingClass), r.find("." + C.params.lazyPreloaderClass + ", ." + C.params.preloaderClass).remove(), C.params.loop && n) {
                                            var e = r.attr("data-swiper-slide-index");
                                            if (r.hasClass(C.params.slideDuplicateClass)) {
                                                var l = C.wrapper.children('[data-swiper-slide-index="' + e + '"]:not(.' + C.params.slideDuplicateClass + ")");
                                                C.lazy.loadImageInSlide(l.index(), !1)
                                            } else {
                                                var c = C.wrapper.children("." + C.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                                C.lazy.loadImageInSlide(c.index(), !1)
                                            }
                                        }
                                        C.emit("onLazyImageReady", C, r[0], t[0])
                                    }
                                }), C.emit("onLazyImageLoad", C, r[0], t[0])
                            })
                        }
                    }, load:              function () {
                        var t, n = C.params.slidesPerView;
                        if ("auto" === n && (n = 0), C.lazy.initialImageLoaded || (C.lazy.initialImageLoaded = !0), C.params.watchSlidesVisibility) C.wrapper.children("." + C.params.slideVisibleClass).each(function () {
                            C.lazy.loadImageInSlide(e(this).index())
                        }); else if (n > 1) for (t = C.activeIndex; t < C.activeIndex + n; t++) C.slides[t] && C.lazy.loadImageInSlide(t); else C.lazy.loadImageInSlide(C.activeIndex);
                        if (C.params.lazyLoadingInPrevNext) if (n > 1 || C.params.lazyLoadingInPrevNextAmount && C.params.lazyLoadingInPrevNextAmount > 1) {
                            var r = C.params.lazyLoadingInPrevNextAmount, a = n,
                                o = Math.min(C.activeIndex + a + Math.max(r, a), C.slides.length),
                                i = Math.max(C.activeIndex - Math.max(a, r), 0);
                            for (t = C.activeIndex + n; t < o; t++) C.slides[t] && C.lazy.loadImageInSlide(t);
                            for (t = i; t < C.activeIndex; t++) C.slides[t] && C.lazy.loadImageInSlide(t)
                        } else {
                            var s = C.wrapper.children("." + C.params.slideNextClass);
                            s.length > 0 && C.lazy.loadImageInSlide(s.index());
                            var l = C.wrapper.children("." + C.params.slidePrevClass);
                            l.length > 0 && C.lazy.loadImageInSlide(l.index())
                        }
                    }, onTransitionStart: function () {
                        C.params.lazyLoading && (C.params.lazyLoadingOnTransitionStart || !C.params.lazyLoadingOnTransitionStart && !C.lazy.initialImageLoaded) && C.lazy.load()
                    }, onTransitionEnd:   function () {
                        C.params.lazyLoading && !C.params.lazyLoadingOnTransitionStart && C.lazy.load()
                    }
                }, C.scrollbar = {
                    isTouched:            !1, setDragPosition: function (e) {
                        var t = C.scrollbar,
                            n = C.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY,
                            r = n - t.track.offset()[C.isHorizontal() ? "left" : "top"] - t.dragSize / 2,
                            a = -C.minTranslate() * t.moveDivider, o = -C.maxTranslate() * t.moveDivider;
                        r < a ? r = a : r > o && (r = o), r = -r / t.moveDivider, C.updateProgress(r), C.setWrapperTranslate(r, !0)
                    }, dragStart:         function (e) {
                        var t = C.scrollbar;
                        t.isTouched = !0, e.preventDefault(), e.stopPropagation(), t.setDragPosition(e), clearTimeout(t.dragTimeout), t.track.transition(0), C.params.scrollbarHide && t.track.css("opacity", 1), C.wrapper.transition(100), t.drag.transition(100), C.emit("onScrollbarDragStart", C)
                    }, dragMove:          function (e) {
                        var t = C.scrollbar;
                        t.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), C.wrapper.transition(0), t.track.transition(0), t.drag.transition(0), C.emit("onScrollbarDragMove", C))
                    }, dragEnd:           function (e) {
                        var t = C.scrollbar;
                        t.isTouched && (t.isTouched = !1, C.params.scrollbarHide && (clearTimeout(t.dragTimeout), t.dragTimeout = setTimeout(function () {
                            t.track.css("opacity", 0), t.track.transition(400)
                        }, 1e3)), C.emit("onScrollbarDragEnd", C), C.params.scrollbarSnapOnRelease && C.slideReset())
                    }, draggableEvents:   function () {
                        return !1 !== C.params.simulateTouch || C.support.touch ? C.touchEvents : C.touchEventsDesktop
                    }(), enableDraggable: function () {
                        var t = C.scrollbar, n = C.support.touch ? t.track : document;
                        e(t.track).on(t.draggableEvents.start, t.dragStart), e(n).on(t.draggableEvents.move, t.dragMove), e(n).on(t.draggableEvents.end, t.dragEnd)
                    }, disableDraggable:  function () {
                        var t = C.scrollbar, n = C.support.touch ? t.track : document;
                        e(t.track).off(t.draggableEvents.start, t.dragStart), e(n).off(t.draggableEvents.move, t.dragMove), e(n).off(t.draggableEvents.end, t.dragEnd)
                    }, set:               function () {
                        if (C.params.scrollbar) {
                            var t = C.scrollbar;
                            t.track = e(C.params.scrollbar), C.params.uniqueNavElements && "string" == typeof C.params.scrollbar && t.track.length > 1 && 1 === C.container.find(C.params.scrollbar).length && (t.track = C.container.find(C.params.scrollbar)), t.drag = t.track.find(".swiper-scrollbar-drag"), 0 === t.drag.length && (t.drag = e('<div class="swiper-scrollbar-drag"></div>'), t.track.append(t.drag)), t.drag[0].style.width = "", t.drag[0].style.height = "", t.trackSize = C.isHorizontal() ? t.track[0].offsetWidth : t.track[0].offsetHeight, t.divider = C.size / C.virtualSize, t.moveDivider = t.divider * (t.trackSize / C.size), t.dragSize = t.trackSize * t.divider, C.isHorizontal() ? t.drag[0].style.width = t.dragSize + "px" : t.drag[0].style.height = t.dragSize + "px", t.divider >= 1 ? t.track[0].style.display = "none" : t.track[0].style.display = "", C.params.scrollbarHide && (t.track[0].style.opacity = 0)
                        }
                    }, setTranslate:      function () {
                        if (C.params.scrollbar) {
                            var e, t = C.scrollbar, n = (C.translate, t.dragSize);
                            e = (t.trackSize - t.dragSize) * C.progress, C.rtl && C.isHorizontal() ? (e = -e, e > 0 ? (n = t.dragSize - e, e = 0) : -e + t.dragSize > t.trackSize && (n = t.trackSize + e)) : e < 0 ? (n = t.dragSize + e, e = 0) : e + t.dragSize > t.trackSize && (n = t.trackSize - e), C.isHorizontal() ? (C.support.transforms3d ? t.drag.transform("translate3d(" + e + "px, 0, 0)") : t.drag.transform("translateX(" + e + "px)"), t.drag[0].style.width = n + "px") : (C.support.transforms3d ? t.drag.transform("translate3d(0px, " + e + "px, 0)") : t.drag.transform("translateY(" + e + "px)"), t.drag[0].style.height = n + "px"), C.params.scrollbarHide && (clearTimeout(t.timeout), t.track[0].style.opacity = 1, t.timeout = setTimeout(function () {
                                t.track[0].style.opacity = 0, t.track.transition(400)
                            }, 1e3))
                        }
                    }, setTransition:     function (e) {
                        C.params.scrollbar && C.scrollbar.drag.transition(e)
                    }
                }, C.controller = {
                    LinearSpline:              function (e, t) {
                        var n = function () {
                            var e, t, n;
                            return function (r, a) {
                                for (t = -1, e = r.length; e - t > 1;) r[n = e + t >> 1] <= a ? t = n : e = n;
                                return e
                            }
                        }();
                        this.x = e, this.y = t, this.lastIndex = e.length - 1;
                        var r, a;
                        this.x.length;
                        this.interpolate = function (e) {
                            return e ? (a = n(this.x, e), r = a - 1, (e - this.x[r]) * (this.y[a] - this.y[r]) / (this.x[a] - this.x[r]) + this.y[r]) : 0
                        }
                    }, getInterpolateFunction: function (e) {
                        C.controller.spline || (C.controller.spline = C.params.loop ? new C.controller.LinearSpline(C.slidesGrid, e.slidesGrid) : new C.controller.LinearSpline(C.snapGrid, e.snapGrid))
                    }, setTranslate:           function (e, n) {
                        function r(t) {
                            e = t.rtl && "horizontal" === t.params.direction ? -C.translate : C.translate, "slide" === C.params.controlBy && (C.controller.getInterpolateFunction(t), o = -C.controller.spline.interpolate(-e)), o && "container" !== C.params.controlBy || (a = (t.maxTranslate() - t.minTranslate()) / (C.maxTranslate() - C.minTranslate()), o = (e - C.minTranslate()) * a + t.minTranslate()), C.params.controlInverse && (o = t.maxTranslate() - o), t.updateProgress(o), t.setWrapperTranslate(o, !1, C), t.updateActiveIndex()
                        }

                        var a, o, i = C.params.control;
                        if (Array.isArray(i)) for (var s = 0; s < i.length; s++) i[s] !== n && i[s] instanceof t && r(i[s]); else i instanceof t && n !== i && r(i)
                    }, setTransition:          function (e, n) {
                        function r(t) {
                            t.setWrapperTransition(e, C), 0 !== e && (t.onTransitionStart(), t.wrapper.transitionEnd(function () {
                                o && (t.params.loop && "slide" === C.params.controlBy && t.fixLoop(), t.onTransitionEnd())
                            }))
                        }

                        var a, o = C.params.control;
                        if (Array.isArray(o)) for (a = 0; a < o.length; a++) o[a] !== n && o[a] instanceof t && r(o[a]); else o instanceof t && n !== o && r(o)
                    }
                }, C.hashnav = {
                    onHashCange:     function (e, t) {
                        var n = document.location.hash.replace("#", "");
                        n !== C.slides.eq(C.activeIndex).attr("data-hash") && C.slideTo(C.wrapper.children("." + C.params.slideClass + '[data-hash="' + n + '"]').index())
                    }, attachEvents: function (t) {
                        var n = t ? "off" : "on";
                        e(window)[n]("hashchange", C.hashnav.onHashCange)
                    }, setHash:      function () {
                        if (C.hashnav.initialized && C.params.hashnav) if (C.params.replaceState && window.history && window.history.replaceState) window.history.replaceState(null, null, "#" + C.slides.eq(C.activeIndex).attr("data-hash") || ""); else {
                            var e = C.slides.eq(C.activeIndex), t = e.attr("data-hash") || e.attr("data-history");
                            document.location.hash = t || ""
                        }
                    }, init:         function () {
                        if (C.params.hashnav && !C.params.history) {
                            C.hashnav.initialized = !0;
                            var e = document.location.hash.replace("#", "");
                            if (e) for (var t = 0, n = C.slides.length; t < n; t++) {
                                var r = C.slides.eq(t), a = r.attr("data-hash") || r.attr("data-history");
                                if (a === e && !r.hasClass(C.params.slideDuplicateClass)) {
                                    var o = r.index();
                                    C.slideTo(o, 0, C.params.runCallbacksOnInit, !0)
                                }
                            }
                            C.params.hashnavWatchState && C.hashnav.attachEvents()
                        }
                    }, destroy:      function () {
                        C.params.hashnavWatchState && C.hashnav.attachEvents(!0)
                    }
                }, C.history = {
                    init:                  function () {
                        if (C.params.history) {
                            if (!window.history || !window.history.pushState) return C.params.history = !1, void(C.params.hashnav = !0);
                            C.history.initialized = !0, this.paths = this.getPathValues(), (this.paths.key || this.paths.value) && (this.scrollToSlide(0, this.paths.value, C.params.runCallbacksOnInit), C.params.replaceState || window.addEventListener("popstate", this.setHistoryPopState))
                        }
                    }, setHistoryPopState: function () {
                        C.history.paths = C.history.getPathValues(), C.history.scrollToSlide(C.params.speed, C.history.paths.value, !1)
                    }, getPathValues:      function () {
                        var e = window.location.pathname.slice(1).split("/"), t = e.length;
                        return {key: e[t - 2], value: e[t - 1]}
                    }, setHistory:         function (e, t) {
                        if (C.history.initialized && C.params.history) {
                            var n = C.slides.eq(t), r = this.slugify(n.attr("data-history"));
                            window.location.pathname.includes(e) || (r = e + "/" + r), C.params.replaceState ? window.history.replaceState(null, null, r) : window.history.pushState(null, null, r)
                        }
                    }, slugify:            function (e) {
                        return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
                    }, scrollToSlide:      function (e, t, n) {
                        if (t) for (var r = 0, a = C.slides.length; r < a; r++) {
                            var o = C.slides.eq(r), i = this.slugify(o.attr("data-history"));
                            if (i === t && !o.hasClass(C.params.slideDuplicateClass)) {
                                var s = o.index();
                                C.slideTo(s, e, n)
                            }
                        } else C.slideTo(0, e, n)
                    }
                }, C.disableKeyboardControl = function () {
                    C.params.keyboardControl = !1, e(document).off("keydown", d)
                }, C.enableKeyboardControl = function () {
                    C.params.keyboardControl = !0, e(document).on("keydown", d)
                }, C.mousewheel = {
                    event:          !1,
                    lastScrollTime: (new window.Date).getTime()
                }, C.params.mousewheelControl && (C.mousewheel.event = navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function () {
                    var e = "onwheel" in document;
                    if (!e) {
                        var t = document.createElement("div");
                        t.setAttribute("onwheel", "return;"), e = "function" == typeof t.onwheel
                    }
                    return !e && document.implementation && document.implementation.hasFeature && !0 !== document.implementation.hasFeature("", "") && (e = document.implementation.hasFeature("Events.wheel", "3.0")), e
                }() ? "wheel" : "mousewheel"), C.disableMousewheelControl = function () {
                    if (!C.mousewheel.event) return !1;
                    var t = C.container;
                    return "container" !== C.params.mousewheelEventsTarged && (t = e(C.params.mousewheelEventsTarged)), t.off(C.mousewheel.event, p), C.params.mousewheelControl = !1, !0
                }, C.enableMousewheelControl = function () {
                    if (!C.mousewheel.event) return !1;
                    var t = C.container;
                    return "container" !== C.params.mousewheelEventsTarged && (t = e(C.params.mousewheelEventsTarged)), t.on(C.mousewheel.event, p), C.params.mousewheelControl = !0, !0
                }, C.parallax = {
                    setTranslate:     function () {
                        C.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
                            f(this, C.progress)
                        }), C.slides.each(function () {
                            var t = e(this);
                            t.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
                                f(this, Math.min(Math.max(t[0].progress, -1), 1))
                            })
                        })
                    }, setTransition: function (t) {
                        void 0 === t && (t = C.params.speed), C.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
                            var n = e(this), r = parseInt(n.attr("data-swiper-parallax-duration"), 10) || t;
                            0 === t && (r = 0), n.transition(r)
                        })
                    }
                }, C.zoom = {
                    scale:                     1,
                    currentScale:              1,
                    isScaling:                 !1,
                    gesture:                   {
                        slide:       void 0,
                        slideWidth:  void 0,
                        slideHeight: void 0,
                        image:       void 0,
                        imageWrap:   void 0,
                        zoomMax:     C.params.zoomMax
                    },
                    image:                     {
                        isTouched:      void 0,
                        isMoved:        void 0,
                        currentX:       void 0,
                        currentY:       void 0,
                        minX:           void 0,
                        minY:           void 0,
                        maxX:           void 0,
                        maxY:           void 0,
                        width:          void 0,
                        height:         void 0,
                        startX:         void 0,
                        startY:         void 0,
                        touchesStart:   {},
                        touchesCurrent: {}
                    },
                    velocity:                  {
                        x:             void 0,
                        y:             void 0,
                        prevPositionX: void 0,
                        prevPositionY: void 0,
                        prevTime:      void 0
                    },
                    getDistanceBetweenTouches: function (e) {
                        if (e.targetTouches.length < 2) return 1;
                        var t = e.targetTouches[0].pageX, n = e.targetTouches[0].pageY, r = e.targetTouches[1].pageX,
                            a = e.targetTouches[1].pageY;
                        return Math.sqrt(Math.pow(r - t, 2) + Math.pow(a - n, 2))
                    },
                    onGestureStart:            function (t) {
                        var n = C.zoom;
                        if (!C.support.gestures) {
                            if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2) return;
                            n.gesture.scaleStart = n.getDistanceBetweenTouches(t)
                        }
                        if (!(n.gesture.slide && n.gesture.slide.length || (n.gesture.slide = e(this), 0 === n.gesture.slide.length && (n.gesture.slide = C.slides.eq(C.activeIndex)), n.gesture.image = n.gesture.slide.find("img, svg, canvas"), n.gesture.imageWrap = n.gesture.image.parent("." + C.params.zoomContainerClass), n.gesture.zoomMax = n.gesture.imageWrap.attr("data-swiper-zoom") || C.params.zoomMax, 0 !== n.gesture.imageWrap.length))) return void(n.gesture.image = void 0);
                        n.gesture.image.transition(0), n.isScaling = !0
                    },
                    onGestureChange:           function (e) {
                        var t = C.zoom;
                        if (!C.support.gestures) {
                            if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                            t.gesture.scaleMove = t.getDistanceBetweenTouches(e)
                        }
                        t.gesture.image && 0 !== t.gesture.image.length && (C.support.gestures ? t.scale = e.scale * t.currentScale : t.scale = t.gesture.scaleMove / t.gesture.scaleStart * t.currentScale, t.scale > t.gesture.zoomMax && (t.scale = t.gesture.zoomMax - 1 + Math.pow(t.scale - t.gesture.zoomMax + 1, .5)), t.scale < C.params.zoomMin && (t.scale = C.params.zoomMin + 1 - Math.pow(C.params.zoomMin - t.scale + 1, .5)), t.gesture.image.transform("translate3d(0,0,0) scale(" + t.scale + ")"))
                    },
                    onGestureEnd:              function (e) {
                        var t = C.zoom;
                        !C.support.gestures && ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2) || t.gesture.image && 0 !== t.gesture.image.length && (t.scale = Math.max(Math.min(t.scale, t.gesture.zoomMax), C.params.zoomMin), t.gesture.image.transition(C.params.speed).transform("translate3d(0,0,0) scale(" + t.scale + ")"), t.currentScale = t.scale, t.isScaling = !1, 1 === t.scale && (t.gesture.slide = void 0))
                    },
                    onTouchStart:              function (e, t) {
                        var n = e.zoom;
                        n.gesture.image && 0 !== n.gesture.image.length && (n.image.isTouched || ("android" === e.device.os && t.preventDefault(), n.image.isTouched = !0, n.image.touchesStart.x = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX, n.image.touchesStart.y = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY))
                    },
                    onTouchMove:               function (e) {
                        var t = C.zoom;
                        if (t.gesture.image && 0 !== t.gesture.image.length && (C.allowClick = !1, t.image.isTouched && t.gesture.slide)) {
                            t.image.isMoved || (t.image.width = t.gesture.image[0].offsetWidth, t.image.height = t.gesture.image[0].offsetHeight, t.image.startX = C.getTranslate(t.gesture.imageWrap[0], "x") || 0, t.image.startY = C.getTranslate(t.gesture.imageWrap[0], "y") || 0, t.gesture.slideWidth = t.gesture.slide[0].offsetWidth, t.gesture.slideHeight = t.gesture.slide[0].offsetHeight, t.gesture.imageWrap.transition(0), C.rtl && (t.image.startX = -t.image.startX), C.rtl && (t.image.startY = -t.image.startY));
                            var n = t.image.width * t.scale, r = t.image.height * t.scale;
                            if (!(n < t.gesture.slideWidth && r < t.gesture.slideHeight)) {
                                if (t.image.minX = Math.min(t.gesture.slideWidth / 2 - n / 2, 0), t.image.maxX = -t.image.minX, t.image.minY = Math.min(t.gesture.slideHeight / 2 - r / 2, 0), t.image.maxY = -t.image.minY, t.image.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, t.image.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !t.image.isMoved && !t.isScaling) {
                                    if (C.isHorizontal() && Math.floor(t.image.minX) === Math.floor(t.image.startX) && t.image.touchesCurrent.x < t.image.touchesStart.x || Math.floor(t.image.maxX) === Math.floor(t.image.startX) && t.image.touchesCurrent.x > t.image.touchesStart.x) return void(t.image.isTouched = !1);
                                    if (!C.isHorizontal() && Math.floor(t.image.minY) === Math.floor(t.image.startY) && t.image.touchesCurrent.y < t.image.touchesStart.y || Math.floor(t.image.maxY) === Math.floor(t.image.startY) && t.image.touchesCurrent.y > t.image.touchesStart.y) return void(t.image.isTouched = !1)
                                }
                                e.preventDefault(), e.stopPropagation(), t.image.isMoved = !0, t.image.currentX = t.image.touchesCurrent.x - t.image.touchesStart.x + t.image.startX, t.image.currentY = t.image.touchesCurrent.y - t.image.touchesStart.y + t.image.startY, t.image.currentX < t.image.minX && (t.image.currentX = t.image.minX + 1 - Math.pow(t.image.minX - t.image.currentX + 1, .8)), t.image.currentX > t.image.maxX && (t.image.currentX = t.image.maxX - 1 + Math.pow(t.image.currentX - t.image.maxX + 1, .8)), t.image.currentY < t.image.minY && (t.image.currentY = t.image.minY + 1 - Math.pow(t.image.minY - t.image.currentY + 1, .8)), t.image.currentY > t.image.maxY && (t.image.currentY = t.image.maxY - 1 + Math.pow(t.image.currentY - t.image.maxY + 1, .8)), t.velocity.prevPositionX || (t.velocity.prevPositionX = t.image.touchesCurrent.x), t.velocity.prevPositionY || (t.velocity.prevPositionY = t.image.touchesCurrent.y), t.velocity.prevTime || (t.velocity.prevTime = Date.now()), t.velocity.x = (t.image.touchesCurrent.x - t.velocity.prevPositionX) / (Date.now() - t.velocity.prevTime) / 2, t.velocity.y = (t.image.touchesCurrent.y - t.velocity.prevPositionY) / (Date.now() - t.velocity.prevTime) / 2, Math.abs(t.image.touchesCurrent.x - t.velocity.prevPositionX) < 2 && (t.velocity.x = 0), Math.abs(t.image.touchesCurrent.y - t.velocity.prevPositionY) < 2 && (t.velocity.y = 0), t.velocity.prevPositionX = t.image.touchesCurrent.x, t.velocity.prevPositionY = t.image.touchesCurrent.y, t.velocity.prevTime = Date.now(), t.gesture.imageWrap.transform("translate3d(" + t.image.currentX + "px, " + t.image.currentY + "px,0)")
                            }
                        }
                    },
                    onTouchEnd:                function (e, t) {
                        var n = e.zoom;
                        if (n.gesture.image && 0 !== n.gesture.image.length) {
                            if (!n.image.isTouched || !n.image.isMoved) return n.image.isTouched = !1, void(n.image.isMoved = !1);
                            n.image.isTouched = !1, n.image.isMoved = !1;
                            var r = 300, a = 300, o = n.velocity.x * r, i = n.image.currentX + o, s = n.velocity.y * a,
                                l = n.image.currentY + s;
                            0 !== n.velocity.x && (r = Math.abs((i - n.image.currentX) / n.velocity.x)), 0 !== n.velocity.y && (a = Math.abs((l - n.image.currentY) / n.velocity.y));
                            var c = Math.max(r, a);
                            n.image.currentX = i, n.image.currentY = l;
                            var d = n.image.width * n.scale, u = n.image.height * n.scale;
                            n.image.minX = Math.min(n.gesture.slideWidth / 2 - d / 2, 0), n.image.maxX = -n.image.minX, n.image.minY = Math.min(n.gesture.slideHeight / 2 - u / 2, 0), n.image.maxY = -n.image.minY, n.image.currentX = Math.max(Math.min(n.image.currentX, n.image.maxX), n.image.minX), n.image.currentY = Math.max(Math.min(n.image.currentY, n.image.maxY), n.image.minY), n.gesture.imageWrap.transition(c).transform("translate3d(" + n.image.currentX + "px, " + n.image.currentY + "px,0)")
                        }
                    },
                    onTransitionEnd:           function (e) {
                        var t = e.zoom;
                        t.gesture.slide && e.previousIndex !== e.activeIndex && (t.gesture.image.transform("translate3d(0,0,0) scale(1)"), t.gesture.imageWrap.transform("translate3d(0,0,0)"), t.gesture.slide = t.gesture.image = t.gesture.imageWrap = void 0, t.scale = t.currentScale = 1)
                    },
                    toggleZoom:                function (t, n) {
                        var r = t.zoom;
                        if (r.gesture.slide || (r.gesture.slide = t.clickedSlide ? e(t.clickedSlide) : t.slides.eq(t.activeIndex), r.gesture.image = r.gesture.slide.find("img, svg, canvas"), r.gesture.imageWrap = r.gesture.image.parent("." + t.params.zoomContainerClass)), r.gesture.image && 0 !== r.gesture.image.length) {
                            var a, o, i, s, l, c, d, u, p, f, m, h, g, v, y, b, w, S;
                            void 0 === r.image.touchesStart.x && n ? (a = "touchend" === n.type ? n.changedTouches[0].pageX : n.pageX, o = "touchend" === n.type ? n.changedTouches[0].pageY : n.pageY) : (a = r.image.touchesStart.x, o = r.image.touchesStart.y), r.scale && 1 !== r.scale ? (r.scale = r.currentScale = 1, r.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"), r.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"), r.gesture.slide = void 0) : (r.scale = r.currentScale = r.gesture.imageWrap.attr("data-swiper-zoom") || t.params.zoomMax, n ? (w = r.gesture.slide[0].offsetWidth, S = r.gesture.slide[0].offsetHeight, i = r.gesture.slide.offset().left, s = r.gesture.slide.offset().top, l = i + w / 2 - a, c = s + S / 2 - o, p = r.gesture.image[0].offsetWidth, f = r.gesture.image[0].offsetHeight, m = p * r.scale, h = f * r.scale, g = Math.min(w / 2 - m / 2, 0), v = Math.min(S / 2 - h / 2, 0), y = -g, b = -v, d = l * r.scale, u = c * r.scale, d < g && (d = g), d > y && (d = y), u < v && (u = v), u > b && (u = b)) : (d = 0, u = 0), r.gesture.imageWrap.transition(300).transform("translate3d(" + d + "px, " + u + "px,0)"), r.gesture.image.transition(300).transform("translate3d(0,0,0) scale(" + r.scale + ")"))
                        }
                    },
                    attachEvents:              function (t) {
                        var n = t ? "off" : "on";
                        if (C.params.zoom) {
                            var r = (C.slides, !("touchstart" !== C.touchEvents.start || !C.support.passiveListener || !C.params.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            });
                            C.support.gestures ? (C.slides[n]("gesturestart", C.zoom.onGestureStart, r), C.slides[n]("gesturechange", C.zoom.onGestureChange, r), C.slides[n]("gestureend", C.zoom.onGestureEnd, r)) : "touchstart" === C.touchEvents.start && (C.slides[n](C.touchEvents.start, C.zoom.onGestureStart, r), C.slides[n](C.touchEvents.move, C.zoom.onGestureChange, r), C.slides[n](C.touchEvents.end, C.zoom.onGestureEnd, r)), C[n]("touchStart", C.zoom.onTouchStart), C.slides.each(function (t, r) {
                                e(r).find("." + C.params.zoomContainerClass).length > 0 && e(r)[n](C.touchEvents.move, C.zoom.onTouchMove)
                            }), C[n]("touchEnd", C.zoom.onTouchEnd), C[n]("transitionEnd", C.zoom.onTransitionEnd), C.params.zoomToggle && C.on("doubleTap", C.zoom.toggleZoom)
                        }
                    },
                    init:                      function () {
                        C.zoom.attachEvents()
                    },
                    destroy:                   function () {
                        C.zoom.attachEvents(!0)
                    }
                }, C._plugins = [];
                for (var N in C.plugins) {
                    var R = C.plugins[N](C, C.params[N]);
                    R && C._plugins.push(R)
                }
                return C.callPlugins = function (e) {
                    for (var t = 0; t < C._plugins.length; t++) e in C._plugins[t] && C._plugins[t][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                }, C.emitterEventListeners = {}, C.emit = function (e) {
                    C.params[e] && C.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                    var t;
                    if (C.emitterEventListeners[e]) for (t = 0; t < C.emitterEventListeners[e].length; t++) C.emitterEventListeners[e][t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                    C.callPlugins && C.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                }, C.on = function (e, t) {
                    return e = m(e), C.emitterEventListeners[e] || (C.emitterEventListeners[e] = []), C.emitterEventListeners[e].push(t), C
                }, C.off = function (e, t) {
                    var n;
                    if (e = m(e), void 0 === t) return C.emitterEventListeners[e] = [], C;
                    if (C.emitterEventListeners[e] && 0 !== C.emitterEventListeners[e].length) {
                        for (n = 0; n < C.emitterEventListeners[e].length; n++) C.emitterEventListeners[e][n] === t && C.emitterEventListeners[e].splice(n, 1);
                        return C
                    }
                }, C.once = function (e, t) {
                    e = m(e);
                    var n = function n() {
                        t(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), C.off(e, n)
                    };
                    return C.on(e, n), C
                }, C.a11y = {
                    makeFocusable:  function (e) {
                        return e.attr("tabIndex", "0"), e
                    },
                    addRole:        function (e, t) {
                        return e.attr("role", t), e
                    },
                    addLabel:       function (e, t) {
                        return e.attr("aria-label", t), e
                    },
                    disable:        function (e) {
                        return e.attr("aria-disabled", !0), e
                    },
                    enable:         function (e) {
                        return e.attr("aria-disabled", !1), e
                    },
                    onEnterKey:     function (t) {
                        13 === t.keyCode && (e(t.target).is(C.params.nextButton) ? (C.onClickNext(t), C.isEnd ? C.a11y.notify(C.params.lastSlideMessage) : C.a11y.notify(C.params.nextSlideMessage)) : e(t.target).is(C.params.prevButton) && (C.onClickPrev(t), C.isBeginning ? C.a11y.notify(C.params.firstSlideMessage) : C.a11y.notify(C.params.prevSlideMessage)), e(t.target).is("." + C.params.bulletClass) && e(t.target)[0].click())
                    },
                    liveRegion:     e('<span class="' + C.params.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>'),
                    notify:         function (e) {
                        var t = C.a11y.liveRegion;
                        0 !== t.length && (t.html(""), t.html(e))
                    },
                    init:           function () {
                        C.params.nextButton && C.nextButton && C.nextButton.length > 0 && (C.a11y.makeFocusable(C.nextButton), C.a11y.addRole(C.nextButton, "button"), C.a11y.addLabel(C.nextButton, C.params.nextSlideMessage)), C.params.prevButton && C.prevButton && C.prevButton.length > 0 && (C.a11y.makeFocusable(C.prevButton), C.a11y.addRole(C.prevButton, "button"), C.a11y.addLabel(C.prevButton, C.params.prevSlideMessage)), e(C.container).append(C.a11y.liveRegion)
                    },
                    initPagination: function () {
                        C.params.pagination && C.params.paginationClickable && C.bullets && C.bullets.length && C.bullets.each(function () {
                            var t = e(this);
                            C.a11y.makeFocusable(t), C.a11y.addRole(t, "button"), C.a11y.addLabel(t, C.params.paginationBulletMessage.replace(/{{index}}/, t.index() + 1))
                        })
                    },
                    destroy:        function () {
                        C.a11y.liveRegion && C.a11y.liveRegion.length > 0 && C.a11y.liveRegion.remove()
                    }
                }, C.init = function () {
                    C.params.loop && C.createLoop(), C.updateContainerSize(), C.updateSlidesSize(), C.updatePagination(), C.params.scrollbar && C.scrollbar && (C.scrollbar.set(), C.params.scrollbarDraggable && C.scrollbar.enableDraggable()), "slide" !== C.params.effect && C.effects[C.params.effect] && (C.params.loop || C.updateProgress(), C.effects[C.params.effect].setTranslate()), C.params.loop ? C.slideTo(C.params.initialSlide + C.loopedSlides, 0, C.params.runCallbacksOnInit) : (C.slideTo(C.params.initialSlide, 0, C.params.runCallbacksOnInit), 0 === C.params.initialSlide && (C.parallax && C.params.parallax && C.parallax.setTranslate(), C.lazy && C.params.lazyLoading && (C.lazy.load(), C.lazy.initialImageLoaded = !0))), C.attachEvents(), C.params.observer && C.support.observer && C.initObservers(), C.params.preloadImages && !C.params.lazyLoading && C.preloadImages(), C.params.zoom && C.zoom && C.zoom.init(), C.params.autoplay && C.startAutoplay(), C.params.keyboardControl && C.enableKeyboardControl && C.enableKeyboardControl(), C.params.mousewheelControl && C.enableMousewheelControl && C.enableMousewheelControl(), C.params.hashnavReplaceState && (C.params.replaceState = C.params.hashnavReplaceState), C.params.history && C.history && C.history.init(), C.params.hashnav && C.hashnav && C.hashnav.init(), C.params.a11y && C.a11y && C.a11y.init(), C.emit("onInit", C)
                }, C.cleanupStyles = function () {
                    C.container.removeClass(C.classNames.join(" ")).removeAttr("style"), C.wrapper.removeAttr("style"), C.slides && C.slides.length && C.slides.removeClass([C.params.slideVisibleClass, C.params.slideActiveClass, C.params.slideNextClass, C.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), C.paginationContainer && C.paginationContainer.length && C.paginationContainer.removeClass(C.params.paginationHiddenClass), C.bullets && C.bullets.length && C.bullets.removeClass(C.params.bulletActiveClass), C.params.prevButton && e(C.params.prevButton).removeClass(C.params.buttonDisabledClass), C.params.nextButton && e(C.params.nextButton).removeClass(C.params.buttonDisabledClass), C.params.scrollbar && C.scrollbar && (C.scrollbar.track && C.scrollbar.track.length && C.scrollbar.track.removeAttr("style"), C.scrollbar.drag && C.scrollbar.drag.length && C.scrollbar.drag.removeAttr("style"))
                }, C.destroy = function (e, t) {
                    C.detachEvents(), C.stopAutoplay(), C.params.scrollbar && C.scrollbar && C.params.scrollbarDraggable && C.scrollbar.disableDraggable(), C.params.loop && C.destroyLoop(), t && C.cleanupStyles(), C.disconnectObservers(), C.params.zoom && C.zoom && C.zoom.destroy(), C.params.keyboardControl && C.disableKeyboardControl && C.disableKeyboardControl(), C.params.mousewheelControl && C.disableMousewheelControl && C.disableMousewheelControl(), C.params.a11y && C.a11y && C.a11y.destroy(), C.params.history && !C.params.replaceState && window.removeEventListener("popstate", C.history.setHistoryPopState), C.params.hashnav && C.hashnav && C.hashnav.destroy(), C.emit("onDestroy"), !1 !== e && (C = null)
                }, C.init(), C
            }
        };
        t.prototype = {
            isSafari:    function () {
                var e = window.navigator.userAgent.toLowerCase();
                return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
            }(),
            isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),
            isArray:     function (e) {
                return "[object Array]" === Object.prototype.toString.apply(e)
            },
            browser:     {
                ie:      window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
                ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1,
                lteIE9:  function () {
                    var e = document.createElement("div");
                    return e.innerHTML = "\x3c!--[if lte IE 9]><i></i><![endif]--\x3e", 1 === e.getElementsByTagName("i").length
                }()
            },
            device:      function () {
                var e = window.navigator.userAgent, t = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                    n = e.match(/(iPad).*OS\s([\d_]+)/), r = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                    a = !n && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
                return {ios: n || a || r, android: t}
            }(),
            support:     {
                touch:                window.Modernizr && !0 === Modernizr.touch || function () {
                    return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
                }(), transforms3d:    window.Modernizr && !0 === Modernizr.csstransforms3d || function () {
                    var e = document.createElement("div").style;
                    return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e
                }(), flexbox:         function () {
                    for (var e = document.createElement("div").style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), n = 0; n < t.length; n++) if (t[n] in e) return !0
                }(), observer:        function () {
                    return "MutationObserver" in window || "WebkitMutationObserver" in window
                }(), passiveListener: function () {
                    var e = !1;
                    try {
                        var t = Object.defineProperty({}, "passive", {
                            get: function () {
                                e = !0
                            }
                        });
                        window.addEventListener("testPassiveListener", null, t)
                    } catch (e) {
                    }
                    return e
                }(), gestures:        function () {
                    return "ongesturestart" in window
                }()
            },
            plugins:     {}
        };
        for (var n = (function () {
            var e = function (e) {
                var t = this, n = 0;
                for (n = 0; n < e.length; n++) t[n] = e[n];
                return t.length = e.length, this
            }, t = function (t, n) {
                var r = [], a = 0;
                if (t && !n && t instanceof e) return t;
                if (t) if ("string" == typeof t) {
                    var o, i, s = t.trim();
                    if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
                        var l = "div";
                        for (0 === s.indexOf("<li") && (l = "ul"), 0 === s.indexOf("<tr") && (l = "tbody"), 0 !== s.indexOf("<td") && 0 !== s.indexOf("<th") || (l = "tr"), 0 === s.indexOf("<tbody") && (l = "table"), 0 === s.indexOf("<option") && (l = "select"), i = document.createElement(l), i.innerHTML = t, a = 0; a < i.childNodes.length; a++) r.push(i.childNodes[a])
                    } else for (o = n || "#" !== t[0] || t.match(/[ .<>:~]/) ? (n || document).querySelectorAll(t) : [document.getElementById(t.split("#")[1])], a = 0; a < o.length; a++) o[a] && r.push(o[a])
                } else if (t.nodeType || t === window || t === document) r.push(t); else if (t.length > 0 && t[0].nodeType) for (a = 0; a < t.length; a++) r.push(t[a]);
                return new e(r)
            };
            return e.prototype = {
                addClass:         function (e) {
                    if (void 0 === e) return this;
                    for (var t = e.split(" "), n = 0; n < t.length; n++) for (var r = 0; r < this.length; r++) this[r].classList.add(t[n]);
                    return this
                }, removeClass:   function (e) {
                    for (var t = e.split(" "), n = 0; n < t.length; n++) for (var r = 0; r < this.length; r++) this[r].classList.remove(t[n]);
                    return this
                }, hasClass:      function (e) {
                    return !!this[0] && this[0].classList.contains(e)
                }, toggleClass:   function (e) {
                    for (var t = e.split(" "), n = 0; n < t.length; n++) for (var r = 0; r < this.length; r++) this[r].classList.toggle(t[n]);
                    return this
                }, attr:          function (e, t) {
                    if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                    for (var n = 0; n < this.length; n++) if (2 === arguments.length) this[n].setAttribute(e, t); else for (var r in e) this[n][r] = e[r], this[n].setAttribute(r, e[r]);
                    return this
                }, removeAttr:    function (e) {
                    for (var t = 0; t < this.length; t++) this[t].removeAttribute(e);
                    return this
                }, data:          function (e, t) {
                    if (void 0 !== t) {
                        for (var n = 0; n < this.length; n++) {
                            var r = this[n];
                            r.dom7ElementDataStorage || (r.dom7ElementDataStorage = {}), r.dom7ElementDataStorage[e] = t
                        }
                        return this
                    }
                    if (this[0]) {
                        var a = this[0].getAttribute("data-" + e);
                        return a || (this[0].dom7ElementDataStorage && e in this[0].dom7ElementDataStorage ? this[0].dom7ElementDataStorage[e] : void 0)
                    }
                }, transform:     function (e) {
                    for (var t = 0; t < this.length; t++) {
                        var n = this[t].style;
                        n.webkitTransform = n.MsTransform = n.msTransform = n.MozTransform = n.OTransform = n.transform = e
                    }
                    return this
                }, transition:    function (e) {
                    "string" != typeof e && (e += "ms");
                    for (var t = 0; t < this.length; t++) {
                        var n = this[t].style;
                        n.webkitTransitionDuration = n.MsTransitionDuration = n.msTransitionDuration = n.MozTransitionDuration = n.OTransitionDuration = n.transitionDuration = e
                    }
                    return this
                }, on:            function (e, n, r, a) {
                    function o(e) {
                        var a = e.target;
                        if (t(a).is(n)) r.call(a, e); else for (var o = t(a).parents(), i = 0; i < o.length; i++) t(o[i]).is(n) && r.call(o[i], e)
                    }

                    var i, s, l = e.split(" ");
                    for (i = 0; i < this.length; i++) if ("function" == typeof n || !1 === n) for ("function" == typeof n && (r = arguments[1], a = arguments[2] || !1), s = 0; s < l.length; s++) this[i].addEventListener(l[s], r, a); else for (s = 0; s < l.length; s++) this[i].dom7LiveListeners || (this[i].dom7LiveListeners = []), this[i].dom7LiveListeners.push({
                        listener:     r,
                        liveListener: o
                    }), this[i].addEventListener(l[s], o, a);
                    return this
                }, off:           function (e, t, n, r) {
                    for (var a = e.split(" "), o = 0; o < a.length; o++) for (var i = 0; i < this.length; i++) if ("function" == typeof t || !1 === t) "function" == typeof t && (n = arguments[1], r = arguments[2] || !1), this[i].removeEventListener(a[o], n, r); else if (this[i].dom7LiveListeners) for (var s = 0; s < this[i].dom7LiveListeners.length; s++) this[i].dom7LiveListeners[s].listener === n && this[i].removeEventListener(a[o], this[i].dom7LiveListeners[s].liveListener, r);
                    return this
                }, once:          function (e, t, n, r) {
                    function a(i) {
                        n(i), o.off(e, t, a, r)
                    }

                    var o = this;
                    "function" == typeof t && (t = !1, n = arguments[1], r = arguments[2]), o.on(e, t, a, r)
                }, trigger:       function (e, t) {
                    for (var n = 0; n < this.length; n++) {
                        var r;
                        try {
                            r = new window.CustomEvent(e, {detail: t, bubbles: !0, cancelable: !0})
                        } catch (n) {
                            r = document.createEvent("Event"), r.initEvent(e, !0, !0), r.detail = t
                        }
                        this[n].dispatchEvent(r)
                    }
                    return this
                }, transitionEnd: function (e) {
                    function t(o) {
                        if (o.target === this) for (e.call(this, o), n = 0; n < r.length; n++) a.off(r[n], t)
                    }

                    var n,
                        r = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
                        a = this;
                    if (e) for (n = 0; n < r.length; n++) a.on(r[n], t);
                    return this
                }, width:         function () {
                    return this[0] === window ? window.innerWidth : this.length > 0 ? parseFloat(this.css("width")) : null
                }, outerWidth:    function (e) {
                    return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
                }, height:        function () {
                    return this[0] === window ? window.innerHeight : this.length > 0 ? parseFloat(this.css("height")) : null
                }, outerHeight:   function (e) {
                    return this.length > 0 ? e ? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom")) : this[0].offsetHeight : null
                }, offset:        function () {
                    if (this.length > 0) {
                        var e = this[0], t = e.getBoundingClientRect(), n = document.body,
                            r = e.clientTop || n.clientTop || 0, a = e.clientLeft || n.clientLeft || 0,
                            o = window.pageYOffset || e.scrollTop, i = window.pageXOffset || e.scrollLeft;
                        return {top: t.top + o - r, left: t.left + i - a}
                    }
                    return null
                }, css:           function (e, t) {
                    var n;
                    if (1 === arguments.length) {
                        if ("string" != typeof e) {
                            for (n = 0; n < this.length; n++) for (var r in e) this[n].style[r] = e[r];
                            return this
                        }
                        if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(e)
                    }
                    if (2 === arguments.length && "string" == typeof e) {
                        for (n = 0; n < this.length; n++) this[n].style[e] = t;
                        return this
                    }
                    return this
                }, each:          function (e) {
                    for (var t = 0; t < this.length; t++) e.call(this[t], t, this[t]);
                    return this
                }, html:          function (e) {
                    if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
                    for (var t = 0; t < this.length; t++) this[t].innerHTML = e;
                    return this
                }, text:          function (e) {
                    if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
                    for (var t = 0; t < this.length; t++) this[t].textContent = e;
                    return this
                }, is:            function (n) {
                    if (!this[0]) return !1;
                    var r, a;
                    if ("string" == typeof n) {
                        var o = this[0];
                        if (o === document) return n === document;
                        if (o === window) return n === window;
                        if (o.matches) return o.matches(n);
                        if (o.webkitMatchesSelector) return o.webkitMatchesSelector(n);
                        if (o.mozMatchesSelector) return o.mozMatchesSelector(n);
                        if (o.msMatchesSelector) return o.msMatchesSelector(n);
                        for (r = t(n), a = 0; a < r.length; a++) if (r[a] === this[0]) return !0;
                        return !1
                    }
                    if (n === document) return this[0] === document;
                    if (n === window) return this[0] === window;
                    if (n.nodeType || n instanceof e) {
                        for (r = n.nodeType ? [n] : n, a = 0; a < r.length; a++) if (r[a] === this[0]) return !0;
                        return !1
                    }
                    return !1
                }, index:         function () {
                    if (this[0]) {
                        for (var e = this[0], t = 0; null !== (e = e.previousSibling);) 1 === e.nodeType && t++;
                        return t
                    }
                }, eq:            function (t) {
                    if (void 0 === t) return this;
                    var n, r = this.length;
                    return t > r - 1 ? new e([]) : t < 0 ? (n = r + t, new e(n < 0 ? [] : [this[n]])) : new e([this[t]])
                }, append:        function (t) {
                    var n, r;
                    for (n = 0; n < this.length; n++) if ("string" == typeof t) {
                        var a = document.createElement("div");
                        for (a.innerHTML = t; a.firstChild;) this[n].appendChild(a.firstChild)
                    } else if (t instanceof e) for (r = 0; r < t.length; r++) this[n].appendChild(t[r]); else this[n].appendChild(t);
                    return this
                }, prepend:       function (t) {
                    var n, r;
                    for (n = 0; n < this.length; n++) if ("string" == typeof t) {
                        var a = document.createElement("div");
                        for (a.innerHTML = t, r = a.childNodes.length - 1; r >= 0; r--) this[n].insertBefore(a.childNodes[r], this[n].childNodes[0])
                    } else if (t instanceof e) for (r = 0; r < t.length; r++) this[n].insertBefore(t[r], this[n].childNodes[0]); else this[n].insertBefore(t, this[n].childNodes[0]);
                    return this
                }, insertBefore:  function (e) {
                    for (var n = t(e), r = 0; r < this.length; r++) if (1 === n.length) n[0].parentNode.insertBefore(this[r], n[0]); else if (n.length > 1) for (var a = 0; a < n.length; a++) n[a].parentNode.insertBefore(this[r].cloneNode(!0), n[a])
                }, insertAfter:   function (e) {
                    for (var n = t(e), r = 0; r < this.length; r++) if (1 === n.length) n[0].parentNode.insertBefore(this[r], n[0].nextSibling); else if (n.length > 1) for (var a = 0; a < n.length; a++) n[a].parentNode.insertBefore(this[r].cloneNode(!0), n[a].nextSibling)
                }, next:          function (n) {
                    return new e(this.length > 0 ? n ? this[0].nextElementSibling && t(this[0].nextElementSibling).is(n) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : [])
                }, nextAll:       function (n) {
                    var r = [], a = this[0];
                    if (!a) return new e([]);
                    for (; a.nextElementSibling;) {
                        var o = a.nextElementSibling;
                        n ? t(o).is(n) && r.push(o) : r.push(o), a = o
                    }
                    return new e(r)
                }, prev:          function (n) {
                    return new e(this.length > 0 ? n ? this[0].previousElementSibling && t(this[0].previousElementSibling).is(n) ? [this[0].previousElementSibling] : [] : this[0].previousElementSibling ? [this[0].previousElementSibling] : [] : [])
                }, prevAll:       function (n) {
                    var r = [], a = this[0];
                    if (!a) return new e([]);
                    for (; a.previousElementSibling;) {
                        var o = a.previousElementSibling;
                        n ? t(o).is(n) && r.push(o) : r.push(o), a = o
                    }
                    return new e(r)
                }, parent:        function (e) {
                    for (var n = [], r = 0; r < this.length; r++) e ? t(this[r].parentNode).is(e) && n.push(this[r].parentNode) : n.push(this[r].parentNode);
                    return t(t.unique(n))
                }, parents:       function (e) {
                    for (var n = [], r = 0; r < this.length; r++) for (var a = this[r].parentNode; a;) e ? t(a).is(e) && n.push(a) : n.push(a), a = a.parentNode;
                    return t(t.unique(n))
                }, find:          function (t) {
                    for (var n = [], r = 0; r < this.length; r++) for (var a = this[r].querySelectorAll(t), o = 0; o < a.length; o++) n.push(a[o]);
                    return new e(n)
                }, children:      function (n) {
                    for (var r = [], a = 0; a < this.length; a++) for (var o = this[a].childNodes, i = 0; i < o.length; i++) n ? 1 === o[i].nodeType && t(o[i]).is(n) && r.push(o[i]) : 1 === o[i].nodeType && r.push(o[i]);
                    return new e(t.unique(r))
                }, remove:        function () {
                    for (var e = 0; e < this.length; e++) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                    return this
                }, add:           function () {
                    var e, n, r = this;
                    for (e = 0; e < arguments.length; e++) {
                        var a = t(arguments[e]);
                        for (n = 0; n < a.length; n++) r[r.length] = a[n], r.length++
                    }
                    return r
                }
            }, t.fn = e.prototype, t.unique = function (e) {
                for (var t = [], n = 0; n < e.length; n++) -1 === t.indexOf(e[n]) && t.push(e[n]);
                return t
            }, t
        }()), a = ["jQuery", "Zepto", "Dom7"], o = 0; o < a.length; o++) window[a[o]] && function (e) {
            e.fn.swiper = function (n) {
                var r;
                return e(this).each(function () {
                    var e = new t(this, n);
                    r || (r = e)
                }), r
            }
        }(window[a[o]]);
        var i;
        i = void 0 === n ? window.Dom7 || window.Zepto || window.jQuery : n, i && ("transitionEnd" in i.fn || (i.fn.transitionEnd = function (e) {
            function t(o) {
                if (o.target === this) for (e.call(this, o), n = 0; n < r.length; n++) a.off(r[n], t)
            }

            var n, r = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
                a = this;
            if (e) for (n = 0; n < r.length; n++) a.on(r[n], t);
            return this
        }), "transform" in i.fn || (i.fn.transform = function (e) {
            for (var t = 0; t < this.length; t++) {
                var n = this[t].style;
                n.webkitTransform = n.MsTransform = n.msTransform = n.MozTransform = n.OTransform = n.transform = e
            }
            return this
        }), "transition" in i.fn || (i.fn.transition = function (e) {
            "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t++) {
                var n = this[t].style;
                n.webkitTransitionDuration = n.MsTransitionDuration = n.msTransitionDuration = n.MozTransitionDuration = n.OTransitionDuration = n.transitionDuration = e
            }
            return this
        }), "outerWidth" in i.fn || (i.fn.outerWidth = function (e) {
            return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
        })), window.Swiper = t
    }(), e.exports = window.Swiper
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = {
        windowScroll:               function (e) {
            var t = null, n = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            e.forEach(function (e) {
                return e(n)
            }), window.addEventListener("scroll", function () {
                t && clearTimeout(t), t = setTimeout(function () {
                    var n = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
                    e.forEach(function (e) {
                        return e(n)
                    }), t = null
                }, 5)
            })
        }, windowResize:            function (e) {
            function t() {
                new Date - n < a ? setTimeout(t, a) : (r = !1, e.forEach(function (e) {
                    return e(window.innerWidth, window.innerHeight)
                }))
            }

            var n = void 0, r = !1, a = 200;
            e.forEach(function (e) {
                return e(window.innerWidth, window.innerHeight)
            }), window.addEventListener("resize", function () {
                n = new Date, !1 === r && (r = !0, setTimeout(t, a))
            })
        }, windowOrientationchange: function (e) {
            window.addEventListener("orientationchange", function () {
                e.forEach(function (e) {
                    return e(window.matchMedia("(orientation: portrait)").matches ? "portrait" : "landscape")
                })
            })
        }
    };
    t.default = r
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.initComponents = t.getEventsCallbacks = t.getAPICollection = void 0;
    var a = n(106), o = r(a), i = n(107), s = r(i), l = n(108), c = r(l);
    t.getAPICollection = o.default, t.getEventsCallbacks = s.default, t.initComponents = c.default
}, function (e, t, n) {
    "use strict";

    function r(e) {
        var t = {};
        for (var n in e) t[n] = e[n]();
        return t
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.default = r
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        var n = [];
        for (var r in t) {
            var o = t[r];
            for (var i in e) {
                var s = "on" + i.charAt(0).toUpperCase() + i.substr(1), l = o[s];
                l && (n[i] || (n[i] = []), n[i].push(l))
            }
        }
        return new a.Promise(function (e) {
            e(n)
        })
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.default = r;
    var a = n(3)
}, function (e, t, n) {
    "use strict";

    function r(e) {
        for (var t in e) {
            if (!e[t]) return;
            if (e[t].init) try {
                e[t].init()
            } catch (e) {
                console.error(t.toUpperCase() + " INIT FAIL: ", e)
            }
        }
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.default = r
}]);
