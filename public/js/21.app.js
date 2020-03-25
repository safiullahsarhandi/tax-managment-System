(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Sales/SaleDetail.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Sales/SaleDetail.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
=======
<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/TaxParameters.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/TaxParameters.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
>>>>>>> master
>>>>>>> 90b29b1fa311125012be5716f1008a7a56924572
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
//
//
//
//
//
//
//
//
//
//
//
//
//
>>>>>>> master
>>>>>>> 90b29b1fa311125012be5716f1008a7a56924572

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    TheCustomizer: _layouts_components_customizer_CommentDrawer_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Slide: vue_burger_menu__WEBPACK_IMPORTED_MODULE_1__["Slide"] // Register your component

  },
  data: function data() {
    return {
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
      editTax: {},
      addTaxParameterModal: false,
      editTaxParameterModal: false,
      type: 'Monthly',
>>>>>>> 90b29b1fa311125012be5716f1008a7a56924572
      tax_id: '',
      openComments: false
    };
  },
  created: function created() {
    this.tax_id = this.$store.state.rootUrl.split('/')[2];
    this.getCustomer(localStorage.getItem('customer'));
    this.getSale(this.$route.params.id);
    this.$store.dispatch('getAverageRate');
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapState"])('sales', ['sale']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapState"])('customers', ['customer']), {
    userType: function userType() {
      return this.$store.getters.userType;
    },
    averageRate: function averageRate() {
      return this.$store.state.averageRate;
    },
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
    }
  }),
  methods: _objectSpread({
    handleToggleDrawer: function handleToggleDrawer() {
      this.$refs.commentsView.active = !this.$refs.commentsView.active;
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])({
    getSale: 'sales/getSale',
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
        type: 'sale'
      };
      this.statusChange(data).then(function (res) {
        if (res.data.status != true) {
          if (res.data.response == 'undefined') {
            _this.sale.officer_confirmed = status;
          } else {
            _this.sale.officer_confirmed = res.data.response;
          }
        }
      });
<<<<<<< HEAD
    },
    changeManagementStatus: function changeManagementStatus(status, id, by) {
      var data = {
        id: id,
        status: status,
        by: by,
        tax_id: this.tax_id,
        notify: this.$vs.notify,
        tax_type: 'sale'
      };
      this.statusChangeManagment(data).then(function (res) {});
=======
>>>>>>> master
>>>>>>> 90b29b1fa311125012be5716f1008a7a56924572
    }
  })
});

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Sales/SaleDetail.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Sales/SaleDetail.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
=======
<<<<<<< HEAD
/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/TaxParameters.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/TaxParameters.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
>>>>>>> master
>>>>>>> 90b29b1fa311125012be5716f1008a7a56924572
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bm-menu {\n  z-index: 99999;\n}\n.bm-burger-button {\n  position: fixed;\n  width: 36px;\n  height: 30px;\n  left: 36px;\n  top: 36px;\n  cursor: pointer;\n}\n.bm-burger-bars {\n  background-color: #373a47;\n}\n.line-style {\n  position: absolute;\n  height: 20%;\n  left: 0;\n  right: 0;\n}\n.cross-style {\n  position: absolute;\n  top: 12px;\n  right: 2px !important;\n  cursor: pointer;\n}\n.bm-cross {\n  background: #bdc3c7;\n}\n.bm-cross-button {\n  height: 24px;\n  width: 24px;\n}\n.bm-menu {\n  height: 100%;\n  /* 100% Full-height */\n  width: 0;\n  /* 0 width - change this with JavaScript */\n  position: fixed;\n  /* Stay in place */\n  top: 0;\n  left: 0;\n  background-color: #3f3f41;\n  /* Black*/\n  overflow-x: hidden;\n  /* Disable horizontal scroll */\n  padding-top: 60px;\n  /* Place content 60px from the top */\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  /*0.5 second transition effect to slide in the sidenav*/\n}\n.bm-overlay {\n  background: rgba(0, 0, 0, 0.3);\n}\n.bm-item-list {\n  color: #b8b7ad;\n  margin-left: 10%;\n  font-size: 20px;\n}\n.bm-item-list > * {\n  display: -webkit-box;\n  display: flex;\n  text-decoration: none;\n  padding: 0.7em;\n}\n.bm-item-list > * > span {\n  margin-left: 10px;\n  font-weight: 700;\n  color: white;\n}", ""]);

// exports


/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Sales/SaleDetail.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Sales/SaleDetail.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
=======
<<<<<<< HEAD
/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/TaxParameters.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/TaxParameters.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
>>>>>>> master
>>>>>>> 90b29b1fa311125012be5716f1008a7a56924572
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


<<<<<<< HEAD
var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SaleDetail.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Sales/SaleDetail.vue?vue&type=style&index=0&lang=scss&");
=======
<<<<<<< HEAD
var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TaxManagment.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=style&index=0&lang=css&");
=======
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TaxParameters.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/TaxParameters.vue?vue&type=style&index=0&lang=css&");
>>>>>>> master
>>>>>>> 90b29b1fa311125012be5716f1008a7a56924572

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
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Sales/SaleDetail.vue?vue&type=template&id=436c7c10&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Sales/SaleDetail.vue?vue&type=template&id=436c7c10& ***!
  \************************************************************************************************************************************************************************************************************************/
=======
<<<<<<< HEAD
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=template&id=89c4bd8a&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=template&id=89c4bd8a& ***!
  \**********************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/TaxParameters.vue?vue&type=template&id=906c72a0&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/TaxParameters.vue?vue&type=template&id=906c72a0& ***!
  \*********************************************************************************************************************************************************************************************************************/
>>>>>>> master
>>>>>>> 90b29b1fa311125012be5716f1008a7a56924572
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
<<<<<<< HEAD
        "vs-row",
        [
          _c(
            "vs-col",
            { attrs: { "vs-lg": "9", "vs-md": "9", "vs-sm": "12" } },
=======
        "vx-card",
<<<<<<< HEAD
        {
          attrs: {
            title: "List of Taxes",
            subtitle:
              "The List of Taxes contains currently assigned taxes of customer Or those which are delivered succesfully"
          }
        },
=======
        { attrs: { title: "List of Tax Parameters", subtitle: "" } },
>>>>>>> master
        [
          _c(
            "template",
            { slot: "actions" },
<<<<<<< HEAD
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
=======
            [
              _vm.$store.getters.userType == "Admin" ||
              _vm.$store.getters.userType == "Super Admin"
                ? _c("vs-button", {
                    attrs: {
                      type: "border",
                      "icon-pack": "feather",
                      icon: "icon-plus"
                    },
                    on: {
                      click: function($event) {
                        return _vm.addTax()
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
              attrs: { search: "", pagination: "", data: _vm.parameters },
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
                          _c("vs-td", [_vm._v(_vm._s(_vm.taxParam(index)))]),
                          _vm._v(" "),
                          _c("vs-td", [_vm._v(_vm._s(tr.khmer_description))]),
                          _vm._v(" "),
                          _c("vs-td", [_vm._v(_vm._s(tr.english_description))]),
                          _vm._v(" "),
                          _c("vs-td", [_vm._v(_vm._s(tr.rate))]),
                          _vm._v(" "),
                          _c("vs-td", [_vm._v(_vm._s(tr.base_tax))]),
                          _vm._v(" "),
                          _c("vs-td", [_vm._v(_vm._s(tr.tax_type || "NA"))]),
                          _vm._v(" "),
                          _c("vs-td", [_vm._v(_vm._s(tr.amount_min || "NA"))]),
                          _vm._v(" "),
                          _c("vs-td", [_vm._v(_vm._s(tr.amount_max || "NA"))]),
                          _vm._v(" "),
                          _c("vs-td", [_vm._v(_vm._s(tr.effective_date))]),
                          _vm._v(" "),
                          _c("vs-td", [_vm._v(_vm._s(tr.remarks || "NA"))]),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            [
                              _c("vs-button", {
                                attrs: {
                                  size: "small",
                                  type: "border",
                                  "icon-pack": "feather",
                                  icon: "icon-edit"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.showEditPopup(tr.id)
                                  }
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
>>>>>>> master
              _c(
                "template",
                { slot: "thead" },
                [
<<<<<<< HEAD
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
=======
                  _c("vs-th", [_vm._v("Tax Param")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Description (Khmer)")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Description (English)")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Rate (%)")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Base Tax Percentage")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Tax Type")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Amount Min")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Amount Max")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Effective Date")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Remarks")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Action")])
>>>>>>> master
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
<<<<<<< HEAD
            active: _vm.addTaxManagmentModal,
            title: "Add Tax Managment"
          },
          on: {
            "update:active": function($event) {
              _vm.addTaxManagmentModal = $event
=======
            active: _vm.addTaxParameterModal,
            title: "Add Tax Parameter"
          },
          on: {
            "update:active": function($event) {
              _vm.addTaxParameterModal = $event
>>>>>>> master
            }
          }
        },
        [
          _c(
            "form",
            {
<<<<<<< HEAD
              ref: "addTaxManagmentForm",
=======
              ref: "addTaxParameterForm",
>>>>>>> master
              attrs: { "data-vv-scope": "addform" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
<<<<<<< HEAD
                  return _vm.addTaxManagment($event)
=======
                  return _vm.add($event, "addform")
>>>>>>> master
                }
              }
            },
>>>>>>> 90b29b1fa311125012be5716f1008a7a56924572
            [
              _c(
                "vx-card",
                { attrs: { title: "Sales Detail" } },
                [
                  _c(
                    "vs-row",
                    [
                      _c(
<<<<<<< HEAD
                        "vs-col",
                        {
                          staticClass: "mt-5",
                          attrs: { "vs-lg": "4", "vs-md": "4", "vs-sm": "12" }
                        },
=======
<<<<<<< HEAD
=======
                        "vx-input-group",
>>>>>>> 90b29b1fa311125012be5716f1008a7a56924572
                        [
                          _c("h6", [_vm._v("Client TIN:")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.customer.tin_no))])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
<<<<<<< HEAD
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
=======
>>>>>>> master
                        "vx-input-group",
                        [
                          _c("vs-input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required|numeric",
                                expression: "'required|numeric'"
                              }
                            ],
                            attrs: {
<<<<<<< HEAD
                              name: "title",
                              "label-placeholder": "Title",
=======
                              name: "tax_id",
                              "data-vv-as": "Tax ID",
                              "label-placeholder": "Tax ID",
>>>>>>> master
                              "data-vv-scope": "addform"
                            },
                            model: {
                              value: _vm.tax_id,
                              callback: function($$v) {
                                _vm.tax_id = $$v
                              },
                              expression: "tax_id"
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
<<<<<<< HEAD
                                  value: _vm.errors.has("addform.title"),
                                  expression: "errors.has('addform.title')"
=======
                                  value: _vm.errors.has("addform.tax_id"),
                                  expression: "errors.has('addform.tax_id')"
>>>>>>> master
                                }
                              ],
                              staticClass: "text-danger"
                            },
<<<<<<< HEAD
                            [_vm._v(_vm._s(_vm.errors.first("addform.title")))]
=======
                            [_vm._v(_vm._s(_vm.errors.first("addform.tax_id")))]
>>>>>>> master
                          )
                        ],
                        1
>>>>>>> 90b29b1fa311125012be5716f1008a7a56924572
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
                          _c("h6", [_vm._v("Account Code:")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.sale.account_code))])
                        ]
=======
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
<<<<<<< HEAD
                              name: "description",
                              counter: 20,
                              label: "Description",
=======
                              name: "description_khmer",
                              "data-vv-as": "Description (Khmer)",
                              counter: 50,
                              label: "Description (Khmer)",
>>>>>>> master
                              "data-vv-scope": "addform"
                            },
                            model: {
                              value: _vm.description_khmer,
                              callback: function($$v) {
                                _vm.description_khmer = $$v
                              },
                              expression: "description_khmer"
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
<<<<<<< HEAD
                                  value: _vm.errors.has("addform.description"),
                                  expression:
                                    "errors.has('addform.description')"
=======
                                  value: _vm.errors.has(
                                    "addform.description_khmer"
                                  ),
                                  expression:
                                    "errors.has('addform.description_khmer')"
>>>>>>> master
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [
                              _vm._v(
<<<<<<< HEAD
                                _vm._s(_vm.errors.first("addform.description"))
=======
                                _vm._s(
                                  _vm.errors.first("addform.description_khmer")
                                )
>>>>>>> master
                              )
                            ]
                          )
                        ],
                        1
>>>>>>> 90b29b1fa311125012be5716f1008a7a56924572
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        {
                          staticClass: "mt-5",
                          attrs: { "vs-lg": "4", "vs-md": "4", "vs-sm": "12" }
                        },
                        [
                          _c("h6", [_vm._v("Account Description:")]),
                          _vm._v(" "),
<<<<<<< HEAD
                          _c("p", [
                            _vm._v(_vm._s(_vm.sale.account_description))
                          ])
                        ]
=======
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
<<<<<<< HEAD
                              name: "duration",
                              "label-placeholder": "Duration",
=======
                              name: "description_english",
                              "data-vv-as": "Description (English)",
                              counter: 50,
                              label: "Description (English)",
>>>>>>> master
                              "data-vv-scope": "addform"
                            },
                            model: {
                              value: _vm.description_english,
                              callback: function($$v) {
                                _vm.description_english = $$v
                              },
                              expression: "description_english"
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
<<<<<<< HEAD
                                  value: _vm.errors.has("addform.duration"),
                                  expression: "errors.has('addform.duration')"
=======
                                  value: _vm.errors.has(
                                    "addform.description_english"
                                  ),
                                  expression:
                                    "errors.has('addform.description_english')"
>>>>>>> master
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [
                              _vm._v(
<<<<<<< HEAD
                                _vm._s(_vm.errors.first("addform.duration"))
=======
                                _vm._s(
                                  _vm.errors.first(
                                    "addform.description_english"
                                  )
                                )
>>>>>>> master
                              )
                            ]
                          )
                        ],
                        1
>>>>>>> 90b29b1fa311125012be5716f1008a7a56924572
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
                          _c("h6", [_vm._v("Accounting Reference:")]),
=======
<<<<<<< HEAD
                          _c("label", [_vm._v("Tax Period")]),
                          _c("br"),
=======
                          _c("label", [_vm._v("Tax Type:")]),
>>>>>>> master
                          _c("br"),
>>>>>>> 90b29b1fa311125012be5716f1008a7a56924572
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(_vm._s(_vm.sale.accounting_reference))
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
                          _c("h6", [_vm._v("Signature Date:")]),
                          _vm._v(" "),
<<<<<<< HEAD
                          _c("p", [_vm._v(_vm._s(_vm.sale.signature_date))])
                        ]
=======
                          _c(
                            "span",
                            {
<<<<<<< HEAD
                              staticClass: "selectExample",
                              attrs: { label: "Figuras" },
                              model: {
                                value: _vm.supervisor,
                                callback: function($$v) {
                                  _vm.supervisor = $$v
                                },
                                expression: "supervisor"
                              }
=======
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.errors.has("addform.rate"),
                                  expression: "errors.has('addform.rate')"
                                }
                              ],
                              staticClass: "text-danger"
>>>>>>> master
                            },
                            [_vm._v(_vm._s(_vm.errors.first("addform.rate")))]
                          )
                        ],
                        1
