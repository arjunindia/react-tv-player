import { jsxs as Ve, jsx as ye, Fragment as zi } from "react/jsx-runtime";
import Me, { forwardRef as Fd, useState as co, useEffect as Ee, useRef as er, useCallback as Sr } from "react";
var We = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ur(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function qd(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var a = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, a.get ? a : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var Wf = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var i = "", o = 0; o < arguments.length; o++) {
        var s = arguments[o];
        s && (i = a(i, n(s)));
      }
      return i;
    }
    function n(i) {
      if (typeof i == "string" || typeof i == "number")
        return i;
      if (typeof i != "object")
        return "";
      if (Array.isArray(i))
        return r.apply(null, i);
      if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]"))
        return i.toString();
      var o = "";
      for (var s in i)
        t.call(i, s) && i[s] && (o = a(o, s));
      return o;
    }
    function a(i, o) {
      return o ? i ? i + " " + o : i + o : i;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(Wf);
var Nd = Wf.exports;
const Pt = /* @__PURE__ */ ur(Nd);
var Dd = function(t, r, n) {
  var a = document.head || document.getElementsByTagName("head")[0], i = document.createElement("script");
  typeof r == "function" && (n = r, r = {}), r = r || {}, n = n || function() {
  }, i.type = r.type || "text/javascript", i.charset = r.charset || "utf8", i.async = "async" in r ? !!r.async : !0, i.src = t, r.attrs && jd(i, r.attrs), r.text && (i.text = "" + r.text);
  var o = "onload" in i ? Bo : Kd;
  o(i, n), i.onload || Bo(i, n), a.appendChild(i);
};
function jd(e, t) {
  for (var r in t)
    e.setAttribute(r, t[r]);
}
function Bo(e, t) {
  e.onload = function() {
    this.onerror = this.onload = null, t(null, e);
  }, e.onerror = function() {
    this.onerror = this.onload = null, t(new Error("Failed to load " + this.src), e);
  };
}
function Kd(e, t) {
  e.onreadystatechange = function() {
    this.readyState != "complete" && this.readyState != "loaded" || (this.onreadystatechange = null, t(null, e));
  };
}
var $d = function(t) {
  return zd(t) && !Hd(t);
};
function zd(e) {
  return !!e && typeof e == "object";
}
function Hd(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || Vd(e);
}
var Ud = typeof Symbol == "function" && Symbol.for, Bd = Ud ? Symbol.for("react.element") : 60103;
function Vd(e) {
  return e.$$typeof === Bd;
}
function Wd(e) {
  return Array.isArray(e) ? [] : {};
}
function Ct(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? lt(Wd(e), e, t) : e;
}
function Yd(e, t, r) {
  return e.concat(t).map(function(n) {
    return Ct(n, r);
  });
}
function Gd(e, t) {
  if (!t.customMerge)
    return lt;
  var r = t.customMerge(e);
  return typeof r == "function" ? r : lt;
}
function Xd(e) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
    return Object.propertyIsEnumerable.call(e, t);
  }) : [];
}
function Vo(e) {
  return Object.keys(e).concat(Xd(e));
}
function Yf(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function Jd(e, t) {
  return Yf(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
}
function Zd(e, t, r) {
  var n = {};
  return r.isMergeableObject(e) && Vo(e).forEach(function(a) {
    n[a] = Ct(e[a], r);
  }), Vo(t).forEach(function(a) {
    Jd(e, a) || (Yf(e, a) && r.isMergeableObject(t[a]) ? n[a] = Gd(a, r)(e[a], t[a], r) : n[a] = Ct(t[a], r));
  }), n;
}
function lt(e, t, r) {
  r = r || {}, r.arrayMerge = r.arrayMerge || Yd, r.isMergeableObject = r.isMergeableObject || $d, r.cloneUnlessOtherwiseSpecified = Ct;
  var n = Array.isArray(t), a = Array.isArray(e), i = n === a;
  return i ? n ? r.arrayMerge(e, t, r) : Zd(e, t, r) : Ct(t, r);
}
lt.all = function(t, r) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(n, a) {
    return lt(n, a, r);
  }, {});
};
var Qd = lt, Gf = Qd, ev = Object.create, cr = Object.defineProperty, tv = Object.getOwnPropertyDescriptor, rv = Object.getOwnPropertyNames, nv = Object.getPrototypeOf, av = Object.prototype.hasOwnProperty, iv = (e, t) => {
  for (var r in t)
    cr(e, r, { get: t[r], enumerable: !0 });
}, Xf = (e, t, r, n) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let a of rv(t))
      !av.call(e, a) && a !== r && cr(e, a, { get: () => t[a], enumerable: !(n = tv(t, a)) || n.enumerable });
  return e;
}, fo = (e, t, r) => (r = e != null ? ev(nv(e)) : {}, Xf(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  t || !e || !e.__esModule ? cr(r, "default", { value: e, enumerable: !0 }) : r,
  e
)), ov = (e) => Xf(cr({}, "__esModule", { value: !0 }), e), Jf = {};
iv(Jf, {
  callPlayer: () => Ov,
  getConfig: () => _v,
  getSDK: () => bv,
  isBlobUrl: () => Pv,
  isMediaStream: () => Sv,
  lazy: () => fv,
  omit: () => wv,
  parseEndTime: () => yv,
  parseStartTime: () => hv,
  queryString: () => gv,
  randomString: () => mv,
  supportsWebKitPresentationMode: () => Cv
});
var fr = ov(Jf), sv = fo(Me), uv = fo(Dd), cv = fo(Gf);
const fv = (e) => sv.default.lazy(async () => {
  const t = await e();
  return typeof t.default == "function" ? t : t.default;
}), lv = /[?&#](?:start|t)=([0-9hms]+)/, dv = /[?&#]end=([0-9hms]+)/, Hi = /(\d+)(h|m|s)/g, vv = /^\d+$/;
function Zf(e, t) {
  if (e instanceof Array)
    return;
  const r = e.match(t);
  if (r) {
    const n = r[1];
    if (n.match(Hi))
      return pv(n);
    if (vv.test(n))
      return parseInt(n);
  }
}
function pv(e) {
  let t = 0, r = Hi.exec(e);
  for (; r !== null; ) {
    const [, n, a] = r;
    a === "h" && (t += parseInt(n, 10) * 60 * 60), a === "m" && (t += parseInt(n, 10) * 60), a === "s" && (t += parseInt(n, 10)), r = Hi.exec(e);
  }
  return t;
}
function hv(e) {
  return Zf(e, lv);
}
function yv(e) {
  return Zf(e, dv);
}
function mv() {
  return Math.random().toString(36).substr(2, 5);
}
function gv(e) {
  return Object.keys(e).map((t) => `${t}=${e[t]}`).join("&");
}
function Pr(e) {
  return window[e] ? window[e] : window.exports && window.exports[e] ? window.exports[e] : window.module && window.module.exports && window.module.exports[e] ? window.module.exports[e] : null;
}
const at = {}, bv = function(t, r, n = null, a = () => !0, i = uv.default) {
  const o = Pr(r);
  return o && a(o) ? Promise.resolve(o) : new Promise((s, u) => {
    if (at[t]) {
      at[t].push({ resolve: s, reject: u });
      return;
    }
    at[t] = [{ resolve: s, reject: u }];
    const c = (f) => {
      at[t].forEach((l) => l.resolve(f));
    };
    if (n) {
      const f = window[n];
      window[n] = function() {
        f && f(), c(Pr(r));
      };
    }
    i(t, (f) => {
      f ? (at[t].forEach((l) => l.reject(f)), at[t] = null) : n || c(Pr(r));
    });
  });
};
function _v(e, t) {
  return (0, cv.default)(t.config, e.config);
}
function wv(e, ...t) {
  const r = [].concat(...t), n = {}, a = Object.keys(e);
  for (const i of a)
    r.indexOf(i) === -1 && (n[i] = e[i]);
  return n;
}
function Ov(e, ...t) {
  if (!this.player || !this.player[e]) {
    let r = `ReactPlayer: ${this.constructor.displayName} player could not call %c${e}%c – `;
    return this.player ? this.player[e] || (r += "The method was not available") : r += "The player was not available", console.warn(r, "font-weight: bold", ""), null;
  }
  return this.player[e](...t);
}
function Sv(e) {
  return typeof window < "u" && typeof window.MediaStream < "u" && e instanceof window.MediaStream;
}
function Pv(e) {
  return /^blob:/.test(e);
}
function Cv(e = document.createElement("video")) {
  const t = /iPhone|iPod/.test(navigator.userAgent) === !1;
  return e.webkitSupportsPresentationMode && typeof e.webkitSetPresentationMode == "function" && t;
}
var lo = Object.defineProperty, xv = Object.getOwnPropertyDescriptor, Ev = Object.getOwnPropertyNames, Av = Object.prototype.hasOwnProperty, Tv = (e, t) => {
  for (var r in t)
    lo(e, r, { get: t[r], enumerable: !0 });
}, Rv = (e, t, r, n) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let a of Ev(t))
      !Av.call(e, a) && a !== r && lo(e, a, { get: () => t[a], enumerable: !(n = xv(t, a)) || n.enumerable });
  return e;
}, kv = (e) => Rv(lo({}, "__esModule", { value: !0 }), e), Qf = {};
Tv(Qf, {
  AUDIO_EXTENSIONS: () => vo,
  DASH_EXTENSIONS: () => vl,
  FLV_EXTENSIONS: () => pl,
  HLS_EXTENSIONS: () => ho,
  MATCH_URL_DAILYMOTION: () => cl,
  MATCH_URL_FACEBOOK: () => nl,
  MATCH_URL_FACEBOOK_WATCH: () => al,
  MATCH_URL_KALTURA: () => dl,
  MATCH_URL_MIXCLOUD: () => fl,
  MATCH_URL_MUX: () => rl,
  MATCH_URL_SOUNDCLOUD: () => el,
  MATCH_URL_STREAMABLE: () => il,
  MATCH_URL_TWITCH_CHANNEL: () => ul,
  MATCH_URL_TWITCH_VIDEO: () => sl,
  MATCH_URL_VIDYARD: () => ll,
  MATCH_URL_VIMEO: () => tl,
  MATCH_URL_WISTIA: () => ol,
  MATCH_URL_YOUTUBE: () => Ui,
  VIDEO_EXTENSIONS: () => po,
  canPlay: () => Mv
});
var Iv = kv(Qf), Wo = fr;
const Ui = /(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//, el = /(?:soundcloud\.com|snd\.sc)\/[^.]+$/, tl = /vimeo\.com\/(?!progressive_redirect).+/, rl = /stream\.mux\.com\/(\w+)/, nl = /^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/, al = /^https?:\/\/fb\.watch\/.+$/, il = /streamable\.com\/([a-z0-9]+)$/, ol = /(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/, sl = /(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/, ul = /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/, cl = /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/, fl = /mixcloud\.com\/([^/]+\/[^/]+)/, ll = /vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/, dl = /^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/, vo = /\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i, po = /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i, ho = /\.(m3u8)($|\?)/i, vl = /\.(mpd)($|\?)/i, pl = /\.(flv)($|\?)/i, Bi = (e) => {
  if (e instanceof Array) {
    for (const t of e)
      if (typeof t == "string" && Bi(t) || Bi(t.src))
        return !0;
    return !1;
  }
  return (0, Wo.isMediaStream)(e) || (0, Wo.isBlobUrl)(e) ? !0 : vo.test(e) || po.test(e) || ho.test(e) || vl.test(e) || pl.test(e);
}, Mv = {
  youtube: (e) => e instanceof Array ? e.every((t) => Ui.test(t)) : Ui.test(e),
  soundcloud: (e) => el.test(e) && !vo.test(e),
  vimeo: (e) => tl.test(e) && !po.test(e) && !ho.test(e),
  mux: (e) => rl.test(e),
  facebook: (e) => nl.test(e) || al.test(e),
  streamable: (e) => il.test(e),
  wistia: (e) => ol.test(e),
  twitch: (e) => sl.test(e) || ul.test(e),
  dailymotion: (e) => cl.test(e),
  mixcloud: (e) => fl.test(e),
  vidyard: (e) => ll.test(e),
  kaltura: (e) => dl.test(e),
  file: Bi
};
var yo = Object.defineProperty, Lv = Object.getOwnPropertyDescriptor, Fv = Object.getOwnPropertyNames, qv = Object.prototype.hasOwnProperty, Nv = (e, t) => {
  for (var r in t)
    yo(e, r, { get: t[r], enumerable: !0 });
}, Dv = (e, t, r, n) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let a of Fv(t))
      !qv.call(e, a) && a !== r && yo(e, a, { get: () => t[a], enumerable: !(n = Lv(t, a)) || n.enumerable });
  return e;
}, jv = (e) => Dv(yo({}, "__esModule", { value: !0 }), e), hl = {};
Nv(hl, {
  default: () => $v
});
var Kv = jv(hl), Te = fr, Ce = Iv, $v = [
  {
    key: "youtube",
    name: "YouTube",
    canPlay: Ce.canPlay.youtube,
    lazyPlayer: (0, Te.lazy)(() => import(
      /* webpackChunkName: 'reactPlayerYouTube' */
      "./YouTube-CJXUZg9T.js"
    ).then((e) => e.Y))
  },
  {
    key: "soundcloud",
    name: "SoundCloud",
    canPlay: Ce.canPlay.soundcloud,
    lazyPlayer: (0, Te.lazy)(() => import(
      /* webpackChunkName: 'reactPlayerSoundCloud' */
      "./SoundCloud-DNq_9nS4.js"
    ).then((e) => e.S))
  },
  {
    key: "vimeo",
    name: "Vimeo",
    canPlay: Ce.canPlay.vimeo,
    lazyPlayer: (0, Te.lazy)(() => import(
      /* webpackChunkName: 'reactPlayerVimeo' */
      "./Vimeo-CILsgiGS.js"
    ).then((e) => e.V))
  },
  {
    key: "mux",
    name: "Mux",
    canPlay: Ce.canPlay.mux,
    lazyPlayer: (0, Te.lazy)(() => import(
      /* webpackChunkName: 'reactPlayerMux' */
      "./Mux-C45EX-gt.js"
    ).then((e) => e.M))
  },
  {
    key: "facebook",
    name: "Facebook",
    canPlay: Ce.canPlay.facebook,
    lazyPlayer: (0, Te.lazy)(() => import(
      /* webpackChunkName: 'reactPlayerFacebook' */
      "./Facebook-SBSW3zv6.js"
    ).then((e) => e.F))
  },
  {
    key: "streamable",
    name: "Streamable",
    canPlay: Ce.canPlay.streamable,
    lazyPlayer: (0, Te.lazy)(() => import(
      /* webpackChunkName: 'reactPlayerStreamable' */
      "./Streamable-CxG93g-G.js"
    ).then((e) => e.S))
  },
  {
    key: "wistia",
    name: "Wistia",
    canPlay: Ce.canPlay.wistia,
    lazyPlayer: (0, Te.lazy)(() => import(
      /* webpackChunkName: 'reactPlayerWistia' */
      "./Wistia-CsMR3Azc.js"
    ).then((e) => e.W))
  },
  {
    key: "twitch",
    name: "Twitch",
    canPlay: Ce.canPlay.twitch,
    lazyPlayer: (0, Te.lazy)(() => import(
      /* webpackChunkName: 'reactPlayerTwitch' */
      "./Twitch-Z37mp9yT.js"
    ).then((e) => e.T))
  },
  {
    key: "dailymotion",
    name: "DailyMotion",
    canPlay: Ce.canPlay.dailymotion,
    lazyPlayer: (0, Te.lazy)(() => import(
      /* webpackChunkName: 'reactPlayerDailyMotion' */
      "./DailyMotion-D1sWxOxC.js"
    ).then((e) => e.D))
  },
  {
    key: "mixcloud",
    name: "Mixcloud",
    canPlay: Ce.canPlay.mixcloud,
    lazyPlayer: (0, Te.lazy)(() => import(
      /* webpackChunkName: 'reactPlayerMixcloud' */
      "./Mixcloud-DfXk37Iq.js"
    ).then((e) => e.M))
  },
  {
    key: "vidyard",
    name: "Vidyard",
    canPlay: Ce.canPlay.vidyard,
    lazyPlayer: (0, Te.lazy)(() => import(
      /* webpackChunkName: 'reactPlayerVidyard' */
      "./Vidyard-C8UWQ0kP.js"
    ).then((e) => e.V))
  },
  {
    key: "kaltura",
    name: "Kaltura",
    canPlay: Ce.canPlay.kaltura,
    lazyPlayer: (0, Te.lazy)(() => import(
      /* webpackChunkName: 'reactPlayerKaltura' */
      "./Kaltura-Qp_4BeqA.js"
    ).then((e) => e.K))
  },
  {
    key: "file",
    name: "FilePlayer",
    canPlay: Ce.canPlay.file,
    canEnablePIP: (e) => Ce.canPlay.file(e) && (document.pictureInPictureEnabled || (0, Te.supportsWebKitPresentationMode)()) && !Ce.AUDIO_EXTENSIONS.test(e),
    lazyPlayer: (0, Te.lazy)(() => import(
      /* webpackChunkName: 'reactPlayerFilePlayer' */
      "./FilePlayer-DMXLSSr9.js"
    ).then((e) => e.F))
  }
], Yo = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function zv(e, t) {
  return !!(e === t || Yo(e) && Yo(t));
}
function Hv(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!zv(e[r], t[r]))
      return !1;
  return !0;
}
function Uv(e, t) {
  t === void 0 && (t = Hv);
  var r, n = [], a, i = !1;
  function o() {
    for (var s = [], u = 0; u < arguments.length; u++)
      s[u] = arguments[u];
    return i && r === this && t(s, n) || (a = e.apply(this, s), i = !0, r = this, n = s), a;
  }
  return o;
}
const Bv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Uv
}, Symbol.toStringTag, { value: "Module" })), Vv = /* @__PURE__ */ qd(Bv);
var Wv = typeof Element < "u", Yv = typeof Map == "function", Gv = typeof Set == "function", Xv = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function tr(e, t) {
  if (e === t)
    return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor)
      return !1;
    var r, n, a;
    if (Array.isArray(e)) {
      if (r = e.length, r != t.length)
        return !1;
      for (n = r; n-- !== 0; )
        if (!tr(e[n], t[n]))
          return !1;
      return !0;
    }
    var i;
    if (Yv && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!tr(n.value[1], t.get(n.value[0])))
          return !1;
      return !0;
    }
    if (Gv && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      return !0;
    }
    if (Xv && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (r = e.length, r != t.length)
        return !1;
      for (n = r; n-- !== 0; )
        if (e[n] !== t[n])
          return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf && typeof e.valueOf == "function" && typeof t.valueOf == "function")
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString && typeof e.toString == "function" && typeof t.toString == "function")
      return e.toString() === t.toString();
    if (a = Object.keys(e), r = a.length, r !== Object.keys(t).length)
      return !1;
    for (n = r; n-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, a[n]))
        return !1;
    if (Wv && e instanceof Element)
      return !1;
    for (n = r; n-- !== 0; )
      if (!((a[n] === "_owner" || a[n] === "__v" || a[n] === "__o") && e.$$typeof) && !tr(e[a[n]], t[a[n]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var yl = function(t, r) {
  try {
    return tr(t, r);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
}, Vi = { exports: {} }, Ht = { exports: {} }, ne = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Go;
function Jv() {
  if (Go)
    return ne;
  Go = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, E = e ? Symbol.for("react.lazy") : 60116, C = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function b(m) {
    if (typeof m == "object" && m !== null) {
      var x = m.$$typeof;
      switch (x) {
        case t:
          switch (m = m.type, m) {
            case u:
            case c:
            case n:
            case i:
            case a:
            case l:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case s:
                case f:
                case E:
                case h:
                case o:
                  return m;
                default:
                  return x;
              }
          }
        case r:
          return x;
      }
    }
  }
  function p(m) {
    return b(m) === c;
  }
  return ne.AsyncMode = u, ne.ConcurrentMode = c, ne.ContextConsumer = s, ne.ContextProvider = o, ne.Element = t, ne.ForwardRef = f, ne.Fragment = n, ne.Lazy = E, ne.Memo = h, ne.Portal = r, ne.Profiler = i, ne.StrictMode = a, ne.Suspense = l, ne.isAsyncMode = function(m) {
    return p(m) || b(m) === u;
  }, ne.isConcurrentMode = p, ne.isContextConsumer = function(m) {
    return b(m) === s;
  }, ne.isContextProvider = function(m) {
    return b(m) === o;
  }, ne.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === t;
  }, ne.isForwardRef = function(m) {
    return b(m) === f;
  }, ne.isFragment = function(m) {
    return b(m) === n;
  }, ne.isLazy = function(m) {
    return b(m) === E;
  }, ne.isMemo = function(m) {
    return b(m) === h;
  }, ne.isPortal = function(m) {
    return b(m) === r;
  }, ne.isProfiler = function(m) {
    return b(m) === i;
  }, ne.isStrictMode = function(m) {
    return b(m) === a;
  }, ne.isSuspense = function(m) {
    return b(m) === l;
  }, ne.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === n || m === c || m === i || m === a || m === l || m === y || typeof m == "object" && m !== null && (m.$$typeof === E || m.$$typeof === h || m.$$typeof === o || m.$$typeof === s || m.$$typeof === f || m.$$typeof === g || m.$$typeof === S || m.$$typeof === O || m.$$typeof === C);
  }, ne.typeOf = b, ne;
}
var ae = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xo;
function Zv() {
  return Xo || (Xo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, E = e ? Symbol.for("react.lazy") : 60116, C = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function b(d) {
      return typeof d == "string" || typeof d == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      d === n || d === c || d === i || d === a || d === l || d === y || typeof d == "object" && d !== null && (d.$$typeof === E || d.$$typeof === h || d.$$typeof === o || d.$$typeof === s || d.$$typeof === f || d.$$typeof === g || d.$$typeof === S || d.$$typeof === O || d.$$typeof === C);
    }
    function p(d) {
      if (typeof d == "object" && d !== null) {
        var _ = d.$$typeof;
        switch (_) {
          case t:
            var A = d.type;
            switch (A) {
              case u:
              case c:
              case n:
              case i:
              case a:
              case l:
                return A;
              default:
                var L = A && A.$$typeof;
                switch (L) {
                  case s:
                  case f:
                  case E:
                  case h:
                  case o:
                    return L;
                  default:
                    return _;
                }
            }
          case r:
            return _;
        }
      }
    }
    var m = u, x = c, P = s, k = o, T = t, q = f, D = n, te = E, H = h, re = r, ie = i, $ = a, ve = l, me = !1;
    function Ae(d) {
      return me || (me = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), R(d) || p(d) === u;
    }
    function R(d) {
      return p(d) === c;
    }
    function I(d) {
      return p(d) === s;
    }
    function W(d) {
      return p(d) === o;
    }
    function B(d) {
      return typeof d == "object" && d !== null && d.$$typeof === t;
    }
    function j(d) {
      return p(d) === f;
    }
    function X(d) {
      return p(d) === n;
    }
    function V(d) {
      return p(d) === E;
    }
    function U(d) {
      return p(d) === h;
    }
    function G(d) {
      return p(d) === r;
    }
    function M(d) {
      return p(d) === i;
    }
    function w(d) {
      return p(d) === a;
    }
    function v(d) {
      return p(d) === l;
    }
    ae.AsyncMode = m, ae.ConcurrentMode = x, ae.ContextConsumer = P, ae.ContextProvider = k, ae.Element = T, ae.ForwardRef = q, ae.Fragment = D, ae.Lazy = te, ae.Memo = H, ae.Portal = re, ae.Profiler = ie, ae.StrictMode = $, ae.Suspense = ve, ae.isAsyncMode = Ae, ae.isConcurrentMode = R, ae.isContextConsumer = I, ae.isContextProvider = W, ae.isElement = B, ae.isForwardRef = j, ae.isFragment = X, ae.isLazy = V, ae.isMemo = U, ae.isPortal = G, ae.isProfiler = M, ae.isStrictMode = w, ae.isSuspense = v, ae.isValidElementType = b, ae.typeOf = p;
  }()), ae;
}
var Jo;
function ml() {
  return Jo || (Jo = 1, process.env.NODE_ENV === "production" ? Ht.exports = Jv() : Ht.exports = Zv()), Ht.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Cr, Zo;
function Qv() {
  if (Zo)
    return Cr;
  Zo = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function a() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var o = {}, s = 0; s < 10; s++)
        o["_" + String.fromCharCode(s)] = s;
      var u = Object.getOwnPropertyNames(o).map(function(f) {
        return o[f];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var c = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        c[f] = f;
      }), Object.keys(Object.assign({}, c)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Cr = a() ? Object.assign : function(i, o) {
    for (var s, u = n(i), c, f = 1; f < arguments.length; f++) {
      s = Object(arguments[f]);
      for (var l in s)
        t.call(s, l) && (u[l] = s[l]);
      if (e) {
        c = e(s);
        for (var y = 0; y < c.length; y++)
          r.call(s, c[y]) && (u[c[y]] = s[c[y]]);
      }
    }
    return u;
  }, Cr;
}
var xr, Qo;
function mo() {
  if (Qo)
    return xr;
  Qo = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return xr = e, xr;
}
var Er, es;
function gl() {
  return es || (es = 1, Er = Function.call.bind(Object.prototype.hasOwnProperty)), Er;
}
var Ar, ts;
function ep() {
  if (ts)
    return Ar;
  ts = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = mo(), r = {}, n = gl();
    e = function(i) {
      var o = "Warning: " + i;
      typeof console < "u" && console.error(o);
      try {
        throw new Error(o);
      } catch {
      }
    };
  }
  function a(i, o, s, u, c) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in i)
        if (n(i, f)) {
          var l;
          try {
            if (typeof i[f] != "function") {
              var y = Error(
                (u || "React class") + ": " + s + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw y.name = "Invariant Violation", y;
            }
            l = i[f](o, f, u, s, null, t);
          } catch (E) {
            l = E;
          }
          if (l && !(l instanceof Error) && e(
            (u || "React class") + ": type specification of " + s + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof l + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), l instanceof Error && !(l.message in r)) {
            r[l.message] = !0;
            var h = c ? c() : "";
            e(
              "Failed " + s + " type: " + l.message + (h ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Ar = a, Ar;
}
var Tr, rs;
function tp() {
  if (rs)
    return Tr;
  rs = 1;
  var e = ml(), t = Qv(), r = mo(), n = gl(), a = ep(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(s) {
    var u = "Warning: " + s;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function o() {
    return null;
  }
  return Tr = function(s, u) {
    var c = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function l(R) {
      var I = R && (c && R[c] || R[f]);
      if (typeof I == "function")
        return I;
    }
    var y = "<<anonymous>>", h = {
      array: S("array"),
      bigint: S("bigint"),
      bool: S("boolean"),
      func: S("function"),
      number: S("number"),
      object: S("object"),
      string: S("string"),
      symbol: S("symbol"),
      any: O(),
      arrayOf: b,
      element: p(),
      elementType: m(),
      instanceOf: x,
      node: q(),
      objectOf: k,
      oneOf: P,
      oneOfType: T,
      shape: te,
      exact: H
    };
    function E(R, I) {
      return R === I ? R !== 0 || 1 / R === 1 / I : R !== R && I !== I;
    }
    function C(R, I) {
      this.message = R, this.data = I && typeof I == "object" ? I : {}, this.stack = "";
    }
    C.prototype = Error.prototype;
    function g(R) {
      if (process.env.NODE_ENV !== "production")
        var I = {}, W = 0;
      function B(X, V, U, G, M, w, v) {
        if (G = G || y, w = w || U, v !== r) {
          if (u) {
            var d = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw d.name = "Invariant Violation", d;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var _ = G + ":" + U;
            !I[_] && // Avoid spamming the console because they are often not actionable except for lib authors
            W < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + w + "` prop on `" + G + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), I[_] = !0, W++);
          }
        }
        return V[U] == null ? X ? V[U] === null ? new C("The " + M + " `" + w + "` is marked as required " + ("in `" + G + "`, but its value is `null`.")) : new C("The " + M + " `" + w + "` is marked as required in " + ("`" + G + "`, but its value is `undefined`.")) : null : R(V, U, G, M, w);
      }
      var j = B.bind(null, !1);
      return j.isRequired = B.bind(null, !0), j;
    }
    function S(R) {
      function I(W, B, j, X, V, U) {
        var G = W[B], M = $(G);
        if (M !== R) {
          var w = ve(G);
          return new C(
            "Invalid " + X + " `" + V + "` of type " + ("`" + w + "` supplied to `" + j + "`, expected ") + ("`" + R + "`."),
            { expectedType: R }
          );
        }
        return null;
      }
      return g(I);
    }
    function O() {
      return g(o);
    }
    function b(R) {
      function I(W, B, j, X, V) {
        if (typeof R != "function")
          return new C("Property `" + V + "` of component `" + j + "` has invalid PropType notation inside arrayOf.");
        var U = W[B];
        if (!Array.isArray(U)) {
          var G = $(U);
          return new C("Invalid " + X + " `" + V + "` of type " + ("`" + G + "` supplied to `" + j + "`, expected an array."));
        }
        for (var M = 0; M < U.length; M++) {
          var w = R(U, M, j, X, V + "[" + M + "]", r);
          if (w instanceof Error)
            return w;
        }
        return null;
      }
      return g(I);
    }
    function p() {
      function R(I, W, B, j, X) {
        var V = I[W];
        if (!s(V)) {
          var U = $(V);
          return new C("Invalid " + j + " `" + X + "` of type " + ("`" + U + "` supplied to `" + B + "`, expected a single ReactElement."));
        }
        return null;
      }
      return g(R);
    }
    function m() {
      function R(I, W, B, j, X) {
        var V = I[W];
        if (!e.isValidElementType(V)) {
          var U = $(V);
          return new C("Invalid " + j + " `" + X + "` of type " + ("`" + U + "` supplied to `" + B + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return g(R);
    }
    function x(R) {
      function I(W, B, j, X, V) {
        if (!(W[B] instanceof R)) {
          var U = R.name || y, G = Ae(W[B]);
          return new C("Invalid " + X + " `" + V + "` of type " + ("`" + G + "` supplied to `" + j + "`, expected ") + ("instance of `" + U + "`."));
        }
        return null;
      }
      return g(I);
    }
    function P(R) {
      if (!Array.isArray(R))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), o;
      function I(W, B, j, X, V) {
        for (var U = W[B], G = 0; G < R.length; G++)
          if (E(U, R[G]))
            return null;
        var M = JSON.stringify(R, function(v, d) {
          var _ = ve(d);
          return _ === "symbol" ? String(d) : d;
        });
        return new C("Invalid " + X + " `" + V + "` of value `" + String(U) + "` " + ("supplied to `" + j + "`, expected one of " + M + "."));
      }
      return g(I);
    }
    function k(R) {
      function I(W, B, j, X, V) {
        if (typeof R != "function")
          return new C("Property `" + V + "` of component `" + j + "` has invalid PropType notation inside objectOf.");
        var U = W[B], G = $(U);
        if (G !== "object")
          return new C("Invalid " + X + " `" + V + "` of type " + ("`" + G + "` supplied to `" + j + "`, expected an object."));
        for (var M in U)
          if (n(U, M)) {
            var w = R(U, M, j, X, V + "." + M, r);
            if (w instanceof Error)
              return w;
          }
        return null;
      }
      return g(I);
    }
    function T(R) {
      if (!Array.isArray(R))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var I = 0; I < R.length; I++) {
        var W = R[I];
        if (typeof W != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + me(W) + " at index " + I + "."
          ), o;
      }
      function B(j, X, V, U, G) {
        for (var M = [], w = 0; w < R.length; w++) {
          var v = R[w], d = v(j, X, V, U, G, r);
          if (d == null)
            return null;
          d.data && n(d.data, "expectedType") && M.push(d.data.expectedType);
        }
        var _ = M.length > 0 ? ", expected one of type [" + M.join(", ") + "]" : "";
        return new C("Invalid " + U + " `" + G + "` supplied to " + ("`" + V + "`" + _ + "."));
      }
      return g(B);
    }
    function q() {
      function R(I, W, B, j, X) {
        return re(I[W]) ? null : new C("Invalid " + j + " `" + X + "` supplied to " + ("`" + B + "`, expected a ReactNode."));
      }
      return g(R);
    }
    function D(R, I, W, B, j) {
      return new C(
        (R || "React class") + ": " + I + " type `" + W + "." + B + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + j + "`."
      );
    }
    function te(R) {
      function I(W, B, j, X, V) {
        var U = W[B], G = $(U);
        if (G !== "object")
          return new C("Invalid " + X + " `" + V + "` of type `" + G + "` " + ("supplied to `" + j + "`, expected `object`."));
        for (var M in R) {
          var w = R[M];
          if (typeof w != "function")
            return D(j, X, V, M, ve(w));
          var v = w(U, M, j, X, V + "." + M, r);
          if (v)
            return v;
        }
        return null;
      }
      return g(I);
    }
    function H(R) {
      function I(W, B, j, X, V) {
        var U = W[B], G = $(U);
        if (G !== "object")
          return new C("Invalid " + X + " `" + V + "` of type `" + G + "` " + ("supplied to `" + j + "`, expected `object`."));
        var M = t({}, W[B], R);
        for (var w in M) {
          var v = R[w];
          if (n(R, w) && typeof v != "function")
            return D(j, X, V, w, ve(v));
          if (!v)
            return new C(
              "Invalid " + X + " `" + V + "` key `" + w + "` supplied to `" + j + "`.\nBad object: " + JSON.stringify(W[B], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(R), null, "  ")
            );
          var d = v(U, w, j, X, V + "." + w, r);
          if (d)
            return d;
        }
        return null;
      }
      return g(I);
    }
    function re(R) {
      switch (typeof R) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !R;
        case "object":
          if (Array.isArray(R))
            return R.every(re);
          if (R === null || s(R))
            return !0;
          var I = l(R);
          if (I) {
            var W = I.call(R), B;
            if (I !== R.entries) {
              for (; !(B = W.next()).done; )
                if (!re(B.value))
                  return !1;
            } else
              for (; !(B = W.next()).done; ) {
                var j = B.value;
                if (j && !re(j[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ie(R, I) {
      return R === "symbol" ? !0 : I ? I["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && I instanceof Symbol : !1;
    }
    function $(R) {
      var I = typeof R;
      return Array.isArray(R) ? "array" : R instanceof RegExp ? "object" : ie(I, R) ? "symbol" : I;
    }
    function ve(R) {
      if (typeof R > "u" || R === null)
        return "" + R;
      var I = $(R);
      if (I === "object") {
        if (R instanceof Date)
          return "date";
        if (R instanceof RegExp)
          return "regexp";
      }
      return I;
    }
    function me(R) {
      var I = ve(R);
      switch (I) {
        case "array":
        case "object":
          return "an " + I;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + I;
        default:
          return I;
      }
    }
    function Ae(R) {
      return !R.constructor || !R.constructor.name ? y : R.constructor.name;
    }
    return h.checkPropTypes = a, h.resetWarningCache = a.resetWarningCache, h.PropTypes = h, h;
  }, Tr;
}
var Rr, ns;
function rp() {
  if (ns)
    return Rr;
  ns = 1;
  var e = mo();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Rr = function() {
    function n(o, s, u, c, f, l) {
      if (l !== e) {
        var y = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw y.name = "Invariant Violation", y;
      }
    }
    n.isRequired = n;
    function a() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: a,
      element: n,
      elementType: n,
      instanceOf: a,
      node: n,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, Rr;
}
if (process.env.NODE_ENV !== "production") {
  var np = ml(), ap = !0;
  Vi.exports = tp()(np.isElement, ap);
} else
  Vi.exports = rp()();
var bl = Vi.exports;
const ee = /* @__PURE__ */ ur(bl);
var ip = Object.create, lr = Object.defineProperty, op = Object.getOwnPropertyDescriptor, sp = Object.getOwnPropertyNames, up = Object.getPrototypeOf, cp = Object.prototype.hasOwnProperty, fp = (e, t) => {
  for (var r in t)
    lr(e, r, { get: t[r], enumerable: !0 });
}, _l = (e, t, r, n) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let a of sp(t))
      !cp.call(e, a) && a !== r && lr(e, a, { get: () => t[a], enumerable: !(n = op(t, a)) || n.enumerable });
  return e;
}, lp = (e, t, r) => (r = e != null ? ip(up(e)) : {}, _l(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  t || !e || !e.__esModule ? lr(r, "default", { value: e, enumerable: !0 }) : r,
  e
)), dp = (e) => _l(lr({}, "__esModule", { value: !0 }), e), wl = {};
fp(wl, {
  defaultProps: () => hp,
  propTypes: () => pp
});
var Ol = dp(wl), vp = lp(bl);
const { string: we, bool: xe, number: it, array: kr, oneOfType: ht, shape: ke, object: Se, func: ge, node: as } = vp.default, pp = {
  url: ht([we, kr, Se]),
  playing: xe,
  loop: xe,
  controls: xe,
  volume: it,
  muted: xe,
  playbackRate: it,
  width: ht([we, it]),
  height: ht([we, it]),
  style: Se,
  progressInterval: it,
  playsinline: xe,
  pip: xe,
  stopOnUnmount: xe,
  light: ht([xe, we, Se]),
  playIcon: as,
  previewTabIndex: it,
  previewAriaLabel: we,
  fallback: as,
  oEmbedUrl: we,
  wrapper: ht([
    we,
    ge,
    ke({ render: ge.isRequired })
  ]),
  config: ke({
    soundcloud: ke({
      options: Se
    }),
    youtube: ke({
      playerVars: Se,
      embedOptions: Se,
      onUnstarted: ge
    }),
    facebook: ke({
      appId: we,
      version: we,
      playerId: we,
      attributes: Se
    }),
    dailymotion: ke({
      params: Se
    }),
    vimeo: ke({
      playerOptions: Se,
      title: we
    }),
    mux: ke({
      attributes: Se,
      version: we
    }),
    file: ke({
      attributes: Se,
      tracks: kr,
      forceVideo: xe,
      forceAudio: xe,
      forceHLS: xe,
      forceSafariHLS: xe,
      forceDisableHls: xe,
      forceDASH: xe,
      forceFLV: xe,
      hlsOptions: Se,
      hlsVersion: we,
      dashVersion: we,
      flvVersion: we
    }),
    wistia: ke({
      options: Se,
      playerId: we,
      customControls: kr
    }),
    mixcloud: ke({
      options: Se
    }),
    twitch: ke({
      options: Se,
      playerId: we
    }),
    vidyard: ke({
      options: Se
    })
  }),
  onReady: ge,
  onStart: ge,
  onPlay: ge,
  onPause: ge,
  onBuffer: ge,
  onBufferEnd: ge,
  onEnded: ge,
  onError: ge,
  onDuration: ge,
  onSeek: ge,
  onPlaybackRateChange: ge,
  onPlaybackQualityChange: ge,
  onProgress: ge,
  onClickPreview: ge,
  onEnablePIP: ge,
  onDisablePIP: ge
}, Oe = () => {
}, hp = {
  playing: !1,
  loop: !1,
  controls: !1,
  volume: null,
  muted: !1,
  playbackRate: 1,
  width: "640px",
  height: "360px",
  style: {},
  progressInterval: 1e3,
  playsinline: !1,
  pip: !1,
  stopOnUnmount: !0,
  light: !1,
  fallback: null,
  wrapper: "div",
  previewTabIndex: 0,
  previewAriaLabel: "",
  oEmbedUrl: "https://noembed.com/embed?url={url}",
  config: {
    soundcloud: {
      options: {
        visual: !0,
        // Undocumented, but makes player fill container and look better
        buying: !1,
        liking: !1,
        download: !1,
        sharing: !1,
        show_comments: !1,
        show_playcount: !1
      }
    },
    youtube: {
      playerVars: {
        playsinline: 1,
        showinfo: 0,
        rel: 0,
        iv_load_policy: 3,
        modestbranding: 1
      },
      embedOptions: {},
      onUnstarted: Oe
    },
    facebook: {
      appId: "1309697205772819",
      version: "v3.3",
      playerId: null,
      attributes: {}
    },
    dailymotion: {
      params: {
        api: 1,
        "endscreen-enable": !1
      }
    },
    vimeo: {
      playerOptions: {
        autopause: !1,
        byline: !1,
        portrait: !1,
        title: !1
      },
      title: null
    },
    mux: {
      attributes: {},
      version: "2"
    },
    file: {
      attributes: {},
      tracks: [],
      forceVideo: !1,
      forceAudio: !1,
      forceHLS: !1,
      forceDASH: !1,
      forceFLV: !1,
      hlsOptions: {},
      hlsVersion: "1.1.4",
      dashVersion: "3.1.3",
      flvVersion: "1.5.0",
      forceDisableHls: !1
    },
    wistia: {
      options: {},
      playerId: null,
      customControls: null
    },
    mixcloud: {
      options: {
        hide_cover: 1
      }
    },
    twitch: {
      options: {},
      playerId: null
    },
    vidyard: {
      options: {}
    }
  },
  onReady: Oe,
  onStart: Oe,
  onPlay: Oe,
  onPause: Oe,
  onBuffer: Oe,
  onBufferEnd: Oe,
  onEnded: Oe,
  onError: Oe,
  onDuration: Oe,
  onSeek: Oe,
  onPlaybackRateChange: Oe,
  onPlaybackQualityChange: Oe,
  onProgress: Oe,
  onClickPreview: Oe,
  onEnablePIP: Oe,
  onDisablePIP: Oe
};
var yp = Object.create, kt = Object.defineProperty, mp = Object.getOwnPropertyDescriptor, gp = Object.getOwnPropertyNames, bp = Object.getPrototypeOf, _p = Object.prototype.hasOwnProperty, wp = (e, t, r) => t in e ? kt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Op = (e, t) => {
  for (var r in t)
    kt(e, r, { get: t[r], enumerable: !0 });
}, Sl = (e, t, r, n) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let a of gp(t))
      !_p.call(e, a) && a !== r && kt(e, a, { get: () => t[a], enumerable: !(n = mp(t, a)) || n.enumerable });
  return e;
}, Pl = (e, t, r) => (r = e != null ? yp(bp(e)) : {}, Sl(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  t || !e || !e.__esModule ? kt(r, "default", { value: e, enumerable: !0 }) : r,
  e
)), Sp = (e) => Sl(kt({}, "__esModule", { value: !0 }), e), he = (e, t, r) => (wp(e, typeof t != "symbol" ? t + "" : t, r), r), Cl = {};
Op(Cl, {
  default: () => dr
});
var Pp = Sp(Cl), is = Pl(Me), Cp = Pl(yl), xl = Ol, xp = fr;
const Ep = 5e3;
class dr extends is.Component {
  constructor() {
    super(...arguments), he(this, "mounted", !1), he(this, "isReady", !1), he(this, "isPlaying", !1), he(this, "isLoading", !0), he(this, "loadOnReady", null), he(this, "startOnPlay", !0), he(this, "seekOnPlay", null), he(this, "onDurationCalled", !1), he(this, "handlePlayerMount", (t) => {
      if (this.player) {
        this.progress();
        return;
      }
      this.player = t, this.player.load(this.props.url), this.progress();
    }), he(this, "getInternalPlayer", (t) => this.player ? this.player[t] : null), he(this, "progress", () => {
      if (this.props.url && this.player && this.isReady) {
        const t = this.getCurrentTime() || 0, r = this.getSecondsLoaded(), n = this.getDuration();
        if (n) {
          const a = {
            playedSeconds: t,
            played: t / n
          };
          r !== null && (a.loadedSeconds = r, a.loaded = r / n), (a.playedSeconds !== this.prevPlayed || a.loadedSeconds !== this.prevLoaded) && this.props.onProgress(a), this.prevPlayed = a.playedSeconds, this.prevLoaded = a.loadedSeconds;
        }
      }
      this.progressTimeout = setTimeout(this.progress, this.props.progressFrequency || this.props.progressInterval);
    }), he(this, "handleReady", () => {
      if (!this.mounted)
        return;
      this.isReady = !0, this.isLoading = !1;
      const { onReady: t, playing: r, volume: n, muted: a } = this.props;
      t(), !a && n !== null && this.player.setVolume(n), this.loadOnReady ? (this.player.load(this.loadOnReady, !0), this.loadOnReady = null) : r && this.player.play(), this.handleDurationCheck();
    }), he(this, "handlePlay", () => {
      this.isPlaying = !0, this.isLoading = !1;
      const { onStart: t, onPlay: r, playbackRate: n } = this.props;
      this.startOnPlay && (this.player.setPlaybackRate && n !== 1 && this.player.setPlaybackRate(n), t(), this.startOnPlay = !1), r(), this.seekOnPlay && (this.seekTo(this.seekOnPlay), this.seekOnPlay = null), this.handleDurationCheck();
    }), he(this, "handlePause", (t) => {
      this.isPlaying = !1, this.isLoading || this.props.onPause(t);
    }), he(this, "handleEnded", () => {
      const { activePlayer: t, loop: r, onEnded: n } = this.props;
      t.loopOnEnded && r && this.seekTo(0), r || (this.isPlaying = !1, n());
    }), he(this, "handleError", (...t) => {
      this.isLoading = !1, this.props.onError(...t);
    }), he(this, "handleDurationCheck", () => {
      clearTimeout(this.durationCheckTimeout);
      const t = this.getDuration();
      t ? this.onDurationCalled || (this.props.onDuration(t), this.onDurationCalled = !0) : this.durationCheckTimeout = setTimeout(this.handleDurationCheck, 100);
    }), he(this, "handleLoaded", () => {
      this.isLoading = !1;
    });
  }
  componentDidMount() {
    this.mounted = !0;
  }
  componentWillUnmount() {
    clearTimeout(this.progressTimeout), clearTimeout(this.durationCheckTimeout), this.isReady && this.props.stopOnUnmount && (this.player.stop(), this.player.disablePIP && this.player.disablePIP()), this.mounted = !1;
  }
  componentDidUpdate(t) {
    if (!this.player)
      return;
    const { url: r, playing: n, volume: a, muted: i, playbackRate: o, pip: s, loop: u, activePlayer: c, disableDeferredLoading: f } = this.props;
    if (!(0, Cp.default)(t.url, r)) {
      if (this.isLoading && !c.forceLoad && !f && !(0, xp.isMediaStream)(r)) {
        console.warn(`ReactPlayer: the attempt to load ${r} is being deferred until the player has loaded`), this.loadOnReady = r;
        return;
      }
      this.isLoading = !0, this.startOnPlay = !0, this.onDurationCalled = !1, this.player.load(r, this.isReady);
    }
    !t.playing && n && !this.isPlaying && this.player.play(), t.playing && !n && this.isPlaying && this.player.pause(), !t.pip && s && this.player.enablePIP && this.player.enablePIP(), t.pip && !s && this.player.disablePIP && this.player.disablePIP(), t.volume !== a && a !== null && this.player.setVolume(a), t.muted !== i && (i ? this.player.mute() : (this.player.unmute(), a !== null && setTimeout(() => this.player.setVolume(a)))), t.playbackRate !== o && this.player.setPlaybackRate && this.player.setPlaybackRate(o), t.loop !== u && this.player.setLoop && this.player.setLoop(u);
  }
  getDuration() {
    return this.isReady ? this.player.getDuration() : null;
  }
  getCurrentTime() {
    return this.isReady ? this.player.getCurrentTime() : null;
  }
  getSecondsLoaded() {
    return this.isReady ? this.player.getSecondsLoaded() : null;
  }
  seekTo(t, r, n) {
    if (!this.isReady) {
      t !== 0 && (this.seekOnPlay = t, setTimeout(() => {
        this.seekOnPlay = null;
      }, Ep));
      return;
    }
    if (r ? r === "fraction" : t > 0 && t < 1) {
      const i = this.player.getDuration();
      if (!i) {
        console.warn("ReactPlayer: could not seek using fraction – duration not yet available");
        return;
      }
      this.player.seekTo(i * t, n);
      return;
    }
    this.player.seekTo(t, n);
  }
  render() {
    const t = this.props.activePlayer;
    return t ? /* @__PURE__ */ is.default.createElement(
      t,
      {
        ...this.props,
        onMount: this.handlePlayerMount,
        onReady: this.handleReady,
        onPlay: this.handlePlay,
        onPause: this.handlePause,
        onEnded: this.handleEnded,
        onLoaded: this.handleLoaded,
        onError: this.handleError
      }
    ) : null;
  }
}
he(dr, "displayName", "Player");
he(dr, "propTypes", xl.propTypes);
he(dr, "defaultProps", xl.defaultProps);
var Ap = Object.create, It = Object.defineProperty, Tp = Object.getOwnPropertyDescriptor, Rp = Object.getOwnPropertyNames, kp = Object.getPrototypeOf, Ip = Object.prototype.hasOwnProperty, Mp = (e, t, r) => t in e ? It(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Lp = (e, t) => {
  for (var r in t)
    It(e, r, { get: t[r], enumerable: !0 });
}, El = (e, t, r, n) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let a of Rp(t))
      !Ip.call(e, a) && a !== r && It(e, a, { get: () => t[a], enumerable: !(n = Tp(t, a)) || n.enumerable });
  return e;
}, Mt = (e, t, r) => (r = e != null ? Ap(kp(e)) : {}, El(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  t || !e || !e.__esModule ? It(r, "default", { value: e, enumerable: !0 }) : r,
  e
)), Fp = (e) => El(It({}, "__esModule", { value: !0 }), e), pe = (e, t, r) => (Mp(e, typeof t != "symbol" ? t + "" : t, r), r), Al = {};
Lp(Al, {
  createReactPlayer: () => Up
});
var qp = Fp(Al), ot = Mt(Me), Np = Mt(Gf), Ir = Mt(Vv), os = Mt(yl), mt = Ol, Tl = fr, Dp = Mt(Pp);
const jp = (0, Tl.lazy)(() => import(
  /* webpackChunkName: 'reactPlayerPreview' */
  "./Preview-gHxyY9BW.js"
).then((e) => e.P)), Kp = typeof window < "u" && window.document && typeof document < "u", $p = typeof We < "u" && We.window && We.window.document, zp = Object.keys(mt.propTypes), Hp = Kp || $p ? ot.Suspense : () => null, yt = [], Up = (e, t) => {
  var r;
  return r = class extends ot.Component {
    constructor() {
      super(...arguments), pe(this, "state", {
        showPreview: !!this.props.light
      }), pe(this, "references", {
        wrapper: (n) => {
          this.wrapper = n;
        },
        player: (n) => {
          this.player = n;
        }
      }), pe(this, "handleClickPreview", (n) => {
        this.setState({ showPreview: !1 }), this.props.onClickPreview(n);
      }), pe(this, "showPreview", () => {
        this.setState({ showPreview: !0 });
      }), pe(this, "getDuration", () => this.player ? this.player.getDuration() : null), pe(this, "getCurrentTime", () => this.player ? this.player.getCurrentTime() : null), pe(this, "getSecondsLoaded", () => this.player ? this.player.getSecondsLoaded() : null), pe(this, "getInternalPlayer", (n = "player") => this.player ? this.player.getInternalPlayer(n) : null), pe(this, "seekTo", (n, a, i) => {
        if (!this.player)
          return null;
        this.player.seekTo(n, a, i);
      }), pe(this, "handleReady", () => {
        this.props.onReady(this);
      }), pe(this, "getActivePlayer", (0, Ir.default)((n) => {
        for (const a of [...yt, ...e])
          if (a.canPlay(n))
            return a;
        return t || null;
      })), pe(this, "getConfig", (0, Ir.default)((n, a) => {
        const { config: i } = this.props;
        return Np.default.all([
          mt.defaultProps.config,
          mt.defaultProps.config[a] || {},
          i,
          i[a] || {}
        ]);
      })), pe(this, "getAttributes", (0, Ir.default)((n) => (0, Tl.omit)(this.props, zp))), pe(this, "renderActivePlayer", (n) => {
        if (!n)
          return null;
        const a = this.getActivePlayer(n);
        if (!a)
          return null;
        const i = this.getConfig(n, a.key);
        return /* @__PURE__ */ ot.default.createElement(
          Dp.default,
          {
            ...this.props,
            key: a.key,
            ref: this.references.player,
            config: i,
            activePlayer: a.lazyPlayer || a,
            onReady: this.handleReady
          }
        );
      });
    }
    shouldComponentUpdate(n, a) {
      return !(0, os.default)(this.props, n) || !(0, os.default)(this.state, a);
    }
    componentDidUpdate(n) {
      const { light: a } = this.props;
      !n.light && a && this.setState({ showPreview: !0 }), n.light && !a && this.setState({ showPreview: !1 });
    }
    renderPreview(n) {
      if (!n)
        return null;
      const { light: a, playIcon: i, previewTabIndex: o, oEmbedUrl: s, previewAriaLabel: u } = this.props;
      return /* @__PURE__ */ ot.default.createElement(
        jp,
        {
          url: n,
          light: a,
          playIcon: i,
          previewTabIndex: o,
          previewAriaLabel: u,
          oEmbedUrl: s,
          onClick: this.handleClickPreview
        }
      );
    }
    render() {
      const { url: n, style: a, width: i, height: o, fallback: s, wrapper: u } = this.props, { showPreview: c } = this.state, f = this.getAttributes(n), l = typeof u == "string" ? this.references.wrapper : void 0;
      return /* @__PURE__ */ ot.default.createElement(u, { ref: l, style: { ...a, width: i, height: o }, ...f }, /* @__PURE__ */ ot.default.createElement(Hp, { fallback: s }, c ? this.renderPreview(n) : this.renderActivePlayer(n)));
    }
  }, pe(r, "displayName", "ReactPlayer"), pe(r, "propTypes", mt.propTypes), pe(r, "defaultProps", mt.defaultProps), pe(r, "addCustomPlayer", (n) => {
    yt.push(n);
  }), pe(r, "removeCustomPlayers", () => {
    yt.length = 0;
  }), pe(r, "canPlay", (n) => {
    for (const a of [...yt, ...e])
      if (a.canPlay(n))
        return !0;
    return !1;
  }), pe(r, "canEnablePIP", (n) => {
    for (const a of [...yt, ...e])
      if (a.canEnablePIP && a.canEnablePIP(n))
        return !0;
    return !1;
  }), r;
};
var Bp = Object.create, vr = Object.defineProperty, Vp = Object.getOwnPropertyDescriptor, Wp = Object.getOwnPropertyNames, Yp = Object.getPrototypeOf, Gp = Object.prototype.hasOwnProperty, Xp = (e, t) => {
  for (var r in t)
    vr(e, r, { get: t[r], enumerable: !0 });
}, Rl = (e, t, r, n) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let a of Wp(t))
      !Gp.call(e, a) && a !== r && vr(e, a, { get: () => t[a], enumerable: !(n = Vp(t, a)) || n.enumerable });
  return e;
}, Jp = (e, t, r) => (r = e != null ? Bp(Yp(e)) : {}, Rl(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  t || !e || !e.__esModule ? vr(r, "default", { value: e, enumerable: !0 }) : r,
  e
)), Zp = (e) => Rl(vr({}, "__esModule", { value: !0 }), e), kl = {};
Xp(kl, {
  default: () => rh
});
var Qp = Zp(kl), Wi = Jp(Kv), eh = qp;
const th = Wi.default[Wi.default.length - 1];
var rh = (0, eh.createReactPlayer)(Wi.default, th);
const nh = /* @__PURE__ */ ur(Qp);
var ah = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const ss = (e) => {
  let t;
  const r = /* @__PURE__ */ new Set(), n = (f, l) => {
    const y = typeof f == "function" ? f(t) : f;
    if (!Object.is(y, t)) {
      const h = t;
      t = l ?? (typeof y != "object" || y === null) ? y : Object.assign({}, t, y), r.forEach((E) => E(t, h));
    }
  }, a = () => t, u = { setState: n, getState: a, getInitialState: () => c, subscribe: (f) => (r.add(f), () => r.delete(f)), destroy: () => {
    (ah ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), r.clear();
  } }, c = t = e(n, a, u);
  return u;
}, ih = (e) => e ? ss(e) : ss;
var Yi = { exports: {} }, Mr = {}, Ut = { exports: {} }, Lr = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var us;
function oh() {
  if (us)
    return Lr;
  us = 1;
  var e = Me;
  function t(l, y) {
    return l === y && (l !== 0 || 1 / l === 1 / y) || l !== l && y !== y;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, a = e.useEffect, i = e.useLayoutEffect, o = e.useDebugValue;
  function s(l, y) {
    var h = y(), E = n({ inst: { value: h, getSnapshot: y } }), C = E[0].inst, g = E[1];
    return i(function() {
      C.value = h, C.getSnapshot = y, u(C) && g({ inst: C });
    }, [l, h, y]), a(function() {
      return u(C) && g({ inst: C }), l(function() {
        u(C) && g({ inst: C });
      });
    }, [l]), o(h), h;
  }
  function u(l) {
    var y = l.getSnapshot;
    l = l.value;
    try {
      var h = y();
      return !r(l, h);
    } catch {
      return !0;
    }
  }
  function c(l, y) {
    return y();
  }
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? c : s;
  return Lr.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : f, Lr;
}
var Fr = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cs;
function sh() {
  return cs || (cs = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = Me, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(b) {
      {
        for (var p = arguments.length, m = new Array(p > 1 ? p - 1 : 0), x = 1; x < p; x++)
          m[x - 1] = arguments[x];
        n("error", b, m);
      }
    }
    function n(b, p, m) {
      {
        var x = t.ReactDebugCurrentFrame, P = x.getStackAddendum();
        P !== "" && (p += "%s", m = m.concat([P]));
        var k = m.map(function(T) {
          return String(T);
        });
        k.unshift("Warning: " + p), Function.prototype.apply.call(console[b], console, k);
      }
    }
    function a(b, p) {
      return b === p && (b !== 0 || 1 / b === 1 / p) || b !== b && p !== p;
    }
    var i = typeof Object.is == "function" ? Object.is : a, o = e.useState, s = e.useEffect, u = e.useLayoutEffect, c = e.useDebugValue, f = !1, l = !1;
    function y(b, p, m) {
      f || e.startTransition !== void 0 && (f = !0, r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var x = p();
      if (!l) {
        var P = p();
        i(x, P) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), l = !0);
      }
      var k = o({
        inst: {
          value: x,
          getSnapshot: p
        }
      }), T = k[0].inst, q = k[1];
      return u(function() {
        T.value = x, T.getSnapshot = p, h(T) && q({
          inst: T
        });
      }, [b, x, p]), s(function() {
        h(T) && q({
          inst: T
        });
        var D = function() {
          h(T) && q({
            inst: T
          });
        };
        return b(D);
      }, [b]), c(x), x;
    }
    function h(b) {
      var p = b.getSnapshot, m = b.value;
      try {
        var x = p();
        return !i(m, x);
      } catch {
        return !0;
      }
    }
    function E(b, p, m) {
      return p();
    }
    var C = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", g = !C, S = g ? E : y, O = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : S;
    Fr.useSyncExternalStore = O, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Fr;
}
var fs;
function Il() {
  return fs || (fs = 1, process.env.NODE_ENV === "production" ? Ut.exports = oh() : Ut.exports = sh()), Ut.exports;
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ls;
function uh() {
  if (ls)
    return Mr;
  ls = 1;
  var e = Me, t = Il();
  function r(c, f) {
    return c === f && (c !== 0 || 1 / c === 1 / f) || c !== c && f !== f;
  }
  var n = typeof Object.is == "function" ? Object.is : r, a = t.useSyncExternalStore, i = e.useRef, o = e.useEffect, s = e.useMemo, u = e.useDebugValue;
  return Mr.useSyncExternalStoreWithSelector = function(c, f, l, y, h) {
    var E = i(null);
    if (E.current === null) {
      var C = { hasValue: !1, value: null };
      E.current = C;
    } else
      C = E.current;
    E = s(function() {
      function S(x) {
        if (!O) {
          if (O = !0, b = x, x = y(x), h !== void 0 && C.hasValue) {
            var P = C.value;
            if (h(P, x))
              return p = P;
          }
          return p = x;
        }
        if (P = p, n(b, x))
          return P;
        var k = y(x);
        return h !== void 0 && h(P, k) ? P : (b = x, p = k);
      }
      var O = !1, b, p, m = l === void 0 ? null : l;
      return [function() {
        return S(f());
      }, m === null ? void 0 : function() {
        return S(m());
      }];
    }, [f, l, y, h]);
    var g = a(c, E[0], E[1]);
    return o(function() {
      C.hasValue = !0, C.value = g;
    }, [g]), u(g), g;
  }, Mr;
}
var qr = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ds;
function ch() {
  return ds || (ds = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = Me, t = Il();
    function r(f, l) {
      return f === l && (f !== 0 || 1 / f === 1 / l) || f !== f && l !== l;
    }
    var n = typeof Object.is == "function" ? Object.is : r, a = t.useSyncExternalStore, i = e.useRef, o = e.useEffect, s = e.useMemo, u = e.useDebugValue;
    function c(f, l, y, h, E) {
      var C = i(null), g;
      C.current === null ? (g = {
        hasValue: !1,
        value: null
      }, C.current = g) : g = C.current;
      var S = s(function() {
        var m = !1, x, P, k = function(te) {
          if (!m) {
            m = !0, x = te;
            var H = h(te);
            if (E !== void 0 && g.hasValue) {
              var re = g.value;
              if (E(re, H))
                return P = re, re;
            }
            return P = H, H;
          }
          var ie = x, $ = P;
          if (n(ie, te))
            return $;
          var ve = h(te);
          return E !== void 0 && E($, ve) ? $ : (x = te, P = ve, ve);
        }, T = y === void 0 ? null : y, q = function() {
          return k(l());
        }, D = T === null ? void 0 : function() {
          return k(T());
        };
        return [q, D];
      }, [l, y, h, E]), O = S[0], b = S[1], p = a(f, O, b);
      return o(function() {
        g.hasValue = !0, g.value = p;
      }, [p]), u(p), p;
    }
    qr.useSyncExternalStoreWithSelector = c, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), qr;
}
process.env.NODE_ENV === "production" ? Yi.exports = uh() : Yi.exports = ch();
var fh = Yi.exports;
const lh = /* @__PURE__ */ ur(fh);
var Ml = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const { useDebugValue: dh } = Me, { useSyncExternalStoreWithSelector: vh } = lh;
let vs = !1;
const ph = (e) => e;
function hh(e, t = ph, r) {
  (Ml ? "production" : void 0) !== "production" && r && !vs && (console.warn(
    "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
  ), vs = !0);
  const n = vh(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    r
  );
  return dh(n), n;
}
const ps = (e) => {
  (Ml ? "production" : void 0) !== "production" && typeof e != "function" && console.warn(
    "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
  );
  const t = typeof e == "function" ? ih(e) : e, r = (n, a) => hh(t, n, a);
  return Object.assign(r, t), r;
}, yh = (e) => e ? ps(e) : ps, mh = {
  activity: !0,
  duration: 0,
  mediaIndex: 0,
  mediaCount: 0,
  progress: {
    playedSeconds: 0
  }
}, se = yh()((e) => ({
  ...mh,
  actions: {
    setActivity: (t) => e({ activity: t }),
    setCustomToggle: (t) => e({ customToggle: t }),
    setDuration: (t) => e({ duration: t }),
    setFullscreen: (t) => e({ fullscreen: t }),
    setLight: (t) => e({ light: t }),
    setLikeToggle: (t) => e({ likeToggle: t }),
    setLoop: (t) => e({ loop: t }),
    setMediaIndex: (t) => e({ mediaIndex: t }),
    setMediaCount: (t) => e({ mediaCount: t }),
    setMuted: (t) => e({ muted: t }),
    setPlayer: (t) => e({ player: t }),
    setPlaying: (t) => e({ playing: t }),
    setProgress: (t) => e({ progress: { playedSeconds: t } }),
    setSubTitle: (t) => e({ subTitle: t }),
    setTitle: (t) => e({ title: t })
  }
}));
var Ll = { exports: {} }, Nr, hs;
function rt() {
  if (hs)
    return Nr;
  hs = 1;
  function e(t) {
    var r = typeof t;
    return t != null && (r == "object" || r == "function");
  }
  return Nr = e, Nr;
}
var Dr, ys;
function Fl() {
  if (ys)
    return Dr;
  ys = 1;
  var e = typeof We == "object" && We && We.Object === Object && We;
  return Dr = e, Dr;
}
var jr, ms;
function je() {
  if (ms)
    return jr;
  ms = 1;
  var e = Fl(), t = typeof self == "object" && self && self.Object === Object && self, r = e || t || Function("return this")();
  return jr = r, jr;
}
var Kr, gs;
function gh() {
  if (gs)
    return Kr;
  gs = 1;
  var e = je(), t = function() {
    return e.Date.now();
  };
  return Kr = t, Kr;
}
var $r, bs;
function bh() {
  if (bs)
    return $r;
  bs = 1;
  var e = /\s/;
  function t(r) {
    for (var n = r.length; n-- && e.test(r.charAt(n)); )
      ;
    return n;
  }
  return $r = t, $r;
}
var zr, _s;
function _h() {
  if (_s)
    return zr;
  _s = 1;
  var e = bh(), t = /^\s+/;
  function r(n) {
    return n && n.slice(0, e(n) + 1).replace(t, "");
  }
  return zr = r, zr;
}
var Hr, ws;
function Lt() {
  if (ws)
    return Hr;
  ws = 1;
  var e = je(), t = e.Symbol;
  return Hr = t, Hr;
}
var Ur, Os;
function wh() {
  if (Os)
    return Ur;
  Os = 1;
  var e = Lt(), t = Object.prototype, r = t.hasOwnProperty, n = t.toString, a = e ? e.toStringTag : void 0;
  function i(o) {
    var s = r.call(o, a), u = o[a];
    try {
      o[a] = void 0;
      var c = !0;
    } catch {
    }
    var f = n.call(o);
    return c && (s ? o[a] = u : delete o[a]), f;
  }
  return Ur = i, Ur;
}
var Br, Ss;
function Oh() {
  if (Ss)
    return Br;
  Ss = 1;
  var e = Object.prototype, t = e.toString;
  function r(n) {
    return t.call(n);
  }
  return Br = r, Br;
}
var Vr, Ps;
function Ft() {
  if (Ps)
    return Vr;
  Ps = 1;
  var e = Lt(), t = wh(), r = Oh(), n = "[object Null]", a = "[object Undefined]", i = e ? e.toStringTag : void 0;
  function o(s) {
    return s == null ? s === void 0 ? a : n : i && i in Object(s) ? t(s) : r(s);
  }
  return Vr = o, Vr;
}
var Wr, Cs;
function vt() {
  if (Cs)
    return Wr;
  Cs = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return Wr = e, Wr;
}
var Yr, xs;
function qt() {
  if (xs)
    return Yr;
  xs = 1;
  var e = Ft(), t = vt(), r = "[object Symbol]";
  function n(a) {
    return typeof a == "symbol" || t(a) && e(a) == r;
  }
  return Yr = n, Yr;
}
var Gr, Es;
function Sh() {
  if (Es)
    return Gr;
  Es = 1;
  var e = _h(), t = rt(), r = qt(), n = NaN, a = /^[-+]0x[0-9a-f]+$/i, i = /^0b[01]+$/i, o = /^0o[0-7]+$/i, s = parseInt;
  function u(c) {
    if (typeof c == "number")
      return c;
    if (r(c))
      return n;
    if (t(c)) {
      var f = typeof c.valueOf == "function" ? c.valueOf() : c;
      c = t(f) ? f + "" : f;
    }
    if (typeof c != "string")
      return c === 0 ? c : +c;
    c = e(c);
    var l = i.test(c);
    return l || o.test(c) ? s(c.slice(2), l ? 2 : 8) : a.test(c) ? n : +c;
  }
  return Gr = u, Gr;
}
var Xr, As;
function ql() {
  if (As)
    return Xr;
  As = 1;
  var e = rt(), t = gh(), r = Sh(), n = "Expected a function", a = Math.max, i = Math.min;
  function o(s, u, c) {
    var f, l, y, h, E, C, g = 0, S = !1, O = !1, b = !0;
    if (typeof s != "function")
      throw new TypeError(n);
    u = r(u) || 0, e(c) && (S = !!c.leading, O = "maxWait" in c, y = O ? a(r(c.maxWait) || 0, u) : y, b = "trailing" in c ? !!c.trailing : b);
    function p(H) {
      var re = f, ie = l;
      return f = l = void 0, g = H, h = s.apply(ie, re), h;
    }
    function m(H) {
      return g = H, E = setTimeout(k, u), S ? p(H) : h;
    }
    function x(H) {
      var re = H - C, ie = H - g, $ = u - re;
      return O ? i($, y - ie) : $;
    }
    function P(H) {
      var re = H - C, ie = H - g;
      return C === void 0 || re >= u || re < 0 || O && ie >= y;
    }
    function k() {
      var H = t();
      if (P(H))
        return T(H);
      E = setTimeout(k, x(H));
    }
    function T(H) {
      return E = void 0, b && f ? p(H) : (f = l = void 0, h);
    }
    function q() {
      E !== void 0 && clearTimeout(E), g = 0, f = C = l = E = void 0;
    }
    function D() {
      return E === void 0 ? h : T(t());
    }
    function te() {
      var H = t(), re = P(H);
      if (f = arguments, l = this, C = H, re) {
        if (E === void 0)
          return m(C);
        if (O)
          return clearTimeout(E), E = setTimeout(k, u), p(C);
      }
      return E === void 0 && (E = setTimeout(k, u)), h;
    }
    return te.cancel = q, te.flush = D, te;
  }
  return Xr = o, Xr;
}
var Jr, Ts;
function Nl() {
  if (Ts)
    return Jr;
  Ts = 1;
  var e = Ft(), t = rt(), r = "[object AsyncFunction]", n = "[object Function]", a = "[object GeneratorFunction]", i = "[object Proxy]";
  function o(s) {
    if (!t(s))
      return !1;
    var u = e(s);
    return u == n || u == a || u == r || u == i;
  }
  return Jr = o, Jr;
}
var Zr, Rs;
function Ph() {
  if (Rs)
    return Zr;
  Rs = 1;
  var e = je(), t = e["__core-js_shared__"];
  return Zr = t, Zr;
}
var Qr, ks;
function Ch() {
  if (ks)
    return Qr;
  ks = 1;
  var e = Ph(), t = function() {
    var n = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return n ? "Symbol(src)_1." + n : "";
  }();
  function r(n) {
    return !!t && t in n;
  }
  return Qr = r, Qr;
}
var en, Is;
function Dl() {
  if (Is)
    return en;
  Is = 1;
  var e = Function.prototype, t = e.toString;
  function r(n) {
    if (n != null) {
      try {
        return t.call(n);
      } catch {
      }
      try {
        return n + "";
      } catch {
      }
    }
    return "";
  }
  return en = r, en;
}
var tn, Ms;
function xh() {
  if (Ms)
    return tn;
  Ms = 1;
  var e = Nl(), t = Ch(), r = rt(), n = Dl(), a = /[\\^$.*+?()[\]{}|]/g, i = /^\[object .+?Constructor\]$/, o = Function.prototype, s = Object.prototype, u = o.toString, c = s.hasOwnProperty, f = RegExp(
    "^" + u.call(c).replace(a, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function l(y) {
    if (!r(y) || t(y))
      return !1;
    var h = e(y) ? f : i;
    return h.test(n(y));
  }
  return tn = l, tn;
}
var rn, Ls;
function Eh() {
  if (Ls)
    return rn;
  Ls = 1;
  function e(t, r) {
    return t == null ? void 0 : t[r];
  }
  return rn = e, rn;
}
var nn, Fs;
function nt() {
  if (Fs)
    return nn;
  Fs = 1;
  var e = xh(), t = Eh();
  function r(n, a) {
    var i = t(n, a);
    return e(i) ? i : void 0;
  }
  return nn = r, nn;
}
var an, qs;
function pr() {
  if (qs)
    return an;
  qs = 1;
  var e = nt(), t = e(Object, "create");
  return an = t, an;
}
var on, Ns;
function Ah() {
  if (Ns)
    return on;
  Ns = 1;
  var e = pr();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return on = t, on;
}
var sn, Ds;
function Th() {
  if (Ds)
    return sn;
  Ds = 1;
  function e(t) {
    var r = this.has(t) && delete this.__data__[t];
    return this.size -= r ? 1 : 0, r;
  }
  return sn = e, sn;
}
var un, js;
function Rh() {
  if (js)
    return un;
  js = 1;
  var e = pr(), t = "__lodash_hash_undefined__", r = Object.prototype, n = r.hasOwnProperty;
  function a(i) {
    var o = this.__data__;
    if (e) {
      var s = o[i];
      return s === t ? void 0 : s;
    }
    return n.call(o, i) ? o[i] : void 0;
  }
  return un = a, un;
}
var cn, Ks;
function kh() {
  if (Ks)
    return cn;
  Ks = 1;
  var e = pr(), t = Object.prototype, r = t.hasOwnProperty;
  function n(a) {
    var i = this.__data__;
    return e ? i[a] !== void 0 : r.call(i, a);
  }
  return cn = n, cn;
}
var fn, $s;
function Ih() {
  if ($s)
    return fn;
  $s = 1;
  var e = pr(), t = "__lodash_hash_undefined__";
  function r(n, a) {
    var i = this.__data__;
    return this.size += this.has(n) ? 0 : 1, i[n] = e && a === void 0 ? t : a, this;
  }
  return fn = r, fn;
}
var ln, zs;
function Mh() {
  if (zs)
    return ln;
  zs = 1;
  var e = Ah(), t = Th(), r = Rh(), n = kh(), a = Ih();
  function i(o) {
    var s = -1, u = o == null ? 0 : o.length;
    for (this.clear(); ++s < u; ) {
      var c = o[s];
      this.set(c[0], c[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = t, i.prototype.get = r, i.prototype.has = n, i.prototype.set = a, ln = i, ln;
}
var dn, Hs;
function Lh() {
  if (Hs)
    return dn;
  Hs = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return dn = e, dn;
}
var vn, Us;
function go() {
  if (Us)
    return vn;
  Us = 1;
  function e(t, r) {
    return t === r || t !== t && r !== r;
  }
  return vn = e, vn;
}
var pn, Bs;
function hr() {
  if (Bs)
    return pn;
  Bs = 1;
  var e = go();
  function t(r, n) {
    for (var a = r.length; a--; )
      if (e(r[a][0], n))
        return a;
    return -1;
  }
  return pn = t, pn;
}
var hn, Vs;
function Fh() {
  if (Vs)
    return hn;
  Vs = 1;
  var e = hr(), t = Array.prototype, r = t.splice;
  function n(a) {
    var i = this.__data__, o = e(i, a);
    if (o < 0)
      return !1;
    var s = i.length - 1;
    return o == s ? i.pop() : r.call(i, o, 1), --this.size, !0;
  }
  return hn = n, hn;
}
var yn, Ws;
function qh() {
  if (Ws)
    return yn;
  Ws = 1;
  var e = hr();
  function t(r) {
    var n = this.__data__, a = e(n, r);
    return a < 0 ? void 0 : n[a][1];
  }
  return yn = t, yn;
}
var mn, Ys;
function Nh() {
  if (Ys)
    return mn;
  Ys = 1;
  var e = hr();
  function t(r) {
    return e(this.__data__, r) > -1;
  }
  return mn = t, mn;
}
var gn, Gs;
function Dh() {
  if (Gs)
    return gn;
  Gs = 1;
  var e = hr();
  function t(r, n) {
    var a = this.__data__, i = e(a, r);
    return i < 0 ? (++this.size, a.push([r, n])) : a[i][1] = n, this;
  }
  return gn = t, gn;
}
var bn, Xs;
function yr() {
  if (Xs)
    return bn;
  Xs = 1;
  var e = Lh(), t = Fh(), r = qh(), n = Nh(), a = Dh();
  function i(o) {
    var s = -1, u = o == null ? 0 : o.length;
    for (this.clear(); ++s < u; ) {
      var c = o[s];
      this.set(c[0], c[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = t, i.prototype.get = r, i.prototype.has = n, i.prototype.set = a, bn = i, bn;
}
var _n, Js;
function bo() {
  if (Js)
    return _n;
  Js = 1;
  var e = nt(), t = je(), r = e(t, "Map");
  return _n = r, _n;
}
var wn, Zs;
function jh() {
  if (Zs)
    return wn;
  Zs = 1;
  var e = Mh(), t = yr(), r = bo();
  function n() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (r || t)(),
      string: new e()
    };
  }
  return wn = n, wn;
}
var On, Qs;
function Kh() {
  if (Qs)
    return On;
  Qs = 1;
  function e(t) {
    var r = typeof t;
    return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? t !== "__proto__" : t === null;
  }
  return On = e, On;
}
var Sn, eu;
function mr() {
  if (eu)
    return Sn;
  eu = 1;
  var e = Kh();
  function t(r, n) {
    var a = r.__data__;
    return e(n) ? a[typeof n == "string" ? "string" : "hash"] : a.map;
  }
  return Sn = t, Sn;
}
var Pn, tu;
function $h() {
  if (tu)
    return Pn;
  tu = 1;
  var e = mr();
  function t(r) {
    var n = e(this, r).delete(r);
    return this.size -= n ? 1 : 0, n;
  }
  return Pn = t, Pn;
}
var Cn, ru;
function zh() {
  if (ru)
    return Cn;
  ru = 1;
  var e = mr();
  function t(r) {
    return e(this, r).get(r);
  }
  return Cn = t, Cn;
}
var xn, nu;
function Hh() {
  if (nu)
    return xn;
  nu = 1;
  var e = mr();
  function t(r) {
    return e(this, r).has(r);
  }
  return xn = t, xn;
}
var En, au;
function Uh() {
  if (au)
    return En;
  au = 1;
  var e = mr();
  function t(r, n) {
    var a = e(this, r), i = a.size;
    return a.set(r, n), this.size += a.size == i ? 0 : 1, this;
  }
  return En = t, En;
}
var An, iu;
function _o() {
  if (iu)
    return An;
  iu = 1;
  var e = jh(), t = $h(), r = zh(), n = Hh(), a = Uh();
  function i(o) {
    var s = -1, u = o == null ? 0 : o.length;
    for (this.clear(); ++s < u; ) {
      var c = o[s];
      this.set(c[0], c[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = t, i.prototype.get = r, i.prototype.has = n, i.prototype.set = a, An = i, An;
}
var Tn, ou;
function Bh() {
  if (ou)
    return Tn;
  ou = 1;
  var e = "__lodash_hash_undefined__";
  function t(r) {
    return this.__data__.set(r, e), this;
  }
  return Tn = t, Tn;
}
var Rn, su;
function Vh() {
  if (su)
    return Rn;
  su = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return Rn = e, Rn;
}
var kn, uu;
function jl() {
  if (uu)
    return kn;
  uu = 1;
  var e = _o(), t = Bh(), r = Vh();
  function n(a) {
    var i = -1, o = a == null ? 0 : a.length;
    for (this.__data__ = new e(); ++i < o; )
      this.add(a[i]);
  }
  return n.prototype.add = n.prototype.push = t, n.prototype.has = r, kn = n, kn;
}
var In, cu;
function Wh() {
  if (cu)
    return In;
  cu = 1;
  function e(t, r, n, a) {
    for (var i = t.length, o = n + (a ? 1 : -1); a ? o-- : ++o < i; )
      if (r(t[o], o, t))
        return o;
    return -1;
  }
  return In = e, In;
}
var Mn, fu;
function Yh() {
  if (fu)
    return Mn;
  fu = 1;
  function e(t) {
    return t !== t;
  }
  return Mn = e, Mn;
}
var Ln, lu;
function Gh() {
  if (lu)
    return Ln;
  lu = 1;
  function e(t, r, n) {
    for (var a = n - 1, i = t.length; ++a < i; )
      if (t[a] === r)
        return a;
    return -1;
  }
  return Ln = e, Ln;
}
var Fn, du;
function Xh() {
  if (du)
    return Fn;
  du = 1;
  var e = Wh(), t = Yh(), r = Gh();
  function n(a, i, o) {
    return i === i ? r(a, i, o) : e(a, t, o);
  }
  return Fn = n, Fn;
}
var qn, vu;
function Jh() {
  if (vu)
    return qn;
  vu = 1;
  var e = Xh();
  function t(r, n) {
    var a = r == null ? 0 : r.length;
    return !!a && e(r, n, 0) > -1;
  }
  return qn = t, qn;
}
var Nn, pu;
function Zh() {
  if (pu)
    return Nn;
  pu = 1;
  function e(t, r, n) {
    for (var a = -1, i = t == null ? 0 : t.length; ++a < i; )
      if (n(r, t[a]))
        return !0;
    return !1;
  }
  return Nn = e, Nn;
}
var Dn, hu;
function wo() {
  if (hu)
    return Dn;
  hu = 1;
  function e(t, r) {
    for (var n = -1, a = t == null ? 0 : t.length, i = Array(a); ++n < a; )
      i[n] = r(t[n], n, t);
    return i;
  }
  return Dn = e, Dn;
}
var jn, yu;
function Oo() {
  if (yu)
    return jn;
  yu = 1;
  function e(t) {
    return function(r) {
      return t(r);
    };
  }
  return jn = e, jn;
}
var Kn, mu;
function Kl() {
  if (mu)
    return Kn;
  mu = 1;
  function e(t, r) {
    return t.has(r);
  }
  return Kn = e, Kn;
}
var $n, gu;
function Qh() {
  if (gu)
    return $n;
  gu = 1;
  var e = jl(), t = Jh(), r = Zh(), n = wo(), a = Oo(), i = Kl(), o = 200;
  function s(u, c, f, l) {
    var y = -1, h = t, E = !0, C = u.length, g = [], S = c.length;
    if (!C)
      return g;
    f && (c = n(c, a(f))), l ? (h = r, E = !1) : c.length >= o && (h = i, E = !1, c = new e(c));
    e:
      for (; ++y < C; ) {
        var O = u[y], b = f == null ? O : f(O);
        if (O = l || O !== 0 ? O : 0, E && b === b) {
          for (var p = S; p--; )
            if (c[p] === b)
              continue e;
          g.push(O);
        } else
          h(c, b, l) || g.push(O);
      }
    return g;
  }
  return $n = s, $n;
}
var zn, bu;
function $l() {
  if (bu)
    return zn;
  bu = 1;
  function e(t, r) {
    for (var n = -1, a = r.length, i = t.length; ++n < a; )
      t[i + n] = r[n];
    return t;
  }
  return zn = e, zn;
}
var Hn, _u;
function ey() {
  if (_u)
    return Hn;
  _u = 1;
  var e = Ft(), t = vt(), r = "[object Arguments]";
  function n(a) {
    return t(a) && e(a) == r;
  }
  return Hn = n, Hn;
}
var Un, wu;
function So() {
  if (wu)
    return Un;
  wu = 1;
  var e = ey(), t = vt(), r = Object.prototype, n = r.hasOwnProperty, a = r.propertyIsEnumerable, i = e(/* @__PURE__ */ function() {
    return arguments;
  }()) ? e : function(o) {
    return t(o) && n.call(o, "callee") && !a.call(o, "callee");
  };
  return Un = i, Un;
}
var Bn, Ou;
function Le() {
  if (Ou)
    return Bn;
  Ou = 1;
  var e = Array.isArray;
  return Bn = e, Bn;
}
var Vn, Su;
function ty() {
  if (Su)
    return Vn;
  Su = 1;
  var e = Lt(), t = So(), r = Le(), n = e ? e.isConcatSpreadable : void 0;
  function a(i) {
    return r(i) || t(i) || !!(n && i && i[n]);
  }
  return Vn = a, Vn;
}
var Wn, Pu;
function zl() {
  if (Pu)
    return Wn;
  Pu = 1;
  var e = $l(), t = ty();
  function r(n, a, i, o, s) {
    var u = -1, c = n.length;
    for (i || (i = t), s || (s = []); ++u < c; ) {
      var f = n[u];
      a > 0 && i(f) ? a > 1 ? r(f, a - 1, i, o, s) : e(s, f) : o || (s[s.length] = f);
    }
    return s;
  }
  return Wn = r, Wn;
}
var Yn, Cu;
function Nt() {
  if (Cu)
    return Yn;
  Cu = 1;
  function e(t) {
    return t;
  }
  return Yn = e, Yn;
}
var Gn, xu;
function ry() {
  if (xu)
    return Gn;
  xu = 1;
  function e(t, r, n) {
    switch (n.length) {
      case 0:
        return t.call(r);
      case 1:
        return t.call(r, n[0]);
      case 2:
        return t.call(r, n[0], n[1]);
      case 3:
        return t.call(r, n[0], n[1], n[2]);
    }
    return t.apply(r, n);
  }
  return Gn = e, Gn;
}
var Xn, Eu;
function ny() {
  if (Eu)
    return Xn;
  Eu = 1;
  var e = ry(), t = Math.max;
  function r(n, a, i) {
    return a = t(a === void 0 ? n.length - 1 : a, 0), function() {
      for (var o = arguments, s = -1, u = t(o.length - a, 0), c = Array(u); ++s < u; )
        c[s] = o[a + s];
      s = -1;
      for (var f = Array(a + 1); ++s < a; )
        f[s] = o[s];
      return f[a] = i(c), e(n, this, f);
    };
  }
  return Xn = r, Xn;
}
var Jn, Au;
function ay() {
  if (Au)
    return Jn;
  Au = 1;
  function e(t) {
    return function() {
      return t;
    };
  }
  return Jn = e, Jn;
}
var Zn, Tu;
function iy() {
  if (Tu)
    return Zn;
  Tu = 1;
  var e = nt(), t = function() {
    try {
      var r = e(Object, "defineProperty");
      return r({}, "", {}), r;
    } catch {
    }
  }();
  return Zn = t, Zn;
}
var Qn, Ru;
function oy() {
  if (Ru)
    return Qn;
  Ru = 1;
  var e = ay(), t = iy(), r = Nt(), n = t ? function(a, i) {
    return t(a, "toString", {
      configurable: !0,
      enumerable: !1,
      value: e(i),
      writable: !0
    });
  } : r;
  return Qn = n, Qn;
}
var ea, ku;
function sy() {
  if (ku)
    return ea;
  ku = 1;
  var e = 800, t = 16, r = Date.now;
  function n(a) {
    var i = 0, o = 0;
    return function() {
      var s = r(), u = t - (s - o);
      if (o = s, u > 0) {
        if (++i >= e)
          return arguments[0];
      } else
        i = 0;
      return a.apply(void 0, arguments);
    };
  }
  return ea = n, ea;
}
var ta, Iu;
function uy() {
  if (Iu)
    return ta;
  Iu = 1;
  var e = oy(), t = sy(), r = t(e);
  return ta = r, ta;
}
var ra, Mu;
function Hl() {
  if (Mu)
    return ra;
  Mu = 1;
  var e = Nt(), t = ny(), r = uy();
  function n(a, i) {
    return r(t(a, i, e), a + "");
  }
  return ra = n, ra;
}
var na, Lu;
function Po() {
  if (Lu)
    return na;
  Lu = 1;
  var e = 9007199254740991;
  function t(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= e;
  }
  return na = t, na;
}
var aa, Fu;
function Dt() {
  if (Fu)
    return aa;
  Fu = 1;
  var e = Nl(), t = Po();
  function r(n) {
    return n != null && t(n.length) && !e(n);
  }
  return aa = r, aa;
}
var ia, qu;
function cy() {
  if (qu)
    return ia;
  qu = 1;
  var e = Dt(), t = vt();
  function r(n) {
    return t(n) && e(n);
  }
  return ia = r, ia;
}
var oa, Nu;
function fy() {
  if (Nu)
    return oa;
  Nu = 1;
  var e = Qh(), t = zl(), r = Hl(), n = cy(), a = r(function(i, o) {
    return n(i) ? e(i, t(o, 1, n, !0)) : [];
  });
  return oa = a, oa;
}
var sa, Du;
function Ul() {
  if (Du)
    return sa;
  Du = 1;
  function e(t, r) {
    for (var n = -1, a = t == null ? 0 : t.length, i = 0, o = []; ++n < a; ) {
      var s = t[n];
      r(s, n, t) && (o[i++] = s);
    }
    return o;
  }
  return sa = e, sa;
}
var ua, ju;
function ly() {
  if (ju)
    return ua;
  ju = 1;
  function e(t) {
    return function(r, n, a) {
      for (var i = -1, o = Object(r), s = a(r), u = s.length; u--; ) {
        var c = s[t ? u : ++i];
        if (n(o[c], c, o) === !1)
          break;
      }
      return r;
    };
  }
  return ua = e, ua;
}
var ca, Ku;
function dy() {
  if (Ku)
    return ca;
  Ku = 1;
  var e = ly(), t = e();
  return ca = t, ca;
}
var fa, $u;
function vy() {
  if ($u)
    return fa;
  $u = 1;
  function e(t, r) {
    for (var n = -1, a = Array(t); ++n < t; )
      a[n] = r(n);
    return a;
  }
  return fa = e, fa;
}
var gt = { exports: {} }, la, zu;
function py() {
  if (zu)
    return la;
  zu = 1;
  function e() {
    return !1;
  }
  return la = e, la;
}
gt.exports;
var Hu;
function Bl() {
  return Hu || (Hu = 1, function(e, t) {
    var r = je(), n = py(), a = t && !t.nodeType && t, i = a && !0 && e && !e.nodeType && e, o = i && i.exports === a, s = o ? r.Buffer : void 0, u = s ? s.isBuffer : void 0, c = u || n;
    e.exports = c;
  }(gt, gt.exports)), gt.exports;
}
var da, Uu;
function Co() {
  if (Uu)
    return da;
  Uu = 1;
  var e = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
  function r(n, a) {
    var i = typeof n;
    return a = a ?? e, !!a && (i == "number" || i != "symbol" && t.test(n)) && n > -1 && n % 1 == 0 && n < a;
  }
  return da = r, da;
}
var va, Bu;
function hy() {
  if (Bu)
    return va;
  Bu = 1;
  var e = Ft(), t = Po(), r = vt(), n = "[object Arguments]", a = "[object Array]", i = "[object Boolean]", o = "[object Date]", s = "[object Error]", u = "[object Function]", c = "[object Map]", f = "[object Number]", l = "[object Object]", y = "[object RegExp]", h = "[object Set]", E = "[object String]", C = "[object WeakMap]", g = "[object ArrayBuffer]", S = "[object DataView]", O = "[object Float32Array]", b = "[object Float64Array]", p = "[object Int8Array]", m = "[object Int16Array]", x = "[object Int32Array]", P = "[object Uint8Array]", k = "[object Uint8ClampedArray]", T = "[object Uint16Array]", q = "[object Uint32Array]", D = {};
  D[O] = D[b] = D[p] = D[m] = D[x] = D[P] = D[k] = D[T] = D[q] = !0, D[n] = D[a] = D[g] = D[i] = D[S] = D[o] = D[s] = D[u] = D[c] = D[f] = D[l] = D[y] = D[h] = D[E] = D[C] = !1;
  function te(H) {
    return r(H) && t(H.length) && !!D[e(H)];
  }
  return va = te, va;
}
var bt = { exports: {} };
bt.exports;
var Vu;
function yy() {
  return Vu || (Vu = 1, function(e, t) {
    var r = Fl(), n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, o = i && r.process, s = function() {
      try {
        var u = a && a.require && a.require("util").types;
        return u || o && o.binding && o.binding("util");
      } catch {
      }
    }();
    e.exports = s;
  }(bt, bt.exports)), bt.exports;
}
var pa, Wu;
function Vl() {
  if (Wu)
    return pa;
  Wu = 1;
  var e = hy(), t = Oo(), r = yy(), n = r && r.isTypedArray, a = n ? t(n) : e;
  return pa = a, pa;
}
var ha, Yu;
function my() {
  if (Yu)
    return ha;
  Yu = 1;
  var e = vy(), t = So(), r = Le(), n = Bl(), a = Co(), i = Vl(), o = Object.prototype, s = o.hasOwnProperty;
  function u(c, f) {
    var l = r(c), y = !l && t(c), h = !l && !y && n(c), E = !l && !y && !h && i(c), C = l || y || h || E, g = C ? e(c.length, String) : [], S = g.length;
    for (var O in c)
      (f || s.call(c, O)) && !(C && // Safari 9 has enumerable `arguments.length` in strict mode.
      (O == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      h && (O == "offset" || O == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      E && (O == "buffer" || O == "byteLength" || O == "byteOffset") || // Skip index properties.
      a(O, S))) && g.push(O);
    return g;
  }
  return ha = u, ha;
}
var ya, Gu;
function gy() {
  if (Gu)
    return ya;
  Gu = 1;
  var e = Object.prototype;
  function t(r) {
    var n = r && r.constructor, a = typeof n == "function" && n.prototype || e;
    return r === a;
  }
  return ya = t, ya;
}
var ma, Xu;
function by() {
  if (Xu)
    return ma;
  Xu = 1;
  function e(t, r) {
    return function(n) {
      return t(r(n));
    };
  }
  return ma = e, ma;
}
var ga, Ju;
function _y() {
  if (Ju)
    return ga;
  Ju = 1;
  var e = by(), t = e(Object.keys, Object);
  return ga = t, ga;
}
var ba, Zu;
function wy() {
  if (Zu)
    return ba;
  Zu = 1;
  var e = gy(), t = _y(), r = Object.prototype, n = r.hasOwnProperty;
  function a(i) {
    if (!e(i))
      return t(i);
    var o = [];
    for (var s in Object(i))
      n.call(i, s) && s != "constructor" && o.push(s);
    return o;
  }
  return ba = a, ba;
}
var _a, Qu;
function xo() {
  if (Qu)
    return _a;
  Qu = 1;
  var e = my(), t = wy(), r = Dt();
  function n(a) {
    return r(a) ? e(a) : t(a);
  }
  return _a = n, _a;
}
var wa, ec;
function Eo() {
  if (ec)
    return wa;
  ec = 1;
  var e = dy(), t = xo();
  function r(n, a) {
    return n && e(n, a, t);
  }
  return wa = r, wa;
}
var Oa, tc;
function Oy() {
  if (tc)
    return Oa;
  tc = 1;
  var e = Dt();
  function t(r, n) {
    return function(a, i) {
      if (a == null)
        return a;
      if (!e(a))
        return r(a, i);
      for (var o = a.length, s = n ? o : -1, u = Object(a); (n ? s-- : ++s < o) && i(u[s], s, u) !== !1; )
        ;
      return a;
    };
  }
  return Oa = t, Oa;
}
var Sa, rc;
function Ao() {
  if (rc)
    return Sa;
  rc = 1;
  var e = Eo(), t = Oy(), r = t(e);
  return Sa = r, Sa;
}
var Pa, nc;
function Sy() {
  if (nc)
    return Pa;
  nc = 1;
  var e = Ao();
  function t(r, n) {
    var a = [];
    return e(r, function(i, o, s) {
      n(i, o, s) && a.push(i);
    }), a;
  }
  return Pa = t, Pa;
}
var Ca, ac;
function Py() {
  if (ac)
    return Ca;
  ac = 1;
  var e = yr();
  function t() {
    this.__data__ = new e(), this.size = 0;
  }
  return Ca = t, Ca;
}
var xa, ic;
function Cy() {
  if (ic)
    return xa;
  ic = 1;
  function e(t) {
    var r = this.__data__, n = r.delete(t);
    return this.size = r.size, n;
  }
  return xa = e, xa;
}
var Ea, oc;
function xy() {
  if (oc)
    return Ea;
  oc = 1;
  function e(t) {
    return this.__data__.get(t);
  }
  return Ea = e, Ea;
}
var Aa, sc;
function Ey() {
  if (sc)
    return Aa;
  sc = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return Aa = e, Aa;
}
var Ta, uc;
function Ay() {
  if (uc)
    return Ta;
  uc = 1;
  var e = yr(), t = bo(), r = _o(), n = 200;
  function a(i, o) {
    var s = this.__data__;
    if (s instanceof e) {
      var u = s.__data__;
      if (!t || u.length < n - 1)
        return u.push([i, o]), this.size = ++s.size, this;
      s = this.__data__ = new r(u);
    }
    return s.set(i, o), this.size = s.size, this;
  }
  return Ta = a, Ta;
}
var Ra, cc;
function Wl() {
  if (cc)
    return Ra;
  cc = 1;
  var e = yr(), t = Py(), r = Cy(), n = xy(), a = Ey(), i = Ay();
  function o(s) {
    var u = this.__data__ = new e(s);
    this.size = u.size;
  }
  return o.prototype.clear = t, o.prototype.delete = r, o.prototype.get = n, o.prototype.has = a, o.prototype.set = i, Ra = o, Ra;
}
var ka, fc;
function Ty() {
  if (fc)
    return ka;
  fc = 1;
  function e(t, r) {
    for (var n = -1, a = t == null ? 0 : t.length; ++n < a; )
      if (r(t[n], n, t))
        return !0;
    return !1;
  }
  return ka = e, ka;
}
var Ia, lc;
function Yl() {
  if (lc)
    return Ia;
  lc = 1;
  var e = jl(), t = Ty(), r = Kl(), n = 1, a = 2;
  function i(o, s, u, c, f, l) {
    var y = u & n, h = o.length, E = s.length;
    if (h != E && !(y && E > h))
      return !1;
    var C = l.get(o), g = l.get(s);
    if (C && g)
      return C == s && g == o;
    var S = -1, O = !0, b = u & a ? new e() : void 0;
    for (l.set(o, s), l.set(s, o); ++S < h; ) {
      var p = o[S], m = s[S];
      if (c)
        var x = y ? c(m, p, S, s, o, l) : c(p, m, S, o, s, l);
      if (x !== void 0) {
        if (x)
          continue;
        O = !1;
        break;
      }
      if (b) {
        if (!t(s, function(P, k) {
          if (!r(b, k) && (p === P || f(p, P, u, c, l)))
            return b.push(k);
        })) {
          O = !1;
          break;
        }
      } else if (!(p === m || f(p, m, u, c, l))) {
        O = !1;
        break;
      }
    }
    return l.delete(o), l.delete(s), O;
  }
  return Ia = i, Ia;
}
var Ma, dc;
function Ry() {
  if (dc)
    return Ma;
  dc = 1;
  var e = je(), t = e.Uint8Array;
  return Ma = t, Ma;
}
var La, vc;
function ky() {
  if (vc)
    return La;
  vc = 1;
  function e(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(a, i) {
      n[++r] = [i, a];
    }), n;
  }
  return La = e, La;
}
var Fa, pc;
function Iy() {
  if (pc)
    return Fa;
  pc = 1;
  function e(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(a) {
      n[++r] = a;
    }), n;
  }
  return Fa = e, Fa;
}
var qa, hc;
function My() {
  if (hc)
    return qa;
  hc = 1;
  var e = Lt(), t = Ry(), r = go(), n = Yl(), a = ky(), i = Iy(), o = 1, s = 2, u = "[object Boolean]", c = "[object Date]", f = "[object Error]", l = "[object Map]", y = "[object Number]", h = "[object RegExp]", E = "[object Set]", C = "[object String]", g = "[object Symbol]", S = "[object ArrayBuffer]", O = "[object DataView]", b = e ? e.prototype : void 0, p = b ? b.valueOf : void 0;
  function m(x, P, k, T, q, D, te) {
    switch (k) {
      case O:
        if (x.byteLength != P.byteLength || x.byteOffset != P.byteOffset)
          return !1;
        x = x.buffer, P = P.buffer;
      case S:
        return !(x.byteLength != P.byteLength || !D(new t(x), new t(P)));
      case u:
      case c:
      case y:
        return r(+x, +P);
      case f:
        return x.name == P.name && x.message == P.message;
      case h:
      case C:
        return x == P + "";
      case l:
        var H = a;
      case E:
        var re = T & o;
        if (H || (H = i), x.size != P.size && !re)
          return !1;
        var ie = te.get(x);
        if (ie)
          return ie == P;
        T |= s, te.set(x, P);
        var $ = n(H(x), H(P), T, q, D, te);
        return te.delete(x), $;
      case g:
        if (p)
          return p.call(x) == p.call(P);
    }
    return !1;
  }
  return qa = m, qa;
}
var Na, yc;
function Ly() {
  if (yc)
    return Na;
  yc = 1;
  var e = $l(), t = Le();
  function r(n, a, i) {
    var o = a(n);
    return t(n) ? o : e(o, i(n));
  }
  return Na = r, Na;
}
var Da, mc;
function Fy() {
  if (mc)
    return Da;
  mc = 1;
  function e() {
    return [];
  }
  return Da = e, Da;
}
var ja, gc;
function qy() {
  if (gc)
    return ja;
  gc = 1;
  var e = Ul(), t = Fy(), r = Object.prototype, n = r.propertyIsEnumerable, a = Object.getOwnPropertySymbols, i = a ? function(o) {
    return o == null ? [] : (o = Object(o), e(a(o), function(s) {
      return n.call(o, s);
    }));
  } : t;
  return ja = i, ja;
}
var Ka, bc;
function Ny() {
  if (bc)
    return Ka;
  bc = 1;
  var e = Ly(), t = qy(), r = xo();
  function n(a) {
    return e(a, r, t);
  }
  return Ka = n, Ka;
}
var $a, _c;
function Dy() {
  if (_c)
    return $a;
  _c = 1;
  var e = Ny(), t = 1, r = Object.prototype, n = r.hasOwnProperty;
  function a(i, o, s, u, c, f) {
    var l = s & t, y = e(i), h = y.length, E = e(o), C = E.length;
    if (h != C && !l)
      return !1;
    for (var g = h; g--; ) {
      var S = y[g];
      if (!(l ? S in o : n.call(o, S)))
        return !1;
    }
    var O = f.get(i), b = f.get(o);
    if (O && b)
      return O == o && b == i;
    var p = !0;
    f.set(i, o), f.set(o, i);
    for (var m = l; ++g < h; ) {
      S = y[g];
      var x = i[S], P = o[S];
      if (u)
        var k = l ? u(P, x, S, o, i, f) : u(x, P, S, i, o, f);
      if (!(k === void 0 ? x === P || c(x, P, s, u, f) : k)) {
        p = !1;
        break;
      }
      m || (m = S == "constructor");
    }
    if (p && !m) {
      var T = i.constructor, q = o.constructor;
      T != q && "constructor" in i && "constructor" in o && !(typeof T == "function" && T instanceof T && typeof q == "function" && q instanceof q) && (p = !1);
    }
    return f.delete(i), f.delete(o), p;
  }
  return $a = a, $a;
}
var za, wc;
function jy() {
  if (wc)
    return za;
  wc = 1;
  var e = nt(), t = je(), r = e(t, "DataView");
  return za = r, za;
}
var Ha, Oc;
function Ky() {
  if (Oc)
    return Ha;
  Oc = 1;
  var e = nt(), t = je(), r = e(t, "Promise");
  return Ha = r, Ha;
}
var Ua, Sc;
function $y() {
  if (Sc)
    return Ua;
  Sc = 1;
  var e = nt(), t = je(), r = e(t, "Set");
  return Ua = r, Ua;
}
var Ba, Pc;
function zy() {
  if (Pc)
    return Ba;
  Pc = 1;
  var e = nt(), t = je(), r = e(t, "WeakMap");
  return Ba = r, Ba;
}
var Va, Cc;
function Hy() {
  if (Cc)
    return Va;
  Cc = 1;
  var e = jy(), t = bo(), r = Ky(), n = $y(), a = zy(), i = Ft(), o = Dl(), s = "[object Map]", u = "[object Object]", c = "[object Promise]", f = "[object Set]", l = "[object WeakMap]", y = "[object DataView]", h = o(e), E = o(t), C = o(r), g = o(n), S = o(a), O = i;
  return (e && O(new e(new ArrayBuffer(1))) != y || t && O(new t()) != s || r && O(r.resolve()) != c || n && O(new n()) != f || a && O(new a()) != l) && (O = function(b) {
    var p = i(b), m = p == u ? b.constructor : void 0, x = m ? o(m) : "";
    if (x)
      switch (x) {
        case h:
          return y;
        case E:
          return s;
        case C:
          return c;
        case g:
          return f;
        case S:
          return l;
      }
    return p;
  }), Va = O, Va;
}
var Wa, xc;
function Uy() {
  if (xc)
    return Wa;
  xc = 1;
  var e = Wl(), t = Yl(), r = My(), n = Dy(), a = Hy(), i = Le(), o = Bl(), s = Vl(), u = 1, c = "[object Arguments]", f = "[object Array]", l = "[object Object]", y = Object.prototype, h = y.hasOwnProperty;
  function E(C, g, S, O, b, p) {
    var m = i(C), x = i(g), P = m ? f : a(C), k = x ? f : a(g);
    P = P == c ? l : P, k = k == c ? l : k;
    var T = P == l, q = k == l, D = P == k;
    if (D && o(C)) {
      if (!o(g))
        return !1;
      m = !0, T = !1;
    }
    if (D && !T)
      return p || (p = new e()), m || s(C) ? t(C, g, S, O, b, p) : r(C, g, P, S, O, b, p);
    if (!(S & u)) {
      var te = T && h.call(C, "__wrapped__"), H = q && h.call(g, "__wrapped__");
      if (te || H) {
        var re = te ? C.value() : C, ie = H ? g.value() : g;
        return p || (p = new e()), b(re, ie, S, O, p);
      }
    }
    return D ? (p || (p = new e()), n(C, g, S, O, b, p)) : !1;
  }
  return Wa = E, Wa;
}
var Ya, Ec;
function Gl() {
  if (Ec)
    return Ya;
  Ec = 1;
  var e = Uy(), t = vt();
  function r(n, a, i, o, s) {
    return n === a ? !0 : n == null || a == null || !t(n) && !t(a) ? n !== n && a !== a : e(n, a, i, o, r, s);
  }
  return Ya = r, Ya;
}
var Ga, Ac;
function By() {
  if (Ac)
    return Ga;
  Ac = 1;
  var e = Wl(), t = Gl(), r = 1, n = 2;
  function a(i, o, s, u) {
    var c = s.length, f = c, l = !u;
    if (i == null)
      return !f;
    for (i = Object(i); c--; ) {
      var y = s[c];
      if (l && y[2] ? y[1] !== i[y[0]] : !(y[0] in i))
        return !1;
    }
    for (; ++c < f; ) {
      y = s[c];
      var h = y[0], E = i[h], C = y[1];
      if (l && y[2]) {
        if (E === void 0 && !(h in i))
          return !1;
      } else {
        var g = new e();
        if (u)
          var S = u(E, C, h, i, o, g);
        if (!(S === void 0 ? t(C, E, r | n, u, g) : S))
          return !1;
      }
    }
    return !0;
  }
  return Ga = a, Ga;
}
var Xa, Tc;
function Xl() {
  if (Tc)
    return Xa;
  Tc = 1;
  var e = rt();
  function t(r) {
    return r === r && !e(r);
  }
  return Xa = t, Xa;
}
var Ja, Rc;
function Vy() {
  if (Rc)
    return Ja;
  Rc = 1;
  var e = Xl(), t = xo();
  function r(n) {
    for (var a = t(n), i = a.length; i--; ) {
      var o = a[i], s = n[o];
      a[i] = [o, s, e(s)];
    }
    return a;
  }
  return Ja = r, Ja;
}
var Za, kc;
function Jl() {
  if (kc)
    return Za;
  kc = 1;
  function e(t, r) {
    return function(n) {
      return n == null ? !1 : n[t] === r && (r !== void 0 || t in Object(n));
    };
  }
  return Za = e, Za;
}
var Qa, Ic;
function Wy() {
  if (Ic)
    return Qa;
  Ic = 1;
  var e = By(), t = Vy(), r = Jl();
  function n(a) {
    var i = t(a);
    return i.length == 1 && i[0][2] ? r(i[0][0], i[0][1]) : function(o) {
      return o === a || e(o, a, i);
    };
  }
  return Qa = n, Qa;
}
var ei, Mc;
function To() {
  if (Mc)
    return ei;
  Mc = 1;
  var e = Le(), t = qt(), r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n = /^\w*$/;
  function a(i, o) {
    if (e(i))
      return !1;
    var s = typeof i;
    return s == "number" || s == "symbol" || s == "boolean" || i == null || t(i) ? !0 : n.test(i) || !r.test(i) || o != null && i in Object(o);
  }
  return ei = a, ei;
}
var ti, Lc;
function Yy() {
  if (Lc)
    return ti;
  Lc = 1;
  var e = _o(), t = "Expected a function";
  function r(n, a) {
    if (typeof n != "function" || a != null && typeof a != "function")
      throw new TypeError(t);
    var i = function() {
      var o = arguments, s = a ? a.apply(this, o) : o[0], u = i.cache;
      if (u.has(s))
        return u.get(s);
      var c = n.apply(this, o);
      return i.cache = u.set(s, c) || u, c;
    };
    return i.cache = new (r.Cache || e)(), i;
  }
  return r.Cache = e, ti = r, ti;
}
var ri, Fc;
function Gy() {
  if (Fc)
    return ri;
  Fc = 1;
  var e = Yy(), t = 500;
  function r(n) {
    var a = e(n, function(o) {
      return i.size === t && i.clear(), o;
    }), i = a.cache;
    return a;
  }
  return ri = r, ri;
}
var ni, qc;
function Xy() {
  if (qc)
    return ni;
  qc = 1;
  var e = Gy(), t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, r = /\\(\\)?/g, n = e(function(a) {
    var i = [];
    return a.charCodeAt(0) === 46 && i.push(""), a.replace(t, function(o, s, u, c) {
      i.push(u ? c.replace(r, "$1") : s || o);
    }), i;
  });
  return ni = n, ni;
}
var ai, Nc;
function Jy() {
  if (Nc)
    return ai;
  Nc = 1;
  var e = Lt(), t = wo(), r = Le(), n = qt(), a = 1 / 0, i = e ? e.prototype : void 0, o = i ? i.toString : void 0;
  function s(u) {
    if (typeof u == "string")
      return u;
    if (r(u))
      return t(u, s) + "";
    if (n(u))
      return o ? o.call(u) : "";
    var c = u + "";
    return c == "0" && 1 / u == -a ? "-0" : c;
  }
  return ai = s, ai;
}
var ii, Dc;
function Zl() {
  if (Dc)
    return ii;
  Dc = 1;
  var e = Jy();
  function t(r) {
    return r == null ? "" : e(r);
  }
  return ii = t, ii;
}
var oi, jc;
function Ql() {
  if (jc)
    return oi;
  jc = 1;
  var e = Le(), t = To(), r = Xy(), n = Zl();
  function a(i, o) {
    return e(i) ? i : t(i, o) ? [i] : r(n(i));
  }
  return oi = a, oi;
}
var si, Kc;
function gr() {
  if (Kc)
    return si;
  Kc = 1;
  var e = qt(), t = 1 / 0;
  function r(n) {
    if (typeof n == "string" || e(n))
      return n;
    var a = n + "";
    return a == "0" && 1 / n == -t ? "-0" : a;
  }
  return si = r, si;
}
var ui, $c;
function Ro() {
  if ($c)
    return ui;
  $c = 1;
  var e = Ql(), t = gr();
  function r(n, a) {
    a = e(a, n);
    for (var i = 0, o = a.length; n != null && i < o; )
      n = n[t(a[i++])];
    return i && i == o ? n : void 0;
  }
  return ui = r, ui;
}
var ci, zc;
function Zy() {
  if (zc)
    return ci;
  zc = 1;
  var e = Ro();
  function t(r, n, a) {
    var i = r == null ? void 0 : e(r, n);
    return i === void 0 ? a : i;
  }
  return ci = t, ci;
}
var fi, Hc;
function Qy() {
  if (Hc)
    return fi;
  Hc = 1;
  function e(t, r) {
    return t != null && r in Object(t);
  }
  return fi = e, fi;
}
var li, Uc;
function em() {
  if (Uc)
    return li;
  Uc = 1;
  var e = Ql(), t = So(), r = Le(), n = Co(), a = Po(), i = gr();
  function o(s, u, c) {
    u = e(u, s);
    for (var f = -1, l = u.length, y = !1; ++f < l; ) {
      var h = i(u[f]);
      if (!(y = s != null && c(s, h)))
        break;
      s = s[h];
    }
    return y || ++f != l ? y : (l = s == null ? 0 : s.length, !!l && a(l) && n(h, l) && (r(s) || t(s)));
  }
  return li = o, li;
}
var di, Bc;
function tm() {
  if (Bc)
    return di;
  Bc = 1;
  var e = Qy(), t = em();
  function r(n, a) {
    return n != null && t(n, a, e);
  }
  return di = r, di;
}
var vi, Vc;
function rm() {
  if (Vc)
    return vi;
  Vc = 1;
  var e = Gl(), t = Zy(), r = tm(), n = To(), a = Xl(), i = Jl(), o = gr(), s = 1, u = 2;
  function c(f, l) {
    return n(f) && a(l) ? i(o(f), l) : function(y) {
      var h = t(y, f);
      return h === void 0 && h === l ? r(y, f) : e(l, h, s | u);
    };
  }
  return vi = c, vi;
}
var pi, Wc;
function nm() {
  if (Wc)
    return pi;
  Wc = 1;
  function e(t) {
    return function(r) {
      return r == null ? void 0 : r[t];
    };
  }
  return pi = e, pi;
}
var hi, Yc;
function am() {
  if (Yc)
    return hi;
  Yc = 1;
  var e = Ro();
  function t(r) {
    return function(n) {
      return e(n, r);
    };
  }
  return hi = t, hi;
}
var yi, Gc;
function im() {
  if (Gc)
    return yi;
  Gc = 1;
  var e = nm(), t = am(), r = To(), n = gr();
  function a(i) {
    return r(i) ? e(n(i)) : t(i);
  }
  return yi = a, yi;
}
var mi, Xc;
function ko() {
  if (Xc)
    return mi;
  Xc = 1;
  var e = Wy(), t = rm(), r = Nt(), n = Le(), a = im();
  function i(o) {
    return typeof o == "function" ? o : o == null ? r : typeof o == "object" ? n(o) ? t(o[0], o[1]) : e(o) : a(o);
  }
  return mi = i, mi;
}
var gi, Jc;
function om() {
  if (Jc)
    return gi;
  Jc = 1;
  var e = Ul(), t = Sy(), r = ko(), n = Le();
  function a(i, o) {
    var s = n(i) ? e : t;
    return s(i, r(o, 3));
  }
  return gi = a, gi;
}
var bi, Zc;
function sm() {
  if (Zc)
    return bi;
  Zc = 1;
  function e(t, r, n) {
    var a;
    return n(t, function(i, o, s) {
      if (r(i, o, s))
        return a = o, !1;
    }), a;
  }
  return bi = e, bi;
}
var _i, Qc;
function um() {
  if (Qc)
    return _i;
  Qc = 1;
  var e = sm(), t = Eo(), r = ko();
  function n(a, i) {
    return e(a, r(i, 3), t);
  }
  return _i = n, _i;
}
var wi, ef;
function cm() {
  if (ef)
    return wi;
  ef = 1;
  function e(t) {
    return t && t.length ? t[0] : void 0;
  }
  return wi = e, wi;
}
var Oi, tf;
function fm() {
  return tf || (tf = 1, Oi = cm()), Oi;
}
var Si, rf;
function lm() {
  if (rf)
    return Si;
  rf = 1;
  function e(t, r) {
    for (var n = -1, a = t == null ? 0 : t.length; ++n < a && r(t[n], n, t) !== !1; )
      ;
    return t;
  }
  return Si = e, Si;
}
var Pi, nf;
function ed() {
  if (nf)
    return Pi;
  nf = 1;
  var e = Nt();
  function t(r) {
    return typeof r == "function" ? r : e;
  }
  return Pi = t, Pi;
}
var Ci, af;
function dm() {
  if (af)
    return Ci;
  af = 1;
  var e = lm(), t = Ao(), r = ed(), n = Le();
  function a(i, o) {
    var s = n(i) ? e : t;
    return s(i, r(o));
  }
  return Ci = a, Ci;
}
var xi, of;
function vm() {
  if (of)
    return xi;
  of = 1;
  var e = Eo(), t = ed();
  function r(n, a) {
    return n && e(n, t(a));
  }
  return xi = r, xi;
}
var Ei, sf;
function pm() {
  if (sf)
    return Ei;
  sf = 1;
  function e() {
  }
  return Ei = e, Ei;
}
var Ai, uf;
function hm() {
  if (uf)
    return Ai;
  uf = 1;
  var e = Ao(), t = Dt();
  function r(n, a) {
    var i = -1, o = t(n) ? Array(n.length) : [];
    return e(n, function(s, u, c) {
      o[++i] = a(s, u, c);
    }), o;
  }
  return Ai = r, Ai;
}
var Ti, cf;
function ym() {
  if (cf)
    return Ti;
  cf = 1;
  function e(t, r) {
    var n = t.length;
    for (t.sort(r); n--; )
      t[n] = t[n].value;
    return t;
  }
  return Ti = e, Ti;
}
var Ri, ff;
function mm() {
  if (ff)
    return Ri;
  ff = 1;
  var e = qt();
  function t(r, n) {
    if (r !== n) {
      var a = r !== void 0, i = r === null, o = r === r, s = e(r), u = n !== void 0, c = n === null, f = n === n, l = e(n);
      if (!c && !l && !s && r > n || s && u && f && !c && !l || i && u && f || !a && f || !o)
        return 1;
      if (!i && !s && !l && r < n || l && a && o && !i && !s || c && a && o || !u && o || !f)
        return -1;
    }
    return 0;
  }
  return Ri = t, Ri;
}
var ki, lf;
function gm() {
  if (lf)
    return ki;
  lf = 1;
  var e = mm();
  function t(r, n, a) {
    for (var i = -1, o = r.criteria, s = n.criteria, u = o.length, c = a.length; ++i < u; ) {
      var f = e(o[i], s[i]);
      if (f) {
        if (i >= c)
          return f;
        var l = a[i];
        return f * (l == "desc" ? -1 : 1);
      }
    }
    return r.index - n.index;
  }
  return ki = t, ki;
}
var Ii, df;
function bm() {
  if (df)
    return Ii;
  df = 1;
  var e = wo(), t = Ro(), r = ko(), n = hm(), a = ym(), i = Oo(), o = gm(), s = Nt(), u = Le();
  function c(f, l, y) {
    l.length ? l = e(l, function(C) {
      return u(C) ? function(g) {
        return t(g, C.length === 1 ? C[0] : C);
      } : C;
    }) : l = [s];
    var h = -1;
    l = e(l, i(r));
    var E = n(f, function(C, g, S) {
      var O = e(l, function(b) {
        return b(C);
      });
      return { criteria: O, index: ++h, value: C };
    });
    return a(E, function(C, g) {
      return o(C, g, y);
    });
  }
  return Ii = c, Ii;
}
var Mi, vf;
function _m() {
  if (vf)
    return Mi;
  vf = 1;
  var e = go(), t = Dt(), r = Co(), n = rt();
  function a(i, o, s) {
    if (!n(s))
      return !1;
    var u = typeof o;
    return (u == "number" ? t(s) && r(o, s.length) : u == "string" && o in s) ? e(s[o], i) : !1;
  }
  return Mi = a, Mi;
}
var Li, pf;
function wm() {
  if (pf)
    return Li;
  pf = 1;
  var e = zl(), t = bm(), r = Hl(), n = _m(), a = r(function(i, o) {
    if (i == null)
      return [];
    var s = o.length;
    return s > 1 && n(i, o[0], o[1]) ? o = [] : s > 2 && n(o[0], o[1], o[2]) && (o = [o[0]]), t(i, e(o, 1), []);
  });
  return Li = a, Li;
}
var Fi, hf;
function Om() {
  if (hf)
    return Fi;
  hf = 1;
  var e = ql(), t = rt(), r = "Expected a function";
  function n(a, i, o) {
    var s = !0, u = !0;
    if (typeof a != "function")
      throw new TypeError(r);
    return t(o) && (s = "leading" in o ? !!o.leading : s, u = "trailing" in o ? !!o.trailing : u), e(a, i, {
      leading: s,
      maxWait: i,
      trailing: u
    });
  }
  return Fi = n, Fi;
}
var qi, yf;
function Sm() {
  if (yf)
    return qi;
  yf = 1;
  var e = Zl(), t = 0;
  function r(n) {
    var a = ++t;
    return e(n) + a;
  }
  return qi = r, qi;
}
(function(e, t) {
  (function(r, n) {
    e.exports = n(ql(), fy(), om(), um(), fm(), dm(), vm(), pm(), wm(), Om(), Sm(), Me);
  })(We, function(r, n, a, i, o, s, u, c, f, l, y, h) {
    return function() {
      var E = { 654: function(g, S, O) {
        var b, p = this && this.__assign || function() {
          return p = Object.assign || function(w) {
            for (var v, d = 1, _ = arguments.length; d < _; d++)
              for (var A in v = arguments[d])
                Object.prototype.hasOwnProperty.call(v, A) && (w[A] = v[A]);
            return w;
          }, p.apply(this, arguments);
        }, m = this && this.__createBinding || (Object.create ? function(w, v, d, _) {
          _ === void 0 && (_ = d);
          var A = Object.getOwnPropertyDescriptor(v, d);
          A && !("get" in A ? !v.__esModule : A.writable || A.configurable) || (A = { enumerable: !0, get: function() {
            return v[d];
          } }), Object.defineProperty(w, _, A);
        } : function(w, v, d, _) {
          _ === void 0 && (_ = d), w[_] = v[d];
        }), x = this && this.__setModuleDefault || (Object.create ? function(w, v) {
          Object.defineProperty(w, "default", { enumerable: !0, value: v });
        } : function(w, v) {
          w.default = v;
        }), P = this && this.__importStar || function(w) {
          if (w && w.__esModule)
            return w;
          var v = {};
          if (w != null)
            for (var d in w)
              d !== "default" && Object.prototype.hasOwnProperty.call(w, d) && m(v, w, d);
          return x(v, w), v;
        }, k = this && this.__spreadArray || function(w, v, d) {
          if (d || arguments.length === 2)
            for (var _, A = 0, L = v.length; A < L; A++)
              !_ && A in v || (_ || (_ = Array.prototype.slice.call(v, 0, A)), _[A] = v[A]);
          return w.concat(_ || Array.prototype.slice.call(v));
        }, T = this && this.__importDefault || function(w) {
          return w && w.__esModule ? w : { default: w };
        };
        Object.defineProperty(S, "__esModule", { value: !0 }), S.setKeyMap = S.destroy = S.setThrottle = S.init = S.SpatialNavigation = S.ROOT_FOCUS_KEY = void 0;
        var q = T(O(747)), D = T(O(842)), te = T(O(432)), H = T(O(23)), re = T(O(682)), ie = T(O(784)), $ = T(O(67)), ve = T(O(150)), me = T(O(117)), Ae = P(O(964)), R = T(O(35)), I = "left", W = "right", B = "up", j = "down", X = "enter", V = ((b = {}).left = [37], b.up = [38], b.right = [39], b.down = [40], b.enter = [13], b);
        S.ROOT_FOCUS_KEY = "SN:ROOT";
        var U = ["#0FF", "#FF0", "#F0F"], G = { leading: !0, trailing: !1 }, M = function() {
          function w() {
            this.focusableComponents = {}, this.focusKey = null, this.parentsHavingFocusedChild = [], this.enabled = !1, this.nativeMode = !1, this.throttle = 0, this.throttleKeypresses = !1, this.useGetBoundingClientRect = !1, this.shouldFocusDOMNode = !1, this.pressedKeys = {}, this.paused = !1, this.keyDownEventListener = null, this.keyUpEventListener = null, this.keyMap = V, this.onKeyEvent = this.onKeyEvent.bind(this), this.pause = this.pause.bind(this), this.resume = this.resume.bind(this), this.setFocus = this.setFocus.bind(this), this.updateAllLayouts = this.updateAllLayouts.bind(this), this.navigateByDirection = this.navigateByDirection.bind(this), this.init = this.init.bind(this), this.setThrottle = this.setThrottle.bind(this), this.destroy = this.destroy.bind(this), this.setKeyMap = this.setKeyMap.bind(this), this.getCurrentFocusKey = this.getCurrentFocusKey.bind(this), this.setFocusDebounced = (0, ve.default)(this.setFocus, 300, { leading: !1, trailing: !0 }), this.debug = !1, this.visualDebugger = null, this.logIndex = 0;
          }
          return w.getCutoffCoordinate = function(v, d, _, A) {
            var L = A.left, K = A.top, J = A.width, z = A.height, Y = v ? K : L, Z = v ? z : J;
            return d ? _ ? Y : Y + Z : _ ? Y + Z : Y;
          }, w.getRefCorners = function(v, d, _) {
            var A = _.left, L = _.top, K = _.width, J = _.height, z = { a: { x: 0, y: 0 }, b: { x: 0, y: 0 } };
            switch (v) {
              case B:
                var Y = d ? L + J : L;
                z.a = { x: A, y: Y }, z.b = { x: A + K, y: Y };
                break;
              case j:
                Y = d ? L : L + J, z.a = { x: A, y: Y }, z.b = { x: A + K, y: Y };
                break;
              case I:
                var Z = d ? A + K : A;
                z.a = { x: Z, y: L }, z.b = { x: Z, y: L + J };
                break;
              case W:
                Z = d ? A : A + K, z.a = { x: Z, y: L }, z.b = { x: Z, y: L + J };
            }
            return z;
          }, w.isAdjacentSlice = function(v, d, _) {
            var A = v.a, L = v.b, K = d.a, J = d.b, z = _ ? "x" : "y", Y = A[z], Z = L[z], oe = K[z], Q = J[z], fe = 0.2 * (Z - Y);
            return Math.max(0, Math.min(Z, Q) - Math.max(Y, oe)) >= fe;
          }, w.getPrimaryAxisDistance = function(v, d, _) {
            var A = v.a, L = d.a, K = _ ? "y" : "x";
            return Math.abs(L[K] - A[K]);
          }, w.getSecondaryAxisDistance = function(v, d, _) {
            var A = v.a, L = v.b, K = d.a, J = d.b, z = _ ? "x" : "y", Y = A[z], Z = L[z], oe = K[z], Q = J[z], fe = [];
            return fe.push(Math.abs(oe - Y)), fe.push(Math.abs(oe - Z)), fe.push(Math.abs(Q - Y)), fe.push(Math.abs(Q - Z)), Math.min.apply(Math, fe);
          }, w.prototype.sortSiblingsByPriority = function(v, d, _, A) {
            var L = this, K = _ === j || _ === B, J = w.getRefCorners(_, !1, d);
            return (0, te.default)(v, function(z) {
              var Y = w.getRefCorners(_, !0, z.layout), Z = w.isAdjacentSlice(J, Y, K), oe = Z ? w.getPrimaryAxisDistance : w.getSecondaryAxisDistance, Q = Z ? w.getSecondaryAxisDistance : w.getPrimaryAxisDistance, fe = oe(J, Y, K), Ne = Q(J, Y, K), _e = 5 * fe + Ne, Fe = (_e + 1) / (Z ? 5 : 1);
              return L.log("smartNavigate", "distance (primary, secondary, total weighted) for ".concat(z.focusKey, " relative to ").concat(A, " is"), fe, Ne, _e), L.log("smartNavigate", "priority for ".concat(z.focusKey, " relative to ").concat(A, " is"), Fe), L.visualDebugger && (L.visualDebugger.drawPoint(Y.a.x, Y.a.y, "yellow", 6), L.visualDebugger.drawPoint(Y.b.x, Y.b.y, "yellow", 6)), Fe;
            });
          }, w.prototype.init = function(v) {
            var d = v === void 0 ? {} : v, _ = d.debug, A = _ !== void 0 && _, L = d.visualDebug, K = L !== void 0 && L, J = d.nativeMode, z = J !== void 0 && J, Y = d.throttle, Z = Y === void 0 ? 0 : Y, oe = d.throttleKeypresses, Q = oe !== void 0 && oe, fe = d.useGetBoundingClientRect, Ne = fe !== void 0 && fe, _e = d.shouldFocusDOMNode, Fe = _e !== void 0 && _e;
            this.enabled || (this.enabled = !0, this.nativeMode = z, this.throttleKeypresses = Q, this.useGetBoundingClientRect = Ne, this.shouldFocusDOMNode = Fe && !z, this.debug = A, this.nativeMode || (Number.isInteger(Z) && Z > 0 && (this.throttle = Z), this.bindEventHandlers(), K && (this.visualDebugger = new R.default(), this.startDrawLayouts())));
          }, w.prototype.setThrottle = function(v) {
            var d = v === void 0 ? {} : v, _ = d.throttle, A = _ === void 0 ? 0 : _, L = d.throttleKeypresses, K = L !== void 0 && L;
            this.throttleKeypresses = K, this.nativeMode || (this.unbindEventHandlers(), Number.isInteger(A) && (this.throttle = A), this.bindEventHandlers());
          }, w.prototype.startDrawLayouts = function() {
            var v = this, d = function() {
              requestAnimationFrame(function() {
                v.visualDebugger.clearLayouts(), (0, ie.default)(v.focusableComponents, function(_, A) {
                  v.visualDebugger.drawLayout(_.layout, A, _.parentFocusKey);
                }), d();
              });
            };
            d();
          }, w.prototype.destroy = function() {
            this.enabled && (this.enabled = !1, this.nativeMode = !1, this.throttle = 0, this.throttleKeypresses = !1, this.focusKey = null, this.parentsHavingFocusedChild = [], this.focusableComponents = {}, this.paused = !1, this.keyMap = V, this.unbindEventHandlers());
          }, w.prototype.getEventType = function(v) {
            return (0, H.default)(this.getKeyMap(), function(d) {
              return d.includes(v);
            });
          }, w.prototype.bindEventHandlers = function() {
            var v = this;
            typeof window < "u" && window.addEventListener && (this.keyDownEventListener = function(d) {
              if (v.paused !== !0) {
                v.debug && (v.logIndex += 1);
                var _ = v.getEventType(d.keyCode);
                if (_) {
                  v.pressedKeys[_] = v.pressedKeys[_] ? v.pressedKeys[_] + 1 : 1, d.preventDefault(), d.stopPropagation();
                  var A = { pressedKeys: v.pressedKeys };
                  _ === X && v.focusKey ? v.onEnterPress(A) : v.onArrowPress(_, A) === !1 ? (v.log("keyDownEventListener", "default navigation prevented"), v.visualDebugger && v.visualDebugger.clear()) : v.onKeyEvent(d);
                }
              }
            }, this.throttle && (this.keyDownEventListenerThrottled = (0, $.default)(this.keyDownEventListener.bind(this), this.throttle, G)), this.keyUpEventListener = function(d) {
              var _ = v.getEventType(d.keyCode);
              delete v.pressedKeys[_], v.throttle && !v.throttleKeypresses && v.keyDownEventListenerThrottled.cancel(), _ === X && v.focusKey && v.onEnterRelease();
            }, window.addEventListener("keyup", this.keyUpEventListener), window.addEventListener("keydown", this.throttle ? this.keyDownEventListenerThrottled : this.keyDownEventListener));
          }, w.prototype.unbindEventHandlers = function() {
            if (typeof window < "u" && window.removeEventListener) {
              window.removeEventListener("keyup", this.keyUpEventListener), this.keyUpEventListener = null;
              var v = this.throttle ? this.keyDownEventListenerThrottled : this.keyDownEventListener;
              window.removeEventListener("keydown", v), this.keyDownEventListener = null;
            }
          }, w.prototype.onEnterPress = function(v) {
            var d = this.focusableComponents[this.focusKey];
            d ? d.focusable ? d.onEnterPress && d.onEnterPress(v) : this.log("onEnterPress", "componentNotFocusable") : this.log("onEnterPress", "noComponent");
          }, w.prototype.onEnterRelease = function() {
            var v = this.focusableComponents[this.focusKey];
            v ? v.focusable ? v.onEnterRelease && v.onEnterRelease() : this.log("onEnterRelease", "componentNotFocusable") : this.log("onEnterRelease", "noComponent");
          }, w.prototype.onArrowPress = function(v, d) {
            var _ = this.focusableComponents[this.focusKey];
            if (_)
              return _ && _.onArrowPress && _.onArrowPress(v, d);
            this.log("onArrowPress", "noComponent");
          }, w.prototype.navigateByDirection = function(v, d) {
            if (this.paused !== !0 && !this.nativeMode) {
              var _ = [j, B, I, W];
              _.includes(v) ? (this.log("navigateByDirection", "direction", v), this.smartNavigate(v, null, d)) : this.log("navigateByDirection", "Invalid direction. You passed: `".concat(v, "`, but you can use only these: "), _);
            }
          }, w.prototype.onKeyEvent = function(v) {
            this.visualDebugger && this.visualDebugger.clear();
            var d = (0, H.default)(this.getKeyMap(), function(_) {
              return _.includes(v.keyCode);
            });
            this.smartNavigate(d, null, { event: v });
          }, w.prototype.smartNavigate = function(v, d, _) {
            var A = this;
            if (!this.nativeMode) {
              this.log("smartNavigate", "direction", v), this.log("smartNavigate", "fromParentFocusKey", d), this.log("smartNavigate", "this.focusKey", this.focusKey), d || (0, ie.default)(this.focusableComponents, function(le) {
                le.layoutUpdated = !1;
              });
              var L = this.focusableComponents[d || this.focusKey];
              if (this.log("smartNavigate", "currentComponent", L ? L.focusKey : void 0, L ? L.node : void 0, L), L) {
                this.updateLayout(L.focusKey);
                var K = L.parentFocusKey, J = L.focusKey, z = L.layout, Y = v === j || v === B, Z = v === j || v === W, oe = w.getCutoffCoordinate(Y, Z, !1, z), Q = (0, q.default)(this.focusableComponents, function(le) {
                  if (le.parentFocusKey === K && le.focusable) {
                    A.updateLayout(le.focusKey);
                    var Ke = w.getCutoffCoordinate(Y, Z, !0, le.layout);
                    return Z ? Ke >= oe : Ke <= oe;
                  }
                  return !1;
                });
                if (this.debug && (this.log("smartNavigate", "currentCutoffCoordinate", oe), this.log("smartNavigate", "siblings", "".concat(Q.length, " elements:"), Q.map(function(le) {
                  return le.focusKey;
                }).join(", "), Q.map(function(le) {
                  return le.node;
                }), Q.map(function(le) {
                  return le;
                }))), this.visualDebugger) {
                  var fe = w.getRefCorners(v, !1, z);
                  this.visualDebugger.drawPoint(fe.a.x, fe.a.y), this.visualDebugger.drawPoint(fe.b.x, fe.b.y);
                }
                var Ne = this.sortSiblingsByPriority(Q, z, v, J), _e = (0, D.default)(Ne);
                if (this.log("smartNavigate", "nextComponent", _e ? _e.focusKey : void 0, _e ? _e.node : void 0, _e), _e)
                  this.setFocus(_e.focusKey, _);
                else {
                  var Fe = this.focusableComponents[K];
                  Fe && Fe.isFocusBoundary || this.smartNavigate(v, K, _);
                }
              }
            }
          }, w.prototype.saveLastFocusedChildKey = function(v, d) {
            v && (this.log("saveLastFocusedChildKey", "".concat(v.focusKey, " lastFocusedChildKey set"), d), v.lastFocusedChildKey = d);
          }, w.prototype.log = function(v, d) {
            for (var _ = [], A = 2; A < arguments.length; A++)
              _[A - 2] = arguments[A];
            this.debug && console.log.apply(console, k(["%c".concat(v, "%c").concat(d), "background: ".concat(U[this.logIndex % U.length], "; color: black; padding: 1px 5px;"), "background: #333; color: #BADA55; padding: 1px 5px;"], _, !1));
          }, w.prototype.getCurrentFocusKey = function() {
            return this.focusKey;
          }, w.prototype.getNextFocusKey = function(v) {
            var d = this, _ = this.focusableComponents[v];
            if (!_ || this.nativeMode)
              return v;
            var A = (0, q.default)(this.focusableComponents, function(z) {
              return z.parentFocusKey === v && z.focusable;
            });
            if (A.length > 0) {
              var L = _.lastFocusedChildKey, K = _.preferredChildFocusKey;
              if (this.log("getNextFocusKey", "lastFocusedChildKey is", L), this.log("getNextFocusKey", "preferredChildFocusKey is", K), L && _.saveLastFocusedChild && this.isParticipatingFocusableComponent(L))
                return this.log("getNextFocusKey", "lastFocusedChildKey will be focused", L), this.getNextFocusKey(L);
              if (K && this.isParticipatingFocusableComponent(K))
                return this.log("getNextFocusKey", "preferredChildFocusKey will be focused", K), this.getNextFocusKey(K);
              A.forEach(function(z) {
                return d.updateLayout(z.focusKey);
              });
              var J = function(z) {
                var Y = (0, te.default)(z, function(Z) {
                  var oe = Z.layout;
                  return Math.abs(oe.left) + Math.abs(oe.top);
                });
                return (0, D.default)(Y);
              }(A).focusKey;
              return this.log("getNextFocusKey", "childKey will be focused", J), this.getNextFocusKey(J);
            }
            return this.log("getNextFocusKey", "targetFocusKey", v), v;
          }, w.prototype.addFocusable = function(v) {
            var d = v.focusKey, _ = v.node, A = v.parentFocusKey, L = v.onEnterPress, K = v.onEnterRelease, J = v.onArrowPress, z = v.onFocus, Y = v.onBlur, Z = v.saveLastFocusedChild, oe = v.trackChildren, Q = v.onUpdateFocus, fe = v.onUpdateHasFocusedChild, Ne = v.preferredChildFocusKey, _e = v.autoRestoreFocus, Fe = v.focusable, le = v.isFocusBoundary;
            if (this.focusableComponents[d] = { focusKey: d, node: _, parentFocusKey: A, onEnterPress: L, onEnterRelease: K, onArrowPress: J, onFocus: z, onBlur: Y, onUpdateFocus: Q, onUpdateHasFocusedChild: fe, saveLastFocusedChild: Z, trackChildren: oe, preferredChildFocusKey: Ne, focusable: Fe, isFocusBoundary: le, autoRestoreFocus: _e, lastFocusedChildKey: null, layout: { x: 0, y: 0, width: 0, height: 0, left: 0, top: 0, node: _ }, layoutUpdated: !1 }, !this.nativeMode) {
              this.updateLayout(d), this.log("addFocusable", "Component added: ", this.focusableComponents[d]), d === this.focusKey && this.setFocus(d);
              for (var Ke = this.focusableComponents[this.focusKey]; Ke; ) {
                if (Ke.parentFocusKey === d) {
                  this.updateParentsHasFocusedChild(this.focusKey, {});
                  break;
                }
                Ke = this.focusableComponents[Ke.parentFocusKey];
              }
            }
          }, w.prototype.removeFocusable = function(v) {
            var d = v.focusKey, _ = this.focusableComponents[d];
            if (_) {
              var A = _.parentFocusKey;
              (0, _.onUpdateFocus)(!1), this.log("removeFocusable", "Component removed: ", _), delete this.focusableComponents[d];
              var L = this.parentsHavingFocusedChild.includes(d);
              this.parentsHavingFocusedChild = this.parentsHavingFocusedChild.filter(function(z) {
                return z !== d;
              });
              var K = this.focusableComponents[A], J = d === this.focusKey;
              if (K && K.lastFocusedChildKey === d && (K.lastFocusedChildKey = null), this.nativeMode)
                return;
              (J || L) && K && K.autoRestoreFocus && (this.log("removeFocusable", "Component removed: ", J ? "Leaf component" : "Container component", "Auto restoring focus to: ", A), this.setFocusDebounced(A));
            }
          }, w.prototype.getNodeLayoutByFocusKey = function(v) {
            var d = this.focusableComponents[v];
            return d ? (this.updateLayout(d.focusKey), d.layout) : null;
          }, w.prototype.setCurrentFocusedKey = function(v, d) {
            if (this.isFocusableComponent(this.focusKey) && v !== this.focusKey) {
              var _ = this.focusableComponents[this.focusKey];
              _.onUpdateFocus(!1), _.onBlur(this.getNodeLayoutByFocusKey(this.focusKey), d), this.log("setCurrentFocusedKey", "onBlur", _);
            }
            if (this.focusKey = v, this.isFocusableComponent(this.focusKey)) {
              var A = this.focusableComponents[this.focusKey];
              this.shouldFocusDOMNode && A.node && A.node.focus(), A.onUpdateFocus(!0), A.onFocus(this.getNodeLayoutByFocusKey(this.focusKey), d), this.log("setCurrentFocusedKey", "onFocus", A);
            }
          }, w.prototype.updateParentsHasFocusedChild = function(v, d) {
            for (var _ = this, A = [], L = this.focusableComponents[v]; L; ) {
              var K = L.parentFocusKey, J = this.focusableComponents[K];
              if (J) {
                var z = J.focusKey;
                A.push(z);
              }
              L = J;
            }
            var Y = (0, me.default)(this.parentsHavingFocusedChild, A), Z = (0, me.default)(A, this.parentsHavingFocusedChild);
            (0, re.default)(Y, function(oe) {
              var Q = _.focusableComponents[oe];
              Q && Q.trackChildren && Q.onUpdateHasFocusedChild(!1), _.onIntermediateNodeBecameBlurred(oe, d);
            }), (0, re.default)(Z, function(oe) {
              var Q = _.focusableComponents[oe];
              Q && Q.trackChildren && Q.onUpdateHasFocusedChild(!0), _.onIntermediateNodeBecameFocused(oe, d);
            }), this.parentsHavingFocusedChild = A;
          }, w.prototype.updateParentsLastFocusedChild = function(v) {
            for (var d = this.focusableComponents[v]; d; ) {
              var _ = d.parentFocusKey, A = this.focusableComponents[_];
              A && this.saveLastFocusedChildKey(A, d.focusKey), d = A;
            }
          }, w.prototype.getKeyMap = function() {
            return this.keyMap;
          }, w.prototype.setKeyMap = function(v) {
            this.keyMap = p(p({}, this.getKeyMap()), function(d) {
              var _ = {};
              return Object.entries(d).forEach(function(A) {
                var L = A[0], K = A[1];
                typeof K == "number" ? _[L] = [K] : Array.isArray(K) && (_[L] = K);
              }), _;
            }(v));
          }, w.prototype.isFocusableComponent = function(v) {
            return !!this.focusableComponents[v];
          }, w.prototype.isParticipatingFocusableComponent = function(v) {
            return this.isFocusableComponent(v) && this.focusableComponents[v].focusable;
          }, w.prototype.onIntermediateNodeBecameFocused = function(v, d) {
            this.isParticipatingFocusableComponent(v) && this.focusableComponents[v].onFocus(this.getNodeLayoutByFocusKey(v), d);
          }, w.prototype.onIntermediateNodeBecameBlurred = function(v, d) {
            this.isParticipatingFocusableComponent(v) && this.focusableComponents[v].onBlur(this.getNodeLayoutByFocusKey(v), d);
          }, w.prototype.pause = function() {
            this.paused = !0;
          }, w.prototype.resume = function() {
            this.paused = !1;
          }, w.prototype.setFocus = function(v, d) {
            if (d === void 0 && (d = {}), this.setFocusDebounced.cancel(), this.enabled) {
              this.log("setFocus", "focusKey", v);
              var _ = this.getNextFocusKey(v);
              this.log("setFocus", "newFocusKey", _), this.setCurrentFocusedKey(_, d), this.updateParentsHasFocusedChild(_, d), this.updateParentsLastFocusedChild(_);
            }
          }, w.prototype.updateAllLayouts = function() {
            var v = this;
            this.nativeMode || (0, ie.default)(this.focusableComponents, function(d, _) {
              v.updateLayout(_);
            });
          }, w.prototype.updateLayout = function(v) {
            var d = this.focusableComponents[v];
            if (d && !this.nativeMode && !d.layoutUpdated) {
              var _ = d.node, A = this.useGetBoundingClientRect ? (0, Ae.getBoundingClientRect)(_) : (0, Ae.default)(_);
              d.layout = p(p({}, A), { node: _ });
            }
          }, w.prototype.updateFocusable = function(v, d) {
            var _ = d.node, A = d.preferredChildFocusKey, L = d.focusable, K = d.isFocusBoundary, J = d.onEnterPress, z = d.onEnterRelease, Y = d.onArrowPress, Z = d.onFocus, oe = d.onBlur;
            if (!this.nativeMode) {
              var Q = this.focusableComponents[v];
              Q && (Q.preferredChildFocusKey = A, Q.focusable = L, Q.isFocusBoundary = K, Q.onEnterPress = J, Q.onEnterRelease = z, Q.onArrowPress = Y, Q.onFocus = Z, Q.onBlur = oe, _ && (Q.node = _));
            }
          }, w.prototype.isNativeMode = function() {
            return this.nativeMode;
          }, w;
        }();
        S.SpatialNavigation = new M(), S.init = S.SpatialNavigation.init, S.setThrottle = S.SpatialNavigation.setThrottle, S.destroy = S.SpatialNavigation.destroy, S.setKeyMap = S.SpatialNavigation.setKeyMap;
      }, 35: function(g, S) {
        Object.defineProperty(S, "__esModule", { value: !0 });
        var O = typeof window < "u" && window.document, b = O ? window.innerWidth : 0, p = O ? window.innerHeight : 0, m = function() {
          function x() {
            O && (this.debugCtx = x.createCanvas("sn-debug", "1010"), this.layoutsCtx = x.createCanvas("sn-layouts", "1000"));
          }
          return x.createCanvas = function(P, k) {
            var T = document.querySelector("#".concat(P)) || document.createElement("canvas");
            T.setAttribute("id", P);
            var q = T.getContext("2d");
            return T.style.zIndex = k, T.style.position = "fixed", T.style.top = "0", T.style.left = "0", document.body.appendChild(T), T.width = b, T.height = p, q;
          }, x.prototype.clear = function() {
            O && this.debugCtx.clearRect(0, 0, b, p);
          }, x.prototype.clearLayouts = function() {
            O && this.layoutsCtx.clearRect(0, 0, b, p);
          }, x.prototype.drawLayout = function(P, k, T) {
            O && (this.layoutsCtx.strokeStyle = "green", this.layoutsCtx.strokeRect(P.left, P.top, P.width, P.height), this.layoutsCtx.font = "8px monospace", this.layoutsCtx.fillStyle = "red", this.layoutsCtx.fillText(k, P.left, P.top + 10), this.layoutsCtx.fillText(T, P.left, P.top + 25), this.layoutsCtx.fillText("left: ".concat(P.left), P.left, P.top + 40), this.layoutsCtx.fillText("top: ".concat(P.top), P.left, P.top + 55));
          }, x.prototype.drawPoint = function(P, k, T, q) {
            T === void 0 && (T = "blue"), q === void 0 && (q = 10), O && (this.debugCtx.strokeStyle = T, this.debugCtx.lineWidth = 3, this.debugCtx.strokeRect(P - q / 2, k - q / 2, q, q));
          }, x;
        }();
        S.default = m;
      }, 607: function(g, S, O) {
        var b = this && this.__createBinding || (Object.create ? function(m, x, P, k) {
          k === void 0 && (k = P);
          var T = Object.getOwnPropertyDescriptor(x, P);
          T && !("get" in T ? !x.__esModule : T.writable || T.configurable) || (T = { enumerable: !0, get: function() {
            return x[P];
          } }), Object.defineProperty(m, k, T);
        } : function(m, x, P, k) {
          k === void 0 && (k = P), m[k] = x[P];
        }), p = this && this.__exportStar || function(m, x) {
          for (var P in m)
            P === "default" || Object.prototype.hasOwnProperty.call(x, P) || b(x, m, P);
        };
        Object.defineProperty(S, "__esModule", { value: !0 }), p(O(79), S), p(O(445), S), p(O(654), S);
      }, 964: function(g, S) {
        Object.defineProperty(S, "__esModule", { value: !0 }), S.getBoundingClientRect = void 0;
        var O = function(b) {
          for (var p = b.offsetParent, m = b.offsetHeight, x = b.offsetWidth, P = b.offsetLeft, k = b.offsetTop; p && p.nodeType === 1; )
            P += p.offsetLeft - p.scrollLeft, k += p.offsetTop - p.scrollTop, p = p.offsetParent;
          return { height: m, left: P, top: k, width: x };
        };
        S.default = function(b) {
          var p = b && b.parentElement;
          if (b && p) {
            var m = O(p), x = O(b), P = x.height, k = x.left, T = x.top, q = x.width;
            return { x: k - m.left, y: T - m.top, width: q, height: P, left: k, top: T };
          }
          return { x: 0, y: 0, width: 0, height: 0, left: 0, top: 0 };
        }, S.getBoundingClientRect = function(b) {
          if (b && b.getBoundingClientRect) {
            var p = b.getBoundingClientRect();
            return { x: p.x, y: p.y, width: p.width, height: p.height, left: p.left, top: p.top };
          }
          return { x: 0, y: 0, width: 0, height: 0, left: 0, top: 0 };
        };
      }, 445: function(g, S, O) {
        Object.defineProperty(S, "__esModule", { value: !0 }), S.useFocusContext = S.FocusContext = void 0;
        var b = O(156), p = O(654);
        S.FocusContext = (0, b.createContext)(p.ROOT_FOCUS_KEY), S.useFocusContext = function() {
          return (0, b.useContext)(S.FocusContext);
        };
      }, 79: function(g, S, O) {
        var b = this && this.__importDefault || function(T) {
          return T && T.__esModule ? T : { default: T };
        };
        Object.defineProperty(S, "__esModule", { value: !0 }), S.useFocusable = void 0;
        var p = O(156), m = b(O(604)), x = b(O(461)), P = O(654), k = O(445);
        S.useFocusable = function(T) {
          var q = T === void 0 ? {} : T, D = q.focusable, te = D === void 0 || D, H = q.saveLastFocusedChild, re = H === void 0 || H, ie = q.trackChildren, $ = ie !== void 0 && ie, ve = q.autoRestoreFocus, me = ve === void 0 || ve, Ae = q.isFocusBoundary, R = Ae !== void 0 && Ae, I = q.focusKey, W = q.preferredChildFocusKey, B = q.onEnterPress, j = B === void 0 ? m.default : B, X = q.onEnterRelease, V = X === void 0 ? m.default : X, U = q.onArrowPress, G = U === void 0 ? function() {
            return !0;
          } : U, M = q.onFocus, w = M === void 0 ? m.default : M, v = q.onBlur, d = v === void 0 ? m.default : v, _ = q.extraProps, A = (0, p.useCallback)(function(Pe) {
            j(_, Pe);
          }, [j, _]), L = (0, p.useCallback)(function() {
            V(_);
          }, [V, _]), K = (0, p.useCallback)(function(Pe, Re) {
            return G(Pe, _, Re);
          }, [_, G]), J = (0, p.useCallback)(function(Pe, Re) {
            w(Pe, _, Re);
          }, [_, w]), z = (0, p.useCallback)(function(Pe, Re) {
            d(Pe, _, Re);
          }, [_, d]), Y = (0, p.useRef)(null), Z = (0, p.useState)(!1), oe = Z[0], Q = Z[1], fe = (0, p.useState)(!1), Ne = fe[0], _e = fe[1], Fe = (0, k.useFocusContext)(), le = (0, p.useMemo)(function() {
            return I || (0, x.default)("sn:focusable-item-");
          }, [I]), Ke = (0, p.useCallback)(function(Pe) {
            Pe === void 0 && (Pe = {}), P.SpatialNavigation.setFocus(le, Pe);
          }, [le]);
          return (0, p.useEffect)(function() {
            var Pe = Y.current;
            return P.SpatialNavigation.addFocusable({ focusKey: le, node: Pe, parentFocusKey: Fe, preferredChildFocusKey: W, onEnterPress: A, onEnterRelease: L, onArrowPress: K, onFocus: J, onBlur: z, onUpdateFocus: function(Re) {
              return Re === void 0 && (Re = !1), Q(Re);
            }, onUpdateHasFocusedChild: function(Re) {
              return Re === void 0 && (Re = !1), _e(Re);
            }, saveLastFocusedChild: re, trackChildren: $, isFocusBoundary: R, autoRestoreFocus: me, focusable: te }), function() {
              P.SpatialNavigation.removeFocusable({ focusKey: le });
            };
          }, []), (0, p.useEffect)(function() {
            var Pe = Y.current;
            P.SpatialNavigation.updateFocusable(le, { node: Pe, preferredChildFocusKey: W, focusable: te, isFocusBoundary: R, onEnterPress: A, onEnterRelease: L, onArrowPress: K, onFocus: J, onBlur: z });
          }, [le, W, te, R, A, L, K, J, z]), { ref: Y, focusSelf: Ke, focused: oe, hasFocusedChild: Ne, focusKey: le, setFocus: P.SpatialNavigation.isNativeMode() ? m.default : P.SpatialNavigation.setFocus, navigateByDirection: P.SpatialNavigation.navigateByDirection, pause: P.SpatialNavigation.pause, resume: P.SpatialNavigation.resume, updateAllLayouts: P.SpatialNavigation.updateAllLayouts, getCurrentFocusKey: P.SpatialNavigation.getCurrentFocusKey };
        };
      }, 150: function(g) {
        g.exports = r;
      }, 117: function(g) {
        g.exports = n;
      }, 747: function(g) {
        g.exports = a;
      }, 23: function(g) {
        g.exports = i;
      }, 842: function(g) {
        g.exports = o;
      }, 682: function(g) {
        g.exports = s;
      }, 784: function(g) {
        g.exports = u;
      }, 604: function(g) {
        g.exports = c;
      }, 432: function(g) {
        g.exports = f;
      }, 67: function(g) {
        g.exports = l;
      }, 461: function(g) {
        g.exports = y;
      }, 156: function(g) {
        g.exports = h;
      } }, C = {};
      return function g(S) {
        var O = C[S];
        if (O !== void 0)
          return O.exports;
        var b = C[S] = { exports: {} };
        return E[S].call(b.exports, b, b.exports, g), b.exports;
      }(607);
    }();
  });
})(Ll);
var td = Ll.exports, wt = function() {
  return wt = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, wt.apply(this, arguments);
}, Pm = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
}, mf = !1, Cm = Fd(function(e, t) {
  var r = e.style, n = Pm(e, ["style"]), a = rd();
  !mf && (r != null && r.height) && (mf = !0, console.warn("<Div100vh /> overrides the height property of the style prop"));
  var i = wt(wt({}, r), { height: a ? a + "px" : "100vh" });
  return Me.createElement("div", wt({ ref: t, style: i }, n));
});
Cm.displayName = "Div100vh";
function rd() {
  var e = co(gf), t = e[0], r = e[1], n = xm();
  return Ee(function() {
    if (!n)
      return;
    function a() {
      var i = gf();
      r(i);
    }
    return window.addEventListener("resize", a), function() {
      return window.removeEventListener("resize", a);
    };
  }, [n]), n ? t : null;
}
function gf() {
  return nd() ? window.innerHeight : null;
}
function xm() {
  var e = co(!1), t = e[0], r = e[1];
  return Ee(function() {
    nd() && r(!0);
  }, []), t;
}
function nd() {
  return typeof window < "u" && typeof document < "u";
}
function bf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function F(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? bf(Object(r), !0).forEach(function(n) {
      be(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : bf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ar(e) {
  "@babel/helpers - typeof";
  return ar = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ar(e);
}
function Em(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _f(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Am(e, t, r) {
  return t && _f(e.prototype, t), r && _f(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function be(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Io(e, t) {
  return Rm(e) || Im(e, t) || ad(e, t) || Lm();
}
function jt(e) {
  return Tm(e) || km(e) || ad(e) || Mm();
}
function Tm(e) {
  if (Array.isArray(e))
    return Gi(e);
}
function Rm(e) {
  if (Array.isArray(e))
    return e;
}
function km(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Im(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], a = !0, i = !1, o, s;
    try {
      for (r = r.call(e); !(a = (o = r.next()).done) && (n.push(o.value), !(t && n.length === t)); a = !0)
        ;
    } catch (u) {
      i = !0, s = u;
    } finally {
      try {
        !a && r.return != null && r.return();
      } finally {
        if (i)
          throw s;
      }
    }
    return n;
  }
}
function ad(e, t) {
  if (e) {
    if (typeof e == "string")
      return Gi(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Gi(e, t);
  }
}
function Gi(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Mm() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Lm() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var wf = function() {
}, Mo = {}, id = {}, od = null, sd = {
  mark: wf,
  measure: wf
};
try {
  typeof window < "u" && (Mo = window), typeof document < "u" && (id = document), typeof MutationObserver < "u" && (od = MutationObserver), typeof performance < "u" && (sd = performance);
} catch {
}
var Fm = Mo.navigator || {}, Of = Fm.userAgent, Sf = Of === void 0 ? "" : Of, Ge = Mo, ce = id, Pf = od, Bt = sd;
Ge.document;
var Ue = !!ce.documentElement && !!ce.head && typeof ce.addEventListener == "function" && typeof ce.createElement == "function", ud = ~Sf.indexOf("MSIE") || ~Sf.indexOf("Trident/"), Vt, Wt, Yt, Gt, Xt, $e = "___FONT_AWESOME___", Xi = 16, cd = "fa", fd = "svg-inline--fa", et = "data-fa-i2svg", Ji = "data-fa-pseudo-element", qm = "data-fa-pseudo-element-pending", Lo = "data-prefix", Fo = "data-icon", Cf = "fontawesome-i2svg", Nm = "async", Dm = ["HTML", "HEAD", "STYLE", "SCRIPT"], ld = function() {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
}(), ue = "classic", de = "sharp", qo = [ue, de];
function Kt(e) {
  return new Proxy(e, {
    get: function(r, n) {
      return n in r ? r[n] : r[ue];
    }
  });
}
var xt = Kt((Vt = {}, be(Vt, ue, {
  fa: "solid",
  fas: "solid",
  "fa-solid": "solid",
  far: "regular",
  "fa-regular": "regular",
  fal: "light",
  "fa-light": "light",
  fat: "thin",
  "fa-thin": "thin",
  fad: "duotone",
  "fa-duotone": "duotone",
  fab: "brands",
  "fa-brands": "brands",
  fak: "kit",
  fakd: "kit",
  "fa-kit": "kit",
  "fa-kit-duotone": "kit"
}), be(Vt, de, {
  fa: "solid",
  fass: "solid",
  "fa-solid": "solid",
  fasr: "regular",
  "fa-regular": "regular",
  fasl: "light",
  "fa-light": "light",
  fast: "thin",
  "fa-thin": "thin"
}), Vt)), Et = Kt((Wt = {}, be(Wt, ue, {
  solid: "fas",
  regular: "far",
  light: "fal",
  thin: "fat",
  duotone: "fad",
  brands: "fab",
  kit: "fak"
}), be(Wt, de, {
  solid: "fass",
  regular: "fasr",
  light: "fasl",
  thin: "fast"
}), Wt)), At = Kt((Yt = {}, be(Yt, ue, {
  fab: "fa-brands",
  fad: "fa-duotone",
  fak: "fa-kit",
  fal: "fa-light",
  far: "fa-regular",
  fas: "fa-solid",
  fat: "fa-thin"
}), be(Yt, de, {
  fass: "fa-solid",
  fasr: "fa-regular",
  fasl: "fa-light",
  fast: "fa-thin"
}), Yt)), jm = Kt((Gt = {}, be(Gt, ue, {
  "fa-brands": "fab",
  "fa-duotone": "fad",
  "fa-kit": "fak",
  "fa-light": "fal",
  "fa-regular": "far",
  "fa-solid": "fas",
  "fa-thin": "fat"
}), be(Gt, de, {
  "fa-solid": "fass",
  "fa-regular": "fasr",
  "fa-light": "fasl",
  "fa-thin": "fast"
}), Gt)), Km = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/, dd = "fa-layers-text", $m = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i, zm = Kt((Xt = {}, be(Xt, ue, {
  900: "fas",
  400: "far",
  normal: "far",
  300: "fal",
  100: "fat"
}), be(Xt, de, {
  900: "fass",
  400: "fasr",
  300: "fasl",
  100: "fast"
}), Xt)), vd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], Hm = vd.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), Um = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Ze = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Tt = /* @__PURE__ */ new Set();
Object.keys(Et[ue]).map(Tt.add.bind(Tt));
Object.keys(Et[de]).map(Tt.add.bind(Tt));
var Bm = [].concat(qo, jt(Tt), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Ze.GROUP, Ze.SWAP_OPACITY, Ze.PRIMARY, Ze.SECONDARY]).concat(vd.map(function(e) {
  return "".concat(e, "x");
})).concat(Hm.map(function(e) {
  return "w-".concat(e);
})), Ot = Ge.FontAwesomeConfig || {};
function Vm(e) {
  var t = ce.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function Wm(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
if (ce && typeof ce.querySelector == "function") {
  var Ym = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  Ym.forEach(function(e) {
    var t = Io(e, 2), r = t[0], n = t[1], a = Wm(Vm(r));
    a != null && (Ot[n] = a);
  });
}
var pd = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: cd,
  replacementClass: fd,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0
};
Ot.familyPrefix && (Ot.cssPrefix = Ot.familyPrefix);
var dt = F(F({}, pd), Ot);
dt.autoReplaceSvg || (dt.observeMutations = !1);
var N = {};
Object.keys(pd).forEach(function(e) {
  Object.defineProperty(N, e, {
    enumerable: !0,
    set: function(r) {
      dt[e] = r, St.forEach(function(n) {
        return n(N);
      });
    },
    get: function() {
      return dt[e];
    }
  });
});
Object.defineProperty(N, "familyPrefix", {
  enumerable: !0,
  set: function(t) {
    dt.cssPrefix = t, St.forEach(function(r) {
      return r(N);
    });
  },
  get: function() {
    return dt.cssPrefix;
  }
});
Ge.FontAwesomeConfig = N;
var St = [];
function Gm(e) {
  return St.push(e), function() {
    St.splice(St.indexOf(e), 1);
  };
}
var Be = Xi, De = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function Xm(e) {
  if (!(!e || !Ue)) {
    var t = ce.createElement("style");
    t.setAttribute("type", "text/css"), t.innerHTML = e;
    for (var r = ce.head.childNodes, n = null, a = r.length - 1; a > -1; a--) {
      var i = r[a], o = (i.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(o) > -1 && (n = i);
    }
    return ce.head.insertBefore(t, n), e;
  }
}
var Jm = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Rt() {
  for (var e = 12, t = ""; e-- > 0; )
    t += Jm[Math.random() * 62 | 0];
  return t;
}
function pt(e) {
  for (var t = [], r = (e || []).length >>> 0; r--; )
    t[r] = e[r];
  return t;
}
function No(e) {
  return e.classList ? pt(e.classList) : (e.getAttribute("class") || "").split(" ").filter(function(t) {
    return t;
  });
}
function hd(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Zm(e) {
  return Object.keys(e || {}).reduce(function(t, r) {
    return t + "".concat(r, '="').concat(hd(e[r]), '" ');
  }, "").trim();
}
function br(e) {
  return Object.keys(e || {}).reduce(function(t, r) {
    return t + "".concat(r, ": ").concat(e[r].trim(), ";");
  }, "");
}
function Do(e) {
  return e.size !== De.size || e.x !== De.x || e.y !== De.y || e.rotate !== De.rotate || e.flipX || e.flipY;
}
function Qm(e) {
  var t = e.transform, r = e.containerWidth, n = e.iconWidth, a = {
    transform: "translate(".concat(r / 2, " 256)")
  }, i = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), o = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), s = "rotate(".concat(t.rotate, " 0 0)"), u = {
    transform: "".concat(i, " ").concat(o, " ").concat(s)
  }, c = {
    transform: "translate(".concat(n / 2 * -1, " -256)")
  };
  return {
    outer: a,
    inner: u,
    path: c
  };
}
function eg(e) {
  var t = e.transform, r = e.width, n = r === void 0 ? Xi : r, a = e.height, i = a === void 0 ? Xi : a, o = e.startCentered, s = o === void 0 ? !1 : o, u = "";
  return s && ud ? u += "translate(".concat(t.x / Be - n / 2, "em, ").concat(t.y / Be - i / 2, "em) ") : s ? u += "translate(calc(-50% + ".concat(t.x / Be, "em), calc(-50% + ").concat(t.y / Be, "em)) ") : u += "translate(".concat(t.x / Be, "em, ").concat(t.y / Be, "em) "), u += "scale(".concat(t.size / Be * (t.flipX ? -1 : 1), ", ").concat(t.size / Be * (t.flipY ? -1 : 1), ") "), u += "rotate(".concat(t.rotate, "deg) "), u;
}
var tg = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
function yd() {
  var e = cd, t = fd, r = N.cssPrefix, n = N.replacementClass, a = tg;
  if (r !== e || n !== t) {
    var i = new RegExp("\\.".concat(e, "\\-"), "g"), o = new RegExp("\\--".concat(e, "\\-"), "g"), s = new RegExp("\\.".concat(t), "g");
    a = a.replace(i, ".".concat(r, "-")).replace(o, "--".concat(r, "-")).replace(s, ".".concat(n));
  }
  return a;
}
var xf = !1;
function Ni() {
  N.autoAddCss && !xf && (Xm(yd()), xf = !0);
}
var rg = {
  mixout: function() {
    return {
      dom: {
        css: yd,
        insertCss: Ni
      }
    };
  },
  hooks: function() {
    return {
      beforeDOMElementCreation: function() {
        Ni();
      },
      beforeI2svg: function() {
        Ni();
      }
    };
  }
}, ze = Ge || {};
ze[$e] || (ze[$e] = {});
ze[$e].styles || (ze[$e].styles = {});
ze[$e].hooks || (ze[$e].hooks = {});
ze[$e].shims || (ze[$e].shims = []);
var qe = ze[$e], md = [], ng = function e() {
  ce.removeEventListener("DOMContentLoaded", e), ir = 1, md.map(function(t) {
    return t();
  });
}, ir = !1;
Ue && (ir = (ce.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(ce.readyState), ir || ce.addEventListener("DOMContentLoaded", ng));
function ag(e) {
  Ue && (ir ? setTimeout(e, 0) : md.push(e));
}
function $t(e) {
  var t = e.tag, r = e.attributes, n = r === void 0 ? {} : r, a = e.children, i = a === void 0 ? [] : a;
  return typeof e == "string" ? hd(e) : "<".concat(t, " ").concat(Zm(n), ">").concat(i.map($t).join(""), "</").concat(t, ">");
}
function Ef(e, t, r) {
  if (e && e[t] && e[t][r])
    return {
      prefix: t,
      iconName: r,
      icon: e[t][r]
    };
}
var ig = function(t, r) {
  return function(n, a, i, o) {
    return t.call(r, n, a, i, o);
  };
}, Di = function(t, r, n, a) {
  var i = Object.keys(t), o = i.length, s = a !== void 0 ? ig(r, a) : r, u, c, f;
  for (n === void 0 ? (u = 1, f = t[i[0]]) : (u = 0, f = n); u < o; u++)
    c = i[u], f = s(f, t[c], c, t);
  return f;
};
function og(e) {
  for (var t = [], r = 0, n = e.length; r < n; ) {
    var a = e.charCodeAt(r++);
    if (a >= 55296 && a <= 56319 && r < n) {
      var i = e.charCodeAt(r++);
      (i & 64512) == 56320 ? t.push(((a & 1023) << 10) + (i & 1023) + 65536) : (t.push(a), r--);
    } else
      t.push(a);
  }
  return t;
}
function Zi(e) {
  var t = og(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function sg(e, t) {
  var r = e.length, n = e.charCodeAt(t), a;
  return n >= 55296 && n <= 56319 && r > t + 1 && (a = e.charCodeAt(t + 1), a >= 56320 && a <= 57343) ? (n - 55296) * 1024 + a - 56320 + 65536 : n;
}
function Af(e) {
  return Object.keys(e).reduce(function(t, r) {
    var n = e[r], a = !!n.icon;
    return a ? t[n.iconName] = n.icon : t[r] = n, t;
  }, {});
}
function Qi(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = r.skipHooks, a = n === void 0 ? !1 : n, i = Af(t);
  typeof qe.hooks.addPack == "function" && !a ? qe.hooks.addPack(e, Af(t)) : qe.styles[e] = F(F({}, qe.styles[e] || {}), i), e === "fas" && Qi("fa", t);
}
var Jt, Zt, Qt, st = qe.styles, ug = qe.shims, cg = (Jt = {}, be(Jt, ue, Object.values(At[ue])), be(Jt, de, Object.values(At[de])), Jt), jo = null, gd = {}, bd = {}, _d = {}, wd = {}, Od = {}, fg = (Zt = {}, be(Zt, ue, Object.keys(xt[ue])), be(Zt, de, Object.keys(xt[de])), Zt);
function lg(e) {
  return ~Bm.indexOf(e);
}
function dg(e, t) {
  var r = t.split("-"), n = r[0], a = r.slice(1).join("-");
  return n === e && a !== "" && !lg(a) ? a : null;
}
var Sd = function() {
  var t = function(i) {
    return Di(st, function(o, s, u) {
      return o[u] = Di(s, i, {}), o;
    }, {});
  };
  gd = t(function(a, i, o) {
    if (i[3] && (a[i[3]] = o), i[2]) {
      var s = i[2].filter(function(u) {
        return typeof u == "number";
      });
      s.forEach(function(u) {
        a[u.toString(16)] = o;
      });
    }
    return a;
  }), bd = t(function(a, i, o) {
    if (a[o] = o, i[2]) {
      var s = i[2].filter(function(u) {
        return typeof u == "string";
      });
      s.forEach(function(u) {
        a[u] = o;
      });
    }
    return a;
  }), Od = t(function(a, i, o) {
    var s = i[2];
    return a[o] = o, s.forEach(function(u) {
      a[u] = o;
    }), a;
  });
  var r = "far" in st || N.autoFetchSvg, n = Di(ug, function(a, i) {
    var o = i[0], s = i[1], u = i[2];
    return s === "far" && !r && (s = "fas"), typeof o == "string" && (a.names[o] = {
      prefix: s,
      iconName: u
    }), typeof o == "number" && (a.unicodes[o.toString(16)] = {
      prefix: s,
      iconName: u
    }), a;
  }, {
    names: {},
    unicodes: {}
  });
  _d = n.names, wd = n.unicodes, jo = _r(N.styleDefault, {
    family: N.familyDefault
  });
};
Gm(function(e) {
  jo = _r(e.styleDefault, {
    family: N.familyDefault
  });
});
Sd();
function Ko(e, t) {
  return (gd[e] || {})[t];
}
function vg(e, t) {
  return (bd[e] || {})[t];
}
function Qe(e, t) {
  return (Od[e] || {})[t];
}
function Pd(e) {
  return _d[e] || {
    prefix: null,
    iconName: null
  };
}
function pg(e) {
  var t = wd[e], r = Ko("fas", e);
  return t || (r ? {
    prefix: "fas",
    iconName: r
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function Xe() {
  return jo;
}
var $o = function() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function _r(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.family, n = r === void 0 ? ue : r, a = xt[n][e], i = Et[n][e] || Et[n][a], o = e in qe.styles ? e : null;
  return i || o || null;
}
var Tf = (Qt = {}, be(Qt, ue, Object.keys(At[ue])), be(Qt, de, Object.keys(At[de])), Qt);
function wr(e) {
  var t, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.skipLookups, a = n === void 0 ? !1 : n, i = (t = {}, be(t, ue, "".concat(N.cssPrefix, "-").concat(ue)), be(t, de, "".concat(N.cssPrefix, "-").concat(de)), t), o = null, s = ue;
  (e.includes(i[ue]) || e.some(function(c) {
    return Tf[ue].includes(c);
  })) && (s = ue), (e.includes(i[de]) || e.some(function(c) {
    return Tf[de].includes(c);
  })) && (s = de);
  var u = e.reduce(function(c, f) {
    var l = dg(N.cssPrefix, f);
    if (st[f] ? (f = cg[s].includes(f) ? jm[s][f] : f, o = f, c.prefix = f) : fg[s].indexOf(f) > -1 ? (o = f, c.prefix = _r(f, {
      family: s
    })) : l ? c.iconName = l : f !== N.replacementClass && f !== i[ue] && f !== i[de] && c.rest.push(f), !a && c.prefix && c.iconName) {
      var y = o === "fa" ? Pd(c.iconName) : {}, h = Qe(c.prefix, c.iconName);
      y.prefix && (o = null), c.iconName = y.iconName || h || c.iconName, c.prefix = y.prefix || c.prefix, c.prefix === "far" && !st.far && st.fas && !N.autoFetchSvg && (c.prefix = "fas");
    }
    return c;
  }, $o());
  return (e.includes("fa-brands") || e.includes("fab")) && (u.prefix = "fab"), (e.includes("fa-duotone") || e.includes("fad")) && (u.prefix = "fad"), !u.prefix && s === de && (st.fass || N.autoFetchSvg) && (u.prefix = "fass", u.iconName = Qe(u.prefix, u.iconName) || u.iconName), (u.prefix === "fa" || o === "fa") && (u.prefix = Xe() || "fas"), u;
}
var hg = /* @__PURE__ */ function() {
  function e() {
    Em(this, e), this.definitions = {};
  }
  return Am(e, [{
    key: "add",
    value: function() {
      for (var r = this, n = arguments.length, a = new Array(n), i = 0; i < n; i++)
        a[i] = arguments[i];
      var o = a.reduce(this._pullDefinitions, {});
      Object.keys(o).forEach(function(s) {
        r.definitions[s] = F(F({}, r.definitions[s] || {}), o[s]), Qi(s, o[s]);
        var u = At[ue][s];
        u && Qi(u, o[s]), Sd();
      });
    }
  }, {
    key: "reset",
    value: function() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function(r, n) {
      var a = n.prefix && n.iconName && n.icon ? {
        0: n
      } : n;
      return Object.keys(a).map(function(i) {
        var o = a[i], s = o.prefix, u = o.iconName, c = o.icon, f = c[2];
        r[s] || (r[s] = {}), f.length > 0 && f.forEach(function(l) {
          typeof l == "string" && (r[s][l] = c);
        }), r[s][u] = c;
      }), r;
    }
  }]), e;
}(), Rf = [], ut = {}, ft = {}, yg = Object.keys(ft);
function mg(e, t) {
  var r = t.mixoutsTo;
  return Rf = e, ut = {}, Object.keys(ft).forEach(function(n) {
    yg.indexOf(n) === -1 && delete ft[n];
  }), Rf.forEach(function(n) {
    var a = n.mixout ? n.mixout() : {};
    if (Object.keys(a).forEach(function(o) {
      typeof a[o] == "function" && (r[o] = a[o]), ar(a[o]) === "object" && Object.keys(a[o]).forEach(function(s) {
        r[o] || (r[o] = {}), r[o][s] = a[o][s];
      });
    }), n.hooks) {
      var i = n.hooks();
      Object.keys(i).forEach(function(o) {
        ut[o] || (ut[o] = []), ut[o].push(i[o]);
      });
    }
    n.provides && n.provides(ft);
  }), r;
}
function eo(e, t) {
  for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++)
    n[a - 2] = arguments[a];
  var i = ut[e] || [];
  return i.forEach(function(o) {
    t = o.apply(null, [t].concat(n));
  }), t;
}
function tt(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  var a = ut[e] || [];
  a.forEach(function(i) {
    i.apply(null, r);
  });
}
function He() {
  var e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return ft[e] ? ft[e].apply(null, t) : void 0;
}
function to(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  var t = e.iconName, r = e.prefix || Xe();
  if (t)
    return t = Qe(r, t) || t, Ef(Cd.definitions, r, t) || Ef(qe.styles, r, t);
}
var Cd = new hg(), gg = function() {
  N.autoReplaceSvg = !1, N.observeMutations = !1, tt("noAuto");
}, bg = {
  i2svg: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return Ue ? (tt("beforeI2svg", t), He("pseudoElements2svg", t), He("i2svg", t)) : Promise.reject("Operation requires a DOM of some kind.");
  },
  watch: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.autoReplaceSvgRoot;
    N.autoReplaceSvg === !1 && (N.autoReplaceSvg = !0), N.observeMutations = !0, ag(function() {
      wg({
        autoReplaceSvgRoot: r
      }), tt("watch", t);
    });
  }
}, _g = {
  icon: function(t) {
    if (t === null)
      return null;
    if (ar(t) === "object" && t.prefix && t.iconName)
      return {
        prefix: t.prefix,
        iconName: Qe(t.prefix, t.iconName) || t.iconName
      };
    if (Array.isArray(t) && t.length === 2) {
      var r = t[1].indexOf("fa-") === 0 ? t[1].slice(3) : t[1], n = _r(t[0]);
      return {
        prefix: n,
        iconName: Qe(n, r) || r
      };
    }
    if (typeof t == "string" && (t.indexOf("".concat(N.cssPrefix, "-")) > -1 || t.match(Km))) {
      var a = wr(t.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: a.prefix || Xe(),
        iconName: Qe(a.prefix, a.iconName) || a.iconName
      };
    }
    if (typeof t == "string") {
      var i = Xe();
      return {
        prefix: i,
        iconName: Qe(i, t) || t
      };
    }
  }
}, Ie = {
  noAuto: gg,
  config: N,
  dom: bg,
  parse: _g,
  library: Cd,
  findIconDefinition: to,
  toHtml: $t
}, wg = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.autoReplaceSvgRoot, n = r === void 0 ? ce : r;
  (Object.keys(qe.styles).length > 0 || N.autoFetchSvg) && Ue && N.autoReplaceSvg && Ie.dom.i2svg({
    node: n
  });
};
function Or(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map(function(n) {
        return $t(n);
      });
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (Ue) {
        var n = ce.createElement("div");
        return n.innerHTML = e.html, n.children;
      }
    }
  }), e;
}
function Og(e) {
  var t = e.children, r = e.main, n = e.mask, a = e.attributes, i = e.styles, o = e.transform;
  if (Do(o) && r.found && !n.found) {
    var s = r.width, u = r.height, c = {
      x: s / u / 2,
      y: 0.5
    };
    a.style = br(F(F({}, i), {}, {
      "transform-origin": "".concat(c.x + o.x / 16, "em ").concat(c.y + o.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: a,
    children: t
  }];
}
function Sg(e) {
  var t = e.prefix, r = e.iconName, n = e.children, a = e.attributes, i = e.symbol, o = i === !0 ? "".concat(t, "-").concat(N.cssPrefix, "-").concat(r) : i;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: F(F({}, a), {}, {
        id: o
      }),
      children: n
    }]
  }];
}
function zo(e) {
  var t = e.icons, r = t.main, n = t.mask, a = e.prefix, i = e.iconName, o = e.transform, s = e.symbol, u = e.title, c = e.maskId, f = e.titleId, l = e.extra, y = e.watchable, h = y === void 0 ? !1 : y, E = n.found ? n : r, C = E.width, g = E.height, S = a === "fak", O = [N.replacementClass, i ? "".concat(N.cssPrefix, "-").concat(i) : ""].filter(function(T) {
    return l.classes.indexOf(T) === -1;
  }).filter(function(T) {
    return T !== "" || !!T;
  }).concat(l.classes).join(" "), b = {
    children: [],
    attributes: F(F({}, l.attributes), {}, {
      "data-prefix": a,
      "data-icon": i,
      class: O,
      role: l.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(C, " ").concat(g)
    })
  }, p = S && !~l.classes.indexOf("fa-fw") ? {
    width: "".concat(C / g * 16 * 0.0625, "em")
  } : {};
  h && (b.attributes[et] = ""), u && (b.children.push({
    tag: "title",
    attributes: {
      id: b.attributes["aria-labelledby"] || "title-".concat(f || Rt())
    },
    children: [u]
  }), delete b.attributes.title);
  var m = F(F({}, b), {}, {
    prefix: a,
    iconName: i,
    main: r,
    mask: n,
    maskId: c,
    transform: o,
    symbol: s,
    styles: F(F({}, p), l.styles)
  }), x = n.found && r.found ? He("generateAbstractMask", m) || {
    children: [],
    attributes: {}
  } : He("generateAbstractIcon", m) || {
    children: [],
    attributes: {}
  }, P = x.children, k = x.attributes;
  return m.children = P, m.attributes = k, s ? Sg(m) : Og(m);
}
function kf(e) {
  var t = e.content, r = e.width, n = e.height, a = e.transform, i = e.title, o = e.extra, s = e.watchable, u = s === void 0 ? !1 : s, c = F(F(F({}, o.attributes), i ? {
    title: i
  } : {}), {}, {
    class: o.classes.join(" ")
  });
  u && (c[et] = "");
  var f = F({}, o.styles);
  Do(a) && (f.transform = eg({
    transform: a,
    startCentered: !0,
    width: r,
    height: n
  }), f["-webkit-transform"] = f.transform);
  var l = br(f);
  l.length > 0 && (c.style = l);
  var y = [];
  return y.push({
    tag: "span",
    attributes: c,
    children: [t]
  }), i && y.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [i]
  }), y;
}
function Pg(e) {
  var t = e.content, r = e.title, n = e.extra, a = F(F(F({}, n.attributes), r ? {
    title: r
  } : {}), {}, {
    class: n.classes.join(" ")
  }), i = br(n.styles);
  i.length > 0 && (a.style = i);
  var o = [];
  return o.push({
    tag: "span",
    attributes: a,
    children: [t]
  }), r && o.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [r]
  }), o;
}
var ji = qe.styles;
function ro(e) {
  var t = e[0], r = e[1], n = e.slice(4), a = Io(n, 1), i = a[0], o = null;
  return Array.isArray(i) ? o = {
    tag: "g",
    attributes: {
      class: "".concat(N.cssPrefix, "-").concat(Ze.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(N.cssPrefix, "-").concat(Ze.SECONDARY),
        fill: "currentColor",
        d: i[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(N.cssPrefix, "-").concat(Ze.PRIMARY),
        fill: "currentColor",
        d: i[1]
      }
    }]
  } : o = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: i
    }
  }, {
    found: !0,
    width: t,
    height: r,
    icon: o
  };
}
var Cg = {
  found: !1,
  width: 512,
  height: 512
};
function xg(e, t) {
  !ld && !N.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function no(e, t) {
  var r = t;
  return t === "fa" && N.styleDefault !== null && (t = Xe()), new Promise(function(n, a) {
    if (He("missingIconAbstract"), r === "fa") {
      var i = Pd(e) || {};
      e = i.iconName || e, t = i.prefix || t;
    }
    if (e && t && ji[t] && ji[t][e]) {
      var o = ji[t][e];
      return n(ro(o));
    }
    xg(e, t), n(F(F({}, Cg), {}, {
      icon: N.showMissingIcons && e ? He("missingIconAbstract") || {} : {}
    }));
  });
}
var If = function() {
}, ao = N.measurePerformance && Bt && Bt.mark && Bt.measure ? Bt : {
  mark: If,
  measure: If
}, _t = 'FA "6.5.2"', Eg = function(t) {
  return ao.mark("".concat(_t, " ").concat(t, " begins")), function() {
    return xd(t);
  };
}, xd = function(t) {
  ao.mark("".concat(_t, " ").concat(t, " ends")), ao.measure("".concat(_t, " ").concat(t), "".concat(_t, " ").concat(t, " begins"), "".concat(_t, " ").concat(t, " ends"));
}, Ho = {
  begin: Eg,
  end: xd
}, rr = function() {
};
function Mf(e) {
  var t = e.getAttribute ? e.getAttribute(et) : null;
  return typeof t == "string";
}
function Ag(e) {
  var t = e.getAttribute ? e.getAttribute(Lo) : null, r = e.getAttribute ? e.getAttribute(Fo) : null;
  return t && r;
}
function Tg(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(N.replacementClass);
}
function Rg() {
  if (N.autoReplaceSvg === !0)
    return nr.replace;
  var e = nr[N.autoReplaceSvg];
  return e || nr.replace;
}
function kg(e) {
  return ce.createElementNS("http://www.w3.org/2000/svg", e);
}
function Ig(e) {
  return ce.createElement(e);
}
function Ed(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.ceFn, n = r === void 0 ? e.tag === "svg" ? kg : Ig : r;
  if (typeof e == "string")
    return ce.createTextNode(e);
  var a = n(e.tag);
  Object.keys(e.attributes || []).forEach(function(o) {
    a.setAttribute(o, e.attributes[o]);
  });
  var i = e.children || [];
  return i.forEach(function(o) {
    a.appendChild(Ed(o, {
      ceFn: n
    }));
  }), a;
}
function Mg(e) {
  var t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
var nr = {
  replace: function(t) {
    var r = t[0];
    if (r.parentNode)
      if (t[1].forEach(function(a) {
        r.parentNode.insertBefore(Ed(a), r);
      }), r.getAttribute(et) === null && N.keepOriginalSource) {
        var n = ce.createComment(Mg(r));
        r.parentNode.replaceChild(n, r);
      } else
        r.remove();
  },
  nest: function(t) {
    var r = t[0], n = t[1];
    if (~No(r).indexOf(N.replacementClass))
      return nr.replace(t);
    var a = new RegExp("".concat(N.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      var i = n[0].attributes.class.split(" ").reduce(function(s, u) {
        return u === N.replacementClass || u.match(a) ? s.toSvg.push(u) : s.toNode.push(u), s;
      }, {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = i.toSvg.join(" "), i.toNode.length === 0 ? r.removeAttribute("class") : r.setAttribute("class", i.toNode.join(" "));
    }
    var o = n.map(function(s) {
      return $t(s);
    }).join(`
`);
    r.setAttribute(et, ""), r.innerHTML = o;
  }
};
function Lf(e) {
  e();
}
function Ad(e, t) {
  var r = typeof t == "function" ? t : rr;
  if (e.length === 0)
    r();
  else {
    var n = Lf;
    N.mutateApproach === Nm && (n = Ge.requestAnimationFrame || Lf), n(function() {
      var a = Rg(), i = Ho.begin("mutate");
      e.map(a), i(), r();
    });
  }
}
var Uo = !1;
function Td() {
  Uo = !0;
}
function io() {
  Uo = !1;
}
var or = null;
function Ff(e) {
  if (Pf && N.observeMutations) {
    var t = e.treeCallback, r = t === void 0 ? rr : t, n = e.nodeCallback, a = n === void 0 ? rr : n, i = e.pseudoElementsCallback, o = i === void 0 ? rr : i, s = e.observeMutationsRoot, u = s === void 0 ? ce : s;
    or = new Pf(function(c) {
      if (!Uo) {
        var f = Xe();
        pt(c).forEach(function(l) {
          if (l.type === "childList" && l.addedNodes.length > 0 && !Mf(l.addedNodes[0]) && (N.searchPseudoElements && o(l.target), r(l.target)), l.type === "attributes" && l.target.parentNode && N.searchPseudoElements && o(l.target.parentNode), l.type === "attributes" && Mf(l.target) && ~Um.indexOf(l.attributeName))
            if (l.attributeName === "class" && Ag(l.target)) {
              var y = wr(No(l.target)), h = y.prefix, E = y.iconName;
              l.target.setAttribute(Lo, h || f), E && l.target.setAttribute(Fo, E);
            } else
              Tg(l.target) && a(l.target);
        });
      }
    }), Ue && or.observe(u, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    });
  }
}
function Lg() {
  or && or.disconnect();
}
function Fg(e) {
  var t = e.getAttribute("style"), r = [];
  return t && (r = t.split(";").reduce(function(n, a) {
    var i = a.split(":"), o = i[0], s = i.slice(1);
    return o && s.length > 0 && (n[o] = s.join(":").trim()), n;
  }, {})), r;
}
function qg(e) {
  var t = e.getAttribute("data-prefix"), r = e.getAttribute("data-icon"), n = e.innerText !== void 0 ? e.innerText.trim() : "", a = wr(No(e));
  return a.prefix || (a.prefix = Xe()), t && r && (a.prefix = t, a.iconName = r), a.iconName && a.prefix || (a.prefix && n.length > 0 && (a.iconName = vg(a.prefix, e.innerText) || Ko(a.prefix, Zi(e.innerText))), !a.iconName && N.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (a.iconName = e.firstChild.data)), a;
}
function Ng(e) {
  var t = pt(e.attributes).reduce(function(a, i) {
    return a.name !== "class" && a.name !== "style" && (a[i.name] = i.value), a;
  }, {}), r = e.getAttribute("title"), n = e.getAttribute("data-fa-title-id");
  return N.autoA11y && (r ? t["aria-labelledby"] = "".concat(N.replacementClass, "-title-").concat(n || Rt()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function Dg() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: De,
    symbol: !1,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function qf(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  }, r = qg(e), n = r.iconName, a = r.prefix, i = r.rest, o = Ng(e), s = eo("parseNodeAttributes", {}, e), u = t.styleParser ? Fg(e) : [];
  return F({
    iconName: n,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: a,
    transform: De,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: i,
      styles: u,
      attributes: o
    }
  }, s);
}
var jg = qe.styles;
function Rd(e) {
  var t = N.autoReplaceSvg === "nest" ? qf(e, {
    styleParser: !1
  }) : qf(e);
  return ~t.extra.classes.indexOf(dd) ? He("generateLayersText", e, t) : He("generateSvgReplacementMutation", e, t);
}
var Je = /* @__PURE__ */ new Set();
qo.map(function(e) {
  Je.add("fa-".concat(e));
});
Object.keys(xt[ue]).map(Je.add.bind(Je));
Object.keys(xt[de]).map(Je.add.bind(Je));
Je = jt(Je);
function Nf(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!Ue)
    return Promise.resolve();
  var r = ce.documentElement.classList, n = function(l) {
    return r.add("".concat(Cf, "-").concat(l));
  }, a = function(l) {
    return r.remove("".concat(Cf, "-").concat(l));
  }, i = N.autoFetchSvg ? Je : qo.map(function(f) {
    return "fa-".concat(f);
  }).concat(Object.keys(jg));
  i.includes("fa") || i.push("fa");
  var o = [".".concat(dd, ":not([").concat(et, "])")].concat(i.map(function(f) {
    return ".".concat(f, ":not([").concat(et, "])");
  })).join(", ");
  if (o.length === 0)
    return Promise.resolve();
  var s = [];
  try {
    s = pt(e.querySelectorAll(o));
  } catch {
  }
  if (s.length > 0)
    n("pending"), a("complete");
  else
    return Promise.resolve();
  var u = Ho.begin("onTree"), c = s.reduce(function(f, l) {
    try {
      var y = Rd(l);
      y && f.push(y);
    } catch (h) {
      ld || h.name === "MissingIcon" && console.error(h);
    }
    return f;
  }, []);
  return new Promise(function(f, l) {
    Promise.all(c).then(function(y) {
      Ad(y, function() {
        n("active"), n("complete"), a("pending"), typeof t == "function" && t(), u(), f();
      });
    }).catch(function(y) {
      u(), l(y);
    });
  });
}
function Kg(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Rd(e).then(function(r) {
    r && Ad([r], t);
  });
}
function $g(e) {
  return function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = (t || {}).icon ? t : to(t || {}), a = r.mask;
    return a && (a = (a || {}).icon ? a : to(a || {})), e(n, F(F({}, r), {}, {
      mask: a
    }));
  };
}
var zg = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.transform, a = n === void 0 ? De : n, i = r.symbol, o = i === void 0 ? !1 : i, s = r.mask, u = s === void 0 ? null : s, c = r.maskId, f = c === void 0 ? null : c, l = r.title, y = l === void 0 ? null : l, h = r.titleId, E = h === void 0 ? null : h, C = r.classes, g = C === void 0 ? [] : C, S = r.attributes, O = S === void 0 ? {} : S, b = r.styles, p = b === void 0 ? {} : b;
  if (t) {
    var m = t.prefix, x = t.iconName, P = t.icon;
    return Or(F({
      type: "icon"
    }, t), function() {
      return tt("beforeDOMElementCreation", {
        iconDefinition: t,
        params: r
      }), N.autoA11y && (y ? O["aria-labelledby"] = "".concat(N.replacementClass, "-title-").concat(E || Rt()) : (O["aria-hidden"] = "true", O.focusable = "false")), zo({
        icons: {
          main: ro(P),
          mask: u ? ro(u.icon) : {
            found: !1,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: m,
        iconName: x,
        transform: F(F({}, De), a),
        symbol: o,
        title: y,
        maskId: f,
        titleId: E,
        extra: {
          attributes: O,
          styles: p,
          classes: g
        }
      });
    });
  }
}, Hg = {
  mixout: function() {
    return {
      icon: $g(zg)
    };
  },
  hooks: function() {
    return {
      mutationObserverCallbacks: function(r) {
        return r.treeCallback = Nf, r.nodeCallback = Kg, r;
      }
    };
  },
  provides: function(t) {
    t.i2svg = function(r) {
      var n = r.node, a = n === void 0 ? ce : n, i = r.callback, o = i === void 0 ? function() {
      } : i;
      return Nf(a, o);
    }, t.generateSvgReplacementMutation = function(r, n) {
      var a = n.iconName, i = n.title, o = n.titleId, s = n.prefix, u = n.transform, c = n.symbol, f = n.mask, l = n.maskId, y = n.extra;
      return new Promise(function(h, E) {
        Promise.all([no(a, s), f.iconName ? no(f.iconName, f.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(C) {
          var g = Io(C, 2), S = g[0], O = g[1];
          h([r, zo({
            icons: {
              main: S,
              mask: O
            },
            prefix: s,
            iconName: a,
            transform: u,
            symbol: c,
            maskId: l,
            title: i,
            titleId: o,
            extra: y,
            watchable: !0
          })]);
        }).catch(E);
      });
    }, t.generateAbstractIcon = function(r) {
      var n = r.children, a = r.attributes, i = r.main, o = r.transform, s = r.styles, u = br(s);
      u.length > 0 && (a.style = u);
      var c;
      return Do(o) && (c = He("generateAbstractTransformGrouping", {
        main: i,
        transform: o,
        containerWidth: i.width,
        iconWidth: i.width
      })), n.push(c || i.icon), {
        children: n,
        attributes: a
      };
    };
  }
}, Ug = {
  mixout: function() {
    return {
      layer: function(r) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = n.classes, i = a === void 0 ? [] : a;
        return Or({
          type: "layer"
        }, function() {
          tt("beforeDOMElementCreation", {
            assembler: r,
            params: n
          });
          var o = [];
          return r(function(s) {
            Array.isArray(s) ? s.map(function(u) {
              o = o.concat(u.abstract);
            }) : o = o.concat(s.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(N.cssPrefix, "-layers")].concat(jt(i)).join(" ")
            },
            children: o
          }];
        });
      }
    };
  }
}, Bg = {
  mixout: function() {
    return {
      counter: function(r) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = n.title, i = a === void 0 ? null : a, o = n.classes, s = o === void 0 ? [] : o, u = n.attributes, c = u === void 0 ? {} : u, f = n.styles, l = f === void 0 ? {} : f;
        return Or({
          type: "counter",
          content: r
        }, function() {
          return tt("beforeDOMElementCreation", {
            content: r,
            params: n
          }), Pg({
            content: r.toString(),
            title: i,
            extra: {
              attributes: c,
              styles: l,
              classes: ["".concat(N.cssPrefix, "-layers-counter")].concat(jt(s))
            }
          });
        });
      }
    };
  }
}, Vg = {
  mixout: function() {
    return {
      text: function(r) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = n.transform, i = a === void 0 ? De : a, o = n.title, s = o === void 0 ? null : o, u = n.classes, c = u === void 0 ? [] : u, f = n.attributes, l = f === void 0 ? {} : f, y = n.styles, h = y === void 0 ? {} : y;
        return Or({
          type: "text",
          content: r
        }, function() {
          return tt("beforeDOMElementCreation", {
            content: r,
            params: n
          }), kf({
            content: r,
            transform: F(F({}, De), i),
            title: s,
            extra: {
              attributes: l,
              styles: h,
              classes: ["".concat(N.cssPrefix, "-layers-text")].concat(jt(c))
            }
          });
        });
      }
    };
  },
  provides: function(t) {
    t.generateLayersText = function(r, n) {
      var a = n.title, i = n.transform, o = n.extra, s = null, u = null;
      if (ud) {
        var c = parseInt(getComputedStyle(r).fontSize, 10), f = r.getBoundingClientRect();
        s = f.width / c, u = f.height / c;
      }
      return N.autoA11y && !a && (o.attributes["aria-hidden"] = "true"), Promise.resolve([r, kf({
        content: r.innerHTML,
        width: s,
        height: u,
        transform: i,
        title: a,
        extra: o,
        watchable: !0
      })]);
    };
  }
}, Wg = new RegExp('"', "ug"), Df = [1105920, 1112319];
function Yg(e) {
  var t = e.replace(Wg, ""), r = sg(t, 0), n = r >= Df[0] && r <= Df[1], a = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: Zi(a ? t[0] : t),
    isSecondary: n || a
  };
}
function jf(e, t) {
  var r = "".concat(qm).concat(t.replace(":", "-"));
  return new Promise(function(n, a) {
    if (e.getAttribute(r) !== null)
      return n();
    var i = pt(e.children), o = i.filter(function(P) {
      return P.getAttribute(Ji) === t;
    })[0], s = Ge.getComputedStyle(e, t), u = s.getPropertyValue("font-family").match($m), c = s.getPropertyValue("font-weight"), f = s.getPropertyValue("content");
    if (o && !u)
      return e.removeChild(o), n();
    if (u && f !== "none" && f !== "") {
      var l = s.getPropertyValue("content"), y = ~["Sharp"].indexOf(u[2]) ? de : ue, h = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(u[2]) ? Et[y][u[2].toLowerCase()] : zm[y][c], E = Yg(l), C = E.value, g = E.isSecondary, S = u[0].startsWith("FontAwesome"), O = Ko(h, C), b = O;
      if (S) {
        var p = pg(C);
        p.iconName && p.prefix && (O = p.iconName, h = p.prefix);
      }
      if (O && !g && (!o || o.getAttribute(Lo) !== h || o.getAttribute(Fo) !== b)) {
        e.setAttribute(r, b), o && e.removeChild(o);
        var m = Dg(), x = m.extra;
        x.attributes[Ji] = t, no(O, h).then(function(P) {
          var k = zo(F(F({}, m), {}, {
            icons: {
              main: P,
              mask: $o()
            },
            prefix: h,
            iconName: b,
            extra: x,
            watchable: !0
          })), T = ce.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(T, e.firstChild) : e.appendChild(T), T.outerHTML = k.map(function(q) {
            return $t(q);
          }).join(`
`), e.removeAttribute(r), n();
        }).catch(a);
      } else
        n();
    } else
      n();
  });
}
function Gg(e) {
  return Promise.all([jf(e, "::before"), jf(e, "::after")]);
}
function Xg(e) {
  return e.parentNode !== document.head && !~Dm.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(Ji) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function Kf(e) {
  if (Ue)
    return new Promise(function(t, r) {
      var n = pt(e.querySelectorAll("*")).filter(Xg).map(Gg), a = Ho.begin("searchPseudoElements");
      Td(), Promise.all(n).then(function() {
        a(), io(), t();
      }).catch(function() {
        a(), io(), r();
      });
    });
}
var Jg = {
  hooks: function() {
    return {
      mutationObserverCallbacks: function(r) {
        return r.pseudoElementsCallback = Kf, r;
      }
    };
  },
  provides: function(t) {
    t.pseudoElements2svg = function(r) {
      var n = r.node, a = n === void 0 ? ce : n;
      N.searchPseudoElements && Kf(a);
    };
  }
}, $f = !1, Zg = {
  mixout: function() {
    return {
      dom: {
        unwatch: function() {
          Td(), $f = !0;
        }
      }
    };
  },
  hooks: function() {
    return {
      bootstrap: function() {
        Ff(eo("mutationObserverCallbacks", {}));
      },
      noAuto: function() {
        Lg();
      },
      watch: function(r) {
        var n = r.observeMutationsRoot;
        $f ? io() : Ff(eo("mutationObserverCallbacks", {
          observeMutationsRoot: n
        }));
      }
    };
  }
}, zf = function(t) {
  var r = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return t.toLowerCase().split(" ").reduce(function(n, a) {
    var i = a.toLowerCase().split("-"), o = i[0], s = i.slice(1).join("-");
    if (o && s === "h")
      return n.flipX = !0, n;
    if (o && s === "v")
      return n.flipY = !0, n;
    if (s = parseFloat(s), isNaN(s))
      return n;
    switch (o) {
      case "grow":
        n.size = n.size + s;
        break;
      case "shrink":
        n.size = n.size - s;
        break;
      case "left":
        n.x = n.x - s;
        break;
      case "right":
        n.x = n.x + s;
        break;
      case "up":
        n.y = n.y - s;
        break;
      case "down":
        n.y = n.y + s;
        break;
      case "rotate":
        n.rotate = n.rotate + s;
        break;
    }
    return n;
  }, r);
}, Qg = {
  mixout: function() {
    return {
      parse: {
        transform: function(r) {
          return zf(r);
        }
      }
    };
  },
  hooks: function() {
    return {
      parseNodeAttributes: function(r, n) {
        var a = n.getAttribute("data-fa-transform");
        return a && (r.transform = zf(a)), r;
      }
    };
  },
  provides: function(t) {
    t.generateAbstractTransformGrouping = function(r) {
      var n = r.main, a = r.transform, i = r.containerWidth, o = r.iconWidth, s = {
        transform: "translate(".concat(i / 2, " 256)")
      }, u = "translate(".concat(a.x * 32, ", ").concat(a.y * 32, ") "), c = "scale(".concat(a.size / 16 * (a.flipX ? -1 : 1), ", ").concat(a.size / 16 * (a.flipY ? -1 : 1), ") "), f = "rotate(".concat(a.rotate, " 0 0)"), l = {
        transform: "".concat(u, " ").concat(c, " ").concat(f)
      }, y = {
        transform: "translate(".concat(o / 2 * -1, " -256)")
      }, h = {
        outer: s,
        inner: l,
        path: y
      };
      return {
        tag: "g",
        attributes: F({}, h.outer),
        children: [{
          tag: "g",
          attributes: F({}, h.inner),
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: F(F({}, n.icon.attributes), h.path)
          }]
        }]
      };
    };
  }
}, Ki = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function Hf(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function eb(e) {
  return e.tag === "g" ? e.children : [e];
}
var tb = {
  hooks: function() {
    return {
      parseNodeAttributes: function(r, n) {
        var a = n.getAttribute("data-fa-mask"), i = a ? wr(a.split(" ").map(function(o) {
          return o.trim();
        })) : $o();
        return i.prefix || (i.prefix = Xe()), r.mask = i, r.maskId = n.getAttribute("data-fa-mask-id"), r;
      }
    };
  },
  provides: function(t) {
    t.generateAbstractMask = function(r) {
      var n = r.children, a = r.attributes, i = r.main, o = r.mask, s = r.maskId, u = r.transform, c = i.width, f = i.icon, l = o.width, y = o.icon, h = Qm({
        transform: u,
        containerWidth: l,
        iconWidth: c
      }), E = {
        tag: "rect",
        attributes: F(F({}, Ki), {}, {
          fill: "white"
        })
      }, C = f.children ? {
        children: f.children.map(Hf)
      } : {}, g = {
        tag: "g",
        attributes: F({}, h.inner),
        children: [Hf(F({
          tag: f.tag,
          attributes: F(F({}, f.attributes), h.path)
        }, C))]
      }, S = {
        tag: "g",
        attributes: F({}, h.outer),
        children: [g]
      }, O = "mask-".concat(s || Rt()), b = "clip-".concat(s || Rt()), p = {
        tag: "mask",
        attributes: F(F({}, Ki), {}, {
          id: O,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [E, S]
      }, m = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: b
          },
          children: eb(y)
        }, p]
      };
      return n.push(m, {
        tag: "rect",
        attributes: F({
          fill: "currentColor",
          "clip-path": "url(#".concat(b, ")"),
          mask: "url(#".concat(O, ")")
        }, Ki)
      }), {
        children: n,
        attributes: a
      };
    };
  }
}, rb = {
  provides: function(t) {
    var r = !1;
    Ge.matchMedia && (r = Ge.matchMedia("(prefers-reduced-motion: reduce)").matches), t.missingIconAbstract = function() {
      var n = [], a = {
        fill: "currentColor"
      }, i = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      n.push({
        tag: "path",
        attributes: F(F({}, a), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      var o = F(F({}, i), {}, {
        attributeName: "opacity"
      }), s = {
        tag: "circle",
        attributes: F(F({}, a), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return r || s.children.push({
        tag: "animate",
        attributes: F(F({}, i), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: F(F({}, o), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), n.push(s), n.push({
        tag: "path",
        attributes: F(F({}, a), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: r ? [] : [{
          tag: "animate",
          attributes: F(F({}, o), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), r || n.push({
        tag: "path",
        attributes: F(F({}, a), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: F(F({}, o), {}, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: n
      };
    };
  }
}, nb = {
  hooks: function() {
    return {
      parseNodeAttributes: function(r, n) {
        var a = n.getAttribute("data-fa-symbol"), i = a === null ? !1 : a === "" ? !0 : a;
        return r.symbol = i, r;
      }
    };
  }
}, ab = [rg, Hg, Ug, Bg, Vg, Jg, Zg, Qg, tb, rb, nb];
mg(ab, {
  mixoutsTo: Ie
});
Ie.noAuto;
Ie.config;
Ie.library;
Ie.dom;
var oo = Ie.parse;
Ie.findIconDefinition;
Ie.toHtml;
var ib = Ie.icon;
Ie.layer;
Ie.text;
Ie.counter;
function Uf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ye(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Uf(Object(r), !0).forEach(function(n) {
      ct(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Uf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function sr(e) {
  "@babel/helpers - typeof";
  return sr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, sr(e);
}
function ct(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function ob(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, i;
  for (i = 0; i < n.length; i++)
    a = n[i], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function sb(e, t) {
  if (e == null)
    return {};
  var r = ob(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function so(e) {
  return ub(e) || cb(e) || fb(e) || lb();
}
function ub(e) {
  if (Array.isArray(e))
    return uo(e);
}
function cb(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function fb(e, t) {
  if (e) {
    if (typeof e == "string")
      return uo(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return uo(e, t);
  }
}
function uo(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function lb() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function db(e) {
  var t, r = e.beat, n = e.fade, a = e.beatFade, i = e.bounce, o = e.shake, s = e.flash, u = e.spin, c = e.spinPulse, f = e.spinReverse, l = e.pulse, y = e.fixedWidth, h = e.inverse, E = e.border, C = e.listItem, g = e.flip, S = e.size, O = e.rotation, b = e.pull, p = (t = {
    "fa-beat": r,
    "fa-fade": n,
    "fa-beat-fade": a,
    "fa-bounce": i,
    "fa-shake": o,
    "fa-flash": s,
    "fa-spin": u,
    "fa-spin-reverse": f,
    "fa-spin-pulse": c,
    "fa-pulse": l,
    "fa-fw": y,
    "fa-inverse": h,
    "fa-border": E,
    "fa-li": C,
    "fa-flip": g === !0,
    "fa-flip-horizontal": g === "horizontal" || g === "both",
    "fa-flip-vertical": g === "vertical" || g === "both"
  }, ct(t, "fa-".concat(S), typeof S < "u" && S !== null), ct(t, "fa-rotate-".concat(O), typeof O < "u" && O !== null && O !== 0), ct(t, "fa-pull-".concat(b), typeof b < "u" && b !== null), ct(t, "fa-swap-opacity", e.swapOpacity), t);
  return Object.keys(p).map(function(m) {
    return p[m] ? m : null;
  }).filter(function(m) {
    return m;
  });
}
function vb(e) {
  return e = e - 0, e === e;
}
function kd(e) {
  return vb(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, r) {
    return r ? r.toUpperCase() : "";
  }), e.substr(0, 1).toLowerCase() + e.substr(1));
}
var pb = ["style"];
function hb(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function yb(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, r) {
    var n = r.indexOf(":"), a = kd(r.slice(0, n)), i = r.slice(n + 1).trim();
    return a.startsWith("webkit") ? t[hb(a)] = i : t[a] = i, t;
  }, {});
}
function Id(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var n = (t.children || []).map(function(u) {
    return Id(e, u);
  }), a = Object.keys(t.attributes || {}).reduce(function(u, c) {
    var f = t.attributes[c];
    switch (c) {
      case "class":
        u.attrs.className = f, delete t.attributes.class;
        break;
      case "style":
        u.attrs.style = yb(f);
        break;
      default:
        c.indexOf("aria-") === 0 || c.indexOf("data-") === 0 ? u.attrs[c.toLowerCase()] = f : u.attrs[kd(c)] = f;
    }
    return u;
  }, {
    attrs: {}
  }), i = r.style, o = i === void 0 ? {} : i, s = sb(r, pb);
  return a.attrs.style = Ye(Ye({}, a.attrs.style), o), e.apply(void 0, [t.tag, Ye(Ye({}, a.attrs), s)].concat(so(n)));
}
var Md = !1;
try {
  Md = process.env.NODE_ENV === "production";
} catch {
}
function mb() {
  if (!Md && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function Bf(e) {
  if (e && sr(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (oo.icon)
    return oo.icon(e);
  if (e === null)
    return null;
  if (e && sr(e) === "object" && e.prefix && e.iconName)
    return e;
  if (Array.isArray(e) && e.length === 2)
    return {
      prefix: e[0],
      iconName: e[1]
    };
  if (typeof e == "string")
    return {
      prefix: "fas",
      iconName: e
    };
}
function $i(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? ct({}, e, t) : {};
}
var zt = /* @__PURE__ */ Me.forwardRef(function(e, t) {
  var r = e.icon, n = e.mask, a = e.symbol, i = e.className, o = e.title, s = e.titleId, u = e.maskId, c = Bf(r), f = $i("classes", [].concat(so(db(e)), so(i.split(" ")))), l = $i("transform", typeof e.transform == "string" ? oo.transform(e.transform) : e.transform), y = $i("mask", Bf(n)), h = ib(c, Ye(Ye(Ye(Ye({}, f), l), y), {}, {
    symbol: a,
    title: o,
    titleId: s,
    maskId: u
  }));
  if (!h)
    return mb("Could not find icon", c), null;
  var E = h.abstract, C = {
    ref: t
  };
  return Object.keys(e).forEach(function(g) {
    zt.defaultProps.hasOwnProperty(g) || (C[g] = e[g]);
  }), gb(E[0], C);
});
zt.displayName = "FontAwesomeIcon";
zt.propTypes = {
  beat: ee.bool,
  border: ee.bool,
  beatFade: ee.bool,
  bounce: ee.bool,
  className: ee.string,
  fade: ee.bool,
  flash: ee.bool,
  mask: ee.oneOfType([ee.object, ee.array, ee.string]),
  maskId: ee.string,
  fixedWidth: ee.bool,
  inverse: ee.bool,
  flip: ee.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: ee.oneOfType([ee.object, ee.array, ee.string]),
  listItem: ee.bool,
  pull: ee.oneOf(["right", "left"]),
  pulse: ee.bool,
  rotation: ee.oneOf([0, 90, 180, 270]),
  shake: ee.bool,
  size: ee.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: ee.bool,
  spinPulse: ee.bool,
  spinReverse: ee.bool,
  symbol: ee.oneOfType([ee.bool, ee.string]),
  title: ee.string,
  titleId: ee.string,
  transform: ee.oneOfType([ee.string, ee.object]),
  swapOpacity: ee.bool
};
zt.defaultProps = {
  border: !1,
  className: "",
  mask: null,
  maskId: null,
  fixedWidth: !1,
  inverse: !1,
  flip: !1,
  icon: null,
  listItem: !1,
  pull: null,
  pulse: !1,
  rotation: null,
  size: null,
  spin: !1,
  spinPulse: !1,
  spinReverse: !1,
  beat: !1,
  fade: !1,
  beatFade: !1,
  bounce: !1,
  shake: !1,
  symbol: !1,
  title: "",
  titleId: null,
  transform: null,
  swapOpacity: !1
};
var gb = Id.bind(null, Me.createElement), bb = {
  prefix: "fas",
  iconName: "forward-step",
  icon: [320, 512, ["step-forward"], "f051", "M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4l192 160L256 241V96c0-17.7 14.3-32 32-32s32 14.3 32 32V416c0 17.7-14.3 32-32 32s-32-14.3-32-32V271l-11.5 9.6-192 160z"]
}, _b = {
  prefix: "fas",
  iconName: "backward",
  icon: [512, 512, [9194], "f04a", "M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3V256v41.7L459.5 440.6zM256 352V256 128 96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V352z"]
}, wb = {
  prefix: "fas",
  iconName: "compress",
  icon: [448, 512, [], "f066", "M160 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V64zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32H96v64c0 17.7 14.3 32 32 32s32-14.3 32-32V352c0-17.7-14.3-32-32-32H32zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V64zM320 320c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32s32-14.3 32-32V384h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H320z"]
}, Ob = {
  prefix: "fas",
  iconName: "repeat",
  icon: [512, 512, [128257], "f363", "M0 224c0 17.7 14.3 32 32 32s32-14.3 32-32c0-53 43-96 96-96H320v32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9S320 19.1 320 32V64H160C71.6 64 0 135.6 0 224zm512 64c0-17.7-14.3-32-32-32s-32 14.3-32 32c0 53-43 96-96 96H192V352c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V448H352c88.4 0 160-71.6 160-160z"]
}, Sb = {
  prefix: "fas",
  iconName: "pause",
  icon: [320, 512, [9208], "f04c", "M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"]
}, Pb = {
  prefix: "fas",
  iconName: "heart",
  icon: [512, 512, [128153, 128154, 128155, 128156, 128420, 129293, 129294, 129505, 9829, 10084, 61578], "f004", "M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]
}, Cb = {
  prefix: "fas",
  iconName: "volume-high",
  icon: [640, 512, [128266, "volume-up"], "f028", "M533.6 32.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"]
}, xb = {
  prefix: "fas",
  iconName: "backward-step",
  icon: [320, 512, ["step-backward"], "f048", "M267.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160L64 241V96c0-17.7-14.3-32-32-32S0 78.3 0 96V416c0 17.7 14.3 32 32 32s32-14.3 32-32V271l11.5 9.6 192 160z"]
}, Eb = {
  prefix: "fas",
  iconName: "forward",
  icon: [512, 512, [9193], "f04e", "M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4L224 214.3V256v41.7L52.5 440.6zM256 352V256 128 96c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4l192 160c7.3 6.1 11.5 15.1 11.5 24.6s-4.2 18.5-11.5 24.6l-192 160c-9.5 7.9-22.8 9.7-34.1 4.4s-18.4-16.6-18.4-29V352z"]
}, Ab = {
  prefix: "fas",
  iconName: "ellipsis",
  icon: [448, 512, ["ellipsis-h"], "f141", "M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"]
}, Tb = {
  prefix: "fas",
  iconName: "play",
  icon: [384, 512, [9654], "f04b", "M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]
}, Rb = {
  prefix: "fas",
  iconName: "volume-xmark",
  icon: [576, 512, ["volume-mute", "volume-times"], "f6a9", "M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"]
}, kb = Rb, Ib = {
  prefix: "fas",
  iconName: "expand",
  icon: [448, 512, [], "f065", "M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"]
}, Mb = {
  prefix: "far",
  iconName: "heart",
  icon: [512, 512, [128153, 128154, 128155, 128156, 128420, 129293, 129294, 129505, 9829, 10084, 61578], "f004", "M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"]
};
const Lb = 4e3, Fb = () => {
  const e = er(null), t = se((s) => s.actions), r = se((s) => s.activity), n = se((s) => s.playing), a = Sr(
    (s) => {
      e.current && clearTimeout(e.current), !(!s || !n) && (e.current = window.setTimeout(() => {
        t.setActivity(!1);
      }, Lb));
    },
    [t, n]
  ), i = Sr(
    (s) => {
      t.setActivity(!0), a(r), !r && s.stopPropagation();
    },
    [r, t, a]
  ), o = Sr(() => {
    n && r && t.setActivity(!1);
  }, [n, r, t]);
  Ee(() => {
    a(r);
  }, [r, a]), Ee(() => (document.addEventListener("click", i), document.addEventListener("mousemove", i), document.addEventListener("keydown", i), document.addEventListener("mouseleave", o), () => {
    document.removeEventListener("click", i), document.removeEventListener("mousemove", i), document.removeEventListener("keydown", i), document.removeEventListener("mouseleave", o);
  }), [i, o]);
}, Vf = (e) => {
  if (isNaN(e))
    return;
  let t = e;
  const r = Math.floor(t / 3600);
  t %= 3600;
  let n = String(Math.floor(t / 60)), a = String(Math.floor(t % 60));
  return a = a.padStart(2, "0"), r > 0 ? (n = n.padStart(2, "0"), `${r}:${n}:${a}`) : `${n}:${a}`;
}, qb = (e) => {
  const {
    onLoopPress: t,
    onLikePress: r,
    onPreviousPress: n,
    onSkipBackPress: a,
    onSkipForwardPress: i,
    onSkipReleasePress: o,
    onNextPress: s,
    onMutePress: u,
    onFullscreenPress: c,
    withTopCover: f,
    customButtons: l,
    disableFullscreen: y,
    hideControlsOnArrowUp: h
  } = e, { ref: E } = td.useFocusable();
  Fb();
  const C = rd(), g = se((M) => M.actions), S = se((M) => M.activity), O = se((M) => M.duration), b = se((M) => M.fullscreen), p = se((M) => M.light), m = se((M) => M.likeToggle), x = se((M) => M.loop), P = se((M) => M.mediaIndex) || 0, k = se((M) => M.mediaCount), T = se((M) => M.muted), q = se((M) => M.player), D = se((M) => M.playing), te = se((M) => M.progress), H = se((M) => M.subTitle), re = se((M) => M.title), ie = O / 30, $ = k && k > 1, ve = l !== null && l || [
    { action: "loop", align: "left" },
    { action: $ ? "previous" : "skipback" },
    { action: "playpause" },
    { action: $ ? "next" : "skipforward" },
    { action: y ? "fullscreen" : "mute", align: "right" }
  ], me = () => {
    g.setLoop(!x), t == null || t();
  }, Ae = () => {
    g.setPlaying(!D), g.setLight(!1);
  }, R = () => {
    g.setMuted(!T), u == null || u();
  }, I = () => {
    g.setFullscreen(!b), c == null || c();
  }, W = () => {
    P && P > 0 && g.setMediaIndex(P - 1), n == null || n();
  }, B = () => {
    q && q.seekTo(q.getCurrentTime() - ie), a == null || a();
  }, j = () => {
    q && q.seekTo(q.getCurrentTime() + ie), i == null || i();
  }, X = () => {
    k && P < k - 1 && g.setMediaIndex(P + 1), s == null || s();
  }, V = () => {
    !D && Ae(), o == null || o();
  }, U = {
    loop: {
      action: "loop",
      label: x ? "Looping" : "Loop",
      onPress: me,
      faIcon: Ob,
      isSelectedFill: x
    },
    like: {
      action: "like",
      label: m ? "Liked" : "Like",
      onPress: r,
      faIcon: m ? Pb : Mb
    },
    previous: {
      action: "previous",
      label: "Previous",
      onPress: W,
      faIcon: xb,
      disabled: P === 0
    },
    skipback: {
      action: "skipback",
      label: "Skip Back",
      onPress: B,
      onRelease: V,
      faIcon: _b
    },
    playpause: {
      action: "playpause",
      label: D ? "Pause" : "Play",
      onPress: Ae,
      faIcon: D ? Sb : Tb
    },
    skipforward: {
      action: "skipforward",
      label: "Skip Forward",
      onPress: j,
      onRelease: V,
      faIcon: Eb
    },
    next: {
      action: "next",
      label: "Next",
      onPress: X,
      faIcon: bb,
      disabled: k ? P === k - 1 : !1
    },
    mute: {
      action: "mute",
      label: T ? "Muted" : "Mute",
      onPress: R,
      faIcon: T ? kb : Cb
    },
    fullscreen: {
      action: "fullscreen",
      label: b ? "Minimise" : "Fullscreen",
      onPress: I,
      faIcon: b ? wb : Ib
    },
    custom: {
      action: "custom",
      label: "Custom"
    }
  }, G = (M) => /* @__PURE__ */ ye(zi, { children: ve.map((w, v) => {
    if (w.align === M || !w.align && M === "center")
      return /* @__PURE__ */ Ve(
        Ld,
        {
          className: Pt({
            "selected-fill": w.isSelectedFill || U[w.action].isSelectedFill
          }),
          focusKey: w.action,
          handlePress: w.onPress || U[w.action].onPress || void 0,
          handleRelease: w.onRelease || U[w.action].onRelease || void 0,
          disabled: w.disabled || U[w.action].disabled,
          handleArrowPress: (d) => (h && d === "up" && g.setActivity(!1), !0),
          children: [
            /* @__PURE__ */ ye(
              zt,
              {
                icon: w.faIcon || U[w.action].faIcon || Ab
              }
            ),
            /* @__PURE__ */ ye("small", { children: w.label || U[w.action].label })
          ]
        },
        v
      );
  }) });
  return /* @__PURE__ */ Ve(
    "div",
    {
      className: "tv-player-ui",
      "data-testid": "tv-player-ui",
      style: {
        width: b ? "100%" : e.width || "100%",
        height: b ? C || "100%" : e.height || "350px"
      },
      children: [
        /* @__PURE__ */ ye(
          "div",
          {
            className: Pt("tv-player-ui__cover", {
              hide: !S,
              "with-top-cover": f || !p,
              "light-cover": p && !D
            })
          }
        ),
        S && /* @__PURE__ */ Ve(zi, { children: [
          /* @__PURE__ */ Ve("div", { className: "metadata-wrapper", children: [
            /* @__PURE__ */ ye("div", { className: "metadata metadata--title", children: re }),
            /* @__PURE__ */ ye("div", { className: "metadata metadata--subTitle", children: H })
          ] }),
          /* @__PURE__ */ Ve("div", { className: "buttons", ref: E, children: [
            /* @__PURE__ */ ye("div", { className: "buttons__left", children: G("left") }),
            /* @__PURE__ */ ye("div", { className: "buttons__center", children: G("center") }),
            /* @__PURE__ */ ye("div", { className: "buttons__right", children: G("right") })
          ] }),
          /* @__PURE__ */ ye(
            Nb,
            {
              currentTime: te.playedSeconds,
              duration: O,
              player: q,
              handleSkipForward: j,
              handleSkipBack: B
            }
          )
        ] })
      ]
    }
  );
};
function Nb(e) {
  const { currentTime: t, duration: r, player: n, handleSkipForward: a, handleSkipBack: i } = e, o = t / r * 100, s = (c) => {
    const f = c.currentTarget, y = c.nativeEvent.offsetX / f.offsetWidth;
    n && n.seekTo(y * r);
  }, u = !n || !r || t >= 86400 || r >= 86400;
  return /* @__PURE__ */ Ve(
    "div",
    {
      className: Pt("progress-bar", {
        hide: u
      }),
      "data-testid": "progress-bar",
      children: [
        /* @__PURE__ */ ye("span", { "data-testid": "current-time", className: "time", children: n && Vf(t) }),
        /* @__PURE__ */ ye(
          "span",
          {
            className: "bar-wrapper",
            onMouseDown: (c) => c.preventDefault(),
            onMouseUp: s,
            children: /* @__PURE__ */ Ve("div", { className: "bar", children: [
              !u && /* @__PURE__ */ ye(
                Ld,
                {
                  style: { left: `${o}%` },
                  className: "progress-bar-button",
                  focusKey: "progress-bar-button",
                  handleArrowPress: (c) => c === "up" || c === "down" ? !0 : (c === "left" ? i() : a(), !1)
                },
                "progress-bar-button"
              ),
              /* @__PURE__ */ ye(
                "span",
                {
                  className: "fill",
                  style: { width: `${o}%` }
                }
              )
            ] })
          }
        ),
        /* @__PURE__ */ ye("span", { "data-testid": "duration", className: "time time--duration", children: n && Vf(r) })
      ]
    }
  );
}
function Ld(e) {
  const {
    children: t,
    handlePress: r,
    handleRelease: n,
    handleArrowPress: a = () => !0,
    focusKey: i,
    className: o,
    style: s,
    disabled: u
  } = e, { ref: c, focused: f, focusSelf: l } = td.useFocusable({
    onEnterPress: u ? void 0 : r,
    onEnterRelease: u ? void 0 : n,
    onArrowPress: a
  });
  return Ee(() => {
    i === "playpause" && l();
  }, [l, i]), /* @__PURE__ */ ye(
    "button",
    {
      style: s,
      "data-testid": i,
      className: Pt(o, { focused: f, disabled: u }),
      onMouseDown: r,
      onMouseUp: n,
      "focus-key": i,
      ref: c,
      onMouseEnter: l,
      disabled: u,
      children: t
    }
  );
}
function Db(e) {
  const t = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/ ]{11})/, r = e.match(t);
  return r ? r[1] : null;
}
const $b = (e) => {
  const { onReady: t, onStart: r, onPause: n, onPlay: a, onError: i, onEnded: o, onBuffer: s } = e, u = er(null), c = er(null), f = er(null), [l, y] = co(!0), h = se(($) => $.actions), E = se(($) => $.light), C = se(($) => $.loop), g = se(($) => $.muted), S = se(($) => $.playing), O = se(($) => $.activity), b = se(($) => $.fullscreen), p = typeof e.url == "string" && Db(e.url), m = e.withTopCover || !!p, x = async ($) => {
    const me = await (await fetch(`https://noembed.com/embed?url=${$}`)).json();
    !e.title && me.title && h.setTitle(me.title), !e.subTitle && me.author_name && h.setSubTitle(me.author_name), me.error && p && h.setLight(!1), f.current && p && e.light && (f.current.src = typeof e.light == "string" ? e.light : `https://img.youtube.com/vi/${p}/maxresdefault.jpg`);
  };
  Ee(() => {
    h.setLight(e.light), typeof e.url == "string" ? x(e.url) : h.setLight(!1), h.setProgress(0), h.setDuration(0);
  }, [e.url, e.light]), Ee(() => {
    h.setPlaying(e.playing), e.playing && h.setLight(!1);
  }, [e.playing]), Ee(() => h.setTitle(e.title), [e.title]), Ee(() => h.setSubTitle(e.subTitle), [e.subTitle]), Ee(() => {
    h.setFullscreen(!e.disableFullscreen);
  }, [e.disableFullscreen]), Ee(() => h.setLoop(e.loop), [e.loop]), Ee(() => h.setMuted(e.muted), [e.muted]), Ee(() => h.setMediaCount(e.mediaCount), [e.mediaCount]), Ee(() => {
    setTimeout(() => h.setMediaIndex(e.mediaIndex));
  }, [e.mediaIndex]), Ee(() => {
    c.current.style.height = b ? "100vh" : "unset";
  }, [b]);
  const P = () => {
    h.setPlaying(!0), h.setLight(!1);
  }, k = () => {
    h.setPlaying(!1), n == null || n();
  }, T = () => {
    h.setPlaying(!0), h.setLight(!1), a == null || a();
  }, q = ($) => {
    h.setPlayer($), t == null || t($);
  }, D = ($, ve, me, Ae) => {
    i == null || i($, ve, me, Ae);
  }, te = () => {
    h.setPlaying(!1), h.setActivity(!0), o == null || o();
  }, H = ($) => {
    h.setProgress($.playedSeconds);
  }, re = ($) => {
    h.setDuration($);
  }, ie = () => {
    f.current && (typeof e.light == "boolean" && f.current.naturalWidth >= 1280 || typeof e.light == "string" ? y(!1) : y(!0));
  };
  return /* @__PURE__ */ Ve(
    "div",
    {
      className: "tv-player",
      "data-testid": "tv-player",
      ref: c,
      style: e.style,
      children: [
        /* @__PURE__ */ ye(
          nh,
          {
            "data-testid": "react-player",
            ref: u,
            url: e.url,
            width: b ? "100%" : e.width || "100%",
            height: b ? "100%" : e.height || "350px",
            light: !S && E,
            controls: e.controls,
            playIcon: e.playIcon || /* @__PURE__ */ ye(zi, {}),
            loop: C,
            muted: g,
            playing: S,
            playbackRate: e.playbackRate,
            progressInterval: O ? 200 : e.progressInterval,
            playsinline: e.playsinline,
            volume: e.volume,
            onPlay: T,
            onReady: q,
            onStart: () => r == null ? void 0 : r(),
            onBuffer: () => s == null ? void 0 : s(),
            onEnded: te,
            onPause: k,
            onDuration: re,
            onProgress: H,
            onClickPreview: P,
            onError: D,
            config: e.config || {
              file: {
                attributes: {
                  style: {
                    width: "100%",
                    height: "100%",
                    objectFit: "contain"
                  }
                }
              }
            }
          }
        ),
        /* @__PURE__ */ ye(
          "img",
          {
            ref: f,
            onError: () => y(!0),
            onLoad: ie,
            alt: "",
            style: {
              width: b ? "100%" : e.width || "100%",
              height: b ? "100%" : e.height || "350px"
            },
            className: Pt("yt-preview", {
              show: !l && E && p && !S
            })
          }
        ),
        !e.controls && /* @__PURE__ */ ye(qb, { withTopCover: m, ...e })
      ]
    }
  );
};
export {
  $b as T,
  qb as a,
  Fb as b,
  se as c,
  ur as g,
  Iv as p,
  fr as u
};
