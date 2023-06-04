/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n\n\nconst dom = (() => {\n  function toggleProjectForm (state) {\n    const projectForm = document.querySelector('.project-creation');\n    const newProjectForm = document.querySelector('.new-project');\n\n    if (!state === false) {\n      projectForm.classList.add('active');\n      newProjectForm.classList.add('active');\n    }\n    else if (!state === true) {\n      projectForm.classList.remove('active');\n      newProjectForm.classList.remove('active');\n    }\n    \n  }\n\n  function showProjects() {\n    const userProjects = document.querySelector('.user-project-list');\n    userProjects.textContent = '';\n\n    for (let i = 0; i < _projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projectsList.length; i++) {\n      const project = document.createElement('button');\n      const projectIcon = document.createElement('img');\n      const projectName = document.createTextNode(_projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projectsList[i].name);\n\n      project.classList.add('project');\n      project.setAttribute('id', _projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projectsList[i].name);\n\n      projectIcon.classList.add('icon');\n      projectIcon.setAttribute('src', './images/icons/format-list-checks.svg');\n\n      project.appendChild(projectIcon);\n      project.appendChild(projectName);\n      userProjects.appendChild(project);\n    }\n\n  }\n\n  function showProjectContent(name) {\n    const projectTitle = document.querySelector('.project-title');\n    const projectTaskView = document.querySelector('.project-task-view');\n    const projectTaskRemaining = document.querySelector('.project-tasks-remaining');\n\n    projectTitle.textContent = name;\n\n    // Placeholder task amount\n    projectTaskRemaining.textContent = 'Tasks (2)';\n\n\n\n  }\n\n  return {showProjects, toggleProjectForm, showProjectContent};\n\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom);\n\n//# sourceURL=webpack://todo-list/./src/dom.js?");

/***/ }),

/***/ "./src/handlers.js":
/*!*************************!*\
  !*** ./src/handlers.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n\n\n\nconst handlers = (() => {\n\n  function userProjectClickHandler () {\n    const userProjectBtn = document.querySelectorAll('.user-project-list button');\n\n    userProjectBtn.forEach(btn => {\n      btn.addEventListener('click', () => {\n        _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].showProjectContent(btn.id);\n        console.log(btn.id);\n      });\n    });\n\n  }\n  \n  function projectFormClickHandler () {\n    const formBtns = document.querySelectorAll('.project-creation-btns');\n    const formField = document.getElementById('project-creation-field');\n\n    const formValidation = (btnID) => {\n      if (btnID === 'project-creation-cancel') {\n        _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toggleProjectForm(false);\n        formField.value = '';\n        formField.style.border = '1px solid #bdbdbd';\n      }\n      else if (formField.value === '') {\n        formField.style.border = '1px solid red';\n      }\n      else if (_projects__WEBPACK_IMPORTED_MODULE_1__[\"default\"].checkIfProjectExists(formField.value)) {\n        formField.style.border = '1px solid red';\n      }\n      else {\n        _projects__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addProject(formField.value);\n        formField.value = '';\n        _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toggleProjectForm(false);\n        formField.style.border = '1px solid #bdbdbd';\n      }\n\n    }\n\n    formBtns.forEach(btn => {\n      btn.addEventListener('click', () => {\n        formValidation(btn.id);\n        _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].showProjects();\n        userProjectClickHandler();\n      });\n    });\n\n  }\n\n  function newProjectClickHandler () {\n    const button = document.querySelector('.new-project');\n    \n    button.addEventListener('click', () => {\n      _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toggleProjectForm(true);\n    });\n  }\n\n  return{newProjectClickHandler, projectFormClickHandler, userProjectClickHandler};\n\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handlers);\n\n//# sourceURL=webpack://todo-list/./src/handlers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers */ \"./src/handlers.js\");\n\n\n\n_dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].showProjects();\n\n_handlers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].newProjectClickHandler();\n_handlers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].projectFormClickHandler();\n_handlers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].userProjectClickHandler();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst projects = (() => {\n  const projectsList = [];\n\n  // implete default projects or local storage stuff here\n\n  class Project {\n    constructor(name) {\n      this.name = name;\n      this.tasks = [];\n    }\n  }\n\n  function addProject (name) {\n    const project = new Project(name);\n    projectsList.push(project);\n  }\n\n  const testProject = 'Test Project';\n  addProject(testProject);\n\n  function checkIfProjectExists (name) {\n    for (let i = 0; i < projectsList.length; i++) {\n      if (projectsList[i].name === name) {\n        return true;\n      }\n    }\n    \n    return false;\n  }\n\n  return {projectsList, addProject, checkIfProjectExists};\n\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projects);\n\n//# sourceURL=webpack://todo-list/./src/projects.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;