(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Customers/Taxes.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Customers/Taxes.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  inject: ['loginUser'],
  data: function data() {
    return {
      editTax: {},
      addTaxManagmentModal: false,
      editTaxManagmentModal: false,
      type: '',
      officer: [],
      default_selected_officer: "",
      default_selected_supervisor: "",
      tax_customer_id: '',
      title: '',
      description: '',
      duration: '',
      supervisor: '',
      tax_identifier: '',
      edit_tax_identifier: '',
      notes: '',
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'Ma', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('supervisors/', ['supervisors']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('taxes/', ['taxes']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('officers/', ['officers'])),
  beforeCreate: function beforeCreate() {},
  created: function created() {
    this.tax_customer_id = localStorage.getItem('customer');
    this.getSupervisors();
    this.getOfficers();
    this.getTaxes(this.tax_customer_id);
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    getSupervisors: 'supervisors/getSupervisors',
    getOfficers: 'officers/getOfficers',
    create: 'taxes/addTax',
    getTaxes: 'taxes/getTaxes',
    update: 'taxes/editTax'
  }), {
    getFullName: function getFullName(obj) {
      // alert(obj);
      if (obj !== null) {
        return obj.full_name;
      } else {
        return 'N/A';
      }
    },
    changeType: function changeType(type) {
      var date = new Date();

      if (type == 'Monthly Tax') {
        this.tax_identifier = 'M-' + this.months[date.getMonth()] + '-' + date.getFullYear();
      } else if (type == 'Annual Tax') {
        this.tax_identifier = 'Y-' + date.getFullYear();
      } else if (type == 'Resubmission Tax') {
        this.tax_identifier = 'R-' + this.months[date.getMonth()] + '-' + date.getFullYear();
      }
    },
    editChangeType: function editChangeType(type) {
      var date = new Date();

      if (type == 'Monthly Tax') {
        this.editTax.tax_code = 'M-' + this.months[date.getMonth()] + '-' + date.getFullYear();
      } else if (type == 'Annual Tax') {
        this.editTax.tax_code = 'Y-' + date.getFullYear();
      } else if (type == 'Resubmission Tax') {
        this.editTax.tax_code = 'R-' + this.months[date.getMonth()] + '-' + date.getFullYear();
      }
    },
    addTax: function addTax() {
      this.addTaxManagmentModal = true;
    },
    addTaxManagment: function addTaxManagment(e) {
      var _this = this;

      this.$validator.validateAll('addform').then(function (result) {
        if (result) {
          _this.$vs.loading();

          self = _this;
          var fd = new FormData(self.$refs.addTaxManagmentForm);
          fd.append('customer_id', _this.tax_customer_id);
          fd.append('tax_code', _this.tax_identifier);
          fd.append('created_by', localStorage.getItem('admin')); // fd.append('officers', self.officer)
          // fd.append('supervisor_id',self.supervisor)

          var data = {
            fd: fd,
            close: _this.$vs.loading.close,
            notify: _this.$vs.notify
          };

          _this.create(data).then(function (res) {
            if (res.data.status == 'success') {
              self.title = self.description = self.duration = self.supervisor = '';
              self.officer = [];
              e.target.reset();
              self.$validator.reset();

              _this.getTaxes(self.tax_customer_id);

              _this.addTaxManagmentModal = false;
            }
          });
        }
      });
    },
    //  edit tax
    taxEdit: function taxEdit(taxId) {
      var _this2 = this;

      axios.post('tax/get-tax', {
        id: taxId
      }).then(function (res) {
        var date = new Date();
        _this2.editTax = res.data.tax;
        _this2.editTaxManagmentModal = true; // this.officer = _.map(this.editTax,'officer_id');

        if (_this2.editTax.type == 'Monthly Tax') {
          _this2.editTax.tax_code = 'M-' + _this2.months[date.getMonth()] + '-' + date.getFullYear();
        } else if (_this2.editTax.type == 'Annual Tax') {
          _this2.editTax.tax_code = 'Y-' + date.getFullYear();
        } else if (_this2.editTax.type == 'Resubmission Tax') {
          _this2.editTax.tax_code = 'R-' + _this2.months[date.getMonth()] + '-' + date.getFullYear();
        } // console.log(this.editTax);

      });
    },
    editTaxManagment: function editTaxManagment(e) {
      var _this3 = this;

      this.$validator.validateAll('editform').then(function (result) {
        if (result) {
          self = _this3;
          var fd = new FormData(self.$refs.editTaxManagmentForm);
          fd.append('customer_id', _this3.tax_customer_id);
          fd.append('tax_id', self.editTax.tax_id);
          fd.append('tax_code', _this3.editTax.tax_code); // fd.append('officers', self.officer)
          // fd.append('supervisor_id',self.editTax.supervisor_id)

          var data = {
            fd: fd,
            close: _this3.$vs.loading.close,
            notify: _this3.$vs.notify
          };

          _this3.update(data).then(function (res) {
            if (res.data.status == 'success') {
              self.getTaxes(_this3.tax_customer_id);
              self.officer = [];
              self.$validator.reset();
              self.editTaxManagmentModal = false;
            }
          });
        }
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Customers/Taxes.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Customers/Taxes.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".selectExample {\n  margin: 10px;\n}\n.con-select-example {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.con-select .vs-select {\n  width: 100%\n}\n@media (max-width: 550px) {\n.con-select {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n}\n.con-select .vs-select {\n    width: 100%\n}\n}\r\n\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Customers/Taxes.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Customers/Taxes.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Taxes.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Customers/Taxes.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Customers/Taxes.vue?vue&type=template&id=1a2f7c3a&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Customers/Taxes.vue?vue&type=template&id=1a2f7c3a& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
            title: "List of tax services",
            subtitle:
              "The List of Taxes contains currently assigned taxes of customer Or those which are delivered succesfully"
          }
        },
        [
          _c(
            "template",
            { slot: "actions" },
            [
              _vm.$store.getters.userType != "Admin" ||
              _vm.$store.getters.userType != "Super Admin"
                ? _c("vs-button", {
                    attrs: {
                      type: "border",
                      "icon-pack": "feather",
                      icon: "icon-plus"
                    },
                    on: {
                      click: function($event) {
                        return _vm.addTax()
                      }
                    }
                  })
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "vs-table",
            {
              attrs: { search: "", pagination: "", data: _vm.taxes },
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
                          _c("vs-td", [
                            _vm._v(_vm._s(_vm.getFullName(tr.created_by)))
                          ]),
                          _vm._v(" "),
                          _c("vs-td", [_vm._v(_vm._s(tr.tax_code))]),
                          _vm._v(" "),
                          _c("vs-td", { staticStyle: { width: "200px" } }, [
                            _vm._v(_vm._s(tr.title))
                          ]),
                          _vm._v(" "),
                          _c("vs-td", [_vm._v(_vm._s(tr.description))]),
                          _vm._v(" "),
                          _c("vs-td", [_vm._v(_vm._s(tr.type))]),
                          _vm._v(" "),
                          _c("vs-td", [_vm._v(_vm._s(0))]),
                          _vm._v(" "),
                          _c("vs-td", [
                            _vm._v(
                              _vm._s(
                                tr.status == 0 ? "In progress" : "Completed"
                              )
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            [
                              _vm.$store.getters.userType != "Admin" ||
                              _vm.$store.getters.userType != "Super Admin"
                                ? _c("vs-button", {
                                    attrs: {
                                      size: "small",
                                      type: "border",
                                      "icon-pack": "feather",
                                      icon: "icon-edit"
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.taxEdit(tr.tax_id)
                                      }
                                    }
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              _c("vs-button", {
                                attrs: {
                                  size: "small",
                                  type: "border",
                                  "icon-pack": "feather",
                                  icon: "icon-maximize-2",
                                  to: "/tax-collection/" + tr.tax_id
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
                    [_vm._v("Export")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "template",
                { slot: "thead" },
                [
                  _c("vs-th", [_vm._v("created by")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Code")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Title")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Description")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Type")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("revision")]),
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
            active: _vm.addTaxManagmentModal,
            title: "Add Tax Managment"
          },
          on: {
            "update:active": function($event) {
              _vm.addTaxManagmentModal = $event
            }
          }
        },
        [
          _c(
            "form",
            {
              ref: "addTaxManagmentForm",
              attrs: { "data-vv-scope": "addform" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.addTaxManagment($event, "addform")
                }
              }
            },
            [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.tax_customer_id,
                    expression: "tax_customer_id"
                  }
                ],
                attrs: { type: "hidden", name: "category_id" },
                domProps: { value: _vm.tax_customer_id },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.tax_customer_id = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "vs-row",
                [
                  _c(
                    "vs-col",
                    { attrs: { "vs-lg": "12", "vs-md": "12", "vs-sm": "12" } },
                    [
                      _vm.tax_identifier != ""
                        ? _c("div", [
                            _c("h4", [
                              _vm._v("Tax Code: " + _vm._s(_vm.tax_identifier))
                            ])
                          ])
                        : _vm._e(),
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
                              name: "title",
                              "label-placeholder": "Title",
                              "data-vv-scope": "addform"
                            },
                            model: {
                              value: _vm.title,
                              callback: function($$v) {
                                _vm.title = $$v
                              },
                              expression: "title"
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
                                  value: _vm.errors.has("addform.title"),
                                  expression: "errors.has('addform.title')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [_vm._v(_vm._s(_vm.errors.first("addform.title")))]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vx-input-group",
                        [
                          _c("br"),
                          _vm._v(" "),
                          _c("vs-textarea", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'"
                              }
                            ],
                            attrs: {
                              name: "description",
                              counter: 20,
                              label: "Description",
                              "data-vv-scope": "addform"
                            },
                            model: {
                              value: _vm.description,
                              callback: function($$v) {
                                _vm.description = $$v
                              },
                              expression: "description"
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
                                  value: _vm.errors.has("addform.description"),
                                  expression:
                                    "errors.has('addform.description')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("addform.description"))
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
                              staticStyle: { width: "100%" },
                              attrs: {
                                placeholder: "Select Type",
                                label: "Type",
                                name: "type"
                              },
                              on: { input: _vm.changeType },
                              model: {
                                value: _vm.type,
                                callback: function($$v) {
                                  _vm.type = $$v
                                },
                                expression: "type"
                              }
                            },
                            [
                              _c("vs-select-item", {
                                attrs: {
                                  text: "Monthly Tax",
                                  value: "Monthly Tax"
                                }
                              }),
                              _vm._v(" "),
                              _c("vs-select-item", {
                                attrs: {
                                  text: "Annual Tax",
                                  value: "Yearly Tax"
                                }
                              }),
                              _vm._v(" "),
                              _c("vs-select-item", {
                                attrs: {
                                  text: "Resubmission Tax",
                                  value: "Resubmission Tax"
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
                                  value: _vm.errors.has("addform.type"),
                                  expression: "errors.has('addform.type')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [_vm._v(_vm._s(_vm.errors.first("addform.type")))]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vx-input-group",
                        [
                          _c("br"),
                          _vm._v(" "),
                          _c("vs-textarea", {
                            attrs: {
                              name: "notes",
                              counter: 100,
                              label: "Notes",
                              "data-vv-scope": "addform"
                            },
                            model: {
                              value: _vm.notes,
                              callback: function($$v) {
                                _vm.notes = $$v
                              },
                              expression: "notes"
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
                                  value: _vm.errors.has("addform.notes"),
                                  expression: "errors.has('addform.notes')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [_vm._v(_vm._s(_vm.errors.first("addform.notes")))]
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
                        [_vm._v("Add Tax Managment")]
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
            active: _vm.editTaxManagmentModal,
            title: "Add Tax Managment"
          },
          on: {
            "update:active": function($event) {
              _vm.editTaxManagmentModal = $event
            }
          }
        },
        [
          _c(
            "form",
            {
              ref: "editTaxManagmentForm",
              attrs: { "data-vv-scope": "editform" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.editTaxManagment($event)
                }
              }
            },
            [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.tax_customer_id,
                    expression: "tax_customer_id"
                  }
                ],
                attrs: { type: "hidden", name: "category_id" },
                domProps: { value: _vm.tax_customer_id },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.tax_customer_id = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "vs-row",
                [
                  _c(
                    "vs-col",
                    { attrs: { "vs-lg": "12", "vs-md": "12", "vs-sm": "12" } },
                    [
                      _vm.editTax.tax_code
                        ? _c("div", [
                            _c("h4", [
                              _vm._v(
                                "Tax Code: " + _vm._s(_vm.editTax.tax_code)
                              )
                            ])
                          ])
                        : _vm._e()
                    ]
                  ),
                  _vm._v(" "),
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
                              name: "title",
                              label: "Title",
                              placeholder: "Title",
                              "data-vv-scope": "editform"
                            },
                            model: {
                              value: _vm.editTax.title,
                              callback: function($$v) {
                                _vm.$set(_vm.editTax, "title", $$v)
                              },
                              expression: "editTax.title"
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
                                  value: _vm.errors.has("editform.title"),
                                  expression: "errors.has('editform.title')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [_vm._v(_vm._s(_vm.errors.first("editform.title")))]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vx-input-group",
                        [
                          _c("br"),
                          _vm._v(" "),
                          _c("vs-textarea", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'"
                              }
                            ],
                            attrs: {
                              name: "description",
                              counter: 50,
                              label: "Description",
                              "data-vv-scope": "editform"
                            },
                            model: {
                              value: _vm.editTax.description,
                              callback: function($$v) {
                                _vm.$set(_vm.editTax, "description", $$v)
                              },
                              expression: "editTax.description"
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
                                  value: _vm.errors.has("editform.description"),
                                  expression:
                                    "errors.has('editform.description')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("editform.description"))
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
                              staticStyle: { width: "100%" },
                              attrs: {
                                placeholder: "Select Type",
                                label: "Type",
                                name: "type"
                              },
                              on: { input: _vm.editChangeType },
                              model: {
                                value: _vm.editTax.type,
                                callback: function($$v) {
                                  _vm.$set(_vm.editTax, "type", $$v)
                                },
                                expression: "editTax.type"
                              }
                            },
                            [
                              _c("vs-select-item", {
                                attrs: {
                                  text: "Monthly Tax",
                                  value: "Monthly Tax"
                                }
                              }),
                              _vm._v(" "),
                              _c("vs-select-item", {
                                attrs: {
                                  text: "Annual Tax",
                                  value: "Annual Tax"
                                }
                              }),
                              _vm._v(" "),
                              _c("vs-select-item", {
                                attrs: {
                                  text: "Resubmission Tax",
                                  value: "Resubmission Tax"
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
                                  value: _vm.errors.has("editform.type"),
                                  expression: "errors.has('editform.type')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [_vm._v(_vm._s(_vm.errors.first("editform.type")))]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vx-input-group",
                        [
                          _c("br"),
                          _vm._v(" "),
                          _c("vs-textarea", {
                            attrs: {
                              name: "notes",
                              counter: 100,
                              label: "Notes",
                              "data-vv-scope": "editform"
                            },
                            model: {
                              value: _vm.notes,
                              callback: function($$v) {
                                _vm.notes = $$v
                              },
                              expression: "notes"
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
                                  value: _vm.errors.has("editform.notes"),
                                  expression: "errors.has('editform.notes')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [_vm._v(_vm._s(_vm.errors.first("editform.notes")))]
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
                        [_vm._v("Update")]
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

/***/ "./resources/js/src/views/pages/Customers/Taxes.vue":
/*!**********************************************************!*\
  !*** ./resources/js/src/views/pages/Customers/Taxes.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Taxes_vue_vue_type_template_id_1a2f7c3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Taxes.vue?vue&type=template&id=1a2f7c3a& */ "./resources/js/src/views/pages/Customers/Taxes.vue?vue&type=template&id=1a2f7c3a&");
/* harmony import */ var _Taxes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Taxes.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Customers/Taxes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Taxes_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Taxes.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/pages/Customers/Taxes.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Taxes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Taxes_vue_vue_type_template_id_1a2f7c3a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Taxes_vue_vue_type_template_id_1a2f7c3a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/Customers/Taxes.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/Customers/Taxes.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/pages/Customers/Taxes.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Taxes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Taxes.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Customers/Taxes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Taxes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Customers/Taxes.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Customers/Taxes.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Taxes_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Taxes.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Customers/Taxes.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Taxes_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Taxes_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Taxes_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Taxes_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Taxes_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/Customers/Taxes.vue?vue&type=template&id=1a2f7c3a&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Customers/Taxes.vue?vue&type=template&id=1a2f7c3a& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Taxes_vue_vue_type_template_id_1a2f7c3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Taxes.vue?vue&type=template&id=1a2f7c3a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Customers/Taxes.vue?vue&type=template&id=1a2f7c3a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Taxes_vue_vue_type_template_id_1a2f7c3a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Taxes_vue_vue_type_template_id_1a2f7c3a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);