(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{170:function(t,e,s){"use strict";s.r(e);var r=s(1);function a(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,r)}return s}function o(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?a(s,!0).forEach((function(e){n(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):a(s).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function n(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var i={inject:["generatePassword","loginUser"],data:function(){return{viewTaxTeamModal:!1,editCustomerModal:!1,customer_id:"",name_english:"",name_khmer:"",industry:"",tax_card_num:"",tin_no:"",email:"",telephone:"",address:"",street:"",village:"",muncipality:"",district:"",province:"",sangkat:"",group:"",incorporation_date:"",customField:[],taxes:[],tableEntries:10}},computed:o({},Object(r.e)("customers/",["customers"]),{},Object(r.c)("customers/",["findCustomer"])),created:function(){this.getCustomers()},methods:o({},Object(r.b)({getCustomers:"customers/getCustomers",updateStatus:"customers/updateStatus"}),{getOfficer:function(t){return null!=t?t.full_name:"N/A"},getSupervisor:function(t){return null!=t?t.full_name:"N/A"},statusUpdate:function(t){var e=this;this.$vs.loading(),axios.post("status-update-customer",{id:t}).then((function(t){e.$vs.notify({title:"Updated!...",text:t.data.msg,color:"success",position:"top-right"}),e.$vs.loading.close()}))},updateCustomerStatus:function(t,e){this.updateStatus({customer_id:t,status:e,notify:this.$vs.notify})},viewTaxTeam:function(t){var e=this.findCustomer(t);console.log(e),console.log(e.taxes),this.taxes=e.taxes,this.viewTaxTeamModal=!0}})},u=(s(79),s(2)),v=Object(u.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("vx-card",{attrs:{title:"List of Companies"}},[s("template",{slot:"actions"},[s("vs-button",{attrs:{href:{url:"export-customers"},color:"primary",type:"border","icon-pack":"feather",icon:"icon-download"}})],1),t._v(" "),s("vs-table",{attrs:{search:"",pagination:"","max-items":t.tableEntries,data:t.customers},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.data;return t._l(r,(function(e,r){return s("vs-tr",{key:r},[s("vs-td",{attrs:{data:e.id}},[t._v(" "+t._s("C00000"+e.id))]),t._v(" "),s("vs-td",{attrs:{data:e.name_english}},[t._v(t._s(e.name_english))]),t._v(" "),s("vs-td",{attrs:{data:e.name_khmer}},[t._v(t._s(e.name_khmer))]),t._v(" "),s("vs-td",{attrs:{data:e.industry}},[t._v(t._s(e.industry))]),t._v(" "),s("vs-td",{attrs:{data:e.id}},[t._v(t._s(e.tax_duration))]),t._v(" "),s("vs-td",{attrs:{data:e.tax_card_num}},[t._v(t._s(e.tax_card_num))]),t._v(" "),s("vs-td",{attrs:{data:e.tin_no}},[t._v(t._s(e.tin_no))]),t._v(" "),s("vs-td",{attrs:{data:e.email}},[t._v(t._s(e.email))]),t._v(" "),"Admin"==t.$store.getters.userType||"Super Admin"==t.$store.getters.userType?s("vs-td",{attrs:{data:t.getSupervisor(e.supervisor)}},[t._v(t._s(t.getSupervisor(e.supervisor)))]):t._e(),t._v(" "),"Officer"!=t.$store.getters.userType?s("vs-td",{attrs:{data:t.getOfficer(e.officer)}},[t._v(t._s(t.getOfficer(e.officer)))]):t._e(),t._v(" "),"Admin"==t.$store.getters.userType||"Super Admin"!=t.$store.getters.userType?s("vs-td",{attrs:{data:e.status}},[s("vx-input-group",[s("vs-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{placeholder:"Select Customer Status"},on:{input:function(s){return t.updateCustomerStatus(e.customer_id,e.customer_status)}},model:{value:e.customer_status,callback:function(s){t.$set(e,"customer_status",s)},expression:"tr.customer_status"}},[s("vs-select-item",{attrs:{value:"Prospect",text:"Prospect"}}),t._v(" "),s("vs-select-item",{attrs:{value:"Activate",text:"Activate"}}),t._v(" "),s("vs-select-item",{attrs:{value:"Deactivate",text:"Deactivate"}}),t._v(" "),s("vs-select-item",{attrs:{value:"Pending",text:"Pending"}})],1)],1)],1):t._e(),t._v(" "),s("vs-td",["Admin"==t.$store.getters.userType||"Super Admin"!=t.$store.getters.userType?s("vs-button",{attrs:{to:"company-update/"+e.customer_id,size:"small",type:"border","icon-pack":"feather",icon:"icon-edit"}}):t._e(),t._v(" "),s("vs-button",{attrs:{to:"company-detail/"+e.customer_id,size:"small","icon-pack":"feather",icon:"icon-maximize-2",type:"border"}})],1)],1)}))}}])},[s("template",{slot:"header"},[s("vs-row",[s("vs-col",{attrs:{"vs-lg":"3","vs-md":"3","vs-sm":"12","vs-xs":"12"}},[t._v("\n                        Show\n                        "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.tableEntries,expression:"tableEntries"}],staticClass:"vs-select--input",staticStyle:{width:"100px"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.tableEntries=e.target.multiple?s:s[0]}}},[s("option",{attrs:{value:"10"},domProps:{innerHTML:t._s(10)}}),t._v(" "),s("option",{attrs:{value:"25"},domProps:{innerHTML:t._s(25)}}),t._v(" "),s("option",{attrs:{value:"50"},domProps:{innerHTML:t._s(50)}}),t._v(" "),s("option",{attrs:{value:"100"},domProps:{innerHTML:t._s(100)}})]),t._v("\n                        Entries\n                    ")])],1)],1),t._v(" "),s("template",{slot:"thead"},[s("vs-th",{attrs:{"sort-key":"id"}},[t._v("Company ID")]),t._v(" "),s("vs-th",{attrs:{"sort-key":"name_english"}},[t._v("Name(English)")]),t._v(" "),s("vs-th",{attrs:{"sort-key":"name_khmer"}},[t._v("Name(Khmer)")]),t._v(" "),s("vs-th",{attrs:{"sort-key":"industry"}},[t._v("Industy / Sector")]),t._v(" "),s("vs-th",{attrs:{"sort-key":"tax_duration"}},[t._v("Tax Duration")]),t._v(" "),s("vs-th",{attrs:{"sort-key":"tax_card_num"}},[t._v("Tax ID")]),t._v(" "),s("vs-th",{attrs:{"sort-key":"tin_no"}},[t._v("TIN # ")]),t._v(" "),s("vs-th",{attrs:{"sort-key":"email"}},[t._v("Email")]),t._v(" "),"Admin"==t.$store.getters.userType||"Super Admin"==t.$store.getters.userType?s("vs-th",{attrs:{"sort-key":"supervisor.full_name"}},[t._v("Supervisor")]):t._e(),t._v(" "),"Officer"!=t.$store.getters.userType?s("vs-th",[t._v("Officer")]):t._e(),t._v(" "),"Admin"==t.$store.getters.userType||"Super Admin"!=t.$store.getters.userType?s("vs-th",[t._v("Status")]):t._e(),t._v(" "),s("vs-th",[t._v("Actions")])],1)],2)],2)],1)}),[],!1,null,null,null);e.default=v.exports},28:function(t,e,s){var r=s(80);"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};s(5)(r,a);r.locals&&(t.exports=r.locals)},79:function(t,e,s){"use strict";var r=s(28);s.n(r).a},80:function(t,e,s){(t.exports=s(4)(!1)).push([t.i,".con-vs-popup .vs-popup {\n  width: 1000px !important;\n}\n",""])}}]);