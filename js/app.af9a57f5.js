(function(t){function e(e){for(var s,o,r=e[0],c=e[1],l=e[2],d=0,p=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],s=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(s=!1)}s&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var s={},i={app:0},a=[];function o(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=s,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/CCYPArtCampaign/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"036b":function(t,e,n){"use strict";n("e5f4")},"083d":function(t,e,n){"use strict";n("2f8e")},"15c9":function(t,e,n){t.exports=n.p+"img/banner.9db2b1cc.webp"},"182a":function(t,e,n){t.exports=n.p+"img/kid.de4b3946.png"},1868:function(t,e,n){},"19da":function(t,e,n){t.exports=n.p+"img/mcs.f71ab9de.png"},"1c4b":function(t,e,n){"use strict";n("8977")},"213c":function(t,e,n){},2967:function(t,e,n){},"2f8e":function(t,e,n){},"30f3":function(t,e,n){"use strict";n("def1")},3867:function(t,e,n){},"42f8":function(t,e,n){"use strict";n("3867")},"56d7":function(t,e,n){"use strict";n.r(e);var s=n("2b0e"),i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[t.header_show?e("app-header"):t._e(),e("router-view",{on:{header:t.header,footer:t.footer}}),t.footer_show?e("app-footer"):t._e()],1)},a=[];const o=new s["default"];var r=function(){var t=this,e=t._self._c;return e("div",[e("div",{attrs:{id:"top-bar"}},[e("div",{staticClass:"top-bar-left"},[e("img",{staticClass:"campaign-icon",attrs:{src:n("84ce"),alt:"Campaign Icon"}}),e("span",{staticClass:"campaign-title"},[t._v("Art Campaign: Poverty")]),e("div",{staticClass:"hamburger-menu",on:{click:t.toggleMenu}},[e("i",{staticClass:"menu-icon",class:t.isMenuOpen?"fas fa-times":"fas fa-bars"})])]),e("div",{staticClass:"top-bar-right"},[e("span",{staticClass:"follow-us"},[t._v("Follow Us:")]),e("div",{staticClass:"social-icons"},[e("i",{staticClass:"fab fa-instagram social-icon",on:{click:function(e){return t.openLink("https://instagram.com")}}}),e("i",{staticClass:"fab fa-twitter social-icon",on:{click:function(e){return t.openLink("https://twitter.com")}}}),e("i",{staticClass:"fab fa-facebook social-icon",on:{click:function(e){return t.openLink("https://facebook.com")}}})])])]),e("div",{class:{"menu-open":t.isMenuOpen},attrs:{id:"Header"}},[e("nav",{staticClass:"middle"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/"},nativeOn:{click:function(e){return t.emitCloseMenu.apply(null,arguments)}}},[t._v("Home")]),e("router-link",{staticClass:"nav-link",attrs:{to:"/artwork"},nativeOn:{click:function(e){return t.emitCloseMenu.apply(null,arguments)}}},[t._v("Artworks")]),e("router-link",{staticClass:"nav-link",attrs:{to:"/aboutCcyp"},nativeOn:{click:function(e){return t.emitCloseMenu.apply(null,arguments)}}},[t._v("About CCYP")]),e("router-link",{staticClass:"nav-link",attrs:{to:"/getInvolved"},nativeOn:{click:function(e){return t.emitCloseMenu.apply(null,arguments)}}},[t._v("Get Involved")]),e("router-link",{staticClass:"nav-link",attrs:{to:"/newsPage"},nativeOn:{click:function(e){return t.emitCloseMenu.apply(null,arguments)}}},[t._v("News & Events")]),e("router-link",{staticClass:"nav-link",attrs:{to:"/aboutUs"},nativeOn:{click:function(e){return t.emitCloseMenu.apply(null,arguments)}}},[t._v("About Us")])],1)])])},c=[],l={name:"Header",methods:{openLink(t){window.open(t,"_blank")},checkMobile(){this.isMobile=window.innerWidth<=768},toggleMenu(){this.isMenuOpen=!this.isMenuOpen,o.$emit("toggleMenu",this.isMenuOpen)},closeMenu(){this.isMenuOpen=!1},emitCloseMenu(){o.$emit("closeMenu")},setMenuState(t){this.isMenuOpen=t}},mounted(){this.checkMobile(),window.addEventListener("resize",this.checkMobile),o.$on("toggleMenu",this.setMenuState),o.$on("closeMenu",this.closeMenu)},beforeDestroy(){window.removeEventListener("resize",this.checkMobile),o.$on("toggleMenu",this.setMenuState),o.$on("closeMenu",this.closeMenu)},data(){return{showDropdown:"",isMobile:!1,isMenuOpen:!1}}},u=l,d=(n("083d"),n("2877")),p=Object(d["a"])(u,r,c,!1,null,"580e82f7",null),g=p.exports,h=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"Footer"}},[e("p",[t._v(t._s(t.msg))]),e("div",{staticClass:"footer-follow-us"},[e("span",{staticClass:"follow-us"},[t._v("Follow Us:")]),e("div",{staticClass:"social-icons"},[e("i",{staticClass:"fab fa-instagram social-icon",on:{click:function(e){return t.openLink("https://instagram.com")}}}),e("i",{staticClass:"fab fa-twitter social-icon",on:{click:function(e){return t.openLink("https://twitter.com")}}}),e("i",{staticClass:"fab fa-facebook social-icon",on:{click:function(e){return t.openLink("https://facebook.com")}}})])])])},f=[],v={name:"Footer",data(){return{msg:"2025 Team 'CLASS PLANK'"}}},m=v,w=(n("30f3"),Object(d["a"])(m,h,f,!1,null,"2cd5858e",null)),C=w.exports,_={name:"App",data(){return{header_show:!0,footer_show:!0,isMenuOpen:!1}},components:{"app-header":g,"app-footer":C},methods:{header:function(t){this.header_show=t},footer:function(t){this.footer_show=t}},mounted(){o.$on("menuOpened",()=>{this.isMenuOpen=!0}),o.$on("closeMenu",()=>{this.isMenuOpen=!1})},beforeDestroy(){o.$off("menuOpened"),o.$off("closeMenu")}},b=_,y=(n("d1a9"),Object(d["a"])(b,i,a,!1,null,null,null)),k=y.exports,M=n("8c4f"),O=function(){var t=this;t._self._c;return t._m(0)},P=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-page"},[e("div",{staticClass:"main-content"},[e("div",{staticClass:"hero"},[e("img",{staticClass:"hero-image",attrs:{src:n("15c9"),alt:"Art Campaign Banner"}})]),e("div",{staticClass:"campaign-info"},[e("div",{staticClass:"partner-header"},[e("span",{staticClass:"our-partner"},[t._v("Our Partners")]),e("img",{staticClass:"partners-logo",attrs:{src:n("e3ab"),alt:"Partners1"}}),e("img",{staticClass:"partners-logo",attrs:{src:n("19da"),alt:"Partners2"}})]),e("div",{staticClass:"text"},[e("h2",[t._v("About the Art Campaign")]),e("p",[t._v(" Our art campaign is an initiative empowering children and young people to highlight differences between poverty and neglect through storytelling art. It aims to reduce poverty stigma, raise awareness, and engage young people in social justice discussions. ")]),e("p",[t._v(" Understanding poverty is essential in distinguishing it from neglect. Through this campaign, we aim to educate the public on the true nature of poverty——what it really looks like, the daily struggles it entails, and the systemic barriers that keep families in financial hardship—so that children and young people are not unfairly judged or mischaracterized. ")])])])]),e("div",{staticClass:"focus-section"},[e("h2",{staticClass:"focus-title"},[t._v("Key Focus Areas")]),e("div",{staticClass:"focus-container"},[e("div",{staticClass:"focus-box focus-green"},[e("h3",[t._v("Empowerment")]),e("p",[t._v("Giving children and young people a voice through artistic expression.")])]),e("div",{staticClass:"focus-box focus-yellow"},[e("h3",[t._v("Awareness")]),e("p",[t._v("Educating the public on the realities of poverty and reducing stigma.")])]),e("div",{staticClass:"focus-box focus-blue"},[e("h3",[t._v("Inclusivity")]),e("p",[t._v("Ensuring participation from diverse backgrounds, including rural and metro areas.")])]),e("div",{staticClass:"focus-box focus-red"},[e("h3",[t._v("Community Engagement")]),e("p",[t._v("Encouraging collaboration between young people, artists, and advocacy groups.")])])])])])}],x={name:"mainPage",created(){this.$emit("header",!0),this.$emit("footer",!0)}},A=x,j=(n("bd0e"),Object(d["a"])(A,O,P,!1,null,"57c0b9b9",null)),Y=j.exports,S=function(){var t=this,e=t._self._c;return e("div",{staticClass:"artwork-container"},[e("div",{staticClass:"artwork-grid"},t._l(t.artworks,(function(n){return e("div",{key:n.title,staticClass:"art-card"},[n.image?e("img",{staticClass:"art-image",attrs:{src:t.getImageUrl(n.image),alt:n.title}}):t._e(),e("div",{staticClass:"art-info"},[e("h3",[t._v(t._s(n.title))]),e("p",[t._v("By: "+t._s(n.artist))]),e("p",[t._v("Group: "+t._s(n.group))]),e("a",{staticClass:"view-link",attrs:{href:n.social_media_link,target:"_blank"}},[t._v("Artwork Link")])])])})),0)])},$=[],E=(n("d9e2"),{data(){return{artworks:[]}},async created(){try{const t=window.location.origin.includes("github.io")?"https://xuyiwei0812.github.io/CCYPArtCampaign":window.location.origin,e=t+"/data/data.json";console.log("Fetching data from:",e);const n=await fetch(e);if(!n.ok)throw new Error("Failed to load JSON");this.artworks=await n.json(),console.log("Artworks loaded:",this.artworks)}catch(t){console.error("Error loading artworks:",t)}},methods:{getImageUrl(t){const e=window.location.origin.includes("github.io")?"https://xuyiwei0812.github.io/CCYPArtCampaign":"";return`${e}${t}`}}}),L=E,I=(n("42f8"),Object(d["a"])(L,S,$,!1,null,"e760891a",null)),U=I.exports,F=function(){var t=this;t._self._c;return t._m(0)},T=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("section",{staticClass:"section"},[e("h2",[t._v("Who is CCYP?")]),e("p",[t._v(" The "),e("strong",[t._v("Commissioner for Children and Young People (CCYP)")]),t._v(" is an independent organization in Western Australia dedicated to advocating for the rights, well-being, and voices of children and young people. It ensures their needs are heard and considered in policies and decision-making processes. ")])]),e("section",{staticClass:"section section-blue"},[e("h2",[t._v("What Does CCYP Do?")]),e("ul",[e("p",[t._v("Advocates for policies that prioritize the well-being of children and young people.")]),e("p",[t._v("Engages with young people to ensure their voices influence key decisions.")]),e("p",[t._v("Conducts research and provides reports on youth-related issues.")]),e("p",[t._v("Promotes awareness of children's rights and supports their development.")])])]),e("section",{staticClass:"section"},[e("h2",{staticClass:"center"},[t._v("Key Focus Areas")]),e("div",{staticClass:"grid"},[e("div",{staticClass:"card card-green"},[e("h3",[t._v("Children’s Rights")]),e("p",[t._v("Raising awareness and ensuring all children have opportunities to thrive.")])]),e("div",{staticClass:"card card-yellow"},[e("h3",[t._v("Mental Health & Well-being")]),e("p",[t._v("Improving access to mental health services and support systems for young people.")])]),e("div",{staticClass:"card card-purple"},[e("h3",[t._v("Education & Safety")]),e("p",[t._v("Creating safer environments that support learning, growth, and success.")])]),e("div",{staticClass:"card card-red"},[e("h3",[t._v("Youth Participation")]),e("p",[t._v("Encouraging children and young people to engage in shaping their future.")])])])]),e("section",{staticClass:"section section-gray center"},[e("h2",[t._v("Want to Learn More?")]),e("p",[t._v(" Visit the official website for more details: "),e("a",{staticClass:"link",attrs:{href:"https://www.ccyp.wa.gov.au/"}},[t._v("ccyp.wa.gov.au")]),t._v(". ")])])])}],W={name:"AboutCCYP"},D=W,N=(n("5b59"),Object(d["a"])(D,F,T,!1,null,"6b3982da",null)),H=N.exports,z=function(){var t=this,e=t._self._c;return e("div",{staticClass:"about-container"},[e("h1",{staticClass:"title"},[t._v("About Us")]),e("p",{staticClass:"subtitle"},[t._v(" We are a multidisciplinary team working together on this project. Our diverse backgrounds allow us to approach the issue from multiple perspectives. ")]),e("div",{staticClass:"team-grid"},t._l(t.teamMembers,(function(n){return e("div",{key:n.name,staticClass:"team-card"},[e("div",{staticClass:"name"},[t._v(t._s(n.name))]),e("div",{staticClass:"field"},[t._v(t._s(n.field))])])})),0)])},B=[],K={name:"aboutUs",data(){return{teamMembers:[{name:"Amanda Chitty",field:"Public Health"},{name:"Maanvik Arora",field:"Psychology & Finance"},{name:"Kaitlyn Holden",field:"Law + Society & Political Science"},{name:"Luna Xu",field:"Software Engineering"},{name:"Sadee Wijewardena",field:"Public Policy"}]}}},J=K,G=(n("b936"),Object(d["a"])(J,z,B,!1,null,"a09a8f98",null)),q=G.exports,R=function(){var t=this,e=t._self._c;return e("div",{staticClass:"news-page"},[e("div",{staticClass:"news-list"},t._l(t.newsList,(function(n){return e("div",{key:n.id,staticClass:"news-item"},[n.image?e("img",{staticClass:"news-image",attrs:{src:t.getImageUrl(n.image),alt:"news image"}}):t._e(),e("div",{staticClass:"news-content"},[e("router-link",{staticClass:"news-title",attrs:{to:{path:"/newsDetails",query:{id:n.id}}}},[t._v(" "+t._s(n.title)+" ")]),e("p",{staticClass:"news-date"},[t._v(t._s(n.date))]),e("p",{staticClass:"news-summary"},[t._v(t._s(n.summary))])],1)])})),0)])},V=[],X={data(){return{newsList:[]}},async created(){try{const t=window.location.origin.includes("github.io")?"https://xuyiwei0812.github.io/CCYPArtCampaign":window.location.origin,e=t+"/data/news.json";console.log("Fetching news from:",e);const n=await fetch(e);if(!n.ok)throw new Error("Failed to load news JSON");this.newsList=await n.json(),console.log("News loaded:",this.newsList)}catch(t){console.error("Error loading news:",t)}},methods:{getImageUrl(t){const e=window.location.origin.includes("github.io")?"https://xuyiwei0812.github.io/CCYPArtCampaign":"";return`${e}${t}`}}},Q=X,Z=(n("1c4b"),Object(d["a"])(Q,R,V,!1,null,"ff3de0fc",null)),tt=Z.exports,et=function(){var t=this,e=t._self._c;return e("div",{staticClass:"news-details"},[e("router-link",{staticClass:"back-link",attrs:{to:"/newsPage"}},[t._v("← Back")]),e("h1",{staticClass:"news-title"},[t._v(t._s(t.news.title))]),e("p",{staticClass:"news-date"},[t._v("Published on: "+t._s(t.news.date))]),t.news.image?e("img",{staticClass:"news-image",attrs:{src:t.getImageUrl(t.news.image),alt:"News Image"}}):t._e(),e("p",{staticClass:"news-content"},[t._v(t._s(t.news.details))])],1)},nt=[],st=(n("0643"),n("fffc"),{name:"NewsDetails",data(){return{news:{}}},async created(){try{const t=window.location.origin.includes("github.io")?"https://xuyiwei0812.github.io/CCYPArtCampaign":window.location.origin,e=t+"/data/news.json",n=await fetch(e);if(!n.ok)throw new Error("Failed to load news JSON");const s=await n.json(),i=this.$route.query.id,a=s.find(t=>String(t.id)===String(i));a?this.news=a:console.error("News not found")}catch(t){console.error("Error loading news:",t)}},methods:{getImageUrl(t){const e=window.location.origin.includes("github.io")?"https://xuyiwei0812.github.io/CCYPArtCampaign":"";return`${e}${t}`}}}),it=st,at=(n("9b87"),Object(d["a"])(it,et,nt,!1,null,"2374e02b",null)),ot=at.exports,rt=function(){var t=this;t._self._c;return t._m(0)},ct=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"get-involved-page"},[e("div",{staticClass:"main-content"},[e("img",{staticClass:"main-image",attrs:{src:n("182a"),alt:"Kid"}}),e("div",{staticClass:"text-content"},[e("div",{staticClass:"participate-section"},[e("h2",[t._v("How to Participate?")]),e("p",[t._v(" Use your creativity! You can express your thoughts on "),e("strong",[t._v('"poverty"')]),t._v(" through: "),e("strong",[t._v("painting")]),t._v(", "),e("strong",[t._v("digital art")]),t._v(", "),e("strong",[t._v("short videos")]),t._v(", "),e("strong",[t._v("music")]),t._v(", and more! ")])]),e("div",{staticClass:"share-section"},[e("h2",[t._v("Share Artwork")]),e("p",[e("strong",[t._v("Post your creation on")]),t._v(" TikTok, Instagram, Twitter, or YouTube!")]),e("p",[e("strong",[t._v("Tag our official accounts:")])]),e("p",{staticClass:"official-tags"},[t._v("@CCYPWA"),e("br"),t._v("@CCYPWAArtCampaign")]),e("p",[e("strong",[t._v("Use these hashtags to join the conversation:")])]),e("p",{staticClass:"hashtags"},[t._v("#Kidspovertyperspectives #CCYPWApostcards")])])])]),e("div",{staticClass:"encouragement"},[e("h2",[t._v("Your Voice Matters!")]),e("p",[t._v(" Through your art, you can help people understand what poverty really means. Every drawing, video, and song can make a difference. 🌟 ")]),e("p",[t._v(" Be creative. Be bold. Be YOU! We can’t wait to see your amazing work! ")])])])}],lt={name:"GetInvolvedPage"},ut=lt,dt=(n("036b"),Object(d["a"])(ut,rt,ct,!1,null,"5d0a2328",null)),pt=dt.exports;s["default"].use(M["a"]);const gt=new M["a"]({routes:[{path:"/",name:"mainPage",component:Y},{path:"/artwork",name:"artworkPage",component:U},{path:"/aboutCcyp",name:"aboutCCYP",component:H},{path:"/aboutUs",name:"aboutUs",component:q},{path:"/newsPage",name:"newsPage",component:tt},{path:"/newsDetails",name:"newsDetails",component:ot},{path:"/getInvolved",name:"getInvolved",component:pt}]});var ht=gt,ft=n("5c96"),vt=n.n(ft);n("0fae");s["default"].use(vt.a),s["default"].config.productionTip=!1,new s["default"]({router:ht,render:t=>t(k)}).$mount("#app")},"5b59":function(t,e,n){"use strict";n("1868")},"84ce":function(t,e,n){t.exports=n.p+"img/icon6.8c926500.png"},8977:function(t,e,n){},"9b87":function(t,e,n){"use strict";n("2967")},ac71:function(t,e,n){},b936:function(t,e,n){"use strict";n("ac71")},bd0e:function(t,e,n){"use strict";n("eee0")},d1a9:function(t,e,n){"use strict";n("213c")},def1:function(t,e,n){},e3ab:function(t,e,n){t.exports=n.p+"img/ccyp.e9642e49.png"},e5f4:function(t,e,n){},eee0:function(t,e,n){}});
//# sourceMappingURL=app.af9a57f5.js.map