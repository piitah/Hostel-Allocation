(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2595052a"],{"99d9":function(t,a,s){"use strict";s.d(a,"a",(function(){return n}));var r=s("b0af"),e=s("80d2"),n=Object(e["g"])("v-card__actions"),c=Object(e["g"])("v-card__subtitle"),o=Object(e["g"])("v-card__text"),i=Object(e["g"])("v-card__title");r["a"]},"9a1c":function(t,a,s){"use strict";s.r(a);var r=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"dashboard-wrap"},[s("div",[s("h3",{staticClass:"dashboard-title"},[t._v("Dashboard")]),s("div",[s("v-row",{attrs:{dense:""}},[s("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[s("v-card",{attrs:{color:"#fff",dark:""}},[s("div",{staticClass:"report-wrap"},[s("div",{staticClass:"report-no"},[t._v(t._s(t.rooms.length))]),s("div",{staticClass:"report-name"},[t._v("TOTAL ROOM")])]),s("v-card-actions",[s("v-btn",{staticClass:"link",attrs:{text:""}},[t._v("See All")])],1)],1)],1),s("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[s("v-card",{attrs:{color:"#fff",dark:""}},[s("div",{staticClass:"report-wrap-2"},[s("div",{staticClass:"report-no"},[t._v(t._s(t.students.length))]),s("div",{staticClass:"report-name"},[t._v("STUDENTS")])]),s("v-card-actions",{staticStyle:{display:"flex","justify-content":"center"}},[s("router-link",{attrs:{to:"/admin/manage-student"}},[s("v-btn",{staticClass:"link",attrs:{text:""}},[t._v("See All")])],1)],1)],1)],1),t._v(" "),s("v-col",{attrs:{xs:"12",sm:"6",md:"4"}},[s("v-card",{attrs:{color:"#fff",dark:""}},[s("div",{staticClass:"report-wrap-3"},[s("div",{staticClass:"report-no"},[t._v(t._s(t.halls.length))]),s("div",{staticClass:"report-name"},[t._v("HOSTEL")])]),s("v-card-actions",{staticStyle:{display:"flex","justify-content":"center"}},[s("router-link",{attrs:{to:"/admin/hostel-report"}},[s("v-btn",{staticClass:"link",attrs:{text:""}},[t._v("See All")])],1)],1)],1)],1)],1)],1)])])},e=[],n=(s("96cf"),s("1da1")),c={name:"Dasboard",data:function(){return{halls:"",rooms:"",students:""}},mounted:function(){this.fetch()},methods:{fetch:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.$http.get("/api/room/halls");case 2:s=a.sent,t.halls=s.data.halls,t.rooms=s.data.rooms,t.students=s.data.users;case 6:case"end":return a.stop()}}),a)})))()}}},o=c,i=(s("c2fb"),s("2877")),l=s("6544"),d=s.n(l),v=s("8336"),u=s("b0af"),f=s("99d9"),p=s("62ad"),h=s("0fd9"),m=Object(i["a"])(o,r,e,!1,null,"c25e600c",null);a["default"]=m.exports;d()(m,{VBtn:v["a"],VCard:u["a"],VCardActions:f["a"],VCol:p["a"],VRow:h["a"]})},c2fb:function(t,a,s){"use strict";var r=s("d3e1"),e=s.n(r);e.a},d3e1:function(t,a,s){}}]);
//# sourceMappingURL=chunk-2595052a.b19023d5.js.map