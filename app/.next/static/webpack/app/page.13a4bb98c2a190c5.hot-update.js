"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"2a24a120e02a\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3R5bGVzL2dsb2JhbC5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9nbG9iYWwuY3NzP2I2ZWUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCIyYTI0YTEyMGUwMmFcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./styles/global.css\n"));

/***/ }),

/***/ "(app-client)/./components/PostCard.jsx":
/*!*********************************!*\
  !*** ./components/PostCard.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/global.css */ \"(app-client)/./styles/global.css\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/Card/Card.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ \"(app-client)/./components/index.js\");\n/* harmony import */ var _mui_icons_material_FavoriteRounded__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/FavoriteRounded */ \"(app-client)/./node_modules/@mui/icons-material/FavoriteRounded.js\");\n/* harmony import */ var _mui_icons_material_CommentSharp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/CommentSharp */ \"(app-client)/./node_modules/@mui/icons-material/CommentSharp.js\");\n/* harmony import */ var _mui_icons_material_ShareSharp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/ShareSharp */ \"(app-client)/./node_modules/@mui/icons-material/ShareSharp.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-client)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst PostCard = ()=>{\n    _s();\n    const [post, setPost] = useState([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchPostData = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"/app/api/posts\");\n                const data = await response.json();\n                setPost(data);\n            } catch (error) {\n                console.log(error);\n            }\n        };\n        fetchPostData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        sx: {\n            width: \"50%\",\n            height: \"550px\",\n            backgroundColor: \"rgba(14, 14, 14, 0.926)\",\n            padding: \"0.8rem 1rem\",\n            borderRadius: \"10px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_3__.UserProfile, {\n                userWidth: true\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\next-assignment\\\\components\\\\PostCard.jsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                variant: \"h6\",\n                sx: {\n                    display: \"flex\",\n                    width: \"100%\",\n                    height: \"5rem\",\n                    justifyContent: \"center\",\n                    alignItems: \"center\",\n                    color: \"white\",\n                    gap: \"2rem\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_FavoriteRounded__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\next-assignment\\\\components\\\\PostCard.jsx\",\n                                lineNumber: 33,\n                                columnNumber: 14\n                            }, undefined),\n                            \"Like\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\next-assignment\\\\components\\\\PostCard.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 8\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_CommentSharp__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\next-assignment\\\\components\\\\PostCard.jsx\",\n                                lineNumber: 34,\n                                columnNumber: 14\n                            }, undefined),\n                            \"comment\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\next-assignment\\\\components\\\\PostCard.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 8\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ShareSharp__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\next-assignment\\\\components\\\\PostCard.jsx\",\n                                lineNumber: 35,\n                                columnNumber: 14\n                            }, undefined),\n                            \"share\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\next-assignment\\\\components\\\\PostCard.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 8\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\next-assignment\\\\components\\\\PostCard.jsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\next-assignment\\\\components\\\\PostCard.jsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PostCard, \"OTqVfaccSrZ2o8u1iZie8TEDImg=\");\n_c = PostCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostCard);\nvar _c;\n$RefreshReg$(_c, \"PostCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFOEI7QUFDa0I7QUFDUjtBQUNSO0FBQ2dEO0FBQUE7QUFBQTtBQUN0RDtBQUcxQixNQUFNUyxXQUFXOztJQUNkLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHQyxTQUFTLEVBQUU7SUFFbkNULGdEQUFTQSxDQUFDO1FBQ1QsTUFBTVUsZ0JBQWdCO1lBQ3JCLElBQUk7Z0JBQ0gsTUFBTUMsV0FBVyxNQUFNTiw2Q0FBS0EsQ0FBQ08sR0FBRyxDQUFDO2dCQUNqQyxNQUFNQyxPQUFRLE1BQU1GLFNBQVNHLElBQUk7Z0JBQ2pDTixRQUFRSztZQUNULEVBQUUsT0FBT0UsT0FBTztnQkFDZkMsUUFBUUMsR0FBRyxDQUFDRjtZQUNiO1FBQ0Q7UUFFQ0w7SUFFRixHQUFFLEVBQUU7SUFFTCxxQkFDRSw4REFBQ2IscURBQUlBO1FBQUNxQixJQUFJO1lBQUNDLE9BQU07WUFBT0MsUUFBTztZQUFTQyxpQkFBZ0I7WUFBMkJDLFNBQVE7WUFBZUMsY0FBYztRQUFNOzswQkFDNUgsOERBQUN0QiwwQ0FBV0E7Z0JBQUN1QixTQUFTOzs7Ozs7MEJBQ3RCLDhEQUFDMUIscURBQVVBO2dCQUFDMkIsU0FBUTtnQkFBS1AsSUFBSTtvQkFBRVEsU0FBUTtvQkFBT1AsT0FBTTtvQkFBUUMsUUFBUTtvQkFBUU8sZ0JBQWU7b0JBQVNDLFlBQVc7b0JBQVNDLE9BQU07b0JBQVFDLEtBQUk7Z0JBQU07O2tDQUMvSSw4REFBQ0M7OzBDQUFLLDhEQUFDN0IsMkVBQWVBOzs7Ozs0QkFBRTs7Ozs7OztrQ0FDeEIsOERBQUM2Qjs7MENBQUssOERBQUM1Qix3RUFBWUE7Ozs7OzRCQUFFOzs7Ozs7O2tDQUNyQiw4REFBQzRCOzswQ0FBSyw4REFBQzNCLHNFQUFVQTs7Ozs7NEJBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJMUI7R0E1Qk1FO0tBQUFBO0FBOEJOLCtEQUFlQSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUG9zdENhcmQuanN4PzllMmIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcblxyXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWwuY3NzJztcclxuaW1wb3J0IHsgQ2FyZCwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgVXNlclByb2ZpbGUgfSBmcm9tICcuJztcclxuaW1wb3J0IHsgRmF2b3JpdGVSb3VuZGVkLCBDb21tZW50U2hhcnAsIFNoYXJlU2hhcnAgfSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcblxyXG5jb25zdCBQb3N0Q2FyZCA9ICgpID0+IHtcclxuICAgY29uc3QgW3Bvc3QsIHNldFBvc3RdID0gdXNlU3RhdGUoW10pO1xyXG4gICBcclxuICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoUG9zdERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJy9hcHAvYXBpL3Bvc3RzJyk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSAgYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBzZXRQb3N0KGRhdGEpO1xyXG4gICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICB9XHJcbiAgICB9O1xyXG4gICAgIFxyXG4gICAgIGZldGNoUG9zdERhdGEoKTtcclxuXHJcbiAgIH0sW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQgc3g9e3t3aWR0aDonNTAlJywgaGVpZ2h0Oic1NTBweCcsIGJhY2tncm91bmRDb2xvcjoncmdiYSgxNCwgMTQsIDE0LCAwLjkyNiknLCBwYWRkaW5nOicwLjhyZW0gMXJlbScsIGJvcmRlclJhZGl1czogJzEwcHgnfX0gPlxyXG4gICAgICA8VXNlclByb2ZpbGUgdXNlcldpZHRoLz5cclxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDYnIHN4PXt7IGRpc3BsYXk6J2ZsZXgnLHdpZHRoOicxMDAlJywgaGVpZ2h0OiAnNXJlbScsIGp1c3RpZnlDb250ZW50OidjZW50ZXInLGFsaWduSXRlbXM6J2NlbnRlcicsY29sb3I6J3doaXRlJyxnYXA6JzJyZW0nfX0+XHJcbiAgICAgICA8c3Bhbj48RmF2b3JpdGVSb3VuZGVkLz5MaWtlPC9zcGFuPiBcclxuICAgICAgIDxzcGFuPjxDb21tZW50U2hhcnAvPmNvbW1lbnQ8L3NwYW4+IFxyXG4gICAgICAgPHNwYW4+PFNoYXJlU2hhcnAvPnNoYXJlPC9zcGFuPlxyXG4gICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZCJdLCJuYW1lcyI6WyJDYXJkIiwiVHlwb2dyYXBoeSIsIlJlYWN0IiwidXNlRWZmZWN0IiwiVXNlclByb2ZpbGUiLCJGYXZvcml0ZVJvdW5kZWQiLCJDb21tZW50U2hhcnAiLCJTaGFyZVNoYXJwIiwiYXhpb3MiLCJQb3N0Q2FyZCIsInBvc3QiLCJzZXRQb3N0IiwidXNlU3RhdGUiLCJmZXRjaFBvc3REYXRhIiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInN4Iiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwidXNlcldpZHRoIiwidmFyaWFudCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJjb2xvciIsImdhcCIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./components/PostCard.jsx\n"));

/***/ })

});