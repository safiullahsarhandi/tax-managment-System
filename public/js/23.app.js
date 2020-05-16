(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Payrolls/PayrollDetail.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Payrolls/PayrollDetail.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_components_customizer_CommentDrawer_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/layouts/components/customizer/CommentDrawer.vue */ "./resources/js/src/layouts/components/customizer/CommentDrawer.vue");
/* harmony import */ var vue_burger_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-burger-menu */ "./node_modules/vue-burger-menu/dist/vue-burger-menu.common.js");
/* harmony import */ var vue_burger_menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_burger_menu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    TheCustomizer: _layouts_components_customizer_CommentDrawer_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Slide: vue_burger_menu__WEBPACK_IMPORTED_MODULE_2__["Slide"] // Register your component

  },
  data: function data() {
    return {
      tax_id: '',
      openComments: false
    };
  },
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.getPayroll(_this.$route.params.id);

            case 2:
              localStorage.setItem('customer', _this.payroll.customer.customer_id);
              localStorage.setItem('currentDetail', '/tax-collection/' + _this.payroll.tax_id);
              _this.tax_id = _this.payroll.tax_id;

              _this.getCustomer(_this.payroll.customer.customer_id);

              _this.$store.dispatch('getAverageRate');

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapState"])('payrolls', ['payroll'])), Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapState"])('customers', ['customer'])), {}, {
    userType: function userType() {
      return this.$store.getters.userType;
    },
    averageRate: function averageRate() {
      return this.$store.state.averageRate;
    },
    non_taxable_sales: function non_taxable_sales() {
      return this.sale.non_taxable_sales * this.averageRate;
    },
    value_of_exports: function value_of_exports() {
      return this.sale.vat * this.averageRate;
    },
    person_vat: function person_vat() {
      return parseFloat(this.sale.taxable_person_sales * 0.1).toFixed(2);
    },
    person_taxable: function person_taxable() {
      return parseFloat(this.sale.taxable_person_sales * this.averageRate);
    },
    person_taxable_vat: function person_taxable_vat() {
      return parseFloat(this.person_taxable * 0.1).toFixed(2);
    },
    customer_vat: function customer_vat() {
      return parseFloat(this.sale.cust_sales * 0.1).toFixed(2);
    },
    customer_taxable: function customer_taxable() {
      return parseFloat(this.sale.cust_sales * this.averageRate);
    },
    customer_taxable_vat: function customer_taxable_vat() {
      return parseFloat(this.customer_taxable * 0.1).toFixed(2);
    }
  }),
  methods: _objectSpread(_objectSpread({
    handleToggleDrawer: function handleToggleDrawer() {
      this.$refs.commentsView.active = !this.$refs.commentsView.active;
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapActions"])({
    getPayroll: 'payrolls/getPayroll',
    getCustomer: 'customers/getCustomer',
    statusChange: 'taxes/statusUpdateSPP',
    statusChangeManagment: 'taxes/statusChangeManagment'
  })), {}, {
    statusUpdate: function statusUpdate(id, status) {
      var _this2 = this;

      var data = {
        id: id,
        tax_id: this.tax_id,
        notify: this.$vs.notify,
        type: 'payroll'
      };
      this.statusChange(data).then(function (res) {
        if (res.data.status != true) {
          if (res.data.response == 'undefined') {
            _this2.payroll.officer_confirmed = status;
          } else {
            _this2.payroll.officer_confirmed = res.data.response;
          }
        }
      });
    },
    changeManagementStatus: function changeManagementStatus(status, id, by) {
      var data = {
        id: id,
        status: status,
        by: by,
        tax_id: this.tax_id,
        notify: this.$vs.notify,
        tax_type: 'payroll'
      };
      this.statusChangeManagment(data).then(function (res) {});
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Payrolls/PayrollDetail.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Payrolls/PayrollDetail.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bm-menu {\n  z-index: 99999;\n}\n.bm-burger-button {\n  position: fixed;\n  width: 36px;\n  height: 30px;\n  left: 36px;\n  top: 36px;\n  cursor: pointer;\n}\n.bm-burger-bars {\n  background-color: #373a47;\n}\n.line-style {\n  position: absolute;\n  height: 20%;\n  left: 0;\n  right: 0;\n}\n.cross-style {\n  position: absolute;\n  top: 12px;\n  right: 2px !important;\n  cursor: pointer;\n}\n.bm-cross {\n  background: #bdc3c7;\n}\n.bm-cross-button {\n  height: 24px;\n  width: 24px;\n}\n.bm-menu {\n  height: 100%;\n  /* 100% Full-height */\n  width: 0;\n  /* 0 width - change this with JavaScript */\n  position: fixed;\n  /* Stay in place */\n  top: 0;\n  left: 0;\n  background-color: #3f3f41;\n  /* Black*/\n  overflow-x: hidden;\n  /* Disable horizontal scroll */\n  padding-top: 60px;\n  /* Place content 60px from the top */\n  transition: 0.5s;\n  /*0.5 second transition effect to slide in the sidenav*/\n}\n.bm-overlay {\n  background: rgba(0, 0, 0, 0.3);\n}\n.bm-item-list {\n  color: #b8b7ad;\n  margin-left: 10%;\n  font-size: 20px;\n}\n.bm-item-list > * {\n  display: flex;\n  text-decoration: none;\n  padding: 0.7em;\n}\n.bm-item-list > * > span {\n  margin-left: 10px;\n  font-weight: 700;\n  color: white;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Payrolls/PayrollDetail.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Payrolls/PayrollDetail.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PayrollDetail.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Payrolls/PayrollDetail.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Payrolls/PayrollDetail.vue?vue&type=template&id=7bb06a2a&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Payrolls/PayrollDetail.vue?vue&type=template&id=7bb06a2a& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
            { attrs: { "vs-lg": "9", "vs-md": "9", "vs-sm": "12" } },
            [
              _c(
                "vx-card",
                { attrs: { title: "Payroll Detail" } },
                [
                  _c(
                    "vs-row",
                    [
                      _c(
                        "vs-col",
                        {
                          staticClass: "mt-5",
                          attrs: { "vs-lg": "4", "vs-md": "4", "vs-sm": "12" }
                        },
                        [
                          _c("h6", [_vm._v("Client TIN:")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.customer.tin_no))])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        {
                          staticClass: "mt-5",
                          attrs: { "vs-lg": "4", "vs-md": "4", "vs-sm": "12" }
                        },
                        [
                          _c("h6", [_vm._v("Client Name:")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.customer.name_english))])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        {
                          staticClass: "mt-5",
                          attrs: { "vs-lg": "4", "vs-md": "4", "vs-sm": "12" }
                        },
                        [
                          _c("h6", [_vm._v("Basic Salary:")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.payroll.basic_salary))])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        {
                          staticClass: "mt-5",
                          attrs: { "vs-lg": "4", "vs-md": "4", "vs-sm": "12" }
                        },
                        [
                          _c("h6", [_vm._v("Seniority Payment:")]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(_vm._s(_vm.payroll.seniority_payment))
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        {
                          staticClass: "mt-5",
                          attrs: { "vs-lg": "4", "vs-md": "4", "vs-sm": "12" }
                        },
                        [
                          _c("h6", [_vm._v("Severance Pay:")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.payroll.severance_pay))])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        {
                          staticClass: "mt-5",
                          attrs: { "vs-lg": "4", "vs-md": "4", "vs-sm": "12" }
                        },
                        [
                          _c("h6", [_vm._v("Bonus:")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.payroll.bonus))])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        {
                          staticClass: "mt-5",
                          attrs: { "vs-lg": "4", "vs-md": "4", "vs-sm": "12" }
                        },
                        [
                          _c("h6", [_vm._v("Over Time:")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.payroll.over_time))])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        {
                          staticClass: "mt-5",
                          attrs: { "vs-lg": "4", "vs-md": "4", "vs-sm": "12" }
                        },
                        [
                          _c("h6", [_vm._v("Commissions:")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.payroll.commissions))])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        {
                          staticClass: "mt-5",
                          attrs: { "vs-lg": "4", "vs-md": "4", "vs-sm": "12" }
                        },
                        [
                          _c("h6", [_vm._v("Maternity Leave:")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.payroll.maternity_leave))])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        {
                          staticClass: "mt-5",
                          attrs: { "vs-lg": "4", "vs-md": "4", "vs-sm": "12" }
                        },
                        [
                          _c("h6", [_vm._v("Paid Annual Leave:")]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(_vm._s(_vm.payroll.paid_annual_leave))
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        {
                          staticClass: "mt-5",
                          attrs: { "vs-lg": "4", "vs-md": "4", "vs-sm": "12" }
                        },
                        [
                          _c("h6", [_vm._v("Food Allowance:")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.payroll.food_allowance))])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        {
                          staticClass: "mt-5",
                          attrs: { "vs-lg": "4", "vs-md": "4", "vs-sm": "12" }
                        },
                        [
                          _c("h6", [_vm._v("Transport Allowance:")]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(_vm._s(_vm.payroll.transport_allowance))
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        {
                          staticClass: "mt-5",
                          attrs: { "vs-lg": "4", "vs-md": "4", "vs-sm": "12" }
                        },
                        [
                          _c("h6", [_vm._v("Deduction Advance:")]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(_vm._s(_vm.payroll.deduction_advance))
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        {
                          staticClass: "mt-5",
                          attrs: { "vs-lg": "4", "vs-md": "4", "vs-sm": "12" }
                        },
                        [
                          _c("h6", [_vm._v("Salary Adjusment:")]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(_vm._s(_vm.payroll.salary_adjusment))
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        {
                          staticClass: "mt-5",
                          attrs: { "vs-lg": "4", "vs-md": "4", "vs-sm": "12" }
                        },
                        [
                          _c("h6", [_vm._v("Others:")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.payroll.others))])
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
                "vx-card",
                {
                  staticClass: "mt-base",
                  attrs: { title: "Payrolls Summary" }
                },
                [
                  _c(
                    "vs-row",
                    [
                      _c(
                        "vs-col",
                        {
                          staticClass: "mt-5",
                          attrs: { "vs-lg": "6", "vs-md": "6", "vs-sm": "12" }
                        },
                        [
                          _c("h6", [_vm._v("Non Taxable Sale:")]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              _vm._s(_vm.customer.non_taxable_sales || "NA")
                            )
                          ])
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
              attrs: { "vs-lg": "3", "vs-md": "3", "vs-xl": "3", "vs-sm": "12" }
            },
            [
              _c(
                "vx-card",
                { attrs: { title: "Actions" } },
                [
                  _c(
                    "vs-list",
                    [
                      _c(
                        "vs-list-item",
                        { attrs: { title: "Edit Purchase" } },
                        [
                          _c("vs-button", {
                            attrs: {
                              to: "/purchase-update/" + _vm.$route.params.id,
                              "icon-pack": "feather",
                              size: "small",
                              icon: "icon-edit"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      [
                        _vm.userType == "Admin" || _vm.userType == "Super Admin"
                          ? _c(
                              "vs-list-item",
                              { attrs: { title: "Status" } },
                              [
                                _c("vs-button", {
                                  attrs: {
                                    "icon-pack": "feather",
                                    size: "small",
                                    icon: "icon-check-circle"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.changeManagementStatus(
                                        "1",
                                        _vm.payroll.payroll_id,
                                        "admin"
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("vs-button", {
                                  attrs: {
                                    "icon-pack": "feather",
                                    size: "small",
                                    icon: "icon-x-circle"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.changeManagementStatus(
                                        "0",
                                        _vm.payroll.payroll_id,
                                        "admin"
                                      )
                                    }
                                  }
                                })
                              ],
                              1
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.userType == "Supervisor"
                          ? _c(
                              "vs-list-item",
                              { attrs: { title: "Status" } },
                              [
                                _c("vs-button", {
                                  attrs: {
                                    "icon-pack": "feather",
                                    size: "small",
                                    icon: "icon-check-circle"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.changeManagementStatus(
                                        "1",
                                        _vm.payroll.payroll_id,
                                        "supervisor"
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("vs-button", {
                                  attrs: {
                                    "icon-pack": "feather",
                                    size: "small",
                                    icon: "icon-x-circle"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.changeManagementStatus(
                                        "0",
                                        _vm.payroll.payroll_id,
                                        "supervisor"
                                      )
                                    }
                                  }
                                })
                              ],
                              1
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.userType == "Officer"
                          ? _c(
                              "vs-list-item",
                              { attrs: { title: "Status" } },
                              [
                                _c("vs-switch", {
                                  attrs: { "icon-pack": "feather" },
                                  on: {
                                    click: function($event) {
                                      return _vm.statusUpdate(
                                        _vm.payroll.payroll_id,
                                        _vm.payroll.officer_confirmed
                                      )
                                    }
                                  },
                                  model: {
                                    value: _vm.payroll.officer_confirmed,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.payroll,
                                        "officer_confirmed",
                                        $$v
                                      )
                                    },
                                    expression: "payroll.officer_confirmed"
                                  }
                                })
                              ],
                              1
                            )
                          : _vm._e()
                      ],
                      _vm._v(" "),
                      _c(
                        "vs-list-item",
                        { attrs: { title: "View Comments" } },
                        [
                          _c("vs-button", {
                            attrs: {
                              "icon-pack": "feather",
                              size: "small",
                              icon: "icon-maximize-2"
                            },
                            on: { click: _vm.handleToggleDrawer }
                          })
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
        ],
        1
      ),
      _vm._v(" "),
      _c("the-customizer", {
        ref: "commentsView",
        attrs: {
          object_id: _vm.$route.params.id,
          type: "Payroll",
          "comments-url": "get-comments"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/pages/Payrolls/PayrollDetail.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/src/views/pages/Payrolls/PayrollDetail.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PayrollDetail_vue_vue_type_template_id_7bb06a2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PayrollDetail.vue?vue&type=template&id=7bb06a2a& */ "./resources/js/src/views/pages/Payrolls/PayrollDetail.vue?vue&type=template&id=7bb06a2a&");
/* harmony import */ var _PayrollDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PayrollDetail.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Payrolls/PayrollDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PayrollDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PayrollDetail.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/pages/Payrolls/PayrollDetail.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PayrollDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PayrollDetail_vue_vue_type_template_id_7bb06a2a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PayrollDetail_vue_vue_type_template_id_7bb06a2a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/Payrolls/PayrollDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/Payrolls/PayrollDetail.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Payrolls/PayrollDetail.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PayrollDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PayrollDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Payrolls/PayrollDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PayrollDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Payrolls/PayrollDetail.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Payrolls/PayrollDetail.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PayrollDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PayrollDetail.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Payrolls/PayrollDetail.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PayrollDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PayrollDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PayrollDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PayrollDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PayrollDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/Payrolls/PayrollDetail.vue?vue&type=template&id=7bb06a2a&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Payrolls/PayrollDetail.vue?vue&type=template&id=7bb06a2a& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PayrollDetail_vue_vue_type_template_id_7bb06a2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PayrollDetail.vue?vue&type=template&id=7bb06a2a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Payrolls/PayrollDetail.vue?vue&type=template&id=7bb06a2a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PayrollDetail_vue_vue_type_template_id_7bb06a2a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PayrollDetail_vue_vue_type_template_id_7bb06a2a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);