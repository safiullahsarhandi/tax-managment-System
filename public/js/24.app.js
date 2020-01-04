(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Currencies.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Currencies.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      currencies: []
    };
  },
  created: function created() {
    var _this = this;

    this.$vs.loading();
    axios.get('get-currencies').then(function (res) {
      _this.currencies = res.data.currencies;

      _this.$vs.loading.close();
    });
  },
  methods: {
    statusUpdate: function statusUpdate(id) {
      var _this2 = this;

      this.$vs.loading();
      axios.post('status-update-currency', {
        id: id
      }).then(function (res) {
        _this2.$vs.notify({
          title: 'Updated!...',
          text: res.data.msg,
          color: 'success',
          position: 'top-right'
        });

        _this2.$vs.loading.close();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Currencies.vue?vue&type=template&id=27198bc4&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Currencies.vue?vue&type=template&id=27198bc4& ***!
  \******************************************************************************************************************************************************************************************************************/
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
        { attrs: { title: "List Of Currencies" } },
        [
          _c(
            "vs-table",
            {
              attrs: {
                search: "",
                pagination: "",
                "max-items": "15",
                data: _vm.currencies
              },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(ref) {
                    var data = ref.data
                    return _vm._l(_vm.currencies, function(tr, index) {
                      return _c(
                        "vs-tr",
                        { key: index },
                        [
                          _c("vs-td", { attrs: { data: index++ } }, [
                            _vm._v(_vm._s(index++))
                          ]),
                          _vm._v(" "),
                          _c("vs-td", { attrs: { data: tr.country } }, [
                            _vm._v(_vm._s(tr.country))
                          ]),
                          _vm._v(" "),
                          _c("vs-td", { attrs: { data: tr.currency } }, [
                            _vm._v(_vm._s(tr.currency))
                          ]),
                          _vm._v(" "),
                          _c("vs-td", { attrs: { data: tr.code_alfa } }, [
                            _vm._v(_vm._s(tr.code_alfa))
                          ]),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            { attrs: { data: tr.status } },
                            [
                              _c("vs-switch", {
                                on: {
                                  click: function($event) {
                                    return _vm.statusUpdate(tr.id)
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
                  _c("vs-th", [_vm._v("S.No")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Country/Region")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Currency")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Code Alfa")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Staus")])
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/pages/Currencies.vue":
/*!*****************************************************!*\
  !*** ./resources/js/src/views/pages/Currencies.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Currencies_vue_vue_type_template_id_27198bc4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Currencies.vue?vue&type=template&id=27198bc4& */ "./resources/js/src/views/pages/Currencies.vue?vue&type=template&id=27198bc4&");
/* harmony import */ var _Currencies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Currencies.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Currencies.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Currencies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Currencies_vue_vue_type_template_id_27198bc4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Currencies_vue_vue_type_template_id_27198bc4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/Currencies.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/Currencies.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/pages/Currencies.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Currencies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Currencies.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Currencies.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Currencies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Currencies.vue?vue&type=template&id=27198bc4&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Currencies.vue?vue&type=template&id=27198bc4& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Currencies_vue_vue_type_template_id_27198bc4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Currencies.vue?vue&type=template&id=27198bc4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Currencies.vue?vue&type=template&id=27198bc4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Currencies_vue_vue_type_template_id_27198bc4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Currencies_vue_vue_type_template_id_27198bc4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);