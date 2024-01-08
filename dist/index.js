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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.wrapper {\r\n  width: 576px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.inputs {\r\n  max-width: 500px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n  padding: 50px;\r\n}\r\n\r\n#get-screen, #download-screen {\r\n  padding: 10px 0;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://screenmaker2/./src/index.css?./node_modules/css-loader/dist/cjs.js");

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

/***/ "./src/getBingxDepositIphone.js":
/*!**************************************!*\
  !*** ./src/getBingxDepositIphone.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getBingxDepositIphone: () => (/* binding */ getBingxDepositIphone)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n\n\n\nconst amountInput = document.getElementById(\"amount\");\nconst mobileTimeInput = document.getElementById(\"mobile-time\");\nconst batteryInput = document.getElementById(\"battery\");\nconst walletInput = document.getElementById(\"wallet\");\nconst timeInput = document.getElementById(\"time\");\n\nconst getBingxDepositIphone = (ctx, canvas) => {\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n\n  const img = new Image();\n  ctx.textAlign = \"start\";\n  img.src = `bingx-deposit-iphone-template.png`;\n\n  img.onload = function () {\n    ctx.drawImage(img, 0, 0);\n    const mobileTime = mobileTimeInput.value;\n    const battery = batteryInput.value;\n    const batteryValue = (battery / 100) * 33;\n    let time = timeInput.value === \"\" ? \"2023-11-20 21:20:14\" : timeInput.value;\n\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.drawRoundedRect)(ctx, 512, 32, batteryValue, 14, 5);\n\n    _index__WEBPACK_IMPORTED_MODULE_0__.SFProDisplayBold.load().then((font) => {\n      ctx.textAlign = \"start\";\n      document.fonts.add(font);\n\n      ctx.fillStyle = \"black\";\n      ctx.font = \"25px SF Pro Display Bold\";\n      ctx.fillText(mobileTime, 67, 48);\n    });\n\n    _index__WEBPACK_IMPORTED_MODULE_0__.Rubik.load().then((font) => {\n      document.fonts.add(font);\n\n      ctx.fillStyle = \"black\";\n      ctx.font = \"50px Rubik\";\n\n      let amount = amountInput.value;\n      let measuredText = ctx.measureText(amount);\n      ctx.fillText(amount, canvas.width / 2 - measuredText.width / 2 + 7, 285);\n\n      ctx.font = \"20px Rubik\";\n\n      ctx.textAlign = \"right\";\n\n      ctx.fillText((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.splitText3Chunks)(walletInput.value)[0], 561, 465);\n      ctx.fillText((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.splitText3Chunks)(walletInput.value)[1], 561, 488);\n      ctx.fillText((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.splitText3Chunks)(walletInput.value)[2], 561, 511);\n\n      const TXID = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createCustomString)();\n      ctx.fillText((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.splitText3Chunks)(TXID)[0], 528, 557);\n      ctx.fillText((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.splitText3Chunks)(TXID)[1], 528, 580);\n      ctx.fillText((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.splitText3Chunks)(TXID)[2], 528, 603);\n\n      ctx.fillText((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.generateRandomSevenDigitNumber)(), 528, 647);\n\n      ctx.fillText(time, 561, 693);\n    });\n  };\n};\n\n\n//# sourceURL=webpack://screenmaker2/./src/getBingxDepositIphone.js?");

/***/ }),

