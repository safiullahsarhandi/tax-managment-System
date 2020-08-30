(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Companies/AddCustomerTableView.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Companies/AddCustomerTableView.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
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
              e.target.reset();

              _this.errors.clear();

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
            }
          });
        }
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Companies/AddCustomerTableView.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Companies/AddCustomerTableView.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#add_customer_table th .sort-th, th .vs-table-text {\n  width: 250px !important;\n}\n#add_customer_table  .vs-input--input.normal {\n  margin-bottom: 30px !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Companies/AddCustomerTableView.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Companies/AddCustomerTableView.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddCustomerTableView.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Companies/AddCustomerTableView.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Companies/AddCustomerTableView.vue?vue&type=template&id=e3942646&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Companies/AddCustomerTableView.vue?vue&type=template&id=e3942646& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
        {
          attrs: {
            title: "Add Customer",
            subtitle:
              "Add Information Of Customer OR company which tax will be managed by system",
            noShadow: "",
            noRadius: ""
          }
        },
        [
          _c(
            "template",
            { slot: "actions" },
            [
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
                ],
                1
              )
            ],
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
                }
              }
            },
            [
              _c(
                "vs-row",
                [
                  _c(
                    "vs-col",
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
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
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
                              attrs: { button: "submit", type: "gradient" }
                            },
                            [_vm._v("Save")]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("vs-col", {
                        staticClass: "text-center",
                        attrs: { "vs-md": "12", "vs-lg": "12" }
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/pages/Companies/AddCustomerTableView.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/pages/Companies/AddCustomerTableView.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddCustomerTableView_vue_vue_type_template_id_e3942646___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddCustomerTableView.vue?vue&type=template&id=e3942646& */ "./resources/js/src/views/pages/Companies/AddCustomerTableView.vue?vue&type=template&id=e3942646&");
/* harmony import */ var _AddCustomerTableView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddCustomerTableView.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Companies/AddCustomerTableView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AddCustomerTableView_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddCustomerTableView.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/pages/Companies/AddCustomerTableView.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AddCustomerTableView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddCustomerTableView_vue_vue_type_template_id_e3942646___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddCustomerTableView_vue_vue_type_template_id_e3942646___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/Companies/AddCustomerTableView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/Companies/AddCustomerTableView.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Companies/AddCustomerTableView.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCustomerTableView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddCustomerTableView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Companies/AddCustomerTableView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCustomerTableView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Companies/AddCustomerTableView.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Companies/AddCustomerTableView.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCustomerTableView_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddCustomerTableView.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Companies/AddCustomerTableView.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCustomerTableView_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCustomerTableView_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCustomerTableView_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCustomerTableView_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCustomerTableView_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/Companies/AddCustomerTableView.vue?vue&type=template&id=e3942646&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Companies/AddCustomerTableView.vue?vue&type=template&id=e3942646& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCustomerTableView_vue_vue_type_template_id_e3942646___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddCustomerTableView.vue?vue&type=template&id=e3942646& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Companies/AddCustomerTableView.vue?vue&type=template&id=e3942646&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCustomerTableView_vue_vue_type_template_id_e3942646___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCustomerTableView_vue_vue_type_template_id_e3942646___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);