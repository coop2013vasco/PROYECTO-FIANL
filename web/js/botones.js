/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/*! Cobham for Cobham website ( v1.6.5 ) 15-Apr-2016 */
"use strict";

function initParallax() {
  var a = new Image,
    b = $(".js-parallax").data("image-src");
  b && (a.src = b, $(".js-parallax").parallax({
    imageSrc: b
  }), $(".parallax-mirror").css("visibility", "visible")), a.onload = function() {
    $(".js-parallax").parallax({
      imageSrc: this.src
    }), $(".parallax-mirror").css("visibility", "visible")
  }
}! function(a, b) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");
    return b(a)
  } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
  function c(a) {
    var b = "length" in a && a.length,
      c = _.type(a);
    return "function" === c || _.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
  }

  function d(a, b, c) {
    if (_.isFunction(b)) return _.grep(a, function(a, d) {
      return !!b.call(a, d, a) !== c
    });
    if (b.nodeType) return _.grep(a, function(a) {
      return a === b !== c
    });
    if ("string" == typeof b) {
      if (ha.test(b)) return _.filter(b, a, c);
      b = _.filter(b, a)
    }
    return _.grep(a, function(a) {
      return U.call(b, a) >= 0 !== c
    })
  }

  function e(a, b) {
    for (;
      (a = a[b]) && 1 !== a.nodeType;);
    return a
  }

  function f(a) {
    var b = oa[a] = {};
    return _.each(a.match(na) || [], function(a, c) {
      b[c] = !0
    }), b
  }

  function g() {
    Z.removeEventListener("DOMContentLoaded", g, !1), a.removeEventListener("load", g, !1), _.ready()
  }

  function h() {
    Object.defineProperty(this.cache = {}, 0, {
      get: function() {
        return {}
      }
    }), this.expando = _.expando + h.uid++
  }

  function i(a, b, c) {
    var d;
    if (void 0 === c && 1 === a.nodeType)
      if (d = "data-" + b.replace(ua, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
        try {
          c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : ta.test(c) ? _.parseJSON(c) : c
        } catch (e) {}
        sa.set(a, b, c)
      } else c = void 0;
    return c
  }

  function j() {
    return !0
  }

  function k() {
    return !1
  }

  function l() {
    try {
      return Z.activeElement
    } catch (a) {}
  }

  function m(a, b) {
    return _.nodeName(a, "table") && _.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
  }

  function n(a) {
    return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
  }

  function o(a) {
    var b = Ka.exec(a.type);
    return b ? a.type = b[1] : a.removeAttribute("type"), a
  }

  function p(a, b) {
    for (var c = 0, d = a.length; d > c; c++) ra.set(a[c], "globalEval", !b || ra.get(b[c], "globalEval"))
  }

  function q(a, b) {
    var c, d, e, f, g, h, i, j;
    if (1 === b.nodeType) {
      if (ra.hasData(a) && (f = ra.access(a), g = ra.set(b, f), j = f.events)) {
        delete g.handle, g.events = {};
        for (e in j)
          for (c = 0, d = j[e].length; d > c; c++) _.event.add(b, e, j[e][c])
      }
      sa.hasData(a) && (h = sa.access(a), i = _.extend({}, h), sa.set(b, i))
    }
  }

  function r(a, b) {
    var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
    return void 0 === b || b && _.nodeName(a, b) ? _.merge([a], c) : c
  }

  function s(a, b) {
    var c = b.nodeName.toLowerCase();
    "input" === c && ya.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
  }

  function t(b, c) {
    var d, e = _(c.createElement(b)).appendTo(c.body),
      f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : _.css(e[0], "display");
    return e.detach(), f
  }

  function u(a) {
    var b = Z,
      c = Oa[a];
    return c || (c = t(a, b), "none" !== c && c || (Na = (Na || _("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = Na[0].contentDocument, b.write(), b.close(), c = t(a, b), Na.detach()), Oa[a] = c), c
  }

  function v(a, b, c) {
    var d, e, f, g, h = a.style;
    return c = c || Ra(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || _.contains(a.ownerDocument, a) || (g = _.style(a, b)), Qa.test(g) && Pa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
  }

  function w(a, b) {
    return {
      get: function() {
        return a() ? void delete this.get : (this.get = b).apply(this, arguments)
      }
    }
  }

  function x(a, b) {
    if (b in a) return b;
    for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Xa.length; e--;)
      if (b = Xa[e] + c, b in a) return b;
    return d
  }

  function y(a, b, c) {
    var d = Ta.exec(b);
    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
  }

  function z(a, b, c, d, e) {
    for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += _.css(a, c + wa[f], !0, e)), d ? ("content" === c && (g -= _.css(a, "padding" + wa[f], !0, e)), "margin" !== c && (g -= _.css(a, "border" + wa[f] + "Width", !0, e))) : (g += _.css(a, "padding" + wa[f], !0, e), "padding" !== c && (g += _.css(a, "border" + wa[f] + "Width", !0, e)));
    return g
  }

  function A(a, b, c) {
    var d = !0,
      e = "width" === b ? a.offsetWidth : a.offsetHeight,
      f = Ra(a),
      g = "border-box" === _.css(a, "boxSizing", !1, f);
    if (0 >= e || null == e) {
      if (e = v(a, b, f), (0 > e || null == e) && (e = a.style[b]), Qa.test(e)) return e;
      d = g && (Y.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
    }
    return e + z(a, b, c || (g ? "border" : "content"), d, f) + "px"
  }

  function B(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = ra.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && xa(d) && (f[g] = ra.access(d, "olddisplay", u(d.nodeName)))) : (e = xa(d), "none" === c && e || ra.set(d, "olddisplay", e ? c : _.css(d, "display"))));
    for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
    return a
  }

  function C(a, b, c, d, e) {
    return new C.prototype.init(a, b, c, d, e)
  }

  function D() {
    return setTimeout(function() {
      Ya = void 0
    }), Ya = _.now()
  }

  function E(a, b) {
    var c, d = 0,
      e = {
        height: a
      };
    for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = wa[d], e["margin" + c] = e["padding" + c] = a;
    return b && (e.opacity = e.width = a), e
  }

  function F(a, b, c) {
    for (var d, e = (cb[b] || []).concat(cb["*"]), f = 0, g = e.length; g > f; f++)
      if (d = e[f].call(c, b, a)) return d
  }

  function G(a, b, c) {
    var d, e, f, g, h, i, j, k, l = this,
      m = {},
      n = a.style,
      o = a.nodeType && xa(a),
      p = ra.get(a, "fxshow");
    c.queue || (h = _._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
      h.unqueued || i()
    }), h.unqueued++, l.always(function() {
      l.always(function() {
        h.unqueued--, _.queue(a, "fx").length || h.empty.fire()
      })
    })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], j = _.css(a, "display"), k = "none" === j ? ra.get(a, "olddisplay") || u(a.nodeName) : j, "inline" === k && "none" === _.css(a, "float") && (n.display = "inline-block")), c.overflow && (n.overflow = "hidden", l.always(function() {
      n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2]
    }));
    for (d in b)
      if (e = b[d], $a.exec(e)) {
        if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
          if ("show" !== e || !p || void 0 === p[d]) continue;
          o = !0
        }
        m[d] = p && p[d] || _.style(a, d)
      } else j = void 0;
    if (_.isEmptyObject(m)) "inline" === ("none" === j ? u(a.nodeName) : j) && (n.display = j);
    else {
      p ? "hidden" in p && (o = p.hidden) : p = ra.access(a, "fxshow", {}), f && (p.hidden = !o), o ? _(a).show() : l.done(function() {
        _(a).hide()
      }), l.done(function() {
        var b;
        ra.remove(a, "fxshow");
        for (b in m) _.style(a, b, m[b])
      });
      for (d in m) g = F(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
    }
  }

  function H(a, b) {
    var c, d, e, f, g;
    for (c in a)
      if (d = _.camelCase(c), e = b[d], f = a[c], _.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = _.cssHooks[d], g && "expand" in g) {
        f = g.expand(f), delete a[d];
        for (c in f) c in a || (a[c] = f[c], b[c] = e)
      } else b[d] = e
  }

  function I(a, b, c) {
    var d, e, f = 0,
      g = bb.length,
      h = _.Deferred().always(function() {
        delete i.elem
      }),
      i = function() {
        if (e) return !1;
        for (var b = Ya || D(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
        return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
      },
      j = h.promise({
        elem: a,
        props: _.extend({}, b),
        opts: _.extend(!0, {
          specialEasing: {}
        }, c),
        originalProperties: b,
        originalOptions: c,
        startTime: Ya || D(),
        duration: c.duration,
        tweens: [],
        createTween: function(b, c) {
          var d = _.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
          return j.tweens.push(d), d
        },
        stop: function(b) {
          var c = 0,
            d = b ? j.tweens.length : 0;
          if (e) return this;
          for (e = !0; d > c; c++) j.tweens[c].run(1);
          return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
        }
      }),
      k = j.props;
    for (H(k, j.opts.specialEasing); g > f; f++)
      if (d = bb[f].call(j, a, k, j.opts)) return d;
    return _.map(k, F, j), _.isFunction(j.opts.start) && j.opts.start.call(a, j), _.fx.timer(_.extend(i, {
      elem: a,
      anim: j,
      queue: j.opts.queue
    })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
  }

  function J(a) {
    return function(b, c) {
      "string" != typeof b && (c = b, b = "*");
      var d, e = 0,
        f = b.toLowerCase().match(na) || [];
      if (_.isFunction(c))
        for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
    }
  }

  function K(a, b, c, d) {
    function e(h) {
      var i;
      return f[h] = !0, _.each(a[h] || [], function(a, h) {
        var j = h(b, c, d);
        return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
      }), i
    }
    var f = {},
      g = a === tb;
    return e(b.dataTypes[0]) || !f["*"] && e("*")
  }

  function L(a, b) {
    var c, d, e = _.ajaxSettings.flatOptions || {};
    for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    return d && _.extend(!0, a, d), a
  }

  function M(a, b, c) {
    for (var d, e, f, g, h = a.contents, i = a.dataTypes;
      "*" === i[0];) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
    if (d)
      for (e in h)
        if (h[e] && h[e].test(d)) {
          i.unshift(e);
          break
        }
    if (i[0] in c) f = i[0];
    else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;
          break
        }
        g || (g = e)
      }
      f = f || g
    }
    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
  }

  function N(a, b, c, d) {
    var e, f, g, h, i, j = {},
      k = a.dataTypes.slice();
    if (k[1])
      for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
    for (f = k.shift(); f;)
      if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
        if ("*" === f) f = i;
        else if ("*" !== i && i !== f) {
      if (g = j[i + " " + f] || j["* " + f], !g)
        for (e in j)
          if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
            break
          }
      if (g !== !0)
        if (g && a["throws"]) b = g(b);
        else try {
          b = g(b)
        } catch (l) {
          return {
            state: "parsererror",
            error: g ? l : "No conversion from " + i + " to " + f
          }
        }
    }
    return {
      state: "success",
      data: b
    }
  }

  function O(a, b, c, d) {
    var e;
    if (_.isArray(b)) _.each(b, function(b, e) {
      c || yb.test(a) ? d(a, e) : O(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
    });
    else if (c || "object" !== _.type(b)) d(a, b);
    else
      for (e in b) O(a + "[" + e + "]", b[e], c, d)
  }

  function P(a) {
    return _.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
  }
  var Q = [],
    R = Q.slice,
    S = Q.concat,
    T = Q.push,
    U = Q.indexOf,
    V = {},
    W = V.toString,
    X = V.hasOwnProperty,
    Y = {},
    Z = a.document,
    $ = "2.1.4",
    _ = function(a, b) {
      return new _.fn.init(a, b)
    },
    aa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    ba = /^-ms-/,
    ca = /-([\da-z])/gi,
    da = function(a, b) {
      return b.toUpperCase()
    };
  _.fn = _.prototype = {
    jquery: $,
    constructor: _,
    selector: "",
    length: 0,
    toArray: function() {
      return R.call(this)
    },
    get: function(a) {
      return null != a ? 0 > a ? this[a + this.length] : this[a] : R.call(this)
    },
    pushStack: function(a) {
      var b = _.merge(this.constructor(), a);
      return b.prevObject = this, b.context = this.context, b
    },
    each: function(a, b) {
      return _.each(this, a, b)
    },
    map: function(a) {
      return this.pushStack(_.map(this, function(b, c) {
        return a.call(b, c, b)
      }))
    },
    slice: function() {
      return this.pushStack(R.apply(this, arguments))
    },
    first: function() {
      return this.eq(0)
    },
    last: function() {
      return this.eq(-1)
    },
    eq: function(a) {
      var b = this.length,
        c = +a + (0 > a ? b : 0);
      return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
    },
    end: function() {
      return this.prevObject || this.constructor(null)
    },
    push: T,
    sort: Q.sort,
    splice: Q.splice
  }, _.extend = _.fn.extend = function() {
    var a, b, c, d, e, f, g = arguments[0] || {},
      h = 1,
      i = arguments.length,
      j = !1;
    for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || _.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
      if (null != (a = arguments[h]))
        for (b in a) c = g[b], d = a[b], g !== d && (j && d && (_.isPlainObject(d) || (e = _.isArray(d))) ? (e ? (e = !1, f = c && _.isArray(c) ? c : []) : f = c && _.isPlainObject(c) ? c : {}, g[b] = _.extend(j, f, d)) : void 0 !== d && (g[b] = d));
    return g
  }, _.extend({
    expando: "jQuery" + ($ + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function(a) {
      throw new Error(a)
    },
    noop: function() {},
    isFunction: function(a) {
      return "function" === _.type(a)
    },
    isArray: Array.isArray,
    isWindow: function(a) {
      return null != a && a === a.window
    },
    isNumeric: function(a) {
      return !_.isArray(a) && a - parseFloat(a) + 1 >= 0
    },
    isPlainObject: function(a) {
      return "object" !== _.type(a) || a.nodeType || _.isWindow(a) ? !1 : a.constructor && !X.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
    },
    isEmptyObject: function(a) {
      var b;
      for (b in a) return !1;
      return !0
    },
    type: function(a) {
      return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? V[W.call(a)] || "object" : typeof a
    },
    globalEval: function(a) {
      var b, c = eval;
      a = _.trim(a), a && (1 === a.indexOf("use strict") ? (b = Z.createElement("script"), b.text = a, Z.head.appendChild(b).parentNode.removeChild(b)) : c(a))
    },
    camelCase: function(a) {
      return a.replace(ba, "ms-").replace(ca, da)
    },
    nodeName: function(a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
    },
    each: function(a, b, d) {
      var e, f = 0,
        g = a.length,
        h = c(a);
      if (d) {
        if (h)
          for (; g > f && (e = b.apply(a[f], d), e !== !1); f++);
        else
          for (f in a)
            if (e = b.apply(a[f], d), e === !1) break
      } else if (h)
        for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++);
      else
        for (f in a)
          if (e = b.call(a[f], f, a[f]), e === !1) break; return a
    },
    trim: function(a) {
      return null == a ? "" : (a + "").replace(aa, "")
    },
    makeArray: function(a, b) {
      var d = b || [];
      return null != a && (c(Object(a)) ? _.merge(d, "string" == typeof a ? [a] : a) : T.call(d, a)), d
    },
    inArray: function(a, b, c) {
      return null == b ? -1 : U.call(b, a, c)
    },
    merge: function(a, b) {
      for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
      return a.length = e, a
    },
    grep: function(a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
      return e
    },
    map: function(a, b, d) {
      var e, f = 0,
        g = a.length,
        h = c(a),
        i = [];
      if (h)
        for (; g > f; f++) e = b(a[f], f, d), null != e && i.push(e);
      else
        for (f in a) e = b(a[f], f, d), null != e && i.push(e);
      return S.apply([], i)
    },
    guid: 1,
    proxy: function(a, b) {
      var c, d, e;
      return "string" == typeof b && (c = a[b], b = a, a = c), _.isFunction(a) ? (d = R.call(arguments, 2), e = function() {
        return a.apply(b || this, d.concat(R.call(arguments)))
      }, e.guid = a.guid = a.guid || _.guid++, e) : void 0
    },
    now: Date.now,
    support: Y
  }), _.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
    V["[object " + b + "]"] = b.toLowerCase()
  });
  var ea = function(a) {
    function b(a, b, c, d) {
      var e, f, g, h, i, j, l, n, o, p;
      if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], h = b.nodeType, "string" != typeof a || !a || 1 !== h && 9 !== h && 11 !== h) return c;
      if (!d && I) {
        if (11 !== h && (e = sa.exec(a)))
          if (g = e[1]) {
            if (9 === h) {
              if (f = b.getElementById(g), !f || !f.parentNode) return c;
              if (f.id === g) return c.push(f), c
            } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f), c
          } else {
            if (e[2]) return $.apply(c, b.getElementsByTagName(a)), c;
            if ((g = e[3]) && v.getElementsByClassName) return $.apply(c, b.getElementsByClassName(g)), c
          }
        if (v.qsa && (!J || !J.test(a))) {
          if (n = l = N, o = b, p = 1 !== h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
            for (j = z(a), (l = b.getAttribute("id")) ? n = l.replace(ua, "\\$&") : b.setAttribute("id", n), n = "[id='" + n + "'] ", i = j.length; i--;) j[i] = n + m(j[i]);
            o = ta.test(a) && k(b.parentNode) || b, p = j.join(",")
          }
          if (p) try {
            return $.apply(c, o.querySelectorAll(p)), c
          } catch (q) {} finally {
            l || b.removeAttribute("id")
          }
        }
      }
      return B(a.replace(ia, "$1"), b, c, d)
    }

    function c() {
      function a(c, d) {
        return b.push(c + " ") > w.cacheLength && delete a[b.shift()], a[c + " "] = d
      }
      var b = [];
      return a
    }

    function d(a) {
      return a[N] = !0, a
    }

    function e(a) {
      var b = G.createElement("div");
      try {
        return !!a(b)
      } catch (c) {
        return !1
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null
      }
    }

    function f(a, b) {
      for (var c = a.split("|"), d = a.length; d--;) w.attrHandle[c[d]] = b
    }

    function g(a, b) {
      var c = b && a,
        d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
      if (d) return d;
      if (c)
        for (; c = c.nextSibling;)
          if (c === b) return -1;
      return a ? 1 : -1
    }

    function h(a) {
      return function(b) {
        var c = b.nodeName.toLowerCase();
        return "input" === c && b.type === a
      }
    }

    function i(a) {
      return function(b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a
      }
    }

    function j(a) {
      return d(function(b) {
        return b = +b, d(function(c, d) {
          for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
        })
      })
    }

    function k(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a
    }

    function l() {}

    function m(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
      return d
    }

    function n(a, b, c) {
      var d = b.dir,
        e = c && "parentNode" === d,
        f = Q++;
      return b.first ? function(b, c, f) {
        for (; b = b[d];)
          if (1 === b.nodeType || e) return a(b, c, f)
      } : function(b, c, g) {
        var h, i, j = [P, f];
        if (g) {
          for (; b = b[d];)
            if ((1 === b.nodeType || e) && a(b, c, g)) return !0
        } else
          for (; b = b[d];)
            if (1 === b.nodeType || e) {
              if (i = b[N] || (b[N] = {}), (h = i[d]) && h[0] === P && h[1] === f) return j[2] = h[2];
              if (i[d] = j, j[2] = a(b, c, g)) return !0
            }
      }
    }

    function o(a) {
      return a.length > 1 ? function(b, c, d) {
        for (var e = a.length; e--;)
          if (!a[e](b, c, d)) return !1;
        return !0
      } : a[0]
    }

    function p(a, c, d) {
      for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
      return d
    }

    function q(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
      return g
    }

    function r(a, b, c, e, f, g) {
      return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function(d, g, h, i) {
        var j, k, l, m = [],
          n = [],
          o = g.length,
          r = d || p(b || "*", h.nodeType ? [h] : h, []),
          s = !a || !d && b ? r : q(r, m, a, h, i),
          t = c ? f || (d ? a : o || e) ? [] : g : s;
        if (c && c(s, t, h, i), e)
          for (j = q(t, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
        if (d) {
          if (f || a) {
            if (f) {
              for (j = [], k = t.length; k--;)(l = t[k]) && j.push(s[k] = l);
              f(null, t = [], j, i)
            }
            for (k = t.length; k--;)(l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
          }
        } else t = q(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t)
      })
    }

    function s(a) {
      for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function(a) {
          return a === b
        }, g, !0), j = n(function(a) {
          return aa(b, a) > -1
        }, g, !0), k = [function(a, c, d) {
          var e = !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
          return b = null, e
        }]; e > h; h++)
        if (c = w.relative[a[h].type]) k = [n(o(k), c)];
        else {
          if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) {
            for (d = ++h; e > d && !w.relative[a[d].type]; d++);
            return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({
              value: " " === a[h - 2].type ? "*" : ""
            })).replace(ia, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a))
          }
          k.push(c)
        }
      return o(k)
    }

    function t(a, c) {
      var e = c.length > 0,
        f = a.length > 0,
        g = function(d, g, h, i, j) {
          var k, l, m, n = 0,
            o = "0",
            p = d && [],
            r = [],
            s = C,
            t = d || f && w.find.TAG("*", j),
            u = P += null == s ? 1 : Math.random() || .1,
            v = t.length;
          for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
            if (f && k) {
              for (l = 0; m = a[l++];)
                if (m(k, g, h)) {
                  i.push(k);
                  break
                }
              j && (P = u)
            }
            e && ((k = !m && k) && n--, d && p.push(k))
          }
          if (n += o, e && o !== n) {
            for (l = 0; m = c[l++];) m(p, r, g, h);
            if (d) {
              if (n > 0)
                for (; o--;) p[o] || r[o] || (r[o] = Y.call(i));
              r = q(r)
            }
            $.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
          }
          return j && (P = u, C = s), p
        };
      return e ? d(g) : g
    }
    var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + 1 * new Date,
      O = a.document,
      P = 0,
      Q = 0,
      R = c(),
      S = c(),
      T = c(),
      U = function(a, b) {
        return a === b && (E = !0), 0
      },
      V = 1 << 31,
      W = {}.hasOwnProperty,
      X = [],
      Y = X.pop,
      Z = X.push,
      $ = X.push,
      _ = X.slice,
      aa = function(a, b) {
        for (var c = 0, d = a.length; d > c; c++)
          if (a[c] === b) return c;
        return -1
      },
      ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      ca = "[\\x20\\t\\r\\n\\f]",
      da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      ea = da.replace("w", "w#"),
      fa = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ea + "))|)" + ca + "*\\]",
      ga = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + fa + ")*)|.*)\\)|)",
      ha = new RegExp(ca + "+", "g"),
      ia = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"),
      ja = new RegExp("^" + ca + "*," + ca + "*"),
      ka = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
      la = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"),
      ma = new RegExp(ga),
      na = new RegExp("^" + ea + "$"),
      oa = {
        ID: new RegExp("^#(" + da + ")"),
        CLASS: new RegExp("^\\.(" + da + ")"),
        TAG: new RegExp("^(" + da.replace("w", "w*") + ")"),
        ATTR: new RegExp("^" + fa),
        PSEUDO: new RegExp("^" + ga),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + ba + ")$", "i"),
        needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i")
      },
      pa = /^(?:input|select|textarea|button)$/i,
      qa = /^h\d$/i,
      ra = /^[^{]+\{\s*\[native \w/,
      sa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ta = /[+~]/,
      ua = /'|\\/g,
      va = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"),
      wa = function(a, b, c) {
        var d = "0x" + b - 65536;
        return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
      },
      xa = function() {
        F()
      };
    try {
      $.apply(X = _.call(O.childNodes), O.childNodes), X[O.childNodes.length].nodeType
    } catch (ya) {
      $ = {
        apply: X.length ? function(a, b) {
          Z.apply(a, _.call(b))
        } : function(a, b) {
          for (var c = a.length, d = 0; a[c++] = b[d++];);
          a.length = c - 1
        }
      }
    }
    v = b.support = {}, y = b.isXML = function(a) {
      var b = a && (a.ownerDocument || a).documentElement;
      return b ? "HTML" !== b.nodeName : !1
    }, F = b.setDocument = function(a) {
      var b, c, d = a ? a.ownerDocument || a : O;
      return d !== G && 9 === d.nodeType && d.documentElement ? (G = d, H = d.documentElement, c = d.defaultView, c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", xa, !1) : c.attachEvent && c.attachEvent("onunload", xa)), I = !y(d), v.attributes = e(function(a) {
        return a.className = "i", !a.getAttribute("className")
      }), v.getElementsByTagName = e(function(a) {
        return a.appendChild(d.createComment("")), !a.getElementsByTagName("*").length
      }), v.getElementsByClassName = ra.test(d.getElementsByClassName), v.getById = e(function(a) {
        return H.appendChild(a).id = N, !d.getElementsByName || !d.getElementsByName(N).length
      }), v.getById ? (w.find.ID = function(a, b) {
        if ("undefined" != typeof b.getElementById && I) {
          var c = b.getElementById(a);
          return c && c.parentNode ? [c] : []
        }
      }, w.filter.ID = function(a) {
        var b = a.replace(va, wa);
        return function(a) {
          return a.getAttribute("id") === b
        }
      }) : (delete w.find.ID, w.filter.ID = function(a) {
        var b = a.replace(va, wa);
        return function(a) {
          var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
          return c && c.value === b
        }
      }), w.find.TAG = v.getElementsByTagName ? function(a, b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0
      } : function(a, b) {
        var c, d = [],
          e = 0,
          f = b.getElementsByTagName(a);
        if ("*" === a) {
          for (; c = f[e++];) 1 === c.nodeType && d.push(c);
          return d
        }
        return f
      }, w.find.CLASS = v.getElementsByClassName && function(a, b) {
        return I ? b.getElementsByClassName(a) : void 0
      }, K = [], J = [], (v.qsa = ra.test(d.querySelectorAll)) && (e(function(a) {
        H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + ca + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || J.push("\\[" + ca + "*(?:value|" + ba + ")"), a.querySelectorAll("[id~=" + N + "-]").length || J.push("~="), a.querySelectorAll(":checked").length || J.push(":checked"), a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]")
      }), e(function(a) {
        var b = d.createElement("input");
        b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + ca + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
      })), (v.matchesSelector = ra.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function(a) {
        v.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", ga)
      }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = ra.test(H.compareDocumentPosition), M = b || ra.test(H.contains) ? function(a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
          d = b && b.parentNode;
        return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
      } : function(a, b) {
        if (b)
          for (; b = b.parentNode;)
            if (b === a) return !0;
        return !1
      }, U = b ? function(a, b) {
        if (a === b) return E = !0, 0;
        var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
        return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === d || a.ownerDocument === O && M(O, a) ? -1 : b === d || b.ownerDocument === O && M(O, b) ? 1 : D ? aa(D, a) - aa(D, b) : 0 : 4 & c ? -1 : 1)
      } : function(a, b) {
        if (a === b) return E = !0, 0;
        var c, e = 0,
          f = a.parentNode,
          h = b.parentNode,
          i = [a],
          j = [b];
        if (!f || !h) return a === d ? -1 : b === d ? 1 : f ? -1 : h ? 1 : D ? aa(D, a) - aa(D, b) : 0;
        if (f === h) return g(a, b);
        for (c = a; c = c.parentNode;) i.unshift(c);
        for (c = b; c = c.parentNode;) j.unshift(c);
        for (; i[e] === j[e];) e++;
        return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
      }, d) : G
    }, b.matches = function(a, c) {
      return b(a, null, null, c)
    }, b.matchesSelector = function(a, c) {
      if ((a.ownerDocument || a) !== G && F(a), c = c.replace(la, "='$1']"), !(!v.matchesSelector || !I || K && K.test(c) || J && J.test(c))) try {
        var d = L.call(a, c);
        if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
      } catch (e) {}
      return b(c, G, null, [a]).length > 0
    }, b.contains = function(a, b) {
      return (a.ownerDocument || a) !== G && F(a), M(a, b)
    }, b.attr = function(a, b) {
      (a.ownerDocument || a) !== G && F(a);
      var c = w.attrHandle[b.toLowerCase()],
        d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
      return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
    }, b.error = function(a) {
      throw new Error("Syntax error, unrecognized expression: " + a)
    }, b.uniqueSort = function(a) {
      var b, c = [],
        d = 0,
        e = 0;
      if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) {
        for (; b = a[e++];) b === a[e] && (d = c.push(e));
        for (; d--;) a.splice(c[d], 1)
      }
      return D = null, a
    }, x = b.getText = function(a) {
      var b, c = "",
        d = 0,
        e = a.nodeType;
      if (e) {
        if (1 === e || 9 === e || 11 === e) {
          if ("string" == typeof a.textContent) return a.textContent;
          for (a = a.firstChild; a; a = a.nextSibling) c += x(a)
        } else if (3 === e || 4 === e) return a.nodeValue
      } else
        for (; b = a[d++];) c += x(b);
      return c
    }, w = b.selectors = {
      cacheLength: 50,
      createPseudo: d,
      match: oa,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function(a) {
          return a[1] = a[1].replace(va, wa), a[3] = (a[3] || a[4] || a[5] || "").replace(va, wa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
        },
        CHILD: function(a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
        },
        PSEUDO: function(a) {
          var b, c = !a[6] && a[2];
          return oa.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && ma.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
        }
      },
      filter: {
        TAG: function(a) {
          var b = a.replace(va, wa).toLowerCase();
          return "*" === a ? function() {
            return !0
          } : function(a) {
            return a.nodeName && a.nodeName.toLowerCase() === b
          }
        },
        CLASS: function(a) {
          var b = R[a + " "];
          return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && R(a, function(a) {
            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
          })
        },
        ATTR: function(a, c, d) {
          return function(e) {
            var f = b.attr(e, a);
            return null == f ? "!=" === c : c ? (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ha, " ") + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
          }
        },
        CHILD: function(a, b, c, d, e) {
          var f = "nth" !== a.slice(0, 3),
            g = "last" !== a.slice(-4),
            h = "of-type" === b;
          return 1 === d && 0 === e ? function(a) {
            return !!a.parentNode
          } : function(b, c, i) {
            var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
              q = b.parentNode,
              r = h && b.nodeName.toLowerCase(),
              s = !i && !h;
            if (q) {
              if (f) {
                for (; p;) {
                  for (l = b; l = l[p];)
                    if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                  o = p = "only" === a && !o && "nextSibling"
                }
                return !0
              }
              if (o = [g ? q.firstChild : q.lastChild], g && s) {
                for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)
                  if (1 === l.nodeType && ++m && l === b) {
                    k[a] = [P, n, m];
                    break
                  }
              } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1];
              else
                for (;
                  (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)););
              return m -= e, m === d || m % d === 0 && m / d >= 0
            }
          }
        },
        PSEUDO: function(a, c) {
          var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
          return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
            for (var d, e = f(a, c), g = e.length; g--;) d = aa(a, e[g]), a[d] = !(b[d] = e[g])
          }) : function(a) {
            return f(a, 0, e)
          }) : f
        }
      },
      pseudos: {
        not: d(function(a) {
          var b = [],
            c = [],
            e = A(a.replace(ia, "$1"));
          return e[N] ? d(function(a, b, c, d) {
            for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
          }) : function(a, d, f) {
            return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop()
          }
        }),
        has: d(function(a) {
          return function(c) {
            return b(a, c).length > 0
          }
        }),
        contains: d(function(a) {
          return a = a.replace(va, wa),
            function(b) {
              return (b.textContent || b.innerText || x(b)).indexOf(a) > -1
            }
        }),
        lang: d(function(a) {
          return na.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(va, wa).toLowerCase(),
            function(b) {
              var c;
              do
                if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
              while ((b = b.parentNode) && 1 === b.nodeType);
              return !1
            }
        }),
        target: function(b) {
          var c = a.location && a.location.hash;
          return c && c.slice(1) === b.id
        },
        root: function(a) {
          return a === H
        },
        focus: function(a) {
          return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
        },
        enabled: function(a) {
          return a.disabled === !1
        },
        disabled: function(a) {
          return a.disabled === !0
        },
        checked: function(a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && !!a.checked || "option" === b && !!a.selected
        },
        selected: function(a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
        },
        empty: function(a) {
          for (a = a.firstChild; a; a = a.nextSibling)
            if (a.nodeType < 6) return !1;
          return !0
        },
        parent: function(a) {
          return !w.pseudos.empty(a)
        },
        header: function(a) {
          return qa.test(a.nodeName)
        },
        input: function(a) {
          return pa.test(a.nodeName)
        },
        button: function(a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && "button" === a.type || "button" === b
        },
        text: function(a) {
          var b;
          return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
        },
        first: j(function() {
          return [0]
        }),
        last: j(function(a, b) {
          return [b - 1]
        }),
        eq: j(function(a, b, c) {
          return [0 > c ? c + b : c]
        }),
        even: j(function(a, b) {
          for (var c = 0; b > c; c += 2) a.push(c);
          return a
        }),
        odd: j(function(a, b) {
          for (var c = 1; b > c; c += 2) a.push(c);
          return a
        }),
        lt: j(function(a, b, c) {
          for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
          return a
        }),
        gt: j(function(a, b, c) {
          for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
          return a
        })
      }
    }, w.pseudos.nth = w.pseudos.eq;
    for (u in {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      }) w.pseudos[u] = h(u);
    for (u in {
        submit: !0,
        reset: !0
      }) w.pseudos[u] = i(u);
    return l.prototype = w.filters = w.pseudos, w.setFilters = new l, z = b.tokenize = function(a, c) {
      var d, e, f, g, h, i, j, k = S[a + " "];
      if (k) return c ? 0 : k.slice(0);
      for (h = a, i = [], j = w.preFilter; h;) {
        (!d || (e = ja.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ka.exec(h)) && (d = e.shift(), f.push({
          value: d,
          type: e[0].replace(ia, " ")
        }), h = h.slice(d.length));
        for (g in w.filter) !(e = oa[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
          value: d,
          type: g,
          matches: e
        }), h = h.slice(d.length));
        if (!d) break
      }
      return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
    }, A = b.compile = function(a, b) {
      var c, d = [],
        e = [],
        f = T[a + " "];
      if (!f) {
        for (b || (b = z(a)), c = b.length; c--;) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
        f = T(a, t(e, d)), f.selector = a
      }
      return f
    }, B = b.select = function(a, b, c, d) {
      var e, f, g, h, i, j = "function" == typeof a && a,
        l = !d && z(a = j.selector || a);
      if (c = c || [], 1 === l.length) {
        if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
          if (b = (w.find.ID(g.matches[0].replace(va, wa), b) || [])[0], !b) return c;
          j && (b = b.parentNode), a = a.slice(f.shift().value.length)
        }
        for (e = oa.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !w.relative[h = g.type]);)
          if ((i = w.find[h]) && (d = i(g.matches[0].replace(va, wa), ta.test(f[0].type) && k(b.parentNode) || b))) {
            if (f.splice(e, 1), a = d.length && m(f), !a) return $.apply(c, d), c;
            break
          }
      }
      return (j || A(a, l))(d, b, !I, c, ta.test(a) && k(b.parentNode) || b), c
    }, v.sortStable = N.split("").sort(U).join("") === N, v.detectDuplicates = !!E, F(), v.sortDetached = e(function(a) {
      return 1 & a.compareDocumentPosition(G.createElement("div"))
    }), e(function(a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
    }) || f("type|href|height|width", function(a, b, c) {
      return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
    }), v.attributes && e(function(a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
    }) || f("value", function(a, b, c) {
      return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
    }), e(function(a) {
      return null == a.getAttribute("disabled")
    }) || f(ba, function(a, b, c) {
      var d;
      return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
    }), b
  }(a);
  _.find = ea, _.expr = ea.selectors, _.expr[":"] = _.expr.pseudos, _.unique = ea.uniqueSort, _.text = ea.getText, _.isXMLDoc = ea.isXML, _.contains = ea.contains;
  var fa = _.expr.match.needsContext,
    ga = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    ha = /^.[^:#\[\.,]*$/;
  _.filter = function(a, b, c) {
    var d = b[0];
    return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? _.find.matchesSelector(d, a) ? [d] : [] : _.find.matches(a, _.grep(b, function(a) {
      return 1 === a.nodeType
    }))
  }, _.fn.extend({
    find: function(a) {
      var b, c = this.length,
        d = [],
        e = this;
      if ("string" != typeof a) return this.pushStack(_(a).filter(function() {
        for (b = 0; c > b; b++)
          if (_.contains(e[b], this)) return !0
      }));
      for (b = 0; c > b; b++) _.find(a, e[b], d);
      return d = this.pushStack(c > 1 ? _.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
    },
    filter: function(a) {
      return this.pushStack(d(this, a || [], !1))
    },
    not: function(a) {
      return this.pushStack(d(this, a || [], !0))
    },
    is: function(a) {
      return !!d(this, "string" == typeof a && fa.test(a) ? _(a) : a || [], !1).length
    }
  });
  var ia, ja = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    ka = _.fn.init = function(a, b) {
      var c, d;
      if (!a) return this;
      if ("string" == typeof a) {
        if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : ja.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || ia).find(a) : this.constructor(b).find(a);
        if (c[1]) {
          if (b = b instanceof _ ? b[0] : b, _.merge(this, _.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : Z, !0)), ga.test(c[1]) && _.isPlainObject(b))
            for (c in b) _.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
          return this
        }
        return d = Z.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = Z, this.selector = a, this
      }
      return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : _.isFunction(a) ? "undefined" != typeof ia.ready ? ia.ready(a) : a(_) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), _.makeArray(a, this))
    };
  ka.prototype = _.fn, ia = _(Z);
  var la = /^(?:parents|prev(?:Until|All))/,
    ma = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  _.extend({
    dir: function(a, b, c) {
      for (var d = [], e = void 0 !== c;
        (a = a[b]) && 9 !== a.nodeType;)
        if (1 === a.nodeType) {
          if (e && _(a).is(c)) break;
          d.push(a)
        }
      return d
    },
    sibling: function(a, b) {
      for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
      return c
    }
  }), _.fn.extend({
    has: function(a) {
      var b = _(a, this),
        c = b.length;
      return this.filter(function() {
        for (var a = 0; c > a; a++)
          if (_.contains(this, b[a])) return !0
      })
    },
    closest: function(a, b) {
      for (var c, d = 0, e = this.length, f = [], g = fa.test(a) || "string" != typeof a ? _(a, b || this.context) : 0; e > d; d++)
        for (c = this[d]; c && c !== b; c = c.parentNode)
          if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && _.find.matchesSelector(c, a))) {
            f.push(c);
            break
          }
      return this.pushStack(f.length > 1 ? _.unique(f) : f)
    },
    index: function(a) {
      return a ? "string" == typeof a ? U.call(_(a), this[0]) : U.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    },
    add: function(a, b) {
      return this.pushStack(_.unique(_.merge(this.get(), _(a, b))))
    },
    addBack: function(a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
    }
  }), _.each({
    parent: function(a) {
      var b = a.parentNode;
      return b && 11 !== b.nodeType ? b : null
    },
    parents: function(a) {
      return _.dir(a, "parentNode")
    },
    parentsUntil: function(a, b, c) {
      return _.dir(a, "parentNode", c)
    },
    next: function(a) {
      return e(a, "nextSibling")
    },
    prev: function(a) {
      return e(a, "previousSibling")
    },
    nextAll: function(a) {
      return _.dir(a, "nextSibling")
    },
    prevAll: function(a) {
      return _.dir(a, "previousSibling")
    },
    nextUntil: function(a, b, c) {
      return _.dir(a, "nextSibling", c)
    },
    prevUntil: function(a, b, c) {
      return _.dir(a, "previousSibling", c)
    },
    siblings: function(a) {
      return _.sibling((a.parentNode || {}).firstChild, a)
    },
    children: function(a) {
      return _.sibling(a.firstChild)
    },
    contents: function(a) {
      return a.contentDocument || _.merge([], a.childNodes)
    }
  }, function(a, b) {
    _.fn[a] = function(c, d) {
      var e = _.map(this, b, c);
      return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = _.filter(d, e)), this.length > 1 && (ma[a] || _.unique(e), la.test(a) && e.reverse()), this.pushStack(e)
    }
  });
  var na = /\S+/g,
    oa = {};
  _.Callbacks = function(a) {
    a = "string" == typeof a ? oa[a] || f(a) : _.extend({}, a);
    var b, c, d, e, g, h, i = [],
      j = !a.once && [],
      k = function(f) {
        for (b = a.memory && f, c = !0, h = e || 0, e = 0, g = i.length, d = !0; i && g > h; h++)
          if (i[h].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
            b = !1;
            break
          }
        d = !1, i && (j ? j.length && k(j.shift()) : b ? i = [] : l.disable())
      },
      l = {
        add: function() {
          if (i) {
            var c = i.length;
            ! function f(b) {
              _.each(b, function(b, c) {
                var d = _.type(c);
                "function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c)
              })
            }(arguments), d ? g = i.length : b && (e = c, k(b))
          }
          return this
        },
        remove: function() {
          return i && _.each(arguments, function(a, b) {
            for (var c;
              (c = _.inArray(b, i, c)) > -1;) i.splice(c, 1), d && (g >= c && g--, h >= c && h--)
          }), this
        },
        has: function(a) {
          return a ? _.inArray(a, i) > -1 : !(!i || !i.length)
        },
        empty: function() {
          return i = [], g = 0, this
        },
        disable: function() {
          return i = j = b = void 0, this
        },
        disabled: function() {
          return !i
        },
        lock: function() {
          return j = void 0, b || l.disable(), this
        },
        locked: function() {
          return !j
        },
        fireWith: function(a, b) {
          return !i || c && !j || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? j.push(b) : k(b)), this
        },
        fire: function() {
          return l.fireWith(this, arguments), this
        },
        fired: function() {
          return !!c
        }
      };
    return l
  }, _.extend({
    Deferred: function(a) {
      var b = [
          ["resolve", "done", _.Callbacks("once memory"), "resolved"],
          ["reject", "fail", _.Callbacks("once memory"), "rejected"],
          ["notify", "progress", _.Callbacks("memory")]
        ],
        c = "pending",
        d = {
          state: function() {
            return c
          },
          always: function() {
            return e.done(arguments).fail(arguments), this
          },
          then: function() {
            var a = arguments;
            return _.Deferred(function(c) {
              _.each(b, function(b, f) {
                var g = _.isFunction(a[b]) && a[b];
                e[f[1]](function() {
                  var a = g && g.apply(this, arguments);
                  a && _.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                })
              }), a = null
            }).promise()
          },
          promise: function(a) {
            return null != a ? _.extend(a, d) : d
          }
        },
        e = {};
      return d.pipe = d.then, _.each(b, function(a, f) {
        var g = f[2],
          h = f[3];
        d[f[1]] = g.add, h && g.add(function() {
          c = h
        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
          return e[f[0] + "With"](this === e ? d : this, arguments), this
        }, e[f[0] + "With"] = g.fireWith
      }), d.promise(e), a && a.call(e, e), e
    },
    when: function(a) {
      var b, c, d, e = 0,
        f = R.call(arguments),
        g = f.length,
        h = 1 !== g || a && _.isFunction(a.promise) ? g : 0,
        i = 1 === h ? a : _.Deferred(),
        j = function(a, c, d) {
          return function(e) {
            c[a] = this, d[a] = arguments.length > 1 ? R.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
          }
        };
      if (g > 1)
        for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && _.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
      return h || i.resolveWith(d, f), i.promise()
    }
  });
  var pa;
  _.fn.ready = function(a) {
    return _.ready.promise().done(a), this
  }, _.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function(a) {
      a ? _.readyWait++ : _.ready(!0)
    },
    ready: function(a) {
      (a === !0 ? --_.readyWait : _.isReady) || (_.isReady = !0, a !== !0 && --_.readyWait > 0 || (pa.resolveWith(Z, [_]), _.fn.triggerHandler && (_(Z).triggerHandler("ready"), _(Z).off("ready"))))
    }
  }), _.ready.promise = function(b) {
    return pa || (pa = _.Deferred(), "complete" === Z.readyState ? setTimeout(_.ready) : (Z.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", g, !1))), pa.promise(b)
  }, _.ready.promise();
  var qa = _.access = function(a, b, c, d, e, f, g) {
    var h = 0,
      i = a.length,
      j = null == c;
    if ("object" === _.type(c)) {
      e = !0;
      for (h in c) _.access(a, b, h, c[h], !0, f, g)
    } else if (void 0 !== d && (e = !0, _.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
        return j.call(_(a), c)
      })), b))
      for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
    return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
  };
  _.acceptData = function(a) {
    return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
  }, h.uid = 1, h.accepts = _.acceptData, h.prototype = {
    key: function(a) {
      if (!h.accepts(a)) return 0;
      var b = {},
        c = a[this.expando];
      if (!c) {
        c = h.uid++;
        try {
          b[this.expando] = {
            value: c
          }, Object.defineProperties(a, b)
        } catch (d) {
          b[this.expando] = c, _.extend(a, b)
        }
      }
      return this.cache[c] || (this.cache[c] = {}), c
    },
    set: function(a, b, c) {
      var d, e = this.key(a),
        f = this.cache[e];
      if ("string" == typeof b) f[b] = c;
      else if (_.isEmptyObject(f)) _.extend(this.cache[e], b);
      else
        for (d in b) f[d] = b[d];
      return f
    },
    get: function(a, b) {
      var c = this.cache[this.key(a)];
      return void 0 === b ? c : c[b]
    },
    access: function(a, b, c) {
      var d;
      return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, _.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
    },
    remove: function(a, b) {
      var c, d, e, f = this.key(a),
        g = this.cache[f];
      if (void 0 === b) this.cache[f] = {};
      else {
        _.isArray(b) ? d = b.concat(b.map(_.camelCase)) : (e = _.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(na) || [])), c = d.length;
        for (; c--;) delete g[d[c]]
      }
    },
    hasData: function(a) {
      return !_.isEmptyObject(this.cache[a[this.expando]] || {})
    },
    discard: function(a) {
      a[this.expando] && delete this.cache[a[this.expando]]
    }
  };
  var ra = new h,
    sa = new h,
    ta = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    ua = /([A-Z])/g;
  _.extend({
    hasData: function(a) {
      return sa.hasData(a) || ra.hasData(a)
    },
    data: function(a, b, c) {
      return sa.access(a, b, c)
    },
    removeData: function(a, b) {
      sa.remove(a, b)
    },
    _data: function(a, b, c) {
      return ra.access(a, b, c)
    },
    _removeData: function(a, b) {
      ra.remove(a, b)
    }
  }), _.fn.extend({
    data: function(a, b) {
      var c, d, e, f = this[0],
        g = f && f.attributes;
      if (void 0 === a) {
        if (this.length && (e = sa.get(f), 1 === f.nodeType && !ra.get(f, "hasDataAttrs"))) {
          for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = _.camelCase(d.slice(5)), i(f, d, e[d])));
          ra.set(f, "hasDataAttrs", !0)
        }
        return e
      }
      return "object" == typeof a ? this.each(function() {
        sa.set(this, a)
      }) : qa(this, function(b) {
        var c, d = _.camelCase(a);
        if (f && void 0 === b) {
          if (c = sa.get(f, a), void 0 !== c) return c;
          if (c = sa.get(f, d), void 0 !== c) return c;
          if (c = i(f, d, void 0), void 0 !== c) return c
        } else this.each(function() {
          var c = sa.get(this, d);
          sa.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && sa.set(this, a, b)
        })
      }, null, b, arguments.length > 1, null, !0)
    },
    removeData: function(a) {
      return this.each(function() {
        sa.remove(this, a)
      })
    }
  }), _.extend({
    queue: function(a, b, c) {
      var d;
      return a ? (b = (b || "fx") + "queue", d = ra.get(a, b), c && (!d || _.isArray(c) ? d = ra.access(a, b, _.makeArray(c)) : d.push(c)), d || []) : void 0
    },
    dequeue: function(a, b) {
      b = b || "fx";
      var c = _.queue(a, b),
        d = c.length,
        e = c.shift(),
        f = _._queueHooks(a, b),
        g = function() {
          _.dequeue(a, b)
        };
      "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
    },
    _queueHooks: function(a, b) {
      var c = b + "queueHooks";
      return ra.get(a, c) || ra.access(a, c, {
        empty: _.Callbacks("once memory").add(function() {
          ra.remove(a, [b + "queue", c])
        })
      })
    }
  }), _.fn.extend({
    queue: function(a, b) {
      var c = 2;
      return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? _.queue(this[0], a) : void 0 === b ? this : this.each(function() {
        var c = _.queue(this, a, b);
        _._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && _.dequeue(this, a)
      })
    },
    dequeue: function(a) {
      return this.each(function() {
        _.dequeue(this, a)
      })
    },
    clearQueue: function(a) {
      return this.queue(a || "fx", [])
    },
    promise: function(a, b) {
      var c, d = 1,
        e = _.Deferred(),
        f = this,
        g = this.length,
        h = function() {
          --d || e.resolveWith(f, [f])
        };
      for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = ra.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
      return h(), e.promise(b)
    }
  });
  var va = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    wa = ["Top", "Right", "Bottom", "Left"],
    xa = function(a, b) {
      return a = b || a, "none" === _.css(a, "display") || !_.contains(a.ownerDocument, a)
    },
    ya = /^(?:checkbox|radio)$/i;
  ! function() {
    var a = Z.createDocumentFragment(),
      b = a.appendChild(Z.createElement("div")),
      c = Z.createElement("input");
    c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), Y.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", Y.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
  }();
  var za = "undefined";
  Y.focusinBubbles = "onfocusin" in a;
  var Aa = /^key/,
    Ba = /^(?:mouse|pointer|contextmenu)|click/,
    Ca = /^(?:focusinfocus|focusoutblur)$/,
    Da = /^([^.]*)(?:\.(.+)|)$/;
  _.event = {
    global: {},
    add: function(a, b, c, d, e) {
      var f, g, h, i, j, k, l, m, n, o, p, q = ra.get(a);
      if (q)
        for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = _.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) {
            return typeof _ !== za && _.event.triggered !== b.type ? _.event.dispatch.apply(a, arguments) : void 0
          }), b = (b || "").match(na) || [""], j = b.length; j--;) h = Da.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = _.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = _.event.special[n] || {}, k = _.extend({
          type: n,
          origType: p,
          data: d,
          handler: c,
          guid: c.guid,
          selector: e,
          needsContext: e && _.expr.match.needsContext.test(e),
          namespace: o.join(".")
        }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), _.event.global[n] = !0)
    },
    remove: function(a, b, c, d, e) {
      var f, g, h, i, j, k, l, m, n, o, p, q = ra.hasData(a) && ra.get(a);
      if (q && (i = q.events)) {
        for (b = (b || "").match(na) || [""], j = b.length; j--;)
          if (h = Da.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
            for (l = _.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
            g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || _.removeEvent(a, n, q.handle), delete i[n])
          } else
            for (n in i) _.event.remove(a, n + b[j], c, d, !0);
        _.isEmptyObject(i) && (delete q.handle, ra.remove(a, "events"))
      }
    },
    trigger: function(b, c, d, e) {
      var f, g, h, i, j, k, l, m = [d || Z],
        n = X.call(b, "type") ? b.type : b,
        o = X.call(b, "namespace") ? b.namespace.split(".") : [];
      if (g = h = d = d || Z, 3 !== d.nodeType && 8 !== d.nodeType && !Ca.test(n + _.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), n = o.shift(), o.sort()), j = n.indexOf(":") < 0 && "on" + n, b = b[_.expando] ? b : new _.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : _.makeArray(c, [b]), l = _.event.special[n] || {}, e || !l.trigger || l.trigger.apply(d, c) !== !1)) {
        if (!e && !l.noBubble && !_.isWindow(d)) {
          for (i = l.delegateType || n, Ca.test(i + n) || (g = g.parentNode); g; g = g.parentNode) m.push(g), h = g;
          h === (d.ownerDocument || Z) && m.push(h.defaultView || h.parentWindow || a)
        }
        for (f = 0;
          (g = m[f++]) && !b.isPropagationStopped();) b.type = f > 1 ? i : l.bindType || n, k = (ra.get(g, "events") || {})[b.type] && ra.get(g, "handle"), k && k.apply(g, c), k = j && g[j], k && k.apply && _.acceptData(g) && (b.result = k.apply(g, c), b.result === !1 && b.preventDefault());
        return b.type = n, e || b.isDefaultPrevented() || l._default && l._default.apply(m.pop(), c) !== !1 || !_.acceptData(d) || j && _.isFunction(d[n]) && !_.isWindow(d) && (h = d[j], h && (d[j] = null), _.event.triggered = n, d[n](), _.event.triggered = void 0, h && (d[j] = h)), b.result
      }
    },
    dispatch: function(a) {
      a = _.event.fix(a);
      var b, c, d, e, f, g = [],
        h = R.call(arguments),
        i = (ra.get(this, "events") || {})[a.type] || [],
        j = _.event.special[a.type] || {};
      if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
        for (g = _.event.handlers.call(this, a, i), b = 0;
          (e = g[b++]) && !a.isPropagationStopped();)
          for (a.currentTarget = e.elem, c = 0;
            (f = e.handlers[c++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(f.namespace)) && (a.handleObj = f, a.data = f.data, d = ((_.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
        return j.postDispatch && j.postDispatch.call(this, a), a.result
      }
    },
    handlers: function(a, b) {
      var c, d, e, f, g = [],
        h = b.delegateCount,
        i = a.target;
      if (h && i.nodeType && (!a.button || "click" !== a.type))
        for (; i !== this; i = i.parentNode || this)
          if (i.disabled !== !0 || "click" !== a.type) {
            for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? _(e, this).index(i) >= 0 : _.find(e, this, null, [i]).length), d[e] && d.push(f);
            d.length && g.push({
              elem: i,
              handlers: d
            })
          }
      return h < b.length && g.push({
        elem: this,
        handlers: b.slice(h)
      }), g
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function(a, b) {
        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function(a, b) {
        var c, d, e, f = b.button;
        return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || Z, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
      }
    },
    fix: function(a) {
      if (a[_.expando]) return a;
      var b, c, d, e = a.type,
        f = a,
        g = this.fixHooks[e];
      for (g || (this.fixHooks[e] = g = Ba.test(e) ? this.mouseHooks : Aa.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new _.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
      return a.target || (a.target = Z), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function() {
          return this !== l() && this.focus ? (this.focus(), !1) : void 0
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function() {
          return this === l() && this.blur ? (this.blur(), !1) : void 0
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function() {
          return "checkbox" === this.type && this.click && _.nodeName(this, "input") ? (this.click(), !1) : void 0
        },
        _default: function(a) {
          return _.nodeName(a.target, "a")
        }
      },
      beforeunload: {
        postDispatch: function(a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
        }
      }
    },
    simulate: function(a, b, c, d) {
      var e = _.extend(new _.Event, c, {
        type: a,
        isSimulated: !0,
        originalEvent: {}
      });
      d ? _.event.trigger(e, null, b) : _.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
    }
  }, _.removeEvent = function(a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c, !1)
  }, _.Event = function(a, b) {
    return this instanceof _.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? j : k) : this.type = a, b && _.extend(this, b), this.timeStamp = a && a.timeStamp || _.now(), void(this[_.expando] = !0)) : new _.Event(a, b)
  }, _.Event.prototype = {
    isDefaultPrevented: k,
    isPropagationStopped: k,
    isImmediatePropagationStopped: k,
    preventDefault: function() {
      var a = this.originalEvent;
      this.isDefaultPrevented = j, a && a.preventDefault && a.preventDefault()
    },
    stopPropagation: function() {
      var a = this.originalEvent;
      this.isPropagationStopped = j, a && a.stopPropagation && a.stopPropagation()
    },
    stopImmediatePropagation: function() {
      var a = this.originalEvent;
      this.isImmediatePropagationStopped = j, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
    }
  }, _.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function(a, b) {
    _.event.special[a] = {
      delegateType: b,
      bindType: b,
      handle: function(a) {
        var c, d = this,
          e = a.relatedTarget,
          f = a.handleObj;
        return (!e || e !== d && !_.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
      }
    }
  }), Y.focusinBubbles || _.each({
    focus: "focusin",
    blur: "focusout"
  }, function(a, b) {
    var c = function(a) {
      _.event.simulate(b, a.target, _.event.fix(a), !0)
    };
    _.event.special[b] = {
      setup: function() {
        var d = this.ownerDocument || this,
          e = ra.access(d, b);
        e || d.addEventListener(a, c, !0), ra.access(d, b, (e || 0) + 1)
      },
      teardown: function() {
        var d = this.ownerDocument || this,
          e = ra.access(d, b) - 1;
        e ? ra.access(d, b, e) : (d.removeEventListener(a, c, !0), ra.remove(d, b))
      }
    }
  }), _.fn.extend({
    on: function(a, b, c, d, e) {
      var f, g;
      if ("object" == typeof a) {
        "string" != typeof b && (c = c || b, b = void 0);
        for (g in a) this.on(g, b, c, a[g], e);
        return this
      }
      if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = k;
      else if (!d) return this;
      return 1 === e && (f = d, d = function(a) {
        return _().off(a), f.apply(this, arguments)
      }, d.guid = f.guid || (f.guid = _.guid++)), this.each(function() {
        _.event.add(this, a, d, c, b)
      })
    },
    one: function(a, b, c, d) {
      return this.on(a, b, c, d, 1)
    },
    off: function(a, b, c) {
      var d, e;
      if (a && a.preventDefault && a.handleObj) return d = a.handleObj, _(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
      if ("object" == typeof a) {
        for (e in a) this.off(e, b, a[e]);
        return this
      }
      return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = k), this.each(function() {
        _.event.remove(this, a, c, b)
      })
    },
    trigger: function(a, b) {
      return this.each(function() {
        _.event.trigger(a, b, this)
      })
    },
    triggerHandler: function(a, b) {
      var c = this[0];
      return c ? _.event.trigger(a, b, c, !0) : void 0
    }
  });
  var Ea = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Fa = /<([\w:]+)/,
    Ga = /<|&#?\w+;/,
    Ha = /<(?:script|style|link)/i,
    Ia = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ja = /^$|\/(?:java|ecma)script/i,
    Ka = /^true\/(.*)/,
    La = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    Ma = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };
  Ma.optgroup = Ma.option, Ma.tbody = Ma.tfoot = Ma.colgroup = Ma.caption = Ma.thead, Ma.th = Ma.td, _.extend({
    clone: function(a, b, c) {
      var d, e, f, g, h = a.cloneNode(!0),
        i = _.contains(a.ownerDocument, a);
      if (!(Y.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || _.isXMLDoc(a)))
        for (g = r(h), f = r(a), d = 0, e = f.length; e > d; d++) s(f[d], g[d]);
      if (b)
        if (c)
          for (f = f || r(a), g = g || r(h), d = 0, e = f.length; e > d; d++) q(f[d], g[d]);
        else q(a, h);
      return g = r(h, "script"), g.length > 0 && p(g, !i && r(a, "script")), h
    },
    buildFragment: function(a, b, c, d) {
      for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, n = a.length; n > m; m++)
        if (e = a[m], e || 0 === e)
          if ("object" === _.type(e)) _.merge(l, e.nodeType ? [e] : e);
          else if (Ga.test(e)) {
        for (f = f || k.appendChild(b.createElement("div")), g = (Fa.exec(e) || ["", ""])[1].toLowerCase(), h = Ma[g] || Ma._default, f.innerHTML = h[1] + e.replace(Ea, "<$1></$2>") + h[2], j = h[0]; j--;) f = f.lastChild;
        _.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
      } else l.push(b.createTextNode(e));
      for (k.textContent = "", m = 0; e = l[m++];)
        if ((!d || -1 === _.inArray(e, d)) && (i = _.contains(e.ownerDocument, e), f = r(k.appendChild(e), "script"), i && p(f), c))
          for (j = 0; e = f[j++];) Ja.test(e.type || "") && c.push(e);
      return k
    },
    cleanData: function(a) {
      for (var b, c, d, e, f = _.event.special, g = 0; void 0 !== (c = a[g]); g++) {
        if (_.acceptData(c) && (e = c[ra.expando], e && (b = ra.cache[e]))) {
          if (b.events)
            for (d in b.events) f[d] ? _.event.remove(c, d) : _.removeEvent(c, d, b.handle);
          ra.cache[e] && delete ra.cache[e]
        }
        delete sa.cache[c[sa.expando]]
      }
    }
  }), _.fn.extend({
    text: function(a) {
      return qa(this, function(a) {
        return void 0 === a ? _.text(this) : this.empty().each(function() {
          (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
        })
      }, null, a, arguments.length)
    },
    append: function() {
      return this.domManip(arguments, function(a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = m(this, a);
          b.appendChild(a)
        }
      })
    },
    prepend: function() {
      return this.domManip(arguments, function(a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = m(this, a);
          b.insertBefore(a, b.firstChild)
        }
      })
    },
    before: function() {
      return this.domManip(arguments, function(a) {
        this.parentNode && this.parentNode.insertBefore(a, this)
      })
    },
    after: function() {
      return this.domManip(arguments, function(a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
      })
    },
    remove: function(a, b) {
      for (var c, d = a ? _.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || _.cleanData(r(c)), c.parentNode && (b && _.contains(c.ownerDocument, c) && p(r(c, "script")), c.parentNode.removeChild(c));
      return this
    },
    empty: function() {
      for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (_.cleanData(r(a, !1)), a.textContent = "");
      return this
    },
    clone: function(a, b) {
      return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
        return _.clone(this, a, b)
      })
    },
    html: function(a) {
      return qa(this, function(a) {
        var b = this[0] || {},
          c = 0,
          d = this.length;
        if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
        if ("string" == typeof a && !Ha.test(a) && !Ma[(Fa.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = a.replace(Ea, "<$1></$2>");
          try {
            for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (_.cleanData(r(b, !1)), b.innerHTML = a);
            b = 0
          } catch (e) {}
        }
        b && this.empty().append(a)
      }, null, a, arguments.length)
    },
    replaceWith: function() {
      var a = arguments[0];
      return this.domManip(arguments, function(b) {
        a = this.parentNode, _.cleanData(r(this)), a && a.replaceChild(b, this)
      }), a && (a.length || a.nodeType) ? this : this.remove()
    },
    detach: function(a) {
      return this.remove(a, !0)
    },
    domManip: function(a, b) {
      a = S.apply([], a);
      var c, d, e, f, g, h, i = 0,
        j = this.length,
        k = this,
        l = j - 1,
        m = a[0],
        p = _.isFunction(m);
      if (p || j > 1 && "string" == typeof m && !Y.checkClone && Ia.test(m)) return this.each(function(c) {
        var d = k.eq(c);
        p && (a[0] = m.call(this, c, d.html())), d.domManip(a, b)
      });
      if (j && (c = _.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
        for (e = _.map(r(c, "script"), n), f = e.length; j > i; i++) g = c, i !== l && (g = _.clone(g, !0, !0), f && _.merge(e, r(g, "script"))), b.call(this[i], g, i);
        if (f)
          for (h = e[e.length - 1].ownerDocument, _.map(e, o), i = 0; f > i; i++) g = e[i], Ja.test(g.type || "") && !ra.access(g, "globalEval") && _.contains(h, g) && (g.src ? _._evalUrl && _._evalUrl(g.src) : _.globalEval(g.textContent.replace(La, "")))
      }
      return this
    }
  }), _.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(a, b) {
    _.fn[a] = function(a) {
      for (var c, d = [], e = _(a), f = e.length - 1, g = 0; f >= g; g++) c = g === f ? this : this.clone(!0), _(e[g])[b](c), T.apply(d, c.get());
      return this.pushStack(d)
    }
  });
  var Na, Oa = {},
    Pa = /^margin/,
    Qa = new RegExp("^(" + va + ")(?!px)[a-z%]+$", "i"),
    Ra = function(b) {
      return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
    };
  ! function() {
    function b() {
      g.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", g.innerHTML = "", e.appendChild(f);
      var b = a.getComputedStyle(g, null);
      c = "1%" !== b.top, d = "4px" === b.width, e.removeChild(f)
    }
    var c, d, e = Z.documentElement,
      f = Z.createElement("div"),
      g = Z.createElement("div");
    g.style && (g.style.backgroundClip = "content-box", g.cloneNode(!0).style.backgroundClip = "", Y.clearCloneStyle = "content-box" === g.style.backgroundClip, f.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", f.appendChild(g), a.getComputedStyle && _.extend(Y, {
      pixelPosition: function() {
        return b(), c
      },
      boxSizingReliable: function() {
        return null == d && b(), d
      },
      reliableMarginRight: function() {
        var b, c = g.appendChild(Z.createElement("div"));
        return c.style.cssText = g.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", g.style.width = "1px", e.appendChild(f), b = !parseFloat(a.getComputedStyle(c, null).marginRight), e.removeChild(f), g.removeChild(c), b
      }
    }))
  }(), _.swap = function(a, b, c, d) {
    var e, f, g = {};
    for (f in b) g[f] = a.style[f], a.style[f] = b[f];
    e = c.apply(a, d || []);
    for (f in b) a.style[f] = g[f];
    return e
  };
  var Sa = /^(none|table(?!-c[ea]).+)/,
    Ta = new RegExp("^(" + va + ")(.*)$", "i"),
    Ua = new RegExp("^([+-])=(" + va + ")", "i"),
    Va = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    Wa = {
      letterSpacing: "0",
      fontWeight: "400"
    },
    Xa = ["Webkit", "O", "Moz", "ms"];
  _.extend({
    cssHooks: {
      opacity: {
        get: function(a, b) {
          if (b) {
            var c = v(a, "opacity");
            return "" === c ? "1" : c
          }
        }
      }
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      "float": "cssFloat"
    },
    style: function(a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e, f, g, h = _.camelCase(b),
          i = a.style;
        return b = _.cssProps[h] || (_.cssProps[h] = x(i, h)), g = _.cssHooks[b] || _.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ua.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(_.css(a, b)), f = "number"), void(null != c && c === c && ("number" !== f || _.cssNumber[h] || (c += "px"), Y.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c))))
      }
    },
    css: function(a, b, c, d) {
      var e, f, g, h = _.camelCase(b);
      return b = _.cssProps[h] || (_.cssProps[h] = x(a.style, h)), g = _.cssHooks[b] || _.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = v(a, b, d)), "normal" === e && b in Wa && (e = Wa[b]), "" === c || c ? (f = parseFloat(e), c === !0 || _.isNumeric(f) ? f || 0 : e) : e
    }
  }), _.each(["height", "width"], function(a, b) {
    _.cssHooks[b] = {
      get: function(a, c, d) {
        return c ? Sa.test(_.css(a, "display")) && 0 === a.offsetWidth ? _.swap(a, Va, function() {
          return A(a, b, d)
        }) : A(a, b, d) : void 0
      },
      set: function(a, c, d) {
        var e = d && Ra(a);
        return y(a, c, d ? z(a, b, d, "border-box" === _.css(a, "boxSizing", !1, e), e) : 0)
      }
    }
  }), _.cssHooks.marginRight = w(Y.reliableMarginRight, function(a, b) {
    return b ? _.swap(a, {
      display: "inline-block"
    }, v, [a, "marginRight"]) : void 0
  }), _.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(a, b) {
    _.cssHooks[a + b] = {
      expand: function(c) {
        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + wa[d] + b] = f[d] || f[d - 2] || f[0];
        return e
      }
    }, Pa.test(a) || (_.cssHooks[a + b].set = y)
  }), _.fn.extend({
    css: function(a, b) {
      return qa(this, function(a, b, c) {
        var d, e, f = {},
          g = 0;
        if (_.isArray(b)) {
          for (d = Ra(a), e = b.length; e > g; g++) f[b[g]] = _.css(a, b[g], !1, d);
          return f
        }
        return void 0 !== c ? _.style(a, b, c) : _.css(a, b)
      }, a, b, arguments.length > 1)
    },
    show: function() {
      return B(this, !0)
    },
    hide: function() {
      return B(this)
    },
    toggle: function(a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
        xa(this) ? _(this).show() : _(this).hide()
      })
    }
  }), _.Tween = C, C.prototype = {
    constructor: C,
    init: function(a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (_.cssNumber[c] ? "" : "px")
    },
    cur: function() {
      var a = C.propHooks[this.prop];
      return a && a.get ? a.get(this) : C.propHooks._default.get(this)
    },
    run: function(a) {
      var b, c = C.propHooks[this.prop];
      return this.options.duration ? this.pos = b = _.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : C.propHooks._default.set(this), this
    }
  }, C.prototype.init.prototype = C.prototype, C.propHooks = {
    _default: {
      get: function(a) {
        var b;
        return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = _.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
      },
      set: function(a) {
        _.fx.step[a.prop] ? _.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[_.cssProps[a.prop]] || _.cssHooks[a.prop]) ? _.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
      }
    }
  }, C.propHooks.scrollTop = C.propHooks.scrollLeft = {
    set: function(a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
    }
  }, _.easing = {
    linear: function(a) {
      return a
    },
    swing: function(a) {
      return .5 - Math.cos(a * Math.PI) / 2
    }
  }, _.fx = C.prototype.init, _.fx.step = {};
  var Ya, Za, $a = /^(?:toggle|show|hide)$/,
    _a = new RegExp("^(?:([+-])=|)(" + va + ")([a-z%]*)$", "i"),
    ab = /queueHooks$/,
    bb = [G],
    cb = {
      "*": [function(a, b) {
        var c = this.createTween(a, b),
          d = c.cur(),
          e = _a.exec(b),
          f = e && e[3] || (_.cssNumber[a] ? "" : "px"),
          g = (_.cssNumber[a] || "px" !== f && +d) && _a.exec(_.css(c.elem, a)),
          h = 1,
          i = 20;
        if (g && g[3] !== f) {
          f = f || g[3], e = e || [], g = +d || 1;
          do h = h || ".5", g /= h, _.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
        }
        return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
      }]
    };
  _.Animation = _.extend(I, {
      tweener: function(a, b) {
        _.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
        for (var c, d = 0, e = a.length; e > d; d++) c = a[d], cb[c] = cb[c] || [], cb[c].unshift(b)
      },
      prefilter: function(a, b) {
        b ? bb.unshift(a) : bb.push(a)
      }
    }), _.speed = function(a, b, c) {
      var d = a && "object" == typeof a ? _.extend({}, a) : {
        complete: c || !c && b || _.isFunction(a) && a,
        duration: a,
        easing: c && b || b && !_.isFunction(b) && b
      };
      return d.duration = _.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in _.fx.speeds ? _.fx.speeds[d.duration] : _.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
        _.isFunction(d.old) && d.old.call(this), d.queue && _.dequeue(this, d.queue)
      }, d
    }, _.fn.extend({
      fadeTo: function(a, b, c, d) {
        return this.filter(xa).css("opacity", 0).show().end().animate({
          opacity: b
        }, a, c, d)
      },
      animate: function(a, b, c, d) {
        var e = _.isEmptyObject(a),
          f = _.speed(b, c, d),
          g = function() {
            var b = I(this, _.extend({}, a), f);
            (e || ra.get(this, "finish")) && b.stop(!0)
          };
        return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
      },
      stop: function(a, b, c) {
        var d = function(a) {
          var b = a.stop;
          delete a.stop, b(c)
        };
        return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
          var b = !0,
            e = null != a && a + "queueHooks",
            f = _.timers,
            g = ra.get(this);
          if (e) g[e] && g[e].stop && d(g[e]);
          else
            for (e in g) g[e] && g[e].stop && ab.test(e) && d(g[e]);
          for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c),
            b = !1, f.splice(e, 1));
          (b || !c) && _.dequeue(this, a)
        })
      },
      finish: function(a) {
        return a !== !1 && (a = a || "fx"), this.each(function() {
          var b, c = ra.get(this),
            d = c[a + "queue"],
            e = c[a + "queueHooks"],
            f = _.timers,
            g = d ? d.length : 0;
          for (c.finish = !0, _.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
          for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
          delete c.finish
        })
      }
    }), _.each(["toggle", "show", "hide"], function(a, b) {
      var c = _.fn[b];
      _.fn[b] = function(a, d, e) {
        return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(E(b, !0), a, d, e)
      }
    }), _.each({
      slideDown: E("show"),
      slideUp: E("hide"),
      slideToggle: E("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, function(a, b) {
      _.fn[a] = function(a, c, d) {
        return this.animate(b, a, c, d)
      }
    }), _.timers = [], _.fx.tick = function() {
      var a, b = 0,
        c = _.timers;
      for (Ya = _.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
      c.length || _.fx.stop(), Ya = void 0
    }, _.fx.timer = function(a) {
      _.timers.push(a), a() ? _.fx.start() : _.timers.pop()
    }, _.fx.interval = 13, _.fx.start = function() {
      Za || (Za = setInterval(_.fx.tick, _.fx.interval))
    }, _.fx.stop = function() {
      clearInterval(Za), Za = null
    }, _.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, _.fn.delay = function(a, b) {
      return a = _.fx ? _.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
        var d = setTimeout(b, a);
        c.stop = function() {
          clearTimeout(d)
        }
      })
    },
    function() {
      var a = Z.createElement("input"),
        b = Z.createElement("select"),
        c = b.appendChild(Z.createElement("option"));
      a.type = "checkbox", Y.checkOn = "" !== a.value, Y.optSelected = c.selected, b.disabled = !0, Y.optDisabled = !c.disabled, a = Z.createElement("input"), a.value = "t", a.type = "radio", Y.radioValue = "t" === a.value
    }();
  var db, eb, fb = _.expr.attrHandle;
  _.fn.extend({
    attr: function(a, b) {
      return qa(this, _.attr, a, b, arguments.length > 1)
    },
    removeAttr: function(a) {
      return this.each(function() {
        _.removeAttr(this, a)
      })
    }
  }), _.extend({
    attr: function(a, b, c) {
      var d, e, f = a.nodeType;
      return a && 3 !== f && 8 !== f && 2 !== f ? typeof a.getAttribute === za ? _.prop(a, b, c) : (1 === f && _.isXMLDoc(a) || (b = b.toLowerCase(), d = _.attrHooks[b] || (_.expr.match.bool.test(b) ? eb : db)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = _.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void _.removeAttr(a, b)) : void 0
    },
    removeAttr: function(a, b) {
      var c, d, e = 0,
        f = b && b.match(na);
      if (f && 1 === a.nodeType)
        for (; c = f[e++];) d = _.propFix[c] || c, _.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
    },
    attrHooks: {
      type: {
        set: function(a, b) {
          if (!Y.radioValue && "radio" === b && _.nodeName(a, "input")) {
            var c = a.value;
            return a.setAttribute("type", b), c && (a.value = c), b
          }
        }
      }
    }
  }), eb = {
    set: function(a, b, c) {
      return b === !1 ? _.removeAttr(a, c) : a.setAttribute(c, c), c
    }
  }, _.each(_.expr.match.bool.source.match(/\w+/g), function(a, b) {
    var c = fb[b] || _.find.attr;
    fb[b] = function(a, b, d) {
      var e, f;
      return d || (f = fb[b], fb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, fb[b] = f), e
    }
  });
  var gb = /^(?:input|select|textarea|button)$/i;
  _.fn.extend({
    prop: function(a, b) {
      return qa(this, _.prop, a, b, arguments.length > 1)
    },
    removeProp: function(a) {
      return this.each(function() {
        delete this[_.propFix[a] || a]
      })
    }
  }), _.extend({
    propFix: {
      "for": "htmlFor",
      "class": "className"
    },
    prop: function(a, b, c) {
      var d, e, f, g = a.nodeType;
      return a && 3 !== g && 8 !== g && 2 !== g ? (f = 1 !== g || !_.isXMLDoc(a), f && (b = _.propFix[b] || b, e = _.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]) : void 0
    },
    propHooks: {
      tabIndex: {
        get: function(a) {
          return a.hasAttribute("tabindex") || gb.test(a.nodeName) || a.href ? a.tabIndex : -1
        }
      }
    }
  }), Y.optSelected || (_.propHooks.selected = {
    get: function(a) {
      var b = a.parentNode;
      return b && b.parentNode && b.parentNode.selectedIndex, null
    }
  }), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    _.propFix[this.toLowerCase()] = this
  });
  var hb = /[\t\r\n\f]/g;
  _.fn.extend({
    addClass: function(a) {
      var b, c, d, e, f, g, h = "string" == typeof a && a,
        i = 0,
        j = this.length;
      if (_.isFunction(a)) return this.each(function(b) {
        _(this).addClass(a.call(this, b, this.className))
      });
      if (h)
        for (b = (a || "").match(na) || []; j > i; i++)
          if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hb, " ") : " ")) {
            for (f = 0; e = b[f++];) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
            g = _.trim(d), c.className !== g && (c.className = g)
          }
      return this
    },
    removeClass: function(a) {
      var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a,
        i = 0,
        j = this.length;
      if (_.isFunction(a)) return this.each(function(b) {
        _(this).removeClass(a.call(this, b, this.className))
      });
      if (h)
        for (b = (a || "").match(na) || []; j > i; i++)
          if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hb, " ") : "")) {
            for (f = 0; e = b[f++];)
              for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
            g = a ? _.trim(d) : "", c.className !== g && (c.className = g)
          }
      return this
    },
    toggleClass: function(a, b) {
      var c = typeof a;
      return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(_.isFunction(a) ? function(c) {
        _(this).toggleClass(a.call(this, c, this.className, b), b)
      } : function() {
        if ("string" === c)
          for (var b, d = 0, e = _(this), f = a.match(na) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
        else(c === za || "boolean" === c) && (this.className && ra.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : ra.get(this, "__className__") || "")
      })
    },
    hasClass: function(a) {
      for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
        if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(hb, " ").indexOf(b) >= 0) return !0;
      return !1
    }
  });
  var ib = /\r/g;
  _.fn.extend({
    val: function(a) {
      var b, c, d, e = this[0];
      return arguments.length ? (d = _.isFunction(a), this.each(function(c) {
        var e;
        1 === this.nodeType && (e = d ? a.call(this, c, _(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : _.isArray(e) && (e = _.map(e, function(a) {
          return null == a ? "" : a + ""
        })), b = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
      })) : e ? (b = _.valHooks[e.type] || _.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ib, "") : null == c ? "" : c)) : void 0
    }
  }), _.extend({
    valHooks: {
      option: {
        get: function(a) {
          var b = _.find.attr(a, "value");
          return null != b ? b : _.trim(_.text(a))
        }
      },
      select: {
        get: function(a) {
          for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
            if (c = d[i], !(!c.selected && i !== e || (Y.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && _.nodeName(c.parentNode, "optgroup"))) {
              if (b = _(c).val(), f) return b;
              g.push(b)
            }
          return g
        },
        set: function(a, b) {
          for (var c, d, e = a.options, f = _.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = _.inArray(d.value, f) >= 0) && (c = !0);
          return c || (a.selectedIndex = -1), f
        }
      }
    }
  }), _.each(["radio", "checkbox"], function() {
    _.valHooks[this] = {
      set: function(a, b) {
        return _.isArray(b) ? a.checked = _.inArray(_(a).val(), b) >= 0 : void 0
      }
    }, Y.checkOn || (_.valHooks[this].get = function(a) {
      return null === a.getAttribute("value") ? "on" : a.value
    })
  }), _.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
    _.fn[b] = function(a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
    }
  }), _.fn.extend({
    hover: function(a, b) {
      return this.mouseenter(a).mouseleave(b || a)
    },
    bind: function(a, b, c) {
      return this.on(a, null, b, c)
    },
    unbind: function(a, b) {
      return this.off(a, null, b)
    },
    delegate: function(a, b, c, d) {
      return this.on(b, a, c, d)
    },
    undelegate: function(a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
    }
  });
  var jb = _.now(),
    kb = /\?/;
  _.parseJSON = function(a) {
    return JSON.parse(a + "")
  }, _.parseXML = function(a) {
    var b, c;
    if (!a || "string" != typeof a) return null;
    try {
      c = new DOMParser, b = c.parseFromString(a, "text/xml")
    } catch (d) {
      b = void 0
    }
    return (!b || b.getElementsByTagName("parsererror").length) && _.error("Invalid XML: " + a), b
  };
  var lb = /#.*$/,
    mb = /([?&])_=[^&]*/,
    nb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    ob = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    pb = /^(?:GET|HEAD)$/,
    qb = /^\/\//,
    rb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    sb = {},
    tb = {},
    ub = "*/".concat("*"),
    vb = a.location.href,
    wb = rb.exec(vb.toLowerCase()) || [];
  _.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: vb,
      type: "GET",
      isLocal: ob.test(wb[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": ub,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": _.parseJSON,
        "text xml": _.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function(a, b) {
      return b ? L(L(a, _.ajaxSettings), b) : L(_.ajaxSettings, a)
    },
    ajaxPrefilter: J(sb),
    ajaxTransport: J(tb),
    ajax: function(a, b) {
      function c(a, b, c, g) {
        var i, k, r, s, u, w = b;
        2 !== t && (t = 2, h && clearTimeout(h), d = void 0, f = g || "", v.readyState = a > 0 ? 4 : 0, i = a >= 200 && 300 > a || 304 === a, c && (s = M(l, v, c)), s = N(l, s, v, i), i ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && (_.lastModified[e] = u), u = v.getResponseHeader("etag"), u && (_.etag[e] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, k = s.data, r = s.error, i = !r)) : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || w) + "", i ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]), v.statusCode(q), q = void 0, j && n.trigger(i ? "ajaxSuccess" : "ajaxError", [v, l, i ? k : r]), p.fireWith(m, [v, w]), j && (n.trigger("ajaxComplete", [v, l]), --_.active || _.event.trigger("ajaxStop")))
      }
      "object" == typeof a && (b = a, a = void 0), b = b || {};
      var d, e, f, g, h, i, j, k, l = _.ajaxSetup({}, b),
        m = l.context || l,
        n = l.context && (m.nodeType || m.jquery) ? _(m) : _.event,
        o = _.Deferred(),
        p = _.Callbacks("once memory"),
        q = l.statusCode || {},
        r = {},
        s = {},
        t = 0,
        u = "canceled",
        v = {
          readyState: 0,
          getResponseHeader: function(a) {
            var b;
            if (2 === t) {
              if (!g)
                for (g = {}; b = nb.exec(f);) g[b[1].toLowerCase()] = b[2];
              b = g[a.toLowerCase()]
            }
            return null == b ? null : b
          },
          getAllResponseHeaders: function() {
            return 2 === t ? f : null
          },
          setRequestHeader: function(a, b) {
            var c = a.toLowerCase();
            return t || (a = s[c] = s[c] || a, r[a] = b), this
          },
          overrideMimeType: function(a) {
            return t || (l.mimeType = a), this
          },
          statusCode: function(a) {
            var b;
            if (a)
              if (2 > t)
                for (b in a) q[b] = [q[b], a[b]];
              else v.always(a[v.status]);
            return this
          },
          abort: function(a) {
            var b = a || u;
            return d && d.abort(b), c(0, b), this
          }
        };
      if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || vb) + "").replace(lb, "").replace(qb, wb[1] + "//"), l.type = b.method || b.type || l.method || l.type, l.dataTypes = _.trim(l.dataType || "*").toLowerCase().match(na) || [""], null == l.crossDomain && (i = rb.exec(l.url.toLowerCase()), l.crossDomain = !(!i || i[1] === wb[1] && i[2] === wb[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (wb[3] || ("http:" === wb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = _.param(l.data, l.traditional)), K(sb, l, b, v), 2 === t) return v;
      j = _.event && l.global, j && 0 === _.active++ && _.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !pb.test(l.type), e = l.url, l.hasContent || (l.data && (e = l.url += (kb.test(e) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = mb.test(e) ? e.replace(mb, "$1_=" + jb++) : e + (kb.test(e) ? "&" : "?") + "_=" + jb++)), l.ifModified && (_.lastModified[e] && v.setRequestHeader("If-Modified-Since", _.lastModified[e]), _.etag[e] && v.setRequestHeader("If-None-Match", _.etag[e])), (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType), v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : l.accepts["*"]);
      for (k in l.headers) v.setRequestHeader(k, l.headers[k]);
      if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t)) return v.abort();
      u = "abort";
      for (k in {
          success: 1,
          error: 1,
          complete: 1
        }) v[k](l[k]);
      if (d = K(tb, l, b, v)) {
        v.readyState = 1, j && n.trigger("ajaxSend", [v, l]), l.async && l.timeout > 0 && (h = setTimeout(function() {
          v.abort("timeout")
        }, l.timeout));
        try {
          t = 1, d.send(r, c)
        } catch (w) {
          if (!(2 > t)) throw w;
          c(-1, w)
        }
      } else c(-1, "No Transport");
      return v
    },
    getJSON: function(a, b, c) {
      return _.get(a, b, c, "json")
    },
    getScript: function(a, b) {
      return _.get(a, void 0, b, "script")
    }
  }), _.each(["get", "post"], function(a, b) {
    _[b] = function(a, c, d, e) {
      return _.isFunction(c) && (e = e || d, d = c, c = void 0), _.ajax({
        url: a,
        type: b,
        dataType: e,
        data: c,
        success: d
      })
    }
  }), _._evalUrl = function(a) {
    return _.ajax({
      url: a,
      type: "GET",
      dataType: "script",
      async: !1,
      global: !1,
      "throws": !0
    })
  }, _.fn.extend({
    wrapAll: function(a) {
      var b;
      return _.isFunction(a) ? this.each(function(b) {
        _(this).wrapAll(a.call(this, b))
      }) : (this[0] && (b = _(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
        for (var a = this; a.firstElementChild;) a = a.firstElementChild;
        return a
      }).append(this)), this)
    },
    wrapInner: function(a) {
      return this.each(_.isFunction(a) ? function(b) {
        _(this).wrapInner(a.call(this, b))
      } : function() {
        var b = _(this),
          c = b.contents();
        c.length ? c.wrapAll(a) : b.append(a)
      })
    },
    wrap: function(a) {
      var b = _.isFunction(a);
      return this.each(function(c) {
        _(this).wrapAll(b ? a.call(this, c) : a)
      })
    },
    unwrap: function() {
      return this.parent().each(function() {
        _.nodeName(this, "body") || _(this).replaceWith(this.childNodes)
      }).end()
    }
  }), _.expr.filters.hidden = function(a) {
    return a.offsetWidth <= 0 && a.offsetHeight <= 0
  }, _.expr.filters.visible = function(a) {
    return !_.expr.filters.hidden(a)
  };
  var xb = /%20/g,
    yb = /\[\]$/,
    zb = /\r?\n/g,
    Ab = /^(?:submit|button|image|reset|file)$/i,
    Bb = /^(?:input|select|textarea|keygen)/i;
  _.param = function(a, b) {
    var c, d = [],
      e = function(a, b) {
        b = _.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
      };
    if (void 0 === b && (b = _.ajaxSettings && _.ajaxSettings.traditional), _.isArray(a) || a.jquery && !_.isPlainObject(a)) _.each(a, function() {
      e(this.name, this.value)
    });
    else
      for (c in a) O(c, a[c], b, e);
    return d.join("&").replace(xb, "+")
  }, _.fn.extend({
    serialize: function() {
      return _.param(this.serializeArray())
    },
    serializeArray: function() {
      return this.map(function() {
        var a = _.prop(this, "elements");
        return a ? _.makeArray(a) : this
      }).filter(function() {
        var a = this.type;
        return this.name && !_(this).is(":disabled") && Bb.test(this.nodeName) && !Ab.test(a) && (this.checked || !ya.test(a))
      }).map(function(a, b) {
        var c = _(this).val();
        return null == c ? null : _.isArray(c) ? _.map(c, function(a) {
          return {
            name: b.name,
            value: a.replace(zb, "\r\n")
          }
        }) : {
          name: b.name,
          value: c.replace(zb, "\r\n")
        }
      }).get()
    }
  }), _.ajaxSettings.xhr = function() {
    try {
      return new XMLHttpRequest
    } catch (a) {}
  };
  var Cb = 0,
    Db = {},
    Eb = {
      0: 200,
      1223: 204
    },
    Fb = _.ajaxSettings.xhr();
  a.attachEvent && a.attachEvent("onunload", function() {
    for (var a in Db) Db[a]()
  }), Y.cors = !!Fb && "withCredentials" in Fb, Y.ajax = Fb = !!Fb, _.ajaxTransport(function(a) {
    var b;
    return Y.cors || Fb && !a.crossDomain ? {
      send: function(c, d) {
        var e, f = a.xhr(),
          g = ++Cb;
        if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
          for (e in a.xhrFields) f[e] = a.xhrFields[e];
        a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
        for (e in c) f.setRequestHeader(e, c[e]);
        b = function(a) {
          return function() {
            b && (delete Db[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Eb[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
              text: f.responseText
            } : void 0, f.getAllResponseHeaders()))
          }
        }, f.onload = b(), f.onerror = b("error"), b = Db[g] = b("abort");
        try {
          f.send(a.hasContent && a.data || null)
        } catch (h) {
          if (b) throw h
        }
      },
      abort: function() {
        b && b()
      }
    } : void 0
  }), _.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /(?:java|ecma)script/
    },
    converters: {
      "text script": function(a) {
        return _.globalEval(a), a
      }
    }
  }), _.ajaxPrefilter("script", function(a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
  }), _.ajaxTransport("script", function(a) {
    if (a.crossDomain) {
      var b, c;
      return {
        send: function(d, e) {
          b = _("<script>").prop({
            async: !0,
            charset: a.scriptCharset,
            src: a.url
          }).on("load error", c = function(a) {
            b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
          }), Z.head.appendChild(b[0])
        },
        abort: function() {
          c && c()
        }
      }
    }
  });
  var Gb = [],
    Hb = /(=)\?(?=&|$)|\?\?/;
  _.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var a = Gb.pop() || _.expando + "_" + jb++;
      return this[a] = !0, a
    }
  }), _.ajaxPrefilter("json jsonp", function(b, c, d) {
    var e, f, g, h = b.jsonp !== !1 && (Hb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Hb.test(b.data) && "data");
    return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = _.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Hb, "$1" + e) : b.jsonp !== !1 && (b.url += (kb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
      return g || _.error(e + " was not called"), g[0]
    }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
      g = arguments
    }, d.always(function() {
      a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Gb.push(e)), g && _.isFunction(f) && f(g[0]), g = f = void 0
    }), "script") : void 0
  }), _.parseHTML = function(a, b, c) {
    if (!a || "string" != typeof a) return null;
    "boolean" == typeof b && (c = b, b = !1), b = b || Z;
    var d = ga.exec(a),
      e = !c && [];
    return d ? [b.createElement(d[1])] : (d = _.buildFragment([a], b, e), e && e.length && _(e).remove(), _.merge([], d.childNodes))
  };
  var Ib = _.fn.load;
  _.fn.load = function(a, b, c) {
    if ("string" != typeof a && Ib) return Ib.apply(this, arguments);
    var d, e, f, g = this,
      h = a.indexOf(" ");
    return h >= 0 && (d = _.trim(a.slice(h)), a = a.slice(0, h)), _.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && _.ajax({
      url: a,
      type: e,
      dataType: "html",
      data: b
    }).done(function(a) {
      f = arguments, g.html(d ? _("<div>").append(_.parseHTML(a)).find(d) : a)
    }).complete(c && function(a, b) {
      g.each(c, f || [a.responseText, b, a])
    }), this
  }, _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
    _.fn[b] = function(a) {
      return this.on(b, a)
    }
  }), _.expr.filters.animated = function(a) {
    return _.grep(_.timers, function(b) {
      return a === b.elem
    }).length
  };
  var Jb = a.document.documentElement;
  _.offset = {
    setOffset: function(a, b, c) {
      var d, e, f, g, h, i, j, k = _.css(a, "position"),
        l = _(a),
        m = {};
      "static" === k && (a.style.position = "relative"), h = l.offset(), f = _.css(a, "top"), i = _.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), _.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
    }
  }, _.fn.extend({
    offset: function(a) {
      if (arguments.length) return void 0 === a ? this : this.each(function(b) {
        _.offset.setOffset(this, a, b)
      });
      var b, c, d = this[0],
        e = {
          top: 0,
          left: 0
        },
        f = d && d.ownerDocument;
      return f ? (b = f.documentElement, _.contains(b, d) ? (typeof d.getBoundingClientRect !== za && (e = d.getBoundingClientRect()), c = P(f), {
        top: e.top + c.pageYOffset - b.clientTop,
        left: e.left + c.pageXOffset - b.clientLeft
      }) : e) : void 0
    },
    position: function() {
      if (this[0]) {
        var a, b, c = this[0],
          d = {
            top: 0,
            left: 0
          };
        return "fixed" === _.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), _.nodeName(a[0], "html") || (d = a.offset()), d.top += _.css(a[0], "borderTopWidth", !0), d.left += _.css(a[0], "borderLeftWidth", !0)), {
          top: b.top - d.top - _.css(c, "marginTop", !0),
          left: b.left - d.left - _.css(c, "marginLeft", !0)
        }
      }
    },
    offsetParent: function() {
      return this.map(function() {
        for (var a = this.offsetParent || Jb; a && !_.nodeName(a, "html") && "static" === _.css(a, "position");) a = a.offsetParent;
        return a || Jb
      })
    }
  }), _.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function(b, c) {
    var d = "pageYOffset" === c;
    _.fn[b] = function(e) {
      return qa(this, function(b, e, f) {
        var g = P(b);
        return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
      }, b, e, arguments.length, null)
    }
  }), _.each(["top", "left"], function(a, b) {
    _.cssHooks[b] = w(Y.pixelPosition, function(a, c) {
      return c ? (c = v(a, b), Qa.test(c) ? _(a).position()[b] + "px" : c) : void 0
    })
  }), _.each({
    Height: "height",
    Width: "width"
  }, function(a, b) {
    _.each({
      padding: "inner" + a,
      content: b,
      "": "outer" + a
    }, function(c, d) {
      _.fn[d] = function(d, e) {
        var f = arguments.length && (c || "boolean" != typeof d),
          g = c || (d === !0 || e === !0 ? "margin" : "border");
        return qa(this, function(b, c, d) {
          var e;
          return _.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? _.css(b, c, g) : _.style(b, c, d, g)
        }, b, f ? d : void 0, f, null)
      }
    })
  }), _.fn.size = function() {
    return this.length
  }, _.fn.andSelf = _.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
    return _
  });
  var Kb = a.jQuery,
    Lb = a.$;
  return _.noConflict = function(b) {
    return a.$ === _ && (a.$ = Lb), b && a.jQuery === _ && (a.jQuery = Kb), _
  }, typeof b === za && (a.jQuery = a.$ = _), _
}), ! function(a) {
  function b() {}

  function c(a) {
    function c(b) {
      b.prototype.option || (b.prototype.option = function(b) {
        a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b))
      })
    }

    function e(b, c) {
      a.fn[b] = function(e) {
        if ("string" == typeof e) {
          for (var g = d.call(arguments, 1), h = 0, i = this.length; i > h; h++) {
            var j = this[h],
              k = a.data(j, b);
            if (k)
              if (a.isFunction(k[e]) && "_" !== e.charAt(0)) {
                var l = k[e].apply(k, g);
                if (void 0 !== l) return l
              } else f("no such method '" + e + "' for " + b + " instance");
            else f("cannot call methods on " + b + " prior to initialization; attempted to call '" + e + "'")
          }
          return this
        }
        return this.each(function() {
          var d = a.data(this, b);
          d ? (d.option(e), d._init()) : (d = new c(this, e), a.data(this, b, d))
        })
      }
    }
    if (a) {
      var f = "undefined" == typeof console ? b : function(a) {
        console.error(a)
      };
      return a.bridget = function(a, b) {
        c(b), e(a, b)
      }, a.bridget
    }
  }
  var d = Array.prototype.slice;
  "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], c) : c("object" == typeof exports ? require("jquery") : a.jQuery)
}(window),
function(a) {
  function b(b) {
    var c = a.event;
    return c.target = c.target || c.srcElement || b, c
  }
  var c = document.documentElement,
    d = function() {};
  c.addEventListener ? d = function(a, b, c) {
    a.addEventListener(b, c, !1)
  } : c.attachEvent && (d = function(a, c, d) {
    a[c + d] = d.handleEvent ? function() {
      var c = b(a);
      d.handleEvent.call(d, c)
    } : function() {
      var c = b(a);
      d.call(a, c)
    }, a.attachEvent("on" + c, a[c + d])
  });
  var e = function() {};
  c.removeEventListener ? e = function(a, b, c) {
    a.removeEventListener(b, c, !1)
  } : c.detachEvent && (e = function(a, b, c) {
    a.detachEvent("on" + b, a[b + c]);
    try {
      delete a[b + c]
    } catch (d) {
      a[b + c] = void 0
    }
  });
  var f = {
    bind: d,
    unbind: e
  };
  "function" == typeof define && define.amd ? define("eventie/eventie", f) : "object" == typeof exports ? module.exports = f : a.eventie = f
}(window),
function() {
  function a() {}

  function b(a, b) {
    for (var c = a.length; c--;)
      if (a[c].listener === b) return c;
    return -1
  }

  function c(a) {
    return function() {
      return this[a].apply(this, arguments)
    }
  }
  var d = a.prototype,
    e = this,
    f = e.EventEmitter;
  d.getListeners = function(a) {
    var b, c, d = this._getEvents();
    if (a instanceof RegExp) {
      b = {};
      for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
    } else b = d[a] || (d[a] = []);
    return b
  }, d.flattenListeners = function(a) {
    var b, c = [];
    for (b = 0; b < a.length; b += 1) c.push(a[b].listener);
    return c
  }, d.getListenersAsObject = function(a) {
    var b, c = this.getListeners(a);
    return c instanceof Array && (b = {}, b[a] = c), b || c
  }, d.addListener = function(a, c) {
    var d, e = this.getListenersAsObject(a),
      f = "object" == typeof c;
    for (d in e) e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : {
      listener: c,
      once: !1
    });
    return this
  }, d.on = c("addListener"), d.addOnceListener = function(a, b) {
    return this.addListener(a, {
      listener: b,
      once: !0
    })
  }, d.once = c("addOnceListener"), d.defineEvent = function(a) {
    return this.getListeners(a), this
  }, d.defineEvents = function(a) {
    for (var b = 0; b < a.length; b += 1) this.defineEvent(a[b]);
    return this
  }, d.removeListener = function(a, c) {
    var d, e, f = this.getListenersAsObject(a);
    for (e in f) f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1));
    return this
  }, d.off = c("removeListener"), d.addListeners = function(a, b) {
    return this.manipulateListeners(!1, a, b)
  }, d.removeListeners = function(a, b) {
    return this.manipulateListeners(!0, a, b)
  }, d.manipulateListeners = function(a, b, c) {
    var d, e, f = a ? this.removeListener : this.addListener,
      g = a ? this.removeListeners : this.addListeners;
    if ("object" != typeof b || b instanceof RegExp)
      for (d = c.length; d--;) f.call(this, b, c[d]);
    else
      for (d in b) b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
    return this
  }, d.removeEvent = function(a) {
    var b, c = typeof a,
      d = this._getEvents();
    if ("string" === c) delete d[a];
    else if (a instanceof RegExp)
      for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b];
    else delete this._events;
    return this
  }, d.removeAllListeners = c("removeEvent"), d.emitEvent = function(a, b) {
    var c, d, e, f, g = this.getListenersAsObject(a);
    for (e in g)
      if (g.hasOwnProperty(e))
        for (d = g[e].length; d--;) c = g[e][d], c.once === !0 && this.removeListener(a, c.listener), f = c.listener.apply(this, b || []), f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
    return this
  }, d.trigger = c("emitEvent"), d.emit = function(a) {
    var b = Array.prototype.slice.call(arguments, 1);
    return this.emitEvent(a, b)
  }, d.setOnceReturnValue = function(a) {
    return this._onceReturnValue = a, this
  }, d._getOnceReturnValue = function() {
    return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
  }, d._getEvents = function() {
    return this._events || (this._events = {})
  }, a.noConflict = function() {
    return e.EventEmitter = f, a
  }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
    return a
  }) : "object" == typeof module && module.exports ? module.exports = a : e.EventEmitter = a
}.call(this),
  function(a) {
    function b(a) {
      if (a) {
        if ("string" == typeof d[a]) return a;
        a = a.charAt(0).toUpperCase() + a.slice(1);
        for (var b, e = 0, f = c.length; f > e; e++)
          if (b = c[e] + a, "string" == typeof d[b]) return b
      }
    }
    var c = "Webkit Moz ms Ms O".split(" "),
      d = document.documentElement.style;
    "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
      return b
    }) : "object" == typeof exports ? module.exports = b : a.getStyleProperty = b
  }(window),
  function(a) {
    function b(a) {
      var b = parseFloat(a),
        c = -1 === a.indexOf("%") && !isNaN(b);
      return c && b
    }

    function c() {}

    function d() {
      for (var a = {
          width: 0,
          height: 0,
          innerWidth: 0,
          innerHeight: 0,
          outerWidth: 0,
          outerHeight: 0
        }, b = 0, c = g.length; c > b; b++) {
        var d = g[b];
        a[d] = 0
      }
      return a
    }

    function e(c) {
      function e() {
        if (!m) {
          m = !0;
          var d = a.getComputedStyle;
          if (j = function() {
              var a = d ? function(a) {
                return d(a, null)
              } : function(a) {
                return a.currentStyle
              };
              return function(b) {
                var c = a(b);
                return c || f("Style returned " + c + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), c
              }
            }(), k = c("boxSizing")) {
            var e = document.createElement("div");
            e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style[k] = "border-box";
            var g = document.body || document.documentElement;
            g.appendChild(e);
            var h = j(e);
            l = 200 === b(h.width), g.removeChild(e)
          }
        }
      }

      function h(a) {
        if (e(), "string" == typeof a && (a = document.querySelector(a)), a && "object" == typeof a && a.nodeType) {
          var c = j(a);
          if ("none" === c.display) return d();
          var f = {};
          f.width = a.offsetWidth, f.height = a.offsetHeight;
          for (var h = f.isBorderBox = !(!k || !c[k] || "border-box" !== c[k]), m = 0, n = g.length; n > m; m++) {
            var o = g[m],
              p = c[o];
            p = i(a, p);
            var q = parseFloat(p);
            f[o] = isNaN(q) ? 0 : q
          }
          var r = f.paddingLeft + f.paddingRight,
            s = f.paddingTop + f.paddingBottom,
            t = f.marginLeft + f.marginRight,
            u = f.marginTop + f.marginBottom,
            v = f.borderLeftWidth + f.borderRightWidth,
            w = f.borderTopWidth + f.borderBottomWidth,
            x = h && l,
            y = b(c.width);
          y !== !1 && (f.width = y + (x ? 0 : r + v));
          var z = b(c.height);
          return z !== !1 && (f.height = z + (x ? 0 : s + w)), f.innerWidth = f.width - (r + v), f.innerHeight = f.height - (s + w), f.outerWidth = f.width + t, f.outerHeight = f.height + u, f
        }
      }

      function i(b, c) {
        if (a.getComputedStyle || -1 === c.indexOf("%")) return c;
        var d = b.style,
          e = d.left,
          f = b.runtimeStyle,
          g = f && f.left;
        return g && (f.left = b.currentStyle.left), d.left = c, c = d.pixelLeft, d.left = e, g && (f.left = g), c
      }
      var j, k, l, m = !1;
      return h
    }
    var f = "undefined" == typeof console ? c : function(a) {
        console.error(a)
      },
      g = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
    "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], e) : "object" == typeof exports ? module.exports = e(require("desandro-get-style-property")) : a.getSize = e(a.getStyleProperty)
  }(window),
  function(a) {
    function b(a) {
      "function" == typeof a && (b.isReady ? a() : g.push(a))
    }

    function c(a) {
      var c = "readystatechange" === a.type && "complete" !== f.readyState;
      b.isReady || c || d()
    }

    function d() {
      b.isReady = !0;
      for (var a = 0, c = g.length; c > a; a++) {
        var d = g[a];
        d()
      }
    }

    function e(e) {
      return "complete" === f.readyState ? d() : (e.bind(f, "DOMContentLoaded", c), e.bind(f, "readystatechange", c), e.bind(a, "load", c)), b
    }
    var f = a.document,
      g = [];
    b.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], e) : "object" == typeof exports ? module.exports = e(require("eventie")) : a.docReady = e(a.eventie)
  }(window),
  function(a) {
    function b(a, b) {
      return a[g](b)
    }

    function c(a) {
      if (!a.parentNode) {
        var b = document.createDocumentFragment();
        b.appendChild(a)
      }
    }

    function d(a, b) {
      c(a);
      for (var d = a.parentNode.querySelectorAll(b), e = 0, f = d.length; f > e; e++)
        if (d[e] === a) return !0;
      return !1
    }

    function e(a, d) {
      return c(a), b(a, d)
    }
    var f, g = function() {
      if (a.matches) return "matches";
      if (a.matchesSelector) return "matchesSelector";
      for (var b = ["webkit", "moz", "ms", "o"], c = 0, d = b.length; d > c; c++) {
        var e = b[c],
          f = e + "MatchesSelector";
        if (a[f]) return f
      }
    }();
    if (g) {
      var h = document.createElement("div"),
        i = b(h, "div");
      f = i ? b : e
    } else f = d;
    "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
      return f
    }) : "object" == typeof exports ? module.exports = f : window.matchesSelector = f
  }(Element.prototype),
  function(a, b) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function(c, d) {
      return b(a, c, d)
    }) : "object" == typeof exports ? module.exports = b(a, require("doc-ready"), require("desandro-matches-selector")) : a.fizzyUIUtils = b(a, a.docReady, a.matchesSelector)
  }(window, function(a, b, c) {
    var d = {};
    d.extend = function(a, b) {
      for (var c in b) a[c] = b[c];
      return a
    }, d.modulo = function(a, b) {
      return (a % b + b) % b
    };
    var e = Object.prototype.toString;
    d.isArray = function(a) {
      return "[object Array]" == e.call(a)
    }, d.makeArray = function(a) {
      var b = [];
      if (d.isArray(a)) b = a;
      else if (a && "number" == typeof a.length)
        for (var c = 0, e = a.length; e > c; c++) b.push(a[c]);
      else b.push(a);
      return b
    }, d.indexOf = Array.prototype.indexOf ? function(a, b) {
      return a.indexOf(b)
    } : function(a, b) {
      for (var c = 0, d = a.length; d > c; c++)
        if (a[c] === b) return c;
      return -1
    }, d.removeFrom = function(a, b) {
      var c = d.indexOf(a, b); - 1 != c && a.splice(c, 1)
    }, d.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function(a) {
      return a instanceof HTMLElement
    } : function(a) {
      return a && "object" == typeof a && 1 == a.nodeType && "string" == typeof a.nodeName
    }, d.setText = function() {
      function a(a, c) {
        b = b || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"), a[b] = c
      }
      var b;
      return a
    }(), d.getParent = function(a, b) {
      for (; a != document.body;)
        if (a = a.parentNode, c(a, b)) return a
    }, d.getQueryElement = function(a) {
      return "string" == typeof a ? document.querySelector(a) : a
    }, d.handleEvent = function(a) {
      var b = "on" + a.type;
      this[b] && this[b](a)
    }, d.filterFindElements = function(a, b) {
      a = d.makeArray(a);
      for (var e = [], f = 0, g = a.length; g > f; f++) {
        var h = a[f];
        if (d.isElement(h))
          if (b) {
            c(h, b) && e.push(h);
            for (var i = h.querySelectorAll(b), j = 0, k = i.length; k > j; j++) e.push(i[j])
          } else e.push(h)
      }
      return e
    }, d.debounceMethod = function(a, b, c) {
      var d = a.prototype[b],
        e = b + "Timeout";
      a.prototype[b] = function() {
        var a = this[e];
        a && clearTimeout(a);
        var b = arguments,
          f = this;
        this[e] = setTimeout(function() {
          d.apply(f, b), delete f[e]
        }, c || 100)
      }
    }, d.toDashed = function(a) {
      return a.replace(/(.)([A-Z])/g, function(a, b, c) {
        return b + "-" + c
      }).toLowerCase()
    };
    var f = a.console;
    return d.htmlInit = function(c, e) {
      b(function() {
        for (var b = d.toDashed(e), g = document.querySelectorAll(".js-" + b), h = "data-" + b + "-options", i = 0, j = g.length; j > i; i++) {
          var k, l = g[i],
            m = l.getAttribute(h);
          try {
            k = m && JSON.parse(m)
          } catch (n) {
            f && f.error("Error parsing " + h + " on " + l.nodeName.toLowerCase() + (l.id ? "#" + l.id : "") + ": " + n);
            continue
          }
          var o = new c(l, k),
            p = a.jQuery;
          p && p.data(l, e, o)
        }
      })
    }, d
  }),
  function(a, b) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function(c, d, e, f) {
      return b(a, c, d, e, f)
    }) : "object" == typeof exports ? module.exports = b(a, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (a.Outlayer = {}, a.Outlayer.Item = b(a, a.EventEmitter, a.getSize, a.getStyleProperty, a.fizzyUIUtils));
  }(window, function(a, b, c, d, e) {
    function f(a) {
      for (var b in a) return !1;
      return b = null, !0
    }

    function g(a, b) {
      a && (this.element = a, this.layout = b, this.position = {
        x: 0,
        y: 0
      }, this._create())
    }

    function h(a) {
      return a.replace(/([A-Z])/g, function(a) {
        return "-" + a.toLowerCase()
      })
    }
    var i = a.getComputedStyle,
      j = i ? function(a) {
        return i(a, null)
      } : function(a) {
        return a.currentStyle
      },
      k = d("transition"),
      l = d("transform"),
      m = k && l,
      n = !!d("perspective"),
      o = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "otransitionend",
        transition: "transitionend"
      }[k],
      p = ["transform", "transition", "transitionDuration", "transitionProperty"],
      q = function() {
        for (var a = {}, b = 0, c = p.length; c > b; b++) {
          var e = p[b],
            f = d(e);
          f && f !== e && (a[e] = f)
        }
        return a
      }();
    e.extend(g.prototype, b.prototype), g.prototype._create = function() {
      this._transn = {
        ingProperties: {},
        clean: {},
        onEnd: {}
      }, this.css({
        position: "absolute"
      })
    }, g.prototype.handleEvent = function(a) {
      var b = "on" + a.type;
      this[b] && this[b](a)
    }, g.prototype.getSize = function() {
      this.size = c(this.element)
    }, g.prototype.css = function(a) {
      var b = this.element.style;
      for (var c in a) {
        var d = q[c] || c;
        b[d] = a[c]
      }
    }, g.prototype.getPosition = function() {
      var a = j(this.element),
        b = this.layout.options,
        c = b.isOriginLeft,
        d = b.isOriginTop,
        e = a[c ? "left" : "right"],
        f = a[d ? "top" : "bottom"],
        g = this.layout.size,
        h = -1 != e.indexOf("%") ? parseFloat(e) / 100 * g.width : parseInt(e, 10),
        i = -1 != f.indexOf("%") ? parseFloat(f) / 100 * g.height : parseInt(f, 10);
      h = isNaN(h) ? 0 : h, i = isNaN(i) ? 0 : i, h -= c ? g.paddingLeft : g.paddingRight, i -= d ? g.paddingTop : g.paddingBottom, this.position.x = h, this.position.y = i
    }, g.prototype.layoutPosition = function() {
      var a = this.layout.size,
        b = this.layout.options,
        c = {},
        d = b.isOriginLeft ? "paddingLeft" : "paddingRight",
        e = b.isOriginLeft ? "left" : "right",
        f = b.isOriginLeft ? "right" : "left",
        g = this.position.x + a[d];
      c[e] = this.getXValue(g), c[f] = "";
      var h = b.isOriginTop ? "paddingTop" : "paddingBottom",
        i = b.isOriginTop ? "top" : "bottom",
        j = b.isOriginTop ? "bottom" : "top",
        k = this.position.y + a[h];
      c[i] = this.getYValue(k), c[j] = "", this.css(c), this.emitEvent("layout", [this])
    }, g.prototype.getXValue = function(a) {
      var b = this.layout.options;
      return b.percentPosition && !b.isHorizontal ? a / this.layout.size.width * 100 + "%" : a + "px"
    }, g.prototype.getYValue = function(a) {
      var b = this.layout.options;
      return b.percentPosition && b.isHorizontal ? a / this.layout.size.height * 100 + "%" : a + "px"
    }, g.prototype._transitionTo = function(a, b) {
      this.getPosition();
      var c = this.position.x,
        d = this.position.y,
        e = parseInt(a, 10),
        f = parseInt(b, 10),
        g = e === this.position.x && f === this.position.y;
      if (this.setPosition(a, b), g && !this.isTransitioning) return void this.layoutPosition();
      var h = a - c,
        i = b - d,
        j = {};
      j.transform = this.getTranslate(h, i), this.transition({
        to: j,
        onTransitionEnd: {
          transform: this.layoutPosition
        },
        isCleaning: !0
      })
    }, g.prototype.getTranslate = function(a, b) {
      var c = this.layout.options;
      return a = c.isOriginLeft ? a : -a, b = c.isOriginTop ? b : -b, n ? "translate3d(" + a + "px, " + b + "px, 0)" : "translate(" + a + "px, " + b + "px)"
    }, g.prototype.goTo = function(a, b) {
      this.setPosition(a, b), this.layoutPosition()
    }, g.prototype.moveTo = m ? g.prototype._transitionTo : g.prototype.goTo, g.prototype.setPosition = function(a, b) {
      this.position.x = parseInt(a, 10), this.position.y = parseInt(b, 10)
    }, g.prototype._nonTransition = function(a) {
      this.css(a.to), a.isCleaning && this._removeStyles(a.to);
      for (var b in a.onTransitionEnd) a.onTransitionEnd[b].call(this)
    }, g.prototype._transition = function(a) {
      if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(a);
      var b = this._transn;
      for (var c in a.onTransitionEnd) b.onEnd[c] = a.onTransitionEnd[c];
      for (c in a.to) b.ingProperties[c] = !0, a.isCleaning && (b.clean[c] = !0);
      if (a.from) {
        this.css(a.from);
        var d = this.element.offsetHeight;
        d = null
      }
      this.enableTransition(a.to), this.css(a.to), this.isTransitioning = !0
    };
    var r = "opacity," + h(q.transform || "transform");
    g.prototype.enableTransition = function() {
      this.isTransitioning || (this.css({
        transitionProperty: r,
        transitionDuration: this.layout.options.transitionDuration
      }), this.element.addEventListener(o, this, !1))
    }, g.prototype.transition = g.prototype[k ? "_transition" : "_nonTransition"], g.prototype.onwebkitTransitionEnd = function(a) {
      this.ontransitionend(a)
    }, g.prototype.onotransitionend = function(a) {
      this.ontransitionend(a)
    };
    var s = {
      "-webkit-transform": "transform",
      "-moz-transform": "transform",
      "-o-transform": "transform"
    };
    g.prototype.ontransitionend = function(a) {
      if (a.target === this.element) {
        var b = this._transn,
          c = s[a.propertyName] || a.propertyName;
        if (delete b.ingProperties[c], f(b.ingProperties) && this.disableTransition(), c in b.clean && (this.element.style[a.propertyName] = "", delete b.clean[c]), c in b.onEnd) {
          var d = b.onEnd[c];
          d.call(this), delete b.onEnd[c]
        }
        this.emitEvent("transitionEnd", [this])
      }
    }, g.prototype.disableTransition = function() {
      this.removeTransitionStyles(), this.element.removeEventListener(o, this, !1), this.isTransitioning = !1
    }, g.prototype._removeStyles = function(a) {
      var b = {};
      for (var c in a) b[c] = "";
      this.css(b)
    };
    var t = {
      transitionProperty: "",
      transitionDuration: ""
    };
    return g.prototype.removeTransitionStyles = function() {
      this.css(t)
    }, g.prototype.removeElem = function() {
      this.element.parentNode.removeChild(this.element), this.css({
        display: ""
      }), this.emitEvent("remove", [this])
    }, g.prototype.remove = function() {
      if (!k || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
      var a = this;
      this.once("transitionEnd", function() {
        a.removeElem()
      }), this.hide()
    }, g.prototype.reveal = function() {
      delete this.isHidden, this.css({
        display: ""
      });
      var a = this.layout.options,
        b = {},
        c = this.getHideRevealTransitionEndProperty("visibleStyle");
      b[c] = this.onRevealTransitionEnd, this.transition({
        from: a.hiddenStyle,
        to: a.visibleStyle,
        isCleaning: !0,
        onTransitionEnd: b
      })
    }, g.prototype.onRevealTransitionEnd = function() {
      this.isHidden || this.emitEvent("reveal")
    }, g.prototype.getHideRevealTransitionEndProperty = function(a) {
      var b = this.layout.options[a];
      if (b.opacity) return "opacity";
      for (var c in b) return c
    }, g.prototype.hide = function() {
      this.isHidden = !0, this.css({
        display: ""
      });
      var a = this.layout.options,
        b = {},
        c = this.getHideRevealTransitionEndProperty("hiddenStyle");
      b[c] = this.onHideTransitionEnd, this.transition({
        from: a.visibleStyle,
        to: a.hiddenStyle,
        isCleaning: !0,
        onTransitionEnd: b
      })
    }, g.prototype.onHideTransitionEnd = function() {
      this.isHidden && (this.css({
        display: "none"
      }), this.emitEvent("hide"))
    }, g.prototype.destroy = function() {
      this.css({
        position: "",
        left: "",
        right: "",
        top: "",
        bottom: "",
        transition: "",
        transform: ""
      })
    }, g
  }),
  function(a, b) {
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(c, d, e, f, g) {
      return b(a, c, d, e, f, g)
    }) : "object" == typeof exports ? module.exports = b(a, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : a.Outlayer = b(a, a.eventie, a.EventEmitter, a.getSize, a.fizzyUIUtils, a.Outlayer.Item)
  }(window, function(a, b, c, d, e, f) {
    function g(a, b) {
      var c = e.getQueryElement(a);
      if (!c) return void(h && h.error("Bad element for " + this.constructor.namespace + ": " + (c || a)));
      this.element = c, i && (this.$element = i(this.element)), this.options = e.extend({}, this.constructor.defaults), this.option(b);
      var d = ++k;
      this.element.outlayerGUID = d, l[d] = this, this._create(), this.options.isInitLayout && this.layout()
    }
    var h = a.console,
      i = a.jQuery,
      j = function() {},
      k = 0,
      l = {};
    return g.namespace = "outlayer", g.Item = f, g.defaults = {
      containerStyle: {
        position: "relative"
      },
      isInitLayout: !0,
      isOriginLeft: !0,
      isOriginTop: !0,
      isResizeBound: !0,
      isResizingContainer: !0,
      transitionDuration: "0.4s",
      hiddenStyle: {
        opacity: 0,
        transform: "scale(0.001)"
      },
      visibleStyle: {
        opacity: 1,
        transform: "scale(1)"
      }
    }, e.extend(g.prototype, c.prototype), g.prototype.option = function(a) {
      e.extend(this.options, a)
    }, g.prototype._create = function() {
      this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
    }, g.prototype.reloadItems = function() {
      this.items = this._itemize(this.element.children)
    }, g.prototype._itemize = function(a) {
      for (var b = this._filterFindItemElements(a), c = this.constructor.Item, d = [], e = 0, f = b.length; f > e; e++) {
        var g = b[e],
          h = new c(g, this);
        d.push(h)
      }
      return d
    }, g.prototype._filterFindItemElements = function(a) {
      return e.filterFindElements(a, this.options.itemSelector)
    }, g.prototype.getItemElements = function() {
      for (var a = [], b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].element);
      return a
    }, g.prototype.layout = function() {
      this._resetLayout(), this._manageStamps();
      var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
      this.layoutItems(this.items, a), this._isLayoutInited = !0
    }, g.prototype._init = g.prototype.layout, g.prototype._resetLayout = function() {
      this.getSize()
    }, g.prototype.getSize = function() {
      this.size = d(this.element)
    }, g.prototype._getMeasurement = function(a, b) {
      var c, f = this.options[a];
      f ? ("string" == typeof f ? c = this.element.querySelector(f) : e.isElement(f) && (c = f), this[a] = c ? d(c)[b] : f) : this[a] = 0
    }, g.prototype.layoutItems = function(a, b) {
      a = this._getItemsForLayout(a), this._layoutItems(a, b), this._postLayout()
    }, g.prototype._getItemsForLayout = function(a) {
      for (var b = [], c = 0, d = a.length; d > c; c++) {
        var e = a[c];
        e.isIgnored || b.push(e)
      }
      return b
    }, g.prototype._layoutItems = function(a, b) {
      if (this._emitCompleteOnItems("layout", a), a && a.length) {
        for (var c = [], d = 0, e = a.length; e > d; d++) {
          var f = a[d],
            g = this._getItemLayoutPosition(f);
          g.item = f, g.isInstant = b || f.isLayoutInstant, c.push(g)
        }
        this._processLayoutQueue(c)
      }
    }, g.prototype._getItemLayoutPosition = function() {
      return {
        x: 0,
        y: 0
      }
    }, g.prototype._processLayoutQueue = function(a) {
      for (var b = 0, c = a.length; c > b; b++) {
        var d = a[b];
        this._positionItem(d.item, d.x, d.y, d.isInstant)
      }
    }, g.prototype._positionItem = function(a, b, c, d) {
      d ? a.goTo(b, c) : a.moveTo(b, c)
    }, g.prototype._postLayout = function() {
      this.resizeContainer()
    }, g.prototype.resizeContainer = function() {
      if (this.options.isResizingContainer) {
        var a = this._getContainerSize();
        a && (this._setContainerMeasure(a.width, !0), this._setContainerMeasure(a.height, !1))
      }
    }, g.prototype._getContainerSize = j, g.prototype._setContainerMeasure = function(a, b) {
      if (void 0 !== a) {
        var c = this.size;
        c.isBorderBox && (a += b ? c.paddingLeft + c.paddingRight + c.borderLeftWidth + c.borderRightWidth : c.paddingBottom + c.paddingTop + c.borderTopWidth + c.borderBottomWidth), a = Math.max(a, 0), this.element.style[b ? "width" : "height"] = a + "px"
      }
    }, g.prototype._emitCompleteOnItems = function(a, b) {
      function c() {
        e.dispatchEvent(a + "Complete", null, [b])
      }

      function d() {
        g++, g === f && c()
      }
      var e = this,
        f = b.length;
      if (!b || !f) return void c();
      for (var g = 0, h = 0, i = b.length; i > h; h++) {
        var j = b[h];
        j.once(a, d)
      }
    }, g.prototype.dispatchEvent = function(a, b, c) {
      var d = b ? [b].concat(c) : c;
      if (this.emitEvent(a, d), i)
        if (this.$element = this.$element || i(this.element), b) {
          var e = i.Event(b);
          e.type = a, this.$element.trigger(e, c)
        } else this.$element.trigger(a, c)
    }, g.prototype.ignore = function(a) {
      var b = this.getItem(a);
      b && (b.isIgnored = !0)
    }, g.prototype.unignore = function(a) {
      var b = this.getItem(a);
      b && delete b.isIgnored
    }, g.prototype.stamp = function(a) {
      if (a = this._find(a)) {
        this.stamps = this.stamps.concat(a);
        for (var b = 0, c = a.length; c > b; b++) {
          var d = a[b];
          this.ignore(d)
        }
      }
    }, g.prototype.unstamp = function(a) {
      if (a = this._find(a))
        for (var b = 0, c = a.length; c > b; b++) {
          var d = a[b];
          e.removeFrom(this.stamps, d), this.unignore(d)
        }
    }, g.prototype._find = function(a) {
      return a ? ("string" == typeof a && (a = this.element.querySelectorAll(a)), a = e.makeArray(a)) : void 0
    }, g.prototype._manageStamps = function() {
      if (this.stamps && this.stamps.length) {
        this._getBoundingRect();
        for (var a = 0, b = this.stamps.length; b > a; a++) {
          var c = this.stamps[a];
          this._manageStamp(c)
        }
      }
    }, g.prototype._getBoundingRect = function() {
      var a = this.element.getBoundingClientRect(),
        b = this.size;
      this._boundingRect = {
        left: a.left + b.paddingLeft + b.borderLeftWidth,
        top: a.top + b.paddingTop + b.borderTopWidth,
        right: a.right - (b.paddingRight + b.borderRightWidth),
        bottom: a.bottom - (b.paddingBottom + b.borderBottomWidth)
      }
    }, g.prototype._manageStamp = j, g.prototype._getElementOffset = function(a) {
      var b = a.getBoundingClientRect(),
        c = this._boundingRect,
        e = d(a),
        f = {
          left: b.left - c.left - e.marginLeft,
          top: b.top - c.top - e.marginTop,
          right: c.right - b.right - e.marginRight,
          bottom: c.bottom - b.bottom - e.marginBottom
        };
      return f
    }, g.prototype.handleEvent = function(a) {
      var b = "on" + a.type;
      this[b] && this[b](a)
    }, g.prototype.bindResize = function() {
      this.isResizeBound || (b.bind(a, "resize", this), this.isResizeBound = !0)
    }, g.prototype.unbindResize = function() {
      this.isResizeBound && b.unbind(a, "resize", this), this.isResizeBound = !1
    }, g.prototype.onresize = function() {
      function a() {
        b.resize(), delete b.resizeTimeout
      }
      this.resizeTimeout && clearTimeout(this.resizeTimeout);
      var b = this;
      this.resizeTimeout = setTimeout(a, 100)
    }, g.prototype.resize = function() {
      this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, g.prototype.needsResizeLayout = function() {
      var a = d(this.element),
        b = this.size && a;
      return b && a.innerWidth !== this.size.innerWidth
    }, g.prototype.addItems = function(a) {
      var b = this._itemize(a);
      return b.length && (this.items = this.items.concat(b)), b
    }, g.prototype.appended = function(a) {
      var b = this.addItems(a);
      b.length && (this.layoutItems(b, !0), this.reveal(b))
    }, g.prototype.prepended = function(a) {
      var b = this._itemize(a);
      if (b.length) {
        var c = this.items.slice(0);
        this.items = b.concat(c), this._resetLayout(), this._manageStamps(), this.layoutItems(b, !0), this.reveal(b), this.layoutItems(c)
      }
    }, g.prototype.reveal = function(a) {
      this._emitCompleteOnItems("reveal", a);
      for (var b = a && a.length, c = 0; b && b > c; c++) {
        var d = a[c];
        d.reveal()
      }
    }, g.prototype.hide = function(a) {
      this._emitCompleteOnItems("hide", a);
      for (var b = a && a.length, c = 0; b && b > c; c++) {
        var d = a[c];
        d.hide()
      }
    }, g.prototype.revealItemElements = function(a) {
      var b = this.getItems(a);
      this.reveal(b)
    }, g.prototype.hideItemElements = function(a) {
      var b = this.getItems(a);
      this.hide(b)
    }, g.prototype.getItem = function(a) {
      for (var b = 0, c = this.items.length; c > b; b++) {
        var d = this.items[b];
        if (d.element === a) return d
      }
    }, g.prototype.getItems = function(a) {
      a = e.makeArray(a);
      for (var b = [], c = 0, d = a.length; d > c; c++) {
        var f = a[c],
          g = this.getItem(f);
        g && b.push(g)
      }
      return b
    }, g.prototype.remove = function(a) {
      var b = this.getItems(a);
      if (this._emitCompleteOnItems("remove", b), b && b.length)
        for (var c = 0, d = b.length; d > c; c++) {
          var f = b[c];
          f.remove(), e.removeFrom(this.items, f)
        }
    }, g.prototype.destroy = function() {
      var a = this.element.style;
      a.height = "", a.position = "", a.width = "";
      for (var b = 0, c = this.items.length; c > b; b++) {
        var d = this.items[b];
        d.destroy()
      }
      this.unbindResize();
      var e = this.element.outlayerGUID;
      delete l[e], delete this.element.outlayerGUID, i && i.removeData(this.element, this.constructor.namespace)
    }, g.data = function(a) {
      a = e.getQueryElement(a);
      var b = a && a.outlayerGUID;
      return b && l[b]
    }, g.create = function(a, b) {
      function c() {
        g.apply(this, arguments)
      }
      return Object.create ? c.prototype = Object.create(g.prototype) : e.extend(c.prototype, g.prototype), c.prototype.constructor = c, c.defaults = e.extend({}, g.defaults), e.extend(c.defaults, b), c.prototype.settings = {}, c.namespace = a, c.data = g.data, c.Item = function() {
        f.apply(this, arguments)
      }, c.Item.prototype = new f, e.htmlInit(c, a), i && i.bridget && i.bridget(a, c), c
    }, g.Item = f, g
  }),
  function(a, b) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], b) : "object" == typeof exports ? module.exports = b(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : a.Masonry = b(a.Outlayer, a.getSize, a.fizzyUIUtils)
  }(window, function(a, b, c) {
    var d = a.create("masonry");
    return d.prototype._resetLayout = function() {
      this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
      var a = this.cols;
      for (this.colYs = []; a--;) this.colYs.push(0);
      this.maxY = 0
    }, d.prototype.measureColumns = function() {
      if (this.getContainerWidth(), !this.columnWidth) {
        var a = this.items[0],
          c = a && a.element;
        this.columnWidth = c && b(c).outerWidth || this.containerWidth
      }
      var d = this.columnWidth += this.gutter,
        e = this.containerWidth + this.gutter,
        f = e / d,
        g = d - e % d,
        h = g && 1 > g ? "round" : "floor";
      f = Math[h](f), this.cols = Math.max(f, 1)
    }, d.prototype.getContainerWidth = function() {
      var a = this.options.isFitWidth ? this.element.parentNode : this.element,
        c = b(a);
      this.containerWidth = c && c.innerWidth
    }, d.prototype._getItemLayoutPosition = function(a) {
      a.getSize();
      var b = a.size.outerWidth % this.columnWidth,
        d = b && 1 > b ? "round" : "ceil",
        e = Math[d](a.size.outerWidth / this.columnWidth);
      e = Math.min(e, this.cols);
      for (var f = this._getColGroup(e), g = Math.min.apply(Math, f), h = c.indexOf(f, g), i = {
          x: this.columnWidth * h,
          y: g
        }, j = g + a.size.outerHeight, k = this.cols + 1 - f.length, l = 0; k > l; l++) this.colYs[h + l] = j;
      return i
    }, d.prototype._getColGroup = function(a) {
      if (2 > a) return this.colYs;
      for (var b = [], c = this.cols + 1 - a, d = 0; c > d; d++) {
        var e = this.colYs.slice(d, d + a);
        b[d] = Math.max.apply(Math, e)
      }
      return b
    }, d.prototype._manageStamp = function(a) {
      var c = b(a),
        d = this._getElementOffset(a),
        e = this.options.isOriginLeft ? d.left : d.right,
        f = e + c.outerWidth,
        g = Math.floor(e / this.columnWidth);
      g = Math.max(0, g);
      var h = Math.floor(f / this.columnWidth);
      h -= f % this.columnWidth ? 0 : 1, h = Math.min(this.cols - 1, h);
      for (var i = (this.options.isOriginTop ? d.top : d.bottom) + c.outerHeight, j = g; h >= j; j++) this.colYs[j] = Math.max(i, this.colYs[j])
    }, d.prototype._getContainerSize = function() {
      this.maxY = Math.max.apply(Math, this.colYs);
      var a = {
        height: this.maxY
      };
      return this.options.isFitWidth && (a.width = this._getContainerFitWidth()), a
    }, d.prototype._getContainerFitWidth = function() {
      for (var a = 0, b = this.cols; --b && 0 === this.colYs[b];) a++;
      return (this.cols - a) * this.columnWidth - this.gutter
    }, d.prototype.needsResizeLayout = function() {
      var a = this.containerWidth;
      return this.getContainerWidth(), a !== this.containerWidth
    }, d
  }), ! function(a, b, c, d) {
    function e(b, c) {
      var f = this;
      "object" == typeof c && (delete c.refresh, delete c.render, a.extend(this, c)), this.$element = a(b), !this.imageSrc && this.$element.is("img") && (this.imageSrc = this.$element.attr("src"));
      var g = (this.position + "").toLowerCase().match(/\S+/g) || [];
      return g.length < 1 && g.push("center"), 1 == g.length && g.push(g[0]), ("top" == g[0] || "bottom" == g[0] || "left" == g[1] || "right" == g[1]) && (g = [g[1], g[0]]), this.positionX != d && (g[0] = this.positionX.toLowerCase()), this.positionY != d && (g[1] = this.positionY.toLowerCase()), f.positionX = g[0], f.positionY = g[1], "left" != this.positionX && "right" != this.positionX && (this.positionX = isNaN(parseInt(this.positionX)) ? "center" : parseInt(this.positionX)), "top" != this.positionY && "bottom" != this.positionY && (this.positionY = isNaN(parseInt(this.positionY)) ? "center" : parseInt(this.positionY)), this.position = this.positionX + (isNaN(this.positionX) ? "" : "px") + " " + this.positionY + (isNaN(this.positionY) ? "" : "px"), navigator.userAgent.match(/(iPod|iPhone|iPad)/) ? (this.iosFix && !this.$element.is("img") && this.$element.css({
        backgroundImage: "url(" + this.imageSrc + ")",
        backgroundSize: "cover",
        backgroundPosition: this.position
      }), this) : navigator.userAgent.match(/(Android)/) ? (this.androidFix && !this.$element.is("img") && this.$element.css({
        backgroundImage: "url(" + this.imageSrc + ")",
        backgroundSize: "cover",
        backgroundPosition: this.position
      }), this) : (this.$mirror = a("<div />").prependTo("body"), this.$slider = a("<img />").prependTo(this.$mirror), this.$mirror.addClass("parallax-mirror").css({
        visibility: "hidden",
        zIndex: this.zIndex,
        position: "fixed",
        top: 0,
        left: 0,
        overflow: "hidden"
      }), this.$slider.addClass("parallax-slider").one("load", function() {
        f.naturalHeight && f.naturalWidth || (f.naturalHeight = this.naturalHeight || this.height || 1, f.naturalWidth = this.naturalWidth || this.width || 1), f.aspectRatio = f.naturalWidth / f.naturalHeight, e.isSetup || e.setup(), e.sliders.push(f), e.isFresh = !1, e.requestRender()
      }), this.$slider[0].src = this.imageSrc, void((this.naturalHeight && this.naturalWidth || this.$slider[0].complete) && this.$slider.trigger("load")))
    }

    function f(d) {
      return this.each(function() {
        var f = a(this),
          g = "object" == typeof d && d;
        this == b || this == c || f.is("body") ? e.configure(g) : f.data("px.parallax") || (g = a.extend({}, f.data(), g), f.data("px.parallax", new e(this, g))), "string" == typeof d && e[d]()
      })
    }! function() {
      for (var a = 0, c = ["ms", "moz", "webkit", "o"], d = 0; d < c.length && !b.requestAnimationFrame; ++d) b.requestAnimationFrame = b[c[d] + "RequestAnimationFrame"], b.cancelAnimationFrame = b[c[d] + "CancelAnimationFrame"] || b[c[d] + "CancelRequestAnimationFrame"];
      b.requestAnimationFrame || (b.requestAnimationFrame = function(c) {
        var d = (new Date).getTime(),
          e = Math.max(0, 16 - (d - a)),
          f = b.setTimeout(function() {
            c(d + e)
          }, e);
        return a = d + e, f
      }), b.cancelAnimationFrame || (b.cancelAnimationFrame = function(a) {
        clearTimeout(a)
      })
    }(), a.extend(e.prototype, {
      speed: .2,
      bleed: 0,
      zIndex: -100,
      iosFix: !0,
      androidFix: !0,
      position: "center",
      overScrollFix: !1,
      refresh: function() {
        this.boxWidth = this.$element.outerWidth(), this.boxHeight = this.$element.outerHeight() + 2 * this.bleed, this.boxOffsetTop = this.$element.offset().top - this.bleed, this.boxOffsetLeft = this.$element.offset().left, this.boxOffsetBottom = this.boxOffsetTop + this.boxHeight;
        var a = e.winHeight,
          b = e.docHeight,
          c = Math.min(this.boxOffsetTop, b - a),
          d = Math.max(this.boxOffsetTop + this.boxHeight - a, 0),
          f = this.boxHeight + (c - d) * (1 - this.speed) | 0,
          g = (this.boxOffsetTop - c) * (1 - this.speed) | 0;
        if (f * this.aspectRatio >= this.boxWidth) {
          this.imageWidth = f * this.aspectRatio | 0, this.imageHeight = f, this.offsetBaseTop = g;
          var h = this.imageWidth - this.boxWidth;
          this.offsetLeft = "left" == this.positionX ? 0 : "right" == this.positionX ? -h : isNaN(this.positionX) ? -h / 2 | 0 : Math.max(this.positionX, -h)
        } else {
          this.imageWidth = this.boxWidth, this.imageHeight = this.boxWidth / this.aspectRatio | 0, this.offsetLeft = 0;
          var h = this.imageHeight - f;
          this.offsetBaseTop = "top" == this.positionY ? g : "bottom" == this.positionY ? g - h : isNaN(this.positionY) ? g - h / 2 | 0 : g + Math.max(this.positionY, -h)
        }
      },
      render: function() {
        var a = e.scrollTop,
          b = e.scrollLeft,
          c = this.overScrollFix ? e.overScroll : 0,
          d = a + e.winHeight;
        this.visibility = this.boxOffsetBottom > a && this.boxOffsetTop < d ? "visible" : "hidden", this.mirrorTop = this.boxOffsetTop - a, this.mirrorLeft = this.boxOffsetLeft - b, this.offsetTop = this.offsetBaseTop - this.mirrorTop * (1 - this.speed), this.$mirror.css({
          transform: "translate3d(0px, 0px, 0px)",
          visibility: this.visibility,
          top: this.mirrorTop - c,
          left: this.mirrorLeft,
          height: this.boxHeight,
          width: this.boxWidth
        }), this.$slider.css({
          transform: "translate3d(0px, 0px, 0px)",
          position: "absolute",
          top: this.offsetTop,
          left: this.offsetLeft,
          height: this.imageHeight,
          width: this.imageWidth,
          maxWidth: "none"
        })
      }
    }), a.extend(e, {
      scrollTop: 0,
      scrollLeft: 0,
      winHeight: 0,
      winWidth: 0,
      docHeight: 1 << 30,
      docWidth: 1 << 30,
      sliders: [],
      isReady: !1,
      isFresh: !1,
      isBusy: !1,
      setup: function() {
        if (!this.isReady) {
          var d = a(c),
            f = a(b);
          f.on("scroll.px.parallax load.px.parallax", function() {
            var a = e.docHeight - e.winHeight,
              b = e.docWidth - e.winWidth;
            e.scrollTop = Math.max(0, Math.min(a, f.scrollTop())), e.scrollLeft = Math.max(0, Math.min(b, f.scrollLeft())), e.overScroll = Math.max(f.scrollTop() - a, Math.min(f.scrollTop(), 0)), e.requestRender()
          }).on("resize.px.parallax load.px.parallax", function() {
            e.winHeight = f.height(), e.winWidth = f.width(), e.docHeight = d.height(), e.docWidth = d.width(), e.isFresh = !1, e.requestRender()
          }), this.isReady = !0
        }
      },
      configure: function(b) {
        "object" == typeof b && (delete b.refresh, delete b.render, a.extend(this.prototype, b))
      },
      refresh: function() {
        a.each(this.sliders, function() {
          this.refresh()
        }), this.isFresh = !0
      },
      render: function() {
        this.isFresh || this.refresh(), a.each(this.sliders, function() {
          this.render()
        })
      },
      requestRender: function() {
        var a = this;
        this.isBusy || (this.isBusy = !0, b.requestAnimationFrame(function() {
          a.render(), a.isBusy = !1
        }))
      }
    });
    var g = a.fn.parallax;
    a.fn.parallax = f, a.fn.parallax.Constructor = e, a.fn.parallax.noConflict = function() {
      return a.fn.parallax = g, this
    }, a(c).on("ready.px.parallax.data-api", function() {
      a('[data-parallax="scroll"]').parallax()
    })
  }(jQuery, window, document),
  function(a) {
    function b(b) {
      var c = [{
        re: /[\xC0-\xC6]/g,
        ch: "A"
      }, {
        re: /[\xE0-\xE6]/g,
        ch: "a"
      }, {
        re: /[\xC8-\xCB]/g,
        ch: "E"
      }, {
        re: /[\xE8-\xEB]/g,
        ch: "e"
      }, {
        re: /[\xCC-\xCF]/g,
        ch: "I"
      }, {
        re: /[\xEC-\xEF]/g,
        ch: "i"
      }, {
        re: /[\xD2-\xD6]/g,
        ch: "O"
      }, {
        re: /[\xF2-\xF6]/g,
        ch: "o"
      }, {
        re: /[\xD9-\xDC]/g,
        ch: "U"
      }, {
        re: /[\xF9-\xFC]/g,
        ch: "u"
      }, {
        re: /[\xC7-\xE7]/g,
        ch: "c"
      }, {
        re: /[\xD1]/g,
        ch: "N"
      }, {
        re: /[\xF1]/g,
        ch: "n"
      }];
      return a.each(c, function() {
        b = b.replace(this.re, this.ch)
      }), b
    }

    function c(a) {
      var b = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#x27;",
          "`": "&#x60;"
        },
        c = "(?:" + Object.keys(b).join("|") + ")",
        d = new RegExp(c),
        e = new RegExp(c, "g"),
        f = null == a ? "" : "" + a;
      return d.test(f) ? f.replace(e, function(a) {
        return b[a]
      }) : f
    }

    function d(b, c) {
      var d = arguments,
        f = b,
        g = c;
      [].shift.apply(d);
      var h, i = this.each(function() {
        var b = a(this);
        if (b.is("select")) {
          var c = b.data("selectpicker"),
            i = "object" == typeof f && f;
          if (c) {
            if (i)
              for (var j in i) i.hasOwnProperty(j) && (c.options[j] = i[j])
          } else {
            var k = a.extend({}, e.DEFAULTS, a.fn.selectpicker.defaults || {}, b.data(), i);
            k.template = a.extend({}, e.DEFAULTS.template, a.fn.selectpicker.defaults ? a.fn.selectpicker.defaults.template : {}, b.data().template, i.template), b.data("selectpicker", c = new e(this, k, g))
          }
          "string" == typeof f && (h = c[f] instanceof Function ? c[f].apply(c, d) : c.options[f])
        }
      });
      return "undefined" != typeof h ? h : i
    }
    String.prototype.includes || ! function() {
      var a = {}.toString,
        b = function() {
          try {
            var a = {},
              b = Object.defineProperty,
              c = b(a, a, a) && b
          } catch (d) {}
          return c
        }(),
        c = "".indexOf,
        d = function(b) {
          if (null == this) throw new TypeError;
          var d = String(this);
          if (b && "[object RegExp]" == a.call(b)) throw new TypeError;
          var e = d.length,
            f = String(b),
            g = f.length,
            h = arguments.length > 1 ? arguments[1] : void 0,
            i = h ? Number(h) : 0;
          i != i && (i = 0);
          var j = Math.min(Math.max(i, 0), e);
          return g + j > e ? !1 : -1 != c.call(d, f, i)
        };
      b ? b(String.prototype, "includes", {
        value: d,
        configurable: !0,
        writable: !0
      }) : String.prototype.includes = d
    }(), String.prototype.startsWith || ! function() {
      var a = function() {
          try {
            var a = {},
              b = Object.defineProperty,
              c = b(a, a, a) && b
          } catch (d) {}
          return c
        }(),
        b = {}.toString,
        c = function(a) {
          if (null == this) throw new TypeError;
          var c = String(this);
          if (a && "[object RegExp]" == b.call(a)) throw new TypeError;
          var d = c.length,
            e = String(a),
            f = e.length,
            g = arguments.length > 1 ? arguments[1] : void 0,
            h = g ? Number(g) : 0;
          h != h && (h = 0);
          var i = Math.min(Math.max(h, 0), d);
          if (f + i > d) return !1;
          for (var j = -1; ++j < f;)
            if (c.charCodeAt(i + j) != e.charCodeAt(j)) return !1;
          return !0
        };
      a ? a(String.prototype, "startsWith", {
        value: c,
        configurable: !0,
        writable: !0
      }) : String.prototype.startsWith = c
    }(), Object.keys || (Object.keys = function(a, b, c) {
      c = [];
      for (b in a) c.hasOwnProperty.call(a, b) && c.push(b);
      return c
    }), a.fn.triggerNative = function(a) {
      var b, c = this[0];
      c.dispatchEvent ? ("function" == typeof Event ? b = new Event(a, {
        bubbles: !0
      }) : (b = document.createEvent("Event"), b.initEvent(a, !0, !1)), c.dispatchEvent(b)) : (c.fireEvent && (b = document.createEventObject(), b.eventType = a, c.fireEvent("on" + a, b)), this.trigger(a))
    }, a.expr[":"].icontains = function(b, c, d) {
      var e = a(b),
        f = (e.data("tokens") || e.text()).toUpperCase();
      return f.includes(d[3].toUpperCase())
    }, a.expr[":"].ibegins = function(b, c, d) {
      var e = a(b),
        f = (e.data("tokens") || e.text()).toUpperCase();
      return f.startsWith(d[3].toUpperCase())
    }, a.expr[":"].aicontains = function(b, c, d) {
      var e = a(b),
        f = (e.data("tokens") || e.data("normalizedText") || e.text()).toUpperCase();
      return f.includes(d[3].toUpperCase())
    }, a.expr[":"].aibegins = function(b, c, d) {
      var e = a(b),
        f = (e.data("tokens") || e.data("normalizedText") || e.text()).toUpperCase();
      return f.startsWith(d[3].toUpperCase())
    };
    var e = function(b, c, d) {
      d && (d.stopPropagation(), d.preventDefault()), this.$element = a(b), this.$newElement = null, this.$button = null, this.$menu = null, this.$lis = null, this.options = c, null === this.options.title && (this.options.title = this.$element.attr("title")), this.val = e.prototype.val, this.render = e.prototype.render, this.refresh = e.prototype.refresh, this.setStyle = e.prototype.setStyle, this.selectAll = e.prototype.selectAll, this.deselectAll = e.prototype.deselectAll, this.destroy = e.prototype.destroy, this.remove = e.prototype.remove, this.show = e.prototype.show, this.hide = e.prototype.hide, this.init()
    };
    e.VERSION = "1.10.0", e.DEFAULTS = {
      noneSelectedText: "Nothing selected",
      noneResultsText: "No results matched {0}",
      countSelectedText: function(a, b) {
        return 1 == a ? "{0} item selected" : "{0} items selected"
      },
      maxOptionsText: function(a, b) {
        return [1 == a ? "Limit reached ({n} item max)" : "Limit reached ({n} items max)", 1 == b ? "Group limit reached ({n} item max)" : "Group limit reached ({n} items max)"]
      },
      selectAllText: "Select All",
      deselectAllText: "Deselect All",
      doneButton: !1,
      doneButtonText: "Close",
      multipleSeparator: ", ",
      styleBase: "btn",
      style: "btn-default",
      size: "auto",
      title: null,
      selectedTextFormat: "values",
      width: !1,
      container: !1,
      hideDisabled: !1,
      showSubtext: !1,
      showIcon: !0,
      showContent: !0,
      dropupAuto: !0,
      header: !1,
      liveSearch: !1,
      liveSearchPlaceholder: null,
      liveSearchNormalize: !1,
      liveSearchStyle: "contains",
      actionsBox: !1,
      iconBase: "glyphicon",
      tickIcon: "glyphicon-ok",
      showTick: !1,
      template: {
        caret: '<span class="caret"></span>'
      },
      maxOptions: !1,
      mobile: !1,
      selectOnTab: !1,
      dropdownAlignRight: !1
    }, e.prototype = {
      constructor: e,
      init: function() {
        var b = this,
          c = this.$element.attr("id");
        this.$element.addClass("bs-select-hidden"), this.liObj = {}, this.multiple = this.$element.prop("multiple"), this.autofocus = this.$element.prop("autofocus"), this.$newElement = this.createView(), this.$element.after(this.$newElement).appendTo(this.$newElement), this.$button = this.$newElement.children("button"), this.$menu = this.$newElement.children(".dropdown-menu"), this.$menuInner = this.$menu.children(".inner"), this.$searchbox = this.$menu.find("input"), this.$element.removeClass("bs-select-hidden"), this.options.dropdownAlignRight && this.$menu.addClass("dropdown-menu-right"), "undefined" != typeof c && (this.$button.attr("data-id", c), a('label[for="' + c + '"]').click(function(a) {
          a.preventDefault(), b.$button.focus()
        })), this.checkDisabled(), this.clickListener(), this.options.liveSearch && this.liveSearchListener(), this.render(), this.setStyle(), this.setWidth(), this.options.container && this.selectPosition(), this.$menu.data("this", this), this.$newElement.data("this", this), this.options.mobile && this.mobile(), this.$newElement.on({
          "hide.bs.dropdown": function(a) {
            b.$element.trigger("hide.bs.select", a)
          },
          "hidden.bs.dropdown": function(a) {
            b.$element.trigger("hidden.bs.select", a)
          },
          "show.bs.dropdown": function(a) {
            b.$element.trigger("show.bs.select", a)
          },
          "shown.bs.dropdown": function(a) {
            b.$element.trigger("shown.bs.select", a)
          }
        }), b.$element[0].hasAttribute("required") && this.$element.on("invalid", function() {
          b.$button.addClass("bs-invalid").focus(), b.$element.on({
            "focus.bs.select": function() {
              b.$button.focus(), b.$element.off("focus.bs.select")
            },
            "shown.bs.select": function() {
              b.$element.val(b.$element.val()).off("shown.bs.select")
            },
            "rendered.bs.select": function() {
              this.validity.valid && b.$button.removeClass("bs-invalid"), b.$element.off("rendered.bs.select")
            }
          })
        }), setTimeout(function() {
          b.$element.trigger("loaded.bs.select")
        })
      },
      createDropdown: function() {
        var b = this.multiple || this.options.showTick ? " show-tick" : "",
          d = this.$element.parent().hasClass("input-group") ? " input-group-btn" : "",
          e = this.autofocus ? " autofocus" : "",
          f = this.options.header ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>" : "",
          g = this.options.liveSearch ? '<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"' + (null === this.options.liveSearchPlaceholder ? "" : ' placeholder="' + c(this.options.liveSearchPlaceholder) + '"') + "></div>" : "",
          h = this.multiple && this.options.actionsBox ? '<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn btn-default">' + this.options.selectAllText + '</button><button type="button" class="actions-btn bs-deselect-all btn btn-default">' + this.options.deselectAllText + "</button></div></div>" : "",
          i = this.multiple && this.options.doneButton ? '<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm btn-default">' + this.options.doneButtonText + "</button></div></div>" : "",
          j = '<div class="btn-group bootstrap-select' + b + d + '"><button type="button" class="' + this.options.styleBase + ' dropdown-toggle" data-toggle="dropdown"' + e + '><span class="filter-option pull-left"></span><span class="bs-caret">' + this.options.template.caret + '</span></button><div class="dropdown-menu open">' + f + g + h + '<ul class="dropdown-menu inner" role="menu"></ul>' + i + "</div></div>";
        return a(j)
      },
      createView: function() {
        var a = this.createDropdown(),
          b = this.createLi();
        return a.find("ul")[0].innerHTML = b, a
      },
      reloadLi: function() {
        this.destroyLi();
        var a = this.createLi();
        this.$menuInner[0].innerHTML = a
      },
      destroyLi: function() {
        this.$menu.find("li").remove()
      },
      createLi: function() {
        var d = this,
          e = [],
          f = 0,
          g = document.createElement("option"),
          h = -1,
          i = function(a, b, c, d) {
            return "<li" + ("undefined" != typeof c & "" !== c ? ' class="' + c + '"' : "") + ("undefined" != typeof b & null !== b ? ' data-original-index="' + b + '"' : "") + ("undefined" != typeof d & null !== d ? 'data-optgroup="' + d + '"' : "") + ">" + a + "</li>";
          },
          j = function(a, e, f, g) {
            return '<a tabindex="0"' + ("undefined" != typeof e ? ' class="' + e + '"' : "") + ("undefined" != typeof f ? ' style="' + f + '"' : "") + (d.options.liveSearchNormalize ? ' data-normalized-text="' + b(c(a)) + '"' : "") + ("undefined" != typeof g || null !== g ? ' data-tokens="' + g + '"' : "") + ">" + a + '<span class="' + d.options.iconBase + " " + d.options.tickIcon + ' check-mark"></span></a>'
          };
        if (this.options.title && !this.multiple && (h--, !this.$element.find(".bs-title-option").length)) {
          var k = this.$element[0];
          g.className = "bs-title-option", g.appendChild(document.createTextNode(this.options.title)), g.value = "", k.insertBefore(g, k.firstChild), void 0 === a(k.options[k.selectedIndex]).attr("selected") && (g.selected = !0)
        }
        return this.$element.find("option").each(function(b) {
          var c = a(this);
          if (h++, !c.hasClass("bs-title-option")) {
            var g = this.className || "",
              k = this.style.cssText,
              l = c.data("content") ? c.data("content") : c.html(),
              m = c.data("tokens") ? c.data("tokens") : null,
              n = "undefined" != typeof c.data("subtext") ? '<small class="text-muted">' + c.data("subtext") + "</small>" : "",
              o = "undefined" != typeof c.data("icon") ? '<span class="' + d.options.iconBase + " " + c.data("icon") + '"></span> ' : "",
              p = "OPTGROUP" === this.parentNode.tagName,
              q = this.disabled || p && this.parentNode.disabled;
            if ("" !== o && q && (o = "<span>" + o + "</span>"), d.options.hideDisabled && q && !p) return void h--;
            if (c.data("content") || (l = o + '<span class="text">' + l + n + "</span>"), p && c.data("divider") !== !0) {
              var r = " " + this.parentNode.className || "";
              if (0 === c.index()) {
                f += 1;
                var s = this.parentNode.label,
                  t = "undefined" != typeof c.parent().data("subtext") ? '<small class="text-muted">' + c.parent().data("subtext") + "</small>" : "",
                  u = c.parent().data("icon") ? '<span class="' + d.options.iconBase + " " + c.parent().data("icon") + '"></span> ' : "";
                s = u + '<span class="text">' + s + t + "</span>", 0 !== b && e.length > 0 && (h++, e.push(i("", null, "divider", f + "div"))), h++, e.push(i(s, null, "dropdown-header" + r, f))
              }
              if (d.options.hideDisabled && q) return void h--;
              e.push(i(j(l, "opt " + g + r, k, m), b, "", f))
            } else c.data("divider") === !0 ? e.push(i("", b, "divider")) : c.data("hidden") === !0 ? e.push(i(j(l, g, k, m), b, "hidden is-hidden")) : (this.previousElementSibling && "OPTGROUP" === this.previousElementSibling.tagName && (h++, e.push(i("", null, "divider", f + "div"))), e.push(i(j(l, g, k, m), b)));
            d.liObj[b] = h
          }
        }), this.multiple || 0 !== this.$element.find("option:selected").length || this.options.title || this.$element.find("option").eq(0).prop("selected", !0).attr("selected", "selected"), e.join("")
      },
      findLis: function() {
        return null == this.$lis && (this.$lis = this.$menu.find("li")), this.$lis
      },
      render: function(b) {
        var c, d = this;
        b !== !1 && this.$element.find("option").each(function(a) {
          var b = d.findLis().eq(d.liObj[a]);
          d.setDisabled(a, this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled, b), d.setSelected(a, this.selected, b)
        }), this.tabIndex();
        var e = this.$element.find("option").map(function() {
            if (this.selected) {
              if (d.options.hideDisabled && (this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled)) return;
              var b, c = a(this),
                e = c.data("icon") && d.options.showIcon ? '<i class="' + d.options.iconBase + " " + c.data("icon") + '"></i> ' : "";
              return b = d.options.showSubtext && c.data("subtext") && !d.multiple ? ' <small class="text-muted">' + c.data("subtext") + "</small>" : "", "undefined" != typeof c.attr("title") ? c.attr("title") : c.data("content") && d.options.showContent ? c.data("content") : e + c.html() + b
            }
          }).toArray(),
          f = this.multiple ? e.join(this.options.multipleSeparator) : e[0];
        if (this.multiple && this.options.selectedTextFormat.indexOf("count") > -1) {
          var g = this.options.selectedTextFormat.split(">");
          if (g.length > 1 && e.length > g[1] || 1 == g.length && e.length >= 2) {
            c = this.options.hideDisabled ? ", [disabled]" : "";
            var h = this.$element.find("option").not('[data-divider="true"], [data-hidden="true"]' + c).length,
              i = "function" == typeof this.options.countSelectedText ? this.options.countSelectedText(e.length, h) : this.options.countSelectedText;
            f = i.replace("{0}", e.length.toString()).replace("{1}", h.toString())
          }
        }
        void 0 == this.options.title && (this.options.title = this.$element.attr("title")), "static" == this.options.selectedTextFormat && (f = this.options.title), f || (f = "undefined" != typeof this.options.title ? this.options.title : this.options.noneSelectedText), this.$button.attr("title", a.trim(f.replace(/<[^>]*>?/g, ""))), this.$button.children(".filter-option").html(f), this.$element.trigger("rendered.bs.select")
      },
      setStyle: function(a, b) {
        this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, ""));
        var c = a ? a : this.options.style;
        "add" == b ? this.$button.addClass(c) : "remove" == b ? this.$button.removeClass(c) : (this.$button.removeClass(this.options.style), this.$button.addClass(c))
      },
      liHeight: function(b) {
        if (b || this.options.size !== !1 && !this.sizeInfo) {
          var c = document.createElement("div"),
            d = document.createElement("div"),
            e = document.createElement("ul"),
            f = document.createElement("li"),
            g = document.createElement("li"),
            h = document.createElement("a"),
            i = document.createElement("span"),
            j = this.options.header && this.$menu.find(".popover-title").length > 0 ? this.$menu.find(".popover-title")[0].cloneNode(!0) : null,
            k = this.options.liveSearch ? document.createElement("div") : null,
            l = this.options.actionsBox && this.multiple && this.$menu.find(".bs-actionsbox").length > 0 ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0) : null,
            m = this.options.doneButton && this.multiple && this.$menu.find(".bs-donebutton").length > 0 ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0) : null;
          if (i.className = "text", c.className = this.$menu[0].parentNode.className + " open", d.className = "dropdown-menu open", e.className = "dropdown-menu inner", f.className = "divider", i.appendChild(document.createTextNode("Inner text")), h.appendChild(i), g.appendChild(h), e.appendChild(g), e.appendChild(f), j && d.appendChild(j), k) {
            var n = document.createElement("span");
            k.className = "bs-searchbox", n.className = "form-control", k.appendChild(n), d.appendChild(k)
          }
          l && d.appendChild(l), d.appendChild(e), m && d.appendChild(m), c.appendChild(d), document.body.appendChild(c);
          var o = h.offsetHeight,
            p = j ? j.offsetHeight : 0,
            q = k ? k.offsetHeight : 0,
            r = l ? l.offsetHeight : 0,
            s = m ? m.offsetHeight : 0,
            t = a(f).outerHeight(!0),
            u = "function" == typeof getComputedStyle ? getComputedStyle(d) : !1,
            v = u ? null : a(d),
            w = parseInt(u ? u.paddingTop : v.css("paddingTop")) + parseInt(u ? u.paddingBottom : v.css("paddingBottom")) + parseInt(u ? u.borderTopWidth : v.css("borderTopWidth")) + parseInt(u ? u.borderBottomWidth : v.css("borderBottomWidth")),
            x = w + parseInt(u ? u.marginTop : v.css("marginTop")) + parseInt(u ? u.marginBottom : v.css("marginBottom")) + 2;
          document.body.removeChild(c), this.sizeInfo = {
            liHeight: o,
            headerHeight: p,
            searchHeight: q,
            actionsHeight: r,
            doneButtonHeight: s,
            dividerHeight: t,
            menuPadding: w,
            menuExtras: x
          }
        }
      },
      setSize: function() {
        if (this.findLis(), this.liHeight(), this.options.header && this.$menu.css("padding-top", 0), this.options.size !== !1) {
          var b, c, d, e, f = this,
            g = this.$menu,
            h = this.$menuInner,
            i = a(window),
            j = this.$newElement[0].offsetHeight,
            k = this.sizeInfo.liHeight,
            l = this.sizeInfo.headerHeight,
            m = this.sizeInfo.searchHeight,
            n = this.sizeInfo.actionsHeight,
            o = this.sizeInfo.doneButtonHeight,
            p = this.sizeInfo.dividerHeight,
            q = this.sizeInfo.menuPadding,
            r = this.sizeInfo.menuExtras,
            s = this.options.hideDisabled ? ".disabled" : "",
            t = function() {
              d = f.$newElement.offset().top - i.scrollTop(), e = i.height() - d - j
            };
          if (t(), "auto" === this.options.size) {
            var u = function() {
              var i, j = function(b, c) {
                  return function(d) {
                    return c ? d.classList ? d.classList.contains(b) : a(d).hasClass(b) : !(d.classList ? d.classList.contains(b) : a(d).hasClass(b))
                  }
                },
                p = f.$menuInner[0].getElementsByTagName("li"),
                s = Array.prototype.filter ? Array.prototype.filter.call(p, j("hidden", !1)) : f.$lis.not(".hidden"),
                u = Array.prototype.filter ? Array.prototype.filter.call(s, j("dropdown-header", !0)) : s.filter(".dropdown-header");
              t(), b = e - r, f.options.container ? (g.data("height") || g.data("height", g.height()), c = g.data("height")) : c = g.height(), f.options.dropupAuto && f.$newElement.toggleClass("dropup", d > e && c > b - r), f.$newElement.hasClass("dropup") && (b = d - r), i = s.length + u.length > 3 ? 3 * k + r - 2 : 0, g.css({
                "max-height": b + "px",
                overflow: "hidden",
                "min-height": i + l + m + n + o + "px"
              }), h.css({
                "max-height": b - l - m - n - o - q + "px",
                "overflow-y": "auto",
                "min-height": Math.max(i - q, 0) + "px"
              })
            };
            u(), this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize", u), i.off("resize.getSize scroll.getSize").on("resize.getSize scroll.getSize", u)
          } else if (this.options.size && "auto" != this.options.size && this.$lis.not(s).length > this.options.size) {
            var v = this.$lis.not(".divider").not(s).children().slice(0, this.options.size).last().parent().index(),
              w = this.$lis.slice(0, v + 1).filter(".divider").length;
            b = k * this.options.size + w * p + q, f.options.container ? (g.data("height") || g.data("height", g.height()), c = g.data("height")) : c = g.height(), f.options.dropupAuto && this.$newElement.toggleClass("dropup", d > e && c > b - r), g.css({
              "max-height": b + l + m + n + o + "px",
              overflow: "hidden",
              "min-height": ""
            }), h.css({
              "max-height": b - q + "px",
              "overflow-y": "auto",
              "min-height": ""
            })
          }
        }
      },
      setWidth: function() {
        if ("auto" === this.options.width) {
          this.$menu.css("min-width", "0");
          var a = this.$menu.parent().clone().appendTo("body"),
            b = this.options.container ? this.$newElement.clone().appendTo("body") : a,
            c = a.children(".dropdown-menu").outerWidth(),
            d = b.css("width", "auto").children("button").outerWidth();
          a.remove(), b.remove(), this.$newElement.css("width", Math.max(c, d) + "px")
        } else "fit" === this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""), this.$newElement.css("width", ""));
        this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement.removeClass("fit-width")
      },
      selectPosition: function() {
        this.$bsContainer = a('<div class="bs-container" />');
        var b, c, d = this,
          e = function(a) {
            d.$bsContainer.addClass(a.attr("class").replace(/form-control|fit-width/gi, "")).toggleClass("dropup", a.hasClass("dropup")), b = a.offset(), c = a.hasClass("dropup") ? 0 : a[0].offsetHeight, d.$bsContainer.css({
              top: b.top + c,
              left: b.left,
              width: a[0].offsetWidth
            })
          };
        this.$button.on("click", function() {
          var b = a(this);
          d.isDisabled() || (e(d.$newElement), d.$bsContainer.appendTo(d.options.container).toggleClass("open", !b.hasClass("open")).append(d.$menu))
        }), a(window).on("resize scroll", function() {
          e(d.$newElement)
        }), this.$element.on("hide.bs.select", function() {
          d.$menu.data("height", d.$menu.height()), d.$bsContainer.detach()
        })
      },
      setSelected: function(a, b, c) {
        c || (c = this.findLis().eq(this.liObj[a])), c.toggleClass("selected", b)
      },
      setDisabled: function(a, b, c) {
        c || (c = this.findLis().eq(this.liObj[a])), b ? c.addClass("disabled").children("a").attr("href", "#").attr("tabindex", -1) : c.removeClass("disabled").children("a").removeAttr("href").attr("tabindex", 0)
      },
      isDisabled: function() {
        return this.$element[0].disabled
      },
      checkDisabled: function() {
        var a = this;
        this.isDisabled() ? (this.$newElement.addClass("disabled"), this.$button.addClass("disabled").attr("tabindex", -1)) : (this.$button.hasClass("disabled") && (this.$newElement.removeClass("disabled"), this.$button.removeClass("disabled")), -1 != this.$button.attr("tabindex") || this.$element.data("tabindex") || this.$button.removeAttr("tabindex")), this.$button.click(function() {
          return !a.isDisabled()
        })
      },
      tabIndex: function() {
        this.$element.data("tabindex") !== this.$element.attr("tabindex") && -98 !== this.$element.attr("tabindex") && "-98" !== this.$element.attr("tabindex") && (this.$element.data("tabindex", this.$element.attr("tabindex")), this.$button.attr("tabindex", this.$element.data("tabindex"))), this.$element.attr("tabindex", -98)
      },
      clickListener: function() {
        var b = this,
          c = a(document);
        this.$newElement.on("touchstart.dropdown", ".dropdown-menu", function(a) {
          a.stopPropagation()
        }), c.data("spaceSelect", !1), this.$button.on("keyup", function(a) {
          /(32)/.test(a.keyCode.toString(10)) && c.data("spaceSelect") && (a.preventDefault(), c.data("spaceSelect", !1))
        }), this.$button.on("click", function() {
          b.setSize()
        }), this.$element.on("shown.bs.select", function() {
          if (b.options.liveSearch || b.multiple) {
            if (!b.multiple) {
              var a = b.liObj[b.$element[0].selectedIndex];
              if ("number" != typeof a || b.options.size === !1) return;
              var c = b.$lis.eq(a)[0].offsetTop - b.$menuInner[0].offsetTop;
              c = c - b.$menuInner[0].offsetHeight / 2 + b.sizeInfo.liHeight / 2, b.$menuInner[0].scrollTop = c
            }
          } else b.$menuInner.find(".selected a").focus()
        }), this.$menuInner.on("click", "li a", function(c) {
          var d = a(this),
            e = d.parent().data("originalIndex"),
            f = b.$element.val(),
            g = b.$element.prop("selectedIndex");
          if (b.multiple && c.stopPropagation(), c.preventDefault(), !b.isDisabled() && !d.parent().hasClass("disabled")) {
            var h = b.$element.find("option"),
              i = h.eq(e),
              j = i.prop("selected"),
              k = i.parent("optgroup"),
              l = b.options.maxOptions,
              m = k.data("maxOptions") || !1;
            if (b.multiple) {
              if (i.prop("selected", !j), b.setSelected(e, !j), d.blur(), l !== !1 || m !== !1) {
                var n = l < h.filter(":selected").length,
                  o = m < k.find("option:selected").length;
                if (l && n || m && o)
                  if (l && 1 == l) h.prop("selected", !1), i.prop("selected", !0), b.$menuInner.find(".selected").removeClass("selected"), b.setSelected(e, !0);
                  else if (m && 1 == m) {
                  k.find("option:selected").prop("selected", !1), i.prop("selected", !0);
                  var p = d.parent().data("optgroup");
                  b.$menuInner.find('[data-optgroup="' + p + '"]').removeClass("selected"), b.setSelected(e, !0)
                } else {
                  var q = "function" == typeof b.options.maxOptionsText ? b.options.maxOptionsText(l, m) : b.options.maxOptionsText,
                    r = q[0].replace("{n}", l),
                    s = q[1].replace("{n}", m),
                    t = a('<div class="notify"></div>');
                  q[2] && (r = r.replace("{var}", q[2][l > 1 ? 0 : 1]), s = s.replace("{var}", q[2][m > 1 ? 0 : 1])), i.prop("selected", !1), b.$menu.append(t), l && n && (t.append(a("<div>" + r + "</div>")), b.$element.trigger("maxReached.bs.select")), m && o && (t.append(a("<div>" + s + "</div>")), b.$element.trigger("maxReachedGrp.bs.select")), setTimeout(function() {
                    b.setSelected(e, !1)
                  }, 10), t.delay(750).fadeOut(300, function() {
                    a(this).remove()
                  })
                }
              }
            } else h.prop("selected", !1), i.prop("selected", !0), b.$menuInner.find(".selected").removeClass("selected"), b.setSelected(e, !0);
            b.multiple ? b.options.liveSearch && b.$searchbox.focus() : b.$button.focus(), (f != b.$element.val() && b.multiple || g != b.$element.prop("selectedIndex") && !b.multiple) && b.$element.trigger("changed.bs.select", [e, i.prop("selected"), j]).triggerNative("change")
          }
        }), this.$menu.on("click", "li.disabled a, .popover-title, .popover-title :not(.close)", function(c) {
          c.currentTarget == this && (c.preventDefault(), c.stopPropagation(), b.options.liveSearch && !a(c.target).hasClass("close") ? b.$searchbox.focus() : b.$button.focus())
        }), this.$menuInner.on("click", ".divider, .dropdown-header", function(a) {
          a.preventDefault(), a.stopPropagation(), b.options.liveSearch ? b.$searchbox.focus() : b.$button.focus()
        }), this.$menu.on("click", ".popover-title .close", function() {
          b.$button.click()
        }), this.$searchbox.on("click", function(a) {
          a.stopPropagation()
        }), this.$menu.on("click", ".actions-btn", function(c) {
          b.options.liveSearch ? b.$searchbox.focus() : b.$button.focus(), c.preventDefault(), c.stopPropagation(), a(this).hasClass("bs-select-all") ? b.selectAll() : b.deselectAll()
        }), this.$element.change(function() {
          b.render(!1)
        })
      },
      liveSearchListener: function() {
        var d = this,
          e = a('<li class="no-results"></li>');
        this.$button.on("click.dropdown.data-api touchstart.dropdown.data-api", function() {
          d.$menuInner.find(".active").removeClass("active"), d.$searchbox.val() && (d.$searchbox.val(""), d.$lis.not(".is-hidden").removeClass("hidden"), e.parent().length && e.remove()), d.multiple || d.$menuInner.find(".selected").addClass("active"), setTimeout(function() {
            d.$searchbox.focus()
          }, 10)
        }), this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api", function(a) {
          a.stopPropagation()
        }), this.$searchbox.on("input propertychange", function() {
          if (d.$searchbox.val()) {
            var f = d.$lis.not(".is-hidden").removeClass("hidden").children("a");
            f = d.options.liveSearchNormalize ? f.not(":a" + d._searchStyle() + '("' + b(d.$searchbox.val()) + '")') : f.not(":" + d._searchStyle() + '("' + d.$searchbox.val() + '")'), f.parent().addClass("hidden"), d.$lis.filter(".dropdown-header").each(function() {
              var b = a(this),
                c = b.data("optgroup");
              0 === d.$lis.filter("[data-optgroup=" + c + "]").not(b).not(".hidden").length && (b.addClass("hidden"), d.$lis.filter("[data-optgroup=" + c + "div]").addClass("hidden"))
            });
            var g = d.$lis.not(".hidden");
            g.each(function(b) {
              var c = a(this);
              c.hasClass("divider") && (c.index() === g.first().index() || c.index() === g.last().index() || g.eq(b + 1).hasClass("divider")) && c.addClass("hidden")
            }), d.$lis.not(".hidden, .no-results").length ? e.parent().length && e.remove() : (e.parent().length && e.remove(), e.html(d.options.noneResultsText.replace("{0}", '"' + c(d.$searchbox.val()) + '"')).show(), d.$menuInner.append(e))
          } else d.$lis.not(".is-hidden").removeClass("hidden"), e.parent().length && e.remove();
          d.$lis.filter(".active").removeClass("active"), d.$searchbox.val() && d.$lis.not(".hidden, .divider, .dropdown-header").eq(0).addClass("active").children("a").focus(), a(this).focus()
        })
      },
      _searchStyle: function() {
        var a = {
          begins: "ibegins",
          startsWith: "ibegins"
        };
        return a[this.options.liveSearchStyle] || "icontains"
      },
      val: function(a) {
        return "undefined" != typeof a ? (this.$element.val(a), this.render(), this.$element) : this.$element.val()
      },
      changeAll: function(b) {
        "undefined" == typeof b && (b = !0), this.findLis();
        for (var c = this.$element.find("option"), d = this.$lis.not(".divider, .dropdown-header, .disabled, .hidden").toggleClass("selected", b), e = d.length, f = [], g = 0; e > g; g++) {
          var h = d[g].getAttribute("data-original-index");
          f[f.length] = c.eq(h)[0]
        }
        a(f).prop("selected", b), this.render(!1), this.$element.trigger("changed.bs.select").triggerNative("change")
      },
      selectAll: function() {
        return this.changeAll(!0)
      },
      deselectAll: function() {
        return this.changeAll(!1)
      },
      toggle: function(a) {
        a = a || window.event, a && a.stopPropagation(), this.$button.trigger("click")
      },
      keydown: function(c) {
        var d, e, f, g, h, i, j, k, l, m = a(this),
          n = m.is("input") ? m.parent().parent() : m.parent(),
          o = n.data("this"),
          p = ":not(.disabled, .hidden, .dropdown-header, .divider)",
          q = {
            32: " ",
            48: "0",
            49: "1",
            50: "2",
            51: "3",
            52: "4",
            53: "5",
            54: "6",
            55: "7",
            56: "8",
            57: "9",
            59: ";",
            65: "a",
            66: "b",
            67: "c",
            68: "d",
            69: "e",
            70: "f",
            71: "g",
            72: "h",
            73: "i",
            74: "j",
            75: "k",
            76: "l",
            77: "m",
            78: "n",
            79: "o",
            80: "p",
            81: "q",
            82: "r",
            83: "s",
            84: "t",
            85: "u",
            86: "v",
            87: "w",
            88: "x",
            89: "y",
            90: "z",
            96: "0",
            97: "1",
            98: "2",
            99: "3",
            100: "4",
            101: "5",
            102: "6",
            103: "7",
            104: "8",
            105: "9"
          };
        if (o.options.liveSearch && (n = m.parent().parent()), o.options.container && (n = o.$menu), d = a("[role=menu] li", n), l = o.$newElement.hasClass("open"), !l && (c.keyCode >= 48 && c.keyCode <= 57 || c.keyCode >= 96 && c.keyCode <= 105 || c.keyCode >= 65 && c.keyCode <= 90) && (o.options.container ? o.$button.trigger("click") : (o.setSize(), o.$menu.parent().addClass("open"), l = !0), o.$searchbox.focus()), o.options.liveSearch && (/(^9$|27)/.test(c.keyCode.toString(10)) && l && 0 === o.$menu.find(".active").length && (c.preventDefault(), o.$menu.parent().removeClass("open"), o.options.container && o.$newElement.removeClass("open"), o.$button.focus()), d = a("[role=menu] li" + p, n), m.val() || /(38|40)/.test(c.keyCode.toString(10)) || 0 === d.filter(".active").length && (d = o.$menuInner.find("li"), d = o.options.liveSearchNormalize ? d.filter(":a" + o._searchStyle() + "(" + b(q[c.keyCode]) + ")") : d.filter(":" + o._searchStyle() + "(" + q[c.keyCode] + ")"))), d.length) {
          if (/(38|40)/.test(c.keyCode.toString(10))) e = d.index(d.find("a").filter(":focus").parent()), g = d.filter(p).first().index(), h = d.filter(p).last().index(), f = d.eq(e).nextAll(p).eq(0).index(), i = d.eq(e).prevAll(p).eq(0).index(), j = d.eq(f).prevAll(p).eq(0).index(), o.options.liveSearch && (d.each(function(b) {
            a(this).hasClass("disabled") || a(this).data("index", b)
          }), e = d.index(d.filter(".active")), g = d.first().data("index"), h = d.last().data("index"), f = d.eq(e).nextAll().eq(0).data("index"), i = d.eq(e).prevAll().eq(0).data("index"), j = d.eq(f).prevAll().eq(0).data("index")), k = m.data("prevIndex"), 38 == c.keyCode ? (o.options.liveSearch && e--, e != j && e > i && (e = i), g > e && (e = g), e == k && (e = h)) : 40 == c.keyCode && (o.options.liveSearch && e++, -1 == e && (e = 0), e != j && f > e && (e = f), e > h && (e = h), e == k && (e = g)), m.data("prevIndex", e), o.options.liveSearch ? (c.preventDefault(), m.hasClass("dropdown-toggle") || (d.removeClass("active").eq(e).addClass("active").children("a").focus(), m.focus())) : d.eq(e).children("a").focus();
          else if (!m.is("input")) {
            var r, s, t = [];
            d.each(function() {
              a(this).hasClass("disabled") || a.trim(a(this).children("a").text().toLowerCase()).substring(0, 1) == q[c.keyCode] && t.push(a(this).index())
            }), r = a(document).data("keycount"), r++, a(document).data("keycount", r), s = a.trim(a(":focus").text().toLowerCase()).substring(0, 1), s != q[c.keyCode] ? (r = 1, a(document).data("keycount", r)) : r >= t.length && (a(document).data("keycount", 0), r > t.length && (r = 1)), d.eq(t[r - 1]).children("a").focus()
          }
          if ((/(13|32)/.test(c.keyCode.toString(10)) || /(^9$)/.test(c.keyCode.toString(10)) && o.options.selectOnTab) && l) {
            if (/(32)/.test(c.keyCode.toString(10)) || c.preventDefault(), o.options.liveSearch) /(32)/.test(c.keyCode.toString(10)) || (o.$menuInner.find(".active a").click(), m.focus());
            else {
              var u = a(":focus");
              u.click(), u.focus(), c.preventDefault(), a(document).data("spaceSelect", !0)
            }
            a(document).data("keycount", 0)
          }(/(^9$|27)/.test(c.keyCode.toString(10)) && l && (o.multiple || o.options.liveSearch) || /(27)/.test(c.keyCode.toString(10)) && !l) && (o.$menu.parent().removeClass("open"), o.options.container && o.$newElement.removeClass("open"), o.$button.focus())
        }
      },
      mobile: function() {
        this.$element.addClass("mobile-device")
      },
      refresh: function() {
        this.$lis = null, this.liObj = {}, this.reloadLi(), this.render(), this.checkDisabled(), this.liHeight(!0), this.setStyle(), this.setWidth(), this.$lis && this.$searchbox.trigger("propertychange"), this.$element.trigger("refreshed.bs.select")
      },
      hide: function() {
        this.$newElement.hide()
      },
      show: function() {
        this.$newElement.show()
      },
      remove: function() {
        this.$newElement.remove(), this.$element.remove()
      },
      destroy: function() {
        this.$newElement.before(this.$element).remove(), this.$bsContainer ? this.$bsContainer.remove() : this.$menu.remove(), this.$element.off(".bs.select").removeData("selectpicker").removeClass("bs-select-hidden selectpicker")
      }
    };
    var f = a.fn.selectpicker;
    a.fn.selectpicker = d, a.fn.selectpicker.Constructor = e, a.fn.selectpicker.noConflict = function() {
      return a.fn.selectpicker = f, this
    }, a(document).data("keycount", 0).on("keydown.bs.select", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input', e.prototype.keydown).on("focusin.modal", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input', function(a) {
      a.stopPropagation()
    }), a(window).on("load.bs.select.data-api", function() {
      a(".selectpicker").each(function() {
        var b = a(this);
        d.call(b, b.data())
      })
    })
  }(jQuery), + function(a) {
    function b(b) {
      var c = b.attr("data-target");
      c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
      var d = c && a(c);
      return d && d.length ? d : b.parent()
    }

    function c(c) {
      c && 3 === c.which || (a(e).remove(), a(f).each(function() {
        var d = a(this),
          e = b(d),
          f = {
            relatedTarget: this
          };
        e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))))
      }))
    }

    function d(b) {
      return this.each(function() {
        var c = a(this),
          d = c.data("bs.dropdown");
        d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
      })
    }
    var e = ".dropdown-backdrop",
      f = '[data-toggle="dropdown"]',
      g = function(b) {
        a(b).on("click.bs.dropdown", this.toggle)
      };
    g.VERSION = "3.3.6", g.prototype.toggle = function(d) {
      var e = a(this);
      if (!e.is(".disabled, :disabled")) {
        var f = b(e),
          g = f.hasClass("open");
        if (c(), !g) {
          "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
          var h = {
            relatedTarget: this
          };
          if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
          e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h))
        }
        return !1
      }
    }, g.prototype.keydown = function(c) {
      if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
        var d = a(this);
        if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
          var e = b(d),
            g = e.hasClass("open");
          if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");
          var h = " li:not(.disabled):visible a",
            i = e.find(".dropdown-menu" + h);
          if (i.length) {
            var j = i.index(c.target);
            38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
          }
        }
      }
    };
    var h = a.fn.dropdown;
    a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function() {
      return a.fn.dropdown = h, this
    }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
      a.stopPropagation()
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown)
  }(jQuery), ! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
  }(function(a) {
    var b = window.Slick || {};
    b = function() {
      function b(b, d) {
        var e, f = this;
        f.defaults = {
          accessibility: !0,
          adaptiveHeight: !1,
          appendArrows: a(b),
          appendDots: a(b),
          arrows: !0,
          asNavFor: null,
          prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
          nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
          autoplay: !1,
          autoplaySpeed: 3e3,
          centerMode: !1,
          centerPadding: "50px",
          cssEase: "ease",
          customPaging: function(a, b) {
            return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (b + 1) + "</button>"
          },
          dots: !1,
          dotsClass: "slick-dots",
          draggable: !0,
          easing: "linear",
          edgeFriction: .35,
          fade: !1,
          focusOnSelect: !1,
          infinite: !0,
          initialSlide: 0,
          lazyLoad: "ondemand",
          mobileFirst: !1,
          pauseOnHover: !0,
          pauseOnDotsHover: !1,
          respondTo: "window",
          responsive: null,
          rows: 1,
          rtl: !1,
          slide: "",
          slidesPerRow: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          swipe: !0,
          swipeToSlide: !1,
          touchMove: !0,
          touchThreshold: 5,
          useCSS: !0,
          variableWidth: !1,
          vertical: !1,
          verticalSwiping: !1,
          waitForAnimate: !0,
          zIndex: 1e3
        }, f.initials = {
          animating: !1,
          dragging: !1,
          autoPlayTimer: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          $dots: null,
          listWidth: null,
          listHeight: null,
          loadIndex: 0,
          $nextArrow: null,
          $prevArrow: null,
          slideCount: null,
          slideWidth: null,
          $slideTrack: null,
          $slides: null,
          sliding: !1,
          slideOffset: 0,
          swipeLeft: null,
          $list: null,
          touchObject: {},
          transformsEnabled: !1,
          unslicked: !1
        }, a.extend(f, f.initials), f.activeBreakpoint = null, f.animType = null, f.animProp = null, f.breakpoints = [], f.breakpointSettings = [], f.cssTransitions = !1, f.hidden = "hidden", f.paused = !1, f.positionProp = null, f.respondTo = null, f.rowCount = 1, f.shouldClick = !0, f.$slider = a(b), f.$slidesCache = null, f.transformType = null, f.transitionType = null, f.visibilityChange = "visibilitychange", f.windowWidth = 0, f.windowTimer = null, e = a(b).data("slick") || {}, f.options = a.extend({}, f.defaults, e, d), f.currentSlide = f.options.initialSlide, f.originalSettings = f.options, "undefined" != typeof document.mozHidden ? (f.hidden = "mozHidden", f.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (f.hidden = "webkitHidden", f.visibilityChange = "webkitvisibilitychange"), f.autoPlay = a.proxy(f.autoPlay, f), f.autoPlayClear = a.proxy(f.autoPlayClear, f), f.changeSlide = a.proxy(f.changeSlide, f), f.clickHandler = a.proxy(f.clickHandler, f), f.selectHandler = a.proxy(f.selectHandler, f), f.setPosition = a.proxy(f.setPosition, f), f.swipeHandler = a.proxy(f.swipeHandler, f), f.dragHandler = a.proxy(f.dragHandler, f), f.keyHandler = a.proxy(f.keyHandler, f), f.autoPlayIterator = a.proxy(f.autoPlayIterator, f), f.instanceUid = c++, f.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, f.registerBreakpoints(), f.init(!0), f.checkResponsive(!0)
      }
      var c = 0;
      return b
    }(), b.prototype.addSlide = b.prototype.slickAdd = function(b, c, d) {
      var e = this;
      if ("boolean" == typeof c) d = c, c = null;
      else if (0 > c || c >= e.slideCount) return !1;
      e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function(b, c) {
        a(c).attr("data-slick-index", b)
      }), e.$slidesCache = e.$slides, e.reinit()
    }, b.prototype.animateHeight = function() {
      var a = this;
      if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
        var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
        a.$list.animate({
          height: b
        }, a.options.speed)
      }
    }, b.prototype.animateSlide = function(b, c) {
      var d = {},
        e = this;
      e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({
        left: b
      }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
        top: b
      }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({
        animStart: e.currentLeft
      }).animate({
        animStart: b
      }, {
        duration: e.options.speed,
        easing: e.options.easing,
        step: function(a) {
          a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d))
        },
        complete: function() {
          c && c.call()
        }
      })) : (e.applyTransition(), b = Math.ceil(b), d[e.animType] = e.options.vertical === !1 ? "translate3d(" + b + "px, 0px, 0px)" : "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function() {
        e.disableTransition(), c.call()
      }, e.options.speed))
    }, b.prototype.asNavFor = function(b) {
      var c = this,
        d = c.options.asNavFor;
      d && null !== d && (d = a(d).not(c.$slider)), null !== d && "object" == typeof d && d.each(function() {
        var c = a(this).slick("getSlick");
        c.unslicked || c.slideHandler(b, !0)
      })
    }, b.prototype.applyTransition = function(a) {
      var b = this,
        c = {};
      c[b.transitionType] = b.options.fade === !1 ? b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }, b.prototype.autoPlay = function() {
      var a = this;
      a.autoPlayTimer && clearInterval(a.autoPlayTimer), a.slideCount > a.options.slidesToShow && a.paused !== !0 && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
    }, b.prototype.autoPlayClear = function() {
      var a = this;
      a.autoPlayTimer && clearInterval(a.autoPlayTimer)
    }, b.prototype.autoPlayIterator = function() {
      var a = this;
      a.options.infinite === !1 ? 1 === a.direction ? (a.currentSlide + 1 === a.slideCount - 1 && (a.direction = 0), a.slideHandler(a.currentSlide + a.options.slidesToScroll)) : (0 === a.currentSlide - 1 && (a.direction = 1), a.slideHandler(a.currentSlide - a.options.slidesToScroll)) : a.slideHandler(a.currentSlide + a.options.slidesToScroll)
    }, b.prototype.buildArrows = function() {
      var b = this;
      b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({
        "aria-disabled": "true",
        tabindex: "-1"
      }))
    }, b.prototype.buildDots = function() {
      var b, c, d = this;
      if (d.options.dots === !0 && d.slideCount > d.options.slidesToShow) {
        for (c = '<ul class="' + d.options.dotsClass + '">', b = 0; b <= d.getDotCount(); b += 1) c += "<li>" + d.options.customPaging.call(this, d, b) + "</li>";
        c += "</ul>", d.$dots = a(c).appendTo(d.options.appendDots), d.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
      }
    }, b.prototype.buildOut = function() {
      var b = this;
      b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function(b, c) {
          a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "")
        }), b.$slidesCache = b.$slides, b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(),
        b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable")
    }, b.prototype.buildRows = function() {
      var a, b, c, d, e, f, g, h = this;
      if (d = document.createDocumentFragment(), f = h.$slider.children(), h.options.rows > 1) {
        for (g = h.options.slidesPerRow * h.options.rows, e = Math.ceil(f.length / g), a = 0; e > a; a++) {
          var i = document.createElement("div");
          for (b = 0; b < h.options.rows; b++) {
            var j = document.createElement("div");
            for (c = 0; c < h.options.slidesPerRow; c++) {
              var k = a * g + (b * h.options.slidesPerRow + c);
              f.get(k) && j.appendChild(f.get(k))
            }
            i.appendChild(j)
          }
          d.appendChild(i)
        }
        h.$slider.html(d), h.$slider.children().children().children().css({
          width: 100 / h.options.slidesPerRow + "%",
          display: "inline-block"
        })
      }
    }, b.prototype.checkResponsive = function(b, c) {
      var d, e, f, g = this,
        h = !1,
        i = g.$slider.width(),
        j = window.innerWidth || a(window).width();
      if ("window" === g.respondTo ? f = j : "slider" === g.respondTo ? f = i : "min" === g.respondTo && (f = Math.min(j, i)), g.options.responsive && g.options.responsive.length && null !== g.options.responsive) {
        e = null;
        for (d in g.breakpoints) g.breakpoints.hasOwnProperty(d) && (g.originalSettings.mobileFirst === !1 ? f < g.breakpoints[d] && (e = g.breakpoints[d]) : f > g.breakpoints[d] && (e = g.breakpoints[d]));
        null !== e ? null !== g.activeBreakpoint ? (e !== g.activeBreakpoint || c) && (g.activeBreakpoint = e, "unslick" === g.breakpointSettings[e] ? g.unslick(e) : (g.options = a.extend({}, g.originalSettings, g.breakpointSettings[e]), b === !0 && (g.currentSlide = g.options.initialSlide), g.refresh(b)), h = e) : (g.activeBreakpoint = e, "unslick" === g.breakpointSettings[e] ? g.unslick(e) : (g.options = a.extend({}, g.originalSettings, g.breakpointSettings[e]), b === !0 && (g.currentSlide = g.options.initialSlide), g.refresh(b)), h = e) : null !== g.activeBreakpoint && (g.activeBreakpoint = null, g.options = g.originalSettings, b === !0 && (g.currentSlide = g.options.initialSlide), g.refresh(b), h = e), b || h === !1 || g.$slider.trigger("breakpoint", [g, h])
      }
    }, b.prototype.changeSlide = function(b, c) {
      var d, e, f, g = this,
        h = a(b.target);
      switch (h.is("a") && b.preventDefault(), h.is("li") || (h = h.closest("li")), f = 0 !== g.slideCount % g.options.slidesToScroll, d = f ? 0 : (g.slideCount - g.currentSlide) % g.options.slidesToScroll, b.data.message) {
        case "previous":
          e = 0 === d ? g.options.slidesToScroll : g.options.slidesToShow - d, g.slideCount > g.options.slidesToShow && g.slideHandler(g.currentSlide - e, !1, c);
          break;
        case "next":
          e = 0 === d ? g.options.slidesToScroll : d, g.slideCount > g.options.slidesToShow && g.slideHandler(g.currentSlide + e, !1, c);
          break;
        case "index":
          var i = 0 === b.data.index ? 0 : b.data.index || h.index() * g.options.slidesToScroll;
          g.slideHandler(g.checkNavigable(i), !1, c), h.children().trigger("focus");
          break;
        default:
          return
      }
    }, b.prototype.checkNavigable = function(a) {
      var b, c, d = this;
      if (b = d.getNavigableIndexes(), c = 0, a > b[b.length - 1]) a = b[b.length - 1];
      else
        for (var e in b) {
          if (a < b[e]) {
            a = c;
            break
          }
          c = b[e]
        }
      return a
    }, b.prototype.cleanUpEvents = function() {
      var b = this;
      b.options.dots && null !== b.$dots && (a("li", b.$dots).off("click.slick", b.changeSlide), b.options.pauseOnDotsHover === !0 && b.options.autoplay === !0 && a("li", b.$dots).off("mouseenter.slick", a.proxy(b.setPaused, b, !0)).off("mouseleave.slick", a.proxy(b.setPaused, b, !1))), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.$list.off("mouseenter.slick", a.proxy(b.setPaused, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.setPaused, b, !1)), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition)
    }, b.prototype.cleanUpRows = function() {
      var a, b = this;
      b.options.rows > 1 && (a = b.$slides.children().children(), a.removeAttr("style"), b.$slider.html(a))
    }, b.prototype.clickHandler = function(a) {
      var b = this;
      b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault())
    }, b.prototype.destroy = function(b) {
      var c = this;
      c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
        a(this).attr("style", a(this).data("originalStyling"))
      }), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c])
    }, b.prototype.disableTransition = function(a) {
      var b = this,
        c = {};
      c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }, b.prototype.fadeSlide = function(a, b) {
      var c = this;
      c.cssTransitions === !1 ? (c.$slides.eq(a).css({
        zIndex: c.options.zIndex
      }), c.$slides.eq(a).animate({
        opacity: 1
      }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({
        opacity: 1,
        zIndex: c.options.zIndex
      }), b && setTimeout(function() {
        c.disableTransition(a), b.call()
      }, c.options.speed))
    }, b.prototype.fadeSlideOut = function(a) {
      var b = this;
      b.cssTransitions === !1 ? b.$slides.eq(a).animate({
        opacity: 0,
        zIndex: b.options.zIndex - 2
      }, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({
        opacity: 0,
        zIndex: b.options.zIndex - 2
      }))
    }, b.prototype.filterSlides = b.prototype.slickFilter = function(a) {
      var b = this;
      null !== a && (b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit())
    }, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function() {
      var a = this;
      return a.currentSlide
    }, b.prototype.getDotCount = function() {
      var a = this,
        b = 0,
        c = 0,
        d = 0;
      if (a.options.infinite === !0)
        for (; b < a.slideCount;) ++d, b = c + a.options.slidesToShow, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
      else if (a.options.centerMode === !0) d = a.slideCount;
      else
        for (; b < a.slideCount;) ++d, b = c + a.options.slidesToShow, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
      return d - 1
    }, b.prototype.getLeft = function(a) {
      var b, c, d, e = this,
        f = 0;
      return e.slideOffset = 0, c = e.$slides.first().outerHeight(!0), e.options.infinite === !0 ? (e.slideCount > e.options.slidesToShow && (e.slideOffset = -1 * e.slideWidth * e.options.slidesToShow, f = -1 * c * e.options.slidesToShow), 0 !== e.slideCount % e.options.slidesToScroll && a + e.options.slidesToScroll > e.slideCount && e.slideCount > e.options.slidesToShow && (a > e.slideCount ? (e.slideOffset = -1 * (e.options.slidesToShow - (a - e.slideCount)) * e.slideWidth, f = -1 * (e.options.slidesToShow - (a - e.slideCount)) * c) : (e.slideOffset = -1 * e.slideCount % e.options.slidesToScroll * e.slideWidth, f = -1 * e.slideCount % e.options.slidesToScroll * c))) : a + e.options.slidesToShow > e.slideCount && (e.slideOffset = (a + e.options.slidesToShow - e.slideCount) * e.slideWidth, f = (a + e.options.slidesToShow - e.slideCount) * c), e.slideCount <= e.options.slidesToShow && (e.slideOffset = 0, f = 0), e.options.centerMode === !0 && e.options.infinite === !0 ? e.slideOffset += e.slideWidth * Math.floor(e.options.slidesToShow / 2) - e.slideWidth : e.options.centerMode === !0 && (e.slideOffset = 0, e.slideOffset += e.slideWidth * Math.floor(e.options.slidesToShow / 2)), b = e.options.vertical === !1 ? -1 * a * e.slideWidth + e.slideOffset : -1 * a * c + f, e.options.variableWidth === !0 && (d = e.slideCount <= e.options.slidesToShow || e.options.infinite === !1 ? e.$slideTrack.children(".slick-slide").eq(a) : e.$slideTrack.children(".slick-slide").eq(a + e.options.slidesToShow), b = d[0] ? -1 * d[0].offsetLeft : 0, e.options.centerMode === !0 && (d = e.options.infinite === !1 ? e.$slideTrack.children(".slick-slide").eq(a) : e.$slideTrack.children(".slick-slide").eq(a + e.options.slidesToShow + 1), b = d[0] ? -1 * d[0].offsetLeft : 0, b += (e.$list.width() - d.outerWidth()) / 2)), b
    }, b.prototype.getOption = b.prototype.slickGetOption = function(a) {
      var b = this;
      return b.options[a]
    }, b.prototype.getNavigableIndexes = function() {
      var a, b = this,
        c = 0,
        d = 0,
        e = [];
      for (b.options.infinite === !1 ? a = b.slideCount : (c = -1 * b.options.slidesToScroll, d = -1 * b.options.slidesToScroll, a = 2 * b.slideCount); a > c;) e.push(c), c = d + b.options.slidesToScroll, d += b.options.slidesToScroll <= b.options.slidesToShow ? b.options.slidesToScroll : b.options.slidesToShow;
      return e
    }, b.prototype.getSlick = function() {
      return this
    }, b.prototype.getSlideCount = function() {
      var b, c, d, e = this;
      return d = e.options.centerMode === !0 ? e.slideWidth * Math.floor(e.options.slidesToShow / 2) : 0, e.options.swipeToSlide === !0 ? (e.$slideTrack.find(".slick-slide").each(function(b, f) {
        return f.offsetLeft - d + a(f).outerWidth() / 2 > -1 * e.swipeLeft ? (c = f, !1) : void 0
      }), b = Math.abs(a(c).attr("data-slick-index") - e.currentSlide) || 1) : e.options.slidesToScroll
    }, b.prototype.goTo = b.prototype.slickGoTo = function(a, b) {
      var c = this;
      c.changeSlide({
        data: {
          message: "index",
          index: parseInt(a)
        }
      }, b)
    }, b.prototype.init = function(b) {
      var c = this;
      a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots()), b && c.$slider.trigger("init", [c]), c.options.accessibility === !0 && c.initADA()
    }, b.prototype.initArrowEvents = function() {
      var a = this;
      a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.on("click.slick", {
        message: "previous"
      }, a.changeSlide), a.$nextArrow.on("click.slick", {
        message: "next"
      }, a.changeSlide))
    }, b.prototype.initDotEvents = function() {
      var b = this;
      b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
        message: "index"
      }, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && b.options.autoplay === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.setPaused, b, !0)).on("mouseleave.slick", a.proxy(b.setPaused, b, !1))
    }, b.prototype.initializeEvents = function() {
      var b = this;
      b.initArrowEvents(), b.initDotEvents(), b.$list.on("touchstart.slick mousedown.slick", {
        action: "start"
      }, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", {
        action: "move"
      }, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", {
        action: "end"
      }, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", {
        action: "end"
      }, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.$list.on("mouseenter.slick", a.proxy(b.setPaused, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.setPaused, b, !1)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition)
    }, b.prototype.initUI = function() {
      var a = this;
      a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show(), a.options.autoplay === !0 && a.autoPlay()
    }, b.prototype.keyHandler = function(a) {
      var b = this;
      a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({
        data: {
          message: "previous"
        }
      }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({
        data: {
          message: "next"
        }
      }))
    }, b.prototype.lazyLoad = function() {
      function b(b) {
        a("img[data-lazy]", b).each(function() {
          var b = a(this),
            c = a(this).attr("data-lazy"),
            d = document.createElement("img");
          d.onload = function() {
            b.animate({
              opacity: 0
            }, 100, function() {
              b.attr("src", c).animate({
                opacity: 1
              }, 200, function() {
                b.removeAttr("data-lazy").removeClass("slick-loading")
              })
            })
          }, d.src = c
        })
      }
      var c, d, e, f, g = this;
      g.options.centerMode === !0 ? g.options.infinite === !0 ? (e = g.currentSlide + (g.options.slidesToShow / 2 + 1), f = e + g.options.slidesToShow + 2) : (e = Math.max(0, g.currentSlide - (g.options.slidesToShow / 2 + 1)), f = 2 + (g.options.slidesToShow / 2 + 1) + g.currentSlide) : (e = g.options.infinite ? g.options.slidesToShow + g.currentSlide : g.currentSlide, f = e + g.options.slidesToShow, g.options.fade === !0 && (e > 0 && e--, f <= g.slideCount && f++)), c = g.$slider.find(".slick-slide").slice(e, f), b(c), g.slideCount <= g.options.slidesToShow ? (d = g.$slider.find(".slick-slide"), b(d)) : g.currentSlide >= g.slideCount - g.options.slidesToShow ? (d = g.$slider.find(".slick-cloned").slice(0, g.options.slidesToShow), b(d)) : 0 === g.currentSlide && (d = g.$slider.find(".slick-cloned").slice(-1 * g.options.slidesToShow), b(d))
    }, b.prototype.loadSlider = function() {
      var a = this;
      a.setPosition(), a.$slideTrack.css({
        opacity: 1
      }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
    }, b.prototype.next = b.prototype.slickNext = function() {
      var a = this;
      a.changeSlide({
        data: {
          message: "next"
        }
      })
    }, b.prototype.orientationChange = function() {
      var a = this;
      a.checkResponsive(), a.setPosition()
    }, b.prototype.pause = b.prototype.slickPause = function() {
      var a = this;
      a.autoPlayClear(), a.paused = !0
    }, b.prototype.play = b.prototype.slickPlay = function() {
      var a = this;
      a.paused = !1, a.autoPlay()
    }, b.prototype.postSlide = function(a) {
      var b = this;
      b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay === !0 && b.paused === !1 && b.autoPlay(), b.options.accessibility === !0 && b.initADA()
    }, b.prototype.prev = b.prototype.slickPrev = function() {
      var a = this;
      a.changeSlide({
        data: {
          message: "previous"
        }
      })
    }, b.prototype.preventDefault = function(a) {
      a.preventDefault()
    }, b.prototype.progressiveLazyLoad = function() {
      var b, c, d = this;
      b = a("img[data-lazy]", d.$slider).length, b > 0 && (c = a("img[data-lazy]", d.$slider).first(), c.attr("src", c.attr("data-lazy")).removeClass("slick-loading").load(function() {
        c.removeAttr("data-lazy"), d.progressiveLazyLoad(), d.options.adaptiveHeight === !0 && d.setPosition()
      }).error(function() {
        c.removeAttr("data-lazy"), d.progressiveLazyLoad()
      }))
    }, b.prototype.refresh = function(b) {
      var c = this,
        d = c.currentSlide;
      c.destroy(!0), a.extend(c, c.initials, {
        currentSlide: d
      }), c.init(), b || c.changeSlide({
        data: {
          message: "index",
          index: d
        }
      }, !1)
    }, b.prototype.registerBreakpoints = function() {
      var b, c, d, e = this,
        f = e.options.responsive || null;
      if ("array" === a.type(f) && f.length) {
        e.respondTo = e.options.respondTo || "window";
        for (b in f)
          if (d = e.breakpoints.length - 1, c = f[b].breakpoint, f.hasOwnProperty(b)) {
            for (; d >= 0;) e.breakpoints[d] && e.breakpoints[d] === c && e.breakpoints.splice(d, 1), d--;
            e.breakpoints.push(c), e.breakpointSettings[c] = f[b].settings
          }
        e.breakpoints.sort(function(a, b) {
          return e.options.mobileFirst ? a - b : b - a
        })
      }
    }, b.prototype.reinit = function() {
      var b = this;
      b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.checkResponsive(!1, !0), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses(0), b.setPosition(), b.$slider.trigger("reInit", [b]), b.options.autoplay === !0 && b.focusHandler()
    }, b.prototype.resize = function() {
      var b = this;
      a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function() {
        b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition()
      }, 50))
    }, b.prototype.removeSlide = b.prototype.slickRemove = function(a, b, c) {
      var d = this;
      return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit())
    }, b.prototype.setCSS = function(a) {
      var b, c, d = this,
        e = {};
      d.options.rtl === !0 && (a = -a), b = "left" == d.positionProp ? Math.ceil(a) + "px" : "0px", c = "top" == d.positionProp ? Math.ceil(a) + "px" : "0px", e[d.positionProp] = a, d.transformsEnabled === !1 ? d.$slideTrack.css(e) : (e = {}, d.cssTransitions === !1 ? (e[d.animType] = "translate(" + b + ", " + c + ")", d.$slideTrack.css(e)) : (e[d.animType] = "translate3d(" + b + ", " + c + ", 0px)", d.$slideTrack.css(e)))
    }, b.prototype.setDimensions = function() {
      var a = this;
      a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({
        padding: "0px " + a.options.centerPadding
      }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({
        padding: a.options.centerPadding + " 0px"
      })), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
      var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
      a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b)
    }, b.prototype.setFade = function() {
      var b, c = this;
      c.$slides.each(function(d, e) {
        b = -1 * c.slideWidth * d, c.options.rtl === !0 ? a(e).css({
          position: "relative",
          right: b,
          top: 0,
          zIndex: c.options.zIndex - 2,
          opacity: 0
        }) : a(e).css({
          position: "relative",
          left: b,
          top: 0,
          zIndex: c.options.zIndex - 2,
          opacity: 0
        })
      }), c.$slides.eq(c.currentSlide).css({
        zIndex: c.options.zIndex - 1,
        opacity: 1
      })
    }, b.prototype.setHeight = function() {
      var a = this;
      if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
        var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
        a.$list.css("height", b)
      }
    }, b.prototype.setOption = b.prototype.slickSetOption = function(b, c, d) {
      var e, f, g = this;
      if ("responsive" === b && "array" === a.type(c))
        for (f in c)
          if ("array" !== a.type(g.options.responsive)) g.options.responsive = [c[f]];
          else {
            for (e = g.options.responsive.length - 1; e >= 0;) g.options.responsive[e].breakpoint === c[f].breakpoint && g.options.responsive.splice(e, 1), e--;
            g.options.responsive.push(c[f])
          }
      else g.options[b] = c;
      d === !0 && (g.unload(), g.reinit())
    }, b.prototype.setPosition = function() {
      var a = this;
      a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a])
    }, b.prototype.setProps = function() {
      var a = this,
        b = document.body.style;
      a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = null !== a.animType && a.animType !== !1
    }, b.prototype.setSlideClasses = function(a) {
      var b, c, d, e, f = this;
      c = f.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), f.$slides.eq(a).addClass("slick-current"), f.options.centerMode === !0 ? (b = Math.floor(f.options.slidesToShow / 2), f.options.infinite === !0 && (a >= b && a <= f.slideCount - 1 - b ? f.$slides.slice(a - b, a + b + 1).addClass("slick-active").attr("aria-hidden", "false") : (d = f.options.slidesToShow + a, c.slice(d - b + 1, d + b + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? c.eq(c.length - 1 - f.options.slidesToShow).addClass("slick-center") : a === f.slideCount - 1 && c.eq(f.options.slidesToShow).addClass("slick-center")), f.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= f.slideCount - f.options.slidesToShow ? f.$slides.slice(a, a + f.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : c.length <= f.options.slidesToShow ? c.addClass("slick-active").attr("aria-hidden", "false") : (e = f.slideCount % f.options.slidesToShow, d = f.options.infinite === !0 ? f.options.slidesToShow + a : a, f.options.slidesToShow == f.options.slidesToScroll && f.slideCount - a < f.options.slidesToShow ? c.slice(d - (f.options.slidesToShow - e), d + e).addClass("slick-active").attr("aria-hidden", "false") : c.slice(d, d + f.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === f.options.lazyLoad && f.lazyLoad()
    }, b.prototype.setupInfinite = function() {
      var b, c, d, e = this;
      if (e.options.fade === !0 && (e.options.centerMode = !1), e.options.infinite === !0 && e.options.fade === !1 && (c = null, e.slideCount > e.options.slidesToShow)) {
        for (d = e.options.centerMode === !0 ? e.options.slidesToShow + 1 : e.options.slidesToShow, b = e.slideCount; b > e.slideCount - d; b -= 1) c = b - 1, a(e.$slides[c]).clone(!0).attr("id", "").attr("data-slick-index", c - e.slideCount).prependTo(e.$slideTrack).addClass("slick-cloned");
        for (b = 0; d > b; b += 1) c = b, a(e.$slides[c]).clone(!0).attr("id", "").attr("data-slick-index", c + e.slideCount).appendTo(e.$slideTrack).addClass("slick-cloned");
        e.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
          a(this).attr("id", "")
        })
      }
    }, b.prototype.setPaused = function(a) {
      var b = this;
      b.options.autoplay === !0 && b.options.pauseOnHover === !0 && (b.paused = a, a ? b.autoPlayClear() : b.autoPlay())
    }, b.prototype.selectHandler = function(b) {
      var c = this,
        d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
        e = parseInt(d.attr("data-slick-index"));
      return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e)
    }, b.prototype.slideHandler = function(a, b, c) {
      var d, e, f, g, h = null,
        i = this;
      return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function() {
        i.postSlide(d)
      }) : i.postSlide(d))) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function() {
        i.postSlide(d)
      }) : i.postSlide(d))) : (i.options.autoplay === !0 && clearInterval(i.autoPlayTimer), e = 0 > d ? 0 !== i.slideCount % i.options.slidesToScroll ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? 0 !== i.slideCount % i.options.slidesToScroll ? 0 : d - i.slideCount : d, i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (c !== !0 ? (i.fadeSlideOut(f), i.fadeSlide(e, function() {
        i.postSlide(e)
      })) : i.postSlide(e), void i.animateHeight()) : void(c !== !0 ? i.animateSlide(h, function() {
        i.postSlide(e)
      }) : i.postSlide(e))))
    }, b.prototype.startLoad = function() {
      var a = this;
      a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading")
    }, b.prototype.swipeDirection = function() {
      var a, b, c, d, e = this;
      return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "left" : "right" : "vertical"
    }, b.prototype.swipeEnd = function() {
      var a, b = this;
      if (b.dragging = !1, b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0, void 0 === b.touchObject.curX) return !1;
      if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]), b.touchObject.swipeLength >= b.touchObject.minSwipe) switch (b.swipeDirection()) {
        case "left":
          a = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(), b.slideHandler(a), b.currentDirection = 0, b.touchObject = {}, b.$slider.trigger("swipe", [b, "left"]);
          break;
        case "right":
          a = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(), b.slideHandler(a), b.currentDirection = 1, b.touchObject = {}, b.$slider.trigger("swipe", [b, "right"])
      } else b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), b.touchObject = {})
    }, b.prototype.swipeHandler = function(a) {
      var b = this;
      if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {
        case "start":
          b.swipeStart(a);
          break;
        case "move":
          b.swipeMove(a);
          break;
        case "end":
          b.swipeEnd(a)
      }
    }, b.prototype.swipeMove = function(a) {
      var b, c, d, e, f, g = this;
      return f = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !g.dragging || f && 1 !== f.length ? !1 : (b = g.getLeft(g.currentSlide), g.touchObject.curX = void 0 !== f ? f[0].pageX : a.clientX, g.touchObject.curY = void 0 !== f ? f[0].pageY : a.clientY, g.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(g.touchObject.curX - g.touchObject.startX, 2))), g.options.verticalSwiping === !0 && (g.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(g.touchObject.curY - g.touchObject.startY, 2)))), c = g.swipeDirection(), "vertical" !== c ? (void 0 !== a.originalEvent && g.touchObject.swipeLength > 4 && a.preventDefault(), e = (g.options.rtl === !1 ? 1 : -1) * (g.touchObject.curX > g.touchObject.startX ? 1 : -1), g.options.verticalSwiping === !0 && (e = g.touchObject.curY > g.touchObject.startY ? 1 : -1), d = g.touchObject.swipeLength, g.touchObject.edgeHit = !1, g.options.infinite === !1 && (0 === g.currentSlide && "right" === c || g.currentSlide >= g.getDotCount() && "left" === c) && (d = g.touchObject.swipeLength * g.options.edgeFriction, g.touchObject.edgeHit = !0), g.swipeLeft = g.options.vertical === !1 ? b + d * e : b + d * (g.$list.height() / g.listWidth) * e, g.options.verticalSwiping === !0 && (g.swipeLeft = b + d * e), g.options.fade === !0 || g.options.touchMove === !1 ? !1 : g.animating === !0 ? (g.swipeLeft = null, !1) : void g.setCSS(g.swipeLeft)) : void 0)
    }, b.prototype.swipeStart = function(a) {
      var b, c = this;
      return 1 !== c.touchObject.fingerCount || c.slideCount <= c.options.slidesToShow ? (c.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (b = a.originalEvent.touches[0]), c.touchObject.startX = c.touchObject.curX = void 0 !== b ? b.pageX : a.clientX, c.touchObject.startY = c.touchObject.curY = void 0 !== b ? b.pageY : a.clientY, void(c.dragging = !0))
    }, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function() {
      var a = this;
      null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit())
    }, b.prototype.unload = function() {
      var b = this;
      a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, b.prototype.unslick = function(a) {
      var b = this;
      b.$slider.trigger("unslick", [b, a]), b.destroy()
    }, b.prototype.updateArrows = function() {
      var a, b = this;
      a = Math.floor(b.options.slidesToShow / 2), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && !b.options.infinite && (b.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), b.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === b.currentSlide ? (b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), b.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : b.currentSlide >= b.slideCount - b.options.slidesToShow && b.options.centerMode === !1 ? (b.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), b.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : b.currentSlide >= b.slideCount - 1 && b.options.centerMode === !0 && (b.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), b.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, b.prototype.updateDots = function() {
      var a = this;
      null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }, b.prototype.visibility = function() {
      var a = this;
      document[a.hidden] ? (a.paused = !0, a.autoPlayClear()) : a.options.autoplay === !0 && (a.paused = !1, a.autoPlay())
    }, b.prototype.initADA = function() {
      var b = this;
      b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({
        "aria-hidden": "true",
        tabindex: "-1"
      }).find("a, input, button, select").attr({
        tabindex: "-1"
      }), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c) {
        a(this).attr({
          role: "option",
          "aria-describedby": "slick-slide" + b.instanceUid + c
        })
      }), null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function(c) {
        a(this).attr({
          role: "presentation",
          "aria-selected": "false",
          "aria-controls": "navigation" + b.instanceUid + c,
          id: "slick-slide" + b.instanceUid + c
        })
      }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), b.activateADA()
    }, b.prototype.activateADA = function() {
      var a = this,
        b = a.$slider.find("*").is(":focus");
      a.$slideTrack.find(".slick-active").attr({
        "aria-hidden": "false",
        tabindex: "0"
      }).find("a, input, button, select").attr({
        tabindex: "0"
      }), b && a.$slideTrack.find(".slick-active").focus()
    }, b.prototype.focusHandler = function() {
      var b = this;
      b.$slider.on("focus.slick blur.slick", "*", function(c) {
        c.stopImmediatePropagation();
        var d = a(this);
        setTimeout(function() {
          b.isPlay && (d.is(":focus") ? (b.autoPlayClear(), b.paused = !0) : (b.paused = !1, b.autoPlay()))
        }, 0)
      })
    }, a.fn.slick = function() {
      var a, c = this,
        d = arguments[0],
        e = Array.prototype.slice.call(arguments, 1),
        f = c.length,
        g = 0;
      for (g; f > g; g++)
        if ("object" == typeof d || "undefined" == typeof d ? c[g].slick = new b(c[g], d) : a = c[g].slick[d].apply(c[g].slick, e), "undefined" != typeof a) return a;
      return c
    }
  }), + function(a) {
    function b(b) {
      return this.each(function() {
        var d = a(this),
          e = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
          f = d.data("bs.validator");
        (f || "destroy" != b) && (f || d.data("bs.validator", f = new c(this, e)), "string" == typeof b && f[b]())
      })
    }
    var c = function(b, d) {
      this.$element = a(b), this.options = d, d.errors = a.extend({}, c.DEFAULTS.errors, d.errors);
      for (var e in d.custom)
        if (!d.errors[e]) throw new Error("Missing default error message for custom validator: " + e);
      a.extend(c.VALIDATORS, d.custom), this.$element.attr("novalidate", !0), this.toggleSubmit(), this.$element.on("input.bs.validator change.bs.validator focusout.bs.validator", a.proxy(this.validateInput, this)), this.$element.on("submit.bs.validator", a.proxy(this.onSubmit, this)), this.$element.find("[data-match]").each(function() {
        var b = a(this),
          c = b.data("match");
        a(c).on("input.bs.validator", function(a) {
          b.val() && b.trigger("input.bs.validator")
        })
      })
    };
    c.INPUT_SELECTOR = ':input:not([type="submit"], button):enabled:visible', c.DEFAULTS = {
      delay: 500,
      html: !1,
      disable: !0,
      custom: {},
      errors: {
        match: "Does not match",
        minlength: "Not long enough"
      },
      feedback: {
        success: "glyphicon-ok",
        error: "glyphicon-remove"
      }
    }, c.VALIDATORS = {
      "native": function(a) {
        var b = a[0];
        return b.checkValidity ? b.checkValidity() : !0
      },
      match: function(b) {
        var c = b.data("match");
        return !b.val() || b.val() === a(c).val()
      },
      minlength: function(a) {
        var b = a.data("minlength");
        return !a.val() || a.val().length >= b
      }
    }, c.prototype.validateInput = function(b) {
      var c = a(b.target),
        d = c.data("bs.validator.errors");
      if (c.is('[type="radio"]') && (c = this.$element.find('input[name="' + c.attr("name") + '"]')), c.is('[type="checkbox"]')) {
        var e = this.$element.find('input[name="' + c.attr("name") + '"]'),
          f = 0;
        e.each(function(b) {
          a(this).is(":checked") && (f = b)
        }), c = this.$element.find('input[name="' + c.attr("name") + '"]').eq(f)
      }
      if (this.$element.trigger(b = a.Event("validate.bs.validator", {
          relatedTarget: c[0]
        })), !b.isDefaultPrevented()) {
        var g = this;
        this.runValidators(c).done(function(e) {
          c.data("bs.validator.errors", e), e.length ? g.showErrors(c) : g.clearErrors(c), d && e.toString() === d.toString() || (b = e.length ? a.Event("invalid.bs.validator", {
            relatedTarget: c[0],
            detail: e
          }) : a.Event("valid.bs.validator", {
            relatedTarget: c[0],
            detail: d
          }), g.$element.trigger(b)), g.toggleSubmit(), g.$element.trigger(a.Event("validated.bs.validator", {
            relatedTarget: c[0]
          }))
        })
      }
    }, c.prototype.runValidators = function(b) {
      function d(a) {
        return b.data(a + "-error") || b.data("error") || "native" == a && b[0].validationMessage || g.errors[a]
      }
      var e = [],
        f = a.Deferred(),
        g = this.options;
      return b.data("bs.validator.deferred") && b.data("bs.validator.deferred").reject(), b.data("bs.validator.deferred", f), a.each(c.VALIDATORS, a.proxy(function(a, c) {
        if ((b.data(a) || "native" == a) && !c.call(this, b)) {
          var f = d(a);
          !~e.indexOf(f) && e.push(f)
        }
      }, this)), !e.length && b.val() && b.data("remote") ? this.defer(b, function() {
        var c = {};
        c[b.attr("name")] = b.val(), a.get(b.data("remote"), c).fail(function(a, b, c) {
          e.push(d("remote") || c)
        }).always(function() {
          f.resolve(e)
        })
      }) : f.resolve(e), f.promise()
    }, c.prototype.validate = function() {
      var a = this.options.delay;
      return this.options.delay = 0, this.$element.find(c.INPUT_SELECTOR).trigger("input.bs.validator"), this.options.delay = a, this
    }, c.prototype.showErrors = function(b) {
      var c = this.options.html ? "html" : "text";
      this.defer(b, function() {
        var d = b.closest(".form-group"),
          e = d.find(".help-block.with-errors"),
          f = d.find(".form-control-feedback"),
          g = b.data("bs.validator.errors");
        g.length && (g = a("<ul/>").addClass("list-unstyled").append(a.map(g, function(b) {
          return a("<li/>")[c](b)
        })), void 0 === e.data("bs.validator.originalContent") && e.data("bs.validator.originalContent", e.html()), e.empty().append(g), d.addClass("has-error"), f.length && f.removeClass(this.options.feedback.success) && f.addClass(this.options.feedback.error) && d.removeClass("has-success"))
      })
    }, c.prototype.clearErrors = function(a) {
      var b = a.closest(".form-group"),
        c = b.find(".help-block.with-errors"),
        d = b.find(".form-control-feedback");
      c.html(c.data("bs.validator.originalContent")), b.removeClass("has-error"), d.length && d.removeClass(this.options.feedback.error) && d.addClass(this.options.feedback.success) && b.addClass("has-success")
    }, c.prototype.hasErrors = function() {
      function b() {
        return !!(a(this).data("bs.validator.errors") || []).length
      }
      return !!this.$element.find(c.INPUT_SELECTOR).filter(b).length
    }, c.prototype.isIncomplete = function() {
      function b() {
        return "checkbox" === this.type ? !a('[name="' + this.name + '"]:checked').length : "radio" === this.type ? !a('[name="' + this.name + '"]:checked').length : "" === a.trim(this.value)
      }
      return !!this.$element.find(c.INPUT_SELECTOR).filter("[required]").filter(b).length
    }, c.prototype.onSubmit = function(a) {
      this.validate(), (this.isIncomplete() || this.hasErrors()) && a.preventDefault()
    }, c.prototype.toggleSubmit = function() {
      if (this.options.disable) {
        var b = a('button[type="submit"], input[type="submit"]').filter('[form="' + this.$element.attr("id") + '"]').add(this.$element.find('input[type="submit"], button[type="submit"]'));
        b.toggleClass("disabled", this.isIncomplete() || this.hasErrors())
      }
    }, c.prototype.defer = function(b, c) {
      return c = a.proxy(c, this), this.options.delay ? (window.clearTimeout(b.data("bs.validator.timeout")), void b.data("bs.validator.timeout", window.setTimeout(c, this.options.delay))) : c()
    }, c.prototype.destroy = function() {
      return this.$element.removeAttr("novalidate").removeData("bs.validator").off(".bs.validator"), this.$element.find(c.INPUT_SELECTOR).off(".bs.validator").removeData(["bs.validator.errors", "bs.validator.deferred"]).each(function() {
        var b = a(this),
          c = b.data("bs.validator.timeout");
        window.clearTimeout(c) && b.removeData("bs.validator.timeout")
      }), this.$element.find(".help-block.with-errors").each(function() {
        var b = a(this),
          c = b.data("bs.validator.originalContent");
        b.removeData("bs.validator.originalContent").html(c)
      }), this.$element.find('input[type="submit"], button[type="submit"]').removeClass("disabled"), this.$element.find(".has-error").removeClass("has-error"), this
    };
    var d = a.fn.validator;
    a.fn.validator = b, a.fn.validator.Constructor = c, a.fn.validator.noConflict = function() {
      return a.fn.validator = d, this
    }, a(window).on("load", function() {
      a('form[data-toggle="validator"]').each(function() {
        var c = a(this);
        b.call(c, c.data())
      })
    })
  }(jQuery), $.fn.responsiveSetup = function(a) {
    a = jQuery.extend({
      onMobile: "",
      onDesktop: "",
      breakpoint: 992
    }, a);
    var b = !1;
    $(window)[0].innerWidth < a.breakpoint && (a.onMobile.callFunction(), b = !0), $(window).resize(function() {
      var c = $(window)[0].innerWidth;
      if (c >= a.breakpoint && b) a.onDesktop.callFunction(), b = !1;
      else {
        if (!(c < a.breakpoint) || b) return;
        a.onMobile.callFunction(), b = !0
      }
    })
  },
  function(a) {
    a.fn.accordionSetup = function(b) {
      b = jQuery.extend({
        openClass: "is-open",
        buttonClass: ".accordion-button",
        containerClass: ".accordion-container",
        tabPanelTitleClass: "tab-panel__title",
        tabPanelContainerClass: ".tab-panel__content",
        onlyOnMobile: !1
      }, b);
      var c = a(this),
        d = c.find(b.buttonClass),
        e = c.find(b.containerClass),
        f = function() {
          d.each(function() {
            var c = a(this);
            c.hasClass(b.openClass) ? c.attr("aria-selected", "true").attr("aria-expanded", "true").next(b.containerClass).attr("aria-hidden", "false").find("a").attr("tabindex", "0") : c.attr("aria-selected", "false").attr("aria-expanded", "false").next(b.containerClass).attr("aria-hidden", "true").find("a").attr("tabindex", "-1")
          })
        },
        g = function() {
          d.attr("role", "tab"), e.attr("role", "tabpanel"), d.on("click.accordion", function(c) {
            c.preventDefault();
            var d = a(this);
            d.toggleClass(b.openClass), d.hasClass(b.tabPanelTitleClass) ? d.parent().find(b.tabPanelContainerClass).slideToggle(200) : e.slideToggle(200), setTimeout(function() {
              f()
            }, 10)
          }), f()
        },
        h = function() {
          d.each(function() {
            var c = a(this);
            c.off("click.accordion").removeAttr("role aria-selected aria-expanded").removeClass(b.openClass), e.removeAttr("role aria-hidden style").find("a").removeAttr("tabindex")
          })
        };
      b.onlyOnMobile ? a.fn.responsiveSetup && a(document).responsiveSetup({
        onMobile: {
          callFunction: g
        },
        onDesktop: {
          callFunction: h
        }
      }) : g()
    }
  }(jQuery), $(document).ready(function() {
    var a = function(a) {
        a.css("height", "auto")
      },
      b = function() {
        var b = $(".Services.-half-screen"),
          c = 0;
        a(b), b.each(function() {
          $(this).height() > c && (c = $(this).height())
        }), b.height(c)
      },
      c = function() {
        var b = $(".Teasers-list__list");
        b.each(function() {
          var b = $(this).find(".Teasers-list__item ._content__wrapper"),
            c = 0;
          a(b), b.each(function() {
            $(this).height() > c && (c = $(this).height())
          }), b.height(c)
        })
      };
    $(window).width() ? (b(), c(), $(window).resize(function() {
      b(), c()
    })) : a()
  });
