"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var C_Users_GELL_desktop_nextjs_todo_list_main_pages_styles_global_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/styles/global.css */ \"./pages/styles/global.css\");\n/* harmony import */ var C_Users_GELL_desktop_nextjs_todo_list_main_pages_styles_global_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_GELL_desktop_nextjs_todo_list_main_pages_styles_global_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nconst Todos = (param)=>{\n    let { todos , deleteTodo  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Todos:\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\GELL\\\\Desktop\\\\nextjs-todo-list-main\\\\pages\\\\index.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: todos.map((todo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            todo.task,\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>deleteTodo(todo.id),\n                                children: \"X\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\GELL\\\\Desktop\\\\nextjs-todo-list-main\\\\pages\\\\index.js\",\n                                lineNumber: 12,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, todo.id, true, {\n                        fileName: \"C:\\\\Users\\\\GELL\\\\Desktop\\\\nextjs-todo-list-main\\\\pages\\\\index.js\",\n                        lineNumber: 11,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\GELL\\\\Desktop\\\\nextjs-todo-list-main\\\\pages\\\\index.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\GELL\\\\Desktop\\\\nextjs-todo-list-main\\\\pages\\\\index.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Todos;\nconst AddTodo = (param)=>{\n    let { addTodo  } = param;\n    _s();\n    const [newTodo, setNewTodo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        addTodo(newTodo);\n        setNewTodo(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"center\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Add a new todo\",\n                        value: newTodo,\n                        onChange: (e)=>setNewTodo(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\GELL\\\\Desktop\\\\nextjs-todo-list-main\\\\pages\\\\index.js\",\n                        lineNumber: 33,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Add\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\GELL\\\\Desktop\\\\nextjs-todo-list-main\\\\pages\\\\index.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\GELL\\\\Desktop\\\\nextjs-todo-list-main\\\\pages\\\\index.js\",\n                lineNumber: 32,\n                columnNumber: 12\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\GELL\\\\Desktop\\\\nextjs-todo-list-main\\\\pages\\\\index.js\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\GELL\\\\Desktop\\\\nextjs-todo-list-main\\\\pages\\\\index.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AddTodo, \"oyCy+yC4LrN9rT+2zASGlvYyUZ8=\");\n_c1 = AddTodo;\nconst Home = ()=>{\n    _s1();\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            id: 1,\n            task: \"Learn Next.js\"\n        },\n        {\n            id: 2,\n            task: \"Build Todo App\"\n        },\n        {\n            id: 3,\n            task: \"Make it the coolest looking\"\n        }\n    ]);\n    const addTodo = (newTodo)=>{\n        setTodos([\n            ...todos,\n            {\n                id: todos.length + 1,\n                task: newTodo\n            }\n        ]);\n    };\n    const deleteTodo = (id)=>{\n        setTodos(todos.filter((todo)=>todo.id !== id));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"This text is \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        style: \"color:red\",\n                        children: \"red\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\GELL\\\\Desktop\\\\nextjs-todo-list-main\\\\pages\\\\index.js\",\n                        lineNumber: 63,\n                        columnNumber: 23\n                    }, undefined),\n                    \", \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        style: \"color:green\",\n                        children: \"green\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\GELL\\\\Desktop\\\\nextjs-todo-list-main\\\\pages\\\\index.js\",\n                        lineNumber: 63,\n                        columnNumber: 59\n                    }, undefined),\n                    \", and \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        style: \"color:blue\",\n                        children: \"blue\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\GELL\\\\Desktop\\\\nextjs-todo-list-main\\\\pages\\\\index.js\",\n                        lineNumber: 63,\n                        columnNumber: 103\n                    }, undefined),\n                    \".\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\GELL\\\\Desktop\\\\nextjs-todo-list-main\\\\pages\\\\index.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"center\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Welcome to the Todo App!\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\GELL\\\\Desktop\\\\nextjs-todo-list-main\\\\pages\\\\index.js\",\n                    lineNumber: 65,\n                    columnNumber: 15\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\GELL\\\\Desktop\\\\nextjs-todo-list-main\\\\pages\\\\index.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AddTodo, {\n                addTodo: addTodo\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\GELL\\\\Desktop\\\\nextjs-todo-list-main\\\\pages\\\\index.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Todos, {\n                todos: todos,\n                deleteTodo: deleteTodo\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\GELL\\\\Desktop\\\\nextjs-todo-list-main\\\\pages\\\\index.js\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\GELL\\\\Desktop\\\\nextjs-todo-list-main\\\\pages\\\\index.js\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(Home, \"tl+ergMh08dLOqdoNU3O/GMlhZ0=\");\n_c2 = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Todos\");\n$RefreshReg$(_c1, \"AddTodo\");\n$RefreshReg$(_c2, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQXVDO0FBQ3FDO0FBRzVFLE1BQU1FLFFBQVEsU0FBMkI7UUFBMUIsRUFBRUMsTUFBSyxFQUFFQyxXQUFVLEVBQUU7SUFDbEMscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7MEJBQ0VKLE1BQU1LLEdBQUcsQ0FBQ0MsQ0FBQUEscUJBQ1QsOERBQUNDOzs0QkFDRUQsS0FBS0UsSUFBSTs0QkFBQzswQ0FBQyw4REFBQ0M7Z0NBQU9DLFNBQVMsSUFBTVQsV0FBV0ssS0FBS0ssRUFBRTswQ0FBRzs7Ozs7Ozt1QkFEakRMLEtBQUtLLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPMUI7S0FiTVo7QUFlTixNQUFNYSxVQUFVLFNBQWlCO1FBQWhCLEVBQUVDLFFBQU8sRUFBRTs7SUFDMUIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUV2QyxNQUFNa0IsZUFBZUMsQ0FBQUEsSUFBSztRQUN4QkEsRUFBRUMsY0FBYztRQUNoQkwsUUFBUUM7UUFDUkMsV0FBVztJQUNiO0lBRUEscUJBQ0UsOERBQUNJO1FBQUtDLFVBQVVKO2tCQUVkLDRFQUFDZDtzQkFBSSw0RUFBQ21COztrQ0FDTiw4REFBQ0M7d0JBQ0NDLE1BQUs7d0JBQ0xDLGFBQVk7d0JBQ1pDLE9BQU9YO3dCQUNQWSxVQUFVVCxDQUFBQSxJQUFLRixXQUFXRSxFQUFFVSxNQUFNLENBQUNGLEtBQUs7Ozs7OztrQ0FFeEMsOERBQUNoQjt3QkFBT2MsTUFBSztrQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUk5QjtHQXZCTVg7TUFBQUE7QUF5Qk4sTUFBTWdCLE9BQU8sSUFBTTs7SUFDakIsTUFBTSxDQUFDNUIsT0FBTzZCLFNBQVMsR0FBRy9CLCtDQUFRQSxDQUFDO1FBQ2pDO1lBQUVhLElBQUk7WUFBR0gsTUFBTTtRQUFnQjtRQUMvQjtZQUFFRyxJQUFJO1lBQUdILE1BQU07UUFBaUI7UUFDaEM7WUFBRUcsSUFBSTtZQUFHSCxNQUFNO1FBQThCO0tBQzlDO0lBRUQsTUFBTUssVUFBVUMsQ0FBQUEsVUFBVztRQUN6QmUsU0FBUztlQUFJN0I7WUFBTztnQkFBRVcsSUFBSVgsTUFBTThCLE1BQU0sR0FBRztnQkFBR3RCLE1BQU1NO1lBQVE7U0FBRTtJQUM5RDtJQUVBLE1BQU1iLGFBQWFVLENBQUFBLEtBQU07UUFDdkJrQixTQUFTN0IsTUFBTStCLE1BQU0sQ0FBQ3pCLENBQUFBLE9BQVFBLEtBQUtLLEVBQUUsS0FBS0E7SUFDNUM7SUFFQSxxQkFFRSw4REFBQ1Q7OzBCQUNDLDhEQUFDOEI7O29CQUFFO2tDQUFhLDhEQUFDQzt3QkFBS0MsT0FBTTtrQ0FBWTs7Ozs7O29CQUFVO2tDQUFFLDhEQUFDRDt3QkFBS0MsT0FBTTtrQ0FBYzs7Ozs7O29CQUFZO2tDQUFNLDhEQUFDRDt3QkFBS0MsT0FBTTtrQ0FBYTs7Ozs7O29CQUFXOzs7Ozs7OzBCQUVwSSw4REFBQ2I7MEJBQU8sNEVBQUNjOzhCQUFHOzs7Ozs7Ozs7OzswQkFDWiw4REFBQ3ZCO2dCQUFRQyxTQUFTQTs7Ozs7OzBCQUNsQiw4REFBQ2Q7Z0JBQU1DLE9BQU9BO2dCQUFPQyxZQUFZQTs7Ozs7Ozs7Ozs7O0FBR3ZDO0lBekJNMkI7TUFBQUE7QUEyQk4sK0RBQWVBLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCAnQzovVXNlcnMvR0VMTC9kZXNrdG9wL25leHRqcy10b2RvLWxpc3QtbWFpbi9wYWdlcy9zdHlsZXMvZ2xvYmFsLmNzcydcblxuXG5jb25zdCBUb2RvcyA9ICh7IHRvZG9zLCBkZWxldGVUb2RvIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgyPlRvZG9zOjwvaDI+XG4gICAgICA8dWw+XG4gICAgICAgIHt0b2Rvcy5tYXAodG9kbyA9PiAoXG4gICAgICAgICAgPGxpIGtleT17dG9kby5pZH0+XG4gICAgICAgICAgICB7dG9kby50YXNrfSA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRlbGV0ZVRvZG8odG9kby5pZCl9Plg8L2J1dHRvbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgQWRkVG9kbyA9ICh7IGFkZFRvZG8gfSkgPT4ge1xuICBjb25zdCBbbmV3VG9kbywgc2V0TmV3VG9kb10gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgYWRkVG9kbyhuZXdUb2RvKTtcbiAgICBzZXROZXdUb2RvKFwiXCIpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICBcbiAgICAgIDxkaXY+PGNlbnRlcj5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIGEgbmV3IHRvZG9cIlxuICAgICAgICB2YWx1ZT17bmV3VG9kb31cbiAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0TmV3VG9kbyhlLnRhcmdldC52YWx1ZSl9XG4gICAgICAvPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5BZGQ8L2J1dHRvbj5cbiAgICAgICAgPC9jZW50ZXI+PC9kaXY+XG4gICAgPC9mb3JtPlxuICApO1xufTtcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgW3RvZG9zLCBzZXRUb2Rvc10gPSB1c2VTdGF0ZShbXG4gICAgeyBpZDogMSwgdGFzazogXCJMZWFybiBOZXh0LmpzXCIgfSxcbiAgICB7IGlkOiAyLCB0YXNrOiBcIkJ1aWxkIFRvZG8gQXBwXCIgfSxcbiAgICB7IGlkOiAzLCB0YXNrOiBcIk1ha2UgaXQgdGhlIGNvb2xlc3QgbG9va2luZ1wiIH1cbiAgXSk7XG5cbiAgY29uc3QgYWRkVG9kbyA9IG5ld1RvZG8gPT4ge1xuICAgIHNldFRvZG9zKFsuLi50b2RvcywgeyBpZDogdG9kb3MubGVuZ3RoICsgMSwgdGFzazogbmV3VG9kbyB9XSk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlVG9kbyA9IGlkID0+IHtcbiAgICBzZXRUb2Rvcyh0b2Rvcy5maWx0ZXIodG9kbyA9PiB0b2RvLmlkICE9PSBpZCkpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgXG4gICAgPGRpdj5cbiAgICAgIDxwPlRoaXMgdGV4dCBpcyA8c3BhbiBzdHlsZT1cImNvbG9yOnJlZFwiPnJlZDwvc3Bhbj4sIDxzcGFuIHN0eWxlPVwiY29sb3I6Z3JlZW5cIj5ncmVlbjwvc3Bhbj4sIGFuZCA8c3BhbiBzdHlsZT1cImNvbG9yOmJsdWVcIj5ibHVlPC9zcGFuPi48L3A+XG5cbiAgICAgIDxjZW50ZXI+PGgxPldlbGNvbWUgdG8gdGhlIFRvZG8gQXBwITwvaDE+PC9jZW50ZXI+XG4gICAgICA8QWRkVG9kbyBhZGRUb2RvPXthZGRUb2RvfSAvPlxuICAgICAgPFRvZG9zIHRvZG9zPXt0b2Rvc30gZGVsZXRlVG9kbz17ZGVsZXRlVG9kb30gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWUiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlRvZG9zIiwidG9kb3MiLCJkZWxldGVUb2RvIiwiZGl2IiwiaDIiLCJ1bCIsIm1hcCIsInRvZG8iLCJsaSIsInRhc2siLCJidXR0b24iLCJvbkNsaWNrIiwiaWQiLCJBZGRUb2RvIiwiYWRkVG9kbyIsIm5ld1RvZG8iLCJzZXROZXdUb2RvIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybSIsIm9uU3VibWl0IiwiY2VudGVyIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiSG9tZSIsInNldFRvZG9zIiwibGVuZ3RoIiwiZmlsdGVyIiwicCIsInNwYW4iLCJzdHlsZSIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});