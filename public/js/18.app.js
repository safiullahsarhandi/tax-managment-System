(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Companies/CompanyLog.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Companies/CompanyLog.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/ExchangeRates.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/ExchangeRates.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee
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
<<<<<<< HEAD

/* harmony default export */ __webpack_exports__["default"] = ({
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('customers', ['logs'])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    getLogs: 'customers/getLogs'
  })),
  data: function data() {
    return {
      tax_id: ''
    };
  },
  created: function created() {
    this.customer_id = localStorage.getItem('customer');
    var data = {
      // type : 'sale',
      customer_id: this.customer_id
    };
    this.getLogs(data);
  }
=======
//
//
//
//
//
//
//
//
//
//
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
  inject: ['loginUser'],
  data: function data() {
    return {
      formTitle: 'Update Exchange Rates',
      updateBtn: 'Save changes',
      editRatesModal: false,
      salary_rate: 0,
      average_rate: 0,
      annual_rate: 0,
      daily_rate: 0
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('exchangerates/', ['exchangerates'])),
  created: function created() {
    this.getExchangeRates();
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    getExchangeRates: 'exchangerates/getExchangeRates',
    update: 'exchangerates/updateExchangeRates'
  }), {
    editRates: function editRates() {
      if (this.exchangerates[0]['value'] == 0 && this.exchangerates[1]['value'] == 0 && this.exchangerates[2]['value'] == 0) {
        this.formTitle = 'Add Exchange Rates';
        this.updateBtn = 'Save';
      }

      this.salary_rate = this.exchangerates[0]['value'];
      this.average_rate = this.exchangerates[1]['value'];
      this.annual_rate = this.exchangerates[2]['value'];
      this.editRatesModal = true;
    },
    updateRates: function updateRates(e) {
      var _this = this;

      this.$validator.validateAll('editform').then(function (result) {
        if (result) {
          _this.$vs.loading();

          var fd = new FormData(_this.$refs.editRatesForm);

          _this.update(fd).then(function (res) {
            if (res.data.status == 'success') {
              e.target.reset();

              _this.errors.clear();

              _this.editRatesModal = false;

              _this.$vs.notify({
                title: 'Success',
                text: 'Save changes successfully',
                color: 'success',
                position: 'top-right'
              });

              _this.$vs.loading.close();

              _this.getExchangeRates();
            }
          });
        }
      });
    }
  })
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee
});

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Companies/CompanyLog.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Companies/CompanyLog.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
=======
/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/ExchangeRates.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/ExchangeRates.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee
// imports


// module
<<<<<<< HEAD
exports.push([module.i, "span.oldVal::before {\n  content: \"Old Value:\" !important;\n  display: block;\n  font-size: 12px;\n}\nspan.newVal::before {\n  content: \"New Value:\" !important;\n  display: block;\n  font-size: 12px;\n}\n", ""]);
=======
exports.push([module.i, ".vs-con-table .vs-con-tbody .vs-table--tbody-table .vs-table--thead th {\n  width: 10px;\n}\n.con-vs-popup .vs-popup {\n  width: 300px !important;\n}\r\n\r\n", ""]);
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee

// exports


/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Companies/CompanyLog.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Companies/CompanyLog.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/ExchangeRates.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/ExchangeRates.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


<<<<<<< HEAD
var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyLog.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Companies/CompanyLog.vue?vue&type=style&index=0&lang=css&");
=======
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ExchangeRates.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/ExchangeRates.vue?vue&type=style&index=0&lang=css&");
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

