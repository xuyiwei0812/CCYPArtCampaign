(function(t){function e(e){for(var n,s,i=e[0],c=e[1],l=e[2],p=0,d=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},o=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/CCYPArtCampaign/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"15c9":function(t,e,a){t.exports=a.p+"img/banner.9db2b1cc.webp"},"196e":function(t,e,a){},"248f":function(t,e,a){},"2db5":function(t,e,a){},"2dc1":function(t,e,a){"use strict";a("2db5")},"378b":function(t,e,a){},"3e7a":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var n=a("2b0e"),r=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[t.header_show?e("app-header",{attrs:{username:t.username}}):t._e(),e("router-view",{on:{header:t.header,footer:t.footer}}),t.footer_show?e("app-footer"):t._e()],1)},o=[],s=function(){var t=this,e=t._self._c;return e("div",[e("div",{attrs:{id:"top-bar"}},[t._m(0),e("div",{staticClass:"top-bar-right"},[e("span",{staticClass:"follow-us"},[t._v("Follow Us:")]),e("div",{staticClass:"social-icons"},[e("i",{staticClass:"fab fa-instagram social-icon",on:{click:function(e){return t.openLink("https://instagram.com")}}}),e("i",{staticClass:"fab fa-twitter social-icon",on:{click:function(e){return t.openLink("https://twitter.com")}}}),e("i",{staticClass:"fab fa-facebook social-icon",on:{click:function(e){return t.openLink("https://facebook.com")}}})])])]),e("div",{attrs:{id:"Header"}},[e("nav",{staticClass:"middle"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home")]),e("router-link",{staticClass:"nav-link",attrs:{to:"/artwork"}},[t._v("Artworks")]),e("div",{staticClass:"dropdown",on:{mouseenter:function(e){t.showDropdown="about"},mouseleave:function(e){t.showDropdown=""}}},[e("span",{staticClass:"nav-link dropdown-toggle",class:{active:"about"===t.showDropdown}},[t._v("About Us")]),e("div",{directives:[{name:"show",rawName:"v-show",value:"about"===t.showDropdown,expression:"showDropdown === 'about'"}],staticClass:"dropdown-menu"},[e("router-link",{staticClass:"dropdown-item",attrs:{to:"/about/ccyp"}},[t._v("CCYP")]),e("router-link",{staticClass:"dropdown-item",attrs:{to:"/about/ourgroup"}},[t._v("Our Group")])],1)]),e("router-link",{staticClass:"nav-link",attrs:{to:"/get-involved"}},[t._v("Get Involved")]),e("router-link",{staticClass:"nav-link",attrs:{to:"/news-events"}},[t._v("News & Events")]),e("router-link",{staticClass:"nav-link",attrs:{to:"/contact"}},[t._v("Contact Us")])],1)])])},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"top-bar-left"},[e("img",{staticClass:"campaign-icon",attrs:{src:a("84ce"),alt:"Campaign Icon"}}),e("span",{staticClass:"campaign-title"},[t._v("Art Campaign: Poverty")])])}],c={name:"Header",methods:{openLink(t){window.open(t,"_blank")}},data(){return{showDropdown:""}}},l=c,u=(a("5f8f"),a("2877")),p=Object(u["a"])(l,s,i,!1,null,"11c69157",null),d=p.exports,f=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"Footer"}},[e("p",[t._v(t._s(t.msg))])])},v=[],h={name:"Footer",data(){return{msg:"2025"}}},m=h,g=(a("6e3e"),Object(u["a"])(m,f,v,!1,null,"60fae604",null)),w=g.exports,_={name:"App",data(){return{header_show:!0,footer_show:!0,username:""}},components:{"app-header":d,"app-footer":w},methods:{header:function(t){this.header_show=t},footer:function(t){this.footer_show=t}}},b=_,C=(a("d9cf"),Object(u["a"])(b,r,o,!1,null,null,null)),k=C.exports,y=a("8c4f"),O=function(){var t=this;t._self._c;return t._m(0)},P=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-content"},[e("div",{staticClass:"hero"},[e("img",{staticClass:"hero-image",attrs:{src:a("15c9"),alt:"Art Campaign Banner"}})]),e("div",{staticClass:"campaign-info"},[e("div",{staticClass:"partner-header"},[e("span",{staticClass:"our-partner"},[t._v("Our Partner:")]),e("img",{staticClass:"partners-logo",attrs:{src:a("e3ab"),alt:"Partners"}})]),e("div",{staticClass:"text"},[e("h2",[t._v("About the Art Campaign")]),e("p",[t._v(" The Art Campaign: Poverty is an initiative empowering children and young people to highlight differences between poverty and neglect through storytelling art. It aims to reduce poverty stigma, raise awareness, and engage young people in social justice discussions. ")])])])])}],j={name:"mainPage",created(){this.$emit("header",!0),this.$emit("footer",!0)}},x=j,A=(a("2dc1"),Object(u["a"])(x,O,P,!1,null,"4d6e9f58",null)),D=A.exports,S=function(){var t=this,e=t._self._c;return e("div",{staticClass:"artwork-container"},[e("div",{staticClass:"artwork-grid"},t._l(t.artworks,(function(a){return e("div",{key:a.title,staticClass:"art-card"},[a.image?e("img",{staticClass:"art-image",attrs:{src:t.getImageUrl(a.image),alt:a.title}}):t._e(),e("div",{staticClass:"art-info"},[e("h3",[t._v(t._s(a.title))]),e("p",[t._v("By: "+t._s(a.artist))]),e("p",[t._v("Group: "+t._s(a.group))]),e("a",{staticClass:"view-link",attrs:{href:a.social_media_link,target:"_blank"}},[t._v("View Artwork Link")])])])})),0)])},I=[],L=(a("d9e2"),{data(){return{artworks:[]}},async created(){try{const t=await fetch("/CCYPArtCampaign//data/data.json");if(!t.ok)throw new Error("Failed to load JSON");this.artworks=await t.json()}catch(t){console.error("Error loading artworks:",t)}},methods:{getImageUrl(t){return t?t.startsWith("/")?t:"/images/"+t:""}}}),U=L,F=(a("f209"),Object(u["a"])(U,S,I,!1,null,"47c16021",null)),M=F.exports,T=function(){var t=this,e=t._self._c;return e("div",[t._v("1")])},E=[],G={name:"aboutPage"},H=G,J=Object(u["a"])(H,T,E,!1,null,"ad07c0ce",null),N=J.exports;n["a"].use(y["a"]);const Y=new y["a"]({routes:[{path:"/",name:"mainPage",component:D},{path:"/artwork",name:"artworkPage",component:M},{path:"/aboutPage",name:"aboutPage",component:N}]});var $=Y;n["a"].config.productionTip=!1,new n["a"]({router:$,render:t=>t(k)}).$mount("#app")},"5f8f":function(t,e,a){"use strict";a("196e")},"6e3e":function(t,e,a){"use strict";a("3e7a")},"84ce":function(t,e,a){t.exports=a.p+"img/icon6.8c926500.png"},d9cf:function(t,e,a){"use strict";a("248f")},e3ab:function(t,e,a){t.exports=a.p+"img/ccyp.e9642e49.png"},f209:function(t,e,a){"use strict";a("378b")}});
//# sourceMappingURL=app.b4cc288d.js.map