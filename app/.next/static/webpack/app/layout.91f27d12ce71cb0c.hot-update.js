"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-client)/./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"eb4fe9372926\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3R5bGVzL2dsb2JhbC5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9nbG9iYWwuY3NzP2I2ZWUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJlYjRmZTkzNzI5MjZcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./styles/global.css\n"));

/***/ }),

/***/ "(app-client)/./components/PostCard.jsx":
/*!*********************************!*\
  !*** ./components/PostCard.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/global.css */ \"(app-client)/./styles/global.css\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/Card/Card.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ \"(app-client)/./components/index.js\");\n/* harmony import */ var _mui_icons_material_FavoriteRounded__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/FavoriteRounded */ \"(app-client)/./node_modules/@mui/icons-material/FavoriteRounded.js\");\n/* harmony import */ var _mui_icons_material_CommentSharp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/CommentSharp */ \"(app-client)/./node_modules/@mui/icons-material/CommentSharp.js\");\n/* harmony import */ var _mui_icons_material_ShareSharp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/ShareSharp */ \"(app-client)/./node_modules/@mui/icons-material/ShareSharp.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-client)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst PostCard = ()=>{\n    _s();\n    const [post, setPost] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchPostData = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"/api/posts\");\n                const data = response.data;\n                setPost(data);\n                console.log(data);\n            } catch (error) {\n                console.log(error);\n            }\n        };\n        fetchPostData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col gap-8\",\n        children: post.map((posts, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                sx: {\n                    width: \"450px\",\n                    height: \"550px\",\n                    backgroundColor: \"rgba(14, 14, 14, 0.926)\",\n                    padding: \"0.8rem 1rem\",\n                    borderRadius: \"10px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_3__.UserProfile, {\n                        userWidth: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\next-assignment\\\\components\\\\PostCard.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        variant: \"p\",\n                        children: posts.name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\next-assignment\\\\components\\\\PostCard.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        variant: \"h6\",\n                        sx: {\n                            display: \"flex\",\n                            width: \"100%\",\n                            height: \"5rem\",\n                            justifyContent: \"center\",\n                            alignItems: \"center\",\n                            color: \"white\",\n                            gap: \"2rem\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_FavoriteRounded__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\next-assignment\\\\components\\\\PostCard.jsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 16\n                                    }, undefined),\n                                    \"Like\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\next-assignment\\\\components\\\\PostCard.jsx\",\n                                lineNumber: 37,\n                                columnNumber: 10\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_CommentSharp__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\next-assignment\\\\components\\\\PostCard.jsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 16\n                                    }, undefined),\n                                    \"comment\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\next-assignment\\\\components\\\\PostCard.jsx\",\n                                lineNumber: 38,\n                                columnNumber: 10\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ShareSharp__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\next-assignment\\\\components\\\\PostCard.jsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 16\n                                    }, undefined),\n                                    \"share\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\next-assignment\\\\components\\\\PostCard.jsx\",\n                                lineNumber: 39,\n                                columnNumber: 10\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\next-assignment\\\\components\\\\PostCard.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, index, true, {\n                fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\next-assignment\\\\components\\\\PostCard.jsx\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\next-assignment\\\\components\\\\PostCard.jsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PostCard, \"OTqVfaccSrZ2o8u1iZie8TEDImg=\");\n_c = PostCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostCard);\nvar _c;\n$RefreshReg$(_c, \"PostCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFOEI7QUFDa0I7QUFDRTtBQUNsQjtBQUNnRDtBQUFBO0FBQUE7QUFDdEQ7QUFHMUIsTUFBTVUsV0FBVzs7SUFDZCxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1IsK0NBQVFBLENBQUMsRUFBRTtJQUVuQ0QsZ0RBQVNBLENBQUM7UUFDVCxNQUFNVSxnQkFBZ0I7WUFDckIsSUFBSTtnQkFDSCxNQUFNQyxXQUFXLE1BQU1MLDZDQUFLQSxDQUFDTSxHQUFHLENBQUM7Z0JBQ2pDLE1BQU1DLE9BQVFGLFNBQVNFLElBQUk7Z0JBQzNCSixRQUFRSTtnQkFDUkMsUUFBUUMsR0FBRyxDQUFDRjtZQUNiLEVBQUUsT0FBT0csT0FBTztnQkFDZkYsUUFBUUMsR0FBRyxDQUFDQztZQUNiO1FBQ0Q7UUFFQ047SUFFRixHQUFFLEVBQUU7SUFFTCxxQkFDRSw4REFBQ087UUFBSUMsV0FBVTtrQkFDWlYsS0FBS1csR0FBRyxDQUFDLENBQUNDLE9BQU9DLHNCQUNoQiw4REFBQ3hCLHFEQUFJQTtnQkFBY3lCLElBQUk7b0JBQUNDLE9BQU07b0JBQVNDLFFBQU87b0JBQVNDLGlCQUFnQjtvQkFBMkJDLFNBQVE7b0JBQWVDLGNBQWM7Z0JBQU07O2tDQUM3SSw4REFBQ3pCLDBDQUFXQTt3QkFBQzBCLFNBQVM7Ozs7OztrQ0FDdEIsOERBQUM5QixxREFBVUE7d0JBQUMrQixTQUFRO2tDQUFLVCxNQUFNVSxJQUFJOzs7Ozs7a0NBQ25DLDhEQUFDaEMscURBQVVBO3dCQUFDK0IsU0FBUTt3QkFBS1AsSUFBSTs0QkFBRVMsU0FBUTs0QkFBT1IsT0FBTTs0QkFBUUMsUUFBUTs0QkFBUVEsZ0JBQWU7NEJBQVNDLFlBQVc7NEJBQVNDLE9BQU07NEJBQVFDLEtBQUk7d0JBQU07OzBDQUMvSSw4REFBQ0M7O2tEQUFLLDhEQUFDakMsMkVBQWVBOzs7OztvQ0FBRTs7Ozs7OzswQ0FDeEIsOERBQUNpQzs7a0RBQUssOERBQUNoQyx3RUFBWUE7Ozs7O29DQUFFOzs7Ozs7OzBDQUNyQiw4REFBQ2dDOztrREFBSyw4REFBQy9CLHNFQUFVQTs7Ozs7b0NBQUU7Ozs7Ozs7Ozs7Ozs7O2VBTlJnQjs7Ozs7Ozs7OztBQVlwQjtHQWxDTWQ7S0FBQUE7QUFvQ04sK0RBQWVBLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qc3g/OWUyYiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuXHJcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbC5jc3MnO1xyXG5pbXBvcnQgeyBDYXJkLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG11aS9tYXRlcmlhbCdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgVXNlclByb2ZpbGUgfSBmcm9tICcuJztcclxuaW1wb3J0IHsgRmF2b3JpdGVSb3VuZGVkLCBDb21tZW50U2hhcnAsIFNoYXJlU2hhcnAgfSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcblxyXG5jb25zdCBQb3N0Q2FyZCA9ICgpID0+IHtcclxuICAgY29uc3QgW3Bvc3QsIHNldFBvc3RdID0gdXNlU3RhdGUoW10pO1xyXG4gICBcclxuICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoUG9zdERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvcG9zdHMnKTtcclxuICAgICAgY29uc3QgZGF0YSA9ICByZXNwb25zZS5kYXRhO1xyXG4gICAgICBzZXRQb3N0KGRhdGEpO1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgfVxyXG4gICAgfTtcclxuICAgICBcclxuICAgICBmZXRjaFBvc3REYXRhKCk7XHJcblxyXG4gICB9LFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGdhcC04Jz5cclxuICAgICAge3Bvc3QubWFwKChwb3N0cywgaW5kZXgpID0+IChcclxuICAgICAgICA8Q2FyZCAga2V5PXtpbmRleH0gc3g9e3t3aWR0aDonNDUwcHgnLCBoZWlnaHQ6JzU1MHB4JywgYmFja2dyb3VuZENvbG9yOidyZ2JhKDE0LCAxNCwgMTQsIDAuOTI2KScsIHBhZGRpbmc6JzAuOHJlbSAxcmVtJywgYm9yZGVyUmFkaXVzOiAnMTBweCd9fSA+XHJcbiAgICAgICAgPFVzZXJQcm9maWxlIHVzZXJXaWR0aC8+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0ncCc+e3Bvc3RzLm5hbWV9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g2JyBzeD17eyBkaXNwbGF5OidmbGV4Jyx3aWR0aDonMTAwJScsIGhlaWdodDogJzVyZW0nLCBqdXN0aWZ5Q29udGVudDonY2VudGVyJyxhbGlnbkl0ZW1zOidjZW50ZXInLGNvbG9yOid3aGl0ZScsZ2FwOicycmVtJ319PlxyXG4gICAgICAgICA8c3Bhbj48RmF2b3JpdGVSb3VuZGVkLz5MaWtlPC9zcGFuPiBcclxuICAgICAgICAgPHNwYW4+PENvbW1lbnRTaGFycC8+Y29tbWVudDwvc3Bhbj4gXHJcbiAgICAgICAgIDxzcGFuPjxTaGFyZVNoYXJwLz5zaGFyZTwvc3Bhbj5cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RDYXJkIl0sIm5hbWVzIjpbIkNhcmQiLCJUeXBvZ3JhcGh5IiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlVzZXJQcm9maWxlIiwiRmF2b3JpdGVSb3VuZGVkIiwiQ29tbWVudFNoYXJwIiwiU2hhcmVTaGFycCIsImF4aW9zIiwiUG9zdENhcmQiLCJwb3N0Iiwic2V0UG9zdCIsImZldGNoUG9zdERhdGEiLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJwb3N0cyIsImluZGV4Iiwic3giLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJ1c2VyV2lkdGgiLCJ2YXJpYW50IiwibmFtZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJjb2xvciIsImdhcCIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./components/PostCard.jsx\n"));

/***/ })

});