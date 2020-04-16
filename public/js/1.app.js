(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/MultiUploads.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/MultiUploads.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    active: {
      type: Boolean,
      "default": false
    },
    title: {
      type: String,
      "default": 'Upload Multiple Records'
    },
    action: {
      type: String,
      required: true
    },
    sampleUrl: {
      type: String,
      required: true
    },
    fileName: {
      type: String,
      "default": 'file'
    },
    myOfficers: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    callingFrom: {
      type: String,
      "default": ''
    }
  },
  watch: {},
  data: function data() {
    return {
      isShown: this.active,
      manager: ''
    };
  },
  methods: {
    deleteFunc: function deleteFunc(error) {
      this.$emit('deleted');
    },
    changeWorker: function changeWorker() {
      this.$emit('worker-changed', this.manager);
    },
    successFunc: function successFunc(success) {
      var response = JSON.parse(success.target.response);
      var multiUploader = this.$refs.multiUploader;

      var file = _.filter(multiUploader.filesx, function (o) {
        return o.remove !== true;
      });

      if (file.length > 0) {
        var index = _.findLastIndex(multiUploader.filesx);

        this.$refs.multiUploader.removeFile(index);
      }

      this.$emit('uploaded', response); // this.successMultipleUpload();
      // console.log('testing');
    },
    errorFunc: function errorFunc(error) {
      var response = JSON.parse(error.target.response);
      this.$emit('error', response);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/MultiUploads.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/MultiUploads.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".uploader-column .con-input-upload {\n  width: 100%;\n}\n.uploader-column .con-img-upload .img-upload {\n  margin: 0;\n  width: 100%;\n  border: 1px solid rgba(52, 144, 220, 0.5);\n}\n.uploader-column .con-input-upload.disabled-upload {\n  display: none;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/MultiUploads.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/MultiUploads.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./MultiUploads.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/MultiUploads.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/MultiUploads.vue?vue&type=template&id=a768204e&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/MultiUploads.vue?vue&type=template&id=a768204e& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
    "vs-popup",
    {
      attrs: { title: _vm.title, active: _vm.isShown },
      on: {
        "update:active": function($event) {
          _vm.isShown = $event
        }
      }
    },
    [
      _c(
        "vs-row",
        [
          _vm.callingFrom != ""
            ? _c(
                "vs-col",
                {
                  staticClass: "mb-2 p-0",
                  attrs: { "vs-md": "12", "vs-lg": "12", "vs-sm": "12" }
                },
                [
                  _vm.$store.getters.userType == "Supervisor"
                    ? _c(
                        "vs-col",
                        {
                          staticClass: "flex justify-end",
                          attrs: { "vs-md": "12", "vs-lg": "12", "vs-sm": "12" }
                        },
                        [
                          _c(
                            "vx-input-group",
                            [
                              _c(
                                "vs-select",
                                {
                                  attrs: {
                                    label: "List Of Officers",
                                    placeholder: "Select officer who work"
                                  },
                                  on: { input: _vm.changeWorker },
                                  model: {
                                    value: _vm.manager,
                                    callback: function($$v) {
                                      _vm.manager = $$v
                                    },
                                    expression: "manager"
                                  }
                                },
                                _vm._l(_vm.myOfficers, function(
                                  officer,
                                  index
                                ) {
                                  return _c("vs-select-item", {
                                    key: index,
                                    attrs: {
                                      text: officer.full_name,
                                      value: officer.manager_id
                                    }
                                  })
                                }),
                                1
                              )
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
                      )
                    : _vm._e()
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "vs-col",
            { staticClass: "uploader-column" },
            [
              _c("vs-upload", {
                ref: "multiUploader",
                attrs: {
                  singleUpload: true,
                  text: "Drag/Drop OR select .xlsx file",
                  accept: ".xlsx",
                  fileName: _vm.fileName,
                  action: _vm.action,
                  limit: 1,
                  multiple: false
                },
                on: {
                  "on-success": _vm.successFunc,
                  "on-error": _vm.errorFunc,
                  "on-delete": _vm.deleteFunc
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("vs-col", { staticClass: "text-right" }, [
            _c("a", { attrs: { href: _vm.sampleUrl, download: "" } }, [
              _vm._v("View Sample")
            ])
          ])
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

/***/ "./resources/js/src/components/MultiUploads.vue":
/*!******************************************************!*\
  !*** ./resources/js/src/components/MultiUploads.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MultiUploads_vue_vue_type_template_id_a768204e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MultiUploads.vue?vue&type=template&id=a768204e& */ "./resources/js/src/components/MultiUploads.vue?vue&type=template&id=a768204e&");
/* harmony import */ var _MultiUploads_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MultiUploads.vue?vue&type=script&lang=js& */ "./resources/js/src/components/MultiUploads.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MultiUploads_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MultiUploads.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/components/MultiUploads.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MultiUploads_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MultiUploads_vue_vue_type_template_id_a768204e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MultiUploads_vue_vue_type_template_id_a768204e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/MultiUploads.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/MultiUploads.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/components/MultiUploads.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiUploads_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MultiUploads.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/MultiUploads.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiUploads_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/MultiUploads.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/components/MultiUploads.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiUploads_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./MultiUploads.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/MultiUploads.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiUploads_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiUploads_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiUploads_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiUploads_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiUploads_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/components/MultiUploads.vue?vue&type=template&id=a768204e&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/components/MultiUploads.vue?vue&type=template&id=a768204e& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiUploads_vue_vue_type_template_id_a768204e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MultiUploads.vue?vue&type=template&id=a768204e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/MultiUploads.vue?vue&type=template&id=a768204e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiUploads_vue_vue_type_template_id_a768204e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiUploads_vue_vue_type_template_id_a768204e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);