(function(t){function e(e){for(var n,i,s=e[0],c=e[1],l=e[2],p=0,d=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,s=1;s<a.length;s++){var c=a[s];0!==o[c]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},o={app:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/CCYPArtCampaign/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"15c9":function(t,e,a){t.exports=a.p+"img/banner.9db2b1cc.webp"},"196e":function(t,e,a){},"248f":function(t,e,a){},"2db5":function(t,e,a){},"2dc1":function(t,e,a){"use strict";a("2db5")},"3e7a":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var n=a("2b0e"),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[t.header_show?e("app-header",{attrs:{username:t.username}}):t._e(),e("router-view",{on:{header:t.header,footer:t.footer}}),t.footer_show?e("app-footer"):t._e()],1)},r=[],i=function(){var t=this,e=t._self._c;return e("div",[e("div",{attrs:{id:"top-bar"}},[t._m(0),e("div",{staticClass:"top-bar-right"},[e("span",{staticClass:"follow-us"},[t._v("Follow Us:")]),e("div",{staticClass:"social-icons"},[e("i",{staticClass:"fab fa-instagram social-icon",on:{click:function(e){return t.openLink("https://instagram.com")}}}),e("i",{staticClass:"fab fa-twitter social-icon",on:{click:function(e){return t.openLink("https://twitter.com")}}}),e("i",{staticClass:"fab fa-facebook social-icon",on:{click:function(e){return t.openLink("https://facebook.com")}}})])])]),e("div",{attrs:{id:"Header"}},[e("nav",{staticClass:"middle"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home")]),e("router-link",{staticClass:"nav-link",attrs:{to:"/artwork"}},[t._v("Artworks")]),e("div",{staticClass:"dropdown",on:{mouseenter:function(e){t.showDropdown="about"},mouseleave:function(e){t.showDropdown=""}}},[e("span",{staticClass:"nav-link dropdown-toggle",class:{active:"about"===t.showDropdown}},[t._v("About Us")]),e("div",{directives:[{name:"show",rawName:"v-show",value:"about"===t.showDropdown,expression:"showDropdown === 'about'"}],staticClass:"dropdown-menu"},[e("router-link",{staticClass:"dropdown-item",attrs:{to:"/about/ccyp"}},[t._v("CCYP")]),e("router-link",{staticClass:"dropdown-item",attrs:{to:"/about/ourgroup"}},[t._v("Our Group")])],1)]),e("router-link",{staticClass:"nav-link",attrs:{to:"/get-involved"}},[t._v("Get Involved")]),e("router-link",{staticClass:"nav-link",attrs:{to:"/news-events"}},[t._v("News & Events")]),e("router-link",{staticClass:"nav-link",attrs:{to:"/contact"}},[t._v("Contact Us")])],1)])])},s=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"top-bar-left"},[e("img",{staticClass:"campaign-icon",attrs:{src:a("84ce"),alt:"Campaign Icon"}}),e("span",{staticClass:"campaign-title"},[t._v("Art Campaign: Poverty")])])}],c={name:"Header",methods:{openLink(t){window.open(t,"_blank")}},data(){return{showDropdown:""}}},l=c,u=(a("5f8f"),a("2877")),p=Object(u["a"])(l,i,s,!1,null,"11c69157",null),d=p.exports,f=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"Footer"}},[e("p",[t._v(t._s(t.msg))])])},v=[],h={name:"Footer",data(){return{msg:"2025"}}},g=h,w=(a("6e3e"),Object(u["a"])(g,f,v,!1,null,"60fae604",null)),m=w.exports,_={name:"App",data(){return{header_show:!0,footer_show:!0,username:""}},components:{"app-header":d,"app-footer":m},methods:{header:function(t){this.header_show=t},footer:function(t){this.footer_show=t}}},b=_,C=(a("d9cf"),Object(u["a"])(b,o,r,!1,null,null,null)),k=C.exports,y=a("8c4f"),P=function(){var t=this;t._self._c;return t._m(0)},O=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-content"},[e("div",{staticClass:"hero"},[e("img",{staticClass:"hero-image",attrs:{src:a("15c9"),alt:"Art Campaign Banner"}})]),e("div",{staticClass:"campaign-info"},[e("div",{staticClass:"partner-header"},[e("span",{staticClass:"our-partner"},[t._v("Our Partner:")]),e("img",{staticClass:"partners-logo",attrs:{src:a("e3ab"),alt:"Partners"}})]),e("div",{staticClass:"text"},[e("h2",[t._v("About the Art Campaign")]),e("p",[t._v(" The Art Campaign: Poverty is an initiative empowering children and young people to highlight differences between poverty and neglect through storytelling art. It aims to reduce poverty stigma, raise awareness, and engage young people in social justice discussions. ")])])])])}],x={name:"mainPage",created(){this.$emit("header",!0),this.$emit("footer",!0)}},j=x,A=(a("2dc1"),Object(u["a"])(j,P,O,!1,null,"4d6e9f58",null)),D=A.exports,S=function(){var t=this,e=t._self._c;return e("div",{staticClass:"artwork-container"},[e("div",{staticClass:"artwork-grid"},t._l(t.artworks,(function(a){return e("div",{key:a.title,staticClass:"art-card"},[a.image?e("img",{staticClass:"art-image",attrs:{src:t.getImageUrl(a.image),alt:a.title}}):t._e(),e("div",{staticClass:"art-info"},[e("h3",[t._v(t._s(a.title))]),e("p",[t._v("By: "+t._s(a.artist))]),e("p",[t._v("Group: "+t._s(a.group))]),e("a",{staticClass:"view-link",attrs:{href:a.social_media_link,target:"_blank"}},[t._v("View Artwork Link")])])])})),0)])},F=[],I=(a("d9e2"),{data(){return{artworks:[]}},async created(){try{const t=window.location.origin.includes("github.io")?"https://xuyiwei0812.github.io/CCYPArtCampaign":window.location.origin,e=t+"/data/data.json";console.log("Fetching data from:",e);const a=await fetch(e);if(!a.ok)throw new Error("Failed to load JSON");this.artworks=await a.json(),console.log("Artworks loaded:",this.artworks)}catch(t){console.error("Error loading artworks:",t)}},methods:{getImageUrl(t){const e=window.location.origin.includes("github.io")?"https://xuyiwei0812.github.io/CCYPArtCampaign":"";return`${e}${t}`}}}),L=I,U=(a("c43d"),Object(u["a"])(L,S,F,!1,null,"09f52626",null)),$=U.exports,M=function(){var t=this,e=t._self._c;return e("div",[t._v("1")])},T=[],Y={name:"aboutPage"},E=Y,G=Object(u["a"])(E,M,T,!1,null,"ad07c0ce",null),H=G.exports;n["a"].use(y["a"]);const J=new y["a"]({routes:[{path:"/",name:"mainPage",component:D},{path:"/artwork",name:"artworkPage",component:$},{path:"/aboutPage",name:"aboutPage",component:H}]});var N=J;n["a"].config.productionTip=!1,new n["a"]({router:N,render:t=>t(k)}).$mount("#app")},"5f8f":function(t,e,a){"use strict";a("196e")},"6e3e":function(t,e,a){"use strict";a("3e7a")},"84ce":function(t,e,a){t.exports=a.p+"img/icon6.8c926500.png"},a4c2:function(t,e,a){},c43d:function(t,e,a){"use strict";a("a4c2")},d9cf:function(t,e,a){"use strict";a("248f")},e3ab:function(t,e,a){t.exports=a.p+"img/ccyp.e9642e49.png"}});
//# sourceMappingURL=app.1672d90f.js.map