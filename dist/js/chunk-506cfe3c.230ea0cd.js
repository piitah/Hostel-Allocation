(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-506cfe3c"],{"1f4f":function(t,e,a){"use strict";a("a9e3");var s=a("5530"),i=(a("8b37"),a("80d2")),o=a("7560"),r=a("58df");e["a"]=Object(r["a"])(o["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(s["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(i["f"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"20f6":function(t,e,a){},"2fa4":function(t,e,a){"use strict";a("20f6");var s=a("80d2");e["a"]=Object(s["g"])("spacer","div","v-spacer")},6549:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-wrap"},[a("div",[a("h3",{staticClass:"dashboard-title"},[t._v("Room Report")]),a("div",{staticClass:"wrap"},[a("div",{staticClass:"title"},[t._v(" All Room Details ")]),a("div",{staticClass:"profile-container"},[a("div",[a("div",[a("v-row",[a("v-spacer"),a("v-col",{attrs:{cols:"6",md:"3"}},[a("v-row",[a("v-col",{staticStyle:{padding:"0px 12px 0px 0px"},attrs:{cols:"12",md:"12"}},[a("v-text-field",{attrs:{solo:"",label:"Search",dense:""}})],1)],1)],1)],1)],1),a("v-simple-table",{staticStyle:{border:"1px solid #ccc !important"},scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",{staticStyle:{"background-color":"#ccc"}},[a("th",{staticClass:"text-left"},[t._v("Sno.")]),a("th",{staticClass:"text-left"},[t._v("Hall Name")]),a("th",{staticClass:"text-left"},[t._v("Room No")]),a("th",{staticClass:"text-left"},[t._v("Bed No")]),a("th",{staticClass:"text-left"},[t._v("Assign To")]),a("th",{staticClass:"text-left"},[t._v("Paid")]),a("th",{staticClass:"text-center"},[t._v("Allocated")])])]),a("tbody",t._l(t.rooms,(function(e,s){return a("tr",{key:e._id},[a("td",[t._v(t._s(s+1))]),a("td",[t._v(t._s(e.hallID.hall_Name))]),a("td",[t._v("Room "+t._s(e.roomID.room_No))]),a("td",[t._v("Bed "+t._s(e.Bed_No))]),e.studentID?a("td",[t._v(t._s(e.studentID.name))]):a("td",[t._v("Unassign")]),a("td",[a("div",[t._v(" "+t._s(e.paid?"Paid":"Pending")+" ")])]),a("td",[a("div",{class:e.free?"not_paid":"paid"},[t._v(" "+t._s(e.free?"Not Allocated":"Allocated")+" ")])])])})),0)]},proxy:!0}])})],1)])])])])},i=[],o=(a("96cf"),a("1da1")),r={name:"AddHostel",data:function(){return{rooms:""}},mounted:function(){this.getRoomDetails()},methods:{getRoomDetails:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.$route.params.id,e.next=3,t.$http.get("/api/room/details/".concat(a));case 3:s=e.sent,t.rooms=s.data.payload,console.log(t.rooms);case 6:case"end":return e.stop()}}),e)})))()}}},n=r,l=(a("8e4e"),a("2877")),d=a("6544"),c=a.n(d),f=a("62ad"),v=a("0fd9"),h=a("1f4f"),u=a("2fa4"),p=a("8654"),m=Object(l["a"])(n,s,i,!1,null,"0b0a3490",null);e["default"]=m.exports;c()(m,{VCol:f["a"],VRow:v["a"],VSimpleTable:h["a"],VSpacer:u["a"],VTextField:p["a"]})},"8b37":function(t,e,a){},"8e4e":function(t,e,a){"use strict";var s=a("d7e9"),i=a.n(s);i.a},d7e9:function(t,e,a){}}]);
//# sourceMappingURL=chunk-506cfe3c.230ea0cd.js.map