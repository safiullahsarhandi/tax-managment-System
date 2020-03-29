<<<<<<< HEAD
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/main/Main.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/main/Main.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_components_vx_sidebar_VxSidebar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/layouts/components/vx-sidebar/VxSidebar.vue */ "./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue");
/* harmony import */ var _components_TheNavbar_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TheNavbar.vue */ "./resources/js/src/layouts/components/TheNavbar.vue");
/* harmony import */ var _components_TheFooter_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/TheFooter.vue */ "./resources/js/src/layouts/components/TheFooter.vue");
/* harmony import */ var _themeConfig_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/../themeConfig.js */ "./resources/js/themeConfig.js");
/* harmony import */ var _layouts_components_vx_sidebar_sidebarItems_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/layouts/components/vx-sidebar/sidebarItems.js */ "./resources/js/src/layouts/components/vx-sidebar/sidebarItems.js");
/* harmony import */ var _layouts_components_vx_sidebar_supervisorSidebarItems_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/layouts/components/vx-sidebar/supervisorSidebarItems.js */ "./resources/js/src/layouts/components/vx-sidebar/supervisorSidebarItems.js");
/* harmony import */ var vue_backtotop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-backtotop */ "./node_modules/vue-backtotop/src/main.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  inject: ['loginUser'],
  data: function data() {
    return {
      navbarType: _themeConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"].navbarType || 'floating',
      navbarColor: _themeConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"].navbarColor || '#fff',
      footerType: _themeConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"].footerType || 'static',
      routerTransition: _themeConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"].routerTransition || 'none',
      isNavbarDark: false,
      routeTitle: this.$route.meta.pageTitle,
      sidebarItems: _layouts_components_vx_sidebar_sidebarItems_js__WEBPACK_IMPORTED_MODULE_4__["default"],
      disableCustomizer: _themeConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"].disableCustomizer,
      windowWidth: window.innerWidth,
      //width of windows
      hideScrollToTop: _themeConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"].hideScrollToTop,
      disableThemeTour: _themeConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"].disableThemeTour
    };
  },
  watch: {
    '$route': function $route() {
      this.routeTitle = this.$route.meta.pageTitle;
    },
    isThemeDark: function isThemeDark(val) {
      if (this.navbarColor == "#fff" && val) {
        this.updateNavbarColor("#10163a");
      } else {
        this.updateNavbarColor("#fff");
      }
    }
  },
  computed: {
    isAppPage: function isAppPage() {
      if (this.$route.path.includes('/apps/')) return true;else return false;
    },
    isThemeDark: function isThemeDark() {
      return this.$store.state.theme == 'dark';
    },
    sidebarWidth: function sidebarWidth() {
      return this.$store.state.sidebarWidth;
    },
    bodyOverlay: function bodyOverlay() {
      return this.$store.state.bodyOverlay;
    },
    contentAreaClass: function contentAreaClass() {
      if (this.sidebarWidth == "default") return "content-area-default";else if (this.sidebarWidth == "reduced") return "content-area-reduced";else if (this.sidebarWidth) return "content-area-full";
    },
    navbarClasses: function navbarClasses() {
      return {
        'navbar-hidden': this.navbarType == 'hidden',
        'navbar-sticky': this.navbarType == 'sticky',
        'navbar-static': this.navbarType == 'static',
        'navbar-floating': this.navbarType == 'floating'
      };
    },
    footerClasses: function footerClasses() {
      return {
        'footer-hidden': this.footerType == 'hidden',
        'footer-sticky': this.footerType == 'sticky',
        'footer-static': this.footerType == 'static'
      };
    }
  },
  methods: {
    changeRouteTitle: function changeRouteTitle(title) {
      this.routeTitle = title;
    },
    updateNavbarColor: function updateNavbarColor(val) {
      this.navbarColor = val;
      if (val == "#fff") this.isNavbarDark = false;else this.isNavbarDark = true;
    },
    handleWindowResize: function handleWindowResize(event) {
      this.windowWidth = event.currentTarget.innerWidth;
      this.setSidebarWidth();
    },
    setSidebarWidth: function setSidebarWidth() {
      if (this.windowWidth < 1200) {
        this.$store.commit('TOGGLE_IS_SIDEBAR_ACTIVE', false);
        this.$store.dispatch('updateSidebarWidth', 'no-sidebar');
        this.disableThemeTour = true;
      } else if (this.windowWidth < 1200) {
        this.$store.dispatch('updateSidebarWidth', 'reduced');
      } else {
        this.$store.commit('TOGGLE_IS_SIDEBAR_ACTIVE', true);
      }
    },
    toggleHideScrollToTop: function toggleHideScrollToTop(val) {
      this.hideScrollToTop = val;
    }
  },
  components: {
    VxSidebar: _layouts_components_vx_sidebar_VxSidebar_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    TheNavbar: _components_TheNavbar_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    TheFooter: _components_TheFooter_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    BackToTop: vue_backtotop__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  beforeCreate: function beforeCreate() {},
  created: function created() {
    var self = this; // console.log()

    setTimeout(function () {
      if (self.$store.getters.userType == 'Admin' || self.$store.getters.userType == 'Super Admin') {
        self.sidebarItems = _layouts_components_vx_sidebar_sidebarItems_js__WEBPACK_IMPORTED_MODULE_4__["default"];
        /*self.sidebarItems.splice(4, 1);
        self.sidebarItems.splice(5, 1);*/
      } else {
        self.sidebarItems = _layouts_components_vx_sidebar_supervisorSidebarItems_js__WEBPACK_IMPORTED_MODULE_5__["default"];
      }
    }, 1);
    this.setSidebarWidth();

    if (this.navbarColor == "#fff" && this.isThemeDark) {
      this.updateNavbarColor("#10163a");
    } else {
      this.updateNavbarColor(this.navbarColor);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/main/Main.vue?vue&type=template&id=22fa5a70&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/main/Main.vue?vue&type=template&id=22fa5a70& ***!
  \*************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "layout--main",
      class: [
        _vm.navbarClasses,
        _vm.footerClasses,
        { "app-page": _vm.isAppPage }
      ]
    },
    [
      _c("vx-sidebar", {
        attrs: {
          sidebarItems: _vm.sidebarItems,
          logo: "./public/images/33white.png",
          title: "Tax System",
          parent: ".layout--main"
        }
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          class: [_vm.contentAreaClass, { "show-overlay": _vm.bodyOverlay }],
          attrs: { id: "content-area" }
        },
        [
          _c("div", { attrs: { id: "content-overlay" } }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "content-wrapper" },
            [
              _c("the-navbar", {
                class: [
                  { "text-white": _vm.isNavbarDark && !_vm.isThemeDark },
                  { "text-base": !_vm.isNavbarDark && _vm.isThemeDark }
                ],
                attrs: { navbarColor: _vm.navbarColor }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "router-view" }, [
                _c(
                  "div",
                  {
                    staticClass: "router-content",
                    class: { "mt-0": _vm.navbarType == "hidden" }
                  },
                  [
                    _c(
                      "transition",
                      { attrs: { name: _vm.routerTransition } },
                      [
                        _vm.$route.meta.breadcrumb || _vm.$route.meta.pageTitle
                          ? _c(
                              "div",
                              {
                                staticClass:
                                  "router-header flex flex-wrap items-center mb-6"
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass: "content-area__heading",
                                    class: {
                                      "pr-4 border-0 md:border-r border-t-0 border-b-0 border-l-0 border-solid border-grey-light":
                                        _vm.$route.meta.breadcrumb
                                    }
                                  },
                                  [
                                    _c("h2", { staticClass: "mb-1" }, [
                                      _vm._v(_vm._s(_vm.routeTitle))
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _vm.$route.meta.breadcrumb
                                  ? _c("vx-breadcrumb", {
                                      staticClass: "ml-4 md:block hidden"
                                    })
                                  : _vm._e(),
                                _vm._v(" "),
                                _c(
                                  "vs-dropdown",
                                  {
                                    staticClass:
                                      "ml-auto md:block hidden cursor-pointer",
                                    attrs: { "vs-trigger-click": "" }
                                  },
                                  [
                                    _c("vs-button", {
                                      attrs: {
                                        radius: "",
                                        icon: "icon-settings",
                                        "icon-pack": "feather"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "vs-dropdown-menu",
                                      { staticClass: "w-32" },
                                      [
                                        _c("vs-dropdown-item", [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "flex items-center",
                                              on: {
                                                click: function($event) {
                                                  return _vm.$router.push(
                                                    "/pages/profile"
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c("feather-icon", {
                                                staticClass:
                                                  "inline-block mr-2",
                                                attrs: {
                                                  icon: "UserIcon",
                                                  svgClasses: "w-4 h-4"
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("span", [_vm._v("Profile")])
                                            ],
                                            1
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("vs-dropdown-item", [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "flex items-center",
                                              on: {
                                                click: function($event) {
                                                  return _vm.$router.push(
                                                    "/apps/todo"
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c("feather-icon", {
                                                staticClass:
                                                  "inline-block mr-2",
                                                attrs: {
                                                  icon: "CheckSquareIcon",
                                                  svgClasses: "w-4 h-4"
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("span", [_vm._v("Tasks")])
                                            ],
                                            1
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("vs-dropdown-item", [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "flex items-center",
                                              on: {
                                                click: function($event) {
                                                  return _vm.$router.push(
                                                    "/apps/email"
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c("feather-icon", {
                                                staticClass:
                                                  "inline-block mr-2",
                                                attrs: {
                                                  icon: "MailIcon",
                                                  svgClasses: "w-4 h-4"
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("span", [_vm._v("Inbox")])
                                            ],
                                            1
                                          )
                                        ])
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
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "content-area__content" },
                      [
                        !_vm.hideScrollToTop
                          ? _c(
                              "back-to-top",
                              { attrs: { bottom: "5%", visibleoffset: "500" } },
                              [
                                _c("vs-button", {
                                  staticClass: "shadow-lg",
                                  attrs: {
                                    "icon-pack": "feather",
                                    icon: "icon-arrow-up"
                                  }
                                })
                              ],
                              1
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "transition",
                          {
                            attrs: {
                              name: _vm.routerTransition,
                              mode: "out-in"
                            }
                          },
                          [
                            _c("router-view", {
                              on: { changeRouteTitle: _vm.changeRouteTitle }
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
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("the-footer")
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

/***/ "./resources/js/src/layouts/components/vx-sidebar/sidebarItems.js":
/*!************************************************************************!*\
  !*** ./resources/js/src/layouts/components/vx-sidebar/sidebarItems.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  url: "/dashboard",
  name: "Dashboard",
  slug: "home",
  icon: "HomeIcon",
  isMain: false
}, {
  url: "/",
  name: "Customers",
  slug: "customers",
  icon: "UsersIcon",
  isMain: false,
  submenu: [
  /*{
  url: "/add-customer",
  name: "Add Customer",
  slug: "add-customer",
  icon: "UserIcon",
  },*/
  {
    url: "/customers",
    name: "List Of Customers",
    slug: "customers",
    icon: "UsersIcon"
  }] // submenu: [
  //         {
  //             url: "/monthly",
  //             name: "Monthly",
  //             slug: "monthly",
  //             icon: "UserIcon",
  //             submenu: [{
  //                     url: "/add-customer/monthly",
  //                     name: "Add Customer",
  //                     slug: "add-customer",
  //                     icon: "UserIcon",
  //                 },
  //                 {
  //                     url: "/customers/monthly",
  //                     name: "List Of Customers",
  //                     slug: "customers",
  //                     icon: "UsersIcon",
  //                 },
  //             ]
  //         },
  //         {
  //             url: "/yearly",
  //             name: "Yearly",
  //             slug: "yearly",
  //             icon: "UserIcon",
  //             submenu: [{
  //                     url: "/add-customer/yearly",
  //                     name: "Add Customer",
  //                     slug: "add-customer",
  //                     icon: "UserIcon",
  //                 },
  //                 {
  //                     url: "/customers/yearly",
  //                     name: "List Of Customers",
  //                     slug: "customers",
  //                     icon: "UsersIcon",
  //                 },
  //             ]
  //         }
  //     ]
  // submenu: [{
  //     url: "/add-customer",
  //     name: "Add Customer",
  //     slug: "add-customer",
  //     icon: "UserIcon",
  // },
  // {
  //     url: "/customers",
  //     name: "List Of Customers",
  //     slug: "customers",
  //     icon: "UsersIcon",
  // }
  // ],

}, {
  url: "/currencies",
  name: "Currencies",
  slug: "currencies",
  icon: "DollarSignIcon",
  isMain: false
}, {
  url: "/exchange-rates",
  name: "Exchange Rates",
  slug: "exchange-rates",
  icon: "ActivityIcon",
  isMain: false
}, {
  url: "/team-members",
  name: "Team Members",
  slug: "team-members",
  icon: "UsersIcon",
  isMain: false
}, {
  url: "/tax-parameters",
  name: "Tax Parameters",
  slug: "tax-parameters",
  icon: "PercentIcon",
  isMain: false
} // {
//     url: "/manage-team",
//     name: "Our Team",
//     slug: "our-team",
//     icon: "UsersIcon",
//     isMain : false,
//     submenu: [{
//         url: "/admins",
//         name: "Admins",
//         slug: "admins",
//         icon: "UserIcon",
//     },{
//         url: "/supervisors",
//         name: "Supervisors",
//         slug: "supervisors",
//         icon: "UserIcon",
//     },{
//         url: "/officers",
//         name: "Officers",
//         slug: "officers",
//         icon: "UserIcon",
//     } ],
// },

/*{
    url: "/page2",
    name: "Page 2",
    slug: "page2",
    icon: "FileIcon",
},*/
]);

/***/ }),

/***/ "./resources/js/src/layouts/components/vx-sidebar/supervisorSidebarItems.js":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/layouts/components/vx-sidebar/supervisorSidebarItems.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  url: "/dashboard",
  name: "Dashboard",
  slug: "home",
  icon: "HomeIcon",
  isMain: false
}, {
  url: "/",
  name: "Customers",
  slug: "customers",
  icon: "UsersIcon",
  isMain: false,
  submenu: [{
    url: "/add-customer",
    name: "Add Customer",
    slug: "add-customer",
    icon: "UserIcon"
  }, {
    url: "/customers",
    name: "List Of Customers",
    slug: "customers",
    icon: "UsersIcon"
  }]
}, {
  url: "/my-team",
  name: "My Team",
  slug: "team-members",
  icon: "UsersIcon",
  isMain: false
}]);

/***/ }),

/***/ "./resources/js/src/layouts/main/Main.vue":
/*!************************************************!*\
  !*** ./resources/js/src/layouts/main/Main.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Main_vue_vue_type_template_id_22fa5a70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main.vue?vue&type=template&id=22fa5a70& */ "./resources/js/src/layouts/main/Main.vue?vue&type=template&id=22fa5a70&");
/* harmony import */ var _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main.vue?vue&type=script&lang=js& */ "./resources/js/src/layouts/main/Main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Main_vue_vue_type_template_id_22fa5a70___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Main_vue_vue_type_template_id_22fa5a70___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/layouts/main/Main.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/layouts/main/Main.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/src/layouts/main/Main.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/main/Main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/layouts/main/Main.vue?vue&type=template&id=22fa5a70&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/layouts/main/Main.vue?vue&type=template&id=22fa5a70& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_22fa5a70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=template&id=22fa5a70& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/main/Main.vue?vue&type=template&id=22fa5a70&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_22fa5a70___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_22fa5a70___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
=======
(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{102:function(t,s){t.exports="/images/404.png?0a38972b4083f43522258cbe550a3cb7"},162:function(t,s,e){"use strict";e.r(s);var a=e(2),i=Object(a.a)({},(function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"h-screen flex w-full bg-img"},[s("div",{staticClass:"vx-col flex items-center justify-center flex-col sm:w-1/2 md:w-3/5 lg:w-3/4 xl:w-1/2 mx-auto text-center"},[s("img",{staticClass:"mx-auto mb-4 max-w-full",attrs:{src:e(102),alt:"graphic-404"}}),this._v(" "),s("h1",{staticClass:"sm:mx-0 mx-4 mb-12 text-5xl d-theme-heading-color"},[this._v("404 - Page Not Found!")]),this._v(" "),s("p",{staticClass:"sm:mx-0 mx-4 mb-4 sm:mb-16 d-theme-text-inverse"},[this._v("paraphonic unassessable foramination Caulopteris worral Spirophyton encrimson esparcet aggerate chondrule restate whistler shallopy biosystematy area bertram plotting unstarting quarterstaff.")]),this._v(" "),s("vs-button",{attrs:{size:"large",to:"/"}},[this._v("Back to Home")])],1)])}),[],!1,null,null,null);s.default=i.exports}}]);
>>>>>>> 9279f5548c37aca60b0d3f76080a42724fcbe98b
