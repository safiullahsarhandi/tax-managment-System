(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

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
<<<<<<< HEAD
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
=======
>>>>>>> master

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