module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/on-page-scroll.js":
/*!*********************************!*\
  !*** ./pages/on-page-scroll.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_onScrollComponent_onScrollComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/onScrollComponent/onScrollComponent */ "./src/components/onScrollComponent/onScrollComponent.js");
var _jsxFileName = "C:\\Users\\ritgupta5\\pov\\plural-sight-basic-hooks\\pages\\on-page-scroll.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const hoverOnImage = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_src_components_onScrollComponent_onScrollComponent__WEBPACK_IMPORTED_MODULE_1__["OnPageScroll"], {
    primary: "/images/img-1.jpg",
    secondary: "/images/img-2.jpg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }), __jsx(_src_components_onScrollComponent_onScrollComponent__WEBPACK_IMPORTED_MODULE_1__["OnPageScroll"], {
    primary: "/images/img-3.jpg",
    secondary: "/images/img-4.jpg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }), __jsx(_src_components_onScrollComponent_onScrollComponent__WEBPACK_IMPORTED_MODULE_1__["OnPageScroll"], {
    primary: "/images/img-1.jpg",
    secondary: "/images/img-2.jpg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }), __jsx(_src_components_onScrollComponent_onScrollComponent__WEBPACK_IMPORTED_MODULE_1__["OnPageScroll"], {
    primary: "/images/img-3.jpg",
    secondary: "/images/img-4.jpg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), __jsx(_src_components_onScrollComponent_onScrollComponent__WEBPACK_IMPORTED_MODULE_1__["OnPageScroll"], {
    primary: "/images/img-1.jpg",
    secondary: "/images/img-2.jpg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }), __jsx(_src_components_onScrollComponent_onScrollComponent__WEBPACK_IMPORTED_MODULE_1__["OnPageScroll"], {
    primary: "/images/img-3.jpg",
    secondary: "/images/img-4.jpg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }), __jsx(_src_components_onScrollComponent_onScrollComponent__WEBPACK_IMPORTED_MODULE_1__["OnPageScroll"], {
    primary: "/images/img-1.jpg",
    secondary: "/images/img-2.jpg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }), __jsx(_src_components_onScrollComponent_onScrollComponent__WEBPACK_IMPORTED_MODULE_1__["OnPageScroll"], {
    primary: "/images/img-3.jpg",
    secondary: "/images/img-4.jpg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (hoverOnImage);

/***/ }),

/***/ "./src/components/onScrollComponent/onScrollComponent.js":
/*!***************************************************************!*\
  !*** ./src/components/onScrollComponent/onScrollComponent.js ***!
  \***************************************************************/
/*! exports provided: OnPageScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnPageScroll", function() { return OnPageScroll; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\ritgupta5\\pov\\plural-sight-basic-hooks\\src\\components\\onScrollComponent\\onScrollComponent.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const OnPageScroll = ({
  primary,
  secondary
}) => {
  const imgRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener('scroll', scrollHandler);
    setInView(isInView());
    return () => {
      return window.removeEventListener('scroll', scrollHandler);
    };
  });
  const {
    0: inView,
    1: setInView
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const isInView = () => {
    if (imgRef.current) {
      const react = imgRef.current.getBoundingClientRect();
      return react.top >= 0 && react.bottom <= window.innerHeight;
    }

    return false;
  };

  const scrollHandler = () => {
    setInView(() => {
      return isInView();
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("img", {
    src: inView ? primary : secondary,
    width: "200",
    height: "200",
    ref: imgRef,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 6
    }
  }));
};



/***/ }),

