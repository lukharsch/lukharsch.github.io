(function(t){function e(e){for(var n,s,i=e[0],r=e[1],o=e[2],d=0,p=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);u&&u(e);while(p.length)p.shift()();return l.push.apply(l,o||[]),c()}function c(){for(var t,e=0;e<l.length;e++){for(var c=l[e],n=!0,s=1;s<c.length;s++){var r=c[s];0!==a[r]&&(n=!1)}n&&(l.splice(e--,1),t=i(i.s=c[0]))}return t}var n={},a={app:0},l=[];function s(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"612e8dc9"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var c=n[e]={i:e,l:!1,exports:{}};return t[e].call(c.exports,c,c.exports,i),c.l=!0,c.exports}i.e=function(t){var e=[],c=a[t];if(0!==c)if(c)e.push(c[2]);else{var n=new Promise((function(e,n){c=a[t]=[e,n]}));e.push(c[2]=n);var l,r=document.createElement("script");r.charset="utf-8",r.timeout=120,i.nc&&r.setAttribute("nonce",i.nc),r.src=s(t);var o=new Error;l=function(e){r.onerror=r.onload=null,clearTimeout(d);var c=a[t];if(0!==c){if(c){var n=e&&("load"===e.type?"missing":e.type),l=e&&e.target&&e.target.src;o.message="Loading chunk "+t+" failed.\n("+n+": "+l+")",o.name="ChunkLoadError",o.type=n,o.request=l,c[1](o)}a[t]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:r})}),12e4);r.onerror=r.onload=l,document.head.appendChild(r)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,c){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:c})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var c=Object.create(null);if(i.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(c,n,function(e){return t[e]}.bind(null,n));return c},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var d=0;d<r.length;d++)e(r[d]);var u=o;l.push([0,"chunk-vendors"]),c()})({0:function(t,e,c){t.exports=c("56d7")},"368b":function(t,e,c){},"40fd":function(t,e,c){"use strict";c("368b")},"489a":function(t,e,c){t.exports=c.p+"img/profilbild.e0bb707a.jpg"},"56d7":function(t,e,c){"use strict";c.r(e);c("e260"),c("e6cf"),c("cca6"),c("a79d");var n=c("2b0e"),a=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("v-app",[c("v-container",{staticClass:"background",staticStyle:{"max-width":"1080px","margin-left":"auto","margin-right":"auto"},attrs:{fluid:""}},[c("v-main",[c("v-btn",{staticStyle:{"z-index":"99"},attrs:{fixed:"",right:"",top:"",icon:"",color:"primary"},on:{click:t.toggleDark}},[this.$vuetify.theme.dark?c("v-icon",{attrs:{dark:""}},[t._v(" mdi-brightness-7 ")]):c("v-icon",{attrs:{dark:""}},[t._v(" mdi-brightness-4 ")])],1),c("router-view")],1)],1)],1)},l=[],s={name:"App",data:function(){return{}},methods:{toggleDark:function(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark}}},i=s,r=c("2877"),o=c("6544"),d=c.n(o),u=c("7496"),p=c("8336"),h=c("a523"),m=c("132d"),v=c("f6c4"),f=Object(r["a"])(i,a,l,!1,null,null,null),g=f.exports;d()(f,{VApp:u["a"],VBtn:p["a"],VContainer:h["a"],VIcon:m["a"],VMain:v["a"]});c("d3b7"),c("3ca3"),c("ddb0");var w=c("8c4f"),y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{style:"height: "+t.computedHeight}),n("div",{staticStyle:{height:"100%",display:"flex","flex-flow":"column"}},[n("div",{staticStyle:{flex:"0 1 auto",position:"sticky",top:"0px","background-color":"var(--v-background-base)","z-index":"90"}},[n("h1",{staticClass:"text-h2 text-sm-h1 pb-4"},[t._v(" Hey,"),n("br"),t._v(t._s(t.startingWord)+" "),n("span",{staticClass:"primary--text"},[t._v(t._s(t.buzz))])]),n("div",{staticClass:"grad"})]),n("div",{staticStyle:{flex:"1 1 auto"}},[n("div",{staticStyle:{display:"flex","justify-content":"center","align-items":"center",height:"100%","margin-top":"200px","margin-bottom":"100px"}},[n("div",{class:t.avatarClasses},[n("div",{class:t.avatarClasses,style:"position: absolute;display: flex;justify-content: space-between;right: "+(this.$vuetify.breakpoint.smAndUp?"-110px":"-55px")+";top: "+(this.$vuetify.breakpoint.smAndUp?"-110px":"-75px")+";"},[n("svg",{staticClass:"rotate mr-4 mt-2 mt-md-4",staticStyle:{"enable-background":"new 0 0 415.262 415.261"},attrs:{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:this.$vuetify.breakpoint.smAndUp?"100":"60",viewBox:"0 0 415.262 415.261","xml:space":"preserve"}},[n("g",[n("path",{staticStyle:{fill:"var(--v-primary-base)"},attrs:{d:"M414.937,374.984c-7.956-24.479-20.196-47.736-30.601-70.992c-1.224-3.06-6.12-3.06-7.956-1.224\n\t\tc-10.403,11.016-22.031,22.032-28.764,35.496h-0.612c-74.664,5.508-146.88-58.141-198.288-104.652\n\t\tc-59.364-53.244-113.22-118.116-134.64-195.84c-1.224-9.792-2.448-20.196-2.448-30.6c0-4.896-6.732-4.896-7.344,0\n\t\tc0,1.836,0,3.672,0,5.508C1.836,12.68,0,14.516,0,17.576c0.612,6.732,2.448,13.464,3.672,20.196\n\t\tC8.568,203.624,173.808,363.356,335.376,373.76c-5.508,9.792-10.403,20.195-16.523,29.988c-3.061,4.283,1.836,8.567,6.12,7.955\n\t\tc30.6-4.283,58.14-18.972,86.292-29.987C413.712,381.104,416.16,378.656,414.937,374.984z M332.928,399.464\n\t\tc3.673-7.956,6.12-15.912,10.404-23.868c1.225-3.061-0.612-5.508-2.448-6.12c0-1.836-1.224-3.061-3.06-3.672\n\t\tc-146.268-24.48-264.996-124.236-309.06-259.489c28.764,53.244,72.828,99.756,116.28,138.924\n\t\tc31.824,28.765,65.484,54.468,102.204,75.888c28.764,16.524,64.872,31.824,97.92,21.421l0,0c-1.836,4.896,5.508,7.344,7.956,3.672\n\t\tc7.956-10.404,15.912-20.196,24.48-29.376c8.567,18.972,17.748,37.943,24.479,57.527\n\t\tC379.44,382.94,356.796,393.956,332.928,399.464z"}})]),n("g"),n("g"),n("g"),n("g"),n("g"),n("g"),n("g"),n("g"),n("g"),n("g"),n("g"),n("g"),n("g"),n("g"),n("g")]),n("span",{staticClass:"hand",style:"font-size: "+t.tmSize},[t._v("that's me")])]),n("v-avatar",{staticStyle:{border:"5px solid var(--v-primary-base)"},attrs:{size:"clamp(160px, 50vw, 350px)"}},[n("v-img",{attrs:{src:c("489a"),alt:"Picture of myself"}})],1)],1)]),n("div",[n("div",{staticStyle:{display:"flex","justify-content":"center","align-items":"center",height:"100%","margin-top":"100px","margin-bottom":"100px"}},[n("div",{class:t.ageClasses,staticStyle:{display:"flex","flex-flow":"column","align-items":"center"}},[n("svg",{staticStyle:{"enable-background":"new 0 0 512 512",fill:"var(--v-primary-base)"},attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:this.$vuetify.breakpoint.smAndUp?"200":"100",viewBox:"0 0 512 512","xml:space":"preserve"}},[n("g",[n("g",[n("g",[n("path",{attrs:{d:"M256,85.27c18.825,0,34.133-15.309,34.133-34.133c0-16.563-23.142-43.196-27.785-48.367c-3.234-3.61-9.463-3.61-12.698,0\n\t\t\t\tc-4.642,5.171-27.785,31.804-27.785,48.367C221.867,69.962,237.175,85.27,256,85.27z M256,21.68\n\t\t\t\tc9.054,11.315,17.067,24.021,17.067,29.457c0,9.412-7.654,17.067-17.067,17.067c-9.412,0-17.067-7.654-17.067-17.067\n\t\t\t\tC238.933,45.701,246.946,32.995,256,21.68z"}}),n("path",{attrs:{d:"M213.333,119.404h85.333c4.719,0,8.533-3.823,8.533-8.533s-3.814-8.533-8.533-8.533h-85.333\n\t\t\t\tc-4.719,0-8.533,3.823-8.533,8.533S208.614,119.404,213.333,119.404z"}}),n("path",{attrs:{d:"M102.4,218.698v62.839c0,4.71,3.814,8.533,8.533,8.533s8.533-3.823,8.533-8.533v-59.733\n\t\t\t\tc10.138,0,18.748-7.125,27.87-14.677c11.008-9.122,23.484-19.456,40.397-19.456s29.389,10.334,40.397,19.456\n\t\t\t\tc9.122,7.552,17.732,14.677,27.87,14.677c10.138,0,18.748-7.125,27.87-14.677c11.008-9.122,23.484-19.456,40.397-19.456\n\t\t\t\tc16.913,0,29.389,10.334,40.397,19.456c9.122,7.552,17.732,14.677,27.87,14.677v59.733c0,4.71,3.814,8.533,8.533,8.533\n\t\t\t\tc4.719,0,8.533-3.823,8.533-8.533v-62.839c19.652-7.219,34.133-26.3,34.133-48.094c0-19.456-14.677-34.133-34.133-34.133H102.4\n\t\t\t\tc-19.456,0-34.133,14.677-34.133,34.133C68.267,192.398,82.748,211.478,102.4,218.698z M102.4,153.537h307.2\n\t\t\t\tc10.052,0,17.067,7.014,17.067,17.067c0,18.5-15.633,34.133-34.133,34.133c-3.994,0-10.59-5.47-16.973-10.752\n\t\t\t\tc-11.913-9.873-28.228-23.381-51.294-23.381c-23.066,0-39.381,13.508-51.294,23.381c-6.383,5.282-12.979,10.752-16.973,10.752\n\t\t\t\ts-10.59-5.47-16.973-10.752c-11.913-9.873-28.228-23.381-51.294-23.381s-39.381,13.508-51.294,23.381\n\t\t\t\tc-6.383,5.282-12.979,10.752-16.973,10.752c-18.5,0-34.133-15.633-34.133-34.133C85.333,160.552,92.348,153.537,102.4,153.537z"}}),n("path",{attrs:{d:"M503.467,494.87H8.533c-4.719,0-8.533,3.823-8.533,8.533s3.814,8.533,8.533,8.533h494.933\n\t\t\t\tc4.719,0,8.533-3.823,8.533-8.533S508.186,494.87,503.467,494.87z"}}),n("path",{attrs:{d:"M34.133,389.364v79.906c0,4.71,3.814,8.533,8.533,8.533s8.533-3.823,8.533-8.533v-76.8\n\t\t\t\tc10.138,0,18.748-7.125,27.87-14.677c11.008-9.122,23.484-19.456,40.397-19.456s29.389,10.334,40.397,19.456\n\t\t\t\tc9.122,7.552,17.732,14.677,27.87,14.677c10.138,0,18.748-7.125,27.87-14.677c11.008-9.122,23.484-19.456,40.397-19.456\n\t\t\t\ts29.389,10.334,40.397,19.456c9.122,7.552,17.732,14.677,27.87,14.677c10.138,0,18.748-7.125,27.87-14.677\n\t\t\t\tc11.008-9.122,23.484-19.456,40.397-19.456c16.913,0,29.389,10.334,40.397,19.456c9.122,7.552,17.732,14.677,27.87,14.677v76.8\n\t\t\t\tc0,4.71,3.814,8.533,8.533,8.533s8.533-3.823,8.533-8.533v-79.906c19.652-7.219,34.133-26.3,34.133-48.094\n\t\t\t\tc0-19.456-14.677-34.133-34.133-34.133H34.133C14.677,307.137,0,321.814,0,341.27C0,363.065,14.481,382.145,34.133,389.364z\n\t\t\t\t M34.133,324.204h443.733c10.052,0,17.067,7.014,17.067,17.067c0,18.5-15.633,34.133-34.133,34.133\n\t\t\t\tc-3.994,0-10.59-5.47-16.973-10.752c-11.912-9.873-28.228-23.381-51.294-23.381c-23.066,0-39.381,13.508-51.294,23.381\n\t\t\t\tc-6.383,5.282-12.979,10.752-16.973,10.752s-10.59-5.47-16.973-10.752c-11.913-9.873-28.228-23.381-51.294-23.381\n\t\t\t\tc-23.066,0-39.381,13.508-51.294,23.381c-6.383,5.282-12.979,10.752-16.973,10.752s-10.59-5.47-16.973-10.752\n\t\t\t\tc-11.913-9.873-28.228-23.381-51.294-23.381s-39.381,13.508-51.294,23.381c-6.383,5.282-12.979,10.752-16.973,10.752\n\t\t\t\tc-18.5,0-34.133-15.633-34.133-34.133C17.067,331.218,24.081,324.204,34.133,324.204z"}})])])]),n("g"),n("g"),n("g"),n("g"),n("g"),n("g"),n("g"),n("g"),n("g"),n("g"),n("g"),n("g"),n("g"),n("g"),n("g")]),n("span",{staticClass:"text-h4 text-center mt-3",staticStyle:{"font-size":"32px !important"}},[t._v(" "+t._s(t.secondsSB)+" seconds ")]),n("span",{staticClass:"text-h5 text-center mt-3",staticStyle:{"font-size":"27px !important"}},[t._v(" "+t._s(t.daysSB)+" days ")]),n("span",{staticClass:"text-h6 text-center mt-3",staticStyle:{"font-size":"20px !important"}},[t._v(" "+t._s(t.weeksSB)+" weeks ")])])])]),n("div",[n("v-timeline",{class:t.studyClasses,attrs:{dense:!t.smAndUp}},t._l(t.studys,(function(e){return n("v-timeline-item",{key:e.year,scopedSlots:t._u([{key:"icon",fn:function(){return[n("v-avatar",[n("v-icon",{staticStyle:{color:"var(--v-background-base)"}},[t._v("mdi-school")])],1)]},proxy:!0},{key:"opposite",fn:function(){return[n("span",[t._v(t._s(e.year))])]},proxy:!0}],null,!0)},[n("v-card",{attrs:{outlined:""}},[t.smAndUp?t._e():n("v-card-subtitle",{staticClass:"text-overline pb-0"},[t._v(" "+t._s(e.year)+" ")]),n("v-row",{attrs:{"no-gutters":"","align-items":"center"}},[n("v-col",{staticClass:"pl-4 pt-4 pb-4",staticStyle:{"align-self":"center"},attrs:{cols:"2"}},[e.location.includes("Ulm")?n("logo-uni-ulm"):e.location.includes("Helsinki")?n("logo-uni-helsinki"):t._e()],1),n("v-col",{attrs:{cols:"10"}},[n("v-card-title",{staticClass:"text-h5",staticStyle:{"word-break":"break-word"}},[t._v(" "+t._s(e.location)+" ")]),n("v-card-subtitle",{staticClass:"text-subtitle-1"},[t._v(" "+t._s(e.title)+" ")])],1)],1),n("v-card-text",{domProps:{innerHTML:t._s(e.text)}})],1)],1)})),1)],1),n("div",{staticStyle:{"margin-top":"100px","margin-bottom":"100px"}},[n("v-row",{class:t.workClasses,attrs:{"justify-content":"space-between","align-items":"center"}},[n("v-col",{attrs:{cols:"12",sm:"4",lg:"4"}},[n("work-tile",{attrs:{uniUlm:""}})],1),n("v-col",{attrs:{cols:"12",sm:"4",lg:"4"}},[n("work-tile",{attrs:{db:""}})],1),n("v-col",{attrs:{cols:"12",sm:"4",lg:"4"}},[n("work-tile",{attrs:{mb:""}})],1)],1)],1),n("div",{staticStyle:{height:"200vh"}})])])])},b=[],x=(c("ac1f"),c("5319"),c("25f0"),function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",[c("v-card",{staticClass:"wrapper",attrs:{outlined:""}},[c("div",{staticClass:"mt-4 text-center"},[t.uniUlm?c("logo-uni-ulm",{staticStyle:{width:"50%","aspect-ratio":"1 / 1"}}):t.db?c("LogoDB",{staticStyle:{width:"50%","aspect-ratio":"1 / 1"}}):t.mb?c("LogoMB",{staticStyle:{width:"50%","aspect-ratio":"1 / 1"}}):t._e()],1),c("v-card-title",{staticClass:"text-h4 mb-2"},[t._v(" Ulm University ")]),c("v-card-subtitle",[t._v(" 2020 - 2022 ")]),c("v-card-actions",[c("v-btn",{attrs:{icon:"",color:"primary"},on:{click:function(e){t.show=!t.show}}},[c("v-icon",[t._v(t._s(t.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),c("v-expand-transition",[c("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[c("v-divider"),c("v-card-text",[t._v(" I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape. ")])],1)])],1)],1)}),C=[],M=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("svg",{staticStyle:{"enable-background":"new 0 0 284.9 80.8",fill:"currentColor"},attrs:{version:"1.1",id:"Ebene_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"100%",viewBox:"0 0 79.1 80.8","xml:space":"preserve"}},[c("path",{attrs:{d:"M32,55.3c0.3,1.4,0.6,2.7,1,3.9c0,0,0,0,0.1,0c1.1,0,2.1,0.9,2.1,2.1c0,0.6-0.3,1.2-0.8,1.6c1.6,3.5,3.4,5.4,5.3,5.4\n\tc2.9,0,6-5,7.7-13.3c-2.4-0.8-4.9-1.9-7.4-3.1C37.2,53.3,34.6,54.4,32,55.3"}}),c("path",{attrs:{d:"M34.5,49.1c-1.2-0.7-2.5-1.5-3.7-2.3c0.2,2.6,0.5,4.9,0.9,7.1c2.1-0.8,4.3-1.7,6.6-2.7C37.1,50.5,35.8,49.8,34.5,49.1"}}),c("path",{attrs:{d:"M45,31c1.2,0.7,2.3,1.4,3.5,2.1c-0.2-2.3-0.5-4.5-0.9-6.5c-2,0.7-4,1.5-6.1,2.5C42.6,29.7,43.8,30.3,45,31"}}),c("path",{attrs:{d:"M24.8,25.7c-1,0-1.8-0.7-2-1.6c-0.8-0.1-1.5-0.1-2.1-0.1c-2.7,0-4.5,0.7-5.3,2c-1.4,2.5,1.3,7.6,7.6,13.2\n\tc2-1.7,4.1-3.3,6.4-4.9c0.2-2.9,0.6-5.8,1.1-8.4c-1.4-0.4-2.7-0.8-4-1.1C26.2,25.4,25.5,25.7,24.8,25.7"}}),c("path",{attrs:{d:"M41.5,51.2c2.1,1,4.2,1.8,6.1,2.5c0.4-2,0.7-4.2,0.9-6.6c-1.2,0.8-2.4,1.5-3.6,2.2C43.7,50,42.6,50.6,41.5,51.2"}}),c("path",{attrs:{d:"M47.3,25.2c-0.3-1.6-0.7-3.1-1.2-4.5c-1.1-0.1-2-1-2-2.1c0-0.6,0.2-1.1,0.6-1.4c-1.5-3.2-3.3-5-5.1-5\n\tc-2.9,0-5.9,4.8-7.6,12.8c2.5,0.9,5.2,2,7.8,3.3C42.4,27.1,44.9,26,47.3,25.2"}}),c("path",{attrs:{d:"M24,40.1c1.6,1.3,3.3,2.7,5.3,4c-0.1-1.3-0.1-2.6-0.1-3.9c0-1.4,0-2.8,0.1-4.2C27.4,37.4,25.6,38.8,24,40.1"}}),c("path",{attrs:{d:"M38.3,29.1c-2.2-1.1-4.4-2-6.6-2.7c-0.4,2.1-0.7,4.5-0.9,7c1.2-0.8,2.4-1.5,3.6-2.2C35.7,30.5,37,29.7,38.3,29.1"}}),c("path",{attrs:{d:"M23,41c-1.1,1-2.2,2-3.1,3c0.2,0.3,0.3,0.7,0.3,1c0,1.1-0.9,2.1-2.1,2.1c-0.2,0-0.5,0-0.7-0.1c-2.3,3.1-3,5.7-2.1,7.3\n\tc1.1,2,4.8,2.5,10,1.4c1.6-0.3,3.3-0.8,5.1-1.4c-0.5-2.7-0.9-5.6-1.1-8.5C27.1,44.3,25,42.7,23,41"}}),c("path",{attrs:{d:"M36.9,45.2c0,0.6,1,1.4,2.5,1.6c0,0,0,0,0,0v-3.1C38.2,43.8,36.9,44.5,36.9,45.2"}}),c("path",{attrs:{d:"M55.6,40.1c-1.7-1.4-3.5-2.9-5.6-4.3c0.1,1.5,0.1,3,0.1,4.4c0,1.4,0,2.8-0.1,4.2C52.1,43,54,41.5,55.6,40.1"}}),c("path",{attrs:{d:"M56.6,41c-2,1.8-4.3,3.5-6.7,5.1c-0.2,2.8-0.5,5.5-1,8c1.5,0.5,3,0.9,4.5,1.2c0.3-0.7,1-1.1,1.8-1.1c1,0,1.9,0.7,2,1.7\n\tc3.5,0.3,5.9-0.4,6.8-1.9C65.5,51.6,62.8,46.6,56.6,41"}}),c("path",{attrs:{d:"M58.8,57.4c-0.6,0-1.1,0-1.7-0.1c-0.4,0.6-1,1.1-1.8,1.1c-1,0-1.8-0.7-2-1.7c-1.5-0.3-3-0.7-4.5-1.2\n\tc-1.7,8.1-4.8,14.2-9,14.2c-2.7,0-4.9-2.5-6.6-6.3c0,0,0,0,0,0c-1.1,0-2.1-0.9-2.1-2.1c0-0.6,0.3-1.2,0.7-1.6c-0.4-1.3-0.7-2.6-1-4\n\tc-1.8,0.6-3.5,1-5.1,1.4c-1.8,0.4-3.5,0.6-5,0.6c-3.2,0-5.5-0.9-6.5-2.6c-1.3-2.3-0.3-5.5,2.2-8.9c-0.2-0.3-0.3-0.7-0.3-1.1\n\tc0-1.1,0.9-2.1,2.1-2.1c0.3,0,0.5,0.1,0.8,0.2c0.9-1,2-2,3.1-3c-6.2-5.5-9.8-11.2-7.8-14.8c1.2-2.1,4.3-3,8.7-2.5\n\tc0.3-0.7,1-1.2,1.9-1.2c1.1,0,2,0.8,2.1,1.9c1.3,0.3,2.6,0.7,3.9,1.1c1.7-7.9,4.8-13.8,8.9-13.8c2.5,0,4.7,2.2,6.3,5.8\n\tc0.1,0,0.2,0,0.2,0c1.1,0,2.1,0.9,2.1,2.1c0,0.7-0.4,1.3-0.9,1.7c0.4,1.4,0.8,2.9,1.2,4.4c1.8-0.6,3.5-1,5.1-1.4\n\tc5.9-1.2,10-0.4,11.5,2.1c1.2,2.2,0.4,5.1-1.8,8.2c0.2,0.3,0.3,0.7,0.3,1.2c0,1.1-0.9,2.1-2.1,2.1c-0.3,0-0.5-0.1-0.7-0.1\n\tc-1,1.1-2.1,2.2-3.3,3.3c6.1,5.5,9.7,11.1,7.6,14.7C64.3,56.5,62,57.4,58.8,57.4 M39.7,8.6C22.2,8.6,8,22.8,8,40.2\n\tc0,17.5,14.2,31.6,31.6,31.6s31.6-14.2,31.6-31.6C71.3,22.8,57.1,8.6,39.7,8.6"}}),c("path",{attrs:{d:"M56.6,39.2c1.2-1.1,2.3-2.2,3.3-3.3c-0.2-0.3-0.3-0.7-0.3-1.1c0-1.1,0.9-2.1,2.1-2.1c0.2,0,0.4,0,0.6,0.1\n\tc1.9-2.9,2.5-5.2,1.7-6.7c-0.7-1.3-2.6-2-5.3-2c-1.4,0-3,0.2-4.7,0.5c-1.6,0.3-3.3,0.8-5.1,1.4c0.5,2.5,0.8,5.2,1,7.9\n\tC52.3,35.7,54.6,37.5,56.6,39.2"}}),c("path",{attrs:{d:"M36.5,40.9c0,0.7,1.4,1.6,2.9,1.8v-3.5C37.9,39.4,36.5,40.2,36.5,40.9"}}),c("path",{attrs:{d:"M44.9,40.9c0,0.9-0.9,1.8-2.4,2.3c1.2,0.4,2,1.2,2,2c0,0.9-0.8,1.6-2.1,2.1c-0.2,0.1-1,0.3-1.7,0.3c0,0,0,0,0,0c0,0,0,0,0,0\n\tv1.1c0,0.3-0.2,0.6-0.6,0.6c-0.3,0-0.6-0.2-0.6-0.6v-1.1c0,0,0,0,0,0c0,0,0,0,0,0c-0.7,0-1.5-0.2-1.7-0.3c-1.3-0.4-2.1-1.2-2.1-2.1\n\tc0-0.8,0.7-1.5,2-2C36,42.8,35,41.9,35,40.9c0-0.9,0.8-1.7,2.2-2.2c-1.7-0.5-2.8-1.5-2.8-2.5c0-0.9,0.7-1.7,2-2.2\n\tc0.1-0.3,0.4-0.6,0.8-0.8c0.3-0.1,0.6-0.1,0.9,0c0.3,0.1,0.5,0.2,0.5,0.5c0.1,0.2,0,0.5-0.1,0.7c-0.2,0.2-0.4,0.4-0.7,0.5\n\tc-0.2,0.1-0.4,0.1-0.6,0.1c-0.7,0.4-1.1,0.9-1.1,1.3c0,0.9,1.6,1.8,3.3,2v-6.3c0-0.4,0.2-0.6,0.5-0.7c0.4,0,0.6,0.3,0.6,0.7v6.3\n\tc1.8-0.2,3.3-1.1,3.3-2c0-0.4-0.4-0.9-1.1-1.3c-0.2,0-0.4,0-0.6-0.1c-0.3-0.1-0.5-0.3-0.7-0.5c-0.2-0.2-0.2-0.5-0.2-0.7\n\tc0.1-0.2,0.3-0.4,0.5-0.5c0.3-0.1,0.6-0.1,0.9,0c0.4,0.1,0.7,0.4,0.8,0.8c1.2,0.6,2,1.4,2,2.2c0,1.1-1.1,2-2.8,2.5\n\tC44,39.2,44.9,40.1,44.9,40.9 M44.3,32.2c-1.5-0.8-2.9-1.6-4.4-2.4c-1.6,0.8-3.2,1.6-4.8,2.6c-1.5,0.9-3,1.8-4.4,2.7\n\tc-0.1,1.6-0.2,3.4-0.2,5.1c0,1.7,0,3.3,0.1,4.9c1.4,0.9,2.9,1.9,4.5,2.8c1.6,0.9,3.1,1.7,4.7,2.5c1.4-0.7,2.9-1.5,4.3-2.3\n\tc1.5-0.9,3-1.8,4.4-2.7c0.1-1.6,0.2-3.4,0.2-5.1c0-1.9-0.1-3.7-0.2-5.4C47.2,34,45.8,33.1,44.3,32.2"}}),c("path",{attrs:{d:"M40.5,42.7c1.5-0.2,2.9-1,2.9-1.8c0-0.7-1.4-1.6-2.9-1.8V42.7z"}}),c("path",{attrs:{d:"M40.5,46.8C40.5,46.8,40.5,46.8,40.5,46.8c1.2-0.2,2.5-0.9,2.5-1.6c0-0.7-1.3-1.4-2.5-1.6V46.8z"}}),c("path",{attrs:{d:"M6,26.7c0.3,0.1,0.6,0,0.7-0.3c0.1-0.3,0-0.6-0.3-0.6c-0.2-0.1-0.5,0-0.6,0.3C5.7,26.3,5.8,26.6,6,26.7 M3.5,33.8\n\tc1.7,0.5,3.2-0.2,3.7-2c0.5-1.7-0.5-3.1-2.2-3.5c-1.7-0.5-3.2,0.2-3.7,2C0.8,32,1.8,33.4,3.5,33.8 M3.7,33c-1.2-0.3-2.1-1.2-1.7-2.5\n\tc0.3-1.3,1.6-1.6,2.7-1.3c1.1,0.3,2.1,1.2,1.7,2.5C6.1,33,4.8,33.3,3.7,33 M0.8,39.2l0.1-1c0.1-1.2,0.9-2.1,2.3-2\n\tc1.5,0.1,2.2,0.9,2.1,2.4l-0.1,0.9L0.8,39.2z M5.9,40.3L6,38.6c0.1-1.9-0.8-3.2-2.8-3.3c-1.8-0.1-3,1.2-3.1,3L0,40L5.9,40.3z\n\t M6.6,46.9l-0.1-0.8l-4.8,0.7l0,0l4.4-3.3l-0.1-1.1l-5.9,0.8L0.2,44l4.7-0.7l0,0l-4.4,3.2l0.2,1.1L6.6,46.9z M5.3,50.6L6,52.9\n\tl-3.2-0.2L5.3,50.6z M8.7,53.8L8.4,53l-1.6-0.1l-0.9-2.7l1.2-1.1l-0.3-0.9L2,52.5l0.3,0.8L8.7,53.8z M6.1,59.9l-0.4-0.7\n\tc-0.4-0.7-0.3-1.2,0.2-1.5c0.5-0.3,1,0,1.4,0.7l0.3,0.6L6.1,59.9z M11.1,58.2l-0.4-0.7l-2.3,1.3l-0.2-0.4c-0.2-0.4-0.3-0.6,0-1.1\n\tl1.4-1.8l-0.5-0.8l-1.5,2.1c-0.2,0.3-0.3,0.5-0.2,0.8l0,0c-0.4-0.5-1.1-0.8-1.8-0.4c-1.2,0.7-0.9,1.8-0.3,2.8L5.9,61L11.1,58.2z\n\t M7.4,63.5L8,64.1l2.6-2.1c0.9-0.7,1.7-0.9,2.4-0.1c0.7,0.8,0.3,1.6-0.6,2.3l-2.6,2.1l0.5,0.7l2.7-2.2c1.3-1.1,1.4-2.3,0.5-3.4\n\tc-0.9-1.1-2.1-1.2-3.4-0.1L7.4,63.5z M12.2,68.7c0.2,0.4,0.5,0.8,0.8,1.1c1.4,1.2,3.2,1.1,4.3-0.3c1.2-1.4,1.1-3.2-0.4-4.4\n\tc-0.3-0.2-0.7-0.6-1.2-0.7L15.3,65c0.3,0.1,0.8,0.3,1.2,0.6c0.9,0.8,1.1,2.2,0.2,3.2c-0.9,1-2.2,1.2-3.2,0.3c-0.3-0.3-0.6-0.6-0.7-1\n\tL12.2,68.7z M20,70.8c0.1-0.2,0.1-0.6-0.1-0.7c-0.2-0.2-0.5-0.1-0.7,0.2c-0.2,0.2-0.1,0.5,0.1,0.7C19.5,71,19.9,71,20,70.8\n\t M26.6,74.6c0.8-1.6,0.4-3.2-1.3-4c-1.6-0.8-3.1-0.1-3.9,1.6c-0.7,1.6-0.3,3.2,1.3,4C24.4,76.9,25.9,76.2,26.6,74.6 M25.8,74.2\n\tc-0.5,1.1-1.6,1.8-2.7,1.3c-1.2-0.5-1.3-1.8-0.8-2.9c0.5-1.1,1.5-1.8,2.7-1.3C26.3,71.9,26.3,73.2,25.8,74.2 M31.2,78.2l-1-0.3\n\tc-1.2-0.3-1.9-1.3-1.5-2.7c0.4-1.5,1.4-1.9,2.8-1.6l0.9,0.2L31.2,78.2z M33.4,73.4L31.7,73c-1.9-0.5-3.3,0.2-3.8,2.1\n\tc-0.5,1.8,0.6,3.2,2.3,3.6l1.7,0.5L33.4,73.4z M39.9,74L39,74l-0.3,4.9l0,0l-2.4-5l-1.1-0.1l-0.3,5.9l0.8,0l0.3-4.8l0,0l2.3,4.9\n\tl1.2,0.1L39.9,74z M44.9,73.6l-3.3,0.4l0.1,0.7l2.5-0.3l0.2,1.9l-2.2,0.3l0.1,0.7l2.2-0.3l0.2,1.7l-2.5,0.3l0.1,0.7l3.3-0.4\n\tL44.9,73.6z M48,78.9c0.5,0.1,0.9,0,1.3-0.1c1.7-0.5,2.7-2,2.2-3.8c-0.5-1.8-2.1-2.6-3.9-2.1c-0.3,0.1-0.9,0.3-1.2,0.6l0.3,0.8\n\tc0.2-0.3,0.7-0.5,1.2-0.6c1.2-0.3,2.4,0.3,2.8,1.6c0.4,1.3-0.2,2.5-1.5,2.9c-0.4,0.1-0.8,0.1-1.3,0L48,78.9z M57.8,72.2\n\tc-0.8-1.6-2.3-2.3-3.9-1.5s-2,2.4-1.2,4c0.8,1.6,2.3,2.3,3.9,1.5C58.2,75.4,58.5,73.7,57.8,72.2 M57,72.6c0.5,1.1,0.4,2.4-0.7,2.9\n\tc-1.2,0.6-2.2-0.2-2.8-1.2c-0.5-1.1-0.5-2.3,0.7-2.9S56.4,71.5,57,72.6 M63.5,71l-0.8,0.6c-1,0.7-2.2,0.6-3-0.5\n\tc-0.9-1.2-0.6-2.3,0.6-3.1l0.7-0.5L63.5,71z M61.2,66.2l-1.4,1c-1.6,1.1-2,2.7-0.8,4.3c1.1,1.5,2.8,1.6,4.3,0.5l1.4-1L61.2,66.2z\n\t M65,66.2c-0.2-0.2-0.5-0.2-0.7,0c-0.2,0.2-0.2,0.5,0,0.7c0.2,0.2,0.5,0.2,0.7,0C65.1,66.7,65.2,66.4,65,66.2 M70.2,60.6\n\tc-1.4-1.1-3.1-1.1-4.2,0.4c-1.1,1.4-0.8,3,0.7,4.1c1.4,1.1,3.1,1.1,4.2-0.4C72,63.3,71.6,61.7,70.2,60.6 M69.7,61.3\n\tc0.9,0.7,1.4,1.9,0.6,3c-0.8,1-2.1,0.9-3,0.1c-0.9-0.7-1.5-1.9-0.6-3C67.5,60.3,68.7,60.6,69.7,61.3 M74.8,56.8l-0.5,0.9\n\tc-0.6,1.1-1.7,1.5-3,0.9c-1.3-0.7-1.6-1.8-0.9-3l0.4-0.8L74.8,56.8z M70.6,53.7l-0.8,1.5c-0.9,1.7-0.6,3.3,1.2,4.2\n\tc1.6,0.9,3.2,0.1,4-1.4l0.8-1.5L70.6,53.7z M72.6,47.5l-0.2,0.8l4.7,1.4l0,0l-5.4,1.2l-0.3,1l5.7,1.7l0.2-0.8l-4.6-1.3l0,0l5.3-1.2\n\tl0.3-1.1L72.6,47.5z M73.2,42.4l-0.4,3.3l0.7,0.1l0.3-2.5l1.9,0.2l-0.2,2.2l0.7,0.1l0.2-2.2l1.7,0.2L78,46.3l0.7,0.1l0.4-3.3\n\tL73.2,42.4z M73.2,39.3l0,0.8l5.9-0.1l0-0.8L73.2,39.3z M78.9,36.9c0.1-0.4,0.1-0.9,0.1-1.4c-0.2-1.8-1.6-2.9-3.4-2.7\n\tc-1.9,0.3-2.9,1.7-2.6,3.5c0,0.3,0.1,0.9,0.4,1.3l0.8-0.2c-0.2-0.3-0.4-0.8-0.5-1.2c-0.2-1.2,0.6-2.3,2-2.5c1.3-0.2,2.4,0.6,2.6,1.9\n\tc0.1,0.4,0,0.9-0.2,1.3L78.9,36.9z M77.8,30.3c0-0.4,0-0.9-0.2-1.3c-0.3-1-1.1-1.7-2.1-1.4c-1.8,0.5-0.7,2.9-2,3.2\n\tc-0.7,0.2-1.1-0.4-1.3-0.8c-0.1-0.4-0.1-0.9-0.1-1.3l-0.8,0.1c0,0.4,0,0.8,0.1,1.2c0.3,1.1,1.1,1.9,2.3,1.6c1.9-0.5,0.9-2.9,2-3.2\n\tc0.6-0.2,0.9,0.3,1,0.8c0.1,0.4,0.1,0.7,0.1,1.1L77.8,30.3z M72.7,25.6c-0.2,0.1-0.4,0.4-0.3,0.7c0.1,0.2,0.4,0.4,0.7,0.3\n\tc0.3-0.1,0.4-0.4,0.3-0.6C73.3,25.6,73,25.5,72.7,25.6 M66.2,19.4l0.5,0.7l4.3-2.8l0,0l-3.3,4.4l0.4,0.7l5.4-1.1l0,0l-4.3,2.8\n\tl0.5,0.7l5-3.2l-0.8-1.2l-5.1,1.1l3.1-4.2l-0.8-1.2L66.2,19.4z M63.2,16.3l2.3,2.4l0.5-0.5l-1.7-1.8l3.7-3.6l-0.6-0.6L63.2,16.3z\n\t M65.4,10.3l-0.7-0.5l-2.1,2.6c-0.7,0.9-1.5,1.3-2.3,0.6c-0.9-0.7-0.7-1.5,0-2.4L62.5,8l-0.7-0.5l-2.1,2.7c-1,1.3-0.9,2.5,0.2,3.4\n\tc1.2,0.9,2.4,0.7,3.4-0.6L65.4,10.3z M53.3,9.6l0.8,0.4l2.2-4.7L57.9,6l0.3-0.7l-4.1-1.9l-0.3,0.7l1.7,0.8L53.3,9.6z M51.1,1.9\n\tl0.8,0.2l0.2-0.8l-0.8-0.2L51.1,1.9z M49.7,1.5l0.8,0.2l0.2-0.8L50,0.7L49.7,1.5z M50.7,6.2l-2.3-0.7l2-2.5L50.7,6.2z M46.1,7.1\n\tL47,7.4l1-1.3L50.8,7l0.2,1.6l0.9,0.3l-0.7-6.4l-0.9-0.3L46.1,7.1z M43.6,6.9L44.4,7l0.7-5.1l1.8,0.2L47,1.4l-4.5-0.6l-0.1,0.7\n\tl1.8,0.2L43.6,6.9z M40,6.6l0.8,0l0.2-5.9l-0.8,0L40,6.6z M37.6,0.9c-0.4-0.1-0.9-0.1-1.3-0.1c-1.1,0.1-1.8,0.7-1.7,1.8\n\tc0.2,1.8,2.7,1.2,2.8,2.6c0.1,0.7-0.6,1-1.1,1.1c-0.4,0-1-0.1-1.2-0.2l0,0.8c0.4,0.1,0.8,0.2,1.2,0.1c1.2-0.1,2.1-0.7,2-1.9\n\tc-0.2-1.9-2.7-1.5-2.8-2.6c-0.1-0.6,0.5-0.8,1-0.9c0.4,0,0.7,0,1.1,0.1L37.6,0.9z M29.4,2.8l0.8-0.2c0.8-0.2,1.2,0.1,1.4,0.6\n\tc0.1,0.6-0.2,1-1,1.2l-0.7,0.2L29.4,2.8z M29.8,8l0.8-0.2L30,5.3l0.5-0.1C31,5.1,31.2,5,31.6,5.5L33,7.3l0.9-0.2l-1.6-2\n\tc-0.3-0.3-0.4-0.4-0.7-0.4l0,0c0.6-0.3,1-0.9,0.9-1.6c-0.3-1.4-1.5-1.3-2.6-1l-1.4,0.3L29.8,8z M25.1,9.9l3-1.3l-0.3-0.7l-2.3,1\n\tl-0.8-1.8l2.1-0.9l-0.3-0.7l-2.1,0.9l-0.7-1.6l2.3-1l-0.3-0.7l-3,1.3L25.1,9.9z M20.7,5.4L20,5.9l1.2,5.4l0,0l-4.3-3.4l-0.8,0.5\n\tl5.1,3.8l0.9-0.6L20.7,5.4z M17.7,14.8l0.7-0.5l-3.8-4.6l-0.7,0.5L17.7,14.8z M13,19.6l0.6-0.6L10,15.7l0,0l5.4,1.3l0.7-0.8l-4.4-4\n\tl-0.6,0.6l3.5,3.2l0,0l-5.3-1.3l-0.8,0.9L13,19.6z M6.9,18l-0.4,0.7l2.9,1.7c1,0.6,1.5,1.3,0.9,2.2c-0.6,0.9-1.4,0.8-2.4,0.3\n\tl-2.9-1.7l-0.4,0.7l3,1.8c1.4,0.9,2.6,0.6,3.4-0.7c0.7-1.3,0.4-2.4-1-3.3L6.9,18z"}})])},L=[],z={name:"LogoUniUlm",components:{},props:{},data:function(){return{}},computed:{},methods:{},mounted:function(){}},k=z,S=Object(r["a"])(k,M,L,!1,null,"4529a4f2",null),_=S.exports,V=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("svg",{staticStyle:{fill:"currentColor"},attrs:{version:"1.1",id:"University_of_Helsinki_Logo",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"100%",viewBox:"0 0 610 497.12","enable-background":"new 0 0 610 593.12","xml:space":"preserve"}},[c("path",{attrs:{d:"M564.162,327.674c-18.7-41.139-60.7-47.137-86.984-64.281c-12.588-8.207-17.682-24.684-19.684-38.451\n\tc-12.387,1.287-33.007,1.473-42.857-23.569c-7.745-19.69-4.534-52.327-30.46-79.976c-23.572-25.143-52.568-33.43-79.179-31.561\n\tc32.609,21.8,19.752,54.67-3.922,54.67c-32.966,0-42.178-39.697-90.425-39.697c-11.038,0-20.758,3.448-26.826,7.459\n\tc27.018,3.414,33.482,25.563,41.932,45.619c6.71,15.936,18.711,25.223,36.282,30.08c-3.175,1.826-10.756,4.067-20.564,4.067\n\tc-21.309,0-36.149-11.214-51.41-26.937c-13.425-13.833-28.406-26.944-53.517-26.944c-12.358,0-21.816,3.917-25.093,6.12\n\tc13.786,2.174,34.151,10.389,34.151,24.971c0,12.473-13.793,17.244-25.093,5.309c-12.581-13.287-30.246-23.334-50.457-23.334\n\tc-9.983,0-19.972,3.178-24.218,7.314c23.958,2.766,38.147,18.145,52.977,52.441c8.371,19.365,20.292,37.668,50.31,38.008\n\tc13.662,0.162,33.057-6.332,44.445,4.596c10.774,10.346,7.16,23.912,12.089,34.912c6.201,13.824,19.058,20.949,44.203,22.258\n\tc-20.858,17.453-70.712,6.982-87.691-10.852c2.229,44.645,37.442,84.686,107.346,65.855c12.152-3.271,20.817-1.42,25.495,10.873\n\tc6.416,16.883,21.621,19.68,35.988,17.898c32.859-4.072,52.356,2.547,71.269,25.135c4.133-37.375-22.589-59.34-39.378-69.84\n\tc-15.988-10.002-17.549-20.402-17.75-28.455c11.573,13.236,26.65,18.844,42.344,21.057c27.12,3.818,46.549,11.377,56.834,25.922\n\tc3.002-41.092-40.143-50.379-45.43-67.666c13.574,8.857,23.583,12.07,37.717,11.002c18.854-1.428,41.784-16.232,58.695,12.742\n\tC516.889,310.393,545.175,315.391,564.162,327.674 M280.703,490.928h48.592v-48.59h-48.592V490.928z M280.703,53.594h48.592V5\n\th-48.592V53.594z M329.298,272.26h-48.591v-48.592h48.591V272.26z"}})])},B=[],U={name:"LogoUniHelsinki",components:{},props:{},data:function(){return{}},computed:{},methods:{},mounted:function(){}},j=U,H=Object(r["a"])(j,V,B,!1,null,"4ced02f0",null),T=H.exports,A=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("svg",{attrs:{id:"Ebene_1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 70",width:"100%"}},[c("path",{staticStyle:{fill:"currentColor"},attrs:{d:"M90 0H10C4.5 0 0 4.5 0 10v50c0 5.5 4.5 10 10 10h80c5.5 0 10-4.5 10-10.1V10c0-5.5-4.5-10-10-10z"}}),c("path",{staticStyle:{fill:"var(--v-background-base)"},attrs:{d:"M92.7 59.9c.1 1.5-1.1 2.8-2.7\n    2.9H10c-1.5 0-2.7-1.3-2.7-2.8V10c-.1-1.5 1.1-2.8 2.6-2.9H90c1.5 0 2.7\n    1.3 2.7 2.8v50z"}}),c("path",{staticStyle:{fill:"currentColor"},attrs:{d:"M30.6 57.9H13.8V12.1h16.8c11.9 0 18.4 7.4 18.4 22.7 0 13.2-4.5 23-18.4 23.1zm7.3-22.2c0-9.2-1-16.4-10.9-16.4h-2.2v31.2h3.9c5.8 0 9.2-4.7 9.2-14.8zM78 33.9c4.7-1.4 7.9-5.7 8-10.7 0-1-.2-11.2-13.1-11.2H53.8v45.8H70c4.3 0 17.7 0 17.7-12.9 0-3.1-1.4-9.2-9.7-11zM64.7 19.2h3.5c4.9 0 6.9 1.7 6.9 5.5 0 3-2.2 5.5-6 5.5h-4.3v-11zm4.5 31.3h-4.5V38.7h4.8c5.7 0 7.1 3.3 7.1 5.9 0 5.9-5.6 5.9-7.4 5.9z"}})])},E=[],$={name:"LogoDB",components:{},props:{},data:function(){return{}},computed:{},methods:{},mounted:function(){}},O=$,I=Object(r["a"])(O,A,E,!1,null,"4bcf73c2",null),P=I.exports,D=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("svg",{attrs:{"xmlns:svg":"http://www.w3.org/2000/svg",xmlns:"http://www.w3.org/2000/svg",version:"1.0",viewBox:"0 0 80 80",x:"0px",y:"0px","xml:space":"preserve",width:"100%",id:"svg3544"}},[c("defs",{attrs:{id:"defs3546"}}),c("g",{attrs:{id:"layer1"}},[c("path",{staticStyle:{fill:"currentColor"},attrs:{d:"M 57.63597,6.309 C 69.73497,12.672 77.99997,25.358 77.99997,39.981 C 77.99997,54.604 69.73497,67.33 57.63597,73.654 L 57.63597,69.306 C 62.26297,66.538 66.17697,62.665 69.02497,58.081 L 57.63597,53.458 L 57.63597,46.423 L 70.13097,56.185 C 72.74097,51.363 74.20397,45.869 74.20397,39.98 C 74.20397,27.57 67.55997,16.663 57.63597,10.655 L 57.63597,6.309 L 57.63597,6.309 z M 40.04,2.001 C 46.367,2.001 52.33697,3.543 57.63597,6.309 L 57.63597,10.657 C 52.77197,7.731 47.078,5.993 41.068,5.795 L 45.417,36.899 L 57.63597,46.424 L 57.63597,53.459 L 39.96,46.305 L 22.403,53.498 L 22.403,46.502 L 34.701,36.898 L 39.011,5.794 C 32.921,5.992 27.267,7.731 22.403,10.655 L 22.403,6.309 C 27.663,3.543 33.673,2.001 40.04,2.001 L 40.04,2.001 L 40.04,2.001 z M 57.63597,73.654 C 52.33697,76.42 46.366,78 40.04,78 C 33.674,78 27.664,76.42 22.404,73.693 L 22.404,69.306 C 27.545,72.427 33.594,74.206 40.04,74.206 C 46.446,74.206 52.45697,72.427 57.63597,69.306 L 57.63597,73.654 L 57.63597,73.654 z M 22.404,73.693 C 10.264,67.33 2,54.604 2,39.981 C 2,25.358 10.264,12.672 22.404,6.309 L 22.404,10.657 C 12.439,16.664 5.796,27.532 5.796,39.981 C 5.796,45.869 7.299,51.443 9.909,56.264 L 22.404,46.502 L 22.404,53.498 L 11.055,58.16 C 13.902,62.707 17.777,66.539 22.404,69.306 L 22.404,73.693 L 22.404,73.693 z",id:"path3524"}})])])},W=[],Y={name:"LogoMB",components:{},props:{},data:function(){return{}},computed:{},methods:{},mounted:function(){}},J=Y,N=Object(r["a"])(J,D,W,!1,null,"68271f74",null),q=N.exports,R={name:"WorkTile",components:{LogoUniUlm:_,LogoUniHelsinki:T,LogoDB:P,LogoMB:q},props:{uniUlm:Boolean,uniHelsinki:Boolean,db:Boolean,mb:Boolean},data:function(){return{show:!1}},computed:{},methods:{},mounted:function(){}},F=R,G=(c("998d"),c("b0af")),K=c("99d9"),Q=c("ce7e"),X=c("0789"),Z=Object(r["a"])(F,x,C,!1,null,"b916c102",null),tt=Z.exports;d()(Z,{VBtn:p["a"],VCard:G["a"],VCardActions:K["a"],VCardSubtitle:K["b"],VCardText:K["c"],VCardTitle:K["d"],VDivider:Q["a"],VExpandTransition:X["a"],VIcon:m["a"]});var et={name:"Home",components:{WorkTile:tt,LogoUniUlm:_,LogoUniHelsinki:T},data:function(){return{startingWord:"I'm",buzz:"Lukas",avatarClasses:["fade","fade-out"],ageClasses:["fade","fade-out"],studyClasses:["fade","fade-out"],workClasses:["fade","fade-out"],startingPoint:700,sectionSizeMult:3,isName:!1,secondsSB:0,daysSB:Math.round(((new Date).getTime()-new Date(1998,9,16,0,0,0,0).getTime())/864e5).toString().replace(/\B(?=(\d{3})+(?!\d))/g,"."),weeksSB:Math.round(((new Date).getTime()-new Date(1998,9,16,0,0,0,0).getTime())/6048e5).toString().replace(/\B(?=(\d{3})+(?!\d))/g,"."),studys:[{year:"2017 - 2021",title:"Bachelor of Science",location:"Ulm University",text:"<ul><li>Computer Science in the Bachelor's programme</li><li>Application Subject: Economics</li><li>Thesis: Conception and Implementation of a new web-based system to plan exams.</li><li>Thesis grade: 1.0</li><li>Bachelor's grade: 2.1</li></ul>"},{year:"2021 - present",title:"Master of Science",location:"Ulm University",text:"<ul><li>Computer Science in the Master's programme</li><li>Application Subject: Economics</li></ul>"},{year:"2021",title:"Exchange Semester",location:"University of Helsinki",text:"<ul><li>Exchange Semester in the Computer Science Master's programme at the University of Helsinki</li></ul>"}]}},computed:{computedHeight:function(){return this.$vuetify.breakpoint.smAndUp?"calc(50vh - 6rem)":"calc(50vh - 3.75rem)"},computedHeightAvatar:function(){return this.$vuetify.breakpoint.smAndUp?"300":"240"},tmSize:function(){return this.$vuetify.breakpoint.smAndUp?"34px":"24px"},smAndUp:function(){return this.$vuetify.breakpoint.smAndUp}},methods:{updateScroll:function(){console.log(window.scrollY),window.scrollY>3330?(this.startingWord="You can",this.buzz="contact me"):window.scrollY>3*this.startingPoint?(this.startingWord="I'm",this.buzz="a web developer",this.workClasses=["fade","fade-in"]):window.scrollY>1040?(this.startingWord="I'm",this.buzz="a computer science student",this.workClasses=["fade","fade-out"],this.studyClasses=["fade","fade-in"]):window.scrollY>680?(this.startingWord="I'm",this.buzz="23 years old",this.studyClasses=["fade","fade-out"],this.ageClasses=["fade","fade-in"]):(this.startingWord="I'm",this.buzz="Lukas",this.ageClasses=["fade","fade-out"],window.scrollY>200?this.avatarClasses=["fade","fade-in"]:this.avatarClasses=["fade","fade-out"])},getSeconds:function(){var t=this;setInterval((function(){var e=new Date(1998,9,16,0,0,0,0),c=new Date,n=e.getTime()-c.getTime(),a=n/1e3,l=Math.abs(a);t.secondsSB=Math.round(l).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}),1e3)}},mounted:function(){window.addEventListener("scroll",this.updateScroll),this.getSeconds()}},ct=et,nt=(c("40fd"),c("8212")),at=c("62ad"),lt=c("adda"),st=c("0fd9"),it=c("8414"),rt=c("1e06"),ot=Object(r["a"])(ct,y,b,!1,null,"6854e979",null),dt=ot.exports;d()(ot,{VAvatar:nt["a"],VCard:G["a"],VCardSubtitle:K["b"],VCardText:K["c"],VCardTitle:K["d"],VCol:at["a"],VIcon:m["a"],VImg:lt["a"],VRow:st["a"],VTimeline:it["a"],VTimelineItem:rt["a"]}),n["a"].use(w["a"]);var ut=[{path:"/",name:"Home",component:dt},{path:"/about",name:"About",component:function(){return c.e("about").then(c.bind(null,"f820"))}}],pt=new w["a"]({routes:ut}),ht=pt,mt=c("f309");n["a"].use(mt["a"]);var vt=new mt["a"]({theme:{dark:!0,themes:{light:{primary:"#996E00",error:"#B00020",background:"#ffffff"},dark:{primary:"#ffd56b",background:"#121212"}},options:{customProperties:!0}}});n["a"].config.productionTip=!1,new n["a"]({router:ht,vuetify:vt,render:function(t){return t(g)}}).$mount("#app")},"704e":function(t,e,c){},"998d":function(t,e,c){"use strict";c("704e")}});
//# sourceMappingURL=app.424ad54b.js.map