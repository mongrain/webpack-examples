/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const txt = __webpack_require__(/*! ./demo.txt */ \"./demo.txt\");\r\nconsole.log(txt);\r\n\n\n//# sourceURL=webpack://webpack-examples/./app.js?");

/***/ }),

/***/ "./demo.txt":
/*!******************!*\
  !*** ./demo.txt ***!
  \******************/
/***/ ((module) => {

eval("module.exports = \"替换文本 var\\r\\n\\r\\n\"\n\n//# sourceURL=webpack://webpack-examples/./demo.txt?");

/***/ }),

/***/ "./webpack.config.js":
/*!***************************!*\
  !*** ./webpack.config.js ***!
  \***************************/
/***/ ((module) => {

eval("module.exports = {\r\n  entry: './app.js',\r\n  mode: 'development',\r\n  module: {\r\n    rules: [{\r\n      test: /\\.txt$/,\r\n      use: './const2var-loader'\r\n    }],\r\n  },\r\n  output: {\r\n    filename: 'bundle.js',\r\n  },\r\n};\n\n//# sourceURL=webpack://webpack-examples/./webpack.config.js?");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./app.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./webpack.config.js");
/******/ 	
/******/ })()
;