/***/ 4:
/*!***************************************!*\
  !*** multi ./pages/on-page-scroll.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ritgupta5\pov\plural-sight-basic-hooks\pages\on-page-scroll.js */"./pages/on-page-scroll.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvb24tcGFnZS1zY3JvbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb25TY3JvbGxDb21wb25lbnQvb25TY3JvbGxDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJob3Zlck9uSW1hZ2UiLCJPblBhZ2VTY3JvbGwiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwiaW1nUmVmIiwidXNlUmVmIiwidXNlRWZmZWN0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbEhhbmRsZXIiLCJzZXRJblZpZXciLCJpc0luVmlldyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpblZpZXciLCJ1c2VTdGF0ZSIsImN1cnJlbnQiLCJyZWFjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImJvdHRvbSIsImlubmVySGVpZ2h0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiww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TUMsS0FBSyxHQUFHWixNQUFNLENBQUNXLE9BQVAsQ0FBZUUscUJBQWYsRUFBZDtBQUNBLGFBQU9ELEtBQUssQ0FBQ0UsR0FBTixJQUFhLENBQWIsSUFBa0JGLEtBQUssQ0FBQ0csTUFBTixJQUFnQlosTUFBTSxDQUFDYSxXQUFoRDtBQUNGOztBQUNELFdBQU8sS0FBUDtBQUNKLEdBTkQ7O0FBUUEsUUFBTVgsYUFBYSxHQUFHLE1BQU07QUFDeEJDLGFBQVMsQ0FBQyxNQUFNO0FBQ1osYUFBT0MsUUFBUSxFQUFmO0FBQ0gsS0FGUSxDQUFUO0FBR0gsR0FKRDs7QUFNQSxTQUFPLG1FQUNOO0FBQUssT0FBRyxFQUFFRSxNQUFNLEdBQUdYLE9BQUgsR0FBYUMsU0FBN0I7QUFBd0MsU0FBSyxFQUFDLEtBQTlDO0FBQW9ELFVBQU0sRUFBQyxLQUEzRDtBQUFpRSxPQUFHLEVBQUVDLE1BQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFETSxDQUFQO0FBR0gsQ0E5QkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQSxrQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcb24tcGFnZS1zY3JvbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE9uUGFnZVNjcm9sbCB9IGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9vblNjcm9sbENvbXBvbmVudC9vblNjcm9sbENvbXBvbmVudFwiO1xyXG5cclxuY29uc3QgaG92ZXJPbkltYWdlID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8T25QYWdlU2Nyb2xsIHByaW1hcnk9XCIvaW1hZ2VzL2ltZy0xLmpwZ1wiIHNlY29uZGFyeT1cIi9pbWFnZXMvaW1nLTIuanBnXCIgLz5cclxuXHJcbiAgICAgIDxiciAvPlxyXG5cclxuICAgICAgPE9uUGFnZVNjcm9sbCBwcmltYXJ5PVwiL2ltYWdlcy9pbWctMy5qcGdcIiBzZWNvbmRhcnk9XCIvaW1hZ2VzL2ltZy00LmpwZ1wiIC8+XHJcblxyXG4gICAgICA8YnIgLz5cclxuXHJcbiAgICAgIDxPblBhZ2VTY3JvbGwgcHJpbWFyeT1cIi9pbWFnZXMvaW1nLTEuanBnXCIgc2Vjb25kYXJ5PVwiL2ltYWdlcy9pbWctMi5qcGdcIiAvPlxyXG5cclxuICAgICAgPGJyIC8+XHJcblxyXG4gICAgICA8T25QYWdlU2Nyb2xsIHByaW1hcnk9XCIvaW1hZ2VzL2ltZy0zLmpwZ1wiIHNlY29uZGFyeT1cIi9pbWFnZXMvaW1nLTQuanBnXCIgLz5cclxuXHJcbiAgICAgIDxiciAvPlxyXG4gICAgICBcclxuICAgICAgPE9uUGFnZVNjcm9sbCBwcmltYXJ5PVwiL2ltYWdlcy9pbWctMS5qcGdcIiBzZWNvbmRhcnk9XCIvaW1hZ2VzL2ltZy0yLmpwZ1wiIC8+XHJcblxyXG4gICAgICA8YnIgLz5cclxuXHJcbiAgICAgIDxPblBhZ2VTY3JvbGwgcHJpbWFyeT1cIi9pbWFnZXMvaW1nLTMuanBnXCIgc2Vjb25kYXJ5PVwiL2ltYWdlcy9pbWctNC5qcGdcIiAvPlxyXG5cclxuICAgICAgPGJyIC8+XHJcblxyXG4gICAgICA8T25QYWdlU2Nyb2xsIHByaW1hcnk9XCIvaW1hZ2VzL2ltZy0xLmpwZ1wiIHNlY29uZGFyeT1cIi9pbWFnZXMvaW1nLTIuanBnXCIgLz5cclxuXHJcbiAgICAgIDxiciAvPlxyXG5cclxuICAgICAgPE9uUGFnZVNjcm9sbCBwcmltYXJ5PVwiL2ltYWdlcy9pbWctMy5qcGdcIiBzZWNvbmRhcnk9XCIvaW1hZ2VzL2ltZy00LmpwZ1wiIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaG92ZXJPbkltYWdlO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWZ9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5jb25zdCBPblBhZ2VTY3JvbGwgPSAoe3ByaW1hcnksIHNlY29uZGFyeX0pID0+IHtcclxuICAgY29uc3QgaW1nUmVmID0gdXNlUmVmKG51bGwpXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsSGFuZGxlcik7XHJcbiAgICAgICAgIHNldEluVmlldyhpc0luVmlldygpKVxyXG4gICAgICAgIHJldHVybigpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxIYW5kbGVyKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgW2luVmlldywgc2V0SW5WaWV3XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IGlzSW5WaWV3ID0gKCkgPT4ge1xyXG4gICAgICAgICBpZihpbWdSZWYuY3VycmVudCl7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlYWN0ID0gaW1nUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgIHJldHVybiByZWFjdC50b3AgPj0gMCAmJiByZWFjdC5ib3R0b20gPD0gd2luZG93LmlubmVySGVpZ2h0XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2Nyb2xsSGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgICBzZXRJblZpZXcoKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gaXNJblZpZXcoKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiBcclxuICAgIHJldHVybiA8PlxyXG4gICAgIDxpbWcgc3JjPXtpblZpZXcgPyBwcmltYXJ5IDogc2Vjb25kYXJ5fSB3aWR0aD1cIjIwMFwiIGhlaWdodD1cIjIwMFwiIHJlZj17aW1nUmVmfS8+XHJcbiAgICAgPC8+XHJcbn1cclxuXHJcbmV4cG9ydCB7T25QYWdlU2Nyb2xsfSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=