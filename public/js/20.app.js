(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Payrolls/PayrollDetail.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Payrolls/PayrollDetail.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
<<<<<<< HEAD
=======
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
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
<<<<<<< HEAD
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
//
//
//
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0



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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
    this.getPayroll(this.$route.params.id);
    this.$store.dispatch('getAverageRate');
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapState"])('payrolls', ['payroll']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapState"])('customers', ['customer']), {
<<<<<<< HEAD
=======
    this.getPurchase(this.$route.params.id);
    this.$store.dispatch('getAverageRate');
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapState"])('purchases', ['purchase']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapState"])('customers', ['customer']), {
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
    userType: function userType() {
      return this.$store.getters.userType;
    },
    averageRate: function averageRate() {
      return this.$store.state.averageRate;
    },
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
    non_taxable_sales: function non_taxable_sales() {
      return this.sale.non_taxable_sales * this.averageRate;
    },
    value_of_exports: function value_of_exports() {
      return this.sale.vat * this.averageRate;
    },
    person_vat: function person_vat() {
      return parseFloat(this.sale.taxable_person_sales * 0.1).toFixed(2);
    },
    person_taxable: function person_taxable() {
      return parseFloat(this.sale.taxable_person_sales * this.averageRate);
    },
    person_taxable_vat: function person_taxable_vat() {
      return parseFloat(this.person_taxable * 0.1).toFixed(2);
    },
    customer_vat: function customer_vat() {
      return parseFloat(this.sale.cust_sales * 0.1).toFixed(2);
    },
    customer_taxable: function customer_taxable() {
      return parseFloat(this.sale.cust_sales * this.averageRate);
    },
    customer_taxable_vat: function customer_taxable_vat() {
      return parseFloat(this.customer_taxable * 0.1).toFixed(2);
<<<<<<< HEAD
=======
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
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
    }
  }),
  methods: _objectSpread({
    handleToggleDrawer: function handleToggleDrawer() {
      this.$refs.commentsView.active = !this.$refs.commentsView.active;
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])({
<<<<<<< HEAD
<<<<<<< HEAD
    getPayroll: 'payrolls/getPayroll',
=======
    getPurchase: 'purchases/getPurchase',
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
=======
    getPayroll: 'payrolls/getPayroll',
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
        type: 'payroll'
      };
      this.statusChange(data).then(function (res) {
        if (res.data.status != true) {
          if (res.data.response == 'undefined') {
            _this.payroll.officer_confirmed = status;
          } else {
            _this.payroll.officer_confirmed = res.data.response;
          }
<<<<<<< HEAD
=======
        type: 'purchase'
      };
      this.statusChange(data).then(function (res) {
        if (res.data.response == 'undefined') {
          _this.purchase.officer_confirmed = status;
        } else {
          _this.purchase.officer_confirmed = res.data.response;
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
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
<<<<<<< HEAD
<<<<<<< HEAD
        tax_type: 'payroll'
=======
        tax_type: 'purchase'
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
=======
        tax_type: 'payroll'
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
      };
      this.statusChangeManagment(data).then(function (res) {});
    }
  })
});

/***/ }),

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Payrolls/PayrollDetail.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Payrolls/PayrollDetail.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
<<<<<<< HEAD
=======
/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bm-menu {\n  z-index: 99999;\n}\n.bm-burger-button {\n  position: fixed;\n  width: 36px;\n  height: 30px;\n  left: 36px;\n  top: 36px;\n  cursor: pointer;\n}\n.bm-burger-bars {\n  background-color: #373a47;\n}\n.line-style {\n  position: absolute;\n  height: 20%;\n  left: 0;\n  right: 0;\n}\n.cross-style {\n  position: absolute;\n  top: 12px;\n  right: 2px !important;\n  cursor: pointer;\n}\n.bm-cross {\n  background: #bdc3c7;\n}\n.bm-cross-button {\n  height: 24px;\n  width: 24px;\n}\n.bm-menu {\n  height: 100%;\n  /* 100% Full-height */\n  width: 0;\n  /* 0 width - change this with JavaScript */\n  position: fixed;\n  /* Stay in place */\n  top: 0;\n  left: 0;\n  background-color: #3f3f41;\n  /* Black*/\n  overflow-x: hidden;\n  /* Disable horizontal scroll */\n  padding-top: 60px;\n  /* Place content 60px from the top */\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  /*0.5 second transition effect to slide in the sidenav*/\n}\n.bm-overlay {\n  background: rgba(0, 0, 0, 0.3);\n}\n.bm-item-list {\n  color: #b8b7ad;\n  margin-left: 10%;\n  font-size: 20px;\n}\n.bm-item-list > * {\n  display: -webkit-box;\n  display: flex;\n  text-decoration: none;\n  padding: 0.7em;\n}\n.bm-item-list > * > span {\n  margin-left: 10px;\n  font-weight: 700;\n  color: white;\n}", ""]);

// exports


/***/ }),

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Payrolls/PayrollDetail.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Payrolls/PayrollDetail.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
<<<<<<< HEAD
=======
/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


