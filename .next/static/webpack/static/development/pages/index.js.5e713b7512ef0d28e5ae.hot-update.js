webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\ritgupta5\\pov\\plural-sight-basic-hooks\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



function HomePage() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    firstName: '',
    lastName: ''
  }),
      inputState = _useState[0],
      setInputState = _useState[1];

  var updateVal = function updateVal(e) {
    setInputState(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value));
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 8
    }
  }, __jsx("input", {
    type: "text",
    onChange: updateVal,
    value: inputState.firstName,
    name: "firstName",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 8
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, "First Name:", inputState.firstName)), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 8
    }
  }, __jsx("input", {
    type: "text",
    onChange: updateVal,
    value: inputState.lastName,
    name: "lastName",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 8
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, "Last Name:", inputState.lastName)));
}

_s(HomePage, "YIT/VF69FV1WuG4WMrQMsIs/prE=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJIb21lUGFnZSIsInVzZVN0YXRlIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJpbnB1dFN0YXRlIiwic2V0SW5wdXRTdGF0ZSIsInVwZGF0ZVZhbCIsImUiLCJwcmV2U3RhdGUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxRQUFULEdBQW9CO0FBQUE7O0FBQUEsa0JBQ2tCQyxzREFBUSxDQUFDO0FBQzNDQyxhQUFTLEVBQUMsRUFEaUM7QUFFM0NDLFlBQVEsRUFBQztBQUZrQyxHQUFELENBRDFCO0FBQUEsTUFDWEMsVUFEVztBQUFBLE1BQ0NDLGFBREQ7O0FBTWxCLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLENBQUQsRUFBTztBQUN2QkYsaUJBQWEsQ0FBQyxVQUFBRyxTQUFTO0FBQUEsNkNBQ2xCQSxTQURrQixxR0FFcEJELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxJQUZXLEVBRUxILENBQUMsQ0FBQ0UsTUFBRixDQUFTRSxLQUZKO0FBQUEsS0FBVixDQUFiO0FBSUQsR0FMRDs7QUFNQSxTQUFPLG1FQUdGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQ0MsWUFBUSxFQUFFTCxTQURYO0FBQ3NCLFNBQUssRUFBRUYsVUFBVSxDQUFDRixTQUR4QztBQUNtRCxRQUFJLEVBQUMsV0FEeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURBLEVBR0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBa0JFLFVBQVUsQ0FBQ0YsU0FBN0IsQ0FIRCxDQUhFLEVBUUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFDQyxZQUFRLEVBQUVJLFNBRFg7QUFDdUIsU0FBSyxFQUFFRixVQUFVLENBQUNELFFBRHpDO0FBQ21ELFFBQUksRUFBQyxVQUR4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREEsRUFHQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFpQkMsVUFBVSxDQUFDRCxRQUE1QixDQUhELENBUkUsQ0FBUDtBQWNEOztHQTFCUUgsUTs7S0FBQUEsUTtBQTRCTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjVlNzEzYjc1MTJlZjBkMjhlNWFlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIEhvbWVQYWdlKCkge1xyXG4gIGNvbnN0IFtpbnB1dFN0YXRlLCBzZXRJbnB1dFN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgIGZpcnN0TmFtZTonJyxcclxuICAgIGxhc3ROYW1lOicnXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgdXBkYXRlVmFsID0gKGUpID0+IHtcclxuICAgIHNldElucHV0U3RhdGUocHJldlN0YXRlID0+ICh7XHJcbiAgICAgIC4uLnByZXZTdGF0ZSxcclxuICAgICAgW2UudGFyZ2V0Lm5hbWVdOmUudGFyZ2V0LnZhbHVlXHJcbiAgICB9KSlcclxuICB9XHJcbiAgcmV0dXJuIDw+XHJcbiAgey8qIDxpbnB1dCB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJbnB1dFN0YXRlKGUudGFyZ2V0LnZhbHVlKX0gLz4gKi99XHJcbiAgICAgICA8ZGl2PlxyXG4gICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICBvbkNoYW5nZT17dXBkYXRlVmFsfSB2YWx1ZT17aW5wdXRTdGF0ZS5maXJzdE5hbWV9IG5hbWU9XCJmaXJzdE5hbWVcIiAvPlxyXG4gICAgICAgIDxzcGFuPkZpcnN0IE5hbWU6e2lucHV0U3RhdGUuZmlyc3ROYW1lfTwvc3Bhbj5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgICAgPGRpdj5cclxuICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZVZhbH0gIHZhbHVlPXtpbnB1dFN0YXRlLmxhc3ROYW1lfSBuYW1lPVwibGFzdE5hbWVcIiAvPlxyXG4gICAgICAgIDxzcGFuPkxhc3QgTmFtZTp7aW5wdXRTdGF0ZS5sYXN0TmFtZX08L3NwYW4+XHJcbiAgICAgICA8L2Rpdj5cclxuICA8Lz47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9