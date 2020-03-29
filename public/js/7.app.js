(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{130:function(t,s,e){"use strict";e.r(s);var a=e(9),n=e(10),i=e(1);function r(t,s){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);s&&(a=a.filter((function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),e.push.apply(e,a)}return e}function o(t){for(var s=1;s<arguments.length;s++){var e=null!=arguments[s]?arguments[s]:{};s%2?r(e,!0).forEach((function(s){c(t,s,e[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(e).forEach((function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(e,s))}))}return t}function c(t,s,e){return s in t?Object.defineProperty(t,s,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[s]=e,t}var l={components:{TheCustomizer:a.a,Slide:n.Slide},data:function(){return{tax_id:"",openComments:!1}},created:function(){this.tax_id=this.$store.state.rootUrl.split("/")[2],this.getCustomer(localStorage.getItem("customer")),this.getPurchase(this.$route.params.id),this.$store.dispatch("getAverageRate")},computed:o({},Object(i.d)("purchases",["purchase"]),{},Object(i.d)("customers",["customer"]),{userType:function(){return this.$store.getters.userType},averageRate:function(){return this.$store.state.averageRate},non_taxable_purchases_riel:function(){return this.purchase.non_taxable_purchases*this.averageRate},vat_local_usd:function(){return parseFloat(.1*Math.abs(this.purchase.local_purchase_tax_val)).toFixed(2)},vat_import_riel:function(){return parseFloat(.1*this.purchase.imports_taxable_val).toFixed(2)},local_purchase_tax_val_reil:function(){return parseFloat(Math.abs(this.purchase.local_purchase_tax_val)*this.averageRate).toFixed(2)},local_purchase_tax_vat_reil:function(){return parseFloat(.1*Math.abs(this.local_purchase_tax_val_reil)).toFixed(2)},total_vat:function(){return parseFloat(this.purchase.imports_taxable_val+this.vat_import_riel+this.local_purchase_tax_val_reil+this.local_purchase_tax_vat_reil).toFixed(2)+this.non_taxable_purchases_riel}}),methods:o({handleToggleDrawer:function(){this.$refs.commentsView.active=!this.$refs.commentsView.active}},Object(i.b)({getPurchase:"purchases/getPurchase",getCustomer:"customers/getCustomer",statusChange:"taxes/statusUpdateSPP",statusChangeManagment:"taxes/statusChangeManagment"}),{statusUpdate:function(t,s){var e=this,a={id:t,tax_id:this.tax_id,notify:this.$vs.notify,type:"purchase"};this.statusChange(a).then((function(t){"undefined"==t.data.response?e.purchase.officer_confirmed=s:e.purchase.officer_confirmed=t.data.response}))},changeManagementStatus:function(t,s,e){var a={id:s,status:t,by:e,tax_id:this.tax_id,notify:this.$vs.notify,tax_type:"purchase"};this.statusChangeManagment(a).then((function(t){}))}})},v=(e(88),e(2)),m=Object(v.a)(l,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("vs-row",[e("vs-col",{attrs:{"vs-lg":"9","vs-md":"9","vs-sm":"12"}},[e("vx-card",{attrs:{title:"Purchases Detail"}},[e("vs-row",[e("vs-col",{staticClass:"mt-5",attrs:{"vs-lg":"4","vs-md":"4","vs-sm":"12"}},[e("h6",[t._v("Client TIN:")]),t._v(" "),e("p",[t._v(t._s(t.customer.tin_no))])]),t._v(" "),e("vs-col",{staticClass:"mt-5",attrs:{"vs-lg":"4","vs-md":"4","vs-sm":"12"}},[e("h6",[t._v("Client Name:")]),t._v(" "),e("p",[t._v(t._s(t.customer.name_english))])]),t._v(" "),e("vs-col",{staticClass:"mt-5",attrs:{"vs-lg":"4","vs-md":"4","vs-sm":"12"}},[e("h6",[t._v("Branch Name:")]),t._v(" "),e("p",[t._v(t._s(t.purchase.branch_name))])]),t._v(" "),e("vs-col",{staticClass:"mt-5",attrs:{"vs-lg":"4","vs-md":"4","vs-sm":"12"}},[e("h6",[t._v("Tax Period:")]),t._v(" "),e("p",[t._v(t._s(t.purchase.tax_period))])]),t._v(" "),e("vs-col",{staticClass:"mt-5",attrs:{"vs-lg":"4","vs-md":"4","vs-sm":"12"}},[e("h6",[t._v("Invoice Date:")]),t._v(" "),e("p",[t._v(t._s(new Date(t.purchase.invoice_date).toDateString()))])]),t._v(" "),e("vs-col",{staticClass:"mt-5",attrs:{"vs-lg":"4","vs-md":"4","vs-sm":"12"}},[e("h6",[t._v("Invoice NO:")]),t._v(" "),e("p",[t._v(t._s(t.purchase.invoice_num))])]),t._v(" "),e("vs-col",{staticClass:"mt-5",attrs:{"vs-lg":"4","vs-md":"4","vs-sm":"12"}},[e("h6",[t._v("Description:")]),t._v(" "),e("p",[t._v(t._s(t.purchase.description))])]),t._v(" "),e("vs-col",{staticClass:"mt-5",attrs:{"vs-lg":"4","vs-md":"4","vs-sm":"12"}},[e("h6",[t._v("Quantity:")]),t._v(" "),e("p",[t._v(t._s(t.purchase.quantity))])]),t._v(" "),e("vs-col",{staticClass:"mt-5",attrs:{"vs-lg":"4","vs-md":"4","vs-sm":"12"}},[e("h6",[t._v("Subject:")]),t._v(" "),e("p",[t._v(t._s(t.purchase.subject))])]),t._v(" "),e("vs-col",{staticClass:"mt-5",attrs:{"vs-lg":"4","vs-md":"4","vs-sm":"12"}},[e("h6",[t._v("Comments:")]),t._v(" "),e("p",[t._v(t._s(t.purchase.comments))])]),t._v(" "),e("vs-col",{staticClass:"mt-5",attrs:{"vs-lg":"4","vs-md":"4","vs-sm":"12"}},[e("h6",[t._v("Client Response:")]),t._v(" "),e("p",[t._v(t._s(t.purchase.client_response))])]),t._v(" "),e("vs-col",{staticClass:"mt-5",attrs:{"vs-lg":"4","vs-md":"4","vs-sm":"12"}},[e("h6",[t._v("ToP Comments:")]),t._v(" "),e("p",[t._v(t._s(t.purchase.top_comments))])]),t._v(" "),e("vs-col",{staticClass:"mt-5",attrs:{"vs-lg":"4","vs-md":"4","vs-sm":"12"}},[e("h6",[t._v("Client Responses:")]),t._v(" "),e("p",[t._v(t._s(t.purchase.client_responses))])])],1)],1),t._v(" "),e("vx-card",{staticClass:"mt-base",attrs:{title:"Purchases Summary"}},[e("vs-row",[e("vs-col",{staticClass:"mt-5",attrs:{"vs-lg":"6","vs-md":"6","vs-sm":"12"}},[e("h6",[t._v("Non Taxable Purchase (USD):")]),t._v(" "),e("p",[t._v(t._s(t.customer.non_taxable_purchases||0))])]),t._v(" "),e("vs-col",{staticClass:"mt-5",attrs:{"vs-lg":"6","vs-md":"6","vs-sm":"12"}},[e("h6",[t._v("Non taxable Purchases (RIEL):")]),t._v(" "),e("p",[t._v(t._s(t.non_taxable_purchases_riel))])]),t._v(" "),e("vs-divider",{attrs:{position:"left"}},[e("h5",[t._v("Local Purchases")])]),t._v(" "),e("vs-col",{staticClass:"mt-5",attrs:{"vs-lg":"6","vs-md":"6","vs-sm":"12"}},[e("h6",[t._v("Taxable Value (USD):")]),t._v(" "),e("p",[t._v(t._s(t.purchase.local_purchase_tax_val||0))])]),t._v(" "),e("vs-col",{staticClass:"mt-5",attrs:{"vs-lg":"6","vs-md":"6","vs-sm":"12"}},[e("h6",[t._v("VAT (USD):")]),t._v(" "),e("p",[t._v(t._s(t.vat_local_usd))])]),t._v(" "),e("vs-divider",{attrs:{position:"left"}},[e("h5",[t._v("Taxable Purchases")])]),t._v(" "),e("vs-col",{staticClass:"mt-5",attrs:{"vs-lg":"12","vs-md":"12","vs-sm":"12"}},[e("h6",[t._v("Imports:")])]),t._v(" "),e("vs-col",{staticClass:"mt-5",attrs:{"vs-lg":"6","vs-md":"6","vs-sm":"12"}},[e("h6",[t._v("Taxable Value (RIEL):")]),t._v(" "),e("p",[t._v(t._s(t.purchase.imports_taxable_val))])]),t._v(" "),e("vs-col",{staticClass:"mt-5",attrs:{"vs-lg":"6","vs-md":"6","vs-sm":"12"}},[e("h6",[t._v("VAT (RIEL):")]),t._v(" "),e("p",[t._v(t._s(t.vat_import_riel))])]),t._v(" "),e("vs-col",{staticClass:"mt-5",attrs:{"vs-lg":"12","vs-md":"12","vs-sm":"12"}},[e("h6",[t._v("Local Purchases:")])]),t._v(" "),e("vs-col",{staticClass:"mt-5",attrs:{"vs-lg":"6","vs-md":"6","vs-sm":"12"}},[e("h6",[t._v("Taxable Value (RIEL):")]),t._v(" "),e("p",[t._v(t._s(t.local_purchase_tax_val_reil))])]),t._v(" "),e("vs-col",{staticClass:"mt-5",attrs:{"vs-lg":"6","vs-md":"6","vs-sm":"12"}},[e("h6",[t._v("VAT (RIEL):")]),t._v(" "),e("p",[t._v(t._s(t.local_purchase_tax_vat_reil))])]),t._v(" "),e("vs-divider",{attrs:{position:"center"}},[e("h5",[t._v("Total Taxable Value:")])]),t._v(" "),e("vs-col",{staticClass:"mt-5 text-center",attrs:{"vs-lg":"12","vs-md":"12","vs-sm":"12"}},[e("p",[t._v(t._s(t.total_vat))])])],1)],1)],1),t._v(" "),e("vs-col",{attrs:{"vs-lg":"3","vs-md":"3","vs-xl":"3","vs-sm":"12"}},[e("vx-card",{attrs:{title:"Actions"}},[e("vs-list",[e("vs-list-item",{attrs:{title:"Edit Purchase"}},[e("vs-button",{attrs:{to:"/purchase-update/"+t.$route.params.id,"icon-pack":"feather",size:"small",icon:"icon-edit"}})],1),t._v(" "),["Admin"==t.userType||"Super Admin"==t.userType?e("vs-list-item",{attrs:{title:"Status"}},[e("vs-button",{attrs:{"icon-pack":"feather",size:"small",icon:"icon-check-circle"},on:{click:function(s){return t.changeManagementStatus("1",t.purchase.id,"admin")}}}),t._v(" "),e("vs-button",{attrs:{"icon-pack":"feather",size:"small",icon:"icon-x-circle"},on:{click:function(s){return t.changeManagementStatus("0",t.purchase.id,"admin")}}})],1):"Supervisor"==t.userType?e("vs-list-item",{attrs:{title:"Status"}},[e("vs-button",{attrs:{"icon-pack":"feather",size:"small",icon:"icon-check-circle"},on:{click:function(s){return t.changeManagementStatus("1",t.purchase.id,"supervisor")}}}),t._v(" "),e("vs-button",{attrs:{"icon-pack":"feather",size:"small",icon:"icon-x-circle"},on:{click:function(s){return t.changeManagementStatus("0",t.purchase.id,"supervisor")}}})],1):e("vs-list-item",{attrs:{title:"Status"}},[e("vs-switch",{attrs:{"icon-pack":"feather"},on:{click:function(s){return t.statusUpdate(t.purchase.purchase_id,t.purchase.officer_confirmed)}},model:{value:t.purchase.officer_confirmed,callback:function(s){t.$set(t.purchase,"officer_confirmed",s)},expression:"purchase.officer_confirmed"}})],1)],t._v(" "),e("vs-list-item",{attrs:{title:"View Comments"}},[e("vs-button",{attrs:{"icon-pack":"feather",size:"small",icon:"icon-maximize-2"},on:{click:t.handleToggleDrawer}})],1)],2)],1)],1)],1),t._v(" "),e("the-customizer",{ref:"commentsView",attrs:{object_id:t.$route.params.id,type:"Purchase","comments-url":"get-comments"}})],1)}),[],!1,null,null,null);s.default=m.exports},16:function(t,s,e){var a=e(53);"string"==typeof a&&(a=[[t.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e(5)(a,n);a.locals&&(t.exports=a.locals)},32:function(t,s,e){var a=e(89);"string"==typeof a&&(a=[[t.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e(5)(a,n);a.locals&&(t.exports=a.locals)},52:function(t,s,e){"use strict";var a=e(16);e.n(a).a},53:function(t,s,e){(t.exports=e(4)(!1)).push([t.i,"#theme-customizer .vs-sidebar {\n  position: fixed;\n  z-index: 52000;\n  width: 400px;\n  max-width: 90vw;\n  box-shadow: 0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08);\n}\n.customizer-btn {\n  position: fixed;\n  top: 50%;\n  right: 0;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  z-index: 50000;\n}\n.customizer-btn .vs-icon {\n  -webkit-animation: spin 1.5s linear infinite;\n          animation: spin 1.5s linear infinite;\n}\n.scroll-area--customizer {\n  height: calc(88% - 5rem);\n}",""])},88:function(t,s,e){"use strict";var a=e(32);e.n(a).a},89:function(t,s,e){(t.exports=e(4)(!1)).push([t.i,".bm-menu {\n  z-index: 99999;\n}\n.bm-burger-button {\n  position: fixed;\n  width: 36px;\n  height: 30px;\n  left: 36px;\n  top: 36px;\n  cursor: pointer;\n}\n.bm-burger-bars {\n  background-color: #373a47;\n}\n.line-style {\n  position: absolute;\n  height: 20%;\n  left: 0;\n  right: 0;\n}\n.cross-style {\n  position: absolute;\n  top: 12px;\n  right: 2px !important;\n  cursor: pointer;\n}\n.bm-cross {\n  background: #bdc3c7;\n}\n.bm-cross-button {\n  height: 24px;\n  width: 24px;\n}\n.bm-menu {\n  height: 100%;\n  /* 100% Full-height */\n  width: 0;\n  /* 0 width - change this with JavaScript */\n  position: fixed;\n  /* Stay in place */\n  top: 0;\n  left: 0;\n  background-color: #3f3f41;\n  /* Black*/\n  overflow-x: hidden;\n  /* Disable horizontal scroll */\n  padding-top: 60px;\n  /* Place content 60px from the top */\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  /*0.5 second transition effect to slide in the sidenav*/\n}\n.bm-overlay {\n  background: rgba(0, 0, 0, 0.3);\n}\n.bm-item-list {\n  color: #b8b7ad;\n  margin-left: 10%;\n  font-size: 20px;\n}\n.bm-item-list > * {\n  display: -webkit-box;\n  display: flex;\n  text-decoration: none;\n  padding: 0.7em;\n}\n.bm-item-list > * > span {\n  margin-left: 10px;\n  font-weight: 700;\n  color: white;\n}",""])},9:function(t,s,e){"use strict";var a=e(8),n={props:{object_id:{type:String,required:!0},type:{type:String,required:!0},commentsUrl:{type:String,required:!0}},watch:{active:function(t,s){if(0==t)clearInterval(this.invterVal);else{var e=this;this.invterVal=setInterval((function(){var t={path:e.commentsUrl,type:e.type,object_id:e.object_id};e.$store.dispatch("getComments",t)}),2e3)}this.scrollToEnd()}},data:function(){return{invterVal:"",active:!1,textMsg:"",settings:{maxScrollbarLength:60,wheelSpeed:.6},chatMsg:[{senderImg:"avatar-s-2.png",msg:"Cake sesame snaps cupcake gingerbread",isSent:!1},{senderImg:"avatar-s-5.png",msg:"Apple pie pie jujubes chupa chups muffin",isSent:!0},{senderImg:"avatar-s-2.png",msg:"Chocolate cake",isSent:!1},{senderImg:"avatar-s-5.png",msg:"Donut sweet pie oat cake dragée fruitcake",isSent:!0},{senderImg:"avatar-s-2.png",msg:"Liquorice chocolate bar jelly beans icing",isSent:!1},{senderImg:"avatar-s-2.png",msg:"Liquorice chocolate bar jelly beans icing",isSent:!1},{senderImg:"avatar-s-2.png",msg:"Liquorice chocolate bar jelly beans icing",isSent:!1},{senderImg:"avatar-s-2.png",msg:"Liquorice chocolate bar jelly beans icing",isSent:!1},{senderImg:"avatar-s-2.png",msg:"Liquorice chocolate bar jelly beans icing",isSent:!1},{senderImg:"avatar-s-5.png",msg:"Pudding candy",isSent:!0},{senderImg:"avatar-s-5.png",msg:"Pudding candy",isSent:!0}]}},created:function(){var t={path:this.commentsUrl,type:this.type,object_id:this.object_id};this.$store.dispatch("getComments",t)},computed:{hideScrollToTopLocal:{get:function(){return this.hideScrollToTop},set:function(t){this.$emit("toggleHideScrollToTop",t)}},userType:function(){return this.$store.getters.userType},comments:function(){return this.$store.state.comments}},methods:{commentedBy:function(t){return localStorage.getItem("admin")==t},sendComment:function(t){var s={comment:this.textMsg,object_id:this.object_id,type:this.type,scrollToEnd:this.scrollToEnd,userType:this.userType,loginUser:localStorage.getItem("admin")};""!=this.textMsg.trim()&&(this.$store.dispatch("saveComment",s),this.textMsg="",this.scrollToEnd())},updatePrimaryColor:function(t){this.primaryColor=t,this.$vs.theme({primary:t})},scrollToEnd:function(){var t=this;setTimeout((function(){var s=t.$el.querySelector(".ps-container");s.scrollTop=s.scrollHeight,console.log(s.scrollHeight)}),0)}},components:{VuePerfectScrollbar:e.n(a).a}},i=(e(52),e(2)),r=Object(i.a)(n,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"theme-customizer"}},[e("vs-sidebar",{staticClass:"items-no-padding",attrs:{"hidden-background":"","position-right":"","click-not-close":""},model:{value:t.active,callback:function(s){t.active=s},expression:"active"}},[e("div",{staticClass:"h-full"},[e("div",{staticClass:"customizer-header mt-6 flex items-center justify-between px-6"},[e("div",[e("h4",[t._v("COMMENTS")]),t._v(" "),e("small",[t._v("Comments & Task Reviews")])]),t._v(" "),e("feather-icon",{staticClass:"cursor-pointer",attrs:{icon:"XIcon"},on:{click:function(s){s.stopPropagation(),t.active=!1}}})],1),t._v(" "),e("vs-divider",{staticClass:"mb-0"}),t._v(" "),e("VuePerfectScrollbar",{staticClass:"scroll-area--customizer pt-4 pb-6",attrs:{settings:t.settings}},[e("div",{staticClass:"px-6"},[e("ul",{ref:"chatLog"},t._l(t.comments,(function(s,a){return e("li",{key:a},[e("div",{staticClass:"flex items-start",class:{"flex-row-reverse":t.commentedBy(s.member_id),"mt-4":a}},[e("vs-avatar",{staticClass:"m-0 flex-shrink-0",class:t.commentedBy(s.member_id)?"ml-3":"mr-3",attrs:{text:s.member_info.full_name,size:"40px"}}),t._v(" "),e("div",{staticClass:"msg relative bg-white shadow-md py-3 px-4 rounded-lg max-w-md",class:{"chat-sent-msg bg-primary-gradient text-white":t.commentedBy(s.member_id),"border border-solid d-theme-border-grey-light":!t.commentedBy(s.member_id)}},[e("span",[t._v(t._s(s.comment))])])],1),t._v(" "),e("div",{staticClass:"p-0 text-right"},[t._v(t._s(s.member_info.full_name))]),t._v(" "),e("div",{staticClass:"p-0 text-right"},[t._v(t._s(s.created_at))])])})),0)])]),t._v(" "),e("div",{staticClass:"customizer-footer mt-6 flex items-center justify-between px-6"},[e("vs-input",{staticClass:"w-full",attrs:{placeholder:"Type Here"},on:{keydown:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.sendComment(s)}},model:{value:t.textMsg,callback:function(s){t.textMsg=s},expression:"textMsg"}})],1),t._v(" "),e("vs-divider",{staticClass:"mb-0"})],1)])],1)}),[],!1,null,null,null);s.a=r.exports}}]);