<<<<<<< HEAD
<<<<<<< HEAD
var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PayrollDetail.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Payrolls/PayrollDetail.vue?vue&type=style&index=0&lang=scss&");
=======
var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PurchaseDetail.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=style&index=0&lang=scss&");
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
=======
var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PayrollDetail.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Payrolls/PayrollDetail.vue?vue&type=style&index=0&lang=scss&");
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0

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
<<<<<<< HEAD
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Payrolls/PayrollDetail.vue?vue&type=template&id=7bb06a2a&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Payrolls/PayrollDetail.vue?vue&type=template&id=7bb06a2a& ***!
  \******************************************************************************************************************************************************************************************************************************/
<<<<<<< HEAD
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=template&id=20ecfd84&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=template&id=20ecfd84& ***!
  \********************************************************************************************************************************************************************************************************************************/
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
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
<<<<<<< HEAD
<<<<<<< HEAD
                { attrs: { title: "Payroll Detail" } },
=======
                { attrs: { title: "Purchases Detail" } },
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
=======
                { attrs: { title: "Payroll Detail" } },
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
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
<<<<<<< HEAD
<<<<<<< HEAD
                          _c("h6", [_vm._v("Basic Salary:")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.payroll.basic_salary))])
=======
                          _c("h6", [_vm._v("Branch Name:")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.purchase.branch_name))])
=======
                          _c("h6", [_vm._v("Basic Salary:")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.payroll.basic_salary))])
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
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
<<<<<<< HEAD
                          _c("h6", [_vm._v("Tax Period:")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.purchase.tax_period))])
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
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
<<<<<<< HEAD
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
                          _c("h6", [_vm._v("Seniority Payment:")]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(_vm._s(_vm.payroll.seniority_payment))
<<<<<<< HEAD
=======
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
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
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
<<<<<<< HEAD
<<<<<<< HEAD
                          _c("h6", [_vm._v("Severance Pay:")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.payroll.severance_pay))])
=======
                          _c("h6", [_vm._v("Invoice NO:")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.purchase.invoice_num))])
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
=======
                          _c("h6", [_vm._v("Severance Pay:")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.payroll.severance_pay))])
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
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
<<<<<<< HEAD
<<<<<<< HEAD
                          _c("h6", [_vm._v("Bonus:")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.payroll.bonus))])
=======
                          _c("h6", [_vm._v("Description:")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.purchase.description))])
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
=======
                          _c("h6", [_vm._v("Bonus:")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.payroll.bonus))])
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
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
<<<<<<< HEAD
<<<<<<< HEAD
                          _c("h6", [_vm._v("Over Time:")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.payroll.over_time))])
=======
                          _c("h6", [_vm._v("Quantity:")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.purchase.quantity))])
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
=======
                          _c("h6", [_vm._v("Over Time:")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.payroll.over_time))])
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
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
<<<<<<< HEAD
<<<<<<< HEAD
                          _c("h6", [_vm._v("Commissions:")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.payroll.commissions))])
=======
                          _c("h6", [_vm._v("Subject:")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.purchase.subject))])
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
=======
                          _c("h6", [_vm._v("Commissions:")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.payroll.commissions))])
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
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
<<<<<<< HEAD
<<<<<<< HEAD
                          _c("h6", [_vm._v("Maternity Leave:")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.payroll.maternity_leave))])
=======
                          _c("h6", [_vm._v("Comments:")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.purchase.comments))])
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
=======
                          _c("h6", [_vm._v("Maternity Leave:")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.payroll.maternity_leave))])
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
                          _c("h6", [_vm._v("Paid Annual Leave:")]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(_vm._s(_vm.payroll.paid_annual_leave))
<<<<<<< HEAD
=======
                          _c("h6", [_vm._v("Client Response:")]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(_vm._s(_vm.purchase.client_response))
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
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
<<<<<<< HEAD
<<<<<<< HEAD
                          _c("h6", [_vm._v("Food Allowance:")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.payroll.food_allowance))])
=======
                          _c("h6", [_vm._v("ToP Comments:")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.purchase.top_comments))])
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
=======
                          _c("h6", [_vm._v("Food Allowance:")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.payroll.food_allowance))])
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
                          _c("h6", [_vm._v("Transport Allowance:")]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(_vm._s(_vm.payroll.transport_allowance))
<<<<<<< HEAD
=======
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
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        {
                          staticClass: "mt-5",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
                          attrs: { "vs-lg": "4", "vs-md": "4", "vs-sm": "12" }
                        },
                        [
                          _c("h6", [_vm._v("Deduction Advance:")]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(_vm._s(_vm.payroll.deduction_advance))
<<<<<<< HEAD
=======
                          attrs: { "vs-lg": "6", "vs-md": "6", "vs-sm": "12" }
                        },
                        [
                          _c("h6", [_vm._v("Non taxable Purchases (RIEL):")]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(_vm._s(_vm.non_taxable_purchases_riel))
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
                          ])
                        ]
                      ),
                      _vm._v(" "),
