!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["style/custom-navbar-dark-mode"]=t():e["style/custom-navbar-dark-mode"]=t()}(globalThis,(()=>(()=>{var e,t,n={281:(e,t,n)=>{var r=n(355)((function(e){return e[1]}));r.push([e.id,".navbar-dark-mode {\n  display: flex;\n}\n.navbar-dark-mode svg {\n  height: 18px;\n  width: 18px;\n  fill: currentColor;\n}",""]),e.exports=r},355:e=>{"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,n,r){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var a={};if(r)for(var o=0;o<this.length;o++){
// eslint-disable-next-line prefer-destructuring
var i=this[o][0];null!=i&&(a[i]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);r&&a[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),t.push(d))}},t}},648:(e,t,n)=>{"use strict";var r,a=function(){return void 0===r&&(
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// @see https://github.com/webpack-contrib/style-loader/issues/177
r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function s(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function d(e,t){for(var n={},r=[],a=0;a<e.length;a++){var o=e[a],d=t.base?o[0]+t.base:o[0],c=n[d]||0,l="".concat(d," ").concat(c);n[d]=c+1;var u=s(l),f={css:o[1],media:o[2],sourceMap:o[3]};-1!==u?(i[u].references++,i[u].updater(f)):i.push({identifier:l,updater:m(f,t),references:1}),r.push(l)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=n.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var l,u=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function f(e,t,n,r){var a=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,a);else{var o=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function p(e,t,n){var r=n.css,a=n.media,o=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var v=null,h=0;function m(e,t){var n,r,a;if(t.singleton){var o=h++;n=v||(v=c(t)),r=f.bind(null,n,o,!1),a=f.bind(null,n,o,!0)}else n=c(t),r=p.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=a());var n=d(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var a=s(n[r]);i[a].references--}for(var o=d(e,t),c=0;c<n.length;c++){var l=s(n[c]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}n=o}}}},837:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>f});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navbar-dark-mode",attrs:{title:e.dark?"关闭夜间模式":"开启夜间模式"}},[e.dark?n("svg",{staticStyle:{width:"18px"},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 47.96 47.96"}},[n("path",{attrs:{d:"M24,12A12,12,0,1,0,36,24,12,12,0,0,0,24,12Zm0,20a8,8,0,1,1,8-8A8,8,0,0,1,24,32Z"}}),e._v(" "),n("path",{attrs:{d:"M24,9a2,2,0,0,0,2-2V4a2,2,0,0,0-4,0V7A2,2,0,0,0,24,9Z"}}),e._v(" "),n("path",{attrs:{d:"M36,14a2,2,0,0,0,1.42-.59l2.12-2.12a2,2,0,1,0-2.83-2.83l-2.12,2.12A2,2,0,0,0,36,14Z"}}),e._v(" "),n("path",{attrs:{d:"M44,22H41a2,2,0,0,0,0,4h3a2,2,0,1,0,0-4Z"}}),e._v(" "),n("path",{attrs:{d:"M37.4,34.61a2,2,0,1,0-2.83,2.82l2.12,2.13a2,2,0,0,0,2.83-2.83Z"}}),e._v(" "),n("path",{attrs:{d:"M24,39a2,2,0,0,0-2,2v3a2,2,0,0,0,4,0V41A2,2,0,0,0,24,39Z"}}),e._v(" "),n("path",{attrs:{d:"M10.53,34.61,8.41,36.73a2,2,0,0,0,0,2.83,2,2,0,0,0,2.82,0l2.13-2.13a2,2,0,1,0-2.83-2.82Z"}}),e._v(" "),n("path",{attrs:{d:"M9,24a2,2,0,0,0-2-2H4a2,2,0,0,0,0,4H7A2,2,0,0,0,9,24Z"}}),e._v(" "),n("path",{attrs:{d:"M10.53,13.39a2,2,0,0,0,1.41.59,2,2,0,0,0,1.42-3.42L11.23,8.44a2,2,0,0,0-2.82,2.83Z"}})]):n("svg",{staticStyle:{width:"18px"},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48"}},[n("path",{attrs:{d:"M24.48,42.18A18.66,18.66,0,0,1,22.11,5,2,2,0,0,1,23.56,8.6,11.32,11.32,0,1,0,39.4,24.44,2,2,0,0,1,43,25.89,18.68,18.68,0,0,1,24.48,42.18ZM16.36,11.32A14.66,14.66,0,1,0,36.68,31.64,15.35,15.35,0,0,1,15,17.68,15.2,15.2,0,0,1,16.36,11.32Z"}})])])};r._withStripped=!0;var a=n(986);const o=Vue.extend({data:()=>({dark:(0,a.getComponentSettings)("darkMode").enabled}),created(){(0,a.addComponentListener)("darkMode",(e=>{this.dark=e}))}});var i=n(648),s=n.n(i),d=n(281),c=n.n(d),l={insert:"head",singleton:!1};s()(c(),l);c().locals;var u=function(e,t,n,r,a,o,i,s){var d,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),i?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=d):a&&(d=s?function(){a.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:a),d)if(c.functional){c._injectStyles=d;var l=c.render;c.render=function(e,t){return d.call(t),l(e,t)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,d):[d]}return{exports:e,options:c}}(o,r,[],!1,null,null,null);u.options.__file="registry/lib/plugins/style/custom-navbar-dark-mode/NavbarDarkMode.vue";const f=u.exports},986:e=>{"use strict";e.exports=coreApis.settings}},r={};function a(e){var t=r[e];if(void 0!==t)return t.exports;var o=r[e]={id:e,exports:{}};return n[e](o,o.exports,a),o.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(n,r){if(1&r&&(n=this(n)),8&r)return n;if("object"==typeof n&&n){if(4&r&&n.__esModule)return n;if(16&r&&"function"==typeof n.then)return n}var o=Object.create(null);a.r(o);var i={};e=e||[null,t({}),t([]),t(t)];for(var s=2&r&&n;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>i[e]=()=>n[e]));return i.default=()=>n,a.d(o,i),o},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return(()=>{"use strict";a.d(o,{plugin:()=>e});const e={name:"customNavbar.items.darkMode",displayName:"自定义顶栏 - 夜间模式开关",description:"为自定义顶栏添加一个夜间模式开关, 方便快速切换夜间模式.",async setup(e){let{addData:t}=e;const{getComponentSettings:n}=await Promise.resolve().then(a.t.bind(a,986,23));t("customNavbar.items",(e=>{e.push({name:"darkMode",displayName:"夜间开关",content:()=>Promise.resolve().then(a.bind(a,837)),clickAction:()=>{const e=n("darkMode");e.enabled=!e.enabled}})}))},commitHash:"90b4192e1e37ad443ced11ff9ea766712239a79f",coreVersion:"2.7.6"}})(),o=o.plugin})()));