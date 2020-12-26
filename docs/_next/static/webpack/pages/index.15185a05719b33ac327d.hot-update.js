webpackHotUpdate_N_E("pages/index",{

/***/ "./src/problems.js":
/*!*************************!*\
  !*** ./src/problems.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Problems; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_problems_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/problems.json */ \"./data/problems.json\");\nvar _data_problems_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/problems.json */ \"./data/problems.json\", 1);\n\n\n\nvar _jsxFileName = \"/home/william/src/aoc-syllabus/src/problems.js\",\n    _s = $RefreshSig$();\n\n\n\n\nvar problems = _data_problems_json__WEBPACK_IMPORTED_MODULE_3__;\nfunction Problems() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      filterInput = _useState[0],\n      setFilterInput = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"Year\"),\n      sortKey = _useState2[0],\n      setSortKey = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true),\n      ascending = _useState3[0],\n      setAscending = _useState3[1];\n\n  var filtered = problems.filter(function (problem) {\n    return problem.Title.toLowerCase().includes(filterInput.toLowerCase());\n  }).sort(function (p1, p2) {\n    var cmp = p1[sortKey] - p2[sortKey];\n    console.log(p1[sortKey] < p2[sortKey]);\n    return (ascending ? 1 : -1) * (p1[sortKey] > p2[sortKey]);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.description,\n      children: \"List of Advent of Code problems, filterable by title, year, topics etc.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n      children: [\"Filter: \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"text\",\n        value: filterInput,\n        onChange: function onChange(x) {\n          return setFilterInput(x.target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 24\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"table\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tbody\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n          children: Object.keys(problems[0]).map(function (key) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                onClick: function onClick() {\n                  if (sortKey == key) {\n                    setAscending(!ascending);\n                  } else {\n                    setAscending(true);\n                  }\n\n                  return setSortKey(key);\n                },\n                children: key\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 28,\n                columnNumber: 64\n              }, _this)\n            }, key, false, {\n              fileName: _jsxFileName,\n              lineNumber: 28,\n              columnNumber: 50\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 9\n        }, this), filtered.map(function (problem) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n            children: Object.keys(problem).map(function (key) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n                children: problem[key]\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 39,\n                columnNumber: 50\n              }, _this);\n            })\n          }, problem.Title, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 13\n          }, _this);\n        })]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }, this), filtered.length === 0 ? \"No results\" : \"\"]\n  }, void 0, true);\n}\n\n_s(Problems, \"1k1oshqhHUkiWQqw33BavTKAnqM=\");\n\n_c = Problems;\n\nvar _c;\n\n$RefreshReg$(_c, \"Problems\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3Byb2JsZW1zLmpzPzc1MmEiXSwibmFtZXMiOlsicHJvYmxlbXMiLCJkYXRhIiwiUHJvYmxlbXMiLCJ1c2VTdGF0ZSIsImZpbHRlcklucHV0Iiwic2V0RmlsdGVySW5wdXQiLCJzb3J0S2V5Iiwic2V0U29ydEtleSIsImFzY2VuZGluZyIsInNldEFzY2VuZGluZyIsImZpbHRlcmVkIiwiZmlsdGVyIiwicHJvYmxlbSIsIlRpdGxlIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInNvcnQiLCJwMSIsInAyIiwiY21wIiwiY29uc29sZSIsImxvZyIsInN0eWxlcyIsImRlc2NyaXB0aW9uIiwieCIsInRhcmdldCIsInZhbHVlIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFFBQVEsR0FBR0MsZ0RBQWpCO0FBRWUsU0FBU0MsUUFBVCxHQUFvQjtBQUFBOztBQUFBOztBQUFBLGtCQUNPQyxzREFBUSxDQUFDLEVBQUQsQ0FEZjtBQUFBLE1BQ3hCQyxXQUR3QjtBQUFBLE1BQ1hDLGNBRFc7O0FBQUEsbUJBRURGLHNEQUFRLENBQUMsTUFBRCxDQUZQO0FBQUEsTUFFeEJHLE9BRndCO0FBQUEsTUFFZkMsVUFGZTs7QUFBQSxtQkFHR0osc0RBQVEsQ0FBQyxJQUFELENBSFg7QUFBQSxNQUd4QkssU0FId0I7QUFBQSxNQUdiQyxZQUhhOztBQUsvQixNQUFNQyxRQUFRLEdBQUdWLFFBQVEsQ0FBQ1csTUFBVCxDQUFnQixVQUFBQyxPQUFPLEVBQUk7QUFDeEMsV0FBT0EsT0FBTyxDQUFDQyxLQUFSLENBQWNDLFdBQWQsR0FBNEJDLFFBQTVCLENBQXFDWCxXQUFXLENBQUNVLFdBQVosRUFBckMsQ0FBUDtBQUNILEdBRmdCLEVBRWRFLElBRmMsQ0FFVCxVQUFDQyxFQUFELEVBQUtDLEVBQUwsRUFBWTtBQUNoQixRQUFNQyxHQUFHLEdBQUdGLEVBQUUsQ0FBQ1gsT0FBRCxDQUFGLEdBQWNZLEVBQUUsQ0FBQ1osT0FBRCxDQUE1QjtBQUNBYyxXQUFPLENBQUNDLEdBQVIsQ0FBWUosRUFBRSxDQUFDWCxPQUFELENBQUYsR0FBY1ksRUFBRSxDQUFDWixPQUFELENBQTVCO0FBQ0EsV0FBTyxDQUFDRSxTQUFTLEdBQUcsQ0FBSCxHQUFPLENBQUMsQ0FBbEIsS0FBd0JTLEVBQUUsQ0FBQ1gsT0FBRCxDQUFGLEdBQWNZLEVBQUUsQ0FBQ1osT0FBRCxDQUF4QyxDQUFQO0FBQ0gsR0FOZ0IsQ0FBakI7QUFRQSxzQkFBTztBQUFBLDRCQUNIO0FBQUcsZUFBUyxFQUFFZ0IsOERBQU0sQ0FBQ0MsV0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERyxlQUlIO0FBQUEsMENBQWU7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixhQUFLLEVBQUVuQixXQUExQjtBQUF1QyxnQkFBUSxFQUFFLGtCQUFDb0IsQ0FBRDtBQUFBLGlCQUFPbkIsY0FBYyxDQUFDbUIsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBckI7QUFBQTtBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkcsZUFLSDtBQUFBLDZCQUNBO0FBQUEsZ0NBQ0E7QUFBQSxvQkFDS0MsTUFBTSxDQUFDQyxJQUFQLENBQVk1QixRQUFRLENBQUMsQ0FBRCxDQUFwQixFQUF5QjZCLEdBQXpCLENBQTZCLFVBQUFDLEdBQUc7QUFBQSxnQ0FBSTtBQUFBLHFDQUFjO0FBQVEsdUJBQU8sRUFBRSxtQkFBTTtBQUN0RSxzQkFBSXhCLE9BQU8sSUFBSXdCLEdBQWYsRUFBb0I7QUFDaEJyQixnQ0FBWSxDQUFDLENBQUNELFNBQUYsQ0FBWjtBQUNILG1CQUZELE1BRU87QUFDSEMsZ0NBQVksQ0FBQyxJQUFELENBQVo7QUFDSDs7QUFDRCx5QkFBT0YsVUFBVSxDQUFDdUIsR0FBRCxDQUFqQjtBQUNILGlCQVBrRDtBQUFBLDBCQU8vQ0E7QUFQK0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFkLGVBQVNBLEdBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBSjtBQUFBLFdBQWhDO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEQSxFQVdDcEIsUUFBUSxDQUFDbUIsR0FBVCxDQUFhLFVBQUFqQixPQUFPO0FBQUEsOEJBQ2pCO0FBQUEsc0JBQ0tlLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZaEIsT0FBWixFQUFxQmlCLEdBQXJCLENBQXlCLFVBQUFDLEdBQUc7QUFBQSxrQ0FBSTtBQUFBLDBCQUFLbEIsT0FBTyxDQUFDa0IsR0FBRDtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQUo7QUFBQSxhQUE1QjtBQURMLGFBQVNsQixPQUFPLENBQUNDLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRGlCO0FBQUEsU0FBcEIsQ0FYRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEcsRUF3QkZILFFBQVEsQ0FBQ3FCLE1BQVQsS0FBb0IsQ0FBcEIsR0FBd0IsWUFBeEIsR0FBdUMsRUF4QnJDO0FBQUEsa0JBQVA7QUEwQkg7O0dBdkN1QjdCLFE7O0tBQUFBLFEiLCJmaWxlIjoiLi9zcmMvcHJvYmxlbXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgKiBhcyBkYXRhIGZyb20gJy4uL2RhdGEvcHJvYmxlbXMuanNvbic7XG5cbmNvbnN0IHByb2JsZW1zID0gZGF0YS5kZWZhdWx0O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9ibGVtcygpIHtcbiAgICBjb25zdCBbZmlsdGVySW5wdXQsIHNldEZpbHRlcklucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtzb3J0S2V5LCBzZXRTb3J0S2V5XSA9IHVzZVN0YXRlKFwiWWVhclwiKTtcbiAgICBjb25zdCBbYXNjZW5kaW5nLCBzZXRBc2NlbmRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgICBjb25zdCBmaWx0ZXJlZCA9IHByb2JsZW1zLmZpbHRlcihwcm9ibGVtID0+IHtcbiAgICAgICAgcmV0dXJuIHByb2JsZW0uVGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhmaWx0ZXJJbnB1dC50b0xvd2VyQ2FzZSgpKTtcbiAgICB9KS5zb3J0KChwMSwgcDIpID0+IHtcbiAgICAgICAgY29uc3QgY21wID0gcDFbc29ydEtleV0gLSBwMltzb3J0S2V5XTtcbiAgICAgICAgY29uc29sZS5sb2cocDFbc29ydEtleV0gPCBwMltzb3J0S2V5XSk7XG4gICAgICAgIHJldHVybiAoYXNjZW5kaW5nID8gMSA6IC0xKSAqIChwMVtzb3J0S2V5XSA+IHAyW3NvcnRLZXldKTtcbiAgICB9KTtcblxuICAgIHJldHVybiA8PlxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgICBMaXN0IG9mIEFkdmVudCBvZiBDb2RlIHByb2JsZW1zLCBmaWx0ZXJhYmxlIGJ5IHRpdGxlLCB5ZWFyLCB0b3BpY3MgZXRjLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxsYWJlbD5GaWx0ZXI6IDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtmaWx0ZXJJbnB1dH0gb25DaGFuZ2U9eyh4KSA9PiBzZXRGaWx0ZXJJbnB1dCh4LnRhcmdldC52YWx1ZSl9Lz48L2xhYmVsPlxuICAgICAgICA8dGFibGU+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgPHRyPlxuICAgICAgICAgICAge09iamVjdC5rZXlzKHByb2JsZW1zWzBdKS5tYXAoa2V5ID0+IDx0aCBrZXk9e2tleX0+PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHNvcnRLZXkgPT0ga2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEFzY2VuZGluZyghYXNjZW5kaW5nKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZXRBc2NlbmRpbmcodHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBzZXRTb3J0S2V5KGtleSk7XG4gICAgICAgICAgICB9fT57a2V5fTwvYnV0dG9uPjwvdGg+KX1cbiAgICAgICAgPC90cj5cbiAgICAgICAge2ZpbHRlcmVkLm1hcChwcm9ibGVtID0+IChcbiAgICAgICAgICAgIDx0ciBrZXk9e3Byb2JsZW0uVGl0bGV9PlxuICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhwcm9ibGVtKS5tYXAoa2V5ID0+IDx0ZD57cHJvYmxlbVtrZXldfTwvdGQ+KX1cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICkpfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgICB7ZmlsdGVyZWQubGVuZ3RoID09PSAwID8gXCJObyByZXN1bHRzXCIgOiBcIlwifVxuICAgIDwvPlxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/problems.js\n");

/***/ })

})