<<<<<<< HEAD
var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);
=======
var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Companies/CompanyLog.vue?vue&type=template&id=79ed9920&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Companies/CompanyLog.vue?vue&type=template&id=79ed9920& ***!
  \****************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/ExchangeRates.vue?vue&type=template&id=1889dc6b&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/ExchangeRates.vue?vue&type=template&id=1889dc6b& ***!
  \*********************************************************************************************************************************************************************************************************************/
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee
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
        { attrs: { title: "Activity Log" } },
        [
          _c(
            "vs-table",
            {
              attrs: { data: _vm.logs },
=======
        { attrs: { title: "Exchange Rates" } },
        [
          _c(
            "template",
            { slot: "actions" },
            [
              _c("vs-button", {
                attrs: {
                  type: "border",
                  "icon-pack": "feather",
                  icon: "icon-edit"
                },
                on: {
                  click: function($event) {
                    return _vm.editRates()
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
              attrs: { data: _vm.exchangerates },
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(ref) {
                    var data = ref.data
<<<<<<< HEAD
                    return _vm._l(data, function(tr, index) {
                      return _c(
                        "vs-tr",
                        { key: index, attrs: { data: tr } },
                        [
                          _c("vs-td", [_vm._v(_vm._s(tr.type))]),
                          _vm._v(" "),
                          _c("vs-td", [_vm._v(_vm._s(tr.event))]),
                          _vm._v(" "),
                          _c("vs-td", [_vm._v(_vm._s(tr.description))]),
                          _vm._v(" "),
                          _c("vs-td", [_vm._v(_vm._s(tr.created_at))]),
                          _vm._v(" "),
                          _c(
                            "template",
                            { staticClass: "expand-user", slot: "expand" },
                            [
                              _c(
                                "vs-row",
                                [
                                  _c(
                                    "vs-col",
                                    {
                                      attrs: {
                                        "vs-lg": "12",
                                        "vs-md": "12",
                                        "vs-sm": "12",
                                        "vs-xs": "12"
                                      }
                                    },
                                    [
                                      _c("h4", [
                                        _vm._v(
                                          _vm._s(
                                            tr.event == "create"
                                              ? "Created Data History"
                                              : "Updated Data History"
                                          )
                                        )
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  [
                                    tr.event == "update"
                                      ? _c(
                                          "vs-row",
                                          { staticClass: "mt-base" },
                                          _vm._l(tr.changes, function(
                                            changes,
                                            index2
                                          ) {
                                            return _c(
                                              "vs-col",
                                              {
                                                key: index2,
                                                attrs: {
                                                  "vs-lg": "4",
                                                  "vs-md": "4",
                                                  "vs-sm": "12",
                                                  "vs-xs": "12"
                                                }
                                              },
                                              [
                                                _c("div", [
                                                  _c("h5", [
                                                    _vm._v(
                                                      _vm._s(
                                                        index2
                                                          .split("_")
                                                          .join(" ")
                                                      )
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "bg-dark-gradient flex justify-around rounded-lg text-white"
                                                    },
                                                    [
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass: "oldVal"
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              changes.old_value
                                                            )
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(
                                                        "-> \n                                \t\t\t"
                                                      ),
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass: "newVal"
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              changes.new_value
                                                            )
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                ])
                                              ]
                                            )
                                          }),
                                          1
                                        )
                                      : _c(
                                          "vs-row",
                                          { staticClass: "mt-base" },
                                          _vm._l(tr.changes, function(
                                            changes,
                                            index2
                                          ) {
                                            return _c(
                                              "vs-col",
                                              {
                                                key: index2,
                                                attrs: {
                                                  "vs-lg": "4",
                                                  "vs-md": "4",
                                                  "vs-sm": "12",
                                                  "vs-xs": "12"
                                                }
                                              },
                                              [
                                                _c("div", [
                                                  _c("h5", [
                                                    _vm._v(
                                                      _vm._s(
                                                        index2
                                                          .split("_")
                                                          .join(" ")
                                                      )
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass: "rounded-lg"
                                                    },
                                                    [
                                                      _c("span", [
                                                        _vm._v(
                                                          _vm._s(
                                                            changes || "NA"
                                                          )
                                                        )
                                                      ])
                                                    ]
                                                  )
                                                ])
                                              ]
                                            )
                                          }),
                                          1
                                        )
                                  ]
                                ],
                                2
                              )
                            ],
                            1
                          )
                        ],
                        2
                      )
                    })
=======
                    return [
                      _c(
                        "vs-tr",
                        { attrs: { data: data } },
                        _vm._l(_vm.exchangerates, function(tr, index) {
                          return _c(
                            "vs-td",
                            { key: index, attrs: { data: tr.value } },
                            [
                              _vm._v(
                                "\n                      " +
                                  _vm._s(tr.value) +
                                  "\n                    "
                              )
                            ]
                          )
                        }),
                        1
                      )
                    ]
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee
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
                  _c("vs-th", [_vm._v("Type")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Event")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Description")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("created / updated at")])
=======
                  _c("vs-th", [
                    _vm._v(
                      "\n                    Salary Rate\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c("vs-th", [
                    _vm._v(
                      "\n                    Average Rate\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c("vs-th", [
                    _vm._v(
                      "\n                    Annual Rate\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c("vs-th", [
                    _vm._v("\n                    Daily Rate\n                ")
                  ])
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee
                ],
                1
              )
            ],
            2
          )
        ],
<<<<<<< HEAD
        1
=======
        2
      ),
      _vm._v(" "),
      _c(
        "vs-popup",
        {
          attrs: { active: _vm.editRatesModal, title: _vm.formTitle },
          on: {
            "update:active": function($event) {
              _vm.editRatesModal = $event
            }
          }
        },
        [
          _c(
            "form",
            {
              ref: "editRatesForm",
              attrs: { autocomplete: "off", "data-vv-scope": "editform" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.updateRates($event)
                }
              }
            },
            [
              _c(
                "vs-row",
                [
                  _c(
                    "vs-col",
                    { attrs: { "vs-lg": "12", "vs-md": "12", "vs-sm": "12" } },
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
                              name: "salary_rate",
                              "label-placeholder": "Salary Rates",
                              "data-vv-scope": "editform"
                            },
                            model: {
                              value: _vm.salary_rate,
                              callback: function($$v) {
                                _vm.salary_rate = $$v
                              },
                              expression: "salary_rate"
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
                                  value: _vm.errors.has("editform.salary_rate"),
                                  expression:
                                    "errors.has('editform.salary_rate')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("editform.salary_rate"))
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
                              name: "average_rate",
                              "label-placeholder": "Average Rate",
                              "data-vv-scope": "editform"
                            },
                            model: {
                              value: _vm.average_rate,
                              callback: function($$v) {
                                _vm.average_rate = $$v
                              },
                              expression: "average_rate"
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
                                  value: _vm.errors.has(
                                    "editform.average_rate"
                                  ),
                                  expression:
                                    "errors.has('editform.average_rate')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.errors.first("editform.average_rate")
                                )
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
                              name: "annual_rate",
                              "label-placeholder": "Annual Rate",
                              "data-vv-scope": "editform"
                            },
                            model: {
                              value: _vm.annual_rate,
                              callback: function($$v) {
                                _vm.annual_rate = $$v
                              },
                              expression: "annual_rate"
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
                                  value: _vm.errors.has("editform.annual_rate"),
                                  expression:
                                    "errors.has('editform.annual_rate')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("editform.annual_rate"))
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
                              name: "daily_rate",
                              "label-placeholder": "Daily Rate",
                              "data-vv-scope": "editform"
                            },
                            model: {
                              value: _vm.daily_rate,
                              callback: function($$v) {
                                _vm.daily_rate = $$v
                              },
                              expression: "daily_rate"
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
                                  value: _vm.errors.has("editform.daily_rate"),
                                  expression:
                                    "errors.has('editform.daily_rate')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("editform.daily_rate"))
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
                        [_vm._v(_vm._s(_vm.updateBtn))]
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
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/src/views/pages/Companies/CompanyLog.vue":
/*!***************************************************************!*\
  !*** ./resources/js/src/views/pages/Companies/CompanyLog.vue ***!
  \***************************************************************/
=======
/***/ "./resources/js/src/views/pages/ExchangeRates.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/views/pages/ExchangeRates.vue ***!
  \********************************************************/
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _CompanyLog_vue_vue_type_template_id_79ed9920___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CompanyLog.vue?vue&type=template&id=79ed9920& */ "./resources/js/src/views/pages/Companies/CompanyLog.vue?vue&type=template&id=79ed9920&");
/* harmony import */ var _CompanyLog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CompanyLog.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Companies/CompanyLog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CompanyLog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CompanyLog.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/pages/Companies/CompanyLog.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
=======
/* harmony import */ var _ExchangeRates_vue_vue_type_template_id_1889dc6b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExchangeRates.vue?vue&type=template&id=1889dc6b& */ "./resources/js/src/views/pages/ExchangeRates.vue?vue&type=template&id=1889dc6b&");
/* harmony import */ var _ExchangeRates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExchangeRates.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/ExchangeRates.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ExchangeRates_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExchangeRates.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/pages/ExchangeRates.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
<<<<<<< HEAD
  _CompanyLog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CompanyLog_vue_vue_type_template_id_79ed9920___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CompanyLog_vue_vue_type_template_id_79ed9920___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
=======
  _ExchangeRates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ExchangeRates_vue_vue_type_template_id_1889dc6b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ExchangeRates_vue_vue_type_template_id_1889dc6b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
<<<<<<< HEAD
component.options.__file = "resources/js/src/views/pages/Companies/CompanyLog.vue"
=======
component.options.__file = "resources/js/src/views/pages/ExchangeRates.vue"
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/src/views/pages/Companies/CompanyLog.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Companies/CompanyLog.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
=======
/***/ "./resources/js/src/views/pages/ExchangeRates.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/pages/ExchangeRates.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyLog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyLog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Companies/CompanyLog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyLog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Companies/CompanyLog.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Companies/CompanyLog.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************/
=======
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExchangeRates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ExchangeRates.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/ExchangeRates.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExchangeRates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/ExchangeRates.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/pages/ExchangeRates.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************/
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyLog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyLog.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Companies/CompanyLog.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyLog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyLog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyLog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyLog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyLog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/Companies/CompanyLog.vue?vue&type=template&id=79ed9920&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Companies/CompanyLog.vue?vue&type=template&id=79ed9920& ***!
  \**********************************************************************************************/
=======
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExchangeRates_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ExchangeRates.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/ExchangeRates.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExchangeRates_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExchangeRates_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExchangeRates_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExchangeRates_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExchangeRates_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/ExchangeRates.vue?vue&type=template&id=1889dc6b&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/pages/ExchangeRates.vue?vue&type=template&id=1889dc6b& ***!
  \***************************************************************************************/
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyLog_vue_vue_type_template_id_79ed9920___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyLog.vue?vue&type=template&id=79ed9920& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Companies/CompanyLog.vue?vue&type=template&id=79ed9920&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyLog_vue_vue_type_template_id_79ed9920___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyLog_vue_vue_type_template_id_79ed9920___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
=======
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExchangeRates_vue_vue_type_template_id_1889dc6b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ExchangeRates.vue?vue&type=template&id=1889dc6b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/ExchangeRates.vue?vue&type=template&id=1889dc6b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExchangeRates_vue_vue_type_template_id_1889dc6b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExchangeRates_vue_vue_type_template_id_1889dc6b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee



/***/ })

}]);