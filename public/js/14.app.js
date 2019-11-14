(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

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
        1
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
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
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