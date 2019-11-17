(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Customers/AddCustomer.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Customers/AddCustomer.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('customers/', ['customers']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('customers/', ['findCustomer'])),
  methods: _objectSpread({
    addMoreFeild: function addMoreFeild() {
      this.customField.push({
        name: 'additional_field[]',
        value: '',
        type: 'text'
      });
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    submit: 'customers/addCustomer'
  }), {
    addCustomer: function addCustomer(e) {
      var _this = this;

      this.$validator.validateAll().then(function (result) {
        if (result) {
          var fd = new FormData(_this.$refs.addCustomer);

          _this.submit(fd).then(function (res) {
            console.log(res.data);

            if (res.data.status == 'success') {
              e.target.reset();

              _this.errors.clear();

              alert('Customer Added');
            }

            if (res.data.status == 'error') {
              alert(res.data.msg);
            }
          });
        }
      });
    }
  })
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
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("name_eng"),
                              expression: "errors.has('name_eng')"
                            }
                          ],
                          staticClass: "text-danger"
                        },
                        [_vm._v(_vm._s(_vm.errors.first("name_eng")))]
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
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("name_khmer"),
                              expression: "errors.has('name_khmer')"
                            }
                          ],
                          staticClass: "text-danger"
                        },
                        [_vm._v(_vm._s(_vm.errors.first("name_khmer")))]
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
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("tax_id"),
                              expression: "errors.has('tax_id')"
                            }
                          ],
                          staticClass: "text-danger"
                        },
                        [_vm._v(_vm._s(_vm.errors.first("tax_id")))]
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
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("tin_num"),
                              expression: "errors.has('tin_num')"
                            }
                          ],
                          staticClass: "text-danger"
                        },
                        [_vm._v(_vm._s(_vm.errors.first("tin_num")))]
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
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("incorporation_date"),
                              expression: "errors.has('incorporation_date')"
                            }
                          ],
                          staticClass: "text-danger"
                        },
                        [_vm._v(_vm._s(_vm.errors.first("incorporation_date")))]
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
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("address"),
                              expression: "errors.has('address')"
                            }
                          ],
                          staticClass: "text-danger"
                        },
                        [_vm._v(_vm._s(_vm.errors.first("address")))]
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
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("street"),
                              expression: "errors.has('street')"
                            }
                          ],
                          staticClass: "text-danger"
                        },
                        [_vm._v(_vm._s(_vm.errors.first("street")))]
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
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("group"),
                              expression: "errors.has('group')"
                            }
                          ],
                          staticClass: "text-danger"
                        },
                        [_vm._v(_vm._s(_vm.errors.first("group")))]
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
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("village"),
                              expression: "errors.has('village')"
                            }
                          ],
                          staticClass: "text-danger"
                        },
                        [_vm._v(_vm._s(_vm.errors.first("village")))]
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
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("sangkat"),
                              expression: "errors.has('sangkat')"
                            }
                          ],
                          staticClass: "text-danger"
                        },
                        [_vm._v(_vm._s(_vm.errors.first("sangkat")))]
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
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("district"),
                              expression: "errors.has('district')"
                            }
                          ],
                          staticClass: "text-danger"
                        },
                        [_vm._v(_vm._s(_vm.errors.first("district")))]
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
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("province"),
                              expression: "errors.has('province')"
                            }
                          ],
                          staticClass: "text-danger"
                        },
                        [_vm._v(_vm._s(_vm.errors.first("province")))]
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
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("muncipality"),
                              expression: "errors.has('muncipality')"
                            }
                          ],
                          staticClass: "text-danger"
                        },
                        [_vm._v(_vm._s(_vm.errors.first("muncipality")))]
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
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("tel"),
                              expression: "errors.has('tel')"
                            }
                          ],
                          staticClass: "text-danger"
                        },
                        [_vm._v(_vm._s(_vm.errors.first("tel")))]
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
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("email"),
                              expression: "errors.has('email')"
                            }
                          ],
                          staticClass: "text-danger"
                        },
                        [_vm._v(_vm._s(_vm.errors.first("email")))]
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
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("industry"),
                              expression: "errors.has('industry')"
                            }
                          ],
                          staticClass: "text-danger"
                        },
                        [_vm._v(_vm._s(_vm.errors.first("industry")))]
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
                              attrs: { button: "submit", type: "gradient" }
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