/***/ "./src/getBingxWithdrawnIphone.js":
/*!****************************************!*\
  !*** ./src/getBingxWithdrawnIphone.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getBingxWithdrawnIphone: () => (/* binding */ getBingxWithdrawnIphone)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n\n\n\nconst amountInput = document.getElementById(\"amount\");\nconst mobileTimeInput = document.getElementById(\"mobile-time\");\nconst batteryInput = document.getElementById(\"battery\");\nconst walletInput = document.getElementById(\"wallet\");\nconst timeInput = document.getElementById(\"time\");\nconst commissionInput = document.getElementById(\"commission\");\n\nconst getBingxWithdrawnIphone = (ctx, canvas) => {\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n\n  const img = new Image();\n  ctx.textAlign = \"start\";\n  img.src = `bingx-withdrawn-iphone-template.png`;\n\n  img.onload = function () {\n    ctx.drawImage(img, 0, 0);\n    const mobileTime = mobileTimeInput.value;\n    const battery = batteryInput.value;\n    const batteryValue = (battery / 100) * 33;\n    const time =\n      timeInput.value === \"\" ? \"2023-11-20 07:40:35\" : timeInput.value;\n    const commission = commissionInput.value;\n\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.drawRoundedRect)(ctx, 512, 32, batteryValue, 14, 5);\n\n    _index__WEBPACK_IMPORTED_MODULE_0__.SFProDisplayBold.load().then((font) => {\n      ctx.textAlign = \"start\";\n      document.fonts.add(font);\n\n      ctx.fillStyle = \"black\";\n      ctx.font = \"25px SF Pro Display Bold\";\n      ctx.fillText(mobileTime, 67, 49);\n    });\n\n    _index__WEBPACK_IMPORTED_MODULE_0__.Rubik.load().then((font) => {\n      document.fonts.add(font);\n\n      ctx.fillStyle = \"black\";\n      ctx.font = \"50px Rubik\";\n\n      let amount = amountInput.value;\n      let measuredText = ctx.measureText(amount);\n      ctx.fillText(amount, canvas.width / 2 - measuredText.width / 2 + 7, 285);\n\n      ctx.font = \"20px Rubik\";\n\n      ctx.textAlign = \"right\";\n\n      ctx.fillText(`${commission} ETH`, 561, 465);\n\n      ctx.fillText((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.splitText2Chunks)(walletInput.value, 28)[0], 528, 510);\n      ctx.fillText((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.splitText2Chunks)(walletInput.value, 28)[1], 528, 533);\n\n      const TXID = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createCustomString)();\n      ctx.fillText((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.splitText3Chunks)(TXID)[0], 528, 624);\n      ctx.fillText((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.splitText3Chunks)(TXID)[1], 528, 647);\n      ctx.fillText((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.splitText3Chunks)(TXID)[2], 528, 670);\n\n      ctx.fillText((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.generateRandomSevenDigitNumber)(), 528, 715);\n\n      ctx.fillText(time, 561, 760);\n    });\n  };\n};\n\n\n//# sourceURL=webpack://screenmaker2/./src/getBingxWithdrawnIphone.js?");

/***/ }),

/***/ "./src/getBybitDepositAndroid.js":
/*!***************************************!*\
  !*** ./src/getBybitDepositAndroid.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getBybitDepositAndroid: () => (/* binding */ getBybitDepositAndroid)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\n\nconst amountInput = document.getElementById(\"amount\");\nconst timeInput = document.getElementById(\"time\");\nconst walletInput = document.getElementById(\"wallet\");\nconst batteryInput = document.getElementById(\"battery\");\nconst mobileTimeInput = document.getElementById(\"mobile-time\");\n\nconst getBybitDepositAndroid = (ctx, canvas) => {\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n\n  const img = new Image();\n  ctx.textAlign = \"start\";\n  img.src = `bybit-deposit-android-template.png`;\n\n  img.onload = function () {\n    ctx.drawImage(img, 0, 0);\n    ctx.fillStyle = \"rgba(255, 255, 255, 0.93)\";\n\n    const amount = `${amountInput.value} USDT`;\n    const time =\n      timeInput.value === \"\" ? \"2023-11-27 21:28:41\" : timeInput.value;\n    const mobileTime = mobileTimeInput.value;\n    const battery = batteryInput.value;\n\n    _index__WEBPACK_IMPORTED_MODULE_1__.IBMBold.load().then((font) => {\n      document.fonts.add(font);\n      ctx.font = \"30px IBM Bold\";\n      const measuredText = ctx.measureText(amount);\n\n      ctx.fillText(amount, canvas.width / 2 - measuredText.width / 2, 237);\n    });\n\n    _index__WEBPACK_IMPORTED_MODULE_1__.Montserrat.load().then((font) => {\n      document.fonts.add(font);\n\n      ctx.font = \"18px Montserrat\";\n      ctx.fillText(mobileTime, 24, 33);\n\n      ctx.font = \"10px Montserrat\";\n      ctx.fillText(battery, 524, 29);\n    });\n\n    _index__WEBPACK_IMPORTED_MODULE_1__.IBMMedium.load().then((font) => {\n      document.fonts.add(font);\n      ctx.textAlign = \"right\";\n\n      ctx.font = \"21px IBM Medium\";\n      ctx.fillText(time, 551, 479);\n\n      ctx.fillText((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.splitText2Chunks)(walletInput.value, 18)[0], 529, 530);\n      ctx.fillText((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.splitText2Chunks)(walletInput.value, 18)[1], 529, 556);\n\n      ctx.fillText((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.generateRandomString)(18), 529, 606);\n      ctx.fillText((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.generateRandomString)(18), 529, 632);\n      ctx.fillText((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.generateRandomString)(18), 529, 658);\n      ctx.fillText((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.generateRandomString)(10), 529, 684);\n    });\n  };\n};\n\n\n//# sourceURL=webpack://screenmaker2/./src/getBybitDepositAndroid.js?");