<<<<<<< HEAD
<<<<<<< HEAD
=======
                      _c("vs-divider", { attrs: { position: "left" } }, [
                        _c("h5", [_vm._v("Local Purchases")])
                      ]),
                      _vm._v(" "),
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
                      _c(
                        "vs-col",
                        {
                          staticClass: "mt-5",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
                          attrs: { "vs-lg": "4", "vs-md": "4", "vs-sm": "12" }
                        },
                        [
                          _c("h6", [_vm._v("Salary Adjusment:")]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(_vm._s(_vm.payroll.salary_adjusment))
<<<<<<< HEAD
=======
                          attrs: { "vs-lg": "6", "vs-md": "6", "vs-sm": "12" }
                        },
                        [
                          _c("h6", [_vm._v("Taxable Value (USD):")]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              _vm._s(_vm.purchase.local_purchase_tax_val || 0)
                            )
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        {
                          staticClass: "mt-5",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
                          attrs: { "vs-lg": "4", "vs-md": "4", "vs-sm": "12" }
                        },
                        [
                          _c("h6", [_vm._v("Others:")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.payroll.others))])
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
                  attrs: { title: "Payrolls Summary" }
                },
                [
                  _c(
                    "vs-row",
                    [
<<<<<<< HEAD
=======
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
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
                      _c(
                        "vs-col",
                        {
                          staticClass: "mt-5",
                          attrs: { "vs-lg": "6", "vs-md": "6", "vs-sm": "12" }
                        },
                        [
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
                          _c("h6", [_vm._v("Non Taxable Sale:")]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              _vm._s(_vm.customer.non_taxable_sales || "NA")
                            )
                          ])
                        ]
<<<<<<< HEAD
=======
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
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
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
<<<<<<< HEAD
<<<<<<< HEAD
                                        _vm.payroll.payroll_id,
=======
                                        _vm.purchase.id,
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
=======
                                        _vm.payroll.payroll_id,
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
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
<<<<<<< HEAD
<<<<<<< HEAD
                                        _vm.payroll.payroll_id,
=======
                                        _vm.purchase.id,
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
=======
                                        _vm.payroll.payroll_id,
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
                                        "admin"
                                      )
                                    }
                                  }
                                })
                              ],
                              1
                            )
<<<<<<< HEAD
<<<<<<< HEAD
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.userType == "Supervisor"
=======
                          : _vm.userType == "Supervisor"
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
=======
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.userType == "Supervisor"
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
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
<<<<<<< HEAD
<<<<<<< HEAD
                                        _vm.payroll.payroll_id,
=======
                                        _vm.purchase.id,
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
=======
                                        _vm.payroll.payroll_id,
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
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
<<<<<<< HEAD
<<<<<<< HEAD
                                        _vm.payroll.payroll_id,
=======
                                        _vm.purchase.id,
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
=======
                                        _vm.payroll.payroll_id,
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
                                        "supervisor"
                                      )
                                    }
                                  }
                                })
                              ],
                              1
                            )
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.userType == "Officer"
                          ? _c(
<<<<<<< HEAD
=======
                          : _c(
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
                              "vs-list-item",
                              { attrs: { title: "Status" } },
                              [
                                _c("vs-switch", {
                                  attrs: { "icon-pack": "feather" },
                                  on: {
                                    click: function($event) {
                                      return _vm.statusUpdate(
<<<<<<< HEAD
<<<<<<< HEAD
                                        _vm.payroll.payroll_id,
                                        _vm.payroll.officer_confirmed
=======
                                        _vm.purchase.purchase_id,
                                        _vm.purchase.officer_confirmed
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
=======
                                        _vm.payroll.payroll_id,
                                        _vm.payroll.officer_confirmed
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
                                      )
                                    }
                                  },
                                  model: {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
                                    value: _vm.payroll.officer_confirmed,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.payroll,
<<<<<<< HEAD
=======
                                    value: _vm.purchase.officer_confirmed,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.purchase,
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
                                        "officer_confirmed",
                                        $$v
                                      )
                                    },
<<<<<<< HEAD
<<<<<<< HEAD
                                    expression: "payroll.officer_confirmed"
=======
                                    expression: "purchase.officer_confirmed"
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
=======
                                    expression: "payroll.officer_confirmed"
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
                                  }
                                })
                              ],
                              1
                            )
<<<<<<< HEAD
<<<<<<< HEAD
                          : _vm._e()