>>>>>>> 90b29b1fa311125012be5716f1008a7a56924572
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
<<<<<<< HEAD
                          _c("p", [_vm._v(_vm._s(_vm.sale.branch_name))])
                        ]
=======
                          _c(
                            "span",
                            {
<<<<<<< HEAD
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
=======
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.errors.has("addform.base_tax"),
                                  expression: "errors.has('addform.base_tax')"
                                }
                              ],
                              staticClass: "text-danger"
>>>>>>> master
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("addform.base_tax"))
                              )
                            ]
                          )
                        ],
                        1
>>>>>>> 90b29b1fa311125012be5716f1008a7a56924572
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
                          _c("p", [_vm._v(_vm._s(_vm.sale.tax_period))])
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
                          _c("p", [_vm._v(_vm._s(_vm.sale.invoice_date))])
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
                          _c("h6", [_vm._v("Invoice Number:")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.sale.invoice_num))])
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
                          _c("p", [_vm._v(_vm._s(_vm.sale.description))])
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
                          _c("p", [_vm._v(_vm._s(_vm.sale.quantity))])
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
                { staticClass: "mt-base", attrs: { title: "Sales Summary" } },
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
                          _c("h6", [_vm._v("Non Taxable Sale:")]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              _vm._s(_vm.customer.non_taxable_sales || "NA")
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
                          _c("h6", [
                            _vm._v("Non taxable sale x Average rate:")
                          ]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.non_taxable_sales))])
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
                          _c("h6", [_vm._v("Value Of Exports:")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.sale.vat || "NA"))])
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
                          _c("h6", [_vm._v("Value Of Exports:")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.value_of_exports))])
                        ]
                      ),
                      _vm._v(" "),
                      _c("vs-divider", { attrs: { position: "left" } }, [
                        _c("h5", [_vm._v("Sales to Taxable Persons")])
                      ]),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        {
                          staticClass: "mt-5",
                          attrs: { "vs-lg": "6", "vs-md": "6", "vs-sm": "12" }
                        },
                        [
                          _c("h6", [_vm._v("Taxable Value:")]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(_vm._s(_vm.sale.taxable_person_sales))
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
                          _c("h6", [_vm._v("VAT:")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.person_vat))])
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
                          _c("h6", [_vm._v("Taxable Value x Average Rate:")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.person_taxable))])
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
                          _c("h6", [_vm._v("VAT:")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.person_taxable_vat))])
                        ]
                      ),
                      _vm._v(" "),
                      _c("vs-divider", { attrs: { position: "left" } }, [
                        _c("h5", [_vm._v("Sales to Customers")])
                      ]),
                      _vm._v(" "),
                      _c("vs-col", {
                        staticClass: "mt-5",
                        attrs: { "vs-lg": "12", "vs-md": "12", "vs-sm": "12" }
                      }),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        {
                          staticClass: "mt-5",
                          attrs: { "vs-lg": "6", "vs-md": "6", "vs-sm": "12" }
                        },
                        [
                          _c("h6", [_vm._v("Taxable Value:")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.sale.cust_sales))])
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
                          _c("h6", [_vm._v("VAT:")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.customer_vat))])
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
                          _c("h6", [_vm._v("Taxable Value x Average Rate:")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.customer_taxable))])
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
                          _c("h6", [_vm._v("VAT:")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.customer_taxable_vat))])
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
                        [_c("p", [_vm._v(_vm._s(_vm.customer_taxable_vat))])]
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
                        { attrs: { title: "Edit Sale" } },
                        [
                          _c("vs-button", {
                            attrs: {
                              to: "/sale-update/" + _vm.$route.params.id,
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
                                        _vm.sale.id,
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
                                        _vm.sale.id,
                                        "admin"
                                      )
                                    }
                                  }
                                })
                              ],
                              1
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.userType == "Supervisor"
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
                                        _vm.sale.id,
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
                                        _vm.sale.id,
                                        "supervisor"
                                      )
                                    }
                                  }
                                })
                              ],
                              1
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.userType == "Officer"
                          ? _c(
                              "vs-list-item",
                              { attrs: { title: "Status" } },
                              [
                                _c("vs-switch", {
                                  attrs: { "icon-pack": "feather" },
                                  on: {
                                    click: function($event) {
                                      return _vm.statusUpdate(
                                        _vm.sale.sale_id,
                                        _vm.sale.officer_confirmed
                                      )
                                    }
                                  },
                                  model: {
                                    value: _vm.sale.officer_confirmed,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.sale,
                                        "officer_confirmed",
                                        $$v
                                      )
                                    },
                                    expression: "sale.officer_confirmed"
                                  }
                                })
                              ],
                              1
                            )
                          : _vm._e()
                      ],
                      _vm._v(" "),
                      _c(
<<<<<<< HEAD
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
=======
                        "vs-button",
                        {
                          staticClass: "float-right",
                          attrs: { button: "submit", type: "gradient" }
                        },
<<<<<<< HEAD
                        [_vm._v("Add Tax Managment")]
=======
                        [_vm._v("Add Tax Parameter")]
>>>>>>> master
>>>>>>> 90b29b1fa311125012be5716f1008a7a56924572
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
          type: "Sale",
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
/***/ "./resources/js/src/views/pages/Sales/SaleDetail.vue":
/*!***********************************************************!*\
  !*** ./resources/js/src/views/pages/Sales/SaleDetail.vue ***!
  \***********************************************************/
=======
<<<<<<< HEAD
/***/ "./resources/js/src/views/pages/tax-managment/TaxManagment.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/src/views/pages/tax-managment/TaxManagment.vue ***!
  \*********************************************************************/
=======
/***/ "./resources/js/src/views/pages/TaxParameters.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/views/pages/TaxParameters.vue ***!
  \********************************************************/
>>>>>>> master
>>>>>>> 90b29b1fa311125012be5716f1008a7a56924572
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _SaleDetail_vue_vue_type_template_id_436c7c10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SaleDetail.vue?vue&type=template&id=436c7c10& */ "./resources/js/src/views/pages/Sales/SaleDetail.vue?vue&type=template&id=436c7c10&");
/* harmony import */ var _SaleDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SaleDetail.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Sales/SaleDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SaleDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SaleDetail.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/pages/Sales/SaleDetail.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
=======
<<<<<<< HEAD
/* harmony import */ var _TaxManagment_vue_vue_type_template_id_89c4bd8a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaxManagment.vue?vue&type=template&id=89c4bd8a& */ "./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=template&id=89c4bd8a&");
/* harmony import */ var _TaxManagment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaxManagment.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TaxManagment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TaxManagment.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
=======
/* harmony import */ var _TaxParameters_vue_vue_type_template_id_906c72a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaxParameters.vue?vue&type=template&id=906c72a0& */ "./resources/js/src/views/pages/TaxParameters.vue?vue&type=template&id=906c72a0&");
/* harmony import */ var _TaxParameters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaxParameters.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/TaxParameters.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TaxParameters_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TaxParameters.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/pages/TaxParameters.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
>>>>>>> master
>>>>>>> 90b29b1fa311125012be5716f1008a7a56924572






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
<<<<<<< HEAD
  _SaleDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SaleDetail_vue_vue_type_template_id_436c7c10___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SaleDetail_vue_vue_type_template_id_436c7c10___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
