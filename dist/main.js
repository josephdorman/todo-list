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

eval("// CREATE PROJECT EVENT HANDLERS\n\nfunction addNewProject () {\n  const userProjectList = document.querySelector('.user-project-list');\n\n  const deleteLastChild = () => {\n    const projectList = document.querySelector('.user-project-list');\n    projectList.removeChild(userProjectList.lastElementChild);\n  }\n\n  const createNewProjectButton = () => {\n    const newProjectButton = document.createElement('button');\n    newProjectButton.setAttribute('id', 'new-project');\n    newProjectButton.classList.add('project');\n\n    const newProjectButtonImage = document.createElement('img');\n    newProjectButtonImage.classList.add('icon');\n    newProjectButtonImage.setAttribute('src', './images/icons/plus.svg');\n\n    const text = document.createTextNode('Add New Project');\n\n    newProjectButton.appendChild(newProjectButtonImage);\n    newProjectButton.appendChild(text);\n\n    userProjectList.appendChild(newProjectButton);\n\n    clickHandler();\n\n  }\n\n  const createNewProjectField = () => {\n    const projectCreation = document.createElement('div');\n    projectCreation.classList.add('project-creation');\n\n    const projectInputField = document.createElement('input');\n    projectInputField.setAttribute('type', 'text');\n    projectInputField.setAttribute('id', 'project-creation-field');\n    projectInputField.setAttribute('name', 'project-creation-field');\n\n    const projectCreationAdd = document.createElement('button');\n    const projectCreationCancel = document.createElement('button');\n    projectCreationAdd.setAttribute('id', 'project-creation-add');\n    projectCreationCancel.setAttribute('id', 'project-creation-cancel');\n    projectCreationAdd.classList.add('project-creation-btns');\n    projectCreationCancel.classList.add('project-creation-btns');\n    projectCreationAdd.textContent = 'Add';\n    projectCreationCancel.textContent = 'Cancel';\n\n    projectCreation.appendChild(projectInputField);\n    projectCreation.appendChild(projectCreationAdd);\n    projectCreation.appendChild(projectCreationCancel);\n\n    userProjectList.appendChild(projectCreation);\n\n  }\n\n  const addNewProjectToUserList = () => {\n    const textField = document.getElementById('project-creation-field').value;\n    const text = document.createTextNode(textField);\n\n    const project = document.createElement('button');\n    const projectImage = document.createElement('img');\n\n    project.classList.add('project');\n\n    projectImage.classList.add('icon');\n    projectImage.setAttribute('src', './images/icons/format-list-checks.svg');\n\n    project.appendChild(projectImage);\n    project.appendChild(text);\n\n    userProjectList.insertBefore(project, userProjectList.lastChild);\n\n  }\n\n  const createNewProject = () => {\n    const newProjectLogic = (btnID) => {\n      if (btnID === 'project-creation-add') {\n        addNewProjectToUserList();\n        deleteLastChild();\n        createNewProjectButton();\n\n      }\n      else if (btnID === 'project-creation-cancel') {\n        deleteLastChild();\n        createNewProjectButton();\n\n      }\n\n    }\n    \n    const projectFieldClickHandler = () => {\n      const projectCreationBtns = document.querySelectorAll('.project-creation-btns');\n      projectCreationBtns.forEach((btn) => {\n        btn.addEventListener('click', () => {\n          newProjectLogic(btn.id);\n        });\n      });\n    }\n\n    // create project\n    deleteLastChild();\n    createNewProjectField();\n\n    projectFieldClickHandler();\n\n  }\n\n  const clickHandler = () => {\n    const newProject = document.querySelector('#new-project');\n    newProject.addEventListener('click', createNewProject);\n  }\n\n  clickHandler();\n}\n\naddNewProject();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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