(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1514f97c"],{"0bc6":function(t,e,i){},"10d2":function(t,e,i){"use strict";var s=i("8dd9");e["a"]=s["a"]},"1c87":function(t,e,i){"use strict";i("99af"),i("ac1f"),i("5319"),i("498a"),i("9911");var s=i("ade3"),a=i("5530"),n=i("2b0e"),r=i("5607"),o=i("80d2");e["a"]=n["a"].extend({name:"routable",directives:{Ripple:r["a"]},props:{activeClass:String,append:Boolean,disabled:Boolean,exact:{type:Boolean,default:void 0},exactActiveClass:String,link:Boolean,href:[String,Object],to:[String,Object],nuxt:Boolean,replace:Boolean,ripple:{type:[Boolean,Object],default:null},tag:String,target:String},data:function(){return{isActive:!1,proxyClass:""}},computed:{classes:function(){var t={};return this.to||(this.activeClass&&(t[this.activeClass]=this.isActive),this.proxyClass&&(t[this.proxyClass]=this.isActive)),t},computedRipple:function(){return null!=this.ripple?this.ripple:!this.disabled&&this.isClickable},isClickable:function(){return!this.disabled&&Boolean(this.isLink||this.$listeners.click||this.$listeners["!click"]||this.$attrs.tabindex)},isLink:function(){return this.to||this.href||this.link},styles:function(){return{}}},watch:{$route:"onRouteChange"},methods:{click:function(t){this.$emit("click",t)},generateRouteLink:function(){var t,e,i=this.exact,n=(t={attrs:{tabindex:"tabindex"in this.$attrs?this.$attrs.tabindex:void 0},class:this.classes,style:this.styles,props:{},directives:[{name:"ripple",value:this.computedRipple}]},Object(s["a"])(t,this.to?"nativeOn":"on",Object(a["a"])(Object(a["a"])({},this.$listeners),{},{click:this.click})),Object(s["a"])(t,"ref","link"),t);if("undefined"===typeof this.exact&&(i="/"===this.to||this.to===Object(this.to)&&"/"===this.to.path),this.to){var r=this.activeClass,o=this.exactActiveClass||r;this.proxyClass&&(r="".concat(r," ").concat(this.proxyClass).trim(),o="".concat(o," ").concat(this.proxyClass).trim()),e=this.nuxt?"nuxt-link":"router-link",Object.assign(n.props,{to:this.to,exact:i,activeClass:r,exactActiveClass:o,append:this.append,replace:this.replace})}else e=(this.href?"a":this.tag)||"div","a"===e&&this.href&&(n.attrs.href=this.href);return this.target&&(n.attrs.target=this.target),{tag:e,data:n}},onRouteChange:function(){var t=this;if(this.to&&this.$refs.link&&this.$route){var e="".concat(this.activeClass," ").concat(this.proxyClass||"").trim(),i="_vnode.data.class.".concat(e);this.$nextTick((function(){Object(o["k"])(t.$refs.link,i)&&t.toggle()}))}},toggle:function(){}}})},"1f4f":function(t,e,i){"use strict";i("a9e3");var s=i("5530"),a=(i("8b37"),i("80d2")),n=i("7560"),r=i("58df");e["a"]=Object(r["a"])(n["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(s["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(a["f"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"20f6":function(t,e,i){},"24b2":function(t,e,i){"use strict";i("a9e3");var s=i("80d2"),a=i("2b0e");e["a"]=a["a"].extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=Object(s["f"])(this.height),i=Object(s["f"])(this.minHeight),a=Object(s["f"])(this.minWidth),n=Object(s["f"])(this.maxHeight),r=Object(s["f"])(this.maxWidth),o=Object(s["f"])(this.width);return e&&(t.height=e),i&&(t.minHeight=i),a&&(t.minWidth=a),n&&(t.maxHeight=n),r&&(t.maxWidth=r),o&&(t.width=o),t}}})},"25a8":function(t,e,i){},"2fa4":function(t,e,i){"use strict";i("20f6");var s=i("80d2");e["a"]=Object(s["g"])("spacer","div","v-spacer")},"4e82":function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var s=i("ade3"),a=i("3206");function n(t,e,i){var n=Object(a["a"])(t,e,i).extend({name:"groupable",props:{activeClass:{type:String,default:function(){if(this[t])return this[t].activeClass}},disabled:Boolean},data:function(){return{isActive:!1}},computed:{groupClasses:function(){return this.activeClass?Object(s["a"])({},this.activeClass,this.isActive):{}}},created:function(){this[t]&&this[t].register(this)},beforeDestroy:function(){this[t]&&this[t].unregister(this)},methods:{toggle:function(){this.$emit("change")}}});return n}n("itemGroup")},8336:function(t,e,i){"use strict";i("4160"),i("caad"),i("c7cd");var s=i("53ca"),a=i("3835"),n=i("5530"),r=(i("86cc"),i("10d2")),o=(i("99af"),i("a9e3"),i("8d4f"),i("a9ad")),c=i("80d2"),l=o["a"].extend({name:"v-progress-circular",props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:function(){return{radius:20}},computed:{calculatedSize:function(){return Number(this.size)+(this.button?8:0)},circumference:function(){return 2*Math.PI*this.radius},classes:function(){return{"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue:function(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray:function(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset:function(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth:function(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles:function(){return{height:Object(c["f"])(this.calculatedSize),width:Object(c["f"])(this.calculatedSize)}},svgStyles:function(){return{transform:"rotate(".concat(Number(this.rotate),"deg)")}},viewBoxSize:function(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle:function(t,e){return this.$createElement("circle",{class:"v-progress-circular__".concat(t),attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg:function(){var t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"".concat(this.viewBoxSize," ").concat(this.viewBoxSize," ").concat(2*this.viewBoxSize," ").concat(2*this.viewBoxSize)}},t)},genInfo:function(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)}},render:function(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}}),h=l,u=i("4e82"),d=i("f2e7"),f=i("fe6c"),v=i("1c87"),b=i("af2b"),p=i("58df"),g=i("d9bd"),m=Object(p["a"])(r["a"],v["a"],f["a"],b["a"],Object(u["a"])("btnToggle"),Object(d["b"])("inputValue"));e["a"]=m.extend().extend({name:"v-btn",props:{activeClass:{type:String,default:function(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,type:{type:String,default:"button"},value:null},data:function(){return{proxyClass:"v-btn--active"}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])(Object(n["a"])(Object(n["a"])(Object(n["a"])({"v-btn":!0},v["a"].options.computed.classes.call(this)),{},{"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--contained":this.contained,"v-btn--depressed":this.depressed||this.outlined,"v-btn--disabled":this.disabled,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--flat":this.isFlat,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top},this.themeClasses),this.groupClasses),this.elevationClasses),this.sizeableClasses)},contained:function(){return Boolean(!this.isFlat&&!this.depressed&&!this.elevation)},computedRipple:function(){var t=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!=this.ripple?this.ripple:t)},isFlat:function(){return Boolean(this.icon||this.text||this.outlined)},isRound:function(){return Boolean(this.icon||this.fab)},styles:function(){return Object(n["a"])({},this.measurableStyles)}},created:function(){var t=this,e=[["flat","text"],["outline","outlined"],["round","rounded"]];e.forEach((function(e){var i=Object(a["a"])(e,2),s=i[0],n=i[1];t.$attrs.hasOwnProperty(s)&&Object(g["a"])(s,n,t)}))},methods:{click:function(t){!this.retainFocusOnClick&&!this.fab&&t.detail&&this.$el.blur(),this.$emit("click",t),this.btnToggle&&this.toggle()},genContent:function(){return this.$createElement("span",{staticClass:"v-btn__content"},this.$slots.default)},genLoader:function(){return this.$createElement("span",{class:"v-btn__loader"},this.$slots.loader||[this.$createElement(h,{props:{indeterminate:!0,size:23,width:2}})])}},render:function(t){var e=[this.genContent(),this.loading&&this.genLoader()],i=this.isFlat?this.setTextColor:this.setBackgroundColor,a=this.generateRouteLink(),n=a.tag,r=a.data;return"button"===n&&(r.attrs.type=this.type,r.attrs.disabled=this.disabled),r.attrs.value=["string","number"].includes(Object(s["a"])(this.value))?this.value:JSON.stringify(this.value),t(n,this.disabled?r:i(this.color,r),e)}})},"86cc":function(t,e,i){},"8b37":function(t,e,i){},"8d4f":function(t,e,i){},"8dd9":function(t,e,i){"use strict";var s=i("5530"),a=(i("25a8"),i("7e2b")),n=i("a9ad"),r=(i("a9e3"),i("ade3")),o=i("2b0e"),c=o["a"].extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation:function(){return this.elevation},elevationClasses:function(){var t=this.computedElevation;return null==t||isNaN(parseInt(t))?{}:Object(r["a"])({},"elevation-".concat(this.elevation),!0)}}}),l=i("24b2"),h=i("7560"),u=i("58df");e["a"]=Object(u["a"])(a["a"],n["a"],c,l["a"],h["a"]).extend({name:"v-sheet",props:{tag:{type:String,default:"div"},tile:Boolean},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({"v-sheet":!0,"v-sheet--tile":this.tile},this.themeClasses),this.elevationClasses)},styles:function(){return this.measurableStyles}},render:function(t){var e={class:this.classes,style:this.styles,on:this.listeners$};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}})},9911:function(t,e,i){"use strict";var s=i("23e7"),a=i("857a"),n=i("af03");s({target:"String",proto:!0,forced:n("link")},{link:function(t){return a(this,"a","href",t)}})},ca47:function(t,e,i){},d0f3:function(t,e,i){"use strict";var s=i("ca47"),a=i.n(s);a.a},e0c7:function(t,e,i){"use strict";var s=i("5530"),a=(i("0bc6"),i("7560")),n=i("58df");e["a"]=Object(n["a"])(a["a"]).extend({name:"v-subheader",props:{inset:Boolean},render:function(t){return t("div",{staticClass:"v-subheader",class:Object(s["a"])({"v-subheader--inset":this.inset},this.themeClasses),attrs:this.$attrs,on:this.$listeners},this.$slots.default)}})},ea1c:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dashboard-wrap"},[i("div",[i("h3",{staticClass:"dashboard-title"},[t._v("Manage Student")]),i("div",{staticClass:"wrap"},[i("div",{staticClass:"title"},[t._v(" All student Details ")]),i("div",{staticClass:"profile-container"},[i("div",[i("div",[i("v-row",[i("v-spacer"),i("v-col",{attrs:{cols:"5"}},[i("v-row",{staticStyle:{display:"flex","justify-content":"right"}},[i("v-col",{staticStyle:{padding:"0px"},attrs:{cols:"2"}},[i("v-subheader",[t._v("Search")])],1),i("v-col",{staticStyle:{padding:"0px 12px 0px 0px"},attrs:{cols:"6"}},[i("v-text-field",{attrs:{solo:"",dense:""}})],1)],1)],1)],1)],1),i("v-simple-table",{staticStyle:{border:"1px solid #ccc !important"},scopedSlots:t._u([{key:"default",fn:function(){return[i("thead",[i("tr",{staticStyle:{"background-color":"#ccc"}},[i("th",{staticClass:"text-left"},[t._v("Sno.")]),i("th",{staticClass:"text-left"},[t._v("Matric No.")]),i("th",{staticClass:"text-left"},[t._v("Email")]),i("th",{staticClass:"text-left"},[t._v("Room No.")]),i("th",{staticClass:"text-left"},[t._v("Contact")]),i("th",{staticClass:"text-left"},[t._v("Bed No.")]),i("th",{staticClass:"text-left"},[t._v("Duration")]),i("th",{staticClass:"text-center"},[t._v("Action")])])]),i("tbody",t._l(t.desserts,(function(e,s){return i("tr",{key:e.name},[i("td",[t._v(t._s(s+1))]),i("td",[t._v(t._s(e.calories))]),i("td",[t._v(t._s(e.name))]),i("td",[t._v(t._s(e.name))]),i("td",[t._v(t._s(e.calories))]),i("td",[t._v(t._s(e.name))]),i("td",[t._v(t._s(e.calories))]),i("td",[i("div",{staticClass:"action"},[i("div",{staticClass:"action-link",staticStyle:{"padding-right":"5px"}},[i("v-btn",{staticStyle:{color:"#fff","text-transform":"capitalize","background-color":"#1F7087","font-size":"12px","font-weight":"400"},attrs:{text:""}},[i("router-link",{staticStyle:{"text-decoration":"none",color:"#fff"},attrs:{to:"/admin/edit-student"}},[t._v("Edit")])],1)],1),i("div",{staticClass:"action-link"},[i("v-btn",{staticStyle:{color:"#fff","text-transform":"capitalize","background-color":"#385F73","font-size":"12px","font-weight":"400"},attrs:{text:""}},[i("router-link",{staticStyle:{"text-decoration":"none",color:"#fff"},attrs:{to:"/admin/student-registration"}},[t._v("Allocate")])],1)],1)])])])})),0)]},proxy:!0}])})],1)])])])])},a=[],n={data:function(){return{desserts:[{name:"Frozen Yogurt",calories:159},{name:"Ice cream sandwich",calories:237},{name:"Eclair",calories:262},{name:"Cupcake",calories:305},{name:"Gingerbread",calories:356},{name:"Jelly bean",calories:375},{name:"Lollipop",calories:392},{name:"Honeycomb",calories:408},{name:"Donut",calories:452},{name:"KitKat",calories:518}]}}},r=n,o=(i("d0f3"),i("2877")),c=i("6544"),l=i.n(c),h=i("8336"),u=i("62ad"),d=i("0fd9"),f=i("1f4f"),v=i("2fa4"),b=i("e0c7"),p=i("8654"),g=Object(o["a"])(r,s,a,!1,null,"4758c142",null);e["default"]=g.exports;l()(g,{VBtn:h["a"],VCol:u["a"],VRow:d["a"],VSimpleTable:f["a"],VSpacer:v["a"],VSubheader:b["a"],VTextField:p["a"]})},f2e7:function(t,e,i){"use strict";i.d(e,"b",(function(){return n}));var s=i("ade3"),a=i("2b0e");function n(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"input";return a["a"].extend({name:"toggleable",model:{prop:e,event:i},props:Object(s["a"])({},e,{required:!1}),data:function(){return{isActive:!!this[e]}},watch:(t={},Object(s["a"])(t,e,(function(t){this.isActive=!!t})),Object(s["a"])(t,"isActive",(function(t){!!t!==this[e]&&this.$emit(i,t)})),t)})}var r=n();e["a"]=r}}]);
//# sourceMappingURL=chunk-1514f97c.12cc6833.js.map