(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Customers/Customers.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Customers/Customers.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Home.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
>>>>>>> master
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_statistics_cards_StatisticsCardLine_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/statistics-cards/StatisticsCardLine.vue */ "./resources/js/src/components/statistics-cards/StatisticsCardLine.vue");
/* harmony import */ var _components_analyticsData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/analyticsData.js */ "./resources/js/src/components/analyticsData.js");


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  inject: ['generatePassword', 'loginUser'],
  data: function data() {
    return {
      // switch1: true,
      viewTaxTeamModal: false,
      editCustomerModal: false,
      customer_id: '',
      name_english: '',
      name_khmer: '',
      industry: '',
      tax_card_num: '',
      tin_no: '',
      email: '',
      telephone: '',
      address: '',
      street: '',
      village: '',
      muncipality: '',
      district: '',
      province: '',
      sangkat: '',
      group: '',
      incorporation_date: '',
      customField: [],
      taxes: [],
      tableEntries: 10
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('customers/', ['customers']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('customers/', ['findCustomer'])),
  created: function created() {
    this.getCustomers();
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    getCustomers: 'customers/getCustomers'
  }), {
    statusUpdate: function statusUpdate(id) {
      var _this = this;

      this.$vs.loading();
      axios.post('status-update-customer', {
        id: id
      }).then(function (res) {
        _this.$vs.notify({
          title: 'Updated!...',
          text: res.data.msg,
          color: 'success',
          position: 'top-right'
        });

        _this.$vs.loading.close();
      });
    },
    viewTaxTeam: function viewTaxTeam(id) {
      var customer = this.findCustomer(id);
      console.log(customer);
      console.log(customer.taxes);
      this.taxes = customer.taxes;
      this.viewTaxTeamModal = true;
    }
  })
=======



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      dashboard: [],
      analyticsData: _components_analyticsData_js__WEBPACK_IMPORTED_MODULE_3__["default"]
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])('customers', ['monthlyCustomers', 'yearlyCustomers', 'resubmitted'])),
  created: function created() {
    var gettingDashboardData;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function created$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios.get('get-dashboard-data'));

          case 2:
            gettingDashboardData = _context.sent;
            this.dashboard = gettingDashboardData.data;

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, null, this);
  },
  methods: {},
  components: {
    StatisticsCardLine: _components_statistics_cards_StatisticsCardLine_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
>>>>>>> master
});

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Customers/Customers.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Customers/Customers.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Home.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
>>>>>>> master
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
<<<<<<< HEAD
exports.push([module.i, ".con-vs-popup .vs-popup {\n  width: 1000px !important;\n}\n", ""]);
=======
exports.push([module.i, "#card-1 .vx-card {\n  background: -webkit-gradient(linear, left top, right top, from(#ffbf96), to(#fe7096)) !important;\n  background: linear-gradient(to right, #ffbf96, #fe7096) !important;\n  color: #fff;\n}\n#card-2\t .vx-card {\n  background: -webkit-gradient(linear, right top, left top, from(#90caf9), color-stop(99%, #047edf)) !important;\n  background: linear-gradient(-90deg, #90caf9, #047edf 99%) !important;\n  color: #fff;\n}\n#card-3\t .vx-card {\n  background: -webkit-gradient(linear, right top, left top, from(#84d9d2), to(#07cdae)) !important;\n  background: linear-gradient(-90deg, #84d9d2, #07cdae) !important;\n  color: #fff;\n}\n#home .vx-card .text-primary {\n  color: rgba(var(--vs-dark), 1) !important;\n}\r\n", ""]);
>>>>>>> master

// exports


/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Customers/Customers.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Customers/Customers.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Home.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
>>>>>>> master
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


<<<<<<< HEAD
var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Customers.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Customers/Customers.vue?vue&type=style&index=0&lang=css&");
=======
var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=style&index=0&lang=css&");
>>>>>>> master

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Customers/Customers.vue?vue&type=template&id=24124076&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Customers/Customers.vue?vue&type=template&id=24124076& ***!
  \***************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee& ***!
  \******************************************************************************************************************************************************************************************************/
