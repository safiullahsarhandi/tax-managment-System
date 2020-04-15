(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tax/TaxDetail.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Tax/TaxDetail.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _layouts_components_customizer_CommentDrawer_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/layouts/components/customizer/CommentDrawer.vue */ "./resources/js/src/layouts/components/customizer/CommentDrawer.vue");
/* harmony import */ var vue_burger_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-burger-menu */ "./node_modules/vue-burger-menu/dist/vue-burger-menu.common.js");
/* harmony import */ var vue_burger_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_burger_menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
=======
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_analyticsData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/analyticsData.js */ "./resources/js/src/components/analyticsData.js");
/* harmony import */ var _components_statistics_cards_StatisticsCardLine_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/statistics-cards/StatisticsCardLine.vue */ "./resources/js/src/components/statistics-cards/StatisticsCardLine.vue");
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
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
<<<<<<< HEAD
=======
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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



/* harmony default export */ __webpack_exports__["default"] = ({
<<<<<<< HEAD
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
=======
  data: function data() {
    return {
      analyticsData: _components_analyticsData_js__WEBPACK_IMPORTED_MODULE_1__["default"],
      editTaxManagmentModal: false,
      title: "",
      description: "",
      type: 'Monthly',
      duration: '',
      officer: [],
      editSupervisor: '',
      default_selected_officer: "",
      default_selected_supervisor: "",
      tax_customer_id: '',
      editedTax: {}
    };
  },
  components: {
    StatisticsCardLine: _components_statistics_cards_StatisticsCardLine_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  beforeCreate: function beforeCreate() {},
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('taxes/', ['tax', 'purchases_approval', 'payrolls_approval', 'sales_approval']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('supervisors/', ['supervisors']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('officers/', ['officers']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('taxes/', ['supervisor']), {
    activeUser: function activeUser() {
      return this.$store.state.AppActiveUser;
    }
  }),
  created: function created() {
    localStorage.setItem('currentDetail', this.$route.fullPath);
    this.$store.commit('setRootUrl', this.$route.fullPath);
    this.tax_customer_id = localStorage.getItem('customer');
    this.getSupervisors();
    this.getOfficers();
    this.getTax(this.$route.params.id);
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    getSupervisors: 'supervisors/getSupervisors',
    getOfficers: 'officers/getOfficers',
    getTax: 'taxes/getTax',
    statusUpdate: 'taxes/statusUpdate',
    update: 'taxes/editTax'
  }), {
    editTax: function editTax() {
      this.editTaxManagmentModal = true;
      this.title = this.tax.title;
      this.duration = this.tax.duration;
      this.editSupervisor = this.tax.supervisor_id;
      this.type = this.tax.type;
      this.officer = _.map(this.tax.officers, 'officer_id');
      this.description = this.tax.description; // this.$data.editedTax = this.tax;
    },
    editTaxManagment: function editTaxManagment(e) {
      var _this = this;

      this.$validator.validateAll().then(function (result) {
        if (result) {
          self = _this;
          var fd = new FormData(self.$refs.editTaxManagmentForm);
          fd.append('customer_id', _this.tax_customer_id);
          fd.append('tax_id', _this.$route.params.id);
          fd.append('officers', self.officer);
          fd.append('supervisor_id', self.editSupervisor);
          var data = {
            fd: fd,
            close: _this.$vs.loading.close,
            notify: _this.$vs.notify
          };

          _this.update(data).then(function (res) {
            if (res.data.status == 'success') {
              self.title = self.description = self.duration = self.editSupervisor = '';
              self.officer = [];
              self.type = 'Monthly'; // e.target.reset();

              self.$validator.reset();

              _this.getTax(self.$route.params.id);

              _this.editTaxManagmentModal = false;
            }
          });
        }
      });
    },
    changeTaxStatus: function changeTaxStatus(id) {
      this.$vs.loading();
      var data = {
        status: this.tax.status,
        id: this.tax.tax_id,
        notify: this.$vs.notify,
        close: this.$vs.loading.close
      };
      this.statusUpdate(data);
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
    }
  })
});

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tax/TaxDetail.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Tax/TaxDetail.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
<<<<<<< HEAD
exports.push([module.i, ".bm-menu {\n  z-index: 99999;\n}\n.bm-burger-button {\n  position: fixed;\n  width: 36px;\n  height: 30px;\n  left: 36px;\n  top: 36px;\n  cursor: pointer;\n}\n.bm-burger-bars {\n  background-color: #373a47;\n}\n.line-style {\n  position: absolute;\n  height: 20%;\n  left: 0;\n  right: 0;\n}\n.cross-style {\n  position: absolute;\n  top: 12px;\n  right: 2px !important;\n  cursor: pointer;\n}\n.bm-cross {\n  background: #bdc3c7;\n}\n.bm-cross-button {\n  height: 24px;\n  width: 24px;\n}\n.bm-menu {\n  height: 100%;\n  /* 100% Full-height */\n  width: 0;\n  /* 0 width - change this with JavaScript */\n  position: fixed;\n  /* Stay in place */\n  top: 0;\n  left: 0;\n  background-color: #3f3f41;\n  /* Black*/\n  overflow-x: hidden;\n  /* Disable horizontal scroll */\n  padding-top: 60px;\n  /* Place content 60px from the top */\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  /*0.5 second transition effect to slide in the sidenav*/\n}\n.bm-overlay {\n  background: rgba(0, 0, 0, 0.3);\n}\n.bm-item-list {\n  color: #b8b7ad;\n  margin-left: 10%;\n  font-size: 20px;\n}\n.bm-item-list > * {\n  display: -webkit-box;\n  display: flex;\n  text-decoration: none;\n  padding: 0.7em;\n}\n.bm-item-list > * > span {\n  margin-left: 10px;\n  font-weight: 700;\n  color: white;\n}", ""]);
=======
exports.push([module.i, "#tax-detail .vx-card .vx-card__collapsible-content.vs-con-loading__container {\n  min-height: 250px !important;\n}\r\n\r\n", ""]);
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1

// exports


/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tax/TaxDetail.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Tax/TaxDetail.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


<<<<<<< HEAD
var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PurchaseDetail.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=style&index=0&lang=scss&");
=======
var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TaxDetail.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tax/TaxDetail.vue?vue&type=style&index=0&lang=css&");
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1

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

<<<<<<< HEAD
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=template&id=20ecfd84&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=template&id=20ecfd84& ***!
  \********************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tax/TaxDetail.vue?vue&type=template&id=58313b93&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Tax/TaxDetail.vue?vue&type=template&id=58313b93& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
=======
    { attrs: { id: "tax-detail" } },
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
    [
      _c(
        "vs-row",
        [
          _c(
            "vs-col",
<<<<<<< HEAD
            { attrs: { "vs-lg": "9", "vs-md": "9", "vs-sm": "12" } },
            [
              _c(
                "vx-card",
                { attrs: { title: "Purchases Detail" } },
=======
            {
              attrs: {
                "vs-md":
                  _vm.activeUser.type == "Admin" ||
                  _vm.activeUser.type == "Super Admin"
                    ? "9"
                    : "9",
                "vs-lg":
                  _vm.activeUser.type == "Admin" ||
                  _vm.activeUser.type == "Super Admin"
                    ? "9"
                    : "9",
                "vs-sm": "12",
                "vs-xs": "12"
              }
            },
            [
              _c(
                "vs-row",
                { staticClass: "mt-base p-0" },
                [
                  _c(
                    "vs-col",
                    {
                      attrs: {
                        "vs-lg": "4",
                        "vs-md": "4",
                        "vs-sm": "12",
                        "vs-xs": "12"
                      }
                    },
                    [
                      _c("statistics-card-line", {
                        attrs: {
                          icon: "DollarSignIcon",
                          statistic: _vm.tax.purchases_count || 0,
                          statisticTitle: "No of Purchases Added",
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
                        "vs-lg": "4",
                        "vs-md": "4",
                        "vs-sm": "12",
                        "vs-xs": "12"
                      }
                    },
                    [
                      _c("statistics-card-line", {
                        attrs: {
                          icon: "DollarSignIcon",
                          statistic: _vm.tax.sales_count || 0,
                          statisticTitle: "No of Sales Added",
                          chartData: _vm.analyticsData.revenueGenerated,
                          color: "success",
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
                        "vs-lg": "4",
                        "vs-md": "4",
                        "vs-sm": "12",
                        "vs-xs": "12"
                      }
                    },
                    [
                      _c("statistics-card-line", {
                        attrs: {
                          icon: "DollarSignIcon",
                          statistic: _vm.tax.payrolls_count || 0,
                          statisticTitle: "No of Payrolls Added",
                          chartData: _vm.analyticsData.revenueGenerated,
                          color: "danger",
                          type: "area"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "vx-card",
                { staticClass: "mt-base", attrs: { title: "Tax Overview" } },
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
                [
                  _c(
                    "vs-row",
                    [
                      _c(
                        "vs-col",
                        {
<<<<<<< HEAD
                          staticClass: "mt-5",
                          attrs: { "vs-lg": "4", "vs-md": "4", "vs-sm": "12" }
                        },
                        [
                          _c("h6", [_vm._v("Client TIN:")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.customer.tin_no))])
=======
                          attrs: {
                            "vs-md": "4",
                            "vs-lg": "4",
                            "vs-sm": "12",
                            "vs-xs": "12"
                          }
                        },
                        [
                          _c("p", [_c("label", [_vm._v("Tax ID:")])]),
                          _c("h4", [_vm._v(_vm._s(_vm.tax.tax_code || "N/A"))]),
                          _vm._v(" "),
                          _c("p")
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        {
<<<<<<< HEAD
                          staticClass: "mt-5",
                          attrs: { "vs-lg": "4", "vs-md": "4", "vs-sm": "12" }
                        },
                        [
                          _c("h6", [_vm._v("Client Name:")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.customer.name_english))])
=======
                          attrs: {
                            "vs-md": "4",
                            "vs-lg": "4",
                            "vs-sm": "12",
                            "vs-xs": "12"
                          }
                        },
                        [
                          _c("p", [_c("label", [_vm._v("Title:")])]),
                          _c("h4", [_vm._v(_vm._s(_vm.tax.title || "N/A"))]),
                          _vm._v(" "),
                          _c("p")
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        {
<<<<<<< HEAD
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
=======
                          attrs: {
                            "vs-md": "4",
                            "vs-lg": "4",
                            "vs-sm": "12",
                            "vs-xs": "12"
                          }
                        },
                        [
                          _c("p", [_c("label", [_vm._v("Description:")])]),
                          _c("h4", [
                            _vm._v(_vm._s(_vm.tax.description || "N/A"))
                          ]),
                          _vm._v(" "),
                          _c("p")
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-row",
                    { staticClass: "mt-base" },
                    [
                      _c(
                        "vs-col",
                        {
                          attrs: {
                            "vs-md": "4",
                            "vs-lg": "4",
                            "vs-sm": "12",
                            "vs-xs": "12"
                          }
                        },
                        [
                          _c("p", [_c("label", [_vm._v("Type:")])]),
                          _c("h4", [_vm._v(_vm._s(_vm.tax.type))]),
                          _vm._v(" "),
                          _c("p")
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        {
<<<<<<< HEAD
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
=======
                          attrs: {
                            "vs-md": "4",
                            "vs-lg": "4",
                            "vs-sm": "12",
                            "vs-xs": "12"
                          }
                        },
                        [
                          _c("p", [_c("label", [_vm._v("Supervisor:")])]),
                          _c("h4", [
                            _vm._v(
                              _vm._s(
                                typeof _vm.tax.supervisor != "undefined"
                                  ? _vm.tax.supervisor.full_name
                                  : ""
                              )
                            )
                          ]),
                          _vm._v(" "),
                          _c("p")
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        {
<<<<<<< HEAD
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
=======
                          attrs: {
                            "vs-md": "4",
                            "vs-lg": "4",
                            "vs-sm": "12",
                            "vs-xs": "12"
                          }
                        },
                        [
                          _c("p", [_c("label", [_vm._v("Officer Who Work:")])]),
                          _c("h4", [
                            _vm._v(
                              _vm._s(
                                typeof _vm.tax.officer != "undefined"
                                  ? _vm.tax.officer.full_name
                                  : ""
                              )
                            )
                          ]),
                          _vm._v(" "),
                          _c("p")
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-row",
                    { staticClass: "mt-base" },
                    [
                      _c(
                        "vs-col",
                        {
                          attrs: {
                            "vs-md": "4",
                            "vs-lg": "4",
                            "vs-sm": "12",
                            "vs-xs": "12"
                          }
                        },
                        [
                          _c("p", [_c("label", [_vm._v("Tax Created By:")])]),
                          _c("h4", [
                            _vm._v(
                              _vm._s(
                                typeof _vm.tax.added_by != "undefined"
                                  ? _vm.tax.added_by.full_name
                                  : ""
                              )
                            )
                          ]),
                          _vm._v(" "),
                          _c("p")
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        {
<<<<<<< HEAD
                          staticClass: "mt-5",
                          attrs: { "vs-lg": "4", "vs-md": "4", "vs-sm": "12" }
                        },
                        [
                          _c("h6", [_vm._v("ToP Comments:")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.purchase.top_comments))])
=======
                          attrs: {
                            "vs-md": "4",
                            "vs-lg": "4",
                            "vs-sm": "12",
                            "vs-xs": "12"
                          }
                        },
                        [
                          _c("p", [_c("label", [_vm._v("Tax Status:")])]),
                          _c("h4", [
                            _vm._v(
                              _vm._s(
                                _vm.tax.status == 0
                                  ? "In Progress"
                                  : "Completed"
                              )
                            )
                          ]),
                          _vm._v(" "),
                          _c("p")
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        {
<<<<<<< HEAD
                          staticClass: "mt-5",
                          attrs: { "vs-lg": "4", "vs-md": "4", "vs-sm": "12" }
                        },
                        [
                          _c("h6", [_vm._v("Client Responses:")]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(_vm._s(_vm.purchase.client_responses))
                          ])
=======
                          attrs: {
                            "vs-md": "4",
                            "vs-lg": "4",
                            "vs-sm": "12",
                            "vs-xs": "12"
                          }
                        },
                        [
                          _c("p", [_c("label", [_vm._v("Notes:")])]),
                          _c("h4", [_vm._v(_vm._s(_vm.tax.notes || "N/A"))]),
                          _vm._v(" "),
                          _c("p")
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
<<<<<<< HEAD
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
=======
              [
                _c(
                  "vs-row",
                  { staticClass: "mt-base p-0" },
                  [
                    _c(
                      "vs-col",
                      {
                        attrs: {
                          "vs-lg": "4",
                          "vs-md": "4",
                          "vs-sm": "12",
                          "vs-xs": "12"
                        }
                      },
                      [
                        _c("statistics-card-line", {
                          attrs: {
                            icon: "DollarSignIcon",
                            statistic: _vm.purchases_approval || 0,
                            statisticTitle: "Pending Approvals Purchases",
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
                          "vs-lg": "4",
                          "vs-md": "4",
                          "vs-sm": "12",
                          "vs-xs": "12"
                        }
                      },
                      [
                        _c("statistics-card-line", {
                          attrs: {
                            icon: "DollarSignIcon",
                            statistic: _vm.sales_approval || 0,
                            statisticTitle: "Pending Approvals Sales",
                            chartData: _vm.analyticsData.revenueGenerated,
                            color: "success",
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
                          "vs-lg": "4",
                          "vs-md": "4",
                          "vs-sm": "12",
                          "vs-xs": "12"
                        }
                      },
                      [
                        _c("statistics-card-line", {
                          attrs: {
                            icon: "DollarSignIcon",
                            statistic: _vm.payrolls_approval || 0,
                            statisticTitle: "Pending Approvals Payroll",
                            chartData: _vm.analyticsData.revenueGenerated,
                            color: "danger",
                            type: "area"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              ]
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "vs-col",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value:
                    _vm.activeUser.type == "Admin" ||
                    _vm.activeUser.type == "Super Admin",
                  expression:
                    "activeUser.type == 'Admin' || activeUser.type == 'Super Admin'"
                }
              ],
              staticClass: "mt-base",
              attrs: {
                "vs-md": "3",
                "vs-lg": "3",
                "vs-sm": "12",
                "vs-xs": "12"
              }
            },
            [
              _c(
                "vx-card",
                { attrs: { title: "Actions" } },
                [
                  _c(
                    "vs-list",
                    [
                      _vm.activeUser.type == "Supervisor"
                        ? _c(
                            "vs-list-item",
                            {
                              attrs: { title: "Mark as Complete", subtitle: "" }
                            },
                            [
                              _c("vs-switch", {
                                attrs: {
                                  color: "warning",
                                  disabled:
                                    _vm.activeUser.type != "Admin" ||
                                    _vm.activeUser.type != "Super Admin"
                                },
                                on: {
                                  input: function($event) {
                                    return _vm.changeTaxStatus(_vm.tax.tax_id)
                                  }
                                }
                              })
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.activeUser.type == "Admin" ||
                      _vm.activeUser.type == "Super Admin"
                        ? _c(
                            "vs-list-item",
                            { attrs: { title: "Approve Tax", subtitle: "" } },
                            [
                              _c("vs-switch", {
                                attrs: {
                                  color: "warning",
                                  disabled:
                                    _vm.activeUser.type != "Admin" ||
                                    _vm.activeUser.type != "Super Admin"
                                },
                                on: {
                                  input: function($event) {
                                    return _vm.changeTaxStatus(_vm.tax.tax_id)
                                  }
                                }
                              })
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.activeUser.type == "Admin" ||
                      _vm.activeUser.type == "Super Admin"
                        ? _c(
                            "vs-list-item",
                            { attrs: { title: "Edit Tax", subtitle: "" } },
                            [
                              _c("vs-button", {
                                attrs: {
                                  size: "small",
                                  "icon-pack": "feather",
                                  icon: "icon-edit"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.editTax()
                                  }
                                }
                              })
                            ],
                            1
                          )
                        : _vm._e()
                    ],
                    1
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
        "vs-popup",
        {
          attrs: {
            active: _vm.editTaxManagmentModal,
            title: "Add Tax Managment"
          },
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
              ref: "editTaxManagmentForm",
              attrs: { "data-vv-scope": "editform" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.editTaxManagment($event)
                }
              }
            },
            [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.tax_customer_id,
                    expression: "tax_customer_id"
                  }
                ],
                attrs: { type: "hidden", name: "category_id" },
                domProps: { value: _vm.tax_customer_id },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.tax_customer_id = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
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
                              "data-vv-scope": "editform"
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
                                  value: _vm.errors.has("editform.title"),
                                  expression: "errors.has('editform.title')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [_vm._v(_vm._s(_vm.errors.first("editform.title")))]
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
                              counter: 50,
                              label: "Description",
                              "data-vv-scope": "editform"
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
                                  value: _vm.errors.has("editform.description"),
                                  expression:
                                    "errors.has('editform.description')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("editform.description"))
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
                              "data-vv-scope": "editform"
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
                                  value: _vm.errors.has("editform.duration"),
                                  expression: "errors.has('editform.duration')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("editform.duration"))
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
                          _c("label", [_vm._v("Tax Type")]),
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
                              attrs: {
                                name: "supervisor",
                                label: "Supervisor"
                              },
                              model: {
                                value: _vm.editSupervisor,
                                callback: function($$v) {
                                  _vm.editSupervisor = $$v
                                },
                                expression: "editSupervisor"
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
                                    text: item.first_name + " " + item.last_name
                                  }
                                })
                              })
                            ],
                            2
                          )
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
                        ],
                        1
                      )
                    ],
<<<<<<< HEAD
                    2
=======
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
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
                  )
                ],
                1
              )
            ],
            1
          )
<<<<<<< HEAD
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
=======
        ]
      )
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/src/views/pages/Purchases/PurchaseDetail.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/src/views/pages/Purchases/PurchaseDetail.vue ***!
  \*******************************************************************/
=======
/***/ "./resources/js/src/views/pages/Tax/TaxDetail.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/views/pages/Tax/TaxDetail.vue ***!
  \********************************************************/
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _PurchaseDetail_vue_vue_type_template_id_20ecfd84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PurchaseDetail.vue?vue&type=template&id=20ecfd84& */ "./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=template&id=20ecfd84&");
/* harmony import */ var _PurchaseDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PurchaseDetail.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PurchaseDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PurchaseDetail.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=style&index=0&lang=scss&");
=======
/* harmony import */ var _TaxDetail_vue_vue_type_template_id_58313b93___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaxDetail.vue?vue&type=template&id=58313b93& */ "./resources/js/src/views/pages/Tax/TaxDetail.vue?vue&type=template&id=58313b93&");
/* harmony import */ var _TaxDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaxDetail.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Tax/TaxDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TaxDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TaxDetail.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/pages/Tax/TaxDetail.vue?vue&type=style&index=0&lang=css&");
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
<<<<<<< HEAD
  _PurchaseDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PurchaseDetail_vue_vue_type_template_id_20ecfd84___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PurchaseDetail_vue_vue_type_template_id_20ecfd84___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
=======
  _TaxDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TaxDetail_vue_vue_type_template_id_58313b93___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TaxDetail_vue_vue_type_template_id_58313b93___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
<<<<<<< HEAD
component.options.__file = "resources/js/src/views/pages/Purchases/PurchaseDetail.vue"
=======
component.options.__file = "resources/js/src/views/pages/Tax/TaxDetail.vue"
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
=======
/***/ "./resources/js/src/views/pages/Tax/TaxDetail.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/pages/Tax/TaxDetail.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PurchaseDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************/
=======
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TaxDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tax/TaxDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Tax/TaxDetail.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Tax/TaxDetail.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************/
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PurchaseDetail.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=template&id=20ecfd84&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=template&id=20ecfd84& ***!
  \**************************************************************************************************/
=======
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TaxDetail.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tax/TaxDetail.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/Tax/TaxDetail.vue?vue&type=template&id=58313b93&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Tax/TaxDetail.vue?vue&type=template&id=58313b93& ***!
  \***************************************************************************************/
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseDetail_vue_vue_type_template_id_20ecfd84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PurchaseDetail.vue?vue&type=template&id=20ecfd84& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=template&id=20ecfd84&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseDetail_vue_vue_type_template_id_20ecfd84___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseDetail_vue_vue_type_template_id_20ecfd84___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
=======
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxDetail_vue_vue_type_template_id_58313b93___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TaxDetail.vue?vue&type=template&id=58313b93& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tax/TaxDetail.vue?vue&type=template&id=58313b93&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxDetail_vue_vue_type_template_id_58313b93___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxDetail_vue_vue_type_template_id_58313b93___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1



/***/ })

}]);