(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Admins.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Admins.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
=======
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Companies/AddCustomerTableView.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Companies/AddCustomerTableView.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  inject: ['generatePassword'],
  data: function data() {
    return {
      addAdminModal: false,
      editAdminModal: false,
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      address: "",
      state: "",
      zip_code: "",
      city: "",
      gender: "male",
      password: "",
      edit_first_name: "",
      edit_last_name: "",
      edit_email: "",
      edit_phone: "",
      edit_address: "",
      edit_state: "",
      edit_zip_code: "",
      edit_city: "",
      edit_gender: "male",
      edit_password: "",
      edit_manager_id: '',
      defaultRole: 0,
      selectedRole: 0,
      supervisor: '',
      selectedSupervisor: '',
      rolles: [{
        value: 0,
        label: 'Select Role',
        selectedText: 'Select Role',
        isSelected: false
      }, {
        value: 4,
        label: 'Admin',
        selectedText: 'Admin',
        isSelected: false
      }, {
        value: 2,
        label: 'Supervisor',
        selectedText: 'Supervisor',
        isSelected: false
      }, {
        value: 3,
        label: 'Officer',
        selectedText: 'Officer',
        isSelected: false
      }]
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('admins/', ['admins']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('admins/', ['findAdmin', 'findSupervisors']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('supervisors/', ['supervisors'])),
  created: function created() {
    var self = this;
    this.getAdmins().then(function () {});
    this.getSupervisors();
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    getAdmins: 'admins/getAdmins',
    submit: 'admins/addAdmin',
    update: 'admins/updateAdmin',
    updateStatus: 'admins/updateStatus',
    getSupervisors: 'supervisors/getSupervisors'
  }), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])({
    setSupervisors: 'supervisors/setSupervisors'
  }), {
    reportsTo: function reportsTo(_reportsTo) {
      if (_reportsTo != null) {
        return _reportsTo.full_name;
      } else {
        return 'N/A';
      }
    },
    addAdmin: function addAdmin(e) {
      var _this = this;

      var self = this;
      this.$validator.validateAll('addform').then(function (result) {
        if (result) {
          var fd = new FormData(_this.$refs.addAdminForm);
          fd.append('gender', _this.gender);

          if (_this.defaultRole == 3) {
            fd.append('reports_to', _this.supervisor);
          } else {
            fd.append('reports_to', localStorage.getItem('admin'));
          }

          _this.submit(fd).then(function (res) {
            // console.log(res.data);
            if (res.data.status == 'success') {
              _this.password = _this.email = _this.first_name = _this.last_name = _this.zip_code = _this.city = _this.state = _this.address = _this.phone = '';
              _this.gender = 'male';
              _this.selectedRole = 0;
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
var multiUploads = function multiUploads() {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! @/components/MultiUploads.vue */ "./resources/js/src/components/MultiUploads.vue"));
};


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      lang: 'english',
      multipleUploadPopup: false,
      customField: [],
      name_khmer: '',
      name_eng: '',
      tax_id: '',
      tin_num: '',
      incorporation_date: '',
      address: '',
      street: '',
      group: '',
      village: '',
      sangkat: '',
      district: '',
      province: '',
      muncipality: '',
      tel: '',
      email: '',
      industry: '',
      taxDurationSelected: 'Monthly Tax',
      taxDuration: [{
        text: 'Monthly Tax',
        value: 'Monthly Tax'
      }, {
        text: 'Annual Tax ',
        value: 'Annual Tax'
      }],
      manager: '',
      createdby: ''
    };
  },
  inject: ['loginUser'],
  created: function created() {
    if (this.$store.getters.userType == 'Supervisor') {
      this.getMyOfficers(localStorage.getItem('admin'));
    }

    this.manager = this.$store.getters.userType == 'Officer' ? localStorage.getItem('admin') : '';
    this.createdby = localStorage.getItem('admin');
  },
  watch: {},
  components: {
    multiUploads: multiUploads
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('customers/', ['customers']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('officers/', ['myOfficers']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('customers/', ['findCustomer'])),
  methods: _objectSpread({
    onChangeWorker: function onChangeWorker(manager_id) {
      // alert(manager_id)
      this.manager = manager_id;
    },
    showUploader: function showUploader() {
      this.$refs.multiUploads.isShown = true;
    },
    successMultipleUpload: function successMultipleUpload(res) {
      this.$vs.notify({
        color: 'success',
        text: res.msg,
        position: 'right-top',
        fixed: true
      });
      this.$refs.multiUploads.isShown = false;
    },
    hasError: function hasError(res) {
      this.$vs.notify({
        color: 'danger',
        text: res.msg,
        position: 'right-top',
        fixed: true
      });
    },
    addMoreFeild: function addMoreFeild() {
      this.customField.push({
        name: 'additional_field[]',
        value: '',
        type: 'text'
      });
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    submit: 'customers/addCustomer',
    getMyOfficers: 'officers/getMyOfficers'
  }), {
    addCustomer: function addCustomer(e) {
      var _this = this;

      this.$validator.validateAll().then(function (result) {
        if (result) {
          _this.$vs.loading();

          var fd = new FormData(_this.$refs.addCustomer);
          fd.append('manager', _this.manager);
          _this.createdBy = _this.$store.getters.userType != 'Officer' ? localStorage.getItem('admin') : _this.manager;
          fd.append('created_by', _this.createdBy);

          _this.submit(fd).then(function (res) {
            if (res.data.status == 'success') {
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee
              e.target.reset();

              _this.errors.clear();

<<<<<<< HEAD
              _this.$validator.reset();

              _this.addAdminModal = false;

              _this.getAdmins().then(function () {
                var findSupervisors = self.findSupervisors();
                self.setSupervisors(findSupervisors);
              });

              _this.$vs.notify({
                color: 'success',
                position: 'right-top',
                text: 'New manager added successfully'
              });
            } else {
              _this.$vs.notify({
                color: 'danger',
                position: 'right-top',
                text: res.data.msg
              });
            }
          });
        }
      });
    },
    statusUpdate: function statusUpdate(id) {
      this.$vs.loading();
      var data = {
        id: id,
        notify: this.$vs.notify,
        closeLoader: this.$vs.loading.close
      };
      this.updateStatus(data);
    },
    editAdmin: function editAdmin(id) {
      var admin = this.findAdmin(id);
      this.edit_manager_id = admin.manager_id;
      this.edit_first_name = admin.first_name;
      this.edit_last_name = admin.last_name;
      this.edit_email = admin.email;
      this.edit_gender = admin.gender; // console.log(this.edit_gender)

      this.edit_zip_code = admin.zip_code;
      this.edit_address = admin.address;
      this.edit_phone = admin.phone;
      this.edit_state = admin.state;
      this.edit_zip_code = admin.zip_code;
      this.edit_city = admin.city;

      if (admin.type == 'Admin') {
        this.selectedRole = 1;
      }

      if (admin.type == 'Supervisor') {
        this.selectedRole = 2;
      }

      if (admin.type == 'Officer') {
        this.selectedRole = 3;
        this.selectedSupervisor = admin.reports_to || 0;
      }

      this.editAdminModal = true;
    },
    updateAdmin: function updateAdmin(e) {
      var _this2 = this;

      this.$validator.validateAll('editform').then(function (result) {
        if (result) {
          _this2.$vs.loading();

          var fd = new FormData(_this2.$refs.editAdminForm);
          fd.append('gender', _this2.edit_gender);

          if (_this2.selectedRole == 3) {
            fd.append('reports_to', _this2.selectedSupervisor);
          } else {
            fd.append('reports_to', localStorage.getItem('admin'));
          }

          _this2.update(fd).then(function (res) {
            // console.log(res.data);
            if (res.data.status == 'success') {
              _this2.edit_email = _this2.edit_first_name = _this2.edit_last_name = _this2.edit_zip_code = _this2.edit_city = _this2.edit_state = _this2.edit_address = _this2.edit_phone = '';
              _this2.edit_gender = 'male';
              e.target.reset();

              _this2.errors.clear();

              _this2.editAdminModal = false;

              _this2.$vs.notify({
                title: 'Updated!...',
                text: 'Admin record updated',
                color: 'success',
                position: 'top-right'
              });

              _this2.$vs.loading.close(); // this.getAdmins();

=======
              _this.taxDurationSelected = 'Monthly';

              _this.$vs.notify({
                title: 'Success',
                text: 'Customer Added Successfully',
                color: 'success',
                position: 'top-right'
              });

              _this.$vs.loading.close();
            }

            if (res.data.status == 'error') {
              _this.$vs.notify({
                title: 'Success',
                text: res.data.msg,
                color: 'success',
                position: 'top-right'
              });
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee
            }
          });
        }
      });
<<<<<<< HEAD
    },
    makePassword: function makePassword() {
      this.password = this.generatePassword();
=======
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee
    }
  })
});

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Admins.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Admins.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
=======
/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Companies/AddCustomerTableView.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Companies/AddCustomerTableView.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee
// imports


// module
<<<<<<< HEAD
exports.push([module.i, ".selectExample {\n  margin-top: 10px;\n}\n.con-select {\n  width: 100% !important;\n  clear: both;\n}\n.con-select .vs-select--input {\n  margin-top: 10px !important;\n}\r\n\r\n", ""]);
=======
exports.push([module.i, "#add_customer_table th .sort-th, th .vs-table-text {\n  width: 250px !important;\n}\n#add_customer_table  .vs-input--input.normal {\n  margin-bottom: 30px !important;\n}\n", ""]);
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee

// exports


/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Admins.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Admins.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Companies/AddCustomerTableView.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Companies/AddCustomerTableView.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


<<<<<<< HEAD
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Admins.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Admins.vue?vue&type=style&index=0&lang=css&");
=======
var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddCustomerTableView.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Companies/AddCustomerTableView.vue?vue&type=style&index=0&lang=css&");
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

<<<<<<< HEAD
var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);
=======
var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Admins.vue?vue&type=template&id=51444659&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Admins.vue?vue&type=template&id=51444659& ***!
  \**************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Companies/AddCustomerTableView.vue?vue&type=template&id=e3942646&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Companies/AddCustomerTableView.vue?vue&type=template&id=e3942646& ***!
  \**************************************************************************************************************************************************************************************************************************************/
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee
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
        { attrs: { title: "List of Team Members" } },
=======
        {
          attrs: {
            title: "Add Customer",
            subtitle:
              "Add Information Of Customer OR company which tax will be managed by system",
            noShadow: "",
            noRadius: ""
          }
        },
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee
        [
          _c(
            "template",
            { slot: "actions" },
            [
<<<<<<< HEAD
              _c("vs-button", {
                attrs: {
                  type: "border",
                  href: { url: "export-team-members" },
                  "icon-pack": "feather",
                  icon: "icon-download"
                }
              }),
              _vm._v(" "),
              _c("vs-button", {
                attrs: {
                  type: "border",
                  "icon-pack": "feather",
                  icon: "icon-plus"
                },
                on: {
                  click: function($event) {
                    _vm.addAdminModal = true
                  }
                }
              })
=======
              _c(
                "vs-button",
                {
                  staticClass: "mt-5",
                  attrs: { type: "gradient", button: "button" },
                  on: {
                    click: function($event) {
                      return _vm.showUploader()
                    }
                  }
                },
                [_vm._v("Upload Excel Sheet")]
              )
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee
            ],
            1
          ),
          _vm._v(" "),
          _c(
<<<<<<< HEAD
            "vs-table",
            {
              attrs: {
                search: "",
                pagination: "",
                "max-items": "6",
                data: _vm.admins
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
                            { attrs: { data: _vm.reportsTo(tr.reporting_to) } },
                            [_vm._v(_vm._s(_vm.reportsTo(tr.reporting_to)))]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            {
                              attrs: {
                                data:
                                  tr.type == 4
                                    ? "Sub Admin"
                                    : tr.type == 2
                                    ? "Supervisor"
                                    : "Officer"
                              }
                            },
                            [_vm._v(_vm._s(tr.type))]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            { attrs: { data: tr.status } },
                            [
                              _c("vs-switch", {
                                on: {
                                  click: function($event) {
                                    return _vm.statusUpdate(tr.manager_id)
                                  }
                                },
                                model: {
                                  value: tr.status == 1 ? true : false,
                                  callback: function($$v) {
                                    _vm.$set(tr, "status== 1?true:false", $$v)
                                  },
                                  expression: "tr.status== 1?true:false"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            [
                              _c("vs-button", {
                                attrs: {
                                  size: "small",
                                  type: "border",
                                  "icon-pack": "feather",
                                  icon: "icon-edit-2"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.editAdmin(tr.id)
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("vs-button", {
                                attrs: {
                                  size: "small",
                                  type: "border",
                                  to: "/member-detail/" + tr.manager_id,
                                  "icon-pack": "feather",
                                  icon: "icon-maximize-2"
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
                { slot: "thead" },
                [
                  _c("vs-th", [_vm._v("Name")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Phone #")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Email")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Reports To")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Role")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Status")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Actions")])
=======
            "vs-row",
            [
              _c(
                "vs-col",
                {
                  attrs: {
                    "vs-lg": "6",
                    "vs-md": "6",
                    "vs-sm": "12",
                    "vs-xs": "12"
                  }
                },
                [
                  _c(
                    "vs-button",
                    {
                      staticStyle: { width: "100%" },
                      attrs: { color: "primary", type: "border" },
                      on: {
                        click: function($event) {
                          _vm.lang = "english"
                        }
                      }
                    },
                    [_vm._v("English")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "vs-col",
                {
                  attrs: {
                    "vs-lg": "6",
                    "vs-md": "6",
                    "vs-sm": "12",
                    "vs-xs": "12"
                  }
                },
                [
                  _c(
                    "vs-button",
                    {
                      staticStyle: { width: "100%" },
                      attrs: { color: "primary", type: "border" },
                      on: {
                        click: function($event) {
                          _vm.lang = "khmer"
                        }
                      }
                    },
                    [_vm._v("Khmer")]
                  )
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee
                ],
                1
              )
            ],
<<<<<<< HEAD
            2
          )
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "vs-popup",
        {
          attrs: { active: _vm.addAdminModal, title: "Add New Member" },
          on: {
            "update:active": function($event) {
              _vm.addAdminModal = $event
            }
          }
        },
        [
          _c(
            "form",
            {
              ref: "addAdminForm",
              attrs: { "data-vv-scope": "addform" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.addAdmin($event)
=======
            1
          ),
          _vm._v(" "),
          _c(
            "form",
            {
              ref: "addCustomer",
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.addCustomer($event)
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee
                }
              }
            },
            [
              _c(
                "vs-row",
                [
                  _c(
                    "vs-col",
<<<<<<< HEAD
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
                              name: "first_name",
                              "label-placeholder": "First Name",
                              "data-vv-scope": "addform"
                            },
                            model: {
                              value: _vm.first_name,
                              callback: function($$v) {
                                _vm.first_name = $$v
                              },
                              expression: "first_name"
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
                                  value: _vm.errors.has("addform.first_name"),
                                  expression: "errors.has('addform.first_name')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("addform.first_name"))
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
                              name: "last_name",
                              "label-placeholder": "Last Name",
                              "data-vv-scope": "addform"
                            },
                            model: {
                              value: _vm.last_name,
                              callback: function($$v) {
                                _vm.last_name = $$v
                              },
                              expression: "last_name"
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
                                  value: _vm.errors.has("addform.last_name"),
                                  expression: "errors.has('addform.last_name')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("addform.last_name"))
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
                              name: "phone",
                              "label-placeholder": "Phone",
                              "data-vv-scope": "addform"
                            },
                            model: {
                              value: _vm.phone,
                              callback: function($$v) {
                                _vm.phone = $$v
                              },
                              expression: "phone"
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
                                  value: _vm.errors.has("addform.phone"),
                                  expression: "errors.has('addform.phone')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [_vm._v(_vm._s(_vm.errors.first("addform.phone")))]
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
                              name: "email",
                              "label-placeholder": "Email",
                              "data-vv-scope": "addform"
                            },
                            model: {
                              value: _vm.email,
                              callback: function($$v) {
                                _vm.email = $$v
                              },
                              expression: "email"
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
                                  value: _vm.errors.has("addform.email"),
                                  expression: "errors.has('addform.email')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [_vm._v(_vm._s(_vm.errors.first("addform.email")))]
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
                                value: "required",
                                expression: "'required'"
                              }
                            ],
                            attrs: {
                              name: "password",
                              "label-placeholder": "Password",
                              "data-vv-scope": "addform"
                            },
                            model: {
                              value: _vm.password,
                              callback: function($$v) {
                                _vm.password = $$v
                              },
                              expression: "password"
                            }
                          }),
                          _vm._v(" "),
                          _c("template", { slot: "append" }, [
                            _c(
                              "div",
                              { staticClass: "append-text btn-addon mt-4" },
                              [
                                _c(
                                  "vs-button",
                                  {
                                    attrs: {
                                      color: "primary",
                                      button: "button"
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.makePassword()
                                      }
                                    }
                                  },
                                  [_vm._v("Generate")]
                                )
                              ],
                              1
                            )
                          ])
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("addform.password"),
                              expression: "errors.has('addform.password')"
                            }
                          ],
                          staticClass: "text-danger"
                        },
                        [_vm._v(_vm._s(_vm.errors.first("addform.password")))]
                      ),
                      _vm._v(" "),
                      _c(
                        "vx-input-group",
                        [
                          _c(
                            "vs-select",
                            {
                              directives: [
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required|excluded:0",
                                  expression: "'required|excluded:0'"
                                }
                              ],
                              staticClass: "selectExample",
                              attrs: {
                                name: "roll",
                                "data-vv-scope": "addform"
                              },
                              model: {
                                value: _vm.defaultRole,
                                callback: function($$v) {
                                  _vm.defaultRole = $$v
                                },
                                expression: "defaultRole"
                              }
                            },
                            _vm._l(_vm.rolles, function(item, index) {
                              return _c("vs-select-item", {
                                key: index,
                                attrs: {
                                  disabled:
                                    !item.value == 1 &&
                                    _vm.$store.getters.userType == "Admin",
                                  "is-selected": item.isSelected,
                                  value: item.value,
                                  text: item.isSelected
                                    ? item.selectedText
                                    : item.label
                                },
                                on: {
                                  "update:isSelected": function($event) {
                                    return _vm.$set(item, "isSelected", $event)
                                  },
                                  "update:is-selected": function($event) {
                                    return _vm.$set(item, "isSelected", $event)
                                  }
                                }
                              })
                            }),
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
                                  value: _vm.errors.has("addform.roll"),
                                  expression: "errors.has('addform.roll')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [_vm._v(_vm._s(_vm.errors.first("addform.roll")))]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.defaultRole == 3
                        ? _c(
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
                                    name: "supervisor",
                                    label: "Supervisor"
                                  },
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
                                    attrs: {
                                      value: "",
                                      text: "Select Supervisor"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _vm._l(_vm.supervisors, function(
                                    item,
                                    index
                                  ) {
                                    return _c("vs-select-item", {
                                      key: index,
                                      attrs: {
                                        value: item.manager_id,
                                        text:
                                          item.first_name + " " + item.last_name
                                      }
                                    })
                                  })
                                ],
                                2
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
                                        "addform.supervisor"
                                      ),
                                      expression:
                                        "errors.has('addform.supervisor')"
                                    }
                                  ],
                                  staticClass: "text-danger"
                                },
                                [_vm._v(_vm._s(_vm.errors.first("supervisor")))]
                              )
                            ],
                            1
                          )
                        : _vm._e()
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
                        { staticClass: "mt-6" },
                        [
                          _c(
                            "vs-radio",
                            {
                              attrs: {
                                "vs-name": "gender",
                                "vs-value": "male"
                              },
                              model: {
                                value: _vm.gender,
                                callback: function($$v) {
                                  _vm.gender = $$v
                                },
                                expression: "gender"
                              }
                            },
                            [_vm._v("Male")]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-radio",
                            {
                              attrs: {
                                "vs-name": "gender",
                                "vs-value": "female"
                              },
                              model: {
                                value: _vm.gender,
                                callback: function($$v) {
                                  _vm.gender = $$v
                                },
                                expression: "gender"
                              }
                            },
                            [_vm._v("Female")]
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
                              name: "address",
                              "label-placeholder": "Address",
                              "data-vv-scope": "addform"
                            },
                            model: {
                              value: _vm.address,
                              callback: function($$v) {
                                _vm.address = $$v
                              },
                              expression: "address"
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
                                  value: _vm.errors.has("addform.address"),
                                  expression: "errors.has('addform.address')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("addform.address"))
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
                              name: "state",
                              "label-placeholder": "State",
                              "data-vv-scope": "addform"
                            },
                            model: {
                              value: _vm.state,
                              callback: function($$v) {
                                _vm.state = $$v
                              },
                              expression: "state"
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
                                  value: _vm.errors.has("addform.state"),
                                  expression: "errors.has('addform.state')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [_vm._v(_vm._s(_vm.errors.first("addform.state")))]
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
                              name: "city",
                              "label-placeholder": "City",
                              "data-vv-scope": "addform"
                            },
                            model: {
                              value: _vm.city,
                              callback: function($$v) {
                                _vm.city = $$v
                              },
                              expression: "city"
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
                                  value: _vm.errors.has("addform.city"),
                                  expression: "errors.has('addform.city')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [_vm._v(_vm._s(_vm.errors.first("addform.city")))]
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
                              name: "zip_code",
                              "label-placeholder": "Zip Code",
                              "data-vv-scope": "addform"
                            },
                            model: {
                              value: _vm.zip_code,
                              callback: function($$v) {
                                _vm.zip_code = $$v
                              },
                              expression: "zip_code"
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
                                  value: _vm.errors.has("addform.zip_code"),
                                  expression: "errors.has('addform.zip_code')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("addform.zip_code"))
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
                        [_vm._v("Add Member")]
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
          attrs: { active: _vm.editAdminModal, title: "Update Member" },
          on: {
            "update:active": function($event) {
              _vm.editAdminModal = $event
            }
          }
        },
        [
          _c(
            "form",
            {
              ref: "editAdminForm",
              attrs: { autocomplete: "off", "data-vv-scope": "editform" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.updateAdmin($event)
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
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.edit_manager_id,
                                expression: "edit_manager_id"
                              }
                            ],
                            attrs: {
                              type: "hidden",
                              name: "id",
                              "data-vv-scope": "editform"
                            },
                            domProps: { value: _vm.edit_manager_id },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.edit_manager_id = $event.target.value
                              }
                            }
                          }),
                          _vm._v(" "),
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
                              name: "first_name",
                              "label-placeholder": "First Name",
                              "data-vv-scope": "editform"
                            },
                            model: {
                              value: _vm.edit_first_name,
                              callback: function($$v) {
                                _vm.edit_first_name = $$v
                              },
                              expression: "edit_first_name"
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
                                  value: _vm.errors.has("editform.first_name"),
                                  expression:
                                    "errors.has('editform.first_name')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("editform.first_name"))
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
                              name: "last_name",
                              "label-placeholder": "Last Name",
                              "data-vv-scope": "editform"
                            },
                            model: {
                              value: _vm.edit_last_name,
                              callback: function($$v) {
                                _vm.edit_last_name = $$v
                              },
                              expression: "edit_last_name"
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
                                  value: _vm.errors.has("editform.last_name"),
                                  expression: "errors.has('editform.last_name')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("editform.last_name"))
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
                              name: "phone",
                              "label-placeholder": "Phone",
                              "data-vv-scope": "editform"
                            },
                            model: {
                              value: _vm.edit_phone,
                              callback: function($$v) {
                                _vm.edit_phone = $$v
                              },
                              expression: "edit_phone"
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
                                  value: _vm.errors.has("editform.phone"),
                                  expression: "errors.has('editform.phone')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [_vm._v(_vm._s(_vm.errors.first("editform.phone")))]
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
                              readonly: "",
                              name: "email",
                              "label-placeholder": "Email",
                              "ata-vv-scope": "editform",
                              "data-vv-scope": "editform"
                            },
                            model: {
                              value: _vm.edit_email,
                              callback: function($$v) {
                                _vm.edit_email = $$v
                              },
                              expression: "edit_email"
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
                                  value: _vm.errors.has("editform.email"),
                                  expression: "errors.has('editform.email')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [_vm._v(_vm._s(_vm.errors.first("editform.email")))]
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
                              name: "address",
                              "label-placeholder": "Address",
                              "data-vv-scope": "editform"
                            },
                            model: {
                              value: _vm.edit_address,
                              callback: function($$v) {
                                _vm.edit_address = $$v
                              },
                              expression: "edit_address"
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
                                  value: _vm.errors.has("editform.address"),
                                  expression: "errors.has('editform.address')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("editform.address"))
                              )
                            ]
                          )
                        ],
                        1
=======
                    [
                      _c(
                        "vs-table",
                        {
                          attrs: {
                            stripe: "",
                            id: "add_customer_table",
                            noDataText: ""
                          }
                        },
                        [
                          _c(
                            "template",
                            { slot: "thead" },
                            [
                              _vm.$store.getters.userType == "Supervisor"
                                ? _c("vs-th", [_vm._v("List Of Officers")])
                                : _vm._e(),
                              _vm._v(" "),
                              _c("vs-th", [
                                _vm._v(
                                  _vm._s(
                                    _vm.lang == "english"
                                      ? "Name (English)"
                                      : "ឈ្មោះ (អង់គ្លេស)"
                                  )
                                )
                              ]),
                              _vm._v(" "),
                              _c("vs-th", [
                                _vm._v(
                                  _vm._s(
                                    _vm.lang == "english"
                                      ? "Name (Khmer)"
                                      : "ឈ្មោះ (ខ្មែរ)"
                                  )
                                )
                              ]),
                              _vm._v(" "),
                              _c("vs-th", [
                                _vm._v(
                                  _vm._s(
                                    _vm.lang == "english"
                                      ? "Tax ID Card #"
                                      : "អត្តសញ្ញាណប័ណ្ណពន្ធ #"
                                  )
                                )
                              ]),
                              _vm._v(" "),
                              _c("vs-th", [
                                _vm._v(
                                  _vm._s(
                                    _vm.lang == "english" ? "TIN #" : "ធីន #"
                                  )
                                )
                              ]),
                              _vm._v(" "),
                              _c("vs-th", [
                                _vm._v(
                                  _vm._s(
                                    _vm.lang == "english"
                                      ? "Date of company incorporated"
                                      : "កាលបរិច្ឆេទនៃការបញ្ចូលក្រុមហ៊ុន"
                                  )
                                )
                              ]),
                              _vm._v(" "),
                              _c("vs-th", [
                                _vm._v(
                                  _vm._s(
                                    _vm.lang == "english"
                                      ? "Address"
                                      : "អាសយដ្ឋាន"
                                  )
                                )
                              ]),
                              _vm._v(" "),
                              _c("vs-th", [
                                _vm._v(
                                  _vm._s(
                                    _vm.lang == "english" ? "Street" : "ផ្លូវ"
                                  )
                                )
                              ]),
                              _vm._v(" "),
                              _c("vs-th", [
                                _vm._v(
                                  _vm._s(
                                    _vm.lang == "english" ? "Group" : "ក្រុម"
                                  )
                                )
                              ]),
                              _vm._v(" "),
                              _c("vs-th", [
                                _vm._v(
                                  _vm._s(
                                    _vm.lang == "english" ? "Village" : "ភូមិ"
                                  )
                                )
                              ]),
                              _vm._v(" "),
                              _c("vs-th", [
                                _vm._v(
                                  _vm._s(
                                    _vm.lang == "english"
                                      ? "Sangkat"
                                      : "វិបត្តិ"
                                  )
                                )
                              ]),
                              _vm._v(" "),
                              _c("vs-th", [
                                _vm._v(
                                  _vm._s(
                                    _vm.lang == "english" ? "District" : "ស្រុក"
                                  )
                                )
                              ]),
                              _vm._v(" "),
                              _c("vs-th", [
                                _vm._v(
                                  _vm._s(
                                    _vm.lang == "english" ? "Province" : "ខេត្ត"
                                  )
                                )
                              ]),
                              _vm._v(" "),
                              _c("vs-th", [
                                _vm._v(
                                  _vm._s(
                                    _vm.lang == "english"
                                      ? "Muncipality"
                                      : "ក្រុង"
                                  )
                                )
                              ]),
                              _vm._v(" "),
                              _c("vs-th", [
                                _vm._v(
                                  _vm._s(
                                    _vm.lang == "english" ? "Tel." : "ទូរស័ព្ទ"
                                  )
                                )
                              ]),
                              _vm._v(" "),
                              _c("vs-th", [
                                _vm._v(
                                  _vm._s(
                                    _vm.lang == "english" ? "Email" : "អ៊ីមែល"
                                  )
                                )
                              ]),
                              _vm._v(" "),
                              _c("vs-th", [
                                _vm._v(
                                  _vm._s(
                                    _vm.lang == "english"
                                      ? "Industry / Sector"
                                      : "ឧស្សាហកម្ម / វិស័យ"
                                  )
                                )
                              ]),
                              _vm._v(" "),
                              _vm._l(_vm.customField, function(field, indextr) {
                                return _c("vs-th", { key: _vm.index }, [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(
                                        _vm.lang == "english"
                                          ? "Custom Field "
                                          : "វាលផ្ទាល់ខ្លួន " + indextr + 1
                                      ) +
                                      "\n                            "
                                  )
                                ])
                              }),
                              _vm._v(" "),
                              _c(
                                "vs-th",
                                [
                                  _c(
                                    "vs-button",
                                    {
                                      staticClass: "mt-5",
                                      staticStyle: { width: "250px" },
                                      attrs: {
                                        type: "gradient",
                                        button: "button"
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.addMoreFeild()
                                        }
                                      }
                                    },
                                    [_vm._v("Add More Custom Fields")]
                                  )
                                ],
                                1
                              )
                            ],
                            2
                          ),
                          _vm._v(" "),
                          [
                            _c(
                              "vs-tr",
                              [
                                _vm.$store.getters.userType == "Supervisor"
                                  ? _c(
                                      "vs-td",
                                      [
                                        _c(
                                          "vx-input-group",
                                          [
                                            _c(
                                              "vs-select",
                                              {
                                                attrs: {
                                                  placeholder:
                                                    "Select officer who work"
                                                },
                                                model: {
                                                  value: _vm.manager,
                                                  callback: function($$v) {
                                                    _vm.manager = $$v
                                                  },
                                                  expression: "manager"
                                                }
                                              },
                                              _vm._l(_vm.myOfficers, function(
                                                officer,
                                                index
                                              ) {
                                                return _c("vs-select-item", {
                                                  key: index,
                                                  attrs: {
                                                    text: officer.full_name,
                                                    value: officer.manager_id
                                                  }
                                                })
                                              }),
                                              1
                                            )
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
                                                  "name_eng"
                                                ),
                                                expression:
                                                  "errors.has('name_eng')"
                                              }
                                            ],
                                            staticClass: "text-danger"
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.errors.first("name_eng")
                                              )
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _c(
                                  "vs-td",
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
                                              expression: "`required`"
                                            }
                                          ],
                                          attrs: { name: "name_eng" },
                                          model: {
                                            value: _vm.name_eng,
                                            callback: function($$v) {
                                              _vm.name_eng = $$v
                                            },
                                            expression: "name_eng"
                                          }
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
                                            value: _vm.errors.has("name_eng"),
                                            expression: "errors.has('name_eng')"
                                          }
                                        ],
                                        staticClass: "text-danger"
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.errors.first("name_eng"))
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "vs-td",
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
                                              expression: "`required`"
                                            }
                                          ],
                                          attrs: { name: "name_khmer" },
                                          model: {
                                            value: _vm.name_khmer,
                                            callback: function($$v) {
                                              _vm.name_khmer = $$v
                                            },
                                            expression: "name_khmer"
                                          }
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
                                            value: _vm.errors.has("name_khmer"),
                                            expression:
                                              "errors.has('name_khmer')"
                                          }
                                        ],
                                        staticClass: "text-danger"
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.errors.first("name_khmer"))
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "vs-td",
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
                                              expression: "`required`"
                                            }
                                          ],
                                          attrs: { name: "tax_id" },
                                          model: {
                                            value: _vm.tax_id,
                                            callback: function($$v) {
                                              _vm.tax_id = $$v
                                            },
                                            expression: "tax_id"
                                          }
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
                                            value: _vm.errors.has("tax_id"),
                                            expression: "errors.has('tax_id')"
                                          }
                                        ],
                                        staticClass: "text-danger"
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.errors.first("tax_id"))
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "vs-td",
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
                                              expression: "`required`"
                                            }
                                          ],
                                          attrs: { name: "tin_num" },
                                          model: {
                                            value: _vm.tin_num,
                                            callback: function($$v) {
                                              _vm.tin_num = $$v
                                            },
                                            expression: "tin_num"
                                          }
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
                                            value: _vm.errors.has("tin_num"),
                                            expression: "errors.has('tin_num')"
                                          }
                                        ],
                                        staticClass: "text-danger"
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.errors.first("tin_num"))
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "vs-td",
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
                                              expression: "`required`"
                                            }
                                          ],
                                          attrs: { name: "incorporation_date" },
                                          model: {
                                            value: _vm.incorporation_date,
                                            callback: function($$v) {
                                              _vm.incorporation_date = $$v
                                            },
                                            expression: "incorporation_date"
                                          }
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
                                              "incorporation_date"
                                            ),
                                            expression:
                                              "errors.has('incorporation_date')"
                                          }
                                        ],
                                        staticClass: "text-danger"
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.errors.first(
                                              "incorporation_date"
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
                                  "vs-td",
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
                                              expression: "`required`"
                                            }
                                          ],
                                          attrs: { name: "address" },
                                          model: {
                                            value: _vm.address,
                                            callback: function($$v) {
                                              _vm.address = $$v
                                            },
                                            expression: "address"
                                          }
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
                                            value: _vm.errors.has("address"),
                                            expression: "errors.has('address')"
                                          }
                                        ],
                                        staticClass: "text-danger"
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.errors.first("address"))
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "vs-td",
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
                                              expression: "`required`"
                                            }
                                          ],
                                          attrs: { name: "street" },
                                          model: {
                                            value: _vm.street,
                                            callback: function($$v) {
                                              _vm.street = $$v
                                            },
                                            expression: "street"
                                          }
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
                                            value: _vm.errors.has("street"),
                                            expression: "errors.has('street')"
                                          }
                                        ],
                                        staticClass: "text-danger"
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.errors.first("street"))
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "vs-td",
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
                                              expression: "`required`"
                                            }
                                          ],
                                          attrs: { name: "group" },
                                          model: {
                                            value: _vm.group,
                                            callback: function($$v) {
                                              _vm.group = $$v
                                            },
                                            expression: "group"
                                          }
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
                                            value: _vm.errors.has("group"),
                                            expression: "errors.has('group')"
                                          }
                                        ],
                                        staticClass: "text-danger"
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.errors.first("group"))
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "vs-td",
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
                                              expression: "`required`"
                                            }
                                          ],
                                          attrs: { name: "village" },
                                          model: {
                                            value: _vm.village,
                                            callback: function($$v) {
                                              _vm.village = $$v
                                            },
                                            expression: "village"
                                          }
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
                                            value: _vm.errors.has("village"),
                                            expression: "errors.has('village')"
                                          }
                                        ],
                                        staticClass: "text-danger"
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.errors.first("village"))
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "vs-td",
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
                                              expression: "`required`"
                                            }
                                          ],
                                          attrs: { name: "sangkat" },
                                          model: {
                                            value: _vm.sangkat,
                                            callback: function($$v) {
                                              _vm.sangkat = $$v
                                            },
                                            expression: "sangkat"
                                          }
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
                                            value: _vm.errors.has("sangkat"),
                                            expression: "errors.has('sangkat')"
                                          }
                                        ],
                                        staticClass: "text-danger"
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.errors.first("sangkat"))
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "vs-td",
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
                                              expression: "`required`"
                                            }
                                          ],
                                          attrs: { name: "district" },
                                          model: {
                                            value: _vm.district,
                                            callback: function($$v) {
                                              _vm.district = $$v
                                            },
                                            expression: "district"
                                          }
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
                                            value: _vm.errors.has("district"),
                                            expression: "errors.has('district')"
                                          }
                                        ],
                                        staticClass: "text-danger"
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.errors.first("district"))
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "vs-td",
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
                                              expression: "`required`"
                                            }
                                          ],
                                          attrs: { name: "province" },
                                          model: {
                                            value: _vm.province,
                                            callback: function($$v) {
                                              _vm.province = $$v
                                            },
                                            expression: "province"
                                          }
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
                                            value: _vm.errors.has("province"),
                                            expression: "errors.has('province')"
                                          }
                                        ],
                                        staticClass: "text-danger"
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.errors.first("province"))
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "vs-td",
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
                                              expression: "`required`"
                                            }
                                          ],
                                          attrs: { name: "muncipality" },
                                          model: {
                                            value: _vm.muncipality,
                                            callback: function($$v) {
                                              _vm.muncipality = $$v
                                            },
                                            expression: "muncipality"
                                          }
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
                                              "muncipality"
                                            ),
                                            expression:
                                              "errors.has('muncipality')"
                                          }
                                        ],
                                        staticClass: "text-danger"
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.errors.first("muncipality")
                                          )
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "vs-td",
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
                                              expression: "`required`"
                                            }
                                          ],
                                          attrs: { name: "tel" },
                                          model: {
                                            value: _vm.tel,
                                            callback: function($$v) {
                                              _vm.tel = $$v
                                            },
                                            expression: "tel"
                                          }
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
                                            value: _vm.errors.has("tel"),
                                            expression: "errors.has('tel')"
                                          }
                                        ],
                                        staticClass: "text-danger"
                                      },
                                      [_vm._v(_vm._s(_vm.errors.first("tel")))]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "vs-td",
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
                                              expression: "`required`"
                                            }
                                          ],
                                          attrs: {
                                            name: "email",
                                            type: "email"
                                          },
                                          model: {
                                            value: _vm.email,
                                            callback: function($$v) {
                                              _vm.email = $$v
                                            },
                                            expression: "email"
                                          }
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
                                            value: _vm.errors.has("email"),
                                            expression: "errors.has('email')"
                                          }
                                        ],
                                        staticClass: "text-danger"
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.errors.first("email"))
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "vs-td",
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
                                              expression: "`required`"
                                            }
                                          ],
                                          attrs: { name: "industry" },
                                          model: {
                                            value: _vm.industry,
                                            callback: function($$v) {
                                              _vm.industry = $$v
                                            },
                                            expression: "industry"
                                          }
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
                                            value: _vm.errors.has("industry"),
                                            expression: "errors.has('industry')"
                                          }
                                        ],
                                        staticClass: "text-danger"
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.errors.first("industry"))
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _vm._l(_vm.customField, function(field, index) {
                                  return _c(
                                    "vs-td",
                                    { key: index },
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
                                                expression: "`required`"
                                              }
                                            ],
                                            attrs: {
                                              type: field.text,
                                              name: field.name
                                            },
                                            model: {
                                              value: field.value,
                                              callback: function($$v) {
                                                _vm.$set(field, "value", $$v)
                                              },
                                              expression: "field.value"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                }),
                                _vm._v(" "),
                                _c(
                                  "vs-td",
                                  [
                                    _c(
                                      "vx-input-group",
                                      [
                                        _c("vs-input", {
                                          attrs: { name: "", disabled: "" }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ],
                              2
                            )
                          ]
                        ],
                        2
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-col",
<<<<<<< HEAD
                    { attrs: { "vs-lg": "6", "vs-md": "12", "vs-sm": "12" } },
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
                          staticClass: "selectExample mt-2",
                          attrs: { name: "role" },
                          model: {
                            value: _vm.selectedRole,
                            callback: function($$v) {
                              _vm.selectedRole = $$v
                            },
                            expression: "selectedRole"
                          }
                        },
                        _vm._l(_vm.rolles, function(item, index) {
                          return _c("vs-select-item", {
                            key: index,
                            attrs: {
                              "is-selected": item.isSelected,
                              value: item.value,
                              text: item.isSelected
                                ? item.selectedText
                                : item.label
                            },
                            on: {
                              "update:isSelected": function($event) {
                                return _vm.$set(item, "isSelected", $event)
                              },
                              "update:is-selected": function($event) {
                                return _vm.$set(item, "isSelected", $event)
                              }
                            }
                          })
                        }),
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
                              value: _vm.errors.has("editform.role"),
                              expression: "errors.has('editform.role')"
                            }
                          ],
                          staticClass: "text-danger"
                        },
                        [_vm._v(_vm._s(_vm.errors.first("editform.role")))]
                      ),
                      _vm._v(" "),
                      _vm.selectedRole == 3
                        ? _c(
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
                                    name: "supervisor",
                                    label: "Supervisor"
                                  },
                                  model: {
                                    value: _vm.selectedSupervisor,
                                    callback: function($$v) {
                                      _vm.selectedSupervisor = $$v
                                    },
                                    expression: "selectedSupervisor"
                                  }
                                },
                                [
                                  _c("vs-select-item", {
                                    attrs: {
                                      value: "",
                                      text: "Select Supervisor"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _vm._l(_vm.supervisors, function(
                                    item,
                                    index
                                  ) {
                                    return _c("vs-select-item", {
                                      key: index,
                                      attrs: {
                                        value: item.manager_id,
                                        text:
                                          item.first_name + " " + item.last_name
                                      }
                                    })
                                  })
                                ],
                                2
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
                                        "editform.supervisor"
                                      ),
                                      expression:
                                        "errors.has('editform.supervisor')"
                                    }
                                  ],
                                  staticClass: "text-danger"
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm.errors.first("editform.supervisor")
                                    )
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "vx-input-group",
                        { staticClass: "mt-6" },
                        [
                          _c(
                            "vs-radio",
                            {
                              attrs: {
                                name: "edit_gender",
                                "vs-value": "male"
                              },
                              model: {
                                value: _vm.edit_gender,
                                callback: function($$v) {
                                  _vm.edit_gender = $$v
                                },
                                expression: "edit_gender"
                              }
                            },
                            [_vm._v("Male")]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-radio",
                            {
                              attrs: {
                                name: "edit_gender",
                                "vs-value": "female"
                              },
                              model: {
                                value: _vm.edit_gender,
                                callback: function($$v) {
                                  _vm.edit_gender = $$v
                                },
                                expression: "edit_gender"
                              }
                            },
                            [_vm._v("Female")]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vx-input-group",
                        { staticClass: "mt-5" },
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
                              name: "state",
                              "label-placeholder": "State",
                              "data-vv-scope": "editform"
                            },
                            model: {
                              value: _vm.edit_state,
                              callback: function($$v) {
                                _vm.edit_state = $$v
                              },
                              expression: "edit_state"
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
                                  value: _vm.errors.has("editform.state"),
                                  expression: "errors.has('editform.state')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [_vm._v(_vm._s(_vm.errors.first("editform.state")))]
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
                              name: "city",
                              "label-placeholder": "City",
                              "data-vv-scope": "editform"
                            },
                            model: {
                              value: _vm.edit_city,
                              callback: function($$v) {
                                _vm.edit_city = $$v
                              },
                              expression: "edit_city"
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
                                  value: _vm.errors.has("editform.city"),
                                  expression: "errors.has('editform.city')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [_vm._v(_vm._s(_vm.errors.first("editform.city")))]
=======
                    {
                      staticClass: "text-center",
                      attrs: { "vs-lg": "12", "vs-md": "12" }
                    },
                    [
                      _c(
                        "vs-col",
                        {
                          staticClass: "text-center",
                          attrs: { "vs-md": "12", "vs-lg": "12" }
                        },
                        [
                          _c(
                            "vs-button",
                            {
                              staticClass: "mt-5",
                              attrs: { button: "submit", type: "gradient" }
                            },
                            [_vm._v("Save")]
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
<<<<<<< HEAD
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
                              name: "zip_code",
                              "label-placeholder": "Zip Code",
                              "data-vv-scope": "editform"
                            },
                            model: {
                              value: _vm.edit_zip_code,
                              callback: function($$v) {
                                _vm.edit_zip_code = $$v
                              },
                              expression: "edit_zip_code"
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
                                  value: _vm.errors.has("editform.zip_code"),
                                  expression: "errors.has('editform.zip_code')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("editform.zip_code"))
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
                        [_vm._v("Update Member")]
                      )
=======
                      _c("vs-col", {
                        staticClass: "text-center",
                        attrs: { "vs-md": "12", "vs-lg": "12" }
                      })
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
<<<<<<< HEAD
        ]
      )
=======
        ],
        2
      ),
      _vm._v(" "),
      _c("multi-uploads", {
        ref: "multiUploads",
        attrs: {
          "calling-from": "add-customer",
          myOfficers: _vm.myOfficers,
          action:
            "add-multiple-customer?created_by=" +
            _vm.createdby +
            "&manager=" +
            _vm.manager,
          "sample-url": "./public/samples/company.xlsx",
          active: _vm.multipleUploadPopup
        },
        on: {
          "worker-changed": _vm.onChangeWorker,
          error: _vm.hasError,
          uploaded: _vm.successMultipleUpload
        }
      })
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/src/views/pages/Admins.vue":
/*!*************************************************!*\
  !*** ./resources/js/src/views/pages/Admins.vue ***!
  \*************************************************/
=======
/***/ "./resources/js/src/views/pages/Companies/AddCustomerTableView.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/pages/Companies/AddCustomerTableView.vue ***!
  \*************************************************************************/
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _Admins_vue_vue_type_template_id_51444659___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Admins.vue?vue&type=template&id=51444659& */ "./resources/js/src/views/pages/Admins.vue?vue&type=template&id=51444659&");
/* harmony import */ var _Admins_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Admins.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Admins.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Admins_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Admins.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/pages/Admins.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
=======
/* harmony import */ var _AddCustomerTableView_vue_vue_type_template_id_e3942646___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddCustomerTableView.vue?vue&type=template&id=e3942646& */ "./resources/js/src/views/pages/Companies/AddCustomerTableView.vue?vue&type=template&id=e3942646&");
/* harmony import */ var _AddCustomerTableView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddCustomerTableView.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Companies/AddCustomerTableView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AddCustomerTableView_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddCustomerTableView.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/pages/Companies/AddCustomerTableView.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
<<<<<<< HEAD
  _Admins_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Admins_vue_vue_type_template_id_51444659___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Admins_vue_vue_type_template_id_51444659___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
