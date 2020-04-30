(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Payrolls/Payrolls.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Payrolls/Payrolls.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  inject: ['generatePassword'],
  data: function data() {
    return {
      // switch1: true,
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
      tax_id: '',
      is_admin: false,
      is_supervisor: false,
      is_officer: false,
      selected_status: 1,
      statusList: [{
        text: 'Pending',
        value: 0
      }, {
        text: 'Approve',
        value: 1
      }, {
        text: 'Un approve',
        value: 2
      }]
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('payrolls/', ['payrolls'])),
  created: function created() {
    this.tax_id = this.$store.state.rootUrl.split('/')[2];
    this.getPayrolls(this.tax_id);
    this.customer_id = localStorage.getItem('customer');

    if (this.$store.state.AppActiveUser.type == 'Admin' || this.$store.state.AppActiveUser.type == 'Super Admin') {
      this.is_admin = true;
    }

    if (this.$store.state.AppActiveUser.type == 'Supervisor') {
      this.is_supervisor = true;
    }

    if (this.$store.state.AppActiveUser.type == 'Officer') {
      this.is_officer = true;
    }
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    getPayrolls: 'payrolls/getPayrolls',
    statusChange: 'taxes/statusUpdateSPP',
    statusChangeManagment: 'taxes/statusChangeManagment'
  }), {
    changeManagementStatus: function changeManagementStatus(status, id, by) {
      var data = {
        id: id,
        status: status,
        by: by,
        tax_id: this.tax_id,
        notify: this.$vs.notify,
        tax_type: 'payroll'
      };
      this.statusChangeManagment(data).then(function (res) {});
    },
    statusUpdate: function statusUpdate(id, status) {
      var _this = this;

      var data = {
        id: id,
        tax_id: this.tax_id,
        notify: this.$vs.notify,
        type: 'payroll'
      };
      this.statusChange(data).then(function (res) {
        if (res.data.status != true) {
          var index = _this.payrolls.findIndex(function (o) {
            return o.payroll_id == id;
          });

          if (res.data.response == 'undefined') {
            _this.payrolls[index].officer_confirmed = status;
          } else {
            _this.payrolls[index].officer_confirmed = res.data.response;
          }
        }
      });
    },
    currentTaxStatusForOfficer: function currentTaxStatusForOfficer(tr) {
      if (this.is_officer) {
        if (tr.officer_confirmed == 0 && tr.supervisor_confirmed == 0) {
          return 'Working In Progress';
        }

        if (tr.officer_confirmed == 1 && tr.supervisor_confirmed == 0) {
          return 'Submitted';
        }

        if (tr.officer_confirmed == 1 && tr.supervisor_confirmed == 1) {
          return 'Approved';
        }

        if (tr.officer_confirmed == 1 && tr.supervisor_confirmed == 2) {
          return 'Supervisor Reviewing';
        }

        if (tr.officer_confirmed == 1 && tr.supervisor_confirmed == 2) {
          return 'Rejected';
        }
      }

      if (this.is_supervisor) {
        if (tr.officer_confirmed == 0 && tr.supervisor_confirmed == 0) {
          return 'Pending';
        }

        if (tr.officer_confirmed == 1 && tr.supervisor_confirmed == 0) {
          return 'Working In Progress';
        }

        if (tr.officer_confirmed == 1 && tr.supervisor_confirmed == 1) {
          return 'Approved';
        }

        if (tr.officer_confirmed == 1 && tr.supervisor_confirmed == 2) {
          return 'Review';
        }

        if (tr.officer_confirmed == 1 && tr.supervisor_confirmed == 3) {
          return 'Rejected';
        }
      }

      if (this.is_admin) {
        if (tr.supervisor_confirmed == 0 && tr.management_confirmed == 0) {
          return 'Pending';
        }

        if (tr.supervisor_confirmed == 1 && tr.management_confirmed == 0) {
          return 'Approved by Supervisor';
        }

        if (tr.supervisor_confirmed == 1 && tr.management_confirmed == 1) {
          return 'Approved';
        }

        if (tr.supervisor_confirmed == 1 && tr.management_confirmed == 2) {
          return 'Review';
        }

        if (tr.supervisor_confirmed == 1 && tr.management_confirmed == 3) {
          return 'Rejected';
        }
      }
    },
    editPermissionAccess: function editPermissionAccess(tr) {
      if (this.is_officer) {
        if (tr.officer_confirmed == 0 && tr.supervisor_confirmed == 0) {
          return true;
        }

        if (tr.officer_confirmed == 1 && tr.supervisor_confirmed == 0) {
          return true;
        }

        if (tr.officer_confirmed == 1 && tr.supervisor_confirmed == 1) {
          return false;
        }

        if (tr.officer_confirmed == 1 && tr.supervisor_confirmed == 2) {
          return false;
        }

        if (tr.officer_confirmed == 1 && tr.supervisor_confirmed == 3) {
          return true;
        }

        if (tr.officer_confirmed == 0 && tr.supervisor_confirmed == 3) {
          return true;
        }
      }

      if (this.is_supervisor) {
        if (tr.officer_confirmed == 0 && tr.supervisor_confirmed == 0) {
          return false;
        }

        if (tr.officer_confirmed == 1 && tr.supervisor_confirmed == 0) {
          return true;
        }

        if (tr.officer_confirmed == 1 && tr.supervisor_confirmed == 1) {
          return true;
        }

        if (tr.officer_confirmed == 1 && tr.supervisor_confirmed == 2) {
          return true;
        }

        if (tr.officer_confirmed == 1 && tr.supervisor_confirmed == 3) {
          return true;
        }

        if (tr.officer_confirmed == 0 && tr.supervisor_confirmed == 3) {
          return false;
        }
      }

      if (this.is_admin) {
        if (tr.supervisor_confirmed == 0 && tr.management_confirmed == 0) {
          return false;
        }

        if (tr.supervisor_confirmed == 1 && tr.management_confirmed == 0) {
          return true;
        }

        if (tr.supervisor_confirmed == 1 && tr.management_confirmed == 1) {
          return true;
        }

        if (tr.supervisor_confirmed == 1 && tr.management_confirmed == 2) {
          return true;
        }

        if (tr.supervisor_confirmed == 1 && tr.management_confirmed == 3) {
          return true;
        }

        if (tr.supervisor_confirmed == 0 && tr.management_confirmed == 3) {
          return false;
        }
      }
    },
    notAllowed: function notAllowed(opt) {
      var msg;

      if (opt == 'status') {
        msg = 'You cann\'t change payroll status, Payroll are approved or supervisor reviewing ';
      } else if (opt == 'delete') {
        msg = 'You cann\'t delete payroll, Payroll are approved or supervisor reviewing ';
      } else if (opt == 'edit') {
        msg = 'You cann\'t edit/update payroll, Payroll are approved or supervisor reviewing ';
      }

      this.$vs.notify({
        text: msg,
        color: 'danger',
        position: 'top-right',
        time: 8000,
        icon: 'warning'
      });
    },
    deleteRecord: function deleteRecord(obj) {
      var _this2 = this;

      this.$vs.loading();
      var fd = new FormData();
      fd.append('id', obj.payroll_id);
      fd.append('customer_id', obj.employee_id);
      fd.append('type', 'Payroll');
      axios.post('delete-spp', fd).then(function (res) {
        if (res.data.status == true) {
          _this2.$vs.notify({
            title: "Success",
            text: res.data.msg,
            color: 'success',
            position: 'top-right'
          });

          _this2.$vs.loading.close();

          _this2.getPayrolls(_this2.tax_id);
        }
      });
    },
    addMoreFeild: function addMoreFeild() {
      this.customField.push({
        name: 'additional_field[]',
        value: '',
        type: 'text'
      });
    },
    updateCustomer: function updateCustomer(e) {
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
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Payrolls/Payrolls.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Payrolls/Payrolls.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".con-vs-popup .vs-popup {\n  width: 1000px !important;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Payrolls/Payrolls.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Payrolls/Payrolls.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Payrolls.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Payrolls/Payrolls.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Payrolls/Payrolls.vue?vue&type=template&id=3b876d4a&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Payrolls/Payrolls.vue?vue&type=template&id=3b876d4a& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
        { attrs: { title: "List of Payrolls" } },
        [
          _c(
            "template",
            { slot: "actions" },
            [
              _c("vs-button", {
                attrs: {
                  type: "border",
                  href: {
                    url: "export-payroll/" + _vm.customer_id + "/" + _vm.tax_id
                  },
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
                "max-items": "6",
                data: _vm.payrolls
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
                            { attrs: { data: tr.created_by.full_name } },
                            [_vm._v(_vm._s(tr.created_by.full_name))]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            { attrs: { data: tr.employee.name_english } },
                            [_vm._v(_vm._s(tr.employee.name_english))]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            { attrs: { data: tr.employee.employee_num } },
                            [_vm._v(_vm._s(tr.employee.employee_num))]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            { attrs: { data: tr.employee.nssf_num } },
                            [_vm._v(_vm._s(tr.employee.nssf_num))]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            { attrs: { data: tr.employee.contract_type } },
                            [_vm._v(_vm._s(tr.employee.contract_type))]
                          ),
                          _vm._v(" "),
                          _c("vs-td", { attrs: { data: tr.basic_salary } }, [
                            _vm._v(_vm._s(tr.basic_salary))
                          ]),
                          _vm._v(" "),
                          _c("vs-td", { attrs: { data: tr.bonus } }, [
                            _vm._v(_vm._s(tr.bonus))
                          ]),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.is_officer == true,
                                  expression: "is_officer == true"
                                }
                              ],
                              attrs: { data: tr.officer_confirmed }
                            },
                            [
                              _vm.editPermissionAccess(tr)
                                ? _c("vs-switch", {
                                    on: {
                                      click: function($event) {
                                        return _vm.statusUpdate(
                                          tr.payroll_id,
                                          tr.officer_confirmed
                                        )
                                      }
                                    },
                                    model: {
                                      value: tr.officer_confirmed,
                                      callback: function($$v) {
                                        _vm.$set(tr, "officer_confirmed", $$v)
                                      },
                                      expression: "tr.officer_confirmed"
                                    }
                                  })
                                : _c("vs-switch", {
                                    on: {
                                      click: function($event) {
                                        return _vm.notAllowed("status")
                                      }
                                    },
                                    model: {
                                      value:
                                        tr.officer_confirmed == 1
                                          ? true
                                          : false,
                                      callback: function($$v) {
                                        _vm.$set(
                                          tr,
                                          "officer_confirmed == 1?true:false",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "tr.officer_confirmed == 1?true:false"
                                    }
                                  })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("vs-td", [
                            _vm._v(_vm._s(_vm.currentTaxStatusForOfficer(tr)))
                          ]),
                          _vm._v(" "),
                          _vm.editPermissionAccess(tr)
                            ? _c(
                                "vs-td",
                                [
                                  _c("vs-button", {
                                    attrs: {
                                      to: "edit-payroll/" + tr.payroll_id,
                                      size: "small",
                                      type: "border",
                                      "icon-pack": "feather",
                                      icon: "icon-edit"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("vs-button", {
                                    attrs: {
                                      to: "payroll-detail/" + tr.payroll_id,
                                      size: "small",
                                      "icon-pack": "feather",
                                      icon: "icon-maximize-2",
                                      type: "border"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("vs-button", {
                                    attrs: {
                                      size: "small",
                                      type: "border",
                                      "icon-pack": "feather",
                                      icon: "icon-trash-2"
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.deleteRecord(data[index])
                                      }
                                    }
                                  })
                                ],
                                1
                              )
                            : _c(
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
                                        return _vm.notAllowed("edit")
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("vs-button", {
                                    attrs: {
                                      to: "payroll-detail/" + tr.payroll_id,
                                      size: "small",
                                      "icon-pack": "feather",
                                      icon: "icon-maximize-2",
                                      type: "border"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("vs-button", {
                                    attrs: {
                                      size: "small",
                                      type: "border",
                                      "icon-pack": "feather",
                                      icon: "icon-trash-2"
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.notAllowed("delete")
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
              _c(
                "template",
                { slot: "thead" },
                [
                  _c("vs-th", [_vm._v("Created by")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Employee Name")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Employee No.")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("NSSF No.")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Contract Type")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Basic Salary")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Bonus")]),
                  _vm._v(" "),
                  _c(
                    "vs-th",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.is_officer == true,
                          expression: "is_officer == true"
                        }
                      ]
                    },
                    [_vm._v("Status")]
                  ),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Current Status")]),
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/pages/Payrolls/Payrolls.vue":
/*!************************************************************!*\
  !*** ./resources/js/src/views/pages/Payrolls/Payrolls.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Payrolls_vue_vue_type_template_id_3b876d4a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Payrolls.vue?vue&type=template&id=3b876d4a& */ "./resources/js/src/views/pages/Payrolls/Payrolls.vue?vue&type=template&id=3b876d4a&");
/* harmony import */ var _Payrolls_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Payrolls.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Payrolls/Payrolls.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Payrolls_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Payrolls.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/pages/Payrolls/Payrolls.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Payrolls_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Payrolls_vue_vue_type_template_id_3b876d4a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Payrolls_vue_vue_type_template_id_3b876d4a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/Payrolls/Payrolls.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/Payrolls/Payrolls.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Payrolls/Payrolls.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Payrolls_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Payrolls.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Payrolls/Payrolls.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Payrolls_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Payrolls/Payrolls.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Payrolls/Payrolls.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Payrolls_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Payrolls.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Payrolls/Payrolls.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Payrolls_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Payrolls_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Payrolls_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Payrolls_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Payrolls_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/Payrolls/Payrolls.vue?vue&type=template&id=3b876d4a&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Payrolls/Payrolls.vue?vue&type=template&id=3b876d4a& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Payrolls_vue_vue_type_template_id_3b876d4a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Payrolls.vue?vue&type=template&id=3b876d4a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Payrolls/Payrolls.vue?vue&type=template&id=3b876d4a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Payrolls_vue_vue_type_template_id_3b876d4a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Payrolls_vue_vue_type_template_id_3b876d4a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);