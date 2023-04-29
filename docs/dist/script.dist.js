(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn3, res) => function __init() {
    return fn3 && (res = (0, fn3[__getOwnPropNames(fn3)[0]])(fn3 = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/preact/dist/preact.module.js
  function s(n3, l4) {
    for (var u4 in l4)
      n3[u4] = l4[u4];
    return n3;
  }
  function a(n3) {
    var l4 = n3.parentNode;
    l4 && l4.removeChild(n3);
  }
  function h(l4, u4, i4) {
    var t4, o4, r4, f4 = {};
    for (r4 in u4)
      "key" == r4 ? t4 = u4[r4] : "ref" == r4 ? o4 = u4[r4] : f4[r4] = u4[r4];
    if (arguments.length > 2 && (f4.children = arguments.length > 3 ? n.call(arguments, 2) : i4), "function" == typeof l4 && null != l4.defaultProps)
      for (r4 in l4.defaultProps)
        void 0 === f4[r4] && (f4[r4] = l4.defaultProps[r4]);
    return v(l4, f4, t4, o4, null);
  }
  function v(n3, i4, t4, o4, r4) {
    var f4 = { type: n3, props: i4, key: t4, ref: o4, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r4 ? ++u : r4 };
    return null == r4 && null != l.vnode && l.vnode(f4), f4;
  }
  function y() {
    return { current: null };
  }
  function p(n3) {
    return n3.children;
  }
  function d(n3, l4) {
    this.props = n3, this.context = l4;
  }
  function _(n3, l4) {
    if (null == l4)
      return n3.__ ? _(n3.__, n3.__.__k.indexOf(n3) + 1) : null;
    for (var u4; l4 < n3.__k.length; l4++)
      if (null != (u4 = n3.__k[l4]) && null != u4.__e)
        return u4.__e;
    return "function" == typeof n3.type ? _(n3) : null;
  }
  function k(n3) {
    var l4, u4;
    if (null != (n3 = n3.__) && null != n3.__c) {
      for (n3.__e = n3.__c.base = null, l4 = 0; l4 < n3.__k.length; l4++)
        if (null != (u4 = n3.__k[l4]) && null != u4.__e) {
          n3.__e = n3.__c.base = u4.__e;
          break;
        }
      return k(n3);
    }
  }
  function b(n3) {
    (!n3.__d && (n3.__d = true) && t.push(n3) && !g.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || setTimeout)(g);
  }
  function g() {
    for (var n3; g.__r = t.length; )
      n3 = t.sort(function(n4, l4) {
        return n4.__v.__b - l4.__v.__b;
      }), t = [], n3.some(function(n4) {
        var l4, u4, i4, t4, o4, r4;
        n4.__d && (o4 = (t4 = (l4 = n4).__v).__e, (r4 = l4.__P) && (u4 = [], (i4 = s({}, t4)).__v = t4.__v + 1, j(r4, t4, i4, l4.__n, void 0 !== r4.ownerSVGElement, null != t4.__h ? [o4] : null, u4, null == o4 ? _(t4) : o4, t4.__h), z(u4, t4), t4.__e != o4 && k(t4)));
      });
  }
  function w(n3, l4, u4, i4, t4, o4, r4, c4, s4, a4) {
    var h4, y4, d4, k5, b4, g5, w5, x5 = i4 && i4.__k || e, C3 = x5.length;
    for (u4.__k = [], h4 = 0; h4 < l4.length; h4++)
      if (null != (k5 = u4.__k[h4] = null == (k5 = l4[h4]) || "boolean" == typeof k5 ? null : "string" == typeof k5 || "number" == typeof k5 || "bigint" == typeof k5 ? v(null, k5, null, null, k5) : Array.isArray(k5) ? v(p, { children: k5 }, null, null, null) : k5.__b > 0 ? v(k5.type, k5.props, k5.key, k5.ref ? k5.ref : null, k5.__v) : k5)) {
        if (k5.__ = u4, k5.__b = u4.__b + 1, null === (d4 = x5[h4]) || d4 && k5.key == d4.key && k5.type === d4.type)
          x5[h4] = void 0;
        else
          for (y4 = 0; y4 < C3; y4++) {
            if ((d4 = x5[y4]) && k5.key == d4.key && k5.type === d4.type) {
              x5[y4] = void 0;
              break;
            }
            d4 = null;
          }
        j(n3, k5, d4 = d4 || f, t4, o4, r4, c4, s4, a4), b4 = k5.__e, (y4 = k5.ref) && d4.ref != y4 && (w5 || (w5 = []), d4.ref && w5.push(d4.ref, null, k5), w5.push(y4, k5.__c || b4, k5)), null != b4 ? (null == g5 && (g5 = b4), "function" == typeof k5.type && k5.__k === d4.__k ? k5.__d = s4 = m(k5, s4, n3) : s4 = A(n3, k5, d4, x5, b4, s4), "function" == typeof u4.type && (u4.__d = s4)) : s4 && d4.__e == s4 && s4.parentNode != n3 && (s4 = _(d4));
      }
    for (u4.__e = g5, h4 = C3; h4--; )
      null != x5[h4] && N(x5[h4], x5[h4]);
    if (w5)
      for (h4 = 0; h4 < w5.length; h4++)
        M(w5[h4], w5[++h4], w5[++h4]);
  }
  function m(n3, l4, u4) {
    for (var i4, t4 = n3.__k, o4 = 0; t4 && o4 < t4.length; o4++)
      (i4 = t4[o4]) && (i4.__ = n3, l4 = "function" == typeof i4.type ? m(i4, l4, u4) : A(u4, i4, i4, t4, i4.__e, l4));
    return l4;
  }
  function x(n3, l4) {
    return l4 = l4 || [], null == n3 || "boolean" == typeof n3 || (Array.isArray(n3) ? n3.some(function(n4) {
      x(n4, l4);
    }) : l4.push(n3)), l4;
  }
  function A(n3, l4, u4, i4, t4, o4) {
    var r4, f4, e3;
    if (void 0 !== l4.__d)
      r4 = l4.__d, l4.__d = void 0;
    else if (null == u4 || t4 != o4 || null == t4.parentNode)
      n:
        if (null == o4 || o4.parentNode !== n3)
          n3.appendChild(t4), r4 = null;
        else {
          for (f4 = o4, e3 = 0; (f4 = f4.nextSibling) && e3 < i4.length; e3 += 1)
            if (f4 == t4)
              break n;
          n3.insertBefore(t4, o4), r4 = o4;
        }
    return void 0 !== r4 ? r4 : t4.nextSibling;
  }
  function C(n3, l4, u4, i4, t4) {
    var o4;
    for (o4 in u4)
      "children" === o4 || "key" === o4 || o4 in l4 || H(n3, o4, null, u4[o4], i4);
    for (o4 in l4)
      t4 && "function" != typeof l4[o4] || "children" === o4 || "key" === o4 || "value" === o4 || "checked" === o4 || u4[o4] === l4[o4] || H(n3, o4, l4[o4], u4[o4], i4);
  }
  function $(n3, l4, u4) {
    "-" === l4[0] ? n3.setProperty(l4, u4) : n3[l4] = null == u4 ? "" : "number" != typeof u4 || c.test(l4) ? u4 : u4 + "px";
  }
  function H(n3, l4, u4, i4, t4) {
    var o4;
    n:
      if ("style" === l4)
        if ("string" == typeof u4)
          n3.style.cssText = u4;
        else {
          if ("string" == typeof i4 && (n3.style.cssText = i4 = ""), i4)
            for (l4 in i4)
              u4 && l4 in u4 || $(n3.style, l4, "");
          if (u4)
            for (l4 in u4)
              i4 && u4[l4] === i4[l4] || $(n3.style, l4, u4[l4]);
        }
      else if ("o" === l4[0] && "n" === l4[1])
        o4 = l4 !== (l4 = l4.replace(/Capture$/, "")), l4 = l4.toLowerCase() in n3 ? l4.toLowerCase().slice(2) : l4.slice(2), n3.l || (n3.l = {}), n3.l[l4 + o4] = u4, u4 ? i4 || n3.addEventListener(l4, o4 ? T : I, o4) : n3.removeEventListener(l4, o4 ? T : I, o4);
      else if ("dangerouslySetInnerHTML" !== l4) {
        if (t4)
          l4 = l4.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("href" !== l4 && "list" !== l4 && "form" !== l4 && "tabIndex" !== l4 && "download" !== l4 && l4 in n3)
          try {
            n3[l4] = null == u4 ? "" : u4;
            break n;
          } catch (n4) {
          }
        "function" == typeof u4 || (null == u4 || false === u4 && -1 == l4.indexOf("-") ? n3.removeAttribute(l4) : n3.setAttribute(l4, u4));
      }
  }
  function I(n3) {
    this.l[n3.type + false](l.event ? l.event(n3) : n3);
  }
  function T(n3) {
    this.l[n3.type + true](l.event ? l.event(n3) : n3);
  }
  function j(n3, u4, i4, t4, o4, r4, f4, e3, c4) {
    var a4, h4, v4, y4, _4, k5, b4, g5, m4, x5, A5, C3, $3, H4, I4, T5 = u4.type;
    if (void 0 !== u4.constructor)
      return null;
    null != i4.__h && (c4 = i4.__h, e3 = u4.__e = i4.__e, u4.__h = null, r4 = [e3]), (a4 = l.__b) && a4(u4);
    try {
      n:
        if ("function" == typeof T5) {
          if (g5 = u4.props, m4 = (a4 = T5.contextType) && t4[a4.__c], x5 = a4 ? m4 ? m4.props.value : a4.__ : t4, i4.__c ? b4 = (h4 = u4.__c = i4.__c).__ = h4.__E : ("prototype" in T5 && T5.prototype.render ? u4.__c = h4 = new T5(g5, x5) : (u4.__c = h4 = new d(g5, x5), h4.constructor = T5, h4.render = O), m4 && m4.sub(h4), h4.props = g5, h4.state || (h4.state = {}), h4.context = x5, h4.__n = t4, v4 = h4.__d = true, h4.__h = [], h4._sb = []), null == h4.__s && (h4.__s = h4.state), null != T5.getDerivedStateFromProps && (h4.__s == h4.state && (h4.__s = s({}, h4.__s)), s(h4.__s, T5.getDerivedStateFromProps(g5, h4.__s))), y4 = h4.props, _4 = h4.state, v4)
            null == T5.getDerivedStateFromProps && null != h4.componentWillMount && h4.componentWillMount(), null != h4.componentDidMount && h4.__h.push(h4.componentDidMount);
          else {
            if (null == T5.getDerivedStateFromProps && g5 !== y4 && null != h4.componentWillReceiveProps && h4.componentWillReceiveProps(g5, x5), !h4.__e && null != h4.shouldComponentUpdate && false === h4.shouldComponentUpdate(g5, h4.__s, x5) || u4.__v === i4.__v) {
              for (h4.props = g5, h4.state = h4.__s, u4.__v !== i4.__v && (h4.__d = false), h4.__v = u4, u4.__e = i4.__e, u4.__k = i4.__k, u4.__k.forEach(function(n4) {
                n4 && (n4.__ = u4);
              }), A5 = 0; A5 < h4._sb.length; A5++)
                h4.__h.push(h4._sb[A5]);
              h4._sb = [], h4.__h.length && f4.push(h4);
              break n;
            }
            null != h4.componentWillUpdate && h4.componentWillUpdate(g5, h4.__s, x5), null != h4.componentDidUpdate && h4.__h.push(function() {
              h4.componentDidUpdate(y4, _4, k5);
            });
          }
          if (h4.context = x5, h4.props = g5, h4.__v = u4, h4.__P = n3, C3 = l.__r, $3 = 0, "prototype" in T5 && T5.prototype.render) {
            for (h4.state = h4.__s, h4.__d = false, C3 && C3(u4), a4 = h4.render(h4.props, h4.state, h4.context), H4 = 0; H4 < h4._sb.length; H4++)
              h4.__h.push(h4._sb[H4]);
            h4._sb = [];
          } else
            do {
              h4.__d = false, C3 && C3(u4), a4 = h4.render(h4.props, h4.state, h4.context), h4.state = h4.__s;
            } while (h4.__d && ++$3 < 25);
          h4.state = h4.__s, null != h4.getChildContext && (t4 = s(s({}, t4), h4.getChildContext())), v4 || null == h4.getSnapshotBeforeUpdate || (k5 = h4.getSnapshotBeforeUpdate(y4, _4)), I4 = null != a4 && a4.type === p && null == a4.key ? a4.props.children : a4, w(n3, Array.isArray(I4) ? I4 : [I4], u4, i4, t4, o4, r4, f4, e3, c4), h4.base = u4.__e, u4.__h = null, h4.__h.length && f4.push(h4), b4 && (h4.__E = h4.__ = null), h4.__e = false;
        } else
          null == r4 && u4.__v === i4.__v ? (u4.__k = i4.__k, u4.__e = i4.__e) : u4.__e = L(i4.__e, u4, i4, t4, o4, r4, f4, c4);
      (a4 = l.diffed) && a4(u4);
    } catch (n4) {
      u4.__v = null, (c4 || null != r4) && (u4.__e = e3, u4.__h = !!c4, r4[r4.indexOf(e3)] = null), l.__e(n4, u4, i4);
    }
  }
  function z(n3, u4) {
    l.__c && l.__c(u4, n3), n3.some(function(u5) {
      try {
        n3 = u5.__h, u5.__h = [], n3.some(function(n4) {
          n4.call(u5);
        });
      } catch (n4) {
        l.__e(n4, u5.__v);
      }
    });
  }
  function L(l4, u4, i4, t4, o4, r4, e3, c4) {
    var s4, h4, v4, y4 = i4.props, p4 = u4.props, d4 = u4.type, k5 = 0;
    if ("svg" === d4 && (o4 = true), null != r4) {
      for (; k5 < r4.length; k5++)
        if ((s4 = r4[k5]) && "setAttribute" in s4 == !!d4 && (d4 ? s4.localName === d4 : 3 === s4.nodeType)) {
          l4 = s4, r4[k5] = null;
          break;
        }
    }
    if (null == l4) {
      if (null === d4)
        return document.createTextNode(p4);
      l4 = o4 ? document.createElementNS("http://www.w3.org/2000/svg", d4) : document.createElement(d4, p4.is && p4), r4 = null, c4 = false;
    }
    if (null === d4)
      y4 === p4 || c4 && l4.data === p4 || (l4.data = p4);
    else {
      if (r4 = r4 && n.call(l4.childNodes), h4 = (y4 = i4.props || f).dangerouslySetInnerHTML, v4 = p4.dangerouslySetInnerHTML, !c4) {
        if (null != r4)
          for (y4 = {}, k5 = 0; k5 < l4.attributes.length; k5++)
            y4[l4.attributes[k5].name] = l4.attributes[k5].value;
        (v4 || h4) && (v4 && (h4 && v4.__html == h4.__html || v4.__html === l4.innerHTML) || (l4.innerHTML = v4 && v4.__html || ""));
      }
      if (C(l4, p4, y4, o4, c4), v4)
        u4.__k = [];
      else if (k5 = u4.props.children, w(l4, Array.isArray(k5) ? k5 : [k5], u4, i4, t4, o4 && "foreignObject" !== d4, r4, e3, r4 ? r4[0] : i4.__k && _(i4, 0), c4), null != r4)
        for (k5 = r4.length; k5--; )
          null != r4[k5] && a(r4[k5]);
      c4 || ("value" in p4 && void 0 !== (k5 = p4.value) && (k5 !== l4.value || "progress" === d4 && !k5 || "option" === d4 && k5 !== y4.value) && H(l4, "value", k5, y4.value, false), "checked" in p4 && void 0 !== (k5 = p4.checked) && k5 !== l4.checked && H(l4, "checked", k5, y4.checked, false));
    }
    return l4;
  }
  function M(n3, u4, i4) {
    try {
      "function" == typeof n3 ? n3(u4) : n3.current = u4;
    } catch (n4) {
      l.__e(n4, i4);
    }
  }
  function N(n3, u4, i4) {
    var t4, o4;
    if (l.unmount && l.unmount(n3), (t4 = n3.ref) && (t4.current && t4.current !== n3.__e || M(t4, null, u4)), null != (t4 = n3.__c)) {
      if (t4.componentWillUnmount)
        try {
          t4.componentWillUnmount();
        } catch (n4) {
          l.__e(n4, u4);
        }
      t4.base = t4.__P = null, n3.__c = void 0;
    }
    if (t4 = n3.__k)
      for (o4 = 0; o4 < t4.length; o4++)
        t4[o4] && N(t4[o4], u4, i4 || "function" != typeof n3.type);
    i4 || null == n3.__e || a(n3.__e), n3.__ = n3.__e = n3.__d = void 0;
  }
  function O(n3, l4, u4) {
    return this.constructor(n3, u4);
  }
  function P(u4, i4, t4) {
    var o4, r4, e3;
    l.__ && l.__(u4, i4), r4 = (o4 = "function" == typeof t4) ? null : t4 && t4.__k || i4.__k, e3 = [], j(i4, u4 = (!o4 && t4 || i4).__k = h(p, null, [u4]), r4 || f, f, void 0 !== i4.ownerSVGElement, !o4 && t4 ? [t4] : r4 ? null : i4.firstChild ? n.call(i4.childNodes) : null, e3, !o4 && t4 ? t4 : r4 ? r4.__e : i4.firstChild, o4), z(e3, u4);
  }
  function S(n3, l4) {
    P(n3, l4, S);
  }
  function q(l4, u4, i4) {
    var t4, o4, r4, f4 = s({}, l4.props);
    for (r4 in u4)
      "key" == r4 ? t4 = u4[r4] : "ref" == r4 ? o4 = u4[r4] : f4[r4] = u4[r4];
    return arguments.length > 2 && (f4.children = arguments.length > 3 ? n.call(arguments, 2) : i4), v(l4.type, f4, t4 || l4.key, o4 || l4.ref, null);
  }
  function B(n3, l4) {
    var u4 = { __c: l4 = "__cC" + r++, __: n3, Consumer: function(n4, l5) {
      return n4.children(l5);
    }, Provider: function(n4) {
      var u5, i4;
      return this.getChildContext || (u5 = [], (i4 = {})[l4] = this, this.getChildContext = function() {
        return i4;
      }, this.shouldComponentUpdate = function(n5) {
        this.props.value !== n5.value && u5.some(b);
      }, this.sub = function(n5) {
        u5.push(n5);
        var l5 = n5.componentWillUnmount;
        n5.componentWillUnmount = function() {
          u5.splice(u5.indexOf(n5), 1), l5 && l5.call(n5);
        };
      }), n4.children;
    } };
    return u4.Provider.__ = u4.Consumer.contextType = u4;
  }
  var n, l, u, i, t, o, r, f, e, c;
  var init_preact_module = __esm({
    "node_modules/preact/dist/preact.module.js"() {
      f = {};
      e = [];
      c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
      n = e.slice, l = { __e: function(n3, l4, u4, i4) {
        for (var t4, o4, r4; l4 = l4.__; )
          if ((t4 = l4.__c) && !t4.__)
            try {
              if ((o4 = t4.constructor) && null != o4.getDerivedStateFromError && (t4.setState(o4.getDerivedStateFromError(n3)), r4 = t4.__d), null != t4.componentDidCatch && (t4.componentDidCatch(n3, i4 || {}), r4 = t4.__d), r4)
                return t4.__E = t4;
            } catch (l5) {
              n3 = l5;
            }
        throw n3;
      } }, u = 0, i = function(n3) {
        return null != n3 && void 0 === n3.constructor;
      }, d.prototype.setState = function(n3, l4) {
        var u4;
        u4 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s({}, this.state), "function" == typeof n3 && (n3 = n3(s({}, u4), this.props)), n3 && s(u4, n3), null != n3 && this.__v && (l4 && this._sb.push(l4), b(this));
      }, d.prototype.forceUpdate = function(n3) {
        this.__v && (this.__e = true, n3 && this.__h.push(n3), b(this));
      }, d.prototype.render = p, t = [], g.__r = 0, r = 0;
    }
  });

  // node_modules/fast-deep-equal/es6/index.js
  var require_es6 = __commonJS({
    "node_modules/fast-deep-equal/es6/index.js"(exports, module) {
      "use strict";
      module.exports = function equal(a4, b4) {
        if (a4 === b4)
          return true;
        if (a4 && b4 && typeof a4 == "object" && typeof b4 == "object") {
          if (a4.constructor !== b4.constructor)
            return false;
          var length, i4, keys;
          if (Array.isArray(a4)) {
            length = a4.length;
            if (length != b4.length)
              return false;
            for (i4 = length; i4-- !== 0; )
              if (!equal(a4[i4], b4[i4]))
                return false;
            return true;
          }
          if (a4 instanceof Map && b4 instanceof Map) {
            if (a4.size !== b4.size)
              return false;
            for (i4 of a4.entries())
              if (!b4.has(i4[0]))
                return false;
            for (i4 of a4.entries())
              if (!equal(i4[1], b4.get(i4[0])))
                return false;
            return true;
          }
          if (a4 instanceof Set && b4 instanceof Set) {
            if (a4.size !== b4.size)
              return false;
            for (i4 of a4.entries())
              if (!b4.has(i4[0]))
                return false;
            return true;
          }
          if (ArrayBuffer.isView(a4) && ArrayBuffer.isView(b4)) {
            length = a4.length;
            if (length != b4.length)
              return false;
            for (i4 = length; i4-- !== 0; )
              if (a4[i4] !== b4[i4])
                return false;
            return true;
          }
          if (a4.constructor === RegExp)
            return a4.source === b4.source && a4.flags === b4.flags;
          if (a4.valueOf !== Object.prototype.valueOf)
            return a4.valueOf() === b4.valueOf();
          if (a4.toString !== Object.prototype.toString)
            return a4.toString() === b4.toString();
          keys = Object.keys(a4);
          length = keys.length;
          if (length !== Object.keys(b4).length)
            return false;
          for (i4 = length; i4-- !== 0; )
            if (!Object.prototype.hasOwnProperty.call(b4, keys[i4]))
              return false;
          for (i4 = length; i4-- !== 0; ) {
            var key = keys[i4];
            if (!equal(a4[key], b4[key]))
              return false;
          }
          return true;
        }
        return a4 !== a4 && b4 !== b4;
      };
    }
  });

  // node_modules/preact/hooks/dist/hooks.module.js
  function d2(t4, u4) {
    l.__h && l.__h(r2, t4, o2 || u4), o2 = 0;
    var i4 = r2.__H || (r2.__H = { __: [], __h: [] });
    return t4 >= i4.__.length && i4.__.push({ __V: c2 }), i4.__[t4];
  }
  function p2(n3) {
    return o2 = 1, y2(B2, n3);
  }
  function y2(n3, u4, i4) {
    var o4 = d2(t2++, 2);
    if (o4.t = n3, !o4.__c && (o4.__ = [i4 ? i4(u4) : B2(void 0, u4), function(n4) {
      var t4 = o4.__N ? o4.__N[0] : o4.__[0], r4 = o4.t(t4, n4);
      t4 !== r4 && (o4.__N = [r4, o4.__[1]], o4.__c.setState({}));
    }], o4.__c = r2, !r2.u)) {
      r2.u = true;
      var f4 = r2.shouldComponentUpdate;
      r2.shouldComponentUpdate = function(n4, t4, r4) {
        if (!o4.__c.__H)
          return true;
        var u5 = o4.__c.__H.__.filter(function(n5) {
          return n5.__c;
        });
        if (u5.every(function(n5) {
          return !n5.__N;
        }))
          return !f4 || f4.call(this, n4, t4, r4);
        var i5 = false;
        return u5.forEach(function(n5) {
          if (n5.__N) {
            var t5 = n5.__[0];
            n5.__ = n5.__N, n5.__N = void 0, t5 !== n5.__[0] && (i5 = true);
          }
        }), !(!i5 && o4.__c.props === n4) && (!f4 || f4.call(this, n4, t4, r4));
      };
    }
    return o4.__N || o4.__;
  }
  function h2(u4, i4) {
    var o4 = d2(t2++, 3);
    !l.__s && z2(o4.__H, i4) && (o4.__ = u4, o4.i = i4, r2.__H.__h.push(o4));
  }
  function s2(u4, i4) {
    var o4 = d2(t2++, 4);
    !l.__s && z2(o4.__H, i4) && (o4.__ = u4, o4.i = i4, r2.__h.push(o4));
  }
  function _2(n3) {
    return o2 = 5, F(function() {
      return { current: n3 };
    }, []);
  }
  function A2(n3, t4, r4) {
    o2 = 6, s2(function() {
      return "function" == typeof n3 ? (n3(t4()), function() {
        return n3(null);
      }) : n3 ? (n3.current = t4(), function() {
        return n3.current = null;
      }) : void 0;
    }, null == r4 ? r4 : r4.concat(n3));
  }
  function F(n3, r4) {
    var u4 = d2(t2++, 7);
    return z2(u4.__H, r4) ? (u4.__V = n3(), u4.i = r4, u4.__h = n3, u4.__V) : u4.__;
  }
  function T2(n3, t4) {
    return o2 = 8, F(function() {
      return n3;
    }, t4);
  }
  function q2(n3) {
    var u4 = r2.context[n3.__c], i4 = d2(t2++, 9);
    return i4.c = n3, u4 ? (null == i4.__ && (i4.__ = true, u4.sub(r2)), u4.props.value) : n3.__;
  }
  function x2(t4, r4) {
    l.useDebugValue && l.useDebugValue(r4 ? r4(t4) : t4);
  }
  function V() {
    var n3 = d2(t2++, 11);
    if (!n3.__) {
      for (var u4 = r2.__v; null !== u4 && !u4.__m && null !== u4.__; )
        u4 = u4.__;
      var i4 = u4.__m || (u4.__m = [0, 0]);
      n3.__ = "P" + i4[0] + "-" + i4[1]++;
    }
    return n3.__;
  }
  function b2() {
    for (var t4; t4 = f2.shift(); )
      if (t4.__P && t4.__H)
        try {
          t4.__H.__h.forEach(k2), t4.__H.__h.forEach(w2), t4.__H.__h = [];
        } catch (r4) {
          t4.__H.__h = [], l.__e(r4, t4.__v);
        }
  }
  function j2(n3) {
    var t4, r4 = function() {
      clearTimeout(u4), g2 && cancelAnimationFrame(t4), setTimeout(n3);
    }, u4 = setTimeout(r4, 100);
    g2 && (t4 = requestAnimationFrame(r4));
  }
  function k2(n3) {
    var t4 = r2, u4 = n3.__c;
    "function" == typeof u4 && (n3.__c = void 0, u4()), r2 = t4;
  }
  function w2(n3) {
    var t4 = r2;
    n3.__c = n3.__(), r2 = t4;
  }
  function z2(n3, t4) {
    return !n3 || n3.length !== t4.length || t4.some(function(t5, r4) {
      return t5 !== n3[r4];
    });
  }
  function B2(n3, t4) {
    return "function" == typeof t4 ? t4(n3) : t4;
  }
  var t2, r2, u2, i2, o2, f2, c2, e2, a2, v2, l2, m2, g2;
  var init_hooks_module = __esm({
    "node_modules/preact/hooks/dist/hooks.module.js"() {
      init_preact_module();
      o2 = 0;
      f2 = [];
      c2 = [];
      e2 = l.__b;
      a2 = l.__r;
      v2 = l.diffed;
      l2 = l.__c;
      m2 = l.unmount;
      l.__b = function(n3) {
        r2 = null, e2 && e2(n3);
      }, l.__r = function(n3) {
        a2 && a2(n3), t2 = 0;
        var i4 = (r2 = n3.__c).__H;
        i4 && (u2 === r2 ? (i4.__h = [], r2.__h = [], i4.__.forEach(function(n4) {
          n4.__N && (n4.__ = n4.__N), n4.__V = c2, n4.__N = n4.i = void 0;
        })) : (i4.__h.forEach(k2), i4.__h.forEach(w2), i4.__h = [])), u2 = r2;
      }, l.diffed = function(t4) {
        v2 && v2(t4);
        var o4 = t4.__c;
        o4 && o4.__H && (o4.__H.__h.length && (1 !== f2.push(o4) && i2 === l.requestAnimationFrame || ((i2 = l.requestAnimationFrame) || j2)(b2)), o4.__H.__.forEach(function(n3) {
          n3.i && (n3.__H = n3.i), n3.__V !== c2 && (n3.__ = n3.__V), n3.i = void 0, n3.__V = c2;
        })), u2 = r2 = null;
      }, l.__c = function(t4, r4) {
        r4.some(function(t5) {
          try {
            t5.__h.forEach(k2), t5.__h = t5.__h.filter(function(n3) {
              return !n3.__ || w2(n3);
            });
          } catch (u4) {
            r4.some(function(n3) {
              n3.__h && (n3.__h = []);
            }), r4 = [], l.__e(u4, t5.__v);
          }
        }), l2 && l2(t4, r4);
      }, l.unmount = function(t4) {
        m2 && m2(t4);
        var r4, u4 = t4.__c;
        u4 && u4.__H && (u4.__H.__.forEach(function(n3) {
          try {
            k2(n3);
          } catch (n4) {
            r4 = n4;
          }
        }), u4.__H = void 0, r4 && l.__e(r4, u4.__v));
      };
      g2 = "function" == typeof requestAnimationFrame;
    }
  });

  // node_modules/preact/compat/dist/compat.module.js
  function g3(n3, t4) {
    for (var e3 in t4)
      n3[e3] = t4[e3];
    return n3;
  }
  function C2(n3, t4) {
    for (var e3 in n3)
      if ("__source" !== e3 && !(e3 in t4))
        return true;
    for (var r4 in t4)
      if ("__source" !== r4 && n3[r4] !== t4[r4])
        return true;
    return false;
  }
  function E(n3, t4) {
    return n3 === t4 && (0 !== n3 || 1 / n3 == 1 / t4) || n3 != n3 && t4 != t4;
  }
  function w3(n3) {
    this.props = n3;
  }
  function R(n3, e3) {
    function r4(n4) {
      var t4 = this.props.ref, r5 = t4 == n4.ref;
      return !r5 && t4 && (t4.call ? t4(null) : t4.current = null), e3 ? !e3(this.props, n4) || !r5 : C2(this.props, n4);
    }
    function u4(e4) {
      return this.shouldComponentUpdate = r4, h(n3, e4);
    }
    return u4.displayName = "Memo(" + (n3.displayName || n3.name) + ")", u4.prototype.isReactComponent = true, u4.__f = true, u4;
  }
  function k3(n3) {
    function t4(t5) {
      var e3 = g3({}, t5);
      return delete e3.ref, n3(e3, t5.ref || null);
    }
    return t4.$$typeof = N2, t4.render = t4, t4.prototype.isReactComponent = t4.__f = true, t4.displayName = "ForwardRef(" + (n3.displayName || n3.name) + ")", t4;
  }
  function L2(n3, t4, e3) {
    return n3 && (n3.__c && n3.__c.__H && (n3.__c.__H.__.forEach(function(n4) {
      "function" == typeof n4.__c && n4.__c();
    }), n3.__c.__H = null), null != (n3 = g3({}, n3)).__c && (n3.__c.__P === e3 && (n3.__c.__P = t4), n3.__c = null), n3.__k = n3.__k && n3.__k.map(function(n4) {
      return L2(n4, t4, e3);
    })), n3;
  }
  function U(n3, t4, e3) {
    return n3 && (n3.__v = null, n3.__k = n3.__k && n3.__k.map(function(n4) {
      return U(n4, t4, e3);
    }), n3.__c && n3.__c.__P === t4 && (n3.__e && e3.insertBefore(n3.__e, n3.__d), n3.__c.__e = true, n3.__c.__P = e3)), n3;
  }
  function D() {
    this.__u = 0, this.t = null, this.__b = null;
  }
  function F2(n3) {
    var t4 = n3.__.__c;
    return t4 && t4.__a && t4.__a(n3);
  }
  function M2(n3) {
    var e3, r4, u4;
    function o4(o5) {
      if (e3 || (e3 = n3()).then(function(n4) {
        r4 = n4.default || n4;
      }, function(n4) {
        u4 = n4;
      }), u4)
        throw u4;
      if (!r4)
        throw e3;
      return h(r4, o5);
    }
    return o4.displayName = "Lazy", o4.__f = true, o4;
  }
  function V2() {
    this.u = null, this.o = null;
  }
  function P2(n3) {
    return this.getChildContext = function() {
      return n3.context;
    }, n3.children;
  }
  function $2(n3) {
    var e3 = this, r4 = n3.i;
    e3.componentWillUnmount = function() {
      P(null, e3.l), e3.l = null, e3.i = null;
    }, e3.i && e3.i !== r4 && e3.componentWillUnmount(), n3.__v ? (e3.l || (e3.i = r4, e3.l = { nodeType: 1, parentNode: r4, childNodes: [], appendChild: function(n4) {
      this.childNodes.push(n4), e3.i.appendChild(n4);
    }, insertBefore: function(n4, t4) {
      this.childNodes.push(n4), e3.i.appendChild(n4);
    }, removeChild: function(n4) {
      this.childNodes.splice(this.childNodes.indexOf(n4) >>> 1, 1), e3.i.removeChild(n4);
    } }), P(h(P2, { context: e3.context }, n3.__v), e3.l)) : e3.l && e3.componentWillUnmount();
  }
  function j3(n3, e3) {
    var r4 = h($2, { __v: n3, i: e3 });
    return r4.containerInfo = e3, r4;
  }
  function Y(n3, t4, e3) {
    return null == t4.__k && (t4.textContent = ""), P(n3, t4), "function" == typeof e3 && e3(), n3 ? n3.__c : null;
  }
  function q3(n3, t4, e3) {
    return S(n3, t4), "function" == typeof e3 && e3(), n3 ? n3.__c : null;
  }
  function J() {
  }
  function K() {
    return this.cancelBubble;
  }
  function Q() {
    return this.defaultPrevented;
  }
  function on(n3) {
    return h.bind(null, n3);
  }
  function ln(n3) {
    return !!n3 && n3.$$typeof === z3;
  }
  function cn(n3) {
    return ln(n3) ? q.apply(null, arguments) : n3;
  }
  function fn(n3) {
    return !!n3.__k && (P(null, n3), true);
  }
  function an(n3) {
    return n3 && (n3.base || 1 === n3.nodeType && n3) || null;
  }
  function dn(n3) {
    n3();
  }
  function pn(n3) {
    return n3;
  }
  function mn() {
    return [false, dn];
  }
  function _n(n3, t4) {
    var e3 = t4(), r4 = p2({ h: { __: e3, v: t4 } }), u4 = r4[0].h, o4 = r4[1];
    return s2(function() {
      u4.__ = e3, u4.v = t4, E(u4.__, t4()) || o4({ h: u4 });
    }, [n3, e3, t4]), h2(function() {
      return E(u4.__, u4.v()) || o4({ h: u4 }), n3(function() {
        E(u4.__, u4.v()) || o4({ h: u4 });
      });
    }, [n3]), e3;
  }
  var x3, N2, A3, O2, T3, I2, W, z3, B3, H2, Z, G, X, nn, tn, en, rn, sn, hn, vn, yn, bn;
  var init_compat_module = __esm({
    "node_modules/preact/compat/dist/compat.module.js"() {
      init_preact_module();
      init_preact_module();
      init_hooks_module();
      init_hooks_module();
      (w3.prototype = new d()).isPureReactComponent = true, w3.prototype.shouldComponentUpdate = function(n3, t4) {
        return C2(this.props, n3) || C2(this.state, t4);
      };
      x3 = l.__b;
      l.__b = function(n3) {
        n3.type && n3.type.__f && n3.ref && (n3.props.ref = n3.ref, n3.ref = null), x3 && x3(n3);
      };
      N2 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
      A3 = function(n3, t4) {
        return null == n3 ? null : x(x(n3).map(t4));
      };
      O2 = { map: A3, forEach: A3, count: function(n3) {
        return n3 ? x(n3).length : 0;
      }, only: function(n3) {
        var t4 = x(n3);
        if (1 !== t4.length)
          throw "Children.only";
        return t4[0];
      }, toArray: x };
      T3 = l.__e;
      l.__e = function(n3, t4, e3, r4) {
        if (n3.then) {
          for (var u4, o4 = t4; o4 = o4.__; )
            if ((u4 = o4.__c) && u4.__c)
              return null == t4.__e && (t4.__e = e3.__e, t4.__k = e3.__k), u4.__c(n3, t4);
        }
        T3(n3, t4, e3, r4);
      };
      I2 = l.unmount;
      l.unmount = function(n3) {
        var t4 = n3.__c;
        t4 && t4.__R && t4.__R(), t4 && true === n3.__h && (n3.type = null), I2 && I2(n3);
      }, (D.prototype = new d()).__c = function(n3, t4) {
        var e3 = t4.__c, r4 = this;
        null == r4.t && (r4.t = []), r4.t.push(e3);
        var u4 = F2(r4.__v), o4 = false, i4 = function() {
          o4 || (o4 = true, e3.__R = null, u4 ? u4(l4) : l4());
        };
        e3.__R = i4;
        var l4 = function() {
          if (!--r4.__u) {
            if (r4.state.__a) {
              var n4 = r4.state.__a;
              r4.__v.__k[0] = U(n4, n4.__c.__P, n4.__c.__O);
            }
            var t5;
            for (r4.setState({ __a: r4.__b = null }); t5 = r4.t.pop(); )
              t5.forceUpdate();
          }
        }, c4 = true === t4.__h;
        r4.__u++ || c4 || r4.setState({ __a: r4.__b = r4.__v.__k[0] }), n3.then(i4, i4);
      }, D.prototype.componentWillUnmount = function() {
        this.t = [];
      }, D.prototype.render = function(n3, e3) {
        if (this.__b) {
          if (this.__v.__k) {
            var r4 = document.createElement("div"), o4 = this.__v.__k[0].__c;
            this.__v.__k[0] = L2(this.__b, r4, o4.__O = o4.__P);
          }
          this.__b = null;
        }
        var i4 = e3.__a && h(p, null, n3.fallback);
        return i4 && (i4.__h = null), [h(p, null, e3.__a ? null : n3.children), i4];
      };
      W = function(n3, t4, e3) {
        if (++e3[1] === e3[0] && n3.o.delete(t4), n3.props.revealOrder && ("t" !== n3.props.revealOrder[0] || !n3.o.size))
          for (e3 = n3.u; e3; ) {
            for (; e3.length > 3; )
              e3.pop()();
            if (e3[1] < e3[0])
              break;
            n3.u = e3 = e3[2];
          }
      };
      (V2.prototype = new d()).__a = function(n3) {
        var t4 = this, e3 = F2(t4.__v), r4 = t4.o.get(n3);
        return r4[0]++, function(u4) {
          var o4 = function() {
            t4.props.revealOrder ? (r4.push(u4), W(t4, n3, r4)) : u4();
          };
          e3 ? e3(o4) : o4();
        };
      }, V2.prototype.render = function(n3) {
        this.u = null, this.o = /* @__PURE__ */ new Map();
        var t4 = x(n3.children);
        n3.revealOrder && "b" === n3.revealOrder[0] && t4.reverse();
        for (var e3 = t4.length; e3--; )
          this.o.set(t4[e3], this.u = [1, 0, this.u]);
        return n3.children;
      }, V2.prototype.componentDidUpdate = V2.prototype.componentDidMount = function() {
        var n3 = this;
        this.o.forEach(function(t4, e3) {
          W(n3, e3, t4);
        });
      };
      z3 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
      B3 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
      H2 = "undefined" != typeof document;
      Z = function(n3) {
        return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/i : /fil|che|ra/i).test(n3);
      };
      d.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t4) {
        Object.defineProperty(d.prototype, t4, { configurable: true, get: function() {
          return this["UNSAFE_" + t4];
        }, set: function(n3) {
          Object.defineProperty(this, t4, { configurable: true, writable: true, value: n3 });
        } });
      });
      G = l.event;
      l.event = function(n3) {
        return G && (n3 = G(n3)), n3.persist = J, n3.isPropagationStopped = K, n3.isDefaultPrevented = Q, n3.nativeEvent = n3;
      };
      nn = { configurable: true, get: function() {
        return this.class;
      } };
      tn = l.vnode;
      l.vnode = function(n3) {
        var t4 = n3.type, e3 = n3.props, u4 = e3;
        if ("string" == typeof t4) {
          var o4 = -1 === t4.indexOf("-");
          for (var i4 in u4 = {}, e3) {
            var l4 = e3[i4];
            H2 && "children" === i4 && "noscript" === t4 || "value" === i4 && "defaultValue" in e3 && null == l4 || ("defaultValue" === i4 && "value" in e3 && null == e3.value ? i4 = "value" : "download" === i4 && true === l4 ? l4 = "" : /ondoubleclick/i.test(i4) ? i4 = "ondblclick" : /^onchange(textarea|input)/i.test(i4 + t4) && !Z(e3.type) ? i4 = "oninput" : /^onfocus$/i.test(i4) ? i4 = "onfocusin" : /^onblur$/i.test(i4) ? i4 = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(i4) ? i4 = i4.toLowerCase() : o4 && B3.test(i4) ? i4 = i4.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : null === l4 && (l4 = void 0), /^oninput$/i.test(i4) && (i4 = i4.toLowerCase(), u4[i4] && (i4 = "oninputCapture")), u4[i4] = l4);
          }
          "select" == t4 && u4.multiple && Array.isArray(u4.value) && (u4.value = x(e3.children).forEach(function(n4) {
            n4.props.selected = -1 != u4.value.indexOf(n4.props.value);
          })), "select" == t4 && null != u4.defaultValue && (u4.value = x(e3.children).forEach(function(n4) {
            n4.props.selected = u4.multiple ? -1 != u4.defaultValue.indexOf(n4.props.value) : u4.defaultValue == n4.props.value;
          })), n3.props = u4, e3.class != e3.className && (nn.enumerable = "className" in e3, null != e3.className && (u4.class = e3.className), Object.defineProperty(u4, "className", nn));
        }
        n3.$$typeof = z3, tn && tn(n3);
      };
      en = l.__r;
      l.__r = function(n3) {
        en && en(n3), X = n3.__c;
      };
      rn = { ReactCurrentDispatcher: { current: { readContext: function(n3) {
        return X.__n[n3.__c].props.value;
      } } } };
      sn = function(n3, t4) {
        return n3(t4);
      };
      hn = function(n3, t4) {
        return n3(t4);
      };
      vn = p;
      yn = s2;
      bn = { useState: p2, useId: V, useReducer: y2, useEffect: h2, useLayoutEffect: s2, useInsertionEffect: yn, useTransition: mn, useDeferredValue: pn, useSyncExternalStore: _n, startTransition: dn, useRef: _2, useImperativeHandle: A2, useMemo: F, useCallback: T2, useContext: q2, useDebugValue: x2, version: "17.0.2", Children: O2, render: Y, hydrate: q3, unmountComponentAtNode: fn, createPortal: j3, createElement: h, createContext: B, createFactory: on, cloneElement: cn, createRef: y, Fragment: p, isValidElement: ln, findDOMNode: an, Component: d, PureComponent: w3, memo: R, forwardRef: k3, flushSync: hn, unstable_batchedUpdates: sn, StrictMode: vn, Suspense: D, SuspenseList: V2, lazy: M2, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: rn };
    }
  });

  // node_modules/immer/dist/immer.esm.mjs
  function n2(n3) {
    for (var r4 = arguments.length, t4 = Array(r4 > 1 ? r4 - 1 : 0), e3 = 1; e3 < r4; e3++)
      t4[e3 - 1] = arguments[e3];
    if (true) {
      var i4 = Y2[n3], o4 = i4 ? "function" == typeof i4 ? i4.apply(null, t4) : i4 : "unknown error nr: " + n3;
      throw Error("[Immer] " + o4);
    }
    throw Error("[Immer] minified error nr: " + n3 + (t4.length ? " " + t4.map(function(n4) {
      return "'" + n4 + "'";
    }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
  }
  function r3(n3) {
    return !!n3 && !!n3[Q2];
  }
  function t3(n3) {
    var r4;
    return !!n3 && (function(n4) {
      if (!n4 || "object" != typeof n4)
        return false;
      var r5 = Object.getPrototypeOf(n4);
      if (null === r5)
        return true;
      var t4 = Object.hasOwnProperty.call(r5, "constructor") && r5.constructor;
      return t4 === Object || "function" == typeof t4 && Function.toString.call(t4) === Z2;
    }(n3) || Array.isArray(n3) || !!n3[L3] || !!(null === (r4 = n3.constructor) || void 0 === r4 ? void 0 : r4[L3]) || s3(n3) || v3(n3));
  }
  function i3(n3, r4, t4) {
    void 0 === t4 && (t4 = false), 0 === o3(n3) ? (t4 ? Object.keys : nn2)(n3).forEach(function(e3) {
      t4 && "symbol" == typeof e3 || r4(e3, n3[e3], n3);
    }) : n3.forEach(function(t5, e3) {
      return r4(e3, t5, n3);
    });
  }
  function o3(n3) {
    var r4 = n3[Q2];
    return r4 ? r4.i > 3 ? r4.i - 4 : r4.i : Array.isArray(n3) ? 1 : s3(n3) ? 2 : v3(n3) ? 3 : 0;
  }
  function u3(n3, r4) {
    return 2 === o3(n3) ? n3.has(r4) : Object.prototype.hasOwnProperty.call(n3, r4);
  }
  function a3(n3, r4) {
    return 2 === o3(n3) ? n3.get(r4) : n3[r4];
  }
  function f3(n3, r4, t4) {
    var e3 = o3(n3);
    2 === e3 ? n3.set(r4, t4) : 3 === e3 ? n3.add(t4) : n3[r4] = t4;
  }
  function c3(n3, r4) {
    return n3 === r4 ? 0 !== n3 || 1 / n3 == 1 / r4 : n3 != n3 && r4 != r4;
  }
  function s3(n3) {
    return X2 && n3 instanceof Map;
  }
  function v3(n3) {
    return q4 && n3 instanceof Set;
  }
  function p3(n3) {
    return n3.o || n3.t;
  }
  function l3(n3) {
    if (Array.isArray(n3))
      return Array.prototype.slice.call(n3);
    var r4 = rn2(n3);
    delete r4[Q2];
    for (var t4 = nn2(r4), e3 = 0; e3 < t4.length; e3++) {
      var i4 = t4[e3], o4 = r4[i4];
      false === o4.writable && (o4.writable = true, o4.configurable = true), (o4.get || o4.set) && (r4[i4] = { configurable: true, writable: true, enumerable: o4.enumerable, value: n3[i4] });
    }
    return Object.create(Object.getPrototypeOf(n3), r4);
  }
  function d3(n3, e3) {
    return void 0 === e3 && (e3 = false), y3(n3) || r3(n3) || !t3(n3) || (o3(n3) > 1 && (n3.set = n3.add = n3.clear = n3.delete = h3), Object.freeze(n3), e3 && i3(n3, function(n4, r4) {
      return d3(r4, true);
    }, true)), n3;
  }
  function h3() {
    n2(2);
  }
  function y3(n3) {
    return null == n3 || "object" != typeof n3 || Object.isFrozen(n3);
  }
  function b3(r4) {
    var t4 = tn2[r4];
    return t4 || n2(18, r4), t4;
  }
  function m3(n3, r4) {
    tn2[n3] || (tn2[n3] = r4);
  }
  function _3() {
    return U2 || n2(0), U2;
  }
  function j4(n3, r4) {
    r4 && (b3("Patches"), n3.u = [], n3.s = [], n3.v = r4);
  }
  function g4(n3) {
    O3(n3), n3.p.forEach(S2), n3.p = null;
  }
  function O3(n3) {
    n3 === U2 && (U2 = n3.l);
  }
  function w4(n3) {
    return U2 = { p: [], l: U2, h: n3, m: true, _: 0 };
  }
  function S2(n3) {
    var r4 = n3[Q2];
    0 === r4.i || 1 === r4.i ? r4.j() : r4.g = true;
  }
  function P3(r4, e3) {
    e3._ = e3.p.length;
    var i4 = e3.p[0], o4 = void 0 !== r4 && r4 !== i4;
    return e3.h.O || b3("ES5").S(e3, r4, o4), o4 ? (i4[Q2].P && (g4(e3), n2(4)), t3(r4) && (r4 = M3(e3, r4), e3.l || x4(e3, r4)), e3.u && b3("Patches").M(i4[Q2].t, r4, e3.u, e3.s)) : r4 = M3(e3, i4, []), g4(e3), e3.u && e3.v(e3.u, e3.s), r4 !== H3 ? r4 : void 0;
  }
  function M3(n3, r4, t4) {
    if (y3(r4))
      return r4;
    var e3 = r4[Q2];
    if (!e3)
      return i3(r4, function(i4, o5) {
        return A4(n3, e3, r4, i4, o5, t4);
      }, true), r4;
    if (e3.A !== n3)
      return r4;
    if (!e3.P)
      return x4(n3, e3.t, true), e3.t;
    if (!e3.I) {
      e3.I = true, e3.A._--;
      var o4 = 4 === e3.i || 5 === e3.i ? e3.o = l3(e3.k) : e3.o, u4 = o4, a4 = false;
      3 === e3.i && (u4 = new Set(o4), o4.clear(), a4 = true), i3(u4, function(r5, i4) {
        return A4(n3, e3, o4, r5, i4, t4, a4);
      }), x4(n3, o4, false), t4 && n3.u && b3("Patches").N(e3, t4, n3.u, n3.s);
    }
    return e3.o;
  }
  function A4(e3, i4, o4, a4, c4, s4, v4) {
    if (c4 === o4 && n2(5), r3(c4)) {
      var p4 = M3(e3, c4, s4 && i4 && 3 !== i4.i && !u3(i4.R, a4) ? s4.concat(a4) : void 0);
      if (f3(o4, a4, p4), !r3(p4))
        return;
      e3.m = false;
    } else
      v4 && o4.add(c4);
    if (t3(c4) && !y3(c4)) {
      if (!e3.h.D && e3._ < 1)
        return;
      M3(e3, c4), i4 && i4.A.l || x4(e3, c4);
    }
  }
  function x4(n3, r4, t4) {
    void 0 === t4 && (t4 = false), !n3.l && n3.h.D && n3.m && d3(r4, t4);
  }
  function z4(n3, r4) {
    var t4 = n3[Q2];
    return (t4 ? p3(t4) : n3)[r4];
  }
  function I3(n3, r4) {
    if (r4 in n3)
      for (var t4 = Object.getPrototypeOf(n3); t4; ) {
        var e3 = Object.getOwnPropertyDescriptor(t4, r4);
        if (e3)
          return e3;
        t4 = Object.getPrototypeOf(t4);
      }
  }
  function k4(n3) {
    n3.P || (n3.P = true, n3.l && k4(n3.l));
  }
  function E2(n3) {
    n3.o || (n3.o = l3(n3.t));
  }
  function N3(n3, r4, t4) {
    var e3 = s3(r4) ? b3("MapSet").F(r4, t4) : v3(r4) ? b3("MapSet").T(r4, t4) : n3.O ? function(n4, r5) {
      var t5 = Array.isArray(n4), e4 = { i: t5 ? 1 : 0, A: r5 ? r5.A : _3(), P: false, I: false, R: {}, l: r5, t: n4, k: null, o: null, j: null, C: false }, i4 = e4, o4 = en2;
      t5 && (i4 = [e4], o4 = on2);
      var u4 = Proxy.revocable(i4, o4), a4 = u4.revoke, f4 = u4.proxy;
      return e4.k = f4, e4.j = a4, f4;
    }(r4, t4) : b3("ES5").J(r4, t4);
    return (t4 ? t4.A : _3()).p.push(e3), e3;
  }
  function R2(e3) {
    return r3(e3) || n2(22, e3), function n3(r4) {
      if (!t3(r4))
        return r4;
      var e4, u4 = r4[Q2], c4 = o3(r4);
      if (u4) {
        if (!u4.P && (u4.i < 4 || !b3("ES5").K(u4)))
          return u4.t;
        u4.I = true, e4 = D2(r4, c4), u4.I = false;
      } else
        e4 = D2(r4, c4);
      return i3(e4, function(r5, t4) {
        u4 && a3(u4.t, r5) === t4 || f3(e4, r5, n3(t4));
      }), 3 === c4 ? new Set(e4) : e4;
    }(e3);
  }
  function D2(n3, r4) {
    switch (r4) {
      case 2:
        return new Map(n3);
      case 3:
        return Array.from(n3);
    }
    return l3(n3);
  }
  function T4() {
    function e3(n3) {
      if (!t3(n3))
        return n3;
      if (Array.isArray(n3))
        return n3.map(e3);
      if (s3(n3))
        return new Map(Array.from(n3.entries()).map(function(n4) {
          return [n4[0], e3(n4[1])];
        }));
      if (v3(n3))
        return new Set(Array.from(n3).map(e3));
      var r4 = Object.create(Object.getPrototypeOf(n3));
      for (var i4 in n3)
        r4[i4] = e3(n3[i4]);
      return u3(n3, L3) && (r4[L3] = n3[L3]), r4;
    }
    function f4(n3) {
      return r3(n3) ? e3(n3) : n3;
    }
    var c4 = "add";
    m3("Patches", { $: function(r4, t4) {
      return t4.forEach(function(t5) {
        for (var i4 = t5.path, u4 = t5.op, f5 = r4, s4 = 0; s4 < i4.length - 1; s4++) {
          var v4 = o3(f5), p4 = i4[s4];
          "string" != typeof p4 && "number" != typeof p4 && (p4 = "" + p4), 0 !== v4 && 1 !== v4 || "__proto__" !== p4 && "constructor" !== p4 || n2(24), "function" == typeof f5 && "prototype" === p4 && n2(24), "object" != typeof (f5 = a3(f5, p4)) && n2(15, i4.join("/"));
        }
        var l4 = o3(f5), d4 = e3(t5.value), h4 = i4[i4.length - 1];
        switch (u4) {
          case "replace":
            switch (l4) {
              case 2:
                return f5.set(h4, d4);
              case 3:
                n2(16);
              default:
                return f5[h4] = d4;
            }
          case c4:
            switch (l4) {
              case 1:
                return "-" === h4 ? f5.push(d4) : f5.splice(h4, 0, d4);
              case 2:
                return f5.set(h4, d4);
              case 3:
                return f5.add(d4);
              default:
                return f5[h4] = d4;
            }
          case "remove":
            switch (l4) {
              case 1:
                return f5.splice(h4, 1);
              case 2:
                return f5.delete(h4);
              case 3:
                return f5.delete(t5.value);
              default:
                return delete f5[h4];
            }
          default:
            n2(17, u4);
        }
      }), r4;
    }, N: function(n3, r4, t4, e4) {
      switch (n3.i) {
        case 0:
        case 4:
        case 2:
          return function(n4, r5, t5, e5) {
            var o4 = n4.t, s4 = n4.o;
            i3(n4.R, function(n5, i4) {
              var v4 = a3(o4, n5), p4 = a3(s4, n5), l4 = i4 ? u3(o4, n5) ? "replace" : c4 : "remove";
              if (v4 !== p4 || "replace" !== l4) {
                var d4 = r5.concat(n5);
                t5.push("remove" === l4 ? { op: l4, path: d4 } : { op: l4, path: d4, value: p4 }), e5.push(l4 === c4 ? { op: "remove", path: d4 } : "remove" === l4 ? { op: c4, path: d4, value: f4(v4) } : { op: "replace", path: d4, value: f4(v4) });
              }
            });
          }(n3, r4, t4, e4);
        case 5:
        case 1:
          return function(n4, r5, t5, e5) {
            var i4 = n4.t, o4 = n4.R, u4 = n4.o;
            if (u4.length < i4.length) {
              var a4 = [u4, i4];
              i4 = a4[0], u4 = a4[1];
              var s4 = [e5, t5];
              t5 = s4[0], e5 = s4[1];
            }
            for (var v4 = 0; v4 < i4.length; v4++)
              if (o4[v4] && u4[v4] !== i4[v4]) {
                var p4 = r5.concat([v4]);
                t5.push({ op: "replace", path: p4, value: f4(u4[v4]) }), e5.push({ op: "replace", path: p4, value: f4(i4[v4]) });
              }
            for (var l4 = i4.length; l4 < u4.length; l4++) {
              var d4 = r5.concat([l4]);
              t5.push({ op: c4, path: d4, value: f4(u4[l4]) });
            }
            i4.length < u4.length && e5.push({ op: "replace", path: r5.concat(["length"]), value: i4.length });
          }(n3, r4, t4, e4);
        case 3:
          return function(n4, r5, t5, e5) {
            var i4 = n4.t, o4 = n4.o, u4 = 0;
            i4.forEach(function(n5) {
              if (!o4.has(n5)) {
                var i5 = r5.concat([u4]);
                t5.push({ op: "remove", path: i5, value: n5 }), e5.unshift({ op: c4, path: i5, value: n5 });
              }
              u4++;
            }), u4 = 0, o4.forEach(function(n5) {
              if (!i4.has(n5)) {
                var o5 = r5.concat([u4]);
                t5.push({ op: c4, path: o5, value: n5 }), e5.unshift({ op: "remove", path: o5, value: n5 });
              }
              u4++;
            });
          }(n3, r4, t4, e4);
      }
    }, M: function(n3, r4, t4, e4) {
      t4.push({ op: "replace", path: [], value: r4 === H3 ? void 0 : r4 }), e4.push({ op: "replace", path: [], value: n3 });
    } });
  }
  var G2, U2, W2, X2, q4, B4, H3, L3, Q2, Y2, Z2, nn2, rn2, tn2, en2, on2, un, an2, fn2, cn2, sn2, vn2, pn2, ln2, dn2;
  var init_immer_esm = __esm({
    "node_modules/immer/dist/immer.esm.mjs"() {
      W2 = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x");
      X2 = "undefined" != typeof Map;
      q4 = "undefined" != typeof Set;
      B4 = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect;
      H3 = W2 ? Symbol.for("immer-nothing") : ((G2 = {})["immer-nothing"] = true, G2);
      L3 = W2 ? Symbol.for("immer-draftable") : "__$immer_draftable";
      Q2 = W2 ? Symbol.for("immer-state") : "__$immer_state";
      Y2 = { 0: "Illegal state", 1: "Immer drafts cannot have computed properties", 2: "This object has been frozen and should not be mutated", 3: function(n3) {
        return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + n3;
      }, 4: "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.", 5: "Immer forbids circular references", 6: "The first or second argument to `produce` must be a function", 7: "The third argument to `produce` must be a function or undefined", 8: "First argument to `createDraft` must be a plain object, an array, or an immerable object", 9: "First argument to `finishDraft` must be a draft returned by `createDraft`", 10: "The given draft is already finalized", 11: "Object.defineProperty() cannot be used on an Immer draft", 12: "Object.setPrototypeOf() cannot be used on an Immer draft", 13: "Immer only supports deleting array indices", 14: "Immer only supports setting array indices and the 'length' property", 15: function(n3) {
        return "Cannot apply patch, path doesn't resolve: " + n3;
      }, 16: 'Sets cannot have "replace" patches.', 17: function(n3) {
        return "Unsupported patch operation: " + n3;
      }, 18: function(n3) {
        return "The plugin for '" + n3 + "' has not been loaded into Immer. To enable the plugin, import and call `enable" + n3 + "()` when initializing your application.";
      }, 20: "Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available", 21: function(n3) {
        return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '" + n3 + "'";
      }, 22: function(n3) {
        return "'current' expects a draft, got: " + n3;
      }, 23: function(n3) {
        return "'original' expects a draft, got: " + n3;
      }, 24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed" };
      Z2 = "" + Object.prototype.constructor;
      nn2 = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function(n3) {
        return Object.getOwnPropertyNames(n3).concat(Object.getOwnPropertySymbols(n3));
      } : Object.getOwnPropertyNames;
      rn2 = Object.getOwnPropertyDescriptors || function(n3) {
        var r4 = {};
        return nn2(n3).forEach(function(t4) {
          r4[t4] = Object.getOwnPropertyDescriptor(n3, t4);
        }), r4;
      };
      tn2 = {};
      en2 = { get: function(n3, r4) {
        if (r4 === Q2)
          return n3;
        var e3 = p3(n3);
        if (!u3(e3, r4))
          return function(n4, r5, t4) {
            var e4, i5 = I3(r5, t4);
            return i5 ? "value" in i5 ? i5.value : null === (e4 = i5.get) || void 0 === e4 ? void 0 : e4.call(n4.k) : void 0;
          }(n3, e3, r4);
        var i4 = e3[r4];
        return n3.I || !t3(i4) ? i4 : i4 === z4(n3.t, r4) ? (E2(n3), n3.o[r4] = N3(n3.A.h, i4, n3)) : i4;
      }, has: function(n3, r4) {
        return r4 in p3(n3);
      }, ownKeys: function(n3) {
        return Reflect.ownKeys(p3(n3));
      }, set: function(n3, r4, t4) {
        var e3 = I3(p3(n3), r4);
        if (null == e3 ? void 0 : e3.set)
          return e3.set.call(n3.k, t4), true;
        if (!n3.P) {
          var i4 = z4(p3(n3), r4), o4 = null == i4 ? void 0 : i4[Q2];
          if (o4 && o4.t === t4)
            return n3.o[r4] = t4, n3.R[r4] = false, true;
          if (c3(t4, i4) && (void 0 !== t4 || u3(n3.t, r4)))
            return true;
          E2(n3), k4(n3);
        }
        return n3.o[r4] === t4 && (void 0 !== t4 || r4 in n3.o) || Number.isNaN(t4) && Number.isNaN(n3.o[r4]) || (n3.o[r4] = t4, n3.R[r4] = true), true;
      }, deleteProperty: function(n3, r4) {
        return void 0 !== z4(n3.t, r4) || r4 in n3.t ? (n3.R[r4] = false, E2(n3), k4(n3)) : delete n3.R[r4], n3.o && delete n3.o[r4], true;
      }, getOwnPropertyDescriptor: function(n3, r4) {
        var t4 = p3(n3), e3 = Reflect.getOwnPropertyDescriptor(t4, r4);
        return e3 ? { writable: true, configurable: 1 !== n3.i || "length" !== r4, enumerable: e3.enumerable, value: t4[r4] } : e3;
      }, defineProperty: function() {
        n2(11);
      }, getPrototypeOf: function(n3) {
        return Object.getPrototypeOf(n3.t);
      }, setPrototypeOf: function() {
        n2(12);
      } };
      on2 = {};
      i3(en2, function(n3, r4) {
        on2[n3] = function() {
          return arguments[0] = arguments[0][0], r4.apply(this, arguments);
        };
      }), on2.deleteProperty = function(r4, t4) {
        return isNaN(parseInt(t4)) && n2(13), on2.set.call(this, r4, t4, void 0);
      }, on2.set = function(r4, t4, e3) {
        return "length" !== t4 && isNaN(parseInt(t4)) && n2(14), en2.set.call(this, r4[0], t4, e3, r4[0]);
      };
      un = function() {
        function e3(r4) {
          var e4 = this;
          this.O = B4, this.D = true, this.produce = function(r5, i5, o4) {
            if ("function" == typeof r5 && "function" != typeof i5) {
              var u4 = i5;
              i5 = r5;
              var a4 = e4;
              return function(n3) {
                var r6 = this;
                void 0 === n3 && (n3 = u4);
                for (var t4 = arguments.length, e5 = Array(t4 > 1 ? t4 - 1 : 0), o5 = 1; o5 < t4; o5++)
                  e5[o5 - 1] = arguments[o5];
                return a4.produce(n3, function(n4) {
                  var t5;
                  return (t5 = i5).call.apply(t5, [r6, n4].concat(e5));
                });
              };
            }
            var f4;
            if ("function" != typeof i5 && n2(6), void 0 !== o4 && "function" != typeof o4 && n2(7), t3(r5)) {
              var c4 = w4(e4), s4 = N3(e4, r5, void 0), v4 = true;
              try {
                f4 = i5(s4), v4 = false;
              } finally {
                v4 ? g4(c4) : O3(c4);
              }
              return "undefined" != typeof Promise && f4 instanceof Promise ? f4.then(function(n3) {
                return j4(c4, o4), P3(n3, c4);
              }, function(n3) {
                throw g4(c4), n3;
              }) : (j4(c4, o4), P3(f4, c4));
            }
            if (!r5 || "object" != typeof r5) {
              if (void 0 === (f4 = i5(r5)) && (f4 = r5), f4 === H3 && (f4 = void 0), e4.D && d3(f4, true), o4) {
                var p4 = [], l4 = [];
                b3("Patches").M(r5, f4, p4, l4), o4(p4, l4);
              }
              return f4;
            }
            n2(21, r5);
          }, this.produceWithPatches = function(n3, r5) {
            if ("function" == typeof n3)
              return function(r6) {
                for (var t5 = arguments.length, i6 = Array(t5 > 1 ? t5 - 1 : 0), o5 = 1; o5 < t5; o5++)
                  i6[o5 - 1] = arguments[o5];
                return e4.produceWithPatches(r6, function(r7) {
                  return n3.apply(void 0, [r7].concat(i6));
                });
              };
            var t4, i5, o4 = e4.produce(n3, r5, function(n4, r6) {
              t4 = n4, i5 = r6;
            });
            return "undefined" != typeof Promise && o4 instanceof Promise ? o4.then(function(n4) {
              return [n4, t4, i5];
            }) : [o4, t4, i5];
          }, "boolean" == typeof (null == r4 ? void 0 : r4.useProxies) && this.setUseProxies(r4.useProxies), "boolean" == typeof (null == r4 ? void 0 : r4.autoFreeze) && this.setAutoFreeze(r4.autoFreeze);
        }
        var i4 = e3.prototype;
        return i4.createDraft = function(e4) {
          t3(e4) || n2(8), r3(e4) && (e4 = R2(e4));
          var i5 = w4(this), o4 = N3(this, e4, void 0);
          return o4[Q2].C = true, O3(i5), o4;
        }, i4.finishDraft = function(r4, t4) {
          var e4 = r4 && r4[Q2];
          e4 && e4.C || n2(9), e4.I && n2(10);
          var i5 = e4.A;
          return j4(i5, t4), P3(void 0, i5);
        }, i4.setAutoFreeze = function(n3) {
          this.D = n3;
        }, i4.setUseProxies = function(r4) {
          r4 && !B4 && n2(20), this.O = r4;
        }, i4.applyPatches = function(n3, t4) {
          var e4;
          for (e4 = t4.length - 1; e4 >= 0; e4--) {
            var i5 = t4[e4];
            if (0 === i5.path.length && "replace" === i5.op) {
              n3 = i5.value;
              break;
            }
          }
          e4 > -1 && (t4 = t4.slice(e4 + 1));
          var o4 = b3("Patches").$;
          return r3(n3) ? o4(n3, t4) : this.produce(n3, function(n4) {
            return o4(n4, t4);
          });
        }, e3;
      }();
      an2 = new un();
      fn2 = an2.produce;
      cn2 = an2.produceWithPatches.bind(an2);
      sn2 = an2.setAutoFreeze.bind(an2);
      vn2 = an2.setUseProxies.bind(an2);
      pn2 = an2.applyPatches.bind(an2);
      ln2 = an2.createDraft.bind(an2);
      dn2 = an2.finishDraft.bind(an2);
    }
  });

  // node_modules/pullstate/dist/index.es.js
  function useStoreState(store, getSubState, deps) {
    const updateRef = _2({ state: void 0, initialized: false });
    if (!updateRef.current.initialized) {
      updateRef.current.state = getSubState ? getSubState(store.getRawState()) : store.getRawState();
      updateRef.current.initialized = true;
    }
    const [, setUpdateTrigger] = p2(0);
    h2(() => {
      const effectState = { shouldUpdate: true };
      function update2() {
        if (effectState.shouldUpdate) {
          const nextSubState = getSubState ? getSubState(store.getRawState()) : store.getRawState();
          if (!(0, import_es6.default)(updateRef.current.state, nextSubState)) {
            if (effectState.shouldUpdate) {
              updateRef.current.state = nextSubState;
              setUpdateTrigger((val) => val + 1);
            }
          }
        }
      }
      store._addUpdateListener(update2);
      update2();
      return () => {
        effectState.shouldUpdate = false;
        store._removeUpdateListener(update2);
      };
    }, deps !== null && deps !== void 0 ? deps : []);
    if (deps !== void 0) {
      const prevDeps = _2(deps);
      if (!(0, import_es6.default)(deps, prevDeps)) {
        updateRef.current.state = getSubState(store.getRawState());
      }
    }
    return updateRef.current.state;
  }
  function useLocalStore(initialState, deps) {
    const storeRef = _2();
    if (storeRef.current == null) {
      storeRef.current = new Store(initialState);
    }
    if (deps !== void 0) {
      const prevDeps = _2(deps);
      if (!(0, import_es6.default)(deps, prevDeps)) {
        storeRef.current = new Store(initialState);
      }
    }
    return storeRef.current;
  }
  function makeSubscriptionFunction(store, watch, listener) {
    let lastWatchState = watch(store.getRawState());
    return () => {
      const currentState = store.getRawState();
      const nextWatchState = watch(currentState);
      if (!(0, import_es6.default)(nextWatchState, lastWatchState)) {
        listener(nextWatchState, currentState, lastWatchState);
        lastWatchState = nextWatchState;
      }
    };
  }
  function makeReactionFunctionCreator(watch, reaction) {
    return (store) => {
      let lastWatchState = watch(store.getRawState());
      return (forceRun = false) => {
        const currentState = store.getRawState();
        const nextWatchState = watch(currentState);
        if (forceRun || !(0, import_es6.default)(nextWatchState, lastWatchState)) {
          if (store._optListenerCount > 0) {
            const [nextState, patches, inversePatches] = cn2(currentState, (s4) => reaction(nextWatchState, s4, currentState, lastWatchState));
            store._updateStateWithoutReaction(nextState);
            lastWatchState = nextWatchState;
            if (patches.length > 0) {
              store._patchListeners.forEach((listener) => listener(patches, inversePatches));
              return Object.keys(getChangedPathsFromPatches(patches));
            }
          } else {
            if (store._patchListeners.length > 0) {
              const [nextState, patches, inversePatches] = cn2(currentState, (s4) => reaction(nextWatchState, s4, currentState, lastWatchState));
              if (patches.length > 0) {
                store._patchListeners.forEach((listener) => listener(patches, inversePatches));
              }
              store._updateStateWithoutReaction(nextState);
            } else {
              store._updateStateWithoutReaction(fn2(currentState, (s4) => reaction(nextWatchState, s4, currentState, lastWatchState)));
            }
            lastWatchState = nextWatchState;
          }
        }
        return [];
      };
    };
  }
  function applyPatchesToStore(store, patches) {
    const currentState = store.getRawState();
    const nextState = pn2(currentState, patches);
    if (nextState !== currentState) {
      store._updateState(nextState, Object.keys(getChangedPathsFromPatches(patches)));
    }
  }
  function getChangedPathsFromPatches(changePatches, prev = {}) {
    for (const patch of changePatches) {
      let curKey;
      for (const p4 of patch.path) {
        if (curKey) {
          curKey = `${curKey}${optPathDivider}${p4}`;
        } else {
          curKey = p4;
        }
        prev[curKey] = 1;
      }
    }
    return prev;
  }
  function runUpdates(currentState, updater, func) {
    return func ? cn2(currentState, (s4) => updater(s4, currentState)) : updater.reduce(([nextState, patches, inversePatches], currentValue) => {
      const resp = cn2(nextState, (s4) => currentValue(s4, nextState));
      patches.push(...resp[1]);
      inversePatches.push(...resp[2]);
      return [resp[0], patches, inversePatches];
    }, [currentState, [], []]);
  }
  function update(store, updater, patchesCallback) {
    const currentState = store.getRawState();
    const func = typeof updater === "function";
    if (store._optListenerCount > 0) {
      const [nextState, patches, inversePatches] = runUpdates(currentState, updater, func);
      if (patches.length > 0) {
        if (patchesCallback) {
          patchesCallback(patches, inversePatches);
        }
        store._patchListeners.forEach((listener) => listener(patches, inversePatches));
        store._updateState(nextState, Object.keys(getChangedPathsFromPatches(patches)));
      }
    } else {
      let nextState;
      if (store._patchListeners.length > 0 || patchesCallback) {
        const [ns, patches, inversePatches] = runUpdates(currentState, updater, func);
        if (patches.length > 0) {
          if (patchesCallback) {
            patchesCallback(patches, inversePatches);
          }
          store._patchListeners.forEach((listener) => listener(patches, inversePatches));
        }
        nextState = ns;
      } else {
        nextState = fn2(currentState, (s4) => func ? updater(s4, currentState) : updater.reduce((previousValue, currentUpdater) => {
          return fn2(previousValue, (s5) => currentUpdater(s5, previousValue));
        }, currentState));
      }
      if (nextState !== currentState) {
        store._updateState(nextState);
      }
    }
  }
  var import_es6, globalClientState, optPathDivider, Store, EAsyncEndTags, EPostActionContext, storeErrorProxy, startedButUnfinishedResult, PullstateContext, EAsyncActionInjectType;
  var init_index_es = __esm({
    "node_modules/pullstate/dist/index.es.js"() {
      import_es6 = __toESM(require_es6());
      init_compat_module();
      init_immer_esm();
      globalClientState = {
        storeOrdinal: 0,
        batching: false,
        flushStores: {}
      };
      T4();
      optPathDivider = "~._.~";
      Store = class {
        constructor(initialState) {
          this.updateListeners = [];
          this.ssr = false;
          this.reactions = [];
          this.clientSubscriptions = [];
          this.reactionCreators = [];
          this.optimizedUpdateListeners = {};
          this.optimizedUpdateListenerPaths = {};
          this.optimizedListenerPropertyMap = {};
          this._optListenerCount = 0;
          this._patchListeners = [];
          if (initialState instanceof Function) {
            const state = initialState();
            this.currentState = state;
            this.initialState = state;
            this.createInitialState = initialState;
          } else {
            this.currentState = initialState;
            this.initialState = initialState;
            this.createInitialState = () => initialState;
          }
          this.internalOrdId = globalClientState.storeOrdinal++;
        }
        _setInternalOptions({ ssr, reactionCreators = [] }) {
          this.ssr = ssr;
          this.reactionCreators = reactionCreators;
          this.reactions = reactionCreators.map((rc) => rc(this));
        }
        _getReactionCreators() {
          return this.reactionCreators;
        }
        _instantiateReactions() {
          this.reactions = this.reactionCreators.map((rc) => rc(this));
        }
        _getInitialState() {
          return this.createInitialState();
        }
        _updateStateWithoutReaction(nextState) {
          this.currentState = nextState;
        }
        _updateState(nextState, updateKeyedPaths = []) {
          this.currentState = nextState;
          this.batchState = void 0;
          for (const runReaction of this.reactions) {
            updateKeyedPaths.push(...runReaction());
          }
          if (!this.ssr) {
            for (const runSubscription of this.clientSubscriptions) {
              runSubscription();
            }
            if (updateKeyedPaths.length > 0) {
              const updateOrds = /* @__PURE__ */ new Set();
              for (const keyedPath of updateKeyedPaths) {
                if (this.optimizedListenerPropertyMap[keyedPath]) {
                  for (const ord of this.optimizedListenerPropertyMap[keyedPath]) {
                    updateOrds.add(ord);
                  }
                }
              }
              for (const ord of updateOrds.values()) {
                if (this.optimizedUpdateListeners[ord]) {
                  this.optimizedUpdateListeners[ord]();
                }
              }
            }
            this.updateListeners.forEach((listener) => listener());
          }
        }
        _addUpdateListener(listener) {
          this.updateListeners.push(listener);
        }
        _removeUpdateListener(listener) {
          this.updateListeners = this.updateListeners.filter((f4) => f4 !== listener);
        }
        _removeUpdateListenerOpt(ordKey) {
          const listenerPathsKeyed = this.optimizedUpdateListenerPaths[ordKey];
          for (const keyedPath of listenerPathsKeyed) {
            this.optimizedListenerPropertyMap[keyedPath] = this.optimizedListenerPropertyMap[keyedPath].filter((ord) => ord !== ordKey);
          }
          delete this.optimizedUpdateListenerPaths[ordKey];
          delete this.optimizedUpdateListeners[ordKey];
          this._optListenerCount--;
        }
        listenToPatches(patchListener) {
          this._patchListeners.push(patchListener);
          return () => {
            this._patchListeners = this._patchListeners.filter((f4) => f4 !== patchListener);
          };
        }
        subscribe(watch, listener) {
          if (!this.ssr) {
            const func = makeSubscriptionFunction(this, watch, listener);
            this.clientSubscriptions.push(func);
            return () => {
              this.clientSubscriptions = this.clientSubscriptions.filter((f4) => f4 !== func);
            };
          }
          return () => {
            console.warn(`Pullstate: Subscriptions made on the server side are not registered - so therefor this call to unsubscribe does nothing.`);
          };
        }
        createReaction(watch, reaction, { runNow = false, runNowWithSideEffects = false } = {}) {
          const creator = makeReactionFunctionCreator(watch, reaction);
          this.reactionCreators.push(creator);
          const func = creator(this);
          this.reactions.push(func);
          if (runNow || runNowWithSideEffects) {
            func(true);
            if (runNowWithSideEffects && !this.ssr) {
              this._updateState(this.currentState);
            }
          }
          return () => {
            this.reactions = this.reactions.filter((f4) => f4 !== func);
          };
        }
        getRawState() {
          if (this.batchState !== void 0) {
            return this.batchState;
          } else {
            return this.currentState;
          }
        }
        useState(getSubState, deps) {
          return useStoreState(this, getSubState, deps);
        }
        useLocalCopyInitial(deps) {
          return useLocalStore(this.createInitialState, deps);
        }
        useLocalCopySnapshot(deps) {
          return useLocalStore(this.currentState, deps);
        }
        flushBatch(ignoreError = false) {
          if (this.batchState !== void 0) {
            if (this.batchState !== this.currentState) {
              this._updateState(this.batchState);
            }
          } else if (!ignoreError) {
            console.error(`Pullstate: Trying to flush batch state which was never created or updated on`);
          }
          this.batchState = void 0;
        }
        update(updater, patchesCallback) {
          if (globalClientState.batching) {
            if (this.batchState === void 0) {
              this.batchState = this.currentState;
              globalClientState.flushStores[this.internalOrdId] = this;
            }
            const func = typeof updater === "function";
            const [nextState, patches, inversePatches] = runUpdates(this.batchState, updater, func);
            if (patches.length > 0 && (this._patchListeners.length > 0 || patchesCallback)) {
              if (patchesCallback) {
                patchesCallback(patches, inversePatches);
              }
              this._patchListeners.forEach((listener) => listener(patches, inversePatches));
            }
            this.batchState = nextState;
          } else {
            this.batchState = void 0;
            update(this, updater, patchesCallback);
          }
        }
        replace(newState) {
          this._updateState(newState);
        }
        replaceFromCurrent(replacer) {
          this._updateState(replacer(this.currentState));
        }
        applyPatches(patches) {
          applyPatchesToStore(this, patches);
        }
      };
      (function(EAsyncEndTags2) {
        EAsyncEndTags2["THREW_ERROR"] = "THREW_ERROR";
        EAsyncEndTags2["RETURNED_ERROR"] = "RETURNED_ERROR";
        EAsyncEndTags2["UNFINISHED"] = "UNFINISHED";
        EAsyncEndTags2["DORMANT"] = "DORMANT";
      })(EAsyncEndTags || (EAsyncEndTags = {}));
      (function(EPostActionContext2) {
        EPostActionContext2["WATCH_HIT_CACHE"] = "WATCH_HIT_CACHE";
        EPostActionContext2["BECKON_HIT_CACHE"] = "BECKON_HIT_CACHE";
        EPostActionContext2["RUN_HIT_CACHE"] = "RUN_HIT_CACHE";
        EPostActionContext2["READ_HIT_CACHE"] = "READ_HIT_CACHE";
        EPostActionContext2["READ_RUN"] = "READ_RUN";
        EPostActionContext2["SHORT_CIRCUIT"] = "SHORT_CIRCUIT";
        EPostActionContext2["DIRECT_RUN"] = "DIRECT_RUN";
        EPostActionContext2["BECKON_RUN"] = "BECKON_RUN";
        EPostActionContext2["CACHE_UPDATE"] = "CACHE_UPDATE";
      })(EPostActionContext || (EPostActionContext = {}));
      try {
        storeErrorProxy = new Proxy({}, {
          get: function(obj, prop) {
            throw new Error(`Pullstate: Trying to access store (${String(prop)}) inside async actions without the correct usage or setup.
If this error occurred on the server:
* If using run(), make use of your created instance for this request: instance.runAsyncAction()
* If using read(), useWatch(), useBeckon() etc. - make sure you have properly set up your <PullstateProvider/>

If this error occurred on the client:
* Make sure you have created your "pullstateCore" object with all your stores, using createPullstateCore(), and are making use of instantiate() before rendering.`);
          }
        });
      } catch {
        storeErrorProxy = {};
      }
      startedButUnfinishedResult = [
        true,
        false,
        {
          message: "",
          tags: [EAsyncEndTags.UNFINISHED],
          error: true,
          payload: null,
          errorPayload: null
        },
        false,
        -1
      ];
      PullstateContext = bn.createContext(null);
      (function(EAsyncActionInjectType2) {
        EAsyncActionInjectType2["WATCH"] = "watch";
        EAsyncActionInjectType2["BECKON"] = "beckon";
      })(EAsyncActionInjectType || (EAsyncActionInjectType = {}));
    }
  });

  // js/state.jsx
  var require_state = __commonJS({
    "js/state.jsx"(exports, module) {
      init_index_es();
      module.exports = {
        State: new Store({
          spotifyAccessToken: null,
          selectedSongs: null,
          validatedSongsToAdd: false,
          spotifyTracksToAdd: []
        })
      };
    }
  });

  // js/utils.js
  function generateRandomString() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const length = 128;
    let randomString = "";
    for (let i4 = 0; i4 < length; i4++) {
      randomString += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return randomString;
  }
  async function generateCodeChallenge(codeVerifier) {
    function base64encode(string) {
      return btoa(String.fromCharCode.apply(null, new Uint8Array(string))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
    }
    const encoder = new TextEncoder();
    const data = encoder.encode(codeVerifier);
    const digest = await window.crypto.subtle.digest("SHA-256", data);
    return base64encode(digest);
  }
  function copyToClipboard(text) {
    if (window.clipboardData && window.clipboardData.setData) {
      return window.clipboardData.setData("Text", text);
    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
      var textarea = document.createElement("textarea");
      textarea.textContent = text;
      textarea.style.position = "fixed";
      document.body.appendChild(textarea);
      textarea.select();
      try {
        return document.execCommand("copy");
      } catch (ex) {
        console.warn("Copy to clipboard failed.", ex);
        return prompt("Copy to clipboard: Ctrl+C, Enter", text);
      } finally {
        document.body.removeChild(textarea);
      }
    }
  }
  async function spot(key, url, method, body) {
    const headers = {
      Authorization: `Bearer ${import_state.State.currentState.spotifyAccessToken}`
    };
    if (!url.startsWith("https://")) {
      url = `https://api.spotify.com/v1/${url}`;
    }
    if (method === "POST") {
      const response2 = await fetch(url, {
        headers,
        method: "POST",
        body: JSON.stringify(body)
      });
      return await response2.json();
    }
    if (key) {
      const localData = localStorage.getItem(key);
      if (localData) {
        return JSON.parse(localData);
      }
    }
    const response = await fetch(url, {
      headers
    });
    const data = await response.json();
    if (key && !data.error) {
      localStorage.setItem(key, JSON.stringify(data));
    }
    return data;
  }
  async function fetchPlaylist(playlistId, cache) {
    let allSongs = [];
    function genkey(page) {
      if (cache) {
        return `${playlistId}-${page}`;
      }
      return null;
    }
    let pages = 0;
    let data = await spot(
      genkey(pages),
      `playlists/${playlistId}/tracks?limit=100`
    );
    allSongs = allSongs.concat(data.items);
    while (data.next) {
      pages += 1;
      data = await spot(genkey(pages), data.next);
      allSongs = allSongs.concat(data.items);
      if (pages > 3) {
        break;
      }
    }
    return allSongs;
  }
  function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex]
      ];
    }
    return array;
  }
  var import_state;
  var init_utils = __esm({
    "js/utils.js"() {
      import_state = __toESM(require_state());
    }
  });

  // js/auth.jsx
  var require_auth = __commonJS({
    "js/auth.jsx"(exports, module) {
      init_preact_module();
      var import_state5 = __toESM(require_state());
      init_utils();
      var clientId = "6c33c75c94c44805bcf8fee81d8c9fa5";
      var redirectUri = window.location.origin;
      console.log(window.location.href);
      var spotifyAuthUrl = "https://accounts.spotify.com/authorize";
      var Auth2 = class extends d {
        async update() {
          const urlParams = new URLSearchParams(window.location.search);
          const authorizationCode = urlParams.get("code");
          const savedCodeVerifier = localStorage.getItem("code-verifier");
          if (authorizationCode) {
            urlParams.delete("code");
            urlParams.delete("state");
            let query = urlParams.toString();
            if (query.length > 0) {
              query = `?${query}`;
            }
            const newUrl = `${window.location.pathname}${query}`;
            window.history.replaceState({}, document.title, newUrl);
            const tokenParams = new URLSearchParams({
              grant_type: "authorization_code",
              code: authorizationCode,
              redirect_uri: redirectUri,
              client_id: clientId,
              code_verifier: savedCodeVerifier
            });
            const tokenUrl = "https://accounts.spotify.com/api/token";
            fetch(tokenUrl, {
              method: "POST",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded"
              },
              body: tokenParams.toString()
            }).then((response) => response.json()).then((data) => {
              if (data.error) {
                console.log("ERROR", data);
                localStorage.removeItem("spotifyAccessToken");
              } else {
                import_state5.State.update((s4) => {
                  localStorage.setItem("spotifyAccessToken", data.access_token);
                  s4.spotifyAccessToken = data.access_token;
                });
              }
            }).catch((error) => console.error(error));
          }
          const spotifyAccessToken = localStorage.getItem("spotifyAccessToken");
          if (spotifyAccessToken) {
            import_state5.State.update((s4) => {
              s4.spotifyAccessToken = spotifyAccessToken;
            });
          }
        }
        componentDidMount() {
          this.update();
        }
        async goToSpotifyOauthPage() {
          const codeVerifier = generateRandomString();
          const codeChallenge = await generateCodeChallenge(codeVerifier);
          const authParams = new URLSearchParams({
            client_id: clientId,
            response_type: "code",
            redirect_uri: redirectUri,
            code_challenge_method: "S256",
            code_challenge: codeChallenge,
            scope: "user-read-private playlist-read-private playlist-modify-private playlist-modify-public playlist-read-collaborative user-read-recently-played user-library-read"
          });
          const authUrl = `${spotifyAuthUrl}?${authParams.toString()}`;
          localStorage.setItem("code-verifier", codeVerifier);
          window.location.href = authUrl;
        }
        logout() {
          import_state5.State.update((s4) => {
            localStorage.clear();
            s4.spotifyAccessToken = null;
          });
          window.location.reload();
        }
        render() {
          const spotifyAccessToken = import_state5.State.useState((s4) => s4.spotifyAccessToken);
          const login = /* @__PURE__ */ h("button", { class: "mr-2", onClick: this.goToSpotifyOauthPage }, "Log in with Spotify");
          const logout = /* @__PURE__ */ h("button", { class: "mr-2", onClick: this.logout }, "Log out");
          return /* @__PURE__ */ h("div", null, spotifyAccessToken ? logout : login, /* @__PURE__ */ h(
            "button",
            {
              onClick: () => {
                for (let i4 = 0, len = localStorage.length; i4 < len; ++i4) {
                  let key = localStorage.key(i4);
                  if (key === "spotifyAccessToken") {
                    continue;
                  }
                  localStorage.removeItem(key);
                }
              }
            },
            "Clear Cache"
          ));
        }
      };
      module.exports = Auth2;
    }
  });

  // js/script.jsx
  init_preact_module();
  var import_state4 = __toESM(require_state());
  var import_auth = __toESM(require_auth());

  // js/usage.jsx
  init_preact_module();
  var Usage = class extends d {
    constructor() {
      super();
      this.state = {
        expanded: false
      };
    }
    render() {
      let expanded = this.state.expanded;
      let icon = /* @__PURE__ */ h("span", null, "show more");
      if (expanded) {
        icon = /* @__PURE__ */ h("span", null, "show less");
      }
      let usage = null;
      if (expanded) {
        usage = /* @__PURE__ */ h("ol", null, /* @__PURE__ */ h("li", null, "Log in"), /* @__PURE__ */ h("li", null, "Choose one of your playlists to generate recommendations from"), /* @__PURE__ */ h("li", null, "Generate the prompt and copy-paste it to", " ", /* @__PURE__ */ h("a", { target: "_blank", rel: "noopener noreferrer", href: "https://chat.openai.com/" }, "https://chat.openai.com/")), /* @__PURE__ */ h("li", null, "Copy the code response from chatGPT back to this page"), /* @__PURE__ */ h("li", null, `Click the update button to validate chatGPT's suggestions and add them to a Spotify playlist called "GPT Recs"`));
      }
      return /* @__PURE__ */ h("div", null, /* @__PURE__ */ h("p", null, "Usage instructions", " ", /* @__PURE__ */ h(
        "span",
        {
          onClick: () => {
            this.setState({
              expanded: !this.state.expanded
            });
          },
          class: "cursor-pointer select-none"
        },
        icon
      )), usage);
    }
  };

  // js/selector.jsx
  init_preact_module();
  var import_state2 = __toESM(require_state());
  init_utils();
  var PlaylistList = class extends d {
    async update() {
      const me = await spot("me", "me");
      const playlists = await spot("playlists", `users/${me.id}/playlists`);
      this.setState({
        playlists: playlists.items
      });
    }
    componentDidMount() {
      if (import_state2.State.currentState.spotifyAccessToken) {
        this.update();
      } else {
        import_state2.State.subscribe(
          (s4) => s4.spotifyAccessToken,
          () => {
            this.update();
          }
        );
      }
    }
    render() {
      const playlists = this.state.playlists;
      const selectedPlaylistId = import_state2.State.useState((s4) => s4.selectedPlaylistId);
      if (!playlists) {
        return /* @__PURE__ */ h("p", null, "Loading playlists...");
      }
      let rows = playlists.map((playlist) => /* @__PURE__ */ h(
        "tr",
        {
          style: {
            color: selectedPlaylistId == playlist.id ? "red" : "green"
          },
          class: "cursor-pointer",
          onClick: async () => {
            import_state2.State.update((s4) => {
              s4.selectedPlaylistId = playlist.id;
              s4.prompt = "loading playlist";
            });
            const allSongs = await fetchPlaylist(playlist.id, true);
            import_state2.State.update((s4) => {
              console.log(`Updated state with ${allSongs.length} songs`);
              s4.selectedPlaylistTracks = allSongs;
              s4.selectedSongs = pickN(allSongs, 20);
              s4.prompt = buildPrompt(s4.selectedSongs);
            });
          }
        },
        playlist.name
      ));
      return /* @__PURE__ */ h("table", null, rows);
    }
  };
  function pickN(array, n3) {
    let shuffled = shuffle(array);
    if (shuffled.length > n3) {
      shuffled = shuffled.slice(0, n3);
    }
    return shuffled;
  }
  function buildPrompt(songs) {
    let s4 = "Suggest 20 songs similar to these, in the format of a compressed JSON array with entries for artist and title.\n";
    for (const song of songs) {
      let artist = song.track.artists.map((artist2) => artist2.name).join(", ");
      s4 += `${song.track.name} - ${artist}
  `;
    }
    s4 += "Be sure to format the results as a compressed JSON array with entries for artist and title";
    return s4;
  }
  var Prompt = class extends d {
    constructor() {
      super();
      this.state = {
        expanded: false
      };
    }
    render() {
      const prompt2 = import_state2.State.useState((s4) => s4.prompt);
      if (prompt2 == "loading playlist") {
        return /* @__PURE__ */ h("p", null, "Loading playlist details...");
      }
      if (!prompt2) {
        return /* @__PURE__ */ h("p", null, "Choose a playlist first!");
      }
      const nextSteps = /* @__PURE__ */ h("p", null, "Paste the prompt into", " ", /* @__PURE__ */ h("a", { target: "_blank", rel: "noopener noreferrer", href: "https://chat.openai.com/" }, "https://chat.openai.com/"), " and copy the result into the box below");
      let promptPre = null;
      if (this.state.expanded) {
        promptPre = /* @__PURE__ */ h(
          "pre",
          {
            style: {
              maxHeight: "5em"
            },
            class: "mb-2 overflow-scroll"
          },
          prompt2
        );
      }
      return /* @__PURE__ */ h("div", null, /* @__PURE__ */ h("div", { class: "mb-2" }, /* @__PURE__ */ h(
        "button",
        {
          onClick: () => {
            this.setState({ expanded: !this.state.expanded });
          },
          class: "mr-2"
        },
        this.state.expanded ? "Hide" : "Show",
        " prompt"
      ), /* @__PURE__ */ h(
        "button",
        {
          onClick: () => {
            copyToClipboard(prompt2);
            this.setState({ copied: true });
          },
          class: "mr-2"
        },
        "Copy to clipboard"
      ), /* @__PURE__ */ h(
        "button",
        {
          onClick: () => {
            this.setState({
              copied: false
            });
          }
        },
        "Re-roll sampling"
      )), promptPre, nextSteps);
    }
  };
  var PlaylistSelector = class extends d {
    render() {
      return /* @__PURE__ */ h("div", null, /* @__PURE__ */ h("p", { class: "font-bold" }, "Playlists"), /* @__PURE__ */ h(PlaylistList, null), /* @__PURE__ */ h("p", { class: "font-bold" }, "Prompt"), /* @__PURE__ */ h(Prompt, null));
    }
  };

  // js/consumer.jsx
  init_preact_module();
  var import_state3 = __toESM(require_state());
  init_utils();
  SAMPLE_SONGS = `[]
`;
  var Status = class extends d {
    render() {
      const spotifyTracksToAdd = import_state3.State.useState((s4) => s4.spotifyTracksToAdd);
      if (!spotifyTracksToAdd) {
        return /* @__PURE__ */ h("p", null, "nothing to add");
      }
      let rows = [];
      for (const item of spotifyTracksToAdd) {
        if (item.songStatus == "duplicate") {
          rows.push(
            /* @__PURE__ */ h("tr", { class: "text-gray-500" }, "(already present) ", item.title, " by ", item.artist)
          );
        } else if (item.songStatus == "not found") {
          rows.push(
            /* @__PURE__ */ h("tr", { class: "text-red-400" }, "(missing) ", item.title, " by ", item.artist)
          );
        } else {
          rows.push(
            /* @__PURE__ */ h("tr", null, item.title, " by ", item.artist)
          );
        }
      }
      return /* @__PURE__ */ h("table", null, rows);
    }
  };
  var PlaylistLink = class extends d {
    render() {
      const doneUploading = import_state3.State.useState((s4) => s4.doneUploading);
      const gptPlaylist = import_state3.State.useState((s4) => s4.gptPlaylist);
      if (!gptPlaylist) {
        return null;
      }
      let url = `https://open.spotify.com/playlist/${gptPlaylist.id}`;
      return /* @__PURE__ */ h("a", { target: "_blank", rel: "noopener noreferrer", class: "ml-2", href: url }, "View Playlist");
    }
  };
  var AddSongs = class extends d {
    render() {
      const validated = import_state3.State.useState((s4) => s4.validatedSongsToAdd);
      if (!validated) {
        return null;
      }
      const spotifyTracksToAdd = import_state3.State.useState((s4) => s4.spotifyTracksToAdd);
      const gptPlaylist = import_state3.State.useState((s4) => s4.gptPlaylist);
      const toAdd = spotifyTracksToAdd.filter((s4) => s4.songStatus === "good");
      console.log(toAdd);
      return /* @__PURE__ */ h(
        "button",
        {
          onClick: async () => {
            let uris = toAdd.map((d4) => `spotify:track:${d4.result.id}`);
            await spot(null, `playlists/${gptPlaylist.id}/tracks`, "POST", {
              uris
            });
            import_state3.State.update((s4) => {
              s4.doneUploading = true;
            });
            alert("Done adding songs! Check your Spotify account");
          },
          class: "ml-2"
        },
        "Add ",
        toAdd.length,
        " Songs to 'GPT Recs' playlist"
      );
    }
  };
  var RecommendConsumer = class extends d {
    async createOrFindGptPlaylist() {
      const me = await spot("me", "me");
      const playlists = await spot(null, `users/${me.id}/playlists`);
      for (const playlist2 of playlists.items) {
        if (playlist2.name === "GPT Recs") {
          return playlist2;
        }
      }
      let playlist = await spot(null, `users/${me.id}/playlists`, "POST", {
        name: "GPT Recs",
        public: false
      });
      return playlist;
    }
    async findExistingIds(playlist) {
      const allSongs = await fetchPlaylist(playlist.id, false);
      console.log(allSongs);
      let data = {};
      for (const song of allSongs) {
        data[song.track.id] = true;
      }
      return data;
    }
    async addSongsToGptPlaylist(songs) {
      let playlist = await this.createOrFindGptPlaylist();
      import_state3.State.update((s4) => {
        s4.gptPlaylist = playlist;
      });
      const existingIds = await this.findExistingIds(playlist);
      import_state3.State.update((s4) => {
        s4.spotifyTracksToAdd = [];
        update2();
      });
      async function update2() {
        for (const song of songs) {
          const title = song.title || song.name || song.track;
          const artist = song.artist || song.artists;
          let artists = artist.split(",").map((a4) => a4.trim());
          const query = encodeURI(`${title} ${artists[0]}`);
          const data = await spot(
            `song-${artist}-${title}`,
            `search?type=track&q=${query}&limit=1`
          );
          const result = data.tracks.items[0];
          let songStatus = null;
          if (!result) {
            songStatus = "not found";
          } else if (existingIds[result.id]) {
            songStatus = "duplicate";
          } else {
            songStatus = "good";
          }
          import_state3.State.update((s4) => {
            s4.spotifyTracksToAdd.push({
              title,
              artist,
              songStatus,
              result
            });
          });
          import_state3.State.update((s4) => {
            s4.validatedSongsToAdd = true;
          });
        }
      }
    }
    render() {
      let updateDiv = null;
      const prompt2 = import_state3.State.useState((s4) => s4.prompt);
      if (!prompt2) {
        return null;
      }
      updateDiv = /* @__PURE__ */ h(
        "button",
        {
          onClick: () => {
            this.addSongsToGptPlaylist(this.state.gptSongs);
          },
          disabled: !this.state.gptSongs,
          class: "mb-2"
        },
        "Validate"
      );
      return /* @__PURE__ */ h("div", null, /* @__PURE__ */ h("p", { class: "font-bold" }, "Upload"), /* @__PURE__ */ h(
        "input",
        {
          onChange: (v4) => {
            let json = v4.target.value;
            this.setState({
              gptSongs: JSON.parse(json)
            });
          },
          placeholder: "paste the JSON part of ChatGPT's response here",
          class: "mb-2",
          type: "text"
        }
      ), updateDiv, /* @__PURE__ */ h(PlaylistLink, null), /* @__PURE__ */ h(AddSongs, null), /* @__PURE__ */ h(Status, null));
    }
  };

  // js/script.jsx
  var App = class extends d {
    render() {
      const loggedIn = import_state4.State.useState((s4) => s4.spotifyAccessToken);
      let selector = null;
      let consumer = null;
      if (loggedIn) {
        selector = /* @__PURE__ */ h(PlaylistSelector, null);
        consumer = /* @__PURE__ */ h(RecommendConsumer, null);
      }
      return /* @__PURE__ */ h("div", null, /* @__PURE__ */ h(import_auth.default, null), /* @__PURE__ */ h(Usage, null), selector, consumer);
    }
  };
  P(/* @__PURE__ */ h(App, null), document.querySelector("#container"));
})();
//# sourceMappingURL=script.dist.js.map
