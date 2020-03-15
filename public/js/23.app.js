(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/main/TaxDetailMain.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/main/TaxDetailMain.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tax/TaxTeam.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Tax/TaxTeam.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
/* harmony import */ var _layouts_components_vx_sidebar_taxDetailSidebarItems_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/layouts/components/vx-sidebar/taxDetailSidebarItems.js */ "./resources/js/src/layouts/components/vx-sidebar/taxDetailSidebarItems.js");
/* harmony import */ var vue_backtotop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-backtotop */ "./node_modules/vue-backtotop/src/main.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
=======
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


>>>>>>> master
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

<<<<<<< HEAD
//
//
//
//
//
//
//
//
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


/* harmony default export */ __webpack_exports__["default"] = ({
<<<<<<< HEAD
  data: function data() {
    return {
      navbarType: _themeConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"].navbarType || 'floating',
      navbarColor: _themeConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"].navbarColor || '#fff',
      footerType: _themeConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"].footerType || 'static',
      routerTransition: _themeConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"].routerTransition || 'none',
      isNavbarDark: false,
      routeTitle: this.$route.meta.pageTitle,
      sidebarItems: _layouts_components_vx_sidebar_taxDetailSidebarItems_js__WEBPACK_IMPORTED_MODULE_4__["default"],
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
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_6__["mapState"])(['AppActiveUser']), {
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
  }),
  methods: {
    setSidebarLinks: function setSidebarLinks() {
      if (this.AppActiveUser.type != 'Supervisor') {// console.log(this.$store.getters.userType)
        // this.$delete(this.sidebarItems,5);
      }
    },
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
    BackToTop: vue_backtotop__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  beforeCreate: function beforeCreate() {
    this.$vs.loading({
      background: 'light'
    });
    this.$store.commit('setRootUrl', localStorage.getItem('currentDetail'));
    var self = this;
    this.$store.dispatch('getLoginUser').then(function () {
      if (self.$store.state.AppActiveUser.type == 'Officer') {
        self.sidebarItems.splice(5, 1);
      }

      setTimeout(function () {
        self.$vs.loading.close();
      }, 500);
    });
  },
  created: function created() {
    this.sidebarItems[0].url = '/customer-detail/' + localStorage.getItem('customer');
    this.setSidebarLinks();
    this.setSidebarWidth();

    if (this.navbarColor == "#fff" && this.isThemeDark) {
      this.updateNavbarColor("#10163a");
    } else {
      this.updateNavbarColor(this.navbarColor);
    }
  },
  mounted: function mounted() {}
=======
  inject: ['generatePassword'],
  data: function data() {
    return {
      tax_id: '',
      editTaxManagmentModal: false,
      officer: []
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])('taxes/', ['tax_team']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])('officers/', ['officers']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('admins/', ['findAdmin']), {
    loginUser: function loginUser() {
      return this.$store.state.AppActiveUser;
    }
  }),
  created: function created() {
    var officer;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function created$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            this.tax_id = this.$store.state.rootUrl.split('/')[2];
            this.getOfficers();
            self = this;
            _context.next = 5;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.getTaxTeam(this.tax_id));

          case 5:
            officer = _.map(self.tax_team, function (o) {
              if (!_.isUndefined(o.detail)) {
                return o.detail.manager_id;
              }
            });
            this.officer = _.slice(officer, 1, officer.length);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, null, this);
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])({
    getTaxTeam: 'taxes/getTaxTeam',
    updateTeamMembers: 'taxes/updateTeamMembers',
    getOfficers: 'officers/getOfficers'
  }), {
    statusUpdate: function statusUpdate(id) {
      var _this = this;

      this.$vs.loading();
      axios.post('status-update-tax-member', {
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
    updateTeam: function updateTeam(e) {
      var _this2 = this;

      this.$validator.validateAll().then(function (result) {
        if (result) {
          var fd = new FormData(_this2.$refs.updateTaxTeam);
          fd.append('tax_id', _this2.tax_id);
          fd.append('officers', _this2.officer);

          _this2.$vs.loading();

          var data = {
            fd: fd,
            close: _this2.$vs.loading.close,
            notify: _this2.$vs.notify
          };

          _this2.updateTeamMembers(data).then(function (res) {
            _this2.editTaxManagmentModal = false;

            var officer = _.map(_this2.tax_team, function (o) {
              if (!_.isUndefined(o.detail)) {
                return o.detail.manager_id;
              }
            });

            _this2.officer = _.slice(officer, 1, officer.length);
          });
        }
      });
    }
  })
>>>>>>> master
});

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/main/TaxDetailMain.vue?vue&type=template&id=bf081fe4&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/main/TaxDetailMain.vue?vue&type=template&id=bf081fe4& ***!
  \**********************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tax/TaxTeam.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Tax/TaxTeam.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".selectExample {\n  margin-top: 10px;\n}\n.con-select {\n  width: 100% !important;\n  clear: both;\n}\n.con-select .vs-select--input {\n  margin-top: 10px !important;\n}\r\n\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tax/TaxTeam.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Tax/TaxTeam.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TaxTeam.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tax/TaxTeam.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tax/TaxTeam.vue?vue&type=template&id=40787bc2&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Tax/TaxTeam.vue?vue&type=template&id=40787bc2& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
        { attrs: { title: "List of Team Members" } },
        [
          _c(
            "template",
            { slot: "actions" },
            [
              _vm.$store.getters.userType == "Admin" ||
              _vm.$store.getters.userType == "Super Admin"
                ? _c("vs-button", {
                    attrs: {
                      type: "border",
                      "icon-pack": "feather",
                      icon: "icon-edit"
                    },
                    on: {
                      click: function($event) {
                        _vm.editTaxManagmentModal = true
                      }
                    }
                  })
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "vs-table",
            {
              attrs: {
                search: "",
                pagination: "",
                "max-items": "6",
                data: _vm.tax_team
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
                          [
                            tr.detail
                              ? [
                                  _c(
                                    "vs-td",
                                    {
                                      attrs: {
                                        data:
                                          tr.detail.first_name +
                                          " " +
                                          tr.detail.last_name
                                      }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(tr.detail.first_name) +
                                          " " +
                                          _vm._s(tr.detail.last_name)
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "vs-td",
                                    { attrs: { data: tr.detail.phone } },
                                    [_vm._v(_vm._s(tr.detail.phone))]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "vs-td",
                                    { attrs: { data: tr.detail.email } },
                                    [_vm._v(_vm._s(tr.detail.email))]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "vs-td",
                                    {
                                      attrs: {
                                        data:
                                          tr.detail.address +
                                          " " +
                                          tr.detail.state +
                                          " " +
                                          tr.detail.city +
                                          " " +
                                          tr.detail.zip_code
                                      }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(tr.detail.address) +
                                          " " +
                                          _vm._s(tr.detail.state) +
                                          " " +
                                          _vm._s(tr.detail.city) +
                                          " " +
                                          _vm._s(tr.detail.zip_code)
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "vs-td",
                                    { attrs: { data: tr.detail.type } },
                                    [_vm._v(_vm._s(tr.detail.type))]
                                  ),
                                  _vm._v(" "),
                                  _vm.$store.getters.userType == "Admin" ||
                                  _vm.$store.getters.userType == "Super Admin"
                                    ? _c(
                                        "vs-td",
                                        { attrs: { data: tr.detail.status } },
                                        [
                                          _c("vs-switch", {
                                            on: {
                                              click: function($event) {
                                                return _vm.statusUpdate(
                                                  tr.detail.manager_id
                                                )
                                              }
                                            },
                                            model: {
                                              value: tr.detail.status,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  tr.detail,
                                                  "status",
                                                  $$v
                                                )
                                              },
                                              expression: "tr.detail.status"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    : _vm._e()
                                ]
                              : [
                                  _c(
                                    "vs-td",
                                    {
                                      attrs: {
                                        data: tr.first_name + " " + tr.last_name
                                      }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(tr.first_name) +
                                          " " +
                                          _vm._s(tr.last_name)
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("vs-td", { attrs: { data: tr.phone } }, [
                                    _vm._v(_vm._s(tr.phone))
                                  ]),
                                  _vm._v(" "),
                                  _c("vs-td", { attrs: { data: tr.email } }, [
                                    _vm._v(_vm._s(tr.email))
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "vs-td",
                                    {
                                      attrs: {
                                        data:
                                          tr.address +
                                          " " +
                                          tr.state +
                                          " " +
                                          tr.city +
                                          " " +
                                          tr.zip_code
                                      }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(tr.address) +
                                          " " +
                                          _vm._s(tr.state) +
                                          " " +
                                          _vm._s(tr.city) +
                                          " " +
                                          _vm._s(tr.zip_code)
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("vs-td", { attrs: { data: tr.type } }, [
                                    _vm._v(_vm._s(tr.type))
                                  ]),
                                  _vm._v(" "),
                                  _vm.$store.getters.userType == "Admin" ||
                                  _vm.$store.getters.userType == "Super Admin"
                                    ? _c(
                                        "vs-td",
                                        [
                                          _c("vs-switch", {
                                            on: {
                                              click: function($event) {
                                                return _vm.statusUpdate(
                                                  tr.manager_id
                                                )
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
                                    : _vm._e()
                                ]
                          ]
                        ],
                        2
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
                  _c("vs-th", [_vm._v("Name")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Phone #")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Email")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Address")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Designation")]),
                  _vm._v(" "),
                  _vm.$store.getters.userType == "Admin" ||
                  _vm.$store.getters.userType == "Super Admin"
                    ? _c("vs-th", [_vm._v("Status")])
                    : _vm._e()
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
          attrs: { active: _vm.editTaxManagmentModal, title: "Update Team" },
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
              ref: "updateTaxTeam",
              attrs: { "data-vv-scope": "updateForm" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.updateTeam($event)
                }
              }
            },
            [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.tax_id,
                    expression: "tax_id"
                  }
                ],
                attrs: { type: "hidden", name: "category_id" },
                domProps: { value: _vm.tax_id },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.tax_id = $event.target.value
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
                                    text: item.full_name
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

<<<<<<< HEAD
/***/ "./resources/js/src/layouts/components/vx-sidebar/taxDetailSidebarItems.js":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/layouts/components/vx-sidebar/taxDetailSidebarItems.js ***!
  \*********************************************************************************/
=======
/***/ "./resources/js/src/views/pages/Tax/TaxTeam.vue":
/*!******************************************************!*\
  !*** ./resources/js/src/views/pages/Tax/TaxTeam.vue ***!
  \******************************************************/
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
  url: "/",
  name: "Back",
  slug: "home",
  icon: "HomeIcon",
  isMain: false
}, {
  url: "/",
  name: "Overview",
  slug: "home",
  icon: "HomeIcon",
  isMain: true
}, {
  url: "/",
  name: "Sales",
  slug: "customer-sales",
  icon: "DollarSignIcon",
  isMain: false,
  submenu: [{
    url: "/add-sale",
    name: "Add Sale",
    slug: "add-sale",
    icon: "UserIcon"
  }, {
    url: "/sales-list",
    name: "List Of Sales",
    slug: "sales-list",
    icon: "UserIcon"
  }]
}, {
  url: "/",
  name: "purchases",
  slug: "customer-purchases",
  icon: "TruckIcon",
  isMain: false,
  submenu: [{
    url: "/add-purchase",
    name: "Add purchase",
    slug: "add-purchase",
    icon: "UserIcon"
  }, {
    url: "/purchases-list",
    name: "List Of Purchases",
    slug: "purchases-list",
    icon: "UserIcon"
  }]
}, {
  url: "/payrolls",
  name: "Payrolls",
  slug: "employees-payrolls",
  icon: "ActivityIcon",
  isMain: false,
  submenu: [{
    url: "/add-payroll",
    name: "Add Payroll",
    slug: "add-payroll",
    icon: "UserIcon"
  }, {
    url: "/employees-payrolls",
    name: "List Of Payroll",
    slug: "employees-list",
    icon: "UserIcon"
  }]
}, {
  url: "/pending-approvals",
  name: "Pending Approvals",
  slug: "pending-approvals",
  icon: "BookOpenIcon",
  isMain: false,
  submenu: [{
    url: "/un-reviewed-payrolls",
    name: "Payrolls",
    slug: "employees-list",
    icon: "UserIcon"
  }, {
    url: "/un-reviewed-purchases",
    name: "Purchases",
    slug: "un-reviewed-purchases",
    icon: "UserIcon"
  }, {
    url: "/un-reviewed-sales",
    name: "Sales",
    slug: "un-reviewed-sales",
    icon: "UserIcon"
  }]
}, {
  url: "/reports",
  name: "Reports",
  slug: "reports",
  icon: "BookOpenIcon",
  isMain: false
}, {
  url: "/tax-team",
  name: "Tax Team",
  slug: "tax-team",
  icon: "BookOpenIcon",
  isMain: false
}
/*{
    url: "/page2",
    name: "Page 2",
    slug: "page2",
    icon: "FileIcon",
},*/
]);

/***/ }),

/***/ "./resources/js/src/layouts/main/TaxDetailMain.vue":
/*!*********************************************************!*\
  !*** ./resources/js/src/layouts/main/TaxDetailMain.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TaxDetailMain_vue_vue_type_template_id_bf081fe4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaxDetailMain.vue?vue&type=template&id=bf081fe4& */ "./resources/js/src/layouts/main/TaxDetailMain.vue?vue&type=template&id=bf081fe4&");
/* harmony import */ var _TaxDetailMain_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaxDetailMain.vue?vue&type=script&lang=js& */ "./resources/js/src/layouts/main/TaxDetailMain.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
=======
/* harmony import */ var _TaxTeam_vue_vue_type_template_id_40787bc2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaxTeam.vue?vue&type=template&id=40787bc2& */ "./resources/js/src/views/pages/Tax/TaxTeam.vue?vue&type=template&id=40787bc2&");
/* harmony import */ var _TaxTeam_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaxTeam.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Tax/TaxTeam.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TaxTeam_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TaxTeam.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/pages/Tax/TaxTeam.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

>>>>>>> master





/* normalize component */

<<<<<<< HEAD
var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TaxDetailMain_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TaxDetailMain_vue_vue_type_template_id_bf081fe4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TaxDetailMain_vue_vue_type_template_id_bf081fe4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
=======
var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TaxTeam_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TaxTeam_vue_vue_type_template_id_40787bc2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TaxTeam_vue_vue_type_template_id_40787bc2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
>>>>>>> master
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
<<<<<<< HEAD
component.options.__file = "resources/js/src/layouts/main/TaxDetailMain.vue"
=======
component.options.__file = "resources/js/src/views/pages/Tax/TaxTeam.vue"
>>>>>>> master
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/src/layouts/main/TaxDetailMain.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/layouts/main/TaxDetailMain.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
=======
/***/ "./resources/js/src/views/pages/Tax/TaxTeam.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/pages/Tax/TaxTeam.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
>>>>>>> master
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxDetailMain_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TaxDetailMain.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/main/TaxDetailMain.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxDetailMain_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/layouts/main/TaxDetailMain.vue?vue&type=template&id=bf081fe4&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/layouts/main/TaxDetailMain.vue?vue&type=template&id=bf081fe4& ***!
  \****************************************************************************************/
=======
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxTeam_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TaxTeam.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tax/TaxTeam.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxTeam_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Tax/TaxTeam.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Tax/TaxTeam.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxTeam_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TaxTeam.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tax/TaxTeam.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxTeam_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxTeam_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxTeam_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxTeam_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxTeam_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/Tax/TaxTeam.vue?vue&type=template&id=40787bc2&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Tax/TaxTeam.vue?vue&type=template&id=40787bc2& ***!
  \*************************************************************************************/
>>>>>>> master
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxDetailMain_vue_vue_type_template_id_bf081fe4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TaxDetailMain.vue?vue&type=template&id=bf081fe4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/main/TaxDetailMain.vue?vue&type=template&id=bf081fe4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxDetailMain_vue_vue_type_template_id_bf081fe4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxDetailMain_vue_vue_type_template_id_bf081fe4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
=======
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxTeam_vue_vue_type_template_id_40787bc2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TaxTeam.vue?vue&type=template&id=40787bc2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tax/TaxTeam.vue?vue&type=template&id=40787bc2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxTeam_vue_vue_type_template_id_40787bc2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxTeam_vue_vue_type_template_id_40787bc2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
>>>>>>> master



/***/ })

}]);