=======
  _AddCustomerTableView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddCustomerTableView_vue_vue_type_template_id_e3942646___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddCustomerTableView_vue_vue_type_template_id_e3942646___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
<<<<<<< HEAD
component.options.__file = "resources/js/src/views/pages/Admins.vue"
=======
component.options.__file = "resources/js/src/views/pages/Companies/AddCustomerTableView.vue"
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/src/views/pages/Admins.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/src/views/pages/Admins.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
=======
/***/ "./resources/js/src/views/pages/Companies/AddCustomerTableView.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Companies/AddCustomerTableView.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Admins_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Admins.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Admins.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Admins_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Admins.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/pages/Admins.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************/
=======
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCustomerTableView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddCustomerTableView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Companies/AddCustomerTableView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCustomerTableView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Companies/AddCustomerTableView.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Companies/AddCustomerTableView.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************/
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Admins_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Admins.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Admins.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Admins_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Admins_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Admins_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Admins_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Admins_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/Admins.vue?vue&type=template&id=51444659&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/pages/Admins.vue?vue&type=template&id=51444659& ***!
  \********************************************************************************/
=======
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCustomerTableView_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddCustomerTableView.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Companies/AddCustomerTableView.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCustomerTableView_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCustomerTableView_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCustomerTableView_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCustomerTableView_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCustomerTableView_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/Companies/AddCustomerTableView.vue?vue&type=template&id=e3942646&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Companies/AddCustomerTableView.vue?vue&type=template&id=e3942646& ***!
  \********************************************************************************************************/
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Admins_vue_vue_type_template_id_51444659___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Admins.vue?vue&type=template&id=51444659& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Admins.vue?vue&type=template&id=51444659&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Admins_vue_vue_type_template_id_51444659___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Admins_vue_vue_type_template_id_51444659___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
=======
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCustomerTableView_vue_vue_type_template_id_e3942646___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddCustomerTableView.vue?vue&type=template&id=e3942646& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Companies/AddCustomerTableView.vue?vue&type=template&id=e3942646&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCustomerTableView_vue_vue_type_template_id_e3942646___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCustomerTableView_vue_vue_type_template_id_e3942646___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee



/***/ })

}]);