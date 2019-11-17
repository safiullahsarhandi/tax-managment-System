(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Customers/AddCustomer.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Customers/AddCustomer.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Officers.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Officers.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
>>>>>>> d34834d0b4c9904cbdb561c125d3015977f66108
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
=======
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
>>>>>>> d34834d0b4c9904cbdb561c125d3015977f66108
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
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
      industry: ''
    };
  },
  methods: {
    addMoreFeild: function addMoreFeild() {
      this.customField.push({
        name: 'additional_field[]',
        value: '',
        type: 'text'
      });
    },
    addCustomer: function addCustomer(e) {}
  }
=======
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  inject: ['generatePassword'],
  data: function data() {
    return {
      addOfficerModal: false,
      editOfficerModal: false,
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
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('officers/', ['officers']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('officers/', ['findOfficer'])),
  created: function created() {
    this.getOfficers();
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    getOfficers: 'officers/getOfficers',
    submit: 'officers/addOfficer',
    update: 'officers/updateOfficer'
  }), {
    addOfficer: function addOfficer(e) {
      var _this = this;

      this.$validator.validateAll('addform').then(function (result) {
        if (result) {
          var fd = new FormData(_this.$refs.addOfficerForm);
          fd.append('gender', _this.gender);

          _this.submit(fd).then(function (res) {
            // console.log(res.data);
            if (res.data.status == 'success') {
              _this.password = _this.email = _this.first_name = _this.last_name = _this.zip_code = _this.city = _this.state = _this.address = _this.phone = '';
              e.target.reset();

              _this.errors.clear();

              _this.addOfficerModal = false;

              _this.getOfficers();
            }

            if (res.data.status == 'error') {
              alert(res.data.msg);
            }
          });
        }
      });
    },
    editOfficer: function editOfficer(id) {
      var officer = this.findOfficer(id);
      this.edit_manager_id = officer.manager_id;
      this.edit_first_name = officer.first_name;
      this.edit_last_name = officer.last_name;
      this.edit_email = officer.email;
      this.edit_gender = officer.gender;
      this.edit_zip_code = officer.zip_code;
      this.edit_address = officer.address;
      this.edit_phone = officer.phone;
      this.edit_state = officer.state;
      this.edit_zip_code = officer.zip_code;
      this.edit_city = officer.city;
      this.editOfficerModal = true;
    },
    updateOfficer: function updateOfficer(e) {
      var _this2 = this;

      this.$validator.validateAll('editform').then(function (result) {
        if (result) {
          var fd = new FormData(_this2.$refs.editOfficerForm);
          fd.append('gender', _this2.edit_gender);

          _this2.update(fd).then(function (res) {
            // console.log(res.data);
            if (res.data.status == 'success') {
              _this2.edit_email = _this2.edit_first_name = _this2.edit_last_name = _this2.edit_zip_code = _this2.edit_city = _this2.edit_state = _this2.edit_address = _this2.edit_phone = '';
              _this2.edit_gender = 'male';
              e.target.reset();

              _this2.errors.clear();

              _this2.editOfficerModal = false; // this.getOfficers();
            }
          });
        }
      });
    },
    makePassword: function makePassword() {
      this.password = this.generatePassword();
    }
  })
>>>>>>> d34834d0b4c9904cbdb561c125d3015977f66108
});

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Customers/AddCustomer.vue?vue&type=template&id=11f55c80&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Customers/AddCustomer.vue?vue&type=template&id=11f55c80& ***!
  \*****************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Officers.vue?vue&type=template&id=11458d92&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Officers.vue?vue&type=template&id=11458d92& ***!
  \****************************************************************************************************************************************************************************************************************/
