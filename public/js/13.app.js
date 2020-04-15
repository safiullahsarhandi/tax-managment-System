(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Admins.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Admins.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
=======
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/ExchangeRates.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/ExchangeRates.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/* harmony default export */ __webpack_exports__["default"] = ({
  inject: ['loginUser'],
  data: function data() {
    return {
      formTitle: 'Update Exchange Rates',
      updateBtn: 'Save changes',
      editRatesModal: false,
      salary_rate: 0,
      average_rate: 0,
      annual_rate: 0
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('exchangerates/', ['exchangerates'])),
  created: function created() {
    this.getExchangeRates();
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    getExchangeRates: 'exchangerates/getExchangeRates',
    update: 'exchangerates/updateExchangeRates'
  }), {
    editRates: function editRates() {
      if (this.exchangerates[0]['value'] == 0 && this.exchangerates[1]['value'] == 0 && this.exchangerates[2]['value'] == 0) {
        this.formTitle = 'Add Exchange Rates';
        this.updateBtn = 'Save';
      }

      this.salary_rate = this.exchangerates[0]['value'];
      this.average_rate = this.exchangerates[1]['value'];
      this.annual_rate = this.exchangerates[2]['value'];
      this.editRatesModal = true;
    },
    updateRates: function updateRates(e) {
      var _this = this;

      this.$validator.validateAll('editform').then(function (result) {
        if (result) {
          _this.$vs.loading();

          var fd = new FormData(_this.$refs.editRatesForm);

          _this.update(fd).then(function (res) {
            if (res.data.status == 'success') {
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
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
=======
              _this.editRatesModal = false;

              _this.$vs.notify({
                title: 'Success',
                text: 'Save changes successfully',
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
                color: 'success',
                position: 'top-right'
              });

<<<<<<< HEAD
              _this2.$vs.loading.close(); // this.getAdmins();

=======
              _this.$vs.loading.close();

              _this.getExchangeRates();
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
            }
          });
        }
      });
<<<<<<< HEAD
    },
    makePassword: function makePassword() {
      this.password = this.generatePassword();
=======
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
    }
  })
});

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Admins.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Admins.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/ExchangeRates.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/ExchangeRates.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
<<<<<<< HEAD
exports.push([module.i, ".selectExample {\n  margin-top: 10px;\n}\n.con-select {\n  width: 100% !important;\n  clear: both;\n}\n.con-select .vs-select--input {\n  margin-top: 10px !important;\n}\r\n\r\n", ""]);
=======
exports.push([module.i, ".vs-con-table .vs-con-tbody .vs-table--tbody-table .vs-table--thead th {\n  width: 10px;\n}\n.con-vs-popup .vs-popup {\n  width: 300px !important;\n}\r\n\r\n", ""]);
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1

// exports


/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Admins.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Admins.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/ExchangeRates.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/ExchangeRates.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


