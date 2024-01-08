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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n#example {\r\n  display: none;\r\n}\r\n\r\n#preview {\r\n  display: block;\r\n}\r\n\r\n\r\n#toggle-canvas {\r\n  position: relative;\r\n  height: 30px;\r\n  padding: 0 20px;\r\n  top: 50px;\r\n  left: 20px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-weight: 600;\r\n  background: linear-gradient(90deg, #7957ff, #a824e6);\r\n  border-radius: 6px;\r\n  box-shadow: 1px 1px 1px rgba(0,0,0,0.5);\r\n  color: white;\r\n  overflow: hidden;\r\n  text-decoration: none;\r\n  transition: all 200ms ease-out;\r\n  cursor: pointer;\r\n}\r\n\r\n.wrapper {\r\n  margin: 0 auto;\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 50px;\r\n  gap: 15px;\r\n}\r\n\r\n.inputs {\r\n  max-width: 500px;\r\n  width: 50%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n  /*padding: 50px;*/\r\n}\r\n\r\n.input {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.input input, .input select {\r\n  padding: 8px;\r\n}\r\n\r\n.commission {\r\n  display: none;\r\n}\r\n\r\n#get-screen, #download-screen {\r\n  padding: 10px 0;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-weight: 600;\r\n  background: linear-gradient(90deg, #29f19c, #02a1f9);\r\n  border-radius: 6px;\r\n  box-shadow: 1px 1px 1px rgba(0,0,0,0.5);\r\n  color: white;\r\n  overflow: hidden;\r\n  position: relative;\r\n  text-decoration: none;\r\n  transition: all 200ms ease-out;\r\n  cursor: pointer;\r\n}\r\n\r\n#get-screen {\r\n  background: linear-gradient(90deg, #ffeb38, #d1f1a1);\r\n  color: black;\r\n  box-shadow: none;\r\n  border: none;\r\n}\r\n\r\n#get-screen img, #download-screen img {\r\n  margin-left: 10px;\r\n\r\n}\r\n\r\n#download-screen img {\r\n  filter: invert(1);\r\n}\r\n\r\n@media screen and (max-width: 1000px) {\r\n  .wrapper {\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding: 50px 10px;\r\n  }\r\n\r\n  .inputs {\r\n    width: 100%;\r\n  }\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://screenmaker2/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://screenmaker2/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://screenmaker2/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://screenmaker2/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://screenmaker2/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://screenmaker2/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://screenmaker2/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://screenmaker2/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://screenmaker2/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://screenmaker2/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/TEMPLATE_OPTIONS.js":
/*!*********************************!*\
  !*** ./src/TEMPLATE_OPTIONS.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TEMPLATE_OPTIONS: () => (/* binding */ TEMPLATE_OPTIONS)\n/* harmony export */ });\nconst TEMPLATE_OPTIONS = {\n  bybit: {\n    deposit: {\n      iphone: {\n        mobileTime: {\n          font: \"22px SF Pro Display\",\n          color: \"white\",\n          position: [39, 41],\n        },\n        battery: {\n          font: \"17px SF Pro Display Bold\",\n          color: \"black\",\n          position: [515, 40],\n        },\n        amount: {\n          font: \"30px IBM Bold\",\n          color: \"rgba(255, 255, 255, 0.93)\",\n          position: [null, 237],\n        },\n        time: {\n          font: \"21px IBM Medium\",\n          color: \"rgba(255, 255, 255, 0.93)\",\n          position: [551, 479],\n        },\n        wallet: {\n          font: \"21px IBM Medium\",\n          color: \"rgba(255, 255, 255, 0.93)\",\n          position: [529, 530, 556],\n        },\n        transaction_id: {\n          font: \"21px IBM Medium\",\n          color: \"rgba(255, 255, 255, 0.93)\",\n          position: [529, 606, 632, 658, 684],\n        },\n      },\n      android: {\n        mobileTime: {\n          font: \"18px Montserrat\",\n          color: \"white\",\n          position: [24, 33],\n        },\n        battery: {\n          font: \"10px Montserrat\",\n          color: \"white\",\n          position: [524, 29],\n        },\n        amount: {\n          font: \"30px IBM Bold\",\n          color: \"rgba(255, 255, 255, 0.93)\",\n          position: [null, 237],\n        },\n        time: {\n          font: \"21px IBM Medium\",\n          color: \"rgba(255, 255, 255, 0.93)\",\n          position: [551, 479],\n        },\n        wallet: {\n          font: \"21px IBM Medium\",\n          color: \"rgba(255, 255, 255, 0.93)\",\n          position: [529, 530, 556],\n        },\n        transaction_id: {\n          font: \"21px IBM Medium\",\n          color: \"rgba(255, 255, 255, 0.93)\",\n          position: [529, 606, 632, 658, 684],\n        },\n      },\n    },\n    withdrawn: {\n      iphone: {\n        mobileTime: {\n          font: \"22px SF Pro Display\",\n          color: \"white\",\n          position: [39, 41],\n        },\n        battery: {\n          font: \"17px SF Pro Display Bold\",\n          color: \"black\",\n          position: [516, 40],\n        },\n        amount: {\n          font: \"30px IBM Bold\",\n          color: \"rgba(255, 255, 255, 0.93)\",\n          position: [null, 237],\n        },\n        commission: {\n          font: \"21px IBM Medium\",\n          color: \"rgba(255, 255, 255, 0.93)\",\n          position: [551, 430],\n        },\n        time: {\n          font: \"21px IBM Medium\",\n          color: \"rgba(255, 255, 255, 0.93)\",\n          position: [551, 530],\n        },\n        wallet: {\n          font: \"21px IBM Medium\",\n          color: \"rgba(255, 255, 255, 0.93)\",\n          position: [529, 579, 606],\n        },\n        transaction_id: {\n          font: \"21px IBM Medium\",\n          color: \"rgba(255, 255, 255, 0.93)\",\n          position: [529, 655, 682, 709, 736],\n        },\n      },\n      android: {\n        mobileTime: {\n          font: \"18px Montserrat\",\n          color: \"white\",\n          position: [24, 33],\n        },\n        battery: {\n          font: \"10px Montserrat\",\n          color: \"white\",\n          position: [524, 29],\n        },\n        amount: {\n          font: \"30px IBM Bold\",\n          color: \"rgba(255, 255, 255, 0.93)\",\n          position: [null, 237],\n        },\n        commission: {\n          font: \"21px IBM Medium\",\n          color: \"rgba(255, 255, 255, 0.93)\",\n          position: [551, 430],\n        },\n        time: {\n          font: \"21px IBM Medium\",\n          color: \"rgba(255, 255, 255, 0.93)\",\n          position: [551, 530],\n        },\n        wallet: {\n          font: \"21px IBM Medium\",\n          color: \"rgba(255, 255, 255, 0.93)\",\n          position: [529, 579, 606],\n        },\n        transaction_id: {\n          font: \"21px IBM Medium\",\n          color: \"rgba(255, 255, 255, 0.93)\",\n          position: [529, 655, 682, 709, 736],\n        },\n      },\n    },\n  },\n  bingx: {\n    deposit: {\n      iphone: {\n        mobileTime: {\n          font: \"23px SF Pro Display Semibold\",\n          color: \"black\",\n          position: [67, 48],\n        },\n        battery: {\n          font: \"17px SF Pro Display Bold\",\n          color: \"black\",\n          position: [516, 40],\n        },\n        amount: {\n          font: \"50px Rubik\",\n          color: \"black\",\n          position: [null, 285],\n        },\n        time: {\n          font: \"20px Rubik\",\n          color: \"black\",\n          position: [547, 693],\n        },\n        wallet: {\n          font: \"20px Rubik\",\n          color: \"black\",\n          position: [547, 465, 488, 511],\n        },\n        transaction_id: {\n          font: \"20px Rubik\",\n          color: \"black\",\n          position: [515, 556, 578, 600],\n        },\n        order_number: {\n          font: \"20px Rubik\",\n          color: \"black\",\n          position: [515, 650],\n        },\n      },\n      android: {},\n    },\n    withdrawn: {\n      iphone: {\n        mobileTime: {\n          font: \"23px SF Pro Display Semibold\",\n          color: \"black\",\n          position: [67, 48],\n        },\n        battery: {\n          font: \"17px SF Pro Display Bold\",\n          color: \"black\",\n          position: [516, 40],\n        },\n        amount: {\n          font: \"50px Rubik\",\n          color: \"black\",\n          position: [null, 285],\n        },\n        commission: {\n          font: \"20px Rubik\",\n          color: \"black\",\n          position: [547, 465],\n        },\n        time: {\n          font: \"20px Rubik\",\n          color: \"black\",\n          position: [547, 759],\n        },\n        wallet: {\n          font: \"20px Rubik\",\n          color: \"black\",\n          position: [515, 510, 530, 531],\n        },\n        transaction_id: {\n          font: \"20px Rubik\",\n          color: \"black\",\n          position: [515, 624, 646, 668],\n        },\n        order_number: {\n          font: \"20px Rubik\",\n          color: \"black\",\n          position: [515, 716],\n        },\n      },\n      android: {},\n    },\n  },\n};\n\n\n//# sourceURL=webpack://screenmaker2/./src/TEMPLATE_OPTIONS.js?");

/***/ }),

/***/ "./src/canvasDraw.js":
/*!***************************!*\
  !*** ./src/canvasDraw.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   drawAmount: () => (/* binding */ drawAmount),\n/* harmony export */   drawBattery: () => (/* binding */ drawBattery),\n/* harmony export */   drawBingxHashTransaction: () => (/* binding */ drawBingxHashTransaction),\n/* harmony export */   drawBingxWallet: () => (/* binding */ drawBingxWallet),\n/* harmony export */   drawBybitHashTransaction: () => (/* binding */ drawBybitHashTransaction),\n/* harmony export */   drawBybitWallet: () => (/* binding */ drawBybitWallet),\n/* harmony export */   drawCommission: () => (/* binding */ drawCommission),\n/* harmony export */   drawHashTransaction: () => (/* binding */ drawHashTransaction),\n/* harmony export */   drawMobileBar: () => (/* binding */ drawMobileBar),\n/* harmony export */   drawRoundedRect: () => (/* binding */ drawRoundedRect),\n/* harmony export */   drawRoundedRectangle: () => (/* binding */ drawRoundedRectangle),\n/* harmony export */   drawTime: () => (/* binding */ drawTime),\n/* harmony export */   drawWallet: () => (/* binding */ drawWallet)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n/* harmony import */ var _generateMobileBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateMobileBar */ \"./src/generateMobileBar.js\");\n\n\n\nconst canvas = document.getElementById(\"example\");\n\nconst drawBattery = (ctx, battery) => {\n  const batteryValue = (battery / 100) * 33;\n  ctx.fillStyle = \"black\";\n\n  drawRoundedRect(ctx, 500, 32, batteryValue, 14.1, 5);\n};\n\nconst drawMobileBar = async (\n  ctx,\n  options,\n  mobileOS,\n  platform,\n  mobileTime\n) => {\n  ctx.textAlign = \"start\";\n\n  if (mobileOS === \"iphone\") await (0,_generateMobileBar__WEBPACK_IMPORTED_MODULE_1__.generateIphoneMobileBar)(ctx, platform);\n\n  if (mobileOS === \"android\") await (0,_generateMobileBar__WEBPACK_IMPORTED_MODULE_1__.generateAndroidMobileBar)(ctx);\n\n  ctx.fillStyle = options.mobileTime.color;\n  ctx.font = options.mobileTime.font;\n  ctx.fillText(\n    mobileTime,\n    options.mobileTime.position[0],\n    options.mobileTime.position[1]\n  );\n};\n\nconst drawCommission = (ctx, options, commission) => {\n  ctx.fillStyle = options.commission.color;\n  ctx.font = options.commission.font;\n\n  ctx.fillText(\n    commission,\n    options.commission.position[0],\n    options.commission.position[1]\n  );\n};\n\nconst drawAmount = (ctx, platform, options, amount) => {\n  const amountWithCurrency = platform === \"bybit\" ? `${amount} USDT` : amount;\n\n  ctx.font = options.amount.font;\n  ctx.fillStyle = options.amount.color;\n\n  const textWidth = ctx.measureText(amountWithCurrency).width;\n  const textPosition = {\n    x: canvas.width / 2 - textWidth / 2,\n    y: options.amount.position[1],\n  };\n\n  ctx.fillText(amountWithCurrency, textPosition.x, textPosition.y);\n};\n\nconst drawTime = (ctx, options, time) => {\n  ctx.font = options.time.font;\n  ctx.fillText(time, options.time.position[0], options.time.position[1]);\n};\n\nconst drawRoundedRect = (ctx, x, y, width, height, radius, color) => {\n  ctx.beginPath();\n  ctx.moveTo(x + radius, y);\n  ctx.lineTo(x + width - radius, y);\n  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);\n  ctx.lineTo(x + width, y + height - radius);\n  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);\n  ctx.lineTo(x + radius, y + height);\n  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);\n  ctx.lineTo(x, y + radius);\n  ctx.quadraticCurveTo(x, y, x + radius, y);\n  ctx.closePath();\n  ctx.fill();\n};\n\nconst drawRoundedRectangle = (\n  ctx,\n  x,\n  y,\n  width,\n  height,\n  borderRadius\n) => {\n  ctx.beginPath();\n  ctx.fillStyle = \"white\";\n  ctx.moveTo(x + borderRadius, y); // Начало с верхнего левого скругленного угла\n  ctx.lineTo(x + width, y); // Линия к верхнему правому углу\n  ctx.lineTo(x + width, y + height); // Линия к нижнему правому углу\n  ctx.lineTo(x + borderRadius, y + height); // Линия к нижнему левому скругленному углу\n  ctx.quadraticCurveTo(x, y + height, x, y + height - borderRadius); // Скругление нижнего левого угла\n  ctx.lineTo(x, y + borderRadius); // Линия к верхнему левому углу\n  ctx.quadraticCurveTo(x, y, x + borderRadius, y); // Скругление верхнего левого угла\n  ctx.closePath();\n  ctx.fill();\n};\n\nconst drawBybitHashTransaction = (ctx, options) => {\n  const position = options.transaction_id.position;\n\n  ctx.fillText((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.generateRandomString)(18), position[0], position[1]);\n  ctx.fillText((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.generateRandomString)(18), position[0], position[2]);\n  ctx.fillText((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.generateRandomString)(18), position[0], position[3]);\n  ctx.fillText((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.generateRandomString)(10), position[0], position[4]);\n};\n\nconst drawBingxHashTransaction = (ctx, options) => {\n  const TXID = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createCustomString)();\n  const position = options.transaction_id.position;\n\n  ctx.fillText((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.splitText3Chunks)(TXID)[0], position[0], position[1]);\n  ctx.fillText((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.splitText3Chunks)(TXID)[1], position[0], position[2]);\n  ctx.fillText((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.splitText3Chunks)(TXID)[2], position[0], position[3]);\n};\n\nconst drawHashTransaction = (ctx, options, platform) => {\n  if (platform === \"bybit\") {\n    drawBybitHashTransaction(ctx, options);\n  }\n\n  if (platform === \"bingx\") {\n    drawBingxHashTransaction(ctx, options);\n  }\n};\n\nconst drawBybitWallet = (ctx, options, wallet) => {\n  const walletChunks = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.splitText2Chunks)(wallet, 18);\n\n  ctx.fillText(\n    walletChunks[0],\n    options.wallet.position[0],\n    options.wallet.position[1]\n  );\n  ctx.fillText(\n    walletChunks[1],\n    options.wallet.position[0],\n    options.wallet.position[2]\n  );\n};\n\nconst drawBingxWallet = (ctx, options, wallet) => {\n  ctx.fillText(\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.splitText3Chunks)(wallet)[0],\n    options.wallet.position[0],\n    options.wallet.position[1]\n  );\n  ctx.fillText(\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.splitText3Chunks)(wallet)[1],\n    options.wallet.position[0],\n    options.wallet.position[2]\n  );\n  ctx.fillText(\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.splitText3Chunks)(wallet)[2],\n    options.wallet.position[0],\n    options.wallet.position[3]\n  );\n};\n\nconst drawWallet = (ctx, platform, options, wallet) => {\n  if (platform === \"bybit\") {\n    drawBybitWallet(ctx, options, wallet);\n  }\n\n  if (platform === \"bingx\") {\n    drawBingxWallet(ctx, options, wallet);\n  }\n};\n\n\n//# sourceURL=webpack://screenmaker2/./src/canvasDraw.js?");

