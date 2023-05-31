// CREATE PROJECT EVENT HANDLERS
/*

export default function addNewProject () {
  const userProjectList = document.querySelector('.user-project-list');

  const deleteLastChild = () => {
    const projectList = document.querySelector('.user-project-list');
    projectList.removeChild(userProjectList.lastElementChild);
  }

  const createNewProjectButton = () => {
    const newProjectButton = document.createElement('button');
    newProjectButton.setAttribute('id', 'new-project');
    newProjectButton.classList.add('project');

    const newProjectButtonImage = document.createElement('img');
    newProjectButtonImage.classList.add('icon');
    newProjectButtonImage.setAttribute('src', './images/icons/plus.svg');

    const text = document.createTextNode('Add New Project');

    newProjectButton.appendChild(newProjectButtonImage);
    newProjectButton.appendChild(text);

    userProjectList.appendChild(newProjectButton);

    clickHandler();

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
    projectCreationAdd.setAttribute('id', 'project-creation-add');
    projectCreationCancel.setAttribute('id', 'project-creation-cancel');
    projectCreationAdd.classList.add('project-creation-btns');
    projectCreationCancel.classList.add('project-creation-btns');
    projectCreationAdd.textContent = 'Add';
    projectCreationCancel.textContent = 'Cancel';

    projectCreation.appendChild(projectInputField);
    projectCreation.appendChild(projectCreationAdd);
    projectCreation.appendChild(projectCreationCancel);

    userProjectList.appendChild(projectCreation);

  }

  const addNewProjectToUserList = () => {
    const textField = document.getElementById('project-creation-field').value;
    const text = document.createTextNode(textField);

    const project = document.createElement('button');
    const projectImage = document.createElement('img');

    project.classList.add('project');

    projectImage.classList.add('icon');
    projectImage.setAttribute('src', './images/icons/format-list-checks.svg');

    project.appendChild(projectImage);
    project.appendChild(text);

    userProjectList.insertBefore(project, userProjectList.lastChild);

  }

  const createNewProject = () => {
    const newProjectLogic = (btnID) => {
      if (btnID === 'project-creation-add') {
        addNewProjectToUserList();
        deleteLastChild();
        createNewProjectButton();

      }
      else if (btnID === 'project-creation-cancel') {
        deleteLastChild();
        createNewProjectButton();

      }

    }
    
    const projectFieldClickHandler = () => {
      const projectCreationBtns = document.querySelectorAll('.project-creation-btns');
      projectCreationBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          newProjectLogic(btn.id);
        });
      });
    }

    // create project
    deleteLastChild();
    createNewProjectField();

    projectFieldClickHandler();

  }

  const clickHandler = () => {
    const newProject = document.querySelector('#new-project');
    newProject.addEventListener('click', createNewProject);
  }

  clickHandler();
}
*/