/***/ }),

/***/ "./src/getBybitDepositIphone.js":
/*!**************************************!*\
  !*** ./src/getBybitDepositIphone.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getBybitDepositIphone: () => (/* binding */ getBybitDepositIphone)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\n\nconst amountInput = document.getElementById(\"amount\");\nconst timeInput = document.getElementById(\"time\");\nconst walletInput = document.getElementById(\"wallet\");\nconst batteryInput = document.getElementById(\"battery\");\nconst mobileTimeInput = document.getElementById(\"mobile-time\");\n\nconst getBybitDepositIphone = (ctx, canvas) => {\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n\n  const img = new Image();\n  ctx.textAlign = \"start\";\n  img.src = `bybit-deposit-iphone-template.png`;\n\n  img.onload = function () {\n    ctx.drawImage(img, 0, 0);\n    ctx.fillStyle = \"rgba(255, 255, 255, 0.93)\";\n\n    const amount = `${amountInput.value} USDT`;\n    const time =\n      timeInput.value === \"\" ? \"2023-11-27 21:28:41\" : timeInput.value;\n    const mobileTime = mobileTimeInput.value;\n    const battery = batteryInput.value;\n\n    _index__WEBPACK_IMPORTED_MODULE_1__.IBMBold.load().then((font) => {\n      document.fonts.add(font);\n      ctx.font = \"30px IBM Bold\";\n      const measuredText = ctx.measureText(amount);\n\n      ctx.fillText(amount, canvas.width / 2 - measuredText.width / 2, 237);\n    });\n\n    _index__WEBPACK_IMPORTED_MODULE_1__.SFProDisplayMed.load().then((font) => {\n      document.fonts.add(font);\n\n      ctx.font = \"22px SF Pro Display\";\n      ctx.fillText(mobileTime, 39, 41);\n    });\n\n    _index__WEBPACK_IMPORTED_MODULE_1__.IBMMedium.load().then((font) => {\n      document.fonts.add(font);\n      ctx.textAlign = \"right\";\n\n      ctx.font = \"21px IBM Medium\";\n      ctx.fillText(time, 551, 479);\n\n      ctx.fillText((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.splitText2Chunks)(walletInput.value, 18)[0], 529, 530);\n      ctx.fillText((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.splitText2Chunks)(walletInput.value, 18)[1], 529, 556);\n\n      ctx.fillText((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.generateRandomString)(18), 529, 606);\n      ctx.fillText((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.generateRandomString)(18), 529, 632);\n      ctx.fillText((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.generateRandomString)(18), 529, 658);\n      ctx.fillText((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.generateRandomString)(10), 529, 684);\n    });\n\n    _index__WEBPACK_IMPORTED_MODULE_1__.SFProDisplayBold.load().then((font) => {\n      ctx.textAlign = \"start\";\n      document.fonts.add(font);\n\n      ctx.fillStyle = \"black\";\n      ctx.font = \"17px SF Pro Display Bold\";\n      ctx.fillText(battery, 516, 40);\n    });\n  };\n};\n\n\n//# sourceURL=webpack://screenmaker2/./src/getBybitDepositIphone.js?");

/***/ }),

