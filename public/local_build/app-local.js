(self["webpackChunk"] = self["webpackChunk"] || []).push([["app-local"],{

/***/ "./frontend/src/Pages/Agentes.jsx":
/*!****************************************!*\
  !*** ./frontend/src/Pages/Agentes.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_GetAgentes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/GetAgentes */ "./frontend/src/components/GetAgentes.jsx");


var Agentes = function Agentes() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container p-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_GetAgentes__WEBPACK_IMPORTED_MODULE_1__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Agentes);

/***/ }),

/***/ "./frontend/src/Pages/AsignarAgente.jsx":
/*!**********************************************!*\
  !*** ./frontend/src/Pages/AsignarAgente.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_GetAgentes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/GetAgentes */ "./frontend/src/components/GetAgentes.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");














function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var AsignarAgente = function AsignarAgente() {
  var _useOutletContext = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_16__.useOutletContext)(),
    _useOutletContext2 = _slicedToArray(_useOutletContext, 2),
    row = _useOutletContext2[0],
    setRow = _useOutletContext2[1];
  var handleRowChange = function handleRowChange(e) {
    setRow(e.selectedRows[0]);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("h1", null, "Asignar Agente al Operativo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("hr", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement(_components_GetAgentes__WEBPACK_IMPORTED_MODULE_15__["default"], {
    selectableRows: true,
    selectableRowsNoSelectAll: true,
    selectableRowsSingle: true,
    selectableRowsHighlight: true,
    onSelectedRowsChange: handleRowChange
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AsignarAgente);

/***/ }),

/***/ "./frontend/src/Pages/Crear-Agente.jsx":
/*!*********************************************!*\
  !*** ./frontend/src/Pages/Crear-Agente.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_PostAgentes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/PostAgentes */ "./frontend/src/components/PostAgentes.jsx");


var CrearAgente = function CrearAgente() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container p-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Creaci\xF3n de Agente"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_PostAgentes__WEBPACK_IMPORTED_MODULE_1__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CrearAgente);

/***/ }),

/***/ "./frontend/src/Pages/Crear-Honorarios.jsx":
/*!*************************************************!*\
  !*** ./frontend/src/Pages/Crear-Honorarios.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CrearHonorarios: () => (/* binding */ CrearHonorarios)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_PostHonorarios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/PostHonorarios */ "./frontend/src/components/PostHonorarios.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _TablaHonorarios__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./TablaHonorarios */ "./frontend/src/Pages/TablaHonorarios.jsx");














function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var CrearHonorarios = function CrearHonorarios() {
  // const rowDisabledCriteria = (row, id) => row.id;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    row = _useState2[0],
    setRow = _useState2[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Outlet, {
    context: [row, setRow]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement(_components_PostHonorarios__WEBPACK_IMPORTED_MODULE_15__["default"], {
    disabled: row == null
  }));
};

/***/ }),

/***/ "./frontend/src/Pages/Crear-Operativo.jsx":
/*!************************************************!*\
  !*** ./frontend/src/Pages/Crear-Operativo.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CrearOperativo: () => (/* binding */ CrearOperativo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_PostOperativos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/PostOperativos */ "./frontend/src/components/PostOperativos.jsx");


var CrearOperativo = function CrearOperativo() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container p-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, " Crear Operativo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_PostOperativos__WEBPACK_IMPORTED_MODULE_1__["default"], null));
};

/***/ }),

/***/ "./frontend/src/Pages/Home.jsx":
/*!*************************************!*\
  !*** ./frontend/src/Pages/Home.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Home: () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var _assets_styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/styles/style.css */ "./frontend/src/assets/styles/style.css");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var Home = function Home() {
  return /*#__PURE__*/React.createElement("div", {
    className: "container-fluid container-lg  pb-5 mt-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "titulo-principal py-3 py-lg-5 d-flex align-items-center mb-3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "fa-stack fa-2x"
  }, /*#__PURE__*/React.createElement("i", {
    className: "far fa-circle fa-stack-2x text-info"
  }), /*#__PURE__*/React.createElement("i", {
    className: "fas fa-hospital-symbol fa-stack-1x text-muted"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "font-weight-bold text-muted text-uppercase mb-0"
  }, "Ablaciones"), /*#__PURE__*/React.createElement("h6", {
    className: "text-info mb-0"
  }, "Bienvenidos"))));
};

/***/ }),

/***/ "./frontend/src/Pages/ModulosVista.jsx":
/*!*********************************************!*\
  !*** ./frontend/src/Pages/ModulosVista.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Modulos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Modulos */ "./frontend/src/components/Modulos.jsx");


var ModulosVista = function ModulosVista() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container p-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Modulos__WEBPACK_IMPORTED_MODULE_1__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModulosVista);

/***/ }),

/***/ "./frontend/src/Pages/Operativos.jsx":
/*!*******************************************!*\
  !*** ./frontend/src/Pages/Operativos.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Operativos: () => (/* binding */ Operativos),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_GetOperativos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/GetOperativos */ "./frontend/src/components/GetOperativos.jsx");


var Operativos = function Operativos() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container p-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_GetOperativos__WEBPACK_IMPORTED_MODULE_1__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Operativos);

/***/ }),

/***/ "./frontend/src/Pages/TablaHonorarios.jsx":
/*!************************************************!*\
  !*** ./frontend/src/Pages/TablaHonorarios.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _styles_tablaHonorarios_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./styles/tablaHonorarios.css */ "./frontend/src/Pages/styles/tablaHonorarios.css");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var _lib_tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../lib/tooltip */ "./frontend/src/lib/tooltip.js");
/* harmony import */ var _lib_tooltip__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_lib_tooltip__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _hooks_usePagination__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../hooks/usePagination */ "./frontend/src/hooks/usePagination.jsx");
/* harmony import */ var _components_UI_EmptyTable__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../components/UI/EmptyTable */ "./frontend/src/components/UI/EmptyTable.jsx");
/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react-data-table-component */ "./node_modules/react-data-table-component/dist/index.cjs.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }






























var arrayAgentes = [{
  id: 1,
  nombre: "Agente 1",
  cuil: "20345678901",
  cbu: "1234567890123456789012"
}, {
  id: 2,
  nombre: "Agente 2",
  cuil: "30345678901",
  cbu: "2345678901234567890123"
}, {
  id: 3,
  nombre: "Agente 3",
  cuil: "40345678901",
  cbu: "3456789012345678901234"
}, {
  id: 4,
  nombre: "Agente 4",
  cuil: "50345678901",
  cbu: "4567890123456789012345"
}];
var arrayObjetos = [{
  id: 1,
  referencia: "ref1",
  descripcion: "Descripción del objeto 1",
  fecha: "2023-06-27",
  agentes: arrayAgentes
}, {
  id: 2,
  referencia: "ref2",
  descripcion: "Descripción del objeto 2",
  fecha: "2023-06-27",
  agentes: arrayAgentes
}, {
  id: 3,
  referencia: "ref3",
  descripcion: "Descripción del objeto 3",
  fecha: "2023-06-27",
  agentes: arrayAgentes
}, {
  id: 4,
  referencia: "ref4",
  descripcion: "Descripción del objeto 4",
  fecha: "2023-06-27",
  agentes: arrayAgentes
}, {
  id: 5,
  referencia: "ref5",
  descripcion: "Descripción del objeto 5",
  fecha: "2023-06-27",
  agentes: arrayAgentes
}];
var ExpandedComponent = function ExpandedComponent(_ref) {
  var data = _ref.data;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_27__.useNavigate)();
  var handleAdd = function handleAdd(id) {
    navigate("/honorarios/variables/crear-honorario/" + id + "/agregar", {
      replace: true
    });
  };
  var handleCreate = function handleCreate(id) {
    navigate("/honorarios/variables/crear-honorario/", {
      replace: true
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("div", {
    className: "p-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("div", {
    className: "d-flex align-items-center justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("h5", null, "Agentes asociados al Operativo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("hr", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("button", {
    type: "button",
    className: "btn btn-primary",
    onClick: function onClick() {
      return handleCreate(data.id);
    }
  }, "Agregar Agente ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_28__.BsFillPersonFill, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("table", {
    className: "table table-responsive"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("th", {
    scope: "col"
  }, "CUIL"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("th", {
    scope: "col"
  }, "DNI"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("th", {
    scope: "col"
  }, "Nombre"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("th", {
    scope: "col"
  }, "CBU"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("th", {
    scope: "col"
  }, "Acci\xF3n"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("tbody", null, data.agentes.map(function (a, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("tr", {
      key: i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("td", null, a.cuil), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("td", null, a.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("td", null, a.nombre), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("td", null, a.cbu), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("button", {
      type: "button",
      className: "btn btn-success",
      "data-bs-toggle": "tooltip",
      "data-bs-placement": "right",
      "data-bs-title": "A\xF1adir modulo al Agente",
      onClick: function onClick() {
        return handleAdd(a.id);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_29__.AiOutlinePlus, null))));
  }))));
};
var columns = [{
  name: "ID",
  selector: function selector(row) {
    return row.id;
  },
  sortable: true
}, {
  name: "Referencia",
  selector: function selector(row) {
    return row.referencia;
  },
  sortable: true
}, {
  name: "Fecha",
  selector: function selector(row) {
    return row.fecha;
  },
  sortable: true,
  format: function format(row) {
    return moment__WEBPACK_IMPORTED_MODULE_26___default()(row.fecha).format("L");
  }
}, {
  name: "Descripción",
  selector: function selector(row) {
    return row.descripcion;
  },
  sortable: true
}];
var TablaHonorarios = function TablaHonorarios(_ref2) {
  var props = Object.assign({}, (_objectDestructuringEmpty(_ref2), _ref2));
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_20__.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    search = _useState2[0],
    setSearch = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_20__.useState)(arrayObjetos),
    _useState4 = _slicedToArray(_useState3, 2),
    honorario = _useState4[0],
    setHonorario = _useState4[1];
  var _usePagination = (0,_hooks_usePagination__WEBPACK_IMPORTED_MODULE_23__.usePagination)(arrayObjetos),
    paginationOptions = _usePagination.paginationOptions;

  //-------------------------------- SEARCHBAR --------------------------- //

  (0,react__WEBPACK_IMPORTED_MODULE_20__.useEffect)(function () {
    filterByReferencia(search);
  }, [search]);
  var handleOnChange = function handleOnChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
  };
  var filterByReferencia = function filterByReferencia(value) {
    if (!value) {
      setHonorario(arrayObjetos);
    } else {
      var arrayCache = arrayObjetos.filter(function (oper) {
        return oper.referencia.toLowerCase().includes(value.toLowerCase());
      });
      setHonorario(arrayCache);
    }
  };

  //-------------------------------- FIN SEARCHBAR --------------------------- //

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("div", {
    className: "mb-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("h1", null, "Carga de Honorarios Variables"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("div", {
    className: "input-group mb-3",
    style: {
      maxWidth: "40%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Buscar por Referencia",
    onChange: handleOnChange,
    value: search,
    autoComplete: "off"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement(react_data_table_component__WEBPACK_IMPORTED_MODULE_25__["default"], _extends({
    columns: columns,
    data: honorario,
    pagination: true,
    striped: true,
    paginationComponentOptions: paginationOptions,
    noDataComponent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement(_components_UI_EmptyTable__WEBPACK_IMPORTED_MODULE_24__["default"], {
      msg: "No se encontro el Agente con ese CUIL"
    }),
    expandableRows: true,
    expandableRowsComponent: ExpandedComponent
  }, props)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TablaHonorarios);

/***/ }),

/***/ "./frontend/src/Redux/Actions/index.js":
/*!*********************************************!*\
  !*** ./frontend/src/Redux/Actions/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GET_AGENTES: () => (/* binding */ GET_AGENTES),
/* harmony export */   GET_CATEGORIAS: () => (/* binding */ GET_CATEGORIAS),
/* harmony export */   GET_MODULOS: () => (/* binding */ GET_MODULOS),
/* harmony export */   GET_OPERATIVOS: () => (/* binding */ GET_OPERATIVOS),
/* harmony export */   GET_TIPOMODULO: () => (/* binding */ GET_TIPOMODULO),
/* harmony export */   POST_AGENTES: () => (/* binding */ POST_AGENTES),
/* harmony export */   POST_MODULO: () => (/* binding */ POST_MODULO),
/* harmony export */   POST_OPERATIVO: () => (/* binding */ POST_OPERATIVO),
/* harmony export */   getAgentes: () => (/* binding */ getAgentes),
/* harmony export */   getCategorias: () => (/* binding */ getCategorias),
/* harmony export */   getModulos: () => (/* binding */ getModulos),
/* harmony export */   getOperativos: () => (/* binding */ getOperativos),
/* harmony export */   getTipoModulo: () => (/* binding */ getTipoModulo),
/* harmony export */   postAgentes: () => (/* binding */ postAgentes),
/* harmony export */   postModulo: () => (/* binding */ postModulo),
/* harmony export */   postOperativo: () => (/* binding */ postOperativo)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _api_AgentesAPI__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../api/AgentesAPI */ "./frontend/src/api/AgentesAPI.js");
/* harmony import */ var _api_OperativosAPI__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../api/OperativosAPI */ "./frontend/src/api/OperativosAPI.js");
/* harmony import */ var _api_ModulosAPI__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../api/ModulosAPI */ "./frontend/src/api/ModulosAPI.js");
/* harmony import */ var _api_CategoriasAPI_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../api/CategoriasAPI.js */ "./frontend/src/api/CategoriasAPI.js");
/* harmony import */ var _api_TipoAPI__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../api/TipoAPI */ "./frontend/src/api/TipoAPI.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }





















function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






var GET_AGENTES = "GET_AGENTES";
var GET_OPERATIVOS = "GET_OPERATIVOS";
var POST_OPERATIVO = "POST_OPERATIVO";
var POST_AGENTES = "POST_AGENTES";
var GET_MODULOS = "GET_MODULOS";
var GET_CATEGORIAS = "GET_CATEGORIAS";
var GET_TIPOMODULO = "GET_TIPOMODULO";
var POST_MODULO = "POST_MODULO";
var getAgentes = function getAgentes() {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(dispatch) {
      var response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _api_AgentesAPI__WEBPACK_IMPORTED_MODULE_21__.AgentesAPI.get("");
          case 2:
            response = _context.sent;
            return _context.abrupt("return", dispatch({
              type: GET_AGENTES,
              payload: response.data
            }));
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
var getOperativos = function getOperativos() {
  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(dispatch) {
      var response;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _api_OperativosAPI__WEBPACK_IMPORTED_MODULE_22__.OperativosAPI.get("");
          case 2:
            response = _context2.sent;
            return _context2.abrupt("return", dispatch({
              type: GET_OPERATIVOS,
              payload: response.data
            }));
          case 4:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};
var getModulos = function getModulos() {
  return /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(dispatch) {
      var response;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _api_ModulosAPI__WEBPACK_IMPORTED_MODULE_23__.ModulosAPI.get();
          case 2:
            response = _context3.sent;
            return _context3.abrupt("return", dispatch({
              type: GET_MODULOS,
              payload: response.data
            }));
          case 4:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
};
var getCategorias = function getCategorias() {
  return /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(dispatch) {
      var response;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _api_CategoriasAPI_js__WEBPACK_IMPORTED_MODULE_24__.CategoriasAPI.get();
          case 2:
            response = _context4.sent;
            return _context4.abrupt("return", dispatch({
              type: GET_CATEGORIAS,
              payload: response.data
            }));
          case 4:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }();
};
var getTipoModulo = function getTipoModulo() {
  return /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(dispatch) {
      var response;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _api_TipoAPI__WEBPACK_IMPORTED_MODULE_25__.TipoAPI.get();
          case 2:
            response = _context5.sent;
            return _context5.abrupt("return", dispatch({
              type: GET_TIPOMODULO,
              payload: response.data
            }));
          case 4:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return function (_x5) {
      return _ref5.apply(this, arguments);
    };
  }();
};
var postOperativo = function postOperativo(_ref6) {
  var referencia = _ref6.referencia,
    fecha = _ref6.fecha,
    descripcion = _ref6.descripcion,
    fechapago = _ref6.fechapago;
  return function (dispatch) {
    return axios__WEBPACK_IMPORTED_MODULE_26__["default"].post("http://localhost/cucaibabonif/trunk/public/index.php/api/operativos", {
      referencia: referencia,
      fecha: fecha,
      descripcion: descripcion,
      fechapago: fechapago
    }, {
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        allow_methods: "POST"
      }
    }).then(function (payload) {
      return dispatch({
        type: POST_OPERATIVO,
        payload: payload
      });
    });
  };
};
var postAgentes = function postAgentes(_ref7) {
  var apellido = _ref7.apellido,
    nombre = _ref7.nombre,
    cbu = _ref7.cbu,
    cuil = _ref7.cuil,
    tipoPago = _ref7.tipoPago,
    personaid = _ref7.personaid;
  return function (dispatch) {
    return _api_AgentesAPI__WEBPACK_IMPORTED_MODULE_21__.AgentesAPI.post("", {
      apellido: apellido,
      nombre: nombre,
      cbu: cbu,
      cuil: cuil,
      tipoPago: tipoPago,
      personaid: personaid
    }).then(function (payload) {
      return dispatch({
        type: POST_AGENTES,
        payload: payload
      });
    });
  };
};
var postModulo = function postModulo(_ref8) {
  var tipo = _ref8.tipo,
    categpria = _ref8.categpria,
    valor = _ref8.valor,
    descripcion = _ref8.descripcion,
    fechaDesde = _ref8.fechaDesde;
  return function (dispatch) {
    return axios__WEBPACK_IMPORTED_MODULE_26__["default"].post("http://localhost/cucaibabonif/trunk/public/index.php/api/modulos", {
      tipo: tipo,
      categpria: categpria,
      valor: valor,
      descripcion: descripcion,
      fechaDesde: fechaDesde
    }, {
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        allow_methods: "POST"
      }
    }).then(function (payload) {
      return dispatch({
        type: POST_MODULO,
        payload: payload
      });
    });
  };
};

/***/ }),

/***/ "./frontend/src/Redux/Store/index.js":
/*!*******************************************!*\
  !*** ./frontend/src/Redux/Store/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   store: () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _reducer_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducer/index */ "./frontend/src/Redux/reducer/index.js");




var store = (0,redux__WEBPACK_IMPORTED_MODULE_2__.createStore)(_reducer_index__WEBPACK_IMPORTED_MODULE_1__["default"], (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_0__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_2__.applyMiddleware)(redux_thunk__WEBPACK_IMPORTED_MODULE_3__["default"])));

/***/ }),

/***/ "./frontend/src/Redux/reducer/index.js":
/*!*********************************************!*\
  !*** ./frontend/src/Redux/reducer/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _Actions__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../Actions */ "./frontend/src/Redux/Actions/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }


























function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var InitialState = {
  agentes: [],
  operativos: [],
  modulos: [],
  categorias: [],
  TipoModulo: []
};
function rootReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : InitialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _Actions__WEBPACK_IMPORTED_MODULE_26__.GET_AGENTES:
      return _objectSpread(_objectSpread({}, state), {}, {
        agentes: action.payload
      });
    case _Actions__WEBPACK_IMPORTED_MODULE_26__.GET_OPERATIVOS:
      return _objectSpread(_objectSpread({}, state), {}, {
        operativos: action.payload
      });
    case _Actions__WEBPACK_IMPORTED_MODULE_26__.POST_OPERATIVO:
      return _objectSpread(_objectSpread({}, state), {}, {
        operativos: [].concat(_toConsumableArray(state.operativos), [action.payload])
      });
    case _Actions__WEBPACK_IMPORTED_MODULE_26__.POST_AGENTES:
      return _objectSpread(_objectSpread({}, state), {}, {
        agentes: [].concat(_toConsumableArray(state.agentes), [action.payload])
      });
    case _Actions__WEBPACK_IMPORTED_MODULE_26__.GET_MODULOS:
      return _objectSpread(_objectSpread({}, state), {}, {
        modulos: [state.modulos, action.payload]
      });
    case _Actions__WEBPACK_IMPORTED_MODULE_26__.GET_CATEGORIAS:
      return _objectSpread(_objectSpread({}, state), {}, {
        categorias: [state.categorias, action.payload]
      });
    case _Actions__WEBPACK_IMPORTED_MODULE_26__.GET_TIPOMODULO:
      return _objectSpread(_objectSpread({}, state), {}, {
        TipoModulo: [state.TipoModulo, action.payload]
      });
    case _Actions__WEBPACK_IMPORTED_MODULE_26__.POST_MODULO:
      return _objectSpread(_objectSpread({}, state), {}, {
        modulos: [].concat(_toConsumableArray(state.modulos), [action.payload])
      });
    default:
      return state;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootReducer);

/***/ }),

/***/ "./frontend/src/api/AgentesAPI.js":
/*!****************************************!*\
  !*** ./frontend/src/api/AgentesAPI.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AgentesAPI: () => (/* binding */ AgentesAPI)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");

var AgentesAPI = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
  baseURL: "".concat(({"NODE_ENV":"development","ENV":{"PRUEBA":"DESDE_LOCAL"}}).API_URL, "/agentes"),
  withCredentials: false,
  mode: "cors",
  headers: {
    'Access-Control-Allow-Origin': '*',
    'allow_methods': ["GET", "POST"],
    "Access-Control-Allow-Credentials": true
  }
});

/***/ }),

/***/ "./frontend/src/api/CategoriasAPI.js":
/*!*******************************************!*\
  !*** ./frontend/src/api/CategoriasAPI.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoriasAPI: () => (/* binding */ CategoriasAPI)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");

var CategoriasAPI = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
  baseURL: "".concat(({"NODE_ENV":"development","ENV":{"PRUEBA":"DESDE_LOCAL"}}).API_URL, "/categorias"),
  withCredentials: true,
  mode: "cors",
  headers: {
    'Access-Control-Allow-Origin': '*',
    'allow_methods': ["GET", "POST"],
    "Access-Control-Allow-Credentials": true
  }
});

/***/ }),

/***/ "./frontend/src/api/ModulosAPI.js":
/*!****************************************!*\
  !*** ./frontend/src/api/ModulosAPI.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModulosAPI: () => (/* binding */ ModulosAPI)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");

var ModulosAPI = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
  baseURL: "".concat(({"NODE_ENV":"development","ENV":{"PRUEBA":"DESDE_LOCAL"}}).API_URL, "/modulos"),
  withCredentials: true,
  mode: "cors",
  headers: {
    'Access-Control-Allow-Origin': '*',
    'allow_methods': ["GET", "POST"],
    "Access-Control-Allow-Credentials": true
  }
});

/***/ }),

/***/ "./frontend/src/api/OperativosAPI.js":
/*!*******************************************!*\
  !*** ./frontend/src/api/OperativosAPI.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OperativosAPI: () => (/* binding */ OperativosAPI)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");

var OperativosAPI = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
  baseURL: "".concat(({"NODE_ENV":"development","ENV":{"PRUEBA":"DESDE_LOCAL"}}).API_URL, "/operativos"),
  withCredentials: true,
  mode: "cors",
  headers: {
    'Access-Control-Allow-Origin': '*',
    'allow_methods': ["GET", "POST"],
    "Access-Control-Allow-Credentials": true
  }
});

/***/ }),

/***/ "./frontend/src/api/TipoAPI.js":
/*!*************************************!*\
  !*** ./frontend/src/api/TipoAPI.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TipoAPI: () => (/* binding */ TipoAPI)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");

var TipoAPI = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
  baseURL: "".concat(({"NODE_ENV":"development","ENV":{"PRUEBA":"DESDE_LOCAL"}}).API_URL, "/tipoModulo"),
  withCredentials: true,
  mode: "cors",
  headers: {
    'Access-Control-Allow-Origin': '*',
    'allow_methods': ["GET", "POST"],
    "Access-Control-Allow-Credentials": true
  }
});

/***/ }),

/***/ "./frontend/src/components/CrearModulo.jsx":
/*!*************************************************!*\
  !*** ./frontend/src/components/CrearModulo.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_pad_start_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.pad-start.js */ "./node_modules/core-js/modules/es.string.pad-start.js");
/* harmony import */ var core_js_modules_es_string_pad_start_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_pad_start_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var _Redux_Actions__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../Redux/Actions */ "./frontend/src/Redux/Actions/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }





