/***/ }),

/***/ "./src/fonts.js":
/*!**********************!*\
  !*** ./src/fonts.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FONTS: () => (/* binding */ FONTS)\n/* harmony export */ });\nconst IBMMedium = new FontFace(\"IBM Medium\", \"url(IBMPlexSans-Medium.ttf)\");\n\nconst IBMBold = new FontFace(\"IBM Bold\", \"url(IBMPlexSans-Bold.ttf)\");\n\nconst SFProDisplayMed = new FontFace(\n  \"SF Pro Display\",\n  \"url(SF-Pro-Display-Medium.otf)\"\n);\n\nconst SFProDisplaySemibold = new FontFace(\n  \"SF Pro DisplaySemibold\",\n  \"url(SF-Pro-Display-Semibold.otf)\"\n);\n\nconst SFProDisplayBold = new FontFace(\n  \"SF Pro Display Bold\",\n  \"url(SF-Pro-Display-Bold.otf)\"\n);\n\nconst Rubik = new FontFace(\"Rubik\", \"url(Rubik-Regular.ttf)\");\nconst Montserrat = new FontFace(\"Montserrat\", \"url(Montserrat-Medium.ttf)\");\n\nconst FONTS = [\n  IBMMedium,\n  IBMBold,\n  SFProDisplayMed,\n  SFProDisplaySemibold,\n  SFProDisplayBold,\n  Rubik,\n  Montserrat,\n];\n\n\n//# sourceURL=webpack://screenmaker2/./src/fonts.js?");

