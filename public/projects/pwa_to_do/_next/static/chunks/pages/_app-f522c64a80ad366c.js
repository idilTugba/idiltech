(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{4444:function(e,t,r){"use strict";r.d(t,{BH:function(){return w},L:function(){return u},LL:function(){return O},P0:function(){return m},Pz:function(){return v},Sg:function(){return _},ZR:function(){return k},aH:function(){return y},b$:function(){return T},eu:function(){return A},hl:function(){return C},m9:function(){return V},ne:function(){return M},pd:function(){return x},q4:function(){return g},ru:function(){return I},tV:function(){return c},uI:function(){return E},vZ:function(){return function e(t,r){if(t===r)return!0;let n=Object.keys(t),i=Object.keys(r);for(let s of n){if(!i.includes(s))return!1;let n=t[s],o=r[s];if(P(n)&&P(o)){if(!e(n,o))return!1}else if(n!==o)return!1}for(let e of i)if(!n.includes(e))return!1;return!0}},w1:function(){return S},xO:function(){return D},xb:function(){return R},z$:function(){return b},zd:function(){return L}});var n=r(3454);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let i=function(e){let t=[],r=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);i<128?t[r++]=i:(i<2048?t[r++]=i>>6|192:((64512&i)==55296&&n+1<e.length&&(64512&e.charCodeAt(n+1))==56320?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n)),t[r++]=i>>18|240,t[r++]=i>>12&63|128):t[r++]=i>>12|224,t[r++]=i>>6&63|128),t[r++]=63&i|128)}return t},s=function(e){let t=[],r=0,n=0;for(;r<e.length;){let i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){let s=e[r++];t[n++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){let s=e[r++],o=e[r++],a=e[r++],l=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[n++]=String.fromCharCode(55296+(l>>10)),t[n++]=String.fromCharCode(56320+(1023&l))}else{let s=e[r++],o=e[r++];t[n++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){let i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,u=i>>2,c=(3&i)<<4|o>>4,h=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(h=64)),n.push(r[u],r[c],r[h],r[d])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):s(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){let i=r[e.charAt(t++)],s=t<e.length,o=s?r[e.charAt(t)]:0;++t;let l=t<e.length,u=l?r[e.charAt(t)]:64;++t;let c=t<e.length,h=c?r[e.charAt(t)]:64;if(++t,null==i||null==o||null==u||null==h)throw new a;let d=i<<2|o>>4;if(n.push(d),64!==u){let e=o<<4&240|u>>2;if(n.push(e),64!==h){let e=u<<6&192|h;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class a extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}let l=function(e){let t=i(e);return o.encodeByteArray(t,!0)},u=function(e){return l(e).replace(/\./g,"")},c=function(e){try{return o.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},h=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==r.g)return r.g;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,d=()=>{if(void 0===n||void 0===n.env)return;let e=n.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},f=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&c(e[1]);return t&&JSON.parse(t)},p=()=>{try{return h()||d()||f()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},g=e=>{var t,r;return null===(r=null===(t=p())||void 0===t?void 0:t.emulatorHosts)||void 0===r?void 0:r[e]},m=e=>{let t=g(e);if(!t)return;let r=t.lastIndexOf(":");if(r<=0||r+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);let n=parseInt(t.substring(r+1),10);return"["===t[0]?[t.substring(1,r-1),n]:[t.substring(0,r),n]},y=()=>{var e;return null===(e=p())||void 0===e?void 0:e.config},v=e=>{var t;return null===(t=p())||void 0===t?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let r=t||"demo-project",n=e.iat||0,i=e.sub||e.user_id;if(!i)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:n,exp:n+3600,auth_time:n,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[u(JSON.stringify({alg:"none",type:"JWT"})),u(JSON.stringify(s)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function E(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(b())}function I(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function T(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function S(){let e=b();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function C(){try{return"object"==typeof indexedDB}catch(e){return!1}}function A(){return new Promise((e,t)=>{try{let r=!0,n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}class k extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,k.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,O.prototype.create)}}class O{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){let r=t[0]||{},n=`${this.service}/${e}`,i=this.errors[e],s=i?i.replace(N,(e,t)=>{let n=r[t];return null!=n?String(n):`<${t}?>`}):"Error",o=`${this.serviceName}: ${s} (${n}).`,a=new k(n,o,r);return a}}let N=/\{\$([^}]+)}/g;function R(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function P(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e){let t=[];for(let[r,n]of Object.entries(e))Array.isArray(n)?n.forEach(e=>{t.push(encodeURIComponent(r)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}function L(e){let t={},r=e.replace(/^\?/,"").split("&");return r.forEach(e=>{if(e){let[r,n]=e.split("=");t[decodeURIComponent(r)]=decodeURIComponent(n)}}),t}function x(e){let t=e.indexOf("?");if(!t)return"";let r=e.indexOf("#",t);return e.substring(t,r>0?r:void 0)}function M(e,t){let r=new U(e,t);return r.subscribe.bind(r)}class U{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let n;if(void 0===e&&void 0===t&&void 0===r)throw Error("Missing Observer.");void 0===(n=!function(e,t){if("object"!=typeof e||null===e)return!1;for(let r of t)if(r in e&&"function"==typeof e[r])return!0;return!1}(e,["next","error","complete"])?{next:e,error:t,complete:r}:e).next&&(n.next=F),void 0===n.error&&(n.error=F),void 0===n.complete&&(n.complete=F);let i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){}}),this.observers.push(n),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function F(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(e){return e&&e._delegate?e._delegate:e}},6741:function(e,t,r){"use strict";function n(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+e+(r.length?" "+r.map(function(e){return"'"+e+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function i(e){return!!e&&!!e[q]}function s(e){var t;return!!e&&(function(e){if(!e||"object"!=typeof e)return!1;var t=Object.getPrototypeOf(e);if(null===t)return!0;var r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===z}(e)||Array.isArray(e)||!!e[$]||!!(null===(t=e.constructor)||void 0===t?void 0:t[$])||h(e)||d(e))}function o(e,t,r){void 0===r&&(r=!1),0===a(e)?(r?Object.keys:K)(e).forEach(function(n){r&&"symbol"==typeof n||t(n,e[n],e)}):e.forEach(function(r,n){return t(n,r,e)})}function a(e){var t=e[q];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:h(e)?2:d(e)?3:0}function l(e,t){return 2===a(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function u(e,t,r){var n=a(e);2===n?e.set(t,r):3===n?e.add(r):e[t]=r}function c(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function h(e){return F&&e instanceof Map}function d(e){return V&&e instanceof Set}function f(e){return e.o||e.t}function p(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=H(e);delete t[q];for(var r=K(t),n=0;n<r.length;n++){var i=r[n],s=t[i];!1===s.writable&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(t[i]={configurable:!0,writable:!0,enumerable:s.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function g(e,t){return void 0===t&&(t=!1),y(e)||i(e)||!s(e)||(a(e)>1&&(e.set=e.add=e.clear=e.delete=m),Object.freeze(e),t&&o(e,function(e,t){return g(t,!0)},!0)),e}function m(){n(2)}function y(e){return null==e||"object"!=typeof e||Object.isFrozen(e)}function v(e){var t=G[e];return t||n(18,e),t}function w(e,t){t&&(v("Patches"),e.u=[],e.s=[],e.v=t)}function _(e){b(e),e.p.forEach(I),e.p=null}function b(e){e===M&&(M=e.l)}function E(e){return M={p:[],l:M,h:e,m:!0,_:0}}function I(e){var t=e[q];0===t.i||1===t.i?t.j():t.g=!0}function T(e,t){t._=t.p.length;var r=t.p[0],i=void 0!==e&&e!==r;return t.h.O||v("ES5").S(t,e,i),i?(r[q].P&&(_(t),n(4)),s(e)&&(e=S(t,e),t.l||A(t,e)),t.u&&v("Patches").M(r[q].t,e,t.u,t.s)):e=S(t,r,[]),_(t),t.u&&t.v(t.u,t.s),e!==B?e:void 0}function S(e,t,r){if(y(t))return t;var n=t[q];if(!n)return o(t,function(i,s){return C(e,n,t,i,s,r)},!0),t;if(n.A!==e)return t;if(!n.P)return A(e,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var i=4===n.i||5===n.i?n.o=p(n.k):n.o,s=i,a=!1;3===n.i&&(s=new Set(i),i.clear(),a=!0),o(s,function(t,s){return C(e,n,i,t,s,r,a)}),A(e,i,!1),r&&e.u&&v("Patches").N(n,r,e.u,e.s)}return n.o}function C(e,t,r,n,o,a,c){if(i(o)){var h=S(e,o,a&&t&&3!==t.i&&!l(t.R,n)?a.concat(n):void 0);if(u(r,n,h),!i(h))return;e.m=!1}else c&&r.add(o);if(s(o)&&!y(o)){if(!e.h.D&&e._<1)return;S(e,o),t&&t.A.l||A(e,o)}}function A(e,t,r){void 0===r&&(r=!1),!e.l&&e.h.D&&e.m&&g(t,r)}function k(e,t){var r=e[q];return(r?f(r):e)[t]}function O(e,t){if(t in e)for(var r=Object.getPrototypeOf(e);r;){var n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=Object.getPrototypeOf(r)}}function N(e){e.P||(e.P=!0,e.l&&N(e.l))}function R(e){e.o||(e.o=p(e.t))}function P(e,t,r){var n,i,s,o,a,l,u,c=h(t)?v("MapSet").F(t,r):d(t)?v("MapSet").T(t,r):e.O?(s=i={i:(n=Array.isArray(t))?1:0,A:r?r.A:M,P:!1,I:!1,R:{},l:r,t:t,k:null,o:null,j:null,C:!1},o=W,n&&(s=[i],o=Q),l=(a=Proxy.revocable(s,o)).revoke,u=a.proxy,i.k=u,i.j=l,u):v("ES5").J(t,r);return(r?r.A:M).p.push(c),c}function D(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return p(e)}r.d(t,{xC:function(){return eS},hg:function(){return eL},oM:function(){return ek}});var L,x,M,U="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),F="undefined"!=typeof Map,V="undefined"!=typeof Set,j="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,B=U?Symbol.for("immer-nothing"):((x={})["immer-nothing"]=!0,x),$=U?Symbol.for("immer-draftable"):"__$immer_draftable",q=U?Symbol.for("immer-state"):"__$immer_state",z=""+Object.prototype.constructor,K="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,H=Object.getOwnPropertyDescriptors||function(e){var t={};return K(e).forEach(function(r){t[r]=Object.getOwnPropertyDescriptor(e,r)}),t},G={},W={get:function(e,t){if(t===q)return e;var r,n,i=f(e);if(!l(i,t))return(n=O(i,t))?"value"in n?n.value:null===(r=n.get)||void 0===r?void 0:r.call(e.k):void 0;var o=i[t];return e.I||!s(o)?o:o===k(e.t,t)?(R(e),e.o[t]=P(e.A.h,o,e)):o},has:function(e,t){return t in f(e)},ownKeys:function(e){return Reflect.ownKeys(f(e))},set:function(e,t,r){var n=O(f(e),t);if(null==n?void 0:n.set)return n.set.call(e.k,r),!0;if(!e.P){var i=k(f(e),t),s=null==i?void 0:i[q];if(s&&s.t===r)return e.o[t]=r,e.R[t]=!1,!0;if(c(r,i)&&(void 0!==r||l(e.t,t)))return!0;R(e),N(e)}return e.o[t]===r&&(void 0!==r||t in e.o)||Number.isNaN(r)&&Number.isNaN(e.o[t])||(e.o[t]=r,e.R[t]=!0),!0},deleteProperty:function(e,t){return void 0!==k(e.t,t)||t in e.t?(e.R[t]=!1,R(e),N(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var r=f(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.i||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty:function(){n(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){n(12)}},Q={};o(W,function(e,t){Q[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),Q.deleteProperty=function(e,t){return Q.set.call(this,e,t,void 0)},Q.set=function(e,t,r){return W.set.call(this,e[0],t,r,e[0])};var X=new(function(){function e(e){var t=this;this.O=j,this.D=!0,this.produce=function(e,r,i){if("function"==typeof e&&"function"!=typeof r){var o,a=r;return r=e,function(e){var n=this;void 0===e&&(e=a);for(var i=arguments.length,s=Array(i>1?i-1:0),o=1;o<i;o++)s[o-1]=arguments[o];return t.produce(e,function(e){var t;return(t=r).call.apply(t,[n,e].concat(s))})}}if("function"!=typeof r&&n(6),void 0!==i&&"function"!=typeof i&&n(7),s(e)){var l=E(t),u=P(t,e,void 0),c=!0;try{o=r(u),c=!1}finally{c?_(l):b(l)}return"undefined"!=typeof Promise&&o instanceof Promise?o.then(function(e){return w(l,i),T(e,l)},function(e){throw _(l),e}):(w(l,i),T(o,l))}if(!e||"object"!=typeof e){if(void 0===(o=r(e))&&(o=e),o===B&&(o=void 0),t.D&&g(o,!0),i){var h=[],d=[];v("Patches").M(e,o,h,d),i(h,d)}return o}n(21,e)},this.produceWithPatches=function(e,r){if("function"==typeof e)return function(r){for(var n=arguments.length,i=Array(n>1?n-1:0),s=1;s<n;s++)i[s-1]=arguments[s];return t.produceWithPatches(r,function(t){return e.apply(void 0,[t].concat(i))})};var n,i,s=t.produce(e,r,function(e,t){n=e,i=t});return"undefined"!=typeof Promise&&s instanceof Promise?s.then(function(e){return[e,n,i]}):[s,n,i]},"boolean"==typeof(null==e?void 0:e.useProxies)&&this.setUseProxies(e.useProxies),"boolean"==typeof(null==e?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze)}var t=e.prototype;return t.createDraft=function(e){s(e)||n(8),i(e)&&(i(t=e)||n(22,t),e=function e(t){if(!s(t))return t;var r,n=t[q],i=a(t);if(n){if(!n.P&&(n.i<4||!v("ES5").K(n)))return n.t;n.I=!0,r=D(t,i),n.I=!1}else r=D(t,i);return o(r,function(t,i){var s;n&&(2===a(s=n.t)?s.get(t):s[t])===i||u(r,t,e(i))}),3===i?new Set(r):r}(t));var t,r=E(this),l=P(this,e,void 0);return l[q].C=!0,b(r),l},t.finishDraft=function(e,t){var r=(e&&e[q]).A;return w(r,t),T(void 0,r)},t.setAutoFreeze=function(e){this.D=e},t.setUseProxies=function(e){e&&!j&&n(20),this.O=e},t.applyPatches=function(e,t){for(r=t.length-1;r>=0;r--){var r,n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}r>-1&&(t=t.slice(r+1));var s=v("Patches").$;return i(e)?s(e,t):this.produce(e,function(e){return s(e,t)})},e}()),J=X.produce;function Y(e){return(Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function ee(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(r),!0).forEach(function(t){!function(e,t,r){var n;n=function(e,t){if("object"!==Y(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==Y(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"===Y(n)?n:String(n))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function et(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}X.produceWithPatches.bind(X),X.setAutoFreeze.bind(X),X.setUseProxies.bind(X),X.applyPatches.bind(X),X.createDraft.bind(X),X.finishDraft.bind(X);var er="function"==typeof Symbol&&Symbol.observable||"@@observable",en=function(){return Math.random().toString(36).substring(7).split("").join(".")},ei={INIT:"@@redux/INIT"+en(),REPLACE:"@@redux/REPLACE"+en(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+en()}};function es(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}function eo(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return function(){var r=e.apply(void 0,arguments),n=function(){throw Error(et(15))},i={getState:r.getState,dispatch:function(){return n.apply(void 0,arguments)}},s=t.map(function(e){return e(i)});return n=es.apply(void 0,s)(r.dispatch),ee(ee({},r),{},{dispatch:n})}}}function ea(e){return function(t){var r=t.dispatch,n=t.getState;return function(t){return function(i){return"function"==typeof i?i(r,n,e):t(i)}}}}var el=ea();el.withExtraArgument=ea,r(3454);var eu=(L=function(e,t){return(L=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}L(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),ec=function(e,t){var r,n,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(r)throw TypeError("Generator is already executing.");for(;o;)try{if(r=1,n&&(i=2&s[0]?n.return:s[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,s[1])).done)return i;switch(n=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,n=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===s[0]||2===s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],n=0}finally{r=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}},eh=function(e,t){for(var r=0,n=t.length,i=e.length;r<n;r++,i++)e[i]=t[r];return e},ed=Object.defineProperty,ef=Object.defineProperties,ep=Object.getOwnPropertyDescriptors,eg=Object.getOwnPropertySymbols,em=Object.prototype.hasOwnProperty,ey=Object.prototype.propertyIsEnumerable,ev=function(e,t,r){return t in e?ed(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},ew=function(e,t){for(var r in t||(t={}))em.call(t,r)&&ev(e,r,t[r]);if(eg)for(var n=0,i=eg(t);n<i.length;n++){var r=i[n];ey.call(t,r)&&ev(e,r,t[r])}return e},e_=function(e,t){return ef(e,ep(t))},eb="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!=arguments.length)return"object"==typeof arguments[0]?es:es.apply(null,arguments)};"undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__;var eE=function(e){function t(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var i=e.apply(this,r)||this;return Object.setPrototypeOf(i,t.prototype),i}return eu(t,e),Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return e.prototype.concat.apply(this,t)},t.prototype.prepend=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return 1===e.length&&Array.isArray(e[0])?new(t.bind.apply(t,eh([void 0],e[0].concat(this)))):new(t.bind.apply(t,eh([void 0],e.concat(this))))},t}(Array),eI=function(e){function t(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var i=e.apply(this,r)||this;return Object.setPrototypeOf(i,t.prototype),i}return eu(t,e),Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return e.prototype.concat.apply(this,t)},t.prototype.prepend=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return 1===e.length&&Array.isArray(e[0])?new(t.bind.apply(t,eh([void 0],e[0].concat(this)))):new(t.bind.apply(t,eh([void 0],e.concat(this))))},t}(Array);function eT(e){return s(e)?J(e,function(){}):e}function eS(e){var t,r=function(e){var t,r,n,i;return void 0===(t=e)&&(t={}),n=void 0===(r=t.thunk)||r,t.immutableCheck,t.serializableCheck,i=new eE,n&&("boolean"==typeof n?i.push(el):i.push(el.withExtraArgument(n.extraArgument))),i},n=e||{},i=n.reducer,s=void 0===i?void 0:i,o=n.middleware,a=void 0===o?r():o,l=n.devTools,u=void 0===l||l,c=n.preloadedState,h=void 0===c?void 0:c,d=n.enhancers,f=void 0===d?void 0:d;if("function"==typeof s)t=s;else if(function(e){if("object"!=typeof e||null===e)return!1;var t=Object.getPrototypeOf(e);if(null===t)return!0;for(var r=t;null!==Object.getPrototypeOf(r);)r=Object.getPrototypeOf(r);return t===r}(s))t=function(e){for(var t,r=Object.keys(e),n={},i=0;i<r.length;i++){var s=r[i];"function"==typeof e[s]&&(n[s]=e[s])}var o=Object.keys(n);try{!function(e){Object.keys(e).forEach(function(t){var r=e[t];if(void 0===r(void 0,{type:ei.INIT}))throw Error(et(12));if(void 0===r(void 0,{type:ei.PROBE_UNKNOWN_ACTION()}))throw Error(et(13))})}(n)}catch(e){t=e}return function(e,r){if(void 0===e&&(e={}),t)throw t;for(var i=!1,s={},a=0;a<o.length;a++){var l=o[a],u=n[l],c=e[l],h=u(c,r);if(void 0===h)throw r&&r.type,Error(et(14));s[l]=h,i=i||h!==c}return(i=i||o.length!==Object.keys(e).length)?s:e}}(s);else throw Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var p=a;"function"==typeof p&&(p=p(r));var g=eo.apply(void 0,p),m=es;u&&(m=eb(ew({trace:!1},"object"==typeof u&&u)));var y=new eI(g),v=y;return Array.isArray(f)?v=eh([g],f):"function"==typeof f&&(v=f(y)),function e(t,r,n){if("function"==typeof r&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw Error(et(0));if("function"==typeof r&&void 0===n&&(n=r,r=void 0),void 0!==n){if("function"!=typeof n)throw Error(et(1));return n(e)(t,r)}if("function"!=typeof t)throw Error(et(2));var i,s=t,o=r,a=[],l=a,u=!1;function c(){l===a&&(l=a.slice())}function h(){if(u)throw Error(et(3));return o}function d(e){if("function"!=typeof e)throw Error(et(4));if(u)throw Error(et(5));var t=!0;return c(),l.push(e),function(){if(t){if(u)throw Error(et(6));t=!1,c();var r=l.indexOf(e);l.splice(r,1),a=null}}}function f(e){if(!function(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}(e))throw Error(et(7));if(void 0===e.type)throw Error(et(8));if(u)throw Error(et(9));try{u=!0,o=s(o,e)}finally{u=!1}for(var t=a=l,r=0;r<t.length;r++)(0,t[r])();return e}return f({type:ei.INIT}),(i={dispatch:f,subscribe:d,getState:h,replaceReducer:function(e){if("function"!=typeof e)throw Error(et(10));s=e,f({type:ei.REPLACE})}})[er]=function(){var e;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw Error(et(11));function t(){e.next&&e.next(h())}return t(),{unsubscribe:d(t)}}})[er]=function(){return this},e},i}(t,h,m.apply(void 0,v))}function eC(e,t){function r(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];if(t){var i=t.apply(void 0,r);if(!i)throw Error("prepareAction did not return an object");return ew(ew({type:e,payload:i.payload},"meta"in i&&{meta:i.meta}),"error"in i&&{error:i.error})}return{type:e,payload:r[0]}}return r.toString=function(){return""+e},r.type=e,r.match=function(t){return t.type===e},r}function eA(e){var t,r={},n=[],i={addCase:function(e,t){var n="string"==typeof e?e:e.type;if(n in r)throw Error("addCase cannot be called with two reducers for the same action type");return r[n]=t,i},addMatcher:function(e,t){return n.push({matcher:e,reducer:t}),i},addDefaultCase:function(e){return t=e,i}};return e(i),[r,n,t]}function ek(e){var t,r=e.name;if(!r)throw Error("`name` is a required option for createSlice");var n="function"==typeof e.initialState?e.initialState:eT(e.initialState),o=e.reducers||{},a=Object.keys(o),l={},u={},c={};function h(){var t="function"==typeof e.extraReducers?eA(e.extraReducers):[e.extraReducers],r=t[0],o=t[1],a=void 0===o?[]:o,l=t[2],c=void 0===l?void 0:l,h=ew(ew({},void 0===r?{}:r),u);return function(e,t,r,n){void 0===r&&(r=[]);var o,a="function"==typeof t?eA(t):[t,r,void 0],l=a[0],u=a[1],c=a[2];if("function"==typeof e)o=function(){return eT(e())};else{var h=eT(e);o=function(){return h}}function d(e,t){void 0===e&&(e=o());var r=eh([l[t.type]],u.filter(function(e){return(0,e.matcher)(t)}).map(function(e){return e.reducer}));return 0===r.filter(function(e){return!!e}).length&&(r=[c]),r.reduce(function(e,r){if(r){if(i(e)){var n=r(e,t);return void 0===n?e:n}if(s(e))return J(e,function(e){return r(e,t)});var n=r(e,t);if(void 0===n){if(null===e)return e;throw Error("A case reducer on a non-draftable value must not return undefined")}return n}return e},e)}return d.getInitialState=o,d}(n,function(e){for(var t in h)e.addCase(t,h[t]);for(var r=0;r<a.length;r++){var n=a[r];e.addMatcher(n.matcher,n.reducer)}c&&e.addDefaultCase(c)})}return a.forEach(function(e){var t,n,i=o[e],s=r+"/"+e;"reducer"in i?(t=i.reducer,n=i.prepare):t=i,l[e]=t,u[s]=t,c[e]=n?eC(s,n):eC(s)}),{name:r,reducer:function(e,r){return t||(t=h()),t(e,r)},actions:c,caseReducers:l,getInitialState:function(){return t||(t=h()),t.getInitialState()}}}var eO=function(e){void 0===e&&(e=21);for(var t="",r=e;r--;)t+="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[64*Math.random()|0];return t},eN=["name","message","stack","code"],eR=function(e,t){this.payload=e,this.meta=t},eP=function(e,t){this.payload=e,this.meta=t},eD=function(e){if("object"==typeof e&&null!==e){for(var t={},r=0;r<eN.length;r++){var n=eN[r];"string"==typeof e[n]&&(t[n]=e[n])}return t}return{message:String(e)}},eL=function(){function e(e,t,r){var n=eC(e+"/fulfilled",function(e,t,r,n){return{payload:e,meta:e_(ew({},n||{}),{arg:r,requestId:t,requestStatus:"fulfilled"})}}),i=eC(e+"/pending",function(e,t,r){return{payload:void 0,meta:e_(ew({},r||{}),{arg:t,requestId:e,requestStatus:"pending"})}}),s=eC(e+"/rejected",function(e,t,n,i,s){return{payload:i,error:(r&&r.serializeError||eD)(e||"Rejected"),meta:e_(ew({},s||{}),{arg:n,requestId:t,rejectedWithValue:!!i,requestStatus:"rejected",aborted:(null==e?void 0:e.name)==="AbortError",condition:(null==e?void 0:e.name)==="ConditionError"})}}),o="undefined"!=typeof AbortController?AbortController:function(){function e(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return e.prototype.abort=function(){},e}();return Object.assign(function(e){return function(a,l,u){var c,h=(null==r?void 0:r.idGenerator)?r.idGenerator(e):eO(),d=new o;function f(e){c=e,d.abort()}var p=function(){var o,p;return o=this,p=function(){var o,p,g,m,y,v;return ec(this,function(w){switch(w.label){case 0:var _;if(w.trys.push([0,4,,5]),!(null!==(_=m=null==(o=null==r?void 0:r.condition)?void 0:o.call(r,e,{getState:l,extra:u}))&&"object"==typeof _&&"function"==typeof _.then))return[3,2];return[4,m];case 1:m=w.sent(),w.label=2;case 2:if(!1===m||d.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return y=new Promise(function(e,t){return d.signal.addEventListener("abort",function(){return t({name:"AbortError",message:c||"Aborted"})})}),a(i(h,e,null==(p=null==r?void 0:r.getPendingMeta)?void 0:p.call(r,{requestId:h,arg:e},{getState:l,extra:u}))),[4,Promise.race([y,Promise.resolve(t(e,{dispatch:a,getState:l,extra:u,requestId:h,signal:d.signal,abort:f,rejectWithValue:function(e,t){return new eR(e,t)},fulfillWithValue:function(e,t){return new eP(e,t)}})).then(function(t){if(t instanceof eR)throw t;return t instanceof eP?n(t.payload,h,e,t.meta):n(t,h,e)})])];case 3:return g=w.sent(),[3,5];case 4:return g=(v=w.sent())instanceof eR?s(null,h,e,v.payload,v.meta):s(v,h,e),[3,5];case 5:return r&&!r.dispatchConditionRejection&&s.match(g)&&g.meta.condition||a(g),[2,g]}})},new Promise(function(e,t){var r=function(e){try{i(p.next(e))}catch(e){t(e)}},n=function(e){try{i(p.throw(e))}catch(e){t(e)}},i=function(t){return t.done?e(t.value):Promise.resolve(t.value).then(r,n)};i((p=p.apply(o,null)).next())})}();return Object.assign(p,{abort:f,requestId:h,arg:e,unwrap:function(){return p.then(ex)}})}},{pending:i,rejected:s,fulfilled:n,typePrefix:e})}return e.withTypes=function(){return e},e}();function ex(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}var eM="listenerMiddleware";eC(eM+"/add"),eC(eM+"/removeAll"),eC(eM+"/remove"),"function"==typeof queueMicrotask&&queueMicrotask.bind("undefined"!=typeof window?window:void 0!==r.g?r.g:globalThis),"undefined"!=typeof window&&window.requestAnimationFrame&&window.requestAnimationFrame,function(){function e(e,t){var r=s[e];return r?r.enumerable=t:s[e]=r={configurable:!0,enumerable:t,get:function(){var t=this[q];return W.get(t,e)},set:function(t){var r=this[q];W.set(r,e,t)}},r}function t(e){for(var t=e.length-1;t>=0;t--){var i=e[t][q];if(!i.P)switch(i.i){case 5:n(i)&&N(i);break;case 4:r(i)&&N(i)}}}function r(e){for(var t=e.t,r=e.k,n=K(r),i=n.length-1;i>=0;i--){var s=n[i];if(s!==q){var o=t[s];if(void 0===o&&!l(t,s))return!0;var a=r[s],u=a&&a[q];if(u?u.t!==o:!c(a,o))return!0}}var h=!!t[q];return n.length!==K(t).length+(h?0:1)}function n(e){var t=e.k;if(t.length!==e.t.length)return!0;var r=Object.getOwnPropertyDescriptor(t,t.length-1);if(r&&!r.get)return!0;for(var n=0;n<t.length;n++)if(!t.hasOwnProperty(n))return!0;return!1}var s={};G.ES5||(G.ES5={J:function(t,r){var n=Array.isArray(t),i=function(t,r){if(t){for(var n=Array(r.length),i=0;i<r.length;i++)Object.defineProperty(n,""+i,e(i,!0));return n}var s=H(r);delete s[q];for(var o=K(s),a=0;a<o.length;a++){var l=o[a];s[l]=e(l,t||!!s[l].enumerable)}return Object.create(Object.getPrototypeOf(r),s)}(n,t),s={i:n?5:4,A:r?r.A:M,P:!1,I:!1,R:{},l:r,t:t,k:i,o:null,g:!1,C:!1};return Object.defineProperty(i,q,{value:s,writable:!0}),i},S:function(e,r,s){s?i(r)&&r[q].A===e&&t(e.p):(e.u&&function e(t){if(t&&"object"==typeof t){var r=t[q];if(r){var i=r.t,s=r.k,a=r.R,u=r.i;if(4===u)o(s,function(t){t!==q&&(void 0!==i[t]||l(i,t)?a[t]||e(s[t]):(a[t]=!0,N(r)))}),o(i,function(e){void 0!==s[e]||l(s,e)||(a[e]=!1,N(r))});else if(5===u){if(n(r)&&(N(r),a.length=!0),s.length<i.length)for(var c=s.length;c<i.length;c++)a[c]=!1;else for(var h=i.length;h<s.length;h++)a[h]=!0;for(var d=Math.min(s.length,i.length),f=0;f<d;f++)s.hasOwnProperty(f)||(a[f]=!0),void 0===a[f]&&e(s[f])}}}}(e.p[0]),t(e.p))},K:function(e){return 4===e.i?r(e):n(e)}})}()},8679:function(e,t,r){"use strict";var n=r(9864),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},s={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a={};function l(e){return n.isMemo(e)?o:a[e.$$typeof]||i}a[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a[n.Memo]=o;var u=Object.defineProperty,c=Object.getOwnPropertyNames,h=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,p=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(p){var i=f(r);i&&i!==p&&e(t,i,n)}var o=c(r);h&&(o=o.concat(h(r)));for(var a=l(t),g=l(r),m=0;m<o.length;++m){var y=o[m];if(!s[y]&&!(n&&n[y])&&!(g&&g[y])&&!(a&&a[y])){var v=d(r,y);try{u(t,y,v)}catch(e){}}}}return t}},3454:function(e,t,r){"use strict";var n,i;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(i=r.g.process)?void 0:i.env)?r.g.process:r(7663)},6840:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(9212)}])},8615:function(e,t,r){"use strict";r.d(t,{I:function(){return l},db:function(){return a}});var n=r(5816);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(0,n.KN)("firebase","10.4.0","app");var i=r(6100),s=r(9669);let o=(0,n.ZF)({apiKey:"AIzaSyB5xRsEwPRwZfjVgjhA9xO-H51SXXeG6ac",authDomain:"pwa-to-do-a410a.firebaseapp.com",projectId:"pwa-to-do-a410a",storageBucket:"pwa-to-do-a410a.appspot.com",messagingSenderId:"651245830030",appId:"1:651245830030:web:4c9729424072ffcf172edf"}),a=(0,i.ad)(o),l=(0,s.v0)(o)},9212:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var n=r(5893);r(3071);var i=r(8501),s=r(1649);function o(e){let{Component:t,pageProps:r}=e;return(0,n.jsx)(s.zt,{store:i.Z,children:(0,n.jsx)(t,{...r})})}},8501:function(e,t,r){"use strict";var n=r(6741),i=r(3251);let s=(0,n.xC)({reducer:{todos:i.ZP}});t.Z=s},3251:function(e,t,r){"use strict";r.d(t,{B:function(){return c},Hm:function(){return u},J6:function(){return l},g2:function(){return o},mj:function(){return a}});var n=r(6741),i=r(9894);let s=(0,n.oM)({name:"todos",initialState:{items:[{id:"1",title:"pink floyd",completed:!0}],filters:"All"},reducers:{checkedItem:(e,t)=>{let{id:r}=t.payload,n=e.items.find(e=>e.id===r);n&&(n.completed=!n.completed)},nameOfFilters:(e,t)=>{e.filters=t.payload}},extraReducers:e=>{e.addCase(i.HS.fulfilled,(e,t)=>{e.items.push(t.payload)}).addCase(i.zB.fulfilled,(e,t)=>{e.items=t.payload}).addCase(i.SH.fulfilled,(e,t)=>{e.items=e.items.filter(e=>!t.payload.includes(e.id))}).addCase(i.Gu.fulfilled,(e,t)=>{let r=e.items.find(e=>e.id===t.payload.id);r&&(r.completed=t.payload.completed)}).addCase(i.lg.fulfilled,(e,t)=>{e.items=e.items.filter(e=>e.id!==t.payload)})}}),o=e=>e.todos.items,a=e=>e.todos.filters,l=e=>{switch(e.todos.filters){case"All":default:return e.todos.items;case"Completed":return e.todos.items.filter(e=>e.completed);case"Active":return e.todos.items.filter(e=>!e.completed)}},{checkedItem:u,nameOfFilters:c}=s.actions;t.ZP=s.reducer},9894:function(e,t,r){"use strict";r.d(t,{Gu:function(){return l},HS:function(){return a},SH:function(){return c},lg:function(){return u},zB:function(){return o}});var n=r(6741),i=r(8615),s=r(6100);r(8501);let o=(0,n.hg)("todos/fetchTodos",async()=>{let e=(0,s.IO)((0,s.hJ)(i.db,"todos")),t=await (0,s.PL)(e),r=[];return t.forEach(e=>{let t=e.data();r.push({id:e.id,title:t.title,completed:t.completed})}),r}),a=(0,n.hg)("todos/addTodoAsync",async e=>{let t=await (0,s.ET)((0,s.hJ)(i.db,"todos"),e);return{id:t.id,...e}}),l=(0,n.hg)("todos/checkTodoAsync",async e=>{let t=(0,s.JU)(i.db,"todos",e),r=await (0,s.QT)(t),n=r.data();if(n){let e={...n,completed:!n.completed};return await (0,s.r7)(t,e),e}throw Error("Todo not found")}),u=(0,n.hg)("todos/deleteTodoAsync",async e=>{let t=(0,s.JU)(i.db,"todos",e);return await (0,s.oe)(t),e}),c=(0,n.hg)("todos/deleteCompletedTodosAsync",async(e,t)=>{let{getState:r}=t,n=r(),o=n.todos.items.filter(e=>e.completed);for(let e of o){let t=(0,s.JU)(i.db,"todos",e.id);await (0,s.oe)(t)}return o.map(e=>e.id)})},3071:function(){},7663:function(e){!function(){var t={229:function(e){var t,r,n,i=e.exports={};function s(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===s||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:s}catch(e){t=s}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var l=[],u=!1,c=-1;function h(){u&&n&&(u=!1,n.length?l=n.concat(l):c=-1,l.length&&d())}function d(){if(!u){var e=a(h);u=!0;for(var t=l.length;t;){for(n=l,l=[];++c<t;)n&&n[c].run();c=-1,t=l.length}n=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function p(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new f(e,t)),1!==l.length||u||a(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var s=r[e]={exports:{}},o=!0;try{t[e](s,s.exports,n),o=!1}finally{o&&delete r[e]}return s.exports}n.ab="//";var i=n(229);e.exports=i}()},9921:function(e,t){"use strict";/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r="function"==typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,i=r?Symbol.for("react.portal"):60106,s=r?Symbol.for("react.fragment"):60107,o=r?Symbol.for("react.strict_mode"):60108,a=r?Symbol.for("react.profiler"):60114,l=r?Symbol.for("react.provider"):60109,u=r?Symbol.for("react.context"):60110,c=r?Symbol.for("react.async_mode"):60111,h=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,f=r?Symbol.for("react.suspense"):60113,p=r?Symbol.for("react.suspense_list"):60120,g=r?Symbol.for("react.memo"):60115,m=r?Symbol.for("react.lazy"):60116,y=r?Symbol.for("react.block"):60121,v=r?Symbol.for("react.fundamental"):60117,w=r?Symbol.for("react.responder"):60118,_=r?Symbol.for("react.scope"):60119;function b(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case c:case h:case s:case a:case o:case f:return e;default:switch(e=e&&e.$$typeof){case u:case d:case m:case g:case l:return e;default:return t}}case i:return t}}}function E(e){return b(e)===h}t.AsyncMode=c,t.ConcurrentMode=h,t.ContextConsumer=u,t.ContextProvider=l,t.Element=n,t.ForwardRef=d,t.Fragment=s,t.Lazy=m,t.Memo=g,t.Portal=i,t.Profiler=a,t.StrictMode=o,t.Suspense=f,t.isAsyncMode=function(e){return E(e)||b(e)===c},t.isConcurrentMode=E,t.isContextConsumer=function(e){return b(e)===u},t.isContextProvider=function(e){return b(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return b(e)===d},t.isFragment=function(e){return b(e)===s},t.isLazy=function(e){return b(e)===m},t.isMemo=function(e){return b(e)===g},t.isPortal=function(e){return b(e)===i},t.isProfiler=function(e){return b(e)===a},t.isStrictMode=function(e){return b(e)===o},t.isSuspense=function(e){return b(e)===f},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===s||e===h||e===a||e===o||e===f||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===g||e.$$typeof===l||e.$$typeof===u||e.$$typeof===d||e.$$typeof===v||e.$$typeof===w||e.$$typeof===_||e.$$typeof===y)},t.typeOf=b},9864:function(e,t,r){"use strict";e.exports=r(9921)},1649:function(e,t,r){"use strict";r.d(t,{zt:function(){return _},I0:function(){return I},v9:function(){return m}});var n=r(1688),i=r(2798),s=r(3935);let o=function(e){e()},a=()=>o;var l=r(7294);let u=Symbol.for("react-redux-context"),c="undefined"!=typeof globalThis?globalThis:{},h=function(){var e;if(!l.createContext)return{};let t=null!=(e=c[u])?e:c[u]=new Map,r=t.get(l.createContext);return r||(r=l.createContext(null),t.set(l.createContext,r)),r}();function d(e=h){return function(){let t=(0,l.useContext)(e);return t}}let f=d(),p=()=>{throw Error("uSES not initialized!")},g=(e,t)=>e===t,m=function(e=h){let t=e===h?f:d(e);return function(e,r={}){let{equalityFn:n=g,stabilityCheck:i,noopCheck:s}="function"==typeof r?{equalityFn:r}:r,{store:o,subscription:a,getServerState:u,stabilityCheck:c,noopCheck:h}=t();(0,l.useRef)(!0);let d=(0,l.useCallback)({[e.name](t){let r=e(t);return r}}[e.name],[e,c,i]),f=p(a.addNestedSub,o.getState,u||o.getState,d,n);return(0,l.useDebugValue)(f),f}}();r(8679),r(2973);let y={notify(){},get:()=>[]},v=!!("undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement),w=v?l.useLayoutEffect:l.useEffect;var _=function({store:e,context:t,children:r,serverState:n,stabilityCheck:i="once",noopCheck:s="once"}){let o=l.useMemo(()=>{let t=function(e,t){let r;let n=y;function i(){o.onStateChange&&o.onStateChange()}function s(){r||(r=t?t.addNestedSub(i):e.subscribe(i),n=function(){let e=a(),t=null,r=null;return{clear(){t=null,r=null},notify(){e(()=>{let e=t;for(;e;)e.callback(),e=e.next})},get(){let e=[],r=t;for(;r;)e.push(r),r=r.next;return e},subscribe(e){let n=!0,i=r={callback:e,next:null,prev:r};return i.prev?i.prev.next=i:t=i,function(){n&&null!==t&&(n=!1,i.next?i.next.prev=i.prev:r=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}())}let o={addNestedSub:function(e){return s(),n.subscribe(e)},notifyNestedSubs:function(){n.notify()},handleChangeWrapper:i,isSubscribed:function(){return!!r},trySubscribe:s,tryUnsubscribe:function(){r&&(r(),r=void 0,n.clear(),n=y)},getListeners:()=>n};return o}(e);return{store:e,subscription:t,getServerState:n?()=>n:void 0,stabilityCheck:i,noopCheck:s}},[e,n,i,s]),u=l.useMemo(()=>e.getState(),[e]);return w(()=>{let{subscription:t}=o;return t.onStateChange=t.notifyNestedSubs,t.trySubscribe(),u!==e.getState()&&t.notifyNestedSubs(),()=>{t.tryUnsubscribe(),t.onStateChange=void 0}},[o,u]),l.createElement((t||h).Provider,{value:o},r)};function b(e=h){let t=e===h?f:d(e);return function(){let{store:e}=t();return e}}let E=b(),I=function(e=h){let t=e===h?E:b(e);return function(){let e=t();return e.dispatch}}();p=i.useSyncExternalStoreWithSelector,n.useSyncExternalStore,o=s.unstable_batchedUpdates},8359:function(e,t){"use strict";Symbol.for("react.element"),Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.server_context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.suspense_list"),Symbol.for("react.memo"),Symbol.for("react.lazy"),Symbol.for("react.offscreen"),Symbol.for("react.module.reference")},2973:function(e,t,r){"use strict";r(8359)},3250:function(e,t,r){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(7294),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},s=n.useState,o=n.useEffect,a=n.useLayoutEffect,l=n.useDebugValue;function u(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!i(e,r)}catch(e){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=s({inst:{value:r,getSnapshot:t}}),i=n[0].inst,c=n[1];return a(function(){i.value=r,i.getSnapshot=t,u(i)&&c({inst:i})},[e,r,t]),o(function(){return u(i)&&c({inst:i}),e(function(){u(i)&&c({inst:i})})},[e]),l(r),r};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:c},139:function(e,t,r){"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(7294),i=r(1688),s="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=i.useSyncExternalStore,a=n.useRef,l=n.useEffect,u=n.useMemo,c=n.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,r,n,i){var h=a(null);if(null===h.current){var d={hasValue:!1,value:null};h.current=d}else d=h.current;h=u(function(){function e(e){if(!l){if(l=!0,o=e,e=n(e),void 0!==i&&d.hasValue){var t=d.value;if(i(t,e))return a=t}return a=e}if(t=a,s(o,e))return t;var r=n(e);return void 0!==i&&i(t,r)?t:(o=e,a=r)}var o,a,l=!1,u=void 0===r?null:r;return[function(){return e(t())},null===u?void 0:function(){return e(u())}]},[t,r,n,i]);var f=o(e,h[0],h[1]);return l(function(){d.hasValue=!0,d.value=f},[f]),c(f),f}},1688:function(e,t,r){"use strict";e.exports=r(3250)},2798:function(e,t,r){"use strict";e.exports=r(139)},5816:function(e,t,r){"use strict";let n,i;r.d(t,{Jn:function(){return L},qX:function(){return R},Xd:function(){return N},Mq:function(){return M},ZF:function(){return x},KN:function(){return U}});var s,o=r(740),a=r(3333),l=r(4444);let u=(e,t)=>t.some(t=>e instanceof t),c=new WeakMap,h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,g={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return h.get(e);if("objectStoreNames"===t)return e.objectStoreNames||d.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return m(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function m(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(m(e.result)),n()},s=()=>{r(e.error),n()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&c.set(t,e)}).catch(()=>{}),p.set(t,e),t}(e);if(f.has(e))return f.get(e);let r="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(y(this),e),m(c.get(this))}:function(...e){return m(t.apply(y(this),e))}:function(e,...r){let n=t.call(y(this),e,...r);return d.set(n,e.sort?e.sort():[e]),m(n)}:(t instanceof IDBTransaction&&function(e){if(h.has(e))return;let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),n()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});h.set(e,t)}(t),u(t,n||(n=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,g):t;return r!==e&&(f.set(e,r),p.set(r,e)),r}let y=e=>p.get(e),v=["get","getKey","getAll","getAllKeys","count"],w=["put","add","delete","clear"],_=new Map;function b(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(_.get(t))return _.get(t);let r=t.replace(/FromIndex$/,""),n=t!==r,i=w.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||v.includes(r)))return;let s=async function(e,...t){let s=this.transaction(e,i?"readwrite":"readonly"),o=s.store;return n&&(o=o.index(t.shift())),(await Promise.all([o[r](...t),i&&s.done]))[0]};return _.set(t,s),s}g={...s=g,get:(e,t,r)=>b(e,t)||s.get(e,t,r),has:(e,t)=>!!b(e,t)||s.has(e,t)};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e){this.container=e}getPlatformInfoString(){let e=this.container.getProviders();return e.map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let I="@firebase/app",T="0.9.19",S=new a.Yd("@firebase/app"),C="[DEFAULT]",A={[I]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},k=new Map,O=new Map;function N(e){let t=e.name;if(O.has(t))return S.debug(`There were multiple attempts to register component ${t}.`),!1;for(let r of(O.set(t,e),k.values()))!function(e,t){try{e.container.addComponent(t)}catch(r){S.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}(r,e);return!0}function R(e,t){let r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}let P=new l.LL("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new o.wA("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw P.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let L="10.4.0";function x(e,t={}){let r=e;if("object"!=typeof t){let e=t;t={name:e}}let n=Object.assign({name:C,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!=typeof i||!i)throw P.create("bad-app-name",{appName:String(i)});if(r||(r=(0,l.aH)()),!r)throw P.create("no-options");let s=k.get(i);if(s){if((0,l.vZ)(r,s.options)&&(0,l.vZ)(n,s.config))return s;throw P.create("duplicate-app",{appName:i})}let a=new o.H0(i);for(let e of O.values())a.addComponent(e);let u=new D(r,n,a);return k.set(i,u),u}function M(e=C){let t=k.get(e);if(!t&&e===C&&(0,l.aH)())return x();if(!t)throw P.create("no-app",{appName:e});return t}function U(e,t,r){var n;let i=null!==(n=A[e])&&void 0!==n?n:e;r&&(i+=`-${r}`);let s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){let e=[`Unable to register library "${i}" with version "${t}":`];s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),S.warn(e.join(" "));return}N(new o.wA(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}let F="firebase-heartbeat-store",V=null;function j(){return V||(V=(function(e,t,{blocked:r,upgrade:n,blocking:i,terminated:s}={}){let o=indexedDB.open(e,1),a=m(o);return n&&o.addEventListener("upgradeneeded",e=>{n(m(o.result),e.oldVersion,e.newVersion,m(o.transaction),e)}),r&&o.addEventListener("blocked",e=>r(e.oldVersion,e.newVersion,e)),a.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),a})("firebase-heartbeat-database",0,{upgrade:(e,t)=>{0===t&&e.createObjectStore(F)}}).catch(e=>{throw P.create("idb-open",{originalErrorMessage:e.message})})),V}async function B(e){try{let t=await j(),r=await t.transaction(F).objectStore(F).get(q(e));return r}catch(e){if(e instanceof l.ZR)S.warn(e.message);else{let t=P.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});S.warn(t.message)}}}async function $(e,t){try{let r=await j(),n=r.transaction(F,"readwrite"),i=n.objectStore(F);await i.put(t,q(e)),await n.done}catch(e){if(e instanceof l.ZR)S.warn(e.message);else{let t=P.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});S.warn(t.message)}}}function q(e){return`${e.name}!${e.options.appId}`}class z{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new H(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){let e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),r=K();return(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(e=>e.date===r))?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf(),r=Date.now();return r-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let e=K(),{heartbeatsToSend:t,unsentEntries:r}=function(e,t=1024){let r=[],n=e.slice();for(let i of e){let e=r.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),G(r)>t){e.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),G(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}(this._heartbeatsCache.heartbeats),n=(0,l.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}}function K(){let e=new Date;return e.toISOString().substring(0,10)}class H{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,l.hl)()&&(0,l.eu)().then(()=>!0).catch(()=>!1)}async read(){let e=await this._canUseIndexedDBPromise;if(!e)return{heartbeats:[]};{let e=await B(this.app);return e||{heartbeats:[]}}}async overwrite(e){var t;let r=await this._canUseIndexedDBPromise;if(r){let r=await this.read();return $(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;let r=await this._canUseIndexedDBPromise;if(r){let r=await this.read();return $(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}}function G(e){return(0,l.L)(JSON.stringify({version:2,heartbeats:e})).length}N(new o.wA("platform-logger",e=>new E(e),"PRIVATE")),N(new o.wA("heartbeat",e=>new z(e),"PRIVATE")),U(I,T,""),U(I,T,"esm2017"),U("fire-js","")},740:function(e,t,r){"use strict";r.d(t,{H0:function(){return a},wA:function(){return i}});var n=r(4444);class i{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let s="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new n.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let r=this.getOrInitializeService({instanceIdentifier:t});r&&e.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(n)return null;throw e}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let r=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:r});t.resolve(e)}catch(e){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let n=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[e,t]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(e);r===i&&t.resolve(n)}return n}onInit(e,t){var r;let n=this.normalizeInstanceIdentifier(t),i=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;i.add(e),this.onInitCallbacks.set(n,i);let s=this.instances.get(n);return s&&e(s,n),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let n of r)try{n(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:e===s?void 0:e,options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(e){}return r||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){let t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},3333:function(e,t,r){"use strict";var n,i;r.d(t,{Yd:function(){return c},in:function(){return n}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let s=[];(i=n||(n={}))[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT";let o={debug:n.DEBUG,verbose:n.VERBOSE,info:n.INFO,warn:n.WARN,error:n.ERROR,silent:n.SILENT},a=n.INFO,l={[n.DEBUG]:"log",[n.VERBOSE]:"log",[n.INFO]:"info",[n.WARN]:"warn",[n.ERROR]:"error"},u=(e,t,...r)=>{if(t<e.logLevel)return;let n=new Date().toISOString(),i=l[t];if(i)console[i](`[${n}]  ${e.name}:`,...r);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class c{constructor(e){this.name=e,this._logLevel=a,this._logHandler=u,this._userLogHandler=null,s.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in n))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,n.DEBUG,...e),this._logHandler(this,n.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,n.VERBOSE,...e),this._logHandler(this,n.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,n.INFO,...e),this._logHandler(this,n.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,n.WARN,...e),this._logHandler(this,n.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,n.ERROR,...e),this._logHandler(this,n.ERROR,...e)}}},9669:function(e,t,r){"use strict";r.d(t,{Xb:function(){return e2},v0:function(){return t5},Aj:function(){return e4},e5:function(){return e9}});var n,i=r(4444),s=r(5816),o=r(3333);function a(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)0>t.indexOf(n[i])&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r}"function"==typeof SuppressedError&&SuppressedError;var l=r(740);function u(e){return void 0!==e&&void 0!==e.enterprise}class c{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState)}}function h(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}let d=new i.LL("auth","Firebase",h()),f=new o.Yd("@firebase/auth");function p(e,...t){f.logLevel<=o.in.ERROR&&f.error(`Auth (${s.Jn}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g(e,...t){throw y(e,...t)}function m(e,...t){return y(e,...t)}function y(e,...t){if("string"!=typeof e){let r=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(r,...n)}return d.create(e,...t)}function v(e,t,...r){if(!e)throw y(t,...r)}function w(e){let t="INTERNAL ASSERTION FAILED: "+e;throw p(t),Error(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function b(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e,t){this.shortDelay=e,this.longDelay=t,t>e||w("Short delay should be less than long delay!"),this.isMobile=(0,i.uI)()||(0,i.b$)()}get(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&("http:"===b()||"https:"===b()||(0,i.ru)()||"connection"in navigator))||navigator.onLine?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e,t){e.emulator||w("Emulator should always be set here");let{url:r}=e.emulator;return t?`${r}${t.startsWith("/")?t.slice(1):t}`:r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void w("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void w("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void w("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let S={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},C=new E(3e4,6e4);function A(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function k(e,t,r,n,s={}){return O(e,s,async()=>{let s={},o={};n&&("GET"===t?o=n:s={body:JSON.stringify(n)});let a=(0,i.xO)(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),T.fetch()(R(e,e.config.apiHost,r,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function O(e,t,r){e._canInitEmulator=!1;let n=Object.assign(Object.assign({},S),t);try{let t=new P(e),s=await Promise.race([r(),t.promise]);t.clearNetworkTimeout();let o=await s.json();if("needConfirmation"in o)throw D(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{let t=s.ok?o.errorMessage:o.error.message,[r,a]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===r)throw D(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===r)throw D(e,"email-already-in-use",o);if("USER_DISABLED"===r)throw D(e,"user-disabled",o);let l=n[r]||r.toLowerCase().replace(/[_\s]+/g,"-");if(a)throw function(e,t,r){let n=Object.assign(Object.assign({},h()),{[t]:r}),s=new i.LL("auth","Firebase",n);return s.create(t,{appName:e.name})}(e,l,a);g(e,l)}}catch(t){if(t instanceof i.ZR)throw t;g(e,"network-request-failed",{message:String(t)})}}async function N(e,t,r,n,i={}){let s=await k(e,t,r,n,i);return"mfaPendingCredential"in s&&g(e,"multi-factor-auth-required",{_serverResponse:s}),s}function R(e,t,r,n){let i=`${t}${r}?${n}`;return e.config.emulator?I(e.config,i):`${e.config.apiScheme}://${i}`}class P{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(m(this.auth,"network-request-failed")),C.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function D(e,t,r){let n={appName:e.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);let i=m(e,t,n);return i.customData._tokenResponse=r,i}async function L(e,t){return k(e,"GET","/v2/recaptchaConfig",A(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x(e,t){return k(e,"POST","/v1/accounts:delete",t)}async function M(e,t){return k(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(e){if(e)try{let t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}async function F(e,t=!1){let r=(0,i.m9)(e),n=await r.getIdToken(t),s=j(n);v(s&&s.exp&&s.auth_time&&s.iat,r.auth,"internal-error");let o="object"==typeof s.firebase?s.firebase:void 0,a=null==o?void 0:o.sign_in_provider;return{claims:s,token:n,authTime:U(V(s.auth_time)),issuedAtTime:U(V(s.iat)),expirationTime:U(V(s.exp)),signInProvider:a||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}function V(e){return 1e3*Number(e)}function j(e){let[t,r,n]=e.split(".");if(void 0===t||void 0===r||void 0===n)return p("JWT malformed, contained fewer than 3 sections"),null;try{let e=(0,i.tV)(r);if(!e)return p("Failed to decode base64 JWT payload"),null;return JSON.parse(e)}catch(e){return p("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B(e,t,r=!1){if(r)return t;try{return await t}catch(t){throw t instanceof i.ZR&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;let e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,r=e-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(null==e?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=U(this.lastLoginAt),this.creationTime=U(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z(e){var t;let r=e.auth,n=await e.getIdToken(),i=await B(e,M(r,{idToken:n}));v(null==i?void 0:i.users.length,r,"internal-error");let s=i.users[0];e._notifyReloadListener(s);let o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map(e=>{var{providerId:t}=e,r=a(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}}):[],l=function(e,t){let r=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...r,...t]}(e.providerData,o),u=e.isAnonymous,c=!(e.email&&s.passwordHash)&&!(null==l?void 0:l.length),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new q(s.createdAt,s.lastLoginAt),isAnonymous:!!u&&c};Object.assign(e,h)}async function K(e){let t=(0,i.m9)(e);await z(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(e,t){let r=await O(e,{},async()=>{let r=(0,i.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:n,apiKey:s}=e.config,o=R(e,n,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",T.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){v(e.idToken,"internal-error"),v(void 0!==e.idToken,"internal-error"),v(void 0!==e.refreshToken,"internal-error");let t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){let t=j(e);return v(t,"internal-error"),v(void 0!==t.exp,"internal-error"),v(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return(v(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired)?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:r,refreshToken:n,expiresIn:i}=await H(e,t);this.updateTokensAndExpiration(r,n,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*r}static fromJSON(e,t){let{refreshToken:r,accessToken:n,expirationTime:i}=t,s=new G;return r&&(v("string"==typeof r,"internal-error",{appName:e}),s.refreshToken=r),n&&(v("string"==typeof n,"internal-error",{appName:e}),s.accessToken=n),i&&(v("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new G,this.toJSON())}_performRefresh(){return w("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(e,t){v("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Q{constructor(e){var{uid:t,auth:r,stsTokenManager:n}=e,i=a(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new q(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){let t=await B(this,this.stsTokenManager.getToken(this.auth,e));return v(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return F(this,e)}reload(){return K(this)}_assign(e){this!==e&&(v(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new Q(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await z(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){let e=await this.getIdToken();return await B(this,x(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,n,i,s,o,a,l,u;let c=null!==(r=t.displayName)&&void 0!==r?r:void 0,h=null!==(n=t.email)&&void 0!==n?n:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(l=t.createdAt)&&void 0!==l?l:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:w,emailVerified:_,isAnonymous:b,providerData:E,stsTokenManager:I}=t;v(w&&I,e,"internal-error");let T=G.fromJSON(this.name,I);v("string"==typeof w,e,"internal-error"),W(c,e.name),W(h,e.name),v("boolean"==typeof _,e,"internal-error"),v("boolean"==typeof b,e,"internal-error"),W(d,e.name),W(f,e.name),W(p,e.name),W(g,e.name),W(m,e.name),W(y,e.name);let S=new Q({uid:w,auth:e,email:h,emailVerified:_,displayName:c,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:m,lastLoginAt:y});return E&&Array.isArray(E)&&(S.providerData=E.map(e=>Object.assign({},e))),g&&(S._redirectEventId=g),S}static async _fromIdTokenResponse(e,t,r=!1){let n=new G;n.updateFromServerResponse(t);let i=new Q({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:r});return await z(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let X=new Map;function J(e){e instanceof Function||w("Expected a class definition");let t=X.get(e);return t?t instanceof e||w("Instance stored in cache mismatched with class"):(t=new e,X.set(e,t)),t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(e,t,r){return`firebase:${e}:${t}:${r}`}Y.type="NONE";class ee{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;let{config:n,name:i}=this.auth;this.fullUserKey=Z(this.userKey,n.apiKey,i),this.fullPersistenceKey=Z("persistence",n.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?Q._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new ee(J(Y),e,r);let n=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e),i=n[0]||J(Y),s=Z(r,e.config.apiKey,e.name),o=null;for(let r of t)try{let t=await r._get(s);if(t){let n=Q._fromJSON(e,t);r!==i&&(o=n),i=r;break}}catch(e){}let a=n.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&a.length&&(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new ee(i,e,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(e){let t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(es(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";{if(t.includes("edge/"))return"Edge";if(er(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ea(t))return"Blackberry";if(el(t))return"Webos";if(en(t))return"Safari";if((t.includes("chrome/")||ei(t))&&!t.includes("edge/"))return"Chrome";if(eo(t))return"Android";let r=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if((null==r?void 0:r.length)===2)return r[1]}return"Other"}function er(e=(0,i.z$)()){return/firefox\//i.test(e)}function en(e=(0,i.z$)()){let t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ei(e=(0,i.z$)()){return/crios\//i.test(e)}function es(e=(0,i.z$)()){return/iemobile/i.test(e)}function eo(e=(0,i.z$)()){return/android/i.test(e)}function ea(e=(0,i.z$)()){return/blackberry/i.test(e)}function el(e=(0,i.z$)()){return/webos/i.test(e)}function eu(e=(0,i.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ec(e=(0,i.z$)()){return eu(e)||eo(e)||el(e)||ea(e)||/windows phone/i.test(e)||es(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(e,t=[]){let r;switch(e){case"Browser":r=et((0,i.z$)());break;case"Worker":r=`${et((0,i.z$)())}-${e}`;break;default:r=e}let n=t.length?t.join(","):"FirebaseCore-web";return`${r}/JsCore/${s.Jn}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let r=t=>new Promise((r,n)=>{try{let n=e(t);r(n)}catch(e){n(e)}});r.onAbort=t,this.queue.push(r);let n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(e){for(let e of(t.reverse(),t))try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ef(e,t={}){return k(e,"GET","/v2/passwordPolicy",A(e,t))}class ep{constructor(e){var t,r,n,i;let s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=s.minPasswordLength)&&void 0!==t?t:6,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(n=null===(r=e.allowedNonAlphanumericCharacters)||void 0===r?void 0:r.join(""))&&void 0!==n?n:"",this.forceUpgradeOnSignin=null!==(i=e.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,n,i,s,o;let a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=null===(t=a.meetsMinPasswordLength)||void 0===t||t),a.isValid&&(a.isValid=null===(r=a.meetsMaxPasswordLength)||void 0===r||r),a.isValid&&(a.isValid=null===(n=a.containsLowercaseLetter)||void 0===n||n),a.isValid&&(a.isValid=null===(i=a.containsUppercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(s=a.containsNumericCharacter)||void 0===s||s),a.isValid&&(a.isValid=null===(o=a.containsNonAlphanumericCharacter)||void 0===o||o),a}validatePasswordLengthOptions(e,t){let r=this.customStrengthOptions.minPasswordLength,n=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),n&&(t.meetsMaxPasswordLength=e.length<=n)}validatePasswordCharacterOptions(e,t){let r;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let n=0;n<e.length;n++)r=e.charAt(n),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,n,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=n)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e,t,r,n){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ey(this),this.idTokenSubscription=new ey(this),this.beforeStateQueue=new ed(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=d,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=J(t)),this._initializationPromise=this.queue(async()=>{var r,n;if(!this._deleted&&(this.persistenceManager=await ee.create(this,e),!this._deleted)){if(null===(r=this._popupRedirectResolver)||void 0===r?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(n=this.currentUser)||void 0===n?void 0:n.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(this.currentUser||e){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;let r=await this.assertedPersistence.getCurrentUser(),n=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==n?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(e);(!r||r===s)&&(null==o?void 0:o.user)&&(n=o.user,i=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(n)}catch(e){n=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return(v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId)?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await z(e)}catch(e){if((null==e?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){let t=e?(0,i.m9)(e):null;return t&&v(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&v(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(J(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=await ef(this),t=new ep(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new i.LL("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let r=this.onAuthStateChanged(()=>{r(),e()},t)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){let r=await this.getOrInitRedirectPersistenceManager(t);return null===e?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&J(e)||this._popupRedirectResolver;v(t,this,"argument-error"),this.redirectPersistenceManager=await ee.create(this,[J(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return(this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e)?this._currentUser:(null===(r=this.redirectUser)||void 0===r?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let r=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,n){if(this._deleted)return()=>{};let i="function"==typeof t?t:t.next.bind(t),s=!1,o=this._isInitialized?Promise.resolve():this._initializationPromise;if(v(o,this,"internal-error"),o.then(()=>{s||i(this.currentUser)}),"function"==typeof t){let i=e.addObserver(t,r,n);return()=>{s=!0,i()}}{let r=e.addObserver(t);return()=>{s=!0,r()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=eh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let r=await (null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);let n=await this._getAppCheckToken();return n&&(t["X-Firebase-AppCheck"]=n),t}async _getAppCheckToken(){var e;let t=await (null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){f.logLevel<=o.in.WARN&&f.warn(`Auth (${s.Jn}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function em(e){return(0,i.m9)(e)}class ey{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.ne)(e=>this.observer=e)}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function ev(e){return new Promise((t,r)=>{var n,i;let s=document.createElement("script");s.setAttribute("src",e),s.onload=t,s.onerror=e=>{let t=m("internal-error");t.customData=e,r(t)},s.type="text/javascript",s.charset="UTF-8",(null!==(i=null===(n=document.getElementsByTagName("head"))||void 0===n?void 0:n[0])&&void 0!==i?i:document).appendChild(s)})}function ew(e){return`__${e}${Math.floor(1e6*Math.random())}`}class e_{constructor(e){this.type="recaptcha-enterprise",this.auth=em(e)}async verify(e="verify",t=!1){async function r(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,r)=>{L(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(n=>{if(void 0===n.recaptchaKey)r(Error("recaptcha Enterprise site key undefined"));else{let r=new c(n);return null==e.tenantId?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,t(r.siteKey)}}).catch(e=>{r(e)})})}function n(t,r,n){let i=window.grecaptcha;u(i)?i.enterprise.ready(()=>{i.enterprise.execute(t,{action:e}).then(e=>{r(e)}).catch(()=>{r("NO_RECAPTCHA")})}):n(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((e,i)=>{r(this.auth).then(r=>{if(!t&&u(window.grecaptcha))n(r,e,i);else{if("undefined"==typeof window){i(Error("RecaptchaVerifier is only supported in browser"));return}ev("https://www.google.com/recaptcha/enterprise.js?render="+r).then(()=>{n(r,e,i)}).catch(e=>{i(e)})}}).catch(e=>{i(e)})})}}async function eb(e,t,r,n=!1){let i;let s=new e_(e);try{i=await s.verify(r)}catch(e){i=await s.verify(r,!0)}let o=Object.assign({},t);return n?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}function eE(e){let t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function eI(e){if(!e)return null;let t=Number(e);return isNaN(t)?null:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return w("not implemented")}_getIdTokenResponse(e){return w("not implemented")}_linkToIdToken(e,t){return w("not implemented")}_getReauthenticationResolver(e){return w("not implemented")}}async function eS(e,t){return k(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eC(e,t){return N(e,"POST","/v1/accounts:signInWithPassword",A(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eA(e,t){return N(e,"POST","/v1/accounts:signInWithEmailLink",A(e,t))}async function ek(e,t){return N(e,"POST","/v1/accounts:signInWithEmailLink",A(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eO extends eT{constructor(e,t,r,n=null){super("password",r),this._email=e,this._password=t,this._tenantId=n}static _fromEmailAndPassword(e,t){return new eO(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new eO(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":let r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t||!t.emailPasswordEnabled)return eC(e,r).catch(async t=>{if("auth/missing-recaptcha-token"!==t.code)return Promise.reject(t);{console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");let t=await eb(e,r,"signInWithPassword");return eC(e,t)}});{let t=await eb(e,r,"signInWithPassword");return eC(e,t)}case"emailLink":return eA(e,{email:this._email,oobCode:this._password});default:g(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return eS(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ek(e,{idToken:t,email:this._email,oobCode:this._password});default:g(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eN(e,t){return N(e,"POST","/v1/accounts:signInWithIdp",A(e,t))}class eR extends eT{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new eR(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):g("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e,{providerId:r,signInMethod:n}=t,i=a(t,["providerId","signInMethod"]);if(!r||!n)return null;let s=new eR(r,n);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){let t=this.buildRequest();return eN(e,t)}_linkToIdToken(e,t){let r=this.buildRequest();return r.idToken=t,eN(e,r)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,eN(e,t)}buildRequest(){let e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,i.xO)(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eP(e,t){return k(e,"POST","/v1/accounts:sendVerificationCode",A(e,t))}async function eD(e,t){return N(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,t))}async function eL(e,t){let r=await N(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,t));if(r.temporaryProof)throw D(e,"account-exists-with-different-credential",r);return r}let ex={USER_NOT_FOUND:"user-not-found"};async function eM(e,t){let r=Object.assign(Object.assign({},t),{operation:"REAUTH"});return N(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,r),ex)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eU extends eT{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new eU({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new eU({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return eD(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return eL(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return eM(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:n}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:n}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));let{verificationId:t,verificationCode:r,phoneNumber:n,temporaryProof:i}=e;return r||t||n||i?new eU({verificationId:t,verificationCode:r,phoneNumber:n,temporaryProof:i}):null}}class eF{constructor(e){var t,r,n,s,o,a;let l=(0,i.zd)((0,i.pd)(e)),u=null!==(t=l.apiKey)&&void 0!==t?t:null,c=null!==(r=l.oobCode)&&void 0!==r?r:null,h=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(n=l.mode)&&void 0!==n?n:null);v(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=null!==(s=l.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(o=l.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(a=l.tenantId)&&void 0!==a?a:null}static parseLink(e){let t=function(e){let t=(0,i.zd)((0,i.pd)(e)).link,r=t?(0,i.zd)((0,i.pd)(t)).deep_link_id:null,n=(0,i.zd)((0,i.pd)(e)).deep_link_id,s=n?(0,i.zd)((0,i.pd)(n)).link:null;return s||n||r||t||e}(e);try{return new eF(t)}catch(e){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eV{constructor(){this.providerId=eV.PROVIDER_ID}static credential(e,t){return eO._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let r=eF.parseLink(t);return v(r,"argument-error"),eO._fromEmailAndCode(e,r.code,r.tenantId)}}eV.PROVIDER_ID="password",eV.EMAIL_PASSWORD_SIGN_IN_METHOD="password",eV.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ej{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eB extends ej{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e$ extends eB{constructor(){super("facebook.com")}static credential(e){return eR._fromParams({providerId:e$.PROVIDER_ID,signInMethod:e$.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return e$.credentialFromTaggedObject(e)}static credentialFromError(e){return e$.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return e$.credential(e.oauthAccessToken)}catch(e){return null}}}e$.FACEBOOK_SIGN_IN_METHOD="facebook.com",e$.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eq extends eB{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return eR._fromParams({providerId:eq.PROVIDER_ID,signInMethod:eq.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return eq.credentialFromTaggedObject(e)}static credentialFromError(e){return eq.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return eq.credential(t,r)}catch(e){return null}}}eq.GOOGLE_SIGN_IN_METHOD="google.com",eq.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ez extends eB{constructor(){super("github.com")}static credential(e){return eR._fromParams({providerId:ez.PROVIDER_ID,signInMethod:ez.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ez.credentialFromTaggedObject(e)}static credentialFromError(e){return ez.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ez.credential(e.oauthAccessToken)}catch(e){return null}}}ez.GITHUB_SIGN_IN_METHOD="github.com",ez.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eK extends eB{constructor(){super("twitter.com")}static credential(e,t){return eR._fromParams({providerId:eK.PROVIDER_ID,signInMethod:eK.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return eK.credentialFromTaggedObject(e)}static credentialFromError(e){return eK.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return eK.credential(t,r)}catch(e){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eH(e,t){return N(e,"POST","/v1/accounts:signUp",A(e,t))}eK.TWITTER_SIGN_IN_METHOD="twitter.com",eK.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eG{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,n=!1){let i=await Q._fromIdTokenResponse(e,r,n),s=eW(r),o=new eG({user:i,providerId:s,_tokenResponse:r,operationType:t});return o}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);let n=eW(r);return new eG({user:e,providerId:n,_tokenResponse:r,operationType:t})}}function eW(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eQ extends i.ZR{constructor(e,t,r,n){var i;super(t.code,t.message),this.operationType=r,this.user=n,Object.setPrototypeOf(this,eQ.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,n){return new eQ(e,t,r,n)}}function eX(e,t,r,n){let i="reauthenticate"===t?r._getReauthenticationResolver(e):r._getIdTokenResponse(e);return i.catch(r=>{if("auth/multi-factor-auth-required"===r.code)throw eQ._fromErrorAndOperation(e,r,t,n);throw r})}async function eJ(e,t,r=!1){let n=await B(e,t._linkToIdToken(e.auth,await e.getIdToken()),r);return eG._forOperation(e,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eY(e,t,r=!1){let{auth:n}=e,i="reauthenticate";try{let s=await B(e,eX(n,i,t,e),r);v(s.idToken,n,"internal-error");let o=j(s.idToken);v(o,n,"internal-error");let{sub:a}=o;return v(e.uid===a,n,"user-mismatch"),eG._forOperation(e,i,s)}catch(e){throw(null==e?void 0:e.code)==="auth/user-not-found"&&g(n,"user-mismatch"),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eZ(e,t,r=!1){let n="signIn",i=await eX(e,n,t),s=await eG._fromIdTokenResponse(e,n,i);return r||await e._updateCurrentUser(s.user),s}async function e0(e,t){return eZ(em(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e1(e){let t=em(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function e2(e,t,r){var n;let i;let s=em(e),o={returnSecureToken:!0,email:t,password:r,clientType:"CLIENT_TYPE_WEB"};if(null===(n=s._getRecaptchaConfig())||void 0===n?void 0:n.emailPasswordEnabled){let e=await eb(s,o,"signUpPassword");i=eH(s,e)}else i=eH(s,o).catch(async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");let e=await eb(s,o,"signUpPassword");return eH(s,e)}throw e});let a=await i.catch(t=>{throw"auth/password-does-not-meet-requirements"===t.code&&e1(e),t}),l=await eG._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(l.user),l}function e9(e,t,r){return e0((0,i.m9)(e),eV.credential(t,r)).catch(async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&e1(e),t})}function e4(e,t,r,n){return(0,i.m9)(e).onAuthStateChanged(t,r,n)}new WeakMap;let e6="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e5{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{if(!this.storage)return Promise.resolve(!1);return this.storage.setItem(e6,"1"),this.storage.removeItem(e6),Promise.resolve(!0)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}class e3 extends e5{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(){let e=(0,i.z$)();return en(e)||eu(e)}()&&function(){try{return!!(window&&window!==window.top)}catch(e){return!1}}(),this.fallbackToPolling=ec(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let r=this.storage.getItem(t),n=this.localCache[t];r!==n&&e(t,n,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((e,t,r)=>{this.notifyListeners(e,r)});return}let r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){let n=this.storage.getItem(r);if(e.newValue!==n)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}let n=()=>{let e=this.storage.getItem(r);(t||this.localCache[r]!==e)&&this.notifyListeners(r,e)},s=this.storage.getItem(r);(0,i.w1)()&&10===document.documentMode&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(n,10):n()}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let e of Array.from(r))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}e3.type="LOCAL";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e7 extends e5{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}e7.type="SESSION";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e8{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;let r=new e8(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let{eventId:t,eventType:r,data:n}=e.data,i=this.handlersMap[r];if(!(null==i?void 0:i.size))return;e.ports[0].postMessage({status:"ack",eventId:t,eventType:r});let s=Array.from(i).map(async t=>t(e.origin,n)),o=await Promise.all(s.map(async e=>{try{let t=await e;return{fulfilled:!0,value:t}}catch(e){return{fulfilled:!1,reason:e}}}));e.ports[0].postMessage({status:"done",eventId:t,eventType:r,response:o})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(e="",t=10){let r="";for(let e=0;e<t;e++)r+=Math.floor(10*Math.random());return e+r}e8.receivers=[];/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){let n,i;let s="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!s)throw Error("connection_unavailable");return new Promise((o,a)=>{let l=te("",20);s.port1.start();let u=setTimeout(()=>{a(Error("unsupported_event"))},r);i={messageChannel:s,onMessage(e){if(e.data.eventId===l)switch(e.data.status){case"ack":clearTimeout(u),n=setTimeout(()=>{a(Error("timeout"))},3e3);break;case"done":clearTimeout(n),o(e.data.response);break;default:clearTimeout(u),clearTimeout(n),a(Error("invalid_response"))}}},this.handlers.add(i),s.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(){return window}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(){return void 0!==tr().WorkerGlobalScope&&"function"==typeof tr().importScripts}async function ti(){if(!(null==navigator?void 0:navigator.serviceWorker))return null;try{let e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ts="firebaseLocalStorageDb",to="firebaseLocalStorage",ta="fbase_key";class tl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function tu(e,t){return e.transaction([to],t?"readwrite":"readonly").objectStore(to)}function tc(){let e=indexedDB.open(ts,1);return new Promise((t,r)=>{e.addEventListener("error",()=>{r(e.error)}),e.addEventListener("upgradeneeded",()=>{let t=e.result;try{t.createObjectStore(to,{keyPath:ta})}catch(e){r(e)}}),e.addEventListener("success",async()=>{let r=e.result;r.objectStoreNames.contains(to)?t(r):(r.close(),await function(){let e=indexedDB.deleteDatabase(ts);return new tl(e).toPromise()}(),t(await tc()))})})}async function th(e,t,r){let n=tu(e,!0).put({[ta]:t,value:r});return new tl(n).toPromise()}async function td(e,t){let r=tu(e,!1).get(t),n=await new tl(r).toPromise();return void 0===n?null:n.value}function tf(e,t){let r=tu(e,!0).delete(t);return new tl(r).toPromise()}class tp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await tc()),this.db}async _withRetries(e){let t=0;for(;;)try{let t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return tn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=e8._getInstance(tn()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>{let r=await this._poll();return{keyProcessed:r.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await ti(),!this.activeServiceWorker)return;this.sender=new tt(this.activeServiceWorker);let r=await this.sender._send("ping",{},800);r&&(null===(e=r[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=r[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null==navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await tc();return await th(e,e6,"1"),await tf(e,e6),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>th(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(t=>td(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>tf(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(e=>{let t=tu(e,!1).getAll();return new tl(t).toPromise()});if(!e||0!==this.pendingWrites)return[];let t=[],r=new Set;for(let{fbase_key:n,value:i}of e)r.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(i)&&(this.notifyListeners(n,i),t.push(n));for(let e of Object.keys(this.localCache))this.localCache[e]&&!r.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let e of Array.from(r))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}async function tg(e,t,r){var n,i,s;let o=await r.verify();try{let a;if(v("string"==typeof o,e,"argument-error"),v("recaptcha"===r.type,e,"argument-error"),a="string"==typeof t?{phoneNumber:t}:t,"session"in a){let t=a.session;if("phoneNumber"in a){v("enroll"===t.type,e,"internal-error");let r=await (i={idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,recaptchaToken:o}},k(e,"POST","/v2/accounts/mfaEnrollment:start",A(e,i)));return r.phoneSessionInfo.sessionInfo}{v("signin"===t.type,e,"internal-error");let r=(null===(n=a.multiFactorHint)||void 0===n?void 0:n.uid)||a.multiFactorUid;v(r,e,"missing-multi-factor-info");let i=await (s={mfaPendingCredential:t.credential,mfaEnrollmentId:r,phoneSignInInfo:{recaptchaToken:o}},k(e,"POST","/v2/accounts/mfaSignIn:start",A(e,s)));return i.phoneResponseInfo.sessionInfo}}{let{sessionInfo:t}=await eP(e,{phoneNumber:a.phoneNumber,recaptchaToken:o});return t}}finally{r._reset()}}tp.type="LOCAL",ew("rcb"),new E(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e){this.providerId=tm.PROVIDER_ID,this.auth=em(e)}verifyPhoneNumber(e,t){return tg(this.auth,e,(0,i.m9)(t))}static credential(e,t){return eU._fromVerification(e,t)}static credentialFromResult(e){return tm.credentialFromTaggedObject(e)}static credentialFromError(e){return tm.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:r}=e;return t&&r?eU._fromTokenResponse(t,r):null}}tm.PROVIDER_ID="phone",tm.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty extends eT{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return eN(e,this._buildIdpRequest())}_linkToIdToken(e,t){return eN(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return eN(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function tv(e){return eZ(e.auth,new ty(e),e.bypassAuthState)}function tw(e){let{auth:t,user:r}=e;return v(r,t,"internal-error"),eY(r,new ty(e),e.bypassAuthState)}async function t_(e){let{auth:t,user:r}=e;return v(r,t,"internal-error"),eJ(r,new ty(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(e,t,r,n,i=!1){this.auth=e,this.resolver=r,this.user=n,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:r,postBody:n,tenantId:i,error:s,type:o}=e;if(s){this.reject(s);return}let a={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tv;case"linkViaPopup":case"linkViaRedirect":return t_;case"reauthViaPopup":case"reauthViaRedirect":return tw;default:g(this.auth,"internal-error")}}resolve(e){this.pendingPromise||w("Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){this.pendingPromise||w("Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tE=new E(2e3,1e4);class tI extends tb{constructor(e,t,r,n,i){super(e,t,n,i),this.provider=r,this.authWindow=null,this.pollId=null,tI.currentPopupAction&&tI.currentPopupAction.cancel(),tI.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return v(e,this.auth,"internal-error"),e}async onExecution(){1===this.filter.length||w("Popup operations only handle one event");let e=te();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(m(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(m(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,tI.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,r;if(null===(r=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===r?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(m(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,tE.get())};e()}}tI.currentPopupAction=null;let tT=new Map;class tS extends tb{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=tT.get(this.auth._key());if(!e){try{let t=await tC(this.resolver,this.auth),r=t?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}tT.set(this.auth._key(),e)}return this.bypassAuthState||tT.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"===e.type){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tC(e,t){let r=Z("pendingRedirect",t.config.apiKey,t.name),n=J(e._redirectPersistence);if(!await n._isAvailable())return!1;let i=await n._get(r)==="true";return await n._remove(r),i}function tA(e,t){tT.set(e._key(),t)}async function tk(e,t,r=!1){let n=em(e),i=t?J(t):(v(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver),s=new tS(n,i,r),o=await s.execute();return o&&!r&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,t)),o}class tO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tR(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!tR(e)){let n=(null===(r=e.error.code)||void 0===r?void 0:r.split("auth/")[1])||"internal-error";t.onError(m(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let r=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(tN(e))}saveEventToCache(e){this.cachedEventUids.add(tN(e)),this.lastProcessedEventTime=Date.now()}}function tN(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function tR({type:e,error:t}){return"unknown"===e&&(null==t?void 0:t.code)==="auth/no-auth-event"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tP(e,t={}){return k(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tL=/^https?/;async function tx(e){if(e.config.emulator)return;let{authorizedDomains:t}=await tP(e);for(let e of t)try{if(function(e){let t=_(),{protocol:r,hostname:n}=new URL(t);if(e.startsWith("chrome-extension://")){let i=new URL(e);return""===i.hostname&&""===n?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&i.hostname===n}if(!tL.test(r))return!1;if(tD.test(e))return n===e;let i=e.replace(/\./g,"\\."),s=RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(n)}(e))return}catch(e){}g(e,"unauthorized-domain")}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tM=new E(3e4,6e4);function tU(){let e=tr().___jsl;if(null==e?void 0:e.H){for(let t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}}let tF=null,tV=new E(5e3,15e3),tj={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},tB=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);async function t$(e){let t=await (tF=tF||new Promise((t,r)=>{var n,i,s;function o(){tU(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{tU(),r(m(e,"network-request-failed"))},timeout:tM.get()})}if(null===(i=null===(n=tr().gapi)||void 0===n?void 0:n.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else if(null===(s=tr().gapi)||void 0===s?void 0:s.load)o();else{let t=ew("iframefcb");return tr()[t]=()=>{gapi.load?o():r(m(e,"network-request-failed"))},ev(`https://apis.google.com/js/api.js?onload=${t}`).catch(e=>r(e))}}).catch(e=>{throw tF=null,e})),r=tr().gapi;return v(r,e,"internal-error"),t.open({where:document.body,url:function(e){let t=e.config;v(t.authDomain,e,"auth-domain-config-required");let r=t.emulator?I(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,n={apiKey:t.apiKey,appName:e.name,v:s.Jn},o=tB.get(e.config.apiHost);o&&(n.eid=o);let a=e._getFrameworks();return a.length&&(n.fw=a.join(",")),`${r}?${(0,i.xO)(n).slice(1)}`}(e),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tj,dontclear:!0},t=>new Promise(async(r,n)=>{await t.restyle({setHideOnLeave:!1});let i=m(e,"network-request-failed"),s=tr().setTimeout(()=>{n(i)},tV.get());function o(){tr().clearTimeout(s),r(t)}t.ping(o).then(o,()=>{n(i)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tq={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class tz{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}let tK=encodeURIComponent("fac");async function tH(e,t,r,n,o,a){v(e.config.authDomain,e,"auth-domain-config-required"),v(e.config.apiKey,e,"invalid-api-key");let l={apiKey:e.config.apiKey,appName:e.name,authType:r,redirectUrl:n,v:s.Jn,eventId:o};if(t instanceof ej)for(let[r,n]of(t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",(0,i.xb)(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters())),Object.entries(a||{})))l[r]=n;if(t instanceof eB){let e=t.getScopes().filter(e=>""!==e);e.length>0&&(l.scopes=e.join(","))}for(let t of(e.tenantId&&(l.tid=e.tenantId),Object.keys(l)))void 0===l[t]&&delete l[t];let u=await e._getAppCheckToken(),c=u?`#${tK}=${encodeURIComponent(u)}`:"";return`${function({config:e}){return e.emulator?I(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}(e)}?${(0,i.xO)(l).slice(1)}${c}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tG="webStorageSupport",tW=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=e7,this._completeRedirectFn=tk,this._overrideRedirectResult=tA}async _openPopup(e,t,r,n){var s;(null===(s=this.eventManagers[e._key()])||void 0===s?void 0:s.manager)||w("_initialize() not called before _openPopup()");let o=await tH(e,t,r,_(),n);return function(e,t,r,n=500,s=600){let o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString(),l="",u=Object.assign(Object.assign({},tq),{width:n.toString(),height:s.toString(),top:o,left:a}),c=(0,i.z$)().toLowerCase();r&&(l=ei(c)?"_blank":r),er(c)&&(t=t||"http://localhost",u.scrollbars="yes");let h=Object.entries(u).reduce((e,[t,r])=>`${e}${t}=${r},`,"");if(function(e=(0,i.z$)()){var t;return eu(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==l)return function(e,t){let r=document.createElement("a");r.href=e,r.target=t;let n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}(t||"",l),new tz(null);let d=window.open(t||"",l,h);v(d,e,"popup-blocked");try{d.focus()}catch(e){}return new tz(d)}(e,o,te())}async _openRedirect(e,t,r,n){await this._originValidation(e);let i=await tH(e,t,r,_(),n);return tr().location.href=i,new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:e,promise:r}=this.eventManagers[t];return e?Promise.resolve(e):(r||w("If manager is not set, promise should be"),r)}let r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){let t=await t$(e),r=new tO(e);return t.register("authEvent",t=>{v(null==t?void 0:t.authEvent,e,"invalid-auth-event");let n=r.onEvent(t.authEvent);return{status:n?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){let r=this.iframes[e._key()];r.send(tG,{type:tG},r=>{var n;let i=null===(n=null==r?void 0:r[0])||void 0===n?void 0:n[tG];void 0!==i&&t(!!i),g(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=tx(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ec()||en()||eu()}};class tQ{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return w("unexpected MultiFactorSessionType")}}}class tX extends tQ{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new tX(e)}_finalizeEnroll(e,t,r){return k(e,"POST","/v2/accounts/mfaEnrollment:finalize",A(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}_finalizeSignIn(e,t){return k(e,"POST","/v2/accounts/mfaSignIn:finalize",A(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}}class tJ extends tQ{constructor(e,t,r){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=r}static _fromSecret(e,t){return new tJ(t,void 0,e)}static _fromEnrollmentId(e,t){return new tJ(t,e)}async _finalizeEnroll(e,t,r){return v(void 0!==this.secret,e,"argument-error"),k(e,"POST","/v2/accounts/mfaEnrollment:finalize",A(e,{idToken:t,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)}))}async _finalizeSignIn(e,t){v(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");let r={verificationCode:this.otp};return k(e,"POST","/v2/accounts/mfaSignIn:finalize",A(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r}))}}class tY{constructor(e,t,r,n,i,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=r,this.codeIntervalSeconds=n,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new tY(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var r;let n=!1;return(tZ(e)||tZ(t))&&(n=!0),n&&(tZ(e)&&(e=(null===(r=this.auth.currentUser)||void 0===r?void 0:r.email)||"unknownuser"),tZ(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function tZ(e){return void 0===e||(null==e?void 0:e.length)===0}var t0="@firebase/auth",t1="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;let t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}let t9=(0,i.Pz)("authIdTokenMaxAge")||300,t4=null,t6=e=>async t=>{let r=t&&await t.getIdTokenResult(),n=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(n&&n>t9)return;let i=null==r?void 0:r.token;t4!==i&&(t4=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function t5(e=(0,s.Mq)()){let t=(0,s.qX)(e,"auth");if(t.isInitialized())return t.getImmediate();let r=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t){let r=(0,s.qX)(e,"auth");if(r.isInitialized()){let e=r.getImmediate(),n=r.getOptions();if((0,i.vZ)(n,null!=t?t:{}))return e;g(e,"already-initialized")}let n=r.initialize({options:t});return n}(e,{popupRedirectResolver:tW,persistence:[tp,e3,e7]}),n=(0,i.Pz)("authTokenSyncURL");if(n){let e=t6(n);(0,i.m9)(r).beforeAuthStateChanged(e,()=>e(r.currentUser)),(0,i.m9)(r).onIdTokenChanged(t=>e(t),void 0,void 0)}let o=(0,i.q4)("auth");return o&&function(e,t,r){let n=em(e);v(n._canInitEmulator,n,"emulator-config-failed"),v(/^https?:\/\//.test(t),n,"invalid-emulator-scheme");let i=!!(null==r?void 0:r.disableWarnings),s=eE(t),{host:o,port:a}=function(e){let t=eE(e),r=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!r)return{host:"",port:null};let n=r[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){let e=i[1];return{host:e,port:eI(n.substr(e.length+1))}}{let[e,t]=n.split(":");return{host:e,port:eI(t)}}}(t),l=null===a?"":`:${a}`;n.config.emulator={url:`${s}//${o}${l}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}()}(r,`http://${o}`),r}n="Browser",(0,s.Xd)(new l.wA("auth",(e,{options:t})=>{let r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;v(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});let l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:eh(n)},u=new eg(r,i,s,l);return function(e,t){let r=(null==t?void 0:t.persistence)||[],n=(Array.isArray(r)?r:[r]).map(J);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null==t?void 0:t.popupRedirectResolver)}(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{let n=e.getProvider("auth-internal");n.initialize()})),(0,s.Xd)(new l.wA("auth-internal",e=>{let t=em(e.getProvider("auth").getImmediate());return new t2(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),(0,s.KN)(t0,t1,/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(n)),(0,s.KN)(t0,t1,"esm2017")},6100:function(e,t,r){"use strict";r.d(t,{ET:function(){return lL},hJ:function(){return aQ},oe:function(){return lD},JU:function(){return aX},QT:function(){return lO},PL:function(){return lR},ad:function(){return aZ},IO:function(){return lv},r7:function(){return lP}});var n,i,s,o,a,l,u,c=r(5816),h=r(740),d=r(3333),f=r(4444),p="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},g={},m=m||{},y=p||self;function v(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function w(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function _(e,t,r){return e.call.apply(e.bind,arguments)}function b(e,t,r){if(!e)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,n),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function E(e,t,r){return(E=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?_:b).apply(null,arguments)}function I(e,t){var r=Array.prototype.slice.call(arguments,1);return function(){var t=r.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function T(e,t){function r(){}r.prototype=t.prototype,e.$=t.prototype,e.prototype=new r,e.prototype.constructor=e,e.ac=function(e,r,n){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[r].apply(e,i)}}function S(){this.s=this.s,this.o=this.o}S.prototype.s=!1,S.prototype.sa=function(){this.s||(this.s=!0,this.N())},S.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};let C=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let r=0;r<e.length;r++)if(r in e&&e[r]===t)return r;return -1};function A(e){let t=e.length;if(0<t){let r=Array(t);for(let n=0;n<t;n++)r[n]=e[n];return r}return[]}function k(e,t){for(let t=1;t<arguments.length;t++){let r=arguments[t];if(v(r)){let t=e.length||0,n=r.length||0;e.length=t+n;for(let i=0;i<n;i++)e[t+i]=r[i]}else e.push(r)}}function O(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}O.prototype.h=function(){this.defaultPrevented=!0};var N=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{y.addEventListener("test",()=>{},t),y.removeEventListener("test",()=>{},t)}catch(e){}return e}();function R(e){return/^[\s\xa0]*$/.test(e)}function P(){var e=y.navigator;return e&&(e=e.userAgent)?e:""}function D(e){return -1!=P().indexOf(e)}function L(e){return L[" "](e),e}L[" "]=function(){};var x=D("Opera"),M=D("Trident")||D("MSIE"),U=D("Edge"),F=U||M,V=D("Gecko")&&!(-1!=P().toLowerCase().indexOf("webkit")&&!D("Edge"))&&!(D("Trident")||D("MSIE"))&&!D("Edge"),j=-1!=P().toLowerCase().indexOf("webkit")&&!D("Edge");function B(){var e=y.document;return e?e.documentMode:void 0}e:{var $,q="",z=($=P(),V?/rv:([^\);]+)(\)|;)/.exec($):U?/Edge\/([\d\.]+)/.exec($):M?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec($):j?/WebKit\/(\S+)/.exec($):x?/(?:Version)[ \/]?(\S+)/.exec($):void 0);if(z&&(q=z?z[1]:""),M){var K=B();if(null!=K&&K>parseFloat(q)){i=String(K);break e}}i=q}var H=y.document&&M&&(B()||parseInt(i,10))||void 0;function G(e,t){if(O.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var r=this.type=e.type,n=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(V){e:{try{L(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==r?t=e.fromElement:"mouseout"==r&&(t=e.toElement);this.relatedTarget=t,n?(this.clientX=void 0!==n.clientX?n.clientX:n.pageX,this.clientY=void 0!==n.clientY?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:W[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&G.$.h.call(this)}}T(G,O);var W={2:"touch",3:"pen",4:"mouse"};G.prototype.h=function(){G.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Q="closure_listenable_"+(1e6*Math.random()|0),X=0;function J(e,t,r,n,i){this.listener=e,this.proxy=null,this.src=t,this.type=r,this.capture=!!n,this.la=i,this.key=++X,this.fa=this.ia=!1}function Y(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Z(e,t,r){for(let n in e)t.call(r,e[n],n,e)}function ee(e){let t={};for(let r in e)t[r]=e[r];return t}let et="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function er(e,t){let r,n;for(let t=1;t<arguments.length;t++){for(r in n=arguments[t])e[r]=n[r];for(let t=0;t<et.length;t++)r=et[t],Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}}function en(e){this.src=e,this.g={},this.h=0}function ei(e,t){var r=t.type;if(r in e.g){var n,i=e.g[r],s=C(i,t);(n=0<=s)&&Array.prototype.splice.call(i,s,1),n&&(Y(t),0==e.g[r].length&&(delete e.g[r],e.h--))}}function es(e,t,r,n){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&!!r==s.capture&&s.la==n)return i}return -1}en.prototype.add=function(e,t,r,n,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=es(e,t,n,i);return -1<o?(t=e[o],r||(t.ia=!1)):((t=new J(t,this.src,s,!!n,i)).ia=r,e.push(t)),t};var eo="closure_lm_"+(1e6*Math.random()|0),ea={};function el(e,t,r,n,i,s){if(!t)throw Error("Invalid event type");var o=w(i)?!!i.capture:!!i,a=ed(e);if(a||(e[eo]=a=new en(e)),(r=a.add(t,r,n,o,s)).proxy)return r;if(n=function e(t){return eh.call(e.src,e.listener,t)},r.proxy=n,n.src=e,n.listener=r,e.addEventListener)N||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),n,i);else if(e.attachEvent)e.attachEvent(ec(t.toString()),n);else if(e.addListener&&e.removeListener)e.addListener(n);else throw Error("addEventListener and attachEvent are unavailable.");return r}function eu(e){if("number"!=typeof e&&e&&!e.fa){var t=e.src;if(t&&t[Q])ei(t.i,e);else{var r=e.type,n=e.proxy;t.removeEventListener?t.removeEventListener(r,n,e.capture):t.detachEvent?t.detachEvent(ec(r),n):t.addListener&&t.removeListener&&t.removeListener(n),(r=ed(t))?(ei(r,e),0==r.h&&(r.src=null,t[eo]=null)):Y(e)}}}function ec(e){return e in ea?ea[e]:ea[e]="on"+e}function eh(e,t){if(e.fa)e=!0;else{t=new G(t,this);var r=e.listener,n=e.la||e.src;e.ia&&eu(e),e=r.call(n,t)}return e}function ed(e){return(e=e[eo])instanceof en?e:null}var ef="__closure_events_fn_"+(1e9*Math.random()>>>0);function ep(e){return"function"==typeof e?e:(e[ef]||(e[ef]=function(t){return e.handleEvent(t)}),e[ef])}function eg(){S.call(this),this.i=new en(this),this.S=this,this.J=null}function em(e,t){var r,n=e.J;if(n)for(r=[];n;n=n.J)r.push(n);if(e=e.S,n=t.type||t,"string"==typeof t)t=new O(t,e);else if(t instanceof O)t.target=t.target||e;else{var i=t;er(t=new O(n,e),i)}if(i=!0,r)for(var s=r.length-1;0<=s;s--){var o=t.g=r[s];i=ey(o,n,!0,t)&&i}if(i=ey(o=t.g=e,n,!0,t)&&i,i=ey(o,n,!1,t)&&i,r)for(s=0;s<r.length;s++)i=ey(o=t.g=r[s],n,!1,t)&&i}function ey(e,t,r,n){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==r){var a=o.listener,l=o.la||o.src;o.ia&&ei(e.i,o),i=!1!==a.call(l,n)&&i}}return i&&!n.defaultPrevented}T(eg,S),eg.prototype[Q]=!0,eg.prototype.removeEventListener=function(e,t,r,n){!function e(t,r,n,i,s){if(Array.isArray(r))for(var o=0;o<r.length;o++)e(t,r[o],n,i,s);else(i=w(i)?!!i.capture:!!i,n=ep(n),t&&t[Q])?(t=t.i,(r=String(r).toString())in t.g&&-1<(n=es(o=t.g[r],n,i,s))&&(Y(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete t.g[r],t.h--))):t&&(t=ed(t))&&(r=t.g[r.toString()],t=-1,r&&(t=es(r,n,i,s)),(n=-1<t?r[t]:null)&&eu(n))}(this,e,t,r,n)},eg.prototype.N=function(){if(eg.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var r=t.g[e],n=0;n<r.length;n++)Y(r[n]);delete t.g[e],t.h--}}this.J=null},eg.prototype.O=function(e,t,r,n){return this.i.add(String(e),t,!1,r,n)},eg.prototype.P=function(e,t,r,n){return this.i.add(String(e),t,!0,r,n)};var ev=y.JSON.stringify,ew=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new e_,e=>e.reset());class e_{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let eb,eE=!1,eI=new class{constructor(){this.h=this.g=null}add(e,t){let r=ew.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}},eT=()=>{let e=y.Promise.resolve(void 0);eb=()=>{e.then(eS)}};var eS=()=>{let e;for(var t;e=null,eI.g&&(e=eI.g,eI.g=eI.g.next,eI.g||(eI.h=null),e.next=null),t=e;){try{t.h.call(t.g)}catch(e){!function(e){y.setTimeout(()=>{throw e},0)}(e)}ew.j(t),100>ew.h&&(ew.h++,t.next=ew.g,ew.g=t)}eE=!1};function eC(e,t){eg.call(this),this.h=e||1,this.g=t||y,this.j=E(this.qb,this),this.l=Date.now()}function eA(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function ek(e,t,r){if("function"==typeof e)r&&(e=E(e,r));else if(e&&"function"==typeof e.handleEvent)e=E(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:y.setTimeout(e,t||0)}T(eC,eg),(u=eC.prototype).ga=!1,u.T=null,u.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),em(this,"tick"),this.ga&&(eA(this),this.start()))}},u.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},u.N=function(){eC.$.N.call(this),eA(this),delete this.g};class eO extends S{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=ek(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.j);let r=t.h;t.h=null,t.m.apply(null,r)}(this)}N(){super.N(),this.g&&(y.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function eN(e){S.call(this),this.h=e,this.g={}}T(eN,S);var eR=[];function eP(e,t,r,n){Array.isArray(r)||(r&&(eR[0]=r.toString()),r=eR);for(var i=0;i<r.length;i++){var s=function e(t,r,n,i,s){if(i&&i.once)return function e(t,r,n,i,s){if(Array.isArray(r)){for(var o=0;o<r.length;o++)e(t,r[o],n,i,s);return null}return n=ep(n),t&&t[Q]?t.P(r,n,w(i)?!!i.capture:!!i,s):el(t,r,n,!0,i,s)}(t,r,n,i,s);if(Array.isArray(r)){for(var o=0;o<r.length;o++)e(t,r[o],n,i,s);return null}return n=ep(n),t&&t[Q]?t.O(r,n,w(i)?!!i.capture:!!i,s):el(t,r,n,!1,i,s)}(t,r[i],n||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function eD(e){Z(e.g,function(e,t){this.g.hasOwnProperty(t)&&eu(e)},e),e.g={}}function eL(){this.g=!0}function ex(e,t,r,n){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var r=JSON.parse(t);if(r){for(e=0;e<r.length;e++)if(Array.isArray(r[e])){var n=r[e];if(!(2>n.length)){var i=n[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}}return ev(r)}catch(e){return t}}(e,r)+(n?" "+n:"")})}eN.prototype.N=function(){eN.$.N.call(this),eD(this)},eN.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},eL.prototype.Ea=function(){this.g=!1},eL.prototype.info=function(){};var eM={},eU=null;function eF(){return eU=eU||new eg}function eV(e){O.call(this,eM.Ta,e)}function ej(e){let t=eF();em(t,new eV(t))}function eB(e,t){O.call(this,eM.STAT_EVENT,e),this.stat=t}function e$(e){let t=eF();em(t,new eB(t,e))}function eq(e,t){O.call(this,eM.Ua,e),this.size=t}function ez(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return y.setTimeout(function(){e()},t)}eM.Ta="serverreachability",T(eV,O),eM.STAT_EVENT="statevent",T(eB,O),eM.Ua="timingevent",T(eq,O);var eK={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},eH={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function eG(){}function eW(e){return e.h||(e.h=e.i())}function eQ(){}eG.prototype.h=null;var eX={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function eJ(){O.call(this,"d")}function eY(){O.call(this,"c")}function eZ(){}function e0(e,t,r,n){this.l=e,this.j=t,this.m=r,this.W=n||1,this.U=new eN(this),this.P=e2,e=F?125:void 0,this.V=new eC(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new e1}function e1(){this.i=null,this.g="",this.h=!1}T(eJ,O),T(eY,O),T(eZ,eG),eZ.prototype.g=function(){return new XMLHttpRequest},eZ.prototype.i=function(){return{}},o=new eZ;var e2=45e3,e9={},e4={};function e6(e,t,r){e.L=1,e.v=tf(tl(t)),e.s=r,e.S=!0,e5(e,null)}function e5(e,t){e.G=Date.now(),e8(e),e.A=tl(e.v);var r=e.A,n=e.W;Array.isArray(n)||(n=[String(n)]),tC(r.i,"t",n),e.C=0,r=e.l.J,e.h=new e1,e.g=rg(e.l,r?t:null,!e.s),0<e.O&&(e.M=new eO(E(e.Pa,e,e.g),e.O)),eP(e.U,e.g,"readystatechange",e.nb),t=e.I?ee(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),ej(),function(e,t,r,n,i,s){e.info(function(){if(e.g){if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&"type"==h[1]?o+(c+"=")+u+"&":o+(c+"=redacted&")}}else o=null}else o=s;return"XMLHTTP REQ ("+n+") [attempt "+i+"]: "+t+"\n"+r+"\n"+o})}(e.j,e.u,e.A,e.m,e.W,e.s)}function e3(e){return!!e.g&&"GET"==e.u&&2!=e.L&&e.l.Ha}function e7(e,t,r){let n=!0,i;for(;!e.J&&e.C<r.length;)if((i=function(e,t){var r=e.C,n=t.indexOf("\n",r);return -1==n?e4:isNaN(r=Number(t.substring(r,n)))?e9:(n+=1)+r>t.length?e4:(t=t.slice(n,n+r),e.C=n+r,t)}(e,r))==e4){4==t&&(e.o=4,e$(14),n=!1),ex(e.j,e.m,null,"[Incomplete Response]");break}else if(i==e9){e.o=4,e$(15),ex(e.j,e.m,r,"[Invalid Chunk]"),n=!1;break}else ex(e.j,e.m,i,null),ti(e,i);e3(e)&&i!=e4&&i!=e9&&(e.h.g="",e.C=0),4!=t||0!=r.length||e.h.h||(e.o=1,e$(16),n=!1),e.i=e.i&&n,n?0<r.length&&!e.ba&&(e.ba=!0,(t=e.l).g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+r.length),ra(t),t.M=!0,e$(11))):(ex(e.j,e.m,r,"[Invalid Chunked Response]"),tn(e),tr(e))}function e8(e){e.Y=Date.now()+e.P,te(e,e.P)}function te(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=ez(E(e.lb,e),t)}function tt(e){e.B&&(y.clearTimeout(e.B),e.B=null)}function tr(e){0==e.l.H||e.J||rc(e.l,e)}function tn(e){tt(e);var t=e.M;t&&"function"==typeof t.sa&&t.sa(),e.M=null,eA(e.V),eD(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function ti(e,t){try{var r=e.l;if(0!=r.H&&(r.g==e||tD(r.i,e))){if(!e.K&&tD(r.i,e)&&3==r.H){try{var n=r.Ja.g.parse(t)}catch(e){n=null}if(Array.isArray(n)&&3==n.length){var i=n;if(0==i[0]){e:if(!r.u){if(r.g){if(r.g.G+3e3<e.G)ru(r),t8(r);else break e}ro(r),e$(18)}}else r.Fa=i[1],0<r.Fa-r.V&&37500>i[2]&&r.G&&0==r.A&&!r.v&&(r.v=ez(E(r.ib,r),6e3));if(1>=tP(r.i)&&r.oa){try{r.oa()}catch(e){}r.oa=void 0}}else rd(r,11)}else if((e.K||r.g==e)&&ru(r),!R(t))for(i=r.Ja.g.parse(t),t=0;t<i.length;t++){let a=i[t];if(r.V=a[0],a=a[1],2==r.H){if("c"==a[0]){r.K=a[1],r.pa=a[2];let t=a[3];null!=t&&(r.ra=t,r.l.info("VER="+r.ra));let i=a[4];null!=i&&(r.Ga=i,r.l.info("SVER="+r.Ga));let l=a[5];null!=l&&"number"==typeof l&&0<l&&(n=1.5*l,r.L=n,r.l.info("backChannelRequestTimeoutMs_="+n)),n=r;let u=e.g;if(u){let e=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=n.i;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(tL(s,s.h),s.h=null))}if(n.F){let e=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(n.Da=e,td(n.I,n.F,e))}}if(r.H=3,r.h&&r.h.Ba(),r.ca&&(r.S=Date.now()-e.G,r.l.info("Handshake RTT: "+r.S+"ms")),(n=r).wa=rp(n,n.J?n.pa:null,n.Y),e.K){tx(n.i,e);var o=n.L;o&&e.setTimeout(o),e.B&&(tt(e),e8(e)),n.g=e}else rs(n);0<r.j.length&&rt(r)}else"stop"!=a[0]&&"close"!=a[0]||rd(r,7)}else 3==r.H&&("stop"==a[0]||"close"==a[0]?"stop"==a[0]?rd(r,7):t7(r):"noop"!=a[0]&&r.h&&r.h.Aa(a),r.A=0)}}ej(4)}catch(e){}}function ts(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(v(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var r=function(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(v(e)||"string"==typeof e){var t=[];e=e.length;for(var r=0;r<e;r++)t.push(r);return t}for(let n in t=[],r=0,e)t[r++]=n;return t}}}(e),n=function(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(v(e)){for(var t=[],r=e.length,n=0;n<r;n++)t.push(e[n]);return t}for(n in t=[],r=0,e)t[r++]=e[n];return t}(e),i=n.length,s=0;s<i;s++)t.call(void 0,n[s],r&&r[s],e)}(u=e0.prototype).setTimeout=function(e){this.P=e},u.nb=function(e){e=e.target;let t=this.M;t&&3==t2(e)?t.l():this.Pa(e)},u.Pa=function(e){try{if(e==this.g)e:{let c=t2(this.g);var t=this.g.Ia();let h=this.g.da();if(!(3>c)&&(3!=c||F||this.g&&(this.h.h||this.g.ja()||t9(this.g)))){this.J||4!=c||7==t||(8==t||0>=h?ej(3):ej(2)),tt(this);var r=this.g.da();this.ca=r;t:if(e3(this)){var n=t9(this.g);e="";var i=n.length,s=4==t2(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){tn(this),tr(this);var o="";break t}this.h.i=new y.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(n[t],{stream:s&&t==i-1});n.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==r,function(e,t,r,n,i,s,o){e.info(function(){return"XMLHTTP RESP ("+n+") [ attempt "+i+"]: "+t+"\n"+r+"\n"+s+" "+o})}(this.j,this.u,this.A,this.m,this.W,c,r),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!R(a)){var u=a;break t}}u=null}if(r=u)ex(this.j,this.m,r,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ti(this,r);else{this.i=!1,this.o=3,e$(12),tn(this),tr(this);break e}}this.S?(e7(this,c,o),F&&this.i&&3==c&&(eP(this.U,this.V,"tick",this.mb),this.V.start())):(ex(this.j,this.m,o,null),ti(this,o)),4==c&&tn(this),this.i&&!this.J&&(4==c?rc(this.l,this):(this.i=!1,e8(this)))}else(function(e){let t={};e=(e.g&&2<=t2(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let n=0;n<e.length;n++){if(R(e[n]))continue;var r=function(e){var t=1;e=e.split(":");let r=[];for(;0<t&&e.length;)r.push(e.shift()),t--;return e.length&&r.push(e.join(":")),r}(e[n]);let i=r[0];if("string"!=typeof(r=r[1]))continue;r=r.trim();let s=t[i]||[];t[i]=s,s.push(r)}!function(e,t){for(let r in e)t.call(void 0,e[r],r,e)}(t,function(e){return e.join(", ")})})(this.g),400==r&&0<o.indexOf("Unknown SID")?(this.o=3,e$(12)):(this.o=0,e$(13)),tn(this),tr(this)}}}catch(e){}finally{}},u.mb=function(){if(this.g){var e=t2(this.g),t=this.g.ja();this.C<t.length&&(tt(this),e7(this,e,t),this.i&&4!=e&&e8(this))}},u.cancel=function(){this.J=!0,tn(this)},u.lb=function(){this.B=null;let e=Date.now();0<=e-this.Y?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.j,this.A),2!=this.L&&(ej(),e$(17)),tn(this),this.o=2,tr(this)):te(this,this.Y-e)};var to=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ta(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof ta){this.h=e.h,tu(this,e.j),this.s=e.s,this.g=e.g,tc(this,e.m),this.l=e.l;var t=e.i,r=new tE;r.i=t.i,t.g&&(r.g=new Map(t.g),r.h=t.h),th(this,r),this.o=e.o}else e&&(t=String(e).match(to))?(this.h=!1,tu(this,t[1]||"",!0),this.s=tp(t[2]||""),this.g=tp(t[3]||"",!0),tc(this,t[4]),this.l=tp(t[5]||"",!0),th(this,t[6]||"",!0),this.o=tp(t[7]||"")):(this.h=!1,this.i=new tE(null,this.h))}function tl(e){return new ta(e)}function tu(e,t,r){e.j=r?tp(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function tc(e,t){if(t){if(isNaN(t=Number(t))||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function th(e,t,r){var n,i;t instanceof tE?(e.i=t,n=e.i,(i=e.h)&&!n.j&&(tI(n),n.i=null,n.g.forEach(function(e,t){var r=t.toLowerCase();t!=r&&(tT(this,t),tC(this,r,e))},n)),n.j=i):(r||(t=tg(t,t_)),e.i=new tE(t,e.h))}function td(e,t,r){e.i.set(t,r)}function tf(e){return td(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function tp(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function tg(e,t,r){return"string"==typeof e?(e=encodeURI(e).replace(t,tm),r&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function tm(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}ta.prototype.toString=function(){var e=[],t=this.j;t&&e.push(tg(t,ty,!0),":");var r=this.g;return(r||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(tg(t,ty,!0),"@"),e.push(encodeURIComponent(String(r)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(r=this.m)&&e.push(":",String(r))),(r=this.l)&&(this.g&&"/"!=r.charAt(0)&&e.push("/"),e.push(tg(r,"/"==r.charAt(0)?tw:tv,!0))),(r=this.i.toString())&&e.push("?",r),(r=this.o)&&e.push("#",tg(r,tb)),e.join("")};var ty=/[#\/\?@]/g,tv=/[#\?:]/g,tw=/[#\?]/g,t_=/[#\?@]/g,tb=/#/g;function tE(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function tI(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var r=0;r<e.length;r++){var n=e[r].indexOf("="),i=null;if(0<=n){var s=e[r].substring(0,n);i=e[r].substring(n+1)}else s=e[r];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,function(t,r){e.add(decodeURIComponent(t.replace(/\+/g," ")),r)}))}function tT(e,t){tI(e),t=tA(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function tS(e,t){return tI(e),t=tA(e,t),e.g.has(t)}function tC(e,t,r){tT(e,t),0<r.length&&(e.i=null,e.g.set(tA(e,t),A(r)),e.h+=r.length)}function tA(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(u=tE.prototype).add=function(e,t){tI(this),this.i=null,e=tA(this,e);var r=this.g.get(e);return r||this.g.set(e,r=[]),r.push(t),this.h+=1,this},u.forEach=function(e,t){tI(this),this.g.forEach(function(r,n){r.forEach(function(r){e.call(t,r,n,this)},this)},this)},u.ta=function(){tI(this);let e=Array.from(this.g.values()),t=Array.from(this.g.keys()),r=[];for(let n=0;n<t.length;n++){let i=e[n];for(let e=0;e<i.length;e++)r.push(t[n])}return r},u.Z=function(e){tI(this);let t=[];if("string"==typeof e)tS(this,e)&&(t=t.concat(this.g.get(tA(this,e))));else{e=Array.from(this.g.values());for(let r=0;r<e.length;r++)t=t.concat(e[r])}return t},u.set=function(e,t){return tI(this),this.i=null,tS(this,e=tA(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},u.get=function(e,t){return e&&0<(e=this.Z(e)).length?String(e[0]):t},u.toString=function(){if(this.i)return this.i;if(!this.g)return"";let e=[],t=Array.from(this.g.keys());for(var r=0;r<t.length;r++){var n=t[r];let s=encodeURIComponent(String(n)),o=this.Z(n);for(n=0;n<o.length;n++){var i=s;""!==o[n]&&(i+="="+encodeURIComponent(String(o[n]))),e.push(i)}}return this.i=e.join("&")};var tk=class{constructor(e,t){this.g=e,this.map=t}};function tO(e){this.l=e||tN,e=y.PerformanceNavigationTiming?0<(e=y.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):!!(y.g&&y.g.Ka&&y.g.Ka()&&y.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var tN=10;function tR(e){return!!e.h||!!e.g&&e.g.size>=e.j}function tP(e){return e.h?1:e.g?e.g.size:0}function tD(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function tL(e,t){e.g?e.g.add(t):e.h=t}function tx(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function tM(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(let r of e.g.values())t=t.concat(r.F);return t}return A(e.i)}tO.prototype.cancel=function(){if(this.i=tM(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let e of this.g.values())e.cancel();this.g.clear()}};var tU=class{stringify(e){return y.JSON.stringify(e,void 0)}parse(e){return y.JSON.parse(e,void 0)}};function tF(){this.g=new tU}function tV(e,t,r,n,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(n)}catch(e){}}function tj(e){this.l=e.ec||null,this.j=e.ob||!1}function tB(e,t){eg.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=t$,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}T(tj,eG),tj.prototype.g=function(){return new tB(this.l,this.j)},tj.prototype.i=(n={},function(){return n}),T(tB,eg);var t$=0;function tq(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function tz(e){e.readyState=4,e.l=null,e.j=null,e.A=null,tK(e)}function tK(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(u=tB.prototype).open=function(e,t){if(this.readyState!=t$)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,tK(this)},u.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||y).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},u.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,tz(this)),this.readyState=t$},u.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,tK(this)),this.g&&(this.readyState=3,tK(this),this.g))){if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==y.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;tq(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))}},u.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?tz(this):tK(this),3==this.readyState&&tq(this)}},u.Za=function(e){this.g&&(this.response=this.responseText=e,tz(this))},u.Ya=function(e){this.g&&(this.response=e,tz(this))},u.ka=function(){this.g&&tz(this)},u.setRequestHeader=function(e,t){this.v.append(e,t)},u.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},u.getAllResponseHeaders=function(){if(!this.h)return"";let e=[],t=this.h.entries();for(var r=t.next();!r.done;)e.push((r=r.value)[0]+": "+r[1]),r=t.next();return e.join("\r\n")},Object.defineProperty(tB.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var tH=y.JSON.parse;function tG(e){eg.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=tW,this.L=this.M=!1}T(tG,eg);var tW="",tQ=/^https?$/i,tX=["POST","PUT"];function tJ(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,tY(e),t0(e)}function tY(e){e.F||(e.F=!0,em(e,"complete"),em(e,"error"))}function tZ(e){if(e.h&&void 0!==m&&(!e.C[1]||4!=t2(e)||2!=e.da())){if(e.v&&4==t2(e))ek(e.La,0,e);else if(em(e,"readystatechange"),4==t2(e)){e.h=!1;try{let o=e.da();switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t,r,n=!0;break;default:n=!1}if(!(t=n)){if(r=0===o){var i=String(e.I).match(to)[1]||null;!i&&y.self&&y.self.location&&(i=y.self.location.protocol.slice(0,-1)),r=!tQ.test(i?i.toLowerCase():"")}t=r}if(t)em(e,"complete"),em(e,"success");else{e.m=6;try{var s=2<t2(e)?e.g.statusText:""}catch(e){s=""}e.j=s+" ["+e.da()+"]",tY(e)}}finally{t0(e)}}}}function t0(e,t){if(e.g){t1(e);let r=e.g,n=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||em(e,"ready");try{r.onreadystatechange=n}catch(e){}}}function t1(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(y.clearTimeout(e.A),e.A=null)}function t2(e){return e.g?e.g.readyState:0}function t9(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case tW:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function t4(e){let t="";return Z(e,function(e,r){t+=r+":"+e+"\r\n"}),t}function t6(e,t,r){e:{for(n in r){var n=!1;break e}n=!0}n||(r=t4(r),"string"==typeof e?null!=r&&encodeURIComponent(String(r)):td(e,t,r))}function t5(e,t,r){return r&&r.internalChannelParams&&r.internalChannelParams[e]||t}function t3(e){this.Ga=0,this.j=[],this.l=new eL,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=t5("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=t5("baseRetryDelayMs",5e3,e),this.hb=t5("retryDelaySeedMs",1e4,e),this.eb=t5("forwardChannelMaxRetries",2,e),this.xa=t5("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new tO(e&&e.concurrentRequestLimit),this.Ja=new tF,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function t7(e){if(re(e),3==e.H){var t=e.W++,r=tl(e.I);if(td(r,"SID",e.K),td(r,"RID",t),td(r,"TYPE","terminate"),rn(e,r),(t=new e0(e,e.l,t)).L=2,t.v=tf(tl(r)),r=!1,y.navigator&&y.navigator.sendBeacon)try{r=y.navigator.sendBeacon(t.v.toString(),"")}catch(e){}!r&&y.Image&&((new Image).src=t.v,r=!0),r||(t.g=rg(t.l,null),t.g.ha(t.v)),t.G=Date.now(),e8(t)}rf(e)}function t8(e){e.g&&(ra(e),e.g.cancel(),e.g=null)}function re(e){t8(e),e.u&&(y.clearTimeout(e.u),e.u=null),ru(e),e.i.cancel(),e.m&&("number"==typeof e.m&&y.clearTimeout(e.m),e.m=null)}function rt(e){if(!tR(e.i)&&!e.m){e.m=!0;var t=e.Na;eb||eT(),eE||(eb(),eE=!0),eI.add(t,e),e.C=0}}function rr(e,t){var r;r=t?t.m:e.W++;let n=tl(e.I);td(n,"SID",e.K),td(n,"RID",r),td(n,"AID",e.V),rn(e,n),e.o&&e.s&&t6(n,e.o,e.s),r=new e0(e,e.l,r,e.C+1),null===e.o&&(r.I=e.s),t&&(e.j=t.F.concat(e.j)),t=ri(e,r,1e3),r.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),tL(e.i,r),e6(r,n,t)}function rn(e,t){e.na&&Z(e.na,function(e,r){td(t,r,e)}),e.h&&ts({},function(e,r){td(t,r,e)})}function ri(e,t,r){r=Math.min(e.j.length,r);var n=e.h?E(e.h.Va,e.h,e):null;e:{var i=e.j;let t=-1;for(;;){let e=["count="+r];-1==t?0<r?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<r;o++){let r=i[o].g,a=i[o].map;if(0>(r-=t))t=Math.max(0,i[o].g-100),s=!1;else try{!function(e,t,r){let n=r||"";try{ts(e,function(e,r){let i=e;w(e)&&(i=ev(e)),t.push(n+r+"="+encodeURIComponent(i))})}catch(e){throw t.push(n+"type="+encodeURIComponent("_badmap")),e}}(a,e,"req"+r+"_")}catch(e){n&&n(a)}}if(s){n=e.join("&");break e}}}return e=e.j.splice(0,r),t.F=e,n}function rs(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;eb||eT(),eE||(eb(),eE=!0),eI.add(t,e),e.A=0}}function ro(e){return!e.g&&!e.u&&!(3<=e.A)&&(e.ba++,e.u=ez(E(e.Ma,e),rh(e,e.A)),e.A++,!0)}function ra(e){null!=e.B&&(y.clearTimeout(e.B),e.B=null)}function rl(e){e.g=new e0(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=tl(e.wa);td(t,"RID","rpc"),td(t,"SID",e.K),td(t,"AID",e.V),td(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&td(t,"TO",e.qa),td(t,"TYPE","xmlhttp"),rn(e,t),e.o&&e.s&&t6(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var r=e.g;e=e.pa,r.L=1,r.v=tf(tl(t)),r.s=null,r.S=!0,e5(r,e)}function ru(e){null!=e.v&&(y.clearTimeout(e.v),e.v=null)}function rc(e,t){var r=null;if(e.g==t){ru(e),ra(e),e.g=null;var n=2}else{if(!tD(e.i,t))return;r=t.F,tx(e.i,t),n=1}if(0!=e.H){if(t.i){if(1==n){r=t.s?t.s.length:0,t=Date.now()-t.G;var i,s=e.C;em(n=eF(),new eq(n,r)),rt(e)}else rs(e)}else if(3==(s=t.o)||0==s&&0<t.ca||!(1==n&&(i=t,!(tP(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.j=i.F.concat(e.j),!0):1!=e.H&&2!=e.H&&!(e.C>=(e.cb?0:e.eb))&&(e.m=ez(E(e.Na,e,i),rh(e,e.C)),e.C++,!0)))||2==n&&ro(e)))switch(r&&0<r.length&&((t=e.i).i=t.i.concat(r)),s){case 1:rd(e,5);break;case 4:rd(e,10);break;case 3:rd(e,6);break;default:rd(e,2)}}}function rh(e,t){let r=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(r*=2),r*t}function rd(e,t){if(e.l.info("Error code "+t),2==t){var r=null;e.h&&(r=null);var n=E(e.pb,e);r||(r=new ta("//www.google.com/images/cleardot.gif"),y.location&&"http"==y.location.protocol||tu(r,"https"),tf(r)),function(e,t){let r=new eL;if(y.Image){let n=new Image;n.onload=I(tV,r,n,"TestLoadImage: loaded",!0,t),n.onerror=I(tV,r,n,"TestLoadImage: error",!1,t),n.onabort=I(tV,r,n,"TestLoadImage: abort",!1,t),n.ontimeout=I(tV,r,n,"TestLoadImage: timeout",!1,t),y.setTimeout(function(){n.ontimeout&&n.ontimeout()},1e4),n.src=e}else t(!1)}(r.toString(),n)}else e$(2);e.H=0,e.h&&e.h.za(t),rf(e),re(e)}function rf(e){if(e.H=0,e.ma=[],e.h){let t=tM(e.i);(0!=t.length||0!=e.j.length)&&(k(e.ma,t),k(e.ma,e.j),e.i.i.length=0,A(e.j),e.j.length=0),e.h.ya()}}function rp(e,t,r){var n=r instanceof ta?tl(r):new ta(r);if(""!=n.g)t&&(n.g=t+"."+n.g),tc(n,n.m);else{var i=y.location;n=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new ta(null);n&&tu(s,n),t&&(s.g=t),i&&tc(s,i),r&&(s.l=r),n=s}return r=e.F,t=e.Da,r&&t&&td(n,r,t),td(n,"VER",e.ra),rn(e,n),n}function rg(e,t,r){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=new tG(r&&e.Ha&&!e.va?new tj({ob:!0}):e.va)).Oa(e.J),t}function rm(){}function ry(){if(M&&!(10<=Number(H)))throw Error("Environmental error: no available transport.")}function rv(e,t){eg.call(this),this.g=new t3(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!R(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!R(t)&&(this.g.F=t,null!==(e=this.h)&&t in e&&t in(e=this.h)&&delete e[t]),this.j=new rb(this)}function rw(e){eJ.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(let r in t){e=r;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function r_(){eY.call(this),this.status=1}function rb(e){this.g=e}function rE(){this.blockSize=-1,this.blockSize=64,this.g=[,,,,],this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function rI(e,t,r){r||(r=0);var n=Array(16);if("string"==typeof t)for(var i=0;16>i;++i)n[i]=t.charCodeAt(r++)|t.charCodeAt(r++)<<8|t.charCodeAt(r++)<<16|t.charCodeAt(r++)<<24;else for(i=0;16>i;++i)n[i]=t[r++]|t[r++]<<8|t[r++]<<16|t[r++]<<24;t=e.g[0],r=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^r&(i^s))+n[0]+3614090360&4294967295;o=s+(i^(t=r+(o<<7&4294967295|o>>>25))&(r^i))+n[1]+3905402710&4294967295,o=i+(r^(s=t+(o<<12&4294967295|o>>>20))&(t^r))+n[2]+606105819&4294967295,o=r+(t^(i=s+(o<<17&4294967295|o>>>15))&(s^t))+n[3]+3250441966&4294967295,o=t+(s^(r=i+(o<<22&4294967295|o>>>10))&(i^s))+n[4]+4118548399&4294967295,o=s+(i^(t=r+(o<<7&4294967295|o>>>25))&(r^i))+n[5]+1200080426&4294967295,o=i+(r^(s=t+(o<<12&4294967295|o>>>20))&(t^r))+n[6]+2821735955&4294967295,o=r+(t^(i=s+(o<<17&4294967295|o>>>15))&(s^t))+n[7]+4249261313&4294967295,o=t+(s^(r=i+(o<<22&4294967295|o>>>10))&(i^s))+n[8]+1770035416&4294967295,o=s+(i^(t=r+(o<<7&4294967295|o>>>25))&(r^i))+n[9]+2336552879&4294967295,o=i+(r^(s=t+(o<<12&4294967295|o>>>20))&(t^r))+n[10]+4294925233&4294967295,o=r+(t^(i=s+(o<<17&4294967295|o>>>15))&(s^t))+n[11]+2304563134&4294967295,o=t+(s^(r=i+(o<<22&4294967295|o>>>10))&(i^s))+n[12]+1804603682&4294967295,o=s+(i^(t=r+(o<<7&4294967295|o>>>25))&(r^i))+n[13]+4254626195&4294967295,o=i+(r^(s=t+(o<<12&4294967295|o>>>20))&(t^r))+n[14]+2792965006&4294967295,o=r+(t^(i=s+(o<<17&4294967295|o>>>15))&(s^t))+n[15]+1236535329&4294967295,r=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(r^i))+n[1]+4129170786&4294967295,t=r+(o<<5&4294967295|o>>>27),o=s+(r^i&(t^r))+n[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^r&(s^t))+n[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=r+(s^t&(i^s))+n[0]+3921069994&4294967295,r=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(r^i))+n[5]+3593408605&4294967295,t=r+(o<<5&4294967295|o>>>27),o=s+(r^i&(t^r))+n[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^r&(s^t))+n[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=r+(s^t&(i^s))+n[4]+3889429448&4294967295,r=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(r^i))+n[9]+568446438&4294967295,t=r+(o<<5&4294967295|o>>>27),o=s+(r^i&(t^r))+n[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^r&(s^t))+n[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=r+(s^t&(i^s))+n[8]+1163531501&4294967295,r=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(r^i))+n[13]+2850285829&4294967295,t=r+(o<<5&4294967295|o>>>27),o=s+(r^i&(t^r))+n[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^r&(s^t))+n[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=r+(s^t&(i^s))+n[12]+2368359562&4294967295,o=t+((r=i+(o<<20&4294967295|o>>>12))^i^s)+n[5]+4294588738&4294967295,o=s+((t=r+(o<<4&4294967295|o>>>28))^r^i)+n[8]+2272392833&4294967295,o=i+((s=t+(o<<11&4294967295|o>>>21))^t^r)+n[11]+1839030562&4294967295,o=r+((i=s+(o<<16&4294967295|o>>>16))^s^t)+n[14]+4259657740&4294967295,o=t+((r=i+(o<<23&4294967295|o>>>9))^i^s)+n[1]+2763975236&4294967295,o=s+((t=r+(o<<4&4294967295|o>>>28))^r^i)+n[4]+1272893353&4294967295,o=i+((s=t+(o<<11&4294967295|o>>>21))^t^r)+n[7]+4139469664&4294967295,o=r+((i=s+(o<<16&4294967295|o>>>16))^s^t)+n[10]+3200236656&4294967295,o=t+((r=i+(o<<23&4294967295|o>>>9))^i^s)+n[13]+681279174&4294967295,o=s+((t=r+(o<<4&4294967295|o>>>28))^r^i)+n[0]+3936430074&4294967295,o=i+((s=t+(o<<11&4294967295|o>>>21))^t^r)+n[3]+3572445317&4294967295,o=r+((i=s+(o<<16&4294967295|o>>>16))^s^t)+n[6]+76029189&4294967295,o=t+((r=i+(o<<23&4294967295|o>>>9))^i^s)+n[9]+3654602809&4294967295,o=s+((t=r+(o<<4&4294967295|o>>>28))^r^i)+n[12]+3873151461&4294967295,o=i+((s=t+(o<<11&4294967295|o>>>21))^t^r)+n[15]+530742520&4294967295,o=r+((i=s+(o<<16&4294967295|o>>>16))^s^t)+n[2]+3299628645&4294967295,r=i+(o<<23&4294967295|o>>>9),o=t+(i^(r|~s))+n[0]+4096336452&4294967295,t=r+(o<<6&4294967295|o>>>26),o=s+(r^(t|~i))+n[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~r))+n[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=r+(s^(i|~t))+n[5]+4237533241&4294967295,r=i+(o<<21&4294967295|o>>>11),o=t+(i^(r|~s))+n[12]+1700485571&4294967295,t=r+(o<<6&4294967295|o>>>26),o=s+(r^(t|~i))+n[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~r))+n[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=r+(s^(i|~t))+n[1]+2240044497&4294967295,r=i+(o<<21&4294967295|o>>>11),o=t+(i^(r|~s))+n[8]+1873313359&4294967295,t=r+(o<<6&4294967295|o>>>26),o=s+(r^(t|~i))+n[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~r))+n[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=r+(s^(i|~t))+n[13]+1309151649&4294967295,r=i+(o<<21&4294967295|o>>>11),o=t+(i^(r|~s))+n[4]+4149444226&4294967295,t=r+(o<<6&4294967295|o>>>26),o=s+(r^(t|~i))+n[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~r))+n[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=r+(s^(i|~t))+n[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function rT(e,t){this.h=t;for(var r=[],n=!0,i=e.length-1;0<=i;i--){var s=0|e[i];n&&s==t||(r[i]=s,n=!1)}this.g=r}(u=tG.prototype).Oa=function(e){this.M=e},u.ha=function(e,t,r,n){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():o.g(),this.C=this.u?eW(this.u):eW(o),this.g.onreadystatechange=E(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(e){tJ(this,e);return}if(e=r||"",r=new Map(this.headers),n){if(Object.getPrototypeOf(n)===Object.prototype)for(var i in n)r.set(i,n[i]);else if("function"==typeof n.keys&&"function"==typeof n.get)for(let e of n.keys())r.set(e,n.get(e));else throw Error("Unknown input type for opt_headers: "+String(n))}for(let[s,o]of(n=Array.from(r.keys()).find(e=>"content-type"==e.toLowerCase()),i=y.FormData&&e instanceof y.FormData,!(0<=C(tX,t))||n||i||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r))this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{var s;t1(this),0<this.B&&((this.L=(s=this.g,M&&"number"==typeof s.timeout&&void 0!==s.ontimeout))?(this.g.timeout=this.B,this.g.ontimeout=E(this.ua,this)):this.A=ek(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){tJ(this,e)}},u.ua=function(){void 0!==m&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,em(this,"timeout"),this.abort(8))},u.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,em(this,"complete"),em(this,"abort"),t0(this))},u.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),t0(this,!0)),tG.$.N.call(this)},u.La=function(){this.s||(this.G||this.v||this.l?tZ(this):this.kb())},u.kb=function(){tZ(this)},u.isActive=function(){return!!this.g},u.da=function(){try{return 2<t2(this)?this.g.status:-1}catch(e){return -1}},u.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},u.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),tH(t)}},u.Ia=function(){return this.m},u.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(u=t3.prototype).ra=8,u.H=1,u.Na=function(e){if(this.m){if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;let i=new e0(this,this.l,e),s=this.s;if(this.U&&(s?er(s=ee(s),this.U):s=this.U),null!==this.o||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,r=0;r<this.j.length;r++){t:{var n=this.j[r];if("__data__"in n.map&&"string"==typeof(n=n.map.__data__)){n=n.length;break t}n=void 0}if(void 0===n)break;if(4096<(t+=n)){t=r;break e}if(4096===t||r===this.j.length-1){t=r+1;break e}}t=1e3}else t=1e3;t=ri(this,i,t),td(r=tl(this.I),"RID",e),td(r,"CVER",22),this.F&&td(r,"X-HTTP-Session-Id",this.F),rn(this,r),s&&(this.O?t="headers="+encodeURIComponent(String(t4(s)))+"&"+t:this.o&&t6(r,this.o,s)),tL(this.i,i),this.bb&&td(r,"TYPE","init"),this.P?(td(r,"$req",t),td(r,"SID","null"),i.aa=!0,e6(i,r,null)):e6(i,r,t),this.H=2}}else 3==this.H&&(e?rr(this,e):0==this.j.length||tR(this.i)||rr(this))}},u.Ma=function(){if(this.u=null,rl(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=ez(E(this.jb,this),e)}},u.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,e$(10),t8(this),rl(this))},u.ib=function(){null!=this.v&&(this.v=null,t8(this),ro(this),e$(19))},u.pb=function(e){e?(this.l.info("Successfully pinged google.com"),e$(2)):(this.l.info("Failed to ping google.com"),e$(1))},u.isActive=function(){return!!this.h&&this.h.isActive(this)},(u=rm.prototype).Ba=function(){},u.Aa=function(){},u.za=function(){},u.ya=function(){},u.isActive=function(){return!0},u.Va=function(){},ry.prototype.g=function(e,t){return new rv(e,t)},T(rv,eg),rv.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,r=this.h||void 0;e$(0),e.Y=t,e.na=r||{},e.G=e.aa,e.I=rp(e,null,e.Y),rt(e)},rv.prototype.close=function(){t7(this.g)},rv.prototype.u=function(e){var t=this.g;if("string"==typeof e){var r={};r.__data__=e,e=r}else this.v&&((r={}).__data__=ev(e),e=r);t.j.push(new tk(t.fb++,e)),3==t.H&&rt(t)},rv.prototype.N=function(){this.g.h=null,delete this.j,t7(this.g),delete this.g,rv.$.N.call(this)},T(rw,eJ),T(r_,eY),T(rb,rm),rb.prototype.Ba=function(){em(this.g,"a")},rb.prototype.Aa=function(e){em(this.g,new rw(e))},rb.prototype.za=function(e){em(this.g,new r_)},rb.prototype.ya=function(){em(this.g,"b")},T(rE,function(){this.blockSize=-1}),rE.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},rE.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var r=t-this.blockSize,n=this.m,i=this.h,s=0;s<t;){if(0==i)for(;s<=r;)rI(this,e,s),s+=this.blockSize;if("string"==typeof e){for(;s<t;)if(n[i++]=e.charCodeAt(s++),i==this.blockSize){rI(this,n),i=0;break}}else for(;s<t;)if(n[i++]=e[s++],i==this.blockSize){rI(this,n),i=0;break}}this.h=i,this.i+=t},rE.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var r=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&r,r/=256;for(this.j(e),e=Array(16),t=r=0;4>t;++t)for(var n=0;32>n;n+=8)e[r++]=this.g[t]>>>n&255;return e};var rS={};function rC(e){return -128<=e&&128>e?Object.prototype.hasOwnProperty.call(rS,e)?rS[e]:rS[e]=new rT([0|e],0>e?-1:0):new rT([0|e],0>e?-1:0)}function rA(e){if(isNaN(e)||!isFinite(e))return rO;if(0>e)return rL(rA(-e));for(var t=[],r=1,n=0;e>=r;n++)t[n]=e/r|0,r*=rk;return new rT(t,0)}var rk=4294967296,rO=rC(0),rN=rC(1),rR=rC(16777216);function rP(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function rD(e){return -1==e.h}function rL(e){for(var t=e.g.length,r=[],n=0;n<t;n++)r[n]=~e.g[n];return new rT(r,~e.h).add(rN)}function rx(e,t){return e.add(rL(t))}function rM(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function rU(e,t){this.g=e,this.h=t}function rF(e,t){if(rP(t))throw Error("division by zero");if(rP(e))return new rU(rO,rO);if(rD(e))return t=rF(rL(e),t),new rU(rL(t.g),rL(t.h));if(rD(t))return t=rF(e,rL(t)),new rU(rL(t.g),t.h);if(30<e.g.length){if(rD(e)||rD(t))throw Error("slowDivide_ only works with positive integers.");for(var r=rN,n=t;0>=n.X(e);)r=rV(r),n=rV(n);var i=rj(r,1),s=rj(n,1);for(n=rj(n,2),r=rj(r,2);!rP(n);){var o=s.add(n);0>=o.X(e)&&(i=i.add(r),s=o),n=rj(n,1),r=rj(r,1)}return t=rx(e,i.R(t)),new rU(i,t)}for(i=rO;0<=e.X(t);){for(n=48>=(n=Math.ceil(Math.log(r=Math.max(1,Math.floor(e.ea()/t.ea())))/Math.LN2))?1:Math.pow(2,n-48),o=(s=rA(r)).R(t);rD(o)||0<o.X(e);)r-=n,o=(s=rA(r)).R(t);rP(s)&&(s=rN),i=i.add(s),e=rx(e,o)}return new rU(i,e)}function rV(e){for(var t=e.g.length+1,r=[],n=0;n<t;n++)r[n]=e.D(n)<<1|e.D(n-1)>>>31;return new rT(r,e.h)}function rj(e,t){var r=t>>5;t%=32;for(var n=e.g.length-r,i=[],s=0;s<n;s++)i[s]=0<t?e.D(s+r)>>>t|e.D(s+r+1)<<32-t:e.D(s+r);return new rT(i,e.h)}(u=rT.prototype).ea=function(){if(rD(this))return-rL(this).ea();for(var e=0,t=1,r=0;r<this.g.length;r++){var n=this.D(r);e+=(0<=n?n:rk+n)*t,t*=rk}return e},u.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(rP(this))return"0";if(rD(this))return"-"+rL(this).toString(e);for(var t=rA(Math.pow(e,6)),r=this,n="";;){var i=rF(r,t).g,s=((0<(r=rx(r,i.R(t))).g.length?r.g[0]:r.h)>>>0).toString(e);if(rP(r=i))return s+n;for(;6>s.length;)s="0"+s;n=s+n}},u.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},u.X=function(e){return rD(e=rx(this,e))?-1:rP(e)?0:1},u.abs=function(){return rD(this)?rL(this):this},u.add=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],n=0,i=0;i<=t;i++){var s=n+(65535&this.D(i))+(65535&e.D(i)),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);n=o>>>16,s&=65535,o&=65535,r[i]=o<<16|s}return new rT(r,-2147483648&r[r.length-1]?-1:0)},u.R=function(e){if(rP(this)||rP(e))return rO;if(rD(this))return rD(e)?rL(this).R(rL(e)):rL(rL(this).R(e));if(rD(e))return rL(this.R(rL(e)));if(0>this.X(rR)&&0>e.X(rR))return rA(this.ea()*e.ea());for(var t=this.g.length+e.g.length,r=[],n=0;n<2*t;n++)r[n]=0;for(n=0;n<this.g.length;n++)for(var i=0;i<e.g.length;i++){var s=this.D(n)>>>16,o=65535&this.D(n),a=e.D(i)>>>16,l=65535&e.D(i);r[2*n+2*i]+=o*l,rM(r,2*n+2*i),r[2*n+2*i+1]+=s*l,rM(r,2*n+2*i+1),r[2*n+2*i+1]+=o*a,rM(r,2*n+2*i+1),r[2*n+2*i+2]+=s*a,rM(r,2*n+2*i+2)}for(n=0;n<t;n++)r[n]=r[2*n+1]<<16|r[2*n];for(n=t;n<2*t;n++)r[n]=0;return new rT(r,0)},u.gb=function(e){return rF(this,e).h},u.and=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],n=0;n<t;n++)r[n]=this.D(n)&e.D(n);return new rT(r,this.h&e.h)},u.or=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],n=0;n<t;n++)r[n]=this.D(n)|e.D(n);return new rT(r,this.h|e.h)},u.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],n=0;n<t;n++)r[n]=this.D(n)^e.D(n);return new rT(r,this.h^e.h)},ry.prototype.createWebChannel=ry.prototype.g,rv.prototype.send=rv.prototype.u,rv.prototype.open=rv.prototype.m,rv.prototype.close=rv.prototype.close,eK.NO_ERROR=0,eK.TIMEOUT=8,eK.HTTP_ERROR=6,eH.COMPLETE="complete",eQ.EventType=eX,eX.OPEN="a",eX.CLOSE="b",eX.ERROR="c",eX.MESSAGE="d",eg.prototype.listen=eg.prototype.O,tG.prototype.listenOnce=tG.prototype.P,tG.prototype.getLastError=tG.prototype.Sa,tG.prototype.getLastErrorCode=tG.prototype.Ia,tG.prototype.getStatus=tG.prototype.da,tG.prototype.getResponseJson=tG.prototype.Wa,tG.prototype.getResponseText=tG.prototype.ja,tG.prototype.send=tG.prototype.ha,tG.prototype.setWithCredentials=tG.prototype.Oa,rE.prototype.digest=rE.prototype.l,rE.prototype.reset=rE.prototype.reset,rE.prototype.update=rE.prototype.j,rT.prototype.add=rT.prototype.add,rT.prototype.multiply=rT.prototype.R,rT.prototype.modulo=rT.prototype.gb,rT.prototype.compare=rT.prototype.X,rT.prototype.toNumber=rT.prototype.ea,rT.prototype.toString=rT.prototype.toString,rT.prototype.getBits=rT.prototype.D,rT.fromNumber=rA,rT.fromString=function e(t,r){if(0==t.length)throw Error("number format error: empty string");if(2>(r=r||10)||36<r)throw Error("radix out of range: "+r);if("-"==t.charAt(0))return rL(e(t.substring(1),r));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=rA(Math.pow(r,8)),i=rO,s=0;s<t.length;s+=8){var o=Math.min(8,t.length-s),a=parseInt(t.substring(s,s+o),r);8>o?(o=rA(Math.pow(r,o)),i=i.R(o).add(rA(a))):i=(i=i.R(n)).add(rA(a))}return i};var rB=g.createWebChannelTransport=function(){return new ry},r$=g.getStatEventTarget=function(){return eF()},rq=g.ErrorCode=eK,rz=g.EventType=eH,rK=g.Event=eM,rH=g.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20};g.FetchXmlHttpFactory=tj;var rG=g.WebChannel=eQ,rW=g.XhrIo=tG,rQ=g.Md5=rE,rX=g.Integer=rT;r(3454);let rJ="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rY{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}rY.UNAUTHENTICATED=new rY(null),rY.GOOGLE_CREDENTIALS=new rY("google-credentials-uid"),rY.FIRST_PARTY=new rY("first-party-uid"),rY.MOCK_USER=new rY("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rZ="10.4.0",r0=new d.Yd("@firebase/firestore");function r1(){return r0.logLevel}function r2(e,...t){if(r0.logLevel<=d.in.DEBUG){let r=t.map(r6);r0.debug(`Firestore (${rZ}): ${e}`,...r)}}function r9(e,...t){if(r0.logLevel<=d.in.ERROR){let r=t.map(r6);r0.error(`Firestore (${rZ}): ${e}`,...r)}}function r4(e,...t){if(r0.logLevel<=d.in.WARN){let r=t.map(r6);r0.warn(`Firestore (${rZ}): ${e}`,...r)}}function r6(e){if("string"==typeof e)return e;try{/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r5(e="Unexpected state"){let t=`FIRESTORE (${rZ}) INTERNAL ASSERTION FAILED: `+e;throw r9(t),Error(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let r3={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class r7 extends f.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r8{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class nt{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(rY.UNAUTHENTICATED))}shutdown(){}}class nr{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class nn{constructor(e){this.t=e,this.currentUser=rY.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i,n=e=>this.i!==r?(r=this.i,t(e)):Promise.resolve(),i=new r8;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new r8,e.enqueueRetryable(()=>n(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await n(this.currentUser)})},o=e=>{r2("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?o(e):(r2("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new r8)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(r2("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||r5(),new ne(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||r5(),new rY(e)}}class ni{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=rY.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);let e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ns{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new ni(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(rY.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class no{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class na{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){let r=e=>{null!=e.error&&r2("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let r=e.token!==this.R;return this.R=e.token,r2("FirebaseAppCheckTokenProvider",`Received ${r?"new":"existing"} token.`),r?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>r(t))};let n=e=>{r2("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit(e=>n(e)),setTimeout(()=>{if(!this.appCheck){let e=this.A.getImmediate({optional:!0});e?n(e):r2("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||r5(),this.R=e.token,new no(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{static V(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,r="";for(;r.length<20;){let n=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),r=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(r);else for(let t=0;t<e;t++)r[t]=Math.floor(256*Math.random());return r}(40);for(let i=0;i<n.length;++i)r.length<20&&n[i]<t&&(r+=e.charAt(n[i]%e.length))}return r}}function nu(e,t){return e<t?-1:e>t?1:0}function nc(e,t,r){return e.length===t.length&&e.every((e,n)=>r(e,t[n]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new r7(r3.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new r7(r3.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return nh.fromMillis(Date.now())}static fromDate(e){return nh.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new nh(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?nu(this.nanoseconds,e.nanoseconds):nu(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(e){this.timestamp=e}static fromTimestamp(e){return new nd(e)}static min(){return new nd(new nh(0,0))}static max(){return new nd(new nh(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e,t,r){void 0===t?t=0:t>e.length&&r5(),void 0===r?r=e.length-t:r>e.length-t&&r5(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return 0===nf.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof nf?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let r=Math.min(e.length,t.length);for(let n=0;n<r;n++){let r=e.get(n),i=t.get(n);if(r<i)return -1;if(r>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class np extends nf{construct(e,t,r){return new np(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){let t=[];for(let r of e){if(r.indexOf("//")>=0)throw new r7(r3.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(e=>e.length>0))}return new np(t)}static emptyPath(){return new np([])}}let ng=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nm extends nf{construct(e,t,r){return new nm(e,t,r)}static isValidIdentifier(e){return ng.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nm.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new nm(["__name__"])}static fromServerFormat(e){let t=[],r="",n=0,i=()=>{if(0===r.length)throw new r7(r3.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""},s=!1;for(;n<e.length;){let t=e[n];if("\\"===t){if(n+1===e.length)throw new r7(r3.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[n+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new r7(r3.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=t,n+=2}else"`"===t?s=!s:"."!==t||s?r+=t:i(),n++}if(i(),s)throw new r7(r3.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nm(t)}static emptyPath(){return new nm([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e){this.path=e}static fromPath(e){return new ny(np.fromString(e))}static fromName(e){return new ny(np.fromString(e).popFirst(5))}static empty(){return new ny(np.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===np.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return np.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ny(new np(e.slice()))}}class nv{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new nv(nd.min(),ny.empty(),-1)}static max(){return new nv(nd.max(),ny.empty(),-1)}}class nw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n_(e){if(e.code!==r3.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;r2("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&r5(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new nb((r,n)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(r,n)},this.catchCallback=e=>{this.wrapFailure(t,e).next(r,n)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof nb?t:nb.resolve(t)}catch(e){return nb.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):nb.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):nb.reject(t)}static resolve(e){return new nb((t,r)=>{t(e)})}static reject(e){return new nb((t,r)=>{r(e)})}static waitFor(e){return new nb((t,r)=>{let n=0,i=0,s=!1;e.forEach(e=>{++n,e.next(()=>{++i,s&&i===n&&t()},e=>r(e))}),s=!0,i===n&&t()})}static or(e){let t=nb.resolve(!1);for(let r of e)t=t.next(e=>e?nb.resolve(e):r());return t}static forEach(e,t){let r=[];return e.forEach((e,n)=>{r.push(t.call(this,e,n))}),this.waitFor(r)}static mapArray(e,t){return new nb((r,n)=>{let i=e.length,s=Array(i),o=0;for(let a=0;a<i;a++){let l=a;t(e[l]).next(e=>{s[l]=e,++o===i&&r(s)},e=>n(e))}})}static doWhile(e,t){return new nb((r,n)=>{let i=()=>{!0===e()?t().next(()=>{i()},n):r()};i()})}}function nE(e){return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.oe(e),this._e=e=>t.writeSequenceNumber(e))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this._e&&this._e(e),e}}function nT(e){return 0===e&&1/e==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nS(e){let t=0;for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t++;return t}function nC(e,t){for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t(r,e[r])}function nA(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}nI.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(e,t){this.comparator=e,this.root=t||nN.EMPTY}insert(e,t){return new nk(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,nN.BLACK,null,null))}remove(e){return new nk(this.comparator,this.root.remove(e,this.comparator).copy(null,null,nN.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let r=this.comparator(e,t.key);if(0===r)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){let n=this.comparator(e,r.key);if(0===n)return t+r.left.size;n<0?r=r.left:(t+=r.left.size+1,r=r.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){let e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new nO(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new nO(this.root,e,this.comparator,!1)}getReverseIterator(){return new nO(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new nO(this.root,e,this.comparator,!0)}}class nO{constructor(e,t,r,n){this.isReverse=n,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&n&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class nN{constructor(e,t,r,n,i){this.key=e,this.value=t,this.color=null!=r?r:nN.RED,this.left=null!=n?n:nN.EMPTY,this.right=null!=i?i:nN.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,n,i){return new nN(null!=e?e:this.key,null!=t?t:this.value,null!=r?r:this.color,null!=n?n:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let n=this,i=r(e,n.key);return(n=i<0?n.copy(null,null,null,n.left.insert(e,t,r),null):0===i?n.copy(null,t,null,null,null):n.copy(null,null,null,null,n.right.insert(e,t,r))).fixUp()}removeMin(){if(this.left.isEmpty())return nN.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let r,n=this;if(0>t(e,n.key))n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),0===t(e,n.key)){if(n.right.isEmpty())return nN.EMPTY;r=n.right.min(),n=n.copy(r.key,r.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,nN.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,nN.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw r5();let e=this.left.check();if(e!==this.right.check())throw r5();return e+(this.isRed()?0:1)}}nN.EMPTY=null,nN.RED=!0,nN.BLACK=!1,nN.EMPTY=new class{constructor(){this.size=0}get key(){throw r5()}get value(){throw r5()}get color(){throw r5()}get left(){throw r5()}get right(){throw r5()}copy(e,t,r,n,i){return this}insert(e,t,r){return new nN(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e){this.comparator=e,this.data=new nk(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){let r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){let n=r.getNext();if(this.comparator(n.key,e[1])>=0)return;t(n.key)}}forEachWhile(e,t){let r;for(r=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new nP(this.data.getIterator())}getIteratorFrom(e){return new nP(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof nR)||this.size!==e.size)return!1;let t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,n=r.getNext().key;if(0!==this.comparator(e,n))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new nR(this.comparator);return t.data=e,t}}class nP{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{constructor(e){this.fields=e,e.sort(nm.comparator)}static empty(){return new nD([])}unionWith(e){let t=new nR(nm.comparator);for(let e of this.fields)t=t.add(e);for(let r of e)t=t.add(r);return new nD(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return nc(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nL extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nx{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new nL("Invalid base64 string: "+e):e}}(e);return new nx(t)}static fromUint8Array(e){let t=function(e){let t="";for(let r=0;r<e.length;++r)t+=String.fromCharCode(e[r]);return t}(e);return new nx(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return nu(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}nx.EMPTY_BYTE_STRING=new nx("");let nM=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function nU(e){if(e||r5(),"string"==typeof e){let t=0,r=nM.exec(e);if(r||r5(),r[1]){let e=r[1];t=Number(e=(e+"000000000").substr(0,9))}let n=new Date(e);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:nF(e.seconds),nanos:nF(e.nanos)}}function nF(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function nV(e){return"string"==typeof e?nx.fromBase64String(e):nx.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nj(e){var t,r;return"server_timestamp"===(null===(r=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===r?void 0:r.stringValue)}function nB(e){let t=e.mapValue.fields.__previous_value__;return nj(t)?nB(t):t}function n$(e){let t=nU(e.mapValue.fields.__local_write_time__.timestampValue);return new nh(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nq{constructor(e,t,r,n,i,s,o,a,l){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=n,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=l}}class nz{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new nz("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof nz&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nK={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function nH(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?nj(e)?4:n6(e)?9007199254740991:10:r5()}function nG(e,t){if(e===t)return!0;let r=nH(e);if(r!==nH(t))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return n$(e).isEqual(n$(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let r=nU(e.timestampValue),n=nU(t.timestampValue);return r.seconds===n.seconds&&r.nanos===n.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return nV(e.bytesValue).isEqual(nV(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return nF(e.geoPointValue.latitude)===nF(t.geoPointValue.latitude)&&nF(e.geoPointValue.longitude)===nF(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return nF(e.integerValue)===nF(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let r=nF(e.doubleValue),n=nF(t.doubleValue);return r===n?nT(r)===nT(n):isNaN(r)&&isNaN(n)}return!1}(e,t);case 9:return nc(e.arrayValue.values||[],t.arrayValue.values||[],nG);case 10:return function(e,t){let r=e.mapValue.fields||{},n=t.mapValue.fields||{};if(nS(r)!==nS(n))return!1;for(let e in r)if(r.hasOwnProperty(e)&&(void 0===n[e]||!nG(r[e],n[e])))return!1;return!0}(e,t);default:return r5()}}function nW(e,t){return void 0!==(e.values||[]).find(e=>nG(e,t))}function nQ(e,t){if(e===t)return 0;let r=nH(e),n=nH(t);if(r!==n)return nu(r,n);switch(r){case 0:case 9007199254740991:return 0;case 1:return nu(e.booleanValue,t.booleanValue);case 2:return function(e,t){let r=nF(e.integerValue||e.doubleValue),n=nF(t.integerValue||t.doubleValue);return r<n?-1:r>n?1:r===n?0:isNaN(r)?isNaN(n)?0:-1:1}(e,t);case 3:return nX(e.timestampValue,t.timestampValue);case 4:return nX(n$(e),n$(t));case 5:return nu(e.stringValue,t.stringValue);case 6:return function(e,t){let r=nV(e),n=nV(t);return r.compareTo(n)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let r=e.split("/"),n=t.split("/");for(let e=0;e<r.length&&e<n.length;e++){let t=nu(r[e],n[e]);if(0!==t)return t}return nu(r.length,n.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let r=nu(nF(e.latitude),nF(t.latitude));return 0!==r?r:nu(nF(e.longitude),nF(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){let r=e.values||[],n=t.values||[];for(let e=0;e<r.length&&e<n.length;++e){let t=nQ(r[e],n[e]);if(t)return t}return nu(r.length,n.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===nK.mapValue&&t===nK.mapValue)return 0;if(e===nK.mapValue)return 1;if(t===nK.mapValue)return -1;let r=e.fields||{},n=Object.keys(r),i=t.fields||{},s=Object.keys(i);n.sort(),s.sort();for(let e=0;e<n.length&&e<s.length;++e){let t=nu(n[e],s[e]);if(0!==t)return t;let o=nQ(r[n[e]],i[s[e]]);if(0!==o)return o}return nu(n.length,s.length)}(e.mapValue,t.mapValue);default:throw r5()}}function nX(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return nu(e,t);let r=nU(e),n=nU(t),i=nu(r.seconds,n.seconds);return 0!==i?i:nu(r.nanos,n.nanos)}function nJ(e){var t,r;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=nU(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?nV(e.bytesValue).toBase64():"referenceValue"in e?(t=e.referenceValue,ny.fromName(t).toString()):"geoPointValue"in e?(r=e.geoPointValue,`geo(${r.latitude},${r.longitude})`):"arrayValue"in e?function(e){let t="[",r=!0;for(let n of e.values||[])r?r=!1:t+=",",t+=nJ(n);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),r="{",n=!0;for(let i of t)n?n=!1:r+=",",r+=`${i}:${nJ(e.fields[i])}`;return r+"}"}(e.mapValue):r5()}function nY(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function nZ(e){return!!e&&"integerValue"in e}function n0(e){return!!e&&"arrayValue"in e}function n1(e){return!!e&&"nullValue"in e}function n2(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function n9(e){return!!e&&"mapValue"in e}function n4(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return nC(e.mapValue.fields,(e,r)=>t.mapValue.fields[e]=n4(r)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let r=0;r<(e.arrayValue.values||[]).length;++r)t.arrayValue.values[r]=n4(e.arrayValue.values[r]);return t}return Object.assign({},e)}function n6(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n5{constructor(e){this.value=e}static empty(){return new n5({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(!n9(t=(t.mapValue.fields||{})[e.get(r)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=n4(t)}setAll(e){let t=nm.emptyPath(),r={},n=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let e=this.getFieldsMap(t);this.applyChanges(e,r,n),r={},n=[],t=i.popLast()}e?r[i.lastSegment()]=n4(e):n.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,r,n)}delete(e){let t=this.field(e.popLast());n9(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return nG(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let n=t.mapValue.fields[e.get(r)];n9(n)&&n.mapValue.fields||(n={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=n),t=n}return t.mapValue.fields}applyChanges(e,t,r){for(let n of(nC(t,(t,r)=>e[t]=r),r))delete e[n]}clone(){return new n5(n4(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n3{constructor(e,t,r,n,i,s,o){this.key=e,this.documentType=t,this.version=r,this.readTime=n,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new n3(e,0,nd.min(),nd.min(),nd.min(),n5.empty(),0)}static newFoundDocument(e,t,r,n){return new n3(e,1,t,nd.min(),r,n,0)}static newNoDocument(e,t){return new n3(e,2,t,nd.min(),nd.min(),n5.empty(),0)}static newUnknownDocument(e,t){return new n3(e,3,t,nd.min(),nd.min(),n5.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(nd.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=n5.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=n5.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=nd.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof n3&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new n3(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n7{constructor(e,t){this.position=e,this.inclusive=t}}function n8(e,t,r){let n=0;for(let i=0;i<e.position.length;i++){let s=t[i],o=e.position[i];if(n=s.field.isKeyField()?ny.comparator(ny.fromName(o.referenceValue),r.key):nQ(o,r.data.field(s.field)),"desc"===s.dir&&(n*=-1),0!==n)break}return n}function ie(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let r=0;r<e.position.length;r++)if(!nG(e.position[r],t.position[r]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{}class ii extends ir{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,r):new il(e,t,r):"array-contains"===t?new id(e,r):"in"===t?new ip(e,r):"not-in"===t?new ig(e,r):"array-contains-any"===t?new im(e,r):new ii(e,t,r)}static createKeyFieldInFilter(e,t,r){return"in"===t?new iu(e,r):new ic(e,r)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(nQ(t,this.value)):null!==t&&nH(this.value)===nH(t)&&this.matchesComparison(nQ(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return r5()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class is extends ir{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new is(e,t)}matches(e){return io(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ce||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){let e=this.le(e=>e.isInequality());return null!==e?e.field:null}le(e){for(let t of this.getFlattenedFilters())if(e(t))return t;return null}}function io(e){return"and"===e.op}function ia(e){for(let t of e.filters)if(t instanceof is)return!1;return!0}class il extends ii{constructor(e,t,r){super(e,t,r),this.key=ny.fromName(r.referenceValue)}matches(e){let t=ny.comparator(e.key,this.key);return this.matchesComparison(t)}}class iu extends ii{constructor(e,t){super(e,"in",t),this.keys=ih("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class ic extends ii{constructor(e,t){super(e,"not-in",t),this.keys=ih("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function ih(e,t){var r;return((null===(r=t.arrayValue)||void 0===r?void 0:r.values)||[]).map(e=>ny.fromName(e.referenceValue))}class id extends ii{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return n0(t)&&nW(t.arrayValue,this.value)}}class ip extends ii{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&nW(this.value.arrayValue,t)}}class ig extends ii{constructor(e,t){super(e,"not-in",t)}matches(e){if(nW(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!nW(this.value.arrayValue,t)}}class im extends ii{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!n0(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>nW(this.value.arrayValue,e))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(e,t=null,r=[],n=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=n,this.limit=i,this.startAt=s,this.endAt=o,this.he=null}}function iv(e,t=null,r=[],n=[],i=null,s=null,o=null){return new iy(e,t,r,n,i,s,o)}function iw(e){if(null===e.he){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:"+e.filters.map(e=>(function e(t){if(t instanceof ii)return t.field.canonicalString()+t.op.toString()+nJ(t.value);if(ia(t)&&io(t))return t.filters.map(t=>e(t)).join(",");{let r=t.filters.map(t=>e(t)).join(",");return`${t.op}(${r})`}})(e)).join(",")+"|ob:"+e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==e.limit||(t+="|l:"+e.limit),e.startAt&&(t+="|lb:"+(e.startAt.inclusive?"b:":"a:")+e.startAt.position.map(e=>nJ(e)).join(",")),e.endAt&&(t+="|ub:"+(e.endAt.inclusive?"a:":"b:")+e.endAt.position.map(e=>nJ(e)).join(",")),e.he=t}return e.he}function i_(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++){var r,n;if(r=e.orderBy[i],n=t.orderBy[i],!(r.dir===n.dir&&r.field.isEqual(n.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let r=0;r<e.filters.length;r++)if(!function e(t,r){return t instanceof ii?r instanceof ii&&t.op===r.op&&t.field.isEqual(r.field)&&nG(t.value,r.value):t instanceof is?r instanceof is&&t.op===r.op&&t.filters.length===r.filters.length&&t.filters.reduce((t,n,i)=>t&&e(n,r.filters[i]),!0):void r5()}(e.filters[r],t.filters[r]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!ie(e.startAt,t.startAt)&&ie(e.endAt,t.endAt)}function ib(e){return ny.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e,t=null,r=[],n=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=n,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.Pe=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function iI(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function iT(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function iS(e){for(let t of e.filters){let e=t.getFirstInequalityField();if(null!==e)return e}return null}function iC(e){return null!==e.collectionGroup}function iA(e){if(null===e.Pe){e.Pe=[];let t=iS(e),r=iT(e);if(null!==t&&null===r)t.isKeyField()||e.Pe.push(new it(t)),e.Pe.push(new it(nm.keyField(),"asc"));else{let t=!1;for(let r of e.explicitOrderBy)e.Pe.push(r),r.field.isKeyField()&&(t=!0);if(!t){let t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new it(nm.keyField(),t))}}}return e.Pe}function ik(e){return e.Ie||(e.Ie=function(e,t){if("F"===e.limitType)return iv(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{let t="desc"===e.dir?"asc":"desc";return new it(e.field,t)});let r=e.endAt?new n7(e.endAt.position,e.endAt.inclusive):null,n=e.startAt?new n7(e.startAt.position,e.startAt.inclusive):null;return iv(e.path,e.collectionGroup,t,e.filters,e.limit,r,n)}}(e,iA(e))),e.Ie}function iO(e,t){t.getFirstInequalityField(),iS(e);let r=e.filters.concat([t]);return new iE(e.path,e.collectionGroup,e.explicitOrderBy.slice(),r,e.limit,e.limitType,e.startAt,e.endAt)}function iN(e,t,r){return new iE(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,r,e.startAt,e.endAt)}function iR(e,t){return i_(ik(e),ik(t))&&e.limitType===t.limitType}function iP(e){return`${iw(ik(e))}|lt:${e.limitType}`}function iD(e){var t;let r;return`Query(target=${r=(t=ik(e)).path.canonicalString(),null!==t.collectionGroup&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof ii?`${t.field.canonicalString()} ${t.op} ${nJ(t.value)}`:t instanceof is?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==t.limit||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(r+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>nJ(e)).join(",")),t.endAt&&(r+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>nJ(e)).join(",")),`Target(${r})`}; limitType=${e.limitType})`}function iL(e,t){return t.isFoundDocument()&&function(e,t){let r=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(r):ny.isDocumentKey(e.path)?e.path.isEqual(r):e.path.isImmediateParentOf(r)}(e,t)&&function(e,t){for(let r of iA(e))if(!r.field.isKeyField()&&null===t.data.field(r.field))return!1;return!0}(e,t)&&function(e,t){for(let r of e.filters)if(!r.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,r){let n=n8(e,t,r);return e.inclusive?n<=0:n<0}(e.startAt,iA(e),t))&&(!e.endAt||!!function(e,t,r){let n=n8(e,t,r);return e.inclusive?n>=0:n>0}(e.endAt,iA(e),t))}function ix(e){return(t,r)=>{let n=!1;for(let i of iA(e)){let e=function(e,t,r){let n=e.field.isKeyField()?ny.comparator(t.key,r.key):function(e,t,r){let n=t.data.field(e),i=r.data.field(e);return null!==n&&null!==i?nQ(n,i):r5()}(e.field,t,r);switch(e.dir){case"asc":return n;case"desc":return -1*n;default:return r5()}}(i,t,r);if(0!==e)return e;n=n||i.field.isKeyField()}return 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iM{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),r=this.inner[t];if(void 0!==r){for(let[t,n]of r)if(this.equalsFn(t,e))return n}}has(e){return void 0!==this.get(e)}set(e,t){let r=this.mapKeyFn(e),n=this.inner[r];if(void 0===n)return this.inner[r]=[[e,t]],void this.innerSize++;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return void(n[r]=[e,t]);n.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),r=this.inner[t];if(void 0===r)return!1;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return 1===r.length?delete this.inner[t]:r.splice(n,1),this.innerSize--,!0;return!1}forEach(e){nC(this.inner,(t,r)=>{for(let[t,n]of r)e(t,n)})}isEmpty(){return nA(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iU=new nk(ny.comparator),iF=new nk(ny.comparator);function iV(...e){let t=iF;for(let r of e)t=t.insert(r.key,r);return t}function ij(e){let t=iF;return e.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function iB(){return new iM(e=>e.toString(),(e,t)=>e.isEqual(t))}let i$=new nk(ny.comparator),iq=new nR(ny.comparator);function iz(...e){let t=iq;for(let r of e)t=t.add(r);return t}let iK=new nR(nu);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iH(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:nT(t)?"-0":t}}function iG(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iW{constructor(){this._=void 0}}function iQ(e,t){return e instanceof i1?nZ(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class iX extends iW{}class iJ extends iW{constructor(e){super(),this.elements=e}}function iY(e,t){let r=i9(t);for(let t of e.elements)r.some(e=>nG(e,t))||r.push(t);return{arrayValue:{values:r}}}class iZ extends iW{constructor(e){super(),this.elements=e}}function i0(e,t){let r=i9(t);for(let t of e.elements)r=r.filter(e=>!nG(e,t));return{arrayValue:{values:r}}}class i1 extends iW{constructor(e,t){super(),this.serializer=e,this.Te=t}}function i2(e){return nF(e.integerValue||e.doubleValue)}function i9(e){return n0(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class i4{constructor(e,t){this.version=e,this.transformResults=t}}class i6{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new i6}static exists(e){return new i6(void 0,e)}static updateTime(e){return new i6(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function i5(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class i3{}function i7(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new so(e.key,i6.none()):new st(e.key,e.data,i6.none());{let r=e.data,n=n5.empty(),i=new nR(nm.comparator);for(let e of t.fields)if(!i.has(e)){let t=r.field(e);null===t&&e.length>1&&(e=e.popLast(),t=r.field(e)),null===t?n.delete(e):n.set(e,t),i=i.add(e)}return new sr(e.key,n,new nD(i.toArray()),i6.none())}}function i8(e,t,r,n){return e instanceof st?function(e,t,r,n){if(!i5(e.precondition,t))return r;let i=e.value.clone(),s=ss(e.fieldTransforms,n,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,r,n):e instanceof sr?function(e,t,r,n){if(!i5(e.precondition,t))return r;let i=ss(e.fieldTransforms,n,t),s=t.data;return(s.setAll(sn(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===r)?null:r.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,r,n):i5(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):r}function se(e,t){var r,n;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(r=e.fieldTransforms,n=t.fieldTransforms,!!(void 0===r&&void 0===n||!(!r||!n)&&nc(r,n,(e,t)=>{var r,n;return e.field.isEqual(t.field)&&(r=e.transform,n=t.transform,r instanceof iJ&&n instanceof iJ||r instanceof iZ&&n instanceof iZ?nc(r.elements,n.elements,nG):r instanceof i1&&n instanceof i1?nG(r.Te,n.Te):r instanceof iX&&n instanceof iX)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class st extends i3{constructor(e,t,r,n=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=n,this.type=0}getFieldMask(){return null}}class sr extends i3{constructor(e,t,r,n,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=n,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function sn(e){let t=new Map;return e.fieldMask.fields.forEach(r=>{if(!r.isEmpty()){let n=e.data.field(r);t.set(r,n)}}),t}function si(e,t,r){var n;let i=new Map;e.length===r.length||r5();for(let s=0;s<r.length;s++){let o=e[s],a=o.transform,l=t.data.field(o.field);i.set(o.field,(n=r[s],a instanceof iJ?iY(a,l):a instanceof iZ?i0(a,l):n))}return i}function ss(e,t,r){let n=new Map;for(let i of e){let e=i.transform,s=r.data.field(i.field);n.set(i.field,e instanceof iX?function(e,t){let r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&nj(t)&&(t=nB(t)),t&&(r.fields.__previous_value__=t),{mapValue:r}}(t,s):e instanceof iJ?iY(e,s):e instanceof iZ?i0(e,s):function(e,t){let r=iQ(e,t),n=i2(r)+i2(e.Te);return nZ(r)&&nZ(e.Te)?iG(n):iH(e.serializer,n)}(e,s))}return n}class so extends i3{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class sa extends i3{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e,t,r,n){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=n}applyToRemoteDocument(e,t){let r=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let i=this.mutations[t];if(i.key.isEqual(e.key)){var n;n=r[t],i instanceof st?function(e,t,r){let n=e.value.clone(),i=si(e.fieldTransforms,t,r.transformResults);n.setAll(i),t.convertToFoundDocument(r.version,n).setHasCommittedMutations()}(i,e,n):i instanceof sr?function(e,t,r){if(!i5(e.precondition,t))return void t.convertToUnknownDocument(r.version);let n=si(e.fieldTransforms,t,r.transformResults),i=t.data;i.setAll(sn(e)),i.setAll(n),t.convertToFoundDocument(r.version,i).setHasCommittedMutations()}(i,e,n):function(e,t,r){t.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}}}applyToLocalView(e,t){for(let r of this.baseMutations)r.key.isEqual(e.key)&&(t=i8(r,e,t,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(e.key)&&(t=i8(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let r=iB();return this.mutations.forEach(n=>{let i=e.get(n.key),s=i.overlayedDocument,o=this.applyToLocalView(s,i.mutatedFields);o=t.has(n.key)?null:o;let a=i7(s,o);null!==a&&r.set(n.key,a),s.isValidDocument()||s.convertToNoDocument(nd.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),iz())}isEqual(e){return this.batchId===e.batchId&&nc(this.mutations,e.mutations,(e,t)=>se(e,t))&&nc(this.baseMutations,e.baseMutations,(e,t)=>se(e,t))}}class su{constructor(e,t,r,n){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=n}static from(e,t,r){e.mutations.length===r.length||r5();let n=i$,i=e.mutations;for(let e=0;e<i.length;e++)n=n.insert(i[e].key,r[e].version);return new su(e,t,r,n)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e,t){this.count=e,this.unchangedNames=t}}function sd(e){if(void 0===e)return r9("GRPC error has no .code"),r3.UNKNOWN;switch(e){case a.OK:return r3.OK;case a.CANCELLED:return r3.CANCELLED;case a.UNKNOWN:return r3.UNKNOWN;case a.DEADLINE_EXCEEDED:return r3.DEADLINE_EXCEEDED;case a.RESOURCE_EXHAUSTED:return r3.RESOURCE_EXHAUSTED;case a.INTERNAL:return r3.INTERNAL;case a.UNAVAILABLE:return r3.UNAVAILABLE;case a.UNAUTHENTICATED:return r3.UNAUTHENTICATED;case a.INVALID_ARGUMENT:return r3.INVALID_ARGUMENT;case a.NOT_FOUND:return r3.NOT_FOUND;case a.ALREADY_EXISTS:return r3.ALREADY_EXISTS;case a.PERMISSION_DENIED:return r3.PERMISSION_DENIED;case a.FAILED_PRECONDITION:return r3.FAILED_PRECONDITION;case a.ABORTED:return r3.ABORTED;case a.OUT_OF_RANGE:return r3.OUT_OF_RANGE;case a.UNIMPLEMENTED:return r3.UNIMPLEMENTED;case a.DATA_LOSS:return r3.DATA_LOSS;default:return r5()}}(l=a||(a={}))[l.OK=0]="OK",l[l.CANCELLED=1]="CANCELLED",l[l.UNKNOWN=2]="UNKNOWN",l[l.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",l[l.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",l[l.NOT_FOUND=5]="NOT_FOUND",l[l.ALREADY_EXISTS=6]="ALREADY_EXISTS",l[l.PERMISSION_DENIED=7]="PERMISSION_DENIED",l[l.UNAUTHENTICATED=16]="UNAUTHENTICATED",l[l.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",l[l.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",l[l.ABORTED=10]="ABORTED",l[l.OUT_OF_RANGE=11]="OUT_OF_RANGE",l[l.UNIMPLEMENTED=12]="UNIMPLEMENTED",l[l.INTERNAL=13]="INTERNAL",l[l.UNAVAILABLE=14]="UNAVAILABLE",l[l.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sf=new rX([4294967295,4294967295],0);function sp(e){let t=(new TextEncoder).encode(e),r=new rQ;return r.update(t),new Uint8Array(r.digest())}function sg(e){let t=new DataView(e.buffer),r=t.getUint32(0,!0),n=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new rX([r,n],0),new rX([i,s],0)]}class sm{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new sy(`Invalid padding: ${t}`);if(r<0||e.length>0&&0===this.hashCount)throw new sy(`Invalid hash count: ${r}`);if(0===e.length&&0!==t)throw new sy(`Invalid padding when bitmap length is 0: ${t}`);this.Ae=8*e.length-t,this.Re=rX.fromNumber(this.Ae)}Ve(e,t,r){let n=e.add(t.multiply(rX.fromNumber(r)));return 1===n.compare(sf)&&(n=new rX([n.getBits(0),n.getBits(1)],0)),n.modulo(this.Re).toNumber()}me(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Ae)return!1;let t=sp(e),[r,n]=sg(t);for(let e=0;e<this.hashCount;e++){let t=this.Ve(r,n,e);if(!this.me(t))return!1}return!0}static create(e,t,r){let n=new Uint8Array(Math.ceil(e/8)),i=new sm(n,e%8==0?0:8-e%8,t);return r.forEach(e=>i.insert(e)),i}insert(e){if(0===this.Ae)return;let t=sp(e),[r,n]=sg(t);for(let e=0;e<this.hashCount;e++){let t=this.Ve(r,n,e);this.fe(t)}}fe(e){this.bitmap[Math.floor(e/8)]|=1<<e%8}}class sy extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(e,t,r,n,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=n,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){let n=new Map;return n.set(e,sw.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new sv(nd.min(),n,new nk(nu),iU,iz())}}class sw{constructor(e,t,r,n,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=n,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new sw(r,t,iz(),iz(),iz())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e,t,r,n){this.ge=e,this.removedTargetIds=t,this.key=r,this.pe=n}}class sb{constructor(e,t){this.targetId=e,this.ye=t}}class sE{constructor(e,t,r=nx.EMPTY_BYTE_STRING,n=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=n}}class sI{constructor(){this.we=0,this.Se=sC(),this.be=nx.EMPTY_BYTE_STRING,this.De=!1,this.Ce=!0}get current(){return this.De}get resumeToken(){return this.be}get ve(){return 0!==this.we}get Fe(){return this.Ce}Me(e){e.approximateByteSize()>0&&(this.Ce=!0,this.be=e)}xe(){let e=iz(),t=iz(),r=iz();return this.Se.forEach((n,i)=>{switch(i){case 0:e=e.add(n);break;case 2:t=t.add(n);break;case 1:r=r.add(n);break;default:r5()}}),new sw(this.be,this.De,e,t,r)}Oe(){this.Ce=!1,this.Se=sC()}Ne(e,t){this.Ce=!0,this.Se=this.Se.insert(e,t)}Be(e){this.Ce=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.Ce=!0,this.De=!0}}class sT{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=iU,this.Ue=sS(),this.We=new nk(nu)}Ge(e){for(let t of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(t,e.pe):this.je(t,e.key,e.pe);for(let t of e.removedTargetIds)this.je(t,e.key,e.pe)}He(e){this.forEachTarget(e,t=>{let r=this.Je(t);switch(e.state){case 0:this.Ye(t)&&r.Me(e.resumeToken);break;case 1:r.ke(),r.ve||r.Oe(),r.Me(e.resumeToken);break;case 2:r.ke(),r.ve||this.removeTarget(t);break;case 3:this.Ye(t)&&(r.qe(),r.Me(e.resumeToken));break;case 4:this.Ye(t)&&(this.Ze(t),r.Me(e.resumeToken));break;default:r5()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ke.forEach((e,r)=>{this.Ye(r)&&t(r)})}Xe(e){let t=e.targetId,r=e.ye.count,n=this.et(t);if(n){let i=n.target;if(ib(i)){if(0===r){let e=new ny(i.path);this.je(t,e,n3.newNoDocument(e,nd.min()))}else 1===r||r5()}else{let n=this.tt(t);if(n!==r){let r=this.nt(e),i=r?this.rt(r,e,n):1;0!==i&&(this.Ze(t),this.We=this.We.insert(t,2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch"))}}}}nt(e){let t,r;let n=e.ye.unchangedNames;if(!n||!n.bits)return null;let{bits:{bitmap:i="",padding:s=0},hashCount:o=0}=n;try{t=nV(i).toUint8Array()}catch(e){if(e instanceof nL)return r4("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{r=new sm(t,s,o)}catch(e){return r4(e instanceof sy?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===r.Ae?null:r}rt(e,t,r){return t.ye.count===r-this.ot(e,t.targetId)?0:2}ot(e,t){let r=this.Qe.getRemoteKeysForTarget(t),n=0;return r.forEach(r=>{let i=this.Qe.st(),s=`projects/${i.projectId}/databases/${i.database}/documents/${r.path.canonicalString()}`;e.mightContain(s)||(this.je(t,r,null),n++)}),n}_t(e){let t=new Map;this.Ke.forEach((r,n)=>{let i=this.et(n);if(i){if(r.current&&ib(i.target)){let t=new ny(i.target.path);null!==this.$e.get(t)||this.ut(n,t)||this.je(n,t,n3.newNoDocument(t,e))}r.Fe&&(t.set(n,r.xe()),r.Oe())}});let r=iz();this.Ue.forEach((e,t)=>{let n=!0;t.forEachWhile(e=>{let t=this.et(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(n=!1,!1)}),n&&(r=r.add(e))}),this.$e.forEach((t,r)=>r.setReadTime(e));let n=new sv(e,t,this.We,this.$e,r);return this.$e=iU,this.Ue=sS(),this.We=new nk(nu),n}ze(e,t){if(!this.Ye(e))return;let r=this.ut(e,t.key)?2:0;this.Je(e).Ne(t.key,r),this.$e=this.$e.insert(t.key,t),this.Ue=this.Ue.insert(t.key,this.ct(t.key).add(e))}je(e,t,r){if(!this.Ye(e))return;let n=this.Je(e);this.ut(e,t)?n.Ne(t,1):n.Be(t),this.Ue=this.Ue.insert(t,this.ct(t).delete(e)),r&&(this.$e=this.$e.insert(t,r))}removeTarget(e){this.Ke.delete(e)}tt(e){let t=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let t=this.Ke.get(e);return t||(t=new sI,this.Ke.set(e,t)),t}ct(e){let t=this.Ue.get(e);return t||(t=new nR(nu),this.Ue=this.Ue.insert(e,t)),t}Ye(e){let t=null!==this.et(e);return t||r2("WatchChangeAggregator","Detected inactive target",e),t}et(e){let t=this.Ke.get(e);return t&&t.ve?null:this.Qe.lt(e)}Ze(e){this.Ke.set(e,new sI),this.Qe.getRemoteKeysForTarget(e).forEach(t=>{this.je(e,t,null)})}ut(e,t){return this.Qe.getRemoteKeysForTarget(e).has(t)}}function sS(){return new nk(ny.comparator)}function sC(){return new nk(ny.comparator)}let sA={asc:"ASCENDING",desc:"DESCENDING"},sk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},sO={and:"AND",or:"OR"};class sN{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function sR(e,t){return e.useProto3Json||null==t?t:{value:t}}function sP(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function sD(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function sL(e){return e||r5(),nd.fromTimestamp(function(e){let t=nU(e);return new nh(t.seconds,t.nanos)}(e))}function sx(e,t){return new np(["projects",e.projectId,"databases",e.database]).child("documents").child(t).canonicalString()}function sM(e){let t=np.fromString(e);return sK(t)||r5(),t}function sU(e,t){return sx(e.databaseId,t.path)}function sF(e,t){let r=sM(t);if(r.get(1)!==e.databaseId.projectId)throw new r7(r3.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+r.get(1)+" vs "+e.databaseId.projectId);if(r.get(3)!==e.databaseId.database)throw new r7(r3.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+r.get(3)+" vs "+e.databaseId.database);return new ny(sB(r))}function sV(e,t){return sx(e.databaseId,t)}function sj(e){return new np(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function sB(e){return e.length>4&&"documents"===e.get(4)||r5(),e.popFirst(5)}function s$(e,t,r){return{name:sU(e,t),fields:r.value.mapValue.fields}}function sq(e){return{fieldPath:e.canonicalString()}}function sz(e){return nm.fromServerFormat(e.fieldPath)}function sK(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sH{constructor(e,t,r,n,i=nd.min(),s=nd.min(),o=nx.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=n,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new sH(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new sH(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new sH(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new sH(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sG{constructor(e){this.ht=e}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sW{constructor(){}dt(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.At(t,5);else if("booleanValue"in e)this.At(t,10),t.Rt(e.booleanValue?1:0);else if("integerValue"in e)this.At(t,15),t.Rt(nF(e.integerValue));else if("doubleValue"in e){let r=nF(e.doubleValue);isNaN(r)?this.At(t,13):(this.At(t,15),nT(r)?t.Rt(0):t.Rt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.At(t,20),"string"==typeof r?t.Vt(r):(t.Vt(`${r.seconds||""}`),t.Rt(r.nanos||0))}else if("stringValue"in e)this.ft(e.stringValue,t),this.gt(t);else if("bytesValue"in e)this.At(t,30),t.yt(nV(e.bytesValue)),this.gt(t);else if("referenceValue"in e)this.wt(e.referenceValue,t);else if("geoPointValue"in e){let r=e.geoPointValue;this.At(t,45),t.Rt(r.latitude||0),t.Rt(r.longitude||0)}else"mapValue"in e?n6(e)?this.At(t,Number.MAX_SAFE_INTEGER):(this.St(e.mapValue,t),this.gt(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.gt(t)):r5()}ft(e,t){this.At(t,25),this.Dt(e,t)}Dt(e,t){t.Vt(e)}St(e,t){let r=e.fields||{};for(let e of(this.At(t,55),Object.keys(r)))this.ft(e,t),this.Tt(r[e],t)}bt(e,t){let r=e.values||[];for(let e of(this.At(t,50),r))this.Tt(e,t)}wt(e,t){this.At(t,37),ny.fromName(e).path.forEach(e=>{this.At(t,60),this.Dt(e,t)})}At(e,t){e.Rt(t)}gt(e){e.Rt(2)}}sW.Ct=new sW;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sQ{constructor(){this.an=new sX}addToCollectionParentIndex(e,t){return this.an.add(t),nb.resolve()}getCollectionParents(e,t){return nb.resolve(this.an.getEntries(t))}addFieldIndex(e,t){return nb.resolve()}deleteFieldIndex(e,t){return nb.resolve()}deleteAllFieldIndexes(e){return nb.resolve()}createTargetIndexes(e,t){return nb.resolve()}getDocumentsMatchingTarget(e,t){return nb.resolve(null)}getIndexType(e,t){return nb.resolve(0)}getFieldIndexes(e,t){return nb.resolve([])}getNextCollectionGroupToUpdate(e){return nb.resolve(null)}getMinOffset(e,t){return nb.resolve(nv.min())}getMinOffsetFromCollectionGroup(e,t){return nb.resolve(nv.min())}updateCollectionGroup(e,t,r){return nb.resolve()}updateIndexEntries(e,t){return nb.resolve()}}class sX{constructor(){this.index={}}add(e){let t=e.lastSegment(),r=e.popLast(),n=this.index[t]||new nR(np.comparator),i=!n.has(r);return this.index[t]=n.add(r),i}has(e){let t=e.lastSegment(),r=e.popLast(),n=this.index[t];return n&&n.has(r)}getEntries(e){return(this.index[e]||new nR(np.comparator)).toArray()}}new Uint8Array(0);class sJ{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new sJ(e,sJ.DEFAULT_COLLECTION_PERCENTILE,sJ.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sJ.DEFAULT_COLLECTION_PERCENTILE=10,sJ.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,sJ.DEFAULT=new sJ(41943040,sJ.DEFAULT_COLLECTION_PERCENTILE,sJ.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),sJ.DISABLED=new sJ(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sY{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Bn(){return new sY(0)}static Ln(){return new sY(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sZ{constructor(){this.changes=new iM(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,n3.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let r=this.changes.get(t);return void 0!==r?nb.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(e,t,r,n){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=n}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(n=>(r=n,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==r&&i8(r.mutation,e,nD.empty(),nh.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,iz()).next(()=>t))}getLocalViewOfDocuments(e,t,r=iz()){let n=iB();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,r).next(e=>{let t=iV();return e.forEach((e,r)=>{t=t.insert(e,r.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let r=iB();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,iz()))}populateOverlays(e,t,r){let n=[];return r.forEach(e=>{t.has(e)||n.push(e)}),this.documentOverlayCache.getOverlays(e,n).next(e=>{e.forEach((e,r)=>{t.set(e,r)})})}computeViews(e,t,r,n){let i=iU,s=iB(),o=iB();return t.forEach((e,t)=>{let o=r.get(t.key);n.has(t.key)&&(void 0===o||o.mutation instanceof sr)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),i8(o.mutation,t,o.mutation.getFieldMask(),nh.now())):s.set(t.key,nD.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var r;return o.set(e,new s0(t,null!==(r=s.get(e))&&void 0!==r?r:null))}),o))}recalculateAndSaveOverlays(e,t){let r=iB(),n=new nk((e,t)=>e-t),i=iz();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let o=r.get(e)||nD.empty();o=i.applyToLocalView(s,o),r.set(e,o);let a=(n.get(i.batchId)||iz()).add(e);n=n.insert(i.batchId,a)})}).next(()=>{let s=[],o=n.getReverseIterator();for(;o.hasNext();){let n=o.getNext(),a=n.key,l=n.value,u=iB();l.forEach(e=>{if(!i.has(e)){let n=i7(t.get(e),r.get(e));null!==n&&u.set(e,n),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return nb.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,r,n){return ny.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):iC(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,n):this.getDocumentsMatchingCollectionQuery(e,t,r,n)}getNextDocuments(e,t,r,n){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,n).next(i=>{let s=n-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,n-i.size):nb.resolve(iB()),o=-1,a=i;return s.next(t=>nb.forEach(t,(t,r)=>(o<r.largestBatchId&&(o=r.largestBatchId),i.get(t)?nb.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{a=a.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,a,t,iz())).next(e=>({batchId:o,changes:ij(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ny(t)).next(e=>{let t=iV();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,r,n){let i=t.collectionGroup,s=iV();return this.indexManager.getCollectionParents(e,i).next(o=>nb.forEach(o,o=>{var a;let l=(a=o.child(i),new iE(a,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt));return this.getDocumentsMatchingCollectionQuery(e,l,r,n).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,r,n){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,n))).next(e=>{i.forEach((t,r)=>{let n=r.getKey();null===e.get(n)&&(e=e.insert(n,n3.newInvalidDocument(n)))});let r=iV();return e.forEach((e,n)=>{let s=i.get(e);void 0!==s&&i8(s.mutation,n,nD.empty(),nh.now()),iL(t,n)&&(r=r.insert(e,n))}),r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,t){return nb.resolve(this.lr.get(t))}saveBundleMetadata(e,t){return this.lr.set(t.id,{id:t.id,version:t.version,createTime:sL(t.createTime)}),nb.resolve()}getNamedQuery(e,t){return nb.resolve(this.hr.get(t))}saveNamedQuery(e,t){return this.hr.set(t.name,{name:t.name,query:function(e){let t=function(e){var t,r,n,i,s,o,a,l;let u,c=function(e){let t=sM(e);return 4===t.length?np.emptyPath():sB(t)}(e.parent),h=e.structuredQuery,d=h.from?h.from.length:0,f=null;if(d>0){1===d||r5();let e=h.from[0];e.allDescendants?f=e.collectionId:c=c.child(e.collectionId)}let p=[];h.where&&(p=function(e){var t;let r=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=sz(e.unaryFilter.field);return ii.create(t,"==",{doubleValue:NaN});case"IS_NULL":let r=sz(e.unaryFilter.field);return ii.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let n=sz(e.unaryFilter.field);return ii.create(n,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=sz(e.unaryFilter.field);return ii.create(i,"!=",{nullValue:"NULL_VALUE"});default:return r5()}}(t):void 0!==t.fieldFilter?ii.create(sz(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return r5()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?is.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return r5()}}(t.compositeFilter.op)):r5()}(e);return r instanceof is&&ia(t=r)&&io(t)?r.getFilters():[r]}(h.where));let g=[];h.orderBy&&(g=h.orderBy.map(e=>new it(sz(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let m=null;h.limit&&(m=null==(u="object"==typeof(t=h.limit)?t.value:t)?null:u);let y=null;h.startAt&&(y=function(e){let t=!!e.before,r=e.values||[];return new n7(r,t)}(h.startAt));let v=null;return h.endAt&&(v=function(e){let t=!e.before,r=e.values||[];return new n7(r,t)}(h.endAt)),r=c,n=f,i=g,s=p,o=m,a=y,l=v,new iE(r,n,i,s,o,"F",a,l)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?iN(t,t.limit,"L"):t}(t.bundledQuery),readTime:sL(t.readTime)}),nb.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s9{constructor(){this.overlays=new nk(ny.comparator),this.Pr=new Map}getOverlay(e,t){return nb.resolve(this.overlays.get(t))}getOverlays(e,t){let r=iB();return nb.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&r.set(t,e)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((r,n)=>{this.It(e,t,n)}),nb.resolve()}removeOverlaysForBatchId(e,t,r){let n=this.Pr.get(r);return void 0!==n&&(n.forEach(e=>this.overlays=this.overlays.remove(e)),this.Pr.delete(r)),nb.resolve()}getOverlaysForCollection(e,t,r){let n=iB(),i=t.length+1,s=new ny(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){let e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>r&&n.set(e.getKey(),e)}return nb.resolve(n)}getOverlaysForCollectionGroup(e,t,r,n){let i=new nk((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>r){let t=i.get(e.largestBatchId);null===t&&(t=iB(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let o=iB(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((e,t)=>o.set(e,t)),!(o.size()>=n)););return nb.resolve(o)}It(e,t,r){let n=this.overlays.get(r.key);if(null!==n){let e=this.Pr.get(n.largestBatchId).delete(r.key);this.Pr.set(n.largestBatchId,e)}this.overlays=this.overlays.insert(r.key,new sc(t,r));let i=this.Pr.get(t);void 0===i&&(i=iz(),this.Pr.set(t,i)),this.Pr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s4{constructor(){this.Ir=new nR(s6.dr),this.Tr=new nR(s6.Er)}isEmpty(){return this.Ir.isEmpty()}addReference(e,t){let r=new s6(e,t);this.Ir=this.Ir.add(r),this.Tr=this.Tr.add(r)}Ar(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.Rr(new s6(e,t))}Vr(e,t){e.forEach(e=>this.removeReference(e,t))}mr(e){let t=new ny(new np([])),r=new s6(t,e),n=new s6(t,e+1),i=[];return this.Tr.forEachInRange([r,n],e=>{this.Rr(e),i.push(e.key)}),i}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Tr=this.Tr.delete(e)}pr(e){let t=new ny(new np([])),r=new s6(t,e),n=new s6(t,e+1),i=iz();return this.Tr.forEachInRange([r,n],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new s6(e,0),r=this.Ir.firstAfterOrEqual(t);return null!==r&&e.isEqual(r.key)}}class s6{constructor(e,t){this.key=e,this.yr=t}static dr(e,t){return ny.comparator(e.key,t.key)||nu(e.yr,t.yr)}static Er(e,t){return nu(e.yr,t.yr)||ny.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s5{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.wr=1,this.Sr=new nR(s6.dr)}checkEmpty(e){return nb.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,r,n){let i=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new sl(i,t,r,n);for(let t of(this.mutationQueue.push(s),n))this.Sr=this.Sr.add(new s6(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return nb.resolve(s)}lookupMutationBatch(e,t){return nb.resolve(this.br(t))}getNextMutationBatchAfterBatchId(e,t){let r=this.Dr(t+1),n=r<0?0:r;return nb.resolve(this.mutationQueue.length>n?this.mutationQueue[n]:null)}getHighestUnacknowledgedBatchId(){return nb.resolve(0===this.mutationQueue.length?-1:this.wr-1)}getAllMutationBatches(e){return nb.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let r=new s6(t,0),n=new s6(t,Number.POSITIVE_INFINITY),i=[];return this.Sr.forEachInRange([r,n],e=>{let t=this.br(e.yr);i.push(t)}),nb.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new nR(nu);return t.forEach(e=>{let t=new s6(e,0),n=new s6(e,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([t,n],e=>{r=r.add(e.yr)})}),nb.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,n=r.length+1,i=r;ny.isDocumentKey(i)||(i=i.child(""));let s=new s6(new ny(i),0),o=new nR(nu);return this.Sr.forEachWhile(e=>{let t=e.key.path;return!!r.isPrefixOf(t)&&(t.length===n&&(o=o.add(e.yr)),!0)},s),nb.resolve(this.Cr(o))}Cr(e){let t=[];return e.forEach(e=>{let r=this.br(e);null!==r&&t.push(r)}),t}removeMutationBatch(e,t){0===this.vr(t.batchId,"removed")||r5(),this.mutationQueue.shift();let r=this.Sr;return nb.forEach(t.mutations,n=>{let i=new s6(n.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,n.key)}).next(()=>{this.Sr=r})}xn(e){}containsKey(e,t){let r=new s6(t,0),n=this.Sr.firstAfterOrEqual(r);return nb.resolve(t.isEqual(n&&n.key))}performConsistencyCheck(e){return this.mutationQueue.length,nb.resolve()}vr(e,t){return this.Dr(e)}Dr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}br(e){let t=this.Dr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s3{constructor(e){this.Fr=e,this.docs=new nk(ny.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let r=t.key,n=this.docs.get(r),i=n?n.size:0,s=this.Fr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let r=this.docs.get(t);return nb.resolve(r?r.document.mutableCopy():n3.newInvalidDocument(t))}getEntries(e,t){let r=iU;return t.forEach(e=>{let t=this.docs.get(e);r=r.insert(e,t?t.document.mutableCopy():n3.newInvalidDocument(e))}),nb.resolve(r)}getDocumentsMatchingQuery(e,t,r,n){let i=iU,s=t.path,o=new ny(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){let{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=function(e,t){let r=e.readTime.compareTo(t.readTime);return 0!==r?r:0!==(r=ny.comparator(e.documentKey,t.documentKey))?r:nu(e.largestBatchId,t.largestBatchId)}(new nv(o.readTime,o.key,-1),r)||(n.has(o.key)||iL(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return nb.resolve(i)}getAllFromCollectionGroup(e,t,r,n){r5()}Mr(e,t){return nb.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new s7(this)}getSize(e){return nb.resolve(this.size)}}class s7 extends sZ{constructor(e){super(),this.ur=e}applyChanges(e){let t=[];return this.changes.forEach((r,n)=>{n.isValidDocument()?t.push(this.ur.addEntry(e,n)):this.ur.removeEntry(r)}),nb.waitFor(t)}getFromCache(e,t){return this.ur.getEntry(e,t)}getAllFromCache(e,t){return this.ur.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s8{constructor(e){this.persistence=e,this.Or=new iM(e=>iw(e),i_),this.lastRemoteSnapshotVersion=nd.min(),this.highestTargetId=0,this.Nr=0,this.Br=new s4,this.targetCount=0,this.Lr=sY.Bn()}forEachTarget(e,t){return this.Or.forEach((e,r)=>t(r)),nb.resolve()}getLastRemoteSnapshotVersion(e){return nb.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return nb.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),nb.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Nr&&(this.Nr=t),nb.resolve()}Qn(e){this.Or.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Lr=new sY(t),this.highestTargetId=t),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,t){return this.Qn(t),this.targetCount+=1,nb.resolve()}updateTargetData(e,t){return this.Qn(t),nb.resolve()}removeTargetData(e,t){return this.Or.delete(t.target),this.Br.mr(t.targetId),this.targetCount-=1,nb.resolve()}removeTargets(e,t,r){let n=0,i=[];return this.Or.forEach((s,o)=>{o.sequenceNumber<=t&&null===r.get(o.targetId)&&(this.Or.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),n++)}),nb.waitFor(i).next(()=>n)}getTargetCount(e){return nb.resolve(this.targetCount)}getTargetData(e,t){let r=this.Or.get(t)||null;return nb.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Ar(t,r),nb.resolve()}removeMatchingKeys(e,t,r){this.Br.Vr(t,r);let n=this.persistence.referenceDelegate,i=[];return n&&t.forEach(t=>{i.push(n.markPotentiallyOrphaned(e,t))}),nb.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.mr(t),nb.resolve()}getMatchingKeysForTargetId(e,t){let r=this.Br.pr(t);return nb.resolve(r)}containsKey(e,t){return nb.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e,t){this.kr={},this.overlays={},this.qr=new nI(0),this.Qr=!1,this.Qr=!0,this.referenceDelegate=e(this),this.Kr=new s8(this),this.indexManager=new sQ,this.remoteDocumentCache=new s3(e=>this.referenceDelegate.$r(e)),this.serializer=new sG(t),this.Ur=new s2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new s9,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.kr[e.toKey()];return r||(r=new s5(t,this.referenceDelegate),this.kr[e.toKey()]=r),r}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ur}runTransaction(e,t,r){r2("MemoryPersistence","Starting transaction:",e);let n=new ot(this.qr.next());return this.referenceDelegate.Wr(),r(n).next(e=>this.referenceDelegate.Gr(n).next(()=>e)).toPromise().then(e=>(n.raiseOnCommittedEvent(),e))}zr(e,t){return nb.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,t)))}}class ot extends nw{constructor(e){super(),this.currentSequenceNumber=e}}class or{constructor(e){this.persistence=e,this.jr=new s4,this.Hr=null}static Jr(e){return new or(e)}get Yr(){if(this.Hr)return this.Hr;throw r5()}addReference(e,t,r){return this.jr.addReference(r,t),this.Yr.delete(r.toString()),nb.resolve()}removeReference(e,t,r){return this.jr.removeReference(r,t),this.Yr.add(r.toString()),nb.resolve()}markPotentiallyOrphaned(e,t){return this.Yr.add(t.toString()),nb.resolve()}removeTarget(e,t){this.jr.mr(t.targetId).forEach(e=>this.Yr.add(e.toString()));let r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Yr.add(e.toString()))}).next(()=>r.removeTargetData(e,t))}Wr(){this.Hr=new Set}Gr(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return nb.forEach(this.Yr,r=>{let n=ny.fromPath(r);return this.Zr(e,n).next(e=>{e||t.removeEntry(n,nd.min())})}).next(()=>(this.Hr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Zr(e,t).next(e=>{e?this.Yr.delete(t.toString()):this.Yr.add(t.toString())})}$r(e){return 0}Zr(e,t){return nb.or([()=>nb.resolve(this.jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.zr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e,t,r,n){this.targetId=e,this.fromCache=t,this.Qi=r,this.Ki=n}static $i(e,t){let r=iz(),n=iz();for(let e of t.docChanges)switch(e.type){case 0:r=r.add(e.doc.key);break;case 1:n=n.add(e.doc.key)}return new on(e,t.fromCache,r,n)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(){this.Ui=!1,this.Wi=!1,this.Gi=100,this.zi=8}initialize(e,t){this.ji=e,this.indexManager=t,this.Ui=!0}getDocumentsMatchingQuery(e,t,r,n){let i={result:null};return this.Hi(e,t).next(e=>{i.result=e}).next(()=>{if(!i.result)return this.Ji(e,t,n,r).next(e=>{i.result=e})}).next(()=>{if(i.result)return;let r=new oi;return this.Yi(e,t,r).next(n=>{if(i.result=n,this.Wi)return this.Zi(e,t,r,n.size)})}).next(()=>i.result)}Zi(e,t,r,n){return r.documentReadCount<this.Gi?(r1()<=d.in.DEBUG&&r2("QueryEngine","SDK will not create cache indexes for query:",iD(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Gi,"documents"),nb.resolve()):(r1()<=d.in.DEBUG&&r2("QueryEngine","Query:",iD(t),"scans",r.documentReadCount,"local documents and returns",n,"documents as results."),r.documentReadCount>this.zi*n?(r1()<=d.in.DEBUG&&r2("QueryEngine","The SDK decides to create cache indexes for query:",iD(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ik(t))):nb.resolve())}Hi(e,t){if(iI(t))return nb.resolve(null);let r=ik(t);return this.indexManager.getIndexType(e,r).next(n=>0===n?null:(null!==t.limit&&1===n&&(r=ik(t=iN(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,r).next(n=>{let i=iz(...n);return this.ji.getDocuments(e,i).next(n=>this.indexManager.getMinOffset(e,r).next(r=>{let s=this.Xi(t,n);return this.es(t,s,i,r.readTime)?this.Hi(e,iN(t,null,"F")):this.ts(e,s,t,r)}))})))}Ji(e,t,r,n){return iI(t)||n.isEqual(nd.min())?nb.resolve(null):this.ji.getDocuments(e,r).next(i=>{let s=this.Xi(t,i);return this.es(t,s,r,n)?nb.resolve(null):(r1()<=d.in.DEBUG&&r2("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),iD(t)),this.ts(e,s,t,function(e,t){let r=e.toTimestamp().seconds,n=e.toTimestamp().nanoseconds+1,i=nd.fromTimestamp(1e9===n?new nh(r+1,0):new nh(r,n));return new nv(i,ny.empty(),-1)}(n,0)).next(e=>e))})}Xi(e,t){let r=new nR(ix(e));return t.forEach((t,n)=>{iL(e,n)&&(r=r.add(n))}),r}es(e,t,r,n){if(null===e.limit)return!1;if(r.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(n)>0)}Yi(e,t,r){return r1()<=d.in.DEBUG&&r2("QueryEngine","Using full collection scan to execute query:",iD(t)),this.ji.getDocumentsMatchingQuery(e,t,nv.min(),r)}ts(e,t,r,n){return this.ji.getDocumentsMatchingQuery(e,r,n).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,t,r,n){this.persistence=e,this.ns=t,this.serializer=n,this.rs=new nk(nu),this.ss=new iM(e=>iw(e),i_),this.os=new Map,this._s=e.getRemoteDocumentCache(),this.Kr=e.getTargetCache(),this.Ur=e.getBundleCache(),this.us(r)}us(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new s1(this._s,this.mutationQueue,this.documentOverlayCache,this.indexManager),this._s.setIndexManager(this.indexManager),this.ns.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.rs))}}async function oa(e,t){return await e.persistence.runTransaction("Handle user change","readonly",r=>{let n;return e.mutationQueue.getAllMutationBatches(r).next(i=>(n=i,e.us(t),e.mutationQueue.getAllMutationBatches(r))).next(t=>{let i=[],s=[],o=iz();for(let e of n)for(let t of(i.push(e.batchId),e.mutations))o=o.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))o=o.add(t.key);return e.localDocuments.getDocuments(r,o).next(e=>({cs:e,removedBatchIds:i,addedBatchIds:s}))})})}function ol(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Kr.getLastRemoteSnapshotVersion(t))}async function ou(e,t,r){let n=e.rs.get(t);try{r||await e.persistence.runTransaction("Release target",r?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,n))}catch(e){if(!nE(e))throw e;r2("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}e.rs=e.rs.remove(t),e.ss.delete(n.target)}function oc(e,t,r){let n=nd.min(),i=iz();return e.persistence.runTransaction("Execute query","readwrite",s=>(function(e,t,r){let n=e.ss.get(r);return void 0!==n?nb.resolve(e.rs.get(n)):e.Kr.getTargetData(t,r)})(e,s,ik(t)).next(t=>{if(t)return n=t.lastLimboFreeSnapshotVersion,e.Kr.getMatchingKeysForTargetId(s,t.targetId).next(e=>{i=e})}).next(()=>e.ns.getDocumentsMatchingQuery(s,t,r?n:nd.min(),r?i:iz())).next(r=>{var n;let s;return n=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),s=e.os.get(n)||nd.min(),r.forEach((e,t)=>{t.readTime.compareTo(s)>0&&(s=t.readTime)}),e.os.set(n,s),{documents:r,Ps:i}}))}class oh{constructor(){this.activeTargetIds=iK}Rs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}As(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class od{constructor(){this.ro=new oh,this.io={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.ro.Rs(e),this.io[e]||"not-current"}updateQueryState(e,t,r){this.io[e]=t}removeLocalQueryTarget(e){this.ro.Vs(e)}isLocalQueryTarget(e){return this.ro.activeTargetIds.has(e)}clearQueryState(e){delete this.io[e]}getAllActiveQueryTargets(){return this.ro.activeTargetIds}isActiveQueryTarget(e){return this.ro.activeTargetIds.has(e)}start(){return this.ro=new oh,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{so(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(){this.oo=()=>this._o(),this.ao=()=>this.uo(),this.co=[],this.lo()}so(e){this.co.push(e)}shutdown(){window.removeEventListener("online",this.oo),window.removeEventListener("offline",this.ao)}lo(){window.addEventListener("online",this.oo),window.addEventListener("offline",this.ao)}_o(){for(let e of(r2("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.co))e(0)}uo(){for(let e of(r2("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.co))e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let og=null;function om(){return null===og?og=268435456+Math.round(2147483648*Math.random()):og++,"0x"+og.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(e){this.ho=e.ho,this.Po=e.Po}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.Po()}send(e){this.ho(e)}Vo(){this.To()}mo(e){this.Ao(e)}fo(e){this.Ro(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ow="WebChannelConnection";class o_ extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),n=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${r}/databases/${n}`,this.wo="(default)"===this.databaseId.database?`project_id=${r}`:`project_id=${r}&database_id=${n}`}get So(){return!1}bo(e,t,r,n,i){let s=om(),o=this.Do(e,t);r2("RestConnection",`Sending RPC '${e}' ${s}:`,o,r);let a={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Co(a,n,i),this.vo(e,o,a,r).then(t=>(r2("RestConnection",`Received RPC '${e}' ${s}: `,t),t),t=>{throw r4("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",r),t})}Fo(e,t,r,n,i,s){return this.bo(e,t,r,n,i)}Co(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+rZ}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,r)=>e[r]=t),r&&r.headers.forEach((t,r)=>e[r]=t)}Do(e,t){let r=oy[e];return`${this.po}/v1/${t}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,r,n){let i=om();return new Promise((s,o)=>{let a=new rW;a.setWithCredentials(!0),a.listenOnce(rz.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case rq.NO_ERROR:let t=a.getResponseJson();r2(ow,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case rq.TIMEOUT:r2(ow,`RPC '${e}' ${i} timed out`),o(new r7(r3.DEADLINE_EXCEEDED,"Request time out"));break;case rq.HTTP_ERROR:let r=a.getStatus();if(r2(ow,`RPC '${e}' ${i} failed with status:`,r,"response text:",a.getResponseText()),r>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(r3).indexOf(t)>=0?t:r3.UNKNOWN}(t.status);o(new r7(e,t.message))}else o(new r7(r3.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new r7(r3.UNAVAILABLE,"Connection failed."));break;default:r5()}}finally{r2(ow,`RPC '${e}' ${i} completed.`)}});let l=JSON.stringify(n);r2(ow,`RPC '${e}' ${i} sending request:`,n),a.send(t,"POST",l,r,15)})}Mo(e,t,r){let n=om(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=rB(),o=r$(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;void 0!==u&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Co(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;let c=i.join("");r2(ow,`Creating RPC '${e}' stream ${n}: ${c}`,l);let h=s.createWebChannel(c,l),d=!1,f=!1,p=new ov({ho:t=>{f?r2(ow,`Not sending because RPC '${e}' stream ${n} is closed:`,t):(d||(r2(ow,`Opening RPC '${e}' stream ${n} transport.`),h.open(),d=!0),r2(ow,`RPC '${e}' stream ${n} sending:`,t),h.send(t))},Po:()=>h.close()}),g=(e,t,r)=>{e.listen(t,e=>{try{r(e)}catch(e){setTimeout(()=>{throw e},0)}})};return g(h,rG.EventType.OPEN,()=>{f||r2(ow,`RPC '${e}' stream ${n} transport opened.`)}),g(h,rG.EventType.CLOSE,()=>{f||(f=!0,r2(ow,`RPC '${e}' stream ${n} transport closed`),p.mo())}),g(h,rG.EventType.ERROR,t=>{f||(f=!0,r4(ow,`RPC '${e}' stream ${n} transport errored:`,t),p.mo(new r7(r3.UNAVAILABLE,"The operation could not be completed")))}),g(h,rG.EventType.MESSAGE,t=>{var r;if(!f){let i=t.data[0];i||r5();let s=i.error||(null===(r=i[0])||void 0===r?void 0:r.error);if(s){r2(ow,`RPC '${e}' stream ${n} received error:`,s);let t=s.status,r=function(e){let t=a[e];if(void 0!==t)return sd(t)}(t),i=s.message;void 0===r&&(r=r3.INTERNAL,i="Unknown error status: "+t+" with message "+s.message),f=!0,p.mo(new r7(r,i)),h.close()}else r2(ow,`RPC '${e}' stream ${n} received:`,i),p.fo(i)}}),g(o,rK.STAT_EVENT,t=>{t.stat===rH.PROXY?r2(ow,`RPC '${e}' stream ${n} detected buffering proxy`):t.stat===rH.NOPROXY&&r2(ow,`RPC '${e}' stream ${n} detected no buffering proxy`)}),setTimeout(()=>{p.Vo()},0),p}}function ob(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oE(e){return new sN(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(e,t,r=1e3,n=1.5,i=6e4){this._i=e,this.timerId=t,this.xo=r,this.Oo=n,this.No=i,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(e){this.cancel();let t=Math.floor(this.Bo+this.Ko()),r=Math.max(0,Date.now()-this.ko),n=Math.max(0,t-r);n>0&&r2("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.Bo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,n,()=>(this.ko=Date.now(),e())),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){null!==this.Lo&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){null!==this.Lo&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(e,t,r,n,i,s,o,a){this._i=e,this.Uo=r,this.Wo=n,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Go=0,this.zo=null,this.jo=null,this.stream=null,this.Ho=new oI(e,t)}Jo(){return 1===this.state||5===this.state||this.Yo()}Yo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Zo()}async stop(){this.Jo()&&await this.close(0)}Xo(){this.state=0,this.Ho.reset()}e_(){this.Yo()&&null===this.zo&&(this.zo=this._i.enqueueAfterDelay(this.Uo,6e4,()=>this.t_()))}n_(e){this.r_(),this.stream.send(e)}async t_(){if(this.Yo())return this.close(0)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}async close(e,t){this.r_(),this.i_(),this.Ho.cancel(),this.Go++,4!==e?this.Ho.reset():t&&t.code===r3.RESOURCE_EXHAUSTED?(r9(t.toString()),r9("Using maximum backoff delay to prevent overloading the backend."),this.Ho.qo()):t&&t.code===r3.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.s_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(t)}s_(){}auth(){this.state=1;let e=this.o_(this.Go),t=this.Go;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,r])=>{this.Go===t&&this.__(e,r)},t=>{e(()=>{let e=new r7(r3.UNKNOWN,"Fetching auth token failed: "+t.message);return this.a_(e)})})}__(e,t){let r=this.o_(this.Go);this.stream=this.u_(e,t),this.stream.Io(()=>{r(()=>(this.state=2,this.jo=this._i.enqueueAfterDelay(this.Wo,1e4,()=>(this.Yo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(e=>{r(()=>this.a_(e))}),this.stream.onMessage(e=>{r(()=>this.onMessage(e))})}Zo(){this.state=5,this.Ho.Qo(async()=>{this.state=0,this.start()})}a_(e){return r2("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}o_(e){return t=>{this._i.enqueueAndForget(()=>this.Go===e?t():(r2("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class oS extends oT{constructor(e,t,r,n,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,n,s),this.serializer=i}u_(e,t){return this.connection.Mo("Listen",e,t)}onMessage(e){this.Ho.reset();let t=function(e,t){let r;if("targetChange"in t){var n,i;t.targetChange;let s="NO_CHANGE"===(n=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===n?1:"REMOVE"===n?2:"CURRENT"===n?3:"RESET"===n?4:r5(),o=t.targetChange.targetIds||[],a=(i=t.targetChange.resumeToken,e.useProto3Json?(void 0===i||"string"==typeof i||r5(),nx.fromBase64String(i||"")):(void 0===i||i instanceof Uint8Array||r5(),nx.fromUint8Array(i||new Uint8Array))),l=t.targetChange.cause,u=l&&function(e){let t=void 0===e.code?r3.UNKNOWN:sd(e.code);return new r7(t,e.message||"")}(l);r=new sE(s,o,a,u||null)}else if("documentChange"in t){t.documentChange;let n=t.documentChange;n.document,n.document.name,n.document.updateTime;let i=sF(e,n.document.name),s=sL(n.document.updateTime),o=n.document.createTime?sL(n.document.createTime):nd.min(),a=new n5({mapValue:{fields:n.document.fields}}),l=n3.newFoundDocument(i,s,o,a),u=n.targetIds||[],c=n.removedTargetIds||[];r=new s_(u,c,l.key,l)}else if("documentDelete"in t){t.documentDelete;let n=t.documentDelete;n.document;let i=sF(e,n.document),s=n.readTime?sL(n.readTime):nd.min(),o=n3.newNoDocument(i,s),a=n.removedTargetIds||[];r=new s_([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;let n=t.documentRemove;n.document;let i=sF(e,n.document),s=n.removedTargetIds||[];r=new s_([],s,i,null)}else{if(!("filter"in t))return r5();{t.filter;let e=t.filter;e.targetId;let{count:n=0,unchangedNames:i}=e,s=new sh(n,i),o=e.targetId;r=new sb(o,s)}}return r}(this.serializer,e),r=function(e){if(!("targetChange"in e))return nd.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?nd.min():t.readTime?sL(t.readTime):nd.min()}(e);return this.listener.c_(t,r)}l_(e){let t={};t.database=sj(this.serializer),t.addTarget=function(e,t){let r;let n=t.target;if((r=ib(n)?{documents:{documents:[sV(e,n.path)]}}:{query:function(e,t){var r,n;let i={structuredQuery:{}},s=t.path;null!==t.collectionGroup?(i.parent=sV(e,s),i.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i.parent=sV(e,s.popLast()),i.structuredQuery.from=[{collectionId:s.lastSegment()}]);let o=function(e){if(0!==e.length)return function e(t){return t instanceof ii?function(e){if("=="===e.op){if(n2(e.value))return{unaryFilter:{field:sq(e.field),op:"IS_NAN"}};if(n1(e.value))return{unaryFilter:{field:sq(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(n2(e.value))return{unaryFilter:{field:sq(e.field),op:"IS_NOT_NAN"}};if(n1(e.value))return{unaryFilter:{field:sq(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:sq(e.field),op:sk[e.op],value:e.value}}}(t):t instanceof is?function(t){let r=t.getFilters().map(t=>e(t));return 1===r.length?r[0]:{compositeFilter:{op:sO[t.op],filters:r}}}(t):r5()}(is.create(e,"and"))}(t.filters);o&&(i.structuredQuery.where=o);let a=function(e){if(0!==e.length)return e.map(e=>({field:sq(e.field),direction:sA[e.dir]}))}(t.orderBy);a&&(i.structuredQuery.orderBy=a);let l=sR(e,t.limit);return null!==l&&(i.structuredQuery.limit=l),t.startAt&&(i.structuredQuery.startAt={before:(r=t.startAt).inclusive,values:r.position}),t.endAt&&(i.structuredQuery.endAt={before:!(n=t.endAt).inclusive,values:n.position}),i}(e,n)}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){r.resumeToken=sD(e,t.resumeToken);let n=sR(e,t.expectedCount);null!==n&&(r.expectedCount=n)}else if(t.snapshotVersion.compareTo(nd.min())>0){r.readTime=sP(e,t.snapshotVersion.toTimestamp());let n=sR(e,t.expectedCount);null!==n&&(r.expectedCount=n)}return r}(this.serializer,e);let r=function(e,t){let r=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return r5()}}(t.purpose);return null==r?null:{"goog-listen-tags":r}}(this.serializer,e);r&&(t.labels=r),this.n_(t)}h_(e){let t={};t.database=sj(this.serializer),t.removeTarget=e,this.n_(t)}}class oC extends oT{constructor(e,t,r,n,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,n,s),this.serializer=i,this.P_=!1}get I_(){return this.P_}start(){this.P_=!1,this.lastStreamToken=void 0,super.start()}s_(){this.P_&&this.d_([])}u_(e,t){return this.connection.Mo("Write",e,t)}onMessage(e){var t,r;if(e.streamToken||r5(),this.lastStreamToken=e.streamToken,this.P_){this.Ho.reset();let n=(t=e.writeResults,r=e.commitTime,t&&t.length>0?(void 0!==r||r5(),t.map(e=>{let t;return(t=e.updateTime?sL(e.updateTime):sL(r)).isEqual(nd.min())&&(t=sL(r)),new i4(t,e.transformResults||[])})):[]),i=sL(e.commitTime);return this.listener.T_(i,n)}return e.writeResults&&0!==e.writeResults.length&&r5(),this.P_=!0,this.listener.E_()}A_(){let e={};e.database=sj(this.serializer),this.n_(e)}d_(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>(function(e,t){var r;let n;if(t instanceof st)n={update:s$(e,t.key,t.value)};else if(t instanceof so)n={delete:sU(e,t.key)};else if(t instanceof sr)n={update:s$(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof sa))return r5();n={verify:sU(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let r=t.transform;if(r instanceof iX)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(r instanceof iJ)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:r.elements}};if(r instanceof iZ)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:r.elements}};if(r instanceof i1)return{fieldPath:t.field.canonicalString(),increment:r.Te};throw r5()})(0,e))),t.precondition.isNone||(n.currentDocument=void 0!==(r=t.precondition).updateTime?{updateTime:sP(e,r.updateTime.toTimestamp())}:void 0!==r.exists?{exists:r.exists}:r5()),n})(this.serializer,e))};this.n_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA extends class{}{constructor(e,t,r,n){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=n,this.R_=!1}V_(){if(this.R_)throw new r7(r3.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,t,r){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([n,i])=>this.connection.bo(e,t,r,n,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===r3.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new r7(r3.UNKNOWN,e.toString())})}Fo(e,t,r,n){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Fo(e,t,r,i,s,n)).catch(e=>{throw"FirebaseError"===e.name?(e.code===r3.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new r7(r3.UNKNOWN,e.toString())})}terminate(){this.R_=!0}}class ok{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.f_=0,this.g_=null,this.p_=!0}y_(){0===this.f_&&(this.w_("Unknown"),this.g_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.g_=null,this.S_("Backend didn't respond within 10 seconds."),this.w_("Offline"),Promise.resolve())))}b_(e){"Online"===this.state?this.w_("Unknown"):(this.f_++,this.f_>=1&&(this.D_(),this.S_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.w_("Offline")))}set(e){this.D_(),this.f_=0,"Online"===e&&(this.p_=!1),this.w_(e)}w_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}S_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.p_?(r9(t),this.p_=!1):r2("OnlineStateTracker",t)}D_(){null!==this.g_&&(this.g_.cancel(),this.g_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oO{constructor(e,t,r,n,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.C_=[],this.v_=new Map,this.F_=new Set,this.M_=[],this.x_=i,this.x_.so(e=>{r.enqueueAndForget(async()=>{oF(this)&&(r2("RemoteStore","Restarting streams for network reachability change."),await async function(e){e.F_.add(4),await oR(e),e.O_.set("Unknown"),e.F_.delete(4),await oN(e)}(this))})}),this.O_=new ok(r,n)}}async function oN(e){if(oF(e))for(let t of e.M_)await t(!0)}async function oR(e){for(let t of e.M_)await t(!1)}function oP(e,t){e.v_.has(t.targetId)||(e.v_.set(t.targetId,t),oU(e)?oM(e):oZ(e).Yo()&&oL(e,t))}function oD(e,t){let r=oZ(e);e.v_.delete(t),r.Yo()&&ox(e,t),0===e.v_.size&&(r.Yo()?r.e_():oF(e)&&e.O_.set("Unknown"))}function oL(e,t){if(e.N_.Le(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(nd.min())>0){let r=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(r)}oZ(e).l_(t)}function ox(e,t){e.N_.Le(t),oZ(e).h_(t)}function oM(e){e.N_=new sT({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>e.v_.get(t)||null,st:()=>e.datastore.serializer.databaseId}),oZ(e).start(),e.O_.y_()}function oU(e){return oF(e)&&!oZ(e).Jo()&&e.v_.size>0}function oF(e){return 0===e.F_.size}async function oV(e){e.v_.forEach((t,r)=>{oL(e,t)})}async function oj(e,t){e.N_=void 0,oU(e)?(e.O_.b_(t),oM(e)):e.O_.set("Unknown")}async function oB(e,t,r){if(e.O_.set("Online"),t instanceof sE&&2===t.state&&t.cause)try{await async function(e,t){let r=t.cause;for(let n of t.targetIds)e.v_.has(n)&&(await e.remoteSyncer.rejectListen(n,r),e.v_.delete(n),e.N_.removeTarget(n))}(e,t)}catch(r){r2("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await o$(e,r)}else if(t instanceof s_?e.N_.Ge(t):t instanceof sb?e.N_.Xe(t):e.N_.He(t),!r.isEqual(nd.min()))try{let t=await ol(e.localStore);r.compareTo(t)>=0&&await function(e,t){let r=e.N_._t(t);return r.targetChanges.forEach((r,n)=>{if(r.resumeToken.approximateByteSize()>0){let i=e.v_.get(n);i&&e.v_.set(n,i.withResumeToken(r.resumeToken,t))}}),r.targetMismatches.forEach((t,r)=>{let n=e.v_.get(t);if(!n)return;e.v_.set(t,n.withResumeToken(nx.EMPTY_BYTE_STRING,n.snapshotVersion)),ox(e,t);let i=new sH(n.target,t,r,n.sequenceNumber);oL(e,i)}),e.remoteSyncer.applyRemoteEvent(r)}(e,r)}catch(t){r2("RemoteStore","Failed to raise snapshot:",t),await o$(e,t)}}async function o$(e,t,r){if(!nE(t))throw t;e.F_.add(1),await oR(e),e.O_.set("Offline"),r||(r=()=>ol(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{r2("RemoteStore","Retrying IndexedDB access"),await r(),e.F_.delete(1),await oN(e)})}function oq(e,t){return t().catch(r=>o$(e,r,t))}async function oz(e){let t=o0(e),r=e.C_.length>0?e.C_[e.C_.length-1].batchId:-1;for(;oF(e)&&e.C_.length<10;)try{let n=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}(e.localStore,r);if(null===n){0===e.C_.length&&t.e_();break}r=n.batchId,function(e,t){e.C_.push(t);let r=o0(e);r.Yo()&&r.I_&&r.d_(t.mutations)}(e,n)}catch(t){await o$(e,t)}oK(e)&&oH(e)}function oK(e){return oF(e)&&!o0(e).Jo()&&e.C_.length>0}function oH(e){o0(e).start()}async function oG(e){o0(e).A_()}async function oW(e){let t=o0(e);for(let r of e.C_)t.d_(r.mutations)}async function oQ(e,t,r){let n=e.C_.shift(),i=su.from(n,t,r);await oq(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await oz(e)}async function oX(e,t){t&&o0(e).I_&&await async function(e,t){var r;if(function(e){switch(e){default:return r5();case r3.CANCELLED:case r3.UNKNOWN:case r3.DEADLINE_EXCEEDED:case r3.RESOURCE_EXHAUSTED:case r3.INTERNAL:case r3.UNAVAILABLE:case r3.UNAUTHENTICATED:return!1;case r3.INVALID_ARGUMENT:case r3.NOT_FOUND:case r3.ALREADY_EXISTS:case r3.PERMISSION_DENIED:case r3.FAILED_PRECONDITION:case r3.ABORTED:case r3.OUT_OF_RANGE:case r3.UNIMPLEMENTED:case r3.DATA_LOSS:return!0}}(r=t.code)&&r!==r3.ABORTED){let r=e.C_.shift();o0(e).Xo(),await oq(e,()=>e.remoteSyncer.rejectFailedWrite(r.batchId,t)),await oz(e)}}(e,t),oK(e)&&oH(e)}async function oJ(e,t){e.asyncQueue.verifyOperationInProgress(),r2("RemoteStore","RemoteStore received new credentials");let r=oF(e);e.F_.add(3),await oR(e),r&&e.O_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.F_.delete(3),await oN(e)}async function oY(e,t){t?(e.F_.delete(2),await oN(e)):t||(e.F_.add(2),await oR(e),e.O_.set("Unknown"))}function oZ(e){var t,r,n;return e.B_||(e.B_=(t=e.datastore,r=e.asyncQueue,n={Io:oV.bind(null,e),Eo:oj.bind(null,e),c_:oB.bind(null,e)},t.V_(),new oS(r,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,n)),e.M_.push(async t=>{t?(e.B_.Xo(),oU(e)?oM(e):e.O_.set("Unknown")):(await e.B_.stop(),e.N_=void 0)})),e.B_}function o0(e){var t,r,n;return e.L_||(e.L_=(t=e.datastore,r=e.asyncQueue,n={Io:oG.bind(null,e),Eo:oX.bind(null,e),E_:oW.bind(null,e),T_:oQ.bind(null,e)},t.V_(),new oC(r,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,n)),e.M_.push(async t=>{t?(e.L_.Xo(),await oz(e)):(await e.L_.stop(),e.C_.length>0&&(r2("RemoteStore",`Stopping write stream with ${e.C_.length} pending writes`),e.C_=[]))})),e.L_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(e,t,r,n,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=n,this.removalCallback=i,this.deferred=new r8,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,n,i){let s=Date.now()+r,o=new o1(e,t,s,n,i);return o.start(r),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new r7(r3.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function o2(e,t){if(r9("AsyncQueue",`${t}: ${e}`),nE(e))return new r7(r3.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o9{constructor(e){this.comparator=e?(t,r)=>e(t,r)||ny.comparator(t.key,r.key):(e,t)=>ny.comparator(e.key,t.key),this.keyedMap=iV(),this.sortedSet=new nk(this.comparator)}static emptySet(e){return new o9(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof o9)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,n=r.getNext().key;if(!e.isEqual(n))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let r=new o9;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o4{constructor(){this.k_=new nk(ny.comparator)}track(e){let t=e.doc.key,r=this.k_.get(t);r?0!==e.type&&3===r.type?this.k_=this.k_.insert(t,e):3===e.type&&1!==r.type?this.k_=this.k_.insert(t,{type:r.type,doc:e.doc}):2===e.type&&2===r.type?this.k_=this.k_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===r.type?this.k_=this.k_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===r.type?this.k_=this.k_.remove(t):1===e.type&&2===r.type?this.k_=this.k_.insert(t,{type:1,doc:r.doc}):0===e.type&&1===r.type?this.k_=this.k_.insert(t,{type:2,doc:e.doc}):r5():this.k_=this.k_.insert(t,e)}q_(){let e=[];return this.k_.inorderTraversal((t,r)=>{e.push(r)}),e}}class o6{constructor(e,t,r,n,i,s,o,a,l){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=n,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=l}static fromInitialDocuments(e,t,r,n,i){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new o6(e,t,o9.emptySet(t),s,r,n,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&iR(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==r[e].type||!t[e].doc.isEqual(r[e].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o5{constructor(){this.Q_=void 0,this.listeners=[]}}class o3{constructor(){this.queries=new iM(e=>iP(e),iR),this.onlineState="Unknown",this.K_=new Set}}async function o7(e,t){let r=t.query,n=!1,i=e.queries.get(r);if(i||(n=!0,i=new o5),n)try{i.Q_=await e.onListen(r)}catch(r){let e=o2(r,`Initialization of query '${iD(t.query)}' failed`);return void t.onError(e)}e.queries.set(r,i),i.listeners.push(t),t.U_(e.onlineState),i.Q_&&t.W_(i.Q_)&&ar(e)}async function o8(e,t){let r=t.query,n=!1,i=e.queries.get(r);if(i){let e=i.listeners.indexOf(t);e>=0&&(i.listeners.splice(e,1),n=0===i.listeners.length)}if(n)return e.queries.delete(r),e.onUnlisten(r)}function ae(e,t){let r=!1;for(let n of t){let t=n.query,i=e.queries.get(t);if(i){for(let e of i.listeners)e.W_(n)&&(r=!0);i.Q_=n}}r&&ar(e)}function at(e,t,r){let n=e.queries.get(t);if(n)for(let e of n.listeners)e.onError(r);e.queries.delete(t)}function ar(e){e.K_.forEach(e=>{e.next()})}class an{constructor(e,t,r){this.query=e,this.G_=t,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(e){if(!this.options.includeMetadataChanges){let t=[];for(let r of e.docChanges)3!==r.type&&t.push(r);e=new o6(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.z_?this.H_(e)&&(this.G_.next(e),t=!0):this.J_(e,this.onlineState)&&(this.Y_(e),t=!0),this.j_=e,t}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let t=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),t=!0),t}J_(e,t){return!e.fromCache||(!this.options.Z_||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}H_(e){if(e.docChanges.length>0)return!0;let t=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Y_(e){e=o6.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e){this.key=e}}class as{constructor(e){this.key=e}}class ao{constructor(e,t){this.query=e,this.oa=t,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=iz(),this.mutatedKeys=iz(),this.ua=ix(e),this.ca=new o9(this.ua)}get la(){return this.oa}ha(e,t){let r=t?t.Pa:new o4,n=t?t.ca:this.ca,i=t?t.mutatedKeys:this.mutatedKeys,s=n,o=!1,a="F"===this.query.limitType&&n.size===this.query.limit?n.last():null,l="L"===this.query.limitType&&n.size===this.query.limit?n.first():null;if(e.inorderTraversal((e,t)=>{let u=n.get(e),c=iL(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations),f=!1;u&&c?u.data.isEqual(c.data)?h!==d&&(r.track({type:3,doc:c}),f=!0):this.Ia(u,c)||(r.track({type:2,doc:c}),f=!0,(a&&this.ua(c,a)>0||l&&0>this.ua(c,l))&&(o=!0)):!u&&c?(r.track({type:0,doc:c}),f=!0):u&&!c&&(r.track({type:1,doc:u}),f=!0,(a||l)&&(o=!0)),f&&(c?(s=s.add(c),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),r.track({type:1,doc:e})}return{ca:s,Pa:r,es:o,mutatedKeys:i}}Ia(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r){let n=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;let i=e.Pa.q_();i.sort((e,t)=>(function(e,t){let r=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return r5()}};return r(e)-r(t)})(e.type,t.type)||this.ua(e.doc,t.doc)),this.da(r);let s=t?this.Ta():[],o=0===this.aa.size&&this.current?1:0,a=o!==this._a;return(this._a=o,0!==i.length||a)?{snapshot:new o6(this.query,e.ca,n,i,e.mutatedKeys,0===o,a,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ea:s}:{Ea:s}}U_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new o4,mutatedKeys:this.mutatedKeys,es:!1},!1)):{Ea:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}da(e){e&&(e.addedDocuments.forEach(e=>this.oa=this.oa.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.oa=this.oa.delete(e)),this.current=e.current)}Ta(){if(!this.current)return[];let e=this.aa;this.aa=iz(),this.ca.forEach(e=>{this.Aa(e.key)&&(this.aa=this.aa.add(e.key))});let t=[];return e.forEach(e=>{this.aa.has(e)||t.push(new as(e))}),this.aa.forEach(r=>{e.has(r)||t.push(new ai(r))}),t}Ra(e){this.oa=e.Ps,this.aa=iz();let t=this.ha(e.documents);return this.applyChanges(t,!0)}Va(){return o6.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,0===this._a,this.hasCachedResults)}}class aa{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class al{constructor(e){this.key=e,this.ma=!1}}class au{constructor(e,t,r,n,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=n,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.fa={},this.ga=new iM(e=>iP(e),iR),this.pa=new Map,this.ya=new Set,this.wa=new nk(ny.comparator),this.Sa=new Map,this.ba=new s4,this.Da={},this.Ca=new Map,this.va=sY.Ln(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return!0===this.Fa}}async function ac(e,t){var r,n;let i,s;let o=(e.remoteStore.remoteSyncer.applyRemoteEvent=ap.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=aA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=am.bind(null,e),e.fa.c_=ae.bind(null,e.eventManager),e.fa.xa=at.bind(null,e.eventManager),e),a=o.ga.get(t);if(a)i=a.targetId,o.sharedClientState.addLocalQueryTarget(i),s=a.view.Va();else{let e=await (r=o.localStore,n=ik(t),r.persistence.runTransaction("Allocate target","readwrite",e=>{let t;return r.Kr.getTargetData(e,n).next(i=>i?(t=i,nb.resolve(t)):r.Kr.allocateTargetId(e).next(i=>(t=new sH(n,i,"TargetPurposeListen",e.currentSequenceNumber),r.Kr.addTargetData(e,t).next(()=>t))))}).then(e=>{let t=r.rs.get(e.targetId);return(null===t||e.snapshotVersion.compareTo(t.snapshotVersion)>0)&&(r.rs=r.rs.insert(e.targetId,e),r.ss.set(n,e.targetId)),e})),a=o.sharedClientState.addLocalQueryTarget(e.targetId);i=e.targetId,s=await ah(o,t,i,"current"===a,e.resumeToken),o.isPrimaryClient&&oP(o.remoteStore,e)}return s}async function ah(e,t,r,n,i){e.Ma=(t,r,n)=>(async function(e,t,r,n){let i=t.view.ha(r);i.es&&(i=await oc(e.localStore,t.query,!1).then(({documents:e})=>t.view.ha(e,i)));let s=n&&n.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return aI(e,t.targetId,o.Ea),o.snapshot})(e,t,r,n);let s=await oc(e.localStore,t,!0),o=new ao(t,s.Ps),a=o.ha(s.documents),l=sw.createSynthesizedTargetChangeForCurrentChange(r,n&&"Offline"!==e.onlineState,i),u=o.applyChanges(a,e.isPrimaryClient,l);aI(e,r,u.Ea);let c=new aa(t,r,o);return e.ga.set(t,c),e.pa.has(r)?e.pa.get(r).push(t):e.pa.set(r,[t]),u.snapshot}async function ad(e,t){let r=e.ga.get(t),n=e.pa.get(r.targetId);if(n.length>1)return e.pa.set(r.targetId,n.filter(e=>!iR(e,t))),void e.ga.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(r.targetId),e.sharedClientState.isActiveQueryTarget(r.targetId)||await ou(e.localStore,r.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(r.targetId),oD(e.remoteStore,r.targetId),ab(e,r.targetId)}).catch(n_)):(ab(e,r.targetId),await ou(e.localStore,r.targetId,!0))}async function af(e,t,r){var n;let i=(e.remoteStore.remoteSyncer.applySuccessfulWrite=ay.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=av.bind(null,e),e);try{let e;let s=await function(e,t){let r,n;let i=nh.now(),s=t.reduce((e,t)=>e.add(t.key),iz());return e.persistence.runTransaction("Locally write mutations","readwrite",o=>{let a=iU,l=iz();return e._s.getEntries(o,s).next(e=>{(a=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(o,a)).next(n=>{r=n;let s=[];for(let e of t){let t=function(e,t){let r=null;for(let n of e.fieldTransforms){let e=t.data.field(n.field),i=iQ(n.transform,e||null);null!=i&&(null===r&&(r=n5.empty()),r.set(n.field,i))}return r||null}(e,r.get(e.key).overlayedDocument);null!=t&&s.push(new sr(e.key,t,function e(t){let r=[];return nC(t.fields,(t,n)=>{let i=new nm([t]);if(n9(n)){let t=e(n.mapValue).fields;if(0===t.length)r.push(i);else for(let e of t)r.push(i.child(e))}else r.push(i)}),new nD(r)}(t.value.mapValue),i6.exists(!0)))}return e.mutationQueue.addMutationBatch(o,i,s,t)}).next(t=>{n=t;let i=t.applyToLocalDocumentSet(r,l);return e.documentOverlayCache.saveOverlays(o,t.batchId,i)})}).then(()=>({batchId:n.batchId,changes:ij(r)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),n=s.batchId,(e=i.Da[i.currentUser.toKey()])||(e=new nk(nu)),e=e.insert(n,r),i.Da[i.currentUser.toKey()]=e,await aS(i,s.changes),await oz(i.remoteStore)}catch(t){let e=o2(t,"Failed to persist write");r.reject(e)}}async function ap(e,t){try{let r=await function(e,t){let r=t.snapshotVersion,n=e.rs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{var s;let o,a;let l=e._s.newChangeBuffer({trackRemovals:!0});n=e.rs;let u=[];t.targetChanges.forEach((s,o)=>{var a;let l=n.get(o);if(!l)return;u.push(e.Kr.removeMatchingKeys(i,s.removedDocuments,o).next(()=>e.Kr.addMatchingKeys(i,s.addedDocuments,o)));let c=l.withSequenceNumber(i.currentSequenceNumber);null!==t.targetMismatches.get(o)?c=c.withResumeToken(nx.EMPTY_BYTE_STRING,nd.min()).withLastLimboFreeSnapshotVersion(nd.min()):s.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(s.resumeToken,r)),n=n.insert(o,c),a=c,(0===l.resumeToken.approximateByteSize()||a.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&u.push(e.Kr.updateTargetData(i,c))});let c=iU,h=iz();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(i,r))}),u.push((s=t.documentUpdates,o=iz(),a=iz(),s.forEach(e=>o=o.add(e)),l.getEntries(i,o).next(e=>{let t=iU;return s.forEach((r,n)=>{let i=e.get(r);n.isFoundDocument()!==i.isFoundDocument()&&(a=a.add(r)),n.isNoDocument()&&n.version.isEqual(nd.min())?(l.removeEntry(r,n.readTime),t=t.insert(r,n)):!i.isValidDocument()||n.version.compareTo(i.version)>0||0===n.version.compareTo(i.version)&&i.hasPendingWrites?(l.addEntry(n),t=t.insert(r,n)):r2("LocalStore","Ignoring outdated watch update for ",r,". Current version:",i.version," Watch version:",n.version)}),{ls:t,hs:a}})).next(e=>{c=e.ls,h=e.hs})),!r.isEqual(nd.min())){let t=e.Kr.getLastRemoteSnapshotVersion(i).next(t=>e.Kr.setTargetsMetadata(i,i.currentSequenceNumber,r));u.push(t)}return nb.waitFor(u).next(()=>l.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(t=>(e.rs=n,t))}(e.localStore,t);t.targetChanges.forEach((t,r)=>{let n=e.Sa.get(r);n&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||r5(),t.addedDocuments.size>0?n.ma=!0:t.modifiedDocuments.size>0?n.ma||r5():t.removedDocuments.size>0&&(n.ma||r5(),n.ma=!1))}),await aS(e,r,t)}catch(e){await n_(e)}}function ag(e,t,r){var n;if(e.isPrimaryClient&&0===r||!e.isPrimaryClient&&1===r){let r;let i=[];e.ga.forEach((e,r)=>{let n=r.view.U_(t);n.snapshot&&i.push(n.snapshot)}),(n=e.eventManager).onlineState=t,r=!1,n.queries.forEach((e,n)=>{for(let e of n.listeners)e.U_(t)&&(r=!0)}),r&&ar(n),i.length&&e.fa.c_(i),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}async function am(e,t,r){e.sharedClientState.updateQueryState(t,"rejected",r);let n=e.Sa.get(t),i=n&&n.key;if(i){let r=new nk(ny.comparator);r=r.insert(i,n3.newNoDocument(i,nd.min()));let n=iz().add(i),s=new sv(nd.min(),new Map,new nk(nu),r,n);await ap(e,s),e.wa=e.wa.remove(i),e.Sa.delete(t),aT(e)}else await ou(e.localStore,t,!1).then(()=>ab(e,t,r)).catch(n_)}async function ay(e,t){var r;let n=t.batch.batchId;try{let i=await (r=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let n=t.batch.keys(),i=r._s.newChangeBuffer({trackRemovals:!0});return(function(e,t,r,n){let i=r.batch,s=i.keys(),o=nb.resolve();return s.forEach(e=>{o=o.next(()=>n.getEntry(t,e)).next(t=>{let s=r.docVersions.get(e);null!==s||r5(),0>t.version.compareTo(s)&&(i.applyToRemoteDocument(t,r),t.isValidDocument()&&(t.setReadTime(r.commitVersion),n.addEntry(t)))})}),o.next(()=>e.mutationQueue.removeMutationBatch(t,i))})(r,e,t,i).next(()=>i.apply(e)).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t.batch.batchId)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=iz();for(let r=0;r<e.mutationResults.length;++r)e.mutationResults[r].transformResults.length>0&&(t=t.add(e.batch.mutations[r].key));return t}(t))).next(()=>r.localDocuments.getDocuments(e,n))});a_(e,n,null),aw(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await aS(e,i)}catch(e){await n_(e)}}async function av(e,t,r){var n;try{let i=await (n=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next(t=>(null!==t||r5(),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t))).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r)).next(()=>n.localDocuments.getDocuments(e,r))});a_(e,t,r),aw(e,t),e.sharedClientState.updateMutationState(t,"rejected",r),await aS(e,i)}catch(e){await n_(e)}}function aw(e,t){(e.Ca.get(t)||[]).forEach(e=>{e.resolve()}),e.Ca.delete(t)}function a_(e,t,r){let n=e.Da[e.currentUser.toKey()];if(n){let i=n.get(t);i&&(r?i.reject(r):i.resolve(),n=n.remove(t)),e.Da[e.currentUser.toKey()]=n}}function ab(e,t,r=null){for(let n of(e.sharedClientState.removeLocalQueryTarget(t),e.pa.get(t)))e.ga.delete(n),r&&e.fa.xa(n,r);e.pa.delete(t),e.isPrimaryClient&&e.ba.mr(t).forEach(t=>{e.ba.containsKey(t)||aE(e,t)})}function aE(e,t){e.ya.delete(t.path.canonicalString());let r=e.wa.get(t);null!==r&&(oD(e.remoteStore,r),e.wa=e.wa.remove(t),e.Sa.delete(r),aT(e))}function aI(e,t,r){for(let n of r)n instanceof ai?(e.ba.addReference(n.key,t),function(e,t){let r=t.key,n=r.path.canonicalString();e.wa.get(r)||e.ya.has(n)||(r2("SyncEngine","New document in limbo: "+r),e.ya.add(n),aT(e))}(e,n)):n instanceof as?(r2("SyncEngine","Document no longer in limbo: "+n.key),e.ba.removeReference(n.key,t),e.ba.containsKey(n.key)||aE(e,n.key)):r5()}function aT(e){for(;e.ya.size>0&&e.wa.size<e.maxConcurrentLimboResolutions;){var t;let r=e.ya.values().next().value;e.ya.delete(r);let n=new ny(np.fromString(r)),i=e.va.next();e.Sa.set(i,new al(n)),e.wa=e.wa.insert(n,i),oP(e.remoteStore,new sH(ik((t=n.path,new iE(t))),i,"TargetPurposeLimboResolution",nI.ae))}}async function aS(e,t,r){let n=[],i=[],s=[];e.ga.isEmpty()||(e.ga.forEach((o,a)=>{s.push(e.Ma(a,t,r).then(t=>{if((t||r)&&e.isPrimaryClient&&e.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){n.push(t);let e=on.$i(a.targetId,t);i.push(e)}}))}),await Promise.all(s),e.fa.c_(n),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",r=>nb.forEach(t,t=>nb.forEach(t.Qi,n=>e.persistence.referenceDelegate.addReference(r,t.targetId,n)).next(()=>nb.forEach(t.Ki,n=>e.persistence.referenceDelegate.removeReference(r,t.targetId,n)))))}catch(e){if(!nE(e))throw e;r2("LocalStore","Failed to update sequence numbers: "+e)}for(let r of t){let t=r.targetId;if(!r.fromCache){let r=e.rs.get(t),n=r.snapshotVersion,i=r.withLastLimboFreeSnapshotVersion(n);e.rs=e.rs.insert(t,i)}}}(e.localStore,i))}async function aC(e,t){if(!e.currentUser.isEqual(t)){r2("SyncEngine","User change. New user:",t.toKey());let r=await oa(e.localStore,t);e.currentUser=t,e.Ca.forEach(e=>{e.forEach(e=>{e.reject(new r7(r3.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),e.Ca.clear(),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await aS(e,r.cs)}}function aA(e,t){let r=e.Sa.get(t);if(r&&r.ma)return iz().add(r.key);{let r=iz(),n=e.pa.get(t);if(!n)return r;for(let t of n){let n=e.ga.get(t);r=r.unionWith(n.view.la)}return r}}class ak{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=oE(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){var t,r,n,i;return t=this.persistence,r=new os,n=e.initialUser,i=this.serializer,new oo(t,r,n,i)}createPersistence(e){return new oe(or.Jr,this.serializer)}createSharedClientState(e){return new od}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class aO{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>ag(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=aC.bind(null,this.syncEngine),await oY(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new o3}createDatastore(e){var t,r,n;let i=oE(e.databaseInfo.databaseId),s=(t=e.databaseInfo,new o_(t));return r=e.authCredentials,n=e.appCheckCredentials,new oA(r,n,s,i)}createRemoteStore(e){var t,r,n,i;return t=this.localStore,r=this.datastore,n=e.asyncQueue,i=op.C()?new op:new of,new oO(t,r,n,e=>ag(this.syncEngine,e,0),i)}createSyncEngine(e,t){return function(e,t,r,n,i,s,o){let a=new au(e,t,r,n,i,s);return o&&(a.Fa=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){r2("RemoteStore","RemoteStore shutting down."),e.F_.add(5),await oR(e),e.x_.shutdown(),e.O_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):r9("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(e,t,r,n){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=n,this.user=rY.UNAUTHENTICATED,this.clientId=nl.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async e=>{r2("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(r,e=>(r2("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new r7(r3.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new r8;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(r){let t=o2(r,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function aP(e,t){e.asyncQueue.verifyOperationInProgress(),r2("FirestoreClient","Initializing OfflineComponentProvider");let r=await e.getConfiguration();await t.initialize(r);let n=r.initialUser;e.setCredentialChangeListener(async e=>{n.isEqual(e)||(await oa(t.localStore,e),n=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function aD(e,t){e.asyncQueue.verifyOperationInProgress();let r=await aL(e);r2("FirestoreClient","Initializing OnlineComponentProvider");let n=await e.getConfiguration();await t.initialize(r,n),e.setCredentialChangeListener(e=>oJ(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,r)=>oJ(t.remoteStore,r)),e._onlineComponents=t}async function aL(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){r2("FirestoreClient","Using user provided OfflineComponentProvider");try{await aP(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!("FirebaseError"===t.name?t.code===r3.FAILED_PRECONDITION||t.code===r3.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code))throw t;r4("Error using user provided cache. Falling back to memory cache: "+t),await aP(e,new ak)}}else r2("FirestoreClient","Using default OfflineComponentProvider"),await aP(e,new ak)}return e._offlineComponents}async function ax(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(r2("FirestoreClient","Using user provided OnlineComponentProvider"),await aD(e,e._uninitializedComponentsProvider._online)):(r2("FirestoreClient","Using default OnlineComponentProvider"),await aD(e,new aO))),e._onlineComponents}async function aM(e){let t=await ax(e),r=t.eventManager;return r.onListen=ac.bind(null,t.syncEngine),r.onUnlisten=ad.bind(null,t.syncEngine),r}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aU(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let aF=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aV(e,t,r){if(!r)throw new r7(r3.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function aj(e){if(!ny.isDocumentKey(e))throw new r7(r3.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function aB(e){if(ny.isDocumentKey(e))throw new r7(r3.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function a$(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let r=(t=e).constructor?t.constructor.name:null;return r?`a custom ${r} object`:"an object"}}return"function"==typeof e?"a function":r5()}function aq(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new r7(r3.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let r=a$(e);throw new r7(r3.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${r}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class az{constructor(e){var t,r;if(void 0===e.host){if(void 0!==e.ssl)throw new r7(r3.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new r7(r3.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,r,n){if(!0===t&&!0===n)throw new r7(r3.INVALID_ARGUMENT,`${e} and ${r} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=aU(null!==(r=e.experimentalLongPollingOptions)&&void 0!==r?r:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new r7(r3.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new r7(r3.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new r7(r3.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,r;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,t.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class aK{constructor(e,t,r,n){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new az({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new r7(r3.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new r7(r3.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new az(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new nt;switch(e.type){case"firstParty":return new ns(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new r7(r3.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=aF.get(e);t&&(r2("ComponentProvider","Removing Datastore"),aF.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aH{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new aH(this.firestore,e,this._query)}}class aG{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new aW(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new aG(this.firestore,e,this._key)}}class aW extends aH{constructor(e,t,r){super(e,t,new iE(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new aG(this.firestore,null,new ny(e))}withConverter(e){return new aW(this.firestore,e,this._path)}}function aQ(e,t,...r){if(e=(0,f.m9)(e),aV("collection","path",t),e instanceof aK){let n=np.fromString(t,...r);return aB(n),new aW(e,null,n)}{if(!(e instanceof aG||e instanceof aW))throw new r7(r3.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=e._path.child(np.fromString(t,...r));return aB(n),new aW(e.firestore,null,n)}}function aX(e,t,...r){if(e=(0,f.m9)(e),1==arguments.length&&(t=nl.V()),aV("doc","path",t),e instanceof aK){let n=np.fromString(t,...r);return aj(n),new aG(e,null,new ny(n))}{if(!(e instanceof aG||e instanceof aW))throw new r7(r3.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=e._path.child(np.fromString(t,...r));return aj(n),new aG(e.firestore,e instanceof aW?e.converter:null,new ny(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aJ{constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new oI(this,"async_queue_retry"),this.ou=()=>{let e=ob();e&&r2("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Ho.$o()};let e=ob();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this._u(),this.au(e)}enterRestrictedMode(e){if(!this.eu){this.eu=!0,this.iu=e||!1;let t=ob();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.ou)}}enqueue(e){if(this._u(),this.eu)return new Promise(()=>{});let t=new r8;return this.au(()=>this.eu&&this.iu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xa.push(e),this.uu()))}async uu(){if(0!==this.Xa.length){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(e){if(!nE(e))throw e;r2("AsyncQueue","Operation failed with retryable error: "+e)}this.Xa.length>0&&this.Ho.Qo(()=>this.uu())}}au(e){let t=this.Za.then(()=>(this.ru=!0,e().catch(e=>{let t;this.nu=e,this.ru=!1;let r=(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t);throw r9("INTERNAL UNHANDLED ERROR: ",r),e}).then(e=>(this.ru=!1,e))));return this.Za=t,t}enqueueAfterDelay(e,t,r){this._u(),this.su.indexOf(e)>-1&&(t=0);let n=o1.createAndSchedule(this,e,t,r,e=>this.cu(e));return this.tu.push(n),n}_u(){this.nu&&r5()}verifyOperationInProgress(){}async lu(){let e;do e=this.Za,await e;while(e!==this.Za)}hu(e){for(let t of this.tu)if(t.timerId===e)return!0;return!1}Pu(e){return this.lu().then(()=>{for(let t of(this.tu.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.tu))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.lu()})}Iu(e){this.su.push(e)}cu(e){let t=this.tu.indexOf(e);this.tu.splice(t,1)}}class aY extends aK{constructor(e,t,r,n){super(e,t,r,n),this.type="firestore",this._queue=new aJ,this._persistenceKey=(null==n?void 0:n.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||a1(this),this._firestoreClient.terminate()}}function aZ(e,t){let r="object"==typeof e?e:(0,c.Mq)(),n=(0,c.qX)(r,"firestore").getImmediate({identifier:"string"==typeof e?e:t||"(default)"});if(!n._initialized){let e=(0,f.P0)("firestore");e&&function(e,t,r,n={}){var i;let s=(e=aq(e,aK))._getSettings(),o=`${t}:${r}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&r4("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),n.mockUserToken){let t,r;if("string"==typeof n.mockUserToken)t=n.mockUserToken,r=rY.MOCK_USER;else{t=(0,f.Sg)(n.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);let s=n.mockUserToken.sub||n.mockUserToken.user_id;if(!s)throw new r7(r3.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");r=new rY(s)}e._authCredentials=new nr(new ne(t,r))}}(n,...e)}return n}function a0(e){return e._firestoreClient||a1(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function a1(e){var t,r,n,i,s,o;let a=e._freezeSettings(),l=(i=e._databaseId,s=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",o=e._persistenceKey,new nq(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,aU(a.experimentalLongPollingOptions),a.useFetchStreams));e._firestoreClient=new aR(e._authCredentials,e._appCheckCredentials,e._queue,l),(null===(r=a.localCache)||void 0===r?void 0:r._offlineComponentProvider)&&(null===(n=a.localCache)||void 0===n?void 0:n._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:a.localCache.kind,_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a2{constructor(e){this._byteString=e}static fromBase64String(e){try{return new a2(nx.fromBase64String(e))}catch(e){throw new r7(r3.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new a2(nx.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a9{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new r7(r3.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nm(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a4{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a6{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new r7(r3.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new r7(r3.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return nu(this._lat,e._lat)||nu(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let a5=/^__.*__$/;class a3{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return null!==this.fieldMask?new sr(e,this.data,this.fieldMask,t,this.fieldTransforms):new st(e,this.data,t,this.fieldTransforms)}}class a7{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new sr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function a8(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw r5()}}class le{constructor(e,t,r,n,i,s){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=n,void 0===i&&this.du(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(e){return new le(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Au(e){var t;let r=null===(t=this.path)||void 0===t?void 0:t.child(e),n=this.Eu({path:r,Ru:!1});return n.Vu(e),n}mu(e){var t;let r=null===(t=this.path)||void 0===t?void 0:t.child(e),n=this.Eu({path:r,Ru:!1});return n.du(),n}fu(e){return this.Eu({path:void 0,Ru:!0})}gu(e){return lh(e,this.settings.methodName,this.settings.pu||!1,this.path,this.settings.yu)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}du(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vu(this.path.get(e))}Vu(e){if(0===e.length)throw this.gu("Document fields must not be empty");if(a8(this.Tu)&&a5.test(e))throw this.gu('Document fields cannot begin and end with "__"')}}class lt{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||oE(e)}wu(e,t,r,n=!1){return new le({Tu:e,methodName:t,yu:r,path:nm.emptyPath(),Ru:!1,pu:n},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function lr(e){let t=e._freezeSettings(),r=oE(e._databaseId);return new lt(e._databaseId,!!t.ignoreUndefinedProperties,r)}class ln extends a4{_toFieldTransform(e){if(2!==e.Tu)throw 1===e.Tu?e.gu(`${this._methodName}() can only appear at the top level of your update data`):e.gu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ln}}function li(e,t){if(lo(e=(0,f.m9)(e)))return la("Unsupported field value:",t,e),ls(e,t);if(e instanceof a4)return function(e,t){if(!a8(t.Tu))throw t.gu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.gu(`${e._methodName}() is not currently supported inside arrays`);let r=e._toFieldTransform(t);r&&t.fieldTransforms.push(r)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Ru&&4!==t.Tu)throw t.gu("Nested arrays are not supported");return function(e,t){let r=[],n=0;for(let i of e){let e=li(i,t.fu(n));null==e&&(e={nullValue:"NULL_VALUE"}),r.push(e),n++}return{arrayValue:{values:r}}}(e,t)}return function(e,t){if(null===(e=(0,f.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e){var r,n,i;return r=t.serializer,"number"==typeof(i=n=e)&&Number.isInteger(i)&&!nT(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER?iG(n):iH(r,n)}if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let r=nh.fromDate(e);return{timestampValue:sP(t.serializer,r)}}if(e instanceof nh){let r=new nh(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:sP(t.serializer,r)}}if(e instanceof a6)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof a2)return{bytesValue:sD(t.serializer,e._byteString)};if(e instanceof aG){let r=t.databaseId,n=e.firestore._databaseId;if(!n.isEqual(r))throw t.gu(`Document reference is for database ${n.projectId}/${n.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:sx(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.gu(`Unsupported field value: ${a$(e)}`)}(e,t)}function ls(e,t){let r={};return nA(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):nC(e,(e,n)=>{let i=li(n,t.Au(e));null!=i&&(r[e]=i)}),{mapValue:{fields:r}}}function lo(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof nh||e instanceof a6||e instanceof a2||e instanceof aG||e instanceof a4)}function la(e,t,r){if(!lo(r)||!("object"==typeof r&&null!==r&&(Object.getPrototypeOf(r)===Object.prototype||null===Object.getPrototypeOf(r)))){let n=a$(r);throw"an object"===n?t.gu(e+" a custom object"):t.gu(e+" "+n)}}function ll(e,t,r){if((t=(0,f.m9)(t))instanceof a9)return t._internalPath;if("string"==typeof t)return lc(e,t);throw lh("Field path arguments must be of type string or ",e,!1,void 0,r)}let lu=RegExp("[~\\*/\\[\\]]");function lc(e,t,r){if(t.search(lu)>=0)throw lh(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,r);try{return new a9(...t.split("."))._internalPath}catch(n){throw lh(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,r)}}function lh(e,t,r,n,i){let s=n&&!n.isEmpty(),o=void 0!==i,a=`Function ${t}() called with invalid data`;r&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${n}`),o&&(l+=` in document ${i}`),l+=")"),new r7(r3.INVALID_ARGUMENT,a+e+l)}function ld(e,t){return e.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(e,t,r,n,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=n,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new aG(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new lp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(lg("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class lp extends lf{data(){return super.data()}}function lg(e,t){return"string"==typeof t?lc(e,t):t instanceof a9?t._internalPath:t._delegate._internalPath}class lm{}class ly extends lm{}function lv(e,t,...r){let n=[];for(let i of(t instanceof lm&&n.push(t),function(e){let t=e.filter(e=>e instanceof l_).length,r=e.filter(e=>e instanceof lw).length;if(t>1||t>0&&r>0)throw new r7(r3.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n=n.concat(r)),n))e=i._apply(e);return e}class lw extends ly{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new lw(e,t,r)}_apply(e){let t=this._parse(e);return lI(e._query,t),new aH(e.firestore,e.converter,iO(e._query,t))}_parse(e){let t=lr(e.firestore),r=function(e,t,r,n,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new r7(r3.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){lE(o,s);let t=[];for(let r of o)t.push(lb(n,e,r));a={arrayValue:{values:t}}}else a=lb(n,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||lE(o,s),a=function(e,t,r,n=!1){return li(r,e.wu(n?4:3,t))}(r,t,o,"in"===s||"not-in"===s);return ii.create(i,s,a)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return r}}class l_ extends lm{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new l_(e,t)}_parse(e){let t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:is.create(t,this._getOperator())}_apply(e){let t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let r=e,n=t.getFlattenedFilters();for(let e of n)lI(r,e),r=iO(r,e)}(e._query,t),new aH(e.firestore,e.converter,iO(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function lb(e,t,r){if("string"==typeof(r=(0,f.m9)(r))){if(""===r)throw new r7(r3.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!iC(t)&&-1!==r.indexOf("/"))throw new r7(r3.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${r}' contains a '/' character.`);let n=t.path.child(np.fromString(r));if(!ny.isDocumentKey(n))throw new r7(r3.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return nY(e,new ny(n))}if(r instanceof aG)return nY(e,r._key);throw new r7(r3.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${a$(r)}.`)}function lE(e,t){if(!Array.isArray(e)||0===e.length)throw new r7(r3.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function lI(e,t){if(t.isInequality()){let r=iS(e),n=t.field;if(null!==r&&!r.isEqual(n))throw new r7(r3.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${n.toString()}'`);let i=iT(e);null!==i&&function(e,t,r){if(!r.isEqual(t))throw new r7(r3.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${r.toString()}' instead.`)}(0,n,i)}let r=function(e,t){for(let r of e)for(let e of r.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==r)throw r===t.op?new r7(r3.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new r7(r3.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${r.toString()}' filters.`)}class lT{convertValue(e,t="none"){switch(nH(e)){case 0:return null;case 1:return e.booleanValue;case 2:return nF(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(nV(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw r5()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let r={};return nC(e,(e,n)=>{r[e]=this.convertValue(n,t)}),r}convertGeoPoint(e){return new a6(nF(e.latitude),nF(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let r=nB(e);return null==r?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(n$(e));default:return null}}convertTimestamp(e){let t=nU(e);return new nh(t.seconds,t.nanos)}convertDocumentKey(e,t){let r=np.fromString(e);sK(r)||r5();let n=new nz(r.get(1),r.get(3)),i=new ny(r.popFirst(5));return n.isEqual(t)||r9(`Document ${i} contains a document reference within a different database (${n.projectId}/${n.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class lC extends lf{constructor(e,t,r,n,i,s){super(e,t,r,n,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new lA(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let r=this._document.data.field(lg("DocumentSnapshot.get",e));if(null!==r)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class lA extends lC{data(e={}){return super.data(e)}}class lk{constructor(e,t,r,n){this._firestore=e,this._userDataWriter=t,this._snapshot=n,this.metadata=new lS(n.hasPendingWrites,n.fromCache),this.query=r}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new lA(this._firestore,this._userDataWriter,r.key,r,new lS(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new r7(r3.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(r=>{let n=new lA(e._firestore,e._userDataWriter,r.doc.key,r.doc,new lS(e._snapshot.mutatedKeys.has(r.doc.key),e._snapshot.fromCache),e.query.converter);return r.doc,{type:"added",doc:n,oldIndex:-1,newIndex:t++}})}{let r=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let n=new lA(e._firestore,e._userDataWriter,t.doc.key,t.doc,new lS(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,s=-1;return 0!==t.type&&(i=r.indexOf(t.doc.key),r=r.delete(t.doc.key)),1!==t.type&&(s=(r=r.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return r5()}}(t.type),doc:n,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lO(e){e=aq(e,aG);let t=aq(e.firestore,aY);return(function(e,t,r={}){let n=new r8;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,r,n,i){var s;let o=new aN({next:s=>{t.enqueueAndForget(()=>o8(e,a));let o=s.docs.has(r);!o&&s.fromCache?i.reject(new r7(r3.UNAVAILABLE,"Failed to get document because the client is offline.")):o&&s.fromCache&&n&&"server"===n.source?i.reject(new r7(r3.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),a=new an((s=r.path,new iE(s)),o,{includeMetadataChanges:!0,Z_:!0});return o7(e,a)})(await aM(e),e.asyncQueue,t,r,n)),n.promise})(a0(t),e._key).then(r=>(function(e,t,r){let n=r.docs.get(t._key),i=new lN(e);return new lC(e,i,t._key,n,new lS(r.hasPendingWrites,r.fromCache),t.converter)})(t,e,r))}class lN extends lT{constructor(e){super(),this.firestore=e}convertBytes(e){return new a2(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new aG(this.firestore,null,t)}}function lR(e){e=aq(e,aH);let t=aq(e.firestore,aY),r=a0(t),n=new lN(t);return(/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new r7(r3.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),(function(e,t,r={}){let n=new r8;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,r,n,i){let s=new aN({next:r=>{t.enqueueAndForget(()=>o8(e,o)),r.fromCache&&"server"===n.source?i.reject(new r7(r3.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(r)},error:e=>i.reject(e)}),o=new an(r,s,{includeMetadataChanges:!0,Z_:!0});return o7(e,o)})(await aM(e),e.asyncQueue,t,r,n)),n.promise})(r,e._query).then(r=>new lk(t,n,e,r)))}function lP(e,t,r,...n){let i;e=aq(e,aG);let s=aq(e.firestore,aY),o=lr(s);return i="string"==typeof(t=(0,f.m9)(t))||t instanceof a9?function(e,t,r,n,i,s){let o=e.wu(1,t,r),a=[ll(t,n,r)],l=[i];if(s.length%2!=0)throw new r7(r3.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)a.push(ll(t,s[e])),l.push(s[e+1]);let u=[],c=n5.empty();for(let e=a.length-1;e>=0;--e)if(!ld(u,a[e])){let t=a[e],r=l[e];r=(0,f.m9)(r);let n=o.mu(t);if(r instanceof ln)u.push(t);else{let e=li(r,n);null!=e&&(u.push(t),c.set(t,e))}}let h=new nD(u);return new a7(c,h,o.fieldTransforms)}(o,"updateDoc",e._key,t,r,n):function(e,t,r,n){let i=e.wu(1,t,r);la("Data must be an object, but it was:",i,n);let s=[],o=n5.empty();nC(n,(e,n)=>{let a=lc(t,e,r);n=(0,f.m9)(n);let l=i.mu(a);if(n instanceof ln)s.push(a);else{let e=li(n,l);null!=e&&(s.push(a),o.set(a,e))}});let a=new nD(s);return new a7(o,a,i.fieldTransforms)}(o,"updateDoc",e._key,t),lx(s,[i.toMutation(e._key,i6.exists(!0))])}function lD(e){return lx(aq(e.firestore,aY),[new so(e._key,i6.none())])}function lL(e,t){var r,n;let i=aq(e.firestore,aY),s=aX(e),o=(r=e.converter)?n&&(n.merge||n.mergeFields)?r.toFirestore(t,n):r.toFirestore(t):t;return lx(i,[(function(e,t,r,n,i,s={}){let o,a;let l=e.wu(s.merge||s.mergeFields?2:0,t,r,i);la("Data must be an object, but it was:",l,n);let u=ls(n,l);if(s.merge)o=new nD(l.fieldMask),a=l.fieldTransforms;else if(s.mergeFields){let e=[];for(let n of s.mergeFields){let i=ll(t,n,r);if(!l.contains(i))throw new r7(r3.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);ld(e,i)||e.push(i)}o=new nD(e),a=l.fieldTransforms.filter(e=>o.covers(e.field))}else o=null,a=l.fieldTransforms;return new a3(new n5(u),o,a)})(lr(e.firestore),"addDoc",s._key,o,null!==e.converter,{}).toMutation(s._key,i6.exists(!1))]).then(()=>s)}function lx(e,t){return function(e,t){let r=new r8;return e.asyncQueue.enqueueAndForget(async()=>af(await ax(e).then(e=>e.syncEngine),t,r)),r.promise}(a0(e),t)}new WeakMap,function(e=!0){rZ=c.Jn,(0,c.Xd)(new h.wA("firestore",(t,{instanceIdentifier:r,options:n})=>{let i=t.getProvider("app").getImmediate(),s=new aY(new nn(t.getProvider("auth-internal")),new na(t.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new r7(r3.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new nz(e.options.projectId,t)}(i,r),i);return n=Object.assign({useFetchStreams:e},n),s._setSettings(n),s},"PUBLIC").setMultipleInstances(!0)),(0,c.KN)(rJ,"4.2.0",void 0),(0,c.KN)(rJ,"4.2.0","esm2017")}()}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(6885)}),_N_E=e.O()}]);