webpackHotUpdate_N_E("pages/index",{

/***/ "./src/problems.js":
/*!*************************!*\
  !*** ./src/problems.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Problems; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_problems_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/problems.json */ \"./data/problems.json\");\nvar _data_problems_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/problems.json */ \"./data/problems.json\", 1);\n\n\n\nvar _jsxFileName = \"/home/william/src/aoc-syllabus/src/problems.js\",\n    _s = $RefreshSig$();\n\n\n\n\nvar problems = _data_problems_json__WEBPACK_IMPORTED_MODULE_3__;\nfunction Problems() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      filterInput = _useState[0],\n      setFilterInput = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"Year\"),\n      sortKey = _useState2[0],\n      setSortKey = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true),\n      ascending = _useState3[0],\n      setAscending = _useState3[1];\n\n  var filtered = problems.filter(function (problem) {\n    return problem.Title.toLowerCase().includes(filterInput.toLowerCase());\n  }).sort(function (p1, p2) {\n    var cmp = p1[sortKey] - p2[sortKey];\n    var cmp2 = p1[sortKey].localeCompare(p2[sortKey]);\n    return (ascending ? 1 : -1) * (!isNaN(cmp) ? cmp : 2 * p1[sortKey].localeCompare(p2[sortKey]) - 1);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.description,\n      children: \"List of Advent of Code problems, filterable by title, year, topics etc.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n      children: [\"Filter: \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"text\",\n        value: filterInput,\n        onChange: function onChange(x) {\n          return setFilterInput(x.target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 24\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"table\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tbody\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n          children: Object.keys(problems[0]).map(function (key) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                onClick: function onClick() {\n                  if (sortKey == key) {\n                    setAscending(!ascending);\n                  } else {\n                    setAscending(true);\n                  }\n\n                  return setSortKey(key);\n                },\n                children: key\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 28,\n                columnNumber: 64\n              }, _this)\n            }, key, false, {\n              fileName: _jsxFileName,\n              lineNumber: 28,\n              columnNumber: 50\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 9\n        }, this), filtered.map(function (problem) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n            children: Object.keys(problem).map(function (key) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n                children: problem[key]\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 39,\n                columnNumber: 50\n              }, _this);\n            })\n          }, problem.Title, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 13\n          }, _this);\n        })]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }, this), filtered.length === 0 ? \"No results\" : \"\"]\n  }, void 0, true);\n}\n\n_s(Problems, \"1k1oshqhHUkiWQqw33BavTKAnqM=\");\n\n_c = Problems;\n\nvar _c;\n\n$RefreshReg$(_c, \"Problems\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3Byb2JsZW1zLmpzPzc1MmEiXSwibmFtZXMiOlsicHJvYmxlbXMiLCJkYXRhIiwiUHJvYmxlbXMiLCJ1c2VTdGF0ZSIsImZpbHRlcklucHV0Iiwic2V0RmlsdGVySW5wdXQiLCJzb3J0S2V5Iiwic2V0U29ydEtleSIsImFzY2VuZGluZyIsInNldEFzY2VuZGluZyIsImZpbHRlcmVkIiwiZmlsdGVyIiwicHJvYmxlbSIsIlRpdGxlIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInNvcnQiLCJwMSIsInAyIiwiY21wIiwiY21wMiIsImxvY2FsZUNvbXBhcmUiLCJpc05hTiIsInN0eWxlcyIsImRlc2NyaXB0aW9uIiwieCIsInRhcmdldCIsInZhbHVlIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFFBQVEsR0FBR0MsZ0RBQWpCO0FBRWUsU0FBU0MsUUFBVCxHQUFvQjtBQUFBOztBQUFBOztBQUFBLGtCQUNPQyxzREFBUSxDQUFDLEVBQUQsQ0FEZjtBQUFBLE1BQ3hCQyxXQUR3QjtBQUFBLE1BQ1hDLGNBRFc7O0FBQUEsbUJBRURGLHNEQUFRLENBQUMsTUFBRCxDQUZQO0FBQUEsTUFFeEJHLE9BRndCO0FBQUEsTUFFZkMsVUFGZTs7QUFBQSxtQkFHR0osc0RBQVEsQ0FBQyxJQUFELENBSFg7QUFBQSxNQUd4QkssU0FId0I7QUFBQSxNQUdiQyxZQUhhOztBQUsvQixNQUFNQyxRQUFRLEdBQUdWLFFBQVEsQ0FBQ1csTUFBVCxDQUFnQixVQUFBQyxPQUFPLEVBQUk7QUFDeEMsV0FBT0EsT0FBTyxDQUFDQyxLQUFSLENBQWNDLFdBQWQsR0FBNEJDLFFBQTVCLENBQXFDWCxXQUFXLENBQUNVLFdBQVosRUFBckMsQ0FBUDtBQUNILEdBRmdCLEVBRWRFLElBRmMsQ0FFVCxVQUFDQyxFQUFELEVBQUtDLEVBQUwsRUFBWTtBQUNoQixRQUFNQyxHQUFHLEdBQUdGLEVBQUUsQ0FBQ1gsT0FBRCxDQUFGLEdBQWNZLEVBQUUsQ0FBQ1osT0FBRCxDQUE1QjtBQUNBLFFBQU1jLElBQUksR0FBR0gsRUFBRSxDQUFDWCxPQUFELENBQUYsQ0FBWWUsYUFBWixDQUEwQkgsRUFBRSxDQUFDWixPQUFELENBQTVCLENBQWI7QUFDQSxXQUFPLENBQUNFLFNBQVMsR0FBRyxDQUFILEdBQU8sQ0FBQyxDQUFsQixLQUF3QixDQUFDYyxLQUFLLENBQUNILEdBQUQsQ0FBTixHQUFjQSxHQUFkLEdBQXFCLElBQUlGLEVBQUUsQ0FBQ1gsT0FBRCxDQUFGLENBQVllLGFBQVosQ0FBMEJILEVBQUUsQ0FBQ1osT0FBRCxDQUE1QixDQUFKLEdBQTZDLENBQTFGLENBQVA7QUFDSCxHQU5nQixDQUFqQjtBQVFBLHNCQUFPO0FBQUEsNEJBQ0g7QUFBRyxlQUFTLEVBQUVpQiw4REFBTSxDQUFDQyxXQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURHLGVBSUg7QUFBQSwwQ0FBZTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLGFBQUssRUFBRXBCLFdBQTFCO0FBQXVDLGdCQUFRLEVBQUUsa0JBQUNxQixDQUFEO0FBQUEsaUJBQU9wQixjQUFjLENBQUNvQixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFyQjtBQUFBO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRyxlQUtIO0FBQUEsNkJBQ0E7QUFBQSxnQ0FDQTtBQUFBLG9CQUNLQyxNQUFNLENBQUNDLElBQVAsQ0FBWTdCLFFBQVEsQ0FBQyxDQUFELENBQXBCLEVBQXlCOEIsR0FBekIsQ0FBNkIsVUFBQUMsR0FBRztBQUFBLGdDQUFJO0FBQUEscUNBQWM7QUFBUSx1QkFBTyxFQUFFLG1CQUFNO0FBQ3RFLHNCQUFJekIsT0FBTyxJQUFJeUIsR0FBZixFQUFvQjtBQUNoQnRCLGdDQUFZLENBQUMsQ0FBQ0QsU0FBRixDQUFaO0FBQ0gsbUJBRkQsTUFFTztBQUNIQyxnQ0FBWSxDQUFDLElBQUQsQ0FBWjtBQUNIOztBQUNELHlCQUFPRixVQUFVLENBQUN3QixHQUFELENBQWpCO0FBQ0gsaUJBUGtEO0FBQUEsMEJBTy9DQTtBQVArQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWQsZUFBU0EsR0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFKO0FBQUEsV0FBaEM7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURBLEVBV0NyQixRQUFRLENBQUNvQixHQUFULENBQWEsVUFBQWxCLE9BQU87QUFBQSw4QkFDakI7QUFBQSxzQkFDS2dCLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZakIsT0FBWixFQUFxQmtCLEdBQXJCLENBQXlCLFVBQUFDLEdBQUc7QUFBQSxrQ0FBSTtBQUFBLDBCQUFLbkIsT0FBTyxDQUFDbUIsR0FBRDtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQUo7QUFBQSxhQUE1QjtBQURMLGFBQVNuQixPQUFPLENBQUNDLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRGlCO0FBQUEsU0FBcEIsQ0FYRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEcsRUF3QkZILFFBQVEsQ0FBQ3NCLE1BQVQsS0FBb0IsQ0FBcEIsR0FBd0IsWUFBeEIsR0FBdUMsRUF4QnJDO0FBQUEsa0JBQVA7QUEwQkg7O0dBdkN1QjlCLFE7O0tBQUFBLFEiLCJmaWxlIjoiLi9zcmMvcHJvYmxlbXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgKiBhcyBkYXRhIGZyb20gJy4uL2RhdGEvcHJvYmxlbXMuanNvbic7XG5cbmNvbnN0IHByb2JsZW1zID0gZGF0YS5kZWZhdWx0O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9ibGVtcygpIHtcbiAgICBjb25zdCBbZmlsdGVySW5wdXQsIHNldEZpbHRlcklucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtzb3J0S2V5LCBzZXRTb3J0S2V5XSA9IHVzZVN0YXRlKFwiWWVhclwiKTtcbiAgICBjb25zdCBbYXNjZW5kaW5nLCBzZXRBc2NlbmRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgICBjb25zdCBmaWx0ZXJlZCA9IHByb2JsZW1zLmZpbHRlcihwcm9ibGVtID0+IHtcbiAgICAgICAgcmV0dXJuIHByb2JsZW0uVGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhmaWx0ZXJJbnB1dC50b0xvd2VyQ2FzZSgpKTtcbiAgICB9KS5zb3J0KChwMSwgcDIpID0+IHtcbiAgICAgICAgY29uc3QgY21wID0gcDFbc29ydEtleV0gLSBwMltzb3J0S2V5XTtcbiAgICAgICAgY29uc3QgY21wMiA9IHAxW3NvcnRLZXldLmxvY2FsZUNvbXBhcmUocDJbc29ydEtleV0pO1xuICAgICAgICByZXR1cm4gKGFzY2VuZGluZyA/IDEgOiAtMSkgKiAoIWlzTmFOKGNtcCkgPyBjbXAgOiAoMiAqIHAxW3NvcnRLZXldLmxvY2FsZUNvbXBhcmUocDJbc29ydEtleV0pIC0gMSkpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICAgIExpc3Qgb2YgQWR2ZW50IG9mIENvZGUgcHJvYmxlbXMsIGZpbHRlcmFibGUgYnkgdGl0bGUsIHllYXIsIHRvcGljcyBldGMuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPGxhYmVsPkZpbHRlcjogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2ZpbHRlcklucHV0fSBvbkNoYW5nZT17KHgpID0+IHNldEZpbHRlcklucHV0KHgudGFyZ2V0LnZhbHVlKX0vPjwvbGFiZWw+XG4gICAgICAgIDx0YWJsZT5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICA8dHI+XG4gICAgICAgICAgICB7T2JqZWN0LmtleXMocHJvYmxlbXNbMF0pLm1hcChrZXkgPT4gPHRoIGtleT17a2V5fT48YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc29ydEtleSA9PSBrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0QXNjZW5kaW5nKCFhc2NlbmRpbmcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEFzY2VuZGluZyh0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldFNvcnRLZXkoa2V5KTtcbiAgICAgICAgICAgIH19PntrZXl9PC9idXR0b24+PC90aD4pfVxuICAgICAgICA8L3RyPlxuICAgICAgICB7ZmlsdGVyZWQubWFwKHByb2JsZW0gPT4gKFxuICAgICAgICAgICAgPHRyIGtleT17cHJvYmxlbS5UaXRsZX0+XG4gICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHByb2JsZW0pLm1hcChrZXkgPT4gPHRkPntwcm9ibGVtW2tleV19PC90ZD4pfVxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgKSl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICAgIHtmaWx0ZXJlZC5sZW5ndGggPT09IDAgPyBcIk5vIHJlc3VsdHNcIiA6IFwiXCJ9XG4gICAgPC8+XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/problems.js\n");

/***/ })

})