function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var CrearModulo = function CrearModulo() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_40__.useDispatch)();
  var categorias = (0,react_redux__WEBPACK_IMPORTED_MODULE_40__.useSelector)(function (state) {
    return state.categorias;
  });
  var tipoModulo = (0,react_redux__WEBPACK_IMPORTED_MODULE_40__.useSelector)(function (state) {
    return state.TipoModulo;
  });
  var primerArreglo = [];
  if (categorias.length > 1) {
    primerArreglo = categorias[1][0];
  }
  var destructuring = [];
  if (tipoModulo.length > 1) {
    destructuring = tipoModulo[1][0];
  }
  (0,react__WEBPACK_IMPORTED_MODULE_37__.useEffect)(function () {
    dispatch((0,_Redux_Actions__WEBPACK_IMPORTED_MODULE_39__.getCategorias)());
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_37__.useEffect)(function () {
    dispatch((0,_Redux_Actions__WEBPACK_IMPORTED_MODULE_39__.getTipoModulo)());
  }, []);

  //CREACION DE MODULO //
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_37__.useState)({
      Tipo: "",
      Categoria: "",
      Valor: "",
      Descripcion: "",
      FechaDesde: ""
    }),
    _useState2 = _slicedToArray(_useState, 2),
    modulo = _useState2[0],
    setModulo = _useState2[1];
  var handleOnSubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      var newModulo;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            if (!(modulo.Tipo && modulo.Categoria && modulo.Valor && modulo.Descripcion && modulo.FechaDesde)) {
              _context.next = 10;
              break;
            }
            newModulo = _objectSpread({}, modulo);
            dispatch((0,_Redux_Actions__WEBPACK_IMPORTED_MODULE_39__.postModulo)(newModulo));
            console.log(newModulo);
            _context.next = 7;
            return sweetalert2__WEBPACK_IMPORTED_MODULE_38___default().fire({
              position: "center",
              icon: "success",
              title: "El modulo ha sido creado",
              showConfirmButton: false,
              timer: 4000
            });
          case 7:
            setModulo({
              Tipo: "",
              Categoria: "",
              Valor: "",
              Descripcion: "",
              FechaDesde: ""
            });
            _context.next = 11;
            break;
          case 10:
            sweetalert2__WEBPACK_IMPORTED_MODULE_38___default().fire({
              position: "center",
              icon: "error",
              title: "Por favor, completa todos los campos",
              showConfirmButton: true
            });
          case 11:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function handleOnSubmit(_x2) {
      return _ref.apply(this, arguments);
    };
  }();
  function formatDateTime(dateTime) {
    var date = new Date(dateTime);
    var year = date.getFullYear();
    var month = padZero(date.getMonth() + 1);
    var day = padZero(date.getDate());
    var hours = padZero(date.getHours());
    var minutes = padZero(date.getMinutes());
    return "".concat(year, "-").concat(month, "-").concat(day, " ").concat(hours, ":").concat(minutes);
  }
  function padZero(number) {
    return number.toString().padStart(2, "0");
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_37___default().createElement("div", {
    className: "form-container",
    style: {
      padding: "20px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      border: "2px solid black"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_37___default().createElement("form", {
    onSubmit: handleOnSubmit,
    className: "row g-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_37___default().createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_37___default().createElement("label", {
    htmlFor: "tipo"
  }, "Tipo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_37___default().createElement("select", {
    name: "tipo",
    value: modulo.destructuring,
    onChange: function onChange(e) {
      return setModulo(_objectSpread(_objectSpread({}, modulo), {}, {
        Tipo: Number(e.target.value)
      }));
    },
    placeholder: "Selecciona un tipo"
  }, destructuring.map(function (tipo) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_37___default().createElement("option", {
      key: tipo.id,
      value: tipo.id
    }, tipo.descripcion);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_37___default().createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_37___default().createElement("label", {
    htmlFor: "categoria"
  }, "Categoria"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_37___default().createElement("select", {
    name: "categoria",
    value: modulo.primerArreglo,
    onChange: function onChange(e) {
      return setModulo(_objectSpread(_objectSpread({}, modulo), {}, {
        Categoria: Number(e.target.value)
      }));
    },
    placeholder: "Selecciona una categoria"
  }, primerArreglo.map(function (mod) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_37___default().createElement("option", {
      key: mod.id,
      value: mod.id
    }, mod.descripcion);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_37___default().createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_37___default().createElement("label", {
    htmlFor: "descripcion"
  }, "Descripcion"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_37___default().createElement("input", {
    type: "text",
    className: "form-control",
    name: "descripcion",
    value: modulo.Descripcion,
    autoComplete: "off",
    placeholder: "Descripci\xF3n",
    onChange: function onChange(e) {
      return setModulo(_objectSpread(_objectSpread({}, modulo), {}, {
        Descripcion: e.target.value
      }));
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_37___default().createElement("div", {
    className: "col-md-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_37___default().createElement("label", {
    htmlFor: "valor"
  }, "Valor"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_37___default().createElement("input", {
    type: "number",
    className: "form-control",
    name: "valor",
    value: modulo.Valor,
    autoComplete: "off",
    placeholder: "Valor",
    onChange: function onChange(e) {
      return setModulo(_objectSpread(_objectSpread({}, modulo), {}, {
        Valor: Number(e.target.value)
      }));
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_37___default().createElement("div", {
    className: "col-md-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_37___default().createElement("label", {
    htmlFor: "fechaDesde"
  }, "Fecha Desde"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_37___default().createElement("input", {
    type: "datetime-local",
    className: "form-control",
    name: "fechaDesde",
    value: modulo.FechaDesde,
    autoComplete: "off",
    placeholder: "Fecha Desde",
    onChange: function onChange(e) {
      return setModulo(_objectSpread(_objectSpread({}, modulo), {}, {
        FechaDesde: formatDateTime(e.target.value)
      }));
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_37___default().createElement("div", {
    className: "col-8 d-flex justify-content-center pt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_37___default().createElement("button", {
    type: "submit",
    className: "btn btn-primary"
  }, "Crear Modulo"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CrearModulo);

/***/ }),

/***/ "./frontend/src/components/GetAgentes.jsx":
/*!************************************************!*\
  !*** ./frontend/src/components/GetAgentes.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Redux_Actions__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../Redux/Actions */ "./frontend/src/Redux/Actions/index.js");
/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-data-table-component */ "./node_modules/react-data-table-component/dist/index.cjs.js");
/* harmony import */ var _UI_EmptyTable__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./UI/EmptyTable */ "./frontend/src/components/UI/EmptyTable.jsx");
/* harmony import */ var _hooks_usePagination__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../hooks/usePagination */ "./frontend/src/hooks/usePagination.jsx");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




















function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }






var GetAgentes = function GetAgentes(_ref) {
  var props = Object.assign({}, (_objectDestructuringEmpty(_ref), _ref));
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_21__.useDispatch)();
  var agentes = (0,react_redux__WEBPACK_IMPORTED_MODULE_21__.useSelector)(function (state) {
    return state.agentes;
  });
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_20__.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    search = _useState2[0],
    setSearch = _useState2[1];
  var primerArreglo = agentes.slice(0, 1)[0];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_20__.useState)(primerArreglo),
    _useState4 = _slicedToArray(_useState3, 2),
    agente = _useState4[0],
    setAgente = _useState4[1];
  var _usePagination = (0,_hooks_usePagination__WEBPACK_IMPORTED_MODULE_25__.usePagination)(primerArreglo),
    paginationOptions = _usePagination.paginationOptions;
  (0,react__WEBPACK_IMPORTED_MODULE_20__.useEffect)(function () {
    dispatch((0,_Redux_Actions__WEBPACK_IMPORTED_MODULE_22__.getAgentes)());
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_20__.useEffect)(function () {
    setAgente(primerArreglo);
  }, [primerArreglo]);

  //-------------------------------- SEARCHBAR --------------------------- //

  (0,react__WEBPACK_IMPORTED_MODULE_20__.useEffect)(function () {
    filterByCuil(search);
  }, [search]);
  var handleOnChange = function handleOnChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
  };
  var filterByCuil = function filterByCuil(value) {
    if (!value) {
      setAgente(primerArreglo);
    } else {
      var arrayCache = primerArreglo.filter(function (oper) {
        return oper.cuil.toLowerCase().includes(value.toLowerCase());
      });
      setAgente(arrayCache);
    }
  };

  //-------------------------------- FIN SEARCHBAR --------------------------- //

  //----------------------------------PAGINADO ------------------------------//

  var columns = [{
    name: "ID",
    selector: function selector(row) {
      return row.id;
    },
    sortable: true
  }, {
    name: "Apellido",
    selector: function selector(row) {
      return row.apellido;
    },
    sortable: true
  }, {
    name: "Nombre",
    selector: function selector(row) {
      return row.nombre;
    },
    sortable: true
  }, {
    name: "CBU",
    selector: function selector(row) {
      return row.cbu;
    },
    sortable: true
  }, {
    name: "CUIL",
    selector: function selector(row) {
      return row.cuil;
    },
    sortable: true
  }];

  //------------------------- FIN PAGINADO -----------------------------------//

  //---------------------------------SPINNER ------------------------------------//

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_20__.useState)(true),
    _useState6 = _slicedToArray(_useState5, 2),
    showSpinner = _useState6[0],
    setShowSpinner = _useState6[1];
  (0,react__WEBPACK_IMPORTED_MODULE_20__.useEffect)(function () {
    setTimeout(function () {
      setShowSpinner(false);
    }, 2000);
  }, []);
  if (agentes.length === 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("div", {
      className: "d-flex justify-content-center align-items-center vh-100"
    }, showSpinner ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("button", {
      className: "btn btn-primary",
      type: "button",
      disabled: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("span", {
      className: "spinner-border spinner-border-sm mr-2",
      role: "status",
      "aria-hidden": "true"
    }), "Cargando...") : null);
  }

  //---------------------------------FIN SPINNER ------------------------------------//

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("h1", null, "Lista de Agentes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("div", {
    className: "input-group mb-3",
    style: {
      maxWidth: "40%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Buscar por CUIL",
    onChange: handleOnChange,
    value: search,
    autoComplete: "off"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement(react_data_table_component__WEBPACK_IMPORTED_MODULE_23__["default"], _extends({
    columns: columns,
    data: agente,
    pagination: true,
    striped: true,
    paginationComponentOptions: paginationOptions,
    noDataComponent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement(_UI_EmptyTable__WEBPACK_IMPORTED_MODULE_24__["default"], {
      msg: "No se encontro el Agente con ese CUIL"
    })
  }, props)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GetAgentes);

/***/ }),

/***/ "./frontend/src/components/GetOperativos.jsx":
/*!***************************************************!*\
  !*** ./frontend/src/components/GetOperativos.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Redux_Actions__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../Redux/Actions */ "./frontend/src/Redux/Actions/index.js");
/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-data-table-component */ "./node_modules/react-data-table-component/dist/index.cjs.js");
/* harmony import */ var _UI_EmptyTable__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./UI/EmptyTable */ "./frontend/src/components/UI/EmptyTable.jsx");
/* harmony import */ var _hooks_usePagination__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../hooks/usePagination */ "./frontend/src/hooks/usePagination.jsx");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_24__);


















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var GetOperativos = function GetOperativos() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_19__.useDispatch)();
  var operativos = (0,react_redux__WEBPACK_IMPORTED_MODULE_19__.useSelector)(function (state) {
    return state.operativos;
  });
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    search = _useState2[0],
    setSearch = _useState2[1];
  var primerArreglo = operativos.slice(0, 1)[0];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)(primerArreglo),
    _useState4 = _slicedToArray(_useState3, 2),
    operativo = _useState4[0],
    setOperativo = _useState4[1];
  var _usePagination = (0,_hooks_usePagination__WEBPACK_IMPORTED_MODULE_23__.usePagination)(primerArreglo),
    paginationOptions = _usePagination.paginationOptions;
  (0,react__WEBPACK_IMPORTED_MODULE_18__.useEffect)(function () {
    dispatch((0,_Redux_Actions__WEBPACK_IMPORTED_MODULE_20__.getOperativos)());
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_18__.useEffect)(function () {
    setOperativo(primerArreglo);
  }, [primerArreglo]);

  //-------------------------------- SEARCHBAR --------------------------- //

  (0,react__WEBPACK_IMPORTED_MODULE_18__.useEffect)(function () {
    filterByRef(search);
  }, [search]);
  var handleOnChange = function handleOnChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
  };
  var filterByRef = function filterByRef(value) {
    if (!value) {
      setOperativo(primerArreglo);
    } else {
      var arrayCache = primerArreglo.filter(function (oper) {
        return oper.referencia.toLowerCase().includes(value.toLowerCase());
      });
      setOperativo(arrayCache);
    }
  };

  //-------------------------------- FIN SEARCHBAR --------------------------- //

  //--------------------------------- PAGINADO-------------------------------- //
  var columns = [{
    name: "ID",
    selector: function selector(row) {
      return row.id;
    },
    sortable: true
  }, {
    name: "Referencia",
    selector: function selector(row) {
      return row.referencia;
    },
    sortable: true
  }, {
    name: "Fecha",
    selector: function selector(row) {
      return row.fecha;
    },
    sortable: true,
    format: function format(row) {
      return moment__WEBPACK_IMPORTED_MODULE_24___default()(row.fecha).format('L');
    }
  }, {
    name: "Descripción",
    selector: function selector(row) {
      return row.descripcion;
    },
    sortable: true
  }];

  //--------------------------------- FIN PAGINADO-------------------------------- //

  //---------------------------------SPINNER ------------------------------------- //
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)(true),
    _useState6 = _slicedToArray(_useState5, 2),
    showSpinner = _useState6[0],
    setShowSpinner = _useState6[1];
  (0,react__WEBPACK_IMPORTED_MODULE_18__.useEffect)(function () {
    setTimeout(function () {
      setShowSpinner(false);
    }, 2000);
  }, []);
  if (operativos.length === 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
      className: "d-flex justify-content-center align-items-center vh-100"
    }, showSpinner ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("button", {
      className: "btn btn-primary",
      type: "button",
      disabled: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("span", {
      className: "spinner-border spinner-border-sm mr-2",
      role: "status",
      "aria-hidden": "true"
    }), "Cargando...") : null);
  }

  //------------------------------------FIN SPINNER ------------------------------ //

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("h1", null, "Lista de Operativos"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "input-group mb-3",
    style: {
      maxWidth: "40%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Buscar por N\xFAmero de Referencia",
    onChange: handleOnChange,
    value: search,
    autoComplete: "off"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(react_data_table_component__WEBPACK_IMPORTED_MODULE_21__["default"], {
    columns: columns,
    data: operativo,
    pagination: true,
    striped: true,
    paginationComponentOptions: paginationOptions,
    noDataComponent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_UI_EmptyTable__WEBPACK_IMPORTED_MODULE_22__["default"], {
      msg: "No se encontro el operativo con ese N\xB0 SINTRA"
    })
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GetOperativos);

/***/ }),

/***/ "./frontend/src/components/Layout/Header.jsx":
/*!***************************************************!*\
  !*** ./frontend/src/components/Layout/Header.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-icons/gi */ "./node_modules/react-icons/gi/index.esm.js");
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-icons/bi */ "./node_modules/react-icons/bi/index.esm.js");
/* harmony import */ var _styles_header_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./styles/header.css */ "./frontend/src/components/Layout/styles/header.css");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Sidebar */ "./frontend/src/components/Layout/Sidebar.jsx");














function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function Header() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];

  // ----------------------- CADA VEZ QUE SE HACE CLICK SE CIERRA LA SIDEBAR -------- //

  var handleOutsideClick = function handleOutsideClick(event) {
    if (isOpen) {
      if (!event.target.closest('.navbar-ms')) {
        setIsOpen(false);
      }
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_14__.useEffect)(function () {
    document.addEventListener('click', handleOutsideClick);
    return function () {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("header", {
    className: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("nav", {
    className: "navbar  position-relative top-0 navbar-offcanvas navbar-ms"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: "row w-100 mx-auto flex-nowrap align-items-center justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("button", {
    className: "navbar-toggler mr-1 border-0",
    type: "button",
    id: "navToggle",
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement(react_icons_gi__WEBPACK_IMPORTED_MODULE_17__.GiHamburgerMenu, {
    size: "3rem"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: "col-7 pl-0 pl-md-2 intranet-logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("span", {
    className: "fst-line"
  }, "INTRANET - Liquidaci\xF3n Honorarios C.U.C.A.I.B.A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("span", {
    className: "snd-line"
  }, "MINISTERIO DE SALUD")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: "col-3 d-flex justify-content-end align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: "dropdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("button", {
    className: "btn btn-user font-weight-medium dropdown-toggle",
    type: "button",
    "data-bs-toggle": "dropdown",
    "aria-expanded": "false"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement(react_icons_bi__WEBPACK_IMPORTED_MODULE_18__.BiUserCircle, {
    size: "2rem"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("span", {
    className: "username"
  }, " Alejandro Oslovski ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: "dropdown-user dropdown-menu pt-4",
    "aria-labelledby": "dropdownMenu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: "dropdown-item text-center text-secondary mb-2 pt-2",
    type: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "10vh",
    height: "10vh",
    fill: "currentColor",
    className: "bi bi-person-circle",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("path", {
    d: "M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("path", {
    fillRule: "evenodd",
    d: "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: "font-weight-bold text-no-wrap mt-2"
  }, "Alejandro Oslovski"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: "text-muted"
  }, "@wilson"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: "text-muted text-center mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("span", {
    className: "badge badge-pill rounded-5 text-dark-emphasis badge-light border border-dark px-5 py-2"
  }, "Perfil Hospital"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: "dropdown-divider mt-4"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: "dropdown-item text-secondary text-center py-3",
    type: "button"
  }, "Centro De Alta Complejidad Cardiovascular Presidente Juan Domingo Peron"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: "dropdown-divider mb-2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: "dropdown-item text-center",
    type: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("a", {
    id: "closeSession",
    className: "btn btn-danger close-session w-50",
    href: "/cucaibabonif/trunk/public/index.php/logout",
    "data-url": "/cucaibabonif/trunk/public/index.php/logout"
  }, "Salir")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement(_Sidebar__WEBPACK_IMPORTED_MODULE_16__["default"], {
    isOpen: isOpen
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./frontend/src/components/Layout/Layout.jsx":
/*!***************************************************!*\
  !*** ./frontend/src/components/Layout/Layout.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./frontend/src/components/Layout/Header.jsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function Layout() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Header__WEBPACK_IMPORTED_MODULE_0__["default"], null), /*#__PURE__*/React.createElement("main", {
    style: {
      background: "#f7f7f7"
    }
  }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Outlet, null)));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./frontend/src/components/Layout/LayoutHonorarios.jsx":
/*!*************************************************************!*\
  !*** ./frontend/src/components/Layout/LayoutHonorarios.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function LayoutHonorarios() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("main", {
    style: {
      background: "#f7f7f7"
    },
    className: "container p-4"
  }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Outlet, null)));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LayoutHonorarios);

/***/ }),

/***/ "./frontend/src/components/Layout/Sidebar.jsx":
/*!****************************************************!*\
  !*** ./frontend/src/components/Layout/Sidebar.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/styles/style.css */ "./frontend/src/assets/styles/style.css");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
/* harmony import */ var react_icons_si__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/si */ "./node_modules/react-icons/si/index.esm.js");
/* harmony import */ var react_icons_tb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/tb */ "./node_modules/react-icons/tb/index.esm.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");







function SideBar(_ref) {
  var isOpen = _ref.isOpen;
  return /*#__PURE__*/React.createElement("div", {
    className: "sidebar-nav navbar-collapse offcanvas-collapse ".concat(isOpen ? "open" : "null"),
    style: {
      zIndex: 1000
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      padding: ".85rem 0",
      marginBottom: "1px",
      color: "var(--bs-secondary-color)",
      letterSpacing: "1px",
      fontWeight: "600"
    }
  }, "Men\xFA de navegaci\xF3n"), /*#__PURE__*/React.createElement("ul", {
    className: "metismenu side-menu",
    id: "side-menu"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/",
    onClick: function onClick() {
      return isOpen(false);
    }
  }, /*#__PURE__*/React.createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiFillHome, {
    className: "sidebarIcons"
  }), " Inicio")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    "aria-controls": "collapseAgentes",
    "aria-expanded": "false",
    className: "nav-link dropdown-toggle",
    "data-bs-toggle": "collapse",
    href: "#collapseAgentes",
    role: "button"
  }, /*#__PURE__*/React.createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__.BsFillPersonFill, {
    className: "sidebarIcons"
  }), " Agentes"), /*#__PURE__*/React.createElement("ul", {
    className: "collapse sub-menu",
    id: "collapseAgentes"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/agentes/crear-agente",
    onClick: function onClick() {
      return isOpen(false);
    }
  }, "Cargar Agente")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/agentes/ver-agentes",
    onClick: function onClick() {
      return isOpen(false);
    }
  }, "Ver Agentes")))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    "aria-controls": "collapseExample",
    "aria-expanded": "false",
    className: "nav-link dropdown-toggle",
    "data-bs-toggle": "collapse",
    href: "#collapseOperativos",
    role: "button"
  }, /*#__PURE__*/React.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaAmbulance, {
    className: "sidebarIcons"
  }), " Operativos"), /*#__PURE__*/React.createElement("ul", {
    className: "collapse sub-menu",
    id: "collapseOperativos"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/operativos/nuevo-operativo",
    onClick: function onClick() {
      return isOpen(false);
    }
  }, "Cargar operativos")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/operativos/ver-operativos",
    onClick: function onClick() {
      return isOpen(false);
    }
  }, "Ver operativos")))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    "aria-controls": "collapseExample",
    "aria-expanded": "false",
    className: "nav-link dropdown-toggle",
    "data-bs-toggle": "collapse",
    href: "#collapseHonorarios",
    role: "button"
  }, /*#__PURE__*/React.createElement(react_icons_si__WEBPACK_IMPORTED_MODULE_5__.SiWebmoney, {
    className: "sidebarIcons"
  }), " Honorarios"), /*#__PURE__*/React.createElement("ul", {
    className: "collapse sub-menu",
    id: "collapseHonorarios"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/honorarios/variables",
    onClick: function onClick() {
      return isOpen(false);
    }
  }, "Variables")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    className: "btn btn-link disabled ",
    href: "/algo"
  }, "Guardia")))), /*#__PURE__*/React.createElement("ul", {
    className: "metismenu side-menu",
    id: "side-menu"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/modulos",
    onClick: function onClick() {
      return isOpen(false);
    }
  }, /*#__PURE__*/React.createElement(react_icons_tb__WEBPACK_IMPORTED_MODULE_6__.TbNurse, {
    className: "sidebarIcons"
  }), " M\xF3dulos")))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SideBar);

/***/ }),

/***/ "./frontend/src/components/Modulos.jsx":
/*!*********************************************!*\
  !*** ./frontend/src/components/Modulos.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Redux_Actions__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../Redux/Actions */ "./frontend/src/Redux/Actions/index.js");
/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-data-table-component */ "./node_modules/react-data-table-component/dist/index.cjs.js");
/* harmony import */ var _UI_EmptyTable__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./UI/EmptyTable */ "./frontend/src/components/UI/EmptyTable.jsx");
/* harmony import */ var _hooks_usePagination__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../hooks/usePagination */ "./frontend/src/hooks/usePagination.jsx");
/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react-icons/cg */ "./node_modules/react-icons/cg/index.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _CrearModulo__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./CrearModulo */ "./frontend/src/components/CrearModulo.jsx");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




















function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }









var Modulos = function Modulos(_ref) {
  var props = Object.assign({}, (_objectDestructuringEmpty(_ref), _ref));
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_21__.useDispatch)();
  var modulos = (0,react_redux__WEBPACK_IMPORTED_MODULE_21__.useSelector)(function (state) {
    return state.modulos;
  });
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_20__.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    search = _useState2[0],
    setSearch = _useState2[1];
  var primerArreglo = [];
  if (modulos.length > 1) {
    primerArreglo = modulos[1][0];
  }
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_20__.useState)(primerArreglo),
    _useState4 = _slicedToArray(_useState3, 2),
    modulo = _useState4[0],
    setModulo = _useState4[1];
  var _usePagination = (0,_hooks_usePagination__WEBPACK_IMPORTED_MODULE_25__.usePagination)(primerArreglo),
    paginationOptions = _usePagination.paginationOptions;
  (0,react__WEBPACK_IMPORTED_MODULE_20__.useEffect)(function () {
    dispatch((0,_Redux_Actions__WEBPACK_IMPORTED_MODULE_22__.getModulos)());
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_20__.useEffect)(function () {
    setModulo(primerArreglo);
  }, [primerArreglo]);

  //-------------------------------- SEARCHBAR --------------------------- //

  (0,react__WEBPACK_IMPORTED_MODULE_20__.useEffect)(function () {
    filterByDescripcion(search);
  }, [search]);
  var handleOnChange = function handleOnChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
  };
  var filterByDescripcion = function filterByDescripcion(value) {
    if (!value) {
      setModulo(primerArreglo);
    } else {
      var arrayCache = primerArreglo.filter(function (mod) {
        return mod.descripcion.toLowerCase().includes(value.toLowerCase());
      });
      setModulo(arrayCache);
    }
  };

  //MOSTRANDO EL FORMULARIO DE CREACION //

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_20__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    mostrarFormulario = _useState6[0],
    setMostrarFormulario = _useState6[1];
  function handleMostrarFormulario() {
    setMostrarFormulario(true);
  }
  function handleCerrarFormulario() {
    setMostrarFormulario(false);
  }

  //-------------------------------- FIN SEARCHBAR --------------------------- //

  //----------------------------------PAGINADO ------------------------------//

  var columns = [{
    name: "ID",
    selector: function selector(row) {
      return row.id;
    },
    sortable: true
  }, {
    name: "Descripción",
    selector: function selector(row) {
      return row.descripcion;
    },
    sortable: true
  }, {
    name: "Valor",
    selector: function selector(row) {
      return row.valor;
    },
    sortable: true
  }, {
    name: "Fecha Desde",
    selector: function selector(row) {
      return row.fechaDesde;
    },
    sortable: true,
    format: function format(row) {
      return moment__WEBPACK_IMPORTED_MODULE_26___default()(row.fecha).format("L");
    }
  }, {
    name: "Fecha hasta",
    selector: function selector(row) {
      return row.fecha_hasta;
    },
    sortable: true
  }];

  //------------------------- FIN PAGINADO -----------------------------------//

  //---------------------------------SPINNER ------------------------------------//

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_20__.useState)(true),
    _useState8 = _slicedToArray(_useState7, 2),
    showSpinner = _useState8[0],
    setShowSpinner = _useState8[1];
  (0,react__WEBPACK_IMPORTED_MODULE_20__.useEffect)(function () {
    setTimeout(function () {
      setShowSpinner(false);
    }, 2000);
  }, []);
  if (modulos.length === 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("div", {
      className: "d-flex justify-content-center align-items-center vh-100"
    }, showSpinner ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("button", {
      className: "btn btn-primary",
      type: "button",
      disabled: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("span", {
      className: "spinner-border spinner-border-sm mr-2",
      role: "status",
      "aria-hidden": "true"
    }), "Cargando...") : null);
  }

  //---------------------------------FIN SPINNER ------------------------------------//

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("h1", null, "Lista de M\xF3dulos"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("div", {
    className: "input-group mb-3",
    style: {
      maxWidth: "40%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Buscar por Descripci\xF3n",
    onChange: handleOnChange,
    value: search,
    autoComplete: "off"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("button", {
    className: "btn btn-primary",
    style: {
      background: "var(--ms-main-color)"
    },
    onClick: handleMostrarFormulario
  }, "Crear M\xF3dulo"), mostrarFormulario && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("div", {
    style: {
      position: "fixed",
      top: "45%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "white",
      zIndex: "999"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("button", {
    fontSize: "2rem",
    onClick: handleCerrarFormulario
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement(react_icons_cg__WEBPACK_IMPORTED_MODULE_28__.CgCloseO, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement(_CrearModulo__WEBPACK_IMPORTED_MODULE_27__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement(react_data_table_component__WEBPACK_IMPORTED_MODULE_23__["default"], _extends({
    columns: columns,
    data: modulo,
    pagination: true,
    striped: true,
    paginationComponentOptions: paginationOptions,
    noDataComponent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement(_UI_EmptyTable__WEBPACK_IMPORTED_MODULE_24__["default"], {
      msg: "No se encontro el tipo de M\xF3dulo"
    })
  }, props)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modulos);

/***/ }),

/***/ "./frontend/src/components/PostAgentes.jsx":
/*!*************************************************!*\
  !*** ./frontend/src/components/PostAgentes.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _Redux_Actions__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../Redux/Actions */ "./frontend/src/Redux/Actions/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_37__);
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }


































function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var postAgente = function postAgente() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_35__.useDispatch)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_36__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    persona = _useState2[0],
    setPersona = _useState2[1];

  //---------------------------- CREACION AGENTE ---------------------------- //

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_36__.useState)({
      apellido: "",
      nombre: "",
      cbu: "",
      cuil: "",
      tipoPago: "",
      personaid: ""
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    agente = _useState4[0],
    setAgente = _useState4[1];
  var handleFindPersona = function handleFindPersona() {
    console.log(agente.cuil);
    setPersona([]);
  };
  var handleOnSubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      var newAgente;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            if (!(agente.apellido && agente.nombre && agente.cbu && agente.cuil && agente.tipoPago && agente.personaid)) {
              _context.next = 9;
              break;
            }
            newAgente = _objectSpread({}, agente);
            dispatch((0,_Redux_Actions__WEBPACK_IMPORTED_MODULE_34__.postAgentes)(newAgente));
            _context.next = 6;
            return sweetalert2__WEBPACK_IMPORTED_MODULE_37___default().fire({
              position: "center",
              icon: "success",
              title: "El Agente ha sido creado",
              showConfirmButton: false,
              timer: 2000
            });
          case 6:
            // window.location.reload();
            setAgente({
              apellido: "",
              nombre: "",
              cbu: "",
              cuil: "",
              tipoPago: "",
              personaid: ""
            });
            _context.next = 10;
            break;
          case 9:
            sweetalert2__WEBPACK_IMPORTED_MODULE_37___default().fire({
              position: "center",
              icon: "error",
              title: "Por favor, completa todos los campos",
              showConfirmButton: true
            });
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function handleOnSubmit(_x2) {
      return _ref.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: handleOnSubmit
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "inputFechadePago",
    className: "form-label"
  }, "CUIL"), /*#__PURE__*/React.createElement("div", {
    className: "d-flex gap-5 align-items-center justify-content-center",
    style: {
      height: "40px"
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    id: "inputCUIL",
    "aria-describedby": "CUILHelp",
    name: "CUIL",
    value: agente.cuil,
    autoComplete: "off",
    placeholder: "CUIL",
    onChange: function onChange(e) {
      return setAgente(_objectSpread(_objectSpread({}, agente), {}, {
        cuil: e.target.value
      }));
    }
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn ",
    type: "button",
    style: {
      background: "var(--ms-main-color)",
      color: "#fff"
    },
    onClick: handleFindPersona
  }, "Buscar Persona"))), /*#__PURE__*/React.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "inputApellido",
    className: "form-label"
  }, "Apellido"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    id: "inputApellido",
    "aria-describedby": "ApellidoHelp",
    name: "apellido",
    value: agente.apellido,
    autoComplete: "off",
    placeholder: "Apellido",
    disabled: persona === null,
    onChange: function onChange(e) {
      return setAgente(_objectSpread(_objectSpread({}, agente), {}, {
        apellido: e.target.value
      }));
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "inputNombre",
    className: "form-label"
  }, "Nombre"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    id: "inputNombre",
    "aria-describedby": "NombreHelp",
    name: "Nombre",
    value: agente.nombre,
    autoComplete: "off",
    placeholder: "Nombre",
    disabled: persona === null,
    onChange: function onChange(e) {
      return setAgente(_objectSpread(_objectSpread({}, agente), {}, {
        nombre: e.target.value
      }));
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "inputDescripci\xF3n",
    className: "form-label"
  }, "CBU"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    id: "inputCBU",
    "aria-describedby": "CBUHelp",
    name: "CBU",
    value: agente.cbu,
    autoComplete: "off",
    placeholder: "CBU",
    disabled: persona === null,
    onChange: function onChange(e) {
      return setAgente(_objectSpread(_objectSpread({}, agente), {}, {
        cbu: e.target.value
      }));
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "inputTipoPago",
    className: "form-label"
  }, "Tipo de Pago"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    id: "TipoPago",
    "aria-describedby": "TipoPagoHelp",
    name: "TIPOPAGO",
    value: agente.tipoPago,
    autoComplete: "off",
    placeholder: "Tipo de Pago",
    disabled: persona === null,
    onChange: function onChange(e) {
      return setAgente(_objectSpread(_objectSpread({}, agente), {}, {
        tipoPago: e.target.value
      }));
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "inputPersId",
    className: "form-label"
  }, "PersonaId"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    id: "inputCUIL",
    "aria-describedby": "CUILHelp",
    name: "PersId",
    value: agente.personaid,
    autoComplete: "off",
    placeholder: "pERSID",
    disabled: persona === null,
    onChange: function onChange(e) {
      return setAgente(_objectSpread(_objectSpread({}, agente), {}, {
        personaid: e.target.value
      }));
    }
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn-primary",
    style: {
      background: "var(--ms-main-color)"
    }
  }, "Agregar Agente"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postAgente);

/***/ }),

/***/ "./frontend/src/components/PostHonorarios.jsx":
/*!****************************************************!*\
  !*** ./frontend/src/components/PostHonorarios.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var _hooks_useModulos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useModulos */ "./frontend/src/hooks/useModulos.jsx");




var PostHonorarios = function PostHonorarios(_ref) {
  var disabled = _ref.disabled;
  var _useModulos = (0,_hooks_useModulos__WEBPACK_IMPORTED_MODULE_2__.useModulos)(),
    modulosQuery = _useModulos.modulosQuery;
  console.log(modulosQuery.data);
  var handleChange = function handleChange(e) {
    console.log(e);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "mt-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "d-flex align-items-center justify-content-between w-100 gap-2 rounded border p-5",
    style: {
      backgroundColor: "#edede9",
      boxShadow: "0px 0px 18px -28px rgba(0,0,0,0.2)"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "mb-3 w-50 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
    htmlFor: "funcionSelect",
    className: "form-label fw-bold"
  }, "Seleccionar Funci\xF3n"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("select", {
    onChange: handleChange,
    id: "funcionSelect",
    className: "form-select",
    "aria-label": "Default select example",
    disabled: disabled
  }, modulosQuery.isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("option", {
    defaultChecked: true
  }, "Cargando...") : modulosQuery.data.map(function (m) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("option", {
      value: m.id,
      key: m.id
    }, m.descripcion);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "mb-3 w-20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
    htmlFor: "valorModuloDisabled",
    className: "form-label fw-bold"
  }, "Valor"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
    className: "form-control",
    type: "text",
    id: "valorModuloDisabled",
    value: "500",
    "aria-label": "Disabled Valor modulo",
    disabled: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "mb-3 d-flex flex-column w-30"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
    className: "form-label fw-bold",
    htmlFor: "buttonAddModulo"
  }, "Agregar Modulo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
    id: "buttonAddModulo",
    type: "button",
    className: "btn btn-success",
    disabled: disabled
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiOutlinePlus, null)))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostHonorarios);

/***/ }),

/***/ "./frontend/src/components/PostOperativos.jsx":
/*!****************************************************!*\
  !*** ./frontend/src/components/PostOperativos.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _Redux_Actions__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../Redux/Actions */ "./frontend/src/Redux/Actions/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_38__);
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }



































function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var PostOperativos = function PostOperativos() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_36__.useDispatch)();

  //---------------------------- CREACION OPERATIVO ---------------------------- //

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_37__.useState)({
      referencia: "",
      fecha: "",
      descripcion: "",
      fechapago: ""
    }),
    _useState2 = _slicedToArray(_useState, 2),
    operativo = _useState2[0],
    setOperativo = _useState2[1];
  var handleOnSubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      var newOperativo;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            if (!(operativo.referencia && operativo.fecha && operativo.descripcion
            // operativo.fechapago
            )) {
              _context.next = 9;
              break;
            }
            newOperativo = _objectSpread(_objectSpread({}, operativo), {}, {
              fecha: operativo.fecha.replace("T", " ")
            });
            dispatch((0,_Redux_Actions__WEBPACK_IMPORTED_MODULE_35__.postOperativo)(newOperativo));
            _context.next = 6;
            return sweetalert2__WEBPACK_IMPORTED_MODULE_38___default().fire({
              position: "center",
              icon: "success",
              title: "El operativo ha sido creado",
              showConfirmButton: false,
              timer: 2000
            });
          case 6:
            // window.location.reload();
            setOperativo({
              referencia: "",
              fecha: "",
              descripcion: ""
              // fechapago: ""
            });
            _context.next = 10;
            break;
          case 9:
            sweetalert2__WEBPACK_IMPORTED_MODULE_38___default().fire({
              position: "center",
              icon: "error",
              title: "Por favor, completa todos los campos",
              showConfirmButton: true
            });
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function handleOnSubmit(_x2) {
      return _ref.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: handleOnSubmit
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/React.createElement("label", {
    "for": "inputReferncia",
    "class": "form-label"
  }, "Referencia"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    "class": "form-control",
    id: "inputReferencia",
    "aria-describedby": "ReferenciaHelp",
    name: "referencia",
    value: operativo.referencia,
    autoComplete: "off",
    placeholder: "N\xFAmero de Referencia",
    onChange: function onChange(e) {
      return setOperativo(_objectSpread(_objectSpread({}, operativo), {}, {
        referencia: e.target.value
      }));
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/React.createElement("label", {
    "for": "inputFecha",
    "class": "form-label"
  }, "Fecha"), /*#__PURE__*/React.createElement("input", {
    type: "datetime-local",
    "class": "form-control",
    id: "inputFecha",
    "aria-describedby": "FechaHelp",
    name: "Fecha",
    value: operativo.fecha,
    autoComplete: "off",
    placeholder: "Fecha del operativo",
    onChange: function onChange(e) {
      return setOperativo(_objectSpread(_objectSpread({}, operativo), {}, {
        fecha: e.target.value
      }));
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/React.createElement("label", {
    "for": "inputDescripci\xF3n",
    "class": "form-label"
  }, "Descripci\xF3n"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    "class": "form-control",
    id: "inputDescripci\xF3n",
    "aria-describedby": "Descripci\xF3nHelp",
    name: "descripci\xF3n",
    value: operativo.descripcion,
    autoComplete: "off",
    placeholder: "Descripci\xF3n",
    onChange: function onChange(e) {
      return setOperativo(_objectSpread(_objectSpread({}, operativo), {}, {
        descripcion: e.target.value
      }));
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/React.createElement("label", {
    "for": "inputFechadePago",
    "class": "form-label"
  }, "Fecha de Pago"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    "class": "form-control",
    id: "inputFechadePago",
    "aria-describedby": "FechadePagoHelp",
    name: "Fecha de Pago",
    value: operativo.fechapago,
    autoComplete: "off",
    placeholder: "Fecha de Pago",
    onChange: function onChange(e) {
      return setOperativo(_objectSpread(_objectSpread({}, operativo), {}, {
        fechapago: e.target.value
      }));
    }
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn-primary",
    style: {
      background: "var(--ms-main-color)"
    }
  }, "Agregar Operativo"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostOperativos);

/***/ }),

/***/ "./frontend/src/components/UI/EmptyTable.jsx":
/*!***************************************************!*\
  !*** ./frontend/src/components/UI/EmptyTable.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var EmptyTable = function EmptyTable(_ref) {
  var msg = _ref.msg;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "p-3 fw-bold"
  }, msg);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmptyTable);

/***/ }),

/***/ "./frontend/src/hooks/useModulos.jsx":
/*!*******************************************!*\
  !*** ./frontend/src/hooks/useModulos.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useModulos: () => (/* binding */ useModulos)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/lib/useQuery.mjs");
/* harmony import */ var _api_ModulosAPI__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../api/ModulosAPI */ "./frontend/src/api/ModulosAPI.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_22__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }





















function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var getModulos = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var _yield$ModulosAPI$get, data;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _api_ModulosAPI__WEBPACK_IMPORTED_MODULE_21__.ModulosAPI.get("/");
        case 2:
          _yield$ModulosAPI$get = _context.sent;
          data = _yield$ModulosAPI$get.data;
          return _context.abrupt("return", data[0]);
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getModulos() {
    return _ref.apply(this, arguments);
  };
}();
var useModulos = function useModulos() {
  var modulosQuery = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_23__.useQuery)({
    queryKey: ["modulos"],
    queryFn: function queryFn() {
      return getModulos();
    }
  });
  return {
    modulosQuery: modulosQuery
  };
};

/***/ }),

/***/ "./frontend/src/hooks/usePagination.jsx":
/*!**********************************************!*\
  !*** ./frontend/src/hooks/usePagination.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   usePagination: () => (/* binding */ usePagination)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);














function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var usePagination = function usePagination(primerArreglo) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(1),
    _useState2 = _slicedToArray(_useState, 2),
    currentPage = _useState2[0],
    setCurrentPage = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(10),
    _useState4 = _slicedToArray(_useState3, 2),
    perPage = _useState4[0],
    setPerPage = _useState4[1];
  var handlePageChange = function handlePageChange(page) {
    setCurrentPage(page);
  };
  var handlePerRowsChange = function handlePerRowsChange(perPage, page) {
    setCurrentPage(page);
    setPerPage(perPage);
  };
  var paginationOptions = {
    paginationServer: false,
    paginationTotalRows: primerArreglo ? primerArreglo.length : 0,
    paginationDefaultPage: currentPage,
    paginationPerPage: perPage,
    paginationRowsPerPageOptions: [10, 25, 50, 100],
    onChangePage: handlePageChange,
    onChangeRowsPerPage: handlePerRowsChange
  };
  return {
    paginationOptions: paginationOptions
  };
};

/***/ }),

/***/ "./frontend/src/lib/tooltip.js":
/*!*************************************!*\
  !*** ./frontend/src/lib/tooltip.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
//Sirve para inicializar los tooltip

var tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
var tooltipList = _toConsumableArray(tooltipTriggerList).map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

/***/ }),

/***/ "./frontend/src/main.jsx":
/*!*******************************!*\
  !*** ./frontend/src/main.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "./frontend/src/index.css");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/query-core/build/lib/queryClient.mjs");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/lib/QueryClientProvider.mjs");
/* harmony import */ var _tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tanstack/react-query-devtools */ "./node_modules/@tanstack/react-query-devtools/build/lib/index.mjs");
/* harmony import */ var _Redux_Store_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Redux/Store/index */ "./frontend/src/Redux/Store/index.js");
/* harmony import */ var _utils_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/routes */ "./frontend/src/utils/routes.jsx");










var queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__.QueryClient();
console.log(({"NODE_ENV":"development","ENV":{"PRUEBA":"DESDE_LOCAL"}}));
react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById("root")).render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().StrictMode), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {
  store: _Redux_Store_index__WEBPACK_IMPORTED_MODULE_5__.store
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.QueryClientProvider, {
  client: queryClient
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.RouterProvider, {
  router: _utils_routes__WEBPACK_IMPORTED_MODULE_6__["default"]
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_10__.ReactQueryDevtools, {
  initialIsOpen: false
})))));

/***/ }),

/***/ "./frontend/src/utils/routes.jsx":
/*!***************************************!*\
  !*** ./frontend/src/utils/routes.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _Pages_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Pages/Home */ "./frontend/src/Pages/Home.jsx");
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout/Layout */ "./frontend/src/components/Layout/Layout.jsx");
/* harmony import */ var _Pages_Operativos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Pages/Operativos */ "./frontend/src/Pages/Operativos.jsx");
/* harmony import */ var _Pages_Crear_Agente__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Pages/Crear-Agente */ "./frontend/src/Pages/Crear-Agente.jsx");
/* harmony import */ var _Pages_Crear_Operativo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Pages/Crear-Operativo */ "./frontend/src/Pages/Crear-Operativo.jsx");
/* harmony import */ var _Pages_Crear_Honorarios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Pages/Crear-Honorarios */ "./frontend/src/Pages/Crear-Honorarios.jsx");
/* harmony import */ var _Pages_Agentes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Pages/Agentes */ "./frontend/src/Pages/Agentes.jsx");
/* harmony import */ var _components_Layout_LayoutHonorarios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Layout/LayoutHonorarios */ "./frontend/src/components/Layout/LayoutHonorarios.jsx");
/* harmony import */ var _Pages_TablaHonorarios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Pages/TablaHonorarios */ "./frontend/src/Pages/TablaHonorarios.jsx");
/* harmony import */ var _Pages_AsignarAgente__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Pages/AsignarAgente */ "./frontend/src/Pages/AsignarAgente.jsx");
/* harmony import */ var _Pages_ModulosVista__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Pages/ModulosVista */ "./frontend/src/Pages/ModulosVista.jsx");













var router = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_12__.createBrowserRouter)([{
  path: "/",
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], null),
  children: [{
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Pages_Home__WEBPACK_IMPORTED_MODULE_1__.Home, null)
  }, {
    path: "/agentes",
    children: [{
      path: "/agentes/ver-agentes",
      element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Pages_Agentes__WEBPACK_IMPORTED_MODULE_7__["default"], null)
    }, {
      path: "/agentes/crear-agente",
      element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Pages_Crear_Agente__WEBPACK_IMPORTED_MODULE_4__["default"], null)
    }]
  }, {
    path: "operativos",
    children: [{
      path: "/operativos/ver-operativos",
      element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Pages_Operativos__WEBPACK_IMPORTED_MODULE_3__["default"], null)
    }, {
      path: "/operativos/nuevo-operativo",
      element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Pages_Crear_Operativo__WEBPACK_IMPORTED_MODULE_5__.CrearOperativo, null)
    }]
  }, {
    path: "honorarios",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layout_LayoutHonorarios__WEBPACK_IMPORTED_MODULE_8__["default"], null),
    children: [{
      path: "/honorarios/variables",
      children: [{
        index: true,
        element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Pages_TablaHonorarios__WEBPACK_IMPORTED_MODULE_9__["default"], null)
      }, {
        path: "/honorarios/variables/crear-honorario",
        element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Pages_Crear_Honorarios__WEBPACK_IMPORTED_MODULE_6__.CrearHonorarios, null),
        children: [{
          index: true,
          element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Pages_AsignarAgente__WEBPACK_IMPORTED_MODULE_10__["default"], null)
        }, {
          path: "/honorarios/variables/crear-honorario/:id/agregar",
          element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Agregar honorario al Agente"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Pages_TablaHonorarios__WEBPACK_IMPORTED_MODULE_9__["default"], null))
        }]
      }]
    }]
  }, {
    path: "/modulos",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Pages_ModulosVista__WEBPACK_IMPORTED_MODULE_11__["default"], null)
  }]
}], {
  basename: "/symfony-react-wp/public/index.php/"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);

/***/ }),

