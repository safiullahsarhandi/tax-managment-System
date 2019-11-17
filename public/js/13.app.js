(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

<<<<<<< HEAD
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Currencies.vue?vue&type=template&id=27198bc4&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Currencies.vue?vue&type=template&id=27198bc4& ***!
  \******************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Customers/Customers.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Customers/Customers.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      editCustomerModal: false,
      customer_id: '',
      name_english: '',
      name_khmer: '',
      industry: '',
      tax_card_num: '',
      tin_no: '',
      email: '',
      telephone: ''
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('customers/', ['customers']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('customers/', ['findCustomer'])),
  created: function created() {
    this.getCustomers();
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    getCustomers: 'customers/getCustomers',
    // submit: 'customers/addCustomer',
    update: 'customers/updateCustomer'
  }), (_objectSpread2 = {
    updateCustomer: function updateCustomer(e) {
      var _this = this;

      this.$validator.validateAll('editform').then(function (result) {
        if (result) {
          var fd = new FormData(_this.$refs.editCustomerForm);
          fd.append('gender', _this.gender);

          _this.submit(fd).then(function (res) {
            // console.log(res.data);
            if (res.data.status == 'success') {
              _this.password = _this.email = _this.first_name = _this.last_name = _this.zip_code = _this.city = _this.state = _this.address = _this.phone = '';
              e.target.reset();

              _this.errors.clear();

              _this.editCustomerModal = false; // this.getCustomers();
            }

            if (res.data.status == 'error') {
              alert(res.data.msg);
            }
          });
        }
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
      this.telephone = customer.telephone; // console.log(customer);

      this.editCustomerModal = true;
    }
  }, _defineProperty(_objectSpread2, "updateCustomer", function updateCustomer(e) {
    var _this2 = this;

    this.$validator.validateAll('editform').then(function (result) {
      if (result) {
        var fd = new FormData(_this2.$refs.editCustomerForm);

        _this2.update(fd).then(function (res) {
          if (res.data.status == 'success') {
            e.target.reset();

            _this2.errors.clear();

            _this2.editCustomerModal = false;

            _this2.getCustomers();
          }
        });
      }
    });
  }), _defineProperty(_objectSpread2, "makePassword", function makePassword() {
    this.password = this.generatePassword();
  }), _objectSpread2))
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Customers/Customers.vue?vue&type=template&id=24124076&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Customers/Customers.vue?vue&type=template&id=24124076& ***!
  \***************************************************************************************************************************************************************************************************************************/
>>>>>>> d34834d0b4c9904cbdb561c125d3015977f66108
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
<<<<<<< HEAD
        { attrs: { title: "Currencies" } },
=======
        { attrs: { title: "List of Customers" } },
>>>>>>> d34834d0b4c9904cbdb561c125d3015977f66108
        [
          _c(
            "vs-table",
            {
<<<<<<< HEAD
              attrs: { search: "", pagination: "", data: [] },
=======
              attrs: {
                search: "",
                pagination: "",
                "max-items": "6",
                data: _vm.customers
              },
>>>>>>> d34834d0b4c9904cbdb561c125d3015977f66108
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
<<<<<<< HEAD
                          _c("vs-td", [_vm._v("Currency")]),
                          _vm._v(" "),
                          _c("vs-td", [_vm._v("Country")]),
                          _vm._v(" "),
                          _c("vs-td", [_vm._v("Symbol")]),
                          _vm._v(" "),
                          _c("vs-td", [_vm._v("Actions")])
=======
                          _c("vs-td", { attrs: { data: index++ } }, [
                            _vm._v(_vm._s(index++) + " .")
                          ]),
                          _vm._v(" "),
                          _c("vs-td", { attrs: { data: tr.name_english } }, [
                            _vm._v(_vm._s(tr.name_english))
                          ]),
                          _vm._v(" "),
                          _c("vs-td", { attrs: { data: tr.name_khmer } }, [
                            _vm._v(_vm._s(tr.name_khmer))
                          ]),
                          _vm._v(" "),
                          _c("vs-td", { attrs: { data: tr.industry } }, [
                            _vm._v(_vm._s(tr.industry))
                          ]),
                          _vm._v(" "),
                          _c("vs-td", { attrs: { data: tr.tax_card_num } }, [
                            _vm._v(_vm._s(tr.tax_card_num))
                          ]),
                          _vm._v(" "),
                          _c("vs-td", { attrs: { data: tr.tin_no } }, [
                            _vm._v(_vm._s(tr.tin_no))
                          ]),
                          _vm._v(" "),
                          _c("vs-td", { attrs: { data: tr.email } }, [
                            _vm._v(_vm._s(tr.email))
                          ]),
                          _vm._v(" "),
                          _c("vs-td", { attrs: { data: tr.telephone } }, [
                            _vm._v(_vm._s(tr.telephone))
                          ]),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            [
                              _c(
                                "vs-button",
                                {
                                  attrs: { type: "border" },
                                  on: {
                                    click: function($event) {
                                      return _vm.editCustomer(tr.id)
                                    }
                                  }
                                },
                                [_vm._v("Edit")]
                              ),
                              _vm._v(" "),
                              _c("vs-button", { attrs: { type: "border" } }, [
                                _vm._v("Detail")
                              ])
                            ],
                            1
                          )
>>>>>>> d34834d0b4c9904cbdb561c125d3015977f66108
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
<<<<<<< HEAD
                  _c("vs-th", [_vm._v("Currency")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Country")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Symbol")]),
=======
                  _c("vs-th", [_vm._v("S.No")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Name(English)")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Name(Khmer)")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Industy / Sector")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Tax ID")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("TIN # ")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Email")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Tel")]),
