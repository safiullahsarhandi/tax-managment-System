<<<<<<< HEAD
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/statistics-cards/DashboardCard.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/statistics-cards/DashboardCard.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    icon: {
      type: String,
      required: true
    },
    statistic: {
      type: [Number, String],
      required: false,
      "default": ''
    },
    title: {
      type: String
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Home.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_statistics_cards_DashboardCard_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/statistics-cards/DashboardCard.vue */ "./resources/js/src/components/statistics-cards/DashboardCard.vue");
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
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios.get('get-dashboard-data?manager=' + localStorage.getItem('admin')));

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
    StatisticsCardLine: _components_statistics_cards_DashboardCard_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Home.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#card-1 .vx-card {\n  background: -webkit-gradient(linear, left top, right top, from(#ffbf96), to(#fe7096)) !important;\n  background: linear-gradient(to right, #ffbf96, #fe7096) !important;\n  color: #fff;\n}\n#card-2\t .vx-card {\n  background: -webkit-gradient(linear, right top, left top, from(#90caf9), color-stop(99%, #047edf)) !important;\n  background: linear-gradient(-90deg, #90caf9, #047edf 99%) !important;\n  color: #fff;\n}\n#card-3\t .vx-card {\n  background: -webkit-gradient(linear, right top, left top, from(#84d9d2), to(#07cdae)) !important;\n  background: linear-gradient(-90deg, #84d9d2, #07cdae) !important;\n  color: #fff;\n}\n#home .vx-card .text-primary {\n  color: rgba(var(--vs-dark), 1) !important;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Home.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/statistics-cards/DashboardCard.vue?vue&type=template&id=26b7766e&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/statistics-cards/DashboardCard.vue?vue&type=template&id=26b7766e& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
              _vm._v(_vm._s(_vm.title))
            ]),
            _vm._v(" "),
            _c("h3", { staticClass: "mb-1 font-bold" }, [
              _vm._v(_vm._s(_vm.statistic))
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mb-1 font-semibold" }, [
              _vm._v(_vm._s(_vm.statisticTitle))
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mb-1 font-bold" }, [
              _vm._v(_vm._s(_vm.statisticSubTitle))
            ])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee& ***!
  \******************************************************************************************************************************************************************************************************/
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
              statisticTitle: "% of all customers: " + 10 + "%",
              title: "Monthly Tax",
              statisticSubTitle: "Total No. of Customers: " + 20,
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
              title: "Annual Tax",
              statisticTitle: "% of all customers: " + 10 + "%",
              statisticSubTitle: "Total No. of Customers: " + 20,
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
              title: "Tax Resubmission",
              statisticTitle: "% of all customers: " + 10 + "%",
              statisticSubTitle: "Total No. of Customers: " + 20,
              chartData: _vm.analyticsData.revenueGenerated,
              type: "area"
            }
          })
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

/***/ "./resources/js/src/components/statistics-cards/DashboardCard.vue":
/*!************************************************************************!*\
  !*** ./resources/js/src/components/statistics-cards/DashboardCard.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DashboardCard_vue_vue_type_template_id_26b7766e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardCard.vue?vue&type=template&id=26b7766e& */ "./resources/js/src/components/statistics-cards/DashboardCard.vue?vue&type=template&id=26b7766e&");
/* harmony import */ var _DashboardCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardCard.vue?vue&type=script&lang=js& */ "./resources/js/src/components/statistics-cards/DashboardCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DashboardCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DashboardCard_vue_vue_type_template_id_26b7766e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DashboardCard_vue_vue_type_template_id_26b7766e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/statistics-cards/DashboardCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/statistics-cards/DashboardCard.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/components/statistics-cards/DashboardCard.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/statistics-cards/DashboardCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/statistics-cards/DashboardCard.vue?vue&type=template&id=26b7766e&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/components/statistics-cards/DashboardCard.vue?vue&type=template&id=26b7766e& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardCard_vue_vue_type_template_id_26b7766e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardCard.vue?vue&type=template&id=26b7766e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/statistics-cards/DashboardCard.vue?vue&type=template&id=26b7766e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardCard_vue_vue_type_template_id_26b7766e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardCard_vue_vue_type_template_id_26b7766e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/Home.vue":
/*!*****************************************!*\
  !*** ./resources/js/src/views/Home.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=e85b2cee& */ "./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/Home.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Home.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/src/views/Home.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Home.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************!*\
  !*** ./resources/js/src/views/Home.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee&":
