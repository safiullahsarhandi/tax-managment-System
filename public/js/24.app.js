(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/main/customerMain.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/main/customerMain.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
>>>>>>> master
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _layouts_components_vx_sidebar_VxSidebar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/layouts/components/vx-sidebar/VxSidebar.vue */ "./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue");
/* harmony import */ var _components_TheNavbar_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TheNavbar.vue */ "./resources/js/src/layouts/components/TheNavbar.vue");
/* harmony import */ var _components_TheFooter_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/TheFooter.vue */ "./resources/js/src/layouts/components/TheFooter.vue");
/* harmony import */ var _themeConfig_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/../themeConfig.js */ "./resources/js/themeConfig.js");
/* harmony import */ var _layouts_components_vx_sidebar_customerDetailSidebarItems_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/layouts/components/vx-sidebar/customerDetailSidebarItems.js */ "./resources/js/src/layouts/components/vx-sidebar/customerDetailSidebarItems.js");
/* harmony import */ var vue_backtotop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-backtotop */ "./node_modules/vue-backtotop/src/main.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
=======
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

>>>>>>> master
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
<<<<<<< HEAD
      navbarType: _themeConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"].navbarType || 'floating',
      navbarColor: _themeConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"].navbarColor || '#fff',
      footerType: _themeConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"].footerType || 'static',
      routerTransition: _themeConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"].routerTransition || 'none',
      isNavbarDark: false,
      routeTitle: this.$route.meta.pageTitle,
      sidebarItems: _layouts_components_vx_sidebar_customerDetailSidebarItems_js__WEBPACK_IMPORTED_MODULE_4__["default"],
      disableCustomizer: _themeConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"].disableCustomizer,
      windowWidth: window.innerWidth,
      //width of windows
      hideScrollToTop: _themeConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"].hideScrollToTop,
      disableThemeTour: _themeConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"].disableThemeTour
=======
      addTaxManagmentModal: false,
      editTaxManagmentModal: false,
      title: "",
      description: "",
      type: 'Monthly',
      duration: '',
      supervisor: '',
      officer: [],
      default_selected_officer: "",
      default_selected_supervisor: ""
