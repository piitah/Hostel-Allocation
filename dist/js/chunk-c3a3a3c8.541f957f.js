(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c3a3a3c8"],{"10d2":function(t,e,i){"use strict";var s=i("8dd9");e["a"]=s["a"]},"1c87":function(t,e,i){"use strict";i("99af"),i("ac1f"),i("5319"),i("498a"),i("9911");var s=i("ade3"),a=i("5530"),n=i("2b0e"),r=i("5607"),o=i("80d2");e["a"]=n["a"].extend({name:"routable",directives:{Ripple:r["a"]},props:{activeClass:String,append:Boolean,disabled:Boolean,exact:{type:Boolean,default:void 0},exactActiveClass:String,link:Boolean,href:[String,Object],to:[String,Object],nuxt:Boolean,replace:Boolean,ripple:{type:[Boolean,Object],default:null},tag:String,target:String},data:function(){return{isActive:!1,proxyClass:""}},computed:{classes:function(){var t={};return this.to||(this.activeClass&&(t[this.activeClass]=this.isActive),this.proxyClass&&(t[this.proxyClass]=this.isActive)),t},computedRipple:function(){return null!=this.ripple?this.ripple:!this.disabled&&this.isClickable},isClickable:function(){return!this.disabled&&Boolean(this.isLink||this.$listeners.click||this.$listeners["!click"]||this.$attrs.tabindex)},isLink:function(){return this.to||this.href||this.link},styles:function(){return{}}},watch:{$route:"onRouteChange"},methods:{click:function(t){this.$emit("click",t)},generateRouteLink:function(){var t,e,i=this.exact,n=(t={attrs:{tabindex:"tabindex"in this.$attrs?this.$attrs.tabindex:void 0},class:this.classes,style:this.styles,props:{},directives:[{name:"ripple",value:this.computedRipple}]},Object(s["a"])(t,this.to?"nativeOn":"on",Object(a["a"])(Object(a["a"])({},this.$listeners),{},{click:this.click})),Object(s["a"])(t,"ref","link"),t);if("undefined"===typeof this.exact&&(i="/"===this.to||this.to===Object(this.to)&&"/"===this.to.path),this.to){var r=this.activeClass,o=this.exactActiveClass||r;this.proxyClass&&(r="".concat(r," ").concat(this.proxyClass).trim(),o="".concat(o," ").concat(this.proxyClass).trim()),e=this.nuxt?"nuxt-link":"router-link",Object.assign(n.props,{to:this.to,exact:i,activeClass:r,exactActiveClass:o,append:this.append,replace:this.replace})}else e=(this.href?"a":this.tag)||"div","a"===e&&this.href&&(n.attrs.href=this.href);return this.target&&(n.attrs.target=this.target),{tag:e,data:n}},onRouteChange:function(){var t=this;if(this.to&&this.$refs.link&&this.$route){var e="".concat(this.activeClass," ").concat(this.proxyClass||"").trim(),i="_vnode.data.class.".concat(e);this.$nextTick((function(){Object(o["k"])(t.$refs.link,i)&&t.toggle()}))}},toggle:function(){}}})},"1f9e":function(t,e,i){},"20f6":function(t,e,i){},"24b2":function(t,e,i){"use strict";i("a9e3");var s=i("80d2"),a=i("2b0e");e["a"]=a["a"].extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=Object(s["f"])(this.height),i=Object(s["f"])(this.minHeight),a=Object(s["f"])(this.minWidth),n=Object(s["f"])(this.maxHeight),r=Object(s["f"])(this.maxWidth),o=Object(s["f"])(this.width);return e&&(t.height=e),i&&(t.minHeight=i),a&&(t.minWidth=a),n&&(t.maxHeight=n),r&&(t.maxWidth=r),o&&(t.width=o),t}}})},"25a8":function(t,e,i){},"49a9":function(t,e,i){"use strict";var s=i("1f9e"),a=i.n(s);a.a},"4e82":function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var s=i("ade3"),a=i("3206");function n(t,e,i){var n=Object(a["a"])(t,e,i).extend({name:"groupable",props:{activeClass:{type:String,default:function(){if(this[t])return this[t].activeClass}},disabled:Boolean},data:function(){return{isActive:!1}},computed:{groupClasses:function(){return this.activeClass?Object(s["a"])({},this.activeClass,this.isActive):{}}},created:function(){this[t]&&this[t].register(this)},beforeDestroy:function(){this[t]&&this[t].unregister(this)},methods:{toggle:function(){this.$emit("change")}}});return n}n("itemGroup")},"73cf":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"bg",staticStyle:{width:"100%",height:"100vh"}},[t._v(" "),i("v-row",{staticStyle:{height:"100vh",margin:"0px!important"},attrs:{justify:"center",align:"center"}},[i("v-col",{staticClass:"container",staticStyle:{margin:"0px"},attrs:{md:"3",cols:"10"}},[i("div",{staticClass:"wrp"},[i("div",{staticClass:"primary-header"},[t._v(" REGISTER ")])]),i("div",{staticClass:"errMsg"},[t._v(t._s(t.errMsg))]),i("v-form",{on:{submit:function(e){return e.preventDefault(),t.register()}}},[i("v-container",[i("v-text-field",{attrs:{type:"text","error-messages":t.matricErrors,required:"",label:"Matric No."},on:{input:function(e){return t.$v.matric_no.$touch()},blur:function(e){return t.$v.matric_no.$touch()}},model:{value:t.matric_no,callback:function(e){t.matric_no=e},expression:"matric_no"}}),i("v-text-field",{attrs:{type:"text","error-messages":t.userNameErrors,required:"",label:"Username"},on:{input:function(e){return t.$v.username.$touch()},blur:function(e){return t.$v.username.$touch()}},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),i("v-text-field",{attrs:{type:"email","error-messages":t.emailErrors,required:"",label:"email"},on:{input:function(e){return t.$v.email.$touch()},blur:function(e){return t.$v.email.$touch()}},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),i("v-text-field",{attrs:{type:"password","error-messages":t.passwordErrors,required:"",label:"password"},on:{input:function(e){return t.$v.password.$touch()},blur:function(e){return t.$v.password.$touch()}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),i("small",{staticClass:"ml-3 mt-2"},[t._v("Minimum of 8 characters with a mix of letters, numbers & symbols")]),i("div",[i("v-btn",{staticClass:"curve w-100 mt-4",staticStyle:{"background-color":"#4fc7b3",width:"100%"},attrs:{type:"submit",disabled:t.valid}},[t.loading?i("span",[i("div",{staticClass:"m-loader"})]):i("span",{staticStyle:{color:"#fff"}},[t._v(t._s(t.sign_up_btn))])])],1),i("div",{staticClass:"mt-3"},[i("span",{staticStyle:{"font-size":"12px"}},[t._v("Already have an account? "),i("router-link",{attrs:{to:"index"}},[t._v("Click here")])],1)])],1)],1)],1)],1)],1)])},a=[],n=(i("96cf"),i("1da1")),r=i("1dce"),o=i("b5ae"),c={mixins:[r["validationMixin"]],validations:{matric_no:{required:o["required"]},email:{required:o["required"],email:o["email"]},password:{required:o["required"],minLength:Object(o["minLength"])(8)},username:{required:o["required"]}},components:{},data:function(){return{username:"",matric_no:"",password:"",errMsg:"",email:"",valid:!1,sign_up_btn:"Sign up",loading:!1}},computed:{userNameErrors:function(){var t=[];return this.$v.username.$dirty?(!this.$v.username.required&&t.push("Name is required."),t):t},matricErrors:function(){var t=[];return this.$v.matric_no.$dirty?(!this.$v.matric_no.required&&t.push("Matric No. is required."),t):t},passwordErrors:function(){var t=[];return this.$v.password.$dirty?(!this.$v.password.minLength&&t.push("Name must be at most 8 characters long"),!this.$v.password.required&&t.push("password is required."),t):t},emailErrors:function(){var t=[];return this.$v.email.$dirty?(!this.$v.email.email&&t.push("Must be valid e-mail"),!this.$v.email.required&&t.push("E-mail is required"),t):t}},methods:{register:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.$v.$touch(),!t.$v.$invalid){e.next=5;break}return e.abrupt("return");case 5:return t.valid=!0,t.loading=!0,e.next=9,t.$http.post("/api/user/register",{name:t.username,email:t.email,password:t.password,matric_no:t.matric_no}).then((function(e){console.log(e.data),setTimeout((function(){t.$router.push({path:"/index"})}),1e3),t.valid=!1,t.loading=!1})).catch((function(e){t.errMsg=e.response.data.message,t.loading=!1,t.valid=!1}));case 9:t.$v.$reset(),t.username="",t.email="",t.password="",t.matric_no="";case 14:case"end":return e.stop()}}),e)})))()}}},l=c,u=(i("49a9"),i("2877")),h=i("6544"),d=i.n(h),v=i("8336"),f=i("62ad"),m=i("a523"),p=i("4bd4"),b=i("0fd9"),g=i("8654"),x=Object(u["a"])(l,s,a,!1,null,"4421e0f4",null);e["default"]=x.exports;d()(x,{VBtn:v["a"],VCol:f["a"],VContainer:m["a"],VForm:p["a"],VRow:b["a"],VTextField:g["a"]})},8336:function(t,e,i){"use strict";i("4160"),i("caad"),i("c7cd");var s=i("53ca"),a=i("3835"),n=i("5530"),r=(i("86cc"),i("10d2")),o=(i("99af"),i("a9e3"),i("8d4f"),i("a9ad")),c=i("80d2"),l=o["a"].extend({name:"v-progress-circular",props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:function(){return{radius:20}},computed:{calculatedSize:function(){return Number(this.size)+(this.button?8:0)},circumference:function(){return 2*Math.PI*this.radius},classes:function(){return{"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue:function(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray:function(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset:function(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth:function(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles:function(){return{height:Object(c["f"])(this.calculatedSize),width:Object(c["f"])(this.calculatedSize)}},svgStyles:function(){return{transform:"rotate(".concat(Number(this.rotate),"deg)")}},viewBoxSize:function(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle:function(t,e){return this.$createElement("circle",{class:"v-progress-circular__".concat(t),attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg:function(){var t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"".concat(this.viewBoxSize," ").concat(this.viewBoxSize," ").concat(2*this.viewBoxSize," ").concat(2*this.viewBoxSize)}},t)},genInfo:function(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)}},render:function(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}}),u=l,h=i("4e82"),d=i("f2e7"),v=i("fe6c"),f=i("1c87"),m=i("af2b"),p=i("58df"),b=i("d9bd"),g=Object(p["a"])(r["a"],f["a"],v["a"],m["a"],Object(h["a"])("btnToggle"),Object(d["b"])("inputValue"));e["a"]=g.extend().extend({name:"v-btn",props:{activeClass:{type:String,default:function(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,type:{type:String,default:"button"},value:null},data:function(){return{proxyClass:"v-btn--active"}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])(Object(n["a"])(Object(n["a"])(Object(n["a"])({"v-btn":!0},f["a"].options.computed.classes.call(this)),{},{"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--contained":this.contained,"v-btn--depressed":this.depressed||this.outlined,"v-btn--disabled":this.disabled,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--flat":this.isFlat,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top},this.themeClasses),this.groupClasses),this.elevationClasses),this.sizeableClasses)},contained:function(){return Boolean(!this.isFlat&&!this.depressed&&!this.elevation)},computedRipple:function(){var t=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!=this.ripple?this.ripple:t)},isFlat:function(){return Boolean(this.icon||this.text||this.outlined)},isRound:function(){return Boolean(this.icon||this.fab)},styles:function(){return Object(n["a"])({},this.measurableStyles)}},created:function(){var t=this,e=[["flat","text"],["outline","outlined"],["round","rounded"]];e.forEach((function(e){var i=Object(a["a"])(e,2),s=i[0],n=i[1];t.$attrs.hasOwnProperty(s)&&Object(b["a"])(s,n,t)}))},methods:{click:function(t){!this.retainFocusOnClick&&!this.fab&&t.detail&&this.$el.blur(),this.$emit("click",t),this.btnToggle&&this.toggle()},genContent:function(){return this.$createElement("span",{staticClass:"v-btn__content"},this.$slots.default)},genLoader:function(){return this.$createElement("span",{class:"v-btn__loader"},this.$slots.loader||[this.$createElement(u,{props:{indeterminate:!0,size:23,width:2}})])}},render:function(t){var e=[this.genContent(),this.loading&&this.genLoader()],i=this.isFlat?this.setTextColor:this.setBackgroundColor,a=this.generateRouteLink(),n=a.tag,r=a.data;return"button"===n&&(r.attrs.type=this.type,r.attrs.disabled=this.disabled),r.attrs.value=["string","number"].includes(Object(s["a"])(this.value))?this.value:JSON.stringify(this.value),t(n,this.disabled?r:i(this.color,r),e)}})},"86cc":function(t,e,i){},"8d4f":function(t,e,i){},"8dd9":function(t,e,i){"use strict";var s=i("5530"),a=(i("25a8"),i("7e2b")),n=i("a9ad"),r=(i("a9e3"),i("ade3")),o=i("2b0e"),c=o["a"].extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation:function(){return this.elevation},elevationClasses:function(){var t=this.computedElevation;return null==t||isNaN(parseInt(t))?{}:Object(r["a"])({},"elevation-".concat(this.elevation),!0)}}}),l=i("24b2"),u=i("7560"),h=i("58df");e["a"]=Object(h["a"])(a["a"],n["a"],c,l["a"],u["a"]).extend({name:"v-sheet",props:{tag:{type:String,default:"div"},tile:Boolean},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({"v-sheet":!0,"v-sheet--tile":this.tile},this.themeClasses),this.elevationClasses)},styles:function(){return this.measurableStyles}},render:function(t){var e={class:this.classes,style:this.styles,on:this.listeners$};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}})},9911:function(t,e,i){"use strict";var s=i("23e7"),a=i("857a"),n=i("af03");s({target:"String",proto:!0,forced:n("link")},{link:function(t){return a(this,"a","href",t)}})},f2e7:function(t,e,i){"use strict";i.d(e,"b",(function(){return n}));var s=i("ade3"),a=i("2b0e");function n(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"input";return a["a"].extend({name:"toggleable",model:{prop:e,event:i},props:Object(s["a"])({},e,{required:!1}),data:function(){return{isActive:!!this[e]}},watch:(t={},Object(s["a"])(t,e,(function(t){this.isActive=!!t})),Object(s["a"])(t,"isActive",(function(t){!!t!==this[e]&&this.$emit(i,t)})),t)})}var r=n();e["a"]=r}}]);
//# sourceMappingURL=chunk-c3a3a3c8.541f957f.js.map