/***/ }),

/***/ "./src/generateMobileBar.js":
/*!**********************************!*\
  !*** ./src/generateMobileBar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   drawBattery: () => (/* binding */ drawBattery),\n/* harmony export */   generateAndroidMobileBar: () => (/* binding */ generateAndroidMobileBar),\n/* harmony export */   generateIphoneMobileBar: () => (/* binding */ generateIphoneMobileBar)\n/* harmony export */ });\n/* harmony import */ var _canvasDraw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvasDraw */ \"./src/canvasDraw.js\");\n\n\nconst canvas = document.getElementById(\"example\");\nconst ctx = canvas.getContext(\"2d\");\n\nconst generateRandomNumber = (min, max) => {\n  if (min > max) {\n    // Обмен значениями, если min больше max\n    let temp = min;\n    min = max;\n    max = temp;\n  }\n\n  return Math.floor(Math.random() * (max - min + 1)) + min;\n};\n\nconst IPHONE_ICONS = [\n  {\n    src: `mobile_bar/Wifi_${generateRandomNumber(1, 3)}.png`,\n    cb: (img) => ctx.drawImage(img, 479, 25, 24, 17),\n  },\n  {\n    src: `mobile_bar/gps_${generateRandomNumber(1, 4)}.png`,\n    cb: (img) => ctx.drawImage(img, 449, 25, 24, 17),\n  },\n];\n\nconst APP_ICONS = [\n  \"binance\",\n  \"bybit\",\n  \"disk space\",\n  \"facebook\",\n  \"fb msg\",\n  \"inst\",\n  \"telegram\",\n  \"tiktok\",\n  \"twitter\",\n  \"viber\",\n  \"warning\",\n  \"yt\",\n];\n\nconst shuffleArray = (array) => {\n  for (let i = array.length - 1; i > 0; i--) {\n    const j = Math.floor(Math.random() * (i + 1));\n    [array[i], array[j]] = [array[j], array[i]]; // обмен элементами\n  }\n};\n\nconst getRandomElements = (array, count) => {\n  shuffleArray(array);\n  return array.slice(0, count);\n};\n\nconst loadAllIcons = async (icons) => {\n  const promiseArray = [];\n\n  icons.forEach((icon) => {\n    promiseArray.push(\n      new Promise((resolve) => {\n        const img = new Image();\n\n        img.src = icon.src;\n        img.onload = function () {\n          icon.cb(img);\n          resolve();\n        };\n      })\n    );\n  });\n\n  await Promise.all(promiseArray);\n};\n\nconst generateApps = (ctx) => {\n  const appsCount = generateRandomNumber(0, 5);\n  const apps = getRandomElements(APP_ICONS, appsCount);\n  const modifiedApps = [];\n  let xPos = 85;\n\n  for (let i = 0; i < appsCount; i++) {\n    modifiedApps.push({\n      src: `mobile_bar/apps/${apps[i]}.png`,\n      cb: (img) => {\n        ctx.drawImage(img, xPos, 18, img.width, img.height);\n        xPos += img.width + 10;\n      },\n    });\n  }\n\n  modifiedApps.push({\n    src: `mobile_bar/gps_android_${generateRandomNumber(1, 5)}.png`,\n    cb: (signalLevel) => ctx.drawImage(signalLevel, 451, 18, 23, 16),\n  });\n\n  modifiedApps.push({\n    src: `mobile_bar/wifi_android_${generateRandomNumber(1, 4)}.png`,\n    cb: (wifi) => ctx.drawImage(wifi, 480, 15, 27, 20),\n  });\n\n  if (Math.random() >= 0.5) {\n    modifiedApps.push({\n      src: `mobile_bar/android-alarm-clock.png`,\n      cb: (alarmClock) => ctx.drawImage(alarmClock, 420, 15, 20, 20),\n    });\n  }\n\n  return modifiedApps;\n};\n\nconst drawBattery = (ctx, battery) => {\n  const batteryValue = (battery / 100) * 33;\n  ctx.fillStyle = \"black\";\n\n  (0,_canvasDraw__WEBPACK_IMPORTED_MODULE_0__.drawRoundedRect)(ctx, 500, 32, batteryValue, 14.1, 5);\n};\n\nconst generateIphoneMobileBar = async (ctx, platform) => {\n  const batteryValue = `${Math.floor(Math.random() * 61) + 20}`;\n\n  if (platform === \"bybit\") {\n    (0,_canvasDraw__WEBPACK_IMPORTED_MODULE_0__.drawRoundedRectangle)(ctx, 509, 24.2, batteryValue / 3.2, 19, 6);\n    await loadAllIcons(IPHONE_ICONS);\n\n    ctx.fillStyle = \"black\";\n    ctx.font = \"17px SF Pro Display Bold\";\n    ctx.fillText(batteryValue, 515, 40);\n  } else {\n    drawBattery(ctx, batteryValue);\n  }\n};\n\nconst generateAndroidMobileBar = async (ctx) => {\n  const batteryValue = `${Math.floor(Math.random() * 20) + 52}`;\n\n  const apps = generateApps(ctx);\n  await loadAllIcons(apps);\n\n  ctx.fillStyle = \"white\";\n  ctx.font = \"10px Montserrat\";\n  ctx.fillText(batteryValue, 524, 29);\n};\n\n\n//# sourceURL=webpack://screenmaker2/./src/generateMobileBar.js?");

