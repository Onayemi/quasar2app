(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{6839:function(t,a,s){"use strict";var e=s("b1ca"),c=s.n(e);c.a},b1ca:function(t,a,s){},c0bc:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("q-page",{staticClass:"q-mt-lg"},[s("div",{staticClass:"row q-pa-sm"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"q-mt-md text-center"},[s("h5",[t._v("Our Products")])]),s("div",{staticClass:"q-mt-md"},[s("div",{staticClass:"q-pa-sm row"},t._l(t.results,(function(a){return s("q-card",{key:a.id,staticClass:"my-card myTest",attrs:{clickable:"",flat:""},on:{click:function(s){return t.test(a.id)}}},[s("q-btn",{attrs:{outline:"",round:"",color:"primary",icon:"card_giftcard"}}),s("q-card-section",[s("div",{staticClass:"q-pt-xs myfont"},[t._v(t._s(a.name))])])],1)})),1)])])])])},c=[],r=s("758b"),n={name:"Solution",data(){return{results:[]}},mounted(){this.fetchProduct()},methods:{fetchProduct(){r["a"].get("/fetch/product",{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then(t=>{this.results=t.data})},test(t){this.$router.push({path:"/admin/about",query:{id:t}})}}},i=n,o=(s("6839"),s("2877")),d=s("9989"),u=s("f09f"),l=s("9c40"),m=s("a370"),f=s("eebe"),h=s.n(f),p=Object(o["a"])(i,e,c,!1,null,"5d2bf1db",null);a["default"]=p.exports;h()(p,"components",{QPage:d["a"],QCard:u["a"],QBtn:l["a"],QCardSection:m["a"]})}}]);