<<<<<<< HEAD
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Admins.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Admins.vue?vue&type=style&index=0&lang=css&");
=======
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ExchangeRates.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/ExchangeRates.vue?vue&type=style&index=0&lang=css&");
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Admins.vue?vue&type=template&id=51444659&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Admins.vue?vue&type=template&id=51444659& ***!
  \**************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/ExchangeRates.vue?vue&type=template&id=1889dc6b&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/ExchangeRates.vue?vue&type=template&id=1889dc6b& ***!
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
    [
      _c(
        "vx-card",
<<<<<<< HEAD
        { attrs: { title: "List of Team Members" } },
=======
        { attrs: { title: "Exchange Rates" } },
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
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
                        return _vm.editRates()
                      }
                    }
                  })
                : _vm._e()
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "vs-table",
            {
<<<<<<< HEAD
              attrs: {
                search: "",
                pagination: "",
                "max-items": "6",
                data: _vm.admins
              },
=======
              attrs: { data: _vm.exchangerates },
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(ref) {
                    var data = ref.data
<<<<<<< HEAD
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
=======
                    return [
                      _c(
                        "vs-tr",
                        { attrs: { data: data } },
                        _vm._l(_vm.exchangerates, function(tr, index) {
                          return _c(
                            "vs-td",
                            { key: index, attrs: { data: tr.value } },
                            [
                              _vm._v(
                                "\n                      " +
                                  _vm._s(tr.value) +
                                  "\n                    "
                              )
                            ]
                          )
                        }),
                        1
                      )
                    ]
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
                  }
                }
              ])
            },
            [
              _c(
                "template",
                { slot: "thead" },
                [
<<<<<<< HEAD
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
                  _c("vs-th", [
                    _vm._v(
                      "\n                    Salary Rate\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c("vs-th", [
                    _vm._v(
                      "\n                    Average Rate\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c("vs-th", [
                    _vm._v(
                      "\n                    Annual Rate\n                "
                    )
                  ])
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
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
<<<<<<< HEAD
          attrs: { active: _vm.addAdminModal, title: "Add New Member" },
          on: {
            "update:active": function($event) {
              _vm.addAdminModal = $event
=======
          attrs: { active: _vm.editRatesModal, title: _vm.formTitle },
          on: {
            "update:active": function($event) {
              _vm.editRatesModal = $event
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
            }
          }
        },
        [
          _c(
            "form",
            {
<<<<<<< HEAD
              ref: "addAdminForm",
              attrs: { "data-vv-scope": "addform" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.addAdmin($event)
=======
              ref: "editRatesForm",
              attrs: { autocomplete: "off", "data-vv-scope": "editform" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.updateRates($event)
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
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
=======
                    { attrs: { "vs-lg": "12", "vs-md": "12", "vs-sm": "12" } },
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
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
<<<<<<< HEAD
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
=======
                              name: "salary_rate",
                              "label-placeholder": "Salary Rates",
                              "data-vv-scope": "editform"
                            },
                            model: {
                              value: _vm.salary_rate,
                              callback: function($$v) {
                                _vm.salary_rate = $$v
                              },
                              expression: "salary_rate"
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
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
                                  value: _vm.errors.has("addform.first_name"),
                                  expression: "errors.has('addform.first_name')"
=======
                                  value: _vm.errors.has("editform.salary_rate"),
                                  expression:
                                    "errors.has('editform.salary_rate')"
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [
                              _vm._v(
<<<<<<< HEAD
                                _vm._s(_vm.errors.first("addform.first_name"))
=======
                                _vm._s(_vm.errors.first("editform.salary_rate"))
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
<<<<<<< HEAD
=======
                      _c("br"),
                      _vm._v(" "),
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
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
<<<<<<< HEAD
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
=======
                              name: "average_rate",
                              "label-placeholder": "Average Rate",
                              "data-vv-scope": "editform"
                            },
                            model: {
                              value: _vm.average_rate,
                              callback: function($$v) {
                                _vm.average_rate = $$v
                              },
                              expression: "average_rate"
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
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
                                  value: _vm.errors.has("addform.last_name"),
                                  expression: "errors.has('addform.last_name')"
=======
                                  value: _vm.errors.has(
                                    "editform.average_rate"
                                  ),
                                  expression:
                                    "errors.has('editform.average_rate')"
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [
                              _vm._v(
<<<<<<< HEAD
                                _vm._s(_vm.errors.first("addform.last_name"))
=======
                                _vm._s(
                                  _vm.errors.first("editform.average_rate")
                                )
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
                              )
                            ]
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
=======
                      _c("br"),
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
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
<<<<<<< HEAD
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
=======
                              name: "annual_rate",
                              "label-placeholder": "Annual Rate",
                              "data-vv-scope": "editform"
                            },
                            model: {
                              value: _vm.annual_rate,
                              callback: function($$v) {
                                _vm.annual_rate = $$v
                              },
                              expression: "annual_rate"
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
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
=======
                                  value: _vm.errors.has("editform.annual_rate"),
                                  expression:
                                    "errors.has('editform.annual_rate')"
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [
                              _vm._v(
<<<<<<< HEAD
                                _vm._s(_vm.errors.first("editform.zip_code"))
=======
                                _vm._s(_vm.errors.first("editform.annual_rate"))
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
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
<<<<<<< HEAD
                        [_vm._v("Update Member")]
=======
                        [_vm._v(_vm._s(_vm.updateBtn))]
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
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
/***/ "./resources/js/src/views/pages/Admins.vue":
/*!*************************************************!*\
  !*** ./resources/js/src/views/pages/Admins.vue ***!
  \*************************************************/
=======
/***/ "./resources/js/src/views/pages/ExchangeRates.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/views/pages/ExchangeRates.vue ***!
  \********************************************************/
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _Admins_vue_vue_type_template_id_51444659___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Admins.vue?vue&type=template&id=51444659& */ "./resources/js/src/views/pages/Admins.vue?vue&type=template&id=51444659&");
/* harmony import */ var _Admins_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Admins.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Admins.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Admins_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Admins.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/pages/Admins.vue?vue&type=style&index=0&lang=css&");
=======
/* harmony import */ var _ExchangeRates_vue_vue_type_template_id_1889dc6b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExchangeRates.vue?vue&type=template&id=1889dc6b& */ "./resources/js/src/views/pages/ExchangeRates.vue?vue&type=template&id=1889dc6b&");
/* harmony import */ var _ExchangeRates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExchangeRates.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/ExchangeRates.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ExchangeRates_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExchangeRates.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/pages/ExchangeRates.vue?vue&type=style&index=0&lang=css&");
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
<<<<<<< HEAD
  _Admins_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Admins_vue_vue_type_template_id_51444659___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Admins_vue_vue_type_template_id_51444659___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
=======
  _ExchangeRates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ExchangeRates_vue_vue_type_template_id_1889dc6b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ExchangeRates_vue_vue_type_template_id_1889dc6b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
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
component.options.__file = "resources/js/src/views/pages/ExchangeRates.vue"
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/src/views/pages/Admins.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/src/views/pages/Admins.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
=======
/***/ "./resources/js/src/views/pages/ExchangeRates.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/pages/ExchangeRates.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
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
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExchangeRates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ExchangeRates.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/ExchangeRates.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExchangeRates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/ExchangeRates.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/pages/ExchangeRates.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************/
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
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
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExchangeRates_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ExchangeRates.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/ExchangeRates.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExchangeRates_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExchangeRates_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExchangeRates_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExchangeRates_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExchangeRates_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/ExchangeRates.vue?vue&type=template&id=1889dc6b&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/pages/ExchangeRates.vue?vue&type=template&id=1889dc6b& ***!
  \***************************************************************************************/
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Admins_vue_vue_type_template_id_51444659___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Admins.vue?vue&type=template&id=51444659& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Admins.vue?vue&type=template&id=51444659&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Admins_vue_vue_type_template_id_51444659___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Admins_vue_vue_type_template_id_51444659___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
=======
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExchangeRates_vue_vue_type_template_id_1889dc6b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ExchangeRates.vue?vue&type=template&id=1889dc6b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/ExchangeRates.vue?vue&type=template&id=1889dc6b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExchangeRates_vue_vue_type_template_id_1889dc6b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExchangeRates_vue_vue_type_template_id_1889dc6b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1



/***/ })

}]);