<<<<<<< HEAD
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



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      analyticsData: _components_analyticsData_js__WEBPACK_IMPORTED_MODULE_1__["default"],
      editTaxManagmentModal: false,
      title: "",
      description: "",
      type: 'Monthly',
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
      this.editSupervisor = this.tax.supervisor_id;
      this.type = this.tax.type;
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
exports.push([module.i, "#tax-detail .vx-card .vx-card__collapsible-content.vs-con-loading__container {\n  min-height: 250px !important;\n}\r\n\r\n", ""]);

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
                  _vm.activeUser.type == "Admin" ||
                  _vm.activeUser.type == "Super Admin"
                    ? "9"
                    : "9",
                "vs-lg":
                  _vm.activeUser.type == "Admin" ||
                  _vm.activeUser.type == "Super Admin"
                    ? "9"
                    : "9",
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
                                  ? "In Progress"
                                  : "Completed"
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
          _c(
            "vs-col",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value:
                    _vm.activeUser.type == "Admin" ||
                    _vm.activeUser.type == "Super Admin",
                  expression:
                    "activeUser.type == 'Admin' || activeUser.type == 'Super Admin'"
                }
              ],
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
                      _vm.activeUser.type == "Supervisor"
                        ? _c(
                            "vs-list-item",
                            {
                              attrs: { title: "Mark as Complete", subtitle: "" }
                            },
                            [
                              _c("vs-switch", {
                                attrs: {
                                  color: "warning",
                                  disabled:
                                    _vm.activeUser.type != "Admin" ||
                                    _vm.activeUser.type != "Super Admin"
                                },
                                on: {
                                  input: function($event) {
                                    return _vm.changeTaxStatus(_vm.tax.tax_id)
                                  }
                                }
                              })
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.activeUser.type == "Admin" ||
                      _vm.activeUser.type == "Super Admin"
                        ? _c(
                            "vs-list-item",
                            { attrs: { title: "Approve Tax", subtitle: "" } },
                            [
                              _c("vs-switch", {
                                attrs: {
                                  color: "warning",
                                  disabled:
                                    _vm.activeUser.type != "Admin" ||
                                    _vm.activeUser.type != "Super Admin"
                                },
                                on: {
                                  input: function($event) {
                                    return _vm.changeTaxStatus(_vm.tax.tax_id)
                                  }
                                }
                              })
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.activeUser.type == "Admin" ||
                      _vm.activeUser.type == "Super Admin"
                        ? _c(
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
                          )
                        : _vm._e()
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
                              "data-vv-scope": "editform"
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
                                  value: _vm.errors.has("editform.duration"),
                                  expression: "errors.has('editform.duration')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("editform.duration"))
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
                          _c("label", [_vm._v("Tax Type")]),
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
                              attrs: {
                                name: "supervisor",
                                label: "Supervisor"
                              },
                              model: {
                                value: _vm.editSupervisor,
                                callback: function($$v) {
                                  _vm.editSupervisor = $$v
                                },
                                expression: "editSupervisor"
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
                                name: "officer[]",
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
=======
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{139:function(e,t,s){"use strict";s.r(t);var a=s(1),r=s(40);function i(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function o(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?i(s,!0).forEach((function(t){n(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):i(s).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function n(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}var l={data:function(){return{analyticsData:r.a,editTaxManagmentModal:!1,title:"",description:"",type:"Monthly",duration:"",officer:[],editSupervisor:"",default_selected_officer:"",default_selected_supervisor:"",tax_customer_id:"",editedTax:{}}},components:{StatisticsCardLine:s(41).a},beforeCreate:function(){},computed:o({},Object(a.d)("taxes/",["tax","purchases_approval","payrolls_approval","sales_approval"]),{},Object(a.d)("supervisors/",["supervisors"]),{},Object(a.d)("officers/",["officers"]),{},Object(a.c)("taxes/",["supervisor"]),{activeUser:function(){return this.$store.state.AppActiveUser}}),created:function(){localStorage.setItem("currentDetail",this.$route.fullPath),this.$store.commit("setRootUrl",this.$route.fullPath),this.tax_customer_id=localStorage.getItem("customer"),this.getSupervisors(),this.getOfficers(),this.getTax(this.$route.params.id)},methods:o({},Object(a.b)({getSupervisors:"supervisors/getSupervisors",getOfficers:"officers/getOfficers",getTax:"taxes/getTax",statusUpdate:"taxes/statusUpdate",update:"taxes/editTax"}),{editTax:function(){this.editTaxManagmentModal=!0,this.title=this.tax.title,this.duration=this.tax.duration,this.editSupervisor=this.tax.supervisor_id,this.type=this.tax.type,this.officer=_.map(this.tax.officers,"officer_id"),this.description=this.tax.description},editTaxManagment:function(e){var t=this;this.$validator.validateAll().then((function(e){if(e){self=t;var s=new FormData(self.$refs.editTaxManagmentForm);s.append("customer_id",t.tax_customer_id),s.append("tax_id",t.$route.params.id),s.append("officers",self.officer),s.append("supervisor_id",self.editSupervisor);var a={fd:s,close:t.$vs.loading.close,notify:t.$vs.notify};t.update(a).then((function(e){"success"==e.data.status&&(self.title=self.description=self.duration=self.editSupervisor="",self.officer=[],self.type="Monthly",self.$validator.reset(),t.getTax(self.$route.params.id),t.editTaxManagmentModal=!1)}))}}))},changeTaxStatus:function(e){this.$vs.loading();var t={status:this.tax.status,id:this.tax.tax_id,notify:this.$vs.notify,close:this.$vs.loading.close};this.statusUpdate(t)}})},c=(s(82),s(2)),d=Object(c.a)(l,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"tax-detail"}},[s("vs-row",[s("vs-col",{attrs:{"vs-md":("Admin"==e.activeUser.type||e.activeUser.type,"9"),"vs-lg":("Admin"==e.activeUser.type||e.activeUser.type,"9"),"vs-sm":"12","vs-xs":"12"}},[s("vs-row",{staticClass:"mt-base p-0"},[s("vs-col",{attrs:{"vs-lg":"4","vs-md":"4","vs-sm":"12","vs-xs":"12"}},[s("statistics-card-line",{attrs:{icon:"DollarSignIcon",statistic:e.tax.purchases_count||0,statisticTitle:"No of Purchases Added",chartData:e.analyticsData.revenueGenerated,type:"area"}})],1),e._v(" "),s("vs-col",{attrs:{"vs-lg":"4","vs-md":"4","vs-sm":"12","vs-xs":"12"}},[s("statistics-card-line",{attrs:{icon:"DollarSignIcon",statistic:e.tax.sales_count||0,statisticTitle:"No of Sales Added",chartData:e.analyticsData.revenueGenerated,color:"success",type:"area"}})],1),e._v(" "),s("vs-col",{attrs:{"vs-lg":"4","vs-md":"4","vs-sm":"12","vs-xs":"12"}},[s("statistics-card-line",{attrs:{icon:"DollarSignIcon",statistic:e.tax.payrolls_count||0,statisticTitle:"No of Payrolls Added",chartData:e.analyticsData.revenueGenerated,color:"danger",type:"area"}})],1)],1),e._v(" "),s("vx-card",{staticClass:"mt-base",attrs:{title:"Tax Overview"}},[s("vs-row",[s("vs-col",{attrs:{"vs-md":"4","vs-lg":"4","vs-sm":"12","vs-xs":"12"}},[s("p",[s("label",[e._v("Tax ID:")])]),s("h4",[e._v(e._s(e.tax.tax_code||"N/A"))]),e._v(" "),s("p")]),e._v(" "),s("vs-col",{attrs:{"vs-md":"4","vs-lg":"4","vs-sm":"12","vs-xs":"12"}},[s("p",[s("label",[e._v("Title:")])]),s("h4",[e._v(e._s(e.tax.title||"N/A"))]),e._v(" "),s("p")]),e._v(" "),s("vs-col",{attrs:{"vs-md":"4","vs-lg":"4","vs-sm":"12","vs-xs":"12"}},[s("p",[s("label",[e._v("Description:")])]),s("h4",[e._v(e._s(e.tax.description||"N/A"))]),e._v(" "),s("p")])],1),e._v(" "),s("vs-row",{staticClass:"mt-base"},[s("vs-col",{attrs:{"vs-md":"4","vs-lg":"4","vs-sm":"12","vs-xs":"12"}},[s("p",[s("label",[e._v("Type:")])]),s("h4",[e._v(e._s(e.tax.type))]),e._v(" "),s("p")]),e._v(" "),s("vs-col",{attrs:{"vs-md":"4","vs-lg":"4","vs-sm":"12","vs-xs":"12"}},[s("p",[s("label",[e._v("Supervisor:")])]),s("h4",[e._v(e._s(void 0!==e.tax.supervisor?e.tax.supervisor.full_name:""))]),e._v(" "),s("p")]),e._v(" "),s("vs-col",{attrs:{"vs-md":"4","vs-lg":"4","vs-sm":"12","vs-xs":"12"}},[s("p",[s("label",[e._v("Officer Who Work:")])]),s("h4",[e._v(e._s(void 0!==e.tax.officer?e.tax.officer.full_name:""))]),e._v(" "),s("p")])],1),e._v(" "),s("vs-row",{staticClass:"mt-base"},[s("vs-col",{attrs:{"vs-md":"4","vs-lg":"4","vs-sm":"12","vs-xs":"12"}},[s("p",[s("label",[e._v("Tax Created By:")])]),s("h4",[e._v(e._s(void 0!==e.tax.added_by?e.tax.added_by.full_name:""))]),e._v(" "),s("p")]),e._v(" "),s("vs-col",{attrs:{"vs-md":"4","vs-lg":"4","vs-sm":"12","vs-xs":"12"}},[s("p",[s("label",[e._v("Tax Status:")])]),s("h4",[e._v(e._s(0==e.tax.status?"In Progress":"Completed"))]),e._v(" "),s("p")]),e._v(" "),s("vs-col",{attrs:{"vs-md":"4","vs-lg":"4","vs-sm":"12","vs-xs":"12"}},[s("p",[s("label",[e._v("Notes:")])]),s("h4",[e._v(e._s(e.tax.notes||"N/A"))]),e._v(" "),s("p")])],1)],1),e._v(" "),[s("vs-row",{staticClass:"mt-base p-0"},[s("vs-col",{attrs:{"vs-lg":"4","vs-md":"4","vs-sm":"12","vs-xs":"12"}},[s("statistics-card-line",{attrs:{icon:"DollarSignIcon",statistic:e.purchases_approval||0,statisticTitle:"Pending Approvals Purchases",chartData:e.analyticsData.revenueGenerated,type:"area"}})],1),e._v(" "),s("vs-col",{attrs:{"vs-lg":"4","vs-md":"4","vs-sm":"12","vs-xs":"12"}},[s("statistics-card-line",{attrs:{icon:"DollarSignIcon",statistic:e.sales_approval||0,statisticTitle:"Pending Approvals Sales",chartData:e.analyticsData.revenueGenerated,color:"success",type:"area"}})],1),e._v(" "),s("vs-col",{attrs:{"vs-lg":"4","vs-md":"4","vs-sm":"12","vs-xs":"12"}},[s("statistics-card-line",{attrs:{icon:"DollarSignIcon",statistic:e.payrolls_approval||0,statisticTitle:"Pending Approvals Payroll",chartData:e.analyticsData.revenueGenerated,color:"danger",type:"area"}})],1)],1)]],2),e._v(" "),s("vs-col",{directives:[{name:"show",rawName:"v-show",value:"Admin"==e.activeUser.type||"Super Admin"==e.activeUser.type,expression:"activeUser.type == 'Admin' || activeUser.type == 'Super Admin'"}],staticClass:"mt-base",attrs:{"vs-md":"3","vs-lg":"3","vs-sm":"12","vs-xs":"12"}},[s("vx-card",{attrs:{title:"Actions"}},[s("vs-list",["Supervisor"==e.activeUser.type?s("vs-list-item",{attrs:{title:"Mark as Complete",subtitle:""}},[s("vs-switch",{attrs:{color:"warning",disabled:"Admin"!=e.activeUser.type||"Super Admin"!=e.activeUser.type},on:{input:function(t){return e.changeTaxStatus(e.tax.tax_id)}}})],1):e._e(),e._v(" "),"Admin"==e.activeUser.type||"Super Admin"==e.activeUser.type?s("vs-list-item",{attrs:{title:"Approve Tax",subtitle:""}},[s("vs-switch",{attrs:{color:"warning",disabled:"Admin"!=e.activeUser.type||"Super Admin"!=e.activeUser.type},on:{input:function(t){return e.changeTaxStatus(e.tax.tax_id)}}})],1):e._e(),e._v(" "),"Admin"==e.activeUser.type||"Super Admin"==e.activeUser.type?s("vs-list-item",{attrs:{title:"Edit Tax",subtitle:""}},[s("vs-button",{attrs:{size:"small","icon-pack":"feather",icon:"icon-edit"},on:{click:function(t){return e.editTax()}}})],1):e._e()],1)],1)],1)],1),e._v(" "),s("vs-popup",{attrs:{active:e.editTaxManagmentModal,title:"Add Tax Managment"},on:{"update:active":function(t){e.editTaxManagmentModal=t}}},[s("form",{ref:"editTaxManagmentForm",attrs:{"data-vv-scope":"editform"},on:{submit:function(t){return t.preventDefault(),e.editTaxManagment(t)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.tax_customer_id,expression:"tax_customer_id"}],attrs:{type:"hidden",name:"category_id"},domProps:{value:e.tax_customer_id},on:{input:function(t){t.target.composing||(e.tax_customer_id=t.target.value)}}}),e._v(" "),s("vs-row",[s("vs-col",{attrs:{"vs-lg":"6","vs-md":"6","vs-sm":"12"}},[s("vx-input-group",[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"title","label-placeholder":"Title","data-vv-scope":"editform"},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}}),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("editform.title"),expression:"errors.has('editform.title')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("editform.title")))])],1),e._v(" "),s("vx-input-group",[s("br"),e._v(" "),s("vs-textarea",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"description",counter:50,label:"Description","data-vv-scope":"editform"},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}}),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("editform.description"),expression:"errors.has('editform.description')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("editform.description")))])],1),e._v(" "),s("vx-input-group",{staticClass:"mt-2"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"duration","label-placeholder":"Duration","data-vv-scope":"editform"},model:{value:e.duration,callback:function(t){e.duration=t},expression:"duration"}}),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("editform.duration"),expression:"errors.has('editform.duration')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("editform.duration")))])],1),e._v(" "),s("br"),e._v(" "),s("vx-input-group",{staticClass:"mt-2"},[s("label",[e._v("Tax Type")]),s("br"),s("br"),e._v(" "),s("vs-radio",{attrs:{name:"type","vs-value":"Monthly"},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},[e._v("Monthly")]),e._v(" "),s("vs-radio",{attrs:{name:"type","vs-value":"Yearly"},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},[e._v("Yearly")])],1)],1),e._v(" "),s("vs-col",{attrs:{"vs-lg":"6","vs-md":"12","vs-sm":"12"}},[s("vx-input-group",{staticClass:"mt-2"},[s("vs-select",{staticClass:"selectExample",attrs:{name:"supervisor",label:"Supervisor"},model:{value:e.editSupervisor,callback:function(t){e.editSupervisor=t},expression:"editSupervisor"}},[s("vs-select-item",{attrs:{value:"",text:"Select Supervisor"}}),e._v(" "),e._l(e.supervisors,(function(e,t){return s("vs-select-item",{key:t,attrs:{value:e.manager_id,text:e.first_name+" "+e.last_name}})}))],2)],1),e._v(" "),s("vx-input-group",{staticClass:"mt-2"},[s("vs-select",{staticClass:"selectExample",attrs:{name:"officer[]",placeholder:"Search and select",label:"Officers","label-placeholder":"Officers",multiple:""},model:{value:e.officer,callback:function(t){e.officer=t},expression:"officer"}},[s("vs-select-item",{attrs:{value:"",disabled:!0,text:"Select Officers"}}),e._v(" "),e._l(e.officers,(function(e,t){return s("vs-select-item",{key:t,attrs:{value:e.manager_id,text:e.first_name+" "+e.last_name}})}))],2)],1)],1),e._v(" "),s("vs-col",{attrs:{"vs-lg":"12","vs-md":"12","vs-sm":"12"}},[s("br"),e._v(" "),s("vs-button",{staticClass:"float-right",attrs:{button:"submit",type:"gradient"}},[e._v("Update")])],1)],1)],1)])],1)}),[],!1,null,null,null);t.default=d.exports},29:function(e,t,s){var a=s(83);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};s(5)(a,r);a.locals&&(e.exports=a.locals)},40:function(e,t,s){"use strict";t.a={siteTraffic:{series:[{name:"Traffic Rate",data:[150,200,125,225,200,250]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{type:"line",dropShadow:{enabled:!0,top:5,left:0,blur:4,opacity:.1},toolbar:{show:!1},sparkline:{enabled:!0}},stroke:{width:5,curve:"smooth"},xaxis:{type:"numeric"},colors:["#7367F0"],fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#A9A2F6"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0,hover:{size:5}},tooltip:{x:{show:!1}}}},activeUsers:{series:[{name:"Active Users",data:[750,1e3,900,1250,1e3,1200,1100]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{type:"line",dropShadow:{enabled:!0,top:5,left:0,blur:4,opacity:.1},toolbar:{show:!1},sparkline:{enabled:!0}},stroke:{width:5,curve:"smooth"},xaxis:{type:"numeric"},colors:["#28C76F"],fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#55DD92"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,75,100,100]}},markers:{size:0,hover:{size:5}},tooltip:{x:{show:!1}}}},newsletter:{series:[{name:"Newsletter",data:[365,390,365,400,375,400]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{type:"line",dropShadow:{enabled:!0,top:5,left:0,blur:4,opacity:.1},toolbar:{show:!1},sparkline:{enabled:!0}},stroke:{width:5,curve:"smooth"},xaxis:{type:"numeric"},colors:["#FF9F43"],fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#ffc085"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,75,100,100]}},markers:{size:0,hover:{size:5}},tooltip:{x:{show:!1}}}},revenueComparisonLine:{series:[{name:"This Month",data:[45e3,47e3,44800,47500,45500,48e3,46500,48600]},{name:"Last Month",data:[46e3,48e3,45500,46600,44500,46500,45e3,47e3]}],chartOptions:{chart:{toolbar:{show:!1}},stroke:{curve:"smooth",dashArray:[0,8],width:[4,2]},grid:{borderColor:"#e7e7e7"},legend:{show:!1},colors:["#F97794","#b8c2cc"],fill:{type:"gradient",gradient:{shade:"dark",inverseColors:!1,gradientToColors:["#7367F0","#b8c2cc"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0,hover:{size:5}},xaxis:{labels:{style:{cssClass:"text-grey fill-current"}},axisTicks:{show:!1},categories:["01","05","09","13","17","21","26","31"],axisBorder:{show:!1}},yaxis:{tickAmount:5,labels:{style:{cssClass:"text-grey fill-current"},formatter:function(e){return e>999?(e/1e3).toFixed(1)+"k":e}}},tooltip:{x:{show:!1}}}},subscribersGained:{series:[{name:"Subscribers",data:[28,40,36,52,38,60,55]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{type:"numeric",lines:{show:!1},axisBorder:{show:!1},labels:{show:!1}},yaxis:[{tooltip:{enabled:!1},y:0,offsetX:0,offsetY:0,padding:{left:0,right:0}}],tooltip:{enabled:!1,x:{show:!1}}}},quarterlySales:{series:[{name:"Sales",data:[10,15,7,12,3,16]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{type:"numeric",lines:{show:!1},axisBorder:{show:!1},labels:{show:!1}},yaxis:[{y:0,offsetX:0,offsetY:0,padding:{left:0,right:0}}],tooltip:{enabled:!1,x:{show:!1}}}},revenueGenerated:{series:[{name:"Revenue",data:[350,275,400,300,350,300,450]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{type:"numeric",lines:{show:!1},axisBorder:{show:!1},labels:{show:!1}},yaxis:[{y:0,offsetX:0,offsetY:0,padding:{left:0,right:0}}],tooltip:{enabled:!1,x:{show:!1}}}},ordersRecevied:{series:[{name:"Orders",data:[10,15,8,15,7,12,8]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{type:"numeric",lines:{show:!1},axisBorder:{show:!1},labels:{show:!1}},yaxis:[{y:0,offsetX:0,offsetY:0,padding:{left:0,right:0}}],tooltip:{x:{show:!1}}}},salesBar:{series:[{name:"Sessions",data:[75,125,225,175,125,75,25]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{type:"bar",sparkline:{enabled:!0},toolbar:{show:!1}},states:{hover:{filter:"none"}},colors:["#e6edf7","#e6edf7","#7367f0","#e6edf7","#e6edf7","#e6edf7"],plotOptions:{bar:{columnWidth:"45%",distributed:!0,endingShape:"rounded"}},tooltip:{x:{show:!1}}}},goalOverviewRadialBar:{series:[83],chartOptions:{plotOptions:{radialBar:{size:110,startAngle:-150,endAngle:150,hollow:{size:"77%"},track:{background:"#bfc5cc",strokeWidth:"50%"},dataLabels:{name:{show:!1},value:{offsetY:18,color:"#99a2ac",fontSize:"4rem"}}}},colors:["#00db89"],fill:{type:"gradient",gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:["#00b5b5"],inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{lineCap:"round"},chart:{sparkline:{enabled:!0},dropShadow:{enabled:!0,blur:3,left:1,top:1,opacity:.1}}}},supportTrackerRadialBar:{chartData:{totalTickets:163,openTickets:103,lastResponse:"1d"},series:[83],chartOptions:{plotOptions:{radialBar:{size:150,offsetY:15,startAngle:-150,endAngle:150,hollow:{size:"65%"},track:{background:"#fff",strokeWidth:"100%"},dataLabels:{value:{offsetY:30,color:"#99a2ac",fontSize:"2rem"}}}},colors:["#EA5455"],fill:{type:"gradient",gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:["#7367F0"],inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{dashArray:8},chart:{sparkline:{}},labels:["Completed Tickets"]}},statisticsRadar:{series:[{name:"Visits",data:[90,50,86,40,100,20]},{name:"Sales",data:[70,75,70,76,20,85]}],chartOptions:{labels:["Jan","Feb","Mar","Apr","May","Jun"],dataLabels:{style:{colors:["#b9c3cd","#b9c3cd","#b9c3cd","#b9c3cd","#b9c3cd","#b9c3cd"]}},yaxis:{show:!1},grid:{show:!1},legend:{show:!1},chart:{dropShadow:{enabled:!0,blur:8,left:1,top:1,opacity:.2},toolbar:{show:!1}},stroke:{width:0},colors:["#9f8ed7","#1edec5"],plotOptions:{radar:{polygons:{strokeColors:["#e8e8e8","transparent","transparent","transparent","transparent","transparent"],connectorColors:"transparent"}}},fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#8e9ad6","#1fcadb"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0}}},sessionsByDeviceDonut:{analyticsData:[{device:"Dekstop",icon:"MonitorIcon",color:"primary",sessionsPercentgae:58.6,comparedResultPercentage:2},{device:"Mobile",icon:"SmartphoneIcon",color:"warning",sessionsPercentgae:34.9,comparedResultPercentage:8},{device:"Tablet",icon:"TabletIcon",color:"danger",sessionsPercentgae:6.5,comparedResultPercentage:-5}],comparedResult:[2,-3,8],series:[58.6,34.9,6.5],chartOptions:{labels:["Desktop","Mobile","Tablet"],dataLabels:{enabled:!1},legend:{show:!1},chart:{offsetY:30,type:"donut",toolbar:{show:!1}},stroke:{width:0},colors:["#7961F9","#FF9F43","#EA5455"],fill:{type:"gradient",gradient:{gradientToColors:["#9c8cfc","#FFC085","#f29292"]}}}},productOrdersRadialBar:{analyticsData:[{orderType:"Finished",counts:23043,color:"primary"},{orderType:"Pending",counts:14658,color:"warning"},{orderType:"Rejected ",counts:4758,color:"danger"}],series:[70,52,26],chartOptions:{labels:["Finished","Pending","Rejected"],plotOptions:{radialBar:{size:165,offsetY:30,hollow:{size:"20%"},track:{background:"#ebebeb",strokeWidth:"100%",margin:15},dataLabels:{show:!0,name:{fontSize:"18px"},value:{fontSize:"16px",color:"#636a71",offsetY:11},total:{show:!0,label:"Total",formatter:function(){return 42459}}}}},responsive:[{breakpoint:576,options:{plotOptions:{radialBar:{size:150,hollow:{size:"20%"},track:{background:"#ebebeb",strokeWidth:"100%",margin:15}}}}}],colors:["#7961F9","#FF9F43","#EA5455"],fill:{type:"gradient",gradient:{shade:"dark",type:"vertical",shadeIntensity:.5,gradientToColors:["#9c8cfc","#FFC085","#f29292"],inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{lineCap:"round"},chart:{dropShadow:{enabled:!0,blur:3,left:1,top:1,opacity:.1}}}},customersPie:{analyticsData:[{customerType:"New",counts:890,color:"primary"},{customerType:"Returning",counts:258,color:"warning"},{customerType:"Referrals ",counts:149,color:"danger"}],series:[690,258,149],chartOptions:{labels:["New","Returning","Referrals"],dataLabels:{enabled:!1},legend:{show:!1},chart:{type:"pie",offsetY:30,dropShadow:{enabled:!1,blur:5,left:1,top:1,opacity:.2},toolbar:{show:!1}},stroke:{width:5},colors:["#7961F9","#FF9F43","#EA5455"],fill:{type:"gradient",gradient:{gradientToColors:["#9c8cfc","#FFC085","#f29292"]}}}},salesLine:{series:[{name:"Sales",data:[140,180,150,205,160,295,125,255,205,305,240,295]}],chartOptions:{chart:{toolbar:{show:!1},dropShadow:{enabled:!0,top:20,left:2,blur:6,opacity:.2}},stroke:{curve:"smooth",width:4},grid:{borderColor:"#ebebeb"},legend:{show:!1},colors:["#df87f2"],fill:{type:"gradient",gradient:{shade:"dark",inverseColors:!1,gradientToColors:["#7367F0"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0,hover:{size:5}},xaxis:{labels:{style:{cssClass:"text-grey fill-current"}},axisTicks:{show:!1},categories:["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"],axisBorder:{show:!1}},yaxis:{tickAmount:5,labels:{style:{cssClass:"text-grey fill-current"},formatter:function(e){return e>999?(e/1e3).toFixed(1)+"k":e}}},tooltip:{x:{show:!1}}}},clientRetentionBar:{series:[{name:"New Clients",data:[175,125,225,175,160,189,206,134,159,216,148,123]},{name:"Retained Clients",data:[-144,-155,-141,-167,-122,-143,-158,-107,-126,-131,-140,-137]}],chartOptions:{grid:{borderColor:"#ebebeb",padding:{left:0,right:0}},legend:{show:!1},dataLabels:{enabled:!1},chart:{stacked:!0,type:"bar",toolbar:{show:!1}},colors:["#7367F0","#EA5455"],plotOptions:{bar:{columnWidth:"10%"}},xaxis:{labels:{style:{cssClass:"text-grey fill-current"}},axisTicks:{show:!1},categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],axisBorder:{show:!1}},yaxis:{tickAmount:5,labels:{style:{cssClass:"text-grey fill-current"}}},tooltip:{x:{show:!1}}}},browserAnalytics:[{id:1,name:"Google Chrome",ratio:73,time:"Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)",comparedResult:"800"},{id:3,name:"Opera",ratio:8,time:"Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)",comparedResult:"-200"},{id:2,name:"Firefox",ratio:19,time:"Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)",comparedResult:"100"},{id:4,name:"Internet Explorer",ratio:27,time:"Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)",comparedResult:"-450"}]}},41:function(e,t,s){"use strict";var a=s(43),r={props:{icon:{type:String,required:!0},statistic:{type:[Number,String],required:!0},statisticTitle:{type:String},statisticSubTitle:{type:String,default:""},chartData:{type:Object,required:!0},color:{type:String,default:"primary"},chartType:{type:String,default:"line-chart"},type:{type:String,default:"line"},iconRight:{type:Boolean,default:!1},cardSize:{type:String,default:""}},watch:{themePrimaryColor:function(){this.$refs.apexChart.updateOptions({theme:{monochrome:{color:this.getHex()}}})}},computed:{themePrimaryColor:function(){return this.$store.state.themePrimaryColor}},methods:{getHex:function(){var e=window.getComputedStyle(document.documentElement).getPropertyValue("--vs-".concat(this.color));return e=e.split(","),"#"+((1<<24)+(Number(e[0])<<16)+(Number(e[1])<<8)+Number(e[2])).toString(16).slice(1)}},components:{VueApexCharts:s.n(a).a},created:function(){"area"==this.type&&(this.chartData.chartOptions.theme={monochrome:{enabled:!0,color:this.getHex(this.color),shadeTo:"light",shadeIntensity:.65}})}},i=s(2),o=Object(i.a)(r,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("vx-card",{staticClass:"overflow-hidden"},[s("div",{attrs:{slot:"no-body"},slot:"no-body"},[s("div",{staticClass:"p-6 pb-0",class:{"flex justify-between flex-row-reverse items-center":e.iconRight}},[s("feather-icon",{staticClass:"p-3 inline-flex rounded-full",class:["text-"+e.color,{"mb-4":!e.iconRight}],style:{background:"rgba(var(--vs-"+e.color+"),.15)"},attrs:{icon:e.icon}}),e._v(" "),s("div",[s("h3",{staticClass:"mb-1 font-bold"},[e._v(e._s(e.statistic))]),e._v(" "),s("div",[e._v(e._s(e.statisticTitle))]),e._v(" "),s("div",[e._v(e._s(e.statisticSubTitle))])])],1),e._v(" "),s("div",{staticClass:"line-area-chart",attrs:{id:e.chartData.id}},[s("vue-apex-charts",{ref:"apexChart",attrs:{type:e.type,height:"100",width:"100%",options:e.chartData.chartOptions,series:e.chartData.series}})],1)])])}),[],!1,null,null,null);t.a=o.exports},82:function(e,t,s){"use strict";var a=s(29);s.n(a).a},83:function(e,t,s){(e.exports=s(4)(!1)).push([e.i,"#tax-detail .vx-card .vx-card__collapsible-content.vs-con-loading__container {\n  min-height: 250px !important;\n}\r\n\r\n",""])}}]);
>>>>>>> 9279f5548c37aca60b0d3f76080a42724fcbe98b
