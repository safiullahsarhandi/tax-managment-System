(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{133:function(e,t,r){"use strict";r.r(t);var s=r(1);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(r,!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var o={data:function(){return{addTaxManagmentModal:!1,editTaxManagmentModal:!1,title:"",description:"",type:"Monthly",duration:"",supervisor:"",officer:[],default_selected_officer:"",default_selected_supervisor:""}},computed:i({},Object(s.d)("supervisors/",["supervisors"]),{},Object(s.d)("officers/",["officers"])),created:function(){this.getSupervisors(),this.getOfficers()},methods:i({},Object(s.b)({getSupervisors:"supervisors/getSupervisors",getOfficers:"officers/getOfficers"}),{check:function(){this.addTaxManagmentModal=!0}})},l=(r(66),r(2)),c=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("vx-card",{attrs:{title:"List of Taxes",subtitle:"The List of Taxes contains currently assigned taxes of customer Or those which are delivered succesfully"}},[r("template",{slot:"actions"},[r("vs-button",{attrs:{type:"border","icon-pack":"feather",icon:"icon-plus"},on:{click:function(t){return e.check()}}})],1),e._v(" "),r("vs-table",{attrs:{search:"",pagination:"",data:[]},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.data;return e._l(s,(function(t,s){return r("vs-tr",{key:s},[r("vs-td",[e._v("Title")]),e._v(" "),r("vs-td",[e._v("Description")]),e._v(" "),r("vs-td",[e._v("Company")]),e._v(" "),r("vs-td",[e._v("Supervisor")]),e._v(" "),r("vs-td",[e._v("No. of Officers")]),e._v(" "),r("vs-td",[e._v("Status")]),e._v(" "),r("vs-td",[e._v("Actions")])],1)}))}}])},[r("template",{slot:"thead"},[r("vs-th",[e._v("Title")]),e._v(" "),r("vs-th",[e._v("Description")]),e._v(" "),r("vs-th",[e._v("Company")]),e._v(" "),r("vs-th",[e._v("Supervisor")]),e._v(" "),r("vs-th",[e._v("No. of Officers")]),e._v(" "),r("vs-th",[e._v("Status")]),e._v(" "),r("vs-th",[e._v("Actions")])],1)],2)],2),e._v(" "),r("vs-popup",{attrs:{active:e.addTaxManagmentModal,title:"Add Tax Managment"},on:{"update:active":function(t){e.addTaxManagmentModal=t}}},[r("form",{ref:"addTaxManagmentForm",attrs:{"data-vv-scope":"addform"},on:{submit:function(t){return t.preventDefault(),e.addTaxManagment(t)}}},[r("vs-row",[r("vs-col",{attrs:{"vs-lg":"6","vs-md":"6","vs-sm":"12"}},[r("vx-input-group",[r("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"title","label-placeholder":"Title","data-vv-scope":"addform"},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}}),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("addform.title"),expression:"errors.has('addform.title')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("addform.title")))])],1),e._v(" "),r("vx-input-group",[r("br"),e._v(" "),r("vs-textarea",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"description",counter:20,label:"Description","data-vv-scope":"addform"},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}}),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("addform.description"),expression:"errors.has('addform.description')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("addform.description")))])],1),e._v(" "),r("vx-input-group",{staticClass:"mt-2"},[r("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"duration","label-placeholder":"Duration","data-vv-scope":"addform"},model:{value:e.duration,callback:function(t){e.duration=t},expression:"duration"}}),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("addform.duration"),expression:"errors.has('addform.duration')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("addform.duration")))])],1),e._v(" "),r("br"),e._v(" "),r("vx-input-group",{staticClass:"mt-2"},[r("label",[e._v("Tax Period")]),r("br"),r("br"),e._v(" "),r("vs-radio",{attrs:{name:"type","vs-value":"Monthly"},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},[e._v("Monthly")]),e._v(" "),r("vs-radio",{attrs:{name:"type","vs-value":"Yearly"},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},[e._v("Yearly")])],1)],1),e._v(" "),r("vs-col",{attrs:{"vs-lg":"6","vs-md":"12","vs-sm":"12"}},[r("vx-input-group",{staticClass:"mt-2"},[r("vs-select",{staticClass:"selectExample",attrs:{label:"Figuras"},model:{value:e.supervisor,callback:function(t){e.supervisor=t},expression:"supervisor"}},[r("vs-select-item",{attrs:{value:"",text:"Select Supervisor"}}),e._v(" "),e._l(e.supervisors,(function(e,t){return r("vs-select-item",{key:t,attrs:{value:e.manager_id,text:e.first_name+" "+e.last_name}})}))],2)],1),e._v(" "),r("vx-input-group",{staticClass:"mt-2"},[r("vs-select",{staticClass:"selectExample",attrs:{placeholder:"Search and select",label:"Officers","label-placeholder":"Officers",multiple:""},model:{value:e.officer,callback:function(t){e.officer=t},expression:"officer"}},[r("vs-select-item",{attrs:{value:"",disabled:!0,text:"Select Officers"}}),e._v(" "),e._l(e.officers,(function(e,t){return r("vs-select-item",{key:t,attrs:{value:e.manager_id,text:e.first_name+" "+e.last_name}})}))],2)],1)],1),e._v(" "),r("vs-col",{attrs:{"vs-lg":"12","vs-md":"12","vs-sm":"12"}},[r("br"),e._v(" "),r("vs-button",{staticClass:"float-right",attrs:{button:"submit",type:"gradient"}},[e._v("Add Tax Managment")])],1)],1)],1)])],1)}),[],!1,null,null,null);t.default=c.exports},24:function(e,t,r){var s=r(67);"string"==typeof s&&(s=[[e.i,s,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};r(5)(s,a);s.locals&&(e.exports=s.locals)},66:function(e,t,r){"use strict";var s=r(24);r.n(s).a},67:function(e,t,r){(e.exports=r(4)(!1)).push([e.i,".selectExample {\n  margin: 10px;\n}\n.con-select-example {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.con-select .vs-select {\n  width: 100%\n}\n@media (max-width: 550px) {\n.con-select {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n}\n.con-select .vs-select {\n    width: 100%\n}\n}\r\n\r\n",""])}}]);