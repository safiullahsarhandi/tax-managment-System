(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/demo.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/demo.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      users: [{
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "website": "hildegard.org"
      }, {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "website": "anastasia.net"
      }, {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "website": "ramiro.info"
      }, {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "website": "kale.biz"
      }, {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "website": "demarco.info"
      }, {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "website": "ola.org"
      }, {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "website": "elvis.io"
      }, {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "website": "jacynthe.com"
      }, {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "website": "conrad.com"
      }, {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "website": "ambrose.net"
      }]
    };
  },
  methods: {
    getIndex: function getIndex(indextr) {
      alert(indextr);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/demo.vue?vue&type=template&id=48387cd8&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/demo.vue?vue&type=template&id=48387cd8& ***!
  \************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/full-page/FullPage.vue?vue&type=template&id=7ab36c6f&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/full-page/FullPage.vue?vue&type=template&id=7ab36c6f& ***!
  \**********************************************************************************************************************************************************************************************************************/
>>>>>>> d34834d0b4c9904cbdb561c125d3015977f66108
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
<<<<<<< HEAD
  return _c(
    "div",
    [
      _c(
        "vs-table",
        {
          attrs: { "max-items": "3", pagination: "", data: _vm.users },
          scopedSlots: _vm._u([
            {
              key: "default",
              fn: function(ref) {
                var data = ref.data
                return _vm._l(data, function(tr, indextr) {
                  return _c(
                    "vs-tr",
                    { key: indextr },
                    [
                      _c("vs-td", { attrs: { data: data[indextr].email } }, [
                        _vm._v(
                          "\n          " +
                            _vm._s(data[indextr].email) +
                            "\n        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("vs-td", { attrs: { data: data[indextr].username } }, [
                        _vm._v(
                          "\n          " +
                            _vm._s(data[indextr].username) +
                            "\n        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("vs-td", { attrs: { data: data[indextr].id } }, [
                        _vm._v(
                          "\n          " +
                            _vm._s(data[indextr].website) +
                            "\n        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("vs-td", { attrs: { data: data[indextr].id } }, [
                        _vm._v(
                          "\n          " +
                            _vm._s(data[indextr].id) +
                            "\n        "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "vs-td",
                        [
                          _c(
                            "vs-button",
                            {
                              on: {
                                click: function($event) {
                                  return _vm.getIndex(tr.id)
                                }
                              }
                            },
                            [_vm._v("Action")]
                          )
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
          _c("template", { slot: "header" }, [
            _c("h3", [_vm._v("\n        Users\n      ")])
          ]),
          _vm._v(" "),
          _c(
            "template",
            { slot: "thead" },
            [
              _c("vs-th", [_vm._v("\n        Email\n      ")]),
              _vm._v(" "),
              _c("vs-th", [_vm._v("\n        Name\n      ")]),
              _vm._v(" "),
              _c("vs-th", [_vm._v("\n        Website\n      ")]),
              _vm._v(" "),
              _c("vs-th", [_vm._v("\n        Nro\n      ")]),
              _vm._v(" "),
              _c("vs-th", [_vm._v("\n        Action\n      ")])
            ],
            1
          )
        ],
        2
      )
    ],
    1
  )
=======
  return _c("div", { staticClass: "layout--full-page" }, [_c("router-view")], 1)
>>>>>>> d34834d0b4c9904cbdb561c125d3015977f66108
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/src/views/pages/demo.vue":
/*!***********************************************!*\
  !*** ./resources/js/src/views/pages/demo.vue ***!
  \***********************************************/
=======
/***/ "./resources/js/src/layouts/full-page/FullPage.vue":
/*!*********************************************************!*\
  !*** ./resources/js/src/layouts/full-page/FullPage.vue ***!
  \*********************************************************/
>>>>>>> d34834d0b4c9904cbdb561c125d3015977f66108
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _demo_vue_vue_type_template_id_48387cd8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demo.vue?vue&type=template&id=48387cd8& */ "./resources/js/src/views/pages/demo.vue?vue&type=template&id=48387cd8&");
/* harmony import */ var _demo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./demo.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/demo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



=======
/* harmony import */ var _FullPage_vue_vue_type_template_id_7ab36c6f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FullPage.vue?vue&type=template&id=7ab36c6f& */ "./resources/js/src/layouts/full-page/FullPage.vue?vue&type=template&id=7ab36c6f&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}
>>>>>>> d34834d0b4c9904cbdb561c125d3015977f66108


/* normalize component */

<<<<<<< HEAD
var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _demo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _demo_vue_vue_type_template_id_48387cd8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _demo_vue_vue_type_template_id_48387cd8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
=======
var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _FullPage_vue_vue_type_template_id_7ab36c6f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FullPage_vue_vue_type_template_id_7ab36c6f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
>>>>>>> d34834d0b4c9904cbdb561c125d3015977f66108
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
<<<<<<< HEAD
component.options.__file = "resources/js/src/views/pages/demo.vue"
=======
component.options.__file = "resources/js/src/layouts/full-page/FullPage.vue"
>>>>>>> d34834d0b4c9904cbdb561c125d3015977f66108
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/src/views/pages/demo.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/src/views/pages/demo.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_demo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./demo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/demo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_demo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/demo.vue?vue&type=template&id=48387cd8&":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/pages/demo.vue?vue&type=template&id=48387cd8& ***!
  \******************************************************************************/
=======
/***/ "./resources/js/src/layouts/full-page/FullPage.vue?vue&type=template&id=7ab36c6f&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/layouts/full-page/FullPage.vue?vue&type=template&id=7ab36c6f& ***!
  \****************************************************************************************/
>>>>>>> d34834d0b4c9904cbdb561c125d3015977f66108
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_demo_vue_vue_type_template_id_48387cd8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./demo.vue?vue&type=template&id=48387cd8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/demo.vue?vue&type=template&id=48387cd8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_demo_vue_vue_type_template_id_48387cd8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_demo_vue_vue_type_template_id_48387cd8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
=======
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FullPage_vue_vue_type_template_id_7ab36c6f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FullPage.vue?vue&type=template&id=7ab36c6f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/full-page/FullPage.vue?vue&type=template&id=7ab36c6f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FullPage_vue_vue_type_template_id_7ab36c6f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FullPage_vue_vue_type_template_id_7ab36c6f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
>>>>>>> d34834d0b4c9904cbdb561c125d3015977f66108



/***/ })

}]);