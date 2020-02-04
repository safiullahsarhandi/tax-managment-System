(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{142:function(t,e,a){"use strict";a.r(e);var s=a(7),i=a.n(s),n=a(1);function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(a,!0).forEach((function(e){d(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var c={inject:["generatePassword"],data:function(){return{tax_id:"",editTaxManagmentModal:!1,officer:[]}},computed:o({},Object(n.d)("taxes/",["tax_team"]),{},Object(n.d)("officers/",["officers"]),{},Object(n.c)("admins/",["findAdmin"]),{loginUser:function(){return this.$store.state.AppActiveUser}}),created:function(){var t;return i.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return this.tax_id=this.$store.state.rootUrl.split("/")[2],this.getOfficers(),self=this,e.next=5,i.a.awrap(this.getTaxTeam(this.tax_id));case 5:t=_.map(self.tax_team,(function(t){if(!_.isUndefined(t.detail))return t.detail.manager_id})),this.officer=_.slice(t,1,t.length);case 7:case"end":return e.stop()}}),null,this)},methods:o({},Object(n.b)({getTaxTeam:"taxes/getTaxTeam",updateTeamMembers:"taxes/updateTeamMembers",getOfficers:"officers/getOfficers"}),{statusUpdate:function(t){var e=this;this.$vs.loading(),axios.post("status-update-tax-member",{id:t}).then((function(t){e.$vs.notify({title:"Updated!...",text:t.data.msg,color:"success",position:"top-right"}),e.$vs.loading.close()}))},updateTeam:function(t){var e=this;this.$validator.validateAll().then((function(t){if(t){var a=new FormData(e.$refs.updateTaxTeam);a.append("tax_id",e.tax_id),a.append("officers",e.officer),e.$vs.loading();var s={fd:a,close:e.$vs.loading.close,notify:e.$vs.notify};e.updateTeamMembers(s).then((function(t){e.editTaxManagmentModal=!1;var a=_.map(e.tax_team,(function(t){if(!_.isUndefined(t.detail))return t.detail.manager_id}));e.officer=_.slice(a,1,a.length)}))}}))}})},l=(a(93),a(2)),v=Object(l.a)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("vx-card",{attrs:{title:"List of Team Members"}},[a("template",{slot:"actions"},["Admin"==t.$store.getters.userType?a("vs-button",{attrs:{type:"border","icon-pack":"feather",icon:"icon-edit"},on:{click:function(e){t.editTaxManagmentModal=!0}}}):t._e()],1),t._v(" "),a("vs-table",{attrs:{search:"",pagination:"","max-items":"6",data:t.tax_team},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.data;return t._l(s,(function(e,s){return a("vs-tr",{key:s},[[e.detail?[a("vs-td",{attrs:{data:e.detail.first_name+" "+e.detail.last_name}},[t._v(t._s(e.detail.first_name)+" "+t._s(e.detail.last_name))]),t._v(" "),a("vs-td",{attrs:{data:e.detail.phone}},[t._v(t._s(e.detail.phone))]),t._v(" "),a("vs-td",{attrs:{data:e.detail.email}},[t._v(t._s(e.detail.email))]),t._v(" "),a("vs-td",{attrs:{data:e.detail.address+" "+e.detail.state+" "+e.detail.city+" "+e.detail.zip_code}},[t._v(t._s(e.detail.address)+" "+t._s(e.detail.state)+" "+t._s(e.detail.city)+" "+t._s(e.detail.zip_code))]),t._v(" "),a("vs-td",{attrs:{data:e.detail.type}},[t._v(t._s(e.detail.type))]),t._v(" "),"Admin"==t.$store.getters.userType?a("vs-td",{attrs:{data:e.detail.status}},[a("vs-switch",{on:{click:function(a){return t.statusUpdate(e.detail.manager_id)}},model:{value:e.detail.status,callback:function(a){t.$set(e.detail,"status",a)},expression:"tr.detail.status"}})],1):t._e()]:[a("vs-td",{attrs:{data:e.first_name+" "+e.last_name}},[t._v(t._s(e.first_name)+" "+t._s(e.last_name))]),t._v(" "),a("vs-td",{attrs:{data:e.phone}},[t._v(t._s(e.phone))]),t._v(" "),a("vs-td",{attrs:{data:e.email}},[t._v(t._s(e.email))]),t._v(" "),a("vs-td",{attrs:{data:e.address+" "+e.state+" "+e.city+" "+e.zip_code}},[t._v(t._s(e.address)+" "+t._s(e.state)+" "+t._s(e.city)+" "+t._s(e.zip_code))]),t._v(" "),a("vs-td",{attrs:{data:e.type}},[t._v(t._s(e.type))]),t._v(" "),"Admin"==t.$store.getters.userType?a("vs-td",[a("vs-switch",{on:{click:function(a){return t.statusUpdate(e.manager_id)}},model:{value:e.status,callback:function(a){t.$set(e,"status",a)},expression:"tr.status"}})],1):t._e()]]],2)}))}}])},[a("template",{slot:"thead"},[a("vs-th",[t._v("Name")]),t._v(" "),a("vs-th",[t._v("Phone #")]),t._v(" "),a("vs-th",[t._v("Email")]),t._v(" "),a("vs-th",[t._v("Address")]),t._v(" "),a("vs-th",[t._v("Designation")]),t._v(" "),"Admin"==t.$store.getters.userType?a("vs-th",[t._v("Status")]):t._e()],1)],2)],2),t._v(" "),a("vs-popup",{attrs:{active:t.editTaxManagmentModal,title:"Update Team"},on:{"update:active":function(e){t.editTaxManagmentModal=e}}},[a("form",{ref:"updateTaxTeam",attrs:{"data-vv-scope":"updateForm"},on:{submit:function(e){return e.preventDefault(),t.updateTeam(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tax_id,expression:"tax_id"}],attrs:{type:"hidden",name:"category_id"},domProps:{value:t.tax_id},on:{input:function(e){e.target.composing||(t.tax_id=e.target.value)}}}),t._v(" "),a("vs-row",[a("vs-col",{attrs:{"vs-lg":"12","vs-md":"12","vs-sm":"12"}},[a("vx-input-group",{staticClass:"mt-2"},[a("vs-select",{staticClass:"selectExample",attrs:{name:"officer[]",placeholder:"Search and select",label:"Officers","label-placeholder":"Officers",multiple:""},model:{value:t.officer,callback:function(e){t.officer=e},expression:"officer"}},[a("vs-select-item",{attrs:{value:"",disabled:!0,text:"Select Officers"}}),t._v(" "),t._l(t.officers,(function(t,e){return a("vs-select-item",{key:e,attrs:{value:t.manager_id,text:t.full_name}})}))],2)],1)],1),t._v(" "),a("vs-col",{attrs:{"vs-lg":"12","vs-md":"12","vs-sm":"12"}},[a("br"),t._v(" "),a("vs-button",{staticClass:"float-right",attrs:{button:"submit",type:"gradient"}},[t._v("Update")])],1)],1)],1)])],1)}),[],!1,null,null,null);e.default=v.exports},36:function(t,e,a){var s=a(94);"string"==typeof s&&(s=[[t.i,s,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(5)(s,i);s.locals&&(t.exports=s.locals)},93:function(t,e,a){"use strict";var s=a(36);a.n(s).a},94:function(t,e,a){(t.exports=a(4)(!1)).push([t.i,".selectExample {\n  margin-top: 10px;\n}\n.con-select {\n  width: 100% !important;\n  clear: both;\n}\n.con-select .vs-select--input {\n  margin-top: 10px !important;\n}\r\n\r\n",""])}}]);