var toggleHiddenContent = function() {
  var a = $("._btn-toggle");
  $(a).each(function(a, b) {
    var c = $(this);
    c.click(function(a) {
      a.preventDefault();
      var b = $(this).parent().find(".hidden-text");
      b.is(":visible") ? (b.slideUp(), $(this).addClass("btn-more").removeClass("btn-close")) : (b.slideDown(), $(this).addClass("btn-close").removeClass("btn-more")), $(this).parent().toggleClass("is-open")
    })
  })
};
$(document).ready(function() {
    toggleHiddenContent()
  }),
  function(a) {
    a.fn.navigationSetup = function(b) {
      var c, d, b = jQuery.extend({
          openClass: "is-open",
          listClass: ".Nav__list",
          itemClass: ".Nav__item",
          containerClass: ".Nav__dropdown",
          linkClass: "._link",
          linkOpenerClass: ".-opener",
          dropdownClass: ".-dropdown",
          lvl1Class: ".-level-1",
          searchClass: ".Nav-search",
          searchButtonClass: ".Nav-search__button",
          externalSearchButtonClass: ".Nav-search__external-button",
          searchCloseClass: ".Nav-search__close",
          searchFormClass: ".Nav-search__form",
          searchWrapperClass: ".Nav-search__wrapper",
          mobileButtonClass: ".Nav-mobile__button",
          mobileMenuClass: "-menu",
          mobileSearchClass: "-search"
        }, b),
        e = a(this),
        f = e.find(b.searchClass),
        g = e.find(b.itemClass + b.lvl1Class + " > " + b.linkClass),
        h = e.find(b.itemClass + ":not(" + b.lvl1Class + ") > " + b.linkClass);
      e.find(b.listClass + b.lvl1Class).attr("role", "menubar"), e.find(b.linkClass).attr("role", "menuitem"), e.find(b.containerClass).attr({
        role: "group",
        "aria-hidden": "true",
        "aria-expanded": "false"
      }).find(b.linkClass).attr("tabIndex", -1), e.find(b.itemClass + b.dropdownClass).attr("aria-haspopup", "true"), a.fn.openDropdown = function() {
        var c = a(this);
        return c.hasClass(b.dropdownClass.substring(1)) ? (c.addClass(b.openClass), void c.find("> " + b.containerClass).attr({
          "aria-hidden": "false",
          "aria-expanded": "true"
        }).find("> " + b.itemClass + "> " + b.linkClass).attr("tabIndex", 0)) : !0
      }, a.fn.closeDropdown = function() {
        var c = a(this);
        return c.hasClass(b.dropdownClass.substring(1)) ? (c.removeClass(b.openClass), void c.find(b.containerClass).attr({
          "aria-hidden": "true",
          "aria-expanded": "false"
        }).find(b.linkClass).attr("tabIndex", -1)) : !0
      };
      var i = function() {
        g.filter(b.linkOpenerClass).on("click.navigation", function(c) {
          c.preventDefault();
          var d = a(this).parent("li");
          d.hasClass(b.openClass) ? d.closeDropdown() : (e.find("." + b.openClass).closeDropdown(), d.openDropdown())
        })
      };
      i();
      var j = function() {
        g.filter(b.linkOpenerClass).off("click.navigation"), e.find("." + b.openClass).closeDropdown()
      };
      a.fn.responsiveSetup && a(document).responsiveSetup({
        onMobile: {
          callFunction: j
        },
        onDesktop: {
          callFunction: i
        }
      }), g.focus(function() {
        a(this).closest(b.listClass).find("." + b.openClass).closeDropdown()
      }), g.keydown(function(d) {
        c = a(this), 38 === d.keyCode ? (d.preventDefault(), c.closest(b.listClass).find("." + b.openClass).closeDropdown(), c.parent("li").openDropdown(), c.next(b.containerClass).find(b.linkClass).last().focus()) : 40 === d.keyCode || 32 === d.keyCode ? (d.preventDefault(), c.closest(b.listClass).find("." + b.openClass).closeDropdown(), c.parent("li").openDropdown(), c.next(b.containerClass).find(b.linkClass).first().focus()) : 39 === d.keyCode ? (d.preventDefault(), c.parent("li").next("li").length > 0 && c.parent("li").next("li").find(b.linkClass).first().focus()) : 37 === d.keyCode && (d.preventDefault(), c.parent("li").prev("li").length > 0 && c.parent("li").prev("li").find(b.linkClass).first().focus())
      }), h.keydown(function(d) {
        c = a(this), 38 === d.keyCode ? (d.preventDefault(), 0 === c.parent("li").prev("li").length ? (c.closest(b.containerClass).closest("." + b.openClass).closeDropdown(), c.closest(b.containerClass).prev(b.linkClass).focus()) : c.parent("li").prev("li").find(b.linkClass).first().focus()) : 40 === d.keyCode || 32 === d.keyCode ? (d.preventDefault(), 0 === c.parent("li").next("li").length ? (c.closest(b.containerClass).closest("." + b.openClass).closeDropdown(), c.closest(b.containerClass).prev(b.linkClass).focus()) : c.parent("li").next("li").find(b.linkClass).first().focus()) : 39 === d.keyCode ? (d.preventDefault(), c.next(b.containerClass).length > 0 ? (c.closest(b.listClass).find("." + b.openClass).closeDropdown(), c.parent("li").openDropdown(), c.next(b.containerClass).find(b.linkClass).first().focus()) : c.closest(b.itemClass + b.lvl1Class).next("li").length > 0 && c.closest(b.itemClass + b.lvl1Class).next("li").find(b.linkClass).first().focus()) : 37 === d.keyCode ? (d.preventDefault(), c.closest(b.containerClass).closest("." + b.openClass).closeDropdown(), c.closest(b.containerClass).prev(b.linkClass).focus()) : 27 === d.keyCode && (d.preventDefault(), c.closest(b.containerClass).prev(b.linkClass).focus())
      }), e.find(b.linkOpenerClass).on("click.nolink", function(a) {
        a.preventDefault()
      }), a(document).on("click.outsidemenu", function() {
        e.find("." + b.openClass).closeDropdown()
      }), e.on("click.insidemenu", function(a) {
        a.stopPropagation()
      }), d = function(a) {
        var a = a;
        switch (a) {
          case "open":
            f.addClass(b.openClass).find(b.searchWrapperClass).fadeIn(200).find('input[type="text"]').focus();
            break;
          case "close":
            f.removeClass(b.openClass).find(b.searchWrapperClass).fadeOut(50);
            break;
          default:
            return
        }
      }, e.find(b.searchButtonClass).on("click.searchbutton", function(a) {
        a.preventDefault(), d("open")
      }), a(document).find(b.externalSearchButtonClass).on("click.searchbutton", function(a) {
        a.preventDefault(), d("open")
      }), e.find(b.searchWrapperClass).on("click.searchwrapper", function() {
        d("close")
      }), e.find(b.searchFormClass).on("click.searchform", function(a) {
        a.stopPropagation()
      }), e.find(b.searchCloseClass).on("click.searchclose", function() {
        d("close")
      }), f.keydown(function(a) {
        27 === a.keyCode && (a.preventDefault(), d("close"))
      }), a.fn.toggleMobileMenu = function() {
        var c = a(this),
          d = c.data("type"),
          f = e.find("> .container"),
          g = function() {
            e.hasClass(b.openClass) || (e.addClass(b.openClass), f.fadeIn(200))
          },
          h = function() {
            e.removeClass(b.openClass), f.hide()
          };
        switch (d) {
          case "menu":
            e.addClass(b.mobileMenuClass).removeClass(b.mobileSearchClass), g();
            break;
          case "search":
            e.addClass(b.mobileSearchClass).removeClass(b.mobileMenuClass), g();
            break;
          case "close":
            e.removeClass(b.openClass).removeClass(b.mobileSearchClass).removeClass(b.mobileMenuClass), h();
            break;
          default:
            return
        }
      };
      var k = function() {
          f.find(b.searchWrapperClass).removeAttr("style"), e.find(b.mobileButtonClass).on("click.mobilebuttons", function(b) {
            b.preventDefault(), a(this).toggleMobileMenu()
          }), e.find(b.itemClass + b.dropdownClass + " > " + b.linkClass).on("click.mobilesubmenu", function(c) {
            c.preventDefault(), a(this).toggleClass(b.openClass).next(b.containerClass).slideToggle(200)
          })
        },
        l = function() {
          e.removeClass(b.openClass).removeClass(b.searchClass).removeClass(b.menuClass).find(b.mobileButtonClass).off("click.mobilebuttons"), e.find("> .container").removeAttr("style"), e.find(b.itemClass + b.dropdownClass + " > " + b.linkClass).off("click.mobilesubmenu").removeClass(b.openClass).next(b.containerClass).removeAttr("style")
        };
      a.fn.responsiveSetup && a(document).responsiveSetup({
        onMobile: {
          callFunction: k
        },
        onDesktop: {
          callFunction: l
        }
      })
    }
  }(jQuery);
