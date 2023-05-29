// CREATE PROJECT EVENT HANDLERS

function addNewProject () {
  const userProjectList = document.querySelector('.user-project-list');

  const removeNewProjectButton = () => {
    const projectList = document.querySelector('.user-project-list');
    projectList.removeChild(userProjectList.lastElementChild);
  }

  const createNewProjectButton = () => {

  }

  const removeNewProjectField = () => {

  }

  const createNewProjectField = () => {
    const projectCreation = document.createElement('div');
    projectCreation.classList.add('project-creation');

    const projectInputField = document.createElement('input');
    projectInputField.setAttribute('type', 'text');
    projectInputField.setAttribute('id', 'project-creation-field');
    projectInputField.setAttribute('name', 'project-creation-field');

    const projectCreationAdd = document.createElement('button');
    const projectCreationCancel = document.createElement('button');
    projectCreationAdd.classList.add('project-creation-add');
    projectCreationCancel.classList.add('project-creation-cancel');
    projectCreationAdd.textContent = 'Add';
    projectCreationCancel.textContent = 'Cancel';

    projectCreation.appendChild(projectInputField);
    projectCreation.appendChild(projectCreationAdd);
    projectCreation.appendChild(projectCreationCancel);

    userProjectList.appendChild(projectCreation);

  }

  const createNewProject = () => {
    removeNewProjectButton();
    createNewProjectField();
  }

  const clickHandler = () => {
    const newProject = document.querySelector('#new-project');
    newProject.addEventListener('click', createNewProject);
  }

  clickHandler();
}

addNewProject();