/***/ }),

/***/ "./src/getTemplateByType.js":
/*!**********************************!*\
  !*** ./src/getTemplateByType.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getTemplateByType: () => (/* binding */ getTemplateByType)\n/* harmony export */ });\n/* harmony import */ var _canvasDraw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvasDraw */ \"./src/canvasDraw.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n\n\n\n\nconst canvas = document.getElementById(\"example\");\nconst previewCanvas = document.getElementById(\"preview\");\nconst ctx = canvas.getContext(\"2d\");\nconst previewCTX = previewCanvas.getContext(\"2d\");\nconst timeInput = document.getElementById(\"time\");\nconst mobileTimeInput = document.getElementById(\"mobile-time\");\nconst walletInput = document.getElementById(\"wallet\");\n\nconst getTemplateByType = (type, data) => {\n  const { amount, time, mobileTime, wallet, commission } = data;\n  const templateOptions = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.getTemplateOptions)(type);\n  const img = new Image();\n  const platform = type.split(\"-\")[0];\n  const mobileOS = type.split(\"-\")[2];\n\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n  ctx.textAlign = \"start\";\n\n  img.src = `${type}-template.png`;\n\n  img.onload = async () => {\n    ctx.drawImage(img, 0, 0, canvas.width, 1280);\n\n    mobileTimeInput.value = mobileTime;\n    timeInput.value = time;\n    walletInput.value = wallet;\n\n    console.log(\"before draw mobile bar\");\n    await (0,_canvasDraw__WEBPACK_IMPORTED_MODULE_0__.drawMobileBar)(ctx, templateOptions, mobileOS, platform, mobileTime);\n    console.log(\"after draw mobile bar\");\n\n    (0,_canvasDraw__WEBPACK_IMPORTED_MODULE_0__.drawAmount)(ctx, platform, templateOptions, amount);\n\n    ctx.textAlign = \"right\";\n\n    if (type.split(\"-\")[1] === \"withdrawn\") {\n      (0,_canvasDraw__WEBPACK_IMPORTED_MODULE_0__.drawCommission)(ctx, templateOptions, commission);\n    }\n\n    (0,_canvasDraw__WEBPACK_IMPORTED_MODULE_0__.drawTime)(ctx, templateOptions, time);\n    (0,_canvasDraw__WEBPACK_IMPORTED_MODULE_0__.drawWallet)(ctx, platform, templateOptions, wallet);\n    (0,_canvasDraw__WEBPACK_IMPORTED_MODULE_0__.drawHashTransaction)(ctx, templateOptions, platform);\n\n    if (type.split(\"-\")[0] === \"bingx\") {\n      ctx.fillText(\n        (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.generateRandomSevenDigitNumber)(),\n        templateOptions.order_number.position[0],\n        templateOptions.order_number.position[1]\n      );\n    }\n\n    previewCTX.drawImage(canvas, 0, 0, canvas.width / 1.5, 1280 / 1.5);\n  };\n};\n\n\n//# sourceURL=webpack://screenmaker2/./src/getTemplateByType.js?");

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addFontsToDocument: () => (/* binding */ addFontsToDocument),\n/* harmony export */   createCustomString: () => (/* binding */ createCustomString),\n/* harmony export */   generateBingXTXID: () => (/* binding */ generateBingXTXID),\n/* harmony export */   generateRandomSevenDigitNumber: () => (/* binding */ generateRandomSevenDigitNumber),\n/* harmony export */   generateRandomString: () => (/* binding */ generateRandomString),\n/* harmony export */   getCurrentDateTime: () => (/* binding */ getCurrentDateTime),\n/* harmony export */   getDataFromUser: () => (/* binding */ getDataFromUser),\n/* harmony export */   getTemplateOptions: () => (/* binding */ getTemplateOptions),\n/* harmony export */   splitText2Chunks: () => (/* binding */ splitText2Chunks),\n/* harmony export */   splitText3Chunks: () => (/* binding */ splitText3Chunks),\n/* harmony export */   toggleInput: () => (/* binding */ toggleInput)\n/* harmony export */ });\n/* harmony import */ var _TEMPLATE_OPTIONS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TEMPLATE_OPTIONS */ \"./src/TEMPLATE_OPTIONS.js\");\n\n\nconst addFontsToDocument = async (fonts) => {\n  fonts.forEach((font) => {\n    font.load().then((loadedFont) => {\n      document.fonts.add(loadedFont);\n    });\n  });\n};\n\nconst generateRandomString = (length) => {\n  let result = \"\";\n  const characters = \"0123456789abcdef\";\n  const charactersLength = characters.length;\n  for (let i = 0; i < length; i++) {\n    result += characters.charAt(Math.floor(Math.random() * charactersLength));\n  }\n  return result;\n};\n\nconst createCustomString = () => {\n  const prefix = \"0x00\";\n  // Учитываем длину префикса (4 символа), вычитаем их из общей длины строки\n  const restOfTheString = generateRandomString(64 - prefix.length);\n  return prefix + restOfTheString;\n};\n\nconst generateBingXTXID = (length) => {\n  let result = \"0x00\";\n  const characters = \"abcdefghijklmnopqrstuvwxyz0123456789\";\n  const charactersLength = characters.length;\n  for (let i = 0; i < length; i++) {\n    result += characters.charAt(Math.floor(Math.random() * charactersLength));\n  }\n  return result;\n};\n\nconst splitText2Chunks = (text, count) => {\n  const part1 = text.substring(0, count);\n  const part2 = text.substring(count);\n\n  return [part1, part2];\n};\n\nconst splitText3Chunks = (text) => {\n  const part1 = text.substring(0, 27);\n  const part2 = text.substring(27, 54);\n  const part3 = text.substring(54);\n\n  return [part1, part2, part3];\n};\n\nconst generateRandomSevenDigitNumber = () => {\n  let result = \"\";\n  const digits = \"0123456789\";\n\n  for (let i = 0; i < 7; i++) {\n    result += digits.charAt(Math.floor(Math.random() * digits.length));\n  }\n\n  return result;\n};\n\nconst getDataFromUser = () => {\n  const amountInput = document.getElementById(\"amount\");\n  const timeInput = document.getElementById(\"time\");\n  const walletInput = document.getElementById(\"wallet\");\n  const mobileTimeInput = document.getElementById(\"mobile-time\");\n  const commissionInput = document.getElementById(\"commission\");\n\n  return {\n    amount: amountInput.value,\n    time: timeInput.value,\n    wallet: walletInput.value,\n    mobileTime: mobileTimeInput.value,\n    commission: commissionInput.value,\n  };\n};\n\nconst getTemplateOptions = (type) => {\n  const platform = type.split(\"-\")[0];\n  const action = type.split(\"-\")[1];\n  const mobileOS = type.split(\"-\")[2];\n  return _TEMPLATE_OPTIONS__WEBPACK_IMPORTED_MODULE_0__.TEMPLATE_OPTIONS[platform][action][mobileOS];\n};\n\nconst getCurrentDateTime = (isFullTime) => {\n  const now = new Date();\n  const year = now.getFullYear();\n  const month = String(now.getMonth() + 1).padStart(2, \"0\"); // Месяцы начинаются с 0\n  const day = String(now.getDate()).padStart(2, \"0\");\n  const hours = String(now.getHours()).padStart(2, \"0\");\n  const minutes = String(now.getMinutes()).padStart(2, \"0\");\n  const seconds = String(now.getSeconds()).padStart(2, \"0\");\n\n  if (isFullTime) {\n    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;\n  }\n\n  return `${hours}:${minutes}`;\n};\n\nconst toggleInput = (input, status) => {\n  if (status) {\n    input.style.display = \"flex\";\n  } else {\n    input.style.display = \"none\";\n  }\n};\n\n\n//# sourceURL=webpack://screenmaker2/./src/helpers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n/* harmony import */ var _getTemplateByType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getTemplateByType */ \"./src/getTemplateByType.js\");\n/* harmony import */ var _fonts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fonts */ \"./src/fonts.js\");\n\n\n\n\n\nconst getScreenButton = document.getElementById(\"get-screen\");\nconst downloadScreenButton = document.getElementById(\"download-screen\");\nconst templateInput = document.getElementById(\"template\");\nconst commissionInput = document.querySelector(\".commission\");\n\n// const toggleCanvasButton = document.getElementById(\"toggle-canvas\");\n// const canvas = document.getElementById(\"example\");\n\nawait (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.addFontsToDocument)(_fonts__WEBPACK_IMPORTED_MODULE_3__.FONTS);\n\n// let CANVAS_VIEW_STATUS = true;\n\ndocument.fonts.ready.then(() => {\n  (0,_getTemplateByType__WEBPACK_IMPORTED_MODULE_2__.getTemplateByType)(templateInput.value, {\n    amount: \"\",\n    time: (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.getCurrentDateTime)(true),\n    wallet: \"TW2FSbnmHnv1PVXbuoqqQELeQck1DuoWZg\",\n    mobileTime: (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.getCurrentDateTime)(),\n    commission: \"1\",\n  });\n});\n\ntemplateInput.addEventListener(\"change\", (e) => {\n  const action = e.target.value.split(\"-\")[1];\n  const isWithdrawn = action === \"withdrawn\";\n\n  (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.toggleInput)(commissionInput, isWithdrawn);\n\n  (0,_getTemplateByType__WEBPACK_IMPORTED_MODULE_2__.getTemplateByType)(e.target.value, (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.getDataFromUser)());\n});\n\ngetScreenButton.addEventListener(\"click\", () => {\n  (0,_getTemplateByType__WEBPACK_IMPORTED_MODULE_2__.getTemplateByType)(templateInput.value, (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.getDataFromUser)());\n});\n\n// toggleCanvasButton.addEventListener(\"click\", () => {\n//   if (CANVAS_VIEW_STATUS) {\n//     canvas.style.display = \"none\";\n//   } else {\n//     canvas.style.display = \"block\";\n//   }\n//\n//   CANVAS_VIEW_STATUS = !CANVAS_VIEW_STATUS;\n// });\n\ndownloadScreenButton.addEventListener(\"click\", () => {\n  const canvas = document.getElementById(\"example\");\n  const data = canvas.toDataURL(\"image/png\");\n  const downloadLink = document.createElement(\"a\");\n\n  downloadLink.href = data;\n  downloadLink.download = \"screenshot.png\";\n\n  document.body.appendChild(downloadLink);\n  downloadLink.click();\n  document.body.removeChild(downloadLink);\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://screenmaker2/./src/index.js?");

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
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
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