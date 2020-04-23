<<<<<<< HEAD
(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{109:function(e,t,a){"use strict";var s=a(36);a.n(s).a},110:function(e,t,a){(e.exports=a(4)(!1)).push([e.i,".selectExample {\n  margin-top: 10px;\n}\n.con-select {\n  width: 100% !important;\n  clear: both;\n}\n.con-select .vs-select--input {\n  margin-top: 10px !important;\n}\r\n\r\n",""])},181:function(e,t,a){"use strict";a.r(t);var s=a(1);function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(a,!0).forEach((function(t){d(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var o={inject:["generatePassword"],data:function(){return{addAdminModal:!1,editAdminModal:!1,first_name:"",last_name:"",email:"",phone:"",address:"",state:"",zip_code:"",city:"",gender:"male",password:"",edit_first_name:"",edit_last_name:"",edit_email:"",edit_phone:"",edit_address:"",edit_state:"",edit_zip_code:"",edit_city:"",edit_gender:"male",edit_password:"",edit_manager_id:"",defaultRole:0,selectedRole:0,supervisor:"",selectedSupervisor:"",rolles:[{value:0,label:"Select Role",selectedText:"Select Role",isSelected:!1},{value:4,label:"Admin",selectedText:"Admin",isSelected:!1},{value:2,label:"Supervisor",selectedText:"Supervisor",isSelected:!1},{value:3,label:"Officer",selectedText:"Officer",isSelected:!1}]}},computed:i({},Object(s.e)("admins/",["admins"]),{},Object(s.c)("admins/",["findAdmin","findSupervisors"]),{},Object(s.e)("supervisors/",["supervisors"])),created:function(){this.getAdmins().then((function(){})),this.getSupervisors()},methods:i({},Object(s.b)({getAdmins:"admins/getAdmins",submit:"admins/addAdmin",update:"admins/updateAdmin",updateStatus:"admins/updateStatus",getSupervisors:"supervisors/getSupervisors"}),{},Object(s.d)({setSupervisors:"supervisors/setSupervisors"}),{reportsTo:function(e){return null!=e?e.full_name:"N/A"},addAdmin:function(e){var t=this,a=this;this.$validator.validateAll("addform").then((function(s){if(s){var r=new FormData(t.$refs.addAdminForm);r.append("gender",t.gender),3==t.defaultRole?r.append("reports_to",t.supervisor):r.append("reports_to",localStorage.getItem("admin")),t.submit(r).then((function(s){"success"==s.data.status?(t.password=t.email=t.first_name=t.last_name=t.zip_code=t.city=t.state=t.address=t.phone="",t.gender="male",t.selectedRole=0,e.target.reset(),t.errors.clear(),t.$validator.reset(),t.addAdminModal=!1,t.getAdmins().then((function(){var e=a.findSupervisors();a.setSupervisors(e)})),t.$vs.notify({color:"success",position:"right-top",text:"New manager added successfully"})):t.$vs.notify({color:"danger",position:"right-top",text:s.data.msg})}))}}))},statusUpdate:function(e){this.$vs.loading();var t={id:e,notify:this.$vs.notify,closeLoader:this.$vs.loading.close};this.updateStatus(t)},editAdmin:function(e){var t=this.findAdmin(e);this.edit_manager_id=t.manager_id,this.edit_first_name=t.first_name,this.edit_last_name=t.last_name,this.edit_email=t.email,this.edit_gender=t.gender,this.edit_zip_code=t.zip_code,this.edit_address=t.address,this.edit_phone=t.phone,this.edit_state=t.state,this.edit_zip_code=t.zip_code,this.edit_city=t.city,"Admin"==t.type&&(this.selectedRole=1),"Supervisor"==t.type&&(this.selectedRole=2),"Officer"==t.type&&(this.selectedRole=3,this.selectedSupervisor=t.reports_to||0),this.editAdminModal=!0},updateAdmin:function(e){var t=this;this.$validator.validateAll("editform").then((function(a){if(a){t.$vs.loading();var s=new FormData(t.$refs.editAdminForm);s.append("gender",t.edit_gender),3==t.selectedRole?s.append("reports_to",t.selectedSupervisor):s.append("reports_to",localStorage.getItem("admin")),t.update(s).then((function(a){"success"==a.data.status&&(t.edit_email=t.edit_first_name=t.edit_last_name=t.edit_zip_code=t.edit_city=t.edit_state=t.edit_address=t.edit_phone="",t.edit_gender="male",e.target.reset(),t.errors.clear(),t.editAdminModal=!1,t.$vs.notify({title:"Updated!...",text:"Admin record updated",color:"success",position:"top-right"}),t.$vs.loading.close())}))}}))},makePassword:function(){this.password=this.generatePassword()}})},n=(a(109),a(2)),l=Object(n.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("vx-card",{attrs:{title:"List of Team Members"}},[a("template",{slot:"actions"}),e._v(" "),a("vs-table",{attrs:{search:"",pagination:"","max-items":"6",data:e.admins},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.data;return e._l(s,(function(t,s){return a("vs-tr",{key:s},[a("vs-td",{attrs:{data:t.first_name+" "+t.last_name}},[e._v(e._s(t.first_name)+" "+e._s(t.last_name))]),e._v(" "),a("vs-td",{attrs:{data:t.phone}},[e._v(e._s(t.phone))]),e._v(" "),a("vs-td",{attrs:{data:t.email}},[e._v(e._s(t.email))]),e._v(" "),a("vs-td",{attrs:{data:4==t.type?"Sub Admin":2==t.type?"Supervisor":"Officer"}},[e._v(e._s(t.type))]),e._v(" "),a("vs-td",[a("vs-button",{attrs:{size:"small",type:"border",to:"/member-detail/"+t.manager_id,"icon-pack":"feather",icon:"icon-maximize-2"}})],1)],1)}))}}])},[a("template",{slot:"thead"},[a("vs-th",[e._v("Name")]),e._v(" "),a("vs-th",[e._v("Phone #")]),e._v(" "),a("vs-th",[e._v("Email")]),e._v(" "),a("vs-th",[e._v("Role")]),e._v(" "),a("vs-th",[e._v("Preview")])],1)],2)],2),e._v(" "),a("vs-popup",{attrs:{active:e.addAdminModal,title:"Add New Member"},on:{"update:active":function(t){e.addAdminModal=t}}},[a("form",{ref:"addAdminForm",attrs:{"data-vv-scope":"addform"},on:{submit:function(t){return t.preventDefault(),e.addAdmin(t)}}},[a("vs-row",[a("vs-col",{attrs:{"vs-lg":"6","vs-md":"6","vs-sm":"12"}},[a("vx-input-group",[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"first_name","label-placeholder":"First Name","data-vv-scope":"addform"},model:{value:e.first_name,callback:function(t){e.first_name=t},expression:"first_name"}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("addform.first_name"),expression:"errors.has('addform.first_name')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("addform.first_name")))])],1),e._v(" "),a("vx-input-group",[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"last_name","label-placeholder":"Last Name","data-vv-scope":"addform"},model:{value:e.last_name,callback:function(t){e.last_name=t},expression:"last_name"}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("addform.last_name"),expression:"errors.has('addform.last_name')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("addform.last_name")))])],1),e._v(" "),a("vx-input-group",{staticClass:"mt-2"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"phone","label-placeholder":"Phone","data-vv-scope":"addform"},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("addform.phone"),expression:"errors.has('addform.phone')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("addform.phone")))])],1),e._v(" "),a("vx-input-group",{staticClass:"mt-2"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"email","label-placeholder":"Email","data-vv-scope":"addform"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("addform.email"),expression:"errors.has('addform.email')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("addform.email")))])],1),e._v(" "),a("vx-input-group",[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"password","label-placeholder":"Password","data-vv-scope":"addform"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),a("template",{slot:"append"},[a("div",{staticClass:"append-text btn-addon mt-4"},[a("vs-button",{attrs:{color:"primary",button:"button"},on:{click:function(t){return e.makePassword()}}},[e._v("Generate")])],1)])],2),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("addform.password"),expression:"errors.has('addform.password')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("addform.password")))]),e._v(" "),a("vx-input-group",[a("vs-select",{directives:[{name:"validate",rawName:"v-validate",value:"required|excluded:0",expression:"'required|excluded:0'"}],staticClass:"selectExample",attrs:{name:"roll","data-vv-scope":"addform"},model:{value:e.defaultRole,callback:function(t){e.defaultRole=t},expression:"defaultRole"}},e._l(e.rolles,(function(t,s){return a("vs-select-item",{key:s,attrs:{disabled:1==!t.value&&"Admin"==e.$store.getters.userType,"is-selected":t.isSelected,value:t.value,text:t.isSelected?t.selectedText:t.label},on:{"update:isSelected":function(a){return e.$set(t,"isSelected",a)},"update:is-selected":function(a){return e.$set(t,"isSelected",a)}}})})),1),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("addform.roll"),expression:"errors.has('addform.roll')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("addform.roll")))])],1),e._v(" "),3==e.defaultRole?a("vx-input-group",{staticClass:"mt-2"},[a("vs-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"selectExample",attrs:{name:"supervisor",label:"Supervisor"},model:{value:e.supervisor,callback:function(t){e.supervisor=t},expression:"supervisor"}},[a("vs-select-item",{attrs:{value:"",text:"Select Supervisor"}}),e._v(" "),e._l(e.supervisors,(function(e,t){return a("vs-select-item",{key:t,attrs:{value:e.manager_id,text:e.first_name+" "+e.last_name}})}))],2),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("addform.supervisor"),expression:"errors.has('addform.supervisor')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("supervisor")))])],1):e._e()],1),e._v(" "),a("vs-col",{attrs:{"vs-lg":"6","vs-md":"12","vs-sm":"12"}},[a("vx-input-group",{staticClass:"mt-6"},[a("vs-radio",{attrs:{"vs-name":"gender","vs-value":"male"},model:{value:e.gender,callback:function(t){e.gender=t},expression:"gender"}},[e._v("Male")]),e._v(" "),a("vs-radio",{attrs:{"vs-name":"gender","vs-value":"female"},model:{value:e.gender,callback:function(t){e.gender=t},expression:"gender"}},[e._v("Female")])],1),e._v(" "),a("vx-input-group",{staticClass:"mt-2"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"address","label-placeholder":"Address","data-vv-scope":"addform"},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("addform.address"),expression:"errors.has('addform.address')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("addform.address")))])],1),e._v(" "),a("vx-input-group",{staticClass:"mt-2"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"state","label-placeholder":"State","data-vv-scope":"addform"},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("addform.state"),expression:"errors.has('addform.state')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("addform.state")))])],1),e._v(" "),a("vx-input-group",{staticClass:"mt-2"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"city","label-placeholder":"City","data-vv-scope":"addform"},model:{value:e.city,callback:function(t){e.city=t},expression:"city"}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("addform.city"),expression:"errors.has('addform.city')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("addform.city")))])],1),e._v(" "),a("vx-input-group",{staticClass:"mt-2"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"zip_code","label-placeholder":"Zip Code","data-vv-scope":"addform"},model:{value:e.zip_code,callback:function(t){e.zip_code=t},expression:"zip_code"}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("addform.zip_code"),expression:"errors.has('addform.zip_code')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("addform.zip_code")))])],1)],1),e._v(" "),a("vs-col",{attrs:{"vs-lg":"12","vs-md":"12","vs-sm":"12"}},[a("br"),e._v(" "),a("vs-button",{staticClass:"float-right",attrs:{button:"submit",type:"gradient"}},[e._v("Add Member")])],1)],1)],1)]),e._v(" "),a("vs-popup",{attrs:{active:e.editAdminModal,title:"Update Member"},on:{"update:active":function(t){e.editAdminModal=t}}},[a("form",{ref:"editAdminForm",attrs:{autocomplete:"off","data-vv-scope":"editform"},on:{submit:function(t){return t.preventDefault(),e.updateAdmin(t)}}},[a("vs-row",[a("vs-col",{attrs:{"vs-lg":"6","vs-md":"6","vs-sm":"12"}},[a("vx-input-group",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.edit_manager_id,expression:"edit_manager_id"}],attrs:{type:"hidden",name:"id","data-vv-scope":"editform"},domProps:{value:e.edit_manager_id},on:{input:function(t){t.target.composing||(e.edit_manager_id=t.target.value)}}}),e._v(" "),a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"first_name","label-placeholder":"First Name","data-vv-scope":"editform"},model:{value:e.edit_first_name,callback:function(t){e.edit_first_name=t},expression:"edit_first_name"}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("editform.first_name"),expression:"errors.has('editform.first_name')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("editform.first_name")))])],1),e._v(" "),a("vx-input-group",[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"last_name","label-placeholder":"Last Name","data-vv-scope":"editform"},model:{value:e.edit_last_name,callback:function(t){e.edit_last_name=t},expression:"edit_last_name"}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("editform.last_name"),expression:"errors.has('editform.last_name')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("editform.last_name")))])],1),e._v(" "),a("vx-input-group",{staticClass:"mt-2"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"phone","label-placeholder":"Phone","data-vv-scope":"editform"},model:{value:e.edit_phone,callback:function(t){e.edit_phone=t},expression:"edit_phone"}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("editform.phone"),expression:"errors.has('editform.phone')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("editform.phone")))])],1),e._v(" "),a("vx-input-group",{staticClass:"mt-2"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{readonly:"",name:"email","label-placeholder":"Email","ata-vv-scope":"editform","data-vv-scope":"editform"},model:{value:e.edit_email,callback:function(t){e.edit_email=t},expression:"edit_email"}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("editform.email"),expression:"errors.has('editform.email')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("editform.email")))])],1),e._v(" "),a("vx-input-group",{staticClass:"mt-2"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"address","label-placeholder":"Address","data-vv-scope":"editform"},model:{value:e.edit_address,callback:function(t){e.edit_address=t},expression:"edit_address"}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("editform.address"),expression:"errors.has('editform.address')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("editform.address")))])],1)],1),e._v(" "),a("vs-col",{attrs:{"vs-lg":"6","vs-md":"12","vs-sm":"12"}},[a("vs-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"selectExample mt-2",attrs:{name:"role"},model:{value:e.selectedRole,callback:function(t){e.selectedRole=t},expression:"selectedRole"}},e._l(e.rolles,(function(t,s){return a("vs-select-item",{key:s,attrs:{"is-selected":t.isSelected,value:t.value,text:t.isSelected?t.selectedText:t.label},on:{"update:isSelected":function(a){return e.$set(t,"isSelected",a)},"update:is-selected":function(a){return e.$set(t,"isSelected",a)}}})})),1),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("editform.role"),expression:"errors.has('editform.role')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("editform.role")))]),e._v(" "),3==e.selectedRole?a("vx-input-group",{staticClass:"mt-2"},[a("vs-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"selectExample",attrs:{name:"supervisor",label:"Supervisor"},model:{value:e.selectedSupervisor,callback:function(t){e.selectedSupervisor=t},expression:"selectedSupervisor"}},[a("vs-select-item",{attrs:{value:"",text:"Select Supervisor"}}),e._v(" "),e._l(e.supervisors,(function(e,t){return a("vs-select-item",{key:t,attrs:{value:e.manager_id,text:e.first_name+" "+e.last_name}})}))],2),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("editform.supervisor"),expression:"errors.has('editform.supervisor')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("editform.supervisor")))])],1):e._e(),e._v(" "),a("vx-input-group",{staticClass:"mt-6"},[a("vs-radio",{attrs:{name:"edit_gender","vs-value":"male"},model:{value:e.edit_gender,callback:function(t){e.edit_gender=t},expression:"edit_gender"}},[e._v("Male")]),e._v(" "),a("vs-radio",{attrs:{name:"edit_gender","vs-value":"female"},model:{value:e.edit_gender,callback:function(t){e.edit_gender=t},expression:"edit_gender"}},[e._v("Female")])],1),e._v(" "),a("vx-input-group",{staticClass:"mt-5"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"state","label-placeholder":"State","data-vv-scope":"editform"},model:{value:e.edit_state,callback:function(t){e.edit_state=t},expression:"edit_state"}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("editform.state"),expression:"errors.has('editform.state')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("editform.state")))])],1),e._v(" "),a("vx-input-group",{staticClass:"mt-2"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"city","label-placeholder":"City","data-vv-scope":"editform"},model:{value:e.edit_city,callback:function(t){e.edit_city=t},expression:"edit_city"}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("editform.city"),expression:"errors.has('editform.city')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("editform.city")))])],1),e._v(" "),a("vx-input-group",{staticClass:"mt-2"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"zip_code","label-placeholder":"Zip Code","data-vv-scope":"editform"},model:{value:e.edit_zip_code,callback:function(t){e.edit_zip_code=t},expression:"edit_zip_code"}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("editform.zip_code"),expression:"errors.has('editform.zip_code')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("editform.zip_code")))])],1)],1),e._v(" "),a("vs-col",{attrs:{"vs-lg":"12","vs-md":"12","vs-sm":"12"}},[a("br"),e._v(" "),a("vs-button",{staticClass:"float-right",attrs:{button:"submit",type:"gradient"}},[e._v("Update Member")])],1)],1)],1)])],1)}),[],!1,null,null,null);t.default=l.exports},36:function(e,t,a){var s=a(110);"string"==typeof s&&(s=[[e.i,s,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(5)(s,r);s.locals&&(e.exports=s.locals)}}]);
=======
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Payrolls/Payrolls.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Payrolls/Payrolls.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  inject: ['generatePassword'],
  data: function data() {
    return {
      // switch1: true,
      editCustomerModal: false,
      customer_id: '',
      name_english: '',
      name_khmer: '',
      industry: '',
      tax_card_num: '',
      tin_no: '',
      email: '',
      telephone: '',
      address: '',
      street: '',
      village: '',
      muncipality: '',
      district: '',
      province: '',
      sangkat: '',
      group: '',
      incorporation_date: '',
      customField: [],
      tax_id: '',
      is_admin: false,
      is_supervisor: false,
      is_officer: false,
      selected_status: 1,
      statusList: [{
        text: 'Pending',
        value: 0
      }, {
        text: 'Approve',
        value: 1
      }, {
        text: 'Un approve',
        value: 2
      }]
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('payrolls/', ['payrolls'])),
  created: function created() {
    this.tax_id = this.$store.state.rootUrl.split('/')[2];
    this.getPayrolls(this.tax_id);
    this.customer_id = localStorage.getItem('customer');

    if (this.$store.state.AppActiveUser.type == 'Admin' || this.$store.state.AppActiveUser.type == 'Super Admin') {
      this.is_admin = true;
    }

    if (this.$store.state.AppActiveUser.type == 'Supervisor') {
      this.is_supervisor = true;
    }

    if (this.$store.state.AppActiveUser.type == 'Officer') {
      this.is_officer = true;
    }
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    getPayrolls: 'payrolls/getPayrolls',
    statusChange: 'taxes/statusUpdateSPP',
    statusChangeManagment: 'taxes/statusChangeManagment'
  }), {
    changeManagementStatus: function changeManagementStatus(status, id, by) {
      var data = {
        id: id,
        status: status,
        by: by,
        tax_id: this.tax_id,
        notify: this.$vs.notify,
        tax_type: 'payroll'
      };
      this.statusChangeManagment(data).then(function (res) {});
    },
    statusUpdate: function statusUpdate(id, status) {
      var _this = this;

      var data = {
        id: id,
        tax_id: this.tax_id,
        notify: this.$vs.notify,
        type: 'payroll'
      };
      this.statusChange(data).then(function (res) {
        if (res.data.status != true) {
          var index = _this.payrolls.findIndex(function (o) {
            return o.payroll_id == id;
          });

          if (res.data.response == 'undefined') {
            _this.payrolls[index].officer_confirmed = status;
          } else {
            _this.payrolls[index].officer_confirmed = res.data.response;
          }
        }
      });
    },
    deleteRecord: function deleteRecord(obj) {
      var _this2 = this;

      this.$vs.loading();
      var fd = new FormData();
      fd.append('id', obj.payroll_id);
      fd.append('customer_id', obj.employee_id);
      fd.append('type', 'Payroll');
      axios.post('delete-spp', fd).then(function (res) {
        if (res.data.status == true) {
          _this2.$vs.notify({
            title: "Success",
            text: res.data.msg,
            color: 'success',
            position: 'top-right'
          });

          _this2.$vs.loading.close();

          _this2.getPayrolls(_this2.tax_id);
        }
      });
    },
    addMoreFeild: function addMoreFeild() {
      this.customField.push({
        name: 'additional_field[]',
        value: '',
        type: 'text'
      });
    },
    updateCustomer: function updateCustomer(e) {
      var _this3 = this;

      this.$validator.validateAll('editform').then(function (result) {
        if (result) {
          _this3.$vs.loading();

          var fd = new FormData(_this3.$refs.editCustomerForm);

          _this3.update(fd).then(function (res) {
            if (res.data.status == 'success') {
              e.target.reset();

              _this3.errors.clear();

              _this3.editCustomerModal = false;

              _this3.$vs.notify({
                title: 'Success',
                text: 'Customer Updated Successfully',
                color: 'success',
                position: 'top-right'
              });

              _this3.$vs.loading.close();

              _this3.getCustomers();
            }
          });
        }
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Payrolls/Payrolls.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Payrolls/Payrolls.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".con-vs-popup .vs-popup {\n  width: 1000px !important;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Payrolls/Payrolls.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Payrolls/Payrolls.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Payrolls.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Payrolls/Payrolls.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Payrolls/Payrolls.vue?vue&type=template&id=3b876d4a&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Payrolls/Payrolls.vue?vue&type=template&id=3b876d4a& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "vx-card",
        { attrs: { title: "List of Payrolls" } },
        [
          _c(
            "template",
            { slot: "actions" },
            [
              _c("vs-button", {
                attrs: {
                  type: "border",
                  href: {
                    url: "export-payroll/" + _vm.customer_id + "/" + _vm.tax_id
                  },
                  "icon-pack": "feather",
                  icon: "icon-download"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "vs-table",
            {
              attrs: {
                search: "",
                pagination: "",
                "max-items": "6",
                data: _vm.payrolls
              },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(ref) {
                    var data = ref.data
                    return _vm._l(data, function(tr, index) {
                      return _c(
                        "vs-tr",
                        { key: index },
                        [
                          _c(
                            "vs-td",
                            { attrs: { data: tr.employee.name_english } },
                            [_vm._v(_vm._s(tr.employee.name_english))]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            { attrs: { data: tr.employee.employee_num } },
                            [_vm._v(_vm._s(tr.employee.employee_num))]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            { attrs: { data: tr.employee.nssf_num } },
                            [_vm._v(_vm._s(tr.employee.nssf_num))]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            { attrs: { data: tr.employee.contract_type } },
                            [_vm._v(_vm._s(tr.employee.contract_type))]
                          ),
                          _vm._v(" "),
                          _c("vs-td", { attrs: { data: tr.basic_salary } }, [
                            _vm._v(_vm._s(tr.basic_salary))
                          ]),
                          _vm._v(" "),
                          _c("vs-td", { attrs: { data: tr.bonus } }, [
                            _vm._v(_vm._s(tr.bonus))
                          ]),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.is_officer == true,
                                  expression: "is_officer == true"
                                }
                              ],
                              attrs: { data: tr.officer_confirmed }
                            },
                            [
                              _c("vs-switch", {
                                on: {
                                  click: function($event) {
                                    return _vm.statusUpdate(
                                      tr.payroll_id,
                                      tr.officer_confirmed
                                    )
                                  }
                                },
                                model: {
                                  value: tr.officer_confirmed,
                                  callback: function($$v) {
                                    _vm.$set(tr, "officer_confirmed", $$v)
                                  },
                                  expression: "tr.officer_confirmed"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.is_admin == true,
                                  expression: "is_admin == true"
                                }
                              ],
                              attrs: { data: tr.management_confirmed }
                            },
                            [
                              _c(
                                "vs-select",
                                {
                                  attrs: { width: "120px" },
                                  on: {
                                    input: function($event) {
                                      return _vm.changeManagementStatus(
                                        tr.management_confirmed,
                                        tr.id,
                                        "admin"
                                      )
                                    }
                                  },
                                  model: {
                                    value: tr.management_confirmed,
                                    callback: function($$v) {
                                      _vm.$set(tr, "management_confirmed", $$v)
                                    },
                                    expression: "tr.management_confirmed"
                                  }
                                },
                                _vm._l(_vm.statusList, function(item, index) {
                                  return _c("vs-select-item", {
                                    key: index,
                                    attrs: {
                                      value: item.value,
                                      text: item.text
                                    }
                                  })
                                }),
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.is_supervisor == true,
                                  expression: "is_supervisor == true"
                                }
                              ],
                              attrs: { data: tr.supervisor_confirmed }
                            },
                            [
                              _c(
                                "vs-select",
                                {
                                  attrs: { width: "120px" },
                                  on: {
                                    input: function($event) {
                                      return _vm.changeManagementStatus(
                                        tr.supervisor_confirmed,
                                        tr.id,
                                        "supervisor"
                                      )
                                    }
                                  },
                                  model: {
                                    value: tr.supervisor_confirmed,
                                    callback: function($$v) {
                                      _vm.$set(tr, "supervisor_confirmed", $$v)
                                    },
                                    expression: "tr.supervisor_confirmed"
                                  }
                                },
                                _vm._l(_vm.statusList, function(item, index) {
                                  return _c("vs-select-item", {
                                    key: index,
                                    attrs: {
                                      value: item.value,
                                      text: item.text
                                    }
                                  })
                                }),
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            [
                              _c("vs-button", {
                                attrs: {
                                  to: "edit-payroll/" + tr.payroll_id,
                                  size: "small",
                                  type: "border",
                                  "icon-pack": "feather",
                                  icon: "icon-edit"
                                }
                              }),
                              _vm._v(" "),
                              _c("vs-button", {
                                attrs: {
                                  to: "payroll-detail/" + tr.payroll_id,
                                  size: "small",
                                  "icon-pack": "feather",
                                  icon: "icon-maximize-2",
                                  type: "border"
                                }
                              }),
                              _vm._v(" "),
                              _c("vs-button", {
                                attrs: {
                                  size: "small",
                                  type: "border",
                                  "icon-pack": "feather",
                                  icon: "icon-trash-2"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.deleteRecord(data[index])
                                  }
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    })
                  }
                }
              ])
            },
            [
              _c(
                "template",
                { slot: "thead" },
                [
                  _c("vs-th", [_vm._v("Employee Name")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Employee No.")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("NSSF No.")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Contract Type")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Basic Salary")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Bonus")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Status")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Actions")])
                ],
                1
              )
            ],
            2
          )
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/pages/Payrolls/Payrolls.vue":
/*!************************************************************!*\
  !*** ./resources/js/src/views/pages/Payrolls/Payrolls.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Payrolls_vue_vue_type_template_id_3b876d4a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Payrolls.vue?vue&type=template&id=3b876d4a& */ "./resources/js/src/views/pages/Payrolls/Payrolls.vue?vue&type=template&id=3b876d4a&");
/* harmony import */ var _Payrolls_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Payrolls.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Payrolls/Payrolls.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Payrolls_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Payrolls.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/pages/Payrolls/Payrolls.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Payrolls_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Payrolls_vue_vue_type_template_id_3b876d4a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Payrolls_vue_vue_type_template_id_3b876d4a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/Payrolls/Payrolls.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/Payrolls/Payrolls.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Payrolls/Payrolls.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Payrolls_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Payrolls.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Payrolls/Payrolls.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Payrolls_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Payrolls/Payrolls.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Payrolls/Payrolls.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Payrolls_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Payrolls.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Payrolls/Payrolls.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Payrolls_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Payrolls_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Payrolls_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Payrolls_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Payrolls_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/Payrolls/Payrolls.vue?vue&type=template&id=3b876d4a&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Payrolls/Payrolls.vue?vue&type=template&id=3b876d4a& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Payrolls_vue_vue_type_template_id_3b876d4a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Payrolls.vue?vue&type=template&id=3b876d4a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Payrolls/Payrolls.vue?vue&type=template&id=3b876d4a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Payrolls_vue_vue_type_template_id_3b876d4a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Payrolls_vue_vue_type_template_id_3b876d4a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
>>>>>>> 50cabf9877324c9d5bb57a99d5b6a1ae3c7f9feb
