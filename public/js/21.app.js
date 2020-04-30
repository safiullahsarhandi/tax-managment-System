(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/ForgotPassword.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/ForgotPassword.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Login.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Login.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
=======
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      email: '',
<<<<<<< HEAD
      code: '',
      password: '',
      confirm_password: '',
      forgotPassword: true
=======
      password: '',
      checkbox_remember_me: false
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee
    };
  },
  created: function created() {
    if (localStorage.getItem('admin')) {
      this.$router.push('/dashboard');
    }
  },
  methods: {
<<<<<<< HEAD
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

=======
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
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee
            if (res.data.status == 'error') {
              _this.$vs.notify({
                'color': 'danger',
                'text': res.data.msg,
                'position': 'top-right',
                'icon': 'warning'
              });
            } else {
<<<<<<< HEAD
              _this.forgotPassword = false;

=======
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee
              _this.$vs.notify({
                'color': 'success',
                'text': res.data.msg,
                'position': 'top-right',
                'icon': 'check_box'
<<<<<<< HEAD
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
=======
              });

              var adminData = res.data.session;
              localStorage.setItem('admin', adminData.manager_id);

              _this.$store.commit('setLoginUser', adminData);

              _this.$router.push('/dashboard');
            }

            _this.$vs.loading.close();
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee
          });
        }
      });
    }
  }
});

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/ForgotPassword.vue?vue&type=style&index=0&id=349af79a&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/ForgotPassword.vue?vue&type=style&index=0&id=349af79a&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Login.vue?vue&type=style&index=0&id=ba09a9b8&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Login.vue?vue&type=style&index=0&id=ba09a9b8&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*.p-8 {\r\n    padding: 1.9rem !important;\r\n}\r\n*/\r\n", ""]);

// exports


/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/ForgotPassword.vue?vue&type=style&index=0&id=349af79a&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/ForgotPassword.vue?vue&type=style&index=0&id=349af79a&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Login.vue?vue&type=style&index=0&id=ba09a9b8&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Login.vue?vue&type=style&index=0&id=ba09a9b8&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


<<<<<<< HEAD
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ForgotPassword.vue?vue&type=style&index=0&id=349af79a&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/ForgotPassword.vue?vue&type=style&index=0&id=349af79a&scoped=true&lang=css&");
=======
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=style&index=0&id=ba09a9b8&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Login.vue?vue&type=style&index=0&id=ba09a9b8&scoped=true&lang=css&");
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee

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
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/ForgotPassword.vue?vue&type=template&id=349af79a&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/ForgotPassword.vue?vue&type=template&id=349af79a&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Login.vue?vue&type=template&id=ba09a9b8&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Login.vue?vue&type=template&id=ba09a9b8&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
<<<<<<< HEAD
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
=======
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
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee
                  },
                  [
                    _c(
                      "div",
<<<<<<< HEAD
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
=======
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
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
<<<<<<< HEAD
                              ]
=======
                              ],
                              1
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee
                            )
                          ]
                        )
                      ]
                    )
                  ]
                )
<<<<<<< HEAD
              ])
            : _vm._e()
=======
              ]
            )
          ])
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/src/views/pages/ForgotPassword.vue":
/*!*********************************************************!*\
  !*** ./resources/js/src/views/pages/ForgotPassword.vue ***!
  \*********************************************************/
=======
/***/ "./resources/js/src/views/pages/Login.vue":
/*!************************************************!*\
  !*** ./resources/js/src/views/pages/Login.vue ***!
  \************************************************/
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _ForgotPassword_vue_vue_type_template_id_349af79a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ForgotPassword.vue?vue&type=template&id=349af79a&scoped=true& */ "./resources/js/src/views/pages/ForgotPassword.vue?vue&type=template&id=349af79a&scoped=true&");
/* harmony import */ var _ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ForgotPassword.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/ForgotPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ForgotPassword_vue_vue_type_style_index_0_id_349af79a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ForgotPassword.vue?vue&type=style&index=0&id=349af79a&scoped=true&lang=css& */ "./resources/js/src/views/pages/ForgotPassword.vue?vue&type=style&index=0&id=349af79a&scoped=true&lang=css&");
=======
/* harmony import */ var _Login_vue_vue_type_template_id_ba09a9b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=ba09a9b8&scoped=true& */ "./resources/js/src/views/pages/Login.vue?vue&type=template&id=ba09a9b8&scoped=true&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Login_vue_vue_type_style_index_0_id_ba09a9b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Login.vue?vue&type=style&index=0&id=ba09a9b8&scoped=true&lang=css& */ "./resources/js/src/views/pages/Login.vue?vue&type=style&index=0&id=ba09a9b8&scoped=true&lang=css&");
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
<<<<<<< HEAD
  _ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ForgotPassword_vue_vue_type_template_id_349af79a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ForgotPassword_vue_vue_type_template_id_349af79a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "349af79a",
=======
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_ba09a9b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_ba09a9b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ba09a9b8",
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee
  null
  
)

/* hot reload */
if (false) { var api; }
<<<<<<< HEAD
component.options.__file = "resources/js/src/views/pages/ForgotPassword.vue"
=======
component.options.__file = "resources/js/src/views/pages/Login.vue"
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/src/views/pages/ForgotPassword.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/pages/ForgotPassword.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
=======
/***/ "./resources/js/src/views/pages/Login.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/pages/Login.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ForgotPassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/ForgotPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/ForgotPassword.vue?vue&type=style&index=0&id=349af79a&scoped=true&lang=css&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/ForgotPassword.vue?vue&type=style&index=0&id=349af79a&scoped=true&lang=css& ***!
  \******************************************************************************************************************/
=======
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Login.vue?vue&type=style&index=0&id=ba09a9b8&scoped=true&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Login.vue?vue&type=style&index=0&id=ba09a9b8&scoped=true&lang=css& ***!
  \*********************************************************************************************************/
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_style_index_0_id_349af79a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ForgotPassword.vue?vue&type=style&index=0&id=349af79a&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/ForgotPassword.vue?vue&type=style&index=0&id=349af79a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_style_index_0_id_349af79a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_style_index_0_id_349af79a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_style_index_0_id_349af79a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_style_index_0_id_349af79a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_style_index_0_id_349af79a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/ForgotPassword.vue?vue&type=template&id=349af79a&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/ForgotPassword.vue?vue&type=template&id=349af79a&scoped=true& ***!
  \****************************************************************************************************/
=======
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_ba09a9b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=style&index=0&id=ba09a9b8&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Login.vue?vue&type=style&index=0&id=ba09a9b8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_ba09a9b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_ba09a9b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_ba09a9b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_ba09a9b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_ba09a9b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/Login.vue?vue&type=template&id=ba09a9b8&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Login.vue?vue&type=template&id=ba09a9b8&scoped=true& ***!
  \*******************************************************************************************/
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_template_id_349af79a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ForgotPassword.vue?vue&type=template&id=349af79a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/ForgotPassword.vue?vue&type=template&id=349af79a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_template_id_349af79a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_template_id_349af79a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
=======
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_ba09a9b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=template&id=ba09a9b8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Login.vue?vue&type=template&id=ba09a9b8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_ba09a9b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_ba09a9b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
>>>>>>> 0cb312c535041d855c86a2bf980a2441c2e3baee



/***/ })

}]);