/***/ "./frontend/src/Pages/styles/tablaHonorarios.css":
/*!*******************************************************!*\
  !*** ./frontend/src/Pages/styles/tablaHonorarios.css ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./frontend/src/assets/styles/style.css":
/*!**********************************************!*\
  !*** ./frontend/src/assets/styles/style.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./frontend/src/components/Layout/styles/header.css":
/*!**********************************************************!*\
  !*** ./frontend/src/components/Layout/styles/header.css ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./frontend/src/index.css":
/*!********************************!*\
  !*** ./frontend/src/index.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-e57666"], () => (__webpack_exec__("./frontend/src/main.jsx")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3JjL1BhZ2VzL0FnZW50ZXMuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NyYy9QYWdlcy9Bc2lnbmFyQWdlbnRlLmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zcmMvUGFnZXMvQ3JlYXItQWdlbnRlLmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zcmMvUGFnZXMvQ3JlYXItSG9ub3Jhcmlvcy5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3JjL1BhZ2VzL0NyZWFyLU9wZXJhdGl2by5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3JjL1BhZ2VzL0hvbWUuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NyYy9QYWdlcy9Nb2R1bG9zVmlzdGEuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NyYy9QYWdlcy9PcGVyYXRpdm9zLmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zcmMvUGFnZXMvVGFibGFIb25vcmFyaW9zLmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zcmMvUmVkdXgvQWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zcmMvUmVkdXgvU3RvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3JjL1JlZHV4L3JlZHVjZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3JjL2FwaS9BZ2VudGVzQVBJLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NyYy9hcGkvQ2F0ZWdvcmlhc0FQSS5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zcmMvYXBpL01vZHVsb3NBUEkuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3JjL2FwaS9PcGVyYXRpdm9zQVBJLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NyYy9hcGkvVGlwb0FQSS5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9DcmVhck1vZHVsby5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvR2V0QWdlbnRlcy5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvR2V0T3BlcmF0aXZvcy5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvTGF5b3V0L0hlYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dEhvbm9yYXJpb3MuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL0xheW91dC9TaWRlYmFyLmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9Nb2R1bG9zLmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9Qb3N0QWdlbnRlcy5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvUG9zdEhvbm9yYXJpb3MuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL1Bvc3RPcGVyYXRpdm9zLmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9VSS9FbXB0eVRhYmxlLmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zcmMvaG9va3MvdXNlTW9kdWxvcy5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3JjL2hvb2tzL3VzZVBhZ2luYXRpb24uanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NyYy9saWIvdG9vbHRpcC5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zcmMvbWFpbi5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3JjL3V0aWxzL3JvdXRlcy5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3JjL1BhZ2VzL3N0eWxlcy90YWJsYUhvbm9yYXJpb3MuY3NzPzJhNjIiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3JjL2Fzc2V0cy9zdHlsZXMvc3R5bGUuY3NzPzczNzMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvTGF5b3V0L3N0eWxlcy9oZWFkZXIuY3NzPzg4OTkiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3JjL2luZGV4LmNzcz9iMzU2Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlLyBzeW5jIF5cXC5cXC8uKiQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgR2V0QWdlbnRlcyBmcm9tICcuLi9jb21wb25lbnRzL0dldEFnZW50ZXMnXHJcblxyXG5jb25zdCBBZ2VudGVzID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIHAtNCc+XHJcbiAgICAgICAgPEdldEFnZW50ZXMgLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWdlbnRlcyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEdldEFnZW50ZXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvR2V0QWdlbnRlc1wiO1xyXG5pbXBvcnQgeyB1c2VPdXRsZXRDb250ZXh0IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmNvbnN0IEFzaWduYXJBZ2VudGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Jvdywgc2V0Um93XSA9IHVzZU91dGxldENvbnRleHQoKTtcclxuICBjb25zdCBoYW5kbGVSb3dDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0Um93KGUuc2VsZWN0ZWRSb3dzWzBdKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMT5Bc2lnbmFyIEFnZW50ZSBhbCBPcGVyYXRpdm88L2gxPlxyXG4gICAgICAgIDxociAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEdldEFnZW50ZXNcclxuICAgICAgICBzZWxlY3RhYmxlUm93c1xyXG4gICAgICAgIHNlbGVjdGFibGVSb3dzTm9TZWxlY3RBbGxcclxuICAgICAgICBzZWxlY3RhYmxlUm93c1NpbmdsZVxyXG4gICAgICAgIHNlbGVjdGFibGVSb3dzSGlnaGxpZ2h0XHJcbiAgICAgICAgb25TZWxlY3RlZFJvd3NDaGFuZ2U9e2hhbmRsZVJvd0NoYW5nZX1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBc2lnbmFyQWdlbnRlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQb3N0QWdlbnRlcyBmcm9tICcuLi9jb21wb25lbnRzL1Bvc3RBZ2VudGVzJztcclxuXHJcbmNvbnN0IENyZWFyQWdlbnRlID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIHAtNCc+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxPkNyZWFjacOzbiBkZSBBZ2VudGU8L2gxPlxyXG4gICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8UG9zdEFnZW50ZXMgLz5cclxuICAgICAgICBcclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3JlYXJBZ2VudGU7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQb3N0SG9ub3JhcmlvcyBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0SG9ub3Jhcmlvc1wiO1xyXG5pbXBvcnQgeyBPdXRsZXQgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgVGFibGFIb25vcmFyaW9zIGZyb20gXCIuL1RhYmxhSG9ub3Jhcmlvc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENyZWFySG9ub3JhcmlvcyA9ICgpID0+IHtcclxuICAvLyBjb25zdCByb3dEaXNhYmxlZENyaXRlcmlhID0gKHJvdywgaWQpID0+IHJvdy5pZDtcclxuICBjb25zdCBbcm93LCBzZXRSb3ddID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxPdXRsZXQgY29udGV4dD17W3Jvdywgc2V0Um93XX0gLz5cclxuICAgICAgPGhyIC8+XHJcbiAgICAgIDxQb3N0SG9ub3JhcmlvcyBkaXNhYmxlZD17cm93ID09IG51bGx9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQb3N0T3BlcmF0aXZvcyBmcm9tICcuLi9jb21wb25lbnRzL1Bvc3RPcGVyYXRpdm9zJ1xyXG5cclxuZXhwb3J0IGNvbnN0IENyZWFyT3BlcmF0aXZvID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIHAtNCc+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgxPiBDcmVhciBPcGVyYXRpdm88L2gxPlxyXG4gICAgICAgIDxociAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxQb3N0T3BlcmF0aXZvcyAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCBcIi4uL2Fzc2V0cy9zdHlsZXMvc3R5bGUuY3NzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgY29udGFpbmVyLWxnICBwYi01IG10LTEwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0dWxvLXByaW5jaXBhbCBweS0zIHB5LWxnLTUgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0zXCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhLXN0YWNrIGZhLTJ4XCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1jaXJjbGUgZmEtc3RhY2stMnggdGV4dC1pbmZvXCI+PC9pPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtaG9zcGl0YWwtc3ltYm9sIGZhLXN0YWNrLTF4IHRleHQtbXV0ZWRcIj48L2k+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIHRleHQtbXV0ZWQgdGV4dC11cHBlcmNhc2UgbWItMFwiPlxyXG4gICAgICAgICAgICBBYmxhY2lvbmVzXHJcbiAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInRleHQtaW5mbyBtYi0wXCI+QmllbnZlbmlkb3M8L2g2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNb2R1bG9zIGZyb20gJy4uL2NvbXBvbmVudHMvTW9kdWxvcyc7XHJcblxyXG5jb25zdCBNb2R1bG9zVmlzdGEgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgcC00Jz5cclxuICAgICAgPE1vZHVsb3MgLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kdWxvc1Zpc3RhXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEdldE9wZXJhdGl2b3MgZnJvbSBcIi4uL2NvbXBvbmVudHMvR2V0T3BlcmF0aXZvc1wiXHJcblxyXG5leHBvcnQgY29uc3QgT3BlcmF0aXZvcyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciBwLTQnPlxyXG4gICAgICAgIDxHZXRPcGVyYXRpdm9zIC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9wZXJhdGl2b3MiLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFwiLi9zdHlsZXMvdGFibGFIb25vcmFyaW9zLmNzc1wiO1xyXG5pbXBvcnQgeyBCc0ZpbGxQZXJzb25GaWxsIH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XHJcbmltcG9ydCB7IEFpT3V0bGluZVBsdXMgfSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcclxuaW1wb3J0IFwiLi4vbGliL3Rvb2x0aXBcIjtcclxuaW1wb3J0IHsgdXNlUGFnaW5hdGlvbiB9IGZyb20gXCIuLi9ob29rcy91c2VQYWdpbmF0aW9uXCI7XHJcbmltcG9ydCBFbXB0eVRhYmxlIGZyb20gXCIuLi9jb21wb25lbnRzL1VJL0VtcHR5VGFibGVcIjtcclxuaW1wb3J0IERhdGFUYWJsZSBmcm9tIFwicmVhY3QtZGF0YS10YWJsZS1jb21wb25lbnRcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmNvbnN0IGFycmF5QWdlbnRlcyA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIG5vbWJyZTogXCJBZ2VudGUgMVwiLFxyXG4gICAgY3VpbDogXCIyMDM0NTY3ODkwMVwiLFxyXG4gICAgY2J1OiBcIjEyMzQ1Njc4OTAxMjM0NTY3ODkwMTJcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgbm9tYnJlOiBcIkFnZW50ZSAyXCIsXHJcbiAgICBjdWlsOiBcIjMwMzQ1Njc4OTAxXCIsXHJcbiAgICBjYnU6IFwiMjM0NTY3ODkwMTIzNDU2Nzg5MDEyM1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICBub21icmU6IFwiQWdlbnRlIDNcIixcclxuICAgIGN1aWw6IFwiNDAzNDU2Nzg5MDFcIixcclxuICAgIGNidTogXCIzNDU2Nzg5MDEyMzQ1Njc4OTAxMjM0XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNCxcclxuICAgIG5vbWJyZTogXCJBZ2VudGUgNFwiLFxyXG4gICAgY3VpbDogXCI1MDM0NTY3ODkwMVwiLFxyXG4gICAgY2J1OiBcIjQ1Njc4OTAxMjM0NTY3ODkwMTIzNDVcIixcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgYXJyYXlPYmpldG9zID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgcmVmZXJlbmNpYTogXCJyZWYxXCIsXHJcbiAgICBkZXNjcmlwY2lvbjogXCJEZXNjcmlwY2nDs24gZGVsIG9iamV0byAxXCIsXHJcbiAgICBmZWNoYTogXCIyMDIzLTA2LTI3XCIsXHJcbiAgICBhZ2VudGVzOiBhcnJheUFnZW50ZXMsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIHJlZmVyZW5jaWE6IFwicmVmMlwiLFxyXG4gICAgZGVzY3JpcGNpb246IFwiRGVzY3JpcGNpw7NuIGRlbCBvYmpldG8gMlwiLFxyXG4gICAgZmVjaGE6IFwiMjAyMy0wNi0yN1wiLFxyXG4gICAgYWdlbnRlczogYXJyYXlBZ2VudGVzLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICByZWZlcmVuY2lhOiBcInJlZjNcIixcclxuICAgIGRlc2NyaXBjaW9uOiBcIkRlc2NyaXBjacOzbiBkZWwgb2JqZXRvIDNcIixcclxuICAgIGZlY2hhOiBcIjIwMjMtMDYtMjdcIixcclxuICAgIGFnZW50ZXM6IGFycmF5QWdlbnRlcyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0LFxyXG4gICAgcmVmZXJlbmNpYTogXCJyZWY0XCIsXHJcbiAgICBkZXNjcmlwY2lvbjogXCJEZXNjcmlwY2nDs24gZGVsIG9iamV0byA0XCIsXHJcbiAgICBmZWNoYTogXCIyMDIzLTA2LTI3XCIsXHJcbiAgICBhZ2VudGVzOiBhcnJheUFnZW50ZXMsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNSxcclxuICAgIHJlZmVyZW5jaWE6IFwicmVmNVwiLFxyXG4gICAgZGVzY3JpcGNpb246IFwiRGVzY3JpcGNpw7NuIGRlbCBvYmpldG8gNVwiLFxyXG4gICAgZmVjaGE6IFwiMjAyMy0wNi0yN1wiLFxyXG4gICAgYWdlbnRlczogYXJyYXlBZ2VudGVzLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBFeHBhbmRlZENvbXBvbmVudCA9ICh7IGRhdGEgfSkgPT4ge1xyXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQWRkID0gKGlkKSA9PiB7XHJcbiAgICBuYXZpZ2F0ZShcIi9ob25vcmFyaW9zL3ZhcmlhYmxlcy9jcmVhci1ob25vcmFyaW8vXCIgKyBpZCArIFwiL2FncmVnYXJcIiwge1xyXG4gICAgICByZXBsYWNlOiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ3JlYXRlID0gKGlkKSA9PiB7XHJcbiAgICBuYXZpZ2F0ZShcIi9ob25vcmFyaW9zL3ZhcmlhYmxlcy9jcmVhci1ob25vcmFyaW8vXCIsIHtcclxuICAgICAgcmVwbGFjZTogdHJ1ZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInAtM1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGg1PkFnZW50ZXMgYXNvY2lhZG9zIGFsIE9wZXJhdGl2bzwvaDU+XHJcbiAgICAgICAgICA8aHIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ3JlYXRlKGRhdGEuaWQpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEFncmVnYXIgQWdlbnRlIDxCc0ZpbGxQZXJzb25GaWxsIC8+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtcmVzcG9uc2l2ZVwiPlxyXG4gICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+Q1VJTDwvdGg+XHJcbiAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkROSTwvdGg+XHJcbiAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPk5vbWJyZTwvdGg+XHJcbiAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkNCVTwvdGg+XHJcbiAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkFjY2nDs248L3RoPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgIHtkYXRhLmFnZW50ZXMubWFwKChhLCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDx0ciBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgIDx0ZD57YS5jdWlsfTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPnthLmlkfTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPnthLm5vbWJyZX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD57YS5jYnV9PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWJzLXRvZ2dsZT1cInRvb2x0aXBcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWJzLXBsYWNlbWVudD1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1icy10aXRsZT1cIkHDsWFkaXIgbW9kdWxvIGFsIEFnZW50ZVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFkZChhLmlkKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPEFpT3V0bGluZVBsdXMgLz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IGNvbHVtbnMgPSBbXHJcbiAgeyBuYW1lOiBcIklEXCIsIHNlbGVjdG9yOiAocm93KSA9PiByb3cuaWQsIHNvcnRhYmxlOiB0cnVlIH0sXHJcbiAgeyBuYW1lOiBcIlJlZmVyZW5jaWFcIiwgc2VsZWN0b3I6IChyb3cpID0+IHJvdy5yZWZlcmVuY2lhLCBzb3J0YWJsZTogdHJ1ZSB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiRmVjaGFcIixcclxuICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cuZmVjaGEsXHJcbiAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgIGZvcm1hdDogKHJvdykgPT4gbW9tZW50KHJvdy5mZWNoYSkuZm9ybWF0KFwiTFwiKSxcclxuICB9LFxyXG4gIHsgbmFtZTogXCJEZXNjcmlwY2nDs25cIiwgc2VsZWN0b3I6IChyb3cpID0+IHJvdy5kZXNjcmlwY2lvbiwgc29ydGFibGU6IHRydWUgfSxcclxuXTtcclxuXHJcblxyXG5cclxuY29uc3QgVGFibGFIb25vcmFyaW9zID0gKHsgLi4ucHJvcHMgfSkgPT4ge1xyXG4gIFxyXG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaG9ub3JhcmlvLCBzZXRIb25vcmFyaW9dID0gdXNlU3RhdGUoYXJyYXlPYmpldG9zKTtcclxuICBjb25zdCB7IHBhZ2luYXRpb25PcHRpb25zIH0gPSB1c2VQYWdpbmF0aW9uKGFycmF5T2JqZXRvcyk7XHJcblxyXG4gIFxyXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gU0VBUkNIQkFSIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmlsdGVyQnlSZWZlcmVuY2lhKHNlYXJjaCk7XHJcbiAgfSwgW3NlYXJjaF0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVPbkNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZpbHRlckJ5UmVmZXJlbmNpYSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICBzZXRIb25vcmFyaW8oYXJyYXlPYmpldG9zKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGFycmF5Q2FjaGUgPSBhcnJheU9iamV0b3MuZmlsdGVyKChvcGVyKSA9PlxyXG4gICAgICAgIG9wZXIucmVmZXJlbmNpYS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHZhbHVlLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgICk7XHJcbiAgICAgIHNldEhvbm9yYXJpbyhhcnJheUNhY2hlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEZJTiBTRUFSQ0hCQVIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTVcIj5cclxuICAgICAgICA8aDE+Q2FyZ2EgZGUgSG9ub3JhcmlvcyBWYXJpYWJsZXM8L2gxPlxyXG4gICAgICAgIDxociAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbWItM1wiIHN0eWxlPXt7IG1heFdpZHRoOiBcIjQwJVwiIH19PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQnVzY2FyIHBvciBSZWZlcmVuY2lhXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cclxuICAgICAgICAgIHZhbHVlPXtzZWFyY2h9XHJcbiAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPERhdGFUYWJsZVxyXG4gICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XHJcbiAgICAgICAgZGF0YT17aG9ub3JhcmlvfVxyXG4gICAgICAgIHBhZ2luYXRpb25cclxuICAgICAgICBzdHJpcGVkXHJcbiAgICAgICAgcGFnaW5hdGlvbkNvbXBvbmVudE9wdGlvbnM9e3BhZ2luYXRpb25PcHRpb25zfVxyXG4gICAgICAgIG5vRGF0YUNvbXBvbmVudD17XHJcbiAgICAgICAgICA8RW1wdHlUYWJsZSBtc2c9XCJObyBzZSBlbmNvbnRybyBlbCBBZ2VudGUgY29uIGVzZSBDVUlMXCIgLz5cclxuICAgICAgICB9XHJcbiAgICAgICAgZXhwYW5kYWJsZVJvd3NcclxuICAgICAgICBleHBhbmRhYmxlUm93c0NvbXBvbmVudD17RXhwYW5kZWRDb21wb25lbnR9XHJcbiAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhYmxhSG9ub3JhcmlvcztcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBBZ2VudGVzQVBJIH0gZnJvbSBcIi4uLy4uL2FwaS9BZ2VudGVzQVBJXCI7XHJcbmltcG9ydCB7IE9wZXJhdGl2b3NBUEkgfSBmcm9tIFwiLi4vLi4vYXBpL09wZXJhdGl2b3NBUElcIjtcclxuaW1wb3J0IHsgTW9kdWxvc0FQSSB9IGZyb20gXCIuLi8uLi9hcGkvTW9kdWxvc0FQSVwiO1xyXG5pbXBvcnQgeyBDYXRlZ29yaWFzQVBJIH0gZnJvbSBcIi4uLy4uL2FwaS9DYXRlZ29yaWFzQVBJLmpzXCI7XHJcbmltcG9ydCB7IFRpcG9BUEkgfSBmcm9tIFwiLi4vLi4vYXBpL1RpcG9BUElcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfQUdFTlRFUyA9IFwiR0VUX0FHRU5URVNcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9PUEVSQVRJVk9TID0gXCJHRVRfT1BFUkFUSVZPU1wiO1xyXG5leHBvcnQgY29uc3QgUE9TVF9PUEVSQVRJVk8gPSBcIlBPU1RfT1BFUkFUSVZPXCI7XHJcbmV4cG9ydCBjb25zdCBQT1NUX0FHRU5URVMgPSBcIlBPU1RfQUdFTlRFU1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX01PRFVMT1MgPSBcIkdFVF9NT0RVTE9TXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfQ0FURUdPUklBUyA9IFwiR0VUX0NBVEVHT1JJQVNcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9USVBPTU9EVUxPID0gXCJHRVRfVElQT01PRFVMT1wiO1xyXG5leHBvcnQgY29uc3QgUE9TVF9NT0RVTE8gPSBcIlBPU1RfTU9EVUxPXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QWdlbnRlcyA9ICgpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIGxldCByZXNwb25zZSA9IGF3YWl0IEFnZW50ZXNBUEkuZ2V0KFwiXCIpO1xyXG5cclxuICByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiBHRVRfQUdFTlRFUywgcGF5bG9hZDogcmVzcG9uc2UuZGF0YSB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRPcGVyYXRpdm9zID0gKCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgbGV0IHJlc3BvbnNlID0gYXdhaXQgT3BlcmF0aXZvc0FQSS5nZXQoXCJcIik7XHJcblxyXG4gIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6IEdFVF9PUEVSQVRJVk9TLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldE1vZHVsb3MgPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBNb2R1bG9zQVBJLmdldCgpO1xyXG4gIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6IEdFVF9NT0RVTE9TLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENhdGVnb3JpYXMgPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBDYXRlZ29yaWFzQVBJLmdldCgpO1xyXG4gIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6IEdFVF9DQVRFR09SSUFTLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFRpcG9Nb2R1bG8gPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBUaXBvQVBJLmdldCgpO1xyXG4gIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6IEdFVF9USVBPTU9EVUxPLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHBvc3RPcGVyYXRpdm8gPVxyXG4gICh7IHJlZmVyZW5jaWEsIGZlY2hhLCBkZXNjcmlwY2lvbiwgZmVjaGFwYWdvIH0pID0+XHJcbiAgKGRpc3BhdGNoKSA9PlxyXG4gICAgYXhpb3NcclxuICAgICAgLnBvc3QoXHJcbiAgICAgICAgXCJodHRwOi8vbG9jYWxob3N0L2N1Y2FpYmFib25pZi90cnVuay9wdWJsaWMvaW5kZXgucGhwL2FwaS9vcGVyYXRpdm9zXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcmVmZXJlbmNpYSxcclxuICAgICAgICAgIGZlY2hhLFxyXG4gICAgICAgICAgZGVzY3JpcGNpb24sXHJcbiAgICAgICAgICBmZWNoYXBhZ28sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBtb2RlOiBcImNvcnNcIixcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIsXHJcbiAgICAgICAgICAgIGFsbG93X21ldGhvZHM6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgICAgLnRoZW4oKHBheWxvYWQpID0+IGRpc3BhdGNoKHsgdHlwZTogUE9TVF9PUEVSQVRJVk8sIHBheWxvYWQgfSkpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBvc3RBZ2VudGVzID1cclxuICAoeyBhcGVsbGlkbywgbm9tYnJlLCBjYnUsIGN1aWwsIHRpcG9QYWdvLCBwZXJzb25haWQgfSkgPT5cclxuICAoZGlzcGF0Y2gpID0+XHJcbiAgICBBZ2VudGVzQVBJLnBvc3QoXCJcIiwge1xyXG4gICAgICBhcGVsbGlkbyxcclxuICAgICAgbm9tYnJlLFxyXG4gICAgICBjYnUsXHJcbiAgICAgIGN1aWwsXHJcbiAgICAgIHRpcG9QYWdvLFxyXG4gICAgICBwZXJzb25haWQsXHJcbiAgICB9KS50aGVuKChwYXlsb2FkKSA9PiBkaXNwYXRjaCh7IHR5cGU6IFBPU1RfQUdFTlRFUywgcGF5bG9hZCB9KSk7XHJcblxyXG5leHBvcnQgY29uc3QgcG9zdE1vZHVsbyA9XHJcbiAgKHsgdGlwbywgY2F0ZWdwcmlhLCB2YWxvciwgZGVzY3JpcGNpb24sIGZlY2hhRGVzZGUgfSkgPT5cclxuICAoZGlzcGF0Y2gpID0+XHJcbiAgICBheGlvc1xyXG4gICAgICAucG9zdChcclxuICAgICAgICBcImh0dHA6Ly9sb2NhbGhvc3QvY3VjYWliYWJvbmlmL3RydW5rL3B1YmxpYy9pbmRleC5waHAvYXBpL21vZHVsb3NcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aXBvLFxyXG4gICAgICAgICAgY2F0ZWdwcmlhLFxyXG4gICAgICAgICAgdmFsb3IsXHJcbiAgICAgICAgICBkZXNjcmlwY2lvbixcclxuICAgICAgICAgIGZlY2hhRGVzZGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBtb2RlOiBcImNvcnNcIixcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIsXHJcbiAgICAgICAgICAgIGFsbG93X21ldGhvZHM6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgICAgLnRoZW4oKHBheWxvYWQpID0+IGRpc3BhdGNoKHsgdHlwZTogUE9TVF9NT0RVTE8sIHBheWxvYWQgfSkpO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB0aHVuayBmcm9tIFwicmVkdXgtdGh1bmtcIjtcclxuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gXCIuLi9yZWR1Y2VyL2luZGV4XCJcclxuXHJcbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxyXG4gIHJvb3RSZWR1Y2VyLFxyXG4gIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKHRodW5rKSlcclxuKTsiLCJpbXBvcnQge1xyXG4gIEdFVF9BR0VOVEVTLFxyXG4gIEdFVF9PUEVSQVRJVk9TLFxyXG4gIFBPU1RfT1BFUkFUSVZPLFxyXG4gIFBPU1RfQUdFTlRFUyxcclxuICBHRVRfTU9EVUxPUyxcclxuICBHRVRfQ0FURUdPUklBUyxcclxuICBHRVRfVElQT01PRFVMTyxcclxuICBQT1NUX01PRFVMTyxcclxufSBmcm9tIFwiLi4vQWN0aW9uc1wiO1xyXG5cclxuY29uc3QgSW5pdGlhbFN0YXRlID0ge1xyXG4gIGFnZW50ZXM6IFtdLFxyXG5cclxuICBvcGVyYXRpdm9zOiBbXSxcclxuXHJcbiAgbW9kdWxvczogW10sXHJcblxyXG4gIGNhdGVnb3JpYXM6IFtdLFxyXG5cclxuICBUaXBvTW9kdWxvOiBbXSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIHJvb3RSZWR1Y2VyKHN0YXRlID0gSW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEdFVF9BR0VOVEVTOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgYWdlbnRlczogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGNhc2UgR0VUX09QRVJBVElWT1M6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBvcGVyYXRpdm9zOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgY2FzZSBQT1NUX09QRVJBVElWTzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIG9wZXJhdGl2b3M6IFsuLi5zdGF0ZS5vcGVyYXRpdm9zLCBhY3Rpb24ucGF5bG9hZF0gfTtcclxuICAgIGNhc2UgUE9TVF9BR0VOVEVTOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgYWdlbnRlczogWy4uLnN0YXRlLmFnZW50ZXMsIGFjdGlvbi5wYXlsb2FkXSB9O1xyXG4gICAgY2FzZSBHRVRfTU9EVUxPUzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIG1vZHVsb3M6IFtzdGF0ZS5tb2R1bG9zLCBhY3Rpb24ucGF5bG9hZF0gfTtcclxuICAgIGNhc2UgR0VUX0NBVEVHT1JJQVM6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjYXRlZ29yaWFzOiBbc3RhdGUuY2F0ZWdvcmlhcywgYWN0aW9uLnBheWxvYWRdIH07XHJcbiAgICBjYXNlIEdFVF9USVBPTU9EVUxPOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgVGlwb01vZHVsbzogW3N0YXRlLlRpcG9Nb2R1bG8sIGFjdGlvbi5wYXlsb2FkXSB9O1xyXG4gICAgY2FzZSBQT1NUX01PRFVMTzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIG1vZHVsb3M6IFsuLi5zdGF0ZS5tb2R1bG9zLCBhY3Rpb24ucGF5bG9hZF0gfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQWdlbnRlc0FQSSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICBiYXNlVVJMOiBgJHtwcm9jZXNzLmVudi5BUElfVVJMfS9hZ2VudGVzYCxcclxuICAgIHdpdGhDcmVkZW50aWFsczogZmFsc2UsXHJcbiAgICBtb2RlOiBcImNvcnNcIixcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxyXG4gICAgICAgICdhbGxvd19tZXRob2RzJzogW1wiR0VUXCIsIFwiUE9TVFwiXSxcclxuICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LUNyZWRlbnRpYWxzXCI6IHRydWVcclxuICAgIH1cclxufSlcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENhdGVnb3JpYXNBUEkgPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgYmFzZVVSTDogYCR7cHJvY2Vzcy5lbnYuQVBJX1VSTH0vY2F0ZWdvcmlhc2AsXHJcbiAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgICBtb2RlOiBcImNvcnNcIixcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxyXG4gICAgICAgICdhbGxvd19tZXRob2RzJzogW1wiR0VUXCIsIFwiUE9TVFwiXSxcclxuICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LUNyZWRlbnRpYWxzXCI6IHRydWVcclxuICAgIH1cclxufSkiLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTW9kdWxvc0FQSSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICBiYXNlVVJMOiBgJHtwcm9jZXNzLmVudi5BUElfVVJMfS9tb2R1bG9zYCxcclxuICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgIG1vZGU6IFwiY29yc1wiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsXHJcbiAgICAgICAgJ2FsbG93X21ldGhvZHMnOiBbXCJHRVRcIiwgXCJQT1NUXCJdLFxyXG4gICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctQ3JlZGVudGlhbHNcIjogdHJ1ZVxyXG4gICAgfVxyXG59KVxyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgY29uc3QgT3BlcmF0aXZvc0FQSSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICBiYXNlVVJMOiBgJHtwcm9jZXNzLmVudi5BUElfVVJMfS9vcGVyYXRpdm9zYCxcclxuICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgIG1vZGU6IFwiY29yc1wiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsXHJcbiAgICAgICAgJ2FsbG93X21ldGhvZHMnOiBbXCJHRVRcIiwgXCJQT1NUXCJdLFxyXG4gICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctQ3JlZGVudGlhbHNcIjogdHJ1ZVxyXG4gICAgfVxyXG59KVxyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVGlwb0FQSSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICBiYXNlVVJMOiBgJHtwcm9jZXNzLmVudi5BUElfVVJMfS90aXBvTW9kdWxvYCxcclxuICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgIG1vZGU6IFwiY29yc1wiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsXHJcbiAgICAgICAgJ2FsbG93X21ldGhvZHMnOiBbXCJHRVRcIiwgXCJQT1NUXCJdLFxyXG4gICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctQ3JlZGVudGlhbHNcIjogdHJ1ZVxyXG4gICAgfVxyXG59KSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTd2FsIGZyb20gXCJzd2VldGFsZXJ0MlwiO1xyXG5pbXBvcnQgeyBnZXRDYXRlZ29yaWFzLCBnZXRUaXBvTW9kdWxvLCBwb3N0TW9kdWxvIH0gZnJvbSBcIi4uL1JlZHV4L0FjdGlvbnNcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5jb25zdCBDcmVhck1vZHVsbyA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIGNvbnN0IGNhdGVnb3JpYXMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNhdGVnb3JpYXMpO1xyXG4gIGNvbnN0IHRpcG9Nb2R1bG8gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLlRpcG9Nb2R1bG8pO1xyXG4gIGxldCBwcmltZXJBcnJlZ2xvID0gW107XHJcbiAgaWYgKGNhdGVnb3JpYXMubGVuZ3RoID4gMSkge1xyXG4gICAgcHJpbWVyQXJyZWdsbyA9IGNhdGVnb3JpYXNbMV1bMF07XHJcbiAgfVxyXG5cclxuICBsZXQgZGVzdHJ1Y3R1cmluZyA9IFtdO1xyXG4gIGlmICh0aXBvTW9kdWxvLmxlbmd0aCA+IDEpIHtcclxuICAgIGRlc3RydWN0dXJpbmcgPSB0aXBvTW9kdWxvWzFdWzBdO1xyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKGdldENhdGVnb3JpYXMoKSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goZ2V0VGlwb01vZHVsbygpKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vQ1JFQUNJT04gREUgTU9EVUxPIC8vXHJcbiAgY29uc3QgW21vZHVsbywgc2V0TW9kdWxvXSA9IHVzZVN0YXRlKHtcclxuICAgIFRpcG86IFwiXCIsXHJcbiAgICBDYXRlZ29yaWE6IFwiXCIsXHJcbiAgICBWYWxvcjogXCJcIixcclxuICAgIERlc2NyaXBjaW9uOiBcIlwiLFxyXG4gICAgRmVjaGFEZXNkZTogXCJcIixcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT25TdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmIChcclxuICAgICAgbW9kdWxvLlRpcG8gJiZcclxuICAgICAgbW9kdWxvLkNhdGVnb3JpYSAmJlxyXG4gICAgICBtb2R1bG8uVmFsb3IgJiZcclxuICAgICAgbW9kdWxvLkRlc2NyaXBjaW9uICYmXHJcbiAgICAgIG1vZHVsby5GZWNoYURlc2RlXHJcbiAgICApIHtcclxuICAgICAgY29uc3QgbmV3TW9kdWxvID0ge1xyXG4gICAgICAgIC4uLm1vZHVsbyxcclxuICAgICAgfTtcclxuICAgICAgZGlzcGF0Y2gocG9zdE1vZHVsbyhuZXdNb2R1bG8pKTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKG5ld01vZHVsbyk7XHJcbiAgICAgIGF3YWl0IFN3YWwuZmlyZSh7XHJcbiAgICAgICAgcG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiRWwgbW9kdWxvIGhhIHNpZG8gY3JlYWRvXCIsXHJcbiAgICAgICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgICAgIHRpbWVyOiA0MDAwLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHNldE1vZHVsbyh7XHJcbiAgICAgICAgVGlwbzogXCJcIixcclxuICAgICAgICBDYXRlZ29yaWE6IFwiXCIsXHJcbiAgICAgICAgVmFsb3I6IFwiXCIsXHJcbiAgICAgICAgRGVzY3JpcGNpb246IFwiXCIsXHJcbiAgICAgICAgRmVjaGFEZXNkZTogXCJcIixcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgIHBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgIGljb246IFwiZXJyb3JcIixcclxuICAgICAgICB0aXRsZTogXCJQb3IgZmF2b3IsIGNvbXBsZXRhIHRvZG9zIGxvcyBjYW1wb3NcIixcclxuICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gZm9ybWF0RGF0ZVRpbWUoZGF0ZVRpbWUpIHtcclxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXRlVGltZSk7XHJcbiAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgY29uc3QgbW9udGggPSBwYWRaZXJvKGRhdGUuZ2V0TW9udGgoKSArIDEpO1xyXG4gICAgY29uc3QgZGF5ID0gcGFkWmVybyhkYXRlLmdldERhdGUoKSk7XHJcbiAgICBjb25zdCBob3VycyA9IHBhZFplcm8oZGF0ZS5nZXRIb3VycygpKTtcclxuICAgIGNvbnN0IG1pbnV0ZXMgPSBwYWRaZXJvKGRhdGUuZ2V0TWludXRlcygpKTtcclxuXHJcbiAgICByZXR1cm4gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9ICR7aG91cnN9OiR7bWludXRlc31gO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcGFkWmVybyhudW1iZXIpIHtcclxuICAgIHJldHVybiBudW1iZXIudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRhaW5lclwiXHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgcGFkZGluZzogXCIyMHB4XCIsXHJcbiAgICAgICAgYm94U2hhZG93OiBcIjAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSlcIixcclxuICAgICAgICBib3JkZXI6IFwiMnB4IHNvbGlkIGJsYWNrXCIsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVPblN1Ym1pdH0gY2xhc3NOYW1lPVwicm93IGctM1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGlwb1wiPlRpcG88L2xhYmVsPlxyXG4gICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICBuYW1lPVwidGlwb1wiXHJcbiAgICAgICAgICAgIHZhbHVlPXttb2R1bG8uZGVzdHJ1Y3R1cmluZ31cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICAgIHNldE1vZHVsbyh7IC4uLm1vZHVsbywgVGlwbzogTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWNjaW9uYSB1biB0aXBvXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2Rlc3RydWN0dXJpbmcubWFwKCh0aXBvKSA9PiAoXHJcbiAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3RpcG8uaWR9IHZhbHVlPXt0aXBvLmlkfT5cclxuICAgICAgICAgICAgICAgIHt0aXBvLmRlc2NyaXBjaW9ufVxyXG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY2F0ZWdvcmlhXCI+Q2F0ZWdvcmlhPC9sYWJlbD5cclxuICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgbmFtZT1cImNhdGVnb3JpYVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXttb2R1bG8ucHJpbWVyQXJyZWdsb31cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICAgIHNldE1vZHVsbyh7IC4uLm1vZHVsbywgQ2F0ZWdvcmlhOiBOdW1iZXIoZS50YXJnZXQudmFsdWUpIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY2Npb25hIHVuYSBjYXRlZ29yaWFcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7cHJpbWVyQXJyZWdsby5tYXAoKG1vZCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxvcHRpb24ga2V5PXttb2QuaWR9IHZhbHVlPXttb2QuaWR9PlxyXG4gICAgICAgICAgICAgICAge21vZC5kZXNjcmlwY2lvbn1cclxuICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRlc2NyaXBjaW9uXCI+RGVzY3JpcGNpb248L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgbmFtZT1cImRlc2NyaXBjaW9uXCJcclxuICAgICAgICAgICAgdmFsdWU9e21vZHVsby5EZXNjcmlwY2lvbn1cclxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmlwY2nDs25cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgc2V0TW9kdWxvKHsgLi4ubW9kdWxvLCBEZXNjcmlwY2lvbjogZS50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zXCI+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInZhbG9yXCI+VmFsb3I8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICBuYW1lPVwidmFsb3JcIlxyXG4gICAgICAgICAgICB2YWx1ZT17bW9kdWxvLlZhbG9yfVxyXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlZhbG9yXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICAgIHNldE1vZHVsbyh7IC4uLm1vZHVsbywgVmFsb3I6IE51bWJlcihlLnRhcmdldC52YWx1ZSkgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zXCI+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZlY2hhRGVzZGVcIj5GZWNoYSBEZXNkZTwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cImRhdGV0aW1lLWxvY2FsXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgbmFtZT1cImZlY2hhRGVzZGVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17bW9kdWxvLkZlY2hhRGVzZGV9XHJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRmVjaGEgRGVzZGVcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgc2V0TW9kdWxvKHtcclxuICAgICAgICAgICAgICAgIC4uLm1vZHVsbyxcclxuICAgICAgICAgICAgICAgIEZlY2hhRGVzZGU6IGZvcm1hdERhdGVUaW1lKGUudGFyZ2V0LnZhbHVlKSxcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTggZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgcHQtNFwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgIENyZWFyIE1vZHVsb1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDcmVhck1vZHVsbztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGdldEFnZW50ZXMgfSBmcm9tIFwiLi4vUmVkdXgvQWN0aW9uc1wiO1xyXG5pbXBvcnQgRGF0YVRhYmxlIGZyb20gXCJyZWFjdC1kYXRhLXRhYmxlLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQgRW1wdHlUYWJsZSBmcm9tIFwiLi9VSS9FbXB0eVRhYmxlXCI7XHJcbmltcG9ydCB7IHVzZVBhZ2luYXRpb24gfSBmcm9tIFwiLi4vaG9va3MvdXNlUGFnaW5hdGlvblwiO1xyXG5cclxuY29uc3QgR2V0QWdlbnRlcyA9ICh7IC4uLnByb3BzIH0pID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgYWdlbnRlcyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWdlbnRlcyk7XHJcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IHByaW1lckFycmVnbG8gPSBhZ2VudGVzLnNsaWNlKDAsIDEpWzBdO1xyXG4gIGNvbnN0IFthZ2VudGUsIHNldEFnZW50ZV0gPSB1c2VTdGF0ZShwcmltZXJBcnJlZ2xvKTtcclxuXHJcbiAgY29uc3QgeyBwYWdpbmF0aW9uT3B0aW9ucyB9ID0gdXNlUGFnaW5hdGlvbihwcmltZXJBcnJlZ2xvKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKGdldEFnZW50ZXMoKSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0QWdlbnRlKHByaW1lckFycmVnbG8pO1xyXG4gIH0sIFtwcmltZXJBcnJlZ2xvXSk7XHJcblxyXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gU0VBUkNIQkFSIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmlsdGVyQnlDdWlsKHNlYXJjaCk7XHJcbiAgfSwgW3NlYXJjaF0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVPbkNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZpbHRlckJ5Q3VpbCA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICBzZXRBZ2VudGUocHJpbWVyQXJyZWdsbyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBhcnJheUNhY2hlID0gcHJpbWVyQXJyZWdsby5maWx0ZXIoKG9wZXIpID0+XHJcbiAgICAgICAgb3Blci5jdWlsLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModmFsdWUudG9Mb3dlckNhc2UoKSlcclxuICAgICAgKTtcclxuICAgICAgc2V0QWdlbnRlKGFycmF5Q2FjaGUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gRklOIFNFQVJDSEJBUiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cclxuXHJcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tUEFHSU5BRE8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cclxuXHJcbiAgY29uc3QgY29sdW1ucyA9IFtcclxuICAgIHsgbmFtZTogXCJJRFwiLCBzZWxlY3RvcjogKHJvdykgPT4gcm93LmlkLCBzb3J0YWJsZTogdHJ1ZSB9LFxyXG4gICAgeyBuYW1lOiBcIkFwZWxsaWRvXCIsIHNlbGVjdG9yOiAocm93KSA9PiByb3cuYXBlbGxpZG8sIHNvcnRhYmxlOiB0cnVlIH0sXHJcbiAgICB7IG5hbWU6IFwiTm9tYnJlXCIsIHNlbGVjdG9yOiAocm93KSA9PiByb3cubm9tYnJlLCBzb3J0YWJsZTogdHJ1ZSB9LFxyXG4gICAgeyBuYW1lOiBcIkNCVVwiLCBzZWxlY3RvcjogKHJvdykgPT4gcm93LmNidSwgc29ydGFibGU6IHRydWUgfSxcclxuICAgIHsgbmFtZTogXCJDVUlMXCIsIHNlbGVjdG9yOiAocm93KSA9PiByb3cuY3VpbCwgc29ydGFibGU6IHRydWUgfSxcclxuICBdO1xyXG5cclxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gRklOIFBBR0lOQURPIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cclxuXHJcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1TUElOTkVSIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXHJcblxyXG4gIGNvbnN0IFtzaG93U3Bpbm5lciwgc2V0U2hvd1NwaW5uZXJdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRTaG93U3Bpbm5lcihmYWxzZSk7XHJcbiAgICB9LCAyMDAwKTtcclxuICB9LCBbXSk7XHJcbiAgaWYgKGFnZW50ZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciB2aC0xMDBcIj5cclxuICAgICAgICB7c2hvd1NwaW5uZXIgPyAoXHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIHR5cGU9XCJidXR0b25cIiBkaXNhYmxlZD5cclxuICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzcGlubmVyLWJvcmRlciBzcGlubmVyLWJvcmRlci1zbSBtci0yXCJcclxuICAgICAgICAgICAgICByb2xlPVwic3RhdHVzXCJcclxuICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICA+PC9zcGFuPlxyXG4gICAgICAgICAgICBDYXJnYW5kby4uLlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tRklOIFNQSU5ORVIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT5MaXN0YSBkZSBBZ2VudGVzPC9oMT5cclxuICAgICAgPGJyIC8+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG1iLTNcIiBzdHlsZT17eyBtYXhXaWR0aDogXCI0MCVcIiB9fT5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkJ1c2NhciBwb3IgQ1VJTFwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XHJcbiAgICAgICAgICB2YWx1ZT17c2VhcmNofVxyXG4gICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxEYXRhVGFibGVcclxuICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxyXG4gICAgICAgIGRhdGE9e2FnZW50ZX1cclxuICAgICAgICBwYWdpbmF0aW9uXHJcbiAgICAgICAgc3RyaXBlZFxyXG4gICAgICAgIHBhZ2luYXRpb25Db21wb25lbnRPcHRpb25zPXtwYWdpbmF0aW9uT3B0aW9uc31cclxuICAgICAgICBub0RhdGFDb21wb25lbnQ9e1xyXG4gICAgICAgICAgPEVtcHR5VGFibGUgbXNnPVwiTm8gc2UgZW5jb250cm8gZWwgQWdlbnRlIGNvbiBlc2UgQ1VJTFwiIC8+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHZXRBZ2VudGVzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgZ2V0T3BlcmF0aXZvcyB9IGZyb20gXCIuLi9SZWR1eC9BY3Rpb25zXCI7XHJcbmltcG9ydCBEYXRhVGFibGUgZnJvbSBcInJlYWN0LWRhdGEtdGFibGUtY29tcG9uZW50XCI7XHJcbmltcG9ydCBFbXB0eVRhYmxlIGZyb20gXCIuL1VJL0VtcHR5VGFibGVcIjtcclxuaW1wb3J0IHsgdXNlUGFnaW5hdGlvbiB9IGZyb20gXCIuLi9ob29rcy91c2VQYWdpbmF0aW9uXCI7XHJcbmltcG9ydCBNb21lbnQgZnJvbSBcIm1vbWVudFwiXHJcblxyXG5jb25zdCBHZXRPcGVyYXRpdm9zID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBvcGVyYXRpdm9zID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5vcGVyYXRpdm9zKTtcclxuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgcHJpbWVyQXJyZWdsbyA9IG9wZXJhdGl2b3Muc2xpY2UoMCwgMSlbMF07XHJcbiAgY29uc3QgW29wZXJhdGl2bywgc2V0T3BlcmF0aXZvXSA9IHVzZVN0YXRlKHByaW1lckFycmVnbG8pO1xyXG5cclxuICBjb25zdCB7cGFnaW5hdGlvbk9wdGlvbnN9ID0gdXNlUGFnaW5hdGlvbihwcmltZXJBcnJlZ2xvKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKGdldE9wZXJhdGl2b3MoKSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0T3BlcmF0aXZvKHByaW1lckFycmVnbG8pO1xyXG4gIH0sIFtwcmltZXJBcnJlZ2xvXSk7XHJcblxyXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gU0VBUkNIQkFSIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmlsdGVyQnlSZWYoc2VhcmNoKTtcclxuICB9LCBbc2VhcmNoXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9uQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBmaWx0ZXJCeVJlZiA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICBzZXRPcGVyYXRpdm8ocHJpbWVyQXJyZWdsbyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBhcnJheUNhY2hlID0gcHJpbWVyQXJyZWdsby5maWx0ZXIoKG9wZXIpID0+XHJcbiAgICAgICAgb3Blci5yZWZlcmVuY2lhLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModmFsdWUudG9Mb3dlckNhc2UoKSlcclxuICAgICAgKTtcclxuICAgICAgc2V0T3BlcmF0aXZvKGFycmF5Q2FjaGUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gRklOIFNFQVJDSEJBUiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cclxuXHJcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gUEFHSU5BRE8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xyXG4gIGNvbnN0IGNvbHVtbnMgPSBbXHJcbiAgICB7IG5hbWU6IFwiSURcIiwgc2VsZWN0b3I6IHJvdyA9PiByb3cuaWQsIHNvcnRhYmxlOiB0cnVlIH0sXHJcbiAgICB7IG5hbWU6IFwiUmVmZXJlbmNpYVwiLCBzZWxlY3Rvcjogcm93ID0+IHJvdy5yZWZlcmVuY2lhLCBzb3J0YWJsZTogdHJ1ZSB9LFxyXG4gICAgeyBuYW1lOiBcIkZlY2hhXCIsIHNlbGVjdG9yOiByb3cgPT4gcm93LmZlY2hhLCBzb3J0YWJsZTogdHJ1ZSwgZm9ybWF0OiByb3cgPT4gTW9tZW50KHJvdy5mZWNoYSkuZm9ybWF0KCdMJykgfSxcclxuICAgIHsgbmFtZTogXCJEZXNjcmlwY2nDs25cIiwgc2VsZWN0b3I6IHJvdyA9PiByb3cuZGVzY3JpcGNpb24sIHNvcnRhYmxlOiB0cnVlIH0sXHJcbiAgXTtcclxuXHJcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gRklOIFBBR0lOQURPLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cclxuXHJcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1TUElOTkVSIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cclxuICBjb25zdCBbc2hvd1NwaW5uZXIsIHNldFNob3dTcGlubmVyXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0U2hvd1NwaW5uZXIoZmFsc2UpO1xyXG4gICAgfSwgMjAwMCk7XHJcbiAgfSwgW10pO1xyXG4gIGlmIChvcGVyYXRpdm9zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgdmgtMTAwXCI+XHJcbiAgICAgICAge3Nob3dTcGlubmVyID8gKFxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiB0eXBlPVwiYnV0dG9uXCIgZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3Bpbm5lci1ib3JkZXIgc3Bpbm5lci1ib3JkZXItc20gbXItMlwiXHJcbiAgICAgICAgICAgICAgcm9sZT1cInN0YXR1c1wiXHJcbiAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICAgICAgQ2FyZ2FuZG8uLi5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUZJTiBTUElOTkVSIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPkxpc3RhIGRlIE9wZXJhdGl2b3M8L2gxPlxyXG4gICAgICA8YnIgLz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbWItM1wiIHN0eWxlPXt7IG1heFdpZHRoOiBcIjQwJVwiIH19PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQnVzY2FyIHBvciBOw7ptZXJvIGRlIFJlZmVyZW5jaWFcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxyXG4gICAgICAgICAgdmFsdWU9e3NlYXJjaH1cclxuICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8RGF0YVRhYmxlXHJcbiAgICAgICAgY29sdW1ucz17Y29sdW1uc31cclxuICAgICAgICBkYXRhPXtvcGVyYXRpdm99XHJcbiAgICAgICAgcGFnaW5hdGlvblxyXG4gICAgICAgIHN0cmlwZWRcclxuICAgICAgICBwYWdpbmF0aW9uQ29tcG9uZW50T3B0aW9ucz17cGFnaW5hdGlvbk9wdGlvbnN9XHJcbiAgICAgICAgbm9EYXRhQ29tcG9uZW50PXs8RW1wdHlUYWJsZSBtc2c9XCJObyBzZSBlbmNvbnRybyBlbCBvcGVyYXRpdm8gY29uIGVzZSBOwrAgU0lOVFJBXCIgLz59XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2V0T3BlcmF0aXZvcztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBHaUhhbWJ1cmdlck1lbnUgfSBmcm9tICdyZWFjdC1pY29ucy9naSc7XHJcbmltcG9ydCB7IEJpVXNlckNpcmNsZSB9IGZyb20gJ3JlYWN0LWljb25zL2JpJztcclxuaW1wb3J0ICcuL3N0eWxlcy9oZWFkZXIuY3NzJztcclxuXHJcbmltcG9ydCBTaWRlQmFyIGZyb20gJy4vU2lkZWJhcic7XHJcblxyXG5mdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gQ0FEQSBWRVogUVVFIFNFIEhBQ0UgQ0xJQ0sgU0UgQ0lFUlJBIExBIFNJREVCQVIgLS0tLS0tLS0gLy9cclxuXHJcbiAgY29uc3QgaGFuZGxlT3V0c2lkZUNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICBpZiAoaXNPcGVuKSB7XHJcbiAgICAgIGlmICghZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5uYXZiYXItbXMnKSkge1xyXG4gICAgICAgIHNldElzT3BlbihmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVPdXRzaWRlQ2xpY2spO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVPdXRzaWRlQ2xpY2spO1xyXG4gICAgfTtcclxuICB9LCBbaXNPcGVuXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciAgcG9zaXRpb24tcmVsYXRpdmUgdG9wLTAgbmF2YmFyLW9mZmNhbnZhcyBuYXZiYXItbXNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyB3LTEwMCBteC1hdXRvIGZsZXgtbm93cmFwIGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyIG1yLTEgYm9yZGVyLTBcIlxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgaWQ9XCJuYXZUb2dnbGVcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4oIWlzT3Blbil9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxHaUhhbWJ1cmdlck1lbnUgc2l6ZT1cIjNyZW1cIiAvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC03IHBsLTAgcGwtbWQtMiBpbnRyYW5ldC1sb2dvXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZzdC1saW5lXCI+SU5UUkFORVQgLSBMaXF1aWRhY2nDs24gSG9ub3JhcmlvcyBDLlUuQy5BLkkuQi5BPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbmQtbGluZVwiPk1JTklTVEVSSU8gREUgU0FMVUQ8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTMgZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmQgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXVzZXIgZm9udC13ZWlnaHQtbWVkaXVtIGRyb3Bkb3duLXRvZ2dsZVwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYnMtdG9nZ2xlPVwiZHJvcGRvd25cIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8QmlVc2VyQ2lyY2xlIHNpemU9XCIycmVtXCIgLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInVzZXJuYW1lXCI+IEFsZWphbmRybyBPc2xvdnNraSA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJvcGRvd24tdXNlciBkcm9wZG93bi1tZW51IHB0LTRcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiZHJvcGRvd25NZW51XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW0gdGV4dC1jZW50ZXIgdGV4dC1zZWNvbmRhcnkgbWItMiBwdC0yXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwdmhcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwdmhcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJpIGJpLXBlcnNvbi1jaXJjbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMSA2YTMgMyAwIDEgMS02IDAgMyAzIDAgMCAxIDYgMHpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk0wIDhhOCA4IDAgMSAxIDE2IDBBOCA4IDAgMCAxIDAgOHptOC03YTcgNyAwIDAgMC01LjQ2OCAxMS4zN0MzLjI0MiAxMS4yMjYgNC44MDUgMTAgOCAxMHM0Ljc1NyAxLjIyNSA1LjQ2OCAyLjM3QTcgNyAwIDAgMCA4IDF6XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIHRleHQtbm8td3JhcCBtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQWxlamFuZHJvIE9zbG92c2tpXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5Ad2lsc29uPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCB0ZXh0LWNlbnRlciBtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtcGlsbCByb3VuZGVkLTUgdGV4dC1kYXJrLWVtcGhhc2lzIGJhZGdlLWxpZ2h0IGJvcmRlciBib3JkZXItZGFyayBweC01IHB5LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIFBlcmZpbCBIb3NwaXRhbFxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tZGl2aWRlciBtdC00XCIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbSB0ZXh0LXNlY29uZGFyeSB0ZXh0LWNlbnRlciBweS0zXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIENlbnRybyBEZSBBbHRhIENvbXBsZWppZGFkIENhcmRpb3Zhc2N1bGFyIFByZXNpZGVudGUgSnVhblxyXG4gICAgICAgICAgICAgICAgICBEb21pbmdvIFBlcm9uXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tZGl2aWRlciBtYi0yXCIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbSB0ZXh0LWNlbnRlclwiIHR5cGU9XCJidXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImNsb3NlU2Vzc2lvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgY2xvc2Utc2Vzc2lvbiB3LTUwXCJcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiL2N1Y2FpYmFib25pZi90cnVuay9wdWJsaWMvaW5kZXgucGhwL2xvZ291dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS11cmw9XCIvY3VjYWliYWJvbmlmL3RydW5rL3B1YmxpYy9pbmRleC5waHAvbG9nb3V0XCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFNhbGlyXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxTaWRlQmFyIGlzT3Blbj17aXNPcGVufSAvPlxyXG4gICAgICA8L25hdj5cclxuICAgIDwvaGVhZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIiwiaW1wb3J0IHsgT3V0bGV0IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xyXG5cclxuZnVuY3Rpb24gTGF5b3V0KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxtYWluIHN0eWxlPXt7YmFja2dyb3VuZDogXCIjZjdmN2Y3XCJ9fT48T3V0bGV0IC8+PC9tYWluPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xyXG4iLCJpbXBvcnQgeyBPdXRsZXQgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuZnVuY3Rpb24gTGF5b3V0SG9ub3JhcmlvcygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPG1haW4gc3R5bGU9e3sgYmFja2dyb3VuZDogXCIjZjdmN2Y3XCIgfX0gY2xhc3NOYW1lPVwiY29udGFpbmVyIHAtNFwiPlxyXG4gICAgICAgIDxPdXRsZXQgLz5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0SG9ub3JhcmlvcztcclxuIiwiaW1wb3J0IFwiLi4vLi4vYXNzZXRzL3N0eWxlcy9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IEFpRmlsbEhvbWUgfSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcclxuaW1wb3J0IHsgRmFBbWJ1bGFuY2UgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcclxuaW1wb3J0IHsgQnNGaWxsUGVyc29uRmlsbCB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xyXG5pbXBvcnQgeyBTaVdlYm1vbmV5IH0gZnJvbSBcInJlYWN0LWljb25zL3NpXCI7XHJcbmltcG9ydCB7IFRiTnVyc2UgfSBmcm9tIFwicmVhY3QtaWNvbnMvdGJcIjtcclxuXHJcbmZ1bmN0aW9uIFNpZGVCYXIoeyBpc09wZW4gfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17YHNpZGViYXItbmF2IG5hdmJhci1jb2xsYXBzZSBvZmZjYW52YXMtY29sbGFwc2UgJHtcclxuICAgICAgICBpc09wZW4gPyBcIm9wZW5cIiA6IFwibnVsbFwiXHJcbiAgICAgIH1gfVxyXG4gICAgICBzdHlsZT17eyB6SW5kZXg6IDEwMDAgfX1cclxuICAgID5cclxuICAgICAgPGxhYmVsXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIHBhZGRpbmc6IFwiLjg1cmVtIDBcIixcclxuICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxcHhcIixcclxuICAgICAgICAgIGNvbG9yOiBcInZhcigtLWJzLXNlY29uZGFyeS1jb2xvcilcIixcclxuICAgICAgICAgIGxldHRlclNwYWNpbmc6IFwiMXB4XCIsXHJcbiAgICAgICAgICBmb250V2VpZ2h0OiBcIjYwMFwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICBNZW7DuiBkZSBuYXZlZ2FjacOzblxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwibWV0aXNtZW51IHNpZGUtbWVudVwiIGlkPVwic2lkZS1tZW51XCI+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPExpbmsgdG89XCIvXCIgb25DbGljaz17KCkgPT4gaXNPcGVuKGZhbHNlKX0+XHJcbiAgICAgICAgICAgIDxBaUZpbGxIb21lIGNsYXNzTmFtZT1cInNpZGViYXJJY29uc1wiIC8+IEluaWNpb1xyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgYXJpYS1jb250cm9scz1cImNvbGxhcHNlQWdlbnRlc1wiXHJcbiAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rIGRyb3Bkb3duLXRvZ2dsZVwiXHJcbiAgICAgICAgICAgIGRhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIlxyXG4gICAgICAgICAgICBocmVmPVwiI2NvbGxhcHNlQWdlbnRlc1wiXHJcbiAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8QnNGaWxsUGVyc29uRmlsbCBjbGFzc05hbWU9XCJzaWRlYmFySWNvbnNcIiAvPiBBZ2VudGVzXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY29sbGFwc2Ugc3ViLW1lbnVcIiBpZD1cImNvbGxhcHNlQWdlbnRlc1wiPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPExpbmsgdG89XCIvYWdlbnRlcy9jcmVhci1hZ2VudGVcIiBvbkNsaWNrPXsoKSA9PiBpc09wZW4oZmFsc2UpfT5cclxuICAgICAgICAgICAgICAgIENhcmdhciBBZ2VudGVcclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9hZ2VudGVzL3Zlci1hZ2VudGVzXCIgb25DbGljaz17KCkgPT4gaXNPcGVuKGZhbHNlKX0+XHJcbiAgICAgICAgICAgICAgICBWZXIgQWdlbnRlc1xyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwiY29sbGFwc2VFeGFtcGxlXCJcclxuICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmsgZHJvcGRvd24tdG9nZ2xlXCJcclxuICAgICAgICAgICAgZGF0YS1icy10b2dnbGU9XCJjb2xsYXBzZVwiXHJcbiAgICAgICAgICAgIGhyZWY9XCIjY29sbGFwc2VPcGVyYXRpdm9zXCJcclxuICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxGYUFtYnVsYW5jZSBjbGFzc05hbWU9XCJzaWRlYmFySWNvbnNcIiAvPiBPcGVyYXRpdm9zXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY29sbGFwc2Ugc3ViLW1lbnVcIiBpZD1cImNvbGxhcHNlT3BlcmF0aXZvc1wiPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIHRvPVwiL29wZXJhdGl2b3MvbnVldm8tb3BlcmF0aXZvXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGlzT3BlbihmYWxzZSl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ2FyZ2FyIG9wZXJhdGl2b3NcclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgdG89XCIvb3BlcmF0aXZvcy92ZXItb3BlcmF0aXZvc1wiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBpc09wZW4oZmFsc2UpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFZlciBvcGVyYXRpdm9zXHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJjb2xsYXBzZUV4YW1wbGVcIlxyXG4gICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGluayBkcm9wZG93bi10b2dnbGVcIlxyXG4gICAgICAgICAgICBkYXRhLWJzLXRvZ2dsZT1cImNvbGxhcHNlXCJcclxuICAgICAgICAgICAgaHJlZj1cIiNjb2xsYXBzZUhvbm9yYXJpb3NcIlxyXG4gICAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFNpV2VibW9uZXkgY2xhc3NOYW1lPVwic2lkZWJhckljb25zXCIgLz4gSG9ub3Jhcmlvc1xyXG4gICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjb2xsYXBzZSBzdWItbWVudVwiIGlkPVwiY29sbGFwc2VIb25vcmFyaW9zXCI+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9ob25vcmFyaW9zL3ZhcmlhYmxlc1wiIG9uQ2xpY2s9eygpID0+IGlzT3BlbihmYWxzZSl9PlxyXG4gICAgICAgICAgICAgICAgVmFyaWFibGVzXHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rIGRpc2FibGVkIFwiIGhyZWY9XCIvYWxnb1wiPlxyXG4gICAgICAgICAgICAgICAgR3VhcmRpYVxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1ldGlzbWVudSBzaWRlLW1lbnVcIiBpZD1cInNpZGUtbWVudVwiPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxMaW5rIHRvPVwiL21vZHVsb3NcIiBvbkNsaWNrPXsoKSA9PiBpc09wZW4oZmFsc2UpfT5cclxuICAgICAgICAgICAgPFRiTnVyc2UgY2xhc3NOYW1lPVwic2lkZWJhckljb25zXCIvPiBNw7NkdWxvc1xyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcblxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZUJhcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGdldE1vZHVsb3MgfSBmcm9tIFwiLi4vUmVkdXgvQWN0aW9uc1wiO1xyXG5pbXBvcnQgRGF0YVRhYmxlIGZyb20gXCJyZWFjdC1kYXRhLXRhYmxlLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQgRW1wdHlUYWJsZSBmcm9tIFwiLi9VSS9FbXB0eVRhYmxlXCI7XHJcbmltcG9ydCB7IHVzZVBhZ2luYXRpb24gfSBmcm9tIFwiLi4vaG9va3MvdXNlUGFnaW5hdGlvblwiO1xyXG5pbXBvcnQgeyBDZ0Nsb3NlTyB9IGZyb20gXCJyZWFjdC1pY29ucy9jZ1wiO1xyXG5pbXBvcnQgTW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuaW1wb3J0IENyZWFyTW9kdWxvIGZyb20gXCIuL0NyZWFyTW9kdWxvXCI7XHJcblxyXG5jb25zdCBNb2R1bG9zID0gKHsgLi4ucHJvcHMgfSkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBtb2R1bG9zID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5tb2R1bG9zKTtcclxuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgbGV0IHByaW1lckFycmVnbG8gPSBbXTtcclxuICBpZiAobW9kdWxvcy5sZW5ndGggPiAxKSB7XHJcbiAgICBwcmltZXJBcnJlZ2xvID0gbW9kdWxvc1sxXVswXTtcclxuICB9XHJcbiAgY29uc3QgW21vZHVsbywgc2V0TW9kdWxvXSA9IHVzZVN0YXRlKHByaW1lckFycmVnbG8pO1xyXG5cclxuICBjb25zdCB7IHBhZ2luYXRpb25PcHRpb25zIH0gPSB1c2VQYWdpbmF0aW9uKHByaW1lckFycmVnbG8pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goZ2V0TW9kdWxvcygpKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRNb2R1bG8ocHJpbWVyQXJyZWdsbyk7XHJcbiAgfSwgW3ByaW1lckFycmVnbG9dKTtcclxuXHJcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBTRUFSQ0hCQVIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmaWx0ZXJCeURlc2NyaXBjaW9uKHNlYXJjaCk7XHJcbiAgfSwgW3NlYXJjaF0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVPbkNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZpbHRlckJ5RGVzY3JpcGNpb24gPSAodmFsdWUpID0+IHtcclxuICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgc2V0TW9kdWxvKHByaW1lckFycmVnbG8pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgYXJyYXlDYWNoZSA9IHByaW1lckFycmVnbG8uZmlsdGVyKChtb2QpID0+XHJcbiAgICAgICAgbW9kLmRlc2NyaXBjaW9uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModmFsdWUudG9Mb3dlckNhc2UoKSlcclxuICAgICAgKTtcclxuICAgICAgc2V0TW9kdWxvKGFycmF5Q2FjaGUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gICAgLy9NT1NUUkFORE8gRUwgRk9STVVMQVJJTyBERSBDUkVBQ0lPTiAvL1xyXG5cclxuICAgIGNvbnN0IFttb3N0cmFyRm9ybXVsYXJpbywgc2V0TW9zdHJhckZvcm11bGFyaW9dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgZnVuY3Rpb24gaGFuZGxlTW9zdHJhckZvcm11bGFyaW8oKSB7XHJcbiAgICAgIHNldE1vc3RyYXJGb3JtdWxhcmlvKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNlcnJhckZvcm11bGFyaW8oKSB7XHJcbiAgICAgIHNldE1vc3RyYXJGb3JtdWxhcmlvKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBGSU4gU0VBUkNIQkFSIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xyXG5cclxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1QQUdJTkFETyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xyXG5cclxuICBjb25zdCBjb2x1bW5zID0gW1xyXG4gICAgeyBuYW1lOiBcIklEXCIsIHNlbGVjdG9yOiAocm93KSA9PiByb3cuaWQsIHNvcnRhYmxlOiB0cnVlIH0sXHJcbiAgICB7IG5hbWU6IFwiRGVzY3JpcGNpw7NuXCIsIHNlbGVjdG9yOiAocm93KSA9PiByb3cuZGVzY3JpcGNpb24sIHNvcnRhYmxlOiB0cnVlIH0sXHJcbiAgICB7IG5hbWU6IFwiVmFsb3JcIiwgc2VsZWN0b3I6IChyb3cpID0+IHJvdy52YWxvciwgc29ydGFibGU6IHRydWUgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJGZWNoYSBEZXNkZVwiLFxyXG4gICAgICBzZWxlY3RvcjogKHJvdykgPT4gcm93LmZlY2hhRGVzZGUsXHJcbiAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICBmb3JtYXQ6IChyb3cpID0+IE1vbWVudChyb3cuZmVjaGEpLmZvcm1hdChcIkxcIiksXHJcbiAgICB9LFxyXG4gICAgeyBuYW1lOiBcIkZlY2hhIGhhc3RhXCIsIHNlbGVjdG9yOiAocm93KSA9PiByb3cuZmVjaGFfaGFzdGEsIHNvcnRhYmxlOiB0cnVlIH0sXHJcbiAgXTtcclxuXHJcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEZJTiBQQUdJTkFETyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXHJcblxyXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tU1BJTk5FUiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xyXG5cclxuICBjb25zdCBbc2hvd1NwaW5uZXIsIHNldFNob3dTcGlubmVyXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0U2hvd1NwaW5uZXIoZmFsc2UpO1xyXG4gICAgfSwgMjAwMCk7XHJcbiAgfSwgW10pO1xyXG4gIGlmIChtb2R1bG9zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgdmgtMTAwXCI+XHJcbiAgICAgICAge3Nob3dTcGlubmVyID8gKFxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiB0eXBlPVwiYnV0dG9uXCIgZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3Bpbm5lci1ib3JkZXIgc3Bpbm5lci1ib3JkZXItc20gbXItMlwiXHJcbiAgICAgICAgICAgICAgcm9sZT1cInN0YXR1c1wiXHJcbiAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICAgICAgQ2FyZ2FuZG8uLi5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUZJTiBTUElOTkVSIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDE+TGlzdGEgZGUgTcOzZHVsb3M8L2gxPlxyXG4gICAgICA8YnIgLz5cclxuPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsIGp1c3RpZnlDb250ZW50Olwic3BhY2UtYmV0d2VlblwifX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbWItM1wiIHN0eWxlPXt7IG1heFdpZHRoOiBcIjQwJVwiIH19PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQnVzY2FyIHBvciBEZXNjcmlwY2nDs25cIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxyXG4gICAgICAgICAgdmFsdWU9e3NlYXJjaH1cclxuICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcInZhcigtLW1zLW1haW4tY29sb3IpXCIgfX1cclxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVNb3N0cmFyRm9ybXVsYXJpb31cclxuICAgICAgPlxyXG4gICAgICAgIENyZWFyIE3Ds2R1bG9cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIFxyXG4gICAgICB7bW9zdHJhckZvcm11bGFyaW8gJiYgKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXHJcbiAgICAgICAgICAgIHRvcDogXCI0NSVcIixcclxuICAgICAgICAgICAgbGVmdDogXCI1MCVcIixcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgtNTAlLCAtNTAlKVwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgekluZGV4OiBcIjk5OVwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8YnV0dG9uIGZvbnRTaXplPVwiMnJlbVwiIG9uQ2xpY2s9e2hhbmRsZUNlcnJhckZvcm11bGFyaW99PlxyXG4gICAgICAgICAgICA8Q2dDbG9zZU8gLz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPENyZWFyTW9kdWxvIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPERhdGFUYWJsZVxyXG4gICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XHJcbiAgICAgICAgZGF0YT17bW9kdWxvfVxyXG4gICAgICAgIHBhZ2luYXRpb25cclxuICAgICAgICBzdHJpcGVkXHJcbiAgICAgICAgcGFnaW5hdGlvbkNvbXBvbmVudE9wdGlvbnM9e3BhZ2luYXRpb25PcHRpb25zfVxyXG4gICAgICAgIG5vRGF0YUNvbXBvbmVudD17PEVtcHR5VGFibGUgbXNnPVwiTm8gc2UgZW5jb250cm8gZWwgdGlwbyBkZSBNw7NkdWxvXCIgLz59XHJcbiAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZHVsb3M7XHJcbiIsImltcG9ydCB7IHBvc3RBZ2VudGVzIH0gZnJvbSBcIi4uL1JlZHV4L0FjdGlvbnNcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFN3YWwgZnJvbSBcInN3ZWV0YWxlcnQyXCI7XHJcblxyXG5jb25zdCBwb3N0QWdlbnRlID0gKCkgPT4ge1xyXG4gIGxldCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIGNvbnN0IFtwZXJzb25hLCBzZXRQZXJzb25hXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gQ1JFQUNJT04gQUdFTlRFIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cclxuXHJcbiAgY29uc3QgW2FnZW50ZSwgc2V0QWdlbnRlXSA9IHVzZVN0YXRlKHtcclxuICAgIGFwZWxsaWRvOiBcIlwiLFxyXG4gICAgbm9tYnJlOiBcIlwiLFxyXG4gICAgY2J1OiBcIlwiLFxyXG4gICAgY3VpbDogXCJcIixcclxuICAgIHRpcG9QYWdvOiBcIlwiLFxyXG4gICAgcGVyc29uYWlkOiBcIlwiLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVGaW5kUGVyc29uYSA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGFnZW50ZS5jdWlsKTtcclxuICAgIHNldFBlcnNvbmEoW10pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9uU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIGFnZW50ZS5hcGVsbGlkbyAmJlxyXG4gICAgICBhZ2VudGUubm9tYnJlICYmXHJcbiAgICAgIGFnZW50ZS5jYnUgJiZcclxuICAgICAgYWdlbnRlLmN1aWwgJiZcclxuICAgICAgYWdlbnRlLnRpcG9QYWdvICYmXHJcbiAgICAgIGFnZW50ZS5wZXJzb25haWRcclxuICAgICkge1xyXG4gICAgICBjb25zdCBuZXdBZ2VudGUgPSB7XHJcbiAgICAgICAgLi4uYWdlbnRlLFxyXG4gICAgICB9O1xyXG4gICAgICBkaXNwYXRjaChwb3N0QWdlbnRlcyhuZXdBZ2VudGUpKTtcclxuICAgICAgYXdhaXQgU3dhbC5maXJlKHtcclxuICAgICAgICBwb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICB0aXRsZTogXCJFbCBBZ2VudGUgaGEgc2lkbyBjcmVhZG9cIixcclxuICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgICAgICAgdGltZXI6IDIwMDAsXHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgIHNldEFnZW50ZSh7XHJcbiAgICAgICAgYXBlbGxpZG86IFwiXCIsXHJcbiAgICAgICAgbm9tYnJlOiBcIlwiLFxyXG4gICAgICAgIGNidTogXCJcIixcclxuICAgICAgICBjdWlsOiBcIlwiLFxyXG4gICAgICAgIHRpcG9QYWdvOiBcIlwiLFxyXG4gICAgICAgIHBlcnNvbmFpZDogXCJcIixcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgIHBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgIGljb246IFwiZXJyb3JcIixcclxuICAgICAgICB0aXRsZTogXCJQb3IgZmF2b3IsIGNvbXBsZXRhIHRvZG9zIGxvcyBjYW1wb3NcIixcclxuICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZU9uU3VibWl0fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbnB1dEZlY2hhZGVQYWdvXCIgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlxyXG4gICAgICAgICAgQ1VJTFxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGdhcC01IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCJcclxuICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCI0MHB4XCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICBpZD1cImlucHV0Q1VJTFwiXHJcbiAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJDVUlMSGVscFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJDVUlMXCJcclxuICAgICAgICAgICAgdmFsdWU9e2FnZW50ZS5jdWlsfVxyXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNVSUxcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEFnZW50ZSh7IC4uLmFnZW50ZSwgY3VpbDogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gXCJcclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCJ2YXIoLS1tcy1tYWluLWNvbG9yKVwiLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRmluZFBlcnNvbmF9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEJ1c2NhciBQZXJzb25hXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW5wdXRBcGVsbGlkb1wiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5cclxuICAgICAgICAgIEFwZWxsaWRvXHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICBpZD1cImlucHV0QXBlbGxpZG9cIlxyXG4gICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIkFwZWxsaWRvSGVscFwiXHJcbiAgICAgICAgICBuYW1lPVwiYXBlbGxpZG9cIlxyXG4gICAgICAgICAgdmFsdWU9e2FnZW50ZS5hcGVsbGlkb31cclxuICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFwZWxsaWRvXCJcclxuICAgICAgICAgIGRpc2FibGVkPXtwZXJzb25hID09PSBudWxsfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRBZ2VudGUoeyAuLi5hZ2VudGUsIGFwZWxsaWRvOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbnB1dE5vbWJyZVwiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5cclxuICAgICAgICAgIE5vbWJyZVxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgaWQ9XCJpbnB1dE5vbWJyZVwiXHJcbiAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiTm9tYnJlSGVscFwiXHJcbiAgICAgICAgICBuYW1lPVwiTm9tYnJlXCJcclxuICAgICAgICAgIHZhbHVlPXthZ2VudGUubm9tYnJlfVxyXG4gICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTm9tYnJlXCJcclxuICAgICAgICAgIGRpc2FibGVkPXtwZXJzb25hID09PSBudWxsfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRBZ2VudGUoeyAuLi5hZ2VudGUsIG5vbWJyZTogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW5wdXREZXNjcmlwY2nDs25cIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+XHJcbiAgICAgICAgICBDQlVcclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgIGlkPVwiaW5wdXRDQlVcIlxyXG4gICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIkNCVUhlbHBcIlxyXG4gICAgICAgICAgbmFtZT1cIkNCVVwiXHJcbiAgICAgICAgICB2YWx1ZT17YWdlbnRlLmNidX1cclxuICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNCVVwiXHJcbiAgICAgICAgICBkaXNhYmxlZD17cGVyc29uYSA9PT0gbnVsbH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QWdlbnRlKHsgLi4uYWdlbnRlLCBjYnU6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlucHV0VGlwb1BhZ29cIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+XHJcbiAgICAgICAgICBUaXBvIGRlIFBhZ29cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgIGlkPVwiVGlwb1BhZ29cIlxyXG4gICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIlRpcG9QYWdvSGVscFwiXHJcbiAgICAgICAgICBuYW1lPVwiVElQT1BBR09cIlxyXG4gICAgICAgICAgdmFsdWU9e2FnZW50ZS50aXBvUGFnb31cclxuICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRpcG8gZGUgUGFnb1wiXHJcbiAgICAgICAgICBkaXNhYmxlZD17cGVyc29uYSA9PT0gbnVsbH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QWdlbnRlKHsgLi4uYWdlbnRlLCB0aXBvUGFnbzogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW5wdXRQZXJzSWRcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+XHJcbiAgICAgICAgICBQZXJzb25hSWRcclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgIGlkPVwiaW5wdXRDVUlMXCJcclxuICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJDVUlMSGVscFwiXHJcbiAgICAgICAgICBuYW1lPVwiUGVyc0lkXCJcclxuICAgICAgICAgIHZhbHVlPXthZ2VudGUucGVyc29uYWlkfVxyXG4gICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwicEVSU0lEXCJcclxuICAgICAgICAgIGRpc2FibGVkPXtwZXJzb25hID09PSBudWxsfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRBZ2VudGUoeyAuLi5hZ2VudGUsIHBlcnNvbmFpZDogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmQ6IFwidmFyKC0tbXMtbWFpbi1jb2xvcilcIiB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgQWdyZWdhciBBZ2VudGVcclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBvc3RBZ2VudGU7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQWlPdXRsaW5lUGx1cyB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xyXG5pbXBvcnQgeyB1c2VNb2R1bG9zIH0gZnJvbSBcIi4uL2hvb2tzL3VzZU1vZHVsb3NcIjtcclxuXHJcbmNvbnN0IFBvc3RIb25vcmFyaW9zID0gKHsgZGlzYWJsZWQgfSkgPT4ge1xyXG4gIGNvbnN0IHsgbW9kdWxvc1F1ZXJ5IH0gPSB1c2VNb2R1bG9zKCk7XHJcbiAgY29uc29sZS5sb2cobW9kdWxvc1F1ZXJ5LmRhdGEpO1xyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtdC01XCI+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuIHctMTAwIGdhcC0yIHJvdW5kZWQgYm9yZGVyIHAtNVwiXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZWRlZGU5XCIsXHJcbiAgICAgICAgICBib3hTaGFkb3c6IFwiMHB4IDBweCAxOHB4IC0yOHB4IHJnYmEoMCwwLDAsMC4yKVwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTMgdy01MCBcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZnVuY2lvblNlbGVjdFwiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWwgZnctYm9sZFwiPlxyXG4gICAgICAgICAgICBTZWxlY2Npb25hciBGdW5jacOzblxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgaWQ9XCJmdW5jaW9uU2VsZWN0XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1zZWxlY3RcIlxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiRGVmYXVsdCBzZWxlY3QgZXhhbXBsZVwiXHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge21vZHVsb3NRdWVyeS5pc0xvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgPG9wdGlvbiBkZWZhdWx0Q2hlY2tlZD5DYXJnYW5kby4uLjwvb3B0aW9uPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIG1vZHVsb3NRdWVyeS5kYXRhLm1hcCgobSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17bS5pZH0ga2V5PXttLmlkfT5cclxuICAgICAgICAgICAgICAgICAge20uZGVzY3JpcGNpb259XHJcbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zIHctMjBcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidmFsb3JNb2R1bG9EaXNhYmxlZFwiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWwgZnctYm9sZFwiPlxyXG4gICAgICAgICAgICBWYWxvclxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGlkPVwidmFsb3JNb2R1bG9EaXNhYmxlZFwiXHJcbiAgICAgICAgICAgIHZhbHVlPVwiNTAwXCJcclxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkRpc2FibGVkIFZhbG9yIG1vZHVsb1wiXHJcbiAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMyBkLWZsZXggZmxleC1jb2x1bW4gdy0zMFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWwgZnctYm9sZFwiIGh0bWxGb3I9XCJidXR0b25BZGRNb2R1bG9cIj5cclxuICAgICAgICAgICAgQWdyZWdhciBNb2R1bG9cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGlkPVwiYnV0dG9uQWRkTW9kdWxvXCJcclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEFpT3V0bGluZVBsdXMgLz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0SG9ub3JhcmlvcztcclxuIiwiaW1wb3J0IHsgcG9zdE9wZXJhdGl2byB9IGZyb20gXCIuLi9SZWR1eC9BY3Rpb25zXCJcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFN3YWwgZnJvbSBcInN3ZWV0YWxlcnQyXCI7XHJcblxyXG5jb25zdCBQb3N0T3BlcmF0aXZvcyA9ICgpID0+IHtcclxuXHJcbiAgbGV0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIENSRUFDSU9OIE9QRVJBVElWTyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXHJcblxyXG4gIGNvbnN0IFtvcGVyYXRpdm8sIHNldE9wZXJhdGl2b10gPSB1c2VTdGF0ZSh7XHJcbiAgICByZWZlcmVuY2lhOiBcIlwiLFxyXG4gICAgZmVjaGE6IFwiXCIsXHJcbiAgICBkZXNjcmlwY2lvbjogXCJcIixcclxuICAgIGZlY2hhcGFnbzogXCJcIixcclxuXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9uU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIG9wZXJhdGl2by5yZWZlcmVuY2lhICYmXHJcbiAgICAgIG9wZXJhdGl2by5mZWNoYSAmJlxyXG4gICAgICBvcGVyYXRpdm8uZGVzY3JpcGNpb24gXHJcbiAgICAgIC8vIG9wZXJhdGl2by5mZWNoYXBhZ29cclxuICAgICkge1xyXG4gICAgICBjb25zdCBuZXdPcGVyYXRpdm8gPSB7XHJcbiAgICAgICAgLi4ub3BlcmF0aXZvLFxyXG4gICAgICAgIGZlY2hhOiBvcGVyYXRpdm8uZmVjaGEucmVwbGFjZShcIlRcIiwgXCIgXCIpXHJcbiAgICAgIH07XHJcbiAgICAgIFxyXG4gICAgICBkaXNwYXRjaChwb3N0T3BlcmF0aXZvKG5ld09wZXJhdGl2bykpO1xyXG4gICAgICBhd2FpdCBTd2FsLmZpcmUoe1xyXG4gICAgICAgIHBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgIHRpdGxlOiBcIkVsIG9wZXJhdGl2byBoYSBzaWRvIGNyZWFkb1wiLFxyXG4gICAgICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAgICAgICB0aW1lcjogMjAwMCxcclxuICAgICAgfSk7XHJcbiAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgc2V0T3BlcmF0aXZvKHtcclxuICAgICAgICByZWZlcmVuY2lhOiBcIlwiLFxyXG4gICAgICAgIGZlY2hhOiBcIlwiLFxyXG4gICAgICAgIGRlc2NyaXBjaW9uOiBcIlwiLFxyXG4gICAgICAgIC8vIGZlY2hhcGFnbzogXCJcIlxyXG5cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgIHBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgIGljb246IFwiZXJyb3JcIixcclxuICAgICAgICB0aXRsZTogXCJQb3IgZmF2b3IsIGNvbXBsZXRhIHRvZG9zIGxvcyBjYW1wb3NcIixcclxuICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZU9uU3VibWl0fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cImlucHV0UmVmZXJuY2lhXCIgY2xhc3M9XCJmb3JtLWxhYmVsXCI+UmVmZXJlbmNpYTwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImlucHV0UmVmZXJlbmNpYVwiIGFyaWEtZGVzY3JpYmVkYnk9XCJSZWZlcmVuY2lhSGVscFwiXHJcbiAgICAgICAgIG5hbWU9XCJyZWZlcmVuY2lhXCJcclxuICAgICAgICAgIHZhbHVlPXtvcGVyYXRpdm8ucmVmZXJlbmNpYX1cclxuICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIk7Dum1lcm8gZGUgUmVmZXJlbmNpYVwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgIHNldE9wZXJhdGl2byh7IC4uLm9wZXJhdGl2bywgcmVmZXJlbmNpYTogZS50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cImlucHV0RmVjaGFcIiBjbGFzcz1cImZvcm0tbGFiZWxcIj5GZWNoYTwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRldGltZS1sb2NhbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJpbnB1dEZlY2hhXCIgYXJpYS1kZXNjcmliZWRieT1cIkZlY2hhSGVscFwiXHJcbiAgICAgICAgIG5hbWU9XCJGZWNoYVwiXHJcbiAgICAgICAgICB2YWx1ZT17b3BlcmF0aXZvLmZlY2hhfVxyXG4gICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRmVjaGEgZGVsIG9wZXJhdGl2b1wiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgIHNldE9wZXJhdGl2byh7IC4uLm9wZXJhdGl2bywgZmVjaGE6IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJpbnB1dERlc2NyaXBjacOzblwiIGNsYXNzPVwiZm9ybS1sYWJlbFwiPkRlc2NyaXBjacOzbjwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImlucHV0RGVzY3JpcGNpw7NuXCIgYXJpYS1kZXNjcmliZWRieT1cIkRlc2NyaXBjacOzbkhlbHBcIlxyXG4gICAgICAgICBuYW1lPVwiZGVzY3JpcGNpw7NuXCJcclxuICAgICAgICAgIHZhbHVlPXtvcGVyYXRpdm8uZGVzY3JpcGNpb259XHJcbiAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmlwY2nDs25cIlxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICBzZXRPcGVyYXRpdm8oeyAuLi5vcGVyYXRpdm8sIGRlc2NyaXBjaW9uOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuICAgICAgICA8bGFiZWwgZm9yPVwiaW5wdXRGZWNoYWRlUGFnb1wiIGNsYXNzPVwiZm9ybS1sYWJlbFwiPkZlY2hhIGRlIFBhZ288L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJpbnB1dEZlY2hhZGVQYWdvXCIgYXJpYS1kZXNjcmliZWRieT1cIkZlY2hhZGVQYWdvSGVscFwiXHJcbiAgICAgICAgIG5hbWU9XCJGZWNoYSBkZSBQYWdvXCJcclxuICAgICAgICAgIHZhbHVlPXtvcGVyYXRpdm8uZmVjaGFwYWdvfVxyXG4gICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRmVjaGEgZGUgUGFnb1wiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgIHNldE9wZXJhdGl2byh7IC4uLm9wZXJhdGl2bywgZmVjaGFwYWdvOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9J2J0biBidG4tcHJpbWFyeScgc3R5bGU9e3tiYWNrZ3JvdW5kOiBcInZhcigtLW1zLW1haW4tY29sb3IpXCJ9fT5BZ3JlZ2FyIE9wZXJhdGl2bzwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG4gIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RPcGVyYXRpdm9zXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IEVtcHR5VGFibGUgPSAoe21zZ30pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J3AtMyBmdy1ib2xkJz57bXNnfTwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRW1wdHlUYWJsZSIsImltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcIkB0YW5zdGFjay9yZWFjdC1xdWVyeVwiO1xyXG5pbXBvcnQgeyBNb2R1bG9zQVBJIH0gZnJvbSBcIi4uL2FwaS9Nb2R1bG9zQVBJXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IGdldE1vZHVsb3MgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBNb2R1bG9zQVBJLmdldChcIi9cIik7XHJcbiAgcmV0dXJuIGRhdGFbMF07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlTW9kdWxvcyA9ICgpID0+IHtcclxuICBjb25zdCBtb2R1bG9zUXVlcnkgPSB1c2VRdWVyeSh7XHJcbiAgICBxdWVyeUtleTogW1wibW9kdWxvc1wiXSxcclxuICAgIHF1ZXJ5Rm46ICgpID0+IGdldE1vZHVsb3MoKSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIG1vZHVsb3NRdWVyeSxcclxuICB9O1xyXG59O1xyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVBhZ2luYXRpb24gPSAocHJpbWVyQXJyZWdsbykgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoMSk7XHJcbiAgICBjb25zdCBbcGVyUGFnZSwgc2V0UGVyUGFnZV0gPSB1c2VTdGF0ZSgxMCk7XHJcbiAgICBcclxuICAgIGNvbnN0IGhhbmRsZVBhZ2VDaGFuZ2UgPSAocGFnZSkgPT4ge1xyXG4gICAgICAgIHNldEN1cnJlbnRQYWdlKHBhZ2UpO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgY29uc3QgaGFuZGxlUGVyUm93c0NoYW5nZSA9IChwZXJQYWdlLCBwYWdlKSA9PiB7XHJcbiAgICAgICAgc2V0Q3VycmVudFBhZ2UocGFnZSk7XHJcbiAgICAgICAgc2V0UGVyUGFnZShwZXJQYWdlKTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIGNvbnN0IHBhZ2luYXRpb25PcHRpb25zID0ge1xyXG4gICAgICAgIHBhZ2luYXRpb25TZXJ2ZXI6IGZhbHNlLFxyXG4gICAgICAgIHBhZ2luYXRpb25Ub3RhbFJvd3M6IHByaW1lckFycmVnbG8gPyBwcmltZXJBcnJlZ2xvLmxlbmd0aCA6IDAsXHJcbiAgICAgICAgcGFnaW5hdGlvbkRlZmF1bHRQYWdlOiBjdXJyZW50UGFnZSxcclxuICAgICAgICBwYWdpbmF0aW9uUGVyUGFnZTogcGVyUGFnZSxcclxuICAgICAgICBwYWdpbmF0aW9uUm93c1BlclBhZ2VPcHRpb25zOiBbMTAsIDI1LCA1MCwgMTAwXSxcclxuICAgICAgICBvbkNoYW5nZVBhZ2U6IGhhbmRsZVBhZ2VDaGFuZ2UsXHJcbiAgICAgICAgb25DaGFuZ2VSb3dzUGVyUGFnZTogaGFuZGxlUGVyUm93c0NoYW5nZSxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHtwYWdpbmF0aW9uT3B0aW9uc307XHJcbn0iLCIvL1NpcnZlIHBhcmEgaW5pY2lhbGl6YXIgbG9zIHRvb2x0aXBcclxuXHJcbmNvbnN0IHRvb2x0aXBUcmlnZ2VyTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgJ1tkYXRhLWJzLXRvZ2dsZT1cInRvb2x0aXBcIl0nXHJcbik7XHJcbmNvbnN0IHRvb2x0aXBMaXN0ID0gWy4uLnRvb2x0aXBUcmlnZ2VyTGlzdF0ubWFwKFxyXG4gICh0b29sdGlwVHJpZ2dlckVsKSA9PiBuZXcgYm9vdHN0cmFwLlRvb2x0aXAodG9vbHRpcFRyaWdnZXJFbClcclxuKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcclxuaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCI7XHJcbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XHJcbmltcG9ydCB7Um91dGVyUHJvdmlkZXJ9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5pbXBvcnQge1F1ZXJ5Q2xpZW50LCBRdWVyeUNsaWVudFByb3ZpZGVyfSBmcm9tIFwiQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5XCJcclxuaW1wb3J0IHtSZWFjdFF1ZXJ5RGV2dG9vbHN9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnktZGV2dG9vbHNcIlxyXG5cclxuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiLi9SZWR1eC9TdG9yZS9pbmRleFwiO1xyXG5pbXBvcnQgcm91dGVyIGZyb20gXCIuL3V0aWxzL3JvdXRlc1wiO1xyXG5cclxuY29uc3QgcXVlcnlDbGllbnQgPSBuZXcgUXVlcnlDbGllbnQoKTtcclxuXHJcbmNvbnNvbGUubG9nKHByb2Nlc3MuZW52KTtcclxuXHJcblJlYWN0RE9NLmNyZWF0ZVJvb3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpKS5yZW5kZXIoXHJcbiAgPFJlYWN0LlN0cmljdE1vZGU+XHJcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgY2xpZW50PXtxdWVyeUNsaWVudH0+XHJcbiAgICAgICAgPFJvdXRlclByb3ZpZGVyIHJvdXRlcj17cm91dGVyfSAvPlxyXG4gICAgICAgICAgPFJlYWN0UXVlcnlEZXZ0b29scyBpbml0aWFsSXNPcGVuPXtmYWxzZX0gLz5cclxuICAgICAgICA8L1F1ZXJ5Q2xpZW50UHJvdmlkZXI+XHJcbiAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICA8L1JlYWN0LlN0cmljdE1vZGU+LFxyXG4pO1xyXG4iLCJpbXBvcnQgIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHtjcmVhdGVCcm93c2VyUm91dGVyLCBPdXRsZXR9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5pbXBvcnQgeyBIb21lIH0gZnJvbSBcIi4uL1BhZ2VzL0hvbWVcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0XCI7XHJcbmltcG9ydCBPcGVyYXRpdm9zIGZyb20gXCIuLi9QYWdlcy9PcGVyYXRpdm9zXCI7XHJcbmltcG9ydCBDcmVhckFnZW50ZSBmcm9tIFwiLi4vUGFnZXMvQ3JlYXItQWdlbnRlXCI7XHJcbmltcG9ydCB7IENyZWFyT3BlcmF0aXZvIH0gZnJvbSBcIi4uL1BhZ2VzL0NyZWFyLU9wZXJhdGl2b1wiO1xyXG5pbXBvcnQgeyBDcmVhckhvbm9yYXJpb3MgfSBmcm9tIFwiLi4vUGFnZXMvQ3JlYXItSG9ub3Jhcmlvc1wiO1xyXG5pbXBvcnQgQWdlbnRlcyBmcm9tIFwiLi4vUGFnZXMvQWdlbnRlc1wiO1xyXG5pbXBvcnQgTGF5b3V0SG9ub3JhcmlvcyBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0SG9ub3Jhcmlvc1wiO1xyXG5pbXBvcnQgVGFibGFIb25vcmFyaW9zIGZyb20gXCIuLi9QYWdlcy9UYWJsYUhvbm9yYXJpb3NcIjtcclxuaW1wb3J0IEFzaWduYXJBZ2VudGUgZnJvbSBcIi4uL1BhZ2VzL0FzaWduYXJBZ2VudGVcIjtcclxuaW1wb3J0IE1vZHVsb3NWaXN0YSBmcm9tIFwiLi4vUGFnZXMvTW9kdWxvc1Zpc3RhXCI7XHJcblxyXG5jb25zdCByb3V0ZXIgPSBjcmVhdGVCcm93c2VyUm91dGVyKFtcclxuICB7XHJcbiAgICBwYXRoOiBcIi9cIixcclxuICAgIGVsZW1lbnQ6IDxMYXlvdXQgLz4sXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogXCIvXCIsXHJcbiAgICAgICAgZWxlbWVudDogPEhvbWUgLz4sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiBcIi9hZ2VudGVzXCIsXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgcGF0aDogXCIvYWdlbnRlcy92ZXItYWdlbnRlc1wiLFxyXG4gICAgICAgICAgICBlbGVtZW50OiA8QWdlbnRlcyAvPixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhdGg6IFwiL2FnZW50ZXMvY3JlYXItYWdlbnRlXCIsXHJcbiAgICAgICAgICAgIGVsZW1lbnQ6IDxDcmVhckFnZW50ZSAvPixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6IFwib3BlcmF0aXZvc1wiLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhdGg6IFwiL29wZXJhdGl2b3MvdmVyLW9wZXJhdGl2b3NcIixcclxuICAgICAgICAgICAgZWxlbWVudDogPE9wZXJhdGl2b3MgLz4sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeyBwYXRoOiBcIi9vcGVyYXRpdm9zL251ZXZvLW9wZXJhdGl2b1wiLCBlbGVtZW50OiA8Q3JlYXJPcGVyYXRpdm8gLz4gfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogXCJob25vcmFyaW9zXCIsXHJcbiAgICAgICAgZWxlbWVudDogPExheW91dEhvbm9yYXJpb3MgLz4sXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgcGF0aDogXCIvaG9ub3Jhcmlvcy92YXJpYWJsZXNcIixcclxuICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpbmRleDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IDxUYWJsYUhvbm9yYXJpb3MgLz4sXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwYXRoOiBcIi9ob25vcmFyaW9zL3ZhcmlhYmxlcy9jcmVhci1ob25vcmFyaW9cIixcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IDxDcmVhckhvbm9yYXJpb3MgLz4sXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudDogPEFzaWduYXJBZ2VudGUgLz4sXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBcIi9ob25vcmFyaW9zL3ZhcmlhYmxlcy9jcmVhci1ob25vcmFyaW8vOmlkL2FncmVnYXJcIixcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5BZ3JlZ2FyIGhvbm9yYXJpbyBhbCBBZ2VudGU8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxhSG9ub3JhcmlvcyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6IFwiL21vZHVsb3NcIixcclxuICAgICAgICBlbGVtZW50OiA8TW9kdWxvc1Zpc3RhIC8+XHJcbiAgICAgIH1cclxuICAgIF0sXHJcbiAgfSxcclxuXSwge1xyXG4gIGJhc2VuYW1lOiBcIi9zeW1mb255LXJlYWN0LXdwL3B1YmxpYy9pbmRleC5waHAvXCJcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsInZhciBtYXAgPSB7XG5cdFwiLi9hZlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FmLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hZi5qc1wiLFxuXHRcIi4vYXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9hci1kelwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWR6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1kei5qc1wiLFxuXHRcIi4vYXIta3dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1rdy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIta3cuanNcIixcblx0XCIuL2FyLWx5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1seS5qc1wiLFxuXHRcIi4vYXItbHkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1tYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLW1hLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1tYS5qc1wiLFxuXHRcIi4vYXItc2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci1zYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItc2EuanNcIixcblx0XCIuL2FyLXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci10bi5qc1wiLFxuXHRcIi4vYXItdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXRuLmpzXCIsXG5cdFwiLi9hci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIuanNcIixcblx0XCIuL2F6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hei5qc1wiLFxuXHRcIi4vYXouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2F6LmpzXCIsXG5cdFwiLi9iZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZS5qc1wiLFxuXHRcIi4vYmdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9iZy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmcuanNcIixcblx0XCIuL2JtXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibS5qc1wiLFxuXHRcIi4vYm0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JtLmpzXCIsXG5cdFwiLi9iblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JuLWJkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibi1iZC5qc1wiLFxuXHRcIi4vYm4tYmQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLWJkLmpzXCIsXG5cdFwiLi9ibi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iby5qc1wiLFxuXHRcIi4vYm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnIuanNcIixcblx0XCIuL2JyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ici5qc1wiLFxuXHRcIi4vYnNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9icy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2NhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jYS5qc1wiLFxuXHRcIi4vY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3MuanNcIixcblx0XCIuL2NzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jcy5qc1wiLFxuXHRcIi4vY3ZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jeS5qc1wiLFxuXHRcIi4vY3kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9kYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGEuanNcIixcblx0XCIuL2RhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kYS5qc1wiLFxuXHRcIi4vZGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kZS1hdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtYXQuanNcIixcblx0XCIuL2RlLWF0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1hdC5qc1wiLFxuXHRcIi4vZGUtY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS5qc1wiLFxuXHRcIi4vZHZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9kdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2VsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbC5qc1wiLFxuXHRcIi4vZWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbi1hdVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWF1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1hdS5qc1wiLFxuXHRcIi4vZW4tY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWdiXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1nYi5qc1wiLFxuXHRcIi4vZW4tZ2IuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1pZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWllLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pZS5qc1wiLFxuXHRcIi4vZW4taWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1pbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLWluXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbi5qc1wiLFxuXHRcIi4vZW4taW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWluLmpzXCIsXG5cdFwiLi9lbi1uelwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VuLW56LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1uei5qc1wiLFxuXHRcIi4vZW4tc2dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLXNnLmpzXCIsXG5cdFwiLi9lbi1zZy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tc2cuanNcIixcblx0XCIuL2VvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lby5qc1wiLFxuXHRcIi4vZW8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2VzLWRvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1kby5qc1wiLFxuXHRcIi4vZXMtZG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy1teFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtbXguanNcIixcblx0XCIuL2VzLW14LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1teC5qc1wiLFxuXHRcIi4vZXMtdXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy11cy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtdXMuanNcIixcblx0XCIuL2VzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy5qc1wiLFxuXHRcIi4vZXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXQuanNcIixcblx0XCIuL2V1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldS5qc1wiLFxuXHRcIi4vZXUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9mYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmEuanNcIixcblx0XCIuL2ZhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mYS5qc1wiLFxuXHRcIi4vZmlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9maS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmkuanNcIixcblx0XCIuL2ZpbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmlsLmpzXCIsXG5cdFwiLi9maWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpbC5qc1wiLFxuXHRcIi4vZm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZvLmpzXCIsXG5cdFwiLi9mby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci5qc1wiLFxuXHRcIi4vZnItY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNhLmpzXCIsXG5cdFwiLi9mci1jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jaC5qc1wiLFxuXHRcIi4vZnItY2guanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnIuanNcIixcblx0XCIuL2Z5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9meS5qc1wiLFxuXHRcIi4vZnkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9nYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2EuanNcIixcblx0XCIuL2dhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nYS5qc1wiLFxuXHRcIi4vZ2RcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dkLmpzXCIsXG5cdFwiLi9nZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2QuanNcIixcblx0XCIuL2dsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nbC5qc1wiLFxuXHRcIi4vZ2wuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nb20tZGV2YVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWRldmEuanNcIixcblx0XCIuL2dvbS1kZXZhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tZGV2YS5qc1wiLFxuXHRcIi4vZ29tLWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9nb20tbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWxhdG4uanNcIixcblx0XCIuL2d1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ndS5qc1wiLFxuXHRcIi4vZ3UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2d1LmpzXCIsXG5cdFwiLi9oZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGUuanNcIixcblx0XCIuL2hlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oZS5qc1wiLFxuXHRcIi4vaGlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oaS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGkuanNcIixcblx0XCIuL2hyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oci5qc1wiLFxuXHRcIi4vaHIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hyLmpzXCIsXG5cdFwiLi9odVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHUuanNcIixcblx0XCIuL2h1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9odS5qc1wiLFxuXHRcIi4vaHktYW1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9oeS1hbS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHktYW0uanNcIixcblx0XCIuL2lkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pZC5qc1wiLFxuXHRcIi4vaWQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lkLmpzXCIsXG5cdFwiLi9pc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXMuanNcIixcblx0XCIuL2lzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pcy5qc1wiLFxuXHRcIi4vaXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9pdC1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQtY2guanNcIixcblx0XCIuL2l0LWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC1jaC5qc1wiLFxuXHRcIi4vaXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9qYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvamEuanNcIixcblx0XCIuL2phLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qYS5qc1wiLFxuXHRcIi4vanZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9qdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvanYuanNcIixcblx0XCIuL2thXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rYS5qc1wiLFxuXHRcIi4va2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9ra1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2suanNcIixcblx0XCIuL2trLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ray5qc1wiLFxuXHRcIi4va21cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rbS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva20uanNcIixcblx0XCIuL2tuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbi5qc1wiLFxuXHRcIi4va24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva28uanNcIixcblx0XCIuL2tvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rby5qc1wiLFxuXHRcIi4va3VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t1LmpzXCIsXG5cdFwiLi9rdS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3UuanNcIixcblx0XCIuL2t5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9reS5qc1wiLFxuXHRcIi4va3kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9sYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbGIuanNcIixcblx0XCIuL2xiLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sYi5qc1wiLFxuXHRcIi4vbG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xvLmpzXCIsXG5cdFwiLi9sby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbG8uanNcIixcblx0XCIuL2x0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdC5qc1wiLFxuXHRcIi4vbHQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHYuanNcIixcblx0XCIuL2x2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdi5qc1wiLFxuXHRcIi4vbWVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21lLmpzXCIsXG5cdFwiLi9tZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWUuanNcIixcblx0XCIuL21pXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9taS5qc1wiLFxuXHRcIi4vbWkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9ta1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWsuanNcIixcblx0XCIuL21rLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tay5qc1wiLFxuXHRcIi4vbWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzXCIsXG5cdFwiLi9tbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWwuanNcIixcblx0XCIuL21uXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbi5qc1wiLFxuXHRcIi4vbW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXIuanNcIixcblx0XCIuL21yLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tci5qc1wiLFxuXHRcIi4vbXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tcy1teVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMtbXkuanNcIixcblx0XCIuL21zLW15LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy1teS5qc1wiLFxuXHRcIi4vbXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXQuanNcIixcblx0XCIuL210LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tdC5qc1wiLFxuXHRcIi4vbXlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9teS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXkuanNcIixcblx0XCIuL25iXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uYi5qc1wiLFxuXHRcIi4vbmIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmUuanNcIixcblx0XCIuL25lLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uZS5qc1wiLFxuXHRcIi4vbmxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ubC1iZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwtYmUuanNcIixcblx0XCIuL25sLWJlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC1iZS5qc1wiLFxuXHRcIi4vbmwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ublwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbm4uanNcIixcblx0XCIuL25uLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubi5qc1wiLFxuXHRcIi4vb2MtbG5jXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9vYy1sbmMuanNcIixcblx0XCIuL29jLWxuYy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvb2MtbG5jLmpzXCIsXG5cdFwiLi9wYS1pblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGEtaW4uanNcIixcblx0XCIuL3BhLWluLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wYS1pbi5qc1wiLFxuXHRcIi4vcGxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BsLmpzXCIsXG5cdFwiLi9wbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3B0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC5qc1wiLFxuXHRcIi4vcHQtYnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LWJyLmpzXCIsXG5cdFwiLi9wdC1ici5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC5qc1wiLFxuXHRcIi4vcm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3JvLmpzXCIsXG5cdFwiLi9yby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3J1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ydS5qc1wiLFxuXHRcIi4vcnUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9zZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2QuanNcIixcblx0XCIuL3NkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZC5qc1wiLFxuXHRcIi4vc2VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NlLmpzXCIsXG5cdFwiLi9zZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zaS5qc1wiLFxuXHRcIi4vc2kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9za1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2suanNcIixcblx0XCIuL3NrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zay5qc1wiLFxuXHRcIi4vc2xcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NsLmpzXCIsXG5cdFwiLi9zbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NxXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcS5qc1wiLFxuXHRcIi4vc3EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3IuanNcIixcblx0XCIuL3NyLWN5cmxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLWN5cmwuanNcIixcblx0XCIuL3NyLWN5cmwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLWN5cmwuanNcIixcblx0XCIuL3NyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci5qc1wiLFxuXHRcIi4vc3NcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NzLmpzXCIsXG5cdFwiLi9zcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3N2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdi5qc1wiLFxuXHRcIi4vc3YuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N2LmpzXCIsXG5cdFwiLi9zd1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3cuanNcIixcblx0XCIuL3N3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vdGFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RhLmpzXCIsXG5cdFwiLi90YS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZS5qc1wiLFxuXHRcIi4vdGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RlLmpzXCIsXG5cdFwiLi90ZXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RldC5qc1wiLFxuXHRcIi4vdGV0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZXQuanNcIixcblx0XCIuL3RnXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90Zy5qc1wiLFxuXHRcIi4vdGcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90aFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGguanNcIixcblx0XCIuL3RoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90aC5qc1wiLFxuXHRcIi4vdGtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RrLmpzXCIsXG5cdFwiLi90ay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGsuanNcIixcblx0XCIuL3RsLXBoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bC1waC5qc1wiLFxuXHRcIi4vdGwtcGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdGxoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bGguanNcIixcblx0XCIuL3RyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ci5qc1wiLFxuXHRcIi4vdHIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90emxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bC5qc1wiLFxuXHRcIi4vdHpsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90emwuanNcIixcblx0XCIuL3R6bVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLmpzXCIsXG5cdFwiLi90em0tbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLWxhdG4uanNcIixcblx0XCIuL3R6bS1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0uanNcIixcblx0XCIuL3VnLWNuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91Zy1jbi5qc1wiLFxuXHRcIi4vdWctY24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91a1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ay5qc1wiLFxuXHRcIi4vdXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VyLmpzXCIsXG5cdFwiLi91ci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3V6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei5qc1wiLFxuXHRcIi4vdXotbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXotbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LmpzXCIsXG5cdFwiLi92aVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdmkuanNcIixcblx0XCIuL3ZpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4veC1wc2V1ZG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3gtcHNldWRvLmpzXCIsXG5cdFwiLi94LXBzZXVkby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3lvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4veW8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3lvLmpzXCIsXG5cdFwiLi96aC1jblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtY24uanNcIixcblx0XCIuL3poLWNuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtaGtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWhrLmpzXCIsXG5cdFwiLi96aC1oay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLW1vXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1tby5qc1wiLFxuXHRcIi4vemgtbW8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLW1vLmpzXCIsXG5cdFwiLi96aC10d1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtdHcuanNcIixcblx0XCIuL3poLXR3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7Il0sIm5hbWVzIjpbIlJlYWN0IiwiR2V0QWdlbnRlcyIsIkFnZW50ZXMiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwidXNlT3V0bGV0Q29udGV4dCIsIkFzaWduYXJBZ2VudGUiLCJfdXNlT3V0bGV0Q29udGV4dCIsIl91c2VPdXRsZXRDb250ZXh0MiIsIl9zbGljZWRUb0FycmF5Iiwicm93Iiwic2V0Um93IiwiaGFuZGxlUm93Q2hhbmdlIiwiZSIsInNlbGVjdGVkUm93cyIsInNlbGVjdGFibGVSb3dzIiwic2VsZWN0YWJsZVJvd3NOb1NlbGVjdEFsbCIsInNlbGVjdGFibGVSb3dzU2luZ2xlIiwic2VsZWN0YWJsZVJvd3NIaWdobGlnaHQiLCJvblNlbGVjdGVkUm93c0NoYW5nZSIsIlBvc3RBZ2VudGVzIiwiQ3JlYXJBZ2VudGUiLCJ1c2VTdGF0ZSIsIlBvc3RIb25vcmFyaW9zIiwiT3V0bGV0IiwiVGFibGFIb25vcmFyaW9zIiwiQ3JlYXJIb25vcmFyaW9zIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsImNvbnRleHQiLCJkaXNhYmxlZCIsIlBvc3RPcGVyYXRpdm9zIiwiQ3JlYXJPcGVyYXRpdm8iLCJIb21lIiwiTW9kdWxvcyIsIk1vZHVsb3NWaXN0YSIsIkdldE9wZXJhdGl2b3MiLCJPcGVyYXRpdm9zIiwidXNlRWZmZWN0IiwiQnNGaWxsUGVyc29uRmlsbCIsIkFpT3V0bGluZVBsdXMiLCJ1c2VQYWdpbmF0aW9uIiwiRW1wdHlUYWJsZSIsIkRhdGFUYWJsZSIsIm1vbWVudCIsInVzZU5hdmlnYXRlIiwiYXJyYXlBZ2VudGVzIiwiaWQiLCJub21icmUiLCJjdWlsIiwiY2J1IiwiYXJyYXlPYmpldG9zIiwicmVmZXJlbmNpYSIsImRlc2NyaXBjaW9uIiwiZmVjaGEiLCJhZ2VudGVzIiwiRXhwYW5kZWRDb21wb25lbnQiLCJfcmVmIiwiZGF0YSIsIm5hdmlnYXRlIiwiaGFuZGxlQWRkIiwicmVwbGFjZSIsImhhbmRsZUNyZWF0ZSIsInR5cGUiLCJvbkNsaWNrIiwic2NvcGUiLCJtYXAiLCJhIiwiaSIsImtleSIsImNvbHVtbnMiLCJuYW1lIiwic2VsZWN0b3IiLCJzb3J0YWJsZSIsImZvcm1hdCIsIl9yZWYyIiwicHJvcHMiLCJPYmplY3QiLCJhc3NpZ24iLCJfb2JqZWN0RGVzdHJ1Y3R1cmluZ0VtcHR5Iiwic2VhcmNoIiwic2V0U2VhcmNoIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJob25vcmFyaW8iLCJzZXRIb25vcmFyaW8iLCJfdXNlUGFnaW5hdGlvbiIsInBhZ2luYXRpb25PcHRpb25zIiwiZmlsdGVyQnlSZWZlcmVuY2lhIiwiaGFuZGxlT25DaGFuZ2UiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsInZhbHVlIiwiYXJyYXlDYWNoZSIsImZpbHRlciIsIm9wZXIiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwic3R5bGUiLCJtYXhXaWR0aCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJhdXRvQ29tcGxldGUiLCJfZXh0ZW5kcyIsInBhZ2luYXRpb24iLCJzdHJpcGVkIiwicGFnaW5hdGlvbkNvbXBvbmVudE9wdGlvbnMiLCJub0RhdGFDb21wb25lbnQiLCJtc2ciLCJleHBhbmRhYmxlUm93cyIsImV4cGFuZGFibGVSb3dzQ29tcG9uZW50IiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsImV4cG9ydHMiLCJPcCIsInByb3RvdHlwZSIsImhhc093biIsImhhc093blByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJkZXNjIiwiJFN5bWJvbCIsIlN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiaXRlcmF0b3IiLCJhc3luY0l0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvciIsInRvU3RyaW5nVGFnU3ltYm9sIiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJlcnIiLCJ3cmFwIiwiaW5uZXJGbiIsIm91dGVyRm4iLCJzZWxmIiwidHJ5TG9jc0xpc3QiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsImFyZyIsImNhbGwiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwibWV0aG9kIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJfdHlwZW9mIiwiX19hd2FpdCIsInRoZW4iLCJ1bndyYXBwZWQiLCJlcnJvciIsInByZXZpb3VzUHJvbWlzZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwic3RhdGUiLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiZG9uZSIsIm1ldGhvZE5hbWUiLCJ1bmRlZmluZWQiLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwiY29uc3RydWN0b3IiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsIml0ZXIiLCJrZXlzIiwidmFsIiwib2JqZWN0IiwicmV2ZXJzZSIsInBvcCIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJfbmV4dCIsIl90aHJvdyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiYXhpb3MiLCJBZ2VudGVzQVBJIiwiT3BlcmF0aXZvc0FQSSIsIk1vZHVsb3NBUEkiLCJDYXRlZ29yaWFzQVBJIiwiVGlwb0FQSSIsIkdFVF9BR0VOVEVTIiwiR0VUX09QRVJBVElWT1MiLCJQT1NUX09QRVJBVElWTyIsIlBPU1RfQUdFTlRFUyIsIkdFVF9NT0RVTE9TIiwiR0VUX0NBVEVHT1JJQVMiLCJHRVRfVElQT01PRFVMTyIsIlBPU1RfTU9EVUxPIiwiZ2V0QWdlbnRlcyIsIl9jYWxsZWUiLCJkaXNwYXRjaCIsInJlc3BvbnNlIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImdldCIsInBheWxvYWQiLCJfeCIsImdldE9wZXJhdGl2b3MiLCJfY2FsbGVlMiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsIl94MiIsImdldE1vZHVsb3MiLCJfcmVmMyIsIl9jYWxsZWUzIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiX3gzIiwiZ2V0Q2F0ZWdvcmlhcyIsIl9yZWY0IiwiX2NhbGxlZTQiLCJfY2FsbGVlNCQiLCJfY29udGV4dDQiLCJfeDQiLCJnZXRUaXBvTW9kdWxvIiwiX3JlZjUiLCJfY2FsbGVlNSIsIl9jYWxsZWU1JCIsIl9jb250ZXh0NSIsIl94NSIsInBvc3RPcGVyYXRpdm8iLCJfcmVmNiIsImZlY2hhcGFnbyIsInBvc3QiLCJtb2RlIiwiaGVhZGVycyIsImFsbG93X21ldGhvZHMiLCJwb3N0QWdlbnRlcyIsIl9yZWY3IiwiYXBlbGxpZG8iLCJ0aXBvUGFnbyIsInBlcnNvbmFpZCIsInBvc3RNb2R1bG8iLCJfcmVmOCIsInRpcG8iLCJjYXRlZ3ByaWEiLCJ2YWxvciIsImZlY2hhRGVzZGUiLCJjcmVhdGVTdG9yZSIsImFwcGx5TWlkZGxld2FyZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJ0aHVuayIsInJvb3RSZWR1Y2VyIiwic3RvcmUiLCJJbml0aWFsU3RhdGUiLCJvcGVyYXRpdm9zIiwibW9kdWxvcyIsImNhdGVnb3JpYXMiLCJUaXBvTW9kdWxvIiwiYWN0aW9uIiwiX29iamVjdFNwcmVhZCIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSIsImJhc2VVUkwiLCJwcm9jZXNzIiwiZW52IiwiQVBJX1VSTCIsIndpdGhDcmVkZW50aWFscyIsIm93bktleXMiLCJlbnVtZXJhYmxlT25seSIsImdldE93blByb3BlcnR5U3ltYm9scyIsInN5bWJvbHMiLCJzeW0iLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJzb3VyY2UiLCJfZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsIl90b1Byb3BlcnR5S2V5IiwiX3RvUHJpbWl0aXZlIiwiU3RyaW5nIiwiaW5wdXQiLCJoaW50IiwicHJpbSIsInRvUHJpbWl0aXZlIiwicmVzIiwiTnVtYmVyIiwiYXJyIiwiX2FycmF5V2l0aEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheUxpbWl0IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiX25vbkl0ZXJhYmxlUmVzdCIsIm8iLCJtaW5MZW4iLCJfYXJyYXlMaWtlVG9BcnJheSIsIm4iLCJ0b1N0cmluZyIsIkFycmF5IiwiZnJvbSIsInRlc3QiLCJsZW4iLCJhcnIyIiwiX2kiLCJfcyIsIl9lIiwiX3IiLCJfYXJyIiwiX24iLCJfZCIsImlzQXJyYXkiLCJTd2FsIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsIkNyZWFyTW9kdWxvIiwidGlwb01vZHVsbyIsInByaW1lckFycmVnbG8iLCJkZXN0cnVjdHVyaW5nIiwiVGlwbyIsIkNhdGVnb3JpYSIsIlZhbG9yIiwiRGVzY3JpcGNpb24iLCJGZWNoYURlc2RlIiwibW9kdWxvIiwic2V0TW9kdWxvIiwiaGFuZGxlT25TdWJtaXQiLCJuZXdNb2R1bG8iLCJjb25zb2xlIiwibG9nIiwiZmlyZSIsInBvc2l0aW9uIiwiaWNvbiIsInRpdGxlIiwic2hvd0NvbmZpcm1CdXR0b24iLCJ0aW1lciIsImZvcm1hdERhdGVUaW1lIiwiZGF0ZVRpbWUiLCJkYXRlIiwiRGF0ZSIsInllYXIiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwicGFkWmVybyIsImdldE1vbnRoIiwiZGF5IiwiZ2V0RGF0ZSIsImhvdXJzIiwiZ2V0SG91cnMiLCJtaW51dGVzIiwiZ2V0TWludXRlcyIsIm51bWJlciIsInBhZFN0YXJ0IiwicGFkZGluZyIsImJveFNoYWRvdyIsImJvcmRlciIsIm9uU3VibWl0IiwiaHRtbEZvciIsIm1vZCIsImFnZW50ZSIsInNldEFnZW50ZSIsImZpbHRlckJ5Q3VpbCIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2Iiwic2hvd1NwaW5uZXIiLCJzZXRTaG93U3Bpbm5lciIsInNldFRpbWVvdXQiLCJyb2xlIiwiTW9tZW50Iiwib3BlcmF0aXZvIiwic2V0T3BlcmF0aXZvIiwiZmlsdGVyQnlSZWYiLCJHaUhhbWJ1cmdlck1lbnUiLCJCaVVzZXJDaXJjbGUiLCJTaWRlQmFyIiwiSGVhZGVyIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwiaGFuZGxlT3V0c2lkZUNsaWNrIiwiZXZlbnQiLCJjbG9zZXN0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNpemUiLCJ4bWxucyIsIndpZHRoIiwiaGVpZ2h0IiwiZmlsbCIsInZpZXdCb3giLCJkIiwiZmlsbFJ1bGUiLCJocmVmIiwiTGF5b3V0IiwiRnJhZ21lbnQiLCJiYWNrZ3JvdW5kIiwiTGF5b3V0SG9ub3JhcmlvcyIsIkxpbmsiLCJBaUZpbGxIb21lIiwiRmFBbWJ1bGFuY2UiLCJTaVdlYm1vbmV5IiwiVGJOdXJzZSIsInpJbmRleCIsIm1hcmdpbkJvdHRvbSIsImNvbG9yIiwibGV0dGVyU3BhY2luZyIsImZvbnRXZWlnaHQiLCJ0byIsIkNnQ2xvc2VPIiwiZmlsdGVyQnlEZXNjcmlwY2lvbiIsIm1vc3RyYXJGb3JtdWxhcmlvIiwic2V0TW9zdHJhckZvcm11bGFyaW8iLCJoYW5kbGVNb3N0cmFyRm9ybXVsYXJpbyIsImhhbmRsZUNlcnJhckZvcm11bGFyaW8iLCJmZWNoYV9oYXN0YSIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwidG9wIiwibGVmdCIsInRyYW5zZm9ybSIsImJhY2tncm91bmRDb2xvciIsImZvbnRTaXplIiwicG9zdEFnZW50ZSIsInBlcnNvbmEiLCJzZXRQZXJzb25hIiwiaGFuZGxlRmluZFBlcnNvbmEiLCJuZXdBZ2VudGUiLCJ1c2VNb2R1bG9zIiwiX3VzZU1vZHVsb3MiLCJtb2R1bG9zUXVlcnkiLCJoYW5kbGVDaGFuZ2UiLCJpc0xvYWRpbmciLCJkZWZhdWx0Q2hlY2tlZCIsIm0iLCJuZXdPcGVyYXRpdm8iLCJ1c2VRdWVyeSIsIl95aWVsZCRNb2R1bG9zQVBJJGdldCIsInF1ZXJ5S2V5IiwicXVlcnlGbiIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJwZXJQYWdlIiwic2V0UGVyUGFnZSIsImhhbmRsZVBhZ2VDaGFuZ2UiLCJwYWdlIiwiaGFuZGxlUGVyUm93c0NoYW5nZSIsInBhZ2luYXRpb25TZXJ2ZXIiLCJwYWdpbmF0aW9uVG90YWxSb3dzIiwicGFnaW5hdGlvbkRlZmF1bHRQYWdlIiwicGFnaW5hdGlvblBlclBhZ2UiLCJwYWdpbmF0aW9uUm93c1BlclBhZ2VPcHRpb25zIiwib25DaGFuZ2VQYWdlIiwib25DaGFuZ2VSb3dzUGVyUGFnZSIsInRvb2x0aXBUcmlnZ2VyTGlzdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0b29sdGlwTGlzdCIsInRvb2x0aXBUcmlnZ2VyRWwiLCJib290c3RyYXAiLCJUb29sdGlwIiwiUmVhY3RET00iLCJSb3V0ZXJQcm92aWRlciIsIlByb3ZpZGVyIiwiUXVlcnlDbGllbnQiLCJRdWVyeUNsaWVudFByb3ZpZGVyIiwiUmVhY3RRdWVyeURldnRvb2xzIiwicm91dGVyIiwicXVlcnlDbGllbnQiLCJjcmVhdGVSb290IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiLCJTdHJpY3RNb2RlIiwiY2xpZW50IiwiaW5pdGlhbElzT3BlbiIsImNyZWF0ZUJyb3dzZXJSb3V0ZXIiLCJwYXRoIiwiZWxlbWVudCIsImNoaWxkcmVuIiwiaW5kZXgiLCJiYXNlbmFtZSJdLCJzb3VyY2VSb290IjoiIn0=