/***/ "./src/getBybitWithdrawnAndroid.js":
/*!*****************************************!*\
  !*** ./src/getBybitWithdrawnAndroid.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getBybitWithdrawnAndroid: () => (/* binding */ getBybitWithdrawnAndroid)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\n\nconst amountInput = document.getElementById(\"amount\");\nconst timeInput = document.getElementById(\"time\");\nconst walletInput = document.getElementById(\"wallet\");\nconst batteryInput = document.getElementById(\"battery\");\nconst mobileTimeInput = document.getElementById(\"mobile-time\");\nconst commissionInput = document.getElementById(\"commission\");\n\nconst getBybitWithdrawnAndroid = (ctx, canvas) => {\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n\n  const img = new Image();\n  ctx.textAlign = \"start\";\n  img.src = `bybit-withdrawn-android-template.png`;\n\n  img.onload = function () {\n    ctx.drawImage(img, 0, 0);\n\n    const amount = `${amountInput.value} USDT`;\n    const time =\n      timeInput.value === \"\" ? \"2023-11-30 20:14:34\" : timeInput.value;\n    const mobileTime = mobileTimeInput.value;\n    const battery = batteryInput.value;\n    const commission = commissionInput.value;\n\n    ctx.fillStyle = \"rgba(255, 255, 255, 0.93)\";\n\n    _index__WEBPACK_IMPORTED_MODULE_1__.IBMBold.load().then((font) => {\n      document.fonts.add(font);\n      ctx.font = \"30px IBM Bold\";\n      const measuredText = ctx.measureText(amount);\n\n      ctx.fillText(amount, canvas.width / 2 - measuredText.width / 2, 238);\n    });\n\n    _index__WEBPACK_IMPORTED_MODULE_1__.Montserrat.load().then((font) => {\n      document.fonts.add(font);\n\n      ctx.font = \"18px Montserrat\";\n      ctx.fillText(mobileTime, 25, 32);\n\n      ctx.font = \"10px Montserrat\";\n      ctx.fillText(battery, 524, 29);\n    });\n\n    _index__WEBPACK_IMPORTED_MODULE_1__.IBMMedium.load().then((font) => {\n      document.fonts.add(font);\n      ctx.textAlign = \"right\";\n\n      ctx.font = \"21px IBM Medium\";\n\n      ctx.fillText(commission, 552, 430);\n      ctx.fillText(time, 552, 530);\n\n      ctx.fillText((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.splitText2Chunks)(walletInput.value, 17)[0], 530, 579);\n      ctx.fillText((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.splitText2Chunks)(walletInput.value, 17)[1], 530, 606);\n\n      ctx.fillText((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.generateRandomString)(19), 530, 655);\n      ctx.fillText((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.generateRandomString)(18), 530, 682);\n      ctx.fillText((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.generateRandomString)(18), 530, 709);\n      ctx.fillText((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.generateRandomString)(9), 530, 736);\n    });\n  };\n};\n\n\n//# sourceURL=webpack://screenmaker2/./src/getBybitWithdrawnAndroid.js?");

/***/ }),

