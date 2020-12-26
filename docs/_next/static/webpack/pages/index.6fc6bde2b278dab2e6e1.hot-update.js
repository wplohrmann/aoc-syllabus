webpackHotUpdate_N_E("pages/index",{

/***/ "./src/problems.js":
/*!*************************!*\
  !*** ./src/problems.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Problems; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_problems_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/problems.json */ \"./data/problems.json\");\nvar _data_problems_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/problems.json */ \"./data/problems.json\", 1);\n\n\n\nvar _jsxFileName = \"/home/william/src/aoc-syllabus/src/problems.js\",\n    _s = $RefreshSig$();\n\n\n\n\nvar problems = _data_problems_json__WEBPACK_IMPORTED_MODULE_3__;\nfunction Problems() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      filterInput = _useState[0],\n      setFilterInput = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"Year\"),\n      sortKey = _useState2[0],\n      setSortKey = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true),\n      ascending = _useState3[0],\n      setAscending = _useState3[1];\n\n  var filtered = problems.filter(function (problem) {\n    return problem.Title.toLowerCase().includes(filterInput.toLowerCase());\n  }).sort(function (p1, p2) {\n    var cmp = p1[sortKey] - p2[sortKey];\n    console.log(p1[sortKey] < p2[sortKey]);\n    return (ascending ? 1 : -1) * (cmp !== NaN ? cmp : 2 * p1[sortKey].localeCompare(p2[sortKey]) - 1);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.description,\n      children: \"List of Advent of Code problems, filterable by title, year, topics etc.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n      children: [\"Filter: \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"text\",\n        value: filterInput,\n        onChange: function onChange(x) {\n          return setFilterInput(x.target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 24\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"table\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tbody\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n          children: Object.keys(problems[0]).map(function (key) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                onClick: function onClick() {\n                  if (sortKey == key) {\n                    setAscending(!ascending);\n                  } else {\n                    setAscending(true);\n                  }\n\n                  return setSortKey(key);\n                },\n                children: key\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 28,\n                columnNumber: 64\n              }, _this)\n            }, key, false, {\n              fileName: _jsxFileName,\n              lineNumber: 28,\n              columnNumber: 50\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 9\n        }, this), filtered.map(function (problem) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n            children: Object.keys(problem).map(function (key) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n                children: problem[key]\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 39,\n                columnNumber: 50\n              }, _this);\n            })\n          }, problem.Title, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 13\n          }, _this);\n        })]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }, this), filtered.length === 0 ? \"No results\" : \"\"]\n  }, void 0, true);\n}\n\n_s(Problems, \"1k1oshqhHUkiWQqw33BavTKAnqM=\");\n\n_c = Problems;\n\nvar _c;\n\n$RefreshReg$(_c, \"Problems\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3Byb2JsZW1zLmpzPzc1MmEiXSwibmFtZXMiOlsicHJvYmxlbXMiLCJkYXRhIiwiUHJvYmxlbXMiLCJ1c2VTdGF0ZSIsImZpbHRlcklucHV0Iiwic2V0RmlsdGVySW5wdXQiLCJzb3J0S2V5Iiwic2V0U29ydEtleSIsImFzY2VuZGluZyIsInNldEFzY2VuZGluZyIsImZpbHRlcmVkIiwiZmlsdGVyIiwicHJvYmxlbSIsIlRpdGxlIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInNvcnQiLCJwMSIsInAyIiwiY21wIiwiY29uc29sZSIsImxvZyIsIk5hTiIsImxvY2FsZUNvbXBhcmUiLCJzdHlsZXMiLCJkZXNjcmlwdGlvbiIsIngiLCJ0YXJnZXQiLCJ2YWx1ZSIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUdDLGdEQUFqQjtBQUVlLFNBQVNDLFFBQVQsR0FBb0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDT0Msc0RBQVEsQ0FBQyxFQUFELENBRGY7QUFBQSxNQUN4QkMsV0FEd0I7QUFBQSxNQUNYQyxjQURXOztBQUFBLG1CQUVERixzREFBUSxDQUFDLE1BQUQsQ0FGUDtBQUFBLE1BRXhCRyxPQUZ3QjtBQUFBLE1BRWZDLFVBRmU7O0FBQUEsbUJBR0dKLHNEQUFRLENBQUMsSUFBRCxDQUhYO0FBQUEsTUFHeEJLLFNBSHdCO0FBQUEsTUFHYkMsWUFIYTs7QUFLL0IsTUFBTUMsUUFBUSxHQUFHVixRQUFRLENBQUNXLE1BQVQsQ0FBZ0IsVUFBQUMsT0FBTyxFQUFJO0FBQ3hDLFdBQU9BLE9BQU8sQ0FBQ0MsS0FBUixDQUFjQyxXQUFkLEdBQTRCQyxRQUE1QixDQUFxQ1gsV0FBVyxDQUFDVSxXQUFaLEVBQXJDLENBQVA7QUFDSCxHQUZnQixFQUVkRSxJQUZjLENBRVQsVUFBQ0MsRUFBRCxFQUFLQyxFQUFMLEVBQVk7QUFDaEIsUUFBTUMsR0FBRyxHQUFHRixFQUFFLENBQUNYLE9BQUQsQ0FBRixHQUFjWSxFQUFFLENBQUNaLE9BQUQsQ0FBNUI7QUFDQWMsV0FBTyxDQUFDQyxHQUFSLENBQVlKLEVBQUUsQ0FBQ1gsT0FBRCxDQUFGLEdBQWNZLEVBQUUsQ0FBQ1osT0FBRCxDQUE1QjtBQUNBLFdBQU8sQ0FBQ0UsU0FBUyxHQUFHLENBQUgsR0FBTyxDQUFDLENBQWxCLEtBQXdCVyxHQUFHLEtBQUtHLEdBQVIsR0FBY0gsR0FBZCxHQUFvQixJQUFJRixFQUFFLENBQUNYLE9BQUQsQ0FBRixDQUFZaUIsYUFBWixDQUEwQkwsRUFBRSxDQUFDWixPQUFELENBQTVCLENBQUosR0FBNkMsQ0FBekYsQ0FBUDtBQUNILEdBTmdCLENBQWpCO0FBUUEsc0JBQU87QUFBQSw0QkFDSDtBQUFHLGVBQVMsRUFBRWtCLDhEQUFNLENBQUNDLFdBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREcsZUFJSDtBQUFBLDBDQUFlO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsYUFBSyxFQUFFckIsV0FBMUI7QUFBdUMsZ0JBQVEsRUFBRSxrQkFBQ3NCLENBQUQ7QUFBQSxpQkFBT3JCLGNBQWMsQ0FBQ3FCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQXJCO0FBQUE7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpHLGVBS0g7QUFBQSw2QkFDQTtBQUFBLGdDQUNBO0FBQUEsb0JBQ0tDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZOUIsUUFBUSxDQUFDLENBQUQsQ0FBcEIsRUFBeUIrQixHQUF6QixDQUE2QixVQUFBQyxHQUFHO0FBQUEsZ0NBQUk7QUFBQSxxQ0FBYztBQUFRLHVCQUFPLEVBQUUsbUJBQU07QUFDdEUsc0JBQUkxQixPQUFPLElBQUkwQixHQUFmLEVBQW9CO0FBQ2hCdkIsZ0NBQVksQ0FBQyxDQUFDRCxTQUFGLENBQVo7QUFDSCxtQkFGRCxNQUVPO0FBQ0hDLGdDQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0g7O0FBQ0QseUJBQU9GLFVBQVUsQ0FBQ3lCLEdBQUQsQ0FBakI7QUFDSCxpQkFQa0Q7QUFBQSwwQkFPL0NBO0FBUCtDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZCxlQUFTQSxHQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQUo7QUFBQSxXQUFoQztBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREEsRUFXQ3RCLFFBQVEsQ0FBQ3FCLEdBQVQsQ0FBYSxVQUFBbkIsT0FBTztBQUFBLDhCQUNqQjtBQUFBLHNCQUNLaUIsTUFBTSxDQUFDQyxJQUFQLENBQVlsQixPQUFaLEVBQXFCbUIsR0FBckIsQ0FBeUIsVUFBQUMsR0FBRztBQUFBLGtDQUFJO0FBQUEsMEJBQUtwQixPQUFPLENBQUNvQixHQUFEO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBSjtBQUFBLGFBQTVCO0FBREwsYUFBU3BCLE9BQU8sQ0FBQ0MsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEaUI7QUFBQSxTQUFwQixDQVhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRyxFQXdCRkgsUUFBUSxDQUFDdUIsTUFBVCxLQUFvQixDQUFwQixHQUF3QixZQUF4QixHQUF1QyxFQXhCckM7QUFBQSxrQkFBUDtBQTBCSDs7R0F2Q3VCL0IsUTs7S0FBQUEsUSIsImZpbGUiOiIuL3NyYy9wcm9ibGVtcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCAqIGFzIGRhdGEgZnJvbSAnLi4vZGF0YS9wcm9ibGVtcy5qc29uJztcblxuY29uc3QgcHJvYmxlbXMgPSBkYXRhLmRlZmF1bHQ7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2JsZW1zKCkge1xuICAgIGNvbnN0IFtmaWx0ZXJJbnB1dCwgc2V0RmlsdGVySW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW3NvcnRLZXksIHNldFNvcnRLZXldID0gdXNlU3RhdGUoXCJZZWFyXCIpO1xuICAgIGNvbnN0IFthc2NlbmRpbmcsIHNldEFzY2VuZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICAgIGNvbnN0IGZpbHRlcmVkID0gcHJvYmxlbXMuZmlsdGVyKHByb2JsZW0gPT4ge1xuICAgICAgICByZXR1cm4gcHJvYmxlbS5UaXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGZpbHRlcklucHV0LnRvTG93ZXJDYXNlKCkpO1xuICAgIH0pLnNvcnQoKHAxLCBwMikgPT4ge1xuICAgICAgICBjb25zdCBjbXAgPSBwMVtzb3J0S2V5XSAtIHAyW3NvcnRLZXldO1xuICAgICAgICBjb25zb2xlLmxvZyhwMVtzb3J0S2V5XSA8IHAyW3NvcnRLZXldKTtcbiAgICAgICAgcmV0dXJuIChhc2NlbmRpbmcgPyAxIDogLTEpICogKGNtcCAhPT0gTmFOID8gY21wIDogMiAqIHAxW3NvcnRLZXldLmxvY2FsZUNvbXBhcmUocDJbc29ydEtleV0pIC0gMSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gPD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgICAgTGlzdCBvZiBBZHZlbnQgb2YgQ29kZSBwcm9ibGVtcywgZmlsdGVyYWJsZSBieSB0aXRsZSwgeWVhciwgdG9waWNzIGV0Yy5cbiAgICAgICAgPC9wPlxuICAgICAgICA8bGFiZWw+RmlsdGVyOiA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17ZmlsdGVySW5wdXR9IG9uQ2hhbmdlPXsoeCkgPT4gc2V0RmlsdGVySW5wdXQoeC50YXJnZXQudmFsdWUpfS8+PC9sYWJlbD5cbiAgICAgICAgPHRhYmxlPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICAgIHtPYmplY3Qua2V5cyhwcm9ibGVtc1swXSkubWFwKGtleSA9PiA8dGgga2V5PXtrZXl9PjxidXR0b24gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzb3J0S2V5ID09IGtleSkge1xuICAgICAgICAgICAgICAgICAgICBzZXRBc2NlbmRpbmcoIWFzY2VuZGluZyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0QXNjZW5kaW5nKHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0U29ydEtleShrZXkpO1xuICAgICAgICAgICAgfX0+e2tleX08L2J1dHRvbj48L3RoPil9XG4gICAgICAgIDwvdHI+XG4gICAgICAgIHtmaWx0ZXJlZC5tYXAocHJvYmxlbSA9PiAoXG4gICAgICAgICAgICA8dHIga2V5PXtwcm9ibGVtLlRpdGxlfT5cbiAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMocHJvYmxlbSkubWFwKGtleSA9PiA8dGQ+e3Byb2JsZW1ba2V5XX08L3RkPil9XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICApKX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgICAge2ZpbHRlcmVkLmxlbmd0aCA9PT0gMCA/IFwiTm8gcmVzdWx0c1wiIDogXCJcIn1cbiAgICA8Lz5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/problems.js\n");

/***/ })

})