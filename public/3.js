(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Alert.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Alert.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    type: {
      "default": "success"
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Category.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Category.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["selectedId"],
  data: function data() {
    return {
      categories: []
    };
  },
  methods: {
    selectCategory: function selectCategory(event) {
      this.$emit("input", event.target.value);
    },
    getCategories: function getCategories() {
      var _this = this;

      axios.get("/api/categories").then(function (res) {
        _this.categories = res.data;
      });
    }
  },
  created: function created() {
    if (this.categories.length <= 0) {
      this.getCategories();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NewPost.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/NewPost.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixin_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mixin/index */ "./resources/js/mixin/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ "./resources/js/helpers.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [_mixin_index__WEBPACK_IMPORTED_MODULE_1__["default"]],
  methods: {
    savePost: function savePost() {
      var _this = this;

      var data = new FormData();
      Object.keys(this.post).forEach(function (key) {
        data.append(key, _this.post[key]);
      });
      axios.post("/api/posts", data).then(function (res) {
        if (res.data) {
          _this.errors = {};
          _this.post = {};
          sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire("Good job!", "Post successfull added to system", "success");

          _this.$router.push("/");
        }
      })["catch"](function (err) {
        _this.errors = err.response.data.errors;
      });
    }
  },
  beforeRouteLeave: function beforeRouteLeave(to, from, next) {
    if (!Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["default"])(this.post)) {
      var answer = window.confirm("Do you really want to leave? you have unsaved changes!");
      next(answer);
    } else {
      next();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Alert.vue?vue&type=template&id=7b2bf401&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Alert.vue?vue&type=template&id=7b2bf401& ***!
  \********************************************************************************************************************************************************************************************************/
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
    { staticClass: "alert shadow-sm", class: "alert-" + _vm.type },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Category.vue?vue&type=template&id=33972369&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Category.vue?vue&type=template&id=33972369& ***!
  \***********************************************************************************************************************************************************************************************************/
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
    "select",
    {
      staticClass: "custom-select",
      attrs: { id: "category" },
      on: { change: _vm.selectCategory }
    },
    [
      _c("option", { attrs: { disabled: "", selected: "" } }, [
        _vm._v("Please, choose the category!")
      ]),
      _vm._v(" "),
      _vm._l(_vm.categories, function(category, index) {
        return _c(
          "option",
          {
            key: index,
            domProps: {
              value: category.id,
              selected: _vm.selectedId == category.id
            }
          },
          [_vm._v(_vm._s(category.name))]
        )
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NewPost.vue?vue&type=template&id=4f84dfc5&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/NewPost.vue?vue&type=template&id=4f84dfc5& ***!
  \**********************************************************************************************************************************************************************************************************/
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
    { staticClass: "mt-5" },
    [
      _vm.validationErrors.length > 0
        ? _c(
            "Alert",
            { attrs: { type: "danger" } },
            _vm._l(_vm.validationErrors, function(error, index) {
              return _c("p", {
                key: index,
                staticClass: "m-0 p-0",
                domProps: { textContent: _vm._s(error) }
              })
            }),
            0
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.savePost($event)
            }
          }
        },
        [
          _c("div", { staticClass: "form-group" }, [
            _c(
              "label",
              { staticClass: "font-weight-bold", attrs: { for: "title" } },
              [_vm._v("Post title")]
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.post.title,
                  expression: "post.title"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text", id: "title" },
              domProps: { value: _vm.post.title },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.post, "title", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c(
              "label",
              { staticClass: "font-weight-bold", attrs: { for: "text" } },
              [_vm._v("Post text")]
            ),
            _vm._v(" "),
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.post.text,
                  expression: "post.text"
                }
              ],
              staticClass: "form-control",
              attrs: { id: "text", cols: "30", rows: "8" },
              domProps: { value: _vm.post.text },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.post, "text", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c(
                "label",
                { staticClass: "font-weight-bold", attrs: { for: "category" } },
                [_vm._v("Category")]
              ),
              _vm._v(" "),
              _c("Category", {
                model: {
                  value: _vm.post.category_id,
                  callback: function($$v) {
                    _vm.$set(_vm.post, "category_id", $$v)
                  },
                  expression: "post.category_id"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c(
              "label",
              { staticClass: "font-weight-bold", attrs: { for: "category" } },
              [_vm._v("Thumbnail")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "custom-file" }, [
              _c("input", {
                staticClass: "custom-file-input",
                attrs: { type: "file", id: "customFile" },
                on: { change: _vm.selectFile }
              }),
              _vm._v(" "),
              _c(
                "label",
                {
                  staticClass: "custom-file-label",
                  attrs: { for: "customFile" }
                },
                [_vm._v("Choose file")]
              )
            ])
          ]),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-primary",
              attrs: { type: "submit", disabled: _vm.disabled }
            },
            [_vm._v("Submit")]
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

/***/ "./resources/js/components/Alert.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/Alert.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Alert_vue_vue_type_template_id_7b2bf401___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Alert.vue?vue&type=template&id=7b2bf401& */ "./resources/js/components/Alert.vue?vue&type=template&id=7b2bf401&");
/* harmony import */ var _Alert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Alert.vue?vue&type=script&lang=js& */ "./resources/js/components/Alert.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Alert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Alert_vue_vue_type_template_id_7b2bf401___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Alert_vue_vue_type_template_id_7b2bf401___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Alert.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Alert.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/Alert.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Alert.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Alert.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Alert.vue?vue&type=template&id=7b2bf401&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Alert.vue?vue&type=template&id=7b2bf401& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_template_id_7b2bf401___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Alert.vue?vue&type=template&id=7b2bf401& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Alert.vue?vue&type=template&id=7b2bf401&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_template_id_7b2bf401___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_template_id_7b2bf401___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Category.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/Category.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Category_vue_vue_type_template_id_33972369___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Category.vue?vue&type=template&id=33972369& */ "./resources/js/components/Category.vue?vue&type=template&id=33972369&");
/* harmony import */ var _Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Category.vue?vue&type=script&lang=js& */ "./resources/js/components/Category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Category_vue_vue_type_template_id_33972369___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Category_vue_vue_type_template_id_33972369___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Category.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Category.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Category.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Category.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Category.vue?vue&type=template&id=33972369&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Category.vue?vue&type=template&id=33972369& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_template_id_33972369___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Category.vue?vue&type=template&id=33972369& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Category.vue?vue&type=template&id=33972369&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_template_id_33972369___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_template_id_33972369___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/NewPost.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/NewPost.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NewPost_vue_vue_type_template_id_4f84dfc5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewPost.vue?vue&type=template&id=4f84dfc5& */ "./resources/js/components/NewPost.vue?vue&type=template&id=4f84dfc5&");
/* harmony import */ var _NewPost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewPost.vue?vue&type=script&lang=js& */ "./resources/js/components/NewPost.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NewPost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NewPost_vue_vue_type_template_id_4f84dfc5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NewPost_vue_vue_type_template_id_4f84dfc5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/NewPost.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/NewPost.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/NewPost.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewPost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./NewPost.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NewPost.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewPost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/NewPost.vue?vue&type=template&id=4f84dfc5&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/NewPost.vue?vue&type=template&id=4f84dfc5& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewPost_vue_vue_type_template_id_4f84dfc5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./NewPost.vue?vue&type=template&id=4f84dfc5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NewPost.vue?vue&type=template&id=4f84dfc5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewPost_vue_vue_type_template_id_4f84dfc5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewPost_vue_vue_type_template_id_4f84dfc5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/helpers.js":
/*!*********************************!*\
  !*** ./resources/js/helpers.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function isEmptyObject(obj) {
  return Object.values(obj).every(function (field) {
    return field.trim() === "";
  });
}

/* harmony default export */ __webpack_exports__["default"] = (isEmptyObject);

/***/ }),

/***/ "./resources/js/mixin/index.js":
/*!*************************************!*\
  !*** ./resources/js/mixin/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Alert */ "./resources/js/components/Alert.vue");
/* harmony import */ var _components_Category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Category */ "./resources/js/components/Category.vue");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ "./resources/js/helpers.js");



var Mixin = {
  data: function data() {
    return {
      errors: {},
      post: {
        title: "",
        text: "",
        category_id: ""
      }
    };
  },
  computed: {
    validationErrors: function validationErrors() {
      var _this = this;

      var errors = [];
      Object.keys(this.errors).forEach(function (key) {
        errors.push(_this.errors[key][0]);
      });
      return errors;
    },
    disabled: function disabled() {
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["default"])(this.post);
    }
  },
  methods: {
    selectFile: function selectFile(event) {
      this.post.photo = event.target.files[0];
    }
  },
  components: {
    Alert: _components_Alert__WEBPACK_IMPORTED_MODULE_0__["default"],
    Category: _components_Category__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Mixin);

/***/ })

}]);