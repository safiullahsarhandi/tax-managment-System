(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{128:function(t,e,s){"use strict";s.r(e);var a=s(1);function r(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function i(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?r(s,!0).forEach((function(e){n(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):r(s).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function n(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var o={inject:["generatePassword"],data:function(){return{editCustomerModal:!1,customer_id:"",name_english:"",name_khmer:"",industry:"",tax_card_num:"",tin_no:"",email:"",telephone:"",address:"",street:"",village:"",muncipality:"",district:"",province:"",sangkat:"",group:"",incorporation_date:"",customField:[],tax_id:"",is_admin:!1,is_supervisor:!1,is_officer:!1,selected_status:1,statusList:[{text:"Pending",value:0},{text:"Approve",value:1},{text:"Un approve",value:2}]}},computed:i({},Object(a.d)("payrolls/",["payrolls"])),created:function(){this.tax_id=this.$store.state.rootUrl.split("/")[2],this.getPayrolls(this.tax_id),"Admin"!=this.$store.state.AppActiveUser.type&&"Super Admin"!=this.$store.state.AppActiveUser.type||(this.is_admin=!0),"Supervisor"==this.$store.state.AppActiveUser.type&&(this.is_supervisor=!0),"Officer"==this.$store.state.AppActiveUser.type&&(this.is_officer=!0)},methods:i({},Object(a.b)({getPayrolls:"payrolls/getPayrolls",statusChange:"taxes/statusUpdateSPP",statusChangeManagment:"taxes/statusChangeManagment"}),{changeManagementStatus:function(t,e,s){var a={id:e,status:t,by:s,tax_id:this.tax_id,notify:this.$vs.notify,tax_type:"payroll"};this.statusChangeManagment(a).then((function(t){}))},statusUpdate:function(t,e){var s=this,a={id:t,tax_id:this.tax_id,notify:this.$vs.notify,type:"payroll"};this.statusChange(a).then((function(a){if(1!=a.data.status){var r=s.payrolls.findIndex((function(e){return e.payroll_id==t}));"undefined"==a.data.response?s.payrolls[r].officer_confirmed=e:s.payrolls[r].officer_confirmed=a.data.response}}))},addMoreFeild:function(){this.customField.push({name:"additional_field[]",value:"",type:"text"})},updateCustomer:function(t){var e=this;this.$validator.validateAll("editform").then((function(s){if(s){e.$vs.loading();var a=new FormData(e.$refs.editCustomerForm);e.update(a).then((function(s){"success"==s.data.status&&(t.target.reset(),e.errors.clear(),e.editCustomerModal=!1,e.$vs.notify({title:"Success",text:"Customer Updated Successfully",color:"success",position:"top-right"}),e.$vs.loading.close(),e.getCustomers())}))}}))}})},c=(s(92),s(2)),l=Object(c.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("vx-card",{attrs:{title:"List of Payrolls"}},[s("vs-table",{attrs:{search:"",pagination:"","max-items":"6",data:t.payrolls},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.data;return t._l(a,(function(e,a){return s("vs-tr",{key:a},[s("vs-td",{attrs:{data:e.employee.name_english}},[t._v(t._s(e.employee.name_english))]),t._v(" "),s("vs-td",{attrs:{data:e.employee.employee_num}},[t._v(t._s(e.employee.employee_num))]),t._v(" "),s("vs-td",{attrs:{data:e.employee.nssf_num}},[t._v(t._s(e.employee.nssf_num))]),t._v(" "),s("vs-td",{attrs:{data:e.employee.contract_type}},[t._v(t._s(e.employee.contract_type))]),t._v(" "),s("vs-td",{attrs:{data:e.basic_salary}},[t._v(t._s(e.basic_salary))]),t._v(" "),s("vs-td",{attrs:{data:e.bonus}},[t._v(t._s(e.bonus))]),t._v(" "),s("vs-td",{directives:[{name:"show",rawName:"v-show",value:1==t.is_officer,expression:"is_officer == true"}],attrs:{data:e.officer_confirmed}},[s("vs-switch",{on:{click:function(s){return t.statusUpdate(e.payroll_id,e.officer_confirmed)}},model:{value:e.officer_confirmed,callback:function(s){t.$set(e,"officer_confirmed",s)},expression:"tr.officer_confirmed"}})],1),t._v(" "),s("vs-td",{directives:[{name:"show",rawName:"v-show",value:1==t.is_admin,expression:"is_admin == true"}],attrs:{data:e.management_confirmed}},[s("vs-select",{attrs:{width:"120px"},on:{input:function(s){return t.changeManagementStatus(e.management_confirmed,e.id,"admin")}},model:{value:e.management_confirmed,callback:function(s){t.$set(e,"management_confirmed",s)},expression:"tr.management_confirmed"}},t._l(t.statusList,(function(t,e){return s("vs-select-item",{key:e,attrs:{value:t.value,text:t.text}})})),1)],1),t._v(" "),s("vs-td",{directives:[{name:"show",rawName:"v-show",value:1==t.is_supervisor,expression:"is_supervisor == true"}],attrs:{data:e.supervisor_confirmed}},[s("vs-select",{attrs:{width:"120px"},on:{input:function(s){return t.changeManagementStatus(e.supervisor_confirmed,e.id,"supervisor")}},model:{value:e.supervisor_confirmed,callback:function(s){t.$set(e,"supervisor_confirmed",s)},expression:"tr.supervisor_confirmed"}},t._l(t.statusList,(function(t,e){return s("vs-select-item",{key:e,attrs:{value:t.value,text:t.text}})})),1)],1),t._v(" "),s("vs-td",[s("vs-button",{attrs:{to:"edit-payroll/"+e.payroll_id,size:"small",type:"border","icon-pack":"feather",icon:"icon-edit"}}),t._v(" "),s("vs-button",{attrs:{to:"payroll-detail/"+e.payroll_id,size:"small","icon-pack":"feather",icon:"icon-maximize-2",type:"border"}})],1)],1)}))}}])},[s("template",{slot:"header"},[s("vs-button",{attrs:{color:"primary",type:"border",icon:"cloud_download"}},[t._v("Export")])],1),t._v(" "),s("template",{slot:"thead"},[s("vs-th",[t._v("Employee Name")]),t._v(" "),s("vs-th",[t._v("Employee No.")]),t._v(" "),s("vs-th",[t._v("NSSF No.")]),t._v(" "),s("vs-th",[t._v("Contract Type")]),t._v(" "),s("vs-th",[t._v("Basic Salary")]),t._v(" "),s("vs-th",[t._v("Bonus")]),t._v(" "),s("vs-th",[t._v("Status")]),t._v(" "),s("vs-th",[t._v("Actions")])],1)],2)],1)],1)}),[],!1,null,null,null);e.default=l.exports},34:function(t,e,s){var a=s(93);"string"==typeof a&&(a=[[t.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};s(5)(a,r);a.locals&&(t.exports=a.locals)},92:function(t,e,s){"use strict";var a=s(34);s.n(a).a},93:function(t,e,s){(t.exports=s(4)(!1)).push([t.i,".con-vs-popup .vs-popup {\n  width: 1000px !important;\n}\n\n",""])}}]);