>>>>>>> master
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('supervisors/', ['supervisors']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('officers/', ['officers'])),
  created: function created() {
    this.getSupervisors();
    this.getOfficers();
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    getSupervisors: 'supervisors/getSupervisors',
    getOfficers: 'officers/getOfficers'
  }), {
    check: function check() {
      this.addTaxManagmentModal = true;
    }
<<<<<<< HEAD
  },
  components: {
    VxSidebar: _layouts_components_vx_sidebar_VxSidebar_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    TheNavbar: _components_TheNavbar_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    TheFooter: _components_TheFooter_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    BackToTop: vue_backtotop__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  beforeCreate: function beforeCreate() {
    this.$store.commit('setRootUrl', localStorage.getItem('currentDetail'));
  },
  created: function created() {
    var self = this;
    setTimeout(function () {
      if (self.$store.getters.userType != 'Admin') {
        self.sidebarItems.splice(3, 1);
      }
    });
    this.setSidebarWidth();

    if (this.navbarColor == "#fff" && this.isThemeDark) {
      this.updateNavbarColor("#10163a");
    } else {
      this.updateNavbarColor(this.navbarColor);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/main/customerMain.vue?vue&type=template&id=45962d4e&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/main/customerMain.vue?vue&type=template&id=45962d4e& ***!
  \*********************************************************************************************************************************************************************************************************************/
=======
  })
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".selectExample {\n  margin: 10px;\n}\n.con-select-example {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.con-select .vs-select {\n  width: 100%\n}\n@media (max-width: 550px) {\n.con-select {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n}\n.con-select .vs-select {\n    width: 100%\n}\n}\r\n\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TaxManagment.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=template&id=89c4bd8a&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=template&id=89c4bd8a& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
            "template",
            { slot: "actions" },
            [
              _c("vs-button", {
                attrs: {
                  type: "border",
                  "icon-pack": "feather",
                  icon: "icon-plus"
                },
                on: {
                  click: function($event) {
                    return _vm.check()
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
        2
      ),
      _vm._v(" "),
      _c(
        "vs-popup",
        {
          attrs: {
            active: _vm.addTaxManagmentModal,
            title: "Add Tax Managment"
          },
          on: {
            "update:active": function($event) {
              _vm.addTaxManagmentModal = $event
            }
          }
        },
        [
          _c(
            "form",
            {
              ref: "addTaxManagmentForm",
              attrs: { "data-vv-scope": "addform" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.addTaxManagment($event)
                }
              }
            },
            [
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
                              "data-vv-scope": "addform"
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
                                  value: _vm.errors.has("addform.title"),
                                  expression: "errors.has('addform.title')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [_vm._v(_vm._s(_vm.errors.first("addform.title")))]
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
                              counter: 20,
                              label: "Description",
                              "data-vv-scope": "addform"
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
                                  value: _vm.errors.has("addform.description"),
                                  expression:
                                    "errors.has('addform.description')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("addform.description"))
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
                              "data-vv-scope": "addform"
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
                                  value: _vm.errors.has("addform.duration"),
                                  expression: "errors.has('addform.duration')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("addform.duration"))
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
                          _c("label", [_vm._v("Tax Period")]),
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
                              attrs: { label: "Figuras" },
                              model: {
                                value: _vm.supervisor,
                                callback: function($$v) {
                                  _vm.supervisor = $$v
                                },
                                expression: "supervisor"
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
                        [_vm._v("Add Tax Managment")]
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

<<<<<<< HEAD
/***/ "./resources/js/src/layouts/components/vx-sidebar/customerDetailSidebarItems.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/vx-sidebar/customerDetailSidebarItems.js ***!
  \**************************************************************************************/
=======
/***/ "./resources/js/src/views/pages/tax-managment/TaxManagment.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/src/views/pages/tax-managment/TaxManagment.vue ***!
  \*********************************************************************/
>>>>>>> master
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  Strucutre:
          url     => router path
          name    => name to display in sidebar
          slug    => router path name
          icon    => Feather Icon component/icon name
          tag     => text to display on badge
          tagColor  => class to apply on badge element
          i18n    => Internationalization
          submenu   => submenu of current item (current item will become dropdown )
                NOTE: Submenu don't have any icon(you can add icon if u want to display)
          isDisabled  => disable sidebar item/group
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
/* harmony default export */ __webpack_exports__["default"] = ([{
  url: "/customers",
  name: "Back",
  slug: "home",
  icon: "ArrowLeftCircleIcon",
  isMain: false
}, {
  url: "/",
  name: "Taxes",
  slug: "taxes",
  icon: "DollarSignIcon",
  isMain: true
},
/*{
    url: "/taxes",
    name: "Taxes",
    slug: "taxes",
    icon: "DollarSignIcon",
    isMain : false,
},*/
{
  url: "/employees",
  name: "Employees",
  slug: "customer-employees",
  icon: "UsersIcon",
  isMain: false,
  submenu: [{
    url: "/add-employee",
    name: "Add Employee",
    slug: "add-employee",
    icon: "UserIcon"
  }, {
    url: "/employees-list",
    name: "List Of Employees",
    slug: "employees-list",
    icon: "UserIcon"
  }]
}
/*{
    url: "/",
    name: "Sales",
    slug: "customer-sales",
    icon: "DollarSignIcon",
    submenu: [{
        url: "/add-sale",
        name: "Add Sale",
        slug: "add-sale",
        icon: "UserIcon",
    },{
        url: "/sales-list",
        name: "List Of Sales",
        slug: "sales-list",
        icon: "UserIcon",
    }],
},
{
    url: "/",
    name: "purchases",
    slug: "customer-purchases",
    icon: "TruckIcon",
    submenu: [{
        url: "/add-purchase",
        name: "Add purchase",
        slug: "add-purchase",
        icon: "UserIcon",
    },{
        url: "/purchases-list",
        name: "List Of Purchases",
        slug: "purchases-list",
        icon: "UserIcon",
    }],
},
{
    url: "/employees",
    name: "Employees",
    slug: "customer-employees",
    icon: "UsersIcon",
    submenu: [{
        url: "/add-employee",
        name: "Add Employees",
        slug: "add-employee",
        icon: "UserIcon",
    },{
        url: "/employees-list",
        name: "List Of Employees",
        slug: "employees-list",
        icon: "UserIcon",
    }],
},
{
    url: "/payrolls",
    name: "Payrolls",
    slug: "employees-payrolls",
    icon: "ActivityIcon",
    submenu: [{
        url: "/add-payroll",
        name: "Add Payroll",
        slug: "add-payroll",
        icon: "UserIcon",
    },{
        url: "/employees-payrolls",
        name: "List Of Payroll",
        slug: "employees-list",
        icon: "UserIcon",
    }],
},
{
    url: "/reports",
    name: "Reports",
    slug: "reports",
    icon: "BookOpenIcon",
}*/

/*{
    url: "/page2",
    name: "Page 2",
    slug: "page2",
    icon: "FileIcon",
},*/
]);

/***/ }),

/***/ "./resources/js/src/layouts/main/customerMain.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/layouts/main/customerMain.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _customerMain_vue_vue_type_template_id_45962d4e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customerMain.vue?vue&type=template&id=45962d4e& */ "./resources/js/src/layouts/main/customerMain.vue?vue&type=template&id=45962d4e&");
/* harmony import */ var _customerMain_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customerMain.vue?vue&type=script&lang=js& */ "./resources/js/src/layouts/main/customerMain.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
=======
/* harmony import */ var _TaxManagment_vue_vue_type_template_id_89c4bd8a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaxManagment.vue?vue&type=template&id=89c4bd8a& */ "./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=template&id=89c4bd8a&");
/* harmony import */ var _TaxManagment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaxManagment.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TaxManagment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TaxManagment.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

>>>>>>> master





/* normalize component */

<<<<<<< HEAD
var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _customerMain_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _customerMain_vue_vue_type_template_id_45962d4e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _customerMain_vue_vue_type_template_id_45962d4e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
=======
var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TaxManagment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TaxManagment_vue_vue_type_template_id_89c4bd8a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TaxManagment_vue_vue_type_template_id_89c4bd8a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
>>>>>>> master
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
<<<<<<< HEAD
component.options.__file = "resources/js/src/layouts/main/customerMain.vue"
=======
component.options.__file = "resources/js/src/views/pages/tax-managment/TaxManagment.vue"
>>>>>>> master
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/src/layouts/main/customerMain.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/layouts/main/customerMain.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
=======
/***/ "./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
>>>>>>> master
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_customerMain_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./customerMain.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/main/customerMain.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_customerMain_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/layouts/main/customerMain.vue?vue&type=template&id=45962d4e&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/layouts/main/customerMain.vue?vue&type=template&id=45962d4e& ***!
  \***************************************************************************************/
=======
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxManagment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TaxManagment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxManagment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxManagment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TaxManagment.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxManagment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxManagment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxManagment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxManagment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxManagment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=template&id=89c4bd8a&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=template&id=89c4bd8a& ***!
  \****************************************************************************************************/
>>>>>>> master
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_customerMain_vue_vue_type_template_id_45962d4e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./customerMain.vue?vue&type=template&id=45962d4e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/main/customerMain.vue?vue&type=template&id=45962d4e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_customerMain_vue_vue_type_template_id_45962d4e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_customerMain_vue_vue_type_template_id_45962d4e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
=======
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxManagment_vue_vue_type_template_id_89c4bd8a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TaxManagment.vue?vue&type=template&id=89c4bd8a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=template&id=89c4bd8a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxManagment_vue_vue_type_template_id_89c4bd8a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxManagment_vue_vue_type_template_id_89c4bd8a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
>>>>>>> master



/***/ })

}]);