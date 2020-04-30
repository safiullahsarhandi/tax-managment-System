(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: {
    icon: {
      type: String,
      required: true
    },
    statistic: {
      type: [Number, String],
      required: true
    },
    statisticTitle: {
      type: String
    },
    statisticSubTitle: {
      type: String,
      "default": ''
    },
    chartData: {
      type: Object,
      required: true
    },
    color: {
      type: String,
      "default": 'primary'
    },
    chartType: {
      type: String,
      "default": 'line-chart'
    },
    type: {
      type: String,
      "default": 'line'
    },
    iconRight: {
      type: Boolean,
      "default": false
    },
    cardSize: {
      type: String,
      "default": ''
    }
  },
  watch: {
    themePrimaryColor: function themePrimaryColor() {
      this.$refs.apexChart.updateOptions({
        theme: {
          monochrome: {
            color: this.getHex()
          }
        }
      });
    }
  },
  computed: {
    themePrimaryColor: function themePrimaryColor() {
      return this.$store.state.themePrimaryColor;
    }
  },
  methods: {
    getHex: function getHex() {
      var rgb = window.getComputedStyle(document.documentElement).getPropertyValue("--vs-".concat(this.color));
      rgb = rgb.split(",");
      return "#" + ((1 << 24) + (Number(rgb[0]) << 16) + (Number(rgb[1]) << 8) + Number(rgb[2])).toString(16).slice(1);
    }
  },
  components: {
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  created: function created() {
    if (this.type == 'area') {
      this.chartData.chartOptions['theme'] = {
        monochrome: {
          enabled: true,
          color: this.getHex(this.color),
          shadeTo: 'light',
          shadeIntensity: 0.65
        }
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tax/TaxDetail.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Tax/TaxDetail.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_analyticsData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/analyticsData.js */ "./resources/js/src/components/analyticsData.js");
/* harmony import */ var _components_statistics_cards_StatisticsCardLine_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/statistics-cards/StatisticsCardLine.vue */ "./resources/js/src/components/statistics-cards/StatisticsCardLine.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      analyticsData: _components_analyticsData_js__WEBPACK_IMPORTED_MODULE_1__["default"],
      editTaxManagmentModal: false,
      title: "",
      tax_code: "",
      description: "",
      type: 'Monthly',
      notes: '',
      duration: '',
      officer: [],
      editSupervisor: '',
      default_selected_officer: "",
      default_selected_supervisor: "",
      tax_customer_id: '',
      editedTax: {}
    };
  },
  components: {
    StatisticsCardLine: _components_statistics_cards_StatisticsCardLine_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  beforeCreate: function beforeCreate() {},
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('taxes/', ['tax', 'purchases_approval', 'payrolls_approval', 'sales_approval']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('supervisors/', ['supervisors']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('officers/', ['officers']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('taxes/', ['supervisor']), {
    activeUser: function activeUser() {
      return this.$store.state.AppActiveUser;
    }
  }),
  created: function created() {
    localStorage.setItem('currentDetail', this.$route.fullPath);
    this.$store.commit('setRootUrl', this.$route.fullPath);
    this.tax_customer_id = localStorage.getItem('customer');
    this.getSupervisors();
    this.getOfficers();
    this.getTax(this.$route.params.id);
    localStorage.setItem('customer', this.tax.customer_id);
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    getSupervisors: 'supervisors/getSupervisors',
    getOfficers: 'officers/getOfficers',
    getTax: 'taxes/getTax',
    statusUpdate: 'taxes/statusUpdate',
    update: 'taxes/editTax'
  }), {
    editTax: function editTax() {
      this.editTaxManagmentModal = true;
      this.title = this.tax.title;
      this.duration = this.tax.duration;
      this.tax_code = this.tax.tax_code;
      this.editSupervisor = this.tax.supervisor_id;
      this.type = this.tax.type;
      this.notes = this.tax.notes;
      this.officer = _.map(this.tax.officers, 'officer_id');
      this.description = this.tax.description; // this.$data.editedTax = this.tax;
    },
    editTaxManagment: function editTaxManagment(e) {
      var _this = this;

      this.$validator.validateAll().then(function (result) {
        if (result) {
          self = _this;
          var fd = new FormData(self.$refs.editTaxManagmentForm);
          fd.append('customer_id', _this.tax_customer_id);
          fd.append('tax_id', _this.$route.params.id);
          fd.append('officers', self.officer);
          fd.append('supervisor_id', self.editSupervisor);
          fd.append('tax_code', self.tax_code);
          var data = {
            fd: fd,
            close: _this.$vs.loading.close,
            notify: _this.$vs.notify
          };

          _this.update(data).then(function (res) {
            if (res.data.status == 'success') {
              self.title = self.description = self.duration = self.editSupervisor = '';
              self.officer = [];
              self.type = 'Monthly'; // e.target.reset();

              self.$validator.reset();

              _this.getTax(self.$route.params.id);

              _this.editTaxManagmentModal = false;
            }
          });
        }
      });
    },
    changeTaxStatus: function changeTaxStatus(id) {
      this.$vs.loading();
      var data = {
        status: this.tax.status,
        id: this.tax.tax_id,
        notify: this.$vs.notify,
        close: this.$vs.loading.close
      };
      this.statusUpdate(data);
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tax/TaxDetail.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Tax/TaxDetail.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#tax-detail .vx-card .vx-card__collapsible-content.vs-con-loading__container {\n  min-height: 250px !important;\n}\n.status-list-item .vs-list--slot {\n  margin-left: 0;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tax/TaxDetail.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Tax/TaxDetail.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TaxDetail.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tax/TaxDetail.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=template&id=2d2fa5ad&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=template&id=2d2fa5ad& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
  return _c("vx-card", { staticClass: "overflow-hidden" }, [
    _c("div", { attrs: { slot: "no-body" }, slot: "no-body" }, [
      _c(
        "div",
        {
          staticClass: "p-6 pb-0",
          class: {
            "flex justify-between flex-row-reverse items-center": _vm.iconRight
          }
        },
        [
          _c("feather-icon", {
            staticClass: "p-3 inline-flex rounded-full",
            class: ["text-" + _vm.color, { "mb-4": !_vm.iconRight }],
            style: { background: "rgba(var(--vs-" + _vm.color + "),.15)" },
            attrs: { icon: _vm.icon }
          }),
          _vm._v(" "),
          _c("div", [
            _c("h3", { staticClass: "mb-1 font-bold" }, [
              _vm._v(_vm._s(_vm.statistic))
            ]),
            _vm._v(" "),
            _c("div", [_vm._v(_vm._s(_vm.statisticTitle))]),
            _vm._v(" "),
            _c("div", [_vm._v(_vm._s(_vm.statisticSubTitle))])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "line-area-chart", attrs: { id: _vm.chartData.id } },
        [
          _c("vue-apex-charts", {
            ref: "apexChart",
            attrs: {
              type: _vm.type,
              height: "100",
              width: "100%",
              options: _vm.chartData.chartOptions,
              series: _vm.chartData.series
            }
          })
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tax/TaxDetail.vue?vue&type=template&id=58313b93&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Tax/TaxDetail.vue?vue&type=template&id=58313b93& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
    { attrs: { id: "tax-detail" } },
    [
      _c(
        "vs-row",
        [
          _c(
            "vs-col",
            {
              attrs: {
                "vs-md":
                  _vm.$store.getters.userType == "Admin" ||
                  _vm.$store.getters.userType == "Super Admin"
                    ? "9"
                    : "12",
                "vs-lg":
                  _vm.$store.getters.userType == "Admin" ||
                  _vm.$store.getters.userType == "Super Admin"
                    ? "9"
                    : "12",
                "vs-sm": "12",
                "vs-xs": "12"
              }
            },
            [
              _c(
                "vs-row",
                { staticClass: "mt-base p-0" },
                [
                  _c(
                    "vs-col",
                    {
                      attrs: {
                        "vs-lg": "4",
                        "vs-md": "4",
                        "vs-sm": "12",
                        "vs-xs": "12"
                      }
                    },
                    [
                      _c("statistics-card-line", {
                        attrs: {
                          icon: "DollarSignIcon",
                          statistic: _vm.tax.purchases_count || 0,
                          statisticTitle: "No of Purchases Added",
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
                        "vs-lg": "4",
                        "vs-md": "4",
                        "vs-sm": "12",
                        "vs-xs": "12"
                      }
                    },
                    [
                      _c("statistics-card-line", {
                        attrs: {
                          icon: "DollarSignIcon",
                          statistic: _vm.tax.sales_count || 0,
                          statisticTitle: "No of Sales Added",
                          chartData: _vm.analyticsData.revenueGenerated,
                          color: "success",
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
                        "vs-lg": "4",
                        "vs-md": "4",
                        "vs-sm": "12",
                        "vs-xs": "12"
                      }
                    },
                    [
                      _c("statistics-card-line", {
                        attrs: {
                          icon: "DollarSignIcon",
                          statistic: _vm.tax.payrolls_count || 0,
                          statisticTitle: "No of Payrolls Added",
                          chartData: _vm.analyticsData.revenueGenerated,
                          color: "danger",
                          type: "area"
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
                "vx-card",
                { staticClass: "mt-base", attrs: { title: "Tax Overview" } },
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
                          _c("p", [_c("label", [_vm._v("Tax ID:")])]),
                          _c("h4", [_vm._v(_vm._s(_vm.tax.tax_code || "N/A"))]),
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
                          _c("p", [_c("label", [_vm._v("Title:")])]),
                          _c("h4", [_vm._v(_vm._s(_vm.tax.title || "N/A"))]),
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
                          _c("p", [_c("label", [_vm._v("Description:")])]),
                          _c("h4", [
                            _vm._v(_vm._s(_vm.tax.description || "N/A"))
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
                          _c("p", [_c("label", [_vm._v("Type:")])]),
                          _c("h4", [_vm._v(_vm._s(_vm.tax.type))]),
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
                          _c("p", [_c("label", [_vm._v("Supervisor:")])]),
                          _c("h4", [
                            _vm._v(
                              _vm._s(
                                typeof _vm.tax.supervisor != "undefined"
                                  ? _vm.tax.supervisor.full_name
                                  : ""
                              )
                            )
                          ]),
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
                          _c("p", [_c("label", [_vm._v("Officer Who Work:")])]),
                          _c("h4", [
                            _vm._v(
                              _vm._s(
                                typeof _vm.tax.officer != "undefined"
                                  ? _vm.tax.officer.full_name
                                  : ""
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
                          _c("p", [_c("label", [_vm._v("Tax Created By:")])]),
                          _c("h4", [
                            _vm._v(
                              _vm._s(
                                typeof _vm.tax.created_by != "undefined"
                                  ? _vm.tax.created_by.full_name
                                  : ""
                              )
                            )
                          ]),
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
                          _c("p", [_c("label", [_vm._v("Tax Status:")])]),
                          _c("h4", [
                            _vm._v(
                              _vm._s(
                                _vm.tax.status == 0
                                  ? "Work in progress"
                                  : _vm.tax.status == 1
                                  ? "Review"
                                  : _vm.tax.status == 2
                                  ? "Approve"
                                  : _vm.tax.status == 3
                                  ? "Client's Confirmation"
                                  : _vm.tax.status == 4
                                  ? "Tax Paid"
                                  : _vm.tax.status == 5
                                  ? "Submitted"
                                  : _vm.tax.status == 6
                                  ? "Scanned"
                                  : "Released"
                              )
                            )
                          ]),
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
                          _c("p", [_c("label", [_vm._v("Notes:")])]),
                          _c("h4", [_vm._v(_vm._s(_vm.tax.notes || "N/A"))]),
                          _vm._v(" "),
                          _c("p")
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              [
                _c(
                  "vs-row",
                  { staticClass: "mt-base p-0" },
                  [
                    _c(
                      "vs-col",
                      {
                        attrs: {
                          "vs-lg": "4",
                          "vs-md": "4",
                          "vs-sm": "12",
                          "vs-xs": "12"
                        }
                      },
                      [
                        _c("statistics-card-line", {
                          attrs: {
                            icon: "DollarSignIcon",
                            statistic: _vm.purchases_approval || 0,
                            statisticTitle: "Pending Approvals Purchases",
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
                          "vs-lg": "4",
                          "vs-md": "4",
                          "vs-sm": "12",
                          "vs-xs": "12"
                        }
                      },
                      [
                        _c("statistics-card-line", {
                          attrs: {
                            icon: "DollarSignIcon",
                            statistic: _vm.sales_approval || 0,
                            statisticTitle: "Pending Approvals Sales",
                            chartData: _vm.analyticsData.revenueGenerated,
                            color: "success",
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
                          "vs-lg": "4",
                          "vs-md": "4",
                          "vs-sm": "12",
                          "vs-xs": "12"
                        }
                      },
                      [
                        _c("statistics-card-line", {
                          attrs: {
                            icon: "DollarSignIcon",
                            statistic: _vm.payrolls_approval || 0,
                            statisticTitle: "Pending Approvals Payroll",
                            chartData: _vm.analyticsData.revenueGenerated,
                            color: "danger",
                            type: "area"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              ]
            ],
            2
          ),
          _vm._v(" "),
          _vm.$store.getters.userType == "Admin" ||
          _vm.$store.getters.userType == "Super Admin"
            ? _c(
                "vs-col",
                {
                  staticClass: "mt-base",
                  attrs: {
                    "vs-md": "3",
                    "vs-lg": "3",
                    "vs-sm": "12",
                    "vs-xs": "12"
                  }
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
                            { staticClass: "p-0 ml-0 status-list-item" },
                            [
                              _c(
                                "vs-select",
                                {
                                  staticClass: "p-0 ml-0",
                                  staticStyle: { width: "170px" },
                                  attrs: {
                                    autocomplete: "",
                                    placeholder: "Select Status"
                                  },
                                  on: {
                                    input: function($event) {
                                      return _vm.changeTaxStatus(_vm.tax.tax_id)
                                    }
                                  },
                                  model: {
                                    value: _vm.tax.status,
                                    callback: function($$v) {
                                      _vm.$set(_vm.tax, "status", $$v)
                                    },
                                    expression: "tax.status"
                                  }
                                },
                                [
                                  _c("vs-select-item", {
                                    attrs: {
                                      value: "0",
                                      text: "Work In Progress"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("vs-select-item", {
                                    attrs: { value: "1", text: "Review" }
                                  }),
                                  _vm._v(" "),
                                  _c("vs-select-item", {
                                    attrs: { value: "2", text: "Approve" }
                                  }),
                                  _vm._v(" "),
                                  _c("vs-select-item", {
                                    attrs: {
                                      value: "3",
                                      text: "Client Confirmation"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("vs-select-item", {
                                    attrs: { value: "4", text: "Tax Paid" }
                                  }),
                                  _vm._v(" "),
                                  _c("vs-select-item", {
                                    attrs: { value: "5", text: "Submitted" }
                                  }),
                                  _vm._v(" "),
                                  _c("vs-select-item", {
                                    attrs: { value: "6", text: "Scanned" }
                                  }),
                                  _vm._v(" "),
                                  _c("vs-select-item", {
                                    attrs: { value: "7", text: "Released" }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-list-item",
                            { attrs: { title: "Edit Tax", subtitle: "" } },
                            [
                              _c("vs-button", {
                                attrs: {
                                  size: "small",
                                  "icon-pack": "feather",
                                  icon: "icon-edit"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.editTax()
                                  }
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-list-item",
                            { attrs: { title: "Activity Log", subtitle: "" } },
                            [
                              _c("vs-button", {
                                attrs: {
                                  size: "small",
                                  "icon-pack": "feather",
                                  to: "/activity-log",
                                  icon: "icon-maximize"
                                }
                              })
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
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vs-popup",
        {
          attrs: {
            active: _vm.editTaxManagmentModal,
            title: "Add Tax Managment"
          },
          on: {
            "update:active": function($event) {
              _vm.editTaxManagmentModal = $event
            }
          }
        },
        [
          _c(
            "form",
            {
              ref: "editTaxManagmentForm",
              attrs: { "data-vv-scope": "editform" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.editTaxManagment($event)
                }
              }
            },
            [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.tax_customer_id,
                    expression: "tax_customer_id"
                  }
                ],
                attrs: { type: "hidden", name: "category_id" },
                domProps: { value: _vm.tax_customer_id },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.tax_customer_id = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
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
                              name: "tax_identifier",
                              "data-vv-as": "Tax Identifier",
                              "label-placeholder": "Tax Identifier",
                              "data-vv-scope": "editform"
                            },
                            model: {
                              value: _vm.tax_code,
                              callback: function($$v) {
                                _vm.tax_code = $$v
                              },
                              expression: "tax_code"
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
                                    "addform.tax_identifier"
                                  ),
                                  expression:
                                    "errors.has('addform.tax_identifier')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.errors.first("addform.tax_identifier")
                                )
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
                              label: "Title",
                              placeholder: "Title",
                              "data-vv-scope": "editform"
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
                                  value: _vm.errors.has("editform.title"),
                                  expression: "errors.has('editform.title')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [_vm._v(_vm._s(_vm.errors.first("editform.title")))]
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
                              counter: 50,
                              label: "Description",
                              "data-vv-scope": "editform"
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
                                  value: _vm.errors.has("editform.description"),
                                  expression:
                                    "errors.has('editform.description')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("editform.description"))
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
                        [
                          _c(
                            "vs-select",
                            {
                              directives: [
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required",
                                  expression: "'required'"
                                }
                              ],
                              staticStyle: { width: "100%" },
                              attrs: {
                                placeholder: "Select Type",
                                label: "Type",
                                name: "type"
                              },
                              model: {
                                value: _vm.type,
                                callback: function($$v) {
                                  _vm.type = $$v
                                },
                                expression: "type"
                              }
                            },
                            [
                              _c("vs-select-item", {
                                attrs: {
                                  text: "Monthly Tax",
                                  value: "Monthly Tax"
                                }
                              }),
                              _vm._v(" "),
                              _c("vs-select-item", {
                                attrs: {
                                  text: "Annual Tax",
                                  value: "Annual Tax"
                                }
                              }),
                              _vm._v(" "),
                              _c("vs-select-item", {
                                attrs: {
                                  text: "Resubmission Tax",
                                  value: "Resubmission Tax"
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
                                  value: _vm.errors.has("editform.type"),
                                  expression: "errors.has('editform.type')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [_vm._v(_vm._s(_vm.errors.first("editform.type")))]
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
                            attrs: {
                              name: "notes",
                              counter: 100,
                              label: "Notes",
                              "data-vv-scope": "editform"
                            },
                            model: {
                              value: _vm.notes,
                              callback: function($$v) {
                                _vm.notes = $$v
                              },
                              expression: "notes"
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
                                  value: _vm.errors.has("editform.notes"),
                                  expression: "errors.has('editform.notes')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [_vm._v(_vm._s(_vm.errors.first("editform.notes")))]
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
                        [_vm._v("Update")]
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

/***/ "./resources/js/src/components/statistics-cards/StatisticsCardLine.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/components/statistics-cards/StatisticsCardLine.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StatisticsCardLine_vue_vue_type_template_id_2d2fa5ad___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StatisticsCardLine.vue?vue&type=template&id=2d2fa5ad& */ "./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=template&id=2d2fa5ad&");
/* harmony import */ var _StatisticsCardLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StatisticsCardLine.vue?vue&type=script&lang=js& */ "./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StatisticsCardLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StatisticsCardLine_vue_vue_type_template_id_2d2fa5ad___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StatisticsCardLine_vue_vue_type_template_id_2d2fa5ad___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/statistics-cards/StatisticsCardLine.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticsCardLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./StatisticsCardLine.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticsCardLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=template&id=2d2fa5ad&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=template&id=2d2fa5ad& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticsCardLine_vue_vue_type_template_id_2d2fa5ad___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./StatisticsCardLine.vue?vue&type=template&id=2d2fa5ad& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=template&id=2d2fa5ad&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticsCardLine_vue_vue_type_template_id_2d2fa5ad___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticsCardLine_vue_vue_type_template_id_2d2fa5ad___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/Tax/TaxDetail.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/views/pages/Tax/TaxDetail.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TaxDetail_vue_vue_type_template_id_58313b93___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaxDetail.vue?vue&type=template&id=58313b93& */ "./resources/js/src/views/pages/Tax/TaxDetail.vue?vue&type=template&id=58313b93&");
/* harmony import */ var _TaxDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaxDetail.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Tax/TaxDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TaxDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TaxDetail.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/pages/Tax/TaxDetail.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TaxDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TaxDetail_vue_vue_type_template_id_58313b93___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TaxDetail_vue_vue_type_template_id_58313b93___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/Tax/TaxDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/Tax/TaxDetail.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/pages/Tax/TaxDetail.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TaxDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tax/TaxDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Tax/TaxDetail.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Tax/TaxDetail.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TaxDetail.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tax/TaxDetail.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/Tax/TaxDetail.vue?vue&type=template&id=58313b93&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Tax/TaxDetail.vue?vue&type=template&id=58313b93& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxDetail_vue_vue_type_template_id_58313b93___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TaxDetail.vue?vue&type=template&id=58313b93& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tax/TaxDetail.vue?vue&type=template&id=58313b93&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxDetail_vue_vue_type_template_id_58313b93___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxDetail_vue_vue_type_template_id_58313b93___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);