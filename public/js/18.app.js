<<<<<<< HEAD
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Purchases/PendingPurchases.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Purchases/PendingPurchases.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
var _objectSpread2;

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

/* harmony default export */ __webpack_exports__["default"] = ({
  inject: ['generatePassword'],
  data: function data() {
    return {
      tax_id: '' // switch1: true,

    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('purchases/', ['purchases'])),
  created: function created() {
    this.tax_id = this.$store.state.rootUrl.split('/')[2];
    this.getPendingPurchases(this.tax_id);
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    getPendingPurchases: 'purchases/getPendingPurchases',
    update: 'purchases/updatePurchase'
  }), (_objectSpread2 = {
    updateCustomer: function updateCustomer(e) {
      var _this = this;

      this.$validator.validateAll('editform').then(function (result) {
        if (result) {
          _this.$vs.loading();

          var fd = new FormData(_this.$refs.editForm);

          _this.submit(fd).then(function (res) {
            // console.log(res.data);
            if (res.data.status == 'success') {
              _this.password = _this.email = _this.first_name = _this.last_name = _this.zip_code = _this.city = _this.state = _this.address = _this.phone = '';
              e.target.reset();

              _this.errors.clear();

              _this.editCustomerModal = false;

              _this.$vs.notify({
                title: 'Success',
                text: 'Customer Updated Successfully',
                color: 'success',
                position: 'top-right'
              });

              _this.$vs.loading.close(); // this.getCustomers();

            }

            if (res.data.status == 'error') {
              alert(res.data.msg);
            }
          });
        }
      });
    },
    statusUpdate: function statusUpdate(id) {
      var _this2 = this;

      this.$vs.loading();
      axios.post('status-update-customer', {
        id: id
      }).then(function (res) {
        _this2.$vs.notify({
          title: 'Updated!...',
          text: res.data.msg,
          color: 'success',
          position: 'top-right'
        });

        _this2.$vs.loading.close();
      });
    },
    addMoreFeild: function addMoreFeild() {
      this.customField.push({
        name: 'additional_field[]',
        value: '',
        type: 'text'
      });
    },
    editCustomer: function editCustomer(id) {
      var customer = this.findCustomer(id);
      this.customer_id = customer.customer_id;
      this.name_english = customer.name_english;
      this.name_khmer = customer.name_khmer;
      this.industry = customer.industry;
      this.tax_card_num = customer.tax_card_num;
      this.tin_no = customer.tin_no;
      this.email = customer.email;
      this.telephone = customer.telephone;
      this.additional_fields = customer.additional_fields;
      this.address = customer.address;
      this.district = customer.district;
      this.group = customer.group;
      this.incorporation_date = customer.incorporation_date;
      this.muncipality = customer.muncipality;
      this.province = customer.province;
      this.sangkat = customer.sangkat;
      this.street = customer.street;
      this.village = customer.village;
      self = this;
      self.customField = [];

      if (customer.additional_fields != null) {
        if (customer.additional_fields.length > 0) {
          customer.additional_fields.map(function (val, key) {
            self.customField.push({
              name: 'additional_field[]',
              value: val,
              type: 'text'
            });
          });
        }
      }

      this.editCustomerModal = true;
    }
  }, _defineProperty(_objectSpread2, "updateCustomer", function updateCustomer(e) {
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
  }), _defineProperty(_objectSpread2, "makePassword", function makePassword() {
    this.password = this.generatePassword();
  }), _objectSpread2))
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Purchases/PendingPurchases.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Purchases/PendingPurchases.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".con-vs-popup .vs-popup {\n  width: 1000px !important;\n}\r\n\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Purchases/PendingPurchases.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Purchases/PendingPurchases.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PendingPurchases.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Purchases/PendingPurchases.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Purchases/PendingPurchases.vue?vue&type=template&id=93401ce6&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Purchases/PendingPurchases.vue?vue&type=template&id=93401ce6& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
        {
          attrs: {
            title: "Pending Purchases Approvals",
            subtitle:
              "listed below Purchases need your approval which are created by you and your officers"
          }
        },
        [
          _c(
            "vs-table",
            {
              attrs: {
                search: "",
                pagination: "",
                "max-items": "6",
                data: _vm.purchases
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
                            { attrs: { data: tr.officer.full_name } },
                            [_vm._v(_vm._s(tr.officer.full_name))]
                          ),
                          _vm._v(" "),
                          _c("vs-td", { attrs: { data: tr.branch_name } }, [
                            _vm._v(_vm._s(tr.branch_name))
                          ]),
                          _vm._v(" "),
                          _c("vs-td", { attrs: { data: tr.tax_period } }, [
                            _vm._v(_vm._s(tr.tax_period))
                          ]),
                          _vm._v(" "),
                          _c("vs-td", { attrs: { data: tr.total_vat } }, [
                            _vm._v(_vm._s(tr.total_vat))
                          ]),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            [
                              _c("vs-button", {
                                attrs: {
                                  size: "small",
                                  "icon-pack": "feather",
                                  icon: "icon-maximize-2",
                                  type: "border"
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
                { slot: "header" },
                [
                  _c(
                    "vs-button",
                    {
                      staticStyle: { "margin-top": "-5px" },
                      attrs: {
                        color: "primary",
                        type: "border",
                        icon: "cloud_download"
                      }
                    },
                    [_vm._v("Import")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "template",
                { slot: "thead" },
                [
                  _c("vs-th", [_vm._v("added by ")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Branch#/ Name")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Tax Period")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Total VAT")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Actions")])
                ],
                1
              )
            ],
            2
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/pages/Purchases/PendingPurchases.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/src/views/pages/Purchases/PendingPurchases.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PendingPurchases_vue_vue_type_template_id_93401ce6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PendingPurchases.vue?vue&type=template&id=93401ce6& */ "./resources/js/src/views/pages/Purchases/PendingPurchases.vue?vue&type=template&id=93401ce6&");
/* harmony import */ var _PendingPurchases_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PendingPurchases.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Purchases/PendingPurchases.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PendingPurchases_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PendingPurchases.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/pages/Purchases/PendingPurchases.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PendingPurchases_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PendingPurchases_vue_vue_type_template_id_93401ce6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PendingPurchases_vue_vue_type_template_id_93401ce6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/Purchases/PendingPurchases.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/Purchases/PendingPurchases.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Purchases/PendingPurchases.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PendingPurchases_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PendingPurchases.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Purchases/PendingPurchases.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PendingPurchases_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Purchases/PendingPurchases.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Purchases/PendingPurchases.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PendingPurchases_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PendingPurchases.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Purchases/PendingPurchases.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PendingPurchases_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PendingPurchases_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PendingPurchases_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PendingPurchases_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PendingPurchases_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/Purchases/PendingPurchases.vue?vue&type=template&id=93401ce6&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Purchases/PendingPurchases.vue?vue&type=template&id=93401ce6& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PendingPurchases_vue_vue_type_template_id_93401ce6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PendingPurchases.vue?vue&type=template&id=93401ce6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Purchases/PendingPurchases.vue?vue&type=template&id=93401ce6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PendingPurchases_vue_vue_type_template_id_93401ce6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PendingPurchases_vue_vue_type_template_id_93401ce6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
=======
(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{128:function(t,e,s){"use strict";s.r(e);var a=s(1);function r(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function i(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?r(s,!0).forEach((function(e){n(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):r(s).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function n(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var o={inject:["generatePassword"],data:function(){return{editCustomerModal:!1,customer_id:"",name_english:"",name_khmer:"",industry:"",tax_card_num:"",tin_no:"",email:"",telephone:"",address:"",street:"",village:"",muncipality:"",district:"",province:"",sangkat:"",group:"",incorporation_date:"",customField:[],tax_id:"",is_admin:!1,is_supervisor:!1,is_officer:!1,selected_status:1,statusList:[{text:"Pending",value:0},{text:"Approve",value:1},{text:"Un approve",value:2}]}},computed:i({},Object(a.d)("payrolls/",["payrolls"])),created:function(){this.tax_id=this.$store.state.rootUrl.split("/")[2],this.getPayrolls(this.tax_id),"Admin"!=this.$store.state.AppActiveUser.type&&"Super Admin"!=this.$store.state.AppActiveUser.type||(this.is_admin=!0),"Supervisor"==this.$store.state.AppActiveUser.type&&(this.is_supervisor=!0),"Officer"==this.$store.state.AppActiveUser.type&&(this.is_officer=!0)},methods:i({},Object(a.b)({getPayrolls:"payrolls/getPayrolls",statusChange:"taxes/statusUpdateSPP",statusChangeManagment:"taxes/statusChangeManagment"}),{changeManagementStatus:function(t,e,s){var a={id:e,status:t,by:s,tax_id:this.tax_id,notify:this.$vs.notify,tax_type:"payroll"};this.statusChangeManagment(a).then((function(t){}))},statusUpdate:function(t,e){var s=this,a={id:t,tax_id:this.tax_id,notify:this.$vs.notify,type:"payroll"};this.statusChange(a).then((function(a){if(1!=a.data.status){var r=s.payrolls.findIndex((function(e){return e.payroll_id==t}));"undefined"==a.data.response?s.payrolls[r].officer_confirmed=e:s.payrolls[r].officer_confirmed=a.data.response}}))},addMoreFeild:function(){this.customField.push({name:"additional_field[]",value:"",type:"text"})},updateCustomer:function(t){var e=this;this.$validator.validateAll("editform").then((function(s){if(s){e.$vs.loading();var a=new FormData(e.$refs.editCustomerForm);e.update(a).then((function(s){"success"==s.data.status&&(t.target.reset(),e.errors.clear(),e.editCustomerModal=!1,e.$vs.notify({title:"Success",text:"Customer Updated Successfully",color:"success",position:"top-right"}),e.$vs.loading.close(),e.getCustomers())}))}}))}})},c=(s(92),s(2)),l=Object(c.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("vx-card",{attrs:{title:"List of Payrolls"}},[s("vs-table",{attrs:{search:"",pagination:"","max-items":"6",data:t.payrolls},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.data;return t._l(a,(function(e,a){return s("vs-tr",{key:a},[s("vs-td",{attrs:{data:e.employee.name_english}},[t._v(t._s(e.employee.name_english))]),t._v(" "),s("vs-td",{attrs:{data:e.employee.employee_num}},[t._v(t._s(e.employee.employee_num))]),t._v(" "),s("vs-td",{attrs:{data:e.employee.nssf_num}},[t._v(t._s(e.employee.nssf_num))]),t._v(" "),s("vs-td",{attrs:{data:e.employee.contract_type}},[t._v(t._s(e.employee.contract_type))]),t._v(" "),s("vs-td",{attrs:{data:e.basic_salary}},[t._v(t._s(e.basic_salary))]),t._v(" "),s("vs-td",{attrs:{data:e.bonus}},[t._v(t._s(e.bonus))]),t._v(" "),s("vs-td",{directives:[{name:"show",rawName:"v-show",value:1==t.is_officer,expression:"is_officer == true"}],attrs:{data:e.officer_confirmed}},[s("vs-switch",{on:{click:function(s){return t.statusUpdate(e.payroll_id,e.officer_confirmed)}},model:{value:e.officer_confirmed,callback:function(s){t.$set(e,"officer_confirmed",s)},expression:"tr.officer_confirmed"}})],1),t._v(" "),s("vs-td",{directives:[{name:"show",rawName:"v-show",value:1==t.is_admin,expression:"is_admin == true"}],attrs:{data:e.management_confirmed}},[s("vs-select",{attrs:{width:"120px"},on:{input:function(s){return t.changeManagementStatus(e.management_confirmed,e.id,"admin")}},model:{value:e.management_confirmed,callback:function(s){t.$set(e,"management_confirmed",s)},expression:"tr.management_confirmed"}},t._l(t.statusList,(function(t,e){return s("vs-select-item",{key:e,attrs:{value:t.value,text:t.text}})})),1)],1),t._v(" "),s("vs-td",{directives:[{name:"show",rawName:"v-show",value:1==t.is_supervisor,expression:"is_supervisor == true"}],attrs:{data:e.supervisor_confirmed}},[s("vs-select",{attrs:{width:"120px"},on:{input:function(s){return t.changeManagementStatus(e.supervisor_confirmed,e.id,"supervisor")}},model:{value:e.supervisor_confirmed,callback:function(s){t.$set(e,"supervisor_confirmed",s)},expression:"tr.supervisor_confirmed"}},t._l(t.statusList,(function(t,e){return s("vs-select-item",{key:e,attrs:{value:t.value,text:t.text}})})),1)],1),t._v(" "),s("vs-td",[s("vs-button",{attrs:{to:"edit-payroll/"+e.payroll_id,size:"small",type:"border","icon-pack":"feather",icon:"icon-edit"}}),t._v(" "),s("vs-button",{attrs:{to:"payroll-detail/"+e.payroll_id,size:"small","icon-pack":"feather",icon:"icon-maximize-2",type:"border"}})],1)],1)}))}}])},[s("template",{slot:"header"},[s("vs-button",{attrs:{color:"primary",type:"border",icon:"cloud_download"}},[t._v("Export")])],1),t._v(" "),s("template",{slot:"thead"},[s("vs-th",[t._v("Employee Name")]),t._v(" "),s("vs-th",[t._v("Employee No.")]),t._v(" "),s("vs-th",[t._v("NSSF No.")]),t._v(" "),s("vs-th",[t._v("Contract Type")]),t._v(" "),s("vs-th",[t._v("Basic Salary")]),t._v(" "),s("vs-th",[t._v("Bonus")]),t._v(" "),s("vs-th",[t._v("Status")]),t._v(" "),s("vs-th",[t._v("Actions")])],1)],2)],1)],1)}),[],!1,null,null,null);e.default=l.exports},34:function(t,e,s){var a=s(93);"string"==typeof a&&(a=[[t.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};s(5)(a,r);a.locals&&(t.exports=a.locals)},92:function(t,e,s){"use strict";var a=s(34);s.n(a).a},93:function(t,e,s){(t.exports=s(4)(!1)).push([t.i,".con-vs-popup .vs-popup {\n  width: 1000px !important;\n}\n\n",""])}}]);
>>>>>>> 9279f5548c37aca60b0d3f76080a42724fcbe98b