=======
<<<<<<< HEAD
  _TaxManagment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TaxManagment_vue_vue_type_template_id_89c4bd8a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TaxManagment_vue_vue_type_template_id_89c4bd8a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
=======
  _TaxParameters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TaxParameters_vue_vue_type_template_id_906c72a0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TaxParameters_vue_vue_type_template_id_906c72a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
>>>>>>> master
>>>>>>> 90b29b1fa311125012be5716f1008a7a56924572
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
<<<<<<< HEAD
component.options.__file = "resources/js/src/views/pages/Sales/SaleDetail.vue"
=======
<<<<<<< HEAD
component.options.__file = "resources/js/src/views/pages/tax-managment/TaxManagment.vue"
=======
component.options.__file = "resources/js/src/views/pages/TaxParameters.vue"
>>>>>>> master
>>>>>>> 90b29b1fa311125012be5716f1008a7a56924572
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/src/views/pages/Sales/SaleDetail.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Sales/SaleDetail.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
=======
<<<<<<< HEAD
/***/ "./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
=======
/***/ "./resources/js/src/views/pages/TaxParameters.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/pages/TaxParameters.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
>>>>>>> master
>>>>>>> 90b29b1fa311125012be5716f1008a7a56924572
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SaleDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Sales/SaleDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Sales/SaleDetail.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Sales/SaleDetail.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************/
=======
<<<<<<< HEAD
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxManagment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TaxManagment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxManagment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************/
=======
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxParameters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TaxParameters.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/TaxParameters.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxParameters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/TaxParameters.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/pages/TaxParameters.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************/
>>>>>>> master
>>>>>>> 90b29b1fa311125012be5716f1008a7a56924572
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SaleDetail.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Sales/SaleDetail.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/Sales/SaleDetail.vue?vue&type=template&id=436c7c10&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Sales/SaleDetail.vue?vue&type=template&id=436c7c10& ***!
  \******************************************************************************************/
