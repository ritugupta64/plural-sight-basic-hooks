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

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.addEventListener('scroll', scrollHandler);
    return function () {
      return window.removeEventListener('scroll', scrollHandler);
    };
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      inView = _useState[0],
      setInView = _useState[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("img", {
    src: "/images/img-1.jpg",
    width: "200",
    height: "200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 6
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 6
    }
  }), __jsx("img", {
    src: "/images/img-2.jpg",
    width: "200",
    height: "200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 6
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 6
    }
  }), __jsx("img", {
    src: "/images/img-3.jpg",
    width: "200",
    height: "200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 6
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 6
    }
  }), __jsx("img", {
    src: "/images/img-4.jpg",
    width: "200",
    height: "200",
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
    src: "/images/img-1.jpg",
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
    src: "/images/img-2.jpg",
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
    src: "/images/img-3.jpg",
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
    src: "/images/img-4.jpg",
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
  }));
};

_s(onPageScroll, "8d9ciq4fE/i6fU7R4gdbteRn888=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9vbi1wYWdlLXNjcm9sbC5qcyJdLCJuYW1lcyI6WyJvblBhZ2VTY3JvbGwiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsSGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ1c2VTdGF0ZSIsImluVmlldyIsInNldEluVmlldyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBR0EsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBOztBQUV2QkMseURBQVMsQ0FBQyxZQUFNO0FBQ1pDLFVBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NDLGFBQWxDO0FBQ0EsV0FBTSxZQUFNO0FBQ1IsYUFBT0YsTUFBTSxDQUFDRyxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ0QsYUFBckMsQ0FBUDtBQUNILEtBRkQ7QUFHSCxHQUxRLENBQVQ7O0FBRnVCLGtCQVNLRSxzREFBUSxDQUFDLEtBQUQsQ0FUYjtBQUFBLE1BU2hCQyxNQVRnQjtBQUFBLE1BU1JDLFNBVFE7O0FBV3ZCLFNBQU8sbUVBQ047QUFBSyxPQUFHLEVBQUMsbUJBQVQ7QUFBNkIsU0FBSyxFQUFDLEtBQW5DO0FBQXlDLFVBQU0sRUFBQyxLQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRE0sRUFFTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRk0sRUFHTjtBQUFLLE9BQUcsRUFBQyxtQkFBVDtBQUE2QixTQUFLLEVBQUMsS0FBbkM7QUFBeUMsVUFBTSxFQUFDLEtBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFITSxFQUlOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKTSxFQUtOO0FBQUssT0FBRyxFQUFDLG1CQUFUO0FBQTZCLFNBQUssRUFBQyxLQUFuQztBQUF5QyxVQUFNLEVBQUMsS0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxNLEVBTU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5NLEVBT047QUFBSyxPQUFHLEVBQUMsbUJBQVQ7QUFBNkIsU0FBSyxFQUFDLEtBQW5DO0FBQXlDLFVBQU0sRUFBQyxLQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUE0sRUFRTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUk0sRUFTTjtBQUFLLE9BQUcsRUFBQyxtQkFBVDtBQUE2QixTQUFLLEVBQUMsS0FBbkM7QUFBeUMsVUFBTSxFQUFDLEtBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFUTSxFQVVOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWTSxFQVdOO0FBQUssT0FBRyxFQUFDLG1CQUFUO0FBQTZCLFNBQUssRUFBQyxLQUFuQztBQUF5QyxVQUFNLEVBQUMsS0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhNLEVBWU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpNLEVBYU47QUFBSyxPQUFHLEVBQUMsbUJBQVQ7QUFBNkIsU0FBSyxFQUFDLEtBQW5DO0FBQXlDLFVBQU0sRUFBQyxLQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBYk0sRUFjTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZE0sRUFlTjtBQUFLLE9BQUcsRUFBQyxtQkFBVDtBQUE2QixTQUFLLEVBQUMsS0FBbkM7QUFBeUMsVUFBTSxFQUFDLEtBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFmTSxFQWdCTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaEJNLENBQVA7QUFrQkgsQ0E3QkQ7O0dBQU1SLFk7O0FBK0JTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcb24tcGFnZS1zY3JvbGwuanMuMzBiOWU5MjMwNmU2ODE2NWMyOTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5jb25zdCBvblBhZ2VTY3JvbGwgPSAoKSA9PiB7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsSGFuZGxlcik7XHJcbiAgICAgICAgcmV0dXJuKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbEhhbmRsZXIpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBbaW5WaWV3LCBzZXRJblZpZXddID0gdXNlU3RhdGUoZmFsc2UpXHJcbiBcclxuICAgIHJldHVybiA8PlxyXG4gICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pbWctMS5qcGdcIiB3aWR0aD1cIjIwMFwiIGhlaWdodD1cIjIwMFwiLz5cclxuICAgICA8YnIvPlxyXG4gICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pbWctMi5qcGdcIiB3aWR0aD1cIjIwMFwiIGhlaWdodD1cIjIwMFwiLz5cclxuICAgICA8YnIvPlxyXG4gICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pbWctMy5qcGdcIiB3aWR0aD1cIjIwMFwiIGhlaWdodD1cIjIwMFwiLz5cclxuICAgICA8YnIvPlxyXG4gICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pbWctNC5qcGdcIiB3aWR0aD1cIjIwMFwiIGhlaWdodD1cIjIwMFwiLz5cclxuICAgICA8YnIvPlxyXG4gICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pbWctMS5qcGdcIiB3aWR0aD1cIjIwMFwiIGhlaWdodD1cIjIwMFwiLz5cclxuICAgICA8YnIvPlxyXG4gICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pbWctMi5qcGdcIiB3aWR0aD1cIjIwMFwiIGhlaWdodD1cIjIwMFwiLz5cclxuICAgICA8YnIvPlxyXG4gICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pbWctMy5qcGdcIiB3aWR0aD1cIjIwMFwiIGhlaWdodD1cIjIwMFwiLz5cclxuICAgICA8YnIvPlxyXG4gICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pbWctNC5qcGdcIiB3aWR0aD1cIjIwMFwiIGhlaWdodD1cIjIwMFwiLz5cclxuICAgICA8YnIvPlxyXG4gICAgPC8+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG9uUGFnZVNjcm9sbCJdLCJzb3VyY2VSb290IjoiIn0=