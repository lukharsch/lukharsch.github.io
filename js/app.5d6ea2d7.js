(function(t){function e(e){for(var n,r,o=e[0],c=e[1],l=e[2],u=0,p=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&p.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var c=a[r];0!==s[c]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},s={app:0},i=[];function r(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"612e8dc9"}[t]+".js"}function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a=s[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=s[t]=[e,n]}));e.push(a[2]=n);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=r(t);var l=new Error;i=function(e){c.onerror=c.onload=null,clearTimeout(u);var a=s[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",l.name="ChunkLoadError",l.type=n,l.request=i,a[1](l)}s[t]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"489a":function(t,e,a){t.exports=a.p+"img/profilbild.e0bb707a.jpg"},5378:function(t,e,a){"use strict";a("7ee0")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-container",{staticClass:"background",staticStyle:{"max-width":"1080px","margin-left":"auto","margin-right":"auto"},attrs:{fluid:""}},[a("v-main",[a("v-btn",{staticStyle:{"z-index":"99"},attrs:{fixed:"",right:"",top:"",icon:"",color:"primary"},on:{click:t.toggleDark}},[this.$vuetify.theme.dark?a("v-icon",{attrs:{dark:""}},[t._v(" mdi-brightness-7 ")]):a("v-icon",{attrs:{dark:""}},[t._v(" mdi-brightness-4 ")])],1),a("router-view")],1)],1)],1)},i=[],r={name:"App",data:function(){return{}},methods:{toggleDark:function(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark}}},o=r,c=a("2877"),l=a("6544"),u=a.n(l),d=a("7496"),p=a("8336"),f=a("a523"),m=a("132d"),v=a("f6c4"),g=Object(c["a"])(o,s,i,!1,null,null,null),h=g.exports;u()(g,{VApp:d["a"],VBtn:p["a"],VContainer:f["a"],VIcon:m["a"],VMain:v["a"]});a("d3b7"),a("3ca3"),a("ddb0");var b=a("8c4f"),y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{style:"height: "+t.computedHeight}),n("div",{staticStyle:{height:"100%",display:"flex","flex-flow":"column"}},[n("div",{staticStyle:{flex:"0 1 auto",position:"sticky",top:"0px","background-color":"var(--v-background-base)","z-index":"90"}},[n("h1",{staticClass:"text-h2 text-sm-h1 pb-4"},[t._v(" Hey,"),n("br"),t._v(t._s(t.startingWord)+" "),n("span",{staticClass:"primary--text"},[t._v(t._s(t.buzz))])]),n("div",{staticClass:"grad"})]),n("div",{staticStyle:{flex:"1 1 auto"}},[n("div",{staticStyle:{display:"flex","justify-content":"center","align-items":"center",height:"100%","margin-top":"200px","margin-bottom":"100px"}},[n("div",{class:t.avatarClasses},[n("div",{class:t.avatarClasses,style:"position: absolute;display: flex;justify-content: space-between;right: "+(this.$vuetify.breakpoint.smAndUp?"-110px":"-55px")+";top: "+(this.$vuetify.breakpoint.smAndUp?"-110px":"-75px")+";"},[n("svg",{staticClass:"rotate mr-4 mt-2 mt-md-4",staticStyle:{"enable-background":"new 0 0 415.262 415.261"},attrs:{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:this.$vuetify.breakpoint.smAndUp?"100":"60",viewBox:"0 0 415.262 415.261","xml:space":"preserve"}},[n("g",[n("path",{staticStyle:{fill:"var(--v-primary-base)"},attrs:{d:"M414.937,374.984c-7.956-24.479-20.196-47.736-30.601-70.992c-1.224-3.06-6.12-3.06-7.956-1.224\n\t\tc-10.403,11.016-22.031,22.032-28.764,35.496h-0.612c-74.664,5.508-146.88-58.141-198.288-104.652\n\t\tc-59.364-53.244-113.22-118.116-134.64-195.84c-1.224-9.792-2.448-20.196-2.448-30.6c0-4.896-6.732-4.896-7.344,0\n\t\tc0,1.836,0,3.672,0,5.508C1.836,12.68,0,14.516,0,17.576c0.612,6.732,2.448,13.464,3.672,20.196\n\t\tC8.568,203.624,173.808,363.356,335.376,373.76c-5.508,9.792-10.403,20.195-16.523,29.988c-3.061,4.283,1.836,8.567,6.12,7.955\n\t\tc30.6-4.283,58.14-18.972,86.292-29.987C413.712,381.104,416.16,378.656,414.937,374.984z M332.928,399.464\n\t\tc3.673-7.956,6.12-15.912,10.404-23.868c1.225-3.061-0.612-5.508-2.448-6.12c0-1.836-1.224-3.061-3.06-3.672\n\t\tc-146.268-24.48-264.996-124.236-309.06-259.489c28.764,53.244,72.828,99.756,116.28,138.924\n\t\tc31.824,28.765,65.484,54.468,102.204,75.888c28.764,16.524,64.872,31.824,97.92,21.421l0,0c-1.836,4.896,5.508,7.344,7.956,3.672\n\t\tc7.956-10.404,15.912-20.196,24.48-29.376c8.567,18.972,17.748,37.943,24.479,57.527\n\t\tC379.44,382.94,356.796,393.956,332.928,399.464z"}})]),n("g"),n("g"),n("g"),n("g"),n("g"),n("g"),n("g"),n("g"),n("g"),n("g"),n("g"),n("g"),n("g"),n("g"),n("g")]),n("span",{staticClass:"hand",style:"font-size: "+t.tmSize},[t._v("that's me")])]),n("v-avatar",{staticStyle:{border:"5px solid var(--v-primary-base)"},attrs:{size:"clamp(160px, 50vw, 350px)"}},[n("v-img",{attrs:{src:a("489a"),alt:"Picture of myself"}})],1)],1)]),n("div",[n("div",{staticStyle:{display:"flex","justify-content":"center","align-items":"center",height:"100%","margin-top":"100px","margin-bottom":"100px"}},[n("div",{class:t.ageClasses,staticStyle:{display:"flex","flex-flow":"column","align-items":"center"}},[n("svg",{staticStyle:{"enable-background":"new 0 0 512 512",fill:"var(--v-primary-base)"},attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:this.$vuetify.breakpoint.smAndUp?"200":"100",viewBox:"0 0 512 512","xml:space":"preserve"}},[n("g",[n("g",[n("g",[n("path",{attrs:{d:"M256,85.27c18.825,0,34.133-15.309,34.133-34.133c0-16.563-23.142-43.196-27.785-48.367c-3.234-3.61-9.463-3.61-12.698,0\n\t\t\t\tc-4.642,5.171-27.785,31.804-27.785,48.367C221.867,69.962,237.175,85.27,256,85.27z M256,21.68\n\t\t\t\tc9.054,11.315,17.067,24.021,17.067,29.457c0,9.412-7.654,17.067-17.067,17.067c-9.412,0-17.067-7.654-17.067-17.067\n\t\t\t\tC238.933,45.701,246.946,32.995,256,21.68z"}}),n("path",{attrs:{d:"M213.333,119.404h85.333c4.719,0,8.533-3.823,8.533-8.533s-3.814-8.533-8.533-8.533h-85.333\n\t\t\t\tc-4.719,0-8.533,3.823-8.533,8.533S208.614,119.404,213.333,119.404z"}}),n("path",{attrs:{d:"M102.4,218.698v62.839c0,4.71,3.814,8.533,8.533,8.533s8.533-3.823,8.533-8.533v-59.733\n\t\t\t\tc10.138,0,18.748-7.125,27.87-14.677c11.008-9.122,23.484-19.456,40.397-19.456s29.389,10.334,40.397,19.456\n\t\t\t\tc9.122,7.552,17.732,14.677,27.87,14.677c10.138,0,18.748-7.125,27.87-14.677c11.008-9.122,23.484-19.456,40.397-19.456\n\t\t\t\tc16.913,0,29.389,10.334,40.397,19.456c9.122,7.552,17.732,14.677,27.87,14.677v59.733c0,4.71,3.814,8.533,8.533,8.533\n\t\t\t\tc4.719,0,8.533-3.823,8.533-8.533v-62.839c19.652-7.219,34.133-26.3,34.133-48.094c0-19.456-14.677-34.133-34.133-34.133H102.4\n\t\t\t\tc-19.456,0-34.133,14.677-34.133,34.133C68.267,192.398,82.748,211.478,102.4,218.698z M102.4,153.537h307.2\n\t\t\t\tc10.052,0,17.067,7.014,17.067,17.067c0,18.5-15.633,34.133-34.133,34.133c-3.994,0-10.59-5.47-16.973-10.752\n\t\t\t\tc-11.913-9.873-28.228-23.381-51.294-23.381c-23.066,0-39.381,13.508-51.294,23.381c-6.383,5.282-12.979,10.752-16.973,10.752\n\t\t\t\ts-10.59-5.47-16.973-10.752c-11.913-9.873-28.228-23.381-51.294-23.381s-39.381,13.508-51.294,23.381\n\t\t\t\tc-6.383,5.282-12.979,10.752-16.973,10.752c-18.5,0-34.133-15.633-34.133-34.133C85.333,160.552,92.348,153.537,102.4,153.537z"}}),n("path",{attrs:{d:"M503.467,494.87H8.533c-4.719,0-8.533,3.823-8.533,8.533s3.814,8.533,8.533,8.533h494.933\n\t\t\t\tc4.719,0,8.533-3.823,8.533-8.533S508.186,494.87,503.467,494.87z"}}),n("path",{attrs:{d:"M34.133,389.364v79.906c0,4.71,3.814,8.533,8.533,8.533s8.533-3.823,8.533-8.533v-76.8\n\t\t\t\tc10.138,0,18.748-7.125,27.87-14.677c11.008-9.122,23.484-19.456,40.397-19.456s29.389,10.334,40.397,19.456\n\t\t\t\tc9.122,7.552,17.732,14.677,27.87,14.677c10.138,0,18.748-7.125,27.87-14.677c11.008-9.122,23.484-19.456,40.397-19.456\n\t\t\t\ts29.389,10.334,40.397,19.456c9.122,7.552,17.732,14.677,27.87,14.677c10.138,0,18.748-7.125,27.87-14.677\n\t\t\t\tc11.008-9.122,23.484-19.456,40.397-19.456c16.913,0,29.389,10.334,40.397,19.456c9.122,7.552,17.732,14.677,27.87,14.677v76.8\n\t\t\t\tc0,4.71,3.814,8.533,8.533,8.533s8.533-3.823,8.533-8.533v-79.906c19.652-7.219,34.133-26.3,34.133-48.094\n\t\t\t\tc0-19.456-14.677-34.133-34.133-34.133H34.133C14.677,307.137,0,321.814,0,341.27C0,363.065,14.481,382.145,34.133,389.364z\n\t\t\t\t M34.133,324.204h443.733c10.052,0,17.067,7.014,17.067,17.067c0,18.5-15.633,34.133-34.133,34.133\n\t\t\t\tc-3.994,0-10.59-5.47-16.973-10.752c-11.912-9.873-28.228-23.381-51.294-23.381c-23.066,0-39.381,13.508-51.294,23.381\n\t\t\t\tc-6.383,5.282-12.979,10.752-16.973,10.752s-10.59-5.47-16.973-10.752c-11.913-9.873-28.228-23.381-51.294-23.381\n\t\t\t\tc-23.066,0-39.381,13.508-51.294,23.381c-6.383,5.282-12.979,10.752-16.973,10.752s-10.59-5.47-16.973-10.752\n\t\t\t\tc-11.913-9.873-28.228-23.381-51.294-23.381s-39.381,13.508-51.294,23.381c-6.383,5.282-12.979,10.752-16.973,10.752\n\t\t\t\tc-18.5,0-34.133-15.633-34.133-34.133C17.067,331.218,24.081,324.204,34.133,324.204z"}})])])]),n("g"),n("g"),n("g"),n("g"),n("g"),n("g"),n("g"),n("g"),n("g"),n("g"),n("g"),n("g"),n("g"),n("g"),n("g")]),n("span",{staticClass:"text-h4 text-center mt-3",staticStyle:{"font-size":"32px !important"}},[t._v(" "+t._s(t.secondsSB)+" seconds ")]),n("span",{staticClass:"text-h5 text-center mt-3",staticStyle:{"font-size":"27px !important"}},[t._v(" "+t._s(t.daysSB)+" days ")]),n("span",{staticClass:"text-h6 text-center mt-3",staticStyle:{"font-size":"20px !important"}},[t._v(" "+t._s(t.weeksSB)+" weeks ")])])])]),n("div",[n("v-timeline",{attrs:{dense:""}},t._l(4,(function(e){return n("v-timeline-item",{key:e,attrs:{small:""},scopedSlots:t._u([{key:"icon",fn:function(){return[n("v-avatar",[n("img",{attrs:{src:"https://i.pravatar.cc/64"}})])]},proxy:!0}],null,!0)},[n("v-card",{staticClass:"elevation-2"},[n("v-card-title",{staticClass:"text-h5"},[t._v(" Lorem ipsum ")]),n("v-card-text",[t._v("Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.")])],1)],1)})),1)],1),n("div",{staticStyle:{height:"100vh"}})])])])},x=[],w=(a("ac1f"),a("5319"),a("25f0"),{name:"Home",components:{},data:function(){return{startingWord:"I'm",buzz:"Lukas",avatarClasses:["fade","fade-out"],ageClasses:["fade","fade-out"],startingPoint:700,sectionSizeMult:3,isName:!1,secondsSB:0,daysSB:Math.round(((new Date).getTime()-new Date(1998,9,16,0,0,0,0).getTime())/864e5).toString().replace(/\B(?=(\d{3})+(?!\d))/g,"."),weeksSB:Math.round(((new Date).getTime()-new Date(1998,9,16,0,0,0,0).getTime())/6048e5).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}},computed:{computedHeight:function(){return this.$vuetify.breakpoint.smAndUp?"calc(50vh - 6rem)":"calc(50vh - 3.75rem)"},computedHeightAvatar:function(){return this.$vuetify.breakpoint.smAndUp?"300":"240"},tmSize:function(){return this.$vuetify.breakpoint.smAndUp?"34px":"24px"}},methods:{updateScroll:function(){console.log(window.scrollY),window.scrollY>4*this.startingPoint?(this.startingWord="You can",this.buzz="contact me"):window.scrollY>3*this.startingPoint?(this.startingWord="I'm",this.buzz="a web developer"):window.scrollY>2*this.startingPoint?(this.startingWord="I'm",this.buzz="a computer science student",this.ageClasses=["fade","fade-out-no-translate"]):window.scrollY>680?(this.startingWord="I'm",this.buzz="23 years old",this.avatarClasses=["fade","fade-out-no-translate"],this.ageClasses=["fade","fade-in"]):(this.startingWord="I'm",this.buzz="Lukas",this.ageClasses=["fade","fade-out"],window.scrollY>200?this.avatarClasses=["fade","fade-in"]:this.avatarClasses=["fade","fade-out"])},getSeconds:function(){var t=this;setInterval((function(){var e=new Date(1998,9,16,0,0,0,0),a=new Date,n=e.getTime()-a.getTime(),s=n/1e3,i=Math.abs(s);t.secondsSB=Math.round(i).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}),1e3)}},mounted:function(){window.addEventListener("scroll",this.updateScroll),this.getSeconds()}}),k=w,C=(a("5378"),a("8212")),S=a("b0af"),z=a("99d9"),_=a("adda"),M=a("8414"),j=a("1e06"),P=Object(c["a"])(k,y,x,!1,null,"848439b2",null),T=P.exports;u()(P,{VAvatar:C["a"],VCard:S["a"],VCardText:z["a"],VCardTitle:z["b"],VImg:_["a"],VTimeline:M["a"],VTimelineItem:j["a"]}),n["a"].use(b["a"]);var B=[{path:"/",name:"Home",component:T},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],A=new b["a"]({routes:B}),O=A,$=a("f309");n["a"].use($["a"]);var V=new $["a"]({theme:{dark:!0,themes:{light:{primary:"#996E00",error:"#B00020",background:"#ffffff"},dark:{primary:"#ffd56b",background:"#121212"}},options:{customProperties:!0}}});n["a"].config.productionTip=!1,new n["a"]({router:O,vuetify:V,render:function(t){return t(h)}}).$mount("#app")},"7ee0":function(t,e,a){}});
//# sourceMappingURL=app.5d6ea2d7.js.map