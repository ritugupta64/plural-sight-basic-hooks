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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("img", {
    src: "/images/img-1.jpg",
    width: "200",
    height: "200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 6
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 6
    }
  }), __jsx("img", {
    src: "/images/img-2.jpg",
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
    src: "/images/img-3.jpg",
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
    src: "/images/img-4.jpg",
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
    src: "/images/img-1.jpg",
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
  }));
};

_s(onPageScroll, "OD7bBpZva5O2jO+Puf00hKivP7c=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9vbi1wYWdlLXNjcm9sbC5qcyJdLCJuYW1lcyI6WyJvblBhZ2VTY3JvbGwiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsSGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUdBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFBQTs7QUFFdkJDLHlEQUFTLENBQUMsWUFBTTtBQUNaQyxVQUFNLENBQUNDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDQyxhQUFsQztBQUNBLFdBQU0sWUFBTTtBQUNSLGFBQU9GLE1BQU0sQ0FBQ0csbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNELGFBQXJDLENBQVA7QUFDSCxLQUZEO0FBR0gsR0FMUSxDQUFUO0FBT0EsU0FBTyxtRUFDTjtBQUFLLE9BQUcsRUFBQyxtQkFBVDtBQUE2QixTQUFLLEVBQUMsS0FBbkM7QUFBeUMsVUFBTSxFQUFDLEtBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFETSxFQUVOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGTSxFQUdOO0FBQUssT0FBRyxFQUFDLG1CQUFUO0FBQTZCLFNBQUssRUFBQyxLQUFuQztBQUF5QyxVQUFNLEVBQUMsS0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhNLEVBSU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpNLEVBS047QUFBSyxPQUFHLEVBQUMsbUJBQVQ7QUFBNkIsU0FBSyxFQUFDLEtBQW5DO0FBQXlDLFVBQU0sRUFBQyxLQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTE0sRUFNTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTk0sRUFPTjtBQUFLLE9BQUcsRUFBQyxtQkFBVDtBQUE2QixTQUFLLEVBQUMsS0FBbkM7QUFBeUMsVUFBTSxFQUFDLEtBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQTSxFQVFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSTSxFQVNOO0FBQUssT0FBRyxFQUFDLG1CQUFUO0FBQTZCLFNBQUssRUFBQyxLQUFuQztBQUF5QyxVQUFNLEVBQUMsS0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRNLEVBVU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZNLEVBV047QUFBSyxPQUFHLEVBQUMsbUJBQVQ7QUFBNkIsU0FBSyxFQUFDLEtBQW5DO0FBQXlDLFVBQU0sRUFBQyxLQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWE0sRUFZTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWk0sRUFhTjtBQUFLLE9BQUcsRUFBQyxtQkFBVDtBQUE2QixTQUFLLEVBQUMsS0FBbkM7QUFBeUMsVUFBTSxFQUFDLEtBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFiTSxFQWNOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFkTSxFQWVOO0FBQUssT0FBRyxFQUFDLG1CQUFUO0FBQTZCLFNBQUssRUFBQyxLQUFuQztBQUF5QyxVQUFNLEVBQUMsS0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWZNLEVBZ0JOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFoQk0sQ0FBUDtBQWtCSCxDQTNCRDs7R0FBTUosWTs7QUE2QlNBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxvbi1wYWdlLXNjcm9sbC5qcy4yZTg1Y2M3NDUxODI0NGFmYzg2NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuY29uc3Qgb25QYWdlU2Nyb2xsID0gKCkgPT4ge1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbEhhbmRsZXIpO1xyXG4gICAgICAgIHJldHVybigpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxIYW5kbGVyKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIDw+XHJcbiAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ltZy0xLmpwZ1wiIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCIvPlxyXG4gICAgIDxici8+XHJcbiAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ltZy0yLmpwZ1wiIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCIvPlxyXG4gICAgIDxici8+XHJcbiAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ltZy0zLmpwZ1wiIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCIvPlxyXG4gICAgIDxici8+XHJcbiAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ltZy00LmpwZ1wiIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCIvPlxyXG4gICAgIDxici8+XHJcbiAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ltZy0xLmpwZ1wiIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCIvPlxyXG4gICAgIDxici8+XHJcbiAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ltZy0yLmpwZ1wiIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCIvPlxyXG4gICAgIDxici8+XHJcbiAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ltZy0zLmpwZ1wiIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCIvPlxyXG4gICAgIDxici8+XHJcbiAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ltZy00LmpwZ1wiIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCIvPlxyXG4gICAgIDxici8+XHJcbiAgICA8Lz5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgb25QYWdlU2Nyb2xsIl0sInNvdXJjZVJvb3QiOiIifQ==