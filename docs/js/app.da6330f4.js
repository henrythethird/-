(function(e){function t(t){for(var a,i,s=t[0],l=t[1],u=t[2],d=0,p=[];d<s.length;d++)i=s[d],n[i]&&p.push(n[i][0]),n[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);c&&c(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],a=!0,s=1;s<r.length;s++){var l=r[s];0!==n[l]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var a={},n={1:0},o=[];function i(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=a,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(r,a,function(t){return e[t]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var c=l;o.push([4,0]),r()})({"/Cd3":function(e,t,r){"use strict";var a=r("U2fa"),n=r.n(a);n.a},"/omp":function(e,t,r){},4:function(e,t,r){e.exports=r("Vtdi")},HltS:function(e,t,r){"use strict";var a=r("/omp"),n=r.n(a);n.a},Tg8p:function(e,t,r){},U2fa:function(e,t,r){},Vtdi:function(e,t,r){"use strict";r.r(t);r("VRzm");var a=r("Kw5r"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Header"),r("section",{staticClass:"page"},[r("router-view")],1)],1)},o=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",[r("h1",{staticClass:"title"},[r("router-link",{staticClass:"title",attrs:{to:{name:"index"}}},[e._v("kpat.io")])],1)])},s=[],l={name:"Header"},u=l,c=(r("/Cd3"),r("KHd+")),d=Object(c["a"])(u,i,s,!1,null,"adacc970",null),p=d.exports,h={name:"app",components:{Header:p}},f=h,v=(r("nNx0"),Object(c["a"])(f,n,o,!1,null,null,null)),g=v.exports,m=r("jE9Z"),y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("Post")],1)},b=[],w=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},_=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("article",{staticClass:"post"},[r("h2",{staticClass:"title"},[e._v("This is the title")]),r("section",{staticClass:"content"},[r("p",[e._v("Another point about "),r("b",[e._v("vuex/vue-router")]),e._v(" are that those are not vue-cli plugins. I believe to add those after project creation you would just want to run yarn install vue-router or npm install --save vue-router. Because these libraries are so tightly coupled to Vue (and there are a couple files generated when added via the vue create CLI call) it may be nice to support adding them via the CLI as well as the standard process of using your preferred node package manager")]),r("p",[e._v("Assuming that people illl have made some changes to the initially created files, adding stuff to them later is either very complicated to get right or very likely to break your existing code because the generated code doesn't work with the changes you already made")]),r("blockquote",[e._v("Assuming that people illl have made some changes to the initially created files, adding stuff to them later is either very complicated to get right or very likely to break your existing code because the generated code doesn't work with the changes you already made")]),r("p",[e._v("Another point about vuex/vue-router are that those are not vue-cli plugins. I believe to add those after project creation you would just want to run yarn install vue-router or npm install --save vue-router. Because these libraries are so tightly coupled to Vue (and there are a couple files generated when added via the vue create CLI call) it may be nice to support adding them via the CLI as well as the standard process of using your preferred node package manager")]),r("hr"),r("p",[e._v("Assuming that people illl have made some changes to the initially created files, adding stuff to them later is either very complicated to get right or very likely to break your existing code because the generated code doesn't work with the changes you already made")])])])}],x={name:"Post"},j=x,k=(r("HltS"),Object(c["a"])(j,w,_,!1,null,"7ac7e068",null)),C=k.exports,O={name:"Index",components:{Post:C}},P=O,E=(r("svYH"),Object(c["a"])(P,y,b,!1,null,"1d989e8d",null)),H=E.exports;a["a"].use(m["a"]);var A=new m["a"]({routes:[{path:"/",name:"index",component:H}]}),I=r("L2JU");a["a"].use(I["a"]);var S={};a["a"].config.productionTip=!1,new a["a"]({el:"#app",router:A,store:S,components:{App:g},render:function(e){return e(g)},template:"<App/>"})},nNx0:function(e,t,r){"use strict";var a=r("uWEC"),n=r.n(a);n.a},svYH:function(e,t,r){"use strict";var a=r("Tg8p"),n=r.n(a);n.a},uWEC:function(e,t,r){}});
//# sourceMappingURL=app.da6330f4.js.map