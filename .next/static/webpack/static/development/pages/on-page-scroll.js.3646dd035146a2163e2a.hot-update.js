webpackHotUpdate("static\\development\\pages\\on-page-scroll.js",{

/***/ "./pages/on-page-scroll.js":
/*!*********************************!*\
  !*** ./pages/on-page-scroll.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\ritgupta5\\pov\\plural-sight-basic-hooks\\pages\\on-page-scroll.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var onPageScroll = function onPageScroll() {
  _s();

  var imgRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.addEventListener('scroll', scrollHandler);
    return function () {
      return window.removeEventListener('scroll', scrollHandler);
    };
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      inView = _useState[0],
      setInView = _useState[1];

  var isInView = function isInView() {
    return {};
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("img", {
    src: "/images/img-1.jpg",
    width: "200",
    height: "200",
    ref: imgRef,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 6
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 6
    }
  }), __jsx("img", {
    src: "/images/img-2.jpg",
    width: "200",
    height: "200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 6
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 6
    }
  }), __jsx("img", {
    src: "/images/img-3.jpg",
    width: "200",
    height: "200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 6
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 6
    }
  }), __jsx("img", {
    src: "/images/img-4.jpg",
    width: "200",
    height: "200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 6
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 6
    }
  }), __jsx("img", {
    src: "/images/img-1.jpg",
    width: "200",
    height: "200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 6
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 6
    }
  }), __jsx("img", {
    src: "/images/img-2.jpg",
    width: "200",
    height: "200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 6
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 6
    }
  }), __jsx("img", {
    src: "/images/img-3.jpg",
    width: "200",
    height: "200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 6
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 6
    }
  }), __jsx("img", {
    src: "/images/img-4.jpg",
    width: "200",
    height: "200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 6
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 6
    }
  }));
};

_s(onPageScroll, "pPtXsvG91j2Z3c25lC/eAVbkzMw=");

/* harmony default export */ __webpack_exports__["default"] = (onPageScroll);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9vbi1wYWdlLXNjcm9sbC5qcyJdLCJuYW1lcyI6WyJvblBhZ2VTY3JvbGwiLCJpbWdSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsSGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ1c2VTdGF0ZSIsImluVmlldyIsInNldEluVmlldyIsImlzSW5WaWV3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFHQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUE7O0FBQ3hCLE1BQU1DLE1BQU0sR0FBR0Msb0RBQU0sRUFBckI7QUFDQ0MseURBQVMsQ0FBQyxZQUFNO0FBQ1pDLFVBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NDLGFBQWxDO0FBQ0EsV0FBTSxZQUFNO0FBQ1IsYUFBT0YsTUFBTSxDQUFDRyxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ0QsYUFBckMsQ0FBUDtBQUNILEtBRkQ7QUFHSCxHQUxRLENBQVQ7O0FBRnVCLGtCQVNLRSxzREFBUSxDQUFDLEtBQUQsQ0FUYjtBQUFBLE1BU2hCQyxNQVRnQjtBQUFBLE1BU1JDLFNBVFE7O0FBV3ZCLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDbkIsV0FBTyxFQUFQO0FBR0gsR0FKRDs7QUFNQSxTQUFPLG1FQUNOO0FBQUssT0FBRyxFQUFDLG1CQUFUO0FBQTZCLFNBQUssRUFBQyxLQUFuQztBQUF5QyxVQUFNLEVBQUMsS0FBaEQ7QUFBc0QsT0FBRyxFQUFFVixNQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRE0sRUFFTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRk0sRUFHTjtBQUFLLE9BQUcsRUFBQyxtQkFBVDtBQUE2QixTQUFLLEVBQUMsS0FBbkM7QUFBeUMsVUFBTSxFQUFDLEtBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFITSxFQUlOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKTSxFQUtOO0FBQUssT0FBRyxFQUFDLG1CQUFUO0FBQTZCLFNBQUssRUFBQyxLQUFuQztBQUF5QyxVQUFNLEVBQUMsS0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxNLEVBTU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5NLEVBT047QUFBSyxPQUFHLEVBQUMsbUJBQVQ7QUFBNkIsU0FBSyxFQUFDLEtBQW5DO0FBQXlDLFVBQU0sRUFBQyxLQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUE0sRUFRTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUk0sRUFTTjtBQUFLLE9BQUcsRUFBQyxtQkFBVDtBQUE2QixTQUFLLEVBQUMsS0FBbkM7QUFBeUMsVUFBTSxFQUFDLEtBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFUTSxFQVVOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWTSxFQVdOO0FBQUssT0FBRyxFQUFDLG1CQUFUO0FBQTZCLFNBQUssRUFBQyxLQUFuQztBQUF5QyxVQUFNLEVBQUMsS0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhNLEVBWU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpNLEVBYU47QUFBSyxPQUFHLEVBQUMsbUJBQVQ7QUFBNkIsU0FBSyxFQUFDLEtBQW5DO0FBQXlDLFVBQU0sRUFBQyxLQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBYk0sRUFjTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZE0sRUFlTjtBQUFLLE9BQUcsRUFBQyxtQkFBVDtBQUE2QixTQUFLLEVBQUMsS0FBbkM7QUFBeUMsVUFBTSxFQUFDLEtBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFmTSxFQWdCTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaEJNLENBQVA7QUFrQkgsQ0FuQ0Q7O0dBQU1ELFk7O0FBcUNTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcb24tcGFnZS1zY3JvbGwuanMuMzY0NmRkMDM1MTQ2YTIxNjNlMmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZn0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmNvbnN0IG9uUGFnZVNjcm9sbCA9ICgpID0+IHtcclxuICAgY29uc3QgaW1nUmVmID0gdXNlUmVmKClcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbEhhbmRsZXIpO1xyXG4gICAgICAgIHJldHVybigpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxIYW5kbGVyKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgW2luVmlldywgc2V0SW5WaWV3XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IGlzSW5WaWV3ID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuIFxyXG4gICAgcmV0dXJuIDw+XHJcbiAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ltZy0xLmpwZ1wiIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCIgcmVmPXtpbWdSZWZ9Lz5cclxuICAgICA8YnIvPlxyXG4gICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pbWctMi5qcGdcIiB3aWR0aD1cIjIwMFwiIGhlaWdodD1cIjIwMFwiLz5cclxuICAgICA8YnIvPlxyXG4gICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pbWctMy5qcGdcIiB3aWR0aD1cIjIwMFwiIGhlaWdodD1cIjIwMFwiLz5cclxuICAgICA8YnIvPlxyXG4gICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pbWctNC5qcGdcIiB3aWR0aD1cIjIwMFwiIGhlaWdodD1cIjIwMFwiLz5cclxuICAgICA8YnIvPlxyXG4gICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pbWctMS5qcGdcIiB3aWR0aD1cIjIwMFwiIGhlaWdodD1cIjIwMFwiLz5cclxuICAgICA8YnIvPlxyXG4gICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pbWctMi5qcGdcIiB3aWR0aD1cIjIwMFwiIGhlaWdodD1cIjIwMFwiLz5cclxuICAgICA8YnIvPlxyXG4gICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pbWctMy5qcGdcIiB3aWR0aD1cIjIwMFwiIGhlaWdodD1cIjIwMFwiLz5cclxuICAgICA8YnIvPlxyXG4gICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pbWctNC5qcGdcIiB3aWR0aD1cIjIwMFwiIGhlaWdodD1cIjIwMFwiLz5cclxuICAgICA8YnIvPlxyXG4gICAgPC8+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG9uUGFnZVNjcm9sbCJdLCJzb3VyY2VSb290IjoiIn0=