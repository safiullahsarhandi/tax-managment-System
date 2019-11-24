(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Supervisors.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Supervisors.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  inject: ['generatePassword'],
  data: function data() {
    return {
      addSupervisorModal: false,
      editSupervisorModal: false,
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
      edit_manager_id: ''
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('supervisors/', ['supervisors']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('supervisors/', ['findSupervisor'])),
  created: function created() {
    this.getSupervisors();
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    getSupervisors: 'supervisors/getSupervisors',
    submit: 'supervisors/addSupervisor',
    update: 'supervisors/updateSupervisor'
  }), {
    addSupervisor: function addSupervisor(e) {
      var _this = this;

      this.$validator.validateAll('addform').then(function (result) {
        if (result) {
          _this.$vs.loading();

          var fd = new FormData(_this.$refs.addSupervisorForm);
          fd.append('gender', _this.gender);

          _this.submit(fd).then(function (res) {
            // console.log(res.data);
            if (res.data.status == 'success') {
              _this.password = _this.email = _this.first_name = _this.last_name = _this.zip_code = _this.city = _this.state = _this.address = _this.phone = '';
              e.target.reset();

              _this.errors.clear();

              _this.addSupervisorModal = false;

              _this.$vs.notify({
                title: 'Success',
                text: 'Supervisor Added Successfully',
                color: 'success',
                position: 'top-right'
              });

              _this.$vs.loading.close();

              _this.getSupervisors();
            }
          });
        }
      });
    },
    statusUpdate: function statusUpdate(id) {
      var _this2 = this;

      this.$vs.loading();
      axios.post('status-update-supervisor', {
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
    editSupervisor: function editSupervisor(id) {
      var supervisor = this.findSupervisor(id); // console.log(supervisor)
      // console.log(supervisor);
      // console.log(supervisor);

      this.edit_manager_id = supervisor.manager_id;
      this.edit_first_name = supervisor.first_name;
      this.edit_last_name = supervisor.last_name;
      this.edit_email = supervisor.email;
      this.edit_gender = supervisor.gender; // console.log(this.edit_gender)

      this.edit_zip_code = supervisor.zip_code;
      this.edit_address = supervisor.address;
      this.edit_phone = supervisor.phone;
      this.edit_state = supervisor.state;
      this.edit_zip_code = supervisor.zip_code;
      this.edit_city = supervisor.city;
      this.editSupervisorModal = true;
    },
    updateSupervisor: function updateSupervisor(e) {
      var _this3 = this;

      this.$validator.validateAll('editform').then(function (result) {
        if (result) {
          _this3.$vs.loading();

          var fd = new FormData(_this3.$refs.editSupervisorForm);
          fd.append('gender', _this3.edit_gender);

          _this3.update(fd).then(function (res) {
            // console.log(res.data);
            if (res.data.status == 'success') {
              _this3.edit_email = _this3.edit_first_name = _this3.edit_last_name = _this3.edit_zip_code = _this3.edit_city = _this3.edit_state = _this3.edit_address = _this3.edit_phone = '';
              _this3.edit_gender = 'male';
              e.target.reset();

              _this3.errors.clear();

              _this3.editSupervisorModal = false;

              _this3.$vs.notify({
                title: 'Success',
                text: 'Supervisor Updated Successfully',
                color: 'success',
                position: 'top-right'
              });

              _this3.$vs.loading.close(); // this.getSupervisors();

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Supervisors.vue?vue&type=template&id=33f1a2f4&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Supervisors.vue?vue&type=template&id=33f1a2f4& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
        { attrs: { title: "List of Supervisors" } },
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
                    _vm.addSupervisorModal = true
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
                data: _vm.supervisors
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
                          _c("vs-td", { attrs: { data: index++ } }, [
                            _vm._v(_vm._s(index++))
                          ]),
                          _vm._v(" "),
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
                            {
                              attrs: {
                                data:
                                  tr.address +
                                  " " +
                                  tr.state +
                                  " " +
                                  tr.city +
                                  " " +
                                  tr.zip_code
                              }
                            },
                            [
                              _vm._v(
                                _vm._s(tr.address) +
                                  " " +
                                  _vm._s(tr.state) +
                                  " " +
                                  _vm._s(tr.city) +
                                  " " +
                                  _vm._s(tr.zip_code)
                              )
                            ]
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
                                  value: tr.status,
                                  callback: function($$v) {
                                    _vm.$set(tr, "status", $$v)
                                  },
                                  expression: "tr.status"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            [
                              _c(
                                "vs-button",
                                {
                                  attrs: { type: "border" },
                                  on: {
                                    click: function($event) {
                                      return _vm.editSupervisor(tr.id)
                                    }
                                  }
                                },
                                [_vm._v("Edit")]
                              ),
                              _vm._v(" "),
                              _c("vs-button", { attrs: { type: "border" } }, [
                                _vm._v("Detail")
                              ])
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
                  _c("vs-th", [_vm._v("S.No")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Name")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Phone #")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Email")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Address")]),
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
          attrs: {
            active: _vm.addSupervisorModal,
            title: "Add New Supervisor"
          },
          on: {
            "update:active": function($event) {
              _vm.addSupervisorModal = $event
            }
          }
        },
        [
          _c(
            "form",
            {
              ref: "addSupervisorForm",
              attrs: { "data-vv-scope": "addform" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.addSupervisor($event)
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
                                  value: _vm.errors.has("first_name"),
                                  expression: "errors.has('first_name')"
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
                                  value: _vm.errors.has("last_name"),
                                  expression: "errors.has('last_name')"
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
                                  value: _vm.errors.has("phone"),
                                  expression: "errors.has('phone')"
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
                                  value: _vm.errors.has("email"),
                                  expression: "errors.has('email')"
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
                          _c(
                            "div",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.errors.has("password"),
                                  expression: "errors.has('password')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("addform.password"))
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-button",
                            {
                              staticClass: "mt-2",
                              attrs: { button: "button", type: "border" },
                              on: {
                                click: function($event) {
                                  return _vm.makePassword()
                                }
                              }
                            },
                            [_vm._v("Generate Password")]
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
                                  value: _vm.errors.has("address"),
                                  expression: "errors.has('address')"
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
                                  value: _vm.errors.has("state"),
                                  expression: "errors.has('state')"
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
                                  value: _vm.errors.has("city"),
                                  expression: "errors.has('city')"
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
                                  value: _vm.errors.has("zip_code"),
                                  expression: "errors.has('zip_code')"
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
                        [_vm._v("Add Supervisor")]
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
            active: _vm.editSupervisorModal,
            title: "Update Supervisor"
          },
          on: {
            "update:active": function($event) {
              _vm.editSupervisorModal = $event
            }
          }
        },
        [
          _c(
            "form",
            {
              ref: "editSupervisorForm",
              attrs: { autocomplete: "off", "data-vv-scope": "editform" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.updateSupervisor($event)
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
                                  value: _vm.errors.has("first_name"),
                                  expression: "errors.has('first_name')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [_vm._v(_vm._s(_vm.errors.first("first_name")))]
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
                                  value: _vm.errors.has("last_name"),
                                  expression: "errors.has('last_name')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [_vm._v(_vm._s(_vm.errors.first("last_name")))]
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
                                  value: _vm.errors.has("phone"),
                                  expression: "errors.has('phone')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [_vm._v(_vm._s(_vm.errors.first("phone")))]
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
                                  value: _vm.errors.has("email"),
                                  expression: "errors.has('email')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [_vm._v(_vm._s(_vm.errors.first("email")))]
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
                                  value: _vm.errors.has("address"),
                                  expression: "errors.has('address')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [_vm._v(_vm._s(_vm.errors.first("address")))]
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
                                  value: _vm.errors.has("state"),
                                  expression: "errors.has('state')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [_vm._v(_vm._s(_vm.errors.first("state")))]
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
                                  value: _vm.errors.has("city"),
                                  expression: "errors.has('city')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [_vm._v(_vm._s(_vm.errors.first("city")))]
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
                                  value: _vm.errors.has("zip_code"),
                                  expression: "errors.has('zip_code')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [_vm._v(_vm._s(_vm.errors.first("zip_code")))]
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
                        [_vm._v("Update Supervisor")]
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

/***/ "./resources/js/src/views/pages/Supervisors.vue":
/*!******************************************************!*\
  !*** ./resources/js/src/views/pages/Supervisors.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Supervisors_vue_vue_type_template_id_33f1a2f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Supervisors.vue?vue&type=template&id=33f1a2f4& */ "./resources/js/src/views/pages/Supervisors.vue?vue&type=template&id=33f1a2f4&");
/* harmony import */ var _Supervisors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Supervisors.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Supervisors.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Supervisors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Supervisors_vue_vue_type_template_id_33f1a2f4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Supervisors_vue_vue_type_template_id_33f1a2f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/Supervisors.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/Supervisors.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/pages/Supervisors.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Supervisors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Supervisors.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Supervisors.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Supervisors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Supervisors.vue?vue&type=template&id=33f1a2f4&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Supervisors.vue?vue&type=template&id=33f1a2f4& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Supervisors_vue_vue_type_template_id_33f1a2f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Supervisors.vue?vue&type=template&id=33f1a2f4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Supervisors.vue?vue&type=template&id=33f1a2f4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Supervisors_vue_vue_type_template_id_33f1a2f4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Supervisors_vue_vue_type_template_id_33f1a2f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);