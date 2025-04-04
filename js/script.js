(() => {
  var e = {
    16: e => {
      function t(e) {
        var t = new Error("Cannot find module '" + e + "'");
        throw t.code = "MODULE_NOT_FOUND", t;
      }
      t.keys = () => [], t.resolve = t, t.id = 16, e.exports = t;
    },
    102: (e, t, s) => {
      parcelRequire = function(t, i, r) {
        var n, a = "function" == typeof parcelRequire && parcelRequire;
        function o(e, r) {
          if (!i[e]) {
            if (!t[e]) {
              var n = "function" == typeof parcelRequire && parcelRequire;
              if (!r && n) return n(e, !0);
              if (a) return a(e, !0);
              if ("string" == typeof e) return s(16)(e);
              var l = new Error("Cannot find module '" + e + "'");
              throw l.code = "MODULE_NOT_FOUND", l;
            }
            c.resolve = function(s) {
              return t[e][1][s] || s;
            }, c.cache = {};
            var d = i[e] = new o.Module(e);
            t[e][0].call(d.exports, c, d, d.exports, this);
          }
          return i[e].exports;
          function c(e) {
            return o(c.resolve(e));
          }
        }
        o.isParcelRequire = !0, o.Module = function(e) {
          this.id = e, this.bundle = o, this.exports = {};
        }, o.modules = t, o.cache = i, o.parent = a, o.register = function(e, s) {
          t[e] = [ function(e, t) {
            t.exports = s;
          }, {} ];
        };
        for (var l = 0; l < r.length; l++) try {
          o(r[l]);
        } catch (t) {
          n || (n = t);
        }
        if (r.length) {
          var d = o(r[r.length - 1]);
          e.exports = d;
        }
        if (parcelRequire = o, n) throw n;
        return o;
      }({
        IvXu: [ function(e, t, s) {
          "use strict";
          function i(e) {
            var t, s, i, r, n = null !== (t = document.querySelectorAll(e.elements)) && void 0 !== t ? t : console.warn("parallaxMouse: Elements is empty!"), a = null !== (s = e.moveFactor) && void 0 !== s ? s : 5, o = null !== (i = e.wrap) && void 0 !== i ? i : ".container", l = null !== (r = e.perspective) && void 0 !== r && r;
            n.forEach((function(e) {
              l && (e.style.transformStyle = "preserve-3d");
            })), document.querySelector(o).addEventListener("mousemove", (function(e) {
              var t = (0 - e.pageX / window.innerWidth * a - a / 2 + a) / 2, s = (0 - e.pageY / window.innerHeight * a - a / 2 + a) / 2;
              n.forEach((function(i) {
                if (i.style.transform = "translate(".concat(t, "%, ").concat(s, "%)"), l) {
                  var r = (e.pageX - window.pageYOffset - window.innerWidth / 2) / window.innerWidth, n = (e.pageY - window.pageXOffset - window.innerHeight / 2) / window.innerWidth;
                  i.style.transform += "rotateX(".concat(30 * r, "deg) rotateY(").concat(-30 * n, "deg) perspective(").concat(l, ")");
                }
              }));
            }));
          }
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.parallaxMouse = i, window.parallaxMouse = i;
        }, {} ]
      }, {}, [ "IvXu" ]);
    }
  }, t = {};
  function s(i) {
    var r = t[i];
    if (void 0 !== r) return r.exports;
    var n = t[i] = {
      exports: {}
    };
    return e[i](n, n.exports, s), n.exports;
  }
  s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
    "use strict";
    const e = function() {
      function e(e) {
        var t = this;
        this.listener = function(e) {
          (e.matches ? t.matchFns : t.unmatchFns).forEach((function(e) {
            e();
          }));
        }, this.toggler = window.matchMedia(e), this.toggler.addListener(this.listener), 
        this.matchFns = [], this.unmatchFns = [];
      }
      return e.prototype.add = function(e, t) {
        this.matchFns.push(e), this.unmatchFns.push(t), (this.toggler.matches ? e : t)();
      }, e;
    }();
    var t = function(e) {
      return Array.prototype.slice.call(e);
    }, i = function(e, s) {
      return t((s || document).querySelectorAll(e));
    }, r = "mm-spn";
    const n = function() {
      function e(e, t, s, i, n) {
        this.node = e, this.title = t, this.slidingSubmenus = i, this.selectedClass = s, 
        this.node.classList.add(r), this.node.classList.add(r + "--" + n), this.node.classList.add(r + "--" + (this.slidingSubmenus ? "navbar" : "vertical")), 
        this._setSelectedl(), this._initAnchors();
      }
      return Object.defineProperty(e.prototype, "prefix", {
        get: function() {
          return r;
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype.openPanel = function(e) {
        var s = e.parentElement;
        if (this.slidingSubmenus) {
          var n = e.dataset.mmSpnTitle;
          s === this.node ? this.node.classList.add(r + "--main") : (this.node.classList.remove(r + "--main"), 
          n || t(s.children).forEach((function(e) {
            e.matches("a, span") && (n = e.textContent);
          }))), n || (n = this.title), this.node.dataset.mmSpnTitle = n, i("." + r + "--open", this.node).forEach((function(e) {
            e.classList.remove(r + "--open"), e.classList.remove(r + "--parent");
          })), e.classList.add(r + "--open"), e.classList.remove(r + "--parent");
          for (var a = e.parentElement.closest("ul"); a; ) a.classList.add(r + "--open"), 
          a.classList.add(r + "--parent"), a = a.parentElement.closest("ul");
        } else {
          var o = e.matches("." + r + "--open");
          i("." + r + "--open", this.node).forEach((function(e) {
            e.classList.remove(r + "--open");
          })), e.classList[o ? "remove" : "add"](r + "--open");
          for (var l = e.parentElement.closest("ul"); l; ) l.classList.add(r + "--open"), 
          l = l.parentElement.closest("ul");
        }
      }, e.prototype._setSelectedl = function() {
        var e = i("." + this.selectedClass, this.node), t = e[e.length - 1], s = null;
        t && (s = t.closest("ul")), s || (s = this.node.querySelector("ul")), this.openPanel(s);
      }, e.prototype._initAnchors = function() {
        var e = this;
        this.node.addEventListener("click", (function(s) {
          var n = s.target, a = !1;
          a = a || function(e) {
            return !!e.matches("a");
          }(n), a = a || function(s) {
            var i;
            return !!(i = s.closest("span") ? s.parentElement : !!s.closest("li") && s) && (t(i.children).forEach((function(t) {
              t.matches("ul") && e.openPanel(t);
            })), !0);
          }(n), a = a || function(t) {
            var s = i("." + r + "--open", t), n = s[s.length - 1];
            if (n) {
              var a = n.parentElement.closest("ul");
              if (a) return e.openPanel(a), !0;
            }
            return !1;
          }(n), a && s.stopImmediatePropagation();
        }));
      }, e;
    }();
    var a = "mm-ocd";
    const o = function() {
      function e(e, t) {
        var s = this;
        void 0 === e && (e = null), this.wrapper = document.createElement("div"), this.wrapper.classList.add("" + a), 
        this.wrapper.classList.add(a + "--" + t), this.content = document.createElement("div"), 
        this.content.classList.add(a + "__content"), this.wrapper.append(this.content), 
        this.backdrop = document.createElement("div"), this.backdrop.classList.add(a + "__backdrop"), 
        this.wrapper.append(this.backdrop), document.body.append(this.wrapper), e && this.content.append(e);
        var i = function(e) {
          s.close(), e.stopImmediatePropagation();
        };
        this.backdrop.addEventListener("touchstart", i, {
          passive: !0
        }), this.backdrop.addEventListener("mousedown", i, {
          passive: !0
        });
      }
      return Object.defineProperty(e.prototype, "prefix", {
        get: function() {
          return a;
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype.open = function() {
        this.wrapper.classList.add(a + "--open"), document.body.classList.add(a + "-opened");
      }, e.prototype.close = function() {
        this.wrapper.classList.remove(a + "--open"), document.body.classList.remove(a + "-opened");
      }, e;
    }();
    const l = function() {
      function t(t, s) {
        void 0 === s && (s = "all"), this.menu = t, this.toggler = new e(s);
      }
      return t.prototype.navigation = function(e) {
        var t = this;
        if (!this.navigator) {
          var s = (e = e || {}).title, i = void 0 === s ? "Menu" : s, r = e.selectedClass, a = void 0 === r ? "Selected" : r, o = e.slidingSubmenus, l = void 0 === o || o, d = e.theme, c = void 0 === d ? "light" : d;
          this.navigator = new n(this.menu, i, a, l, c), this.toggler.add((function() {
            return t.menu.classList.add(t.navigator.prefix);
          }), (function() {
            return t.menu.classList.remove(t.navigator.prefix);
          }));
        }
        return this.navigator;
      }, t.prototype.offcanvas = function(e) {
        var t = this;
        if (!this.drawer) {
          var s = (e = e || {}).position, i = void 0 === s ? "left" : s;
          this.drawer = new o(null, i);
          var r = document.createComment("original menu location");
          this.menu.after(r), this.toggler.add((function() {
            t.drawer.content.append(t.menu);
          }), (function() {
            t.drawer.close(), r.after(t.menu);
          }));
        }
        return this.drawer;
      }, t;
    }(), d = l;
    window.MmenuLight = l;
    var c = s(102);
    function p(e) {
      return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object;
    }
    function u(e, t) {
      void 0 === e && (e = {}), void 0 === t && (t = {});
      const s = [ "__proto__", "constructor", "prototype" ];
      Object.keys(t).filter((e => s.indexOf(e) < 0)).forEach((s => {
        void 0 === e[s] ? e[s] = t[s] : p(t[s]) && p(e[s]) && Object.keys(t[s]).length > 0 && u(e[s], t[s]);
      }));
    }
    const m = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: {
        blur() {},
        nodeName: ""
      },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({
        initEvent() {}
      }),
      createElement: () => ({
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName: () => []
      }),
      createElementNS: () => ({}),
      importNode: () => null,
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
      }
    };
    function f() {
      const e = "undefined" != typeof document ? document : {};
      return u(e, m), e;
    }
    const h = {
      document: m,
      navigator: {
        userAgent: ""
      },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
      },
      history: {
        replaceState() {},
        pushState() {},
        go() {},
        back() {}
      },
      CustomEvent: function() {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle: () => ({
        getPropertyValue: () => ""
      }),
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia: () => ({}),
      requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
      cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      }
    };
    function v() {
      const e = "undefined" != typeof window ? window : {};
      return u(e, h), e;
    }
    function g(e, t) {
      return void 0 === t && (t = 0), setTimeout(e, t);
    }
    function w() {
      return Date.now();
    }
    function b(e, t) {
      void 0 === t && (t = "x");
      const s = v();
      let i, r, n;
      const a = function(e) {
        const t = v();
        let s;
        return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), 
        s || (s = e.style), s;
      }(e);
      return s.WebKitCSSMatrix ? (r = a.transform || a.webkitTransform, r.split(",").length > 6 && (r = r.split(", ").map((e => e.replace(",", "."))).join(", ")), 
      n = new s.WebKitCSSMatrix("none" === r ? "" : r)) : (n = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), 
      i = n.toString().split(",")), "x" === t && (r = s.WebKitCSSMatrix ? n.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), 
      "y" === t && (r = s.WebKitCSSMatrix ? n.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), 
      r || 0;
    }
    function S(e) {
      return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1);
    }
    function y() {
      const e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = [ "__proto__", "constructor", "prototype" ];
      for (let i = 1; i < arguments.length; i += 1) {
        const r = i < 0 || arguments.length <= i ? void 0 : arguments[i];
        if (null != r && (s = r, !("undefined" != typeof window && void 0 !== window.HTMLElement ? s instanceof HTMLElement : s && (1 === s.nodeType || 11 === s.nodeType)))) {
          const s = Object.keys(Object(r)).filter((e => t.indexOf(e) < 0));
          for (let t = 0, i = s.length; t < i; t += 1) {
            const i = s[t], n = Object.getOwnPropertyDescriptor(r, i);
            void 0 !== n && n.enumerable && (S(e[i]) && S(r[i]) ? r[i].__swiper__ ? e[i] = r[i] : y(e[i], r[i]) : !S(e[i]) && S(r[i]) ? (e[i] = {}, 
            r[i].__swiper__ ? e[i] = r[i] : y(e[i], r[i])) : e[i] = r[i]);
          }
        }
      }
      var s;
      return e;
    }
    function T(e, t, s) {
      e.style.setProperty(t, s);
    }
    function x(e) {
      let {swiper: t, targetPosition: s, side: i} = e;
      const r = v(), n = -t.translate;
      let a, o = null;
      const l = t.params.speed;
      t.wrapperEl.style.scrollSnapType = "none", r.cancelAnimationFrame(t.cssModeFrameID);
      const d = s > n ? "next" : "prev", c = (e, t) => "next" === d && e >= t || "prev" === d && e <= t, p = () => {
        a = (new Date).getTime(), null === o && (o = a);
        const e = Math.max(Math.min((a - o) / l, 1), 0), d = .5 - Math.cos(e * Math.PI) / 2;
        let u = n + d * (s - n);
        if (c(u, s) && (u = s), t.wrapperEl.scrollTo({
          [i]: u
        }), c(u, s)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", 
        setTimeout((() => {
          t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
            [i]: u
          });
        })), void r.cancelAnimationFrame(t.cssModeFrameID);
        t.cssModeFrameID = r.requestAnimationFrame(p);
      };
      p();
    }
    function E(e, t) {
      void 0 === t && (t = "");
      const s = v(), i = [ ...e.children ];
      return s.HTMLSlotElement && e instanceof HTMLSlotElement && i.push(...e.assignedElements()), 
      t ? i.filter((e => e.matches(t))) : i;
    }
    function C(e) {
      try {
        return void console.warn(e);
      } catch (e) {}
    }
    function M(e, t) {
      void 0 === t && (t = []);
      const s = document.createElement(e);
      return s.classList.add(...Array.isArray(t) ? t : function(e) {
        return void 0 === e && (e = ""), e.trim().split(" ").filter((e => !!e.trim()));
      }(t)), s;
    }
    function L(e, t) {
      return v().getComputedStyle(e, null).getPropertyValue(t);
    }
    function P(e) {
      let t, s = e;
      if (s) {
        for (t = 0; null !== (s = s.previousSibling); ) 1 === s.nodeType && (t += 1);
        return t;
      }
    }
    function k(e, t) {
      const s = [];
      let i = e.parentElement;
      for (;i; ) t ? i.matches(t) && s.push(i) : s.push(i), i = i.parentElement;
      return s;
    }
    function I(e, t, s) {
      const i = v();
      return s ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(i.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(i.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth;
    }
    function O(e) {
      return (Array.isArray(e) ? e : [ e ]).filter((e => !!e));
    }
    let A, z, _;
    function G() {
      return A || (A = function() {
        const e = v(), t = f();
        return {
          smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
          touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
        };
      }()), A;
    }
    function D(e) {
      return void 0 === e && (e = {}), z || (z = function(e) {
        let {userAgent: t} = void 0 === e ? {} : e;
        const s = G(), i = v(), r = i.navigator.platform, n = t || i.navigator.userAgent, a = {
          ios: !1,
          android: !1
        }, o = i.screen.width, l = i.screen.height, d = n.match(/(Android);?[\s\/]+([\d.]+)?/);
        let c = n.match(/(iPad).*OS\s([\d_]+)/);
        const p = n.match(/(iPod)(.*OS\s([\d_]+))?/), u = !c && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/), m = "Win32" === r;
        let f = "MacIntel" === r;
        return !c && f && s.touch && [ "1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810" ].indexOf(`${o}x${l}`) >= 0 && (c = n.match(/(Version)\/([\d.]+)/), 
        c || (c = [ 0, 1, "13_0_0" ]), f = !1), d && !m && (a.os = "android", a.android = !0), 
        (c || u || p) && (a.os = "ios", a.ios = !0), a;
      }(e)), z;
    }
    function $() {
      return _ || (_ = function() {
        const e = v(), t = D();
        let s = !1;
        function i() {
          const t = e.navigator.userAgent.toLowerCase();
          return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0;
        }
        if (i()) {
          const t = String(e.navigator.userAgent);
          if (t.includes("Version/")) {
            const [e, i] = t.split("Version/")[1].split(" ")[0].split(".").map((e => Number(e)));
            s = e < 16 || 16 === e && i < 2;
          }
        }
        const r = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent), n = i();
        return {
          isSafari: s || n,
          needPerspectiveFix: s,
          need3dFix: n || r && t.ios,
          isWebView: r
        };
      }()), _;
    }
    var B = {
      on(e, t, s) {
        const i = this;
        if (!i.eventsListeners || i.destroyed) return i;
        if ("function" != typeof t) return i;
        const r = s ? "unshift" : "push";
        return e.split(" ").forEach((e => {
          i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][r](t);
        })), i;
      },
      once(e, t, s) {
        const i = this;
        if (!i.eventsListeners || i.destroyed) return i;
        if ("function" != typeof t) return i;
        function r() {
          i.off(e, r), r.__emitterProxy && delete r.__emitterProxy;
          for (var s = arguments.length, n = new Array(s), a = 0; a < s; a++) n[a] = arguments[a];
          t.apply(i, n);
        }
        return r.__emitterProxy = t, i.on(e, r, s);
      },
      onAny(e, t) {
        const s = this;
        if (!s.eventsListeners || s.destroyed) return s;
        if ("function" != typeof e) return s;
        const i = t ? "unshift" : "push";
        return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s;
      },
      offAny(e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed) return t;
        if (!t.eventsAnyListeners) return t;
        const s = t.eventsAnyListeners.indexOf(e);
        return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
      },
      off(e, t) {
        const s = this;
        return !s.eventsListeners || s.destroyed ? s : s.eventsListeners ? (e.split(" ").forEach((e => {
          void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach(((i, r) => {
            (i === t || i.__emitterProxy && i.__emitterProxy === t) && s.eventsListeners[e].splice(r, 1);
          }));
        })), s) : s;
      },
      emit() {
        const e = this;
        if (!e.eventsListeners || e.destroyed) return e;
        if (!e.eventsListeners) return e;
        let t, s, i;
        for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++) n[a] = arguments[a];
        "string" == typeof n[0] || Array.isArray(n[0]) ? (t = n[0], s = n.slice(1, n.length), 
        i = e) : (t = n[0].events, s = n[0].data, i = n[0].context || e), s.unshift(i);
        return (Array.isArray(t) ? t : t.split(" ")).forEach((t => {
          e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e => {
            e.apply(i, [ t, ...s ]);
          })), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e => {
            e.apply(i, s);
          }));
        })), e;
      }
    };
    const F = (e, t, s) => {
      t && !e.classList.contains(s) ? e.classList.add(s) : !t && e.classList.contains(s) && e.classList.remove(s);
    };
    const V = (e, t, s) => {
      t && !e.classList.contains(s) ? e.classList.add(s) : !t && e.classList.contains(s) && e.classList.remove(s);
    };
    const N = (e, t) => {
      if (!e || e.destroyed || !e.params) return;
      const s = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
      if (s) {
        let t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
        !t && e.isElement && (s.shadowRoot ? t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame((() => {
          s.shadowRoot && (t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`), 
          t && t.remove());
        }))), t && t.remove();
      }
    }, H = (e, t) => {
      if (!e.slides[t]) return;
      const s = e.slides[t].querySelector('[loading="lazy"]');
      s && s.removeAttribute("loading");
    }, R = e => {
      if (!e || e.destroyed || !e.params) return;
      let t = e.params.lazyPreloadPrevNext;
      const s = e.slides.length;
      if (!s || !t || t < 0) return;
      t = Math.min(t, s);
      const i = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView), r = e.activeIndex;
      if (e.params.grid && e.params.grid.rows > 1) {
        const s = r, n = [ s - t ];
        return n.push(...Array.from({
          length: t
        }).map(((e, t) => s + i + t))), void e.slides.forEach(((t, s) => {
          n.includes(t.column) && H(e, s);
        }));
      }
      const n = r + i - 1;
      if (e.params.rewind || e.params.loop) for (let i = r - t; i <= n + t; i += 1) {
        const t = (i % s + s) % s;
        (t < r || t > n) && H(e, t);
      } else for (let i = Math.max(r - t, 0); i <= Math.min(n + t, s - 1); i += 1) i !== r && (i > n || i < r) && H(e, i);
    };
    var q = {
      updateSize: function() {
        const e = this;
        let t, s;
        const i = e.el;
        t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : i.clientWidth, 
        s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : i.clientHeight, 
        0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(L(i, "padding-left") || 0, 10) - parseInt(L(i, "padding-right") || 0, 10), 
        s = s - parseInt(L(i, "padding-top") || 0, 10) - parseInt(L(i, "padding-bottom") || 0, 10), 
        Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
          width: t,
          height: s,
          size: e.isHorizontal() ? t : s
        }));
      },
      updateSlides: function() {
        const e = this;
        function t(t, s) {
          return parseFloat(t.getPropertyValue(e.getDirectionLabel(s)) || 0);
        }
        const s = e.params, {wrapperEl: i, slidesEl: r, size: n, rtlTranslate: a, wrongRTL: o} = e, l = e.virtual && s.virtual.enabled, d = l ? e.virtual.slides.length : e.slides.length, c = E(r, `.${e.params.slideClass}, swiper-slide`), p = l ? e.virtual.slides.length : c.length;
        let u = [];
        const m = [], f = [];
        let h = s.slidesOffsetBefore;
        "function" == typeof h && (h = s.slidesOffsetBefore.call(e));
        let v = s.slidesOffsetAfter;
        "function" == typeof v && (v = s.slidesOffsetAfter.call(e));
        const g = e.snapGrid.length, w = e.slidesGrid.length;
        let b = s.spaceBetween, S = -h, y = 0, x = 0;
        if (void 0 === n) return;
        "string" == typeof b && b.indexOf("%") >= 0 ? b = parseFloat(b.replace("%", "")) / 100 * n : "string" == typeof b && (b = parseFloat(b)), 
        e.virtualSize = -b, c.forEach((e => {
          a ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", 
          e.style.marginTop = "";
        })), s.centeredSlides && s.cssMode && (T(i, "--swiper-centered-offset-before", ""), 
        T(i, "--swiper-centered-offset-after", ""));
        const C = s.grid && s.grid.rows > 1 && e.grid;
        let M;
        C ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides();
        const P = "auto" === s.slidesPerView && s.breakpoints && Object.keys(s.breakpoints).filter((e => void 0 !== s.breakpoints[e].slidesPerView)).length > 0;
        for (let i = 0; i < p; i += 1) {
          let r;
          if (M = 0, c[i] && (r = c[i]), C && e.grid.updateSlide(i, r, c), !c[i] || "none" !== L(r, "display")) {
            if ("auto" === s.slidesPerView) {
              P && (c[i].style[e.getDirectionLabel("width")] = "");
              const n = getComputedStyle(r), a = r.style.transform, o = r.style.webkitTransform;
              if (a && (r.style.transform = "none"), o && (r.style.webkitTransform = "none"), 
              s.roundLengths) M = e.isHorizontal() ? I(r, "width", !0) : I(r, "height", !0); else {
                const e = t(n, "width"), s = t(n, "padding-left"), i = t(n, "padding-right"), a = t(n, "margin-left"), o = t(n, "margin-right"), l = n.getPropertyValue("box-sizing");
                if (l && "border-box" === l) M = e + a + o; else {
                  const {clientWidth: t, offsetWidth: n} = r;
                  M = e + s + i + a + o + (n - t);
                }
              }
              a && (r.style.transform = a), o && (r.style.webkitTransform = o), s.roundLengths && (M = Math.floor(M));
            } else M = (n - (s.slidesPerView - 1) * b) / s.slidesPerView, s.roundLengths && (M = Math.floor(M)), 
            c[i] && (c[i].style[e.getDirectionLabel("width")] = `${M}px`);
            c[i] && (c[i].swiperSlideSize = M), f.push(M), s.centeredSlides ? (S = S + M / 2 + y / 2 + b, 
            0 === y && 0 !== i && (S = S - n / 2 - b), 0 === i && (S = S - n / 2 - b), Math.abs(S) < .001 && (S = 0), 
            s.roundLengths && (S = Math.floor(S)), x % s.slidesPerGroup == 0 && u.push(S), m.push(S)) : (s.roundLengths && (S = Math.floor(S)), 
            (x - Math.min(e.params.slidesPerGroupSkip, x)) % e.params.slidesPerGroup == 0 && u.push(S), 
            m.push(S), S = S + M + b), e.virtualSize += M + b, y = M, x += 1;
          }
        }
        if (e.virtualSize = Math.max(e.virtualSize, n) + v, a && o && ("slide" === s.effect || "coverflow" === s.effect) && (i.style.width = `${e.virtualSize + b}px`), 
        s.setWrapperSize && (i.style[e.getDirectionLabel("width")] = `${e.virtualSize + b}px`), 
        C && e.grid.updateWrapperSize(M, u), !s.centeredSlides) {
          const t = [];
          for (let i = 0; i < u.length; i += 1) {
            let r = u[i];
            s.roundLengths && (r = Math.floor(r)), u[i] <= e.virtualSize - n && t.push(r);
          }
          u = t, Math.floor(e.virtualSize - n) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - n);
        }
        if (l && s.loop) {
          const t = f[0] + b;
          if (s.slidesPerGroup > 1) {
            const i = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / s.slidesPerGroup), r = t * s.slidesPerGroup;
            for (let e = 0; e < i; e += 1) u.push(u[u.length - 1] + r);
          }
          for (let i = 0; i < e.virtual.slidesBefore + e.virtual.slidesAfter; i += 1) 1 === s.slidesPerGroup && u.push(u[u.length - 1] + t), 
          m.push(m[m.length - 1] + t), e.virtualSize += t;
        }
        if (0 === u.length && (u = [ 0 ]), 0 !== b) {
          const t = e.isHorizontal() && a ? "marginLeft" : e.getDirectionLabel("marginRight");
          c.filter(((e, t) => !(s.cssMode && !s.loop) || t !== c.length - 1)).forEach((e => {
            e.style[t] = `${b}px`;
          }));
        }
        if (s.centeredSlides && s.centeredSlidesBounds) {
          let e = 0;
          f.forEach((t => {
            e += t + (b || 0);
          })), e -= b;
          const t = e > n ? e - n : 0;
          u = u.map((e => e <= 0 ? -h : e > t ? t + v : e));
        }
        if (s.centerInsufficientSlides) {
          let e = 0;
          f.forEach((t => {
            e += t + (b || 0);
          })), e -= b;
          const t = (s.slidesOffsetBefore || 0) + (s.slidesOffsetAfter || 0);
          if (e + t < n) {
            const s = (n - e - t) / 2;
            u.forEach(((e, t) => {
              u[t] = e - s;
            })), m.forEach(((e, t) => {
              m[t] = e + s;
            }));
          }
        }
        if (Object.assign(e, {
          slides: c,
          snapGrid: u,
          slidesGrid: m,
          slidesSizesGrid: f
        }), s.centeredSlides && s.cssMode && !s.centeredSlidesBounds) {
          T(i, "--swiper-centered-offset-before", -u[0] + "px"), T(i, "--swiper-centered-offset-after", e.size / 2 - f[f.length - 1] / 2 + "px");
          const t = -e.snapGrid[0], s = -e.slidesGrid[0];
          e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + s));
        }
        if (p !== d && e.emit("slidesLengthChange"), u.length !== g && (e.params.watchOverflow && e.checkOverflow(), 
        e.emit("snapGridLengthChange")), m.length !== w && e.emit("slidesGridLengthChange"), 
        s.watchSlidesProgress && e.updateSlidesOffset(), e.emit("slidesUpdated"), !(l || s.cssMode || "slide" !== s.effect && "fade" !== s.effect)) {
          const t = `${s.containerModifierClass}backface-hidden`, i = e.el.classList.contains(t);
          p <= s.maxBackfaceHiddenSlides ? i || e.el.classList.add(t) : i && e.el.classList.remove(t);
        }
      },
      updateAutoHeight: function(e) {
        const t = this, s = [], i = t.virtual && t.params.virtual.enabled;
        let r, n = 0;
        "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
        const a = e => i ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1) if (t.params.centeredSlides) (t.visibleSlides || []).forEach((e => {
          s.push(e);
        })); else for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
          const e = t.activeIndex + r;
          if (e > t.slides.length && !i) break;
          s.push(a(e));
        } else s.push(a(t.activeIndex));
        for (r = 0; r < s.length; r += 1) if (void 0 !== s[r]) {
          const e = s[r].offsetHeight;
          n = e > n ? e : n;
        }
        (n || 0 === n) && (t.wrapperEl.style.height = `${n}px`);
      },
      updateSlidesOffset: function() {
        const e = this, t = e.slides, s = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
        for (let i = 0; i < t.length; i += 1) t[i].swiperSlideOffset = (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) - s - e.cssOverflowAdjustment();
      },
      updateSlidesProgress: function(e) {
        void 0 === e && (e = this && this.translate || 0);
        const t = this, s = t.params, {slides: i, rtlTranslate: r, snapGrid: n} = t;
        if (0 === i.length) return;
        void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
        let a = -e;
        r && (a = e), t.visibleSlidesIndexes = [], t.visibleSlides = [];
        let o = s.spaceBetween;
        "string" == typeof o && o.indexOf("%") >= 0 ? o = parseFloat(o.replace("%", "")) / 100 * t.size : "string" == typeof o && (o = parseFloat(o));
        for (let e = 0; e < i.length; e += 1) {
          const l = i[e];
          let d = l.swiperSlideOffset;
          s.cssMode && s.centeredSlides && (d -= i[0].swiperSlideOffset);
          const c = (a + (s.centeredSlides ? t.minTranslate() : 0) - d) / (l.swiperSlideSize + o), p = (a - n[0] + (s.centeredSlides ? t.minTranslate() : 0) - d) / (l.swiperSlideSize + o), u = -(a - d), m = u + t.slidesSizesGrid[e], f = u >= 0 && u <= t.size - t.slidesSizesGrid[e], h = u >= 0 && u < t.size - 1 || m > 1 && m <= t.size || u <= 0 && m >= t.size;
          h && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(e)), F(l, h, s.slideVisibleClass), 
          F(l, f, s.slideFullyVisibleClass), l.progress = r ? -c : c, l.originalProgress = r ? -p : p;
        }
      },
      updateProgress: function(e) {
        const t = this;
        if (void 0 === e) {
          const s = t.rtlTranslate ? -1 : 1;
          e = t && t.translate && t.translate * s || 0;
        }
        const s = t.params, i = t.maxTranslate() - t.minTranslate();
        let {progress: r, isBeginning: n, isEnd: a, progressLoop: o} = t;
        const l = n, d = a;
        if (0 === i) r = 0, n = !0, a = !0; else {
          r = (e - t.minTranslate()) / i;
          const s = Math.abs(e - t.minTranslate()) < 1, o = Math.abs(e - t.maxTranslate()) < 1;
          n = s || r <= 0, a = o || r >= 1, s && (r = 0), o && (r = 1);
        }
        if (s.loop) {
          const s = t.getSlideIndexByData(0), i = t.getSlideIndexByData(t.slides.length - 1), r = t.slidesGrid[s], n = t.slidesGrid[i], a = t.slidesGrid[t.slidesGrid.length - 1], l = Math.abs(e);
          o = l >= r ? (l - r) / a : (l + a - n) / a, o > 1 && (o -= 1);
        }
        Object.assign(t, {
          progress: r,
          progressLoop: o,
          isBeginning: n,
          isEnd: a
        }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), 
        n && !l && t.emit("reachBeginning toEdge"), a && !d && t.emit("reachEnd toEdge"), 
        (l && !n || d && !a) && t.emit("fromEdge"), t.emit("progress", r);
      },
      updateSlidesClasses: function() {
        const e = this, {slides: t, params: s, slidesEl: i, activeIndex: r} = e, n = e.virtual && s.virtual.enabled, a = e.grid && s.grid && s.grid.rows > 1, o = e => E(i, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
        let l, d, c;
        if (n) if (s.loop) {
          let t = r - e.virtual.slidesBefore;
          t < 0 && (t = e.virtual.slides.length + t), t >= e.virtual.slides.length && (t -= e.virtual.slides.length), 
          l = o(`[data-swiper-slide-index="${t}"]`);
        } else l = o(`[data-swiper-slide-index="${r}"]`); else a ? (l = t.find((e => e.column === r)), 
        c = t.find((e => e.column === r + 1)), d = t.find((e => e.column === r - 1))) : l = t[r];
        l && (a || (c = function(e, t) {
          const s = [];
          for (;e.nextElementSibling; ) {
            const i = e.nextElementSibling;
            t ? i.matches(t) && s.push(i) : s.push(i), e = i;
          }
          return s;
        }(l, `.${s.slideClass}, swiper-slide`)[0], s.loop && !c && (c = t[0]), d = function(e, t) {
          const s = [];
          for (;e.previousElementSibling; ) {
            const i = e.previousElementSibling;
            t ? i.matches(t) && s.push(i) : s.push(i), e = i;
          }
          return s;
        }(l, `.${s.slideClass}, swiper-slide`)[0], s.loop && 0 === !d && (d = t[t.length - 1]))), 
        t.forEach((e => {
          V(e, e === l, s.slideActiveClass), V(e, e === c, s.slideNextClass), V(e, e === d, s.slidePrevClass);
        })), e.emitSlidesClasses();
      },
      updateActiveIndex: function(e) {
        const t = this, s = t.rtlTranslate ? t.translate : -t.translate, {snapGrid: i, params: r, activeIndex: n, realIndex: a, snapIndex: o} = t;
        let l, d = e;
        const c = e => {
          let s = e - t.virtual.slidesBefore;
          return s < 0 && (s = t.virtual.slides.length + s), s >= t.virtual.slides.length && (s -= t.virtual.slides.length), 
          s;
        };
        if (void 0 === d && (d = function(e) {
          const {slidesGrid: t, params: s} = e, i = e.rtlTranslate ? e.translate : -e.translate;
          let r;
          for (let e = 0; e < t.length; e += 1) void 0 !== t[e + 1] ? i >= t[e] && i < t[e + 1] - (t[e + 1] - t[e]) / 2 ? r = e : i >= t[e] && i < t[e + 1] && (r = e + 1) : i >= t[e] && (r = e);
          return s.normalizeSlideIndex && (r < 0 || void 0 === r) && (r = 0), r;
        }(t)), i.indexOf(s) >= 0) l = i.indexOf(s); else {
          const e = Math.min(r.slidesPerGroupSkip, d);
          l = e + Math.floor((d - e) / r.slidesPerGroup);
        }
        if (l >= i.length && (l = i.length - 1), d === n && !t.params.loop) return void (l !== o && (t.snapIndex = l, 
        t.emit("snapIndexChange")));
        if (d === n && t.params.loop && t.virtual && t.params.virtual.enabled) return void (t.realIndex = c(d));
        const p = t.grid && r.grid && r.grid.rows > 1;
        let u;
        if (t.virtual && r.virtual.enabled && r.loop) u = c(d); else if (p) {
          const e = t.slides.find((e => e.column === d));
          let s = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
          Number.isNaN(s) && (s = Math.max(t.slides.indexOf(e), 0)), u = Math.floor(s / r.grid.rows);
        } else if (t.slides[d]) {
          const e = t.slides[d].getAttribute("data-swiper-slide-index");
          u = e ? parseInt(e, 10) : d;
        } else u = d;
        Object.assign(t, {
          previousSnapIndex: o,
          snapIndex: l,
          previousRealIndex: a,
          realIndex: u,
          previousIndex: n,
          activeIndex: d
        }), t.initialized && R(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), 
        (t.initialized || t.params.runCallbacksOnInit) && (a !== u && t.emit("realIndexChange"), 
        t.emit("slideChange"));
      },
      updateClickedSlide: function(e, t) {
        const s = this, i = s.params;
        let r = e.closest(`.${i.slideClass}, swiper-slide`);
        !r && s.isElement && t && t.length > 1 && t.includes(e) && [ ...t.slice(t.indexOf(e) + 1, t.length) ].forEach((e => {
          !r && e.matches && e.matches(`.${i.slideClass}, swiper-slide`) && (r = e);
        }));
        let n, a = !1;
        if (r) for (let e = 0; e < s.slides.length; e += 1) if (s.slides[e] === r) {
          a = !0, n = e;
          break;
        }
        if (!r || !a) return s.clickedSlide = void 0, void (s.clickedIndex = void 0);
        s.clickedSlide = r, s.virtual && s.params.virtual.enabled ? s.clickedIndex = parseInt(r.getAttribute("data-swiper-slide-index"), 10) : s.clickedIndex = n, 
        i.slideToClickedSlide && void 0 !== s.clickedIndex && s.clickedIndex !== s.activeIndex && s.slideToClickedSlide();
      }
    };
    var j = {
      getTranslate: function(e) {
        void 0 === e && (e = this.isHorizontal() ? "x" : "y");
        const {params: t, rtlTranslate: s, translate: i, wrapperEl: r} = this;
        if (t.virtualTranslate) return s ? -i : i;
        if (t.cssMode) return i;
        let n = b(r, e);
        return n += this.cssOverflowAdjustment(), s && (n = -n), n || 0;
      },
      setTranslate: function(e, t) {
        const s = this, {rtlTranslate: i, params: r, wrapperEl: n, progress: a} = s;
        let o, l = 0, d = 0;
        s.isHorizontal() ? l = i ? -e : e : d = e, r.roundLengths && (l = Math.floor(l), 
        d = Math.floor(d)), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? l : d, 
        r.cssMode ? n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -l : -d : r.virtualTranslate || (s.isHorizontal() ? l -= s.cssOverflowAdjustment() : d -= s.cssOverflowAdjustment(), 
        n.style.transform = `translate3d(${l}px, ${d}px, 0px)`);
        const c = s.maxTranslate() - s.minTranslate();
        o = 0 === c ? 0 : (e - s.minTranslate()) / c, o !== a && s.updateProgress(e), s.emit("setTranslate", s.translate, t);
      },
      minTranslate: function() {
        return -this.snapGrid[0];
      },
      maxTranslate: function() {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function(e, t, s, i, r) {
        void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), 
        void 0 === i && (i = !0);
        const n = this, {params: a, wrapperEl: o} = n;
        if (n.animating && a.preventInteractionOnTransition) return !1;
        const l = n.minTranslate(), d = n.maxTranslate();
        let c;
        if (c = i && e > l ? l : i && e < d ? d : e, n.updateProgress(c), a.cssMode) {
          const e = n.isHorizontal();
          if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -c; else {
            if (!n.support.smoothScroll) return x({
              swiper: n,
              targetPosition: -c,
              side: e ? "left" : "top"
            }), !0;
            o.scrollTo({
              [e ? "left" : "top"]: -c,
              behavior: "smooth"
            });
          }
          return !0;
        }
        return 0 === t ? (n.setTransition(0), n.setTranslate(c), s && (n.emit("beforeTransitionStart", t, r), 
        n.emit("transitionEnd"))) : (n.setTransition(t), n.setTranslate(c), s && (n.emit("beforeTransitionStart", t, r), 
        n.emit("transitionStart")), n.animating || (n.animating = !0, n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function(e) {
          n && !n.destroyed && e.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), 
          n.onTranslateToWrapperTransitionEnd = null, delete n.onTranslateToWrapperTransitionEnd, 
          n.animating = !1, s && n.emit("transitionEnd"));
        }), n.wrapperEl.addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd))), 
        !0;
      }
    };
    function W(e) {
      let {swiper: t, runCallbacks: s, direction: i, step: r} = e;
      const {activeIndex: n, previousIndex: a} = t;
      let o = i;
      if (o || (o = n > a ? "next" : n < a ? "prev" : "reset"), t.emit(`transition${r}`), 
      s && n !== a) {
        if ("reset" === o) return void t.emit(`slideResetTransition${r}`);
        t.emit(`slideChangeTransition${r}`), "next" === o ? t.emit(`slideNextTransition${r}`) : t.emit(`slidePrevTransition${r}`);
      }
    }
    var X = {
      slideTo: function(e, t, s, i, r) {
        void 0 === e && (e = 0), void 0 === s && (s = !0), "string" == typeof e && (e = parseInt(e, 10));
        const n = this;
        let a = e;
        a < 0 && (a = 0);
        const {params: o, snapGrid: l, slidesGrid: d, previousIndex: c, activeIndex: p, rtlTranslate: u, wrapperEl: m, enabled: f} = n;
        if (!f && !i && !r || n.destroyed || n.animating && o.preventInteractionOnTransition) return !1;
        void 0 === t && (t = n.params.speed);
        const h = Math.min(n.params.slidesPerGroupSkip, a);
        let v = h + Math.floor((a - h) / n.params.slidesPerGroup);
        v >= l.length && (v = l.length - 1);
        const g = -l[v];
        if (o.normalizeSlideIndex) for (let e = 0; e < d.length; e += 1) {
          const t = -Math.floor(100 * g), s = Math.floor(100 * d[e]), i = Math.floor(100 * d[e + 1]);
          void 0 !== d[e + 1] ? t >= s && t < i - (i - s) / 2 ? a = e : t >= s && t < i && (a = e + 1) : t >= s && (a = e);
        }
        if (n.initialized && a !== p) {
          if (!n.allowSlideNext && (u ? g > n.translate && g > n.minTranslate() : g < n.translate && g < n.minTranslate())) return !1;
          if (!n.allowSlidePrev && g > n.translate && g > n.maxTranslate() && (p || 0) !== a) return !1;
        }
        let w;
        a !== (c || 0) && s && n.emit("beforeSlideChangeStart"), n.updateProgress(g), w = a > p ? "next" : a < p ? "prev" : "reset";
        const b = n.virtual && n.params.virtual.enabled;
        if (!(b && r) && (u && -g === n.translate || !u && g === n.translate)) return n.updateActiveIndex(a), 
        o.autoHeight && n.updateAutoHeight(), n.updateSlidesClasses(), "slide" !== o.effect && n.setTranslate(g), 
        "reset" !== w && (n.transitionStart(s, w), n.transitionEnd(s, w)), !1;
        if (o.cssMode) {
          const e = n.isHorizontal(), s = u ? g : -g;
          if (0 === t) b && (n.wrapperEl.style.scrollSnapType = "none", n._immediateVirtual = !0), 
          b && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0 ? (n._cssModeVirtualInitialSet = !0, 
          requestAnimationFrame((() => {
            m[e ? "scrollLeft" : "scrollTop"] = s;
          }))) : m[e ? "scrollLeft" : "scrollTop"] = s, b && requestAnimationFrame((() => {
            n.wrapperEl.style.scrollSnapType = "", n._immediateVirtual = !1;
          })); else {
            if (!n.support.smoothScroll) return x({
              swiper: n,
              targetPosition: s,
              side: e ? "left" : "top"
            }), !0;
            m.scrollTo({
              [e ? "left" : "top"]: s,
              behavior: "smooth"
            });
          }
          return !0;
        }
        const S = $().isSafari;
        return b && !r && S && n.isElement && n.virtual.update(!1, !1, a), n.setTransition(t), 
        n.setTranslate(g), n.updateActiveIndex(a), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, i), 
        n.transitionStart(s, w), 0 === t ? n.transitionEnd(s, w) : n.animating || (n.animating = !0, 
        n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function(e) {
          n && !n.destroyed && e.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd), 
          n.onSlideToWrapperTransitionEnd = null, delete n.onSlideToWrapperTransitionEnd, 
          n.transitionEnd(s, w));
        }), n.wrapperEl.addEventListener("transitionend", n.onSlideToWrapperTransitionEnd)), 
        !0;
      },
      slideToLoop: function(e, t, s, i) {
        if (void 0 === e && (e = 0), void 0 === s && (s = !0), "string" == typeof e) {
          e = parseInt(e, 10);
        }
        const r = this;
        if (r.destroyed) return;
        void 0 === t && (t = r.params.speed);
        const n = r.grid && r.params.grid && r.params.grid.rows > 1;
        let a = e;
        if (r.params.loop) if (r.virtual && r.params.virtual.enabled) a += r.virtual.slidesBefore; else {
          let e;
          if (n) {
            const t = a * r.params.grid.rows;
            e = r.slides.find((e => 1 * e.getAttribute("data-swiper-slide-index") === t)).column;
          } else e = r.getSlideIndexByData(a);
          const t = n ? Math.ceil(r.slides.length / r.params.grid.rows) : r.slides.length, {centeredSlides: s} = r.params;
          let o = r.params.slidesPerView;
          "auto" === o ? o = r.slidesPerViewDynamic() : (o = Math.ceil(parseFloat(r.params.slidesPerView, 10)), 
          s && o % 2 == 0 && (o += 1));
          let l = t - e < o;
          if (s && (l = l || e < Math.ceil(o / 2)), i && s && "auto" !== r.params.slidesPerView && !n && (l = !1), 
          l) {
            const i = s ? e < r.activeIndex ? "prev" : "next" : e - r.activeIndex - 1 < r.params.slidesPerView ? "next" : "prev";
            r.loopFix({
              direction: i,
              slideTo: !0,
              activeSlideIndex: "next" === i ? e + 1 : e - t + 1,
              slideRealIndex: "next" === i ? r.realIndex : void 0
            });
          }
          if (n) {
            const e = a * r.params.grid.rows;
            a = r.slides.find((t => 1 * t.getAttribute("data-swiper-slide-index") === e)).column;
          } else a = r.getSlideIndexByData(a);
        }
        return requestAnimationFrame((() => {
          r.slideTo(a, t, s, i);
        })), r;
      },
      slideNext: function(e, t, s) {
        void 0 === t && (t = !0);
        const i = this, {enabled: r, params: n, animating: a} = i;
        if (!r || i.destroyed) return i;
        void 0 === e && (e = i.params.speed);
        let o = n.slidesPerGroup;
        "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (o = Math.max(i.slidesPerViewDynamic("current", !0), 1));
        const l = i.activeIndex < n.slidesPerGroupSkip ? 1 : o, d = i.virtual && n.virtual.enabled;
        if (n.loop) {
          if (a && !d && n.loopPreventsSliding) return !1;
          if (i.loopFix({
            direction: "next"
          }), i._clientLeft = i.wrapperEl.clientLeft, i.activeIndex === i.slides.length - 1 && n.cssMode) return requestAnimationFrame((() => {
            i.slideTo(i.activeIndex + l, e, t, s);
          })), !0;
        }
        return n.rewind && i.isEnd ? i.slideTo(0, e, t, s) : i.slideTo(i.activeIndex + l, e, t, s);
      },
      slidePrev: function(e, t, s) {
        void 0 === t && (t = !0);
        const i = this, {params: r, snapGrid: n, slidesGrid: a, rtlTranslate: o, enabled: l, animating: d} = i;
        if (!l || i.destroyed) return i;
        void 0 === e && (e = i.params.speed);
        const c = i.virtual && r.virtual.enabled;
        if (r.loop) {
          if (d && !c && r.loopPreventsSliding) return !1;
          i.loopFix({
            direction: "prev"
          }), i._clientLeft = i.wrapperEl.clientLeft;
        }
        function p(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }
        const u = p(o ? i.translate : -i.translate), m = n.map((e => p(e))), f = r.freeMode && r.freeMode.enabled;
        let h = n[m.indexOf(u) - 1];
        if (void 0 === h && (r.cssMode || f)) {
          let e;
          n.forEach(((t, s) => {
            u >= t && (e = s);
          })), void 0 !== e && (h = f ? n[e] : n[e > 0 ? e - 1 : e]);
        }
        let v = 0;
        if (void 0 !== h && (v = a.indexOf(h), v < 0 && (v = i.activeIndex - 1), "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (v = v - i.slidesPerViewDynamic("previous", !0) + 1, 
        v = Math.max(v, 0))), r.rewind && i.isBeginning) {
          const r = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
          return i.slideTo(r, e, t, s);
        }
        return r.loop && 0 === i.activeIndex && r.cssMode ? (requestAnimationFrame((() => {
          i.slideTo(v, e, t, s);
        })), !0) : i.slideTo(v, e, t, s);
      },
      slideReset: function(e, t, s) {
        void 0 === t && (t = !0);
        const i = this;
        if (!i.destroyed) return void 0 === e && (e = i.params.speed), i.slideTo(i.activeIndex, e, t, s);
      },
      slideToClosest: function(e, t, s, i) {
        void 0 === t && (t = !0), void 0 === i && (i = .5);
        const r = this;
        if (r.destroyed) return;
        void 0 === e && (e = r.params.speed);
        let n = r.activeIndex;
        const a = Math.min(r.params.slidesPerGroupSkip, n), o = a + Math.floor((n - a) / r.params.slidesPerGroup), l = r.rtlTranslate ? r.translate : -r.translate;
        if (l >= r.snapGrid[o]) {
          const e = r.snapGrid[o];
          l - e > (r.snapGrid[o + 1] - e) * i && (n += r.params.slidesPerGroup);
        } else {
          const e = r.snapGrid[o - 1];
          l - e <= (r.snapGrid[o] - e) * i && (n -= r.params.slidesPerGroup);
        }
        return n = Math.max(n, 0), n = Math.min(n, r.slidesGrid.length - 1), r.slideTo(n, e, t, s);
      },
      slideToClickedSlide: function() {
        const e = this;
        if (e.destroyed) return;
        const {params: t, slidesEl: s} = e, i = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
        let r, n = e.clickedIndex;
        const a = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
        if (t.loop) {
          if (e.animating) return;
          r = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? n < e.loopedSlides - i / 2 || n > e.slides.length - e.loopedSlides + i / 2 ? (e.loopFix(), 
          n = e.getSlideIndex(E(s, `${a}[data-swiper-slide-index="${r}"]`)[0]), g((() => {
            e.slideTo(n);
          }))) : e.slideTo(n) : n > e.slides.length - i ? (e.loopFix(), n = e.getSlideIndex(E(s, `${a}[data-swiper-slide-index="${r}"]`)[0]), 
          g((() => {
            e.slideTo(n);
          }))) : e.slideTo(n);
        } else e.slideTo(n);
      }
    };
    var Y = {
      loopCreate: function(e, t) {
        const s = this, {params: i, slidesEl: r} = s;
        if (!i.loop || s.virtual && s.params.virtual.enabled) return;
        const n = () => {
          E(r, `.${i.slideClass}, swiper-slide`).forEach(((e, t) => {
            e.setAttribute("data-swiper-slide-index", t);
          }));
        }, a = s.grid && i.grid && i.grid.rows > 1, o = i.slidesPerGroup * (a ? i.grid.rows : 1), l = s.slides.length % o != 0, d = a && s.slides.length % i.grid.rows != 0, c = e => {
          for (let t = 0; t < e; t += 1) {
            const e = s.isElement ? M("swiper-slide", [ i.slideBlankClass ]) : M("div", [ i.slideClass, i.slideBlankClass ]);
            s.slidesEl.append(e);
          }
        };
        if (l) {
          if (i.loopAddBlankSlides) {
            c(o - s.slides.length % o), s.recalcSlides(), s.updateSlides();
          } else C("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
          n();
        } else if (d) {
          if (i.loopAddBlankSlides) {
            c(i.grid.rows - s.slides.length % i.grid.rows), s.recalcSlides(), s.updateSlides();
          } else C("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
          n();
        } else n();
        s.loopFix({
          slideRealIndex: e,
          direction: i.centeredSlides ? void 0 : "next",
          initial: t
        });
      },
      loopFix: function(e) {
        let {slideRealIndex: t, slideTo: s = !0, direction: i, setTranslate: r, activeSlideIndex: n, initial: a, byController: o, byMousewheel: l} = void 0 === e ? {} : e;
        const d = this;
        if (!d.params.loop) return;
        d.emit("beforeLoopFix");
        const {slides: c, allowSlidePrev: p, allowSlideNext: u, slidesEl: m, params: f} = d, {centeredSlides: h, initialSlide: v} = f;
        if (d.allowSlidePrev = !0, d.allowSlideNext = !0, d.virtual && f.virtual.enabled) return s && (f.centeredSlides || 0 !== d.snapIndex ? f.centeredSlides && d.snapIndex < f.slidesPerView ? d.slideTo(d.virtual.slides.length + d.snapIndex, 0, !1, !0) : d.snapIndex === d.snapGrid.length - 1 && d.slideTo(d.virtual.slidesBefore, 0, !1, !0) : d.slideTo(d.virtual.slides.length, 0, !1, !0)), 
        d.allowSlidePrev = p, d.allowSlideNext = u, void d.emit("loopFix");
        let g = f.slidesPerView;
        "auto" === g ? g = d.slidesPerViewDynamic() : (g = Math.ceil(parseFloat(f.slidesPerView, 10)), 
        h && g % 2 == 0 && (g += 1));
        const w = f.slidesPerGroupAuto ? g : f.slidesPerGroup;
        let b = w;
        b % w != 0 && (b += w - b % w), b += f.loopAdditionalSlides, d.loopedSlides = b;
        const S = d.grid && f.grid && f.grid.rows > 1;
        c.length < g + b || "cards" === d.params.effect && c.length < g + 2 * b ? C("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : S && "row" === f.grid.fill && C("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
        const y = [], T = [], x = S ? Math.ceil(c.length / f.grid.rows) : c.length, E = a && x - v < g && !h;
        let M = E ? v : d.activeIndex;
        void 0 === n ? n = d.getSlideIndex(c.find((e => e.classList.contains(f.slideActiveClass)))) : M = n;
        const L = "next" === i || !i, P = "prev" === i || !i;
        let k = 0, I = 0;
        const O = (S ? c[n].column : n) + (h && void 0 === r ? -g / 2 + .5 : 0);
        if (O < b) {
          k = Math.max(b - O, w);
          for (let e = 0; e < b - O; e += 1) {
            const t = e - Math.floor(e / x) * x;
            if (S) {
              const e = x - t - 1;
              for (let t = c.length - 1; t >= 0; t -= 1) c[t].column === e && y.push(t);
            } else y.push(x - t - 1);
          }
        } else if (O + g > x - b) {
          I = Math.max(O - (x - 2 * b), w), E && (I = Math.max(I, g - x + v + 1));
          for (let e = 0; e < I; e += 1) {
            const t = e - Math.floor(e / x) * x;
            S ? c.forEach(((e, s) => {
              e.column === t && T.push(s);
            })) : T.push(t);
          }
        }
        if (d.__preventObserver__ = !0, requestAnimationFrame((() => {
          d.__preventObserver__ = !1;
        })), "cards" === d.params.effect && c.length < g + 2 * b && (T.includes(n) && T.splice(T.indexOf(n), 1), 
        y.includes(n) && y.splice(y.indexOf(n), 1)), P && y.forEach((e => {
          c[e].swiperLoopMoveDOM = !0, m.prepend(c[e]), c[e].swiperLoopMoveDOM = !1;
        })), L && T.forEach((e => {
          c[e].swiperLoopMoveDOM = !0, m.append(c[e]), c[e].swiperLoopMoveDOM = !1;
        })), d.recalcSlides(), "auto" === f.slidesPerView ? d.updateSlides() : S && (y.length > 0 && P || T.length > 0 && L) && d.slides.forEach(((e, t) => {
          d.grid.updateSlide(t, e, d.slides);
        })), f.watchSlidesProgress && d.updateSlidesOffset(), s) if (y.length > 0 && P) {
          if (void 0 === t) {
            const e = d.slidesGrid[M], t = d.slidesGrid[M + k] - e;
            l ? d.setTranslate(d.translate - t) : (d.slideTo(M + Math.ceil(k), 0, !1, !0), r && (d.touchEventsData.startTranslate = d.touchEventsData.startTranslate - t, 
            d.touchEventsData.currentTranslate = d.touchEventsData.currentTranslate - t));
          } else if (r) {
            const e = S ? y.length / f.grid.rows : y.length;
            d.slideTo(d.activeIndex + e, 0, !1, !0), d.touchEventsData.currentTranslate = d.translate;
          }
        } else if (T.length > 0 && L) if (void 0 === t) {
          const e = d.slidesGrid[M], t = d.slidesGrid[M - I] - e;
          l ? d.setTranslate(d.translate - t) : (d.slideTo(M - I, 0, !1, !0), r && (d.touchEventsData.startTranslate = d.touchEventsData.startTranslate - t, 
          d.touchEventsData.currentTranslate = d.touchEventsData.currentTranslate - t));
        } else {
          const e = S ? T.length / f.grid.rows : T.length;
          d.slideTo(d.activeIndex - e, 0, !1, !0);
        }
        if (d.allowSlidePrev = p, d.allowSlideNext = u, d.controller && d.controller.control && !o) {
          const e = {
            slideRealIndex: t,
            direction: i,
            setTranslate: r,
            activeSlideIndex: n,
            byController: !0
          };
          Array.isArray(d.controller.control) ? d.controller.control.forEach((t => {
            !t.destroyed && t.params.loop && t.loopFix({
              ...e,
              slideTo: t.params.slidesPerView === f.slidesPerView && s
            });
          })) : d.controller.control instanceof d.constructor && d.controller.control.params.loop && d.controller.control.loopFix({
            ...e,
            slideTo: d.controller.control.params.slidesPerView === f.slidesPerView && s
          });
        }
        d.emit("loopFix");
      },
      loopDestroy: function() {
        const e = this, {params: t, slidesEl: s} = e;
        if (!t.loop || !s || e.virtual && e.params.virtual.enabled) return;
        e.recalcSlides();
        const i = [];
        e.slides.forEach((e => {
          const t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
          i[t] = e;
        })), e.slides.forEach((e => {
          e.removeAttribute("data-swiper-slide-index");
        })), i.forEach((e => {
          s.append(e);
        })), e.recalcSlides(), e.slideTo(e.realIndex, 0);
      }
    };
    function U(e, t, s) {
      const i = v(), {params: r} = e, n = r.edgeSwipeDetection, a = r.edgeSwipeThreshold;
      return !n || !(s <= a || s >= i.innerWidth - a) || "prevent" === n && (t.preventDefault(), 
      !0);
    }
    function K(e) {
      const t = this, s = f();
      let i = e;
      i.originalEvent && (i = i.originalEvent);
      const r = t.touchEventsData;
      if ("pointerdown" === i.type) {
        if (null !== r.pointerId && r.pointerId !== i.pointerId) return;
        r.pointerId = i.pointerId;
      } else "touchstart" === i.type && 1 === i.targetTouches.length && (r.touchId = i.targetTouches[0].identifier);
      if ("touchstart" === i.type) return void U(t, i, i.targetTouches[0].pageX);
      const {params: n, touches: a, enabled: o} = t;
      if (!o) return;
      if (!n.simulateTouch && "mouse" === i.pointerType) return;
      if (t.animating && n.preventInteractionOnTransition) return;
      !t.animating && n.cssMode && n.loop && t.loopFix();
      let l = i.target;
      if ("wrapper" === n.touchEventsTarget && !function(e, t) {
        const s = v();
        let i = t.contains(e);
        !i && s.HTMLSlotElement && t instanceof HTMLSlotElement && (i = [ ...t.assignedElements() ].includes(e), 
        i || (i = function(e, t) {
          const s = [ t ];
          for (;s.length > 0; ) {
            const t = s.shift();
            if (e === t) return !0;
            s.push(...t.children, ...t.shadowRoot ? t.shadowRoot.children : [], ...t.assignedElements ? t.assignedElements() : []);
          }
        }(e, t)));
        return i;
      }(l, t.wrapperEl)) return;
      if ("which" in i && 3 === i.which) return;
      if ("button" in i && i.button > 0) return;
      if (r.isTouched && r.isMoved) return;
      const d = !!n.noSwipingClass && "" !== n.noSwipingClass, c = i.composedPath ? i.composedPath() : i.path;
      d && i.target && i.target.shadowRoot && c && (l = c[0]);
      const p = n.noSwipingSelector ? n.noSwipingSelector : `.${n.noSwipingClass}`, u = !(!i.target || !i.target.shadowRoot);
      if (n.noSwiping && (u ? function(e, t) {
        return void 0 === t && (t = this), function t(s) {
          if (!s || s === f() || s === v()) return null;
          s.assignedSlot && (s = s.assignedSlot);
          const i = s.closest(e);
          return i || s.getRootNode ? i || t(s.getRootNode().host) : null;
        }(t);
      }(p, l) : l.closest(p))) return void (t.allowClick = !0);
      if (n.swipeHandler && !l.closest(n.swipeHandler)) return;
      a.currentX = i.pageX, a.currentY = i.pageY;
      const m = a.currentX, h = a.currentY;
      if (!U(t, i, m)) return;
      Object.assign(r, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0
      }), a.startX = m, a.startY = h, r.touchStartTime = w(), t.allowClick = !0, t.updateSize(), 
      t.swipeDirection = void 0, n.threshold > 0 && (r.allowThresholdMove = !1);
      let g = !0;
      l.matches(r.focusableElements) && (g = !1, "SELECT" === l.nodeName && (r.isTouched = !1)), 
      s.activeElement && s.activeElement.matches(r.focusableElements) && s.activeElement !== l && ("mouse" === i.pointerType || "mouse" !== i.pointerType && !l.matches(r.focusableElements)) && s.activeElement.blur();
      const b = g && t.allowTouchMove && n.touchStartPreventDefault;
      !n.touchStartForcePreventDefault && !b || l.isContentEditable || i.preventDefault(), 
      n.freeMode && n.freeMode.enabled && t.freeMode && t.animating && !n.cssMode && t.freeMode.onTouchStart(), 
      t.emit("touchStart", i);
    }
    function J(e) {
      const t = f(), s = this, i = s.touchEventsData, {params: r, touches: n, rtlTranslate: a, enabled: o} = s;
      if (!o) return;
      if (!r.simulateTouch && "mouse" === e.pointerType) return;
      let l, d = e;
      if (d.originalEvent && (d = d.originalEvent), "pointermove" === d.type) {
        if (null !== i.touchId) return;
        if (d.pointerId !== i.pointerId) return;
      }
      if ("touchmove" === d.type) {
        if (l = [ ...d.changedTouches ].find((e => e.identifier === i.touchId)), !l || l.identifier !== i.touchId) return;
      } else l = d;
      if (!i.isTouched) return void (i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", d));
      const c = l.pageX, p = l.pageY;
      if (d.preventedByNestedSwiper) return n.startX = c, void (n.startY = p);
      if (!s.allowTouchMove) return d.target.matches(i.focusableElements) || (s.allowClick = !1), 
      void (i.isTouched && (Object.assign(n, {
        startX: c,
        startY: p,
        currentX: c,
        currentY: p
      }), i.touchStartTime = w()));
      if (r.touchReleaseOnEdges && !r.loop) if (s.isVertical()) {
        if (p < n.startY && s.translate <= s.maxTranslate() || p > n.startY && s.translate >= s.minTranslate()) return i.isTouched = !1, 
        void (i.isMoved = !1);
      } else {
        if (a && (c > n.startX && -s.translate <= s.maxTranslate() || c < n.startX && -s.translate >= s.minTranslate())) return;
        if (!a && (c < n.startX && s.translate <= s.maxTranslate() || c > n.startX && s.translate >= s.minTranslate())) return;
      }
      if (t.activeElement && t.activeElement.matches(i.focusableElements) && t.activeElement !== d.target && "mouse" !== d.pointerType && t.activeElement.blur(), 
      t.activeElement && d.target === t.activeElement && d.target.matches(i.focusableElements)) return i.isMoved = !0, 
      void (s.allowClick = !1);
      i.allowTouchCallbacks && s.emit("touchMove", d), n.previousX = n.currentX, n.previousY = n.currentY, 
      n.currentX = c, n.currentY = p;
      const u = n.currentX - n.startX, m = n.currentY - n.startY;
      if (s.params.threshold && Math.sqrt(u ** 2 + m ** 2) < s.params.threshold) return;
      if (void 0 === i.isScrolling) {
        let e;
        s.isHorizontal() && n.currentY === n.startY || s.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : u * u + m * m >= 25 && (e = 180 * Math.atan2(Math.abs(m), Math.abs(u)) / Math.PI, 
        i.isScrolling = s.isHorizontal() ? e > r.touchAngle : 90 - e > r.touchAngle);
      }
      if (i.isScrolling && s.emit("touchMoveOpposite", d), void 0 === i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = !0)), 
      i.isScrolling || "touchmove" === d.type && i.preventTouchMoveFromPointerMove) return void (i.isTouched = !1);
      if (!i.startMoving) return;
      s.allowClick = !1, !r.cssMode && d.cancelable && d.preventDefault(), r.touchMoveStopPropagation && !r.nested && d.stopPropagation();
      let h = s.isHorizontal() ? u : m, v = s.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY;
      r.oneWayMovement && (h = Math.abs(h) * (a ? 1 : -1), v = Math.abs(v) * (a ? 1 : -1)), 
      n.diff = h, h *= r.touchRatio, a && (h = -h, v = -v);
      const g = s.touchesDirection;
      s.swipeDirection = h > 0 ? "prev" : "next", s.touchesDirection = v > 0 ? "prev" : "next";
      const b = s.params.loop && !r.cssMode, S = "next" === s.touchesDirection && s.allowSlideNext || "prev" === s.touchesDirection && s.allowSlidePrev;
      if (!i.isMoved) {
        if (b && S && s.loopFix({
          direction: s.swipeDirection
        }), i.startTranslate = s.getTranslate(), s.setTransition(0), s.animating) {
          const e = new window.CustomEvent("transitionend", {
            bubbles: !0,
            cancelable: !0,
            detail: {
              bySwiperTouchMove: !0
            }
          });
          s.wrapperEl.dispatchEvent(e);
        }
        i.allowMomentumBounce = !1, !r.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), 
        s.emit("sliderFirstMove", d);
      }
      if ((new Date).getTime(), !1 !== r._loopSwapReset && i.isMoved && i.allowThresholdMove && g !== s.touchesDirection && b && S && Math.abs(h) >= 1) return Object.assign(n, {
        startX: c,
        startY: p,
        currentX: c,
        currentY: p,
        startTranslate: i.currentTranslate
      }), i.loopSwapReset = !0, void (i.startTranslate = i.currentTranslate);
      s.emit("sliderMove", d), i.isMoved = !0, i.currentTranslate = h + i.startTranslate;
      let y = !0, T = r.resistanceRatio;
      if (r.touchReleaseOnEdges && (T = 0), h > 0 ? (b && S && i.allowThresholdMove && i.currentTranslate > (r.centeredSlides ? s.minTranslate() - s.slidesSizesGrid[s.activeIndex + 1] - ("auto" !== r.slidesPerView && s.slides.length - r.slidesPerView >= 2 ? s.slidesSizesGrid[s.activeIndex + 1] + s.params.spaceBetween : 0) - s.params.spaceBetween : s.minTranslate()) && s.loopFix({
        direction: "prev",
        setTranslate: !0,
        activeSlideIndex: 0
      }), i.currentTranslate > s.minTranslate() && (y = !1, r.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + h) ** T))) : h < 0 && (b && S && i.allowThresholdMove && i.currentTranslate < (r.centeredSlides ? s.maxTranslate() + s.slidesSizesGrid[s.slidesSizesGrid.length - 1] + s.params.spaceBetween + ("auto" !== r.slidesPerView && s.slides.length - r.slidesPerView >= 2 ? s.slidesSizesGrid[s.slidesSizesGrid.length - 1] + s.params.spaceBetween : 0) : s.maxTranslate()) && s.loopFix({
        direction: "next",
        setTranslate: !0,
        activeSlideIndex: s.slides.length - ("auto" === r.slidesPerView ? s.slidesPerViewDynamic() : Math.ceil(parseFloat(r.slidesPerView, 10)))
      }), i.currentTranslate < s.maxTranslate() && (y = !1, r.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - h) ** T))), 
      y && (d.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), 
      !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), 
      s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate), 
      r.threshold > 0) {
        if (!(Math.abs(h) > r.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
        if (!i.allowThresholdMove) return i.allowThresholdMove = !0, n.startX = n.currentX, 
        n.startY = n.currentY, i.currentTranslate = i.startTranslate, void (n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY);
      }
      r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && s.freeMode || r.watchSlidesProgress) && (s.updateActiveIndex(), 
      s.updateSlidesClasses()), r.freeMode && r.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), 
      s.updateProgress(i.currentTranslate), s.setTranslate(i.currentTranslate));
    }
    function Q(e) {
      const t = this, s = t.touchEventsData;
      let i, r = e;
      r.originalEvent && (r = r.originalEvent);
      if ("touchend" === r.type || "touchcancel" === r.type) {
        if (i = [ ...r.changedTouches ].find((e => e.identifier === s.touchId)), !i || i.identifier !== s.touchId) return;
      } else {
        if (null !== s.touchId) return;
        if (r.pointerId !== s.pointerId) return;
        i = r;
      }
      if ([ "pointercancel", "pointerout", "pointerleave", "contextmenu" ].includes(r.type)) {
        if (!([ "pointercancel", "contextmenu" ].includes(r.type) && (t.browser.isSafari || t.browser.isWebView))) return;
      }
      s.pointerId = null, s.touchId = null;
      const {params: n, touches: a, rtlTranslate: o, slidesGrid: l, enabled: d} = t;
      if (!d) return;
      if (!n.simulateTouch && "mouse" === r.pointerType) return;
      if (s.allowTouchCallbacks && t.emit("touchEnd", r), s.allowTouchCallbacks = !1, 
      !s.isTouched) return s.isMoved && n.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, 
      void (s.startMoving = !1);
      n.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
      const c = w(), p = c - s.touchStartTime;
      if (t.allowClick) {
        const e = r.path || r.composedPath && r.composedPath();
        t.updateClickedSlide(e && e[0] || r.target, e), t.emit("tap click", r), p < 300 && c - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", r);
      }
      if (s.lastClickTime = w(), g((() => {
        t.destroyed || (t.allowClick = !0);
      })), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === a.diff && !s.loopSwapReset || s.currentTranslate === s.startTranslate && !s.loopSwapReset) return s.isTouched = !1, 
      s.isMoved = !1, void (s.startMoving = !1);
      let u;
      if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, u = n.followFinger ? o ? t.translate : -t.translate : -s.currentTranslate, 
      n.cssMode) return;
      if (n.freeMode && n.freeMode.enabled) return void t.freeMode.onTouchEnd({
        currentPos: u
      });
      const m = u >= -t.maxTranslate() && !t.params.loop;
      let f = 0, h = t.slidesSizesGrid[0];
      for (let e = 0; e < l.length; e += e < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup) {
        const t = e < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
        void 0 !== l[e + t] ? (m || u >= l[e] && u < l[e + t]) && (f = e, h = l[e + t] - l[e]) : (m || u >= l[e]) && (f = e, 
        h = l[l.length - 1] - l[l.length - 2]);
      }
      let v = null, b = null;
      n.rewind && (t.isBeginning ? b = n.virtual && n.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (v = 0));
      const S = (u - l[f]) / h, y = f < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
      if (p > n.longSwipesMs) {
        if (!n.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection && (S >= n.longSwipesRatio ? t.slideTo(n.rewind && t.isEnd ? v : f + y) : t.slideTo(f)), 
        "prev" === t.swipeDirection && (S > 1 - n.longSwipesRatio ? t.slideTo(f + y) : null !== b && S < 0 && Math.abs(S) > n.longSwipesRatio ? t.slideTo(b) : t.slideTo(f));
      } else {
        if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation && (r.target === t.navigation.nextEl || r.target === t.navigation.prevEl) ? r.target === t.navigation.nextEl ? t.slideTo(f + y) : t.slideTo(f) : ("next" === t.swipeDirection && t.slideTo(null !== v ? v : f + y), 
        "prev" === t.swipeDirection && t.slideTo(null !== b ? b : f));
      }
    }
    function Z() {
      const e = this, {params: t, el: s} = e;
      if (s && 0 === s.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const {allowSlideNext: i, allowSlidePrev: r, snapGrid: n} = e, a = e.virtual && e.params.virtual.enabled;
      e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), 
      e.updateSlidesClasses();
      const o = a && t.loop;
      !("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || o ? e.params.loop && !a ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), 
      e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), 
      e.autoplay.resizeTimeout = setTimeout((() => {
        e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume();
      }), 500)), e.allowSlidePrev = r, e.allowSlideNext = i, e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow();
    }
    function ee(e) {
      const t = this;
      t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), 
      e.stopImmediatePropagation())));
    }
    function te() {
      const e = this, {wrapperEl: t, rtlTranslate: s, enabled: i} = e;
      if (!i) return;
      let r;
      e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 
      0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
      const n = e.maxTranslate() - e.minTranslate();
      r = 0 === n ? 0 : (e.translate - e.minTranslate()) / n, r !== e.progress && e.updateProgress(s ? -e.translate : e.translate), 
      e.emit("setTranslate", e.translate, !1);
    }
    function se(e) {
      const t = this;
      N(t, e.target), t.params.cssMode || "auto" !== t.params.slidesPerView && !t.params.autoHeight || t.update();
    }
    function ie() {
      const e = this;
      e.documentTouchHandlerProceeded || (e.documentTouchHandlerProceeded = !0, e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
    }
    const re = (e, t) => {
      const s = f(), {params: i, el: r, wrapperEl: n, device: a} = e, o = !!i.nested, l = "on" === t ? "addEventListener" : "removeEventListener", d = t;
      r && "string" != typeof r && (s[l]("touchstart", e.onDocumentTouchStart, {
        passive: !1,
        capture: o
      }), r[l]("touchstart", e.onTouchStart, {
        passive: !1
      }), r[l]("pointerdown", e.onTouchStart, {
        passive: !1
      }), s[l]("touchmove", e.onTouchMove, {
        passive: !1,
        capture: o
      }), s[l]("pointermove", e.onTouchMove, {
        passive: !1,
        capture: o
      }), s[l]("touchend", e.onTouchEnd, {
        passive: !0
      }), s[l]("pointerup", e.onTouchEnd, {
        passive: !0
      }), s[l]("pointercancel", e.onTouchEnd, {
        passive: !0
      }), s[l]("touchcancel", e.onTouchEnd, {
        passive: !0
      }), s[l]("pointerout", e.onTouchEnd, {
        passive: !0
      }), s[l]("pointerleave", e.onTouchEnd, {
        passive: !0
      }), s[l]("contextmenu", e.onTouchEnd, {
        passive: !0
      }), (i.preventClicks || i.preventClicksPropagation) && r[l]("click", e.onClick, !0), 
      i.cssMode && n[l]("scroll", e.onScroll), i.updateOnWindowResize ? e[d](a.ios || a.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Z, !0) : e[d]("observerUpdate", Z, !0), 
      r[l]("load", e.onLoad, {
        capture: !0
      }));
    };
    const ne = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    var ae = {
      addClasses: function() {
        const e = this, {classNames: t, params: s, rtl: i, el: r, device: n} = e, a = function(e, t) {
          const s = [];
          return e.forEach((e => {
            "object" == typeof e ? Object.keys(e).forEach((i => {
              e[i] && s.push(t + i);
            })) : "string" == typeof e && s.push(t + e);
          })), s;
        }([ "initialized", s.direction, {
          "free-mode": e.params.freeMode && s.freeMode.enabled
        }, {
          autoheight: s.autoHeight
        }, {
          rtl: i
        }, {
          grid: s.grid && s.grid.rows > 1
        }, {
          "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill
        }, {
          android: n.android
        }, {
          ios: n.ios
        }, {
          "css-mode": s.cssMode
        }, {
          centered: s.cssMode && s.centeredSlides
        }, {
          "watch-progress": s.watchSlidesProgress
        } ], s.containerModifierClass);
        t.push(...a), r.classList.add(...t), e.emitContainerClasses();
      },
      removeClasses: function() {
        const {el: e, classNames: t} = this;
        e && "string" != typeof e && (e.classList.remove(...t), this.emitContainerClasses());
      }
    };
    var oe = {
      init: !0,
      direction: "horizontal",
      oneWayMovement: !1,
      swiperElementNodeName: "SWIPER-CONTAINER",
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      eventsPrefix: "swiper",
      enabled: !0,
      focusableElements: "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: .5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 5,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: .85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      loop: !1,
      loopAddBlankSlides: !0,
      loopAdditionalSlides: 0,
      loopPreventsSliding: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-blank",
      slideActiveClass: "swiper-slide-active",
      slideVisibleClass: "swiper-slide-visible",
      slideFullyVisibleClass: "swiper-slide-fully-visible",
      slideNextClass: "swiper-slide-next",
      slidePrevClass: "swiper-slide-prev",
      wrapperClass: "swiper-wrapper",
      lazyPreloaderClass: "swiper-lazy-preloader",
      lazyPreloadPrevNext: 0,
      runCallbacksOnInit: !0,
      _emitClasses: !1
    };
    function le(e, t) {
      return function(s) {
        void 0 === s && (s = {});
        const i = Object.keys(s)[0], r = s[i];
        "object" == typeof r && null !== r ? (!0 === e[i] && (e[i] = {
          enabled: !0
        }), "navigation" === i && e[i] && e[i].enabled && !e[i].prevEl && !e[i].nextEl && (e[i].auto = !0), 
        [ "pagination", "scrollbar" ].indexOf(i) >= 0 && e[i] && e[i].enabled && !e[i].el && (e[i].auto = !0), 
        i in e && "enabled" in r ? ("object" != typeof e[i] || "enabled" in e[i] || (e[i].enabled = !0), 
        e[i] || (e[i] = {
          enabled: !1
        }), y(t, s)) : y(t, s)) : y(t, s);
      };
    }
    const de = {
      eventsEmitter: B,
      update: q,
      translate: j,
      transition: {
        setTransition: function(e, t) {
          const s = this;
          s.params.cssMode || (s.wrapperEl.style.transitionDuration = `${e}ms`, s.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""), 
          s.emit("setTransition", e, t);
        },
        transitionStart: function(e, t) {
          void 0 === e && (e = !0);
          const s = this, {params: i} = s;
          i.cssMode || (i.autoHeight && s.updateAutoHeight(), W({
            swiper: s,
            runCallbacks: e,
            direction: t,
            step: "Start"
          }));
        },
        transitionEnd: function(e, t) {
          void 0 === e && (e = !0);
          const s = this, {params: i} = s;
          s.animating = !1, i.cssMode || (s.setTransition(0), W({
            swiper: s,
            runCallbacks: e,
            direction: t,
            step: "End"
          }));
        }
      },
      slide: X,
      loop: Y,
      grabCursor: {
        setGrabCursor: function(e) {
          const t = this;
          if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
          const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
          t.isElement && (t.__preventObserver__ = !0), s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab", 
          t.isElement && requestAnimationFrame((() => {
            t.__preventObserver__ = !1;
          }));
        },
        unsetGrabCursor: function() {
          const e = this;
          e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), 
          e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", 
          e.isElement && requestAnimationFrame((() => {
            e.__preventObserver__ = !1;
          })));
        }
      },
      events: {
        attachEvents: function() {
          const e = this, {params: t} = e;
          e.onTouchStart = K.bind(e), e.onTouchMove = J.bind(e), e.onTouchEnd = Q.bind(e), 
          e.onDocumentTouchStart = ie.bind(e), t.cssMode && (e.onScroll = te.bind(e)), e.onClick = ee.bind(e), 
          e.onLoad = se.bind(e), re(e, "on");
        },
        detachEvents: function() {
          re(this, "off");
        }
      },
      breakpoints: {
        setBreakpoint: function() {
          const e = this, {realIndex: t, initialized: s, params: i, el: r} = e, n = i.breakpoints;
          if (!n || n && 0 === Object.keys(n).length) return;
          const a = f(), o = "window" !== i.breakpointsBase && i.breakpointsBase ? "container" : i.breakpointsBase, l = [ "window", "container" ].includes(i.breakpointsBase) || !i.breakpointsBase ? e.el : a.querySelector(i.breakpointsBase), d = e.getBreakpoint(n, o, l);
          if (!d || e.currentBreakpoint === d) return;
          const c = (d in n ? n[d] : void 0) || e.originalParams, p = ne(e, i), u = ne(e, c), m = e.params.grabCursor, h = c.grabCursor, v = i.enabled;
          p && !u ? (r.classList.remove(`${i.containerModifierClass}grid`, `${i.containerModifierClass}grid-column`), 
          e.emitContainerClasses()) : !p && u && (r.classList.add(`${i.containerModifierClass}grid`), 
          (c.grid.fill && "column" === c.grid.fill || !c.grid.fill && "column" === i.grid.fill) && r.classList.add(`${i.containerModifierClass}grid-column`), 
          e.emitContainerClasses()), m && !h ? e.unsetGrabCursor() : !m && h && e.setGrabCursor(), 
          [ "navigation", "pagination", "scrollbar" ].forEach((t => {
            if (void 0 === c[t]) return;
            const s = i[t] && i[t].enabled, r = c[t] && c[t].enabled;
            s && !r && e[t].disable(), !s && r && e[t].enable();
          }));
          const g = c.direction && c.direction !== i.direction, w = i.loop && (c.slidesPerView !== i.slidesPerView || g), b = i.loop;
          g && s && e.changeDirection(), y(e.params, c);
          const S = e.params.enabled, T = e.params.loop;
          Object.assign(e, {
            allowTouchMove: e.params.allowTouchMove,
            allowSlideNext: e.params.allowSlideNext,
            allowSlidePrev: e.params.allowSlidePrev
          }), v && !S ? e.disable() : !v && S && e.enable(), e.currentBreakpoint = d, e.emit("_beforeBreakpoint", c), 
          s && (w ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !b && T ? (e.loopCreate(t), 
          e.updateSlides()) : b && !T && e.loopDestroy()), e.emit("breakpoint", c);
        },
        getBreakpoint: function(e, t, s) {
          if (void 0 === t && (t = "window"), !e || "container" === t && !s) return;
          let i = !1;
          const r = v(), n = "window" === t ? r.innerHeight : s.clientHeight, a = Object.keys(e).map((e => {
            if ("string" == typeof e && 0 === e.indexOf("@")) {
              const t = parseFloat(e.substr(1));
              return {
                value: n * t,
                point: e
              };
            }
            return {
              value: e,
              point: e
            };
          }));
          a.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
          for (let e = 0; e < a.length; e += 1) {
            const {point: n, value: o} = a[e];
            "window" === t ? r.matchMedia(`(min-width: ${o}px)`).matches && (i = n) : o <= s.clientWidth && (i = n);
          }
          return i || "max";
        }
      },
      checkOverflow: {
        checkOverflow: function() {
          const e = this, {isLocked: t, params: s} = e, {slidesOffsetBefore: i} = s;
          if (i) {
            const t = e.slides.length - 1, s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
            e.isLocked = e.size > s;
          } else e.isLocked = 1 === e.snapGrid.length;
          !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), 
          t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
        }
      },
      classes: ae
    }, ce = {};
    class pe {
      constructor() {
        let e, t;
        for (var s = arguments.length, i = new Array(s), r = 0; r < s; r++) i[r] = arguments[r];
        1 === i.length && i[0].constructor && "Object" === Object.prototype.toString.call(i[0]).slice(8, -1) ? t = i[0] : [e, t] = i, 
        t || (t = {}), t = y({}, t), e && !t.el && (t.el = e);
        const n = f();
        if (t.el && "string" == typeof t.el && n.querySelectorAll(t.el).length > 1) {
          const e = [];
          return n.querySelectorAll(t.el).forEach((s => {
            const i = y({}, t, {
              el: s
            });
            e.push(new pe(i));
          })), e;
        }
        const a = this;
        a.__swiper__ = !0, a.support = G(), a.device = D({
          userAgent: t.userAgent
        }), a.browser = $(), a.eventsListeners = {}, a.eventsAnyListeners = [], a.modules = [ ...a.__modules__ ], 
        t.modules && Array.isArray(t.modules) && a.modules.push(...t.modules);
        const o = {};
        a.modules.forEach((e => {
          e({
            params: t,
            swiper: a,
            extendParams: le(t, o),
            on: a.on.bind(a),
            once: a.once.bind(a),
            off: a.off.bind(a),
            emit: a.emit.bind(a)
          });
        }));
        const l = y({}, oe, o);
        return a.params = y({}, l, ce, t), a.originalParams = y({}, a.params), a.passedParams = y({}, t), 
        a.params && a.params.on && Object.keys(a.params.on).forEach((e => {
          a.on(e, a.params.on[e]);
        })), a.params && a.params.onAny && a.onAny(a.params.onAny), Object.assign(a, {
          enabled: a.params.enabled,
          el: e,
          classNames: [],
          slides: [],
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal: () => "horizontal" === a.params.direction,
          isVertical: () => "vertical" === a.params.direction,
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          cssOverflowAdjustment() {
            return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
          },
          allowSlideNext: a.params.allowSlideNext,
          allowSlidePrev: a.params.allowSlidePrev,
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            focusableElements: a.params.focusableElements,
            lastClickTime: 0,
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            startMoving: void 0,
            pointerId: null,
            touchId: null
          },
          allowClick: !0,
          allowTouchMove: a.params.allowTouchMove,
          touches: {
            startX: 0,
            startY: 0,
            currentX: 0,
            currentY: 0,
            diff: 0
          },
          imagesToLoad: [],
          imagesLoaded: 0
        }), a.emit("_swiper"), a.params.init && a.init(), a;
      }
      getDirectionLabel(e) {
        return this.isHorizontal() ? e : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom"
        }[e];
      }
      getSlideIndex(e) {
        const {slidesEl: t, params: s} = this, i = P(E(t, `.${s.slideClass}, swiper-slide`)[0]);
        return P(e) - i;
      }
      getSlideIndexByData(e) {
        return this.getSlideIndex(this.slides.find((t => 1 * t.getAttribute("data-swiper-slide-index") === e)));
      }
      recalcSlides() {
        const {slidesEl: e, params: t} = this;
        this.slides = E(e, `.${t.slideClass}, swiper-slide`);
      }
      enable() {
        const e = this;
        e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"));
      }
      disable() {
        const e = this;
        e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"));
      }
      setProgress(e, t) {
        const s = this;
        e = Math.min(Math.max(e, 0), 1);
        const i = s.minTranslate(), r = (s.maxTranslate() - i) * e + i;
        s.translateTo(r, void 0 === t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses();
      }
      emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
        e.emit("_containerClasses", t.join(" "));
      }
      getSlideClasses(e) {
        const t = this;
        return t.destroyed ? "" : e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ");
      }
      emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.forEach((s => {
          const i = e.getSlideClasses(s);
          t.push({
            slideEl: s,
            classNames: i
          }), e.emit("_slideClass", s, i);
        })), e.emit("_slideClasses", t);
      }
      slidesPerViewDynamic(e, t) {
        void 0 === e && (e = "current"), void 0 === t && (t = !1);
        const {params: s, slides: i, slidesGrid: r, slidesSizesGrid: n, size: a, activeIndex: o} = this;
        let l = 1;
        if ("number" == typeof s.slidesPerView) return s.slidesPerView;
        if (s.centeredSlides) {
          let e, t = i[o] ? Math.ceil(i[o].swiperSlideSize) : 0;
          for (let s = o + 1; s < i.length; s += 1) i[s] && !e && (t += Math.ceil(i[s].swiperSlideSize), 
          l += 1, t > a && (e = !0));
          for (let s = o - 1; s >= 0; s -= 1) i[s] && !e && (t += i[s].swiperSlideSize, l += 1, 
          t > a && (e = !0));
        } else if ("current" === e) for (let e = o + 1; e < i.length; e += 1) {
          (t ? r[e] + n[e] - r[o] < a : r[e] - r[o] < a) && (l += 1);
        } else for (let e = o - 1; e >= 0; e -= 1) {
          r[o] - r[e] < a && (l += 1);
        }
        return l;
      }
      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const {snapGrid: t, params: s} = e;
        function i() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate, s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let r;
        if (s.breakpoints && e.setBreakpoint(), [ ...e.el.querySelectorAll('[loading="lazy"]') ].forEach((t => {
          t.complete && N(e, t);
        })), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), 
        s.freeMode && s.freeMode.enabled && !s.cssMode) i(), s.autoHeight && e.updateAutoHeight(); else {
          if (("auto" === s.slidesPerView || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
            const t = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
            r = e.slideTo(t.length - 1, 0, !1, !0);
          } else r = e.slideTo(e.activeIndex, 0, !1, !0);
          r || i();
        }
        s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
      }
      changeDirection(e, t) {
        void 0 === t && (t = !0);
        const s = this, i = s.params.direction;
        return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (s.el.classList.remove(`${s.params.containerModifierClass}${i}`), 
        s.el.classList.add(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), 
        s.params.direction = e, s.slides.forEach((t => {
          "vertical" === e ? t.style.width = "" : t.style.height = "";
        })), s.emit("changeDirection"), t && s.update()), s;
      }
      changeLanguageDirection(e) {
        const t = this;
        t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, 
        t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), 
        t.el.dir = "ltr"), t.update());
      }
      mount(e) {
        const t = this;
        if (t.mounted) return !0;
        let s = e || t.params.el;
        if ("string" == typeof s && (s = document.querySelector(s)), !s) return !1;
        s.swiper = t, s.parentNode && s.parentNode.host && s.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
        const i = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let r = (() => {
          if (s && s.shadowRoot && s.shadowRoot.querySelector) {
            return s.shadowRoot.querySelector(i());
          }
          return E(s, i())[0];
        })();
        return !r && t.params.createElements && (r = M("div", t.params.wrapperClass), s.append(r), 
        E(s, `.${t.params.slideClass}`).forEach((e => {
          r.append(e);
        }))), Object.assign(t, {
          el: s,
          wrapperEl: r,
          slidesEl: t.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : r,
          hostEl: t.isElement ? s.parentNode.host : s,
          mounted: !0,
          rtl: "rtl" === s.dir.toLowerCase() || "rtl" === L(s, "direction"),
          rtlTranslate: "horizontal" === t.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === L(s, "direction")),
          wrongRTL: "-webkit-box" === L(r, "display")
        }), !0;
      }
      init(e) {
        const t = this;
        if (t.initialized) return t;
        if (!1 === t.mount(e)) return t;
        t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), 
        t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), 
        t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), 
        t.params.loop && t.loopCreate(void 0, !0), t.attachEvents();
        const s = [ ...t.el.querySelectorAll('[loading="lazy"]') ];
        return t.isElement && s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), 
        s.forEach((e => {
          e.complete ? N(t, e) : e.addEventListener("load", (e => {
            N(t, e.target);
          }));
        })), R(t), t.initialized = !0, R(t), t.emit("init"), t.emit("afterInit"), t;
      }
      destroy(e, t) {
        void 0 === e && (e = !0), void 0 === t && (t = !0);
        const s = this, {params: i, el: r, wrapperEl: n, slides: a} = s;
        return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, 
        s.detachEvents(), i.loop && s.loopDestroy(), t && (s.removeClasses(), r && "string" != typeof r && r.removeAttribute("style"), 
        n && n.removeAttribute("style"), a && a.length && a.forEach((e => {
          e.classList.remove(i.slideVisibleClass, i.slideFullyVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass), 
          e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index");
        }))), s.emit("destroy"), Object.keys(s.eventsListeners).forEach((e => {
          s.off(e);
        })), !1 !== e && (s.el && "string" != typeof s.el && (s.el.swiper = null), function(e) {
          const t = e;
          Object.keys(t).forEach((e => {
            try {
              t[e] = null;
            } catch (e) {}
            try {
              delete t[e];
            } catch (e) {}
          }));
        }(s)), s.destroyed = !0), null;
      }
      static extendDefaults(e) {
        y(ce, e);
      }
      static get extendedDefaults() {
        return ce;
      }
      static get defaults() {
        return oe;
      }
      static installModule(e) {
        pe.prototype.__modules__ || (pe.prototype.__modules__ = []);
        const t = pe.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return Array.isArray(e) ? (e.forEach((e => pe.installModule(e))), pe) : (pe.installModule(e), 
        pe);
      }
    }
    function ue(e) {
      return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`;
    }
    function me(e) {
      let {swiper: t, extendParams: s, on: i, emit: r} = e;
      const n = "swiper-pagination";
      let a;
      s({
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: e => e,
          formatFractionTotal: e => e,
          bulletClass: `${n}-bullet`,
          bulletActiveClass: `${n}-bullet-active`,
          modifierClass: `${n}-`,
          currentClass: `${n}-current`,
          totalClass: `${n}-total`,
          hiddenClass: `${n}-hidden`,
          progressbarFillClass: `${n}-progressbar-fill`,
          progressbarOppositeClass: `${n}-progressbar-opposite`,
          clickableClass: `${n}-clickable`,
          lockClass: `${n}-lock`,
          horizontalClass: `${n}-horizontal`,
          verticalClass: `${n}-vertical`,
          paginationDisabledClass: `${n}-disabled`
        }
      }), t.pagination = {
        el: null,
        bullets: []
      };
      let o = 0;
      function l() {
        return !t.params.pagination.el || !t.pagination.el || Array.isArray(t.pagination.el) && 0 === t.pagination.el.length;
      }
      function d(e, s) {
        const {bulletActiveClass: i} = t.params.pagination;
        e && (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) && (e.classList.add(`${i}-${s}`), 
        (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) && e.classList.add(`${i}-${s}-${s}`));
      }
      function c(e) {
        const s = e.target.closest(ue(t.params.pagination.bulletClass));
        if (!s) return;
        e.preventDefault();
        const i = P(s) * t.params.slidesPerGroup;
        if (t.params.loop) {
          if (t.realIndex === i) return;
          const e = (r = t.realIndex, n = i, a = t.slides.length, (n %= a) == 1 + (r %= a) ? "next" : n === r - 1 ? "previous" : void 0);
          "next" === e ? t.slideNext() : "previous" === e ? t.slidePrev() : t.slideToLoop(i);
        } else t.slideTo(i);
        var r, n, a;
      }
      function p() {
        const e = t.rtl, s = t.params.pagination;
        if (l()) return;
        let i, n, c = t.pagination.el;
        c = O(c);
        const p = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length, u = t.params.loop ? Math.ceil(p / t.params.slidesPerGroup) : t.snapGrid.length;
        if (t.params.loop ? (n = t.previousRealIndex || 0, i = t.params.slidesPerGroup > 1 ? Math.floor(t.realIndex / t.params.slidesPerGroup) : t.realIndex) : void 0 !== t.snapIndex ? (i = t.snapIndex, 
        n = t.previousSnapIndex) : (n = t.previousIndex || 0, i = t.activeIndex || 0), "bullets" === s.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
          const r = t.pagination.bullets;
          let l, p, u;
          if (s.dynamicBullets && (a = I(r[0], t.isHorizontal() ? "width" : "height", !0), 
          c.forEach((e => {
            e.style[t.isHorizontal() ? "width" : "height"] = a * (s.dynamicMainBullets + 4) + "px";
          })), s.dynamicMainBullets > 1 && void 0 !== n && (o += i - (n || 0), o > s.dynamicMainBullets - 1 ? o = s.dynamicMainBullets - 1 : o < 0 && (o = 0)), 
          l = Math.max(i - o, 0), p = l + (Math.min(r.length, s.dynamicMainBullets) - 1), 
          u = (p + l) / 2), r.forEach((e => {
            const t = [ ...[ "", "-next", "-next-next", "-prev", "-prev-prev", "-main" ].map((e => `${s.bulletActiveClass}${e}`)) ].map((e => "string" == typeof e && e.includes(" ") ? e.split(" ") : e)).flat();
            e.classList.remove(...t);
          })), c.length > 1) r.forEach((e => {
            const r = P(e);
            r === i ? e.classList.add(...s.bulletActiveClass.split(" ")) : t.isElement && e.setAttribute("part", "bullet"), 
            s.dynamicBullets && (r >= l && r <= p && e.classList.add(...`${s.bulletActiveClass}-main`.split(" ")), 
            r === l && d(e, "prev"), r === p && d(e, "next"));
          })); else {
            const e = r[i];
            if (e && e.classList.add(...s.bulletActiveClass.split(" ")), t.isElement && r.forEach(((e, t) => {
              e.setAttribute("part", t === i ? "bullet-active" : "bullet");
            })), s.dynamicBullets) {
              const e = r[l], t = r[p];
              for (let e = l; e <= p; e += 1) r[e] && r[e].classList.add(...`${s.bulletActiveClass}-main`.split(" "));
              d(e, "prev"), d(t, "next");
            }
          }
          if (s.dynamicBullets) {
            const i = Math.min(r.length, s.dynamicMainBullets + 4), n = (a * i - a) / 2 - u * a, o = e ? "right" : "left";
            r.forEach((e => {
              e.style[t.isHorizontal() ? o : "top"] = `${n}px`;
            }));
          }
        }
        c.forEach(((e, n) => {
          if ("fraction" === s.type && (e.querySelectorAll(ue(s.currentClass)).forEach((e => {
            e.textContent = s.formatFractionCurrent(i + 1);
          })), e.querySelectorAll(ue(s.totalClass)).forEach((e => {
            e.textContent = s.formatFractionTotal(u);
          }))), "progressbar" === s.type) {
            let r;
            r = s.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
            const n = (i + 1) / u;
            let a = 1, o = 1;
            "horizontal" === r ? a = n : o = n, e.querySelectorAll(ue(s.progressbarFillClass)).forEach((e => {
              e.style.transform = `translate3d(0,0,0) scaleX(${a}) scaleY(${o})`, e.style.transitionDuration = `${t.params.speed}ms`;
            }));
          }
          "custom" === s.type && s.renderCustom ? (e.innerHTML = s.renderCustom(t, i + 1, u), 
          0 === n && r("paginationRender", e)) : (0 === n && r("paginationRender", e), r("paginationUpdate", e)), 
          t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](s.lockClass);
        }));
      }
      function u() {
        const e = t.params.pagination;
        if (l()) return;
        const s = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.grid && t.params.grid.rows > 1 ? t.slides.length / Math.ceil(t.params.grid.rows) : t.slides.length;
        let i = t.pagination.el;
        i = O(i);
        let n = "";
        if ("bullets" === e.type) {
          let i = t.params.loop ? Math.ceil(s / t.params.slidesPerGroup) : t.snapGrid.length;
          t.params.freeMode && t.params.freeMode.enabled && i > s && (i = s);
          for (let s = 0; s < i; s += 1) e.renderBullet ? n += e.renderBullet.call(t, s, e.bulletClass) : n += `<${e.bulletElement} ${t.isElement ? 'part="bullet"' : ""} class="${e.bulletClass}"></${e.bulletElement}>`;
        }
        "fraction" === e.type && (n = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`), 
        "progressbar" === e.type && (n = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`), 
        t.pagination.bullets = [], i.forEach((s => {
          "custom" !== e.type && (s.innerHTML = n || ""), "bullets" === e.type && t.pagination.bullets.push(...s.querySelectorAll(ue(e.bulletClass)));
        })), "custom" !== e.type && r("paginationRender", i[0]);
      }
      function m() {
        t.params.pagination = function(e, t, s, i) {
          return e.params.createElements && Object.keys(i).forEach((r => {
            if (!s[r] && !0 === s.auto) {
              let n = E(e.el, `.${i[r]}`)[0];
              n || (n = M("div", i[r]), n.className = i[r], e.el.append(n)), s[r] = n, t[r] = n;
            }
          })), s;
        }(t, t.originalParams.pagination, t.params.pagination, {
          el: "swiper-pagination"
        });
        const e = t.params.pagination;
        if (!e.el) return;
        let s;
        "string" == typeof e.el && t.isElement && (s = t.el.querySelector(e.el)), s || "string" != typeof e.el || (s = [ ...document.querySelectorAll(e.el) ]), 
        s || (s = e.el), s && 0 !== s.length && (t.params.uniqueNavElements && "string" == typeof e.el && Array.isArray(s) && s.length > 1 && (s = [ ...t.el.querySelectorAll(e.el) ], 
        s.length > 1 && (s = s.find((e => k(e, ".swiper")[0] === t.el)))), Array.isArray(s) && 1 === s.length && (s = s[0]), 
        Object.assign(t.pagination, {
          el: s
        }), s = O(s), s.forEach((s => {
          "bullets" === e.type && e.clickable && s.classList.add(...(e.clickableClass || "").split(" ")), 
          s.classList.add(e.modifierClass + e.type), s.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass), 
          "bullets" === e.type && e.dynamicBullets && (s.classList.add(`${e.modifierClass}${e.type}-dynamic`), 
          o = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && s.classList.add(e.progressbarOppositeClass), 
          e.clickable && s.addEventListener("click", c), t.enabled || s.classList.add(e.lockClass);
        })));
      }
      function f() {
        const e = t.params.pagination;
        if (l()) return;
        let s = t.pagination.el;
        s && (s = O(s), s.forEach((s => {
          s.classList.remove(e.hiddenClass), s.classList.remove(e.modifierClass + e.type), 
          s.classList.remove(t.isHorizontal() ? e.horizontalClass : e.verticalClass), e.clickable && (s.classList.remove(...(e.clickableClass || "").split(" ")), 
          s.removeEventListener("click", c));
        }))), t.pagination.bullets && t.pagination.bullets.forEach((t => t.classList.remove(...e.bulletActiveClass.split(" "))));
      }
      i("changeDirection", (() => {
        if (!t.pagination || !t.pagination.el) return;
        const e = t.params.pagination;
        let {el: s} = t.pagination;
        s = O(s), s.forEach((s => {
          s.classList.remove(e.horizontalClass, e.verticalClass), s.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass);
        }));
      })), i("init", (() => {
        !1 === t.params.pagination.enabled ? h() : (m(), u(), p());
      })), i("activeIndexChange", (() => {
        void 0 === t.snapIndex && p();
      })), i("snapIndexChange", (() => {
        p();
      })), i("snapGridLengthChange", (() => {
        u(), p();
      })), i("destroy", (() => {
        f();
      })), i("enable disable", (() => {
        let {el: e} = t.pagination;
        e && (e = O(e), e.forEach((e => e.classList[t.enabled ? "remove" : "add"](t.params.pagination.lockClass))));
      })), i("lock unlock", (() => {
        p();
      })), i("click", ((e, s) => {
        const i = s.target, n = O(t.pagination.el);
        if (t.params.pagination.el && t.params.pagination.hideOnClick && n && n.length > 0 && !i.classList.contains(t.params.pagination.bulletClass)) {
          if (t.navigation && (t.navigation.nextEl && i === t.navigation.nextEl || t.navigation.prevEl && i === t.navigation.prevEl)) return;
          const e = n[0].classList.contains(t.params.pagination.hiddenClass);
          r(!0 === e ? "paginationShow" : "paginationHide"), n.forEach((e => e.classList.toggle(t.params.pagination.hiddenClass)));
        }
      }));
      const h = () => {
        t.el.classList.add(t.params.pagination.paginationDisabledClass);
        let {el: e} = t.pagination;
        e && (e = O(e), e.forEach((e => e.classList.add(t.params.pagination.paginationDisabledClass)))), 
        f();
      };
      Object.assign(t.pagination, {
        enable: () => {
          t.el.classList.remove(t.params.pagination.paginationDisabledClass);
          let {el: e} = t.pagination;
          e && (e = O(e), e.forEach((e => e.classList.remove(t.params.pagination.paginationDisabledClass)))), 
          m(), u(), p();
        },
        disable: h,
        render: u,
        update: p,
        init: m,
        destroy: f
      });
    }
    Object.keys(de).forEach((e => {
      Object.keys(de[e]).forEach((t => {
        pe.prototype[t] = de[e][t];
      }));
    })), pe.use([ function(e) {
      let {swiper: t, on: s, emit: i} = e;
      const r = v();
      let n = null, a = null;
      const o = () => {
        t && !t.destroyed && t.initialized && (i("beforeResize"), i("resize"));
      }, l = () => {
        t && !t.destroyed && t.initialized && i("orientationchange");
      };
      s("init", (() => {
        t.params.resizeObserver && void 0 !== r.ResizeObserver ? t && !t.destroyed && t.initialized && (n = new ResizeObserver((e => {
          a = r.requestAnimationFrame((() => {
            const {width: s, height: i} = t;
            let r = s, n = i;
            e.forEach((e => {
              let {contentBoxSize: s, contentRect: i, target: a} = e;
              a && a !== t.el || (r = i ? i.width : (s[0] || s).inlineSize, n = i ? i.height : (s[0] || s).blockSize);
            })), r === s && n === i || o();
          }));
        })), n.observe(t.el)) : (r.addEventListener("resize", o), r.addEventListener("orientationchange", l));
      })), s("destroy", (() => {
        a && r.cancelAnimationFrame(a), n && n.unobserve && t.el && (n.unobserve(t.el), 
        n = null), r.removeEventListener("resize", o), r.removeEventListener("orientationchange", l);
      }));
    }, function(e) {
      let {swiper: t, extendParams: s, on: i, emit: r} = e;
      const n = [], a = v(), o = function(e, s) {
        void 0 === s && (s = {});
        const i = new (a.MutationObserver || a.WebkitMutationObserver)((e => {
          if (t.__preventObserver__) return;
          if (1 === e.length) return void r("observerUpdate", e[0]);
          const s = function() {
            r("observerUpdate", e[0]);
          };
          a.requestAnimationFrame ? a.requestAnimationFrame(s) : a.setTimeout(s, 0);
        }));
        i.observe(e, {
          attributes: void 0 === s.attributes || s.attributes,
          childList: t.isElement || (void 0 === s.childList || s).childList,
          characterData: void 0 === s.characterData || s.characterData
        }), n.push(i);
      };
      s({
        observer: !1,
        observeParents: !1,
        observeSlideChildren: !1
      }), i("init", (() => {
        if (t.params.observer) {
          if (t.params.observeParents) {
            const e = k(t.hostEl);
            for (let t = 0; t < e.length; t += 1) o(e[t]);
          }
          o(t.hostEl, {
            childList: t.params.observeSlideChildren
          }), o(t.wrapperEl, {
            attributes: !1
          });
        }
      })), i("destroy", (() => {
        n.forEach((e => {
          e.disconnect();
        })), n.splice(0, n.length);
      }));
    } ]);
    const fe = () => {
      (() => {
        const e = document.querySelector("#sidebar"), t = document.querySelector(".sidebar__close"), s = document.querySelector(".burger");
        if (Array.from(document.querySelectorAll(".mm-ocd")).forEach((e => {
          e.remove();
        })), !e || !t || !s) return;
        const i = new d(e, "(max-width: 1200px)").offcanvas({});
        s.addEventListener("click", (() => i.open())), t.addEventListener("click", (() => i.close()));
      })(), window.innerWidth > 767 || new pe(".offers__swiper", {
        cssMode: !0,
        spaceBetween: 20,
        modules: [ me ],
        pagination: {
          el: ".offers__pagination",
          type: "bullets",
          bulletActiveClass: "offers__pagination--active",
          bulletClass: "offers__pagination--item"
        },
        breakpoints: {
          320: {
            spaceBetween: 20
          },
          768: {
            spaceBetween: 0
          }
        }
      }), Array.from(document.querySelectorAll(".link-js")).forEach((e => {
        const t = "offer__inner", s = e.closest(`.${t}`);
        s && (e.addEventListener("mouseenter", (() => s.classList.add(`${t}--hover`))), 
        e.addEventListener("mouseleave", (() => s.classList.remove(`${t}--hover`))));
      }));
    };
    document.addEventListener("DOMContentLoaded", (() => {
      (e => {
        const t = document.querySelector(".counter__minutes"), s = document.querySelector(".counter__seconds");
        if (!t || !s) return;
        let i, r, n = e;
        setInterval((function() {
          i = parseInt(n / 60, 10), r = parseInt(n % 60, 10), i = i < 10 ? "0" + i : i, r = r < 10 ? "0" + r : r, 
          t.textContent = i, s.textContent = r, --n < 0 && (n = e);
        }), 1e3);
      })(1800), (0, c.parallaxMouse)({
        elements: ".parallax--left",
        moveFactor: 5,
        wrap: ".promo",
        perspective: "100px"
      }), (0, c.parallaxMouse)({
        elements: ".parallax--right",
        moveFactor: 5,
        wrap: ".promo",
        perspective: "200px"
      });
    })), window.onload = fe, window.onresize = fe;
  })();
})();