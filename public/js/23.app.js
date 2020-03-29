<<<<<<< HEAD
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      addTaxManagmentModal: false,
      editTaxManagmentModal: false,
      title: "",
      description: "",
      type: 'Monthly',
      duration: '',
      supervisor: '',
      officer: [],
      default_selected_officer: "",
      default_selected_supervisor: ""
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('supervisors/', ['supervisors']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('officers/', ['officers'])),
  created: function created() {
    this.getSupervisors();
    this.getOfficers();
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    getSupervisors: 'supervisors/getSupervisors',
    getOfficers: 'officers/getOfficers'
  }), {
    check: function check() {
      this.addTaxManagmentModal = true;
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".selectExample {\n  margin: 10px;\n}\n.con-select-example {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.con-select .vs-select {\n  width: 100%\n}\n@media (max-width: 550px) {\n.con-select {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n}\n.con-select .vs-select {\n    width: 100%\n}\n}\r\n\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TaxManagment.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=template&id=89c4bd8a&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=template&id=89c4bd8a& ***!
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
            title: "List of Taxes",
            subtitle:
              "The List of Taxes contains currently assigned taxes of customer Or those which are delivered succesfully"
          }
        },
        [
          _c(
            "template",
            { slot: "actions" },
            [
              _c("vs-button", {
                attrs: {
                  type: "border",
                  "icon-pack": "feather",
                  icon: "icon-plus"
                },
                on: {
                  click: function($event) {
                    return _vm.check()
                  }
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "vs-table",
            {
              attrs: { search: "", pagination: "", data: [] },
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
                          _c("vs-td", [_vm._v("Title")]),
                          _vm._v(" "),
                          _c("vs-td", [_vm._v("Description")]),
                          _vm._v(" "),
                          _c("vs-td", [_vm._v("Company")]),
                          _vm._v(" "),
                          _c("vs-td", [_vm._v("Supervisor")]),
                          _vm._v(" "),
                          _c("vs-td", [_vm._v("No. of Officers")]),
                          _vm._v(" "),
                          _c("vs-td", [_vm._v("Status")]),
                          _vm._v(" "),
                          _c("vs-td", [_vm._v("Actions")])
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
                  _c("vs-th", [_vm._v("Title")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Description")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Company")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Supervisor")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("No. of Officers")]),
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
      ),
      _vm._v(" "),
      _c(
        "vs-popup",
        {
          attrs: {
            active: _vm.addTaxManagmentModal,
            title: "Add Tax Managment"
          },
          on: {
            "update:active": function($event) {
              _vm.addTaxManagmentModal = $event
            }
          }
        },
        [
          _c(
            "form",
            {
              ref: "addTaxManagmentForm",
              attrs: { "data-vv-scope": "addform" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.addTaxManagment($event)
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
                              name: "title",
                              "label-placeholder": "Title",
                              "data-vv-scope": "addform"
                            },
                            model: {
                              value: _vm.title,
                              callback: function($$v) {
                                _vm.title = $$v
                              },
                              expression: "title"
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
                                  value: _vm.errors.has("addform.title"),
                                  expression: "errors.has('addform.title')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [_vm._v(_vm._s(_vm.errors.first("addform.title")))]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vx-input-group",
                        [
                          _c("br"),
                          _vm._v(" "),
                          _c("vs-textarea", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'"
                              }
                            ],
                            attrs: {
                              name: "description",
                              counter: 20,
                              label: "Description",
                              "data-vv-scope": "addform"
                            },
                            model: {
                              value: _vm.description,
                              callback: function($$v) {
                                _vm.description = $$v
                              },
                              expression: "description"
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
                                  value: _vm.errors.has("addform.description"),
                                  expression:
                                    "errors.has('addform.description')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("addform.description"))
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
                              name: "duration",
                              "label-placeholder": "Duration",
                              "data-vv-scope": "addform"
                            },
                            model: {
                              value: _vm.duration,
                              callback: function($$v) {
                                _vm.duration = $$v
                              },
                              expression: "duration"
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
                                  value: _vm.errors.has("addform.duration"),
                                  expression: "errors.has('addform.duration')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("addform.duration"))
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c(
                        "vx-input-group",
                        { staticClass: "mt-2" },
                        [
                          _c("label", [_vm._v("Tax Period")]),
                          _c("br"),
                          _c("br"),
                          _vm._v(" "),
                          _c(
                            "vs-radio",
                            {
                              attrs: { name: "type", "vs-value": "Monthly" },
                              model: {
                                value: _vm.type,
                                callback: function($$v) {
                                  _vm.type = $$v
                                },
                                expression: "type"
                              }
                            },
                            [_vm._v("Monthly")]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-radio",
                            {
                              attrs: { name: "type", "vs-value": "Yearly" },
                              model: {
                                value: _vm.type,
                                callback: function($$v) {
                                  _vm.type = $$v
                                },
                                expression: "type"
                              }
                            },
                            [_vm._v("Yearly")]
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
                          _c(
                            "vs-select",
                            {
                              staticClass: "selectExample",
                              attrs: { label: "Figuras" },
                              model: {
                                value: _vm.supervisor,
                                callback: function($$v) {
                                  _vm.supervisor = $$v
                                },
                                expression: "supervisor"
                              }
                            },
                            [
                              _c("vs-select-item", {
                                attrs: { value: "", text: "Select Supervisor" }
                              }),
                              _vm._v(" "),
                              _vm._l(_vm.supervisors, function(item, index) {
                                return _c("vs-select-item", {
                                  key: index,
                                  attrs: {
                                    value: item.manager_id,
                                    text: item.first_name + " " + item.last_name
                                  }
                                })
                              })
                            ],
                            2
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vx-input-group",
                        { staticClass: "mt-2" },
                        [
                          _c(
                            "vs-select",
                            {
                              staticClass: "selectExample",
                              attrs: {
                                placeholder: "Search and select",
                                label: "Officers",
                                "label-placeholder": "Officers",
                                multiple: ""
                              },
                              model: {
                                value: _vm.officer,
                                callback: function($$v) {
                                  _vm.officer = $$v
                                },
                                expression: "officer"
                              }
                            },
                            [
                              _c("vs-select-item", {
                                attrs: {
                                  value: "",
                                  disabled: true,
                                  text: "Select Officers"
                                }
                              }),
                              _vm._v(" "),
                              _vm._l(_vm.officers, function(item, index) {
                                return _c("vs-select-item", {
                                  key: index,
                                  attrs: {
                                    value: item.manager_id,
                                    text: item.first_name + " " + item.last_name
                                  }
                                })
                              })
                            ],
                            2
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
                        [_vm._v("Add Tax Managment")]
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

/***/ "./resources/js/src/views/pages/tax-managment/TaxManagment.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/src/views/pages/tax-managment/TaxManagment.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TaxManagment_vue_vue_type_template_id_89c4bd8a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaxManagment.vue?vue&type=template&id=89c4bd8a& */ "./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=template&id=89c4bd8a&");
/* harmony import */ var _TaxManagment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaxManagment.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TaxManagment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TaxManagment.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TaxManagment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TaxManagment_vue_vue_type_template_id_89c4bd8a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TaxManagment_vue_vue_type_template_id_89c4bd8a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/tax-managment/TaxManagment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxManagment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TaxManagment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxManagment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxManagment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TaxManagment.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxManagment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxManagment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxManagment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxManagment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxManagment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=template&id=89c4bd8a&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=template&id=89c4bd8a& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxManagment_vue_vue_type_template_id_89c4bd8a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TaxManagment.vue?vue&type=template&id=89c4bd8a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=template&id=89c4bd8a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxManagment_vue_vue_type_template_id_89c4bd8a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxManagment_vue_vue_type_template_id_89c4bd8a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
=======
(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{150:function(e,t,r){"use strict";r.r(t);var s=r(1);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(r,!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var o={data:function(){return{addTaxManagmentModal:!1,editTaxManagmentModal:!1,title:"",description:"",type:"Monthly",duration:"",supervisor:"",officer:[],default_selected_officer:"",default_selected_supervisor:""}},computed:i({},Object(s.d)("supervisors/",["supervisors"]),{},Object(s.d)("officers/",["officers"])),created:function(){this.getSupervisors(),this.getOfficers()},methods:i({},Object(s.b)({getSupervisors:"supervisors/getSupervisors",getOfficers:"officers/getOfficers"}),{check:function(){this.addTaxManagmentModal=!0}})},l=(r(76),r(2)),c=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("vx-card",{attrs:{title:"List of Taxes",subtitle:"The List of Taxes contains currently assigned taxes of customer Or those which are delivered succesfully"}},[r("template",{slot:"actions"},[r("vs-button",{attrs:{type:"border","icon-pack":"feather",icon:"icon-plus"},on:{click:function(t){return e.check()}}})],1),e._v(" "),r("vs-table",{attrs:{search:"",pagination:"",data:[]},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.data;return e._l(s,(function(t,s){return r("vs-tr",{key:s},[r("vs-td",[e._v("Title")]),e._v(" "),r("vs-td",[e._v("Description")]),e._v(" "),r("vs-td",[e._v("Company")]),e._v(" "),r("vs-td",[e._v("Supervisor")]),e._v(" "),r("vs-td",[e._v("No. of Officers")]),e._v(" "),r("vs-td",[e._v("Status")]),e._v(" "),r("vs-td",[e._v("Actions")])],1)}))}}])},[r("template",{slot:"thead"},[r("vs-th",[e._v("Title")]),e._v(" "),r("vs-th",[e._v("Description")]),e._v(" "),r("vs-th",[e._v("Company")]),e._v(" "),r("vs-th",[e._v("Supervisor")]),e._v(" "),r("vs-th",[e._v("No. of Officers")]),e._v(" "),r("vs-th",[e._v("Status")]),e._v(" "),r("vs-th",[e._v("Actions")])],1)],2)],2),e._v(" "),r("vs-popup",{attrs:{active:e.addTaxManagmentModal,title:"Add Tax Managment"},on:{"update:active":function(t){e.addTaxManagmentModal=t}}},[r("form",{ref:"addTaxManagmentForm",attrs:{"data-vv-scope":"addform"},on:{submit:function(t){return t.preventDefault(),e.addTaxManagment(t)}}},[r("vs-row",[r("vs-col",{attrs:{"vs-lg":"6","vs-md":"6","vs-sm":"12"}},[r("vx-input-group",[r("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"title","label-placeholder":"Title","data-vv-scope":"addform"},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}}),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("addform.title"),expression:"errors.has('addform.title')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("addform.title")))])],1),e._v(" "),r("vx-input-group",[r("br"),e._v(" "),r("vs-textarea",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"description",counter:20,label:"Description","data-vv-scope":"addform"},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}}),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("addform.description"),expression:"errors.has('addform.description')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("addform.description")))])],1),e._v(" "),r("vx-input-group",{staticClass:"mt-2"},[r("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"duration","label-placeholder":"Duration","data-vv-scope":"addform"},model:{value:e.duration,callback:function(t){e.duration=t},expression:"duration"}}),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("addform.duration"),expression:"errors.has('addform.duration')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("addform.duration")))])],1),e._v(" "),r("br"),e._v(" "),r("vx-input-group",{staticClass:"mt-2"},[r("label",[e._v("Tax Period")]),r("br"),r("br"),e._v(" "),r("vs-radio",{attrs:{name:"type","vs-value":"Monthly"},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},[e._v("Monthly")]),e._v(" "),r("vs-radio",{attrs:{name:"type","vs-value":"Yearly"},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},[e._v("Yearly")])],1)],1),e._v(" "),r("vs-col",{attrs:{"vs-lg":"6","vs-md":"12","vs-sm":"12"}},[r("vx-input-group",{staticClass:"mt-2"},[r("vs-select",{staticClass:"selectExample",attrs:{label:"Figuras"},model:{value:e.supervisor,callback:function(t){e.supervisor=t},expression:"supervisor"}},[r("vs-select-item",{attrs:{value:"",text:"Select Supervisor"}}),e._v(" "),e._l(e.supervisors,(function(e,t){return r("vs-select-item",{key:t,attrs:{value:e.manager_id,text:e.first_name+" "+e.last_name}})}))],2)],1),e._v(" "),r("vx-input-group",{staticClass:"mt-2"},[r("vs-select",{staticClass:"selectExample",attrs:{placeholder:"Search and select",label:"Officers","label-placeholder":"Officers",multiple:""},model:{value:e.officer,callback:function(t){e.officer=t},expression:"officer"}},[r("vs-select-item",{attrs:{value:"",disabled:!0,text:"Select Officers"}}),e._v(" "),e._l(e.officers,(function(e,t){return r("vs-select-item",{key:t,attrs:{value:e.manager_id,text:e.first_name+" "+e.last_name}})}))],2)],1)],1),e._v(" "),r("vs-col",{attrs:{"vs-lg":"12","vs-md":"12","vs-sm":"12"}},[r("br"),e._v(" "),r("vs-button",{staticClass:"float-right",attrs:{button:"submit",type:"gradient"}},[e._v("Add Tax Managment")])],1)],1)],1)])],1)}),[],!1,null,null,null);t.default=c.exports},26:function(e,t,r){var s=r(77);"string"==typeof s&&(s=[[e.i,s,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};r(5)(s,a);s.locals&&(e.exports=s.locals)},76:function(e,t,r){"use strict";var s=r(26);r.n(s).a},77:function(e,t,r){(e.exports=r(4)(!1)).push([e.i,".selectExample {\n  margin: 10px;\n}\n.con-select-example {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.con-select .vs-select {\n  width: 100%\n}\n@media (max-width: 550px) {\n.con-select {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n}\n.con-select .vs-select {\n    width: 100%\n}\n}\r\n\r\n",""])}}]);
>>>>>>> 9279f5548c37aca60b0d3f76080a42724fcbe98b
