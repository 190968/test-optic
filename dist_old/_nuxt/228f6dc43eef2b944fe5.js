(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{323:function(t,n,e){"use strict";e(95),e(127);var l=e(0),o=(e(6),{ul:"pagination",li:"pagination-item",liActive:"pagination-item--active",liDisable:"pagination-item--disable",button:"pagination-link",buttonActive:"pagination-link--active",buttonDisable:"pagination-link--disable"}),r={first:"&laquo;",prev:"&lsaquo;",next:"&rsaquo;",last:"&raquo;"},c={props:{value:{type:Number,required:!0},pageCount:{type:Number,required:!0},classes:{type:Object,required:!1,default:function(){return{}}},labels:{type:Object,required:!1,default:function(){return{}}}},data:function(){return{paginationClasses:Object(l.a)({},o,this.classes),paginationLabels:Object(l.a)({},r,this.labels)}},mounted:function(){this.value>this.pageCount&&this.$emit("input",this.pageCount)},computed:{items:function(){for(var t=this.value>1?this.value-1:1,n=this.value<this.pageCount?this.value+1:this.pageCount,e=3===t?2:null,l=n===this.pageCount-2?this.pageCount-1:null,o=t>3?2:null,r=n<this.pageCount-2?this.pageCount-1:null,output=[],i=1;i<=this.pageCount;i+=1)[1,this.pageCount,this.value,t,n,e,l,o,r].includes(i)&&output.push({label:i,active:this.value===i,disable:[o,r].includes(i)});return output},hasFirst:function(){return 1===this.value},hasLast:function(){return this.value===this.pageCount}},watch:{value:function(){this.$emit("change")}},methods:{first:function(){this.hasFirst||this.$emit("input",1)},prev:function(){this.hasFirst||this.$emit("input",this.value-1)},goto:function(t){this.$emit("input",t)},next:function(){this.hasLast||this.$emit("input",this.value+1)},last:function(){this.hasLast||this.$emit("input",this.pageCount)}}},h=e(5),component=Object(h.a)(c,function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.pageCount>1?e("ul",{class:t.paginationClasses.ul},[t.paginationLabels.prev?e("li",{class:t.paginationClasses.li+" "+(t.hasFirst?t.paginationClasses.liDisable:"")},[e("button",{staticClass:"arrow-prev",class:t.paginationClasses.button+" "+(t.hasFirst?t.paginationClasses.buttonDisable:""),attrs:{disabled:t.hasFirst},domProps:{innerHTML:t._s(t.paginationLabels.prev)},on:{click:t.prev}})]):t._e(),t._v(" "),t._l(t.items,function(n){return e("li",{key:n.label,class:t.paginationClasses.li+" "+(n.active?t.paginationClasses.liActive:"")+" "+(n.disable?t.paginationClasses.liDisable:"")},[n.disable?e("span",{class:t.paginationClasses.button+" "+t.paginationClasses.buttonDisable},[t._v("\n      ...\n    ")]):e("button",{class:t.paginationClasses.button+" "+(n.active?t.paginationClasses.buttonActive:""),on:{click:function(e){return t.goto(n.label)}}},[t._v("\n      "+t._s(n.label)+"\n    ")])])}),t._v(" "),t.paginationLabels.next?e("li",{class:t.paginationClasses.li+" "+(t.hasLast?t.paginationClasses.liDisable:"")},[e("button",{staticClass:"arrow-next",class:t.paginationClasses.button+" "+(t.hasLast?t.paginationClasses.buttonDisable:""),attrs:{disabled:t.hasLast},domProps:{innerHTML:t._s(t.paginationLabels.next)},on:{click:t.next}})]):t._e()],2):t._e()},[],!1,null,null,null);n.a=component.exports},417:function(t,n,e){"use strict";e.r(n);e(8),e(28);var l=e(4),o=e(323),r={asyncData:function(){var t=Object(l.a)(regeneratorRuntime.mark(function t(n){var e,l,o,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.store,l=n.error,o=n.params,t.next=3,e.dispatch("catalog/LOAD_BRANDS",{params:o});case 3:return(r=t.sent).hasOwnProperty("error")&&l({statusCode:r.statusCode,message:r.error.message}),t.abrupt("return",{items:r.items,pagen_count:r.pagen_count,pagen:r.pagen});case 6:case"end":return t.stop()}},t)}));return function(n){return t.apply(this,arguments)}}(),methods:{onChangePagen:function(){this.$router.push({name:this.$route.name,params:{pagen:this.pagen}})}},data:function(){return{paginationClasses:{ul:"pagination",li:"pagination__li",liActive:"active",liDisable:"disabled",button:"pagination__btn"},customLabels:{first:"First",prev:"Previous",next:"Next",last:"Last"}}},components:{Pagination:o.a}},c=e(5),component=Object(c.a)(r,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"content-header"},[e("div",{staticClass:"main-container"},[e("h2",[t._v("Бренды")]),t._v(" "),e("ul",{staticClass:"breadcrumbs"},[e("li",[e("nuxt-link",{attrs:{to:"/"}},[t._v("Главная")])],1)])])]),t._v(" "),e("div",{staticClass:"main-container"},[e("div",{staticClass:"p-brands"},t._l(t.items,function(t,n){return e("nuxt-link",{key:n,attrs:{to:"/brands/"+t.code}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.src,expression:"item.src"}],attrs:{alt:""}})])}),1),t._v(" "),e("pagination",{staticClass:"d-flex justify-content-center flex-wrap",attrs:{"page-count":t.pagen_count,classes:t.paginationClasses,labels:t.customLabels},on:{change:t.onChangePagen},model:{value:t.pagen,callback:function(n){t.pagen=n},expression:"pagen"}})],1)])},[],!1,null,null,null);n.default=component.exports}}]);