=======
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
=======
                          : _vm._e()
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
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
<<<<<<< HEAD
<<<<<<< HEAD
          type: "Payroll",
=======
          type: "Purchase",
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
=======
          type: "Payroll",
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
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

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
/***/ "./resources/js/src/views/pages/Payrolls/PayrollDetail.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/src/views/pages/Payrolls/PayrollDetail.vue ***!
  \*****************************************************************/
<<<<<<< HEAD
=======
/***/ "./resources/js/src/views/pages/Purchases/PurchaseDetail.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/src/views/pages/Purchases/PurchaseDetail.vue ***!
  \*******************************************************************/
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
<<<<<<< HEAD
/* harmony import */ var _PayrollDetail_vue_vue_type_template_id_7bb06a2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PayrollDetail.vue?vue&type=template&id=7bb06a2a& */ "./resources/js/src/views/pages/Payrolls/PayrollDetail.vue?vue&type=template&id=7bb06a2a&");
/* harmony import */ var _PayrollDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PayrollDetail.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Payrolls/PayrollDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PayrollDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PayrollDetail.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/pages/Payrolls/PayrollDetail.vue?vue&type=style&index=0&lang=scss&");
=======
/* harmony import */ var _PurchaseDetail_vue_vue_type_template_id_20ecfd84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PurchaseDetail.vue?vue&type=template&id=20ecfd84& */ "./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=template&id=20ecfd84&");
/* harmony import */ var _PurchaseDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PurchaseDetail.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PurchaseDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PurchaseDetail.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=style&index=0&lang=scss&");
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
=======
/* harmony import */ var _PayrollDetail_vue_vue_type_template_id_7bb06a2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PayrollDetail.vue?vue&type=template&id=7bb06a2a& */ "./resources/js/src/views/pages/Payrolls/PayrollDetail.vue?vue&type=template&id=7bb06a2a&");
/* harmony import */ var _PayrollDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PayrollDetail.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Payrolls/PayrollDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PayrollDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PayrollDetail.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/pages/Payrolls/PayrollDetail.vue?vue&type=style&index=0&lang=scss&");
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
<<<<<<< HEAD
<<<<<<< HEAD
  _PayrollDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PayrollDetail_vue_vue_type_template_id_7bb06a2a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PayrollDetail_vue_vue_type_template_id_7bb06a2a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
=======
  _PurchaseDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PurchaseDetail_vue_vue_type_template_id_20ecfd84___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PurchaseDetail_vue_vue_type_template_id_20ecfd84___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
=======
  _PayrollDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PayrollDetail_vue_vue_type_template_id_7bb06a2a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PayrollDetail_vue_vue_type_template_id_7bb06a2a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
<<<<<<< HEAD
<<<<<<< HEAD
component.options.__file = "resources/js/src/views/pages/Payrolls/PayrollDetail.vue"
=======
component.options.__file = "resources/js/src/views/pages/Purchases/PurchaseDetail.vue"
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
=======
component.options.__file = "resources/js/src/views/pages/Payrolls/PayrollDetail.vue"
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
/***/ "./resources/js/src/views/pages/Payrolls/PayrollDetail.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Payrolls/PayrollDetail.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
<<<<<<< HEAD
=======
/***/ "./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PayrollDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PayrollDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Payrolls/PayrollDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PayrollDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Payrolls/PayrollDetail.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Payrolls/PayrollDetail.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************/
<<<<<<< HEAD
=======
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PurchaseDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************/
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PayrollDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PayrollDetail.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Payrolls/PayrollDetail.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PayrollDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PayrollDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PayrollDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PayrollDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PayrollDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/Payrolls/PayrollDetail.vue?vue&type=template&id=7bb06a2a&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Payrolls/PayrollDetail.vue?vue&type=template&id=7bb06a2a& ***!
  \************************************************************************************************/
<<<<<<< HEAD
=======
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PurchaseDetail.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=template&id=20ecfd84&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=template&id=20ecfd84& ***!
  \**************************************************************************************************/
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PayrollDetail_vue_vue_type_template_id_7bb06a2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PayrollDetail.vue?vue&type=template&id=7bb06a2a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Payrolls/PayrollDetail.vue?vue&type=template&id=7bb06a2a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PayrollDetail_vue_vue_type_template_id_7bb06a2a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PayrollDetail_vue_vue_type_template_id_7bb06a2a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
<<<<<<< HEAD
=======
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseDetail_vue_vue_type_template_id_20ecfd84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PurchaseDetail.vue?vue&type=template&id=20ecfd84& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Purchases/PurchaseDetail.vue?vue&type=template&id=20ecfd84&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseDetail_vue_vue_type_template_id_20ecfd84___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseDetail_vue_vue_type_template_id_20ecfd84___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0



/***/ })

}]);