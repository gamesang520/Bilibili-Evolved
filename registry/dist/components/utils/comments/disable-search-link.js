!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["utils/comments/disable-search-link"]=t():e["utils/comments/disable-search-link"]=t()}(globalThis,(()=>(()=>{var e,t,n={745:(e,t,n)=>{var o=n(218)((function(e){return e[1]}));o.push([e.id,":host(bili-rich-text) #contents a[data-type=search] {\n  color: inherit !important;\n  cursor: inherit !important;\n  display: contents !important;\n}\n:host(bili-rich-text) #contents a[data-type=search] img {\n  display: none;\n}",""]),e.exports=o},190:(e,t,n)=>{var o=n(218)((function(e){return e[1]}));o.push([e.id,".search-word.icon {\n  display: none !important;\n}\n.reply-warp .reply-item .search-word.jump-link {\n  color: inherit !important;\n  cursor: text !important;\n}",""]),e.exports=o},218:e=>{"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,n,o){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var a=this[i][0];null!=a&&(r[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);o&&r[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},29:(e,t,n)=>{var o=n(745);o&&o.__esModule&&(o=o.default),e.exports="string"==typeof o?o:o.toString()},580:(e,t,n)=>{var o=n(190);o&&o.__esModule&&(o=o.default),e.exports="string"==typeof o?o:o.toString()},59:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=59,e.exports=t},629:e=>{"use strict";e.exports="禁用评论区的搜索词链接."}},o={};function r(e){var t=o[e];if(void 0!==t)return t.exports;var i=o[e]={id:e,exports:{}};return n[e](i,i.exports,r),i.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var i=Object.create(null);r.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var s=2&o&&n;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>a[e]=()=>n[e]));return a.default=()=>n,r.d(i,a),i},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{"use strict";r.d(i,{component:()=>c});const e=coreApis.componentApis.define,t=coreApis.componentApis.utils.commentApis,n=coreApis.shadowRoot,o=coreApis.utils,a="disableCommentsSearchLink";let s=!1;const c=(0,e.defineComponentMetadata)({name:a,displayName:"禁用评论区搜索词",instantStyles:[{name:a,style:()=>Promise.resolve().then(r.t.bind(r,580,23)),important:!0},{name:a,style:()=>Promise.resolve().then(r.t.bind(r,29,23)),shadowDom:!0}],tags:[componentsTags.utils,componentsTags.style],entry:async()=>{s=!0,(0,t.forEachCommentArea)((async e=>{e instanceof t.CommentAreaV3?e.commentAreaEntry.addEventListener(n.ShadowRootEvents.Updated,(e=>{e.detail.forEach((e=>{e.addedNodes.forEach((e=>{e instanceof HTMLAnchorElement&&"search"===e.getAttribute("data-type")&&(e.removeAttribute("href"),e.removeAttribute("target"))}))}))})):(0,o.preventEvent)(e.element,"click",(e=>{if(!(e.target instanceof HTMLElement&&s))return!1;const t=e.target;return!![".jump-link.search-word",".icon.search-word"].some((e=>t.matches(e)))}))}))},reload:()=>{s=!0},unload:()=>{s=!1},commitHash:"8ac161b8db84fd53e1bdeea0675e099a08337d9f",coreVersion:"2.9.6",description:(()=>{const e=r(59);return{...Object.fromEntries(e.keys().map((t=>[t.match(/index\.(.+)\.md$/)[1],e(t)]))),"zh-CN":()=>Promise.resolve().then(r.t.bind(r,629,17)).then((e=>e.default))}})()})})(),i=i.component})()));