(function(t){function e(e){for(var i,o,r=e[0],c=e[1],l=e[2],d=0,p=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&p.push(s[o][0]),s[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],i=!0,r=1;r<a.length;r++){var c=a[r];0!==s[c]&&(i=!1)}i&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var i={},s={app:0},n=[];function o(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=i,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(a,i,function(e){return t[e]}.bind(null,i));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/CCYPArtCampaign/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"003e":function(t,e,a){},"15c9":function(t,e,a){t.exports=a.p+"img/banner.9db2b1cc.webp"},"181c":function(t,e,a){"use strict";a("22a7")},1868:function(t,e,a){},"19da":function(t,e,a){t.exports=a.p+"img/mcs.f71ab9de.png"},"22a7":function(t,e,a){},"248f":function(t,e,a){},"2e72":function(t,e,a){"use strict";a("003e")},"30f3":function(t,e,a){"use strict";a("def1")},"56d7":function(t,e,a){"use strict";a.r(e);var i=a("2b0e"),s=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[t.header_show?e("app-header",{attrs:{username:t.username}}):t._e(),e("router-view",{on:{header:t.header,footer:t.footer}}),t.footer_show?e("app-footer"):t._e()],1)},n=[],o=function(){var t=this,e=t._self._c;return e("div",[e("div",{attrs:{id:"top-bar"}},[t._m(0),e("div",{staticClass:"top-bar-right"},[e("span",{staticClass:"follow-us"},[t._v("Follow Us:")]),e("div",{staticClass:"social-icons"},[e("i",{staticClass:"fab fa-instagram social-icon",on:{click:function(e){return t.openLink("https://instagram.com")}}}),e("i",{staticClass:"fab fa-twitter social-icon",on:{click:function(e){return t.openLink("https://twitter.com")}}}),e("i",{staticClass:"fab fa-facebook social-icon",on:{click:function(e){return t.openLink("https://facebook.com")}}})])])]),e("div",{attrs:{id:"Header"}},[e("nav",{staticClass:"middle"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home")]),e("router-link",{staticClass:"nav-link",attrs:{to:"/artwork"}},[t._v("Artworks")]),e("router-link",{staticClass:"nav-link",attrs:{to:"/aboutCcyp"}},[t._v("About CCYP")]),e("router-link",{staticClass:"nav-link",attrs:{to:"/get-involved"}},[t._v("Get Involved")]),e("router-link",{staticClass:"nav-link",attrs:{to:"/news-events"}},[t._v("News & Events")]),e("router-link",{staticClass:"nav-link",attrs:{to:"/aboutUs"}},[t._v("About Us")])],1)])])},r=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"top-bar-left"},[e("img",{staticClass:"campaign-icon",attrs:{src:a("84ce"),alt:"Campaign Icon"}}),e("span",{staticClass:"campaign-title"},[t._v("Art Campaign: Poverty")])])}],c={name:"Header",methods:{openLink(t){window.open(t,"_blank")},checkMobile(){this.isMobile=window.innerWidth<=768},toggleDropdown(t){this.isMobile&&(this.showDropdown=this.showDropdown===t?"":t)}},mounted(){this.checkMobile(),window.addEventListener("resize",this.checkMobile)},beforeDestroy(){window.removeEventListener("resize",this.checkMobile)},data(){return{showDropdown:"",isMobile:!1}}},l=c,u=(a("2e72"),a("2877")),d=Object(u["a"])(l,o,r,!1,null,"0de4cf83",null),p=d.exports,f=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"Footer"}},[e("p",[t._v(t._s(t.msg))]),e("div",{staticClass:"footer-follow-us"},[e("span",{staticClass:"follow-us"},[t._v("Follow Us:")]),e("div",{staticClass:"social-icons"},[e("i",{staticClass:"fab fa-instagram social-icon",on:{click:function(e){return t.openLink("https://instagram.com")}}}),e("i",{staticClass:"fab fa-twitter social-icon",on:{click:function(e){return t.openLink("https://twitter.com")}}}),e("i",{staticClass:"fab fa-facebook social-icon",on:{click:function(e){return t.openLink("https://facebook.com")}}})])])])},h=[],v={name:"Footer",data(){return{msg:"2025 Team 'CLASS PLANK'"}}},g=v,m=(a("30f3"),Object(u["a"])(g,f,h,!1,null,"2cd5858e",null)),b=m.exports,_={name:"App",data(){return{header_show:!0,footer_show:!0,username:""}},components:{"app-header":p,"app-footer":b},methods:{header:function(t){this.header_show=t},footer:function(t){this.footer_show=t}}},w=_,C=(a("d9cf"),Object(u["a"])(w,s,n,!1,null,null,null)),y=C.exports,k=a("8c4f"),P=function(){var t=this;t._self._c;return t._m(0)},x=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-page"},[e("div",{staticClass:"main-content"},[e("div",{staticClass:"hero"},[e("img",{staticClass:"hero-image",attrs:{src:a("15c9"),alt:"Art Campaign Banner"}})]),e("div",{staticClass:"campaign-info"},[e("div",{staticClass:"partner-header"},[e("span",{staticClass:"our-partner"},[t._v("Our Partners")]),e("img",{staticClass:"partners-logo",attrs:{src:a("e3ab"),alt:"Partners1"}}),e("img",{staticClass:"partners-logo",attrs:{src:a("19da"),alt:"Partners2"}})]),e("div",{staticClass:"text"},[e("h2",[t._v("About the Art Campaign")]),e("p",[t._v(" Our art campaign is an initiative empowering children and young people to highlight differences between poverty and neglect through storytelling art. It aims to reduce poverty stigma, raise awareness, and engage young people in social justice discussions. ")]),e("p",[t._v(" Understanding poverty is essential in distinguishing it from neglect. Through this campaign, we aim to educate the public on the true nature of poverty——what it really looks like, the daily struggles it entails, and the systemic barriers that keep families in financial hardship—so that children and young people are not unfairly judged or mischaracterized. ")])])])]),e("div",{staticClass:"focus-section"},[e("h2",{staticClass:"focus-title"},[t._v("Key Focus Areas")]),e("div",{staticClass:"focus-container"},[e("div",{staticClass:"focus-box focus-green"},[e("h3",[t._v("Empowerment")]),e("p",[t._v("Giving children and young people a voice through artistic expression.")])]),e("div",{staticClass:"focus-box focus-yellow"},[e("h3",[t._v("Awareness")]),e("p",[t._v("Educating the public on the realities of poverty and reducing stigma.")])]),e("div",{staticClass:"focus-box focus-blue"},[e("h3",[t._v("Inclusivity")]),e("p",[t._v("Ensuring participation from diverse backgrounds, including rural and metro areas.")])]),e("div",{staticClass:"focus-box focus-red"},[e("h3",[t._v("Community Engagement")]),e("p",[t._v("Encouraging collaboration between young people, artists, and advocacy groups.")])])])])])}],A={name:"mainPage",created(){this.$emit("header",!0),this.$emit("footer",!0)}},j=A,O=(a("181c"),Object(u["a"])(j,P,x,!1,null,"381afc6a",null)),M=O.exports,L=function(){var t=this,e=t._self._c;return e("div",{staticClass:"artwork-container"},[e("div",{staticClass:"artwork-grid"},t._l(t.artworks,(function(a){return e("div",{key:a.title,staticClass:"art-card"},[a.image?e("img",{staticClass:"art-image",attrs:{src:t.getImageUrl(a.image),alt:a.title}}):t._e(),e("div",{staticClass:"art-info"},[e("h3",[t._v(t._s(a.title))]),e("p",[t._v("By: "+t._s(a.artist))]),e("p",[t._v("Group: "+t._s(a.group))]),e("a",{staticClass:"view-link",attrs:{href:a.social_media_link,target:"_blank"}},[t._v("Artwork Link")])])])})),0)])},E=[],S=(a("d9e2"),{data(){return{artworks:[]}},async created(){try{const t=window.location.origin.includes("github.io")?"https://xuyiwei0812.github.io/CCYPArtCampaign":window.location.origin,e=t+"/data/data.json";console.log("Fetching data from:",e);const a=await fetch(e);if(!a.ok)throw new Error("Failed to load JSON");this.artworks=await a.json(),console.log("Artworks loaded:",this.artworks)}catch(t){console.error("Error loading artworks:",t)}},methods:{getImageUrl(t){const e=window.location.origin.includes("github.io")?"https://xuyiwei0812.github.io/CCYPArtCampaign":"";return`${e}${t}`}}}),U=S,Y=(a("92aa"),Object(u["a"])(U,L,E,!1,null,"56ab62e7",null)),F=Y.exports,I=function(){var t=this;t._self._c;return t._m(0)},W=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("section",{staticClass:"section"},[e("h2",[t._v("Who is CCYP?")]),e("p",[t._v(" The "),e("strong",[t._v("Commissioner for Children and Young People (CCYP)")]),t._v(" is an independent organization in Western Australia dedicated to advocating for the rights, well-being, and voices of children and young people. It ensures their needs are heard and considered in policies and decision-making processes. ")])]),e("section",{staticClass:"section section-blue"},[e("h2",[t._v("What Does CCYP Do?")]),e("ul",[e("p",[t._v("Advocates for policies that prioritize the well-being of children and young people.")]),e("p",[t._v("Engages with young people to ensure their voices influence key decisions.")]),e("p",[t._v("Conducts research and provides reports on youth-related issues.")]),e("p",[t._v("Promotes awareness of children's rights and supports their development.")])])]),e("section",{staticClass:"section"},[e("h2",{staticClass:"center"},[t._v("Key Focus Areas")]),e("div",{staticClass:"grid"},[e("div",{staticClass:"card card-green"},[e("h3",[t._v("Children’s Rights")]),e("p",[t._v("Raising awareness and ensuring all children have opportunities to thrive.")])]),e("div",{staticClass:"card card-yellow"},[e("h3",[t._v("Mental Health & Well-being")]),e("p",[t._v("Improving access to mental health services and support systems for young people.")])]),e("div",{staticClass:"card card-purple"},[e("h3",[t._v("Education & Safety")]),e("p",[t._v("Creating safer environments that support learning, growth, and success.")])]),e("div",{staticClass:"card card-red"},[e("h3",[t._v("Youth Participation")]),e("p",[t._v("Encouraging children and young people to engage in shaping their future.")])])])]),e("section",{staticClass:"section section-gray center"},[e("h2",[t._v("Want to Learn More?")]),e("p",[t._v(" Visit the official website for more details: "),e("a",{staticClass:"link",attrs:{href:"https://www.ccyp.wa.gov.au/"}},[t._v("ccyp.wa.gov.au")]),t._v(". ")])])])}],D={name:"AboutCCYP"},H=D,T=(a("5b59"),Object(u["a"])(H,I,W,!1,null,"6b3982da",null)),z=T.exports,$=function(){var t=this,e=t._self._c;return e("div",{staticClass:"about-container"},[e("h1",{staticClass:"title"},[t._v("About Us")]),e("p",{staticClass:"subtitle"},[t._v(" We are a multidisciplinary team working together on this project. Our diverse backgrounds allow us to approach the issue from multiple perspectives. ")]),e("div",{staticClass:"team-grid"},t._l(t.teamMembers,(function(a){return e("div",{key:a.name,staticClass:"team-card"},[e("div",{staticClass:"name"},[t._v(t._s(a.name))]),e("div",{staticClass:"field"},[t._v(t._s(a.field))])])})),0)])},K=[],G={name:"aboutUs",data(){return{teamMembers:[{name:"Amanda Chitty",field:"Public Health"},{name:"Maanvik Arora",field:"Psychology & Finance"},{name:"Kaitlyn Holden",field:"Law + Society & Political Science"},{name:"Luna Xu",field:"Software Engineering"},{name:"Sadee Wijewardena",field:"Public Policy"}]}}},J=G,N=(a("b936"),Object(u["a"])(J,$,K,!1,null,"a09a8f98",null)),B=N.exports;i["a"].use(k["a"]);const R=new k["a"]({routes:[{path:"/",name:"mainPage",component:M},{path:"/artwork",name:"artworkPage",component:F},{path:"/aboutCcyp",name:"aboutCCYP",component:z},{path:"/aboutUs",name:"aboutUs",component:B}]});var V=R;i["a"].config.productionTip=!1,new i["a"]({router:V,render:t=>t(y)}).$mount("#app")},"5b59":function(t,e,a){"use strict";a("1868")},"84ce":function(t,e,a){t.exports=a.p+"img/icon6.8c926500.png"},"8fbf":function(t,e,a){},"92aa":function(t,e,a){"use strict";a("8fbf")},ac71:function(t,e,a){},b936:function(t,e,a){"use strict";a("ac71")},d9cf:function(t,e,a){"use strict";a("248f")},def1:function(t,e,a){},e3ab:function(t,e,a){t.exports=a.p+"img/ccyp.e9642e49.png"}});
//# sourceMappingURL=app.f37400c3.js.map