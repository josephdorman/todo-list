import projects from "./projects";

const dom = (() => {
  function showProjectForm() {
    const userProjects = document.querySelector('.user-project-list');

    const form = document.createElement('div');
    const formField = document.createElement('input');
    const addBtn = document.createElement('button');
    const cancelBtn = document.createElement('button');

    form.classList.add('project-creation');

    formField.setAttribute('id', 'project-creation-field');
    formField.setAttribute('type', 'text');
    formField.setAttribute('name', 'project-title');

    addBtn.classList.add('project-creation-btns');
    addBtn.setAttribute('id', 'project-creation-add');
    addBtn.textContent = 'Add';

    cancelBtn.classList.add('project-creation-btns');
    cancelBtn.setAttribute('id', 'project-creation-cancel');
    cancelBtn.textContent = 'Cancel';

    form.appendChild(formField);
    form.appendChild(addBtn);
    form.appendChild(cancelBtn);

    userProjects.appendChild(form);
  }

  function showAddProjectBtn() {
    const userProjects = document.querySelector('.user-project-list');

    const button = document.createElement('button');
    const icon = document.createElement('img');
    const name = document.createTextNode('Add New Project');

    button.setAttribute('id', 'new-project');
    button.classList.add('project');

    icon.classList.add('icon');
    icon.setAttribute('src', './images/icons/plus.svg');

    button.appendChild(icon);
    button.appendChild(name);
    userProjects.appendChild(button);
  }

  function showProjects() {
    const userProjects = document.querySelector('.user-project-list');

    for (let i = 0; i < projects.projectsList.length; i++) {
      const project = document.createElement('button');
      const projectIcon = document.createElement('img');
      const projectName = document.createTextNode(projects.projectsList[i].name);

      project.classList.add('project');

      projectIcon.classList.add('icon');
      projectIcon.setAttribute('src', './images/icons/format-list-checks.svg');

      project.appendChild(projectIcon);
      project.appendChild(projectName);
      userProjects.appendChild(project);
    }

    showAddProjectBtn()

  }

  return {showProjects, showProjectForm};

})();

export default dom;