var programmeChangeBlocksOrder = function() {
    var a = $(".Programme__block");
    a.each(function() {
      var a = $(this).find("._label").index();
      0 != a && ($(this).addClass("switched"), $(this).find("._label").insertBefore($(this).find("._content")))
    })
  },
  programmeBlocksResetOrder = function() {
    var a = $(".Programme__block.switched");
    a.each(function() {
      $(this).removeClass("switched"), $(this).find("._content").insertBefore($(this).find("._label"))
    })
  },
  programmeBlockOrderSetup = function() {
    $(window).width() <= 768 ? programmeChangeBlocksOrder() : programmeBlocksResetOrder()
  };
$(document).ready(function() {
    programmeBlockOrderSetup()
  }), $(window).resize(function() {
    programmeBlockOrderSetup()
  }),
  function(a) {
    a.fn.scrolltoSetup = function(b) {
      b = jQuery.extend({
        animationSpeed: 1e3,
        additionalHeight: 100
      }, b);
      var c = a(this),
        d = c.attr("href");
      c.on("click.scrollto", function(c) {
        c.preventDefault(), a("html, body").animate({
          scrollTop: a(d).offset().top - b.additionalHeight
        }, b.animationSpeed)
      })
    }
  }(jQuery),
  function(a) {
    a.fn.stickyitemSetup = function(b) {
      b = jQuery.extend({
        stickyClass: "is-sticky"
      }, b);
      var c, d = a(this),
        e = d.offset().top,
        f = function() {
          c = a(window).scrollTop(), c >= e ? d.addClass(b.stickyClass) : d.removeClass(b.stickyClass)
        },
        g = function() {
          f(), a(window).on("scroll.sticky", function() {
            f()
          })
        },
        h = function() {
          d.removeClass(b.stickyClass), a(window).off("scroll.sticky")
        };
      g(), a.fn.responsiveSetup && a(document).responsiveSetup({
        onMobile: {
          callFunction: h
        },
        onDesktop: {
          callFunction: g
        }
      })
    }
  }(jQuery),
  function(a) {
    a.fn.tabpanelSetup = function(b) {
      b = jQuery.extend({
        openClass: "is-open",
        transformClass: "is-animated",
        onMobileClass: "is-mobile",
        buttonClass: ".tab-panel__button",
        navClass: ".tab-panel__nav",
        containerClass: ".tab-panel__container",
        wrapperClass: ".tab-panel__wrapper",
        animationTime: 750
      }, b);
      var c, d = a(this),
        e = d.find(b.buttonClass),
        f = d.find(b.navClass),
        g = d.find(b.containerClass),
        h = d.find(b.wrapperClass);
      f.attr("role", "tablist"), e.each(function() {
        var b = a(this);
        b.attr("role", "tab").attr("tabindex", "-1").attr("aria-controls", '"' + b.attr("href") + '"').attr("aria-selected", "false"), h.find(b.attr("href")).attr("role", "tabpanel").attr("aria-labelledby", b.attr("id")).attr("aria-hidden", "true").find("a").attr("tabindex", "-1")
      });
      var i = function() {
          e.each(function() {
            var c = a(this);
            c.hasClass(b.openClass) ? c.attr("tabindex", "0").attr("aria-selected", "true") : c.attr("tabindex", "-1").attr("aria-selected", "false")
          }), g.each(function() {
            var c = a(this);
            c.hasClass(b.openClass) ? c.attr("aria-hidden", "false").find("a").attr("tabindex", "0") : c.attr("aria-hidden", "true").find("a").attr("tabindex", "-1")
          })
        },
        j = function(a) {
          var a = a;
          a.hasClass(b.currentClass) || (a.focus(), f.find("." + b.openClass).removeClass(b.openClass), h.find("." + b.openClass).removeClass(b.openClass), h.find(a.attr("href")).addClass(b.openClass), a.addClass(b.openClass)), setTimeout(function() {
            i()
          }, 10)
        };
      e.keydown(function(d) {
        c = a(this), (38 === d.keyCode || 39 === d.keyCode) && (d.preventDefault(), c.parent("li").next("li").length > 0 && j(c.parent("li").next("li").find(b.buttonClass))), (37 === d.keyCode || 40 === d.keyCode) && (d.preventDefault(), c.parent("li").prev("li").length > 0 && j(c.parent("li").prev("li").find(b.buttonClass)))
      });
      var k = function() {
        d.removeClass(b.onMobileClass), e.on("click.tabpanel", function(b) {
          b.preventDefault(), j(a(this))
        }), i()
      };
      k(), a.fn.accordionSetup && g.accordionSetup({
        onlyOnMobile: !0,
        buttonClass: ".tab-panel__title",
        containerClass: ".tab-panel__content"
      });
      var l = function() {
        d.addClass(b.onMobileClass), e.off("click.tabpanel")
      };
      a.fn.responsiveSetup && a(document).responsiveSetup({
        onMobile: {
          callFunction: l
        },
        onDesktop: {
          callFunction: k
        }
      })
    }
  }(jQuery),
  function(a) {
    a(document).ready(function() {
      initParallax(), a(".Nav").navigationSetup(), a(".js-accordion").each(function() {
        a(this).accordionSetup()
      }), a(".js-accordion-mobile").each(function() {
        a(this).accordionSetup({
          onlyOnMobile: !0
        })
      }), a(".js-accordion-component").each(function() {
        a(this).accordionSetup({
          buttonClass: ".accordion__button",
          containerClass: ".accordion__container"
        })
      }), a(".js-scrollto").scrolltoSetup(), a(".js-sticky").size() > 0 && a(".js-sticky").stickyitemSetup(), a(".js-tabpanell").tabpanelSetup();
      a(".js-grid").masonry({
        itemSelector: ".grid-item"
      });
      a(".js-slick-mainbanner").slick({
        autoplay: !1,
        arrows: !1,
        dots: !0,
        mobileFirst: !0,
        centerMode: !0,
        centerPadding: "0px"
      }), a(".js-slick-promobanner").slick({
        autoplay: !1,
        arrows: !1,
        dots: !1,
        mobileFirst: !0,
        centerMode: !0,
        draggable: !1,
        fade: !0,
        cssEase: "linear",
        speed: 300,
        centerPadding: "0px"
      }), a(".js-slick-promobanner-content").slick({
        autoplay: !1,
        arrows: !0,
        dots: !0,
        asNavFor: ".js-slick-promobanner",
        mobileFirst: !0,
        fade: !0,
        cssEase: "ease-in-out",
        speed: 1e3
      }), a(".js-slick-content").slick({
        autoplay: !1,
        arrows: !0,
        dots: !0,
        asNavFor: ".js-slick-content",
        mobileFirst: !0,
        fade: !0,
        cssEase: "ease-in-out",
        speed: 1e3
      }), a(".js-slick-latestnews").slick({
        autoplay: !0,
        autoplaySpeed: 5e3,
        speed: 1e3,
        fade: !0,
        mobileFirst: !0
      }), a(".js-slick-products").slick({
        autoplay: !1,
        arrows: !0,
        dots: !0,
        lazyLoad: "ondemand",
        infinite: !0,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }, {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }, {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: !1
          }
        }]
      }), a(".js-slick-gallery").slick({
        autoplay: !1,
        arrows: !0,
        mobileFirst: !0,
        fade: !0,
        cssEase: "ease-in-out",
        speed: 500,
        dots: !0,
        customPaging: function(b, c) {
          var d = a(b.$slides[c]).data("type") ? " -" + a(b.$slides[c]).data("type") : "";
          return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0" class="carousel-gallery__thumbnail' + d + '"><img class="_image" src="' + a(b.$slides[c]).data("thumbnail") + '" alt=""></button>'
        }
      });
      var b = function() {
        var b = a(".Subnav"),
          c = function() {
            b.prependTo(b.parent().prev(".col-lg-8"))
          },
          d = function() {
            b.prependTo(b.parent().next(".col-lg-4"))
          };
        a.fn.responsiveSetup && a(document).responsiveSetup({
          onMobile: {
            callFunction: c
          },
          onDesktop: {
            callFunction: d
          }
        })
      };
      b(), a(".tag-demo").on("click", function(b) {
        b.preventDefault(), a(this).toggleClass("-active")
      });
      var c = function() {
        a(".Contact-form-demo").validator().on("submit", function(b) {
          if (b.isDefaultPrevented()) {
            var c = a(".has-error");
            a("html, body").animate({
              scrollTop: a(c).offset().top - 100
            }, 1e3)
          }
        })
      };
      c();
      var d = function() {
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && a(".selectpicker").selectpicker("mobile")
      };
      d();
      var e = function() {
        a(".Job-search-form ._input--select, .Job-search-form ._input--text").keyup(function() {
          a(".Job-search-form ._input--select").removeClass("-focus"), a(document.activeElement).hasClass("dropdown-toggle") && a(this).addClass("-focus").focus()
        }), a(".Job-search-form .selectpicker").on("show.bs.select", function(b) {
          a(this).closest("._input--select").addClass("-focus")
        }), a(".Job-search-form .selectpicker").on("hide.bs.select", function(b) {
          a(this).closest("._input--select").removeClass("-focus")
        }), a(".Job-search-form .selectpicker").focus(function(b) {
          a(this).closest("._input--select").addClass("-focus")
        }), a(".Job-search-form .selectpicker").blur(function(b) {
          a(this).closest("._input--select").removeClass("-focus")
        }), a(".Job-search-form ._input--text").focus(function() {
          a(this).parent().addClass("-focus")
        }).blur(function() {
          a(this).parent().removeClass("-focus")
        }), a(".Job-search-form ._select-toggle").click(function() {
          a(this).parent().find(".selectpicker").selectpicker("toggle")
        })
      };
      e();
      var f = function() {
        a(".Job-search-form-demo").validator({
          custom: {
            select: function(a) {
              return a.data("label") != a.val() ? !0 : !1
            }
          },
          errors: {
            select: "Please select value"
          }
        }).on("submit", function(b) {
          if (b.isDefaultPrevented()) {
            var c = a(".has-error");
            a("html, body").animate({
              scrollTop: a(c).offset().top - 100
            }, 1e3)
          }
        })
      };
      f();
      var g = function() {
        a("._title").click(function() {
          a(this).parent().toggleClass("_body--active")
        })
      };
      g();
      var h = function() {
        a(".parent").click(function() {
          a(this).toggleClass("parent--is-clicked"), a(this).children(".dropdown--accordion").toggleClass("visible")
        })
      };
      h()
    })
  }(jQuery);