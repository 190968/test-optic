(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{322:function(t,e,r){"use strict";var n=r(328),o=(r(9),{props:{breakpoints:{},items:"",elements:{}},data:function(){return{itemCategory:"newItems",swiperOption:{roundLengths:!0,speed:500,loop:!1,slidesPerView:"auto",spaceBetween:0,pagination:{el:".item-slider .s-pagination",bulletClass:"s-pagination__bullet",bulletActiveClass:"s-pagination__bullet--active",clickableClass:"s-pagination--clickable",clickable:!0},navigation:{disabledClass:"disabled"},breakpoints:this.$props.breakpoints},categoriesOption:{roundLengths:!0,speed:500,loop:!1,slidesPerView:"auto",spaceBetween:0,freeMode:!0},bestsellers:JSON.parse(JSON.stringify(this.$store.state.catalog.bestsellers)),newItems:JSON.parse(JSON.stringify(this.$store.state.catalog.newItems))}},components:{Item:n.a},computed:{returnItems:function(){return this.elements?this.elements:"recommended"==this.items?this.bestsellers:"bestsellers"==this.itemCategory?this.bestsellers:"newItems"==this.itemCategory?this.newItems:(this.itemCategory,this.bestsellers)}},methods:{next:function(){this.mySwiper.slideNext()},prev:function(){this.mySwiper.slidePrev()}}}),l=r(5),component=Object(l.a)(o,function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.returnItems?r("div",{staticClass:"item-slider"},[r("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiperC",value:t.categoriesOption,expression:"categoriesOption",arg:"mySwiperC"}],staticClass:"item-slider__categories"},["recommended"==t.items?r("div",[r("p",{staticClass:"simple active"},[t._t("default",[t._v("Рекомендуем вам")])],2)]):r("div",{staticClass:"swiper-wrapper"},[r("p",{staticClass:"swiper-slide",class:{active:"newItems"==t.itemCategory},on:{click:function(e){t.itemCategory="newItems"}}},[t._v("Новинки")]),t._v(" "),r("p",{staticClass:"swiper-slide",class:{active:"bestsellers"==t.itemCategory},on:{click:function(e){t.itemCategory="bestsellers"}}},[t._v("Бестселлеры")]),t._v(" "),"mostWanted"===t.itemCategory&&t.returnItems?r("p",{staticClass:"swiper-slide",class:{active:"mostWanted"==t.itemCategory},on:{click:function(e){t.itemCategory="mostWanted"}}},[t._v("Самое желанное")]):t._e()]),t._v(" "),r("div",{staticClass:"item-slider__controls"},[r("button",{staticClass:"item-slider__prev",on:{click:function(e){return t.prev()}}},[t._v("Назад")]),t._v(" "),r("button",{staticClass:"item-slider__next",on:{click:function(e){return t.next()}}},[t._v("Вперёд")])])]),t._v(" "),r("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper"}],staticClass:"item-slider__items"},[r("div",{staticClass:"swiper-wrapper"},t._l(t.returnItems,function(t,e){return r("item",{key:e,attrs:{item:t}})}),1)])]):t._e()},[],!1,null,null,null);e.a=component.exports},331:function(t,e,r){t.exports=function(t){function e(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var r={};return e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=4)}([function(t,e){function r(t,e){var r=t[1]||"",i=t[3];if(!i)return r;if(e&&"function"==typeof btoa){var n=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(i);return[r].concat(i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"})).concat([n]).join("\n")}return[r].join("\n")}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=r(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(n[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),e.push(a))}},e}},function(t,e){t.exports=function(t,e,r,n,i){var o,a=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(o=t,a=t.default);var l,u="function"==typeof a?a.options:a;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),n&&(u._scopeId=n),i?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},u._ssrRegister=l):r&&(l=r),l){var c=u.functional,d=c?u.render:u.beforeCreate;c?u.render=function(t,e){return l.call(e),d(t,e)}:u.beforeCreate=d?[].concat(d,l):[l]}return{esModule:o,exports:a,options:u}}},function(t,e,r){function n(t){for(var e=0;e<t.length;e++){var r=t[e],n=c[r.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++)n.parts[i](r.parts[i]);for(;i<r.parts.length;i++)n.parts.push(o(r.parts[i]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(o(r.parts[i]));c[r.id]={id:r.id,refs:1,parts:a}}}}function i(){var t=document.createElement("style");return t.type="text/css",d.appendChild(t),t}function o(t){var e,r,n=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(n){if(h)return g;n.parentNode.removeChild(n)}if(f){var o=p++;n=v||(v=i()),e=a.bind(null,n,o,!1),r=a.bind(null,n,o,!0)}else n=i(),e=function(t,e){var r=e.css,n=e.media,i=e.sourceMap;if(n&&t.setAttribute("media",n),i&&(r+="\n/*# sourceURL="+i.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}.bind(null,n),r=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else r()}}function a(t,e,r,n){var i=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=m(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=r(14),c={},d=u&&(document.head||document.getElementsByTagName("head")[0]),v=null,p=0,h=!1,g=function(){},f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,r){h=r;var i=l(t,e);return n(i),function(e){for(var r=[],o=0;o<i.length;o++){var a=i[o],s=c[a.id];s.refs--,r.push(s)}e?n(i=l(t,e)):i=[];for(var o=0;o<r.length;o++){var s=r[o];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete c[s.id]}}}};var m=function(){var t=[];return function(e,r){return t[e]=r,t.filter(Boolean).join("\n")}}()},function(t,e,r){var i=r(1)(r(5),r(11),function(t){r(13)},"data-v-34cbeed1",null);t.exports=i.exports},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(3),i=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=i.default},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(9),i=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default={components:{star:i.default},model:{prop:"rating",event:"rating-selected"},props:{increment:{type:Number,default:1},rating:{type:Number,default:0},roundStartRating:{type:Boolean,default:!0},activeColor:{type:String,default:"#ffd055"},inactiveColor:{type:String,default:"#d8d8d8"},maxRating:{type:Number,default:5},starPoints:{type:Array,default:function(){return[]}},starSize:{type:Number,default:50},showRating:{type:Boolean,default:!0},readOnly:{type:Boolean,default:!1},textClass:{type:String,default:""},inline:{type:Boolean,default:!1},borderColor:{type:String,default:"#999"},borderWidth:{type:Number,default:0},roundedCorners:{type:Boolean,default:!1},padding:{type:Number,default:0},rtl:{type:Boolean,default:!1},fixedPoints:{type:Number,default:null},glow:{type:Number,default:0},glowColor:{type:String,default:"#fff"}},created:function(){this.step=100*this.increment,this.currentRating=this.rating,this.selectedRating=this.currentRating,this.createStars(this.roundStartRating)},methods:{setRating:function(t,e){if(!this.readOnly){var r=this.rtl?(100-t.position)/100:t.position/100;this.currentRating=(t.id+r-1).toFixed(2),this.currentRating=this.currentRating>this.maxRating?this.maxRating:this.currentRating,this.createStars(),e?(this.selectedRating=this.currentRating,this.$emit("rating-selected",this.selectedRating),this.ratingSelected=!0):this.$emit("current-rating",this.currentRating)}},resetRating:function(){this.readOnly||(this.currentRating=this.selectedRating,this.createStars(this.shouldRound))},createStars:function(){(!(arguments.length>0&&void 0!==arguments[0])||arguments[0])&&this.round();for(var t=0;t<this.maxRating;t++){var e=0;t<this.currentRating&&(e=this.currentRating-t>1?100:100*(this.currentRating-t)),this.$set(this.fillLevel,t,Math.round(e))}},round:function(){var t=1/this.increment;this.currentRating=Math.min(this.maxRating,Math.ceil(this.currentRating*t)/t)}},computed:{formattedRating:function(){return null===this.fixedPoints?this.currentRating:this.currentRating.toFixed(this.fixedPoints)},shouldRound:function(){return this.ratingSelected||this.roundStartRating},margin:function(){return this.padding+this.borderWidth}},watch:{rating:function(t){this.currentRating=t,this.selectedRating=t,this.createStars(this.shouldRound)}},data:function(){return{step:0,fillLevel:[],currentRating:0,selectedRating:0,ratingSelected:!1}}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{fill:{type:Number,default:0},points:{type:Array,default:function(){return[]}},size:{type:Number,default:50},starId:{type:Number,required:!0},activeColor:{type:String,required:!0},inactiveColor:{type:String,required:!0},borderColor:{type:String,default:"#000"},borderWidth:{type:Number,default:0},roundedCorners:{type:Boolean,default:!1},rtl:{type:Boolean,default:!1},glow:{type:Number,default:0},glowColor:{type:String,required:!1}},created:function(){this.starPoints=this.points.length?this.points:this.starPoints,this.calculatePoints(),this.grad=this.getRandomId(),this.glowId=this.getRandomId()},computed:{starPointsToString:function(){return this.starPoints.join(",")},getGradId:function(){return"url(#"+this.grad+")"},getSize:function(){var t=this.roundedCorners&&this.borderWidth<=0?parseInt(this.size)-parseInt(this.border):this.size;return parseInt(t)+parseInt(this.border)},getFill:function(){return this.rtl?100-this.fill+"%":this.fill+"%"},border:function(){return this.roundedCorners&&this.borderWidth<=0?6:this.borderWidth},getBorderColor:function(){return this.roundedCorners&&this.borderWidth<=0?this.fill<=0?this.inactiveColor:this.activeColor:this.borderColor},maxSize:function(){return this.starPoints.reduce(function(t,e){return Math.max(t,e)})},viewBox:function(){return"0 0 "+this.maxSize+" "+this.maxSize}},methods:{mouseMoving:function(t){this.$emit("star-mouse-move",{event:t,position:this.getPosition(t),id:this.starId})},getPosition:function(t){var e=.92*this.size,r=this.rtl?Math.min(t.offsetX,45):Math.max(t.offsetX,1),n=Math.round(100/e*r);return Math.min(n,100)},selected:function(t){this.$emit("star-selected",{id:this.starId,position:this.getPosition(t)})},getRandomId:function(){return Math.random().toString(36).substring(7)},calculatePoints:function(){var t=this;this.starPoints=this.starPoints.map(function(e){return t.size/t.maxSize*e+1.5*t.border})}},data:function(){return{starPoints:[19.8,2.2,6.6,43.56,39.6,17.16,0,17.16,33,43.56],grad:"",glowId:""}}}},function(t,e,r){(t.exports=r(0)(void 0)).push([t.i,".vue-star-rating-star[data-v-21f5376e]{overflow:visible!important}",""])},function(t,e,r){(t.exports=r(0)(void 0)).push([t.i,".vue-star-rating-star[data-v-34cbeed1]{display:inline-block}.vue-star-rating-pointer[data-v-34cbeed1]{cursor:pointer}.vue-star-rating[data-v-34cbeed1]{display:flex;align-items:center}.vue-star-rating-inline[data-v-34cbeed1]{display:inline-flex}.vue-star-rating-rating-text[data-v-34cbeed1]{margin-top:7px;margin-left:7px}.vue-star-rating-rtl[data-v-34cbeed1]{direction:rtl}.vue-star-rating-rtl .vue-star-rating-rating-text[data-v-34cbeed1]{margin-right:10px;direction:rtl}",""])},function(t,e,r){var i=r(1)(r(6),r(10),function(t){r(12)},"data-v-21f5376e",null);t.exports=i.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{staticClass:"vue-star-rating-star",attrs:{height:t.getSize,width:t.getSize,viewBox:t.viewBox},on:{mousemove:t.mouseMoving,click:t.selected}},[r("linearGradient",{attrs:{id:t.grad,x1:"0",x2:"100%",y1:"0",y2:"0"}},[r("stop",{attrs:{offset:t.getFill,"stop-color":t.rtl?t.inactiveColor:t.activeColor}}),t._v(" "),r("stop",{attrs:{offset:t.getFill,"stop-color":t.rtl?t.activeColor:t.inactiveColor}})],1),t._v(" "),r("filter",{attrs:{id:t.glowId,height:"130%",width:"130%",filterUnits:"userSpaceOnUse"}},[r("feGaussianBlur",{attrs:{stdDeviation:t.glow,result:"coloredBlur"}}),t._v(" "),r("feMerge",[r("feMergeNode",{attrs:{in:"coloredBlur"}}),t._v(" "),r("feMergeNode",{attrs:{in:"SourceGraphic"}})],1)],1),t._v(" "),r("polygon",{directives:[{name:"show",rawName:"v-show",value:t.fill>1,expression:"fill > 1"}],attrs:{points:t.starPointsToString,fill:t.getGradId,stroke:t.glowColor,filter:"url(#"+this.glowId+")"}}),t._v(" "),r("polygon",{attrs:{points:t.starPointsToString,fill:t.getGradId,stroke:t.getBorderColor,"stroke-width":t.border,"stroke-linejoin":t.roundedCorners?"round":"miter"}}),t._v(" "),r("polygon",{attrs:{points:t.starPointsToString,fill:t.getGradId}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:["vue-star-rating",{"vue-star-rating-rtl":t.rtl},{"vue-star-rating-inline":t.inline}]},[r("div",{staticClass:"vue-star-rating",on:{mouseleave:t.resetRating}},[t._l(t.maxRating,function(e){return r("span",{key:e,class:[{"vue-star-rating-pointer":!t.readOnly},"vue-star-rating-star"],style:{"margin-right":t.margin+"px"}},[r("star",{attrs:{fill:t.fillLevel[e-1],size:t.starSize,points:t.starPoints,"star-id":e,step:t.step,"active-color":t.activeColor,"inactive-color":t.inactiveColor,"border-color":t.borderColor,"border-width":t.borderWidth,"rounded-corners":t.roundedCorners,rtl:t.rtl,glow:t.glow,"glow-color":t.glowColor},on:{"star-selected":function(e){t.setRating(e,!0)},"star-mouse-move":t.setRating}})],1)}),t._v(" "),t.showRating?r("span",{class:["vue-star-rating-rating-text",t.textClass]},[t._v(" "+t._s(t.formattedRating))]):t._e()],2)])},staticRenderFns:[]}},function(t,e,r){var n=r(7);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals),r(2)("0ab8a16d",n,!0)},function(t,e,r){var n=r(8);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals),r(2)("2e648ff1",n,!0)},function(t,e){t.exports=function(t,e){for(var r=[],n={},i=0;i<e.length;i++){var o=e[i],a=o[0],s=o[1],u=o[2],l=o[3],c={id:t+":"+i,css:s,media:u,sourceMap:l};n[a]?n[a].parts.push(c):r.push(n[a]={id:a,parts:[c]})}return r}}])},332:function(t,e,r){"use strict";var n=r(329),o=r(321),l=(r(9),r(331)),c=r.n(l),d={mixins:[n.a,o.a],data:function(){return{showModal:!1,itemAmount:1,regxNumbers:{F:{pattern:/[0-9]/}},item:!1,timer:null,id:!1}},components:{StarRating:c.a},mounted:function(){var t=this;this.$root.$on("preview",function(e){t.item=JSON.parse(JSON.stringify(e)),t.id=e.ID,t.$bvModal.show("item-preview"),t.item.PRODUCT&&3==t.item.PRODUCT.TYPE&&setTimeout(function(){t.setCurrent()},100)})},methods:{buy1click:function(){var t=this.item;this.$root.$emit("buy1click",{item:t}),this.$bvModal.show("buyclick")},counterMinus:function(){this.itemAmount<=1||this.itemAmount--}},computed:{rating:function(){return this.item.DISPLAY_PROPERTIES.rating?1*this.item.DISPLAY_PROPERTIES.rating.value:0},labelNew:function(){return!!this.item.DISPLAY_PROPERTIES.new},labelSale:function(){this.item.CURRENT.ITEM_PRICE_SELECTED;return!1}}},v=r(5),component=Object(v.a)(d,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-modal",{staticClass:"item-preview",attrs:{id:"item-preview","hide-header":"","hide-footer":""},model:{value:t.showModal,callback:function(e){t.showModal=e},expression:"showModal"}},[t.item?[r("button",{staticClass:"modal-close",on:{click:function(e){return t.$bvModal.hide("item-preview")}}}),t._v(" "),r("div",{staticClass:"item-preview__img"},[t._l(t.item.CURRENT.MORE_PHOTO,function(img,t){return r("img",{key:t,attrs:{src:img}})}),t._v(" "),r("div",{staticClass:"item__flags"},[t.labelNew?r("span",{staticClass:"item__flag left"},[t._v("NEW")]):t._e(),t._v(" "),t.labelSale?r("span",{staticClass:"item__flag right red"},[t._v("SALE")]):t._e()])],2),t._v(" "),r("div",{staticClass:"item-preview__content"},[r("b",{staticClass:"item-preview__name"},[t._v(t._s(t.item.CURRENT.NAME))]),t._v(" "),r("div",{staticClass:"item-preview__rating"},[r("star-rating",{staticClass:"rating",attrs:{rating:t.rating,"read-only":!0,"show-rating":!1,"round-start-rating":!1}}),t._v(" "),t.item.DISPLAY_PROPERTIES.BLOG_COMMENTS_CNT?r("span",[t._v("("+t._s(t.item.DISPLAY_PROPERTIES.BLOG_COMMENTS_CNT.value)+")")]):r("span",[t._v("(0)")])],1),t._v(" "),t._l(t.item.CURRENT.ITEM_PRICES,function(e){return r("p",{key:e.ID,staticClass:"item-preview__price"},[t._v("\n                "+t._s(e.PRINT_RATIO_PRICE)+"\n            ")])}),t._v(" "),r("p",{staticClass:"item-preview__available"},[r("svg",{attrs:{width:"15",height:"15",fill:"#000"}},[r("use",{attrs:{href:"#svg-layers"}})]),t._v("\n                Много\n            ")]),t._v(" "),t._l(t.item.SKU_PROPS,function(e){return r("div",{key:e.ID,ref:"sku_line_block",refInFor:!0,staticClass:"item__offers"},[r("p",[t._v(t._s(e.NAME))]),t._v(" "),r("ul",t._l(e.VALUES,function(n){return r("li",{key:n.ID,attrs:{"data-value":n.ID},on:{click:function(r){return r.preventDefault(),t.selectOfferProp(e.ID,n.ID,r)}}},[n.PICT&&0!==n.PICT.ID?r("img",{attrs:{src:n.PICT.SRC,alt:""}}):t._e(),t._v(" "),n.PICT&&0!=n.PICT.ID?t._e():r("span",[t._v(t._s(n.NAME))])])}),0)])}),t._v(" "),r("hr"),t._v(" "),r("nuxt-link",{staticClass:"item-preview__link",attrs:{to:{path:t.item.URL}},nativeOn:{click:function(e){return t.$bvModal.hide("item-preview")}}},[t._v("Перейти на страницу товара >")]),t._v(" "),r("div",{staticClass:"item-preview__buttons"},[t.item.PROPERTIES.lins?t._e():r("div",{staticClass:"counter"},[r("button",{on:{click:t.counterMinus}},[t._v("-")]),t._v(" "),r("the-mask",{attrs:{mask:"FFF",tokens:t.regxNumbers},model:{value:t.itemAmount,callback:function(e){t.itemAmount=e},expression:"itemAmount"}}),t._v(" "),r("button",{on:{click:function(e){t.itemAmount++}}},[t._v("+")])],1),t._v(" "),r("button",{staticClass:"button black",on:{click:function(e){return e.preventDefault(),t.addToBasket(t.item.CURRENT.ADD_URL)}}},[t._v("В корзину")]),t._v(" "),r("button",{staticClass:"button",on:{click:function(e){return t.buy1click()}}},[r("svg",{attrs:{id:"svg-icon-click",fill:"#000",viewBox:"0 0 18 25.929",width:"20",height:"20"}},[r("path",{attrs:{d:"M18 18L8.353 8.646 7 9v14l3.658-1.835 2.196 4.764.034-.026.006.012 3.186-1.688-2.222-5.168L18 19v-1zm-4.313.062l-1.025.738 2.263 4.908-1.623.859-2.196-4.762L8 21.438V9.707l8.317 8.317-2.63.038z"}}),t._v(" "),r("path",{attrs:{d:"M1 8a7 7 0 1 1 14 0 6.959 6.959 0 0 1-.697 3.03l.869.497A7.95 7.95 0 0 0 16 8 8 8 0 0 0 0 8c0 3.727 2.551 6.849 6 7.738v-1.031A7.001 7.001 0 0 1 1 8z"}}),t._v(" "),r("path",{attrs:{d:"M8 5a3 3 0 0 1 3 3c0 .365-.075.709-.194 1.033l.885.506A4 4 0 1 0 4 8a3.98 3.98 0 0 0 2 3.445v-1.224C5.39 9.672 5 8.885 5 8a3 3 0 0 1 3-3z"}})]),t._v("\n                    Купить в один клик\n                ")])])],2)]:t._e()],2)},[],!1,null,null,null);e.a=component.exports},333:function(t,e,r){},358:function(t,e,r){t.exports=r.p+"img/02759d4.jpg"},359:function(t,e,r){t.exports=r.p+"img/bbb6a3a.jpg"},360:function(t,e,r){"use strict";var n=r(333);r.n(n).a},405:function(t,e,r){"use strict";r.r(e);var n={props:["items","breakpoints"],data:function(){return{swiperOption:{speed:500,loop:!0,slidesPerView:2,spaceBetween:0,simulateTouch:this.$props.simulateTouch,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,autoplay:{delay:5e3},pagination:{el:".big-slider .s-pagination",bulletClass:"s-pagination__bullet",bulletActiveClass:"s-pagination__bullet--active",clickableClass:"s-pagination--clickable",clickable:!0},lazy:!0,breakpoints:this.$props.breakpoints}}}},o=r(5),l=Object(o.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper"}],staticClass:"big-slider"},[r("div",{staticClass:"swiper-wrapper"},t._l(t.items,function(e,n){return r("div",{key:n,staticClass:"swiper-slide"},[r("img",{staticClass:"swiper-lazy",attrs:{"data-src":e.src,alt:""}}),t._v(" "),r("div",{staticClass:"swiper-lazy-preloader"}),t._v(" "),r("div",{staticClass:"big-slider__over"},[e.description?r("p",[t._v(t._s(e.description))]):t._e(),t._v(" "),e.properties.link.value?r("nuxt-link",{staticClass:"button black",attrs:{to:{path:e.properties.link.value}}},[t._v("\n                        "+t._s(e.properties.name.value?e.properties.name.value:"Подробнее")+"\n                    ")]):t._e()],1)])}),0),t._v(" "),r("div",{staticClass:"s-pagination main-container"})])])},[],!1,null,null,null).exports,c=(r(129),{props:["items","breakpoints","date"],data:function(){return{swiperOption:{roundLengths:!0,speed:500,loop:!1,slidesPerView:3,spaceBetween:30,pagination:{el:".small-slider .s-pagination",bulletClass:"s-pagination__bullet",bulletActiveClass:"s-pagination__bullet--active",clickableClass:"s-pagination--clickable",clickable:!0},lazy:{loadPrevNext:!0,loadPrevNextAmount:100},breakpoints:this.$props.breakpoints}}},methods:{getUrl:function(t){return this.items[t].properties&&this.items[t].properties.link?this.items[t].properties.link.value:"/news/"+this.items[t].code}}}),d=Object(o.a)(c,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper"}],staticClass:"small-slider"},[r("div",{staticClass:"swiper-wrapper"},t._l(t.items,function(e,n){return r("nuxt-link",{key:n,staticClass:"swiper-slide banner-card",class:{"s-date":t.date},attrs:{to:{path:t.getUrl(n)}}},[r("img",{staticClass:"swiper-lazy",attrs:{alt:"","data-src":e.src}}),t._v(" "),r("div",{staticClass:"swiper-lazy-preloader"}),t._v(" "),r("div",{staticClass:"banner-card__over"},[r("p",[t._v(t._s(e.name))]),t._v(" "),e.date?r("span",[r("svg",{attrs:{width:"13",height:"13"}},[r("use",{attrs:{href:"#svg-calendar"}})]),t._v("\n                    "+t._s(e.date)+"\n                ")]):t._e()])])}),1),t._v(" "),r("div",{staticClass:"s-pagination main-container"})])},[],!1,null,null,null).exports,v=r(322),h=r(332),f={props:["breakpoints","items"],data:function(){return{swiperOption:{roundLengths:!0,speed:500,loop:!1,slidesPerView:"auto",preventClicks:!1,spaceBetween:30,pagination:{el:".brands-slider .s-pagination",bulletClass:"s-pagination__bullet",bulletActiveClass:"s-pagination__bullet--active",clickableClass:"s-pagination--clickable",clickable:!0},lazy:{loadPrevNext:!0,loadPrevNextAmount:100},breakpoints:this.$props.breakpoints}}}},m=Object(o.a)(f,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper"}],staticClass:"brands-slider"},[r("div",{staticClass:"swiper-wrapper"},t._l(t.items,function(e,n){return r("nuxt-link",{key:n,staticClass:"swiper-slide",attrs:{to:"/brands/"+e.code}},[r("img",{staticClass:"swiper-lazy",attrs:{src:e.src,alt:""}}),t._v(" "),r("div",{staticClass:"swiper-lazy-preloader"})])}),1),t._v(" "),r("div",{staticClass:"s-pagination main-container"})])},[],!1,null,null,null).exports,_={transition:"fade",data:function(){return{bigSliderBps:{768:{slidesPerView:1}},bigSliderTouch:!1,indexFeaturesBps:{1000:{slidesPerView:"auto",spaceBetween:20},768:{slidesPerView:3,spaceBetween:10},650:{slidesPerView:"auto",spaceBetween:10}},indexBlogBps:{1200:{slidesPerView:"auto",spaceBetween:30},1000:{slidesPerView:"auto",spaceBetween:20},768:{slidesPerView:3,spaceBetween:10},715:{slidesPerView:"auto",spaceBetween:10}},brandsBps:{1000:{spaceBetween:20},768:{spaceBetween:10,slidesPerView:3,slidesPerColumn:3},500:{spaceBetween:10,slidesPerView:2,slidesPerColumn:3}}}},computed:{setBigSliderTouch:function(){return window.innerWidth<1025?this.bigSliderTouch=!0:this.bigSliderTouch}},components:{BigSlider:l,SmallSlider:d,ItemSlider:v.a,ItemPreview:h.a,BrandsSlider:m},asyncData:function(t){return t.store.dispatch("catalog/CACHE_SERVICE")}},w=(r(360),Object(o.a)(_,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index-page 1"},[n("big-slider",{attrs:{items:t.swiperItems,breakpoints:t.bigSliderBps,simulateTouch:t.setBigSliderTouch}}),t._v(" "),n("small-slider",{staticClass:"index-features main-container",attrs:{items:t.topItems,breakpoints:t.indexFeaturesBps,date:!1}}),t._v(" "),n("div",{staticClass:"index-grid main-container"},[n("div",{staticClass:"index-grid__aside"},[n("nuxt-link",{staticClass:"banner-card aside aside-1",attrs:{to:"#0"}},[n("img",{attrs:{src:r(358),alt:""}}),t._v(" "),n("div",{staticClass:"banner-card__over"},[n("p",[t._v("Солнцезащитные очки")])])]),t._v(" "),n("form",{staticClass:"newsletter aside-2"},[n("h2",[t._v("Рассылка")]),t._v(" "),t._m(0),t._v(" "),n("button",{staticClass:"button black",on:{click:function(t){t.preventDefault()}}},[t._v("Отправить")])]),t._v(" "),n("nuxt-link",{staticClass:"banner-card aside aside-3 alt",attrs:{to:"#0"}},[n("img",{attrs:{src:r(359),alt:""}}),t._v(" "),n("div",{staticClass:"banner-card__over"},[n("p",[t._v("Подписывайтесь на наш инстаграм")])])])],1),t._v(" "),n("div",{staticClass:"index-grid__catalog"},[n("item-slider")],1),t._v(" "),n("div",{staticClass:"index-grid__blog"},[n("h2",[t._v("Блог")]),t._v(" "),n("small-slider",{attrs:{items:t.blogItems,breakpoints:t.indexBlogBps,date:!0}}),t._v(" "),n("div",{staticClass:"index-grid__banners"},[t._l(t.bottomItems,function(e,r){return[n("nuxt-link",{key:r,staticClass:"swiper-slide banner-card",attrs:{to:{path:e.properties.link.value}}},[e.src?n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.src,expression:"item.src"}]}):t._e(),t._v(" "),n("div",{staticClass:"banner-card__over"},[n("p",[t._v(t._s(e.name))]),t._v(" "),e.properties.text?n("b",[t._v(t._s(e.properties.text.value))]):t._e()])])]})],2)],1)]),t._v(" "),n("div",{staticClass:"brands main-container"},[n("div",{staticClass:"brands__header"},[n("h2",[t._v("Бренды")]),t._v(" "),n("nuxt-link",{staticClass:"brands__see-all",attrs:{to:"/brands"}},[t._v("Смотреть все бренды")])],1),t._v(" "),n("brands-slider",{attrs:{breakpoints:t.brandsBps,items:t.brandItems}})],1),t._v(" "),n("div",{staticClass:"features main-container"},[n("ul",[n("li",[n("div",{staticClass:"features__icon"},[n("svg",{attrs:{id:"svg-feature-1",widyh:"27",height:"27",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512","xml:space":"preserve"}},[n("path",{attrs:{d:"M480,143.686H378.752c7.264-4.96,13.504-9.888,17.856-14.304c25.792-25.952,25.792-68.192,0-94.144 c-25.056-25.216-68.768-25.248-93.856,0c-13.856,13.92-50.688,70.592-45.6,108.448h-2.304 c5.056-37.856-31.744-94.528-45.6-108.448c-25.088-25.248-68.8-25.216-93.856,0C89.6,61.19,89.6,103.43,115.36,129.382 c4.384,4.416,10.624,9.344,17.888,14.304H32c-17.632,0-32,14.368-32,32v80c0,8.832,7.168,16,16,16h16v192 c0,17.632,14.368,32,32,32h384c17.632,0,32-14.368,32-32v-192h16c8.832,0,16-7.168,16-16v-80 C512,158.054,497.632,143.686,480,143.686z M138.08,57.798c6.496-6.528,15.104-10.112,24.256-10.112 c9.12,0,17.728,3.584,24.224,10.112c21.568,21.696,43.008,77.12,35.552,84.832c0,0-1.344,1.056-5.92,1.056 c-22.112,0-64.32-22.976-78.112-36.864C124.672,93.318,124.672,71.302,138.08,57.798z M240,463.686H64v-192h176V463.686z M240,239.686H32v-64h184.192H240V239.686z M325.44,57.798c12.992-13.024,35.52-12.992,48.48,0 c13.408,13.504,13.408,35.52,0,49.024c-13.792,13.888-56,36.864-78.112,36.864c-4.576,0-5.92-1.024-5.952-1.056 C282.432,134.918,303.872,79.494,325.44,57.798z M448,463.686H272v-192h176V463.686z M480,239.686H272v-64h23.808H480V239.686z"}})])]),t._v(" "),t._m(1)]),t._v(" "),n("li",[n("div",{staticClass:"features__icon"},[n("svg",{attrs:{id:"svg-feature-2",width:"26",height:"26",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 49.94 49.94","xml:space":"preserve"}},[n("path",{attrs:{d:"M48.856,22.731c0.983-0.958,1.33-2.364,0.906-3.671c-0.425-1.307-1.532-2.24-2.892-2.438l-12.092-1.757 c-0.515-0.075-0.96-0.398-1.19-0.865L28.182,3.043c-0.607-1.231-1.839-1.996-3.212-1.996c-1.372,0-2.604,0.765-3.211,1.996 L16.352,14c-0.23,0.467-0.676,0.79-1.191,0.865L3.069,16.623C1.71,16.82,0.603,17.753,0.178,19.06 c-0.424,1.307-0.077,2.713,0.906,3.671l8.749,8.528c0.373,0.364,0.544,0.888,0.456,1.4L8.224,44.702 c-0.232,1.353,0.313,2.694,1.424,3.502c1.11,0.809,2.555,0.914,3.772,0.273l10.814-5.686c0.461-0.242,1.011-0.242,1.472,0 l10.815,5.686c0.528,0.278,1.1,0.415,1.669,0.415c0.739,0,1.475-0.231,2.103-0.688c1.111-0.808,1.656-2.149,1.424-3.502 L39.651,32.66c-0.088-0.513,0.083-1.036,0.456-1.4L48.856,22.731z M37.681,32.998l2.065,12.042c0.104,0.606-0.131,1.185-0.629,1.547 c-0.499,0.361-1.12,0.405-1.665,0.121l-10.815-5.687c-0.521-0.273-1.095-0.411-1.667-0.411s-1.145,0.138-1.667,0.412l-10.813,5.686 c-0.547,0.284-1.168,0.24-1.666-0.121c-0.498-0.362-0.732-0.94-0.629-1.547l2.065-12.042c0.199-1.162-0.186-2.348-1.03-3.17 L2.48,21.299c-0.441-0.43-0.591-1.036-0.4-1.621c0.19-0.586,0.667-0.988,1.276-1.077l12.091-1.757 c1.167-0.169,2.176-0.901,2.697-1.959l5.407-10.957c0.272-0.552,0.803-0.881,1.418-0.881c0.616,0,1.146,0.329,1.419,0.881 l5.407,10.957c0.521,1.058,1.529,1.79,2.696,1.959l12.092,1.757c0.609,0.089,1.086,0.491,1.276,1.077 c0.19,0.585,0.041,1.191-0.4,1.621l-8.749,8.528C37.866,30.65,37.481,31.835,37.681,32.998z"}})])]),t._v(" "),t._m(2)]),t._v(" "),n("li",[n("div",{staticClass:"features__icon"},[n("svg",{attrs:{id:"svg-feature-3",width:"25",height:"25",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 410.344 410.344","xml:space":"preserve"}},[n("path",{attrs:{d:"M205.212,0C119.37,0.088,49.816,69.678,49.772,155.52c0,83.52,143.36,245.36,149.44,252.16 c2.947,3.292,8.005,3.571,11.297,0.624c0.219-0.196,0.427-0.404,0.624-0.624c6.08-6.88,149.44-168.64,149.44-252.16 C360.528,69.709,291.022,0.132,205.212,0z M205.212,390.16c-27.36-32-139.44-166.32-139.44-234.72 C65.772,78.429,128.201,16,205.212,16s139.44,62.429,139.44,139.44C344.652,223.84,232.572,358.32,205.212,390.16z"}}),t._v(" "),n("path",{attrs:{d:"M208.012,78c-46.524,0.044-84.204,37.796-84.16,84.32c0.044,46.524,37.796,84.204,84.32,84.16 c46.493-0.044,84.16-37.747,84.16-84.24C292.244,115.721,254.531,78.044,208.012,78z M208.012,230.56 c-37.688,0-68.24-30.552-68.24-68.24s30.552-68.24,68.24-68.24s68.24,30.552,68.24,68.24 C276.208,199.99,245.681,230.516,208.012,230.56z"}})])]),t._v(" "),t._m(3)]),t._v(" "),n("li",[n("div",{staticClass:"features__icon"},[n("svg",{staticStyle:{"enable-background":"new 0 0 512 512"},attrs:{id:"svg-feature-4",width:"26",height:"26",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512","xml:space":"preserve"}},[n("path",{attrs:{d:"M437.02,74.98C388.668,26.628,324.38,0,256,0S123.332,26.628,74.98,74.98C26.629,123.332,0,187.62,0,256 s26.629,132.668,74.98,181.02C123.332,485.372,187.62,512,256,512s132.668-26.628,181.02-74.98 C485.371,388.668,512,324.38,512,256S485.371,123.332,437.02,74.98z M256,482C131.383,482,30,380.617,30,256S131.383,30,256,30 s226,101.383,226,226S380.617,482,256,482z"}}),t._v(" "),n("path",{attrs:{d:"M272.067,241h-32.134c-18.307,0-33.2-14.893-33.2-33.199c0-18.307,14.894-33.2,33.2-33.2H304.2c8.284,0,15-6.716,15-15 s-6.716-15-15-15H271v-33.2c0-8.284-6.716-15-15-15s-15,6.716-15,15v33.2h-1.066c-34.849,0-63.2,28.352-63.2,63.2 c0,34.848,28.352,63.199,63.2,63.199h32.134c18.306,0,33.199,14.894,33.199,33.2c0,18.306-14.893,33.2-33.199,33.2h-64.267 c-8.284,0-15,6.716-15,15s6.716,15,15,15H241v33.201c0,8.284,6.716,15,15,15s15-6.716,15-15V367.4h1.067 c34.848,0,63.199-28.352,63.199-63.2S306.915,241,272.067,241z"}})])]),t._v(" "),t._m(4)])])]),t._v(" "),n("item-preview")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"textfield"},[e("p",[this._v("Подпишитесь на рассылку")]),this._v(" "),e("input",{attrs:{name:"email",type:"text",placeholder:"yourmail@domain.com"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"features__text"},[e("p",[this._v("+15.000 оправ")]),this._v(" "),e("p",[this._v("Для женщин, мужчин и детей")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"features__text"},[e("p",[this._v("Более 15 брендов")]),this._v(" "),e("p",[this._v("Marc O'Polo, Seiko и др.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"features__text"},[e("p",[this._v("Быстрая доставка")]),this._v(" "),e("p",[this._v("Доставляем по всему миру")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"features__text"},[e("p",[this._v("Возврат за 7 дней")]),this._v(" "),e("p",[this._v("Гарантия 100%")])])}],!1,null,null,null));e.default=w.exports}}]);