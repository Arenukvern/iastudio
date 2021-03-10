(function(e){function t(t){for(var o,s,i=t[0],c=t[1],l=t[2],u=0,d=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},a=[];function s(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"055a2dad"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=s(e);var l=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",l.name="ChunkLoadError",l.type=o,l.request=a,n[1](l)}r[e]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var f=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0418":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("Menu"),n("div",{staticClass:"header__title"},[e._v(" "+e._s(e.title)+" ")]),n("div",[n("LangSvg")],1)],1)},r=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"menu__ancestor"},[n("TreeSvg",{on:{click:e.changeState}}),n("div",{staticClass:"menu",class:e.activeClass,on:{click:function(e){e.stopPropagation()}}},[n("CircleSvg"),n("div",{staticClass:"menu__icon"},[n("TreeSvg",{attrs:{"is-dark":e.isActive},on:{click:e.changeState}})],1),n("div",{staticClass:"menu__item --on-top",on:{click:function(t){return t.preventDefault(),e.changeRoute("")}}},[e._v(" Home ")]),n("div",{staticClass:"menu__item --in-middle",on:{click:function(t){return t.preventDefault(),e.changeRoute("sketches")}}},[e._v(" Sketches ")]),n("div",{staticClass:"menu__item --on-bottom",on:{click:function(t){return t.preventDefault(),e.changeRoute("dev")}}},[e._v(" Dev ")])],1),n("div",{staticClass:"menu__dimmer",class:e.activeClass,on:{click:e.changeState}})],1)},s=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{staticClass:"icon tree-svg",class:e.darkClass,attrs:{width:"26",height:"30",viewBox:"0 0 26 30",xmlns:"http://www.w3.org/2000/svg"},on:{click:e.click}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1.95 8.775C1.95 8.93851 1.9548 9.10099 1.96429 9.2623C0.732775 10.7453 0 12.6055 0 14.625C0 19.4713 4.21972 23.4 9.425 23.4C9.53377 23.4 9.64212 23.3983 9.75 23.3949V29.25H17.55V21.4439C17.6578 21.4479 17.7662 21.45 17.875 21.45C22.3623 21.45 26 17.9578 26 13.65C26 10.1879 23.6505 7.25269 20.3987 6.23358C19.2283 2.62652 15.6311 0 11.375 0C6.16972 0 1.95 3.9287 1.95 8.775Z"}})])},c=[],l={name:"TreeSvg",props:{isDark:Boolean},components:{},computed:{darkClass:function(){return this.isDark?"--is-dark":""}},methods:{click:function(){this.$emit("click")}}},u=l,f=n("2877"),d=Object(f["a"])(u,i,c,!1,null,null,null),v=d.exports,p=n("ae6d"),m=n.n(p),h={name:"Menu",data:function(){return{isActive:!1}},components:{CircleSvg:m.a,TreeSvg:v},computed:{activeClass:function(){return this.$data.isActive?"--is-active":""}},methods:{changeRoute:function(e){this.$router.push("/".concat(e))},changeState:function(){console.log(this.isActive),this.$data.isActive=!this.$data.isActive}}},g=h,b=Object(f["a"])(g,a,s,!1,null,null,null),_=b.exports,w=n("1974"),C=n.n(w),y={name:"Header",props:{title:String},components:{LangSvg:C.a,Menu:_}},k=y,S=Object(f["a"])(k,o,r,!1,null,null,null);t["a"]=S.exports},1974:function(e,t,n){n("99af");var o=n("ded3"),r=n("4082");e.exports={functional:!0,render:function(e,t){var n=t._c,a=(t._v,t.data),s=t.children,i=void 0===s?[]:s,c=a.class,l=a.staticClass,u=a.style,f=a.staticStyle,d=a.attrs,v=void 0===d?{}:d,p=r(a,["class","staticClass","style","staticStyle","attrs"]);return n("svg",o({class:[c,l],style:[u,f],attrs:Object.assign({width:"44",height:"38",fill:"none",xmlns:"http://www.w3.org/2000/svg"},v)},p),i.concat([n("rect",{attrs:{y:"15.229",width:"37",height:"24",rx:"12",transform:"rotate(-24.305 0 15.229)",fill:"#27AE60"}})]))}}},"56d7":function(e,t,n){"use strict";n.r(t);n("e623"),n("e379"),n("5dc8"),n("37e1");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],s=n("2877"),i={},c=Object(s["a"])(i,r,a,!1,null,null,null),l=c.exports,u=n("9483");Object(u["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7");var f=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page"},[n("Header",{attrs:{title:"Home"}}),n("SvgHome"),n("Bottom")],1)},v=[],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("object",{attrs:{type:"image/svg+xml",data:"img/home.svg"}},[e._v(" Your browser does not support SVG ")])},m=[],h={name:"HelloWorld",props:{msg:String},components:{}},g=h,b=Object(s["a"])(g,p,m,!1,null,null,null),_=b.exports,w=n("bf34"),C=n("0418"),y={name:"Home",components:{SvgHome:_,Bottom:w["a"],Header:C["a"]}},k=y,S=Object(s["a"])(k,d,v,!1,null,null,null),x=S.exports;o["a"].use(f["a"]);var j=[{path:"/",name:"Home",component:x},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/sketches",name:"Sketches",component:function(){return n.e("about").then(n.bind(null,"4740"))}},{path:"/dev",name:"Development",component:function(){return n.e("about").then(n.bind(null,"e440"))}}],O=new f["a"]({routes:j}),$=O;n("7046");o["a"].config.productionTip=!1,new o["a"]({router:$,render:function(e){return e(l)}}).$mount("#app")},7046:function(e,t,n){},ae6d:function(e,t,n){n("99af");var o=n("ded3"),r=n("4082");e.exports={functional:!0,render:function(e,t){var n=t._c,a=(t._v,t.data),s=t.children,i=void 0===s?[]:s,c=a.class,l=a.staticClass,u=a.style,f=a.staticStyle,d=a.attrs,v=void 0===d?{}:d,p=r(a,["class","staticClass","style","staticStyle","attrs"]);return n("svg",o({class:[c,l],style:[u,f],attrs:Object.assign({viewBox:"0 0 121 112",fill:"none",xmlns:"http://www.w3.org/2000/svg"},v)},p),i.concat([n("ellipse",{attrs:{cx:"25.5",cy:"22.5",rx:"95.5",ry:"89.5",fill:"#2C3E50"}})]))}}},bf34:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bottom"},[n("div",{staticClass:"bottom__item --is-text",on:{click:function(t){return t.preventDefault(),e.changeRoute("sketches")}}},[e._v(" Sketches ")]),n("div",{staticClass:"bottom__item --is-text",on:{click:function(t){return t.preventDefault(),e.changeRoute("dev")}}},[e._v(" Development ")]),e._m(0)])},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bottom__item"},[n("a",{attrs:{href:"https://www.instagram.com/antmalofeev/",target:"_blank",rel:"noopener noreferrer"}},[n("i",{staticClass:"fab fa-instagram icon fa-2x"})])])}],a={name:"Bottom",props:{},components:{},methods:{changeRoute:function(e){this.$router.push("/".concat(e))}}},s=a,i=n("2877"),c=Object(i["a"])(s,o,r,!1,null,null,null);t["a"]=c.exports}});
//# sourceMappingURL=app.c3153eb3.js.map