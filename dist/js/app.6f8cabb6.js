(function(e){function n(n){for(var a,c,o=n[0],h=n[1],i=n[2],d=0,l=[];d<o.length;d++)c=o[d],Object.prototype.hasOwnProperty.call(u,c)&&u[c]&&l.push(u[c][0]),u[c]=0;for(a in h)Object.prototype.hasOwnProperty.call(h,a)&&(e[a]=h[a]);f&&f(n);while(l.length)l.shift()();return r.push.apply(r,i||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],a=!0,c=1;c<t.length;c++){var o=t[c];0!==u[o]&&(a=!1)}a&&(r.splice(n--,1),e=h(h.s=t[0]))}return e}var a={},c={app:0},u={app:0},r=[];function o(e){return h.p+"js/"+({}[e]||e)+"."+{"chunk-2186457a":"24ee3d65","chunk-480ff295":"0a71d06b","chunk-63e3ada2":"1b24f987","chunk-51350ca4":"933aa85e","chunk-137e8023":"e652faf2","chunk-cbc58bd6":"9f153be2","chunk-d9673a10":"58ea3205","chunk-371a2632":"1f5d53ff","chunk-1514f97c":"12cc6833","chunk-087a0910":"eed55d31","chunk-482c2e66":"bbd2b477","chunk-5fd8e2d0":"8e15021e","chunk-7d1a62d2":"bec10154","chunk-8913bc58":"75f4c50a","chunk-bf9b52dc":"acc30af8","chunk-a574c07e":"7e4071f8","chunk-6568d04d":"f94d23f5","chunk-0900a89d":"3145616e","chunk-3826d915":"7c68dc72","chunk-8ba29986":"95e1f862","chunk-0bb53536":"e06b7e1e","chunk-340241a7":"666855a3","chunk-377f6116":"76c7afbe"}[e]+".js"}function h(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,h),t.l=!0,t.exports}h.e=function(e){var n=[],t={"chunk-2186457a":1,"chunk-480ff295":1,"chunk-63e3ada2":1,"chunk-51350ca4":1,"chunk-137e8023":1,"chunk-cbc58bd6":1,"chunk-d9673a10":1,"chunk-371a2632":1,"chunk-1514f97c":1,"chunk-087a0910":1,"chunk-482c2e66":1,"chunk-5fd8e2d0":1,"chunk-7d1a62d2":1,"chunk-8913bc58":1,"chunk-bf9b52dc":1,"chunk-a574c07e":1,"chunk-0900a89d":1,"chunk-3826d915":1,"chunk-8ba29986":1,"chunk-0bb53536":1,"chunk-340241a7":1,"chunk-377f6116":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise((function(n,t){for(var a="css/"+({}[e]||e)+"."+{"chunk-2186457a":"421742ed","chunk-480ff295":"8aa0a10b","chunk-63e3ada2":"97538dfa","chunk-51350ca4":"865b732f","chunk-137e8023":"ca160fff","chunk-cbc58bd6":"eb20b32d","chunk-d9673a10":"85e964b6","chunk-371a2632":"bd6e0bce","chunk-1514f97c":"02fb54d0","chunk-087a0910":"305add78","chunk-482c2e66":"6ad5ffcc","chunk-5fd8e2d0":"04e86370","chunk-7d1a62d2":"fcfd1bbb","chunk-8913bc58":"d2b95a71","chunk-bf9b52dc":"4c2ebbca","chunk-a574c07e":"d6ad254c","chunk-6568d04d":"31d6cfe0","chunk-0900a89d":"41102a29","chunk-3826d915":"ecda437d","chunk-8ba29986":"99c44818","chunk-0bb53536":"463e3ea2","chunk-340241a7":"28b30907","chunk-377f6116":"6d62902c"}[e]+".css",u=h.p+a,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var i=r[o],d=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(d===a||d===u))return n()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){i=l[o],d=i.getAttribute("data-href");if(d===a||d===u)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var a=n&&n.target&&n.target.src||u,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete c[e],f.parentNode.removeChild(f),t(r)},f.href=u;var s=document.getElementsByTagName("head")[0];s.appendChild(f)})).then((function(){c[e]=0})));var a=u[e];if(0!==a)if(a)n.push(a[2]);else{var r=new Promise((function(n,t){a=u[e]=[n,t]}));n.push(a[2]=r);var i,d=document.createElement("script");d.charset="utf-8",d.timeout=120,h.nc&&d.setAttribute("nonce",h.nc),d.src=o(e);var l=new Error;i=function(n){d.onerror=d.onload=null,clearTimeout(f);var t=u[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",l.name="ChunkLoadError",l.type=a,l.request=c,t[1](l)}u[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:d})}),12e4);d.onerror=d.onload=i,document.head.appendChild(d)}return Promise.all(n)},h.m=e,h.c=a,h.d=function(e,n,t){h.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},h.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},h.t=function(e,n){if(1&n&&(e=h(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(h.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)h.d(t,a,function(n){return e[n]}.bind(null,a));return t},h.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return h.d(n,"a",n),n},h.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},h.p="/",h.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=n,i=i.slice();for(var l=0;l<i.length;l++)n(i[l]);var f=d;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n),t.d(n,"EventBus",(function(){return j}));t("45fc"),t("d3b7"),t("96cf");var a=t("1da1"),c=(t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("2b0e")),u=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-app",[t("v-content",[t("router-view")],1)],1)},r=[],o={name:"App",data:function(){return{selection:[],items:["Foo","Bar","Fizz","Buzz"]}}},h=o,i=t("2877"),d=t("6544"),l=t.n(d),f=t("7496"),s=t("a75b"),k=Object(i["a"])(h,u,r,!1,null,null,null),m=k.exports;l()(k,{VApp:f["a"],VContent:s["a"]});var p=t("8c4f");c["a"].use(p["a"]);var b=[{path:"/",name:"Index",component:function(){return Promise.all([t.e("chunk-2186457a"),t.e("chunk-480ff295"),t.e("chunk-63e3ada2"),t.e("chunk-51350ca4"),t.e("chunk-cbc58bd6")]).then(t.bind(null,"4468"))},meta:{requiresAuth:!0,studentAuth:!0,adminAuth:!1},children:[{path:"",name:"Profile",component:function(){return Promise.all([t.e("chunk-2186457a"),t.e("chunk-d9673a10"),t.e("chunk-371a2632"),t.e("chunk-480ff295"),t.e("chunk-bf9b52dc")]).then(t.bind(null,"3292"))}},{path:"book-hostel",name:"Book",component:function(){return Promise.all([t.e("chunk-2186457a"),t.e("chunk-d9673a10"),t.e("chunk-480ff295"),t.e("chunk-0bb53536")]).then(t.bind(null,"5380"))}},{path:"book-hostel/:id",name:"viewdetail",component:function(){return Promise.all([t.e("chunk-2186457a"),t.e("chunk-d9673a10"),t.e("chunk-480ff295"),t.e("chunk-340241a7")]).then(t.bind(null,"29ac"))}},{path:"agent",name:"Agent",component:function(){return Promise.all([t.e("chunk-2186457a"),t.e("chunk-d9673a10"),t.e("chunk-371a2632"),t.e("chunk-480ff295"),t.e("chunk-7d1a62d2")]).then(t.bind(null,"332e"))}}]},{path:"/index",name:"Index",component:function(){return Promise.all([t.e("chunk-2186457a"),t.e("chunk-d9673a10"),t.e("chunk-371a2632"),t.e("chunk-6568d04d"),t.e("chunk-0900a89d")]).then(t.bind(null,"1e4b"))}},{path:"/register",name:"Register",component:function(){return Promise.all([t.e("chunk-2186457a"),t.e("chunk-d9673a10"),t.e("chunk-371a2632"),t.e("chunk-6568d04d"),t.e("chunk-3826d915")]).then(t.bind(null,"73cf"))}},{path:"/admin",name:"Admin",component:function(){return Promise.all([t.e("chunk-2186457a"),t.e("chunk-480ff295"),t.e("chunk-63e3ada2"),t.e("chunk-51350ca4"),t.e("chunk-137e8023")]).then(t.bind(null,"2953"))},meta:{requiresAuth:!0,studentAuth:!1,adminAuth:!0},children:[{path:"",name:"Dashboard",component:function(){return Promise.all([t.e("chunk-2186457a"),t.e("chunk-d9673a10"),t.e("chunk-480ff295"),t.e("chunk-377f6116")]).then(t.bind(null,"9a1c"))}},{path:"new-hostel",name:"AddHostel",component:function(){return Promise.all([t.e("chunk-2186457a"),t.e("chunk-d9673a10"),t.e("chunk-371a2632"),t.e("chunk-480ff295"),t.e("chunk-087a0910")]).then(t.bind(null,"1f40"))}},{path:"hostel-report",name:"HostelReport",component:function(){return Promise.all([t.e("chunk-2186457a"),t.e("chunk-d9673a10"),t.e("chunk-371a2632"),t.e("chunk-480ff295"),t.e("chunk-8913bc58")]).then(t.bind(null,"b791"))}},{path:"manage-student",name:"ManageSTudent",component:function(){return Promise.all([t.e("chunk-2186457a"),t.e("chunk-d9673a10"),t.e("chunk-371a2632"),t.e("chunk-480ff295"),t.e("chunk-5fd8e2d0")]).then(t.bind(null,"fc86"))}},{path:"student/:id",name:"EditStudent",component:function(){return Promise.all([t.e("chunk-2186457a"),t.e("chunk-d9673a10"),t.e("chunk-371a2632"),t.e("chunk-63e3ada2"),t.e("chunk-a574c07e")]).then(t.bind(null,"fd47"))}},{path:"edit-room",name:"EditRoom",component:function(){return Promise.all([t.e("chunk-2186457a"),t.e("chunk-d9673a10"),t.e("chunk-371a2632"),t.e("chunk-480ff295"),t.e("chunk-482c2e66")]).then(t.bind(null,"0d95"))}},{path:"bed-details",name:"BedDetails",component:function(){return Promise.all([t.e("chunk-2186457a"),t.e("chunk-d9673a10"),t.e("chunk-371a2632"),t.e("chunk-1514f97c")]).then(t.bind(null,"ea1c"))}},{path:"hostel-report/:id",name:"RoomDetails",component:function(){return Promise.all([t.e("chunk-2186457a"),t.e("chunk-d9673a10"),t.e("chunk-371a2632"),t.e("chunk-8ba29986")]).then(t.bind(null,"6549"))}}]}],g=new p["a"]({mode:"history",base:"/",routes:b}),v=g,w=t("2f62");c["a"].use(w["a"]);var y=new w["a"].Store({state:{isAuthenticated:!!localStorage.getItem("user_token"),token:localStorage.getItem("user_token")||null,Role:localStorage.getItem("Role")||null},mutations:{setToken:function(e,n){e.token=n,e.isAuthenticated=!0},setUser:function(e,n){e.Role=n.role},LOGOUT_SUCCESS:function(e){window.localStorage.removeItem("user_token"),window.localStorage.removeItem("Role"),e.token=null,e.isAuthenticated=!1,e.Role=null},TRY_AUTO_LOGIN_SUCCESS:function(e,n){e.Role=n.role,e.token=n.token,e.isAuthenticated=!0}},actions:{setToken:function(e,n){var t=e.commit;t("setToken",n)},setUser:function(e,n){var t=e.commit;t("setUser",n)},LOGOUT:function(e){return Object(a["a"])(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t=e.commit,t("LOGOUT_SUCCESS"),v.push({path:"/index"});case 3:case"end":return n.stop()}}),n)})))()},TRY_AUTO_LOGIN:function(e){return Object(a["a"])(regeneratorRuntime.mark((function n(){var t,a,c,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t=e.commit,a=window.localStorage.getItem("user_token"),a){n.next=4;break}return n.abrupt("return",v.push({path:"/index"}));case 4:a&&(c=localStorage.getItem("user_token"),u=localStorage.getItem("Role"),t("TRY_AUTO_LOGIN_SUCCESS",{role:u,token:c}));case 5:case"end":return n.stop()}}),n)})))()}},modules:{}}),S=t("f309");c["a"].use(S["a"]);var A=new S["a"]({}),P=t("5886"),_=t("bc3a"),O=t.n(_),R=t("a1bc"),T=t.n(R),x=(t("4413"),O.a.create({baseURL:T.a.base_api,headers:{Accept:"application/json","Content-type":"application/json"}}));x.interceptors.request.use(function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(n){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=y.state.token,t&&(n.headers.Authorization=t),e.abrupt("return",n);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),(function(e){return Promise.reject(e)}));var j=new c["a"];c["a"].prototype.$http=x,c["a"].use(P["a"]);var E=localStorage.getItem("user_token");E&&y.dispatch("TRY_AUTO_LOGIN"),v.beforeEach((function(e,n,t){e.matched.some((function(e){return e.meta.requiresAuth}))?y.state.token?e.matched.some((function(e){return e.meta.adminAuth}))?"Admin"===y.state.Role?t():t({path:"/",query:{redirect:e.fullPath}}):e.matched.some((function(e){return e.meta.studentAuth}))?"User"===y.state.Role||"Agent"===y.state.Role?t():t({path:"/admin",query:{redirect:e.fullPath}}):t():t({path:"/index",query:{redirect:e.fullPath}}):t()})),c["a"].config.productionTip=!1,new c["a"]({router:v,store:y,vuetify:A,render:function(e){return e(m)}}).$mount("#app")},a1bc:function(e,n,t){t("ed18").config(),e.exports={base_api:"http://bimbo-hostel.herokuapp.com"}}});
//# sourceMappingURL=app.6f8cabb6.js.map