(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Purchases/PendingPurchases.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Purchases/PendingPurchases.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
<<<<<<< HEAD
=======
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/TaxParameters.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/TaxParameters.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
<<<<<<< HEAD
<<<<<<< HEAD
var _objectSpread2;

=======
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
=======
var _objectSpread2;

>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0

/* harmony default export */ __webpack_exports__["default"] = ({
  inject: ['generatePassword'],
  data: function data() {
    return {
      tax_id: '' // switch1: true,

    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('purchases/', ['purchases'])),
  created: function created() {
    this.tax_id = this.$store.state.rootUrl.split('/')[2];
    this.getPendingPurchases(this.tax_id);
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    getPendingPurchases: 'purchases/getPendingPurchases',
    update: 'purchases/updatePurchase'
  }), (_objectSpread2 = {
    updateCustomer: function updateCustomer(e) {
      var _this = this;

      this.$validator.validateAll('editform').then(function (result) {
        if (result) {
          _this.$vs.loading();

          var fd = new FormData(_this.$refs.editForm);

          _this.submit(fd).then(function (res) {
            // console.log(res.data);
            if (res.data.status == 'success') {
              _this.password = _this.email = _this.first_name = _this.last_name = _this.zip_code = _this.city = _this.state = _this.address = _this.phone = '';
              e.target.reset();

              _this.errors.clear();

              _this.editCustomerModal = false;

              _this.$vs.notify({
                title: 'Success',
                text: 'Customer Updated Successfully',
                color: 'success',
                position: 'top-right'
              });

              _this.$vs.loading.close(); // this.getCustomers();

            }

            if (res.data.status == 'error') {
              alert(res.data.msg);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      editTax: {},
      addTaxParameterModal: false,
      editTaxParameterModal: false,
      type: 'Monthly',
      tax_id: '',
      tax_code: '',
      description_khmer: '',
      description_english: '',
      rate: '',
      base_tax: '',
      amount_min: '',
      amount_max: '',
      effective_date: '',
      remarks: '',
      identifier: 0,
      edit_type: 'Monthly',
      edit_tax_id: '',
      edit_tax_code: '',
      edit_description_khmer: '',
      edit_description_english: '',
      edit_rate: '',
      edit_base_tax: '',
      edit_amount_min: '',
      edit_amount_max: '',
      edit_effective_date: '',
      edit_remarks: '',
      parameter: {}
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('taxes/', ['parameters']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('taxes/', ['getParameter'])),
  beforeCreate: function beforeCreate() {},
  created: function created() {
    this.fetchParameters();
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    create: 'taxes/addParameter',
    fetchParameters: 'taxes/getParameters',
    update: 'taxes/editParameter'
  }), {
    taxParam: function taxParam(index) {
      var parameter = this.getParameter(index);
      return parameter.tax_param_id + '' + parameter.expiry_date;
    },
    addTax: function addTax() {
      this.addTaxParameterModal = true;
    },
    add: function add(e) {
      var _this = this;

      this.$validator.validateAll('addform').then(function (result) {
        if (result) {
          _this.$vs.loading();

          self = _this;
          var fd = new FormData(self.$refs.addTaxParameterForm);
          var data = {
            fd: fd,
            close: _this.$vs.loading.close,
            notify: _this.$vs.notify
          };

          _this.create(data).then(function (res) {
            if (res.data.status == 'success') {
              self.title = self.description = self.duration = self.supervisor = '';
              self.officer = [];
              e.target.reset();
              self.$validator.reset();

              _this.fetchParameters();

              _this.addTaxParameterModal = false;
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
            }
          });
        }
      });
    },
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
    statusUpdate: function statusUpdate(id) {
      var _this2 = this;

      this.$vs.loading();
      axios.post('status-update-customer', {
        id: id
      }).then(function (res) {
        _this2.$vs.notify({
          title: 'Updated!...',
          text: res.data.msg,
          color: 'success',
          position: 'top-right'
        });

        _this2.$vs.loading.close();
      });
    },
    addMoreFeild: function addMoreFeild() {
      this.customField.push({
        name: 'additional_field[]',
        value: '',
        type: 'text'
      });
    },
    editCustomer: function editCustomer(id) {
      var customer = this.findCustomer(id);
      this.customer_id = customer.customer_id;
      this.name_english = customer.name_english;
      this.name_khmer = customer.name_khmer;
      this.industry = customer.industry;
      this.tax_card_num = customer.tax_card_num;
      this.tin_no = customer.tin_no;
      this.email = customer.email;
      this.telephone = customer.telephone;
      this.additional_fields = customer.additional_fields;
      this.address = customer.address;
      this.district = customer.district;
      this.group = customer.group;
      this.incorporation_date = customer.incorporation_date;
      this.muncipality = customer.muncipality;
      this.province = customer.province;
      this.sangkat = customer.sangkat;
      this.street = customer.street;
      this.village = customer.village;
      self = this;
      self.customField = [];

      if (customer.additional_fields != null) {
        if (customer.additional_fields.length > 0) {
          customer.additional_fields.map(function (val, key) {
            self.customField.push({
              name: 'additional_field[]',
              value: val,
              type: 'text'
            });
          });
        }
      }

      this.editCustomerModal = true;
    }
  }, _defineProperty(_objectSpread2, "updateCustomer", function updateCustomer(e) {
    var _this3 = this;

    this.$validator.validateAll('editform').then(function (result) {
      if (result) {
        _this3.$vs.loading();

        var fd = new FormData(_this3.$refs.editCustomerForm);

        _this3.update(fd).then(function (res) {
          if (res.data.status == 'success') {
            e.target.reset();

            _this3.errors.clear();

            _this3.editCustomerModal = false;

            _this3.$vs.notify({
              title: 'Success',
              text: 'Customer Updated Successfully',
              color: 'success',
              position: 'top-right'
            });

            _this3.$vs.loading.close();

            _this3.getCustomers();
          }
        });
      }
    });
  }), _defineProperty(_objectSpread2, "makePassword", function makePassword() {
    this.password = this.generatePassword();
  }), _objectSpread2))
<<<<<<< HEAD
=======
    //  shows popup tax Parameter
    showEditPopup: function showEditPopup(id) {
      var parameter = this.getParameter(id, 'id');
      this.identifier = id;
      this.edit_tax_code = parameter.tax_code;
      this.edit_tax_id = parameter.tax_param_id.substring(3);
      this.edit_effective_date = parameter.effective_date;
      this.edit_description_khmer = parameter.khmer_description;
      this.edit_description_english = parameter.english_description;
      this.edit_rate = parameter.rate;
      this.edit_base_tax = parameter.base_tax;
      this.edit_amount_min = parameter.amount_min;
      this.edit_amount_max = parameter.amount_max;
      this.edit_remarks = parameter.remarks;
      this.edit_type = parameter.tax_type;
      this.editTaxParameterModal = true;
    },
    edit: function edit(e) {
      var _this2 = this;

      this.$validator.validateAll('editform').then(function (result) {
        if (result) {
          self = _this2;
          var fd = new FormData(self.$refs.editTaxParameterForm);
          var data = {
            fd: fd,
            close: _this2.$vs.loading.close,
            notify: _this2.$vs.notify
          };

          _this2.update(data).then(function (res) {
            if (res.data.status == 'success') {
              // self.fetchParameters();
              self.$validator.reset();
              self.editTaxParameterModal = false;
            }
          });
        }
      });
    }
  })
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
});

/***/ }),

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Purchases/PendingPurchases.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Purchases/PendingPurchases.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
<<<<<<< HEAD
=======
/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/TaxParameters.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/TaxParameters.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
// imports


// module
<<<<<<< HEAD
<<<<<<< HEAD
exports.push([module.i, ".con-vs-popup .vs-popup {\n  width: 1000px !important;\n}\r\n\r\n", ""]);
=======
exports.push([module.i, ".selectExample {\n  margin: 10px;\n}\n.con-select-example {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.con-select .vs-select {\n  width: 100%\n}\n@media (max-width: 550px) {\n.con-select {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n}\n.con-select .vs-select {\n    width: 100%\n}\n}\r\n\r\n", ""]);
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
=======
exports.push([module.i, ".con-vs-popup .vs-popup {\n  width: 1000px !important;\n}\r\n\r\n", ""]);
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0

// exports


/***/ }),

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Purchases/PendingPurchases.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Purchases/PendingPurchases.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
<<<<<<< HEAD
=======
/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/TaxParameters.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/TaxParameters.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


<<<<<<< HEAD
<<<<<<< HEAD
var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PendingPurchases.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Purchases/PendingPurchases.vue?vue&type=style&index=0&lang=css&");
=======
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TaxParameters.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/TaxParameters.vue?vue&type=style&index=0&lang=css&");
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
=======
var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PendingPurchases.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Purchases/PendingPurchases.vue?vue&type=style&index=0&lang=css&");
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

<<<<<<< HEAD
<<<<<<< HEAD
var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);
=======
var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
=======
var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Purchases/PendingPurchases.vue?vue&type=template&id=93401ce6&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Purchases/PendingPurchases.vue?vue&type=template&id=93401ce6& ***!
  \**********************************************************************************************************************************************************************************************************************************/