>>>>>>> d34834d0b4c9904cbdb561c125d3015977f66108
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
        {
          attrs: {
            title: "Add Customer",
            subtitle:
              "Add Information Of Customer OR company which tax will be managed by system",
            noShadow: "",
            noRadius: ""
=======
        { attrs: { title: "List of Officers" } },
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
                    _vm.addOfficerModal = true
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
                data: _vm.officers
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
                            [
                              _c(
                                "vs-button",
                                {
                                  attrs: { type: "border" },
                                  on: {
                                    click: function($event) {
                                      return _vm.editOfficer(tr.id)
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
                  _c("vs-th", [_vm._v("Name")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Phone #")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Email")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Address")]),
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
          attrs: { active: _vm.addOfficerModal, title: "Add New Officer" },
          on: {
            "update:active": function($event) {
              _vm.addOfficerModal = $event
            }
>>>>>>> d34834d0b4c9904cbdb561c125d3015977f66108
          }
        },
        [
          _c(
            "form",
            {
<<<<<<< HEAD
              ref: "addCustomer",
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.addCustomer($event)
=======
              ref: "addOfficerForm",
              attrs: { "data-vv-scope": "addform" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.addOfficer($event)
>>>>>>> d34834d0b4c9904cbdb561c125d3015977f66108
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
                    {
                      staticClass: "mb-2",
                      attrs: { "vs-md": "12", "vs-lg": "4", "vs-sm": "12" }
                    },
=======
                    { attrs: { "vs-lg": "6", "vs-md": "6", "vs-sm": "12" } },
>>>>>>> d34834d0b4c9904cbdb561c125d3015977f66108
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
<<<<<<< HEAD
                                expression: "`required`"
                              }
                            ],
                            attrs: {
                              name: "name_eng",
                              "label-placeholder": "Name (English)"
                            },
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
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-col",
                    {
                      staticClass: "mb-2",
                      attrs: { "vs-md": "12", "vs-lg": "4", "vs-sm": "12" }
                    },
                    [
=======
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
>>>>>>> d34834d0b4c9904cbdb561c125d3015977f66108
                      _c(
                        "vx-input-group",
                        [
                          _c("vs-input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
<<<<<<< HEAD
                                expression: "`required`"
                              }
                            ],
                            attrs: {
                              name: "name_khmer",
                              "label-placeholder": "Name (Khmer)"
                            },
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
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-col",
                    {
                      staticClass: "mb-2",
                      attrs: { "vs-md": "12", "vs-lg": "4", "vs-sm": "12" }
                    },
                    [
                      _c(
                        "vx-input-group",
=======
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
>>>>>>> d34834d0b4c9904cbdb561c125d3015977f66108
                        [
                          _c("vs-input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
<<<<<<< HEAD
                                expression: "`required`"
                              }
                            ],
                            attrs: {
                              name: "tax_id",
                              "label-placeholder": "Tax ID Card #"
                            },
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
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-col",
                    {
                      staticClass: "mb-2",
                      attrs: { "vs-md": "12", "vs-lg": "4", "vs-sm": "12" }
                    },
                    [
                      _c(
                        "vx-input-group",
=======
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
>>>>>>> d34834d0b4c9904cbdb561c125d3015977f66108
                        [
                          _c("vs-input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
<<<<<<< HEAD
                                expression: "`required`"
                              }
                            ],
                            attrs: {
                              name: "tin_num",
                              "label-placeholder": "TIN #"
                            },
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
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-col",
                    {
                      staticClass: "mb-2",
                      attrs: { "vs-md": "12", "vs-lg": "4", "vs-sm": "12" }
                    },
                    [
                      _c(
                        "vx-input-group",
=======
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
>>>>>>> d34834d0b4c9904cbdb561c125d3015977f66108
                        [
                          _c("vs-input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
<<<<<<< HEAD
                                expression: "`required`"
                              }
                            ],
                            attrs: {
                              name: "incorporation_date",
                              "label-placeholder":
                                "Date of company incorporated"
                            },
                            model: {
                              value: _vm.incorporation_date,
                              callback: function($$v) {
                                _vm.incorporation_date = $$v
                              },
                              expression: "incorporation_date"
                            }
                          })
=======
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
>>>>>>> d34834d0b4c9904cbdb561c125d3015977f66108
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-col",
<<<<<<< HEAD
                    {
                      staticClass: "mb-2",
                      attrs: { "vs-md": "12", "vs-lg": "4", "vs-sm": "12" }
                    },
                    [
                      _c(
                        "vx-input-group",
=======
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
>>>>>>> d34834d0b4c9904cbdb561c125d3015977f66108
                        [
                          _c("vs-input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
<<<<<<< HEAD
                                expression: "`required`"
=======
                                expression: "'required'"
>>>>>>> d34834d0b4c9904cbdb561c125d3015977f66108
                              }
                            ],
                            attrs: {
                              name: "address",
<<<<<<< HEAD
                              "label-placeholder": "Address"
=======
                              "label-placeholder": "Address",
                              "data-vv-scope": "addform"
>>>>>>> d34834d0b4c9904cbdb561c125d3015977f66108
                            },
                            model: {
                              value: _vm.address,
                              callback: function($$v) {
                                _vm.address = $$v
                              },
                              expression: "address"
                            }
<<<<<<< HEAD
                          })
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
                      staticClass: "mb-2",
                      attrs: { "vs-md": "12", "vs-lg": "4", "vs-sm": "12" }
                    },
                    [
                      _c(
                        "vx-input-group",
=======
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
>>>>>>> d34834d0b4c9904cbdb561c125d3015977f66108
                        [
                          _c("vs-input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
<<<<<<< HEAD
                                expression: "`required`"
                              }
                            ],
                            attrs: {
                              name: "street",
                              "label-placeholder": "Street"
                            },
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
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-col",
                    {
                      staticClass: "mb-2",
                      attrs: { "vs-md": "12", "vs-lg": "4", "vs-sm": "12" }
                    },
                    [
                      _c(
                        "vx-input-group",
=======
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
>>>>>>> d34834d0b4c9904cbdb561c125d3015977f66108
                        [
                          _c("vs-input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
<<<<<<< HEAD
                                expression: "`required`"
                              }
                            ],
                            attrs: {
                              name: "group",
                              "label-placeholder": "Group"
                            },
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
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-col",
                    {
                      staticClass: "mb-2",
                      attrs: { "vs-md": "12", "vs-lg": "4", "vs-sm": "12" }
                    },
                    [
                      _c(
                        "vx-input-group",
=======
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
>>>>>>> d34834d0b4c9904cbdb561c125d3015977f66108
                        [
                          _c("vs-input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
<<<<<<< HEAD
                                expression: "`required`"
                              }
                            ],
                            attrs: {
                              name: "village",
                              "label-placeholder": "Village"
                            },
                            model: {
                              value: _vm.village,
                              callback: function($$v) {
                                _vm.village = $$v
                              },
                              expression: "village"
                            }
                          })
=======
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
>>>>>>> d34834d0b4c9904cbdb561c125d3015977f66108
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-col",
<<<<<<< HEAD
                    {
                      staticClass: "mb-2",
                      attrs: { "vs-md": "12", "vs-lg": "4", "vs-sm": "12" }
                    },
=======
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
                        [_vm._v("Add Officer")]
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
          attrs: { active: _vm.editOfficerModal, title: "Update Officer" },
          on: {
            "update:active": function($event) {
              _vm.editOfficerModal = $event
            }
          }
        },
        [
          _c(
            "form",
            {
              ref: "editOfficerForm",
              attrs: { autocomplete: "off", "data-vv-scope": "editform" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.updateOfficer($event)
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
>>>>>>> d34834d0b4c9904cbdb561c125d3015977f66108
                    [
                      _c(
                        "vx-input-group",
                        [
<<<<<<< HEAD
=======
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
>>>>>>> d34834d0b4c9904cbdb561c125d3015977f66108
                          _c("vs-input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
<<<<<<< HEAD
                                expression: "`required`"
                              }
                            ],
                            attrs: {
                              name: "sangkat",
                              "label-placeholder": "Sangkat"
                            },
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
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-col",
                    {
                      staticClass: "mb-2",
                      attrs: { "vs-md": "12", "vs-lg": "4", "vs-sm": "12" }
                    },
                    [
=======
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
>>>>>>> d34834d0b4c9904cbdb561c125d3015977f66108
                      _c(
                        "vx-input-group",
                        [
                          _c("vs-input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
<<<<<<< HEAD
                                expression: "`required`"
                              }
                            ],
                            attrs: {
                              name: "district",
                              "label-placeholder": "District"
                            },
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
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-col",
                    {
                      staticClass: "mb-2",
                      attrs: { "vs-md": "12", "vs-lg": "4", "vs-sm": "12" }
                    },
                    [
                      _c(
                        "vx-input-group",
=======
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
>>>>>>> d34834d0b4c9904cbdb561c125d3015977f66108
                        [
                          _c("vs-input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
<<<<<<< HEAD
                                expression: "`required`"
                              }
                            ],
                            attrs: {
                              name: "province",
                              "label-placeholder": "Province"
                            },
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
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-col",
                    {
                      staticClass: "mb-2",
                      attrs: { "vs-md": "12", "vs-lg": "4", "vs-sm": "12" }
                    },
                    [
                      _c(
                        "vx-input-group",
=======
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
>>>>>>> d34834d0b4c9904cbdb561c125d3015977f66108
                        [
                          _c("vs-input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
<<<<<<< HEAD
                                expression: "`required`"
                              }
                            ],
                            attrs: {
                              name: "muncipality",
                              "label-placeholder": "Muncipality"
                            },
                            model: {
                              value: _vm.muncipality,
                              callback: function($$v) {
                                _vm.muncipality = $$v
                              },
                              expression: "muncipality"
                            }
                          })
=======
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
>>>>>>> d34834d0b4c9904cbdb561c125d3015977f66108
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-col",
<<<<<<< HEAD
                    {
                      staticClass: "mb-2",
                      attrs: { "vs-md": "12", "vs-lg": "4", "vs-sm": "12" }
                    },
                    [
                      _c(
                        "vx-input-group",
=======
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
>>>>>>> d34834d0b4c9904cbdb561c125d3015977f66108
                        [
                          _c("vs-input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
<<<<<<< HEAD
                                expression: "`required`"
                              }
                            ],
                            attrs: { name: "tel", "label-placeholder": "Tel." },
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
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-col",
                    {
                      staticClass: "mb-2",
                      attrs: { "vs-md": "12", "vs-lg": "4", "vs-sm": "12" }
                    },
                    [
                      _c(
                        "vx-input-group",
=======
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
>>>>>>> d34834d0b4c9904cbdb561c125d3015977f66108
                        [
                          _c("vs-input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
<<<<<<< HEAD
                                expression: "`required`"
                              }
                            ],
                            attrs: {
                              name: "email",
                              type: "email",
                              "label-placeholder": "Email"
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
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-col",
                    {
                      staticClass: "mb-2",
                      attrs: { "vs-md": "12", "vs-lg": "4", "vs-sm": "12" }
                    },
                    [
                      _c(
                        "vx-input-group",
=======
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
>>>>>>> d34834d0b4c9904cbdb561c125d3015977f66108
                        [
                          _c("vs-input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
<<<<<<< HEAD
                                expression: "`required`"
                              }
                            ],
                            attrs: {
                              name: "industry",
                              "label-placeholder": "Industry / Sector"
                            },
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
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.customField, function(field, index) {
                    return _c(
                      "vs-col",
                      {
                        key: index,
                        staticClass: "mb-2",
                        attrs: { "vs-md": "12", "vs-lg": "4", "vs-sm": "12" }
                      },
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
                                name: field.name,
                                "label-placeholder":
                                  "Custom Field " + (index + 1)
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
                    "vs-col",
                    {
                      staticClass: "mb-2",
                      attrs: { "vs-md": "12", "vs-lg": "4", "vs-sm": "12" }
                    },
                    [
                      _c(
                        "vs-button",
                        {
                          staticClass: "mt-5",
                          attrs: { type: "gradient", button: "button" },
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
              _c(
                "vs-row",
                [
                  _c(
                    "vs-col",
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
                              attrs: { type: "gradient" }
                            },
                            [_vm._v("Save")]
=======
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
>>>>>>> d34834d0b4c9904cbdb561c125d3015977f66108
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
<<<<<<< HEAD
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
                              attrs: { type: "gradient", button: "button" }
                            },
                            [_vm._v("Upload Excel Sheet")]
=======
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
>>>>>>> d34834d0b4c9904cbdb561c125d3015977f66108
                          )
                        ],
                        1
                      )
                    ],
                    1
<<<<<<< HEAD
=======
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
                        [_vm._v("Update Officer")]
                      )
                    ],
                    1
>>>>>>> d34834d0b4c9904cbdb561c125d3015977f66108
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
/***/ "./resources/js/src/views/pages/Customers/AddCustomer.vue":
/*!****************************************************************!*\
  !*** ./resources/js/src/views/pages/Customers/AddCustomer.vue ***!
  \****************************************************************/
=======
/***/ "./resources/js/src/views/pages/Officers.vue":
/*!***************************************************!*\
  !*** ./resources/js/src/views/pages/Officers.vue ***!
  \***************************************************/
>>>>>>> d34834d0b4c9904cbdb561c125d3015977f66108
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _AddCustomer_vue_vue_type_template_id_11f55c80___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddCustomer.vue?vue&type=template&id=11f55c80& */ "./resources/js/src/views/pages/Customers/AddCustomer.vue?vue&type=template&id=11f55c80&");
/* harmony import */ var _AddCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddCustomer.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Customers/AddCustomer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
=======
/* harmony import */ var _Officers_vue_vue_type_template_id_11458d92___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Officers.vue?vue&type=template&id=11458d92& */ "./resources/js/src/views/pages/Officers.vue?vue&type=template&id=11458d92&");
/* harmony import */ var _Officers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Officers.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Officers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
>>>>>>> d34834d0b4c9904cbdb561c125d3015977f66108





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
<<<<<<< HEAD
  _AddCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddCustomer_vue_vue_type_template_id_11f55c80___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddCustomer_vue_vue_type_template_id_11f55c80___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
=======
  _Officers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Officers_vue_vue_type_template_id_11458d92___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Officers_vue_vue_type_template_id_11458d92___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
>>>>>>> d34834d0b4c9904cbdb561c125d3015977f66108
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
<<<<<<< HEAD
component.options.__file = "resources/js/src/views/pages/Customers/AddCustomer.vue"
=======
component.options.__file = "resources/js/src/views/pages/Officers.vue"
>>>>>>> d34834d0b4c9904cbdb561c125d3015977f66108
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/src/views/pages/Customers/AddCustomer.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Customers/AddCustomer.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
=======
/***/ "./resources/js/src/views/pages/Officers.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/pages/Officers.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
>>>>>>> d34834d0b4c9904cbdb561c125d3015977f66108
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddCustomer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Customers/AddCustomer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Customers/AddCustomer.vue?vue&type=template&id=11f55c80&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Customers/AddCustomer.vue?vue&type=template&id=11f55c80& ***!
  \***********************************************************************************************/
=======
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Officers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Officers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Officers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Officers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Officers.vue?vue&type=template&id=11458d92&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/pages/Officers.vue?vue&type=template&id=11458d92& ***!
  \**********************************************************************************/
>>>>>>> d34834d0b4c9904cbdb561c125d3015977f66108
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCustomer_vue_vue_type_template_id_11f55c80___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddCustomer.vue?vue&type=template&id=11f55c80& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Customers/AddCustomer.vue?vue&type=template&id=11f55c80&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCustomer_vue_vue_type_template_id_11f55c80___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCustomer_vue_vue_type_template_id_11f55c80___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
=======
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Officers_vue_vue_type_template_id_11458d92___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Officers.vue?vue&type=template&id=11458d92& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Officers.vue?vue&type=template&id=11458d92&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Officers_vue_vue_type_template_id_11458d92___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Officers_vue_vue_type_template_id_11458d92___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
>>>>>>> d34834d0b4c9904cbdb561c125d3015977f66108



/***/ })

}]);