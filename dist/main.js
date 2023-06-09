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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n\n\n\nconst dom = (() => {\n  function toggleForm (state, formType) {\n    const projectForm = document.querySelector('.project-creation');\n    const newProjectForm = document.querySelector('.new-project');\n    const taskForm = document.querySelector('.new-task-form');\n\n    if (formType === 'project') {\n      if (!state === false) {\n        projectForm.classList.add('active');\n        newProjectForm.classList.add('active');\n      }\n      else if (!state === true) {\n        projectForm.classList.remove('active');\n        newProjectForm.classList.remove('active');\n      }\n    }\n    else if (formType === 'task') {\n      if (!state === false) {\n        taskForm.classList.add('active');\n      }\n      else if (!state === true) {\n        taskForm.classList.remove('active');\n      }\n    }\n    \n    \n  }\n\n  function showProjects() {\n    const userProjects = document.querySelector('.user-project-list');\n    userProjects.textContent = '';\n\n    for (let i = 0; i < _projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projectsList.length; i++) {\n      const project = document.createElement('button');\n      const projectIcon = document.createElement('img');\n      const projectName = document.createTextNode(_projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projectsList[i].name);\n\n      project.classList.add('project');\n      project.setAttribute('id', `projectIndex${i}`);\n\n      projectIcon.classList.add('icon');\n      projectIcon.setAttribute('src', './images/icons/format-list-checks.svg');\n\n      project.appendChild(projectIcon);\n      project.appendChild(projectName);\n      userProjects.appendChild(project);\n    }\n\n  }\n\n  function showTask (projectID) {\n    const projectTaskView = document.querySelector('.project-task-view');\n    projectTaskView.textContent = '';\n\n    console.table(_projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projectsList[projectID].tasks);\n\n    for (let i = 0; i < _projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projectsList[projectID].tasks.length; i++) {\n      const task = document.createElement('div');\n      const taskName = document.createElement('div');\n      const taskDate = document.createElement('div');\n      const checkbox = document.createElement('input');\n      const manage = document.createElement('button');\n      const manageImage = document.createElement('img');\n\n      task.classList.add('project-task');\n\n      checkbox.setAttribute('type', 'checkbox');\n      checkbox.classList.add('project-task-checkbox');\n\n      taskName.classList.add('project-task-name');\n      taskName.textContent = _projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projectsList[projectID].tasks[i].name;\n\n      taskDate.classList.add('project-task-duedate');\n      taskDate.textContent = _projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projectsList[projectID].tasks[i].date;\n\n      manage.classList.add('manage');\n\n      manageImage.classList.add('icon');\n      manageImage.setAttribute('src', './images/icons/dots-vertical.svg');\n\n      manage.appendChild(manageImage);\n\n      task.appendChild(checkbox);\n      task.appendChild(taskName);\n      task.appendChild(taskDate);\n      task.appendChild(manage);\n\n      projectTaskView.appendChild(task);\n    }\n\n  }\n\n  function showProjectContent(currentProject) {\n    const projectTitle = document.querySelector('.project-title');\n    const projectTaskRemaining = document.querySelector('.project-tasks-remaining');\n\n    // Remaining task amount\n    projectTitle.textContent = _projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projectsList[currentProject].name;\n    projectTaskRemaining.textContent = `Tasks (${_projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projectsList[currentProject].tasks.length})`;\n\n    showTask(currentProject);\n\n  }\n\n  return {showProjects, toggleForm, showProjectContent, showTask};\n\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom);\n\n//# sourceURL=webpack://todo-list/./src/dom.js?");

/***/ }),

/***/ "./src/handlers.js":
/*!*************************!*\
  !*** ./src/handlers.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n\n\n\n\nconst handlers = (() => {\n\n  function userProjectClickHandler () {\n    const userProjectBtn = document.querySelectorAll('.user-project-list button');\n\n    userProjectBtn.forEach(btn => {\n      btn.addEventListener('click', () => {\n        _projects__WEBPACK_IMPORTED_MODULE_1__[\"default\"].currentProject = btn.id.slice(btn.id.length - 1);\n        _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].showProjectContent(_projects__WEBPACK_IMPORTED_MODULE_1__[\"default\"].currentProject);\n      });\n    });\n\n  }\n  \n  function formClickHandler () {\n    // Future note for optimization, can declare buttons outside of this scope since they only need to be\n    // Query selected once instead of every time this function is called\n    const projectFormBtns = document.querySelectorAll('.project-creation-btns');\n    const projectFormField = document.getElementById('project-creation-field');\n    const taskFormBtns = document.querySelectorAll('.task-form-btns');\n    const taskFormField = document.getElementById('task-name');\n    const taskFormDate = document.getElementById('task-date');\n\n    const formValidation = (btnID) => {\n      if (btnID === 'project-creation-cancel' || btnID === 'project-creation-add') {\n        if (btnID === 'project-creation-cancel') {\n          _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toggleForm(false, 'project');\n          projectFormField.value = '';\n          projectFormField.style.border = '1px solid #bdbdbd';\n        }\n        else if (projectFormField.value === '') {\n          projectFormField.style.border = '1px solid red';\n        }\n        else if (_projects__WEBPACK_IMPORTED_MODULE_1__[\"default\"].checkIfProjectExists(projectFormField.value)) {\n          projectFormField.style.border = '1px solid red';\n        }\n        else {\n          _projects__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addProject(projectFormField.value);\n          projectFormField.value = '';\n          _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toggleForm(false, 'project');\n          projectFormField.style.border = '1px solid #bdbdbd';\n        }\n      }\n      else if (btnID === 'add-task' || btnID === 'cancel-task') {\n        if (btnID === 'cancel-task') {\n          _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toggleForm(false, 'task');\n          taskFormField.value = '';\n          taskFormDate.value = '';\n        }\n        else if (btnID === 'add-task') {\n          _tasks__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addTask(_projects__WEBPACK_IMPORTED_MODULE_1__[\"default\"].currentProject, taskFormField.value, taskFormDate.value);\n          taskFormField.value = '';\n          taskFormDate.value = '';\n          _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toggleForm(false, 'task');\n        }\n      }\n\n\n    }\n\n    projectFormBtns.forEach(btn => {\n      btn.addEventListener('click', () => {\n        formValidation(btn.id);\n        _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].showProjects();\n        userProjectClickHandler();\n      });\n    });\n\n    taskFormBtns.forEach(btn => {\n      btn.addEventListener('click', () => {\n        formValidation(btn.id);\n        _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].showTask(_projects__WEBPACK_IMPORTED_MODULE_1__[\"default\"].currentProject);\n      })\n    })\n\n  }\n\n  function newProjectClickHandler () {\n    const button = document.querySelector('.new-project');\n    \n    button.addEventListener('click', () => {\n      _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toggleForm(true, 'project');\n    });\n  }\n\n  function newTaskClickHandler () {\n    const button = document.querySelector('.add-task');\n\n    button.addEventListener('click', () => {\n      _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toggleForm(true, 'task');\n    });\n  }\n\n  return{newProjectClickHandler, formClickHandler, userProjectClickHandler, newTaskClickHandler};\n\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handlers);\n\n//# sourceURL=webpack://todo-list/./src/handlers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers */ \"./src/handlers.js\");\n\n\n\n_dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].showProjects();\n\n_handlers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].newProjectClickHandler();\n_handlers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].formClickHandler();\n_handlers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].userProjectClickHandler();\n_handlers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].newTaskClickHandler();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst projects = (() => {\n  const currentProject = '';\n  const projectsList = [\n    {\n      name: 'Homework',\n      tasks: [\n        {\n          projectIndex: '0',\n          name: 'Deliver tea to Mrs Daniels',\n          date: '06-21-2023'\n        }\n      ]\n    },\n    {\n      name: 'Chores',\n      tasks: [\n        {\n          projectIndex: '1',\n          name: 'Clean up the washroom',\n          date: '02-15-2023'\n        },\n        {\n          projectIndex: '1',\n          name: 'Take out the trash',\n          date: '02-15-2023'\n        }\n      ]\n    }\n  ];\n\n  // implete default projects or local storage stuff here\n\n  class Project {\n    constructor(name) {\n      this.name = name;\n      this.tasks = [];\n    }\n  }\n\n  function addProject (name) {\n    const project = new Project(name);\n    projectsList.push(project);\n  }\n\n  function checkIfProjectExists (name) {\n    for (let i = 0; i < projectsList.length; i++) {\n      if (projectsList[i].name === name) {\n        return true;\n      }\n    }\n    \n    return false;\n  }\n\n  return {projectsList, currentProject, addProject, checkIfProjectExists};\n\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projects);\n\n//# sourceURL=webpack://todo-list/./src/projects.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n\n\nconst tasks = (() => {\n  class Task {\n    constructor(projectIndex, name, date) {\n      this.projectIndex = projectIndex;\n      this.name = name;\n      this.date = date;\n    }\n  }\n\n  function addTask (projectIndex, name, date) {\n    const task = new Task(projectIndex, name, date);\n    _projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projectsList[projectIndex].tasks.push(task);\n  }\n\n  addTask('0', 'Finish essay on WW2', '03-24-2023');\n\n  return {addTask}\n\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tasks);\n\n//# sourceURL=webpack://todo-list/./src/tasks.js?");

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