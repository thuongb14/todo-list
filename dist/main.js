/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n    margin: 0;\\n    box-sizing: border-box;\\n    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif\\n}\\nheader {\\n    display: flex;\\n    height: 70px;\\n    justify-content: space-between;\\n    align-items: center;\\n    padding: 0 30px 0 30px;\\n    background-color: rgb(236, 159, 172);\\n}\\n.add-task-button {\\n    background-color: transparent;\\n    border: none;\\n    padding: 10px 12px 10px 12px;\\n}\\n\\n.add-task-button:hover {\\n    background-color: white;\\n    border: none;\\n    border-radius: 10px;\\n}\\n\\nmain {\\n    display: grid;\\n    grid-template-columns: 1fr 4fr;\\n}\\n\\nsidebar {\\n    background-color: #eee;\\n    height: 100vh;\\n    display: flex;\\n    flex-flow: column nowrap;\\n    align-items: flex-start;\\n    padding: 30px 50px 30px 50px;\\n    gap: 1rem;\\n}\\n\\n.inbox, .today, .add-project-button, .button-project {\\n    display: flex;\\n    flex-flow: row nowrap;\\n    align-items: center;\\n    gap: 10px;\\n    width: 100%;\\n    border: none;\\n    padding: 8px;\\n    font-size: 18px;\\n    background-color: transparent;\\n    margin-bottom: 5px;\\n}\\n\\n.project-list {\\n    width: 100%\\n}\\n\\nsidebar > button:hover{\\n    background-color: white;\\n    border-radius: 5px;\\n}\\n\\n.add-project-button:hover,\\n.button-project:hover {\\n    background-color: white;\\n    border-radius: 5px;\\n}\\n\\n#content {\\n    margin: 0 auto;\\n    width: 70%;\\n    padding: 30px 50px 30px 50px;\\n}\\n\\n#heading {\\n    font-size: 40px;\\n    font-weight: bold;\\n    padding: 0;\\n}\\n\\n.project-submit-btn, .project-cancel-btn {\\n    width: 70px;\\n    margin: 5px;\\n    border: none;\\n    border-radius: 10px;\\n    color: white;\\n    cursor: pointer;\\n    padding: 5px;\\n    font-weight: bold;\\n}\\n\\n.project-submit-btn {\\n    background-color: green;\\n}\\n\\n.project-cancel-btn {\\n    background-color: red;\\n}\\n\\ninput {\\n    border: none;\\n    height: 30px;\\n    border-radius: 5px;\\n    padding: 2px 5px 2px 5px;\\n}\\n\\n#project-form {\\n    display: flex;\\n    width: 100%;\\n    flex-flow: column nowrap;\\n    gap: 8px;\\n}\\n\\n.hidden { \\n    top: 0;\\n    left: 0;\\n    pointer-events: none;\\n    position: absolute;\\n    opacity: 0;\\n}\\n\\n#content {\\n    display: flex;\\n    flex-flow: column nowrap;\\n    gap: 2rem;\\n}\\n\\n#task-list li {\\n    background-color: rgba(255, 240, 240, 0.486);\\n    padding: 1rem;\\n    border-radius: 1rem;\\n    font-size: 1rem;\\n    list-style-type: circle;\\n    margin-bottom: 1rem;\\n\\n}\\n\\n#task-list li:hover {\\n    background-color: rgb(236, 199, 205);\\n}\\n\\n.modal {\\n    position: fixed;\\n    left: 0;\\n    top: 0;\\n    width: 100%;\\n    height: 100%;\\n    background-color: rgba(255, 255, 255, 0.8);\\n    transition: .2s;\\n    margin: 0 auto;\\n    z-index: 2;\\n}\\n\\n.add-task-modal {\\n    position: absolute;\\n    top: 50%;\\n    left: 50%;\\n    transform: translate(-50%, -50%);\\n    width: 400px;\\n    height: fit-content;\\n    display: flex;\\n    flex-flow: column nowrap;\\n    border-radius: 1rem;\\n    box-shadow:rgb(46 46 46 / 20%) 0px 2px 8px 0px;\\n    background-color: white;\\n}\\n\\n.modal-header {\\n    display: flex;\\n    flex-flow: row nowrap;\\n    justify-content: space-between;\\n    align-items: center;\\n    background: rgb(236, 159, 172);\\n    padding: 5px 1rem 5px 1rem;\\n    border-top-left-radius: 1rem;\\n    border-top-right-radius: 1rem;\\n    color: white;\\n}\\n\\n.model-content {\\n    display: flex;\\n    flex-flow: column nowrap;\\n    padding: 1rem;\\n}\\n\\n.add-task-form {\\n    display: flex;\\n    flex-flow: column nowrap;\\n    gap: 1rem;\\n}\\n\\nlabel {\\n    display: flex;\\n    flex-flow: column nowrap;\\n    gap: 5px;\\n}\\n\\n.add-task-form #task-name, #task-date, #task-description{\\n    border: 1px solid grey;\\n}\\n\\n.add-task-form #task-description {\\n    border-radius: 5px;\\n}\\n\\n.add-task-form label #task-priority, \\n.add-task-form label #task-folder {\\n    height: 2rem;\\n}\\n\\n.add-task-form input[type=submit] {\\n    background-color: green;\\n    height: 3rem;\\n    margin-top: 1rem;\\n    color: white;\\n    font-size: 1rem;\\n}\\n.description-detail {\\n    padding-top: 10px;\\n    font-size: smaller;\\n    color:rgb(236, 87, 112)\\n}\\n\\n#task-list li {\\n    list-style-type: none;\\n    display: flex;\\n    flex-flow: column nowrap;\\n    align-items: flex-start;\\n    gap: 1rem;\\n}\\n\\n.fa-circle {\\n    color: red;\\n}\\n\\n.fa-circle-check {\\n    color: green;\\n}\\n\\n.checked {\\n    text-decoration: line-through;\\n}\\n\\n.task-detail {\\n    width: 100%;\\n    display: flex;\\n    flex-flow: row nowrap;\\n    justify-content: space-between;\\n}\\n\\n.task {\\n    display: flex;\\n    flex-flow: row nowrap;\\n    gap: 10px;\\n}\\n\\n.icon-control {\\n    display: flex;\\n    gap: 10px;\\n}\\n\\n.fa-xmark {\\n    color: red;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n//global dom\nconst addProject = document.querySelector('.add-project-button');\nconst projectForm = document.querySelector(\"#project-form\");\nconst cancelProjectBtn = document.querySelector('.project-cancel-btn');\nconst projectList = document.querySelector('.project-list');\nconst heading = document.querySelector('#heading')\nconst taskList = document.querySelector('#task-list');\nconst addTaskBtn = document.querySelector('.add-task-button');\nconst removeTaskModal = document.querySelector('.close-task');\nconst modal = document.querySelector('.modal');\nconst taskModal = document.querySelector('.add-task-modal');\nconst taskForm = document.querySelector('.add-task-form')\n\nclass UI {\n    showProjectForm() {\n        projectForm.classList.remove('hidden');\n    };\n\n    removeProjectForm() {\n        ui.clearFormField()\n        projectForm.classList.add('hidden');\n    };\n\n    //add project to ui\n    addProject(item) {\n        item.title = document.getElementById('project-name').value;\n            item.id = Date.now().toString()\n            projectList.insertAdjacentHTML('beforeend' , \n            `<button class=\"button-project\" id=${item.id}>\n            <i class=\"fa-solid fa-tasks\"></i>${item.title}\n            <i class=\"fa-solid fa-xmark delete-project\" style=\"color:red; float: right\"></i></button>`)\n            ui.removeProjectForm()\n            myProjects.push(item)\n            ui.renderFolderInForm\n    };\n\n    clearFormField() {\n        document.getElementById('project-name').value = '';\n    };\n\n    //delete project in ui\n    deleteProject(e) {\n        if(e.target.classList.contains('delete-project')) {\n            if (confirm('Are you sure to remove this project?')) {\n                e.target.parentElement.remove()\n                heading.innerHTML = '';\n                taskList.innerHTML = ''\n            }\n        }\n    };\n\n    //render the selected project to title\n    renderChosenProject(e, selected) {\n        selected = myProjects.find(item => item.id === e.target.id)\n        console.log(selected)\n        heading.innerText = selected.title;\n        taskList.innerHTML = ''\n        ui.renderTask(selected)\n    };\n\n    //render task of chosen project to task list ui\n    renderTask(selected) {\n            selected.title = heading.innerText\n            selected.task.forEach((task) => {\n                let li = document.createElement('li');\n                if(task.completed == false) {\n                    li.innerHTML = \n                    `<div class=\"task-detail\">\n                        <div class=\"task\">\n                            <i class=\"task-status fa-regular fa-circle\"></i>\n                            <div class=\"task-name\">${task.todo}</div>\n                        </div>\n                        <div class=\"icon-control\">\n                            <i id=\"${task.todo}\" class=\"fa-solid fa-caret-left\"></i>\n                            <i id=\"${task.todo}\" class=\"remove-task fa-solid fa-xmark\"></i>\n                        </div>\n                        </div>\n            \n                        <div class=\"description-detail hidden\">\n                            <div class=\"description\">${task.description}</div>\n                            <div class=\"date\">${task.date}\n                        </div>\n                    </div>`    \n                } else if(task.completed == true) {\n                    li.innerHTML = \n                    `<div class=\"task-detail\">\n                        <div class=\"task\">\n                            <i class=\"task-status fa-regular fa-circle-check\"></i>\n                            <div class=\"task-name checked\">${task.todo}</div>\n                        </div>\n                        <div class=\"icon-control\">\n                            <i id=\"${task.todo}\" class=\"fa-solid fa-caret-left\"></i>\n                            <i id=\"${task.todo}\" class=\"remove-task fa-solid fa-xmark\"></i>\n                        </div>\n                        </div>\n            \n                        <div class=\"description-detail hidden\">\n                            <div class=\"description\">${task.description}</div>\n                            <div class=\"date\">${task.date}\n                        </div>\n                    </div>`    \n                }\n                taskList.appendChild(li)    \n            })\n            \n        };\n\n    //render the project list in form again if project is deleted\n    renderFolderInForm() {\n        const taskFolder = document.querySelector('#task-folder')\n        taskFolder.innerHTML = ''\n        myProjects.forEach((item => {\n            if(!taskFolder.innerHTML.includes(item.title)) {\n                taskFolder.insertAdjacentHTML('beforeend', `\n                <option value=\"${item.title}\">${item.title}</option>\n                `)\n            }\n        }))\n    };\n\n    //pop up and remove addtaskmodal\n    showAddTaskModal(item) {\n        item.classList.remove('hidden')   \n        this.renderFolderInForm()\n    };\n\n    removeAddTaskModal(item) {\n        item.classList.add('hidden')\n    };\n\n    addnewTask(task) {\n        let li = document.createElement('li');\n        li.setAttribute('class', '')\n        li.innerHTML = \n        `<div class=\"task-detail\">\n            <div class=\"task\">\n                <i class=\"task-status fa-regular fa-circle\"></i>\n                <div class=\"task-name\">${task.todo}</div>\n            </div>\n            <div class=\"icon-control\">\n                <i id=\"${task.todo}\" class=\"fa-solid fa-caret-left\"></i>\n                <i id=\"${task.todo}\" class=\"remove-task fa-solid fa-xmark\"></i>\n            </div>\n            </div>\n\n            <div id=\"${task.todo}\" class=\"description-detail hidden\">\n                <div class=\"description\">${task.description}</div>\n                <div class=\"date\">Due date: ${task.date}\n            </div>\n        </div>`    \n        taskList.appendChild(li) \n    };\n\n    clearAddForm() {\n        taskForm.reset()\n    };\n\n    toggleCompleted(selected, e) {\n        if (e.target.classList.contains('task-status')) {\n            selected = myProjects.find(item => item.title === heading.textContent);\n            let selectedTask = selected.task\n            selectedTask.forEach((item) => {\n                if (item.completed === true && item.todo === e.target.nextElementSibling.textContent) {\n                        item.completed = false;\n                        e.target.setAttribute('class', 'task-status fa-regular fa-circle');\n                        e.target.nextElementSibling.setAttribute('class', '')\n                    } else if (item.completed === false && item.todo === e.target.nextElementSibling.textContent) {\n                        item.completed = true;\n                        e.target.setAttribute('class', 'task-status fa-regular fa-circle-check')\n                        e.target.nextElementSibling.setAttribute('class', 'checked')\n                    }\n                })\n        }\n\n    };\n\n    showTaskDropDown(selected,e) {\n        if(e.target.classList.contains('fa-caret-left')) {\n            let project = myProjects.find(item => item.title === heading.textContent);\n            selected = project.task;\n            selected.forEach((task) => {\n                if(task.todo === e.target.id) {\n                    e.target.classList = 'fa-solid fa-caret-down'\n                    let desDiv = e.target.parentElement.parentElement.nextElementSibling;\n                    desDiv.classList.remove('hidden')\n                }\n            })\n        } else if(e.target.classList.contains('fa-caret-down')) {\n            let project = myProjects.find(item => item.title === heading.textContent);\n            selected = project.task;\n            selected.forEach((task) => {\n                if(task.todo === e.target.id) {\n                    e.target.classList = 'fa-solid fa-caret-left'\n                    let desDiv = e.target.parentElement.parentElement.nextElementSibling;\n                    desDiv.classList.add('hidden')\n                }\n            })\n        }\n    }\n\n}\n\nclass Projects {\n    constructor(id){\n        this.task = [],\n        this.id = id\n    };\n  \n    deleteProjectList(e) {\n    const selected = e.target.parentElement.id;\n    myProjects = myProjects.filter(item => item.id !== selected)\n    ui.deleteProject(e)\n  };\n}\n\nclass Tasks {\n    constructor (todo, description, completed, date) {\n        this.todo = todo,\n        this.description = description,\n        this.completed = completed\n        this.date = date\n    };\n\n    //add task in logic\n    addTask(project, task) {\n        const taskName = document.querySelector('#task-name').value;\n        const taskDes = document.querySelector('#task-description').value;\n        const taskDate = document.querySelector('#task-date').value\n        const folder = document.querySelector('#task-folder').value;\n        task.todo = taskName;\n        task.description = taskDes;\n        task.completed = false;\n        task.date = taskDate\n        project = myProjects.find(item => item.title === folder) \n        project.task.push(task)\n        if(heading.textContent === folder) {\n            ui.addnewTask(task)\n        }\n    };\n    \n    removeTask(selected, e) {\n        if (e.target.classList.contains('remove-task')) {\n            let project = myProjects.find(item => item.title === heading.textContent);\n            selected = project.task;\n            selected.forEach((task) => {\n                if(task.todo === e.target.id) {\n                    e.target.parentElement.parentElement.parentElement.remove();\n                    selected.splice(selected.indexOf(task))\n                }\n            })\n        }\n    };\n}\n\nlet myProjects = [];\n\nconst ui = new UI();\n\n//in DOM.js\nconst DOM = (() => {\n\n    //control click of delete project\n    document.addEventListener('click', function(e) {\n        const project = new Projects()\n        const task = new Tasks()\n        project.deleteProjectList(e)\n        ui.toggleCompleted(task, e)\n    });\n\n    //control add task button\n    addTaskBtn.addEventListener('click', () => {\n        ui.clearAddForm()\n        ui.showAddTaskModal(modal)\n        ui.showAddTaskModal(taskModal)\n    });\n\n    removeTaskModal.addEventListener('click', () => {\n        ui.removeAddTaskModal(modal)\n    });\n\n    //control click of project and render it\n    projectList.addEventListener('click', function(e) {\n        const project = new Projects()\n        ui.renderChosenProject(e, project)\n    });\n\n    //control task form\n    taskForm.addEventListener('submit', function(e) {\n        const project = new Projects();\n        const task = new Tasks();\n        e.preventDefault()\n        task.addTask(project, task)\n        ui.removeAddTaskModal(modal);\n        ui.clearAddForm()\n    });\n\n\n    //control the task list icon\n    taskList.addEventListener('click', function(e) {\n        const task = new Tasks();\n        task.removeTask(task, e)\n        ui.showTaskDropDown(task, e)\n    });\n\n    //control the project\n    projectForm.addEventListener('submit', function(e) {\n        const project = new Projects()\n        e.preventDefault();\n        ui.addProject(project)\n    });\n\n    addProject.addEventListener('click', ui.showProjectForm);\n\n    cancelProjectBtn.addEventListener('click', ui.removeProjectForm);\n})();\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;