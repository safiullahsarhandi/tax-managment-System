(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{156:function(t,e,s){"use strict";s.r(e);var r=s(1);function n(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,r)}return s}function a(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?n(s,!0).forEach((function(e){o(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):n(s).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function o(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var i={inject:["generatePassword","loginUser"],data:function(){return{viewTaxTeamModal:!1,editCustomerModal:!1,customer_id:"",name_english:"",name_khmer:"",industry:"",tax_card_num:"",tin_no:"",email:"",telephone:"",address:"",street:"",village:"",muncipality:"",district:"",province:"",sangkat:"",group:"",incorporation_date:"",customField:[],taxes:[],tableEntries:10}},computed:a({},Object(r.d)("customers/",["customers"]),{},Object(r.c)("customers/",["findCustomer"])),created:function(){this.getCustomers()},methods:a({},Object(r.b)({getCustomers:"customers/getCustomers"}),{getOfficer:function(t){return null!=t?t.full_name:"N/A"},getSupervisor:function(t){return null!=t?t.full_name:"N/A"},statusUpdate:function(t){var e=this;this.$vs.loading(),axios.post("status-update-customer",{id:t}).then((function(t){e.$vs.notify({title:"Updated!...",text:t.data.msg,color:"success",position:"top-right"}),e.$vs.loading.close()}))},viewTaxTeam:function(t){var e=this.findCustomer(t);console.log(e),console.log(e.taxes),this.taxes=e.taxes,this.viewTaxTeamModal=!0}})},u=(s(72),s(2)),v=Object(u.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("vx-card",{attrs:{title:"List of Customers"}},[s("vs-table",{attrs:{search:"",pagination:"","max-items":t.tableEntries,data:t.customers},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.data;return t._l(r,(function(e,r){return s("vs-tr",{key:r},[s("vs-td",{attrs:{data:e.id}},[t._v(" "+t._s("C0"+e.id))]),t._v(" "),s("vs-td",{attrs:{data:e.name_english}},[t._v(t._s(e.name_english))]),t._v(" "),s("vs-td",{attrs:{data:e.name_khmer}},[t._v(t._s(e.name_khmer))]),t._v(" "),s("vs-td",{attrs:{data:e.industry}},[t._v(t._s(e.industry))]),t._v(" "),s("vs-td",{attrs:{data:e.id}},[t._v(t._s(e.tax_duration))]),t._v(" "),s("vs-td",{attrs:{data:e.tax_card_num}},[t._v(t._s(e.tax_card_num))]),t._v(" "),s("vs-td",{attrs:{data:e.tin_no}},[t._v(t._s(e.tin_no))]),t._v(" "),s("vs-td",{attrs:{data:e.email}},[t._v(t._s(e.email))]),t._v(" "),"Admin"==t.$store.getters.userType||"Super Admin"==t.$store.getters.userType?s("vs-td",{attrs:{data:t.getSupervisor(e.supervisor)}},[t._v(t._s(t.getSupervisor(e.supervisor)))]):t._e(),t._v(" "),"Officer"!=t.$store.getters.userType?s("vs-td",{attrs:{data:t.getOfficer(e.officer)}},[t._v(t._s(t.getOfficer(e.officer)))]):t._e(),t._v(" "),"Admin"!=t.$store.getters.userType||"Super Admin"!=t.$store.getters.userType?s("vs-td",{attrs:{data:0}},[t._v(t._s(0))]):t._e(),t._v(" "),"Admin"==t.$store.getters.userType||"Super Admin"!=t.$store.getters.userType?s("vs-td",{attrs:{data:e.status}},[s("vs-switch",{on:{click:function(s){return t.statusUpdate(e.customer_id)}},model:{value:e.status,callback:function(s){t.$set(e,"status",s)},expression:"tr.status"}})],1):t._e(),t._v(" "),s("vs-td",["Admin"==t.$store.getters.userType||"Super Admin"!=t.$store.getters.userType?s("vs-button",{attrs:{to:"customer-update/"+e.customer_id,size:"small",type:"border","icon-pack":"feather",icon:"icon-edit"}}):t._e(),t._v(" "),s("vs-button",{attrs:{to:"customer-detail/"+e.customer_id,size:"small","icon-pack":"feather",icon:"icon-maximize-2",type:"border"}})],1)],1)}))}}])},[s("template",{slot:"header"},[s("vs-row",[s("vs-col",{attrs:{"vs-lg":"3","vs-md":"3","vs-sm":"12","vs-xs":"12"}},[t._v("\n                        Show\n                        "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.tableEntries,expression:"tableEntries"}],staticClass:"vs-select--input",staticStyle:{width:"100px"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.tableEntries=e.target.multiple?s:s[0]}}},[s("option",{attrs:{value:"10"},domProps:{innerHTML:t._s(10)}}),t._v(" "),s("option",{attrs:{value:"25"},domProps:{innerHTML:t._s(25)}}),t._v(" "),s("option",{attrs:{value:"50"},domProps:{innerHTML:t._s(50)}}),t._v(" "),s("option",{attrs:{value:"100"},domProps:{innerHTML:t._s(100)}})]),t._v("\n                        Entries\n                    ")]),t._v(" "),s("vs-col",{attrs:{"vs-lg":"9","vs-md":"9","vs-sm":"12","vs-xs":"12"}},[s("vs-button",{staticStyle:{"margin-top":"-5px"},attrs:{color:"primary",type:"border",icon:"cloud_download"}},[t._v("Export")])],1)],1)],1),t._v(" "),s("template",{slot:"thead"},[s("vs-th",[t._v("Customer ID")]),t._v(" "),s("vs-th",[t._v("Name(English)")]),t._v(" "),s("vs-th",[t._v("Name(Khmer)")]),t._v(" "),s("vs-th",[t._v("Industy / Sector")]),t._v(" "),s("vs-th",[t._v("Tax Duration")]),t._v(" "),s("vs-th",[t._v("Tax ID")]),t._v(" "),s("vs-th",[t._v("TIN # ")]),t._v(" "),s("vs-th",[t._v("Email")]),t._v(" "),"Admin"==t.$store.getters.userType||"Super Admin"==t.$store.getters.userType?s("vs-th",[t._v("Supervisor")]):t._e(),t._v(" "),s("vs-th",[t._v("Officer")]),t._v(" "),"Admin"!=t.$store.getters.userType||"Super Admin"!=t.$store.getters.userType?s("vs-th",[t._v("Uncompleted Taxes")]):t._e(),t._v(" "),"Admin"==t.$store.getters.userType||"Super Admin"!=t.$store.getters.userType?s("vs-th",[t._v("Status")]):t._e(),t._v(" "),s("vs-th",[t._v("Actions")])],1)],2)],1)],1)}),[],!1,null,null,null);e.default=v.exports},24:function(t,e,s){var r=s(73);"string"==typeof r&&(r=[[t.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};s(5)(r,n);r.locals&&(t.exports=r.locals)},72:function(t,e,s){"use strict";var r=s(24);s.n(r).a},73:function(t,e,s){(t.exports=s(4)(!1)).push([t.i,".con-vs-popup .vs-popup {\n  width: 1000px !important;\n}\n",""])}}]);