var _extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t,e){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=e(require("./PNotify")):"function"==typeof define&&define.amd?define("PNotifyButtons",["./PNotify"],e):t.PNotifyButtons=e(PNotify)}(this,function(n){"use strict";n=n&&n.__esModule?n.default:n;var t;function s(n,t){var s,i,o=t._showCloser&&c(n,t),r=t._showSticker&&l(n,t);return{c:function(){o&&o.c(),s=function(t){return document.createTextNode(t)}("\n"),r&&r.c(),i=document.createComment("")},m:function(t,e){o&&o.m(t,e),f(t,s,e),r&&r.m(t,e),f(t,i,e)},p:function(t,e){e._showCloser?o?o.p(t,e):((o=c(n,e)).c(),o.m(s.parentNode,s)):o&&(o.d(1),o=null),e._showSticker?r?r.p(t,e):((r=l(n,e)).c(),r.m(i.parentNode,i)):r&&(r.d(1),r=null)},d:function(t){o&&o.d(t),t&&_(s),r&&r.d(t),t&&_(i)}}}function c(e,t){var n,s,i,o;function r(t){e.handleCloserClick()}return{c:function(){n=a("div"),(s=a("span")).className=t._closerClass+" svelte-1yjle82",p(n,"click",r),n.className=i="ui-pnotify-closer "+(!t.closerHover||t._mouseIsIn?"":"ui-pnotify-buttons-hidden")+" svelte-1yjle82",h(n,"role","button"),n.tabIndex="0",n.title=o=t.labels.close},m:function(t,e){f(t,n,e),u(n,s)},p:function(t,e){t._closerClass&&(s.className=e._closerClass+" svelte-1yjle82"),(t.closerHover||t._mouseIsIn)&&i!==(i="ui-pnotify-closer "+(!e.closerHover||e._mouseIsIn?"":"ui-pnotify-buttons-hidden")+" svelte-1yjle82")&&(n.className=i),t.labels&&o!==(o=e.labels.close)&&(n.title=o)},d:function(t){t&&_(n),d(n,"click",r)}}}function l(e,t){var n,s,i,o,r,c;function l(t){e.handleStickerClick()}return{c:function(){n=a("div"),(s=a("span")).className=i=(t._options.hide?t._pinUpClass:t._pinDownClass)+" svelte-1yjle82",p(n,"click",l),n.className=o="ui-pnotify-sticker "+(!t.stickerHover||t._mouseIsIn?"":"ui-pnotify-buttons-hidden")+" svelte-1yjle82",h(n,"role","button"),h(n,"aria-pressed",r=t._options.hide),n.tabIndex="0",n.title=c=t._options.hide?t.labels.stick:t.labels.unstick},m:function(t,e){f(t,n,e),u(n,s)},p:function(t,e){(t._options||t._pinUpClass||t._pinDownClass)&&i!==(i=(e._options.hide?e._pinUpClass:e._pinDownClass)+" svelte-1yjle82")&&(s.className=i),(t.stickerHover||t._mouseIsIn)&&o!==(o="ui-pnotify-sticker "+(!e.stickerHover||e._mouseIsIn?"":"ui-pnotify-buttons-hidden")+" svelte-1yjle82")&&(n.className=o),t._options&&r!==(r=e._options.hide)&&h(n,"aria-pressed",r),(t._options||t.labels)&&c!==(c=e._options.hide?e.labels.stick:e.labels.unstick)&&(n.title=c)},d:function(t){t&&_(n),d(n,"click",l)}}}function e(t){var e=this;!function(t,e){t._handlers=r(),t._slots=r(),t._bind=e._bind,t._staged={},t.options=e,t.root=e.root||t,t.store=e.store||t.root.store,e.root||(t._beforecreate=[],t._oncreate=[],t._aftercreate=[])}(this,t),this._state=o(_extends({_notice:null,_options:{},_mouseIsIn:!1},n.modules.Buttons.defaults),t.data),this._recompute({sticker:1,_notice:1,closer:1,classes:1},this._state),this._intro=!0,document.getElementById("svelte-1yjle82-style")||function(){var t=a("style");t.id="svelte-1yjle82-style",t.textContent=".ui-pnotify-closer.svelte-1yjle82,.ui-pnotify-sticker.svelte-1yjle82{float:right;margin-left:.5em;cursor:pointer}[dir=rtl] .ui-pnotify-closer.svelte-1yjle82,[dir=rtl] .ui-pnotify-sticker.svelte-1yjle82{float:left;margin-right:.5em;margin-left:0}.ui-pnotify-buttons-hidden.svelte-1yjle82{visibility:hidden}",u(document.head,t)}(),this._fragment=s(this,this._state),this.root._oncreate.push(function(){(function(){this.fire("init",{module:this})}).call(e),e.fire("update",{changed:function(t,e){for(var n in e)t[n]=1;return t}({},e._state),current:e._state})}),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor),i(this))}function a(t){return document.createElement(t)}function u(t,e){t.appendChild(e)}function f(t,e,n){t.insertBefore(e,n)}function _(t){t.parentNode.removeChild(t)}function p(t,e,n,s){t.addEventListener(e,n,s)}function h(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function d(t,e,n,s){t.removeEventListener(e,n,s)}function o(t,e){for(var n in e)t[n]=e[n];return t}function i(t){t._lock=!0,m(t._beforecreate),m(t._oncreate),m(t._aftercreate),t._lock=!1}function r(){return Object.create(null)}function m(t){for(;t&&t.length;)t.shift()()}function y(){}return o(e.prototype,{destroy:function(t){this.destroy=y,this.fire("destroy"),this.set=y,this._fragment.d(!1!==t),this._fragment=null,this._state={}},get:function(){return this._state},fire:function(t,e){var n=t in this._handlers&&this._handlers[t].slice();if(!n)return;for(var s=0;s<n.length;s+=1){var i=n[s];if(!i.__calling)try{i.__calling=!0,i.call(this,e)}finally{i.__calling=!1}}},on:function(t,e){var n=this._handlers[t]||(this._handlers[t]=[]);return n.push(e),{cancel:function(){var t=n.indexOf(e);~t&&n.splice(t,1)}}},set:function(t){if(this._set(o({},t)),this.root._lock)return;i(this.root)},_set:function(t){var e=this._state,n={},s=!1;for(var i in t=o(this._staged,t),this._staged={},t)this._differs(t[i],e[i])&&(n[i]=s=!0);if(!s)return;this._state=o(o({},e),t),this._recompute(n,this._state),this._bind&&this._bind(n,this._state);this._fragment&&(this.fire("state",{changed:n,current:this._state,previous:e}),this._fragment.p(n,this._state),this.fire("update",{changed:n,current:this._state,previous:e}))},_stage:function(t){o(this._staged,t)},_mount:function(t,e){this._fragment[this._fragment.i?"i":"m"](t,e||null)},_differs:function(t,e){return t!=t?e==e:t!==e||t&&"object"===(void 0===t?"undefined":_typeof(t))||"function"==typeof t}}),o(e.prototype,{initModule:function(t){var i=this;this.set(t);var e=this.get()._notice;e.on("mouseenter",function(){return i.set({_mouseIsIn:!0})}),e.on("mouseleave",function(){return i.set({_mouseIsIn:!1})}),e.on("state",function(t){var e=t.changed,n=t.current;if(e.hide&&i.get().sticker){var s=n.hide?i.get().classes.pinUp:i.get().classes.pinDown;("fontawesome5"===i.get()._notice.get().icons||"string"==typeof s&&s.match(/(^| )fa[srlb]($| )/))&&(i.set({sticker:!1}),i.set({sticker:!0}))}})},handleStickerClick:function(){var t=this.get()._notice;t.update({hide:!t.get().hide})},handleCloserClick:function(){this.get()._notice.close(!1),this.set({_mouseIsIn:!1})}}),e.prototype._recompute=function(t,e){(t.sticker||t._notice)&&this._differs(e._showSticker,e._showSticker=function(t){var e=t.sticker,n=t._notice;return e&&!(n&&n.refs.elem.classList.contains("nonblock"))}(e))&&(t._showSticker=!0),(t.closer||t._notice)&&this._differs(e._showCloser,e._showCloser=function(t){var e=t.closer,n=t._notice;return e&&!(n&&n.refs.elem.classList.contains("nonblock"))}(e))&&(t._showCloser=!0),(t.classes||t._notice)&&(this._differs(e._pinUpClass,e._pinUpClass=function(t){var e=t.classes,n=t._notice;return n?null===e.pinUp?n.get()._icons.pinUp:e.pinUp:""}(e))&&(t._pinUpClass=!0),this._differs(e._pinDownClass,e._pinDownClass=function(t){var e=t.classes,n=t._notice;return n?null===e.pinDown?n.get()._icons.pinDown:e.pinDown:""}(e))&&(t._pinDownClass=!0),this._differs(e._closerClass,e._closerClass=function(t){var e=t.classes,n=t._notice;return n?null===e.closer?n.get()._icons.closer:e.closer:""}(e))&&(t._closerClass=!0))},(t=e).key="Buttons",t.defaults={closer:!0,closerHover:!0,sticker:!0,stickerHover:!0,labels:{close:"Close",stick:"Stick",unstick:"Unstick"},classes:{closer:null,pinUp:null,pinDown:null}},n.modules.Buttons=t,n.modulesPrependContainer.push(t),_extends(n.icons.brighttheme,{closer:"brighttheme-icon-closer",pinUp:"brighttheme-icon-sticker",pinDown:"brighttheme-icon-sticker brighttheme-icon-stuck"}),_extends(n.icons.bootstrap3,{closer:"glyphicon glyphicon-remove",pinUp:"glyphicon glyphicon-pause",pinDown:"glyphicon glyphicon-play"}),_extends(n.icons.fontawesome4,{closer:"fa fa-times",pinUp:"fa fa-pause",pinDown:"fa fa-play"}),_extends(n.icons.fontawesome5,{closer:"fas fa-times",pinUp:"fas fa-pause",pinDown:"fas fa-play"}),e});
//# sourceMappingURL=PNotifyButtons.js.map