<<<<<<< HEAD
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/TaxParameters.vue?vue&type=template&id=906c72a0&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/TaxParameters.vue?vue&type=template&id=906c72a0& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
        "vx-card",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
        {
          attrs: {
            title: "Pending Purchases Approvals",
            subtitle:
              "listed below Purchases need your approval which are created by you and your officers"
          }
        },
        [
          _c(
            "vs-table",
            {
              attrs: {
                search: "",
                pagination: "",
                "max-items": "6",
                data: _vm.purchases
              },
<<<<<<< HEAD
=======
        { attrs: { title: "List of Tax Parameters", subtitle: "" } },
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
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
                          _c(
                            "vs-td",
                            { attrs: { data: tr.officer.full_name } },
                            [_vm._v(_vm._s(tr.officer.full_name))]
                          ),
                          _vm._v(" "),
                          _c("vs-td", { attrs: { data: tr.branch_name } }, [
                            _vm._v(_vm._s(tr.branch_name))
                          ]),
                          _vm._v(" "),
                          _c("vs-td", { attrs: { data: tr.tax_period } }, [
                            _vm._v(_vm._s(tr.tax_period))
                          ]),
                          _vm._v(" "),
                          _c("vs-td", { attrs: { data: tr.total_vat } }, [
                            _vm._v(_vm._s(tr.total_vat))
                          ]),
<<<<<<< HEAD
=======
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
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            [
                              _c("vs-button", {
                                attrs: {
                                  size: "small",
<<<<<<< HEAD
<<<<<<< HEAD
                                  "icon-pack": "feather",
                                  icon: "icon-maximize-2",
                                  type: "border"
=======
                                  type: "border",
                                  "icon-pack": "feather",
                                  icon: "icon-edit"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.showEditPopup(tr.id)
                                  }
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
=======
                                  "icon-pack": "feather",
                                  icon: "icon-maximize-2",
                                  type: "border"
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
                { slot: "header" },
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
                    [_vm._v("Import")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "template",
                { slot: "thead" },
                [
                  _c("vs-th", [_vm._v("added by ")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Branch#/ Name")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Tax Period")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Total VAT")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Actions")])
<<<<<<< HEAD
=======
                { slot: "thead" },
                [
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
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
                ],
                1
              )
            ],
            2
          )
        ],
<<<<<<< HEAD
        2
      ),
      _vm._v(" "),
      _c(
        "vs-popup",
        {
          attrs: {
            active: _vm.addTaxParameterModal,
            title: "Add Tax Parameter"
          },
          on: {
            "update:active": function($event) {
              _vm.addTaxParameterModal = $event
            }
          }
        },
        [
          _c(
            "form",
            {
              ref: "addTaxParameterForm",
              attrs: { "data-vv-scope": "addform" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.add($event, "addform")
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
                          _c(
                            "vx-input-group",
                            { staticClass: "mt-2" },
                            [
                              _c(
                                "vs-select",
                                {
                                  directives: [
                                    {
                                      name: "validate",
                                      rawName: "v-validate",
                                      value: "required",
                                      expression: "'required'"
                                    }
                                  ],
                                  staticClass: "selectExample",
                                  attrs: {
                                    name: "tax_code",
                                    placeholder: "Search and select",
                                    label: "Tax Code",
                                    "data-vv-as": "Tax Code",
                                    "data-vv-scope": "addform"
                                  },
                                  model: {
                                    value: _vm.tax_code,
                                    callback: function($$v) {
                                      _vm.tax_code = $$v
                                    },
                                    expression: "tax_code"
                                  }
                                },
                                [
                                  _c("vs-select-item", {
                                    attrs: { value: "ACT", text: "ACT" }
                                  }),
                                  _vm._v(" "),
                                  _c("vs-select-item", {
                                    attrs: { value: "PPT", text: "PPT" }
                                  }),
                                  _vm._v(" "),
                                  _c("vs-select-item", {
                                    attrs: { value: "VAT", text: "VAT" }
                                  }),
                                  _vm._v(" "),
                                  _c("vs-select-item", {
                                    attrs: { value: "SPT", text: "SPT" }
                                  }),
                                  _vm._v(" "),
                                  _c("vs-select-item", {
                                    attrs: { value: "PLT", text: "PLT" }
                                  }),
                                  _vm._v(" "),
                                  _c("vs-select-item", {
                                    attrs: { value: "WHT", text: "WHT" }
                                  }),
                                  _vm._v(" "),
                                  _c("vs-select-item", {
                                    attrs: { value: "FBT", text: "FBT" }
                                  }),
                                  _vm._v(" "),
                                  _c("vs-select-item", {
                                    attrs: { value: "TOS", text: "TOS" }
                                  }),
                                  _vm._v(" "),
                                  _c("vs-select-item", {
                                    attrs: { value: "OTX", text: "OTX" }
                                  })
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
                                      value: _vm.errors.has("addform.tax_code"),
                                      expression:
                                        "errors.has('addform.tax_code')"
                                    }
                                  ],
                                  staticClass: "text-danger"
                                },
                                [
                                  _vm._v(
                                    _vm._s(_vm.errors.first("addform.tax_code"))
                                  )
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
                              name: "tax_id",
                              "data-vv-as": "Tax ID",
                              "label-placeholder": "Tax ID",
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
                                  value: _vm.errors.has("addform.tax_id"),
                                  expression: "errors.has('addform.tax_id')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [_vm._v(_vm._s(_vm.errors.first("addform.tax_id")))]
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
                              name: "description_khmer",
                              "data-vv-as": "Description (Khmer)",
                              counter: 50,
                              label: "Description (Khmer)",
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
                                  value: _vm.errors.has(
                                    "addform.description_khmer"
                                  ),
                                  expression:
                                    "errors.has('addform.description_khmer')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.errors.first("addform.description_khmer")
                                )
                              )
                            ]
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
                              name: "description_english",
                              "data-vv-as": "Description (English)",
                              counter: 50,
                              label: "Description (English)",
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
                                  value: _vm.errors.has(
                                    "addform.description_english"
                                  ),
                                  expression:
                                    "errors.has('addform.description_english')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.errors.first(
                                    "addform.description_english"
                                  )
                                )
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
                          _c("label", [_vm._v("Tax Type:")]),
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
                              name: "rate",
                              "data-vv-as": "Rate",
                              "label-placeholder": "Rate (%)",
                              "data-vv-scope": "addform"
                            },
                            model: {
                              value: _vm.rate,
                              callback: function($$v) {
                                _vm.rate = $$v
                              },
                              expression: "rate"
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
                                  value: _vm.errors.has("addform.rate"),
                                  expression: "errors.has('addform.rate')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [_vm._v(_vm._s(_vm.errors.first("addform.rate")))]
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
                              name: "base_tax",
                              "data-vv-as": "Base Tax Percentage",
                              "label-placeholder": "Base Tax Percentage (%)",
                              "data-vv-scope": "addform"
                            },
                            model: {
                              value: _vm.base_tax,
                              callback: function($$v) {
                                _vm.base_tax = $$v
                              },
                              expression: "base_tax"
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
                                  value: _vm.errors.has("addform.base_tax"),
                                  expression: "errors.has('addform.base_tax')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("addform.base_tax"))
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
                              type: "date",
                              "data-vv-as": "Effective Date",
                              name: "effective_date",
                              label: "Effective Date",
                              "data-vv-scope": "addform"
                            },
                            model: {
                              value: _vm.effective_date,
                              callback: function($$v) {
                                _vm.effective_date = $$v
                              },
                              expression: "effective_date"
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
                                  value: _vm.errors.has(
                                    "addform.effective_date"
                                  ),
                                  expression:
                                    "errors.has('addform.effective_date')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.errors.first("addform.effective_date")
                                )
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
                            attrs: {
                              name: "amount_min",
                              "data-vv-as": "Amount Min",
                              "label-placeholder": "Amount Min",
                              "data-vv-scope": "addform"
                            },
                            model: {
                              value: _vm.amount_min,
                              callback: function($$v) {
                                _vm.amount_min = $$v
                              },
                              expression: "amount_min"
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
                                  value: _vm.errors.has("addform.amount_min"),
                                  expression: "errors.has('addform.amount_min')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("addform.amount_min"))
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
                            attrs: {
                              name: "amount_max",
                              "data-vv-as": "Amount Max",
                              "label-placeholder": "Amount Max",
                              "data-vv-scope": "addform"
                            },
                            model: {
                              value: _vm.amount_max,
                              callback: function($$v) {
                                _vm.amount_max = $$v
                              },
                              expression: "amount_max"
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
                                  value: _vm.errors.has("addform.amount_max"),
                                  expression: "errors.has('addform.amount_max')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("addform.amount_max"))
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
                          _c("vs-textarea", {
                            attrs: {
                              name: "remarks",
                              "data-vv-as": "Remarks",
                              counter: 50,
                              label: "Remarks",
                              "data-vv-scope": "addform"
                            },
                            model: {
                              value: _vm.remarks,
                              callback: function($$v) {
                                _vm.remarks = $$v
                              },
                              expression: "remarks"
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
                                  value: _vm.errors.has("addform.remarks"),
                                  expression: "errors.has('addform.remarks')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("addform.remarks"))
                              )
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
                        [_vm._v("Add Tax Parameter")]
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
      ),
      _vm._v(" "),
      _c(
        "vs-popup",
        {
          attrs: {
            active: _vm.editTaxParameterModal,
            title: "Edit Tax Parameter"
          },
          on: {
            "update:active": function($event) {
              _vm.editTaxParameterModal = $event
            }
          }
        },
        [
          _c(
            "form",
            {
              ref: "editTaxParameterForm",
              attrs: { "data-vv-scope": "editform" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.edit($event, "editform")
                }
              }
            },
            [
              _c(
                "vs-row",
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.identifier,
                        expression: "identifier"
                      }
                    ],
                    attrs: { type: "hidden", name: "identifier" },
                    domProps: { value: _vm.identifier },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.identifier = $event.target.value
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "vs-col",
                    { attrs: { "vs-lg": "6", "vs-md": "6", "vs-sm": "12" } },
                    [
                      _c(
                        "vx-input-group",
                        [
                          _c(
                            "vx-input-group",
                            { staticClass: "mt-2" },
                            [
                              _c(
                                "vs-select",
                                {
                                  directives: [
                                    {
                                      name: "validate",
                                      rawName: "v-validate",
                                      value: "required",
                                      expression: "'required'"
                                    }
                                  ],
                                  staticClass: "selectExample",
                                  attrs: {
                                    name: "tax_code",
                                    placeholder: "Search and select",
                                    label: "Tax Code",
                                    "data-vv-as": "Tax Code",
                                    "data-vv-scope": "editform"
                                  },
                                  model: {
                                    value: _vm.edit_tax_code,
                                    callback: function($$v) {
                                      _vm.edit_tax_code = $$v
                                    },
                                    expression: "edit_tax_code"
                                  }
                                },
                                [
                                  _c("vs-select-item", {
                                    attrs: { value: "ACT", text: "ACT" }
                                  }),
                                  _vm._v(" "),
                                  _c("vs-select-item", {
                                    attrs: { value: "PPT", text: "PPT" }
                                  }),
                                  _vm._v(" "),
                                  _c("vs-select-item", {
                                    attrs: { value: "VAT", text: "VAT" }
                                  }),
                                  _vm._v(" "),
                                  _c("vs-select-item", {
                                    attrs: { value: "SPT", text: "SPT" }
                                  }),
                                  _vm._v(" "),
                                  _c("vs-select-item", {
                                    attrs: { value: "PLT", text: "PLT" }
                                  }),
                                  _vm._v(" "),
                                  _c("vs-select-item", {
                                    attrs: { value: "WHT", text: "WHT" }
                                  }),
                                  _vm._v(" "),
                                  _c("vs-select-item", {
                                    attrs: { value: "FBT", text: "FBT" }
                                  }),
                                  _vm._v(" "),
                                  _c("vs-select-item", {
                                    attrs: { value: "TOS", text: "TOS" }
                                  }),
                                  _vm._v(" "),
                                  _c("vs-select-item", {
                                    attrs: { value: "OTX", text: "OTX" }
                                  })
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
                                      value: _vm.errors.has(
                                        "editform.tax_code"
                                      ),
                                      expression:
                                        "errors.has('editform.tax_code')"
                                    }
                                  ],
                                  staticClass: "text-danger"
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm.errors.first("editform.tax_code")
                                    )
                                  )
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
                              name: "tax_id",
                              "data-vv-as": "Tax ID",
                              "label-placeholder": "Tax ID",
                              "data-vv-scope": "editform"
                            },
                            model: {
                              value: _vm.edit_tax_id,
                              callback: function($$v) {
                                _vm.edit_tax_id = $$v
                              },
                              expression: "edit_tax_id"
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
                                  value: _vm.errors.has("editform.tax_id"),
                                  expression: "errors.has('editform.tax_id')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("editform.tax_id"))
                              )
                            ]
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
                              name: "description_khmer",
                              "data-vv-as": "Description (Khmer)",
                              counter: 50,
                              label: "Description (Khmer)",
                              "data-vv-scope": "editform"
                            },
                            model: {
                              value: _vm.edit_description_khmer,
                              callback: function($$v) {
                                _vm.edit_description_khmer = $$v
                              },
                              expression: "edit_description_khmer"
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
                                  value: _vm.errors.has(
                                    "editform.description_khmer"
                                  ),
                                  expression:
                                    "errors.has('editform.description_khmer')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.errors.first("editform.description_khmer")
                                )
                              )
                            ]
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
                              name: "description_english",
                              "data-vv-as": "Description (English)",
                              counter: 50,
                              label: "Description (English)",
                              "data-vv-scope": "editform"
                            },
                            model: {
                              value: _vm.edit_description_english,
                              callback: function($$v) {
                                _vm.edit_description_english = $$v
                              },
                              expression: "edit_description_english"
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
                                  value: _vm.errors.has(
                                    "editform.description_english"
                                  ),
                                  expression:
                                    "errors.has('editform.description_english')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.errors.first(
                                    "editform.description_english"
                                  )
                                )
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
                          _c("label", [_vm._v("Tax Type:")]),
                          _c("br"),
                          _vm._v(" "),
                          _c(
                            "vs-radio",
                            {
                              attrs: { name: "type", "vs-value": "Monthly" },
                              model: {
                                value: _vm.edit_type,
                                callback: function($$v) {
                                  _vm.edit_type = $$v
                                },
                                expression: "edit_type"
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
                                value: _vm.edit_type,
                                callback: function($$v) {
                                  _vm.edit_type = $$v
                                },
                                expression: "edit_type"
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
                              name: "rate",
                              "data-vv-as": "Rate",
                              "label-placeholder": "Rate (%)",
                              "data-vv-scope": "editform"
                            },
                            model: {
                              value: _vm.edit_rate,
                              callback: function($$v) {
                                _vm.edit_rate = $$v
                              },
                              expression: "edit_rate"
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
                                  value: _vm.errors.has("editform.rate"),
                                  expression: "errors.has('editform.rate')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [_vm._v(_vm._s(_vm.errors.first("editform.rate")))]
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
                              name: "base_tax",
                              "data-vv-as": "Base Tax Percentage",
                              "label-placeholder": "Base Tax Percentage (%)",
                              "data-vv-scope": "editform"
                            },
                            model: {
                              value: _vm.edit_base_tax,
                              callback: function($$v) {
                                _vm.edit_base_tax = $$v
                              },
                              expression: "edit_base_tax"
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
                                  value: _vm.errors.has("editform.base_tax"),
                                  expression: "errors.has('editform.base_tax')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("editform.base_tax"))
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
                              type: "date",
                              "data-vv-as": "Effective Date",
                              name: "effective_date",
                              label: "Effective Date",
                              "data-vv-scope": "editform"
                            },
                            model: {
                              value: _vm.edit_effective_date,
                              callback: function($$v) {
                                _vm.edit_effective_date = $$v
                              },
                              expression: "edit_effective_date"
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
                                  value: _vm.errors.has(
                                    "editform.effective_date"
                                  ),
                                  expression:
                                    "errors.has('editform.effective_date')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.errors.first("editform.effective_date")
                                )
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
                            attrs: {
                              name: "amount_min",
                              "data-vv-as": "Amount Min",
                              "label-placeholder": "Amount Min",
                              "data-vv-scope": "editform"
                            },
                            model: {
                              value: _vm.edit_amount_min,
                              callback: function($$v) {
                                _vm.edit_amount_min = $$v
                              },
                              expression: "edit_amount_min"
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
                                  value: _vm.errors.has("editform.amount_min"),
                                  expression:
                                    "errors.has('editform.amount_min')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("editform.amount_min"))
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
                            attrs: {
                              name: "amount_max",
                              "data-vv-as": "Amount Max",
                              "label-placeholder": "Amount Max",
                              "data-vv-scope": "editform"
                            },
                            model: {
                              value: _vm.edit_amount_max,
                              callback: function($$v) {
                                _vm.edit_amount_max = $$v
                              },
                              expression: "edit_amount_max"
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
                                  value: _vm.errors.has("editform.amount_max"),
                                  expression:
                                    "errors.has('editform.amount_max')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("editform.amount_max"))
                              )
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
                    "vs-col",
                    { attrs: { "vs-lg": "12", "vs-md": "12", "vs-sm": "12" } },
                    [
                      _c(
                        "vx-input-group",
                        [
                          _c("br"),
                          _vm._v(" "),
                          _c("vs-textarea", {
                            attrs: {
                              name: "remarks",
                              "data-vv-as": "Remarks",
                              counter: 50,
                              label: "Remarks",
                              "data-vv-scope": "editform"
                            },
                            model: {
                              value: _vm.edit_remarks,
                              callback: function($$v) {
                                _vm.edit_remarks = $$v
                              },
                              expression: "edit_remarks"
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
                                  value: _vm.errors.has("editform.remarks"),
                                  expression: "errors.has('editform.remarks')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("editform.remarks"))
                              )
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
                        [_vm._v("Add Tax Parameter")]
                      )
                    ],
                    1
                  )
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
                ],
                1
              )
            ],
<<<<<<< HEAD
            2
          )
        ],
        1
=======
            1
          )
        ]
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
=======
        1
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
      )
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
/***/ "./resources/js/src/views/pages/Purchases/PendingPurchases.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/src/views/pages/Purchases/PendingPurchases.vue ***!
  \*********************************************************************/
<<<<<<< HEAD
=======
/***/ "./resources/js/src/views/pages/TaxParameters.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/views/pages/TaxParameters.vue ***!
  \********************************************************/
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
/* harmony import */ var _PendingPurchases_vue_vue_type_template_id_93401ce6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PendingPurchases.vue?vue&type=template&id=93401ce6& */ "./resources/js/src/views/pages/Purchases/PendingPurchases.vue?vue&type=template&id=93401ce6&");
/* harmony import */ var _PendingPurchases_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PendingPurchases.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Purchases/PendingPurchases.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PendingPurchases_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PendingPurchases.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/pages/Purchases/PendingPurchases.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
<<<<<<< HEAD
=======
/* harmony import */ var _TaxParameters_vue_vue_type_template_id_906c72a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaxParameters.vue?vue&type=template&id=906c72a0& */ "./resources/js/src/views/pages/TaxParameters.vue?vue&type=template&id=906c72a0&");
/* harmony import */ var _TaxParameters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaxParameters.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/TaxParameters.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TaxParameters_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TaxParameters.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/pages/TaxParameters.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
<<<<<<< HEAD
<<<<<<< HEAD
  _PendingPurchases_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PendingPurchases_vue_vue_type_template_id_93401ce6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PendingPurchases_vue_vue_type_template_id_93401ce6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
=======
  _TaxParameters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TaxParameters_vue_vue_type_template_id_906c72a0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TaxParameters_vue_vue_type_template_id_906c72a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
=======
  _PendingPurchases_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PendingPurchases_vue_vue_type_template_id_93401ce6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PendingPurchases_vue_vue_type_template_id_93401ce6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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
component.options.__file = "resources/js/src/views/pages/Purchases/PendingPurchases.vue"
=======
component.options.__file = "resources/js/src/views/pages/TaxParameters.vue"
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
=======
component.options.__file = "resources/js/src/views/pages/Purchases/PendingPurchases.vue"
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0
/***/ "./resources/js/src/views/pages/Purchases/PendingPurchases.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Purchases/PendingPurchases.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
<<<<<<< HEAD
=======
/***/ "./resources/js/src/views/pages/TaxParameters.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/pages/TaxParameters.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
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
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PendingPurchases_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PendingPurchases.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Purchases/PendingPurchases.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PendingPurchases_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Purchases/PendingPurchases.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Purchases/PendingPurchases.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************/
<<<<<<< HEAD
=======
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxParameters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TaxParameters.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/TaxParameters.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxParameters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/TaxParameters.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/pages/TaxParameters.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************/
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
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PendingPurchases_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PendingPurchases.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Purchases/PendingPurchases.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PendingPurchases_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PendingPurchases_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PendingPurchases_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PendingPurchases_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PendingPurchases_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/Purchases/PendingPurchases.vue?vue&type=template&id=93401ce6&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Purchases/PendingPurchases.vue?vue&type=template&id=93401ce6& ***!
  \****************************************************************************************************/
<<<<<<< HEAD
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
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PendingPurchases_vue_vue_type_template_id_93401ce6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PendingPurchases.vue?vue&type=template&id=93401ce6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Purchases/PendingPurchases.vue?vue&type=template&id=93401ce6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PendingPurchases_vue_vue_type_template_id_93401ce6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PendingPurchases_vue_vue_type_template_id_93401ce6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
<<<<<<< HEAD
=======
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxParameters_vue_vue_type_template_id_906c72a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TaxParameters.vue?vue&type=template&id=906c72a0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/TaxParameters.vue?vue&type=template&id=906c72a0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxParameters_vue_vue_type_template_id_906c72a0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxParameters_vue_vue_type_template_id_906c72a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
=======
>>>>>>> 44cc622efc8b861d51ebae73166ed7aa22363cd0



/***/ })

}]);