>>>>>>> master
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
    "vs-row",
    { staticClass: "mt-base p-0", attrs: { id: "home" } },
    [
      _c(
<<<<<<< HEAD
        "vx-card",
        { attrs: { title: "List of Customers" } },
        [
          _c(
            "vs-table",
            {
              attrs: {
                search: "",
                pagination: "",
                "max-items": _vm.tableEntries,
                data: _vm.customers
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
                          _c("vs-td", { attrs: { data: tr.id } }, [
                            _vm._v(" " + _vm._s("C0" + tr.id))
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
                          _c("vs-td", { attrs: { data: tr.id } }, [
                            _vm._v(_vm._s(tr.tax_duration))
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
                          _vm.$store.getters.userType != "Admin"
                            ? _c("vs-td", { attrs: { data: 0 } }, [
                                _vm._v(_vm._s(0))
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.$store.getters.userType == "Admin"
                            ? _c(
                                "vs-td",
                                { attrs: { data: tr.status } },
                                [
                                  _c("vs-switch", {
                                    on: {
                                      click: function($event) {
                                        return _vm.statusUpdate(tr.customer_id)
                                      }
                                    },
                                    model: {
                                      value: tr.status,
                                      callback: function($$v) {
                                        _vm.$set(tr, "status", $$v)
                                      },
                                      expression: "tr.status"
                                    }
                                  })
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            [
                              _vm.$store.getters.userType == "Admin"
                                ? _c("vs-button", {
                                    attrs: {
                                      to: "customer-update/" + tr.customer_id,
                                      size: "small",
                                      type: "border",
                                      "icon-pack": "feather",
                                      icon: "icon-edit"
                                    }
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              _c("vs-button", {
                                attrs: {
                                  to: "customer-detail/" + tr.customer_id,
                                  size: "small",
                                  "icon-pack": "feather",
                                  icon: "icon-maximize-2",
                                  type: "border"
                                }
                              }),
                              _vm._v(" "),
                              _c("vs-button", {
                                attrs: {
                                  size: "small",
                                  "icon-pack": "feather",
                                  icon: "icon-users",
                                  type: "border"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.viewTaxTeam(tr.id)
                                  }
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
                    "vs-row",
                    [
                      _c(
                        "vs-col",
                        {
                          attrs: {
                            "vs-lg": "3",
                            "vs-md": "3",
                            "vs-sm": "12",
                            "vs-xs": "12"
                          }
                        },
                        [
                          _vm._v(
                            "\n                        Show\n                        "
                          ),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.tableEntries,
                                  expression: "tableEntries"
                                }
                              ],
                              staticClass: "vs-select--input",
                              staticStyle: { width: "100px" },
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.tableEntries = $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                }
                              }
                            },
                            [
                              _c("option", {
                                attrs: { value: "10" },
                                domProps: { innerHTML: _vm._s(10) }
                              }),
                              _vm._v(" "),
                              _c("option", {
                                attrs: { value: "25" },
                                domProps: { innerHTML: _vm._s(25) }
                              }),
                              _vm._v(" "),
                              _c("option", {
                                attrs: { value: "50" },
                                domProps: { innerHTML: _vm._s(50) }
                              }),
                              _vm._v(" "),
                              _c("option", {
                                attrs: { value: "100" },
                                domProps: { innerHTML: _vm._s(100) }
                              })
                            ]
                          ),
                          _vm._v(
                            "\n                        Entries\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        {
                          attrs: {
                            "vs-lg": "9",
                            "vs-md": "9",
                            "vs-sm": "12",
                            "vs-xs": "12"
                          }
                        },
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
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "template",
                { slot: "thead" },
                [
                  _c("vs-th", [_vm._v("Customer ID")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Name(English)")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Name(Khmer)")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Industy / Sector")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Tax Duration")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Tax ID")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("TIN # ")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Email")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Tel")]),
                  _vm._v(" "),
                  _vm.$store.getters.userType != "Admin"
                    ? _c("vs-th", [_vm._v("Uncompleted Taxes")])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.$store.getters.userType == "Admin"
                    ? _c("vs-th", [_vm._v("Status")])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Actions")])
                ],
                1
              )
            ],
            2
          )
=======
        "vs-col",
        {
          attrs: {
            id: "card-1",
            "vs-lg": "4",
            "vs-md": "4",
            "vs-sm": "12",
            "vs-xs": "12"
          }
        },
        [
          _c("statistics-card-line", {
            attrs: {
              iconRight: "",
              icon: "DollarSignIcon",
              statistic: 10 + "%",
              statisticTitle: "Monthly Tax",
              statisticSubTitle: "Total No. of Customers",
              chartData: _vm.analyticsData.revenueGenerated,
              type: "area"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vs-col",
        {
          attrs: {
            id: "card-2",
            "vs-lg": "4",
            "vs-md": "4",
            "vs-sm": "12",
            "vs-xs": "12"
          }
        },
        [
          _c("statistics-card-line", {
            attrs: {
              iconRight: "",
              icon: "DollarSignIcon",
              statistic: 10 + "%",
              statisticTitle: "Annual Tax",
              statisticSubTitle: "Total No. of Customers",
              chartData: _vm.analyticsData.revenueGenerated,
              type: "area"
            }
          })
>>>>>>> master
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vs-col",
        {
          attrs: {
<<<<<<< HEAD
            active: _vm.viewTaxTeamModal,
            title: "List Of Taxes",
            subtitle:
              "List of supervisors and officers who are working on customer tax. "
          },
          on: {
            "update:active": function($event) {
              _vm.viewTaxTeamModal = $event
            }
          }
        },
        [
          _vm._l(_vm.taxes, function(tax, taxIndex) {
            return _vm.taxes.length > 0
              ? _c(
                  "div",
                  { key: taxIndex },
                  [
                    _c(
                      "vs-card",
                      [
                        _c(
                          "vs-table",
                          {
                            attrs: { data: tax.officers },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "default",
                                  fn: function(ref) {
                                    var data = ref.data
                                    return [
                                      _c(
                                        "vs-tr",
                                        [
                                          _c(
                                            "vs-td",
                                            {
                                              attrs: {
                                                data: "tax.supervisor.full_name"
                                              }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(tax.supervisor.full_name)
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "vs-td",
                                            { attrs: { data: "supervisor" } },
                                            [_vm._v("Supervisor")]
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _vm._l(data, function(tr2, indextr) {
                                        return _c(
                                          "vs-tr",
                                          {
                                            key: indextr,
                                            attrs: { data: tr2 }
                                          },
                                          [
                                            _c(
                                              "vs-td",
                                              {
                                                attrs: {
                                                  data: tr2.detail.full_name
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(tr2.detail.full_name)
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "vs-td",
                                              { attrs: { data: "officer" } },
                                              [_vm._v("Officer")]
                                            )
                                          ],
                                          1
                                        )
                                      })
                                    ]
                                  }
                                }
                              ],
                              null,
                              true
                            )
                          },
                          [
                            _c("template", { slot: "header" }, [
                              _c("h5", { staticStyle: { color: "#5b3cc4" } }, [
                                _vm._v("Tax: ( " + _vm._s(tax.title) + " )")
                              ]),
                              _vm._v(" "),
                              _c("h6", { staticStyle: { color: "#5b3cc4" } }, [
                                _vm._v(
                                  "created at: " +
                                    _vm._s(
                                      new Date(tax.created_at).toDateString()
                                    )
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c(
                              "template",
                              { slot: "thead" },
                              [
                                _c(
                                  "vs-th",
                                  { staticStyle: { width: "400px" } },
                                  [_vm._v("Name")]
                                ),
                                _vm._v(" "),
                                _c("vs-th", [_vm._v("Role")])
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
              : _vm._e()
          }),
          _vm._v(" "),
          _vm.taxes.length <= 0
            ? _c(
                "div",
                [
                  _c("vx-card", [
                    _c(
                      "h4",
                      {
                        staticClass: "text-center",
                        staticStyle: { color: "#5b3cc4" }
                      },
                      [_vm._v("Taxes not found!")]
                    )
                  ])
                ],
                1
              )
            : _vm._e()
        ],
        2
=======
            id: "card-3",
            "vs-lg": "4",
            "vs-md": "4",
            "vs-sm": "12",
            "vs-xs": "12"
          }
        },
        [
          _c("statistics-card-line", {
            attrs: {
              iconRight: "",
              icon: "DollarSignIcon",
              statistic: 20 + "%",
              statisticTitle: "Tax Resubmission",
              statisticSubTitle: "Total No. of Customers",
              chartData: _vm.analyticsData.revenueGenerated,
              type: "area"
            }
          })
        ],
        1
>>>>>>> master
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/src/views/pages/Customers/Customers.vue":
/*!**************************************************************!*\
  !*** ./resources/js/src/views/pages/Customers/Customers.vue ***!
  \**************************************************************/
=======
/***/ "./resources/js/src/views/Home.vue":
/*!*****************************************!*\
  !*** ./resources/js/src/views/Home.vue ***!
  \*****************************************/
>>>>>>> master
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _Customers_vue_vue_type_template_id_24124076___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Customers.vue?vue&type=template&id=24124076& */ "./resources/js/src/views/pages/Customers/Customers.vue?vue&type=template&id=24124076&");
/* harmony import */ var _Customers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Customers.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Customers/Customers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Customers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Customers.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/pages/Customers/Customers.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
=======
/* harmony import */ var _Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=e85b2cee& */ "./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/Home.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
>>>>>>> master






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
<<<<<<< HEAD
  _Customers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Customers_vue_vue_type_template_id_24124076___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Customers_vue_vue_type_template_id_24124076___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
=======
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
>>>>>>> master
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
<<<<<<< HEAD
component.options.__file = "resources/js/src/views/pages/Customers/Customers.vue"
=======
component.options.__file = "resources/js/src/views/Home.vue"
>>>>>>> master
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/src/views/pages/Customers/Customers.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Customers/Customers.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
=======
/***/ "./resources/js/src/views/Home.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/src/views/Home.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
>>>>>>> master
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Customers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Customers/Customers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Customers/Customers.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Customers/Customers.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************/
=======
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Home.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************!*\
  !*** ./resources/js/src/views/Home.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************/
>>>>>>> master
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Customers.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Customers/Customers.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/Customers/Customers.vue?vue&type=template&id=24124076&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Customers/Customers.vue?vue&type=template&id=24124076& ***!
  \*********************************************************************************************/
=======
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee&":
/*!************************************************************************!*\
  !*** ./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee& ***!
  \************************************************************************/
>>>>>>> master
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_vue_vue_type_template_id_24124076___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Customers.vue?vue&type=template&id=24124076& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Customers/Customers.vue?vue&type=template&id=24124076&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_vue_vue_type_template_id_24124076___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_vue_vue_type_template_id_24124076___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
=======
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=e85b2cee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
>>>>>>> master



/***/ })

}]);