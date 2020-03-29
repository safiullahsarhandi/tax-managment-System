<<<<<<< HEAD
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Admins.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Admins.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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
              e.target.reset();

              _this.errors.clear();

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

            }
          });
        }
      });
    },
    makePassword: function makePassword() {
      this.password = this.generatePassword();
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Admins.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Admins.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".selectExample {\n  margin-top: 10px;\n}\n.con-select {\n  width: 100% !important;\n  clear: both;\n}\n.con-select .vs-select--input {\n  margin-top: 10px !important;\n}\r\n\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Admins.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Admins.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Admins.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Admins.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Admins.vue?vue&type=template&id=51444659&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Admins.vue?vue&type=template&id=51444659& ***!
  \**************************************************************************************************************************************************************************************************************/
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

/***/ "./resources/js/src/views/pages/Admins.vue":
/*!*************************************************!*\
  !*** ./resources/js/src/views/pages/Admins.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Admins_vue_vue_type_template_id_51444659___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Admins.vue?vue&type=template&id=51444659& */ "./resources/js/src/views/pages/Admins.vue?vue&type=template&id=51444659&");
/* harmony import */ var _Admins_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Admins.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Admins.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Admins_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Admins.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/pages/Admins.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Admins_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Admins_vue_vue_type_template_id_51444659___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Admins_vue_vue_type_template_id_51444659___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/Admins.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/Admins.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/src/views/pages/Admins.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Admins_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Admins.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Admins.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Admins_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Admins.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/pages/Admins.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Admins_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Admins.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Admins.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Admins_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Admins_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Admins_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Admins_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Admins_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/Admins.vue?vue&type=template&id=51444659&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/pages/Admins.vue?vue&type=template&id=51444659& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Admins_vue_vue_type_template_id_51444659___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Admins.vue?vue&type=template&id=51444659& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Admins.vue?vue&type=template&id=51444659&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Admins_vue_vue_type_template_id_51444659___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Admins_vue_vue_type_template_id_51444659___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
=======
(window.webpackJsonp=window.webpackJsonp||[]).push([[11,14],{144:function(e,t,a){"use strict";a.r(t);var s=a(1);function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(a,!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var n={components:{Taxes:a(44).default},beforeCreate:function(){localStorage.setItem("currentDetail",this.$route.fullPath),localStorage.setItem("customer",this.$route.params.id),this.$store.commit("setRootUrl",this.$route.fullPath)},computed:i({},Object(s.d)("customers/",["customer"])),created:function(){this.getCustomer(this.$route.params.id)},methods:i({},Object(s.b)({getCustomer:"customers/getCustomer"}),{getFullName:function(e){return null===e||_.isUndefined(e)?"N/A":e.full_name},getAddress:function(e){return e.address+" "+e.street+" "+e.group+" "+e.sangkat+" "+e.village+" "+e.district+" "+e.province+"  "+e.muncipality}})},d=a(2),l=Object(d.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("vs-row",[a("vs-col",[a("vx-card",[a("vs-row",[a("vs-col",{attrs:{"vs-lg":"6","vs-md":"6","vs-sm":"12","vs-xs":"12"}},[a("P",[e._v("Company Name (English):")]),e._v(" "),a("P",[e._v(e._s(e.customer.name_english))])],1),e._v(" "),a("vs-col",{attrs:{"vs-lg":"6","vs-md":"6","vs-sm":"12","vs-xs":"12"}},[a("P",[e._v("Company Name (Khmer):")]),e._v(" "),a("P",[e._v(e._s(e.customer.name_khmer))])],1)],1)],1)],1)],1),e._v(" "),a("vs-row",[a("vs-col",[a("taxes",{staticClass:"mt-5"})],1)],1)],1)}),[],!1,null,null,null);t.default=l.exports},17:function(e,t,a){var s=a(55);"string"==typeof s&&(s=[[e.i,s,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(5)(s,r);s.locals&&(e.exports=s.locals)},44:function(e,t,a){"use strict";a.r(t);var s=a(1);function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(a,!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var n={inject:["loginUser"],data:function(){return{editTax:{},addTaxManagmentModal:!1,editTaxManagmentModal:!1,type:"",officer:[],default_selected_officer:"",default_selected_supervisor:"",tax_customer_id:"",title:"",description:"",duration:"",supervisor:"",tax_identifier:"",edit_tax_identifier:"",notes:"",months:["Jan","Feb","Mar","Apr","Ma","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},computed:i({},Object(s.d)("supervisors/",["supervisors"]),{},Object(s.d)("taxes/",["taxes"]),{},Object(s.d)("officers/",["officers"])),beforeCreate:function(){},created:function(){this.tax_customer_id=localStorage.getItem("customer"),this.getSupervisors(),this.getOfficers(),this.getTaxes(this.tax_customer_id)},methods:i({},Object(s.b)({getSupervisors:"supervisors/getSupervisors",getOfficers:"officers/getOfficers",create:"taxes/addTax",getTaxes:"taxes/getTaxes",update:"taxes/editTax"}),{getFullName:function(e){return null!==e?e.full_name:"N/A"},changeType:function(e){var t=new Date;"Monthly Tax"==e?this.tax_identifier="M-"+this.months[t.getMonth()]+"-"+t.getFullYear():"Annual Tax"==e?this.tax_identifier="Y-"+t.getFullYear():"Resubmission Tax"==e&&(this.tax_identifier="R-"+this.months[t.getMonth()]+"-"+t.getFullYear())},editChangeType:function(e){var t=new Date;"Monthly Tax"==e?this.editTax.tax_code="M-"+this.months[t.getMonth()]+"-"+t.getFullYear():"Annual Tax"==e?this.editTax.tax_code="Y-"+t.getFullYear():"Resubmission Tax"==e&&(this.editTax.tax_code="R-"+this.months[t.getMonth()]+"-"+t.getFullYear())},addTax:function(){this.addTaxManagmentModal=!0},addTaxManagment:function(e){var t=this;this.$validator.validateAll("addform").then((function(a){if(a){t.$vs.loading(),self=t;var s=new FormData(self.$refs.addTaxManagmentForm);s.append("customer_id",t.tax_customer_id),s.append("tax_code",t.tax_identifier);var r={fd:s,close:t.$vs.loading.close,notify:t.$vs.notify};t.create(r).then((function(a){"success"==a.data.status&&(self.title=self.description=self.duration=self.supervisor="",self.officer=[],e.target.reset(),self.$validator.reset(),t.getTaxes(self.tax_customer_id),t.addTaxManagmentModal=!1)}))}}))},taxEdit:function(e){var t=this;axios.post("tax/get-tax",{id:e}).then((function(e){t.editTax=e.data.tax,t.editTaxManagmentModal=!0,"Monthly Tax"==t.editTax.type?t.editTax.tax_code="M-"+t.months[date.getMonth()]+"-"+date.getFullYear():"Annual Tax"==t.editTax.type?t.editTax.tax_code="Y-"+date.getFullYear():"Resubmission Tax"==t.editTax.type&&(t.editTax.tax_code="R-"+t.months[date.getMonth()]+"-"+date.getFullYear())}))},editTaxManagment:function(e){var t=this;this.$validator.validateAll("editform").then((function(e){if(e){self=t;var a=new FormData(self.$refs.editTaxManagmentForm);a.append("customer_id",t.tax_customer_id),a.append("tax_id",self.editTax.tax_id),a.append("tax_code",t.editTax.tax_code);var s={fd:a,close:t.$vs.loading.close,notify:t.$vs.notify};t.update(s).then((function(e){"success"==e.data.status&&(self.getTaxes(t.tax_customer_id),self.officer=[],self.$validator.reset(),self.editTaxManagmentModal=!1)}))}}))}})},d=(a(54),a(2)),l=Object(d.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("vx-card",{attrs:{title:"List of tax services",subtitle:"The List of Taxes contains currently assigned taxes of customer Or those which are delivered succesfully"}},[a("template",{slot:"actions"},["Admin"!=e.$store.getters.userType||"Super Admin"!=e.$store.getters.userType?a("vs-button",{attrs:{type:"border","icon-pack":"feather",icon:"icon-plus"},on:{click:function(t){return e.addTax()}}}):e._e()],1),e._v(" "),a("vs-table",{attrs:{search:"",pagination:"",data:e.taxes},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.data;return e._l(s,(function(t,s){return a("vs-tr",{key:s},[a("vs-td",[e._v(e._s(e.getFullName(t.created_by)))]),e._v(" "),a("vs-td",[e._v(e._s(t.tax_code))]),e._v(" "),a("vs-td",{staticStyle:{width:"200px"}},[e._v(e._s(t.title))]),e._v(" "),a("vs-td",[e._v(e._s(t.description))]),e._v(" "),a("vs-td",[e._v(e._s(t.type))]),e._v(" "),a("vs-td",[e._v(e._s(0))]),e._v(" "),a("vs-td",[e._v(e._s(0==t.status?"In progress":"Completed"))]),e._v(" "),a("vs-td",["Admin"!=e.$store.getters.userType||"Super Admin"!=e.$store.getters.userType?a("vs-button",{attrs:{size:"small",type:"border","icon-pack":"feather",icon:"icon-edit"},on:{click:function(a){return e.taxEdit(t.tax_id)}}}):e._e(),e._v(" "),a("vs-button",{attrs:{size:"small",type:"border","icon-pack":"feather",icon:"icon-maximize-2",to:"/tax-collection/"+t.tax_id}})],1)],1)}))}}])},[a("template",{slot:"header"},[a("vs-button",{staticStyle:{"margin-top":"-5px"},attrs:{color:"primary",type:"border",icon:"cloud_download"}},[e._v("Export")])],1),e._v(" "),a("template",{slot:"thead"},[a("vs-th",[e._v("created by")]),e._v(" "),a("vs-th",[e._v("Code")]),e._v(" "),a("vs-th",[e._v("Title")]),e._v(" "),a("vs-th",[e._v("Description")]),e._v(" "),a("vs-th",[e._v("Type")]),e._v(" "),a("vs-th",[e._v("revision")]),e._v(" "),a("vs-th",[e._v("Status")]),e._v(" "),a("vs-th",[e._v("Actions")])],1)],2)],2),e._v(" "),a("vs-popup",{attrs:{active:e.addTaxManagmentModal,title:"Add Tax Managment"},on:{"update:active":function(t){e.addTaxManagmentModal=t}}},[a("form",{ref:"addTaxManagmentForm",attrs:{"data-vv-scope":"addform"},on:{submit:function(t){return t.preventDefault(),e.addTaxManagment(t,"addform")}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.tax_customer_id,expression:"tax_customer_id"}],attrs:{type:"hidden",name:"category_id"},domProps:{value:e.tax_customer_id},on:{input:function(t){t.target.composing||(e.tax_customer_id=t.target.value)}}}),e._v(" "),a("vs-row",[a("vs-col",{attrs:{"vs-lg":"12","vs-md":"12","vs-sm":"12"}},[""!=e.tax_identifier?a("div",[a("h4",[e._v("Tax Code: "+e._s(e.tax_identifier))])]):e._e(),e._v(" "),a("vx-input-group",[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"title","label-placeholder":"Title","data-vv-scope":"addform"},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("addform.title"),expression:"errors.has('addform.title')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("addform.title")))])],1),e._v(" "),a("vx-input-group",[a("br"),e._v(" "),a("vs-textarea",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"description",counter:20,label:"Description","data-vv-scope":"addform"},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("addform.description"),expression:"errors.has('addform.description')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("addform.description")))])],1),e._v(" "),a("vx-input-group",{staticClass:"mt-2"},[a("vs-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticStyle:{width:"100%"},attrs:{label:"Type",name:"type"},on:{input:e.changeType},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},[a("vs-select-item",{attrs:{text:"Select Type",value:""}}),e._v(" "),a("vs-select-item",{attrs:{text:"Monthly Tax",value:"Monthly"}}),e._v(" "),a("vs-select-item",{attrs:{text:"Annual Tax",value:"Yearly"}}),e._v(" "),a("vs-select-item",{attrs:{text:"Resubmission Tax",value:"Resubmission Tax"}})],1),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("addform.type"),expression:"errors.has('addform.type')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("addform.type")))])],1),e._v(" "),a("vx-input-group",[a("br"),e._v(" "),a("vs-textarea",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"notes",counter:100,label:"Notes","data-vv-scope":"addform"},model:{value:e.notes,callback:function(t){e.notes=t},expression:"notes"}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("addform.notes"),expression:"errors.has('addform.notes')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("addform.notes")))])],1)],1),e._v(" "),a("vs-col",{attrs:{"vs-lg":"12","vs-md":"12","vs-sm":"12"}},[a("br"),e._v(" "),a("vs-button",{staticClass:"float-right",attrs:{button:"submit",type:"gradient"}},[e._v("Add Tax Managment")])],1)],1)],1)]),e._v(" "),a("vs-popup",{attrs:{active:e.editTaxManagmentModal,title:"Add Tax Managment"},on:{"update:active":function(t){e.editTaxManagmentModal=t}}},[a("form",{ref:"editTaxManagmentForm",attrs:{"data-vv-scope":"editform"},on:{submit:function(t){return t.preventDefault(),e.editTaxManagment(t)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.tax_customer_id,expression:"tax_customer_id"}],attrs:{type:"hidden",name:"category_id"},domProps:{value:e.tax_customer_id},on:{input:function(t){t.target.composing||(e.tax_customer_id=t.target.value)}}}),e._v(" "),a("vs-row",[a("vs-col",{attrs:{"vs-lg":"12","vs-md":"12","vs-sm":"12"}},[e.editTax.tax_code?a("div",[a("h4",[e._v("Tax Code: "+e._s(e.editTax.tax_code))])]):e._e()]),e._v(" "),a("vs-col",{attrs:{"vs-lg":"6","vs-md":"6","vs-sm":"12"}},[a("vx-input-group",[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"title",label:"Title",placeholder:"Title","data-vv-scope":"editform"},model:{value:e.editTax.title,callback:function(t){e.$set(e.editTax,"title",t)},expression:"editTax.title"}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("editform.title"),expression:"errors.has('editform.title')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("editform.title")))])],1),e._v(" "),a("vx-input-group",[a("br"),e._v(" "),a("vs-textarea",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"description",counter:50,label:"Description","data-vv-scope":"editform"},model:{value:e.editTax.description,callback:function(t){e.$set(e.editTax,"description",t)},expression:"editTax.description"}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("editform.description"),expression:"errors.has('editform.description')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("editform.description")))])],1)],1),e._v(" "),a("vs-col",{attrs:{"vs-lg":"6","vs-md":"12","vs-sm":"12"}},[a("vx-input-group",[a("vs-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticStyle:{width:"100%"},attrs:{placeholder:"Select Type",label:"Type",name:"type"},on:{input:e.editChangeType},model:{value:e.editTax.type,callback:function(t){e.$set(e.editTax,"type",t)},expression:"editTax.type"}},[a("vs-select-item",{attrs:{text:"Monthly Tax",value:"Monthly Tax"}}),e._v(" "),a("vs-select-item",{attrs:{text:"Annual Tax",value:"Annual Tax"}}),e._v(" "),a("vs-select-item",{attrs:{text:"Resubmission Tax",value:"Resubmission Tax"}})],1),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("editform.type"),expression:"errors.has('editform.type')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("editform.type")))])],1),e._v(" "),a("vx-input-group",[a("br"),e._v(" "),a("vs-textarea",{attrs:{name:"notes",counter:100,label:"Notes","data-vv-scope":"editform"},model:{value:e.notes,callback:function(t){e.notes=t},expression:"notes"}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("editform.notes"),expression:"errors.has('editform.notes')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("editform.notes")))])],1)],1),e._v(" "),a("vs-col",{attrs:{"vs-lg":"12","vs-md":"12","vs-sm":"12"}},[a("br"),e._v(" "),a("vs-button",{staticClass:"float-right",attrs:{button:"submit",type:"gradient"}},[e._v("Update")])],1)],1)],1)])],1)}),[],!1,null,null,null);t.default=l.exports},54:function(e,t,a){"use strict";var s=a(17);a.n(s).a},55:function(e,t,a){(e.exports=a(4)(!1)).push([e.i,".selectExample {\n  margin: 10px;\n}\n.con-select-example {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.con-select .vs-select {\n  width: 100%\n}\n@media (max-width: 550px) {\n.con-select {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n}\n.con-select .vs-select {\n    width: 100%\n}\n}\r\n\r\n",""])}}]);
>>>>>>> 9279f5548c37aca60b0d3f76080a42724fcbe98b
