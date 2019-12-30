(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Customers/CustomerDetail.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Customers/CustomerDetail.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
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
  beforeCreate: function beforeCreate() {
    localStorage.setItem('currentDetail', this.$route.fullPath);
    localStorage.setItem('customer', this.$route.params.id);
    this.$store.commit('setRootUrl', this.$route.fullPath);
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('customers/', ['customer'])),
  created: function created() {
    // console.log(this.$route.params.id)
    this.getCustomer(this.$route.params.id);
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    getCustomer: 'customers/getCustomer'
  }), {
    getAddress: function getAddress(customer) {
      return customer.address + ' ' + customer.street + ' ' + customer.group + ' ' + customer.sangkat + ' ' + customer.village + ' ' + customer.district + ' ' + customer.province + ' ' + ' ' + customer.muncipality;
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Customers/CustomerDetail.vue?vue&type=template&id=99f29b04&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Customers/CustomerDetail.vue?vue&type=template&id=99f29b04& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
        "vs-row",
        [
          _c(
            "vs-col",
            {
              staticClass: "mt-base",
              attrs: {
                "vs-md": "8",
                "vs-lg": "8",
                "vs-sm": "12",
                "vs-xs": "12"
              }
            },
            [
              _c(
                "vx-card",
                { attrs: { title: "Company OR Customer Overview" } },
                [
                  _c(
                    "vs-row",
                    [
                      _c(
                        "vs-col",
                        {
                          attrs: {
                            "vs-md": "4",
                            "vs-lg": "4",
                            "vs-sm": "12",
                            "vs-xs": "12"
                          }
                        },
                        [
                          _c("p", [
                            _c("label", [_vm._v("Company Name (English):")])
                          ]),
                          _c("h4", [_vm._v(_vm._s(_vm.customer.name_english))]),
                          _vm._v(" "),
                          _c("p")
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        {
                          attrs: {
                            "vs-md": "4",
                            "vs-lg": "4",
                            "vs-sm": "12",
                            "vs-xs": "12"
                          }
                        },
                        [
                          _c("p", [
                            _c("label", [_vm._v("Company Name (Khmer):")])
                          ]),
                          _c("h4", [_vm._v(_vm._s(_vm.customer.name_khmer))]),
                          _vm._v(" "),
                          _c("p")
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        {
                          attrs: {
                            "vs-md": "4",
                            "vs-lg": "4",
                            "vs-sm": "12",
                            "vs-xs": "12"
                          }
                        },
                        [
                          _c("p", [
                            _c("label", [_vm._v("Incorporation Date:")])
                          ]),
                          _c("h4", [
                            _vm._v(
                              _vm._s(
                                new Date(
                                  _vm.customer.incorporation_date
                                ).toDateString()
                              )
                            )
                          ]),
                          _vm._v(" "),
                          _c("p")
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-row",
                    { staticClass: "mt-base" },
                    [
                      _c(
                        "vs-col",
                        {
                          attrs: {
                            "vs-md": "4",
                            "vs-lg": "4",
                            "vs-sm": "12",
                            "vs-xs": "12"
                          }
                        },
                        [
                          _c("p", [_c("label", [_vm._v("Tax Card No:")])]),
                          _c("h4", [_vm._v(_vm._s(_vm.customer.tax_card_num))]),
                          _vm._v(" "),
                          _c("p")
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        {
                          attrs: {
                            "vs-md": "4",
                            "vs-lg": "4",
                            "vs-sm": "12",
                            "vs-xs": "12"
                          }
                        },
                        [
                          _c("p", [_c("label", [_vm._v("Tin No:")])]),
                          _c("h4", [_vm._v(_vm._s(_vm.customer.tin_no))]),
                          _vm._v(" "),
                          _c("p")
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        {
                          attrs: {
                            "vs-md": "4",
                            "vs-lg": "4",
                            "vs-sm": "12",
                            "vs-xs": "12"
                          }
                        },
                        [
                          _c("p", [_c("label", [_vm._v("Industry:")])]),
                          _c("h4", [_vm._v(_vm._s(_vm.customer.industry))]),
                          _vm._v(" "),
                          _c("p")
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-row",
                    { staticClass: "mt-base" },
                    [
                      _c(
                        "vs-col",
                        {
                          attrs: {
                            "vs-md": "4",
                            "vs-lg": "4",
                            "vs-sm": "12",
                            "vs-xs": "12"
                          }
                        },
                        [
                          _c("p", [_c("label", [_vm._v("No. Of Taxes:")])]),
                          _c("h4", [_vm._v(_vm._s(_vm.customer.taxes_count))]),
                          _vm._v(" "),
                          _c("p")
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        {
                          attrs: {
                            "vs-md": "4",
                            "vs-lg": "4",
                            "vs-sm": "12",
                            "vs-xs": "12"
                          }
                        },
                        [
                          _c("p", [_c("label", [_vm._v("No Employees:")])]),
                          _c("h4", [
                            _vm._v(_vm._s(_vm.customer.active_employees_count))
                          ]),
                          _vm._v(" "),
                          _c("p")
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "vs-col",
            {
              staticClass: "mt-base",
              attrs: {
                "vs-md": "4",
                "vs-lg": "4",
                "vs-sm": "12",
                "vs-xs": "12"
              }
            },
            [
              _c(
                "vx-card",
                { attrs: { title: "Address & Contact Info" } },
                [
                  _c(
                    "vs-row",
                    [
                      _c(
                        "vs-col",
                        {
                          attrs: {
                            "vs-md": "12",
                            "vs-lg": "12",
                            "vs-sm": "12",
                            "vs-xs": "12"
                          }
                        },
                        [
                          _c("p", [_c("label", [_vm._v("Address:")])]),
                          _c("h4", [
                            _vm._v(_vm._s(_vm.getAddress(_vm.customer)))
                          ]),
                          _vm._v(" "),
                          _c("p")
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        {
                          staticClass: "mt-2",
                          attrs: {
                            "vs-md": "12",
                            "vs-lg": "12",
                            "vs-sm": "12",
                            "vs-xs": "12"
                          }
                        },
                        [
                          _c("p", [_c("label", [_vm._v("Phone:")])]),
                          _c("h4", [_vm._v(_vm._s(_vm.customer.telephone))]),
                          _vm._v(" "),
                          _c("p")
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        {
                          staticClass: "mt-2",
                          attrs: {
                            "vs-md": "12",
                            "vs-lg": "12",
                            "vs-sm": "12",
                            "vs-xs": "12"
                          }
                        },
                        [
                          _c("p", [_c("label", [_vm._v("Email:")])]),
                          _c("h4", [_vm._v(_vm._s(_vm.customer.email))]),
                          _vm._v(" "),
                          _c("p")
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vs-row",
        [
          _c(
            "vs-col",
            [
              _c(
                "vx-card",
                {
                  staticClass: "mt-base",
                  attrs: { title: "Additional Information" }
                },
                [
                  _c(
                    "vs-row",
                    _vm._l(_vm.customer.additional_fields, function(
                      info,
                      index
                    ) {
                      return _c(
                        "vs-col",
                        { key: index, attrs: { "vs-w": "4", "vs-sm": "12" } },
                        [
                          _c("div", [
                            _vm._v("Additional info " + _vm._s(index + 1))
                          ]),
                          _vm._v(" "),
                          _c("div", [_vm._v(_vm._s(info))])
                        ]
                      )
                    }),
                    1
                  )
                ],
                1
              )
            ],
            1
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

/***/ "./resources/js/src/views/pages/Customers/CustomerDetail.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/src/views/pages/Customers/CustomerDetail.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomerDetail_vue_vue_type_template_id_99f29b04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomerDetail.vue?vue&type=template&id=99f29b04& */ "./resources/js/src/views/pages/Customers/CustomerDetail.vue?vue&type=template&id=99f29b04&");
/* harmony import */ var _CustomerDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomerDetail.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Customers/CustomerDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CustomerDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CustomerDetail_vue_vue_type_template_id_99f29b04___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CustomerDetail_vue_vue_type_template_id_99f29b04___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/Customers/CustomerDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/Customers/CustomerDetail.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Customers/CustomerDetail.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomerDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Customers/CustomerDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Customers/CustomerDetail.vue?vue&type=template&id=99f29b04&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Customers/CustomerDetail.vue?vue&type=template&id=99f29b04& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerDetail_vue_vue_type_template_id_99f29b04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomerDetail.vue?vue&type=template&id=99f29b04& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Customers/CustomerDetail.vue?vue&type=template&id=99f29b04&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerDetail_vue_vue_type_template_id_99f29b04___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerDetail_vue_vue_type_template_id_99f29b04___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);