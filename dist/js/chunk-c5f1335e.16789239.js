(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c5f1335e"],{5380:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"dashboard-wrap"},[e("div",[e("h3",{staticClass:"dashboard-title"},[t._v("Halls")]),e("div",[t.hostels?e("v-row",t._l(t.hostels,(function(a){return e("v-col",{key:a._id,attrs:{cols:"12",sm:"6",md:"3"}},[e("v-card",{attrs:{color:"#fff",dark:""}},[e("img",{staticStyle:{width:"100%",height:"180px"},attrs:{src:a.image,alt:""}}),e("div",{staticClass:"content_wrap"},[e("h3",{staticClass:"head"},[t._v(" "+t._s(a.hall_Name.toUpperCase())+" ")]),e("div",{staticClass:"subHead"},[e("div",{staticStyle:{width:"100%"}},[t._v(" Number of Bed Space ")]),e("div",{staticStyle:{color:"#464242","font-size":"13px","font-weight":"500"}},[t._v(" "+t._s(a.bed_No)+" ")])]),e("div",{staticClass:"primary_content"},[e("div",{staticClass:"rating"},[t._v("4.0*")]),e("div",{staticClass:"review"},[t._v("(0 Reviews)")]),e("s",{staticClass:"old_price"},[t._v("$150")])]),e("div",{staticClass:"primary_content"},[e("div",{staticClass:"discount"},[t._v("Save upto 50% off")]),e("div",{staticClass:"new_price"},[t._v("$"+t._s(a.fees))])]),e("div",{staticStyle:{display:"flex","justify-content":"center"}},[e("v-btn",{attrs:{small:"",text:"",color:"#1F7087"},on:{click:function(e){return e.preventDefault(),t.navigate(a._id)}}},[t._v("Select Hall")])],1)]),e("div",{staticClass:"tag"},[t._v(t._s(a.room_No)+" Rooms Available")])])],1)})),1):e("div",[t._v(" Loading......... ")])],1)])])},i=[],n=(e("96cf"),e("1da1")),l={name:"Dasboard",data:function(){return{hostels:""}},components:{},mounted:function(){this.getAllAvailabeHall()},methods:{navigate:function(t){this.$router.push({name:"viewdetail",params:{id:t}})},getAllAvailabeHall:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var e;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.$http.get("/api/booking/halls");case 2:e=a.sent,t.hostels=e.data.hall;case 4:case"end":return a.stop()}}),a)})))()}}},r=l,c=(e("766a"),e("2877")),o=e("6544"),d=e.n(o),v=e("8336"),u=e("b0af"),f=e("62ad"),_=e("0fd9"),h=Object(c["a"])(r,s,i,!1,null,"0421013e",null);a["default"]=h.exports;d()(h,{VBtn:v["a"],VCard:u["a"],VCol:f["a"],VRow:_["a"]})},"766a":function(t,a,e){"use strict";var s=e("fe4a"),i=e.n(s);i.a},fe4a:function(t,a,e){}}]);
//# sourceMappingURL=chunk-c5f1335e.16789239.js.map