/*!************************************************************************!*\
  !*** ./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=e85b2cee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
=======
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{157:function(e,t,a){"use strict";a.r(t);var r=a(7),o=a.n(r),s=a(1),i=a(41),n=a(40);function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var d={data:function(){return{dashboard:[],analyticsData:n.a}},computed:function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(a,!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},Object(s.d)("customers",["monthlyCustomers","yearlyCustomers","resubmitted"])),created:function(){var e;return o.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.awrap(axios.get("get-dashboard-data"));case 2:e=t.sent,this.dashboard=e.data;case 4:case"end":return t.stop()}}),null,this)},methods:{},components:{StatisticsCardLine:i.a}},p=(a(70),a(2)),h=Object(p.a)(d,(function(){var e=this.$createElement,t=this._self._c||e;return t("vs-row",{staticClass:"mt-base p-0",attrs:{id:"home"}},[t("vs-col",{attrs:{id:"card-1","vs-lg":"4","vs-md":"4","vs-sm":"12","vs-xs":"12"}},[t("statistics-card-line",{attrs:{iconRight:"",icon:"DollarSignIcon",statistic:"10%",statisticTitle:"Monthly Tax",statisticSubTitle:"Total No. of Customers",chartData:this.analyticsData.revenueGenerated,type:"area"}})],1),this._v(" "),t("vs-col",{attrs:{id:"card-2","vs-lg":"4","vs-md":"4","vs-sm":"12","vs-xs":"12"}},[t("statistics-card-line",{attrs:{iconRight:"",icon:"DollarSignIcon",statistic:"10%",statisticTitle:"Annual Tax",statisticSubTitle:"Total No. of Customers",chartData:this.analyticsData.revenueGenerated,type:"area"}})],1),this._v(" "),t("vs-col",{attrs:{id:"card-3","vs-lg":"4","vs-md":"4","vs-sm":"12","vs-xs":"12"}},[t("statistics-card-line",{attrs:{iconRight:"",icon:"DollarSignIcon",statistic:"20%",statisticTitle:"Tax Resubmission",statisticSubTitle:"Total No. of Customers",chartData:this.analyticsData.revenueGenerated,type:"area"}})],1)],1)}),[],!1,null,null,null);t.default=h.exports},23:function(e,t,a){var r=a(71);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a(5)(r,o);r.locals&&(e.exports=r.locals)},40:function(e,t,a){"use strict";t.a={siteTraffic:{series:[{name:"Traffic Rate",data:[150,200,125,225,200,250]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{type:"line",dropShadow:{enabled:!0,top:5,left:0,blur:4,opacity:.1},toolbar:{show:!1},sparkline:{enabled:!0}},stroke:{width:5,curve:"smooth"},xaxis:{type:"numeric"},colors:["#7367F0"],fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#A9A2F6"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0,hover:{size:5}},tooltip:{x:{show:!1}}}},activeUsers:{series:[{name:"Active Users",data:[750,1e3,900,1250,1e3,1200,1100]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{type:"line",dropShadow:{enabled:!0,top:5,left:0,blur:4,opacity:.1},toolbar:{show:!1},sparkline:{enabled:!0}},stroke:{width:5,curve:"smooth"},xaxis:{type:"numeric"},colors:["#28C76F"],fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#55DD92"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,75,100,100]}},markers:{size:0,hover:{size:5}},tooltip:{x:{show:!1}}}},newsletter:{series:[{name:"Newsletter",data:[365,390,365,400,375,400]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{type:"line",dropShadow:{enabled:!0,top:5,left:0,blur:4,opacity:.1},toolbar:{show:!1},sparkline:{enabled:!0}},stroke:{width:5,curve:"smooth"},xaxis:{type:"numeric"},colors:["#FF9F43"],fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#ffc085"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,75,100,100]}},markers:{size:0,hover:{size:5}},tooltip:{x:{show:!1}}}},revenueComparisonLine:{series:[{name:"This Month",data:[45e3,47e3,44800,47500,45500,48e3,46500,48600]},{name:"Last Month",data:[46e3,48e3,45500,46600,44500,46500,45e3,47e3]}],chartOptions:{chart:{toolbar:{show:!1}},stroke:{curve:"smooth",dashArray:[0,8],width:[4,2]},grid:{borderColor:"#e7e7e7"},legend:{show:!1},colors:["#F97794","#b8c2cc"],fill:{type:"gradient",gradient:{shade:"dark",inverseColors:!1,gradientToColors:["#7367F0","#b8c2cc"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0,hover:{size:5}},xaxis:{labels:{style:{cssClass:"text-grey fill-current"}},axisTicks:{show:!1},categories:["01","05","09","13","17","21","26","31"],axisBorder:{show:!1}},yaxis:{tickAmount:5,labels:{style:{cssClass:"text-grey fill-current"},formatter:function(e){return e>999?(e/1e3).toFixed(1)+"k":e}}},tooltip:{x:{show:!1}}}},subscribersGained:{series:[{name:"Subscribers",data:[28,40,36,52,38,60,55]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{type:"numeric",lines:{show:!1},axisBorder:{show:!1},labels:{show:!1}},yaxis:[{tooltip:{enabled:!1},y:0,offsetX:0,offsetY:0,padding:{left:0,right:0}}],tooltip:{enabled:!1,x:{show:!1}}}},quarterlySales:{series:[{name:"Sales",data:[10,15,7,12,3,16]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{type:"numeric",lines:{show:!1},axisBorder:{show:!1},labels:{show:!1}},yaxis:[{y:0,offsetX:0,offsetY:0,padding:{left:0,right:0}}],tooltip:{enabled:!1,x:{show:!1}}}},revenueGenerated:{series:[{name:"Revenue",data:[350,275,400,300,350,300,450]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{type:"numeric",lines:{show:!1},axisBorder:{show:!1},labels:{show:!1}},yaxis:[{y:0,offsetX:0,offsetY:0,padding:{left:0,right:0}}],tooltip:{enabled:!1,x:{show:!1}}}},ordersRecevied:{series:[{name:"Orders",data:[10,15,8,15,7,12,8]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{type:"numeric",lines:{show:!1},axisBorder:{show:!1},labels:{show:!1}},yaxis:[{y:0,offsetX:0,offsetY:0,padding:{left:0,right:0}}],tooltip:{x:{show:!1}}}},salesBar:{series:[{name:"Sessions",data:[75,125,225,175,125,75,25]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{type:"bar",sparkline:{enabled:!0},toolbar:{show:!1}},states:{hover:{filter:"none"}},colors:["#e6edf7","#e6edf7","#7367f0","#e6edf7","#e6edf7","#e6edf7"],plotOptions:{bar:{columnWidth:"45%",distributed:!0,endingShape:"rounded"}},tooltip:{x:{show:!1}}}},goalOverviewRadialBar:{series:[83],chartOptions:{plotOptions:{radialBar:{size:110,startAngle:-150,endAngle:150,hollow:{size:"77%"},track:{background:"#bfc5cc",strokeWidth:"50%"},dataLabels:{name:{show:!1},value:{offsetY:18,color:"#99a2ac",fontSize:"4rem"}}}},colors:["#00db89"],fill:{type:"gradient",gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:["#00b5b5"],inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{lineCap:"round"},chart:{sparkline:{enabled:!0},dropShadow:{enabled:!0,blur:3,left:1,top:1,opacity:.1}}}},supportTrackerRadialBar:{chartData:{totalTickets:163,openTickets:103,lastResponse:"1d"},series:[83],chartOptions:{plotOptions:{radialBar:{size:150,offsetY:15,startAngle:-150,endAngle:150,hollow:{size:"65%"},track:{background:"#fff",strokeWidth:"100%"},dataLabels:{value:{offsetY:30,color:"#99a2ac",fontSize:"2rem"}}}},colors:["#EA5455"],fill:{type:"gradient",gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:["#7367F0"],inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{dashArray:8},chart:{sparkline:{}},labels:["Completed Tickets"]}},statisticsRadar:{series:[{name:"Visits",data:[90,50,86,40,100,20]},{name:"Sales",data:[70,75,70,76,20,85]}],chartOptions:{labels:["Jan","Feb","Mar","Apr","May","Jun"],dataLabels:{style:{colors:["#b9c3cd","#b9c3cd","#b9c3cd","#b9c3cd","#b9c3cd","#b9c3cd"]}},yaxis:{show:!1},grid:{show:!1},legend:{show:!1},chart:{dropShadow:{enabled:!0,blur:8,left:1,top:1,opacity:.2},toolbar:{show:!1}},stroke:{width:0},colors:["#9f8ed7","#1edec5"],plotOptions:{radar:{polygons:{strokeColors:["#e8e8e8","transparent","transparent","transparent","transparent","transparent"],connectorColors:"transparent"}}},fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#8e9ad6","#1fcadb"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0}}},sessionsByDeviceDonut:{analyticsData:[{device:"Dekstop",icon:"MonitorIcon",color:"primary",sessionsPercentgae:58.6,comparedResultPercentage:2},{device:"Mobile",icon:"SmartphoneIcon",color:"warning",sessionsPercentgae:34.9,comparedResultPercentage:8},{device:"Tablet",icon:"TabletIcon",color:"danger",sessionsPercentgae:6.5,comparedResultPercentage:-5}],comparedResult:[2,-3,8],series:[58.6,34.9,6.5],chartOptions:{labels:["Desktop","Mobile","Tablet"],dataLabels:{enabled:!1},legend:{show:!1},chart:{offsetY:30,type:"donut",toolbar:{show:!1}},stroke:{width:0},colors:["#7961F9","#FF9F43","#EA5455"],fill:{type:"gradient",gradient:{gradientToColors:["#9c8cfc","#FFC085","#f29292"]}}}},productOrdersRadialBar:{analyticsData:[{orderType:"Finished",counts:23043,color:"primary"},{orderType:"Pending",counts:14658,color:"warning"},{orderType:"Rejected ",counts:4758,color:"danger"}],series:[70,52,26],chartOptions:{labels:["Finished","Pending","Rejected"],plotOptions:{radialBar:{size:165,offsetY:30,hollow:{size:"20%"},track:{background:"#ebebeb",strokeWidth:"100%",margin:15},dataLabels:{show:!0,name:{fontSize:"18px"},value:{fontSize:"16px",color:"#636a71",offsetY:11},total:{show:!0,label:"Total",formatter:function(){return 42459}}}}},responsive:[{breakpoint:576,options:{plotOptions:{radialBar:{size:150,hollow:{size:"20%"},track:{background:"#ebebeb",strokeWidth:"100%",margin:15}}}}}],colors:["#7961F9","#FF9F43","#EA5455"],fill:{type:"gradient",gradient:{shade:"dark",type:"vertical",shadeIntensity:.5,gradientToColors:["#9c8cfc","#FFC085","#f29292"],inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{lineCap:"round"},chart:{dropShadow:{enabled:!0,blur:3,left:1,top:1,opacity:.1}}}},customersPie:{analyticsData:[{customerType:"New",counts:890,color:"primary"},{customerType:"Returning",counts:258,color:"warning"},{customerType:"Referrals ",counts:149,color:"danger"}],series:[690,258,149],chartOptions:{labels:["New","Returning","Referrals"],dataLabels:{enabled:!1},legend:{show:!1},chart:{type:"pie",offsetY:30,dropShadow:{enabled:!1,blur:5,left:1,top:1,opacity:.2},toolbar:{show:!1}},stroke:{width:5},colors:["#7961F9","#FF9F43","#EA5455"],fill:{type:"gradient",gradient:{gradientToColors:["#9c8cfc","#FFC085","#f29292"]}}}},salesLine:{series:[{name:"Sales",data:[140,180,150,205,160,295,125,255,205,305,240,295]}],chartOptions:{chart:{toolbar:{show:!1},dropShadow:{enabled:!0,top:20,left:2,blur:6,opacity:.2}},stroke:{curve:"smooth",width:4},grid:{borderColor:"#ebebeb"},legend:{show:!1},colors:["#df87f2"],fill:{type:"gradient",gradient:{shade:"dark",inverseColors:!1,gradientToColors:["#7367F0"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0,hover:{size:5}},xaxis:{labels:{style:{cssClass:"text-grey fill-current"}},axisTicks:{show:!1},categories:["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"],axisBorder:{show:!1}},yaxis:{tickAmount:5,labels:{style:{cssClass:"text-grey fill-current"},formatter:function(e){return e>999?(e/1e3).toFixed(1)+"k":e}}},tooltip:{x:{show:!1}}}},clientRetentionBar:{series:[{name:"New Clients",data:[175,125,225,175,160,189,206,134,159,216,148,123]},{name:"Retained Clients",data:[-144,-155,-141,-167,-122,-143,-158,-107,-126,-131,-140,-137]}],chartOptions:{grid:{borderColor:"#ebebeb",padding:{left:0,right:0}},legend:{show:!1},dataLabels:{enabled:!1},chart:{stacked:!0,type:"bar",toolbar:{show:!1}},colors:["#7367F0","#EA5455"],plotOptions:{bar:{columnWidth:"10%"}},xaxis:{labels:{style:{cssClass:"text-grey fill-current"}},axisTicks:{show:!1},categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],axisBorder:{show:!1}},yaxis:{tickAmount:5,labels:{style:{cssClass:"text-grey fill-current"}}},tooltip:{x:{show:!1}}}},browserAnalytics:[{id:1,name:"Google Chrome",ratio:73,time:"Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)",comparedResult:"800"},{id:3,name:"Opera",ratio:8,time:"Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)",comparedResult:"-200"},{id:2,name:"Firefox",ratio:19,time:"Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)",comparedResult:"100"},{id:4,name:"Internet Explorer",ratio:27,time:"Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)",comparedResult:"-450"}]}},41:function(e,t,a){"use strict";var r=a(43),o={props:{icon:{type:String,required:!0},statistic:{type:[Number,String],required:!0},statisticTitle:{type:String},statisticSubTitle:{type:String,default:""},chartData:{type:Object,required:!0},color:{type:String,default:"primary"},chartType:{type:String,default:"line-chart"},type:{type:String,default:"line"},iconRight:{type:Boolean,default:!1},cardSize:{type:String,default:""}},watch:{themePrimaryColor:function(){this.$refs.apexChart.updateOptions({theme:{monochrome:{color:this.getHex()}}})}},computed:{themePrimaryColor:function(){return this.$store.state.themePrimaryColor}},methods:{getHex:function(){var e=window.getComputedStyle(document.documentElement).getPropertyValue("--vs-".concat(this.color));return e=e.split(","),"#"+((1<<24)+(Number(e[0])<<16)+(Number(e[1])<<8)+Number(e[2])).toString(16).slice(1)}},components:{VueApexCharts:a.n(r).a},created:function(){"area"==this.type&&(this.chartData.chartOptions.theme={monochrome:{enabled:!0,color:this.getHex(this.color),shadeTo:"light",shadeIntensity:.65}})}},s=a(2),i=Object(s.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("vx-card",{staticClass:"overflow-hidden"},[a("div",{attrs:{slot:"no-body"},slot:"no-body"},[a("div",{staticClass:"p-6 pb-0",class:{"flex justify-between flex-row-reverse items-center":e.iconRight}},[a("feather-icon",{staticClass:"p-3 inline-flex rounded-full",class:["text-"+e.color,{"mb-4":!e.iconRight}],style:{background:"rgba(var(--vs-"+e.color+"),.15)"},attrs:{icon:e.icon}}),e._v(" "),a("div",[a("h3",{staticClass:"mb-1 font-bold"},[e._v(e._s(e.statistic))]),e._v(" "),a("div",[e._v(e._s(e.statisticTitle))]),e._v(" "),a("div",[e._v(e._s(e.statisticSubTitle))])])],1),e._v(" "),a("div",{staticClass:"line-area-chart",attrs:{id:e.chartData.id}},[a("vue-apex-charts",{ref:"apexChart",attrs:{type:e.type,height:"100",width:"100%",options:e.chartData.chartOptions,series:e.chartData.series}})],1)])])}),[],!1,null,null,null);t.a=i.exports},70:function(e,t,a){"use strict";var r=a(23);a.n(r).a},71:function(e,t,a){(e.exports=a(4)(!1)).push([e.i,"#card-1 .vx-card {\n  background: -webkit-gradient(linear, left top, right top, from(#ffbf96), to(#fe7096)) !important;\n  background: linear-gradient(to right, #ffbf96, #fe7096) !important;\n  color: #fff;\n}\n#card-2\t .vx-card {\n  background: -webkit-gradient(linear, right top, left top, from(#90caf9), color-stop(99%, #047edf)) !important;\n  background: linear-gradient(-90deg, #90caf9, #047edf 99%) !important;\n  color: #fff;\n}\n#card-3\t .vx-card {\n  background: -webkit-gradient(linear, right top, left top, from(#84d9d2), to(#07cdae)) !important;\n  background: linear-gradient(-90deg, #84d9d2, #07cdae) !important;\n  color: #fff;\n}\n#home .vx-card .text-primary {\n  color: rgba(var(--vs-dark), 1) !important;\n}\r\n",""])}}]);
>>>>>>> 9279f5548c37aca60b0d3f76080a42724fcbe98b
