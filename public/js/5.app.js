(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Customers/AddCustomer.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Customers/AddCustomer.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  data: function data() {
    return {
      customField: [],
      name_khmer: '',
      name_eng: '',
      tax_id: '',
      tin_num: '',
      incorporation_date: '',
      address: '',
      street: '',
      group: '',
      village: '',
      sangkat: '',
      district: '',
      province: '',
      muncipality: '',
      tel: '',
      email: '',
      industry: ''
    };
  },
  methods: {
    addMoreFeild: function addMoreFeild() {
      this.customField.push({
        name: 'additional_field[]',
        value: '',
        type: 'text'
      });
    },
    addCustomer: function addCustomer(e) {}
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Customers/AddCustomer.vue?vue&type=template&id=11f55c80&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Customers/AddCustomer.vue?vue&type=template&id=11f55c80& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
            title: "Add Customer",
            subtitle:
              "Add Information Of Customer OR company which tax will be managed by system",
            noShadow: "",
            noRadius: ""
          }
        },
        [
          _c(
            "form",
            {
              ref: "addCustomer",
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.addCustomer($event)
                }
              }
            },
            [
              _c(
                "vs-row",
                [
                  _c(
                    "vs-col",
                    {
                      staticClass: "mb-2",
                      attrs: { "vs-md": "12", "vs-lg": "4", "vs-sm": "12" }
                    },
                    [
                      _c(
                        "vx-input-group",
                        [
                          _c("vs-input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "`required`"
                              }
                            ],
                            attrs: {
                              name: "name_eng",
                              "label-placeholder": "Name (English)"
                            },
                            model: {
                              value: _vm.name_eng,
                              callback: function($$v) {
                                _vm.name_eng = $$v
                              },
                              expression: "name_eng"
                            }
                          })
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
                      staticClass: "mb-2",
                      attrs: { "vs-md": "12", "vs-lg": "4", "vs-sm": "12" }
                    },
                    [
                      _c(
                        "vx-input-group",
                        [
                          _c("vs-input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "`required`"
                              }
                            ],
                            attrs: {
                              name: "name_khmer",
                              "label-placeholder": "Name (Khmer)"
                            },
                            model: {
                              value: _vm.name_khmer,
                              callback: function($$v) {
                                _vm.name_khmer = $$v
                              },
                              expression: "name_khmer"
                            }
                          })
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
                      staticClass: "mb-2",
                      attrs: { "vs-md": "12", "vs-lg": "4", "vs-sm": "12" }
                    },
                    [
                      _c(
                        "vx-input-group",
                        [
                          _c("vs-input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "`required`"
                              }
                            ],
                            attrs: {
                              name: "tax_id",
                              "label-placeholder": "Tax ID Card #"
                            },
                            model: {
                              value: _vm.tax_id,
                              callback: function($$v) {
                                _vm.tax_id = $$v
                              },
                              expression: "tax_id"
                            }
                          })
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
                      staticClass: "mb-2",
                      attrs: { "vs-md": "12", "vs-lg": "4", "vs-sm": "12" }
                    },
                    [
                      _c(
                        "vx-input-group",
                        [
                          _c("vs-input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "`required`"
                              }
                            ],
                            attrs: {
                              name: "tin_num",
                              "label-placeholder": "TIN #"
                            },
                            model: {
                              value: _vm.tin_num,
                              callback: function($$v) {
                                _vm.tin_num = $$v
                              },
                              expression: "tin_num"
                            }
                          })
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
                      staticClass: "mb-2",
                      attrs: { "vs-md": "12", "vs-lg": "4", "vs-sm": "12" }
                    },
                    [
                      _c(
                        "vx-input-group",
                        [
                          _c("vs-input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "`required`"
                              }
                            ],
                            attrs: {
                              name: "incorporation_date",
                              "label-placeholder":
                                "Date of company incorporated"
                            },
                            model: {
                              value: _vm.incorporation_date,
                              callback: function($$v) {
                                _vm.incorporation_date = $$v
                              },
                              expression: "incorporation_date"
                            }
                          })
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
                      staticClass: "mb-2",
                      attrs: { "vs-md": "12", "vs-lg": "4", "vs-sm": "12" }
                    },
                    [
                      _c(
                        "vx-input-group",
                        [
                          _c("vs-input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "`required`"
                              }
                            ],
                            attrs: {
                              name: "address",
                              "label-placeholder": "Address"
                            },
                            model: {
                              value: _vm.address,
                              callback: function($$v) {
                                _vm.address = $$v
                              },
                              expression: "address"
                            }
                          })
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
                      staticClass: "mb-2",
                      attrs: { "vs-md": "12", "vs-lg": "4", "vs-sm": "12" }
                    },
                    [
                      _c(
                        "vx-input-group",
                        [
                          _c("vs-input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "`required`"
                              }
                            ],
                            attrs: {
                              name: "street",
                              "label-placeholder": "Street"
                            },
                            model: {
                              value: _vm.street,
                              callback: function($$v) {
                                _vm.street = $$v
                              },
                              expression: "street"
                            }
                          })
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
                      staticClass: "mb-2",
                      attrs: { "vs-md": "12", "vs-lg": "4", "vs-sm": "12" }
                    },
                    [
                      _c(
                        "vx-input-group",
                        [
                          _c("vs-input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "`required`"
                              }
                            ],
                            attrs: {
                              name: "group",
                              "label-placeholder": "Group"
                            },
                            model: {
                              value: _vm.group,
                              callback: function($$v) {
                                _vm.group = $$v
                              },
                              expression: "group"
                            }
                          })
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
                      staticClass: "mb-2",
                      attrs: { "vs-md": "12", "vs-lg": "4", "vs-sm": "12" }
                    },
                    [
                      _c(
                        "vx-input-group",
                        [
                          _c("vs-input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "`required`"
                              }
                            ],
                            attrs: {
                              name: "village",
                              "label-placeholder": "Village"
                            },
                            model: {
                              value: _vm.village,
                              callback: function($$v) {
                                _vm.village = $$v
                              },
                              expression: "village"
                            }
                          })
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
                      staticClass: "mb-2",
                      attrs: { "vs-md": "12", "vs-lg": "4", "vs-sm": "12" }
                    },
                    [
                      _c(
                        "vx-input-group",
                        [
                          _c("vs-input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "`required`"
                              }
                            ],
                            attrs: {
                              name: "sangkat",
                              "label-placeholder": "Sangkat"
                            },
                            model: {
                              value: _vm.sangkat,
                              callback: function($$v) {
                                _vm.sangkat = $$v
                              },
                              expression: "sangkat"
                            }
                          })
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
                      staticClass: "mb-2",
                      attrs: { "vs-md": "12", "vs-lg": "4", "vs-sm": "12" }
                    },
                    [
                      _c(
                        "vx-input-group",
                        [
                          _c("vs-input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "`required`"
                              }
                            ],
                            attrs: {
                              name: "district",
                              "label-placeholder": "District"
                            },
                            model: {
                              value: _vm.district,
                              callback: function($$v) {
                                _vm.district = $$v
                              },
                              expression: "district"
                            }
                          })
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
                      staticClass: "mb-2",
                      attrs: { "vs-md": "12", "vs-lg": "4", "vs-sm": "12" }
                    },
                    [
                      _c(
                        "vx-input-group",
                        [
                          _c("vs-input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "`required`"
                              }
                            ],
                            attrs: {
                              name: "province",
                              "label-placeholder": "Province"
                            },
                            model: {
                              value: _vm.province,
                              callback: function($$v) {
                                _vm.province = $$v
                              },
                              expression: "province"
                            }
                          })
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
                      staticClass: "mb-2",
                      attrs: { "vs-md": "12", "vs-lg": "4", "vs-sm": "12" }
                    },
                    [
                      _c(
                        "vx-input-group",
                        [
                          _c("vs-input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "`required`"
                              }
                            ],
                            attrs: {
                              name: "muncipality",
                              "label-placeholder": "Muncipality"
                            },
                            model: {
                              value: _vm.muncipality,
                              callback: function($$v) {
                                _vm.muncipality = $$v
                              },
                              expression: "muncipality"
                            }
                          })
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
                      staticClass: "mb-2",
                      attrs: { "vs-md": "12", "vs-lg": "4", "vs-sm": "12" }
                    },
                    [
                      _c(
                        "vx-input-group",
                        [
                          _c("vs-input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "`required`"
                              }
                            ],
                            attrs: { name: "tel", "label-placeholder": "Tel." },
                            model: {
                              value: _vm.tel,
                              callback: function($$v) {
                                _vm.tel = $$v
                              },
                              expression: "tel"
                            }
                          })
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
                      staticClass: "mb-2",
                      attrs: { "vs-md": "12", "vs-lg": "4", "vs-sm": "12" }
                    },
                    [
                      _c(
                        "vx-input-group",
                        [
                          _c("vs-input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "`required`"
                              }
                            ],
                            attrs: {
                              name: "email",
                              type: "email",
                              "label-placeholder": "Email"
                            },
                            model: {
                              value: _vm.email,
                              callback: function($$v) {
                                _vm.email = $$v
                              },
                              expression: "email"
                            }
                          })
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
                      staticClass: "mb-2",
                      attrs: { "vs-md": "12", "vs-lg": "4", "vs-sm": "12" }
                    },
                    [
                      _c(
                        "vx-input-group",
                        [
                          _c("vs-input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "`required`"
                              }
                            ],
                            attrs: {
                              name: "industry",
                              "label-placeholder": "Industry / Sector"
                            },
                            model: {
                              value: _vm.industry,
                              callback: function($$v) {
                                _vm.industry = $$v
                              },
                              expression: "industry"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.customField, function(field, index) {
                    return _c(
                      "vs-col",
                      {
                        key: index,
                        staticClass: "mb-2",
                        attrs: { "vs-md": "12", "vs-lg": "4", "vs-sm": "12" }
                      },
                      [
                        _c(
                          "vx-input-group",
                          [
                            _c("vs-input", {
                              directives: [
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required",
                                  expression: "`required`"
                                }
                              ],
                              attrs: {
                                type: field.text,
                                name: field.name,
                                "label-placeholder":
                                  "Custom Field " + (index + 1)
                              },
                              model: {
                                value: field.value,
                                callback: function($$v) {
                                  _vm.$set(field, "value", $$v)
                                },
                                expression: "field.value"
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    )
                  }),
                  _vm._v(" "),
                  _c(
                    "vs-col",
                    {
                      staticClass: "mb-2",
                      attrs: { "vs-md": "12", "vs-lg": "4", "vs-sm": "12" }
                    },
                    [
                      _c(
                        "vs-button",
                        {
                          staticClass: "mt-5",
                          attrs: { type: "gradient", button: "button" },
                          on: {
                            click: function($event) {
                              return _vm.addMoreFeild()
                            }
                          }
                        },
                        [_vm._v("Add More Custom Fields")]
                      )
                    ],
                    1
                  )
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "vs-row",
                [
                  _c(
                    "vs-col",
                    {
                      staticClass: "text-center",
                      attrs: { "vs-lg": "12", "vs-md": "12" }
                    },
                    [
                      _c(
                        "vs-col",
                        {
                          staticClass: "text-center",
                          attrs: { "vs-md": "12", "vs-lg": "12" }
                        },
                        [
                          _c(
                            "vs-button",
                            {
                              staticClass: "mt-5",
                              attrs: { type: "gradient" }
                            },
                            [_vm._v("Save")]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        {
                          staticClass: "text-center",
                          attrs: { "vs-md": "12", "vs-lg": "12" }
                        },
                        [
                          _c(
                            "vs-button",
                            {
                              staticClass: "mt-5",
                              attrs: { type: "gradient", button: "button" }
                            },
                            [_vm._v("Upload Excel Sheet")]
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
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/pages/Customers/AddCustomer.vue":
/*!****************************************************************!*\
  !*** ./resources/js/src/views/pages/Customers/AddCustomer.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddCustomer_vue_vue_type_template_id_11f55c80___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddCustomer.vue?vue&type=template&id=11f55c80& */ "./resources/js/src/views/pages/Customers/AddCustomer.vue?vue&type=template&id=11f55c80&");
/* harmony import */ var _AddCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddCustomer.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Customers/AddCustomer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddCustomer_vue_vue_type_template_id_11f55c80___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddCustomer_vue_vue_type_template_id_11f55c80___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/Customers/AddCustomer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/Customers/AddCustomer.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Customers/AddCustomer.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddCustomer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Customers/AddCustomer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Customers/AddCustomer.vue?vue&type=template&id=11f55c80&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Customers/AddCustomer.vue?vue&type=template&id=11f55c80& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCustomer_vue_vue_type_template_id_11f55c80___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddCustomer.vue?vue&type=template&id=11f55c80& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Customers/AddCustomer.vue?vue&type=template&id=11f55c80&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCustomer_vue_vue_type_template_id_11f55c80___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCustomer_vue_vue_type_template_id_11f55c80___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);