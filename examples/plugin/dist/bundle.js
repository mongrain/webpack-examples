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
/***/ (() => {

eval("// console.log 是否可用被删除呢\r\n;\r\nconst wording = '我是一个文案';\r\n;\r\n\n\n//# sourceURL=webpack://webpack-examples/./app.js?");

/***/ }),

/***/ "./no-console-plugin.js":
/*!******************************!*\
  !*** ./no-console-plugin.js ***!
  \******************************/
/***/ ((module) => {

eval("// NoConsolePlugin.js\r\n\r\nconst PLUGIN_NAME = 'NO_CONSOLE';\r\n\r\nclass NoConsolePlugin {\r\n  constructor() {\r\n\r\n  }\r\n\r\n  // 我们需要一个apply方法(为了获取compiler)，接收compiler作为参数表示这次打包的上下文。  \r\n  apply(compiler) {\r\n    compiler.hooks.emit.tap(PLUGIN_NAME, compilation => {\r\n      // 探索每个块（构建后的输出）\r\n      compilation.chunks.forEach(function (chunk) {\r\n        // 探索块生成的每个资源文件名\r\n        chunk.files.forEach(function (filename) {\r\n          let source = compilation.assets[filename].source();\r\n          source = source.replace(/console\\.(log|warn|error|info)\\(([^)]*)\\)/g, '');\r\n          ;\r\n          // 返回\r\n          compilation.assets[filename] = {\r\n            source() {\r\n              return source;\r\n            },\r\n            size() {\r\n              return source.length;\r\n            }\r\n          }\r\n        });\r\n      });\r\n    });\r\n  }\r\n}\r\n\r\nmodule.exports = NoConsolePlugin\n\n//# sourceURL=webpack://webpack-examples/./no-console-plugin.js?");

/***/ }),

/***/ "./webpack.config.js":
/*!***************************!*\
  !*** ./webpack.config.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const NoConsolePlugin = __webpack_require__(/*! ./no-console-plugin */ \"./no-console-plugin.js\");\r\n\r\nmodule.exports = {\r\n  entry: './app.js',\r\n  mode: 'development',\r\n  output: {\r\n    filename: 'bundle.js',\r\n  },\r\n  plugins: [\r\n    new NoConsolePlugin()\r\n  ]\r\n};\n\n//# sourceURL=webpack://webpack-examples/./webpack.config.js?");

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