>>>>>>> d34834d0b4c9904cbdb561c125d3015977f66108
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
<<<<<<< HEAD
=======
      ),
      _vm._v(" "),
      _c(
        "vs-popup",
        {
          attrs: { active: _vm.editCustomerModal, title: "Update Customer" },
          on: {
            "update:active": function($event) {
              _vm.editCustomerModal = $event
            }
          }
        },
        [
          _c(
            "form",
            {
              ref: "editCustomerForm",
              attrs: { autocomplete: "off", "data-vv-scope": "editform" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.updateCustomer($event)
                }
              }
            },
            [
              _c(
                "vs-row",
                [
                  _c(
                    "vs-col",
                    { attrs: { "vs-lg": "6", "vs-md": "6", "vs-sm": "12" } },
                    [
                      _c(
                        "vx-input-group",
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.customer_id,
                                expression: "customer_id"
                              }
                            ],
                            attrs: {
                              type: "hidden",
                              name: "id",
                              "data-vv-scope": "editform"
                            },
                            domProps: { value: _vm.customer_id },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.customer_id = $event.target.value
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("vs-input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'"
                              }
                            ],
                            attrs: {
                              name: "name_eng",
                              "label-placeholder": "Name (English)",
                              "data-vv-scope": "editform"
                            },
                            model: {
                              value: _vm.name_english,
                              callback: function($$v) {
                                _vm.name_english = $$v
                              },
                              expression: "name_english"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.errors.has("editform.name_eng"),
                                  expression: "errors.has('editform.name_eng')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("editform.name_eng"))
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vx-input-group",
                        [
                          _c("vs-input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'"
                              }
                            ],
                            attrs: {
                              name: "name_khmer",
                              "label-placeholder": "Name (Khmer)",
                              "data-vv-scope": "editform"
                            },
                            model: {
                              value: _vm.name_khmer,
                              callback: function($$v) {
                                _vm.name_khmer = $$v
                              },
                              expression: "name_khmer"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.errors.has("editform.name_khmer"),
                                  expression:
                                    "errors.has('editform.name_khmer')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("editform.name_khmer"))
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vx-input-group",
                        { staticClass: "mt-2" },
                        [
                          _c("vs-input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'"
                              }
                            ],
                            attrs: {
                              name: "email",
                              "label-placeholder": "Email",
                              "data-vv-scope": "editform"
                            },
                            model: {
                              value: _vm.email,
                              callback: function($$v) {
                                _vm.email = $$v
                              },
                              expression: "email"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.errors.has("editform.email"),
                                  expression: "errors.has('editform.email')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [_vm._v(_vm._s(_vm.errors.first("editform.email")))]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vx-input-group",
                        { staticClass: "mt-2" },
                        [
                          _c("vs-input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'"
                              }
                            ],
                            attrs: {
                              name: "telephone",
                              "label-placeholder": "Telephone",
                              "data-vv-scope": "editform"
                            },
                            model: {
                              value: _vm.telephone,
                              callback: function($$v) {
                                _vm.telephone = $$v
                              },
                              expression: "telephone"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.errors.has("editform.telephone"),
                                  expression: "errors.has('editform.telephone')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("editform.telephone"))
                              )
                            ]
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
                    { attrs: { "vs-lg": "6", "vs-md": "12", "vs-sm": "12" } },
                    [
                      _c(
                        "vx-input-group",
                        { staticClass: "mt-2" },
                        [
                          _c("vs-input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'"
                              }
                            ],
                            attrs: {
                              name: "industry",
                              "label-placeholder": "Industry",
                              "data-vv-scope": "editform"
                            },
                            model: {
                              value: _vm.industry,
                              callback: function($$v) {
                                _vm.industry = $$v
                              },
                              expression: "industry"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.errors.has("editform.industry"),
                                  expression: "errors.has('editform.industry')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("editform.industry"))
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vx-input-group",
                        { staticClass: "mt-2" },
                        [
                          _c("vs-input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'"
                              }
                            ],
                            attrs: {
                              name: "tax_id",
                              "label-placeholder": "Tax Id",
                              "ata-vv-scope": "editform",
                              "data-vv-scope": "editform"
                            },
                            model: {
                              value: _vm.tax_card_num,
                              callback: function($$v) {
                                _vm.tax_card_num = $$v
                              },
                              expression: "tax_card_num"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.errors.has("editform.tax_id"),
                                  expression: "errors.has('editform.tax_id')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("editform.tax_id"))
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vx-input-group",
                        { staticClass: "mt-2" },
                        [
                          _c("vs-input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'"
                              }
                            ],
                            attrs: {
                              name: "tin_no",
                              "label-placeholder": "TIN No.",
                              "ata-vv-scope": "editform",
                              "data-vv-scope": "editform"
                            },
                            model: {
                              value: _vm.tin_no,
                              callback: function($$v) {
                                _vm.tin_no = $$v
                              },
                              expression: "tin_no"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.errors.has("editform.tin_no"),
                                  expression: "errors.has('editform.tin_no')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("editform.tin_no"))
                              )
                            ]
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
                    { attrs: { "vs-lg": "12", "vs-md": "12", "vs-sm": "12" } },
                    [
                      _c("br"),
                      _vm._v(" "),
                      _c(
                        "vs-button",
                        {
                          staticClass: "float-right",
                          attrs: { button: "submit", type: "gradient" }
                        },
                        [_vm._v("Update Customer")]
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
>>>>>>> d34834d0b4c9904cbdb561c125d3015977f66108
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/src/views/pages/Currencies.vue":
/*!*****************************************************!*\
  !*** ./resources/js/src/views/pages/Currencies.vue ***!
  \*****************************************************/
=======
/***/ "./resources/js/src/views/pages/Customers/Customers.vue":
/*!**************************************************************!*\
  !*** ./resources/js/src/views/pages/Customers/Customers.vue ***!
  \**************************************************************/
>>>>>>> d34834d0b4c9904cbdb561c125d3015977f66108
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _Currencies_vue_vue_type_template_id_27198bc4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Currencies.vue?vue&type=template&id=27198bc4& */ "./resources/js/src/views/pages/Currencies.vue?vue&type=template&id=27198bc4&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}
=======
/* harmony import */ var _Customers_vue_vue_type_template_id_24124076___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Customers.vue?vue&type=template&id=24124076& */ "./resources/js/src/views/pages/Customers/Customers.vue?vue&type=template&id=24124076&");
/* harmony import */ var _Customers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Customers.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Customers/Customers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



>>>>>>> d34834d0b4c9904cbdb561c125d3015977f66108


/* normalize component */

<<<<<<< HEAD
var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Currencies_vue_vue_type_template_id_27198bc4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Currencies_vue_vue_type_template_id_27198bc4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
=======
var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Customers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Customers_vue_vue_type_template_id_24124076___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Customers_vue_vue_type_template_id_24124076___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
>>>>>>> d34834d0b4c9904cbdb561c125d3015977f66108
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
<<<<<<< HEAD
component.options.__file = "resources/js/src/views/pages/Currencies.vue"
=======
component.options.__file = "resources/js/src/views/pages/Customers/Customers.vue"
>>>>>>> d34834d0b4c9904cbdb561c125d3015977f66108
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/src/views/pages/Currencies.vue?vue&type=template&id=27198bc4&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Currencies.vue?vue&type=template&id=27198bc4& ***!
  \************************************************************************************/
=======
/***/ "./resources/js/src/views/pages/Customers/Customers.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Customers/Customers.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Customers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Customers/Customers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Customers/Customers.vue?vue&type=template&id=24124076&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Customers/Customers.vue?vue&type=template&id=24124076& ***!
  \*********************************************************************************************/
>>>>>>> d34834d0b4c9904cbdb561c125d3015977f66108
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Currencies_vue_vue_type_template_id_27198bc4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Currencies.vue?vue&type=template&id=27198bc4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Currencies.vue?vue&type=template&id=27198bc4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Currencies_vue_vue_type_template_id_27198bc4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Currencies_vue_vue_type_template_id_27198bc4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
=======
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_vue_vue_type_template_id_24124076___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Customers.vue?vue&type=template&id=24124076& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Customers/Customers.vue?vue&type=template&id=24124076&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_vue_vue_type_template_id_24124076___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_vue_vue_type_template_id_24124076___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
>>>>>>> d34834d0b4c9904cbdb561c125d3015977f66108



/***/ })

}]);