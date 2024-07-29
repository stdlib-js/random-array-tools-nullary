// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.2-esm/index.mjs";import{primitives as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string-array@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-contains@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-filled-by@v0.2.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-nullary@v0.3.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/array-ctors@v0.3.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.2-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.2-esm/index.mjs";function j(t,e,i){if(!(this instanceof j))return new j(t,e,i);if(!s(t))throw new TypeError(m("1oF3c",t));if(!r(e))throw new TypeError(m("1oFAS",e));if(!n(e,i))throw new TypeError(m("1oFFO",i));return this._prng=t,this._dtypes=e,this._dtype=i,this}t(j.prototype,"generate",(function(t,s){var r,i,j,a;if(!e(t))throw new TypeError(m("1oF2d",t));if(r={},arguments.length>1&&(j=function(t,e,s){return h(s)?l(s,"dtype")&&(t.dtype=s.dtype,!n(e,t.dtype))?new TypeError(m("1oF4S","dtype",e.join('", "'),t.dtype)):null:new TypeError(m("1oF2V",s))}(r,this._dtypes,s),j))throw j;return"generic"===(a=r.dtype||this._dtype)?o(t,this._prng):(i=new(p(a))(t),d([i],[t],[1],this._prng),i)})),t(j.prototype,"assign",(function(t){if(!i(t))throw new TypeError(m("1oF2O",t));return d([t],[t.length],[1],this._prng),t}));export{j as default};
//# sourceMappingURL=index.mjs.map
