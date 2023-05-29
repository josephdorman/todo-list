/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// CREATE PROJECT EVENT HANDLERS\n\nfunction addNewProject () {\n  const userProjectList = document.querySelector('.user-project-list');\n\n  const removeNewProjectButton = () => {\n    const projectList = document.querySelector('.user-project-list');\n    projectList.removeChild(userProjectList.lastElementChild);\n  }\n\n  const createNewProjectButton = () => {\n\n  }\n\n  const removeNewProjectField = () => {\n\n  }\n\n  const createNewProjectField = () => {\n    const projectCreation = document.createElement('div');\n    projectCreation.classList.add('project-creation');\n\n    const projectInputField = document.createElement('input');\n    projectInputField.setAttribute('type', 'text');\n    projectInputField.setAttribute('id', 'project-creation-field');\n    projectInputField.setAttribute('name', 'project-creation-field');\n\n    const projectCreationAdd = document.createElement('button');\n    const projectCreationCancel = document.createElement('button');\n    projectCreationAdd.classList.add('project-creation-add');\n    projectCreationCancel.classList.add('project-creation-cancel');\n    projectCreationAdd.textContent = 'Add';\n    projectCreationCancel.textContent = 'Cancel';\n\n    projectCreation.appendChild(projectInputField);\n    projectCreation.appendChild(projectCreationAdd);\n    projectCreation.appendChild(projectCreationCancel);\n\n    userProjectList.appendChild(projectCreation);\n\n  }\n\n  const createNewProject = () => {\n    removeNewProjectButton();\n    createNewProjectField();\n  }\n\n  const clickHandler = () => {\n    const newProject = document.querySelector('#new-project');\n    newProject.addEventListener('click', createNewProject);\n  }\n\n  clickHandler();\n}\n\naddNewProject();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;