/***/ "./src/getBybitWithdrawnIphone.js":
/*!****************************************!*\
  !*** ./src/getBybitWithdrawnIphone.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getBybitWithdrawnIphone: () => (/* binding */ getBybitWithdrawnIphone)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\n\nconst amountInput = document.getElementById(\"amount\");\nconst timeInput = document.getElementById(\"time\");\nconst walletInput = document.getElementById(\"wallet\");\nconst batteryInput = document.getElementById(\"battery\");\nconst mobileTimeInput = document.getElementById(\"mobile-time\");\nconst commissionInput = document.getElementById(\"commission\");\n\nconst getBybitWithdrawnIphone = (ctx, canvas) => {\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n\n  const img = new Image();\n  ctx.textAlign = \"start\";\n  img.src = `bybit-withdrawn-iphone-template.png`;\n\n  img.onload = function () {\n    ctx.drawImage(img, 0, 0);\n\n    const amount = `${amountInput.value} USDT`;\n    const time =\n      timeInput.value === \"\" ? \"2023-11-30 20:14:34\" : timeInput.value;\n    const mobileTime = mobileTimeInput.value;\n    const battery = batteryInput.value;\n    const commission = commissionInput.value;\n    ctx.fillStyle = \"rgba(255, 255, 255, 0.93)\";\n\n    _index__WEBPACK_IMPORTED_MODULE_1__.IBMBold.load().then((font) => {\n      document.fonts.add(font);\n      ctx.font = \"30px IBM Bold\";\n      const measuredText = ctx.measureText(amount);\n\n      ctx.fillText(amount, canvas.width / 2 - measuredText.width / 2, 238);\n    });\n\n    _index__WEBPACK_IMPORTED_MODULE_1__.SFProDisplayMed.load().then((font) => {\n      document.fonts.add(font);\n\n      ctx.font = \"22px SF Pro Display\";\n      ctx.fillText(mobileTime, 34, 39);\n    });\n\n    _index__WEBPACK_IMPORTED_MODULE_1__.IBMMedium.load().then((font) => {\n      document.fonts.add(font);\n      ctx.textAlign = \"right\";\n\n      ctx.font = \"21px IBM Medium\";\n\n      ctx.fillText(commission, 552, 430);\n      ctx.fillText(time, 552, 530);\n\n      ctx.fillText((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.splitText2Chunks)(walletInput.value, 17)[0], 530, 579);\n      ctx.fillText((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.splitText2Chunks)(walletInput.value, 17)[1], 530, 606);\n\n      ctx.fillText((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.generateRandomString)(19), 530, 655);\n      ctx.fillText((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.generateRandomString)(18), 530, 682);\n      ctx.fillText((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.generateRandomString)(18), 530, 709);\n      ctx.fillText((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.generateRandomString)(9), 530, 736);\n    });\n\n    _index__WEBPACK_IMPORTED_MODULE_1__.SFProDisplayBold.load().then((font) => {\n      ctx.textAlign = \"start\";\n      document.fonts.add(font);\n\n      ctx.fillStyle = \"black\";\n      ctx.font = \"17px SF Pro Display Bold\";\n      ctx.fillText(battery, 511, 38);\n    });\n  };\n};\n\n\n//# sourceURL=webpack://screenmaker2/./src/getBybitWithdrawnIphone.js?");

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCustomString: () => (/* binding */ createCustomString),\n/* harmony export */   drawRoundedRect: () => (/* binding */ drawRoundedRect),\n/* harmony export */   generateBingXTXID: () => (/* binding */ generateBingXTXID),\n/* harmony export */   generateRandomSevenDigitNumber: () => (/* binding */ generateRandomSevenDigitNumber),\n/* harmony export */   generateRandomString: () => (/* binding */ generateRandomString),\n/* harmony export */   splitText2Chunks: () => (/* binding */ splitText2Chunks),\n/* harmony export */   splitText3Chunks: () => (/* binding */ splitText3Chunks)\n/* harmony export */ });\nconst generateRandomString = (length) => {\n  let result = \"\";\n  const characters = \"0123456789abcdef\";\n  const charactersLength = characters.length;\n  for (let i = 0; i < length; i++) {\n    result += characters.charAt(Math.floor(Math.random() * charactersLength));\n  }\n  return result;\n};\n\nconst createCustomString = () => {\n  const prefix = \"0x00\";\n  // Учитываем длину префикса (4 символа), вычитаем их из общей длины строки\n  const restOfTheString = generateRandomString(64 - prefix.length);\n  return prefix + restOfTheString;\n};\n\nconst generateBingXTXID = (length) => {\n  let result = \"0x00\";\n  const characters = \"abcdefghijklmnopqrstuvwxyz0123456789\";\n  const charactersLength = characters.length;\n  for (let i = 0; i < length; i++) {\n    result += characters.charAt(Math.floor(Math.random() * charactersLength));\n  }\n  return result;\n};\n\nconst splitText2Chunks = (text, count) => {\n  const part1 = text.substring(0, count);\n  const part2 = text.substring(count);\n\n  return [part1, part2];\n};\n\nconst splitText3Chunks = (text) => {\n  const part1 = text.substring(0, 27);\n  const part2 = text.substring(27, 54);\n  const part3 = text.substring(54);\n\n  return [part1, part2, part3];\n};\n\nconst generateRandomSevenDigitNumber = () => {\n  let result = \"\";\n  const digits = \"0123456789\";\n\n  for (let i = 0; i < 7; i++) {\n    result += digits.charAt(Math.floor(Math.random() * digits.length));\n  }\n\n  return result;\n};\n\nconst drawRoundedRect = (ctx, x, y, width, height, radius) => {\n  ctx.beginPath();\n  ctx.moveTo(x + radius, y);\n  ctx.lineTo(x + width - radius, y);\n  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);\n  ctx.lineTo(x + width, y + height - radius);\n  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);\n  ctx.lineTo(x + radius, y + height);\n  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);\n  ctx.lineTo(x, y + radius);\n  ctx.quadraticCurveTo(x, y, x + radius, y);\n  ctx.closePath();\n  ctx.fill();\n};\n\n\n//# sourceURL=webpack://screenmaker2/./src/helpers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IBMBold: () => (/* binding */ IBMBold),\n/* harmony export */   IBMMedium: () => (/* binding */ IBMMedium),\n/* harmony export */   Montserrat: () => (/* binding */ Montserrat),\n/* harmony export */   Rubik: () => (/* binding */ Rubik),\n/* harmony export */   SFProDisplayBold: () => (/* binding */ SFProDisplayBold),\n/* harmony export */   SFProDisplayMed: () => (/* binding */ SFProDisplayMed)\n/* harmony export */ });\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _getBybitDepositIphone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getBybitDepositIphone */ \"./src/getBybitDepositIphone.js\");\n/* harmony import */ var _getBingxDepositIphone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getBingxDepositIphone */ \"./src/getBingxDepositIphone.js\");\n/* harmony import */ var _getBybitWithdrawnIphone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getBybitWithdrawnIphone */ \"./src/getBybitWithdrawnIphone.js\");\n/* harmony import */ var _getBingxWithdrawnIphone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getBingxWithdrawnIphone */ \"./src/getBingxWithdrawnIphone.js\");\n/* harmony import */ var _getBybitDepositAndroid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getBybitDepositAndroid */ \"./src/getBybitDepositAndroid.js\");\n/* harmony import */ var _getBybitWithdrawnAndroid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getBybitWithdrawnAndroid */ \"./src/getBybitWithdrawnAndroid.js\");\n\n\n\n\n\n\n\n\nconst IBMMedium = new FontFace(\n  \"IBM Medium\",\n  \"url(IBMPlexSans-Medium.ttf)\"\n);\n\nconst IBMBold = new FontFace(\"IBM Bold\", \"url(IBMPlexSans-Bold.ttf)\");\n\nconst SFProDisplayMed = new FontFace(\n  \"SF Pro Display\",\n  \"url(SF-Pro-Display-Medium.otf)\"\n);\nconst SFProDisplayBold = new FontFace(\n  \"SF Pro Display Bold\",\n  \"url(SF-Pro-Display-Bold.otf)\"\n);\n\nconst Rubik = new FontFace(\"Rubik\", \"url(Rubik-Regular.ttf)\");\nconst Montserrat = new FontFace(\n  \"Montserrat\",\n  \"url(Montserrat-Medium.ttf)\"\n);\n\nconst getScreenButton = document.getElementById(\"get-screen\");\nconst downloadScreenButton = document.getElementById(\"download-screen\");\nconst templateInput = document.getElementById(\"template\");\nconst canvas = document.getElementById(\"example\");\nconst ctx = canvas.getContext(\"2d\");\n\nconst TEMPLATE_FN_MAP = {\n  \"bybit-deposit-iphone\": _getBybitDepositIphone__WEBPACK_IMPORTED_MODULE_1__.getBybitDepositIphone,\n  \"bybit-withdrawn-iphone\": _getBybitWithdrawnIphone__WEBPACK_IMPORTED_MODULE_3__.getBybitWithdrawnIphone,\n  \"bybit-deposit-android\": _getBybitDepositAndroid__WEBPACK_IMPORTED_MODULE_5__.getBybitDepositAndroid,\n  \"bybit-withdrawn-android\": _getBybitWithdrawnAndroid__WEBPACK_IMPORTED_MODULE_6__.getBybitWithdrawnAndroid,\n  \"bingx-deposit-iphone\": _getBingxDepositIphone__WEBPACK_IMPORTED_MODULE_2__.getBingxDepositIphone,\n  \"bingx-withdrawn-iphone\": _getBingxWithdrawnIphone__WEBPACK_IMPORTED_MODULE_4__.getBingxWithdrawnIphone,\n};\n\ntemplateInput.addEventListener(\"change\", (e) => {\n  TEMPLATE_FN_MAP[e.target.value](ctx, canvas);\n});\n\ngetScreenButton.addEventListener(\"click\", () => {\n  TEMPLATE_FN_MAP[templateInput.value](ctx, canvas);\n});\n\ndownloadScreenButton.addEventListener(\"click\", () => {\n  const canvas = document.getElementById(\"example\");\n  const data = canvas.toDataURL(\"image/png\");\n  const downloadLink = document.createElement(\"a\");\n\n  downloadLink.href = data;\n  downloadLink.download = \"screenshot.png\";\n\n  document.body.appendChild(downloadLink);\n  downloadLink.click();\n  document.body.removeChild(downloadLink);\n});\n\nTEMPLATE_FN_MAP[templateInput.value](ctx, canvas);\n\n\n//# sourceURL=webpack://screenmaker2/./src/index.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;