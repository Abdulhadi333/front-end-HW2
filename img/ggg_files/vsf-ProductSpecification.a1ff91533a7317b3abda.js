(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{2130:function(t,e,r){"use strict";r.r(e);var o=r(610),s=r(148),a={name:"ProductSpecification",data:function(){return{showMoreIndex:2}},components:{BaseLink:o.a,ProductAttribute:function(){return{component:r.e(130).then(r.bind(null,2026))}}},props:{customAttributes:{type:Array,required:!0,default:function(){return[]}},product:{type:Object,required:!0}},computed:{getCustomAttributes:function(){var t=this,e=new Intl.Collator("ar"),r=[];return this.customAttributes.forEach((function(o){var s=t.product[o.attribute_code],a=e.compare("لا ينطبق",s);s&&"n/a"!==String(s).toLowerCase().replace(/[^\x00-\x7F]/g,"")&&0!==a&&r.push(o)})),this.refBarcode&&(this.showMoreIndex=this.customAttributes.length),r},refBarcode:function(){return this.$route.params._ref&&"barcode"===this.$route.params._ref}},methods:{scrollUp:function(){Object(s.i)('[data-card="specification"]',280,1e3)}}},n=r(243),c=Object(n.a)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card card--shadow",attrs:{"data-card":"specification","data-collapsed":2!=t.showMoreIndex||t.refBarcode?"false":"true"}},[r("div",{staticClass:"card__content card__content--small"},[r("table",{staticClass:"table table--info table--bordered-bottom",attrs:{cellspacing:"0",cellpadding:"0"}},[r("transition-group",{staticClass:"table__body",attrs:{name:"slide-fade",tag:"tbody"}},[t._v("\n        "+t._s(t.getCustomAttributes)+"\n        "),t._l(t.getCustomAttributes.slice(0,t.showMoreIndex+1),(function(e){return r("product-attribute",{key:e.attribute_code,attrs:{product:t.product,attribute:e,"empty-placeholder":"N/A"}})}))],2)],1)]),t._v(" "),t.customAttributes.length>3&&!t.refBarcode?r("BaseLink",{class:["card__show ",2==t.showMoreIndex?"card__show--more":"card__show--less"],attrs:{type:"link",icon:2==t.showMoreIndex?"arrow-down":"arrow-up","icon-class":"link__icon--show"},nativeOn:{click:function(e){e.preventDefault(),2==t.showMoreIndex?t.showMoreIndex=t.customAttributes.length:(t.showMoreIndex=2,t.scrollUp())}}},[r("span",[t._v(t._s(2==t.showMoreIndex?t.$t("Show more"):t.$t("Show less")))])]):t._e()],1)}),[],!1,null,null,null);e.default=c.exports}}]);
//# sourceMappingURL=vsf-ProductSpecification.a1ff91533a7317b3abda.js.map