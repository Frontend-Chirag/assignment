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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"1bb1e18d595a\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3R5bGVzL2dsb2JhbC5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9nbG9iYWwuY3NzP2I2ZWUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCIxYmIxZTE4ZDU5NWFcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./styles/global.css\n"));

/***/ }),

/***/ "(app-client)/./components/PostCard.jsx":
/*!*********************************!*\
  !*** ./components/PostCard.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/global.css */ \"(app-client)/./styles/global.css\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/Card/Card.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ \"(app-client)/./components/index.js\");\n/* harmony import */ var _mui_icons_material_FavoriteRounded__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/FavoriteRounded */ \"(app-client)/./node_modules/@mui/icons-material/FavoriteRounded.js\");\n/* harmony import */ var _mui_icons_material_CommentSharp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/CommentSharp */ \"(app-client)/./node_modules/@mui/icons-material/CommentSharp.js\");\n/* harmony import */ var _mui_icons_material_ShareSharp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/ShareSharp */ \"(app-client)/./node_modules/@mui/icons-material/ShareSharp.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-client)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst PostCard = ()=>{\n    _s();\n    const [post, setPost] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchPostData = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"/api/posts\");\n                const data = response.data;\n                setPost(data);\n            } catch (error) {\n                console.log(error);\n            }\n        };\n        fetchPostData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col gap-8 mt-2\",\n        children: post.map((posts, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                sx: {\n                    width: \"450px\",\n                    height: \"550px\",\n                    color: \"white\",\n                    backgroundColor: \"rgba(14, 14, 14, 0.926)\",\n                    padding: \"0.8rem 1rem\",\n                    borderRadius: \"10px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_3__.UserProfile, {\n                        userWidth: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\next-assignment\\\\components\\\\PostCard.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        src: posts.postimage,\n                        className: \"flex mt-7 mb-7\",\n                        alt: \"postImage\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\next-assignment\\\\components\\\\PostCard.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        variant: \"body1\",\n                        children: posts.description\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\next-assignment\\\\components\\\\PostCard.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        variant: \"h6\",\n                        sx: {\n                            display: \"flex\",\n                            width: \"100%\",\n                            height: \"5rem\",\n                            justifyContent: \"center\",\n                            alignItems: \"center\",\n                            color: \"white\",\n                            gap: \"2rem\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_FavoriteRounded__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\next-assignment\\\\components\\\\PostCard.jsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 16\n                                    }, undefined),\n                                    \" Like\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\next-assignment\\\\components\\\\PostCard.jsx\",\n                                lineNumber: 36,\n                                columnNumber: 10\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_CommentSharp__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\next-assignment\\\\components\\\\PostCard.jsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 16\n                                    }, undefined),\n                                    \" comment\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\next-assignment\\\\components\\\\PostCard.jsx\",\n                                lineNumber: 37,\n                                columnNumber: 10\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ShareSharp__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\next-assignment\\\\components\\\\PostCard.jsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 16\n                                    }, undefined),\n                                    \" share\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\next-assignment\\\\components\\\\PostCard.jsx\",\n                                lineNumber: 38,\n                                columnNumber: 10\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\next-assignment\\\\components\\\\PostCard.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, index, true, {\n                fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\next-assignment\\\\components\\\\PostCard.jsx\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\next-assignment\\\\components\\\\PostCard.jsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PostCard, \"OTqVfaccSrZ2o8u1iZie8TEDImg=\");\n_c = PostCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostCard);\nvar _c;\n$RefreshReg$(_c, \"PostCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUU4QjtBQUNrQjtBQUNFO0FBQ2xCO0FBQ2dEO0FBQUE7QUFBQTtBQUN0RDtBQUNLO0FBRy9CLE1BQU1XLFdBQVc7O0lBQ2QsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdULCtDQUFRQSxDQUFDLEVBQUU7SUFFbkNELGdEQUFTQSxDQUFDO1FBQ1QsTUFBTVcsZ0JBQWdCO1lBQ3JCLElBQUk7Z0JBQ0gsTUFBTUMsV0FBVyxNQUFNTiw2Q0FBS0EsQ0FBQ08sR0FBRyxDQUFDO2dCQUNqQyxNQUFNQyxPQUFRRixTQUFTRSxJQUFJO2dCQUMzQkosUUFBUUk7WUFDVCxFQUFFLE9BQU9DLE9BQU87Z0JBQ2ZDLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFDYjtRQUNEO1FBRUNKO0lBQ0YsR0FBRSxFQUFFO0lBQ0wscUJBQ0UsOERBQUNPO1FBQUlDLFdBQVU7a0JBQ1pWLEtBQUtXLEdBQUcsQ0FBQyxDQUFDQyxPQUFPQyxzQkFDaEIsOERBQUN6QixxREFBSUE7Z0JBQWMwQixJQUFJO29CQUFDQyxPQUFNO29CQUFTQyxRQUFPO29CQUFRQyxPQUFNO29CQUFTQyxpQkFBZ0I7b0JBQTJCQyxTQUFRO29CQUFlQyxjQUFjO2dCQUFNOztrQ0FDM0osOERBQUMzQiwwQ0FBV0E7d0JBQUM0QixTQUFTOzs7Ozs7a0NBQ3RCLDhEQUFDdkIsbURBQUtBO3dCQUFDd0IsS0FBS1YsTUFBTVcsU0FBUzt3QkFBRWIsV0FBVTt3QkFBaUJjLEtBQUk7Ozs7OztrQ0FDNUQsOERBQUNuQyxxREFBVUE7d0JBQUNvQyxTQUFRO2tDQUFVYixNQUFNYyxXQUFXOzs7Ozs7a0NBQy9DLDhEQUFDckMscURBQVVBO3dCQUFDb0MsU0FBUTt3QkFBS1gsSUFBSTs0QkFBRWEsU0FBUTs0QkFBT1osT0FBTTs0QkFBUUMsUUFBUTs0QkFBUVksZ0JBQWU7NEJBQVNDLFlBQVc7NEJBQVNaLE9BQU07NEJBQVFhLEtBQUk7d0JBQU07OzBDQUMvSSw4REFBQ0M7O2tEQUFLLDhEQUFDckMsMkVBQWVBOzs7OztvQ0FBRTs7Ozs7OzswQ0FDeEIsOERBQUNxQzs7a0RBQUssOERBQUNwQyx3RUFBWUE7Ozs7O29DQUFFOzs7Ozs7OzBDQUNyQiw4REFBQ29DOztrREFBSyw4REFBQ25DLHVFQUFVQTs7Ozs7b0NBQUU7Ozs7Ozs7Ozs7Ozs7O2VBUFJpQjs7Ozs7Ozs7OztBQWFwQjtHQWhDTWQ7S0FBQUE7QUFrQ04sK0RBQWVBLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qc3g/OWUyYiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuXHJcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbC5jc3MnO1xyXG5pbXBvcnQgeyBDYXJkLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG11aS9tYXRlcmlhbCdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgVXNlclByb2ZpbGUgfSBmcm9tICcuJztcclxuaW1wb3J0IHsgRmF2b3JpdGVSb3VuZGVkLCBDb21tZW50U2hhcnAsIFNoYXJlU2hhcnAgfSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5cclxuXHJcbmNvbnN0IFBvc3RDYXJkID0gKCkgPT4ge1xyXG4gICBjb25zdCBbcG9zdCwgc2V0UG9zdF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgIFxyXG4gICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hQb3N0RGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9wb3N0cycpO1xyXG4gICAgICBjb25zdCBkYXRhID0gIHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIHNldFBvc3QoZGF0YSk7XHJcbiAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgIH1cclxuICAgIH07XHJcbiAgICAgXHJcbiAgICAgZmV0Y2hQb3N0RGF0YSgpO1xyXG4gICB9LFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgZ2FwLTggbXQtMic+XHJcbiAgICAgIHtwb3N0Lm1hcCgocG9zdHMsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgPENhcmQgIGtleT17aW5kZXh9IHN4PXt7d2lkdGg6JzQ1MHB4JywgaGVpZ2h0Oic1NTBweCcsY29sb3I6J3doaXRlJywgYmFja2dyb3VuZENvbG9yOidyZ2JhKDE0LCAxNCwgMTQsIDAuOTI2KScsIHBhZGRpbmc6JzAuOHJlbSAxcmVtJywgYm9yZGVyUmFkaXVzOiAnMTBweCd9fSA+XHJcbiAgICAgICAgPFVzZXJQcm9maWxlIHVzZXJXaWR0aC8+XHJcbiAgICAgICAgPEltYWdlIHNyYz17cG9zdHMucG9zdGltYWdlfSBjbGFzc05hbWU9J2ZsZXggbXQtNyBtYi03JyBhbHQ9J3Bvc3RJbWFnZScvPlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkxJyA+e3Bvc3RzLmRlc2NyaXB0aW9ufTwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNicgc3g9e3sgZGlzcGxheTonZmxleCcsd2lkdGg6JzEwMCUnLCBoZWlnaHQ6ICc1cmVtJywganVzdGlmeUNvbnRlbnQ6J2NlbnRlcicsYWxpZ25JdGVtczonY2VudGVyJyxjb2xvcjond2hpdGUnLGdhcDonMnJlbSd9fT5cclxuICAgICAgICAgPHNwYW4+PEZhdm9yaXRlUm91bmRlZC8+IExpa2U8L3NwYW4+IFxyXG4gICAgICAgICA8c3Bhbj48Q29tbWVudFNoYXJwLz4gY29tbWVudDwvc3Bhbj4gXHJcbiAgICAgICAgIDxzcGFuPjxTaGFyZVNoYXJwLz4gc2hhcmU8L3NwYW4+XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZCJdLCJuYW1lcyI6WyJDYXJkIiwiVHlwb2dyYXBoeSIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJVc2VyUHJvZmlsZSIsIkZhdm9yaXRlUm91bmRlZCIsIkNvbW1lbnRTaGFycCIsIlNoYXJlU2hhcnAiLCJheGlvcyIsIkltYWdlIiwiUG9zdENhcmQiLCJwb3N0Iiwic2V0UG9zdCIsImZldGNoUG9zdERhdGEiLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJwb3N0cyIsImluZGV4Iiwic3giLCJ3aWR0aCIsImhlaWdodCIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsInVzZXJXaWR0aCIsInNyYyIsInBvc3RpbWFnZSIsImFsdCIsInZhcmlhbnQiLCJkZXNjcmlwdGlvbiIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJnYXAiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/PostCard.jsx\n"));

/***/ })

});