=======
<<<<<<< HEAD
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxManagment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TaxManagment.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxManagment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxManagment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxManagment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxManagment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxManagment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=template&id=89c4bd8a&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=template&id=89c4bd8a& ***!
  \****************************************************************************************************/
=======
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxParameters_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TaxParameters.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/TaxParameters.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxParameters_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxParameters_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxParameters_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxParameters_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxParameters_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/TaxParameters.vue?vue&type=template&id=906c72a0&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/pages/TaxParameters.vue?vue&type=template&id=906c72a0& ***!
  \***************************************************************************************/
>>>>>>> master
>>>>>>> 90b29b1fa311125012be5716f1008a7a56924572
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleDetail_vue_vue_type_template_id_436c7c10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SaleDetail.vue?vue&type=template&id=436c7c10& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Sales/SaleDetail.vue?vue&type=template&id=436c7c10&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleDetail_vue_vue_type_template_id_436c7c10___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleDetail_vue_vue_type_template_id_436c7c10___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
=======
<<<<<<< HEAD
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxManagment_vue_vue_type_template_id_89c4bd8a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TaxManagment.vue?vue&type=template&id=89c4bd8a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/tax-managment/TaxManagment.vue?vue&type=template&id=89c4bd8a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxManagment_vue_vue_type_template_id_89c4bd8a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxManagment_vue_vue_type_template_id_89c4bd8a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
=======
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxParameters_vue_vue_type_template_id_906c72a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TaxParameters.vue?vue&type=template&id=906c72a0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/TaxParameters.vue?vue&type=template&id=906c72a0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxParameters_vue_vue_type_template_id_906c72a0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxParameters_vue_vue_type_template_id_906c72a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
>>>>>>> master
>>>>>>> 90b29b1fa311125012be5716f1008a7a56924572



/***/ })

}]);