(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Companies/Companies.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Companies/Companies.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/ForgotPassword.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/ForgotPassword.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
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
=======
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
//
//
//
//
//
//
//
//
//
//
//
//
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
    getCustomers: 'customers/getCustomers',
    updateStatus: 'customers/updateStatus'
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
    updateCustomerStatus: function updateCustomerStatus(customer_id, status) {
      this.updateStatus({
        customer_id: customer_id,
        status: status,
        notify: this.$vs.notify
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
=======
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      email: '',
      code: '',
      password: '',
      confirm_password: '',
      forgotPassword: true
    };
  },
  created: function created() {
    if (localStorage.getItem('admin')) {
      this.$router.push('/dashboard');
    }
  },
  methods: {
    onSubmit: function onSubmit(e, scope) {
      var _this = this;

      self = this;
      this.$validator.validateAll(scope).then(function (result) {
        if (result) {
          _this.$vs.loading({
            text: 'Please wait...'
          });

          var fd = new FormData(_this.$refs.loginForm);
          axios.post('forgot-password', fd).then(function (res) {
            _this.$vs.loading.close();

            if (res.data.status == 'error') {
              _this.$vs.notify({
                'color': 'danger',
                'text': res.data.msg,
                'position': 'top-right',
                'icon': 'warning'
              });
            } else {
              _this.forgotPassword = false;

              _this.$vs.notify({
                'color': 'success',
                'text': res.data.msg,
                'position': 'top-right',
                'icon': 'check_box'
              }); // this.$router.push('/');

            }
          });
        }
      });
    },
    verifyCode: function verifyCode(e, scope) {
      var _this2 = this;

      this.$validator.validateAll(scope).then(function (result) {
        if (result) {
          _this2.$vs.loading({
            text: 'Please wait...'
          });

          var fd = new FormData(_this2.$refs.verifyForm);
          fd.append('email', _this2.email);
          axios.post('verify-code-and-change-password', fd).then(function (res) {
            _this2.$vs.loading.close();

            if (res.data.status == false) {
              _this2.$vs.notify({
                'color': 'danger',
                'text': res.data.msg,
                'position': 'top-right',
                'icon': 'warning'
              });
            } else {
              _this2.forgotPassword = false;

              _this2.$vs.notify({
                'color': 'success',
                'text': res.data.msg,
                'position': 'top-right',
                'icon': 'check_box'
              });

              _this2.$router.push('/');
            }
          });
        }
      });
    }
  }
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
});

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Companies/Companies.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Companies/Companies.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
=======
/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/ForgotPassword.vue?vue&type=style&index=0&id=349af79a&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/ForgotPassword.vue?vue&type=style&index=0&id=349af79a&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
// imports


// module
<<<<<<< HEAD
exports.push([module.i, ".con-vs-popup .vs-popup {\n  width: 1000px !important;\n}\n", ""]);
=======
exports.push([module.i, "/*.p-8 {\r\n    padding: 1.9rem !important;\r\n}\r\n*/\r\n", ""]);
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1

// exports


/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Companies/Companies.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Companies/Companies.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/ForgotPassword.vue?vue&type=style&index=0&id=349af79a&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/ForgotPassword.vue?vue&type=style&index=0&id=349af79a&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


<<<<<<< HEAD
var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Companies.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Companies/Companies.vue?vue&type=style&index=0&lang=css&");
=======
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ForgotPassword.vue?vue&type=style&index=0&id=349af79a&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/ForgotPassword.vue?vue&type=style&index=0&id=349af79a&scoped=true&lang=css&");
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

