(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{129:function(t,e,s){"use strict";s.r(e);var a,i=s(1);function r(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function o(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?r(s,!0).forEach((function(e){n(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):r(s).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function n(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var d={inject:["generatePassword"],data:function(){return{tax_id:""}},computed:o({},Object(i.d)("purchases/",["purchases"])),created:function(){this.tax_id=this.$store.state.rootUrl.split("/")[2],this.getPendingPurchases(this.tax_id)},methods:o({},Object(i.b)({getPendingPurchases:"purchases/getPendingPurchases",update:"purchases/updatePurchase"}),(a={updateCustomer:function(t){var e=this;this.$validator.validateAll("editform").then((function(s){if(s){e.$vs.loading();var a=new FormData(e.$refs.editForm);e.submit(a).then((function(s){"success"==s.data.status&&(e.password=e.email=e.first_name=e.last_name=e.zip_code=e.city=e.state=e.address=e.phone="",t.target.reset(),e.errors.clear(),e.editCustomerModal=!1,e.$vs.notify({title:"Success",text:"Customer Updated Successfully",color:"success",position:"top-right"}),e.$vs.loading.close()),"error"==s.data.status&&alert(s.data.msg)}))}}))},statusUpdate:function(t){var e=this;this.$vs.loading(),axios.post("status-update-customer",{id:t}).then((function(t){e.$vs.notify({title:"Updated!...",text:t.data.msg,color:"success",position:"top-right"}),e.$vs.loading.close()}))},addMoreFeild:function(){this.customField.push({name:"additional_field[]",value:"",type:"text"})},editCustomer:function(t){var e=this.findCustomer(t);this.customer_id=e.customer_id,this.name_english=e.name_english,this.name_khmer=e.name_khmer,this.industry=e.industry,this.tax_card_num=e.tax_card_num,this.tin_no=e.tin_no,this.email=e.email,this.telephone=e.telephone,this.additional_fields=e.additional_fields,this.address=e.address,this.district=e.district,this.group=e.group,this.incorporation_date=e.incorporation_date,this.muncipality=e.muncipality,this.province=e.province,this.sangkat=e.sangkat,this.street=e.street,this.village=e.village,self=this,self.customField=[],null!=e.additional_fields&&e.additional_fields.length>0&&e.additional_fields.map((function(t,e){self.customField.push({name:"additional_field[]",value:t,type:"text"})})),this.editCustomerModal=!0}},n(a,"updateCustomer",(function(t){var e=this;this.$validator.validateAll("editform").then((function(s){if(s){e.$vs.loading();var a=new FormData(e.$refs.editCustomerForm);e.update(a).then((function(s){"success"==s.data.status&&(t.target.reset(),e.errors.clear(),e.editCustomerModal=!1,e.$vs.notify({title:"Success",text:"Customer Updated Successfully",color:"success",position:"top-right"}),e.$vs.loading.close(),e.getCustomers())}))}}))})),n(a,"makePassword",(function(){this.password=this.generatePassword()})),a))},c=(s(90),s(2)),l=Object(c.a)(d,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("vx-card",{attrs:{title:"Pending Purchases Approvals",subtitle:"listed below Purchases need your approval which are created by you and your officers"}},[s("vs-table",{attrs:{search:"",pagination:"","max-items":"6",data:t.purchases},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.data;return t._l(a,(function(e,a){return s("vs-tr",{key:a},[s("vs-td",{attrs:{data:e.officer.full_name}},[t._v(t._s(e.officer.full_name))]),t._v(" "),s("vs-td",{attrs:{data:e.branch_name}},[t._v(t._s(e.branch_name))]),t._v(" "),s("vs-td",{attrs:{data:e.tax_period}},[t._v(t._s(e.tax_period))]),t._v(" "),s("vs-td",{attrs:{data:e.total_vat}},[t._v(t._s(e.total_vat))]),t._v(" "),s("vs-td",[s("vs-button",{attrs:{size:"small","icon-pack":"feather",icon:"icon-maximize-2",type:"border"}})],1)],1)}))}}])},[s("template",{slot:"header"},[s("vs-button",{staticStyle:{"margin-top":"-5px"},attrs:{color:"primary",type:"border",icon:"cloud_download"}},[t._v("Import")])],1),t._v(" "),s("template",{slot:"thead"},[s("vs-th",[t._v("added by ")]),t._v(" "),s("vs-th",[t._v("Branch#/ Name")]),t._v(" "),s("vs-th",[t._v("Tax Period")]),t._v(" "),s("vs-th",[t._v("Total VAT")]),t._v(" "),s("vs-th",[t._v("Actions")])],1)],2)],1)],1)}),[],!1,null,null,null);e.default=l.exports},33:function(t,e,s){var a=s(91);"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};s(5)(a,i);a.locals&&(t.exports=a.locals)},90:function(t,e,s){"use strict";var a=s(33);s.n(a).a},91:function(t,e,s){(t.exports=s(4)(!1)).push([t.i,".con-vs-popup .vs-popup {\n  width: 1000px !important;\n}\r\n\r\n",""])}}]);