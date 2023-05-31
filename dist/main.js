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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n\n\nconst dom = (() => {\n  function showProjectForm() {\n    const userProjects = document.querySelector('.user-project-list');\n\n    const form = document.createElement('div');\n    const formField = document.createElement('input');\n    const addBtn = document.createElement('button');\n    const cancelBtn = document.createElement('button');\n\n    form.classList.add('project-creation');\n\n    formField.setAttribute('id', 'project-creation-field');\n    formField.setAttribute('type', 'text');\n    formField.setAttribute('name', 'project-title');\n\n    addBtn.classList.add('project-creation-btns');\n    addBtn.setAttribute('id', 'project-creation-add');\n    addBtn.textContent = 'Add';\n\n    cancelBtn.classList.add('project-creation-btns');\n    cancelBtn.setAttribute('id', 'project-creation-cancel');\n    cancelBtn.textContent = 'Cancel';\n\n    form.appendChild(formField);\n    form.appendChild(addBtn);\n    form.appendChild(cancelBtn);\n\n    userProjects.appendChild(form);\n  }\n\n  function showAddProjectBtn() {\n    const userProjects = document.querySelector('.user-project-list');\n\n    const button = document.createElement('button');\n    const icon = document.createElement('img');\n    const name = document.createTextNode('Add New Project');\n\n    button.setAttribute('id', 'new-project');\n    button.classList.add('project');\n\n    icon.classList.add('icon');\n    icon.setAttribute('src', './images/icons/plus.svg');\n\n    button.appendChild(icon);\n    button.appendChild(name);\n    userProjects.appendChild(button);\n  }\n\n  function showProjects() {\n    const userProjects = document.querySelector('.user-project-list');\n\n    for (let i = 0; i < _projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projectsList.length; i++) {\n      const project = document.createElement('button');\n      const projectIcon = document.createElement('img');\n      const projectName = document.createTextNode(_projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projectsList[i].name);\n\n      project.classList.add('project');\n\n      projectIcon.classList.add('icon');\n      projectIcon.setAttribute('src', './images/icons/format-list-checks.svg');\n\n      project.appendChild(projectIcon);\n      project.appendChild(projectName);\n      userProjects.appendChild(project);\n    }\n\n    showAddProjectBtn()\n\n  }\n\n  return {showProjects, showProjectForm};\n\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom);\n\n//# sourceURL=webpack://todo-list/./src/dom.js?");

/***/ }),

/***/ "./src/handlers.js":
/*!*************************!*\
  !*** ./src/handlers.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\nconst handlers = (() => {\n  function newProjectClickHandler () {\n    const button = document.getElementById('new-project');\n    \n    button.addEventListener('click', () => {\n      console.log('New Project was clicked');\n    });\n  }\n\n  return{newProjectClickHandler};\n\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handlers);\n\n//# sourceURL=webpack://todo-list/./src/handlers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers */ \"./src/handlers.js\");\n\n\n\n_dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].showProjects();\n\n_handlers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].newProjectClickHandler();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst projects = (() => {\n  const projectsList = [];\n\n  // implete default projects or local storage stuff here\n\n  class Project {\n    constructor(name) {\n      this.name = name;\n    }\n  }\n\n  function addProject (name) {\n    const project = new Project(name);\n    projectsList.push(project);\n  }\n\n  const testProject = 'Test Project';\n  addProject(testProject);\n\n  return {projectsList, addProject};\n\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projects);\n\n//# sourceURL=webpack://todo-list/./src/projects.js?");

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