(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_components_customizer_CommentDrawer_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/layouts/components/customizer/CommentDrawer.vue */ "./resources/js/src/layouts/components/customizer/CommentDrawer.vue");
/* harmony import */ var vue_burger_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-burger-menu */ "./node_modules/vue-burger-menu/dist/vue-burger-menu.common.js");
/* harmony import */ var vue_burger_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_burger_menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    TheCustomizer: _layouts_components_customizer_CommentDrawer_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Slide: vue_burger_menu__WEBPACK_IMPORTED_MODULE_1__["Slide"] // Register your component

  },
  data: function data() {
    return {
      tax_id: '',
      openComments: false
    };
  },
  created: function created() {
    this.tax_id = this.$store.state.rootUrl.split('/')[2];
    this.getCustomer(localStorage.getItem('customer'));
    this.getPurchase(this.$route.params.id);
    this.$store.dispatch('getAverageRate');
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapState"])('purchases', ['purchase']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapState"])('customers', ['customer']), {
    userType: function userType() {
      return this.$store.getters.userType;
    },
    averageRate: function averageRate() {
      return this.$store.state.averageRate;
    },
    non_taxable_purchases_riel: function non_taxable_purchases_riel() {
      return this.purchase.non_taxable_purchases * this.averageRate;
    },
    vat_local_usd: function vat_local_usd() {
      return parseFloat(Math.abs(this.purchase.local_purchase_tax_val) * 0.1).toFixed(2);
    },
    vat_import_riel: function vat_import_riel() {
      return parseFloat(this.purchase.imports_taxable_val * 0.1).toFixed(2);
    },
    local_purchase_tax_val_reil: function local_purchase_tax_val_reil() {
      return parseFloat(Math.abs(this.purchase.local_purchase_tax_val) * this.averageRate).toFixed(2);
    },
    local_purchase_tax_vat_reil: function local_purchase_tax_vat_reil() {
      return parseFloat(Math.abs(this.local_purchase_tax_val_reil) * 0.1).toFixed(2);
    },
    total_vat: function total_vat() {
      return parseFloat(this.purchase.imports_taxable_val + this.vat_import_riel + this.local_purchase_tax_val_reil + this.local_purchase_tax_vat_reil).toFixed(2) + this.non_taxable_purchases_riel;
    }
  }),
  methods: _objectSpread({
    handleToggleDrawer: function handleToggleDrawer() {
      this.$refs.commentsView.active = !this.$refs.commentsView.active;
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])({
    getPurchase: 'purchases/getPurchase',
    getCustomer: 'customers/getCustomer',
    statusChange: 'taxes/statusUpdateSPP',
    statusChangeManagment: 'taxes/statusChangeManagment'
  }), {
    statusUpdate: function statusUpdate(id, status) {
      var _this = this;

      var data = {
        id: id,
        tax_id: this.tax_id,
        notify: this.$vs.notify,
        type: 'purchase'
      };
      this.statusChange(data).then(function (res) {
        if (res.data.response == 'undefined') {
          _this.purchase.officer_confirmed = status;
        } else {
          _this.purchase.officer_confirmed = res.data.response;
        }
      });
    },
    changeManagementStatus: function changeManagementStatus(status, id, by) {
      var data = {
        id: id,
        status: status,
        by: by,
        tax_id: this.tax_id,
        notify: this.$vs.notify,
        tax_type: 'purchase'
      };
      this.statusChangeManagment(data).then(function (res) {});
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bm-menu {\n  z-index: 99999;\n}\n.bm-burger-button {\n  position: fixed;\n  width: 36px;\n  height: 30px;\n  left: 36px;\n  top: 36px;\n  cursor: pointer;\n}\n.bm-burger-bars {\n  background-color: #373a47;\n}\n.line-style {\n  position: absolute;\n  height: 20%;\n  left: 0;\n  right: 0;\n}\n.cross-style {\n  position: absolute;\n  top: 12px;\n  right: 2px !important;\n  cursor: pointer;\n}\n.bm-cross {\n  background: #bdc3c7;\n}\n.bm-cross-button {\n  height: 24px;\n  width: 24px;\n}\n.bm-menu {\n  height: 100%;\n  /* 100% Full-height */\n  width: 0;\n  /* 0 width - change this with JavaScript */\n  position: fixed;\n  /* Stay in place */\n  top: 0;\n  left: 0;\n  background-color: #3f3f41;\n  /* Black*/\n  overflow-x: hidden;\n  /* Disable horizontal scroll */\n  padding-top: 60px;\n  /* Place content 60px from the top */\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  /*0.5 second transition effect to slide in the sidenav*/\n}\n.bm-overlay {\n  background: rgba(0, 0, 0, 0.3);\n}\n.bm-item-list {\n  color: #b8b7ad;\n  margin-left: 10%;\n  font-size: 20px;\n}\n.bm-item-list > * {\n  display: -webkit-box;\n  display: flex;\n  text-decoration: none;\n  padding: 0.7em;\n}\n.bm-item-list > * > span {\n  margin-left: 10px;\n  font-weight: 700;\n  color: white;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PurchaseDetail.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=template&id=20ecfd84&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=template&id=20ecfd84& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
        "vs-row",
        [
          _c(
            "vs-col",
            { attrs: { "vs-lg": "9", "vs-md": "9", "vs-sm": "12" } },
            [
              _c(
                "vx-card",
                { attrs: { title: "Purchases Detail" } },
                [
                  _c(
                    "vs-row",
                    [
                      _c(
                        "vs-col",
                        {
                          staticClass: "mt-5",
                          attrs: { "vs-lg": "4", "vs-md": "4", "vs-sm": "12" }
                        },
                        [
                          _c("h6", [_vm._v("Client TIN:")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.customer.tin_no))])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        {
                          staticClass: "mt-5",
                          attrs: { "vs-lg": "4", "vs-md": "4", "vs-sm": "12" }
                        },
                        [
                          _c("h6", [_vm._v("Client Name:")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.customer.name_english))])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        {
                          staticClass: "mt-5",
                          attrs: { "vs-lg": "4", "vs-md": "4", "vs-sm": "12" }
                        },
                        [
                          _c("h6", [_vm._v("Branch Name:")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.purchase.branch_name))])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        {
                          staticClass: "mt-5",
                          attrs: { "vs-lg": "4", "vs-md": "4", "vs-sm": "12" }
                        },
                        [
                          _c("h6", [_vm._v("Tax Period:")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.purchase.tax_period))])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        {
                          staticClass: "mt-5",
                          attrs: { "vs-lg": "4", "vs-md": "4", "vs-sm": "12" }
                        },
                        [
                          _c("h6", [_vm._v("Invoice Date:")]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              _vm._s(
                                new Date(
                                  _vm.purchase.invoice_date
                                ).toDateString()
                              )
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        {
                          staticClass: "mt-5",
                          attrs: { "vs-lg": "4", "vs-md": "4", "vs-sm": "12" }
                        },
                        [
                          _c("h6", [_vm._v("Invoice NO:")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.purchase.invoice_num))])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        {
                          staticClass: "mt-5",
                          attrs: { "vs-lg": "4", "vs-md": "4", "vs-sm": "12" }
                        },
                        [
                          _c("h6", [_vm._v("Description:")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.purchase.description))])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        {
                          staticClass: "mt-5",
                          attrs: { "vs-lg": "4", "vs-md": "4", "vs-sm": "12" }
                        },
                        [
                          _c("h6", [_vm._v("Quantity:")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.purchase.quantity))])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        {
                          staticClass: "mt-5",
                          attrs: { "vs-lg": "4", "vs-md": "4", "vs-sm": "12" }
                        },
                        [
                          _c("h6", [_vm._v("Subject:")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.purchase.subject))])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        {
                          staticClass: "mt-5",
                          attrs: { "vs-lg": "4", "vs-md": "4", "vs-sm": "12" }
                        },
                        [
                          _c("h6", [_vm._v("Comments:")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.purchase.comments))])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        {
                          staticClass: "mt-5",
                          attrs: { "vs-lg": "4", "vs-md": "4", "vs-sm": "12" }
                        },
                        [
                          _c("h6", [_vm._v("Client Response:")]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(_vm._s(_vm.purchase.client_response))
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        {
                          staticClass: "mt-5",
                          attrs: { "vs-lg": "4", "vs-md": "4", "vs-sm": "12" }
                        },
                        [
                          _c("h6", [_vm._v("ToP Comments:")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.purchase.top_comments))])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        {
                          staticClass: "mt-5",
                          attrs: { "vs-lg": "4", "vs-md": "4", "vs-sm": "12" }
                        },
                        [
                          _c("h6", [_vm._v("Client Responses:")]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(_vm._s(_vm.purchase.client_responses))
                          ])
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "vx-card",
                {
                  staticClass: "mt-base",
                  attrs: { title: "Purchases Summary" }
                },
                [
                  _c(
                    "vs-row",
                    [
                      _c(
                        "vs-col",
                        {
                          staticClass: "mt-5",
                          attrs: { "vs-lg": "6", "vs-md": "6", "vs-sm": "12" }
                        },
                        [
                          _c("h6", [_vm._v("Non Taxable Purchase (USD):")]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              _vm._s(_vm.customer.non_taxable_purchases || 0)
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        {
                          staticClass: "mt-5",
                          attrs: { "vs-lg": "6", "vs-md": "6", "vs-sm": "12" }
                        },
                        [
                          _c("h6", [_vm._v("Non taxable Purchases (RIEL):")]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(_vm._s(_vm.non_taxable_purchases_riel))
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("vs-divider", { attrs: { position: "left" } }, [
                        _c("h5", [_vm._v("Local Purchases")])
                      ]),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        {
                          staticClass: "mt-5",
                          attrs: { "vs-lg": "6", "vs-md": "6", "vs-sm": "12" }
                        },
                        [
                          _c("h6", [_vm._v("Taxable Value (USD):")]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              _vm._s(_vm.purchase.local_purchase_tax_val || 0)
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        {
                          staticClass: "mt-5",
                          attrs: { "vs-lg": "6", "vs-md": "6", "vs-sm": "12" }
                        },
                        [
                          _c("h6", [_vm._v("VAT (USD):")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.vat_local_usd))])
                        ]
                      ),
                      _vm._v(" "),
                      _c("vs-divider", { attrs: { position: "left" } }, [
                        _c("h5", [_vm._v("Taxable Purchases")])
                      ]),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        {
                          staticClass: "mt-5",
                          attrs: { "vs-lg": "12", "vs-md": "12", "vs-sm": "12" }
                        },
                        [_c("h6", [_vm._v("Imports:")])]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        {
                          staticClass: "mt-5",
                          attrs: { "vs-lg": "6", "vs-md": "6", "vs-sm": "12" }
                        },
                        [
                          _c("h6", [_vm._v("Taxable Value (RIEL):")]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(_vm._s(_vm.purchase.imports_taxable_val))
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        {
                          staticClass: "mt-5",
                          attrs: { "vs-lg": "6", "vs-md": "6", "vs-sm": "12" }
                        },
                        [
                          _c("h6", [_vm._v("VAT (RIEL):")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.vat_import_riel))])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        {
                          staticClass: "mt-5",
                          attrs: { "vs-lg": "12", "vs-md": "12", "vs-sm": "12" }
                        },
                        [_c("h6", [_vm._v("Local Purchases:")])]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        {
                          staticClass: "mt-5",
                          attrs: { "vs-lg": "6", "vs-md": "6", "vs-sm": "12" }
                        },
                        [
                          _c("h6", [_vm._v("Taxable Value (RIEL):")]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(_vm._s(_vm.local_purchase_tax_val_reil))
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        {
                          staticClass: "mt-5",
                          attrs: { "vs-lg": "6", "vs-md": "6", "vs-sm": "12" }
                        },
                        [
                          _c("h6", [_vm._v("VAT (RIEL):")]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(_vm._s(_vm.local_purchase_tax_vat_reil))
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("vs-divider", { attrs: { position: "center" } }, [
                        _c("h5", [_vm._v("Total Taxable Value:")])
                      ]),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        {
                          staticClass: "mt-5 text-center",
                          attrs: { "vs-lg": "12", "vs-md": "12", "vs-sm": "12" }
                        },
                        [_c("p", [_vm._v(_vm._s(_vm.total_vat))])]
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
            "vs-col",
            {
              attrs: { "vs-lg": "3", "vs-md": "3", "vs-xl": "3", "vs-sm": "12" }
            },
            [
              _c(
                "vx-card",
                { attrs: { title: "Actions" } },
                [
                  _c(
                    "vs-list",
                    [
                      _c(
                        "vs-list-item",
                        { attrs: { title: "Edit Purchase" } },
                        [
                          _c("vs-button", {
                            attrs: {
                              to: "/purchase-update/" + _vm.$route.params.id,
                              "icon-pack": "feather",
                              size: "small",
                              icon: "icon-edit"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      [
                        _vm.userType == "Admin" || _vm.userType == "Super Admin"
                          ? _c(
                              "vs-list-item",
                              { attrs: { title: "Status" } },
                              [
                                _c("vs-button", {
                                  attrs: {
                                    "icon-pack": "feather",
                                    size: "small",
                                    icon: "icon-check-circle"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.changeManagementStatus(
                                        "1",
                                        _vm.purchase.purchase_id,
                                        "admin"
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("vs-button", {
                                  attrs: {
                                    "icon-pack": "feather",
                                    size: "small",
                                    icon: "icon-x-circle"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.changeManagementStatus(
                                        "0",
                                        _vm.purchase.purchase_id,
                                        "admin"
                                      )
                                    }
                                  }
                                })
                              ],
                              1
                            )
                          : _vm.userType == "Supervisor"
                          ? _c(
                              "vs-list-item",
                              { attrs: { title: "Status" } },
                              [
                                _c("vs-button", {
                                  attrs: {
                                    "icon-pack": "feather",
                                    size: "small",
                                    icon: "icon-check-circle"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.changeManagementStatus(
                                        "1",
                                        _vm.purchase.purchase_id,
                                        "supervisor"
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("vs-button", {
                                  attrs: {
                                    "icon-pack": "feather",
                                    size: "small",
                                    icon: "icon-x-circle"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.changeManagementStatus(
                                        "0",
                                        _vm.purchase.purchase_id,
                                        "supervisor"
                                      )
                                    }
                                  }
                                })
                              ],
                              1
                            )
                          : _c(
                              "vs-list-item",
                              { attrs: { title: "Status" } },
                              [
                                _c("vs-switch", {
                                  attrs: { "icon-pack": "feather" },
                                  on: {
                                    click: function($event) {
                                      return _vm.statusUpdate(
                                        _vm.purchase.purchase_id,
                                        _vm.purchase.officer_confirmed
                                      )
                                    }
                                  },
                                  model: {
                                    value: _vm.purchase.officer_confirmed,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.purchase,
                                        "officer_confirmed",
                                        $$v
                                      )
                                    },
                                    expression: "purchase.officer_confirmed"
                                  }
                                })
                              ],
                              1
                            )
                      ],
                      _vm._v(" "),
                      _c(
                        "vs-list-item",
                        { attrs: { title: "View Comments" } },
                        [
                          _c("vs-button", {
                            attrs: {
                              "icon-pack": "feather",
                              size: "small",
                              icon: "icon-maximize-2"
                            },
                            on: { click: _vm.handleToggleDrawer }
                          })
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
        ],
        1
      ),
      _vm._v(" "),
      _c("the-customizer", {
        ref: "commentsView",
        attrs: {
          object_id: _vm.$route.params.id,
          type: "Purchase",
          "comments-url": "get-comments"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/pages/Purchases/PurchaseDetail.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/src/views/pages/Purchases/PurchaseDetail.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PurchaseDetail_vue_vue_type_template_id_20ecfd84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PurchaseDetail.vue?vue&type=template&id=20ecfd84& */ "./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=template&id=20ecfd84&");
/* harmony import */ var _PurchaseDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PurchaseDetail.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PurchaseDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PurchaseDetail.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PurchaseDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PurchaseDetail_vue_vue_type_template_id_20ecfd84___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PurchaseDetail_vue_vue_type_template_id_20ecfd84___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/Purchases/PurchaseDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PurchaseDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PurchaseDetail.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=template&id=20ecfd84&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=template&id=20ecfd84& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseDetail_vue_vue_type_template_id_20ecfd84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PurchaseDetail.vue?vue&type=template&id=20ecfd84& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=template&id=20ecfd84&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseDetail_vue_vue_type_template_id_20ecfd84___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseDetail_vue_vue_type_template_id_20ecfd84___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);