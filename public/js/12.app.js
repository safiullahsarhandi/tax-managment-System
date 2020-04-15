(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/main/Main.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/main/Main.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
=======
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Customers/Customers.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Customers/Customers.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _layouts_components_vx_sidebar_VxSidebar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/layouts/components/vx-sidebar/VxSidebar.vue */ "./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue");
/* harmony import */ var _components_TheNavbar_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TheNavbar.vue */ "./resources/js/src/layouts/components/TheNavbar.vue");
/* harmony import */ var _components_TheFooter_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/TheFooter.vue */ "./resources/js/src/layouts/components/TheFooter.vue");
/* harmony import */ var _themeConfig_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/../themeConfig.js */ "./resources/js/themeConfig.js");
/* harmony import */ var _layouts_components_vx_sidebar_sidebarItems_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/layouts/components/vx-sidebar/sidebarItems.js */ "./resources/js/src/layouts/components/vx-sidebar/sidebarItems.js");
/* harmony import */ var _layouts_components_vx_sidebar_supervisorSidebarItems_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/layouts/components/vx-sidebar/supervisorSidebarItems.js */ "./resources/js/src/layouts/components/vx-sidebar/supervisorSidebarItems.js");
/* harmony import */ var _layouts_components_vx_sidebar_officerSidebarItems_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/layouts/components/vx-sidebar/officerSidebarItems.js */ "./resources/js/src/layouts/components/vx-sidebar/officerSidebarItems.js");
/* harmony import */ var vue_backtotop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-backtotop */ "./node_modules/vue-backtotop/src/main.js");
=======
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      sidebarItems: [],
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
    },
    setTokenSentToServer: function setTokenSentToServer(flag) {
      localStorage.setItem('tokenSentToServer', flag ? "1" : "0");
    },
    isTokenSentToServer: function isTokenSentToServer() {
      return localStorage.getItem('tokenSentToServer') === '1';
    }
  },
  components: {
    VxSidebar: _layouts_components_vx_sidebar_VxSidebar_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    TheNavbar: _components_TheNavbar_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    TheFooter: _components_TheFooter_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    BackToTop: vue_backtotop__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  beforeCreate: function beforeCreate() {},
  created: function created() {
    var _this = this;

    var permission = Notification.permission;

    if (permission !== 'granted') {
      this.setTokenSentToServer(false);
      Notification.requestPermission().then(function () {
        _this.$messaging.getToken().then(function (currentToken) {
          // currentToken
          _this.$store.dispatch('sendTokenToServer', {
            token: currentToken,
            closeLoading: _this.$vs.loading.close
          });

          _this.setTokenSentToServer(true);
        })["catch"](function (err) {
          console.log('An error occurred while retrieving token. ', err); // showToken('Error retrieving Instance ID token. ', err);
          // setTokenSentToServer(false);
        });
      });
    } else {
      if (!this.isTokenSentToServer()) {
        this.$messaging.getToken().then(function (currentToken) {
          // currentToken
          _this.$store.dispatch('sendTokenToServer', {
            token: currentToken,
            closeLoading: _this.$vs.loading.close
          });

          _this.setTokenSentToServer(true);
        })["catch"](function (err) {
          console.log('An error occurred while retrieving token. ', err); // showToken('Error retrieving Instance ID token. ', err);
          // setTokenSentToServer(false);
        });
      } else {
        console.log('already given');
      }
    }

    this.$messaging.onTokenRefresh(function () {
      _this.$messaging.getToken().then(function (refreshedToken) {
        console.log('Token refreshed.'); // Indicate that the new Instance ID token has not yet been sent to the
        // app server.

        _this.setTokenSentToServer(false); // Send Instance ID token to app server.


        _this.$store.dispatch('sendTokenToServer', {
          token: refreshedToken,
          closeLoading: _this.$vs.loading.close
        });

        ; // [START_EXCLUDE]
        // Display new Instance ID token and clear UI of all previous messages.
        // resetUI();
        // [END_EXCLUDE]
      })["catch"](function (err) {
        console.log('Unable to retrieve refreshed token ', err);
        showToken('Unable to retrieve refreshed token ', err);
      });
    });
    var self = this; // console.log()

    setTimeout(function () {
      if (self.$store.getters.userType == 'Admin' || self.$store.getters.userType == 'Super Admin') {
        self.sidebarItems = _layouts_components_vx_sidebar_sidebarItems_js__WEBPACK_IMPORTED_MODULE_4__["default"];
        /*self.sidebarItems.splice(4, 1);
        self.sidebarItems.splice(5, 1);*/
      } else if (self.$store.getters.userType == 'Supervisor') {
        self.sidebarItems = _layouts_components_vx_sidebar_supervisorSidebarItems_js__WEBPACK_IMPORTED_MODULE_5__["default"];
      } else {
        self.sidebarItems = _layouts_components_vx_sidebar_officerSidebarItems_js__WEBPACK_IMPORTED_MODULE_6__["default"];
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
=======

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
    getOfficer: function getOfficer(officer) {
      if (officer != null) {
        return officer.full_name;
      } else {
        return 'N/A';
      }
    },
    getSupervisor: function getSupervisor(supervisor) {
      if (supervisor != null) {
        return supervisor.full_name;
      } else {
        return 'N/A';
      }
    },
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
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Customers/Customers.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Customers/Customers.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".con-vs-popup .vs-popup {\n  width: 1000px !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Customers/Customers.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Customers/Customers.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Customers.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Customers/Customers.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Customers/Customers.vue?vue&type=template&id=24124076&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Customers/Customers.vue?vue&type=template&id=24124076& ***!
  \***************************************************************************************************************************************************************************************************************************/
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
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
<<<<<<< HEAD
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
=======
    [
      _c(
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
                          _vm.$store.getters.userType == "Admin" ||
                          _vm.$store.getters.userType == "Super Admin"
                            ? _c(
                                "vs-td",
                                {
                                  attrs: {
                                    data: _vm.getSupervisor(tr.supervisor)
                                  }
                                },
                                [
                                  _vm._v(
                                    _vm._s(_vm.getSupervisor(tr.supervisor))
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.$store.getters.userType != "Officer"
                            ? _c(
                                "vs-td",
                                { attrs: { data: _vm.getOfficer(tr.officer) } },
                                [_vm._v(_vm._s(_vm.getOfficer(tr.officer)))]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.$store.getters.userType != "Admin" ||
                          _vm.$store.getters.userType != "Super Admin"
                            ? _c("vs-td", { attrs: { data: 0 } }, [
                                _vm._v(_vm._s(0))
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.$store.getters.userType == "Admin" ||
                          _vm.$store.getters.userType != "Super Admin"
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
                              _vm.$store.getters.userType == "Admin" ||
                              _vm.$store.getters.userType != "Super Admin"
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
                            [_vm._v("Export")]
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
                  _vm.$store.getters.userType == "Admin" ||
                  _vm.$store.getters.userType == "Super Admin"
                    ? _c("vs-th", [_vm._v("Supervisor")])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Officer")]),
                  _vm._v(" "),
                  _vm.$store.getters.userType != "Admin" ||
                  _vm.$store.getters.userType != "Super Admin"
                    ? _c("vs-th", [_vm._v("Uncompleted Taxes")])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.$store.getters.userType == "Admin" ||
                  _vm.$store.getters.userType != "Super Admin"
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
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
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

<<<<<<< HEAD
/***/ "./resources/js/src/layouts/components/vx-sidebar/officerSidebarItems.js":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/layouts/components/vx-sidebar/officerSidebarItems.js ***!
  \*******************************************************************************/
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
  url: "/customers",
  name: "Customers",
  slug: "customers",
  icon: "UsersIcon"
}, {
  url: "/",
  name: "Companies",
  slug: "companies",
  icon: "UsersIcon",
  isMain: false,
  submenu: [{
    url: "/add-company",
    name: "Add Company",
    slug: "add-company",
    icon: "UserIcon",
    target: '_blank'
  }, {
    url: "/companies",
    name: "List Of Companies",
    slug: "companies",
    icon: "UsersIcon"
  }]
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
  url: "/faqs",
  name: "Faqs",
  slug: "faqs",
  icon: "HelpCircleIcon",
  isMain: false
}]);

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
  url: "/customers",
  name: "Customers",
  slug: "customers",
  icon: "UsersIcon"
}, {
  url: "/currencies",
  name: "Currencies",
  slug: "currencies",
  icon: "DollarSignIcon",
  isMain: false
}, {
  url: "/",
  name: "Companies",
  slug: "companies",
  icon: "UsersIcon",
  isMain: false,
  submenu: [
  /*{
  url: "/add-company",
  name: "Add Company",
  slug: "add-company",
  icon: "UserIcon",
  target : '_blank',
  },*/
  {
    url: "/companies",
    name: "List Of Companies",
    slug: "companies",
    icon: "UsersIcon"
  }]
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
}, {
  url: "/faqs",
  name: "Faqs",
  slug: "faqs",
  icon: "HelpCircleIcon",
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
=======
/***/ "./resources/js/src/views/pages/Customers/Customers.vue":
/*!**************************************************************!*\
  !*** ./resources/js/src/views/pages/Customers/Customers.vue ***!
  \**************************************************************/
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony default export */ __webpack_exports__["default"] = ([{
  url: "/dashboard",
  name: "Dashboard",
  slug: "home",
  icon: "HomeIcon",
  isMain: false
}, {
  url: "/customers",
  name: "Customers",
  slug: "customers",
  icon: "UsersIcon"
}, {
  url: "/",
  name: "Companies",
  slug: "companies",
  icon: "UsersIcon",
  isMain: false,
  submenu: [{
    url: "/add-company",
    name: "Add Company",
    slug: "add-company",
    icon: "UserIcon",
    target: '_blank'
  }, {
    url: "/companies",
    name: "List Of Companies",
    slug: "companies",
    icon: "UsersIcon"
  }]
}, {
  url: "/exchange-rates",
  name: "Exchange Rates",
  slug: "exchange-rates",
  icon: "ActivityIcon",
  isMain: false
}, {
  url: "/my-team",
  name: "My Team",
  slug: "team-members",
  icon: "UsersIcon",
  isMain: false
}, {
  url: "/faqs",
  name: "Faqs",
  slug: "faqs",
  icon: "HelpCircleIcon",
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
=======
/* harmony import */ var _Customers_vue_vue_type_template_id_24124076___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Customers.vue?vue&type=template&id=24124076& */ "./resources/js/src/views/pages/Customers/Customers.vue?vue&type=template&id=24124076&");
/* harmony import */ var _Customers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Customers.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Customers/Customers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Customers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Customers.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/pages/Customers/Customers.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1





/* normalize component */

<<<<<<< HEAD
var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Main_vue_vue_type_template_id_22fa5a70___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Main_vue_vue_type_template_id_22fa5a70___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
=======
var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Customers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Customers_vue_vue_type_template_id_24124076___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Customers_vue_vue_type_template_id_24124076___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
<<<<<<< HEAD
component.options.__file = "resources/js/src/layouts/main/Main.vue"
=======
component.options.__file = "resources/js/src/views/pages/Customers/Customers.vue"
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/src/layouts/main/Main.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/src/layouts/main/Main.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
=======
/***/ "./resources/js/src/views/pages/Customers/Customers.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Customers/Customers.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/main/Main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/layouts/main/Main.vue?vue&type=template&id=22fa5a70&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/layouts/main/Main.vue?vue&type=template&id=22fa5a70& ***!
  \*******************************************************************************/
=======
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Customers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Customers/Customers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Customers/Customers.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Customers/Customers.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Customers.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Customers/Customers.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/Customers/Customers.vue?vue&type=template&id=24124076&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Customers/Customers.vue?vue&type=template&id=24124076& ***!
  \*********************************************************************************************/
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_22fa5a70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=template&id=22fa5a70& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/main/Main.vue?vue&type=template&id=22fa5a70&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_22fa5a70___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_22fa5a70___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
=======
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_vue_vue_type_template_id_24124076___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Customers.vue?vue&type=template&id=24124076& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Customers/Customers.vue?vue&type=template&id=24124076&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_vue_vue_type_template_id_24124076___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_vue_vue_type_template_id_24124076___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1



/***/ })

}]);