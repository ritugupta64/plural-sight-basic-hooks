webpackHotUpdate("static\\development\\pages\\input-with-history.js",{

/***/ "./pages/input-with-history.js":
/*!*************************************!*\
  !*** ./pages/input-with-history.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\ritgupta5\\pov\\plural-sight-basic-hooks\\pages\\input-with-history.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function HomePage() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      inputState = _useState[0],
      setInputState = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      history = _useState2[0],
      setHistory = _useState2[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, "Input with its history"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("input", {
    type: "text",
    onChange: function onChange(e) {
      setInputState(e.target.value);
      setHistory(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(history), e.target.value);
    },
    value: inputState,
    name: "firstName",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, "First Name:", inputState, __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 37
    }
  })), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 8
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 8
    }
  }, history.map(function (itm) {
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }
    }, itm);
  }))));
}

_s(HomePage, "ugO92Soz9xUHiDmI7MhT4ufsPVM=");

_c = HomePage;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbnB1dC13aXRoLWhpc3RvcnkuanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJ1c2VTdGF0ZSIsImlucHV0U3RhdGUiLCJzZXRJbnB1dFN0YXRlIiwiaGlzdG9yeSIsInNldEhpc3RvcnkiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJpdG0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUFBOztBQUFBLGtCQUNrQkMsc0RBQVEsQ0FBQyxFQUFELENBRDFCO0FBQUEsTUFDWEMsVUFEVztBQUFBLE1BQ0NDLGFBREQ7O0FBQUEsbUJBR1lGLHNEQUFRLENBQUMsRUFBRCxDQUhwQjtBQUFBLE1BR1hHLE9BSFc7QUFBQSxNQUdGQyxVQUhFOztBQUtsQixTQUNFLG1FQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBREEsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxRQUFJLEVBQUMsTUFEUDtBQUVFLFlBQVEsRUFBRSxrQkFBQ0MsQ0FBRCxFQUFPO0FBQ2ZILG1CQUFhLENBQUNHLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWI7QUFDQUgsZ0JBQVUsQ0FBQyw2RkFBSUQsT0FBTCxHQUFlRSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBeEIsQ0FBVjtBQUNELEtBTEg7QUFNRSxTQUFLLEVBQUVOLFVBTlQ7QUFPRSxRQUFJLEVBQUMsV0FQUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFVRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFpQkEsVUFBakIsRUFBNEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUE1QixDQVZGLEVBV0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhGLEVBWUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpELEVBYUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVHRSxPQUFPLENBQUNLLEdBQVIsQ0FBWSxVQUFBQyxHQUFHLEVBQUk7QUFDbkIsV0FBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQU1BLEdBQU4sQ0FBTjtBQUNDLEdBRkQsQ0FGSCxDQWJELENBSkYsQ0FERjtBQTZCRDs7R0FsQ1FWLFE7O0tBQUFBLFE7QUFvQ01BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbnB1dC13aXRoLWhpc3RvcnkuanMuYWMwYjQ2ODg0NGMxNzdiM2JkNzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XHJcbiAgY29uc3QgW2lucHV0U3RhdGUsIHNldElucHV0U3RhdGVdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBbaGlzdG9yeSwgc2V0SGlzdG9yeV0gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8aDE+SW5wdXQgd2l0aCBpdHMgaGlzdG9yeTwvaDE+XHJcbiAgICAgIHsvKiA8aW5wdXQgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW5wdXRTdGF0ZShlLnRhcmdldC52YWx1ZSl9IC8+ICovfVxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldElucHV0U3RhdGUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICBzZXRIaXN0b3J5KFsuLi5oaXN0b3J5XSwgZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgdmFsdWU9e2lucHV0U3RhdGV9XHJcbiAgICAgICAgICBuYW1lPVwiZmlyc3ROYW1lXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXY+Rmlyc3QgTmFtZTp7aW5wdXRTdGF0ZX08YnIvPjwvZGl2PlxyXG4gICAgICAgIDxoci8+XHJcbiAgICAgICA8aHIvPlxyXG4gICAgICAgPGRpdj5cclxuICAgICAgIHtcclxuICAgICAgICAgIGhpc3RvcnkubWFwKGl0bSA9PiB7XHJcbiAgICAgICAgICByZXR1cm48ZGl2PntpdG19PC9kaXY+XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICBcclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9