<<<<<<< HEAD
var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);
=======
var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Companies/Companies.vue?vue&type=template&id=199893fc&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Companies/Companies.vue?vue&type=template&id=199893fc& ***!
  \***************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/ForgotPassword.vue?vue&type=template&id=349af79a&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/ForgotPassword.vue?vue&type=template&id=349af79a&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "vx-card",
        { attrs: { title: "List of Companies" } },
        [
          _c(
            "template",
            { slot: "actions" },
            [
              _c("vs-button", {
                attrs: {
                  href: { url: "export-customers" },
                  color: "primary",
                  type: "border",
                  "icon-pack": "feather",
                  icon: "icon-download"
                }
              })
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
                            _vm._v(" " + _vm._s("C00000" + tr.id))
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
                          _vm.$store.getters.userType == "Admin" ||
                          _vm.$store.getters.userType != "Super Admin"
                            ? _c(
                                "vs-td",
                                { attrs: { data: tr.status } },
                                [
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
                                              value: "required",
                                              expression: "'required'"
                                            }
                                          ],
                                          attrs: {
                                            placeholder:
                                              "Select Customer Status"
                                          },
                                          on: {
                                            input: function($event) {
                                              return _vm.updateCustomerStatus(
                                                tr.customer_id,
                                                tr.customer_status
                                              )
                                            }
                                          },
                                          model: {
                                            value: tr.customer_status,
                                            callback: function($$v) {
                                              _vm.$set(
                                                tr,
                                                "customer_status",
                                                $$v
                                              )
                                            },
                                            expression: "tr.customer_status"
                                          }
                                        },
                                        [
                                          _c("vs-select-item", {
                                            attrs: {
                                              value: "Prospect",
                                              text: "Prospect"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("vs-select-item", {
                                            attrs: {
                                              value: "Activate",
                                              text: "Activate"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("vs-select-item", {
                                            attrs: {
                                              value: "Deactivate",
                                              text: "Deactivate"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("vs-select-item", {
                                            attrs: {
                                              value: "Pending",
                                              text: "Pending"
                                            }
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
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            [
                              _vm.$store.getters.userType == "Admin" ||
                              _vm.$store.getters.userType != "Super Admin"
                                ? _c("vs-button", {
                                    attrs: {
                                      to: "company-update/" + tr.customer_id,
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
                                  to: "company-detail/" + tr.customer_id,
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
                  _c("vs-th", { attrs: { "sort-key": "id" } }, [
                    _vm._v("Company ID")
                  ]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "name_english" } }, [
                    _vm._v("Name(English)")
                  ]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "name_khmer" } }, [
                    _vm._v("Name(Khmer)")
                  ]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "industry" } }, [
                    _vm._v("Industy / Sector")
                  ]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "tax_duration" } }, [
                    _vm._v("Tax Duration")
                  ]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "tax_card_num" } }, [
                    _vm._v("Tax ID")
                  ]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "tin_no" } }, [
                    _vm._v("TIN # ")
                  ]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "email" } }, [
                    _vm._v("Email")
                  ]),
                  _vm._v(" "),
                  _vm.$store.getters.userType == "Admin" ||
                  _vm.$store.getters.userType == "Super Admin"
                    ? _c(
                        "vs-th",
                        { attrs: { "sort-key": "supervisor.full_name" } },
                        [_vm._v("Supervisor")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.$store.getters.userType != "Officer"
                    ? _c("vs-th", [_vm._v("Officer")])
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
        ],
        2
      )
    ],
    1
=======
    {
      staticClass:
        "h-screen flex w-full bg-img vx-row no-gutter items-center justify-center",
      staticStyle: {
        "background-image": "url(./public/images/bg.jpg) !important"
      },
      attrs: { id: "page-login" }
    },
    [
      _c(
        "div",
        { staticClass: "vx-col sm:w-1/2 md:w-1/2 lg:w-auto sm:m-0 m-4" },
        [
          _vm.forgotPassword == true
            ? _c("vx-card", [
                _c(
                  "div",
                  {
                    staticClass: "full-page-bg-color",
                    staticStyle: {
                      "box-shadow": "2px 4px 20px 5px !important"
                    },
                    attrs: { slot: "no-body" },
                    slot: "no-body"
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "vx-row no-gutter justify-center items-center"
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "vx-col sm:w-full md:w-full lg:w-full"
                          },
                          [
                            _c(
                              "form",
                              {
                                ref: "loginForm",
                                attrs: {
                                  autocomplete: "off",
                                  "data-vv-scope": "loginForm"
                                },
                                on: {
                                  submit: function($event) {
                                    $event.preventDefault()
                                    return _vm.onSubmit($event, "loginForm")
                                  }
                                }
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "p-8" },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "vx-card__title mb-8" },
                                      [
                                        _c("img", {
                                          staticClass: "m-auto w-2/5",
                                          attrs: {
                                            src: "./public/images/33i.png"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("h4", { staticClass: "mb-4" }, [
                                          _vm._v("Recover Password")
                                        ]),
                                        _vm._v(" "),
                                        _c("p", [
                                          _vm._v(
                                            "Put your registered email to recover your password."
                                          )
                                        ])
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("vs-input", {
                                      directives: [
                                        {
                                          name: "validate",
                                          rawName: "v-validate",
                                          value: "required|email",
                                          expression: "'required|email'"
                                        }
                                      ],
                                      staticClass: "w-full no-icon-border",
                                      attrs: {
                                        icon: "icon icon-user",
                                        name: "email",
                                        "icon-pack": "feather",
                                        "label-placeholder": "Email",
                                        "data-vv-scope": "loginForm"
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
                                    _c("span", {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: _vm.errors.has(
                                            "loginForm.email"
                                          ),
                                          expression:
                                            "errors.has('loginForm.email')"
                                        }
                                      ],
                                      staticClass: "text-danger",
                                      domProps: {
                                        innerHTML: _vm._s(
                                          _vm.errors.first("loginForm.email")
                                        )
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "vs-row",
                                      [
                                        _c(
                                          "vs-col",
                                          {
                                            staticClass: "mt-base",
                                            attrs: { "vs-w": "12" }
                                          },
                                          [
                                            _c(
                                              "vs-button",
                                              {
                                                attrs: {
                                                  to: "/",
                                                  type: "border",
                                                  color: "primary"
                                                }
                                              },
                                              [_vm._v("Back to Login")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "vs-button",
                                              {
                                                staticClass: "float-right",
                                                attrs: {
                                                  button: "submit",
                                                  color: "#0b586a",
                                                  "gradient-color-secondary":
                                                    "#d08683",
                                                  type: "gradient"
                                                }
                                              },
                                              [_vm._v("Send code")]
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
                          ]
                        )
                      ]
                    )
                  ]
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.forgotPassword == false
            ? _c("vx-card", [
                _c(
                  "div",
                  {
                    staticClass: "full-page-bg-color",
                    staticStyle: {
                      "box-shadow": "2px 4px 20px 5px !important"
                    },
                    attrs: { slot: "no-body" },
                    slot: "no-body"
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "vx-row no-gutter justify-center items-center"
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "vx-col sm:w-full md:w-full lg:w-full"
                          },
                          [
                            _c(
                              "form",
                              {
                                ref: "verifyForm",
                                attrs: {
                                  autocomplete: "off",
                                  "data-vv-scope": "verifyForm"
                                },
                                on: {
                                  submit: function($event) {
                                    $event.preventDefault()
                                    return _vm.verifyCode($event, "verifyForm")
                                  }
                                }
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "p-8" },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "vx-card__title mb-8" },
                                      [
                                        _c("img", {
                                          staticClass: "m-auto w-2/5",
                                          attrs: {
                                            src: "./public/images/33i.png"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("h4", { staticClass: "mb-4" }, [
                                          _vm._v("Verify code")
                                        ]),
                                        _vm._v(" "),
                                        _c("p", [
                                          _vm._v(
                                            "Put your correct verification code and new password."
                                          )
                                        ])
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "vs-row",
                                      [
                                        _c(
                                          "vs-col",
                                          { attrs: { "vs-w": "12" } },
                                          [
                                            _c("vs-input", {
                                              directives: [
                                                {
                                                  name: "validate",
                                                  rawName: "v-validate",
                                                  value: "required|digits:4",
                                                  expression:
                                                    "'required|digits:4'"
                                                }
                                              ],
                                              staticClass:
                                                "w-full no-icon-border",
                                              attrs: {
                                                icon:
                                                  "icon icon-more-horizontal",
                                                name: "code",
                                                "icon-pack": "feather",
                                                "label-placeholder":
                                                  "Verification code",
                                                "data-vv-scope": "verifyForm"
                                              },
                                              model: {
                                                value: _vm.code,
                                                callback: function($$v) {
                                                  _vm.code = $$v
                                                },
                                                expression: "code"
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c("span", {
                                              directives: [
                                                {
                                                  name: "show",
                                                  rawName: "v-show",
                                                  value: _vm.errors.has(
                                                    "verifyForm.code"
                                                  ),
                                                  expression:
                                                    "errors.has('verifyForm.code')"
                                                }
                                              ],
                                              staticClass: "text-danger",
                                              domProps: {
                                                innerHTML: _vm._s(
                                                  _vm.errors.first(
                                                    "verifyForm.code"
                                                  )
                                                )
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
                                      "vs-row",
                                      [
                                        _c(
                                          "vs-col",
                                          {
                                            staticClass: "mt-5",
                                            attrs: { "vs-w": "12" }
                                          },
                                          [
                                            _c("vs-input", {
                                              directives: [
                                                {
                                                  name: "validate",
                                                  rawName: "v-validate",
                                                  value:
                                                    "required|min:6|max:12",
                                                  expression:
                                                    "'required|min:6|max:12'"
                                                }
                                              ],
                                              ref: "password",
                                              staticClass:
                                                "w-full no-icon-border",
                                              attrs: {
                                                type: "password",
                                                icon: "icon icon-key",
                                                name: "password",
                                                "icon-pack": "feather",
                                                "label-placeholder": "Password",
                                                "data-vv-scope": "verifyForm"
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
                                            _c("span", {
                                              directives: [
                                                {
                                                  name: "show",
                                                  rawName: "v-show",
                                                  value: _vm.errors.has(
                                                    "verifyForm.password"
                                                  ),
                                                  expression:
                                                    "errors.has('verifyForm.password')"
                                                }
                                              ],
                                              staticClass: "text-danger",
                                              domProps: {
                                                innerHTML: _vm._s(
                                                  _vm.errors.first(
                                                    "verifyForm.password"
                                                  )
                                                )
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
                                      "vs-row",
                                      [
                                        _c(
                                          "vs-col",
                                          {
                                            staticClass: "mt-5",
                                            attrs: { "vs-w": "12" }
                                          },
                                          [
                                            _c("vs-input", {
                                              directives: [
                                                {
                                                  name: "validate",
                                                  rawName: "v-validate",
                                                  value:
                                                    "required|confirmed:password",
                                                  expression:
                                                    "'required|confirmed:password'"
                                                }
                                              ],
                                              staticClass:
                                                "w-full no-icon-border",
                                              attrs: {
                                                type: "password",
                                                icon: "icon icon-key",
                                                name: "confirm_password",
                                                "icon-pack": "feather",
                                                "label-placeholder":
                                                  "Confirm Password",
                                                "data-vv-scope": "verifyForm",
                                                "data-vv-as": "password"
                                              },
                                              model: {
                                                value: _vm.confirm_password,
                                                callback: function($$v) {
                                                  _vm.confirm_password = $$v
                                                },
                                                expression: "confirm_password"
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c("span", {
                                              directives: [
                                                {
                                                  name: "show",
                                                  rawName: "v-show",
                                                  value: _vm.errors.has(
                                                    "verifyForm.confirm_password"
                                                  ),
                                                  expression:
                                                    "errors.has('verifyForm.confirm_password')"
                                                }
                                              ],
                                              staticClass: "text-danger",
                                              domProps: {
                                                innerHTML: _vm._s(
                                                  _vm.errors.first(
                                                    "verifyForm.confirm_password"
                                                  )
                                                )
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
                                      "vs-row",
                                      [
                                        _c(
                                          "vs-col",
                                          {
                                            staticClass: "mt-base",
                                            attrs: { "vs-w": "12" }
                                          },
                                          [
                                            _c(
                                              "vs-button",
                                              {
                                                staticClass: "float-right",
                                                attrs: {
                                                  button: "submit",
                                                  color: "#0b586a",
                                                  "gradient-color-secondary":
                                                    "#d08683",
                                                  type: "gradient"
                                                }
                                              },
                                              [_vm._v("Save Changes")]
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
                          ]
                        )
                      ]
                    )
                  ]
                )
              ])
            : _vm._e()
        ],
        1
      )
    ]
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/src/views/pages/Companies/Companies.vue":
/*!**************************************************************!*\
  !*** ./resources/js/src/views/pages/Companies/Companies.vue ***!
  \**************************************************************/
=======
/***/ "./resources/js/src/views/pages/ForgotPassword.vue":
/*!*********************************************************!*\
  !*** ./resources/js/src/views/pages/ForgotPassword.vue ***!
  \*********************************************************/
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _Companies_vue_vue_type_template_id_199893fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Companies.vue?vue&type=template&id=199893fc& */ "./resources/js/src/views/pages/Companies/Companies.vue?vue&type=template&id=199893fc&");
/* harmony import */ var _Companies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Companies.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Companies/Companies.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Companies_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Companies.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/pages/Companies/Companies.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
=======
/* harmony import */ var _ForgotPassword_vue_vue_type_template_id_349af79a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ForgotPassword.vue?vue&type=template&id=349af79a&scoped=true& */ "./resources/js/src/views/pages/ForgotPassword.vue?vue&type=template&id=349af79a&scoped=true&");
/* harmony import */ var _ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ForgotPassword.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/ForgotPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ForgotPassword_vue_vue_type_style_index_0_id_349af79a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ForgotPassword.vue?vue&type=style&index=0&id=349af79a&scoped=true&lang=css& */ "./resources/js/src/views/pages/ForgotPassword.vue?vue&type=style&index=0&id=349af79a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
<<<<<<< HEAD
  _Companies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Companies_vue_vue_type_template_id_199893fc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Companies_vue_vue_type_template_id_199893fc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
=======
  _ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ForgotPassword_vue_vue_type_template_id_349af79a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ForgotPassword_vue_vue_type_template_id_349af79a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "349af79a",
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
  null
  
)

/* hot reload */
if (false) { var api; }
<<<<<<< HEAD
component.options.__file = "resources/js/src/views/pages/Companies/Companies.vue"
=======
component.options.__file = "resources/js/src/views/pages/ForgotPassword.vue"
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/src/views/pages/Companies/Companies.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Companies/Companies.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
=======
/***/ "./resources/js/src/views/pages/ForgotPassword.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/pages/ForgotPassword.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Companies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Companies.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Companies/Companies.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Companies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Companies/Companies.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Companies/Companies.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************/
=======
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ForgotPassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/ForgotPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/ForgotPassword.vue?vue&type=style&index=0&id=349af79a&scoped=true&lang=css&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/ForgotPassword.vue?vue&type=style&index=0&id=349af79a&scoped=true&lang=css& ***!
  \******************************************************************************************************************/
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Companies_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Companies.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Companies/Companies.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Companies_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Companies_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Companies_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Companies_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Companies_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/Companies/Companies.vue?vue&type=template&id=199893fc&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Companies/Companies.vue?vue&type=template&id=199893fc& ***!
  \*********************************************************************************************/
=======
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_style_index_0_id_349af79a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ForgotPassword.vue?vue&type=style&index=0&id=349af79a&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/ForgotPassword.vue?vue&type=style&index=0&id=349af79a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_style_index_0_id_349af79a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_style_index_0_id_349af79a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_style_index_0_id_349af79a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_style_index_0_id_349af79a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_style_index_0_id_349af79a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/ForgotPassword.vue?vue&type=template&id=349af79a&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/ForgotPassword.vue?vue&type=template&id=349af79a&scoped=true& ***!
  \****************************************************************************************************/
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Companies_vue_vue_type_template_id_199893fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Companies.vue?vue&type=template&id=199893fc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Companies/Companies.vue?vue&type=template&id=199893fc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Companies_vue_vue_type_template_id_199893fc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Companies_vue_vue_type_template_id_199893fc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
=======
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_template_id_349af79a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ForgotPassword.vue?vue&type=template&id=349af79a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/ForgotPassword.vue?vue&type=template&id=349af79a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_template_id_349af79a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_template_id_349af79a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1



/***/ })

}]);