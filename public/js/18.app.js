(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Login.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Login.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
=======
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Payrolls/PendingPayrolls.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Payrolls/PendingPayrolls.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      email: '',
      password: '',
      checkbox_remember_me: false
    };
  },
  created: function created() {
    if (localStorage.getItem('admin')) {
      this.$router.push('/dashboard');
    }
  },
  methods: {
    onSubmit: function onSubmit(e) {
      var _this = this;

      self = this;
      this.$validator.validateAll().then(function (result) {
        if (result) {
          _this.$vs.loading({
            type: 'sound',
            text: 'Loading...'
          });

          var fd = new FormData(_this.$refs.loginForm);
          axios.post('login', fd).then(function (res) {
            if (res.data.status == 'error') {
              _this.$vs.notify({
                'color': 'danger',
                'text': res.data.msg,
                'position': 'top-right',
                'icon': 'warning'
              });
            } else {
              _this.$vs.notify({
                'color': 'success',
                'text': res.data.msg,
                'position': 'top-right',
                'icon': 'check_box'
              });

              var adminData = res.data.session;
              localStorage.setItem('admin', adminData.manager_id);

              _this.$store.commit('setLoginUser', adminData);

              _this.$router.push('/dashboard');
            }

            _this.$vs.loading.close();
=======

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
      tax_id: ''
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('payrolls/', ['payrolls'])),
  created: function created() {
    this.tax_id = this.$store.state.rootUrl.split('/')[2];
    this.getPendingPayrolls(this.tax_id);
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    getPendingPayrolls: 'payrolls/getPendingPayrolls'
  }), {
    addMoreFeild: function addMoreFeild() {
      this.customField.push({
        name: 'additional_field[]',
        value: '',
        type: 'text'
      });
    },
    updateCustomer: function updateCustomer(e) {
      var _this = this;

      this.$validator.validateAll('editform').then(function (result) {
        if (result) {
          _this.$vs.loading();

          var fd = new FormData(_this.$refs.editCustomerForm);

          _this.update(fd).then(function (res) {
            if (res.data.status == 'success') {
              e.target.reset();

              _this.errors.clear();

              _this.editCustomerModal = false;

              _this.$vs.notify({
                title: 'Success',
                text: 'Customer Updated Successfully',
                color: 'success',
                position: 'top-right'
              });

              _this.$vs.loading.close();

              _this.getCustomers();
            }
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
          });
        }
      });
    }
<<<<<<< HEAD
  }
=======
  })
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
});

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Login.vue?vue&type=style&index=0&id=ba09a9b8&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Login.vue?vue&type=style&index=0&id=ba09a9b8&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
=======
/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Payrolls/PendingPayrolls.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Payrolls/PendingPayrolls.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
// imports


// module
<<<<<<< HEAD
exports.push([module.i, "/*.p-8 {\r\n    padding: 1.9rem !important;\r\n}\r\n*/\r\n", ""]);
=======
exports.push([module.i, ".con-vs-popup .vs-popup {\n  width: 1000px !important;\n}\r\n\r\n", ""]);
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1

// exports


/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Login.vue?vue&type=style&index=0&id=ba09a9b8&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Login.vue?vue&type=style&index=0&id=ba09a9b8&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Payrolls/PendingPayrolls.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Payrolls/PendingPayrolls.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


<<<<<<< HEAD
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=style&index=0&id=ba09a9b8&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Login.vue?vue&type=style&index=0&id=ba09a9b8&scoped=true&lang=css&");
=======
var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PendingPayrolls.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Payrolls/PendingPayrolls.vue?vue&type=style&index=0&lang=css&");
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1

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
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Login.vue?vue&type=template&id=ba09a9b8&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Login.vue?vue&type=template&id=ba09a9b8&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Payrolls/PendingPayrolls.vue?vue&type=template&id=15cc2879&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Payrolls/PendingPayrolls.vue?vue&type=template&id=15cc2879& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
          _c("vx-card", [
            _c(
              "div",
              {
                staticClass: "full-page-bg-color",
                staticStyle: { "box-shadow": "2px 4px 20px 5px !important" },
                attrs: { slot: "no-body" },
                slot: "no-body"
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "vx-row no-gutter justify-center items-center"
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "vx-col sm:w-full md:w-full lg:w-full" },
                      [
                        _c(
                          "form",
                          {
                            ref: "loginForm",
                            attrs: { autocomplete: "off" },
                            on: {
                              submit: function($event) {
                                $event.preventDefault()
                                return _vm.onSubmit($event)
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
                                      attrs: { src: "./public/images/33i.png" }
                                    }),
                                    _vm._v(" "),
                                    _c("h4", { staticClass: "mb-4" }, [
                                      _vm._v("Login")
                                    ]),
                                    _vm._v(" "),
                                    _c("p", [
                                      _vm._v(
                                        "Welcome back, please login to your account."
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
                                    "label-placeholder": "Email"
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
                                      value: _vm.errors.has("email"),
                                      expression: "errors.has('email')"
                                    }
                                  ],
                                  staticClass: "text-danger",
                                  domProps: {
                                    innerHTML: _vm._s(_vm.errors.first("email"))
                                  }
                                }),
                                _vm._v(" "),
                                _c("vs-input", {
                                  directives: [
                                    {
                                      name: "validate",
                                      rawName: "v-validate",
                                      value: "required|min:6",
                                      expression: "'required|min:6'"
                                    }
                                  ],
                                  staticClass: "w-full mt-6 no-icon-border",
                                  attrs: {
                                    type: "password",
                                    name: "password",
                                    icon: "icon icon-lock",
                                    "icon-pack": "feather",
                                    "label-placeholder": "Password"
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
                                      value: _vm.errors.has("password"),
                                      expression: "errors.has('password')"
                                    }
                                  ],
                                  staticClass: "text-danger",
                                  domProps: {
                                    innerHTML: _vm._s(
                                      _vm.errors.first("password")
                                    )
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "flex flex-wrap justify-between my-5"
                                  },
                                  [
                                    _c(
                                      "vs-checkbox",
                                      {
                                        staticClass: "mb-3",
                                        model: {
                                          value: _vm.checkbox_remember_me,
                                          callback: function($$v) {
                                            _vm.checkbox_remember_me = $$v
                                          },
                                          expression: "checkbox_remember_me"
                                        }
                                      },
                                      [_vm._v("Remember Me")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "router-link",
                                      { attrs: { to: "/forgot-password" } },
                                      [_vm._v("Forgot Password?")]
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
                                      { attrs: { "vs-w": "12" } },
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
                                          [_vm._v("Login")]
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
        ],
        1
      )
    ]
=======
    [
      _c(
        "vx-card",
        {
          attrs: {
            title: "Pending Payroll Approvals",
            subtitle:
              "listed below Payrolls need your approval which are created by you and your officers"
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
                            { attrs: { data: tr.officer.full_name } },
                            [_vm._v(_vm._s(tr.officer.full_name))]
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
                          _c("vs-td", [
                            _vm._v(
                              "\n                            " +
                                _vm._s(tr.officer_confirmation) +
                                "\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c("vs-td", [_c("vs-switch")], 1),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            [
                              _c("vs-button", {
                                attrs: {
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
                  _c("vs-th", [_vm._v("Added By")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Employee Name")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Employee No.")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("NSSF No.")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Note")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Actions")])
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
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/src/views/pages/Login.vue":
/*!************************************************!*\
  !*** ./resources/js/src/views/pages/Login.vue ***!
  \************************************************/
=======
/***/ "./resources/js/src/views/pages/Payrolls/PendingPayrolls.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/src/views/pages/Payrolls/PendingPayrolls.vue ***!
  \*******************************************************************/
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _Login_vue_vue_type_template_id_ba09a9b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=ba09a9b8&scoped=true& */ "./resources/js/src/views/pages/Login.vue?vue&type=template&id=ba09a9b8&scoped=true&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Login_vue_vue_type_style_index_0_id_ba09a9b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Login.vue?vue&type=style&index=0&id=ba09a9b8&scoped=true&lang=css& */ "./resources/js/src/views/pages/Login.vue?vue&type=style&index=0&id=ba09a9b8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
=======
/* harmony import */ var _PendingPayrolls_vue_vue_type_template_id_15cc2879___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PendingPayrolls.vue?vue&type=template&id=15cc2879& */ "./resources/js/src/views/pages/Payrolls/PendingPayrolls.vue?vue&type=template&id=15cc2879&");
/* harmony import */ var _PendingPayrolls_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PendingPayrolls.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Payrolls/PendingPayrolls.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PendingPayrolls_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PendingPayrolls.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/pages/Payrolls/PendingPayrolls.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
<<<<<<< HEAD
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_ba09a9b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_ba09a9b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ba09a9b8",
=======
  _PendingPayrolls_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PendingPayrolls_vue_vue_type_template_id_15cc2879___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PendingPayrolls_vue_vue_type_template_id_15cc2879___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
  null
  
)

/* hot reload */
if (false) { var api; }
<<<<<<< HEAD
component.options.__file = "resources/js/src/views/pages/Login.vue"
=======
component.options.__file = "resources/js/src/views/pages/Payrolls/PendingPayrolls.vue"
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/src/views/pages/Login.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/pages/Login.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
=======
/***/ "./resources/js/src/views/pages/Payrolls/PendingPayrolls.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Payrolls/PendingPayrolls.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Login.vue?vue&type=style&index=0&id=ba09a9b8&scoped=true&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Login.vue?vue&type=style&index=0&id=ba09a9b8&scoped=true&lang=css& ***!
  \*********************************************************************************************************/
=======
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PendingPayrolls_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PendingPayrolls.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Payrolls/PendingPayrolls.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PendingPayrolls_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Payrolls/PendingPayrolls.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Payrolls/PendingPayrolls.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************/
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_ba09a9b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=style&index=0&id=ba09a9b8&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Login.vue?vue&type=style&index=0&id=ba09a9b8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_ba09a9b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_ba09a9b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_ba09a9b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_ba09a9b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_ba09a9b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/Login.vue?vue&type=template&id=ba09a9b8&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Login.vue?vue&type=template&id=ba09a9b8&scoped=true& ***!
  \*******************************************************************************************/
=======
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PendingPayrolls_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PendingPayrolls.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Payrolls/PendingPayrolls.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PendingPayrolls_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PendingPayrolls_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PendingPayrolls_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PendingPayrolls_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PendingPayrolls_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/Payrolls/PendingPayrolls.vue?vue&type=template&id=15cc2879&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Payrolls/PendingPayrolls.vue?vue&type=template&id=15cc2879& ***!
  \**************************************************************************************************/
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_ba09a9b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=template&id=ba09a9b8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Login.vue?vue&type=template&id=ba09a9b8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_ba09a9b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_ba09a9b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
=======
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PendingPayrolls_vue_vue_type_template_id_15cc2879___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PendingPayrolls.vue?vue&type=template&id=15cc2879& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Payrolls/PendingPayrolls.vue?vue&type=template&id=15cc2879&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PendingPayrolls_vue_vue_type_template_id_15cc2879___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PendingPayrolls_vue_vue_type_template_id_15cc2879___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
>>>>>>> 7bb2b9ffa89a7c5b6d7869ad33a537027aa2d2d1



/***/ })

}]);